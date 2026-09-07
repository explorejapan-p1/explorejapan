/**
 * Takamatsu City travel layer. No frozen pack.
 * Dining from 食べログ 高松市 (C37201) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル / 公式 share room-exterior images (出典). Rank strongest first.
 * Onsen / shopping / commerce: honest 0. Experience densified when attributable.
 * Do not invent. Do not copy Tokushima TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TAKAMATSU, TAKAMATSU_SIGHT_PHOTOS} from './takamatsu';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const TAKAMATSU_TRAVEL_ACCESSED = '2026-09-07' as const;

export const TAKAMATSU_TRAVEL_SOURCES = {
  home: 'https://www.city.takamatsu.kagawa.jp/',
  hall: 'https://www.city.takamatsu.kagawa.jp/',
  kanko: 'https://www.my-kagawa.jp/',
  tabelogCity: 'https://tabelog.com/kagawa/C37201/rstLst/',
  stayNavi: 'https://www.navitime.co.jp/category/0608002/37201/',
  rakutenTravel: 'https://travel.rakuten.co.jp/'
} as const;

export const TAKAMATSU_ONSEN_PACK_NAMES = [] as const;
export const TAKAMATSU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TAKAMATSU_ONSEN_PACK_NAMES);
export const TAKAMATSU_EXPERIENCE_PACK_NAMES = ['屋島ケーブルカー', '四国村', 'イサム・ノグチ庭園美術館'] as const;
export const TAKAMATSU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TAKAMATSU_EXPERIENCE_PACK_NAMES);
export const TAKAMATSU_STAY_PACK_NAMES = [] as const;
export const TAKAMATSU_STAY_PACK_SET: ReadonlySet<string> = new Set(TAKAMATSU_STAY_PACK_NAMES);
export const TAKAMATSU_SHOPPING_PACK_NAMES = [] as const;
export const TAKAMATSU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TAKAMATSU_SHOPPING_PACK_NAMES);

export const TAKAMATSU_SIGHT_PINS = [
  '栗林公園',
  '高松城（玉藻公園）',
  '屋島',
  '屋島寺',
  '女木島'
] as const;

function stay(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'stay',
    address,
    phone,
    source_url,
    accessed: TAKAMATSU_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room/exterior 出典 first. */
export const TAKAMATSU_TRAVEL_STAY: readonly TravelRow[] = [
  stay('takamatsu-stay-01', 'ＪＲホテルクレメント高松', '香川県高松市浜ノ町1-1', '087-811-1111', 'https://travel.rakuten.co.jp/HOTEL/14862/14862.html'),
  stay('takamatsu-stay-02', '高松センチュリーホテル', '香川県高松市錦町1-4-19', null, 'https://travel.rakuten.co.jp/HOTEL/7593/7593.html'),
  stay('takamatsu-stay-03', 'エクストールイン高松', '香川県高松市古馬場町10-1', null, 'https://travel.rakuten.co.jp/HOTEL/172251/172251.html'),
  stay('takamatsu-stay-04', 'コンフォートホテル高松', '香川県高松市中新町2-10', null, 'https://www.choice-hotels.jp/hotel/takamatsu/')
];

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
    accessed: TAKAMATSU_TRAVEL_ACCESSED
  };
}

export const TAKAMATSU_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'takamatsu-dining-01',
    "両忘",
    "香川県高松市今新町6-21Ｆ",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37008167/"
  ),
  dining(
    'takamatsu-dining-02',
    "ふる里うどん",
    "香川県高松市川島東町523-4",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37006820/"
  ),
  dining(
    'takamatsu-dining-03',
    "寿司 中川",
    "香川県高松市御坊町10-7",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000760/"
  ),
  dining(
    'takamatsu-dining-04',
    "鮨舳",
    "香川県高松市瓦町2-8-17",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000358/"
  ),
  dining(
    'takamatsu-dining-05',
    "手打うどん はりや",
    "香川県高松市郷東町587-174",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000049/"
  ),
  dining(
    'takamatsu-dining-06',
    "手打十段 うどんバカ一代",
    "香川県高松市多賀町1-6-7",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000242/"
  ),
  dining(
    'takamatsu-dining-07',
    "うどん さか枝",
    "香川県高松市番町5-2-23",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000026/"
  ),
  dining(
    'takamatsu-dining-08',
    "うどん 一福",
    "香川県高松市国分寺町新居169-1",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37001209/"
  ),
  dining(
    'takamatsu-dining-09',
    "手打うどん 麦蔵",
    "香川県高松市福岡町1-482-5",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000874/"
  ),
  dining(
    'takamatsu-dining-10',
    "讃岐うどん 上原屋本店",
    "香川県高松市栗林町1-18-8",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000048/"
  ),
  dining(
    'takamatsu-dining-11',
    "中西うどん",
    "香川県高松市鹿角町899-3",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000040/"
  ),
  dining(
    'takamatsu-dining-12',
    "本格手打 もり家",
    "香川県高松市香川町川内原1575-1",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000134/"
  ),
  dining(
    'takamatsu-dining-13',
    "宮武うどん",
    "香川県高松市円座町340",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37005339/"
  ),
  dining(
    'takamatsu-dining-14',
    "れんげ料理店",
    "香川県高松市田町1-11ISIビル1F",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000768/"
  ),
];

export const TAKAMATSU_DINING_NAME_SET: ReadonlySet<string> = new Set(
  TAKAMATSU_TRAVEL_DINING.map((row) => row.name_ja)
);

export const TAKAMATSU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TAKAMATSU_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const TAKAMATSU_TRAVEL_ALL: readonly TravelRow[] = [
  ...TAKAMATSU_TRAVEL_DINING,
  ...TAKAMATSU_TRAVEL_STAY,
  ...TAKAMATSU_TRAVEL_SHOPPING,
  ...TAKAMATSU_TRAVEL_COMMERCE
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

export function isTakamatsuOnsenPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTakamatsuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAKAMATSU_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isTakamatsuStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTakamatsuShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTakamatsuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAKAMATSU_DINING_NAME_SET.has(row.name_ja);
}

export function takamatsuSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return TAKAMATSU_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankTakamatsuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isTakamatsuOnsenPackRow(row) &&
      !isTakamatsuExperiencePackRow(row) &&
      !isTakamatsuStayPackRow(row) &&
      !isTakamatsuDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of TAKAMATSU_SIGHT_PINS) {
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

export function takamatsuSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '高松市 飲食案内' : 'Takamatsu City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '高松市 宿泊案内' : 'Takamatsu City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function takamatsuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTakamatsuOnsenPackRow(row)) return 'onsen';
  if (isTakamatsuExperiencePackRow(row)) return 'experience';
  if (isTakamatsuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isTakamatsuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function takamatsuPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isTakamatsuOnsenPackRow(row) &&
      !isTakamatsuExperiencePackRow(row) &&
      !isTakamatsuStayPackRow(row) &&
      !isTakamatsuDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTakamatsuOnsenPackRow(row);
  if (filter === 'experience') return isTakamatsuExperiencePackRow(row);
  if (filter === 'stay') return isTakamatsuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveTakamatsuFilter(c: string | undefined, q: string): FilterId {
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

export const TAKAMATSU_HALL = TAKAMATSU.hall;
