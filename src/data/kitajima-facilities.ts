import fs from 'node:fs';
import path from 'node:path';
import {
  FACILITY_CATEGORIES,
  KITAJIMA_PACK_ACCESSED,
  KITAJIMA_PACK_JIS,
  type FacilityCategory,
  type FacilityRow
} from './facility-schema';

/** Frozen jsonl baselines (before Commons extras). */
const PACK_ROW_COUNT = 209;
const PACK_GEO_COUNT = 116;
const PACK_HOURS_COUNT = 209;
const PACK_MISSING_ADDRESS = 0;
const PACK_MISSING_PHONE = 72;
const PACK_CATEGORY_COUNTS: Record<FacilityCategory, number> = {
  tourism: 2,
  cultural_property: 28,
  care: 1,
  aed: 21,
  shelter: 31,
  emergency_evacuation_site: 50,
  hospital: 29,
  childcare: 19,
  wifi: 0,
  public_facility: 28,
  gtfs_stop: 0
};

const PACK_PATH = path.join(process.cwd(), 'data', 'frozen', 'kitajima-facilities.jsonl');

function pick(raw: object, key: string): unknown {
  if (!Object.hasOwn(raw, key)) {
    throw new Error(`facility missing ${key}`);
  }
  return Reflect.get(raw, key);
}

function requireString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`facility ${field} must be a non-empty string`);
  }
  return value;
}

function optionalString(value: unknown, field: string): string | null {
  if (value === null) return null;
  if (typeof value === 'string') return value;
  throw new Error(`facility ${field} must be string or null`);
}

function optionalNumber(value: unknown, field: string): number | null {
  if (value === null) return null;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  throw new Error(`facility ${field} must be number or null`);
}

function parseJis(value: unknown): string {
  if (value !== KITAJIMA_PACK_JIS) {
    throw new Error(`facility jis must be ${KITAJIMA_PACK_JIS}`);
  }
  return KITAJIMA_PACK_JIS;
}

function parseCategory(value: unknown): FacilityCategory {
  if (typeof value !== 'string') {
    throw new Error('facility category must be a string');
  }
  for (const cat of FACILITY_CATEGORIES) {
    if (cat === value) return cat;
  }
  throw new Error(`facility category is outside the closed set: ${value}`);
}

function parseFacilityRow(raw: unknown): FacilityRow {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    throw new Error('facility row must be an object');
  }
  const accessed = requireString(pick(raw, 'accessed'), 'accessed');
  if (accessed !== KITAJIMA_PACK_ACCESSED) {
    throw new Error(`facility accessed must be ${KITAJIMA_PACK_ACCESSED}`);
  }
  return {
    id: requireString(pick(raw, 'id'), 'id'),
    jis: parseJis(pick(raw, 'jis')),
    name_ja: requireString(pick(raw, 'name_ja'), 'name_ja'),
    reading: optionalString(pick(raw, 'reading'), 'reading'),
    category: parseCategory(pick(raw, 'category')),
    lat: optionalNumber(pick(raw, 'lat'), 'lat'),
    lon: optionalNumber(pick(raw, 'lon'), 'lon'),
    address: optionalString(pick(raw, 'address'), 'address'),
    phone: optionalString(pick(raw, 'phone'), 'phone'),
    official_url: optionalString(pick(raw, 'official_url'), 'official_url'),
    hours: optionalString(pick(raw, 'hours'), 'hours'),
    source_url: requireString(pick(raw, 'source_url'), 'source_url'),
    license: requireString(pick(raw, 'license'), 'license'),
    accessed
  } satisfies FacilityRow;
}

function emptyCounts(): Record<FacilityCategory, number> {
  return {
    tourism: 0,
    cultural_property: 0,
    care: 0,
    aed: 0,
    shelter: 0,
    emergency_evacuation_site: 0,
    hospital: 0,
    childcare: 0,
    wifi: 0,
    public_facility: 0,
    gtfs_stop: 0
  };
}

function isBlank(value: string | null): boolean {
  return value === null || value.trim() === '';
}

function loadKitajimaFacilities(): readonly FacilityRow[] {
  const text = fs.readFileSync(PACK_PATH, 'utf8');
  const rows: FacilityRow[] = [];
  for (const line of text.split('\n')) {
    if (line.trim() === '') continue;
    const parsed: unknown = JSON.parse(line);
    rows.push(parseFacilityRow(parsed));
  }
  if (rows.length !== PACK_ROW_COUNT) {
    throw new Error(`kitajima pack row count ${rows.length} != ${PACK_ROW_COUNT}`);
  }
  const counts = emptyCounts();
  for (const row of rows) {
    counts[row.category] += 1;
  }
  for (const cat of FACILITY_CATEGORIES) {
    if (counts[cat] !== PACK_CATEGORY_COUNTS[cat]) {
      throw new Error(
        `kitajima pack ${cat} ${counts[cat]} != ${PACK_CATEGORY_COUNTS[cat]}`
      );
    }
  }
  let geo = 0;
  let hours = 0;
  let missingAddress = 0;
  let missingPhone = 0;
  for (const row of rows) {
    if (row.lat !== null && row.lon !== null) geo += 1;
    if (!isBlank(row.hours)) hours += 1;
    if (isBlank(row.address)) missingAddress += 1;
    if (isBlank(row.phone)) missingPhone += 1;
  }
  if (geo !== PACK_GEO_COUNT) {
    throw new Error(`kitajima pack geo ${geo} != ${PACK_GEO_COUNT}`);
  }
  if (hours !== PACK_HOURS_COUNT) {
    throw new Error(`kitajima pack hours ${hours} != ${PACK_HOURS_COUNT}`);
  }
  if (missingAddress !== PACK_MISSING_ADDRESS) {
    throw new Error(
      `kitajima pack address gaps ${missingAddress} != ${PACK_MISSING_ADDRESS}`
    );
  }
  if (missingPhone !== PACK_MISSING_PHONE) {
    throw new Error(
      `kitajima pack phone gaps ${missingPhone} != ${PACK_MISSING_PHONE}`
    );
  }
  return rows;
}

/** Commons-backed extras (not frozen jsonl). Real place-named 出典 only. */
const KITAJIMA_EXTRA_FACILITIES: readonly FacilityRow[] = [
  {
    id: 'kitajima-extra-taihama-bashi',
    jis: KITAJIMA_PACK_JIS,
    name_ja: '鯛浜橋',
    reading: 'たいはまばし',
    category: 'tourism',
    lat: 34.1139,
    lon: 134.548,
    address: '徳島県板野郡北島町鯛浜',
    phone: null,
    official_url: 'https://www.town.kitajima.lg.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/File:%E4%BB%8A%E5%88%87%E5%B7%9D%E3%81%A8%E9%AF%9B%E6%B5%9C%E6%A9%8B.jpg',
    license: 'cc_by_open_data',
    accessed: KITAJIMA_PACK_ACCESSED
  },
  {
    id: 'kitajima-extra-kyu-yoshinogawa',
    jis: KITAJIMA_PACK_JIS,
    name_ja: '旧吉野川',
    reading: 'きゅうよしのがわ',
    category: 'tourism',
    lat: 34.134675,
    lon: 134.530092,
    address: '徳島県板野郡北島町',
    phone: null,
    official_url: 'https://www.town.kitajima.lg.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/File:Kyu-Yoshinogawa_River_from_train_of_Kotoku_Line.JPG',
    license: 'cc_by_open_data',
    accessed: KITAJIMA_PACK_ACCESSED
  },
  {
    id: 'kitajima-extra-sosei-hall',
    jis: KITAJIMA_PACK_JIS,
    name_ja: '北島町立図書館・創世ホール',
    reading: 'きたじまちょうりつとしょかん・そうせいホール',
    category: 'tourism',
    lat: 34.125377,
    lon: 134.546599,
    address: '徳島県板野郡北島町新喜来字南古田91',
    phone: null,
    official_url: 'https://www.town.kitajima.lg.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/File:%E3%82%B5%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%95%E5%8C%97%E5%B3%B6%E3%81%A8%E5%8C%97%E5%B3%B6%E7%94%BA%E7%AB%8B%E5%9B%B3%E6%9B%B8%E9%A4%A8%E3%83%BB%E5%89%B5%E4%B8%96%E3%83%9B%E3%83%BC%E3%83%AB_-_panoramio.jpg',
    license: 'cc_by_open_data',
    accessed: KITAJIMA_PACK_ACCESSED
  },
  {
    id: 'kitajima-extra-aqua',
    jis: KITAJIMA_PACK_JIS,
    name_ja: 'アクアプラザ',
    reading: 'あくあぷらざ',
    category: 'tourism',
    lat: 34.1255,
    lon: 134.5475,
    address: '徳島県板野郡北島町新喜来字南古田',
    phone: null,
    official_url: 'https://www.town.kitajima.lg.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/File:Aquaplaza.JPG',
    license: 'cc_by_open_data',
    accessed: KITAJIMA_PACK_ACCESSED
  }
];

export const KITAJIMA_FACILITIES: readonly FacilityRow[] = [
  ...loadKitajimaFacilities(),
  ...KITAJIMA_EXTRA_FACILITIES
];
