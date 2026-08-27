/**
 * Dining and lodging listed by Mima Tourism Bureau.
 * Names, addresses, and phones are copied from the public pages only.
 * Not in the frozen 515-row pack. Do not invent extra names or dining addresses.
 *
 * Dining: https://mimakankou.or.jp/gourmet/
 * Stay: https://mimakankou.or.jp/hoteltop/
 * City lodging index: https://www.city.mima.lg.jp/kanko/tomaru/
 * accessed 2026-08-26
 *
 * Onsen / experience: ONLY the named tourism-pack rows. Never the AED clone.
 */

import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import {MIMA_PLACE_PHOTO, MIMA_SIGHT_PHOTOS, type MimaPlacePhoto} from './mima';

export const TRAVEL_ACCESSED = '2026-08-26' as const;

export const TRAVEL_SOURCES = {
  dining: 'https://mimakankou.or.jp/gourmet/',
  stay: 'https://mimakankou.or.jp/hoteltop/',
  cityStay: 'https://www.city.mima.lg.jp/kanko/tomaru/',
  onsen: 'https://www.city.mima.lg.jp/kanko/map/list/4041.html',
  experience: 'https://www.city.mima.lg.jp/kanko/map/list/11492.html'
} as const;

export const TRAVEL_KINDS = ['dining', 'stay'] as const;
export type TravelKind = (typeof TRAVEL_KINDS)[number];

export const TOP_CHIPS = ['stay', 'dining', 'onsen', 'experience', 'sights', 'shopping', 'commerce'] as const;
export type TopChip = (typeof TOP_CHIPS)[number];

/** First-screen photo cards. Remaining sights go behind さらに表示. */
export const TRAVEL_CARD_FOLD = 10;

/** Pack categories folded into 観光. Per-row place-cat stays 観光 / 文化財. */
export const SIGHTS_CATEGORIES = [
  'tourism',
  'cultural_property'
] as const satisfies readonly FacilityCategory[];

/** Civic pack cats only. gtfs_stop is not infra. Hidden from the traveler fold. */
export const INFRA_CATEGORIES = [
  'shelter',
  'emergency_evacuation_site',
  'aed',
  'hospital',
  'wifi',
  'public_facility',
  'care',
  'childcare'
] as const satisfies readonly FacilityCategory[];

export type FilterId =
  | 'all'
  | FacilityCategory
  | TravelKind
  | 'sights'
  | 'shopping'
  | 'commerce'
  | 'infra'
  | 'onsen'
  | 'experience';

export type TravelRow = {
  id: string;
  name_ja: string;
  category: TravelKind;
  address: string | null;
  phone: string | null;
  source_url: string;
  accessed: typeof TRAVEL_ACCESSED;
};

export const TRAVEL_COUNTS = {
  dining: 12,
  stay: 7
} as const satisfies Record<TravelKind, number>;

/** Exact tourism-pack names. Do not broaden. */
export const ONSEN_PACK_NAME = 'つるぎの湯 大桜' as const;
export const EXPERIENCE_PACK_NAME = '美馬市伝統工芸体験館 美来工房' as const;
export const UDATSU_PACK_NAME = 'うだつの町並み' as const;
export const YOSHIDA_PACK_NAME = '吉田家住宅' as const;
export const CENTER_PACK_NAME = '美馬市観光交流センター' as const;

function dining(id: string, name_ja: string): TravelRow {
  return {
    id,
    name_ja,
    category: 'dining',
    address: null,
    phone: null,
    source_url: TRAVEL_SOURCES.dining,
    accessed: TRAVEL_ACCESSED
  };
}

function stay(
  id: string,
  name_ja: string,
  address: string,
  phone: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'stay',
    address,
    phone,
    source_url: TRAVEL_SOURCES.stay,
    accessed: TRAVEL_ACCESSED
  };
}

export const TRAVEL_DINING: readonly TravelRow[] = [
  dining('mima-dining-11', '割烹旅館田岡'),
  dining('mima-dining-12', 'ブルーヴィラあなぶき'),
  dining('mima-dining-01', 'うだつ emon 茶房'),
  dining('mima-dining-02', 'Cafe角屋'),
  dining('mima-dining-03', '茶里庵(さりあん）'),
  dining('mima-dining-04', '二代目 天竜'),
  dining('mima-dining-05', 'プランタン'),
  dining('mima-dining-06', 'PUNTA'),
  dining('mima-dining-07', '四季料理 森友'),
  dining('mima-dining-08', '皿そば楽庵'),
  dining('mima-dining-09', '道の駅 藍蔵'),
  dining('mima-dining-10', '和ぁさん家')
];

export const TRAVEL_STAY: readonly TravelRow[] = [
  stay(
    'mima-stay-04',
    '剣山頂上ヒュッテ',
    '美馬市木屋平字川井カケ570',
    '080-2997-8482'
  ),
  stay(
    'mima-stay-01',
    'ADLIV',
    '美馬市脇町大字猪尻字若宮南131-2',
    '0883-52-1643'
  ),
  stay(
    'mima-stay-02',
    'オートキャンプ場 四国三郎の郷',
    '美馬市美馬町境目39-10',
    '0883-55-2002'
  ),
  stay(
    'mima-stay-03',
    '清月屋敷',
    '美馬市穴吹町穴吹市ノ下100-6',
    '0883-53-7733'
  ),
  stay(
    'mima-stay-05',
    'ビジネスホテル稲田苑',
    '美馬市脇町拝原１００１−１',
    '0883-52-3333'
  ),
  stay(
    'mima-stay-06',
    'ビジネスホテルマツカ',
    '美馬市脇町大字猪尻建神社下南１５３−１',
    '0883-52-1555'
  ),
  stay(
    'mima-stay-07',
    'Paysage Moriguchi',
    '美馬市脇町大字脇町148-4',
    '0883-52-1578'
  )
];

export const TRAVEL_ALL: readonly TravelRow[] = [...TRAVEL_DINING, ...TRAVEL_STAY];

/** First ship: pills only. No invented shop or business listings. */
export const TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TRAVEL_COMMERCE: readonly TravelRow[] = [];

if (TRAVEL_DINING.length !== TRAVEL_COUNTS.dining) {
  throw new Error(`mima dining ${TRAVEL_DINING.length} != ${TRAVEL_COUNTS.dining}`);
}
if (TRAVEL_STAY.length !== TRAVEL_COUNTS.stay) {
  throw new Error(`mima stay ${TRAVEL_STAY.length} != ${TRAVEL_COUNTS.stay}`);
}

export function isTravelFilter(filter: FilterId): filter is TravelKind {
  return filter === 'dining' || filter === 'stay';
}

function isPackCategory(value: string | undefined): value is FacilityCategory {
  return LOOKUP_CATEGORIES.some((cat) => cat === value);
}

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);

export function isInfraCategory(
  value: string
): value is (typeof INFRA_CATEGORIES)[number] {
  return INFRA_SET.has(value);
}

export function isSightsCategory(
  value: string
): value is (typeof SIGHTS_CATEGORIES)[number] {
  return SIGHTS_SET.has(value);
}

export const TOP_CHIP_COUNTS = {
  dining: TRAVEL_COUNTS.dining,
  stay: TRAVEL_COUNTS.stay,
  onsen: 1,
  experience: 1
} as const;

export function isTravelerChip(filter: FilterId): filter is TopChip {
  return (TOP_CHIPS as readonly string[]).includes(filter);
}

/** Tourism/cultural only. AED つるぎの湯 clone is not onsen. */
export function isOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') {
    return false;
  }
  return row.name_ja === ONSEN_PACK_NAME;
}

/** Tourism/cultural only. Do not invent extra workshops. */
export function isExperiencePackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') {
    return false;
  }
  return row.name_ja === EXPERIENCE_PACK_NAME;
}

export function isUdatsuFamily(name: string): boolean {
  if (name.includes('交流センター')) return false;
  return name === UDATSU_PACK_NAME || name.includes('脇町南町');
}

export function isYoshidaFamily(name: string): boolean {
  return name === YOSHIDA_PACK_NAME;
}

export function isCenterFamily(name: string): boolean {
  return name.includes(CENTER_PACK_NAME);
}

export function sightPhoto(nameJa: string): MimaPlacePhoto | null {
  const mapped = MIMA_SIGHT_PHOTOS[nameJa];
  if (mapped) return mapped;
  if (isUdatsuFamily(nameJa)) return MIMA_PLACE_PHOTO;
  return null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

/**
 * Editorial order for 観光. Rank #1–#10 is this order until first-party traffic+search counts exist, not a public-review score.
 * 1 うだつの町並み, 2 吉田家住宅 (one xy listing), 3 美馬市観光交流センター,
 * then other tourism, then cultural. Onsen/experience/family dupes omitted.
 */
export function rankSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isOnsenPackRow(row) &&
      !isExperiencePackRow(row)
  );

  function take(pred: (row: T) => boolean, preferGeo = false): T | undefined {
    const hits = sights.filter(pred);
    if (preferGeo) {
      const geo = hits.find((row) => row.lat !== null && row.lon !== null);
      if (geo) return geo;
    }
    return hits[0];
  }

  const pin1 =
    take((row) => row.name_ja === UDATSU_PACK_NAME) ??
    take((row) => isUdatsuFamily(row.name_ja));
  const pin2 = take((row) => isYoshidaFamily(row.name_ja), true);
  const pin3 =
    take((row) => row.name_ja === CENTER_PACK_NAME) ??
    take((row) => isCenterFamily(row.name_ja), true);

  const pinned = [pin1, pin2, pin3].filter((row): row is T => row !== undefined);
  const used = new Set(pinned.map((row) => row.id));
  const skipUdatsu = pinned.some((row) => isUdatsuFamily(row.name_ja));
  const skipYoshida = pinned.some((row) => isYoshidaFamily(row.name_ja));
  const skipCenter = pinned.some((row) => isCenterFamily(row.name_ja));

  const restTourism: T[] = [];
  const restCultural: T[] = [];
  for (const row of sights) {
    if (used.has(row.id)) continue;
    if (skipUdatsu && isUdatsuFamily(row.name_ja)) continue;
    if (skipYoshida && isYoshidaFamily(row.name_ja)) continue;
    if (skipCenter && isCenterFamily(row.name_ja)) continue;
    if (row.category === 'tourism') restTourism.push(row);
    else restCultural.push(row);
  }
  return [...pinned, ...restTourism, ...restCultural];
}

/** One line from sourced fields only. No invented blurbs. */
export function sourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  if (isUdatsuFamily(row.name_ja)) {
    return locale === 'ja' ? MIMA_PLACE_PHOTO.altJa : MIMA_PLACE_PHOTO.altEn;
  }
  if (row.address && row.address.trim() !== '') return row.address;
  if (row.category === 'dining') {
    return locale === 'ja' ? '美馬観光ビューロー 飲食案内' : 'Mima Tourism Bureau dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '美馬観光ビューロー 宿泊案内' : 'Mima Tourism Bureau lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光マップ' : 'City tourism map';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

/** Map pack category to the visible top chip for hrefs. */
export function topChipForCategory(category: FacilityCategory): FilterId {
  if (isSightsCategory(category)) return 'sights';
  if (isInfraCategory(category)) return 'sights';
  return category;
}

export function topChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isOnsenPackRow(row)) return 'onsen';
  if (isExperiencePackRow(row)) return 'experience';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function packRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isOnsenPackRow({category, name_ja: nameJa}) &&
      !isExperiencePackRow({category, name_ja: nameJa})
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') {
    return isOnsenPackRow({category, name_ja: nameJa});
  }
  if (filter === 'experience') {
    return isExperiencePackRow({category, name_ja: nameJa});
  }
  if (filter === 'shopping' || filter === 'commerce' || isTravelFilter(filter)) return false;
  return category === filter;
}

/**
 * no c, no q → stay (default chip 宿泊).
 * c in sights|dining|stay|onsen|experience|shopping|commerce → that.
 * legacy c=sights still opens 観光; tourism/cultural → sights.
 * legacy civic / infra → sights (no infrastructure dump on the fold).
 * c=shopping stays shopping; c=commerce stays commerce (not remapped to sights).
 * c=all still allowed internally for search.
 * q without c → all (search-all).
 */
export function resolveMimaFilter(c: string | undefined, q: string): FilterId {
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
