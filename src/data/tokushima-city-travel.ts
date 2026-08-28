/**
 * Tokushima City travel layer. No frozen pack.
 * Dining is copied from 食べログ 徳島市 (C36201) public shop pages. Food photos required.
 * Do not invent pack dining. Do not copy 美馬 / つるぎ / 吉野川 / 三好 TRAVEL_* rows or photos.
 * Do not mix 鳴門市, 藍住町, 大歩危, かずら橋.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TOKUSHIMA_CITY, TOKUSHIMA_CITY_SIGHT_PHOTOS} from './tokushima-city';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const TOKUSHIMA_CITY_TRAVEL_ACCESSED = '2026-08-28' as const;

export const TOKUSHIMA_CITY_TRAVEL_SOURCES = {
  kanko: 'https://www.tokushima-kankou.or.jp/',
  cityHome: 'https://www.city.tokushima.tokushima.jp/',
  bizan: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/bizan.html',
  boardWalk: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/board_walk.html',
  awaodori: 'https://www.city.tokushima.tokushima.jp/shisetsu/bunka_art/awaodori_kaikan.html',
  castlePark: 'https://www.city.tokushima.tokushima.jp/shisetsu/park/chuo.html',
  tabelogCity: 'https://tabelog.com/tokushima/C36201/rstLst/'
} as const;

export const TOKUSHIMA_CITY_SIGHT_PINS = [
  '眉山',
  '徳島城跡',
  '新町川水際公園・しんまちボードウォーク',
  '阿波おどり会館'
] as const;

export const TOKUSHIMA_CITY_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: TOKUSHIMA_CITY_TRAVEL_ACCESSED
  };
}

export const TOKUSHIMA_CITY_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'tokushima-city-dining-01',
    'いのたに 本店',
    '徳島県徳島市西大工町4-25',
    '088-653-1482',
    'https://tabelog.com/tokushima/A3601/A360101/36000011/'
  ),
  dining(
    'tokushima-city-dining-02',
    'ラーメン東大 大道本店',
    '徳島県徳島市大道1-36',
    '088-655-3775',
    'https://tabelog.com/tokushima/A3601/A360101/36000013/'
  ),
  dining(
    'tokushima-city-dining-03',
    '銀座一福 本店',
    '徳島県徳島市銀座10 1F',
    '088-652-2340',
    'https://tabelog.com/tokushima/A3601/A360101/36000005/'
  ),
  dining(
    'tokushima-city-dining-04',
    '中華そば やまきょう',
    '徳島県徳島市北矢三町3丁目7-11',
    '088-633-9872',
    'https://tabelog.com/tokushima/A3601/A360101/36000632/'
  ),
  dining(
    'tokushima-city-dining-05',
    '可成家 本店',
    '徳島県徳島市南庄町1丁目27 エクラドゥース１階',
    '088-631-4158',
    'https://tabelog.com/tokushima/A3601/A360101/36000816/'
  ),
  dining(
    'tokushima-city-dining-06',
    '麺王 徳島駅前本店',
    '徳島県徳島市寺島本町東3-6 旭ビル1Ｆ',
    '088-623-4116',
    'https://tabelog.com/tokushima/A3601/A360101/36000076/'
  ),
  dining(
    'tokushima-city-dining-07',
    'よあけ 駅前店',
    '徳島県徳島市一番町3-10 駅ビル １Ｆ',
    '088-653-3369',
    'https://tabelog.com/tokushima/A3601/A360101/36004118/'
  )
];

export const TOKUSHIMA_CITY_DINING_NAME_SET: ReadonlySet<string> = new Set(
  TOKUSHIMA_CITY_TRAVEL_DINING.map((row) => row.name_ja)
);

export const TOKUSHIMA_CITY_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TOKUSHIMA_CITY_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const TOKUSHIMA_CITY_TRAVEL_ALL: readonly TravelRow[] = [
  ...TOKUSHIMA_CITY_TRAVEL_DINING,
  ...TOKUSHIMA_CITY_TRAVEL_STAY,
  ...TOKUSHIMA_CITY_TRAVEL_SHOPPING,
  ...TOKUSHIMA_CITY_TRAVEL_COMMERCE
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

export function isTokushimaCityOnsenPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTokushimaCityExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTokushimaCityStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTokushimaCityDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOKUSHIMA_CITY_DINING_NAME_SET.has(row.name_ja);
}

export function tokushimaCitySightPhoto(nameJa: string): MimaPlacePhoto | null {
  return TOKUSHIMA_CITY_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankTokushimaCitySeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isTokushimaCityOnsenPackRow(row) &&
      !isTokushimaCityStayPackRow(row) &&
      !isTokushimaCityDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of TOKUSHIMA_CITY_SIGHT_PINS) {
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

export function tokushimaCitySourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '徳島市 飲食案内' : 'Tokushima dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '徳島市 宿泊案内' : 'Tokushima lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function tokushimaCityTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTokushimaCityOnsenPackRow(row)) return 'onsen';
  if (isTokushimaCityStayPackRow(row)) return 'stay';
  if (isTokushimaCityDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function tokushimaCityPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isTokushimaCityOnsenPackRow(row) &&
      !isTokushimaCityStayPackRow(row) &&
      !isTokushimaCityDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTokushimaCityOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isTokushimaCityStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveTokushimaCityFilter(c: string | undefined, q: string): FilterId {
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

export const TOKUSHIMA_CITY_HALL = TOKUSHIMA_CITY.hall;
