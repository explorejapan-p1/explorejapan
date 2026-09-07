/**
 * Shodoshima Town travel layer. No frozen pack.
 * Dining from 食べログ 小豆島町 (C37324) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct 大浴場 names + bath stills.
 * Shopping / commerce: honest 0. Experience densified when attributable.
 * Do not invent. Do not copy Tokushima / other-Kagawa / Tonosho TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SHODOSHIMA, SHODOSHIMA_SIGHT_PHOTOS} from './shodoshima';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const SHODOSHIMA_TRAVEL_ACCESSED = '2026-09-07' as const;

export const SHODOSHIMA_TRAVEL_SOURCES = {
  home: 'https://www.town.shodoshima.lg.jp/',
  hall: 'https://www.town.shodoshima.lg.jp/gyousei/choseijoho/shisetsu/3178.html',
  kankou: 'https://www.town.shodoshima.lg.jp/kanko/index.html',
  olive: 'https://www.olive-pk.jp/',
  kankakei: 'https://www.kankakei.co.jp/',
  nijushi: 'https://www.24hitomi.or.jp/',
  marukin: 'https://marukin.moritakk.com/kinenkan/',
  tabelogCity: 'https://tabelog.com/kagawa/C37324/rstLst/',
  kokumin: 'https://travel.rakuten.co.jp/HOTEL/28288/28288.html',
  bay: 'https://travel.rakuten.co.jp/HOTEL/44874/44874.html'
} as const;

export const SHODOSHIMA_ONSEN_PACK_NAMES = ['国民宿舎 小豆島 大浴場', 'ベイリゾートホテル小豆島 しょうどしま温泉'] as const;
export const SHODOSHIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SHODOSHIMA_ONSEN_PACK_NAMES);
export const SHODOSHIMA_EXPERIENCE_PACK_NAMES = ['寒霞渓ロープウェイ'] as const;
export const SHODOSHIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SHODOSHIMA_EXPERIENCE_PACK_NAMES);
export const SHODOSHIMA_STAY_PACK_NAMES = [] as const;
export const SHODOSHIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(SHODOSHIMA_STAY_PACK_NAMES);
export const SHODOSHIMA_SHOPPING_PACK_NAMES = [] as const;
export const SHODOSHIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SHODOSHIMA_SHOPPING_PACK_NAMES);

export const SHODOSHIMA_SIGHT_PINS = [
  '道の駅 小豆島オリーブ公園',
  '寒霞渓',
  '二十四の瞳映画村',
  'マルキン醤油記念館',
  '草壁港',
  '福田港'
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
    accessed: SHODOSHIMA_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room 出典 first. */
export const SHODOSHIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('shodoshima-stay-01', '国民宿舎 小豆島', '香川県小豆郡小豆島町池田1500-4', '0879-75-1115', 'https://travel.rakuten.co.jp/HOTEL/28288/28288.html'),
  stay('shodoshima-stay-02', 'ベイリゾートホテル小豆島', '香川県小豆郡小豆島町古江乙16-3', '0879-82-5000', 'https://travel.rakuten.co.jp/HOTEL/44874/44874.html')
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
    accessed: SHODOSHIMA_TRAVEL_ACCESSED
  };
}

export const SHODOSHIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('shodoshima-dining-01', '井上誠耕園 ファームズテーブル 忠左衛門', '香川県小豆郡小豆島町蒲生甲61-4', '0879-82-5350', 'https://tabelog.com/kagawa/A3705/A370501/37009234/'),
  dining('shodoshima-dining-02', 'cultiva', '香川県小豆郡小豆島町草壁本町615-25', '0879-62-8061', 'https://tabelog.com/kagawa/A3705/A370501/37014264/'),
  dining('shodoshima-dining-03', '木原食堂', '香川県小豆郡小豆島町福田甲118-1', '0879-84-2801', 'https://tabelog.com/kagawa/A3705/A370501/37009288/'),
  dining('shodoshima-dining-04', 'オリーブパレス レストレア', '香川県小豆郡小豆島町西村甲2171 小豆島オリーブ園', '0879-82-4260', 'https://tabelog.com/kagawa/A3705/A370501/37006253/'),
  dining('shodoshima-dining-05', 'さんばし食堂', '香川県小豆郡小豆島町草壁本町1053-8', '0879-82-4458', 'https://tabelog.com/kagawa/A3705/A370501/37010531/'),
  dining('shodoshima-dining-06', '松亭', '香川県小豆郡小豆島町池田3925-1', '0879-75-1520', 'https://tabelog.com/kagawa/A3705/A370501/37002315/'),
  dining('shodoshima-dining-07', 'マザーズ', '香川県小豆郡小豆島町蒲生甲61-4 井上誠耕園 ショップ&レストラン らしく本館 1F', '0879-75-1133', 'https://tabelog.com/kagawa/A3705/A370501/37010080/'),
  dining('shodoshima-dining-08', 'MENTETSU 忠左衛門', '香川県小豆郡小豆島町蒲生甲87-1', '090-4783-9800', 'https://tabelog.com/kagawa/A3705/A370501/37014909/'),
  dining('shodoshima-dining-09', 'サン・オリーブ', '香川県小豆郡小豆島町西村甲1941-1', '0879-82-2200', 'https://tabelog.com/kagawa/A3705/A370501/37006455/'),
  dining('shodoshima-dining-10', 'ガバチョ', '香川県小豆郡小豆島町甲143-42', null, 'https://tabelog.com/kagawa/A3705/A370501/37013004/'),
  dining('shodoshima-dining-11', 'こまめ食堂', '香川県小豆郡小豆島町中山1512-2', '080-2984-9391', 'https://tabelog.com/kagawa/A3705/A370501/37005612/'),
  dining('shodoshima-dining-12', '大ちゃん', '香川県小豆郡小豆島町片城甲266', '0879-82-2135', 'https://tabelog.com/kagawa/A3705/A370501/37009414/'),
  dining('shodoshima-dining-13', '海鮮居酒屋 益丸', '香川県小豆郡小豆島町苗羽甲1386-5', '090-9452-1496', 'https://tabelog.com/kagawa/A3705/A370501/37010812/'),
  dining('shodoshima-dining-14', '創作郷土料理 暦こよみ', '香川県小豆郡小豆島町西村甲1816-1', '0879-62-8234', 'https://tabelog.com/kagawa/A3705/A370501/37009538/'),
  dining('shodoshima-dining-15', 'edén 瀬戸内小豆島', '香川県小豆郡小豆島町安田字植松甲144-235 edit x seven 瀬戸内小豆島 1F', '092-292-2431', 'https://tabelog.com/kagawa/A3705/A370501/37014756/'),
  dining('shodoshima-dining-16', '平和堂 本店', '香川県小豆郡小豆島町苗羽甲1386', '0879-82-0357', 'https://tabelog.com/kagawa/A3705/A370501/37012485/'),
];

export const SHODOSHIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  SHODOSHIMA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const SHODOSHIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SHODOSHIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const SHODOSHIMA_TRAVEL_ALL: readonly TravelRow[] = [
  ...SHODOSHIMA_TRAVEL_DINING,
  ...SHODOSHIMA_TRAVEL_STAY,
  ...SHODOSHIMA_TRAVEL_SHOPPING,
  ...SHODOSHIMA_TRAVEL_COMMERCE
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

export function isShodoshimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHODOSHIMA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isShodoshimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHODOSHIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isShodoshimaStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isShodoshimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isShodoshimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHODOSHIMA_DINING_NAME_SET.has(row.name_ja);
}

export function shodoshimaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return SHODOSHIMA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankShodoshimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isShodoshimaOnsenPackRow(row) &&
      !isShodoshimaExperiencePackRow(row) &&
      !isShodoshimaStayPackRow(row) &&
      !isShodoshimaDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of SHODOSHIMA_SIGHT_PINS) {
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

export function shodoshimaSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '小豆島町 飲食案内' : 'Shodoshima Town dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '小豆島町 宿泊案内' : 'Shodoshima Town lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function shodoshimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isShodoshimaOnsenPackRow(row)) return 'onsen';
  if (isShodoshimaExperiencePackRow(row)) return 'experience';
  if (isShodoshimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isShodoshimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function shodoshimaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isShodoshimaOnsenPackRow(row) &&
      !isShodoshimaExperiencePackRow(row) &&
      !isShodoshimaStayPackRow(row) &&
      !isShodoshimaDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isShodoshimaOnsenPackRow(row);
  if (filter === 'experience') return isShodoshimaExperiencePackRow(row);
  if (filter === 'stay') return isShodoshimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveShodoshimaFilter(c: string | undefined, q: string): FilterId {
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

export const SHODOSHIMA_HALL = SHODOSHIMA.hall;
