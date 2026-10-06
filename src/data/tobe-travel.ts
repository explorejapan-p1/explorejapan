/**
 * Tobe Town travel layer. No frozen pack.
 * Dining from 食べログ 砥部町 (C38402)×16 with dish JPGs. Stay: Rakuten 部屋 stills×2. Onsen: facility bath still×1 (stay≠onsen EXTRA name). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TOBE, TOBE_SIGHT_PHOTOS} from './tobe';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TOBE_TRAVEL_ACCESSED = '2026-09-10' as const;
export const TOBE_TRAVEL_SOURCES = {
  home: 'https://www.town.tobe.ehime.jp/', hall: 'https://www.town.tobe.ehime.jp/site_info/',
  kanko: 'https://www.town.tobe.ehime.jp/',
  pottery: 'https://ja.wikipedia.org/wiki/%E7%A0%A5%E9%83%A8%E7%84%BC',
  zoo: 'https://ja.wikipedia.org/wiki/%E3%81%A8%E3%81%B9%E5%8B%95%E7%89%A9%E5%9C%92',
  tabelogCity: 'https://tabelog.com/ehime/C38402/rstLst/'
} as const;

export const TOBE_ONSEN_PACK_NAMES = ["時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ 風呂"] as const;
export const TOBE_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TOBE_ONSEN_PACK_NAMES);
export const TOBE_EXPERIENCE_PACK_NAMES = [] as const;
export const TOBE_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TOBE_EXPERIENCE_PACK_NAMES);
export const TOBE_STAY_PACK_NAMES = [] as const;
export const TOBE_STAY_PACK_SET: ReadonlySet<string> = new Set(TOBE_STAY_PACK_NAMES);
export const TOBE_SHOPPING_PACK_NAMES = [] as const;
export const TOBE_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TOBE_SHOPPING_PACK_NAMES);

export const TOBE_SIGHT_PINS = ["砥部焼伝統産業会館", "砥部焼陶芸館", "とべ動物園", "砥部焼たいまつモニュメント"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TOBE_TRAVEL_ACCESSED};
}
export const TOBE_TRAVEL_STAY: readonly TravelRow[] = [
  stay("tobe-stay-001", "南道後温泉　ホテルていれぎ館", "愛媛県伊予郡砥部町拾町92-2", "089-957-8585", "https://travel.rakuten.co.jp/HOTEL/130460/130460.html"),
  stay("tobe-stay-002", "時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ（旧：ＴＯＢＥオーベルジュリゾート）", "愛媛県伊予郡砥部町宮内1622-7", "089-960-7501", "https://travel.rakuten.co.jp/HOTEL/188387/188387.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TOBE_TRAVEL_ACCESSED};
}
export const TOBE_TRAVEL_DINING: readonly TravelRow[] = [

  dining("tobe-dining-01", "こぶし食堂", "愛媛県伊予郡砥部町総津159-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3801/A380103/38001163/"),
  dining("tobe-dining-02", "炭火焼鳥 もりおか", "愛媛県伊予郡砥部町宮内1404-1", "089-909-5722", "https://tabelog.com/ehime/A3801/A380103/38015709/"),
  dining("tobe-dining-03", "展望レストラン SKY GARDEN", "愛媛県伊予郡砥部町上原町240 愛媛県立とべ動物園　内", "089-962-2922", "https://tabelog.com/ehime/A3801/A380103/38005830/"),
  dining("tobe-dining-04", "山鳥青果", "愛媛県伊予郡砥部町岩谷口1158", "089-962-5167", "https://tabelog.com/ehime/A3801/A380103/38009356/"),
  dining("tobe-dining-05", "ピザ・ロイヤルハット とべ高尾田店", "愛媛県伊予郡砥部町高尾田684-1", "089-969-8778", "https://tabelog.com/ehime/A3801/A380101/38008527/"),
  dining("tobe-dining-06", "パスコ 砥部店", "愛媛県伊予郡砥部町重光239 パルティフジ砥部店1F", "089-957-0888", "https://tabelog.com/ehime/A3801/A380101/38007277/"),
  dining("tobe-dining-07", "珈琲貴族", "愛媛県伊予郡砥部町大南185", "089-962-4787", "https://tabelog.com/ehime/A3801/A380103/38005648/"),
  dining("tobe-dining-08", "ズズキッチン", "愛媛県伊予郡砥部町宮内1404-1 Sステージビル2階 7号", "089-909-9868", "https://tabelog.com/ehime/A3801/A380103/38015748/"),
  dining("tobe-dining-09", "串の焼鬼の呑み食い処", "愛媛県伊予郡砥部町高尾田305 メゾンドール砥部 1F", "089-948-9907", "https://tabelog.com/ehime/A3801/A380103/38016729/"),
  dining("tobe-dining-10", "時地人 MATSUYAMA", "愛媛県伊予郡砥部町宮内1622-7", "089-960-7501", "https://tabelog.com/ehime/A3801/A380103/38016675/"),
  dining("tobe-dining-11", "うどん茶屋 北斗 砥部店", "愛媛県伊予郡砥部町上原町281-1", "089-962-7717", "https://tabelog.com/ehime/A3801/A380103/38002834/"),
  dining("tobe-dining-12", "ぎやてい", "愛媛県伊予郡砥部町宮内1404-1 S'ステージ", "089-904-7711", "https://tabelog.com/ehime/A3801/A380103/38009123/"),
  dining("tobe-dining-13", "IPPO", "愛媛県伊予郡砥部町高尾田1088-105", "089-905-0830", "https://tabelog.com/ehime/A3801/A380103/38001638/"),
  dining("tobe-dining-14", "なかまる", "愛媛県伊予郡砥部町川井868", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3801/A380103/38006297/"),
  dining("tobe-dining-15", "ピッツェリア トレンタノーヴェ", "愛媛県伊予郡砥部町重光147-1", "089-956-3935", "https://tabelog.com/ehime/A3801/A380103/38010028/"),
  dining("tobe-dining-16", "SANKAKU754", "愛媛県伊予郡砥部町三角７５４", "050-8881-7541", "https://tabelog.com/ehime/A3801/A380103/38015927/"),
];
export const TOBE_DINING_NAME_SET: ReadonlySet<string> = new Set(TOBE_TRAVEL_DINING.map((row) => row.name_ja));
export const TOBE_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TOBE_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TOBE_TRAVEL_ALL: readonly TravelRow[] = [...TOBE_TRAVEL_DINING, ...TOBE_TRAVEL_STAY, ...TOBE_TRAVEL_SHOPPING, ...TOBE_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTobeOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOBE_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTobeExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOBE_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTobeStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTobeShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTobeDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOBE_DINING_NAME_SET.has(row.name_ja);
}
export function tobeSightPhoto(nameJa: string): MimaPlacePhoto | null { return TOBE_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTobeSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTobeOnsenPackRow(row) && !isTobeExperiencePackRow(row) && !isTobeStayPackRow(row) && !isTobeDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TOBE_SIGHT_PINS) {
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
export function tobeSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '砥部町 飲食案内' : 'Tobe Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '砥部町 宿泊案内' : 'Tobe Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '砥部町 買物案内' : 'Tobe Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function tobeTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTobeOnsenPackRow(row)) return 'onsen';
  if (isTobeExperiencePackRow(row)) return 'experience';
  if (isTobeStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTobeDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function tobePackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTobeOnsenPackRow(row) && !isTobeExperiencePackRow(row) && !isTobeStayPackRow(row) && !isTobeDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTobeOnsenPackRow(row);
  if (filter === 'experience') return isTobeExperiencePackRow(row);
  if (filter === 'stay') return isTobeStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTobeFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TOBE_HALL = TOBE.hall;
