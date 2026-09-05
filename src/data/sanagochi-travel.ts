/**
 * Sanagochi travel layer. Pack tourism has no inns/onsen with room or bath photos.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 佐那河内村 (C36321) public shop pages with FOOD dish heroes.
 * Do not copy 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SANAGOCHI, SANAGOCHI_SIGHT_PHOTOS} from './sanagochi';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const SANAGOCHI_TRAVEL_ACCESSED = '2026-09-05' as const;

export const SANAGOCHI_TRAVEL_SOURCES = {
  home: 'https://www.vill.sanagochi.lg.jp/',
  hall: 'https://www.vill.sanagochi.lg.jp/',
  kanko: 'https://www.vill.sanagochi.lg.jp/kankoevent/kanko.html',
  tabelogCity: 'https://tabelog.com/tokushima/C36321/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const SANAGOCHI_ONSEN_PACK_NAMES = [] as const;

export const SANAGOCHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  SANAGOCHI_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const SANAGOCHI_STAY_PACK_NAMES = [] as const;

export const SANAGOCHI_STAY_PACK_SET: ReadonlySet<string> = new Set(
  SANAGOCHI_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const SANAGOCHI_SHOPPING_PACK_NAMES = [] as const;

export const SANAGOCHI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  SANAGOCHI_SHOPPING_PACK_NAMES
);

export const SANAGOCHI_SIGHT_PINS = [
  '大川原高原',
  '嵯峨峡',
  'しゃくなげ(徳円寺)'
] as const;

export const SANAGOCHI_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: SANAGOCHI_TRAVEL_ACCESSED
  };
}

export const SANAGOCHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'sanagochi-dining-01',
    "YOME厨房",
    "徳島県名東郡佐那河内村上字平間161",
    "090-1170-3698",
    "https://tabelog.com/tokushima/A3601/A360104/36005383/"
  ),
  dining(
    'sanagochi-dining-02',
    "佐那河内ジェラート",
    "徳島県名東郡佐那河内村上字宮前84-1",
    "088-636-4030",
    "https://tabelog.com/tokushima/A3601/A360104/36007906/"
  ),
  dining(
    'sanagochi-dining-03',
    "大川原高原ヒルトップハウス",
    "徳島県名東郡佐那河内村上字大川原5-7",
    null,
    "https://tabelog.com/tokushima/A3601/A360104/36009124/"
  ),
  dining(
    'sanagochi-dining-04',
    "Ramus",
    "徳島県名東郡佐那河内村下仕出55-1",
    "088-679-3770",
    "https://tabelog.com/tokushima/A3601/A360104/36008627/"
  ),
  dining(
    'sanagochi-dining-05',
    "ふる里物産直売所",
    "徳島県名東郡佐那河内村下字中辺44-2",
    "088-679-2224",
    "https://tabelog.com/tokushima/A3601/A360101/36007307/"
  ),
  dining(
    'sanagochi-dining-06',
    "村のおっさん 四代目桑原豆腐店",
    "徳島県名東郡佐那河内村上字宮前64-3",
    "088-679-2409",
    "https://tabelog.com/tokushima/A3601/A360104/36005985/"
  ),
  dining(
    'sanagochi-dining-07',
    "府能商店",
    "徳島県名東郡佐那河内村上府能104",
    "050-2024-5822",
    "https://tabelog.com/tokushima/A3601/A360104/36007793/"
  ),
  dining(
    'sanagochi-dining-08',
    "嵯峨峡 渡月",
    "徳島県名東郡佐那河内村下字中溝6-1",
    "088-679-3311",
    "https://tabelog.com/tokushima/A3601/A360101/36003182/"
  ),
  dining(
    'sanagochi-dining-09',
    "お食事処 ゆいね",
    "徳島県名東郡佐那河内村上府能104",
    null,
    "https://tabelog.com/tokushima/A3601/A360104/36008512/"
  ),
  dining(
    'sanagochi-dining-10',
    "虎屋 壺中庵",
    "徳島県名東郡佐那河内村上字井開1",
    "088-679-2305",
    "https://tabelog.com/tokushima/A3601/A360104/36000369/"
  ),
  dining(
    'sanagochi-dining-11',
    "巻き寿司工房ぜんまる",
    "徳島県名東郡佐那河内村上府能104",
    null,
    "https://tabelog.com/tokushima/A3603/A360301/36007805/"
  ),
  dining(
    'sanagochi-dining-12',
    "佐那の里",
    "徳島県名東郡佐那河内村下字高樋46-1",
    "088-679-2295",
    "https://tabelog.com/tokushima/A3601/A360101/36003955/"
  )
];

export const SANAGOCHI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  SANAGOCHI_TRAVEL_DINING.map((row) => row.name_ja)
);

export const SANAGOCHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];

export const SANAGOCHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const SANAGOCHI_TRAVEL_ALL: readonly TravelRow[] = [
  ...SANAGOCHI_TRAVEL_DINING,
  ...SANAGOCHI_TRAVEL_STAY,
  ...SANAGOCHI_TRAVEL_SHOPPING,
  ...SANAGOCHI_TRAVEL_COMMERCE
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

export function isSanagochiOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SANAGOCHI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isSanagochiExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isSanagochiStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isSanagochiShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return SANAGOCHI_SHOPPING_PACK_SET.has(row.name_ja);
}

export function sanagochiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return SANAGOCHI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankSanagochiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isSanagochiOnsenPackRow(row) &&
      !isSanagochiStayPackRow(row) &&
      !isSanagochiShoppingPackRow(row) &&
      !SANAGOCHI_DINING_NAME_SET.has(row.name_ja)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of SANAGOCHI_SIGHT_PINS) {
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

export function sanagochiSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '佐那河内村 飲食案内' : 'Sanagochi dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '佐那河内村 宿泊案内' : 'Sanagochi lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '佐那河内村 買物案内' : 'Sanagochi shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '村の観光案内' : 'Village tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function sanagochiTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isSanagochiOnsenPackRow(row)) return 'onsen';
  if (isSanagochiStayPackRow(row)) return 'stay';
  if (isSanagochiShoppingPackRow(row)) return 'shopping';
  if (SANAGOCHI_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function sanagochiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isSanagochiOnsenPackRow(row) &&
      !isSanagochiStayPackRow(row) &&
      !isSanagochiShoppingPackRow(row) &&
      !SANAGOCHI_DINING_NAME_SET.has(nameJa)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSanagochiOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isSanagochiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveSanagochiFilter(c: string | undefined, q: string): FilterId {
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

export const SANAGOCHI_HALL = SANAGOCHI.hall;
