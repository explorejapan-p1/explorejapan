/**
 * Naruto City travel layer. No frozen pack.
 * Dining from 食べログ 鳴門市 (C36202) public shop pages. FOOD dish photos required.
 * Stay from NAVITIME 鳴門市ホテル一覧 + 楽天トラベル share/room images (出典). Rank strongest first.
 * Experience: 渦の道 / ドイツ館 / 大塚国際美術館 (Commons). Do not invent pack dining/stay.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NARUTO, NARUTO_SIGHT_PHOTOS} from './naruto';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const NARUTO_TRAVEL_ACCESSED = '2026-09-07' as const;

export const NARUTO_TRAVEL_SOURCES = {
  home: 'https://www.city.naruto.tokushima.jp/',
  hall: 'https://www.city.naruto.tokushima.jp/docs/2025090900052/',
  kanko: 'https://www.city.naruto.tokushima.jp/category/bunya/kanko/',
  uzunomichi: 'https://www.uzunomichi.jp/',
  doitsukan: 'https://doitsukan.com/',
  tabelogCity: 'https://tabelog.com/tokushima/C36202/rstLst/',
  stayNavi: 'https://www.navitime.co.jp/category/0608002/36202/',
  rakutenTravel: 'https://travel.rakuten.co.jp/'
} as const;

export const NARUTO_ONSEN_PACK_NAMES = [] as const;
export const NARUTO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NARUTO_ONSEN_PACK_NAMES);
export const NARUTO_EXPERIENCE_PACK_NAMES = ['大鳴門橋遊歩道 渦の道', '鳴門市ドイツ館', '大塚国際美術館'] as const;
export const NARUTO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(NARUTO_EXPERIENCE_PACK_NAMES);
export const NARUTO_STAY_PACK_NAMES = [] as const;
export const NARUTO_STAY_PACK_SET: ReadonlySet<string> = new Set(NARUTO_STAY_PACK_NAMES);

export const NARUTO_SIGHT_PINS = [
  '鳴門の渦潮',
  '大鳴門橋',
  '霊山寺'
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
    accessed: NARUTO_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room/exterior 出典 first. NAVITIME + 楽天シェア画像. */
export const NARUTO_TRAVEL_STAY: readonly TravelRow[] = [
  stay(
    'naruto-stay-01',
    'アオアヲナルトリゾート',
    '徳島県鳴門市鳴門町土佐泊浦字大毛16-45',
    '088-687-2580',
    'https://travel.rakuten.co.jp/HOTEL/6123/6123.html'
  ),
  stay(
    'naruto-stay-02',
    'リゾートホテル モアナコースト',
    '徳島県鳴門市鳴門町土佐泊浦字高砂186-16',
    '088-687-2255',
    'https://travel.rakuten.co.jp/HOTEL/7769/7769.html'
  ),
  stay(
    'naruto-stay-03',
    'ホテルロータススーペリアリゾート鳴門',
    '徳島県鳴門市鳴門町土佐泊浦大毛234-16',
    '088-677-9413',
    'https://travel.rakuten.co.jp/HOTEL/153466/153466.html'
  ),
  stay(
    'naruto-stay-04',
    'ホテル ネクセル 鳴門',
    '徳島県鳴門市撫養町斎田大堤55',
    '088-683-1230',
    'https://travel.rakuten.co.jp/HOTEL/158397/158397.html'
  ),
  stay(
    'naruto-stay-05',
    'ホテルエリアワン鳴門',
    '徳島県鳴門市撫養町小桑島前浜168-1',
    '088-686-0211',
    'https://travel.rakuten.co.jp/HOTEL/16170/16170.html'
  ),
  stay(
    'naruto-stay-06',
    'ホテルクラウンヒルズ鳴門 高速鳴門前',
    '徳島県鳴門市撫養町大桑島すべり岩浜51-1',
    '088-685-8883',
    'https://travel.rakuten.co.jp/HOTEL/128426/128426.html'
  ),
  stay(
    'naruto-stay-07',
    'グランドエクシブ鳴門 ザ・ロッジ',
    '徳島県鳴門市北灘町折野大川筋182',
    '088-682-0246',
    'https://travel.rakuten.co.jp/HOTEL/108677/108677.html'
  ),
  stay(
    'naruto-stay-08',
    'ホテル ファーストシーズン鳴門',
    '徳島県鳴門市撫養町斉田字大堤228番地',
    '088-686-3261',
    'https://travel.rakuten.co.jp/HOTEL/7505/7505.html'
  ),
  stay(
    'naruto-stay-09',
    'ビジネスホテル鳴門',
    '徳島県鳴門市撫養町斉田字大堤104-105',
    '088-686-2555',
    'https://travel.rakuten.co.jp/HOTEL/10747/10747.html'
  ),
  stay(
    'naruto-stay-10',
    'ホテル カクイン鳴門',
    '徳島県鳴門市撫養町斎田字大堤208番地',
    '088-685-1115',
    'https://travel.rakuten.co.jp/HOTEL/183411/183411.html'
  ),
  stay(
    'naruto-stay-11',
    'ホテルリッジ',
    '徳島県鳴門市瀬戸町大島田字中山1-1',
    '088-688-1212',
    'https://travel.rakuten.co.jp/HOTEL/76857/76857.html'
  ),
  stay(
    'naruto-stay-12',
    'ファミリーロッジ旅籠屋・鳴門駅前店',
    '徳島県鳴門市撫養町小桑島前浜277-2',
    '088-686-8857',
    'https://travel.rakuten.co.jp/HOTEL/146872/146872.html'
  ),
  stay(
    'naruto-stay-13',
    'NEXEL α鳴門',
    '徳島県鳴門市撫養町小桑島前浜65',
    '088-685-2277',
    'https://travel.rakuten.co.jp/HOTEL/176981/176981.html'
  )
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
    accessed: NARUTO_TRAVEL_ACCESSED
  };
}

export const NARUTO_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'naruto-dining-01',
    'すし勝',
    '徳島県鳴門市撫養町斎田大堤65-1',
    '088-685-7603',
    'https://tabelog.com/tokushima/A3601/A360102/36001450/'
  ),
  dining(
    'naruto-dining-02',
    '日本料理 永代',
    '徳島県鳴門市撫養町斎田字東発42-3',
    '088-685-6854',
    'https://tabelog.com/tokushima/A3601/A360102/36000168/'
  ),
  dining(
    'naruto-dining-03',
    '活魚料理 びんび家',
    '徳島県鳴門市北灘町粟田ハシカ谷20-2',
    '088-682-0023',
    'https://tabelog.com/tokushima/A3601/A360102/36000021/'
  ),
  dining(
    'naruto-dining-04',
    '中国料理 翆陽',
    '徳島県鳴門市北灘町折野字上三津167-3 エクシブ鳴門 ２Ｆ',
    '088-683-8111',
    'https://tabelog.com/tokushima/A3601/A360102/36000726/'
  ),
  dining(
    'naruto-dining-05',
    'うなぎ処　岡',
    '徳島県鳴門市撫養町小桑島字前浜272-1',
    '088-685-4880',
    'https://tabelog.com/tokushima/A3601/A360102/36005434/'
  ),
  dining(
    'naruto-dining-06',
    '一匠',
    '徳島県鳴門市大津町矢倉六ノ越37-3',
    '088-685-2733',
    'https://tabelog.com/tokushima/A3601/A360102/36002902/'
  ),
  dining(
    'naruto-dining-07',
    'ボナキュー',
    '徳島県鳴門市北灘町折野字上三津167-3 グランドエクシブ鳴門',
    '088-683-8111',
    'https://tabelog.com/tokushima/A3601/A360102/36003031/'
  ),
  dining(
    'naruto-dining-08',
    '初海',
    '徳島県鳴門市北灘町折野字上三津167-3 グランドエクシブ鳴門',
    '088-683-8111',
    'https://tabelog.com/tokushima/A3601/A360102/36004377/'
  ),
  dining(
    'naruto-dining-09',
    'あらし',
    '徳島県鳴門市撫養町大桑島字北ノ浜51-1',
    '088-686-0005',
    'https://tabelog.com/tokushima/A3601/A360102/36000020/'
  ),
  dining(
    'naruto-dining-10',
    'いのたに 鳴門店',
    '徳島県鳴門市撫養町南浜字東浜34-24',
    '088-685-6057',
    'https://tabelog.com/tokushima/A3601/A360102/36000075/'
  ),
  dining(
    'naruto-dining-11',
    'フォーシーズン',
    '徳島県鳴門市鳴門町土佐泊浦字大毛16-45 アオアヲナルトリゾート 8F',
    '088-687-2580',
    'https://tabelog.com/tokushima/A3601/A360102/36005139/'
  ),
  dining(
    'naruto-dining-12',
    '舩本うどん',
    '徳島県鳴門市鳴門町高島字中島25-2',
    '088-687-2099',
    'https://tabelog.com/tokushima/A3601/A360102/36000894/'
  ),
  dining(
    'naruto-dining-13',
    'カフェ・ド・ジヴェルニー',
    '徳島県鳴門市鳴門町土佐泊浦字福池65-1 大塚国際美術館 B2F',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36003543/'
  ),
  dining(
    'naruto-dining-14',
    'リストランテ フィッシュボーン',
    '徳島県鳴門市鳴門町土佐泊浦字高砂186-16 モアナコースト',
    null,
    'https://tabelog.com/tokushima/A3601/A360102/36000070/'
  )
];

export const NARUTO_DINING_NAME_SET: ReadonlySet<string> = new Set(
  NARUTO_TRAVEL_DINING.map((row) => row.name_ja)
);

export const NARUTO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const NARUTO_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const NARUTO_TRAVEL_ALL: readonly TravelRow[] = [
  ...NARUTO_TRAVEL_DINING,
  ...NARUTO_TRAVEL_STAY,
  ...NARUTO_TRAVEL_SHOPPING,
  ...NARUTO_TRAVEL_COMMERCE
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

export function isNarutoOnsenPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isNarutoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NARUTO_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isNarutoStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isNarutoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NARUTO_DINING_NAME_SET.has(row.name_ja);
}

export function narutoSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return NARUTO_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankNarutoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isNarutoOnsenPackRow(row) &&
      !isNarutoExperiencePackRow(row) &&
      !isNarutoStayPackRow(row) &&
      !isNarutoDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of NARUTO_SIGHT_PINS) {
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

export function narutoSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '鳴門市 飲食案内' : 'Naruto City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '鳴門市 宿泊案内' : 'Naruto City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function narutoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isNarutoOnsenPackRow(row)) return 'onsen';
  if (isNarutoExperiencePackRow(row)) return 'experience';
  if (isNarutoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isNarutoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function narutoPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isNarutoOnsenPackRow(row) &&
      !isNarutoExperiencePackRow(row) &&
      !isNarutoStayPackRow(row) &&
      !isNarutoDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNarutoOnsenPackRow(row);
  if (filter === 'experience') return isNarutoExperiencePackRow(row);
  if (filter === 'stay') return isNarutoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveNarutoFilter(c: string | undefined, q: string): FilterId {
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

export const NARUTO_HALL = NARUTO.hall;
