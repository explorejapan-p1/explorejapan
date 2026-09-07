import fs from 'node:fs';
import path from 'node:path';
import {
  FACILITY_CATEGORIES,
  SANAGOCHI_PACK_ACCESSED,
  SANAGOCHI_PACK_JIS,
  type FacilityCategory,
  type FacilityRow
} from './facility-schema';

/** Frozen jsonl baselines (before Commons extras). */
const PACK_ROW_COUNT = 67;
const PACK_GEO_COUNT = 17;
const PACK_HOURS_COUNT = 49;
const PACK_MISSING_ADDRESS = 20;
const PACK_MISSING_PHONE = 41;
const PACK_CATEGORY_COUNTS: Record<FacilityCategory, number> = {
  tourism: 4,
  cultural_property: 6,
  care: 1,
  aed: 15,
  shelter: 13,
  emergency_evacuation_site: 19,
  hospital: 1,
  childcare: 3,
  wifi: 4,
  public_facility: 1,
  gtfs_stop: 0
};

const PACK_PATH = path.join(process.cwd(), 'data', 'frozen', 'sanagochi-facilities.jsonl');

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
  if (value !== SANAGOCHI_PACK_JIS) {
    throw new Error(`facility jis must be ${SANAGOCHI_PACK_JIS}`);
  }
  return SANAGOCHI_PACK_JIS;
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
  if (accessed !== SANAGOCHI_PACK_ACCESSED) {
    throw new Error(`facility accessed must be ${SANAGOCHI_PACK_ACCESSED}`);
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

function loadKatsuuraFacilities(): readonly FacilityRow[] {
  const text = fs.readFileSync(PACK_PATH, 'utf8');
  const rows: FacilityRow[] = [];
  for (const line of text.split('\n')) {
    if (line.trim() === '') continue;
    const parsed: unknown = JSON.parse(line);
    rows.push(parseFacilityRow(parsed));
  }
  if (rows.length !== PACK_ROW_COUNT) {
    throw new Error(`sanagochi pack row count ${rows.length} != ${PACK_ROW_COUNT}`);
  }
  const counts = emptyCounts();
  for (const row of rows) {
    counts[row.category] += 1;
  }
  for (const cat of FACILITY_CATEGORIES) {
    if (counts[cat] !== PACK_CATEGORY_COUNTS[cat]) {
      throw new Error(
        `sanagochi pack ${cat} ${counts[cat]} != ${PACK_CATEGORY_COUNTS[cat]}`
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
    throw new Error(`sanagochi pack geo ${geo} != ${PACK_GEO_COUNT}`);
  }
  if (hours !== PACK_HOURS_COUNT) {
    throw new Error(`sanagochi pack hours ${hours} != ${PACK_HOURS_COUNT}`);
  }
  if (missingAddress !== PACK_MISSING_ADDRESS) {
    throw new Error(
      `sanagochi pack address gaps ${missingAddress} != ${PACK_MISSING_ADDRESS}`
    );
  }
  if (missingPhone !== PACK_MISSING_PHONE) {
    throw new Error(
      `sanagochi pack phone gaps ${missingPhone} != ${PACK_MISSING_PHONE}`
    );
  }
  return rows;
}

/** Commons-backed extras (not frozen jsonl). Real place-named 出典 only. */
const SANAGOCHI_EXTRA_FACILITIES: readonly FacilityRow[] = [
  {
    id: 'sanagochi-extra-okawara-bokujo',
    jis: SANAGOCHI_PACK_JIS,
    name_ja: '大川原放牧場',
    reading: 'おおかわらぼくじょう',
    category: 'tourism',
    lat: 33.95,
    lon: 134.45,
    address: '徳島県名東郡佐那河内村大川原',
    phone: null,
    official_url: 'https://www.vill.sanagochi.lg.jp/kankoevent/kanko.html',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%B7%9D%E5%8E%9F%E6%94%BE%E7%89%A7%E5%A0%B4_-_panoramio.jpg',
    license: 'cc_by_open_data',
    accessed: SANAGOCHI_PACK_ACCESSED
  }
];

export const SANAGOCHI_FACILITIES: readonly FacilityRow[] = [
  ...loadKatsuuraFacilities(),
  ...SANAGOCHI_EXTRA_FACILITIES
];
