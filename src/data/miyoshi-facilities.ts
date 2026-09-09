import fs from 'node:fs';
import path from 'node:path';
import {
  FACILITY_CATEGORIES,
  PACK_ACCESSED,
  MIYOSHI_PACK_JIS,
  type FacilityCategory,
  type FacilityRow
} from './facility-schema';

/** Frozen jsonl baselines (before EXTRA bath rows). */
const PACK_ROW_COUNT = 1042;
const PACK_GEO_COUNT = 636;
const PACK_HOURS_COUNT = 494;
const PACK_MISSING_ADDRESS = 548;
const PACK_MISSING_PHONE = 791;
const PACK_CATEGORY_COUNTS: Record<FacilityCategory, number> = {
  tourism: 221,
  cultural_property: 184,
  care: 0,
  aed: 0,
  shelter: 0,
  emergency_evacuation_site: 0,
  hospital: 0,
  childcare: 32,
  wifi: 24,
  public_facility: 33,
  gtfs_stop: 548
};

const PACK_PATH = path.join(process.cwd(), 'data', 'frozen', 'miyoshi-facilities.jsonl');

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
  if (value !== MIYOSHI_PACK_JIS) {
    throw new Error(`facility jis must be ${MIYOSHI_PACK_JIS}`);
  }
  return MIYOSHI_PACK_JIS;
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

function loadMiyoshiFacilities(): readonly FacilityRow[] {
  const text = fs.readFileSync(PACK_PATH, 'utf8');
  const rows: FacilityRow[] = [];
  for (const line of text.split('\n')) {
    if (line.trim() === '') continue;
    const parsed: unknown = JSON.parse(line);
    rows.push(parseFacilityRow(parsed));
  }
  if (rows.length !== PACK_ROW_COUNT) {
    throw new Error(`miyoshi pack row count ${rows.length} != ${PACK_ROW_COUNT}`);
  }
  const counts = emptyCounts();
  for (const row of rows) {
    counts[row.category] += 1;
  }
  for (const cat of FACILITY_CATEGORIES) {
    if (counts[cat] !== PACK_CATEGORY_COUNTS[cat]) {
      throw new Error(`miyoshi pack ${cat} ${counts[cat]} != ${PACK_CATEGORY_COUNTS[cat]}`);
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
    throw new Error(`miyoshi pack geo ${geo} != ${PACK_GEO_COUNT}`);
  }
  if (hours !== PACK_HOURS_COUNT) {
    throw new Error(`miyoshi pack hours ${hours} != ${PACK_HOURS_COUNT}`);
  }
  if (missingAddress !== PACK_MISSING_ADDRESS) {
    throw new Error(`miyoshi pack address gaps ${missingAddress} != ${PACK_MISSING_ADDRESS}`);
  }
  if (missingPhone !== PACK_MISSING_PHONE) {
    throw new Error(`miyoshi pack phone gaps ${missingPhone} != ${PACK_MISSING_PHONE}`);
  }
  return rows;
}

const MIYOSHI_EXTRA_FACILITIES: readonly FacilityRow[] = [
  {
    id: 'miyoshi-extra-iyaonsen',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '和の宿 ホテル祖谷温泉 絹泡夢想の湯',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市池田町松尾松本367-28',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/13663/13663.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/13663/13663.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-konishi',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '白地温泉 小西旅館 展望風呂',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市池田町白地本名76-2',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/14619/14619.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/14619/14619.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-shirajiso',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '民宿 白地荘 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市池田町白地本名755-2',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/17989/17989.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/17989/17989.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-kazurabashi',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '湯元新祖谷温泉 ホテルかずら橋 露天風呂',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市西祖谷山村善徳３３－１',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/20228/20228.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/20228/20228.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-hikyo',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '祖谷渓温泉 ホテル秘境の湯 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市西祖谷山村尾井ノ内401',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/52860/52860.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/52860/52860.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-mannaka',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '峡谷の湯宿 大歩危峡まんなか 露天風呂',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市山城町西宇1644-1',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/53066/53066.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/53066/53066.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-sunriver',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '大歩危温泉 サンリバー大歩危 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市山城町西宇1259-1',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/54677/54677.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/54677/54677.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-iyabijin',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '渓谷の隠れ宿 祖谷美人 露天風呂',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市西祖谷山村善徳9-3',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/56704/56704.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/56704/56704.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-kazuraya',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '祖谷の宿 かずらや 露天風呂',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市西祖谷山村閑定78',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/67957/67957.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/67957/67957.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-sushi6',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '寿し六旅館 貸切風呂',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市池田町2178-5',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/129667/129667.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/129667/129667.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-iyakanko',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '祖谷観光旅館 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市西祖谷山村善徳161',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/142344/142344.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/142344/142344.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-oyamaso',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '祖谷の里 民宿お山荘 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市西祖谷山村閑定91-2',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/142530/142530.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/142530/142530.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-4s-honmachi',
    jis: MIYOSHI_PACK_JIS,
    name_ja: '本町旅宿 4S STAY 阿波池田 本町通り 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市池田町マチ2467-1',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/180706/180706.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/180706/180706.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  },
  {
    id: 'miyoshi-extra-gh-kazura',
    jis: MIYOSHI_PACK_JIS,
    name_ja: 'Ｇｕｅｓｔｈｏｕｓｅ ＫＡＺＵＲＡＢＡＳＨＩ 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県三好市西祖谷山村善徳161-13',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/192586/192586.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/192586/192586.html',
    license: '楽天トラベル掲載情報',
    accessed: '2026-09-09'
  }
];

export const MIYOSHI_FACILITIES: readonly FacilityRow[] = [
  ...loadMiyoshiFacilities(),
  ...MIYOSHI_EXTRA_FACILITIES
];
