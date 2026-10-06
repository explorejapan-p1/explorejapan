import fs from 'node:fs';
import path from 'node:path';
import {
  FACILITY_CATEGORIES,
  KAIYO_PACK_ACCESSED,
  KAIYO_PACK_JIS,
  type FacilityCategory,
  type FacilityRow
} from './facility-schema';

/** Frozen jsonl baselines (before Commons extras). */
const PACK_ROW_COUNT = 280;
const PACK_GEO_COUNT = 154;
const PACK_HOURS_COUNT = 280;
const PACK_MISSING_ADDRESS = 68;
const PACK_MISSING_PHONE = 180;
const PACK_CATEGORY_COUNTS: Record<FacilityCategory, number> = {
  tourism: 6,
  cultural_property: 19,
  care: 1,
  aed: 32,
  shelter: 41,
  emergency_evacuation_site: 79,
  hospital: 13,
  childcare: 6,
  wifi: 0,
  public_facility: 15,
  gtfs_stop: 68
};

const PACK_PATH = path.join(process.cwd(), 'data', 'frozen', 'kaiyo-facilities.jsonl');

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
  if (value !== KAIYO_PACK_JIS) {
    throw new Error(`facility jis must be ${KAIYO_PACK_JIS}`);
  }
  return KAIYO_PACK_JIS;
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
  if (accessed !== KAIYO_PACK_ACCESSED) {
    throw new Error(`facility accessed must be ${KAIYO_PACK_ACCESSED}`);
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
const KAIYO_EXTRA_FACILITIES: readonly FacilityRow[] = [
  {
    id: 'kaiyo-extra-todoroki',
    jis: KAIYO_PACK_JIS,
    name_ja: '轟九十九滝',
    reading: 'とどろきくじゅうくたき',
    category: 'tourism',
    lat: 33.6015,
    lon: 134.3525,
    address: '徳島県海部郡海陽町平井轟',
    phone: null,
    official_url: 'https://www.awanavi.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/Category:Todoroki_99_Waterfalls',
    license: 'cc_by_open_data',
    accessed: KAIYO_PACK_ACCESSED
  },
  {
    id: 'kaiyo-extra-marine-jam',
    jis: KAIYO_PACK_JIS,
    name_ja: '海陽町海洋自然博物館マリンジャム',
    reading: 'かいようちょうかいようしぜんはくぶつかんまりんじゃむ',
    category: 'tourism',
    lat: 33.55,
    lon: 134.3,
    address: '徳島県海部郡海陽町芝',
    phone: null,
    official_url: 'https://www.town.kaiyo.lg.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/Category:Kaiyo_Town_Marine_Nature_Museum_Marine_Jam',
    license: 'cc_by_open_data',
    accessed: KAIYO_PACK_ACCESSED
  },
  {
    id: 'kaiyo-extra-oosuna',
    jis: KAIYO_PACK_JIS,
    name_ja: '大砂海岸',
    reading: 'おおすなかいがん',
    category: 'tourism',
    lat: 33.59,
    lon: 134.37,
    address: '徳島県海部郡海陽町浅川大砂',
    phone: null,
    official_url: 'https://www.town.kaiyo.lg.jp/',
    hours: null,
    source_url: 'https://commons.wikimedia.org/wiki/File:Oosuna_beach_-_%E5%A4%A7%E7%A0%82%E6%B5%B7%E5%B2%B8_-_panoramio.jpg',
    license: 'cc_by_open_data',
    accessed: KAIYO_PACK_ACCESSED
  },
  {
    id: 'kaiyo-extra-riviera-tenbo',
    jis: KAIYO_PACK_JIS,
    name_ja: '宍喰温泉 ホテルリビエラししくい 展望大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県海部郡海陽町松原226-1',
    phone: '0884-76-3300',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/8721/8721.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/8721/8721.html',
    license: 'cc_by_open_data',
    accessed: KAIYO_PACK_ACCESSED
  },
  {
    id: 'kaiyo-extra-yuyu-nasajiro',
    jis: KAIYO_PACK_JIS,
    name_ja: 'ふれあいの宿 遊遊NASA なさ地呂温泉',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県海部郡海陽町奥浦鹿ヶ谷58-3',
    phone: '0884-73-0300',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/128443/128443.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/128443/128443.html',
    license: 'cc_by_open_data',
    accessed: KAIYO_PACK_ACCESSED
  },
  {
    id: 'kaiyo-extra-haruru-onsen',
    jis: KAIYO_PACK_JIS,
    name_ja: 'はるる亭 温泉',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県海部郡海陽町久保板取230-1',
    phone: '0884-76-2282',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/179334/179334.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/179334/179334.html',
    license: 'cc_by_open_data',
    accessed: KAIYO_PACK_ACCESSED
  }
];

export const KAIYO_FACILITIES: readonly FacilityRow[] = [
  ...loadNakaFacilities(),
  ...KAIYO_EXTRA_FACILITIES
];
