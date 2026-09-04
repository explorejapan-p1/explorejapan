import fs from 'node:fs';
import path from 'node:path';
import {
  FACILITY_CATEGORIES,
  KITAJIMA_EXPECTED_CATEGORY_COUNTS,
  KITAJIMA_EXPECTED_GEO_COUNT,
  KITAJIMA_EXPECTED_HOURS_COUNT,
  KITAJIMA_EXPECTED_MISSING_ADDRESS,
  KITAJIMA_EXPECTED_MISSING_PHONE,
  KITAJIMA_EXPECTED_ROW_COUNT,
  KITAJIMA_PACK_ACCESSED,
  KITAJIMA_PACK_JIS,
  type FacilityCategory,
  type FacilityRow
} from './facility-schema';

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
  if (rows.length !== KITAJIMA_EXPECTED_ROW_COUNT) {
    throw new Error(`kitajima pack row count ${rows.length} != ${KITAJIMA_EXPECTED_ROW_COUNT}`);
  }
  const counts = emptyCounts();
  for (const row of rows) {
    counts[row.category] += 1;
  }
  for (const cat of FACILITY_CATEGORIES) {
    if (counts[cat] !== KITAJIMA_EXPECTED_CATEGORY_COUNTS[cat]) {
      throw new Error(
        `kitajima pack ${cat} ${counts[cat]} != ${KITAJIMA_EXPECTED_CATEGORY_COUNTS[cat]}`
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
  if (geo !== KITAJIMA_EXPECTED_GEO_COUNT) {
    throw new Error(`kitajima pack geo ${geo} != ${KITAJIMA_EXPECTED_GEO_COUNT}`);
  }
  if (hours !== KITAJIMA_EXPECTED_HOURS_COUNT) {
    throw new Error(`kitajima pack hours ${hours} != ${KITAJIMA_EXPECTED_HOURS_COUNT}`);
  }
  if (missingAddress !== KITAJIMA_EXPECTED_MISSING_ADDRESS) {
    throw new Error(
      `kitajima pack address gaps ${missingAddress} != ${KITAJIMA_EXPECTED_MISSING_ADDRESS}`
    );
  }
  if (missingPhone !== KITAJIMA_EXPECTED_MISSING_PHONE) {
    throw new Error(
      `kitajima pack phone gaps ${missingPhone} != ${KITAJIMA_EXPECTED_MISSING_PHONE}`
    );
  }
  return rows;
}

export const KITAJIMA_FACILITIES: readonly FacilityRow[] = loadKitajimaFacilities();
