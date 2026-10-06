import fs from 'node:fs';
import path from 'node:path';
import {
  FACILITY_CATEGORIES,
  MIMA_PACK_JIS,
  PACK_ACCESSED,
  type FacilityCategory,
  type FacilityGapBoard,
  type FacilityRow,
  type OfficialMapPoint
} from './facility-schema';

/** Frozen jsonl baselines (before EXTRA bath rows). */
const PACK_ROW_COUNT = 515;
const PACK_GEO_COUNT = 61;
const PACK_HOURS_COUNT = 178;
const PACK_MISSING_ADDRESS = 110;
const PACK_MISSING_PHONE = 374;
const PACK_CATEGORY_COUNTS: Record<FacilityCategory, number> = {
  tourism: 116,
  cultural_property: 110,
  care: 80,
  aed: 72,
  shelter: 45,
  emergency_evacuation_site: 40,
  hospital: 23,
  childcare: 16,
  wifi: 9,
  public_facility: 4,
  gtfs_stop: 0
};

const PACK_PATH = path.join(process.cwd(), 'data', 'frozen', 'mima-facilities.jsonl');

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

function parseJis(value: unknown): typeof MIMA_PACK_JIS {
  if (value !== MIMA_PACK_JIS) {
    throw new Error(`facility jis must be ${MIMA_PACK_JIS}`);
  }
  return MIMA_PACK_JIS;
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
  if (accessed !== PACK_ACCESSED) {
    throw new Error(`facility accessed must be ${PACK_ACCESSED}`);
  }
  const row = {
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
  return row;
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

function tallyGaps(rows: readonly FacilityRow[]): FacilityGapBoard {
  let geo = 0;
  let hours = 0;
  let missingAddress = 0;
  let missingPhone = 0;
  let gtfs = 0;
  for (const row of rows) {
    if (row.lat !== null && row.lon !== null) geo += 1;
    if (!isBlank(row.hours)) hours += 1;
    if (isBlank(row.address)) missingAddress += 1;
    if (isBlank(row.phone)) missingPhone += 1;
    if (row.category === 'gtfs_stop') gtfs += 1;
  }
  return {
    total: rows.length,
    geo,
    hours,
    missingAddress,
    missingPhone,
    gtfs
  };
}

function loadMimaFacilities(): readonly FacilityRow[] {
  const text = fs.readFileSync(PACK_PATH, 'utf8');
  const rows: FacilityRow[] = [];
  for (const line of text.split('\n')) {
    if (line.trim() === '') continue;
    const parsed: unknown = JSON.parse(line);
    rows.push(parseFacilityRow(parsed));
  }
  if (rows.length !== PACK_ROW_COUNT) {
    throw new Error(`mima pack row count ${rows.length} != ${PACK_ROW_COUNT}`);
  }
  const counts = emptyCounts();
  for (const row of rows) {
    counts[row.category] += 1;
  }
  for (const cat of FACILITY_CATEGORIES) {
    if (counts[cat] !== PACK_CATEGORY_COUNTS[cat]) {
      throw new Error(`mima pack ${cat} ${counts[cat]} != ${PACK_CATEGORY_COUNTS[cat]}`);
    }
  }
  const gaps = tallyGaps(rows);
  if (gaps.geo !== PACK_GEO_COUNT) {
    throw new Error(`mima pack geo ${gaps.geo} != ${PACK_GEO_COUNT}`);
  }
  if (gaps.hours !== PACK_HOURS_COUNT) {
    throw new Error(`mima pack hours ${gaps.hours} != ${PACK_HOURS_COUNT}`);
  }
  if (gaps.missingAddress !== PACK_MISSING_ADDRESS) {
    throw new Error(`mima pack address gaps ${gaps.missingAddress} != ${PACK_MISSING_ADDRESS}`);
  }
  if (gaps.missingPhone !== PACK_MISSING_PHONE) {
    throw new Error(`mima pack phone gaps ${gaps.missingPhone} != ${PACK_MISSING_PHONE}`);
  }
  return rows;
}

const MIMA_EXTRA_FACILITIES: readonly FacilityRow[] = [
  {
    id: 'mima-extra-aburaya',
    jis: MIMA_PACK_JIS,
    name_ja: '油屋 美馬館 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '美馬市穴吹町穴吹市ノ下100-6',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/67468/67468.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/67468/67468.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'mima-extra-bluevilla',
    jis: MIMA_PACK_JIS,
    name_ja: 'ブルーヴィラあなぶき 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '美馬市穴吹町口山丸山1',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/167767/167767.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/167767/167767.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'mima-extra-seigetsu',
    jis: MIMA_PACK_JIS,
    name_ja: '清月屋敷 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '美馬市穴吹町穴吹字市ノ下100-6',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/183424/183424.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/183424/183424.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  }
];

export const MIMA_FACILITIES: readonly FacilityRow[] = [
  ...loadMimaFacilities(),
  ...MIMA_EXTRA_FACILITIES
];

export function facilityGapBoard(
  rows: readonly FacilityRow[] = MIMA_FACILITIES
): FacilityGapBoard {
  return tallyGaps(rows);
}

export function officialPackRows(
  rows: readonly FacilityRow[] = MIMA_FACILITIES
): FacilityRow[] {
  return rows.filter((row) => row.lat !== null && row.lon !== null);
}

export function officialGeoRows(
  rows: readonly FacilityRow[] = MIMA_FACILITIES
): OfficialMapPoint[] {
  const out: OfficialMapPoint[] = [];
  for (const row of officialPackRows(rows)) {
    if (row.lat === null || row.lon === null) continue;
    out.push({
      id: row.id,
      name_ja: row.name_ja,
      category: row.category,
      lat: row.lat,
      lon: row.lon
    });
  }
  return out;
}
