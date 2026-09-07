/**
 * Utazu Town travel layer. No frozen pack.
 * Dining from 食べログ 宇多津町 (C37386) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct bath name + bath still.
 * Experience: Commons 道の駅恋人の聖地うたづ臨海公園. Shopping / commerce: honest 0.
 * Do not invent. Do not copy Tokushima / other-Kagawa TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {UTAZU, UTAZU_SIGHT_PHOTOS} from './utazu';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const UTAZU_TRAVEL_ACCESSED = '2026-09-07' as const;

export const UTAZU_TRAVEL_SOURCES = {
  home: 'https://www.town.utazu.lg.jp/',
  hall: 'https://www.town.utazu.lg.jp/',
  kankou: 'https://utazu-kanko.jp/',
  goldTower: 'https://www.town.utazu.lg.jp/page/1174.html',
  rinkai: 'https://utazu-kanko.jp/tourism/340.html',
  tabelogCity: 'https://tabelog.com/kagawa/C37386/rstLst/',
  grand: 'https://travel.rakuten.co.jp/HOTEL/15605/15605.html',
  az: 'https://travel.rakuten.co.jp/HOTEL/181836/181836.html'
} as const;

export const UTAZU_ONSEN_PACK_NAMES = ['宇多津グランドホテル 大浴場'] as const;
export const UTAZU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(UTAZU_ONSEN_PACK_NAMES);
export const UTAZU_EXPERIENCE_PACK_NAMES = ['道の駅恋人の聖地うたづ臨海公園'] as const;
export const UTAZU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(UTAZU_EXPERIENCE_PACK_NAMES);
export const UTAZU_STAY_PACK_NAMES = [] as const;
export const UTAZU_STAY_PACK_SET: ReadonlySet<string> = new Set(UTAZU_STAY_PACK_NAMES);
export const UTAZU_SHOPPING_PACK_NAMES = [] as const;
export const UTAZU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(UTAZU_SHOPPING_PACK_NAMES);

export const UTAZU_SIGHT_PINS = [
  'ゴールドタワー',
  '宇多津臨海公園',
  '四国水族館',
  '復元塩田',
  '宇多津駅',
  '青ノ山'
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
    accessed: UTAZU_TRAVEL_ACCESSED
  };
}

export const UTAZU_TRAVEL_STAY: readonly TravelRow[] = [
  stay('utazu-stay-01', '宇多津グランドホテル', '香川県綾歌郡宇多津町浜三番丁22-1', '0877-41-1000', 'https://travel.rakuten.co.jp/HOTEL/15605/15605.html'),
  stay('utazu-stay-02', 'ＨＯＴＥＬ　ＡＺ　香川宇多津店', '香川県綾歌郡宇多津町新開2419-5', '0877-49-0501', 'https://travel.rakuten.co.jp/HOTEL/181836/181836.html')
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
    accessed: UTAZU_TRAVEL_ACCESSED
  };
}

export const UTAZU_TRAVEL_DINING: readonly TravelRow[] = [
  dining('utazu-dining-01', '旬処 栄', '香川県綾歌郡宇多津町平山2628-147', null, 'https://tabelog.com/kagawa/A3702/A370202/37014623/'),
  dining('utazu-dining-02', '吾割食堂', '香川県綾歌郡宇多津町浜五番丁51-4', null, 'https://tabelog.com/kagawa/A3702/A370202/37004143/'),
  dining('utazu-dining-03', '魚民 宇多津店', '香川県綾歌郡宇多津町浜二番丁20-13', null, 'https://tabelog.com/kagawa/A3702/A370202/37007830/'),
  dining('utazu-dining-04', '焼肉ひらい 宇多津店', '香川県綾歌郡宇多津町浜五番丁51番2', null, 'https://tabelog.com/kagawa/A3702/A370202/37000853/'),
  dining('utazu-dining-05', '宇多津ホルモン', '香川県綾歌郡宇多津町浜三番丁26-2', null, 'https://tabelog.com/kagawa/A3702/A370202/37006739/'),
  dining('utazu-dining-06', '青春のおそばやさん', '香川県綾歌郡宇多津町浜6-89-2', null, 'https://tabelog.com/kagawa/A3702/A370202/37013119/'),
  dining('utazu-dining-07', '丸亀骨付鳥一丁 宇多津店', '香川県綾歌郡宇多津町浜一番丁7-9', null, 'https://tabelog.com/kagawa/A3702/A370202/37014450/'),
  dining('utazu-dining-08', '次男坊 宇多津店', '香川県綾歌郡宇多津町浜三番丁25-7', null, 'https://tabelog.com/kagawa/A3702/A370202/37002291/'),
  dining('utazu-dining-09', 'めりけんや かけはし店', '香川県綾歌郡宇多津町浜三番丁36-1', null, 'https://tabelog.com/kagawa/A3702/A370202/37001422/'),
  dining('utazu-dining-10', '遊食房屋 宇多津店', '香川県綾歌郡宇多津町浜三番丁24-14', null, 'https://tabelog.com/kagawa/A3702/A370202/37002329/'),
  dining('utazu-dining-11', '麺処 たでや', '香川県綾歌郡宇多津町浜二番丁16', null, 'https://tabelog.com/kagawa/A3702/A370202/37013867/'),
  dining('utazu-dining-12', 'ぴこぴこ精肉店 宇多津', '香川県綾歌郡宇多津町浜二番丁12-5', null, 'https://tabelog.com/kagawa/A3702/A370202/37010157/'),
  dining('utazu-dining-13', '瀬戸パーク', '香川県綾歌郡宇多津町浜3-24-14', null, 'https://tabelog.com/kagawa/A3702/A370202/37014869/'),
  dining('utazu-dining-14', 'エコランド鵜足津', '香川県綾歌郡宇多津町平山2628-718', null, 'https://tabelog.com/kagawa/A3702/A370202/37004793/'),
  dining('utazu-dining-15', 'つるぎ', '香川県綾歌郡宇多津町中村', null, 'https://tabelog.com/kagawa/A3702/A370202/37002798/'),
  dining('utazu-dining-16', '穂の香', '香川県綾歌郡宇多津町平山2628-627', null, 'https://tabelog.com/kagawa/A3702/A370202/37008588/'),
];

export const UTAZU_DINING_NAME_SET: ReadonlySet<string> = new Set(
  UTAZU_TRAVEL_DINING.map((row) => row.name_ja)
);

export const UTAZU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const UTAZU_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const UTAZU_TRAVEL_ALL: readonly TravelRow[] = [
  ...UTAZU_TRAVEL_DINING,
  ...UTAZU_TRAVEL_STAY,
  ...UTAZU_TRAVEL_SHOPPING,
  ...UTAZU_TRAVEL_COMMERCE
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

export function isUtazuOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UTAZU_ONSEN_PACK_SET.has(row.name_ja);
}

export function isUtazuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UTAZU_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isUtazuStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isUtazuShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isUtazuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UTAZU_DINING_NAME_SET.has(row.name_ja);
}

export function utazuSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return UTAZU_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankUtazuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isUtazuOnsenPackRow(row) &&
      !isUtazuExperiencePackRow(row) &&
      !isUtazuStayPackRow(row) &&
      !isUtazuDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of UTAZU_SIGHT_PINS) {
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

export function utazuSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '宇多津町 飲食案内' : 'Utazu dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '宇多津町 宿泊案内' : 'Utazu lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '宇多津町 買物案内' : 'Utazu shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function utazuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isUtazuOnsenPackRow(row)) return 'onsen';
  if (isUtazuExperiencePackRow(row)) return 'experience';
  if (isUtazuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isUtazuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function utazuPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isUtazuOnsenPackRow(row) &&
      !isUtazuExperiencePackRow(row) &&
      !isUtazuStayPackRow(row) &&
      !isUtazuDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isUtazuOnsenPackRow(row);
  if (filter === 'experience') return isUtazuExperiencePackRow(row);
  if (filter === 'stay') return isUtazuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveUtazuFilter(c: string | undefined, q: string): FilterId {
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

export const UTAZU_HALL = UTAZU.hall;
