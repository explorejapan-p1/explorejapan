import fs from 'node:fs';
import path from 'node:path';
import {
  FACILITY_CATEGORIES,
  KAMIITA_PACK_ACCESSED,
  KAMIITA_PACK_JIS,
  type FacilityCategory,
  type FacilityRow
} from './facility-schema';

/** Frozen jsonl baselines (before Rakuten/Commons extras). */
const PACK_ROW_COUNT = 97;
const PACK_GEO_COUNT = 34;
const PACK_HOURS_COUNT = 87;
const PACK_MISSING_ADDRESS = 39;
const PACK_MISSING_PHONE = 53;
const PACK_CATEGORY_COUNTS: Record<FacilityCategory, number> = {
  tourism: 9,
  cultural_property: 14,
  care: 1,
  aed: 30,
  shelter: 10,
  emergency_evacuation_site: 13,
  hospital: 0,
  childcare: 10,
  wifi: 0,
  public_facility: 10,
  gtfs_stop: 0
};

const PACK_PATH = path.join(process.cwd(), 'data', 'frozen', 'kamiita-facilities.jsonl');

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
  if (value !== KAMIITA_PACK_JIS) {
    throw new Error(`facility jis must be ${KAMIITA_PACK_JIS}`);
  }
  return KAMIITA_PACK_JIS;
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
  if (accessed !== KAMIITA_PACK_ACCESSED) {
    throw new Error(`facility accessed must be ${KAMIITA_PACK_ACCESSED}`);
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

function loadItanoFacilities(): readonly FacilityRow[] {
  const text = fs.readFileSync(PACK_PATH, 'utf8');
  const rows: FacilityRow[] = [];
  for (const line of text.split('\n')) {
    if (line.trim() === '') continue;
    const parsed: unknown = JSON.parse(line);
    rows.push(parseFacilityRow(parsed));
  }
  if (rows.length !== PACK_ROW_COUNT) {
    throw new Error(`kamiita pack row count ${rows.length} != ${PACK_ROW_COUNT}`);
  }
  const counts = emptyCounts();
  for (const row of rows) {
    counts[row.category] += 1;
  }
  for (const cat of FACILITY_CATEGORIES) {
    if (counts[cat] !== PACK_CATEGORY_COUNTS[cat]) {
      throw new Error(
        `kamiita pack ${cat} ${counts[cat]} != ${PACK_CATEGORY_COUNTS[cat]}`
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
    throw new Error(`kamiita pack geo ${geo} != ${PACK_GEO_COUNT}`);
  }
  if (hours !== PACK_HOURS_COUNT) {
    throw new Error(`kamiita pack hours ${hours} != ${PACK_HOURS_COUNT}`);
  }
  if (missingAddress !== PACK_MISSING_ADDRESS) {
    throw new Error(
      `kamiita pack address gaps ${missingAddress} != ${PACK_MISSING_ADDRESS}`
    );
  }
  if (missingPhone !== PACK_MISSING_PHONE) {
    throw new Error(
      `kamiita pack phone gaps ${missingPhone} != ${PACK_MISSING_PHONE}`
    );
  }
  return rows;
}

/** Commons/Rakuten-backed extras (not frozen jsonl). Real place-named 出典 only. */
const KAMIITA_EXTRA_FACILITIES: readonly FacilityRow[] = [
  {
    id: 'kamiita-extra-anrakuji-bath',
    jis: KAMIITA_PACK_JIS,
    name_ja: '温泉山　安楽寺　薬師の里 大浴場',
    reading: 'おんせんざんあんらくじやくしのさとだいよくじょう',
    category: 'tourism',
    lat: 34.1217,
    lon: 134.4058,
    address: '徳島県板野郡上板町引野字寺の西北8',
    phone: '088-694-2046',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/164637/164637.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/164637/gallery.html',
    license: 'cc_by_open_data',
    accessed: KAMIITA_PACK_ACCESSED
  }
];

export const KAMIITA_FACILITIES: readonly FacilityRow[] = [
  ...loadItanoFacilities(),
  ...KAMIITA_EXTRA_FACILITIES
];
