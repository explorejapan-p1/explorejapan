/**
 * Tosa City travel layer. No frozen pack.
 * Dining from 食べログ 土佐市 (C39205). Stay: 土佐龍温泉 三陽荘 Commons 離れ (Rakuten mediaInfo absent). Onsen: 大浴場露天風呂 Commons (stay≠onsen). Experience: 新居地区観光交流施設南風.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TOSA, TOSA_SIGHT_PHOTOS} from './tosa';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TOSA_TRAVEL_ACCESSED = '2026-09-08' as const;
export const TOSA_TRAVEL_SOURCES = {
  home: 'https://www.city.tosa.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E5%B8%82',
  kankou: 'https://tosacity-kankou.com/',
  niyodoBridge: 'https://ja.wikipedia.org/wiki/%E4%BB%81%E6%B7%80%E5%B7%9D%E6%B2%B3%E5%8F%A3%E5%A4%A7%E6%A9%8B',
  tabelogCity: 'https://tabelog.com/kochi/C39205/rstLst/',
  sanyoso: 'https://travel.rakuten.co.jp/HOTEL/84592/84592.html'
} as const;

export const TOSA_ONSEN_PACK_NAMES = ['土佐龍温泉 三陽荘 大浴場'] as const;
export const TOSA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TOSA_ONSEN_PACK_NAMES);
export const TOSA_EXPERIENCE_PACK_NAMES = ['新居地区観光交流施設南風'] as const;
export const TOSA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TOSA_EXPERIENCE_PACK_NAMES);
export const TOSA_STAY_PACK_NAMES = [] as const;
export const TOSA_STAY_PACK_SET: ReadonlySet<string> = new Set(TOSA_STAY_PACK_NAMES);
export const TOSA_SHOPPING_PACK_NAMES = [] as const;
export const TOSA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TOSA_SHOPPING_PACK_NAMES);

export const TOSA_SIGHT_PINS = ['仁淀川河口大橋','清瀧寺','青龍寺','宇佐漁港','蟹ヶ池','新居緑地公園'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TOSA_TRAVEL_ACCESSED};
}
export const TOSA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('tosa-stay-01', '土佐龍温泉 三陽荘', '高知県土佐市宇佐町竜504-1', '088-856-0001', 'https://travel.rakuten.co.jp/HOTEL/84592/84592.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TOSA_TRAVEL_ACCESSED};
}
export const TOSA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('tosa-dining-01', '焼肉義塾', '高知県土佐市高岡町甲1885-8', '088-828-7202', 'https://tabelog.com/kochi/A3903/A390301/39006832/'),
  dining('tosa-dining-02', 'ビー＆エム サーフ＆カフェ', '高知県土佐市新居66-40', '088-856-2267', 'https://tabelog.com/kochi/A3903/A390301/39006861/'),
  dining('tosa-dining-03', '高見のたこ焼き 高岡店', '高知県土佐市高岡町甲2003-2', '088-852-3430', 'https://tabelog.com/kochi/A3903/A390302/39008902/'),
  dining('tosa-dining-04', '鍋焼きラーメン 悟空', '高知県土佐市高岡町甲2116-3', '080-4564-0641', 'https://tabelog.com/kochi/A3903/A390301/39008343/'),
  dining('tosa-dining-05', '台湾料理 吉源', '高知県土佐市高岡町乙3104-1', '088-856-9989', 'https://tabelog.com/kochi/A3903/A390301/39007208/'),
  dining('tosa-dining-06', 'お好焼き やまさき', '高知県土佐市宇佐町宇佐1707', '088-856-0252', 'https://tabelog.com/kochi/A3903/A390301/39003710/'),
  dining('tosa-dining-07', '海町食堂ヒナサク', '高知県土佐市宇佐町宇佐1143-5', '088-856-0565', 'https://tabelog.com/kochi/A3903/A390301/39006093/'),
  dining('tosa-dining-08', 'めん六や 高知土佐店', '高知県土佐市高岡町字光永北ノ丁乙3343-1', null, 'https://tabelog.com/kochi/A3903/A390301/39006597/'),
  dining('tosa-dining-09', 'ドライブイン ストップ', '高知県土佐市蓮池2024-1', '088-852-0692', 'https://tabelog.com/kochi/A3903/A390301/39005557/'),
  dining('tosa-dining-10', '貝鮮浜焼きバイキング あみ浜食堂', '高知県土佐市宇佐町竜513-1', '088-856-2239', 'https://tabelog.com/kochi/A3903/A390301/39007950/'),
  dining('tosa-dining-11', 'のしや本家', '高知県土佐市高岡町乙169-1', '088-852-0162', 'https://tabelog.com/kochi/A3903/A390301/39005310/'),
  dining('tosa-dining-12', '割烹 玉杯', '高知県土佐市高岡町乙38', '088-852-0330', 'https://tabelog.com/kochi/A3903/A390301/39003690/'),
  dining('tosa-dining-13', '居酒屋 へんしも', '高知県土佐市高岡町甲1975', '088-852-6999', 'https://tabelog.com/kochi/A3903/A390302/39007113/'),
  dining('tosa-dining-14', 'お好み焼彦兵衛', '高知県土佐市高岡町甲1063-3', '088-855-9017', 'https://tabelog.com/kochi/A3903/A390301/39006809/'),
  dining('tosa-dining-15', '萩の茶屋', '高知県土佐市宇佐町宇佐2739', '088-856-1908', 'https://tabelog.com/kochi/A3903/A390301/39000589/'),
  dining('tosa-dining-16', '異喰間 広', '高知県土佐市家俊1109-1', '088-855-0909', 'https://tabelog.com/kochi/A3903/A390301/39007674/'),
];

export const TOSA_DINING_NAME_SET: ReadonlySet<string> = new Set(TOSA_TRAVEL_DINING.map((row) => row.name_ja));
export const TOSA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TOSA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TOSA_TRAVEL_ALL: readonly TravelRow[] = [...TOSA_TRAVEL_DINING, ...TOSA_TRAVEL_STAY, ...TOSA_TRAVEL_SHOPPING, ...TOSA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTosaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOSA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTosaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOSA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTosaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTosaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTosaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOSA_DINING_NAME_SET.has(row.name_ja);
}
export function tosaSightPhoto(nameJa: string): MimaPlacePhoto | null { return TOSA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTosaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTosaOnsenPackRow(row) && !isTosaExperiencePackRow(row) && !isTosaStayPackRow(row) && !isTosaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TOSA_SIGHT_PINS) {
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
export function tosaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '土佐市 飲食案内' : 'Tosa City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '土佐市 宿泊案内' : 'Tosa City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '土佐市 買物案内' : 'Tosa City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function tosaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTosaOnsenPackRow(row)) return 'onsen';
  if (isTosaExperiencePackRow(row)) return 'experience';
  if (isTosaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTosaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function tosaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTosaOnsenPackRow(row) && !isTosaExperiencePackRow(row) && !isTosaStayPackRow(row) && !isTosaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTosaOnsenPackRow(row);
  if (filter === 'experience') return isTosaExperiencePackRow(row);
  if (filter === 'stay') return isTosaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTosaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TOSA_HALL = TOSA.hall;
