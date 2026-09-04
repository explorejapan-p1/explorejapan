/**
 * Kitajima travel layer. Pack has no dining/stay categories.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 北島町 (C36402) public shop pages. Do not invent pack dining.
 * Do not copy 松茂 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KITAJIMA, KITAJIMA_SIGHT_PHOTOS} from './kitajima';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KITAJIMA_TRAVEL_ACCESSED = '2026-09-05' as const;

export const KITAJIMA_TRAVEL_SOURCES = {
  home: 'https://www.town.kitajima.lg.jp/',
  hall: 'https://www.town.kitajima.lg.jp/mobile/chosei/chosha/',
  kanko: 'https://www.town.kitajima.lg.jp/docs/61.html',
  tabelogCity: 'https://tabelog.com/tokushima/C36402/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const KITAJIMA_ONSEN_PACK_NAMES = [] as const;

export const KITAJIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  KITAJIMA_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const KITAJIMA_STAY_PACK_NAMES = [] as const;

export const KITAJIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(
  KITAJIMA_STAY_PACK_NAMES
);

export const KITAJIMA_SIGHT_PINS = ['北島チューリップ公園'] as const;

export const KITAJIMA_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: KITAJIMA_TRAVEL_ACCESSED
  };
}

export const KITAJIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'kitajima-dining-01',
    '焼肉レストラン 炙家bis  北島店',
    '徳島県板野郡北島町江尻松ノ本9-1',
    null,
    'https://tabelog.com/tokushima/A3601/A360101/36008413/'
  ),
  dining(
    'kitajima-dining-02',
    '一鴻 北島店',
    '徳島県板野郡北島町江尻字松ノ本9-1',
    null,
    'https://tabelog.com/tokushima/A3601/A360101/36008250/'
  ),
  dining(
    'kitajima-dining-03',
    '焼肉 福朗',
    '徳島県板野郡北島町高房字東中道32-7',
    null,
    'https://tabelog.com/tokushima/A3601/A360101/36008569/'
  ),
  dining(
    'kitajima-dining-04',
    'くるくる炭火焼き 民',
    '徳島県板野郡北島町北村字大黒56-2',
    null,
    'https://tabelog.com/tokushima/A3603/A360303/36006745/'
  ),
  dining(
    'kitajima-dining-05',
    "クラフトビールと肉が旨いカフェ Queen of Meat's",
    '徳島県板野郡北島町鯛浜字西ノ須174 フジグラン北島別棟 1F',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36007872/'
  ),
  dining(
    'kitajima-dining-06',
    'フレッシュベーカリー 矢野',
    '徳島県板野郡北島町北村字壱町四反地71-3',
    null,
    'https://tabelog.com/tokushima/A3601/A360101/36008209/'
  ),
  dining(
    'kitajima-dining-07',
    "makapu'u CAFE",
    '徳島県板野郡北島町中村字川田9-1 サンライフ北島',
    null,
    'https://tabelog.com/tokushima/A3601/A360101/36007808/'
  ),
  dining(
    'kitajima-dining-08',
    'パティスリー　オゥ・ポワヴル',
    '徳島県板野郡北島町江尻字旭光3',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36000858/'
  ),
  dining(
    'kitajima-dining-09',
    'グテ',
    '徳島県板野郡北島町太郎八須字西ノ瀬42-1',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36007416/'
  ),
  dining(
    'kitajima-dining-10',
    '麺喰屋 澤 徳島店',
    '徳島県板野郡北島町鯛浜原85',
    null,
    'https://tabelog.com/tokushima/A3601/A360101/36006174/'
  ),
  dining(
    'kitajima-dining-11',
    'ゑびす寿司',
    '徳島県板野郡北島町鯛浜字かや1-3',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36009453/'
  ),
  dining(
    'kitajima-dining-12',
    'たこやき マルコ',
    '徳島県板野郡北島町北村字壱町四反地67',
    null,
    'https://tabelog.com/tokushima/A3603/A360303/36008665/'
  ),
  dining(
    'kitajima-dining-13',
    'カリーナ',
    '徳島県板野郡北島町鯛浜字かや153-5',
    null,
    'https://tabelog.com/tokushima/A3601/A360101/36005424/'
  ),
  dining(
    'kitajima-dining-14',
    'ハンバーグダイニング イケヒロ',
    '徳島県板野郡北島町中村寺裏8 クレール北島 1F',
    null,
    'https://tabelog.com/tokushima/A3601/A360101/36007647/'
  )
];

export const KITAJIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  KITAJIMA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const KITAJIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KITAJIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const KITAJIMA_TRAVEL_ALL: readonly TravelRow[] = [
  ...KITAJIMA_TRAVEL_DINING,
  ...KITAJIMA_TRAVEL_STAY,
  ...KITAJIMA_TRAVEL_SHOPPING,
  ...KITAJIMA_TRAVEL_COMMERCE
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

export function isKitajimaOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KITAJIMA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isKitajimaExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isKitajimaStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function kitajimaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return KITAJIMA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankKitajimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isKitajimaOnsenPackRow(row) &&
      !isKitajimaStayPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of KITAJIMA_SIGHT_PINS) {
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

export function kitajimaSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '北島町 飲食案内' : 'Kitajima dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '北島町 宿泊案内' : 'Kitajima lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function kitajimaTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isKitajimaOnsenPackRow(row)) return 'onsen';
  if (isKitajimaStayPackRow(row)) return 'stay';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function kitajimaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isKitajimaOnsenPackRow(row) &&
      !isKitajimaStayPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKitajimaOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isKitajimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveKitajimaFilter(c: string | undefined, q: string): FilterId {
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

export const KITAJIMA_HALL = KITAJIMA.hall;
