/**
 * Naruto City travel layer. No frozen pack.
 * Dining from 食べログ 鳴門市 (C36202) public shop pages. FOOD dish photos required.
 * Do not invent pack dining. Do not copy 徳島市 / 北島 / 松茂 / 藍住 TRAVEL_* rows or photos.
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

export const NARUTO_TRAVEL_ACCESSED = '2026-09-05' as const;

export const NARUTO_TRAVEL_SOURCES = {
  home: 'https://www.city.naruto.tokushima.jp/',
  hall: 'https://www.city.naruto.tokushima.jp/docs/2025090900052/',
  kanko: 'https://www.city.naruto.tokushima.jp/category/bunya/kanko/',
  uzunomichi: 'https://www.uzunomichi.jp/',
  doitsukan: 'https://doitsukan.com/',
  tabelogCity: 'https://tabelog.com/tokushima/C36202/rstLst/'
} as const;

export const NARUTO_ONSEN_PACK_NAMES = [] as const;
export const NARUTO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NARUTO_ONSEN_PACK_NAMES);
export const NARUTO_STAY_PACK_NAMES = [] as const;
export const NARUTO_STAY_PACK_SET: ReadonlySet<string> = new Set(NARUTO_STAY_PACK_NAMES);

export const NARUTO_SIGHT_PINS = [
  '鳴門の渦潮',
  '大鳴門橋遊歩道 渦の道',
  '大鳴門橋',
  '鳴門市ドイツ館',
  '霊山寺'
] as const;

export const NARUTO_TRAVEL_STAY: readonly TravelRow[] = [];

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

export function isNarutoExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
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
  if (isNarutoStayPackRow(row)) return 'stay';
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
      !isNarutoStayPackRow(row) &&
      !isNarutoDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNarutoOnsenPackRow(row);
  if (filter === 'experience') return false;
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
