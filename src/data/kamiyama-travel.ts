/**
 * Kamiyama travel layer. Pack tourism includes inns/onsen/restaurants without room/bath photos.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 神山町 (C36342) public shop pages. Do not invent pack dining.
 * Do not copy 上板 / 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KAMIYAMA, KAMIYAMA_SIGHT_PHOTOS} from './kamiyama';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KAMIYAMA_TRAVEL_ACCESSED = '2026-09-05' as const;

export const KAMIYAMA_TRAVEL_SOURCES = {
  home: 'https://www.town.kamiyama.lg.jp/',
  hall: 'https://www.town.kamiyama.lg.jp/docs/2025061900079/',
  kanko: 'https://www.town.kamiyama.lg.jp/enjoy/map/index_genre@kanko.html',
  tabelogCity: 'https://tabelog.com/tokushima/C36342/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const KAMIYAMA_ONSEN_PACK_NAMES = [] as const;

export const KAMIYAMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  KAMIYAMA_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const KAMIYAMA_STAY_PACK_NAMES = [] as const;

export const KAMIYAMA_STAY_PACK_SET: ReadonlySet<string> = new Set(
  KAMIYAMA_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const KAMIYAMA_SHOPPING_PACK_NAMES = [] as const;

export const KAMIYAMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  KAMIYAMA_SHOPPING_PACK_NAMES
);

export const KAMIYAMA_SIGHT_PINS = [
  '焼山寺【四国霊場12番札所】',
  '雨乞の滝（あまごいのたき）',
  '上一之宮大粟神社',
  '悲願寺（ひがんじ）',
  '徳島県立 神山森林公園 イルローザの森',
  '神光寺（じんこうじ）のぼり藤'
] as const;

export const KAMIYAMA_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: KAMIYAMA_TRAVEL_ACCESSED
  };
}

export const KAMIYAMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'kamiyama-dining-01',
    "粟カフェ",
    "徳島県名西郡神山町神領本上角118-1",
    "070-6638-2766",
    "https://tabelog.com/tokushima/A3603/A360301/36003919/"
  ),
  dining(
    'kamiyama-dining-02',
    "神山のラーメン居酒屋どちらいか",
    "徳島県名西郡神山町神領字北191-1",
    "090-3989-8739",
    "https://tabelog.com/tokushima/A3603/A360301/36007305/"
  ),
  dining(
    'kamiyama-dining-03',
    "旬彩茶屋",
    "徳島県名西郡神山町神嶺字西上角151-1 道の駅 かみやま内",
    "088-636-7077",
    "https://tabelog.com/tokushima/A3603/A360301/36007412/"
  ),
  dining(
    'kamiyama-dining-04',
    "観月茶屋",
    "徳島県名西郡神山町上分中津土須峠 岳人の森",
    "088-677-1147",
    "https://tabelog.com/tokushima/A3603/A360301/36004022/"
  ),
  dining(
    'kamiyama-dining-05',
    "めし処萬や山びこ",
    "徳島県名西郡神山町神領字北259-3",
    "088-676-0330",
    "https://tabelog.com/tokushima/A3603/A360301/36007347/"
  ),
  dining(
    'kamiyama-dining-06',
    "焼肉 梅里",
    "徳島県名西郡神山町神領本上角161-4",
    "088-676-0340",
    "https://tabelog.com/tokushima/A3603/A360301/36004888/"
  ),
  dining(
    'kamiyama-dining-07',
    "お食事処　ふなと",
    "徳島県名西郡神山町上分字川又西11-2",
    "088-677-0069",
    "https://tabelog.com/tokushima/A3603/A360301/36003956/"
  ),
  dining(
    'kamiyama-dining-08',
    "かま屋",
    "徳島県名西郡神山町神領北190-1",
    "070-8428-2005",
    "https://tabelog.com/tokushima/A3601/A360104/36006591/"
  ),
  dining(
    'kamiyama-dining-09',
    "茶房松葉庵",
    "徳島県名西郡神山町神領北上角58",
    "088-676-1415",
    "https://tabelog.com/tokushima/A3603/A360301/36003790/"
  ),
  dining(
    'kamiyama-dining-10',
    "マスの家",
    "徳島県名西郡神山町下分字三ツ木231 神山スキーランド",
    "088-677-0126",
    "https://tabelog.com/tokushima/A3603/A360301/36006009/"
  ),
  dining(
    'kamiyama-dining-11',
    "てくてく栗生野",
    "徳島県名西郡神山町下分栗生野65",
    "088-677-0745",
    "https://tabelog.com/tokushima/A3603/A360301/36008036/"
  ),
  dining(
    'kamiyama-dining-12',
    "レストラン かわせみ",
    "徳島県名西郡神山町神領本上角80-2 神山温泉",
    "088-676-1117",
    "https://tabelog.com/tokushima/A3603/A360301/36004254/"
  ),
  dining(
    'kamiyama-dining-13',
    "秀乃家　料理仕出し",
    "徳島県名西郡神山町下分今井1-2",
    "088-677-0023",
    "https://tabelog.com/tokushima/A3603/A360301/36003889/"
  ),
  dining(
    'kamiyama-dining-14',
    "あけぼの堂",
    "徳島県名西郡神山町下分左右山136-1",
    "088-677-0054",
    "https://tabelog.com/tokushima/A3603/A360301/36003485/"
  )
];

export const KAMIYAMA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  KAMIYAMA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const KAMIYAMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];

export const KAMIYAMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const KAMIYAMA_TRAVEL_ALL: readonly TravelRow[] = [
  ...KAMIYAMA_TRAVEL_DINING,
  ...KAMIYAMA_TRAVEL_STAY,
  ...KAMIYAMA_TRAVEL_SHOPPING,
  ...KAMIYAMA_TRAVEL_COMMERCE
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

export function isKamiyamaOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMIYAMA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isKamiyamaExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isKamiyamaStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isKamiyamaShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return KAMIYAMA_SHOPPING_PACK_SET.has(row.name_ja);
}

export function kamiyamaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return KAMIYAMA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankKamiyamaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isKamiyamaOnsenPackRow(row) &&
      !isKamiyamaStayPackRow(row) &&
      !isKamiyamaShoppingPackRow(row) &&
      !KAMIYAMA_DINING_NAME_SET.has(row.name_ja)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of KAMIYAMA_SIGHT_PINS) {
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

export function kamiyamaSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '神山町 飲食案内' : 'Kamiyama dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '神山町 宿泊案内' : 'Kamiyama lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '神山町 買物案内' : 'Kamiyama shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function kamiyamaTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isKamiyamaOnsenPackRow(row)) return 'onsen';
  if (isKamiyamaStayPackRow(row)) return 'stay';
  if (isKamiyamaShoppingPackRow(row)) return 'shopping';
  if (KAMIYAMA_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function kamiyamaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isKamiyamaOnsenPackRow(row) &&
      !isKamiyamaStayPackRow(row) &&
      !isKamiyamaShoppingPackRow(row) &&
      !KAMIYAMA_DINING_NAME_SET.has(nameJa)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKamiyamaOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isKamiyamaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveKamiyamaFilter(c: string | undefined, q: string): FilterId {
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

export const KAMIYAMA_HALL = KAMIYAMA.hall;
