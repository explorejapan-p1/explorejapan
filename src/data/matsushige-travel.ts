/**
 * Matsushige travel layer. Pack has no dining/stay categories.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 松茂町 (C36401) public shop pages. Do not invent pack dining.
 * Do not copy 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MATSUSHIGE, MATSUSHIGE_SIGHT_PHOTOS} from './matsushige';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const MATSUSHIGE_TRAVEL_ACCESSED = '2026-09-05' as const;

export const MATSUSHIGE_TRAVEL_SOURCES = {
  home: 'https://www.town.matsushige.tokushima.jp/',
  hall: 'https://www.town.matsushige.tokushima.jp/docs/2015111800591/',
  kanko: 'https://www.town.matsushige.tokushima.jp/category/bunya/kanko_sangyo_rodo/kanko_shisetsu/',
  tabelogCity: 'https://tabelog.com/tokushima/C36401/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const MATSUSHIGE_ONSEN_PACK_NAMES = [] as const;

export const MATSUSHIGE_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  MATSUSHIGE_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const MATSUSHIGE_STAY_PACK_NAMES = [] as const;

export const MATSUSHIGE_STAY_PACK_SET: ReadonlySet<string> = new Set(
  MATSUSHIGE_STAY_PACK_NAMES
);

export const MATSUSHIGE_SIGHT_PINS = [
  '月見ヶ丘海水浴場',
  '徳島空港',
  '松茂町歴史民俗資料館・人形浄瑠璃芝居資料館',
  'とくしまとくとくターミナル'
] as const;

export const MATSUSHIGE_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: MATSUSHIGE_TRAVEL_ACCESSED
  };
}

export const MATSUSHIGE_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'matsushige-dining-01',
    '宝ラーメン 徳島阿波おどり空港店',
    '徳島県板野郡松茂町豊久字朝日野16-2 徳島阿波おどり空港 3F',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36005033/'
  ),
  dining(
    'matsushige-dining-02',
    'ひろっちゃん',
    '徳島県板野郡松茂町広島字宮ノ後16-5',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36003504/'
  ),
  dining(
    'matsushige-dining-03',
    'RICH BURGER FACTORY',
    '徳島県板野郡松茂町豊久字朝日野16-2 徳島阿波おどり空港ターミナルビル 3F',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36003792/'
  ),
  dining(
    'matsushige-dining-04',
    '中華そば 村田商店',
    '徳島県板野郡松茂町中喜来字牛飼野西ノ越14-1',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36006716/'
  ),
  dining(
    'matsushige-dining-05',
    '肉吸い専門店',
    '徳島県板野郡松茂町豊久字朝日野16-2 徳島阿波おどり空港 3F',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36007034/'
  ),
  dining(
    'matsushige-dining-06',
    '小鮎',
    '徳島県板野郡松茂町中喜来字宮前1番越1',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36000295/'
  ),
  dining(
    'matsushige-dining-07',
    'たらいうどん 山のせ 松茂店',
    '徳島県板野郡松茂町中喜来字前原2番越の1',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36000548/'
  ),
  dining(
    'matsushige-dining-08',
    '璃椿',
    '徳島県板野郡松茂町豊久字朝日野16-2 徳島阿波おどり空港 3F',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36007008/'
  ),
  dining(
    'matsushige-dining-09',
    'めん処 陣内',
    '徳島県板野郡松茂町広島字宮ノ前1-4',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36000358/'
  ),
  dining(
    'matsushige-dining-10',
    'ハレルヤスイーツキッチン',
    '徳島県板野郡松茂町広島字北川向四ノ越30',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36004234/'
  ),
  dining(
    'matsushige-dining-11',
    '山かつ 空港店',
    '徳島県板野郡松茂町中喜来字前原東三番越15-1',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36000051/'
  ),
  dining(
    'matsushige-dining-12',
    '豚太郎 空港店',
    '徳島県板野郡松茂町笹木野字八北開拓207-1',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36004146/'
  ),
  dining(
    'matsushige-dining-13',
    '江戸屋珈琲 松茂本店',
    '徳島県板野郡松茂町中喜来前原四番越5-1-1',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36007639/'
  ),
  dining(
    'matsushige-dining-14',
    'ハレルヤ 本社工場直売店',
    '徳島県板野郡松茂町広島字北川向四ノ越30',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36003575/'
  )
];

export const MATSUSHIGE_DINING_NAME_SET: ReadonlySet<string> = new Set(
  MATSUSHIGE_TRAVEL_DINING.map((row) => row.name_ja)
);

export const MATSUSHIGE_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MATSUSHIGE_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const MATSUSHIGE_TRAVEL_ALL: readonly TravelRow[] = [
  ...MATSUSHIGE_TRAVEL_DINING,
  ...MATSUSHIGE_TRAVEL_STAY,
  ...MATSUSHIGE_TRAVEL_SHOPPING,
  ...MATSUSHIGE_TRAVEL_COMMERCE
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

export function isMatsushigeOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MATSUSHIGE_ONSEN_PACK_SET.has(row.name_ja);
}

export function isMatsushigeExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isMatsushigeStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function matsushigeSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return MATSUSHIGE_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankMatsushigeSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isMatsushigeOnsenPackRow(row) &&
      !isMatsushigeStayPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of MATSUSHIGE_SIGHT_PINS) {
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

export function matsushigeSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '松茂町 飲食案内' : 'Matsushige dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '松茂町 宿泊案内' : 'Matsushige lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function matsushigeTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isMatsushigeOnsenPackRow(row)) return 'onsen';
  if (isMatsushigeStayPackRow(row)) return 'stay';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function matsushigePackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isMatsushigeOnsenPackRow(row) &&
      !isMatsushigeStayPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMatsushigeOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isMatsushigeStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveMatsushigeFilter(c: string | undefined, q: string): FilterId {
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

export const MATSUSHIGE_HALL = MATSUSHIGE.hall;
