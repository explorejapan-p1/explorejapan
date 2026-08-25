import fs from 'node:fs';
import path from 'node:path';

const PACK_REL = path.join('data', 'frozen', 'mima-facilities.jsonl');
const EXPECTED_TOTAL = 515;
const MIMA_JIS = '36207';

const FACILITY_CATEGORIES = [
  'shelter',
  'emergency_evacuation_site',
  'cultural_property',
  'aed',
  'public_facility',
  'tourism',
  'childcare',
  'hospital',
  'care',
  'wifi'
] as const;

export type FacilityCategory = (typeof FACILITY_CATEGORIES)[number];

export type Facility = {
  id: string;
  jis: string;
  name_ja: string;
  reading: string | null;
  category: FacilityCategory;
  lat: number | null;
  lon: number | null;
  address: string | null;
  phone: string | null;
  official_url: string | null;
  hours: string | null;
  source_url: string;
  license: string;
  accessed: string;
};

export type UnpublishedField =
  | 'reading'
  | 'lat'
  | 'lon'
  | 'address'
  | 'phone'
  | 'official_url'
  | 'hours';

const UNPUBLISHED_FIELDS: readonly UnpublishedField[] = [
  'reading',
  'lat',
  'lon',
  'address',
  'phone',
  'official_url',
  'hours'
];

const EXPECTED_COUNTS: Record<FacilityCategory, number> = {
  shelter: 45,
  emergency_evacuation_site: 40,
  cultural_property: 110,
  aed: 72,
  public_facility: 4,
  tourism: 116,
  childcare: 16,
  hospital: 23,
  care: 80,
  wifi: 9
};

function isFacilityCategory(value: string): value is FacilityCategory {
  switch (value) {
    case 'shelter':
    case 'emergency_evacuation_site':
    case 'cultural_property':
    case 'aed':
    case 'public_facility':
    case 'tourism':
    case 'childcare':
    case 'hospital':
    case 'care':
    case 'wifi':
      return true;
    default:
      return false;
  }
}

function readString(record: object, key: string, lineNo: number): string {
  const value = Reflect.get(record, key);
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`mima facilities line ${lineNo}: ${key} must be a non-empty string`);
  }
  return value;
}

function readStringOrNull(record: object, key: string, lineNo: number): string | null {
  const value = Reflect.get(record, key);
  if (value === null) return null;
  if (typeof value === 'string') return value;
  throw new Error(`mima facilities line ${lineNo}: ${key} must be string or null`);
}

function readNumberOrNull(record: object, key: string, lineNo: number): number | null {
  const value = Reflect.get(record, key);
  if (value === null) return null;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  throw new Error(`mima facilities line ${lineNo}: ${key} must be a finite number or null`);
}

function parseFacility(line: string, lineNo: number): Facility {
  const parsed = JSON.parse(line);
  if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`mima facilities line ${lineNo}: expected an object`);
  }
  const categoryRaw = readString(parsed, 'category', lineNo);
  if (!isFacilityCategory(categoryRaw)) {
    throw new Error(`mima facilities line ${lineNo}: closed category rejected ${categoryRaw}`);
  }
  const jis = readString(parsed, 'jis', lineNo);
  if (jis !== MIMA_JIS) {
    throw new Error(`mima facilities line ${lineNo}: jis must be ${MIMA_JIS}`);
  }
  return {
    id: readString(parsed, 'id', lineNo),
    jis,
    name_ja: readString(parsed, 'name_ja', lineNo),
    reading: readStringOrNull(parsed, 'reading', lineNo),
    category: categoryRaw,
    lat: readNumberOrNull(parsed, 'lat', lineNo),
    lon: readNumberOrNull(parsed, 'lon', lineNo),
    address: readStringOrNull(parsed, 'address', lineNo),
    phone: readStringOrNull(parsed, 'phone', lineNo),
    official_url: readStringOrNull(parsed, 'official_url', lineNo),
    hours: readStringOrNull(parsed, 'hours', lineNo),
    source_url: readString(parsed, 'source_url', lineNo),
    license: readString(parsed, 'license', lineNo),
    accessed: readString(parsed, 'accessed', lineNo)
  };
}

function emptyCounts(): Record<FacilityCategory, number> {
  return {
    shelter: 0,
    emergency_evacuation_site: 0,
    cultural_property: 0,
    aed: 0,
    public_facility: 0,
    tourism: 0,
    childcare: 0,
    hospital: 0,
    care: 0,
    wifi: 0
  };
}

function loadPack(): {rows: Facility[]; counts: Record<FacilityCategory, number>} {
  const packPath = path.join(process.cwd(), PACK_REL);
  const text = fs.readFileSync(packPath, 'utf8');
  const rows: Facility[] = [];
  let lineNo = 0;
  for (const line of text.split('\n')) {
    lineNo += 1;
    if (line.trim() === '') continue;
    rows.push(parseFacility(line, lineNo));
  }
  if (rows.length !== EXPECTED_TOTAL) {
    throw new Error(`mima facilities: expected ${EXPECTED_TOTAL} rows, got ${rows.length}`);
  }
  const counts = emptyCounts();
  for (const row of rows) {
    if (row.jis !== MIMA_JIS) {
      throw new Error(`mima facilities: ${row.id} jis is ${row.jis}, not ${MIMA_JIS}`);
    }
    counts[row.category] += 1;
  }
  for (const category of FACILITY_CATEGORIES) {
    if (counts[category] !== EXPECTED_COUNTS[category]) {
      throw new Error(
        `mima facilities: ${category} count ${counts[category]} != ${EXPECTED_COUNTS[category]}`
      );
    }
  }
  return {rows, counts};
}

const loaded = loadPack();

export const FACILITIES: readonly Facility[] = Object.freeze(loaded.rows);
export const COUNTS: Readonly<Record<FacilityCategory, number>> = Object.freeze(loaded.counts);
export const TOTAL = FACILITIES.length;
export const JIS = MIMA_JIS;

export function missingFields(row: Facility): UnpublishedField[] {
  const missing: UnpublishedField[] = [];
  for (const field of UNPUBLISHED_FIELDS) {
    if (row[field] === null) missing.push(field);
  }
  return missing;
}
