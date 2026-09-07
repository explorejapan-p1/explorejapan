/**
 * Nankoku City travel layer. No frozen pack.
 * Dining from 食べログ 南国市 (C39204). Stay: Southern City Hotel Rakuten room. Onsen: honest 0 (unit baths only). Experience: 道の駅南国 風良里.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NANKOKU, NANKOKU_SIGHT_PHOTOS} from './nankoku';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const NANKOKU_TRAVEL_ACCESSED = '2026-09-08' as const;
export const NANKOKU_TRAVEL_SOURCES = {
  home: 'https://www.city.nankoku.lg.jp/', hall: 'https://www.city.nankoku.lg.jp/life/life_dtl.php?hdnKey=3247',
  kankou: 'https://www.city.nankoku.lg.jp/',
  kokubunji: 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E5%9B%BD%E5%88%86%E5%AF%BA',
  tabelogCity: 'https://tabelog.com/kochi/C39204/rstLst/',
  southern: 'https://travel.rakuten.co.jp/HOTEL/1807/1807.html'
} as const;

export const NANKOKU_ONSEN_PACK_NAMES = [] as const;
export const NANKOKU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NANKOKU_ONSEN_PACK_NAMES);
export const NANKOKU_EXPERIENCE_PACK_NAMES = ['道の駅南国 風良里'] as const;
export const NANKOKU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(NANKOKU_EXPERIENCE_PACK_NAMES);
export const NANKOKU_STAY_PACK_NAMES = [] as const;
export const NANKOKU_STAY_PACK_SET: ReadonlySet<string> = new Set(NANKOKU_STAY_PACK_NAMES);
export const NANKOKU_SHOPPING_PACK_NAMES = [] as const;
export const NANKOKU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(NANKOKU_SHOPPING_PACK_NAMES);

export const NANKOKU_SIGHT_PINS = ['土佐国分寺','岡豊城','高知県立歴史民俗資料館','高知龍馬空港','前浜掩体群','後免駅'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: NANKOKU_TRAVEL_ACCESSED};
}
export const NANKOKU_TRAVEL_STAY: readonly TravelRow[] = [
  stay('nankoku-stay-01', 'サザンシティホテル', '高知県南国市明見933', '088-863-2000', 'https://travel.rakuten.co.jp/HOTEL/1807/1807.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: NANKOKU_TRAVEL_ACCESSED};
}
export const NANKOKU_TRAVEL_DINING: readonly TravelRow[] = [
  dining('nankoku-dining-01', 'かいだ屋', '高知県南国市浜改田1330-3', '088-865-3740', 'https://tabelog.com/kochi/A3901/A390102/39000043/'),
  dining('nankoku-dining-02', '多国籍食堂 錆と煤', '高知県南国市立田632-19', '088-855-9393', 'https://tabelog.com/kochi/A3901/A390102/39006430/'),
  dining('nankoku-dining-03', 'うなぎ処福', '高知県南国市久礼田432-1', '088-880-8833', 'https://tabelog.com/kochi/A3901/A390102/39000612/'),
  dining('nankoku-dining-04', '司 高知空港店', '高知県南国市久枝乙58 高知竜馬空港　２Ｆ', '088-863-5063', 'https://tabelog.com/kochi/A3901/A390106/39000026/'),
  dining('nankoku-dining-05', 'うちんくの食卓', '高知県南国市久枝乙58 高知竜馬空港ターミナルビル 2F', '088-863-2907', 'https://tabelog.com/kochi/A3901/A390102/39006329/'),
  dining('nankoku-dining-06', '農園レストラン トリトン', '高知県南国市大埇乙847-1', '088-856-5312', 'https://tabelog.com/kochi/A3901/A390102/39005681/'),
  dining('nankoku-dining-07', '國丸 南国店', '高知県南国市明見886-1', '088-803-9238', 'https://tabelog.com/kochi/A3901/A390102/39002230/'),
  dining('nankoku-dining-08', '景福宮', '高知県南国市上末松316', '088-855-6735', 'https://tabelog.com/kochi/A3901/A390102/39000543/'),
  dining('nankoku-dining-09', '鳥心 とりやき食堂', '高知県南国市十市1431-1', '088-865-2915', 'https://tabelog.com/kochi/A3901/A390102/39005182/'),
  dining('nankoku-dining-10', '鰻料理 むなぎん', '高知県南国市大埇乙1082-3', '088-874-3761', 'https://tabelog.com/kochi/A3901/A390101/39007477/'),
  dining('nankoku-dining-11', 'カフェレスト風良里', '高知県南国市左右山102-1', '088-880-8330', 'https://tabelog.com/kochi/A3901/A390102/39001776/'),
  dining('nankoku-dining-12', '三代目安兵衛 南国店', '高知県南国市大埇甲1509-9', '088-855-3850', 'https://tabelog.com/kochi/A3901/A390102/39005709/'),
  dining('nankoku-dining-13', 'ICHIBA', '高知県南国市久枝乙58 高知空港ビル 2F', '088-864-1525', 'https://tabelog.com/kochi/A3901/A390102/39007976/'),
  dining('nankoku-dining-14', 'ボラレ', '高知県南国市久枝乙58 高知龍馬空港 2F', null, 'https://tabelog.com/kochi/A3901/A390102/39008285/'),
  dining('nankoku-dining-15', 'モンシェルトントン', '高知県南国市後免町1-8-35', '088-864-4522', 'https://tabelog.com/kochi/A3901/A390102/39000530/'),
  dining('nankoku-dining-16', 'レストランエリエール', '高知県南国市岡豊町小蓮1210-1 高知自動車道 南国サービスエリア上り線', '088-866-5701', 'https://tabelog.com/kochi/A3901/A390102/39003026/'),
];

export const NANKOKU_DINING_NAME_SET: ReadonlySet<string> = new Set(NANKOKU_TRAVEL_DINING.map((row) => row.name_ja));
export const NANKOKU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const NANKOKU_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const NANKOKU_TRAVEL_ALL: readonly TravelRow[] = [...NANKOKU_TRAVEL_DINING, ...NANKOKU_TRAVEL_STAY, ...NANKOKU_TRAVEL_SHOPPING, ...NANKOKU_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isNankokuOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NANKOKU_ONSEN_PACK_SET.has(row.name_ja);
}
export function isNankokuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NANKOKU_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isNankokuStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNankokuShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNankokuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NANKOKU_DINING_NAME_SET.has(row.name_ja);
}
export function nankokuSightPhoto(nameJa: string): MimaPlacePhoto | null { return NANKOKU_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankNankokuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isNankokuOnsenPackRow(row) && !isNankokuExperiencePackRow(row) && !isNankokuStayPackRow(row) && !isNankokuDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of NANKOKU_SIGHT_PINS) {
    const hit = sights.find((row) => row.name_ja === pin);
    if (!hit) continue; pinned.push(hit); used.add(hit.id); usedNames.add(hit.name_ja);
  }
  const restTourism: T[] = []; const restCultural: T[] = [];
  for (const row of sights) {
    if (used.has(row.id) || usedNames.has(row.name_ja)) continue;
    used.add(row.id); usedNames.add(row.name_ja);
    if (row.category === 'tourism') restTourism.push(row); else restCultural.push(row);
  }
  return [...pinned, ...restTourism, ...restCultural];
}
export function nankokuSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '南国市 飲食案内' : 'Nankoku City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '南国市 宿泊案内' : 'Nankoku City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '南国市 買物案内' : 'Nankoku City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function nankokuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isNankokuOnsenPackRow(row)) return 'onsen';
  if (isNankokuExperiencePackRow(row)) return 'experience';
  if (isNankokuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isNankokuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function nankokuPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isNankokuOnsenPackRow(row) && !isNankokuExperiencePackRow(row) && !isNankokuStayPackRow(row) && !isNankokuDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNankokuOnsenPackRow(row);
  if (filter === 'experience') return isNankokuExperiencePackRow(row);
  if (filter === 'stay') return isNankokuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveNankokuFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const NANKOKU_HALL = NANKOKU.hall;
