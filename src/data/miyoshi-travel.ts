/**
 * Miyoshi travel layer. Pack has no dining/stay categories.
 * Onsen / stay names already in the frozen tourism pack stay on 温泉 / 宿泊 via exact name_ja.
 * Dining is copied from 三好市観光協会 public shop pages. Do not invent pack dining.
 * Do not copy 美馬 / つるぎ / 吉野川 TRAVEL_* rows or photos.
 * Do not mix 東みよし町 (36489).
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MIYOSHI, MIYOSHI_SIGHT_PHOTOS} from './miyoshi';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const MIYOSHI_TRAVEL_ACCESSED = '2026-08-28' as const;

export const MIYOSHI_TRAVEL_SOURCES = {
  kanko: 'https://miyoshi-tourism.jp/',
  gourmet: 'https://miyoshi-tourism.jp/spot/?spot_classification=gourmet',
  stayList: 'https://miyoshi-tourism.jp/spot/?spot_classification=lodging',
  onsen: 'https://miyoshi-tourism.jp/spot/?spot_classification=hot-spring',
  iyaOnsenRoten: 'https://www.iyaonsen.co.jp/onsen/roten/',
  mannakaHotel: 'https://mannaka.co.jp/hotel',
  tougenkyo: 'https://www.tougenkyo-iya.jp/',
  shiniyaCommons: 'https://commons.wikimedia.org/wiki/File:Shiniya_hot_spring.jpg',
  tabelogCity: 'https://tabelog.com/tokushima/C36208/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath/roten photo required. */
export const MIYOSHI_ONSEN_PACK_NAMES = ['和の宿 ホテル祖谷温泉', '湯元新祖谷温泉 ホテルかずら橋'] as const;

export const MIYOSHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MIYOSHI_ONSEN_PACK_NAMES);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath/view photo required. */
export const MIYOSHI_STAY_PACK_NAMES = ['峡谷の湯宿 大歩危峡まんなか', '桃源郷祖谷の山里 茅葺き民家ステイ'] as const;

export const MIYOSHI_STAY_PACK_SET: ReadonlySet<string> = new Set(MIYOSHI_STAY_PACK_NAMES);

export const MIYOSHI_SIGHT_PINS = [
  '大歩危小歩危',
  '祖谷のかずら橋',
  'うだつの町並み・阿波池田うだつの家たばこ資料館',
  '落合集落・落合集落展望所'
] as const;

export const MIYOSHI_TRAVEL_STAY: readonly TravelRow[] = [];

function dining(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'dining',
    address,
    phone,
    source_url,
    accessed: MIYOSHI_TRAVEL_ACCESSED
  };
}

export const MIYOSHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'miyoshi-dining-01',
    'お好み焼きつくし',
    '徳島県三好市池田町マチ2185-3',
    '0883-72-6389',
    'https://miyoshi-tourism.jp/spot/25215/'
  ),
  dining(
    'miyoshi-dining-02',
    '味の老舗八千代',
    '徳島県三好市池田町サラダ１７９８',
    '0883-72-0512',
    'https://miyoshi-tourism.jp/spot/839/'
  ),
  dining(
    'miyoshi-dining-03',
    'そば処祖谷橋',
    '徳島県三好市山城町下川169-1',
    '0883-86-1178',
    'https://miyoshi-tourism.jp/spot/820/'
  ),
  dining(
    'miyoshi-dining-04',
    'いこい食堂',
    '徳島県三好市西祖谷山村善徳166',
    '0883-87-2840',
    'https://miyoshi-tourism.jp/spot/808/'
  ),
  dining(
    'miyoshi-dining-05',
    '御食事処やなもと',
    '徳島県三好市東祖谷京上３４５−４',
    '0883‐88-2354',
    'https://miyoshi-tourism.jp/spot/788/'
  ),
  dining(
    'miyoshi-dining-06',
    'にちにち珈琲店',
    '徳島県三好市三野町芝生４５７',
    '0883-77-2528',
    'https://miyoshi-tourism.jp/spot/6046/'
  ),
  dining(
    'miyoshi-dining-07',
    '味一阿讃',
    '徳島県三好市池田町州津滝端1314-3',
    '0883-72-2163',
    'https://miyoshi-tourism.jp/spot/862/'
  ),
  dining(
    'miyoshi-dining-08',
    'めん処阿波',
    '徳島県三好市池田町ウヱノ３０８６',
    '090-1009-0304',
    'https://miyoshi-tourism.jp/spot/3861/'
  )
];

export const MIYOSHI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  MIYOSHI_TRAVEL_DINING.map((row) => row.name_ja)
);

export const MIYOSHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MIYOSHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const MIYOSHI_TRAVEL_ALL: readonly TravelRow[] = [
  ...MIYOSHI_TRAVEL_DINING,
  ...MIYOSHI_TRAVEL_STAY,
  ...MIYOSHI_TRAVEL_SHOPPING,
  ...MIYOSHI_TRAVEL_COMMERCE
];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);

function isPackCategory(value: string | undefined): value is FacilityCategory {
  return LOOKUP_CATEGORIES.some((cat) => cat === value);
}

function isInfraCategory(value: string): boolean {
  return INFRA_SET.has(value);
}

function isSightsCategory(value: string): boolean {
  return SIGHTS_SET.has(value);
}

export function isMiyoshiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIYOSHI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isMiyoshiExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isMiyoshiStayPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIYOSHI_STAY_PACK_SET.has(row.name_ja);
}

export function isMiyoshiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIYOSHI_DINING_NAME_SET.has(row.name_ja);
}

export function miyoshiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return MIYOSHI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankMiyoshiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isMiyoshiOnsenPackRow(row) &&
      !isMiyoshiStayPackRow(row) &&
      !isMiyoshiDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of MIYOSHI_SIGHT_PINS) {
    const hit = sights.find((row) => row.name_ja === pin);
    if (!hit) continue;
    pinned.push(hit);
    used.add(hit.id);
    usedNames.add(hit.name_ja);
  }
  const restTourism: T[] = [];
  const restCultural: T[] = [];
  for (const row of sights) {
    if (used.has(row.id)) continue;
    if (usedNames.has(row.name_ja)) continue;
    used.add(row.id);
    usedNames.add(row.name_ja);
    if (row.category === 'tourism') restTourism.push(row);
    else restCultural.push(row);
  }
  return [...pinned, ...restTourism, ...restCultural];
}

export function miyoshiSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '三好市 飲食案内' : 'Miyoshi dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '三好市 宿泊案内' : 'Miyoshi lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function miyoshiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMiyoshiOnsenPackRow(row)) return 'onsen';
  if (isMiyoshiStayPackRow(row)) return 'stay';
  if (isMiyoshiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function miyoshiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isMiyoshiOnsenPackRow(row) &&
      !isMiyoshiStayPackRow(row) &&
      !isMiyoshiDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMiyoshiOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isMiyoshiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveMiyoshiFilter(c: string | undefined, q: string): FilterId {
  if (
    c === 'sights' ||
    c === 'stay' ||
    c === 'dining' ||
    c === 'onsen' ||
    c === 'experience' ||
    c === 'shopping' ||
    c === 'commerce'
  ) {
    return c;
  }
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}

export const MIYOSHI_HALL = MIYOSHI.hall;
