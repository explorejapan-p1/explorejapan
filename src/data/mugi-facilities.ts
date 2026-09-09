import fs from 'node:fs';
import path from 'node:path';
import {
  FACILITY_CATEGORIES,
  MUGI_PACK_ACCESSED,
  MUGI_PACK_JIS,
  type FacilityCategory,
  type FacilityRow
} from './facility-schema';

/** Frozen jsonl baselines (before Commons extras). */
const PACK_ROW_COUNT = 159;
const PACK_GEO_COUNT = 122;
const PACK_HOURS_COUNT = 159;
const PACK_MISSING_ADDRESS = 7;
const PACK_MISSING_PHONE = 118;
const PACK_CATEGORY_COUNTS: Record<FacilityCategory, number> = {
  tourism: 1,
  cultural_property: 22,
  care: 1,
  aed: 0,
  shelter: 34,
  emergency_evacuation_site: 78,
  hospital: 6,
  childcare: 2,
  wifi: 0,
  public_facility: 15,
  gtfs_stop: 0
};

const PACK_PATH = path.join(process.cwd(), 'data', 'frozen', 'mugi-facilities.jsonl');

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
  if (value !== MUGI_PACK_JIS) {
    throw new Error(`facility jis must be ${MUGI_PACK_JIS}`);
  }
  return MUGI_PACK_JIS;
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
  if (accessed !== MUGI_PACK_ACCESSED) {
    throw new Error(`facility accessed must be ${MUGI_PACK_ACCESSED}`);
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

function loadNakaFacilities(): readonly FacilityRow[] {
  const text = fs.readFileSync(PACK_PATH, 'utf8');
  const rows: FacilityRow[] = [];
  for (const line of text.split('\n')) {
    if (line.trim() === '') continue;
    const parsed: unknown = JSON.parse(line);
    rows.push(parseFacilityRow(parsed));
  }
  if (rows.length !== PACK_ROW_COUNT) {
    throw new Error(`naka pack row count ${rows.length} != ${PACK_ROW_COUNT}`);
  }
  const counts = emptyCounts();
  for (const row of rows) {
    counts[row.category] += 1;
  }
  for (const cat of FACILITY_CATEGORIES) {
    if (counts[cat] !== PACK_CATEGORY_COUNTS[cat]) {
      throw new Error(
        `naka pack ${cat} ${counts[cat]} != ${PACK_CATEGORY_COUNTS[cat]}`
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
    throw new Error(`naka pack geo ${geo} != ${PACK_GEO_COUNT}`);
  }
  if (hours !== PACK_HOURS_COUNT) {
    throw new Error(`naka pack hours ${hours} != ${PACK_HOURS_COUNT}`);
  }
  if (missingAddress !== PACK_MISSING_ADDRESS) {
    throw new Error(
      `naka pack address gaps ${missingAddress} != ${PACK_MISSING_ADDRESS}`
    );
  }
  if (missingPhone !== PACK_MISSING_PHONE) {
    throw new Error(
      `naka pack phone gaps ${missingPhone} != ${PACK_MISSING_PHONE}`
    );
  }
  return rows;
}

/** EXTRA tourism rows (not frozen jsonl). Commons sights + bath stills — HARD BAR stay≠onsen. */
const MUGI_EXTRA_FACILITIES: readonly FacilityRow[] = [
  {
    id: 'mugi-extra-hachiman',
    jis: MUGI_PACK_JIS,
    name_ja: '牟岐八幡神社',
    reading: 'むぎはちまんじんじゃ',
    category: 'tourism',
    lat: 33.668,
    lon: 134.421,
    address: '徳島県海部郡牟岐町中村',
    phone: null,
    official_url: 'https://www.town.tokushima-mugi.lg.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/File:%E7%89%9F%E5%B2%90%E5%85%AB%E5%B9%A1%E7%A5%9E%E7%A4%BE_%E6%8B%9D%E6%AE%BF.jpg',
    license: 'cc_by_open_data',
    accessed: MUGI_PACK_ACCESSED
  },
  {
    id: 'mugi-extra-river',
    jis: MUGI_PACK_JIS,
    name_ja: '牟岐川',
    reading: 'むぎがわ',
    category: 'tourism',
    lat: 33.67,
    lon: 134.42,
    address: '徳島県海部郡牟岐町',
    phone: null,
    official_url: 'https://www.town.tokushima-mugi.lg.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/File:Mugi_river_Tokushima.jpg',
    license: 'cc_by_open_data',
    accessed: MUGI_PACK_ACCESSED
  },
  {
    id: 'mugi-extra-katayama-daiyoku',
    jis: MUGI_PACK_JIS,
    name_ja: '砂美かたやま 大浴場',
    reading: 'さみかたやまだいよくじょう',
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県海部郡牟岐町灘下浜辺6-1',
    phone: '0884-72-1727',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/164686/164686.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/164686/164686.html',
    license: 'cc_by_open_data',
    accessed: MUGI_PACK_ACCESSED
  }
];

export const MUGI_FACILITIES: readonly FacilityRow[] = [
  ...loadNakaFacilities(),
  ...MUGI_EXTRA_FACILITIES
];
