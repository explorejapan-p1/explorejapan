/**
 * Itano travel layer. Pack has no dining/stay categories.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * あせび温泉やすらぎの郷 → 温泉 only with bath photo — none yet (honest gap).
 * 道の駅いたの → 買物 with Commons File:Michinoeli-itano.jpeg.
 * Dining from 食べログ 板野町 (C36404) public shop pages. Do not invent pack dining.
 * Do not copy 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {ITANO, ITANO_SIGHT_PHOTOS} from './itano';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const ITANO_TRAVEL_ACCESSED = '2026-09-05' as const;

export const ITANO_TRAVEL_SOURCES = {
  home: 'http://www.town.itano.tokushima.jp/',
  hall: 'http://www.town.itano.tokushima.jp/',
  kanko: 'http://www.town.itano.tokushima.jp/syokai/',
  tabelogCity: 'https://tabelog.com/tokushima/C36404/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const ITANO_ONSEN_PACK_NAMES = [] as const;

export const ITANO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  ITANO_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const ITANO_STAY_PACK_NAMES = [] as const;

export const ITANO_STAY_PACK_SET: ReadonlySet<string> = new Set(
  ITANO_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const ITANO_SHOPPING_PACK_NAMES = ['道の駅いたの'] as const;

export const ITANO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  ITANO_SHOPPING_PACK_NAMES
);

export const ITANO_SIGHT_PINS = [
  'あすたむらんど徳島',
  '金泉寺（四国霊場第三番札所）',
  '大日寺（四国霊場第四番札所）',
  '地蔵寺（四国霊場第五番札所）',
  '板野町歴史文化公園'
] as const;

export const ITANO_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: ITANO_TRAVEL_ACCESSED
  };
}

export const ITANO_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'itano-dining-01',
    "丸池製麺所",
    "徳島県板野郡板野町大寺字大向北98-8",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36003089/"
  ),
  dining(
    'itano-dining-02',
    "金屋",
    "徳島県板野郡板野町矢武南川窪29-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36000266/"
  ),
  dining(
    'itano-dining-03',
    "こんせん",
    "徳島県板野郡板野町川端金泉寺南1-2",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36000652/"
  ),
  dining(
    'itano-dining-04',
    "恵食堂",
    "徳島県板野郡板野町川端字中手崎39-59 道の駅いたの",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36007885/"
  ),
  dining(
    'itano-dining-05',
    "花岡製麺",
    "徳島県板野郡板野町大寺字泉口20 サンメイト一番街",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36003266/"
  ),
  dining(
    'itano-dining-06',
    "いぬぶし",
    "徳島県板野郡板野町西中富字東中須41-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36000188/"
  ),
  dining(
    'itano-dining-07',
    "そらいろ",
    "徳島県板野郡板野町川端字中手崎39-59",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36007886/"
  ),
  dining(
    'itano-dining-08',
    "鮨八鮨",
    "徳島県板野郡板野町大寺岡ノ前130-2",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36001541/"
  ),
  dining(
    'itano-dining-09',
    "ナッチーノエル",
    "徳島県板野郡板野町下庄字古杉93-6",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36004633/"
  ),
  dining(
    'itano-dining-10',
    "フジムラ ベーカリー",
    "徳島県板野郡板野町黒谷字中通27",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36006117/"
  ),
  dining(
    'itano-dining-11',
    "からあげや カリッジュ TRIAL板野店",
    "徳島県板野郡板野町川端島中須11-2",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36009419/"
  ),
  dining(
    'itano-dining-12',
    "LATTE Itano gelato",
    "徳島県板野郡板野町矢武字宮ノ西26-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36008521/"
  ),
  dining(
    'itano-dining-13',
    "ナンカレーハウス",
    "徳島県板野郡板野町西中富東中須38-2",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36007360/"
  ),
  dining(
    'itano-dining-14',
    "キャロット",
    "徳島県板野郡板野町大寺岡ノ前1-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36001723/"
  )
];

export const ITANO_DINING_NAME_SET: ReadonlySet<string> = new Set(
  ITANO_TRAVEL_DINING.map((row) => row.name_ja)
);

function shopping(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'shopping',
    address,
    phone,
    source_url,
    accessed: ITANO_TRAVEL_ACCESSED
  };
}

export const ITANO_TRAVEL_SHOPPING: readonly TravelRow[] = [
  shopping(
    'itano-shopping-01',
    '道の駅いたの',
    '徳島県板野郡板野町川端字中手崎39-5',
    '088-612-8817',
    'http://www.town.itano.tokushima.jp/docs/2021041400015/'
  )
];

export const ITANO_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const ITANO_TRAVEL_ALL: readonly TravelRow[] = [
  ...ITANO_TRAVEL_DINING,
  ...ITANO_TRAVEL_STAY,
  ...ITANO_TRAVEL_SHOPPING,
  ...ITANO_TRAVEL_COMMERCE
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

export function isItanoOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ITANO_ONSEN_PACK_SET.has(row.name_ja);
}

export function isItanoExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isItanoStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isItanoShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return ITANO_SHOPPING_PACK_SET.has(row.name_ja);
}

export function itanoSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return ITANO_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankItanoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isItanoOnsenPackRow(row) &&
      !isItanoStayPackRow(row) &&
      !isItanoShoppingPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of ITANO_SIGHT_PINS) {
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

export function itanoSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '板野町 飲食案内' : 'Itano dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '板野町 宿泊案内' : 'Itano lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '板野町 買物案内' : 'Itano shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function itanoTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isItanoOnsenPackRow(row)) return 'onsen';
  if (isItanoStayPackRow(row)) return 'stay';
  if (isItanoShoppingPackRow(row)) return 'shopping';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function itanoPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isItanoOnsenPackRow(row) &&
      !isItanoStayPackRow(row) &&
      !isItanoShoppingPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isItanoOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isItanoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveItanoFilter(c: string | undefined, q: string): FilterId {
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

export const ITANO_HALL = ITANO.hall;
