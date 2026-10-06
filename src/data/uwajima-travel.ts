/**
 * Uwajima City travel layer. No frozen pack.
 * Dining from 食べログ 宇和島市 (C38203)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath stills×5 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {UWAJIMA, UWAJIMA_SIGHT_PHOTOS} from './uwajima';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const UWAJIMA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const UWAJIMA_TRAVEL_SOURCES = {
  home: 'https://www.city.uwajima.ehime.jp/', hall: 'https://www.city.uwajima.ehime.jp/map/uwajima-shiyakusho.html',
  kanko: 'https://www.city.uwajima.ehime.jp/site/uwajima-jo/',
  castle: 'https://ja.wikipedia.org/wiki/%E5%AE%87%E5%92%8C%E5%B3%B6%E5%9F%8E',
  tabelogCity: 'https://tabelog.com/ehime/C38203/rstLst/',
  clement: 'https://travel.rakuten.co.jp/HOTEL/789/789.html'
} as const;

export const UWAJIMA_ONSEN_PACK_NAMES = ["宇和島オリエンタルホテル 大浴場", "宇和島第一ホテル だいいちの湯", "ホテルＣＯＲＡＬ（コーラル）宇和島 大浴場", "ホテルイシバシ 男湯・温泉", "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉 男女別天然温泉"] as const;
export const UWAJIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(UWAJIMA_ONSEN_PACK_NAMES);
export const UWAJIMA_EXPERIENCE_PACK_NAMES = [] as const;
export const UWAJIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(UWAJIMA_EXPERIENCE_PACK_NAMES);
export const UWAJIMA_STAY_PACK_NAMES = [] as const;
export const UWAJIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(UWAJIMA_STAY_PACK_NAMES);
export const UWAJIMA_SHOPPING_PACK_NAMES = [] as const;
export const UWAJIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(UWAJIMA_SHOPPING_PACK_NAMES);

export const UWAJIMA_SIGHT_PINS = ["宇和島城", "天赦園", "遊子水荷浦の段畑", "道の駅 みなとオアシスうわじま きさいや広場", "宇和島市立伊達博物館"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: UWAJIMA_TRAVEL_ACCESSED};
}
export const UWAJIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('uwajima-stay-001', "ＪＲホテルクレメント宇和島", "愛媛県宇和島市錦町10-1", null, "https://travel.rakuten.co.jp/HOTEL/789/789.html"),
  stay('uwajima-stay-002', "宇和島オリエンタルホテル", "愛媛県宇和島市鶴島町6-10", null, "https://travel.rakuten.co.jp/HOTEL/2352/2352.html"),
  stay('uwajima-stay-003', "宇和島ターミナルホテル", "愛媛県宇和島市天神町3-22", null, "https://travel.rakuten.co.jp/HOTEL/9647/9647.html"),
  stay('uwajima-stay-004', "宇和島リージェントホテル", "愛媛県宇和島市丸之内1-2-24", null, "https://travel.rakuten.co.jp/HOTEL/16805/16805.html"),
  stay('uwajima-stay-005', "ホテルＣＯＲＡＬ（コーラル）宇和島", "愛媛県宇和島市住吉町2-7-10", null, "https://travel.rakuten.co.jp/HOTEL/29188/29188.html"),
  stay('uwajima-stay-006', "ホテルイシバシ", "愛媛県宇和島市栄町港2-4-14", null, "https://travel.rakuten.co.jp/HOTEL/130595/130595.html"),
  stay('uwajima-stay-007', "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉", "愛媛県宇和島市錦町4-1", null, "https://travel.rakuten.co.jp/HOTEL/184525/184525.html"),
  stay('uwajima-stay-008', "ゲストハウスＧＯ－ＨＩＧＨＴＡＫＡ", "愛媛県宇和島市蒋渕2043", null, "https://travel.rakuten.co.jp/HOTEL/196127/196127.html"),
  stay('uwajima-stay-009', "釣り人が集う宿 レジャー民宿・西遊漁センター", "愛媛県宇和島市津島町針木大波の谷260-1", null, "https://travel.rakuten.co.jp/HOTEL/198564/198564.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: UWAJIMA_TRAVEL_ACCESSED};
}
export const UWAJIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('uwajima-dining-01', "ASAHI食堂", "愛媛県宇和島市丸之内5-3-14", "0895-49-3381", "https://tabelog.com/ehime/A3803/A380301/38012720/"),
  dining('uwajima-dining-02', "やきとり 鳥翔", "愛媛県宇和島市中央町2-2-11 スエズビル 1F", "0895-28-9888", "https://tabelog.com/ehime/A3803/A380301/38014442/"),
  dining('uwajima-dining-03', "京", "愛媛県宇和島市中央町2-3-13 愛ランドビル 1F", "0895-65-9090", "https://tabelog.com/ehime/A3803/A380301/38015889/"),
  dining('uwajima-dining-04', "kitchen sola", "愛媛県宇和島市津島町針木187-1", "070-8390-1197", "https://tabelog.com/ehime/A3803/A380301/38014494/"),
  dining('uwajima-dining-05', "炭火焼鳥 ごえん", "愛媛県宇和島市丸之内1-1-32", "0895-65-9988", "https://tabelog.com/ehime/A3803/A380301/38015003/"),
  dining('uwajima-dining-06', "しゃぶしゃぶ温野菜 宇和島店", "愛媛県宇和島市伊吹町甲1522-2", "0895-25-3477", "https://tabelog.com/ehime/A3803/A380301/38010443/"),
  dining('uwajima-dining-07', "国安", "愛媛県宇和島市吉田町東小路甲71-1", "0895-52-0533", "https://tabelog.com/ehime/A3803/A380301/38002319/"),
  dining('uwajima-dining-08', "食事処 なにわ", "愛媛県宇和島市蒋渕3282", "0895-63-0008", "https://tabelog.com/ehime/A3803/A380301/38015223/"),
  dining('uwajima-dining-09', "みよし食堂", "愛媛県宇和島市津島町岩松727", null, "https://tabelog.com/ehime/A3803/A380301/38008637/"),
  dining('uwajima-dining-10', "宇和島市観光情報センター シロシタ", "愛媛県宇和島市丸之内5-1-4", "0895-49-5700", "https://tabelog.com/ehime/A3803/A380301/38014827/"),
  dining('uwajima-dining-11', "パティシエ･ド･ポルト", "愛媛県宇和島市丸之内4-4-26", "0895-25-8777", "https://tabelog.com/ehime/A3803/A380301/38005706/"),
  dining('uwajima-dining-12', "レストラン こにし", "愛媛県宇和島市吉田町立間2-2575-3", "0895-52-0352", "https://tabelog.com/ehime/A3803/A380301/38012787/"),
  dining('uwajima-dining-13', "縁麻辣湯  宇和島", "愛媛県宇和島市恵美須町1-4-21", null, "https://tabelog.com/ehime/A3803/A380301/38017316/"),
  dining('uwajima-dining-14', "丸亀製麺 宇和島店", "愛媛県宇和島市中沢町1-5-5", "0895-20-0188", "https://tabelog.com/ehime/A3803/A380301/38009280/"),
  dining('uwajima-dining-15', "DINING BAR TRE-TRE", "愛媛県宇和島市中央町1-10-15 サンビル 4F", null, "https://tabelog.com/ehime/A3803/A380301/38015459/"),
  dining('uwajima-dining-16', "寿提夢 津島店", "愛媛県宇和島市津島町高田甲2164", "0895-32-6055", "https://tabelog.com/ehime/A3803/A380301/38000879/"),
];

export const UWAJIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(UWAJIMA_TRAVEL_DINING.map((row) => row.name_ja));
export const UWAJIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const UWAJIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const UWAJIMA_TRAVEL_ALL: readonly TravelRow[] = [...UWAJIMA_TRAVEL_DINING, ...UWAJIMA_TRAVEL_STAY, ...UWAJIMA_TRAVEL_SHOPPING, ...UWAJIMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isUwajimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UWAJIMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isUwajimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UWAJIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isUwajimaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isUwajimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isUwajimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UWAJIMA_DINING_NAME_SET.has(row.name_ja);
}
export function uwajimaSightPhoto(nameJa: string): MimaPlacePhoto | null { return UWAJIMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankUwajimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isUwajimaOnsenPackRow(row) && !isUwajimaExperiencePackRow(row) && !isUwajimaStayPackRow(row) && !isUwajimaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of UWAJIMA_SIGHT_PINS) {
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
export function uwajimaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '宇和島市 飲食案内' : 'Uwajima City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '宇和島市 宿泊案内' : 'Uwajima City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '宇和島市 買物案内' : 'Uwajima City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function uwajimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isUwajimaOnsenPackRow(row)) return 'onsen';
  if (isUwajimaExperiencePackRow(row)) return 'experience';
  if (isUwajimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isUwajimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function uwajimaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isUwajimaOnsenPackRow(row) && !isUwajimaExperiencePackRow(row) && !isUwajimaStayPackRow(row) && !isUwajimaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isUwajimaOnsenPackRow(row);
  if (filter === 'experience') return isUwajimaExperiencePackRow(row);
  if (filter === 'stay') return isUwajimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveUwajimaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const UWAJIMA_HALL = UWAJIMA.hall;
