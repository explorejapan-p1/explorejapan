/**
 * Onomichi City (Hiroshima) travel layer. Slug onomichi. No frozen pack.
 * Dining from 食べログ 尾道市 (C34205)×16 with dish JPGs. Stay: Rakuten 部屋 stills×16. Onsen: facility bath still×6 (stay≠onsen EXTRA name). Experience: 0 honest.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {ONOMICHI, ONOMICHI_SIGHT_PHOTOS} from './onomichi';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const ONOMICHI_TRAVEL_ACCESSED = '2026-09-10' as const;
export const ONOMICHI_TRAVEL_SOURCES = {
  home: 'https://www.city.onomichi.hiroshima.jp/', hall: 'https://www.city.onomichi.hiroshima.jp/soshiki/8/3235.html',
  tabelogCity: 'https://tabelog.com/hiroshima/C34205/rstLst/'
} as const;

export const ONOMICHI_ONSEN_PACK_NAMES = ["ホテル　いんのしま 大浴場", "天然温泉　尾道みなと館 大浴場", "尾道倶楽部 大浴場", "天然温泉　尾道ふれあいの里 大浴場", "Ａｚｕｍｉ　Ｓｅｔｏｄａ 大浴場", "天然温泉うら湯　旅館浦島 大浴場"] as const;
export const ONOMICHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(ONOMICHI_ONSEN_PACK_NAMES);
export const ONOMICHI_EXPERIENCE_PACK_NAMES = [] as const;
export const ONOMICHI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(ONOMICHI_EXPERIENCE_PACK_NAMES);
export const ONOMICHI_STAY_PACK_NAMES = [] as const;
export const ONOMICHI_STAY_PACK_SET: ReadonlySet<string> = new Set(ONOMICHI_STAY_PACK_NAMES);
export const ONOMICHI_SHOPPING_PACK_NAMES = [] as const;
export const ONOMICHI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(ONOMICHI_SHOPPING_PACK_NAMES);

export const ONOMICHI_SIGHT_PINS = ["千光寺", "尾道水道", "浄土寺", "尾道駅", "因島大橋"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: ONOMICHI_TRAVEL_ACCESSED};
}
export const ONOMICHI_TRAVEL_STAY: readonly TravelRow[] = [
  stay("onomichi-stay-001", "ホテルアルファーワン尾道", "広島県尾道市西御所町1-1", null, "https://travel.rakuten.co.jp/HOTEL/15917/15917.html"),
  stay("onomichi-stay-002", "さくらしまなみホテル尾道駅前", "広島県尾道市東御所町5-1", "0848-29-9390", "https://travel.rakuten.co.jp/HOTEL/182744/182744.html"),
  stay("onomichi-stay-003", "グリーンヒルホテル尾道", "広島県尾道市東御所町9-1", "0848-24-0100", "https://travel.rakuten.co.jp/HOTEL/783/783.html"),
  stay("onomichi-stay-004", "尾道国際ホテル", "広島県尾道市新浜1-13-6", "0848-25-5931", "https://travel.rakuten.co.jp/HOTEL/470/470.html"),
  stay("onomichi-stay-005", "尾道第一ホテル", "広島県尾道市西御所町4-7", "0848-23-4567", "https://travel.rakuten.co.jp/HOTEL/4612/4612.html"),
  stay("onomichi-stay-006", "尾道ロイヤルホテル", "広島県尾道市土堂2-9-27", "0848-23-2111", "https://travel.rakuten.co.jp/HOTEL/4766/4766.html"),
  stay("onomichi-stay-007", "天然温泉　尾道みなと館", "広島県尾道市久保1-3-36", "0848-20-8222", "https://travel.rakuten.co.jp/HOTEL/153136/153136.html"),
  stay("onomichi-stay-008", "尾道倶楽部", "広島県尾道市西土堂町15-20", "0848-29-9206", "https://travel.rakuten.co.jp/HOTEL/195943/195943.html"),
  stay("onomichi-stay-009", "ＨＯＴＥＬ　ＣＹＣＬＥ（ホテルサイクル）", "広島県尾道市西御所町5-11", "050-2017-8989", "https://travel.rakuten.co.jp/HOTEL/145459/145459.html"),
  stay("onomichi-stay-010", "オリエントホテルＯＮＯＭＩＣＨＩ", "広島県尾道市久保1-5-16", "0848-38-2340", "https://travel.rakuten.co.jp/HOTEL/191609/191609.html"),
  stay("onomichi-stay-011", "ＨＯＴＥＬ　ＢＥＡＣＯＮ　ＯＮＯＭＩＣＨＩ（ホテルビーコンおのみち）", "広島県尾道市東御所町1-1", null, "https://travel.rakuten.co.jp/HOTEL/184027/184027.html"),
  stay("onomichi-stay-012", "ホテル　いんのしま", "広島県尾道市因島土生町平木288", "0845-22-4661", "https://travel.rakuten.co.jp/HOTEL/14705/14705.html"),
  stay("onomichi-stay-013", "天然温泉　尾道ふれあいの里", "広島県尾道市御調町高尾1369", null, "https://travel.rakuten.co.jp/HOTEL/84829/84829.html"),
  stay("onomichi-stay-014", "Ａｒｂｏｒ　Ｏｎｏｍｉｃｈｉ", "広島県尾道市十四日元町4-9", "0848-51-6470", "https://travel.rakuten.co.jp/HOTEL/199230/199230.html"),
  stay("onomichi-stay-015", "おのみち帆聲", "広島県尾道市久保2丁目15-15", null, "https://travel.rakuten.co.jp/HOTEL/184441/184441.html"),
  stay("onomichi-stay-016", "尾道やすらぎの宿　しーそー", "広島県尾道市向島町84-2", "0848-51-7968", "https://travel.rakuten.co.jp/HOTEL/166267/166267.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: ONOMICHI_TRAVEL_ACCESSED};
}
export const ONOMICHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining("onomichi-dining-01", "The RESTAURANT", "広島県尾道市の海運倉庫をリノベーションした\r\n「ONOMICHI", null, "https://tabelog.com/hiroshima/A3406/A340302/34019254/"),
  dining("onomichi-dining-02", "廻船酒蔵 ベッチャーの胃ぶくろ", "広島県尾道市十四日元町5-9", null, "https://tabelog.com/hiroshima/A3406/A340302/34001070/"),
  dining("onomichi-dining-03", "尾道WHARF", "広島県尾道市東御所町9-1", null, "https://tabelog.com/hiroshima/A3406/A340302/34019761/"),
  dining("onomichi-dining-04", "Lock’y", "広島県尾道市十四日元町6-14", null, "https://tabelog.com/hiroshima/A3406/A340302/34034456/"),
  dining("onomichi-dining-05", "赤から 東尾道店", "広島県尾道市高須町4788-13", null, "https://tabelog.com/hiroshima/A3406/A340302/34024631/"),
  dining("onomichi-dining-06", "鮨 やくしどう", "広島県尾道市の「鮨", null, "https://tabelog.com/hiroshima/A3406/A340302/34029479/"),
  dining("onomichi-dining-07", "えひめ屋", "広島県尾道市向島町5558-25", null, "https://tabelog.com/hiroshima/A3406/A340601/34004710/"),
  dining("onomichi-dining-08", "寿乃", "広島県尾道市因島土生町塩浜南区1906-18", null, "https://tabelog.com/hiroshima/A3406/A340602/34013021/"),
  dining("onomichi-dining-09", "HOLLAND VILLAGE CAFÉ ONOMICHI", "広島県尾道市西久保町27-2", null, "https://tabelog.com/hiroshima/A3406/A340302/34034509/"),
  dining("onomichi-dining-10", "LOG", "広島県尾道市東土堂町11-12", null, "https://tabelog.com/hiroshima/A3406/A340302/34025504/"),
  dining("onomichi-dining-11", "イタリア料理 コラッジオ", "広島県尾道市三軒家町3-1", null, "https://tabelog.com/hiroshima/A3406/A340302/34002416/"),
  dining("onomichi-dining-12", "かき左右衛門", "広島県尾道市土堂2-9-20", null, "https://tabelog.com/hiroshima/A3406/A340302/34015532/"),
  dining("onomichi-dining-13", "魚民 尾道南口駅前店", "広島県尾道市東御所町2-11", null, "https://tabelog.com/hiroshima/A3406/A340302/34012131/"),
  dining("onomichi-dining-14", "やきにく孫悟空 尾道店", "広島県尾道市高須町4797-4", null, "https://tabelog.com/hiroshima/A3406/A340302/34011708/"),
  dining("onomichi-dining-15", "千年の宴 尾道南口駅前店", "広島県尾道市東御所町2-11", null, "https://tabelog.com/hiroshima/A3406/A340302/34012134/"),
  dining("onomichi-dining-16", "たまがんぞう", "広島県尾道市土堂1-11-16", null, "https://tabelog.com/hiroshima/A3406/A340302/34002428/"),
];
export const ONOMICHI_DINING_NAME_SET: ReadonlySet<string> = new Set(ONOMICHI_TRAVEL_DINING.map((row) => row.name_ja));
export const ONOMICHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const ONOMICHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const ONOMICHI_TRAVEL_ALL: readonly TravelRow[] = [...ONOMICHI_TRAVEL_DINING, ...ONOMICHI_TRAVEL_STAY, ...ONOMICHI_TRAVEL_SHOPPING, ...ONOMICHI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOnomichiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ONOMICHI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOnomichiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ONOMICHI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOnomichiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOnomichiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOnomichiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ONOMICHI_DINING_NAME_SET.has(row.name_ja);
}
export function onomichiSightPhoto(nameJa: string): MimaPlacePhoto | null { return ONOMICHI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOnomichiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOnomichiOnsenPackRow(row) && !isOnomichiExperiencePackRow(row) && !isOnomichiStayPackRow(row) && !isOnomichiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of ONOMICHI_SIGHT_PINS) {
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
export function onomichiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '尾道市 飲食案内' : 'Onomichi City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '尾道市 宿泊案内' : 'Onomichi City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '尾道市 買物案内' : 'Onomichi City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function onomichiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOnomichiOnsenPackRow(row)) return 'onsen';
  if (isOnomichiExperiencePackRow(row)) return 'experience';
  if (isOnomichiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOnomichiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function onomichiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOnomichiOnsenPackRow(row) && !isOnomichiExperiencePackRow(row) && !isOnomichiStayPackRow(row) && !isOnomichiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOnomichiOnsenPackRow(row);
  if (filter === 'experience') return isOnomichiExperiencePackRow(row);
  if (filter === 'stay') return isOnomichiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOnomichiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const ONOMICHI_HALL = ONOMICHI.hall;
