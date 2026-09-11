/**
 * Kihoku Town travel layer. No frozen pack.
 * Dining from 食べログ 鬼北町 (C38488)×16 with dish JPGs. Stay: Rakuten 部屋 stills×1. Onsen: facility bath still×1 (stay≠onsen EXTRA name). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KIHOKU, KIHOKU_SIGHT_PHOTOS} from './kihoku';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KIHOKU_TRAVEL_ACCESSED = '2026-09-10' as const;
export const KIHOKU_TRAVEL_SOURCES = {
  home: 'https://www.town.kihoku.ehime.jp/', hall: 'https://www.town.kihoku.ehime.jp/soshiki/',
  kanko: 'https://www.town.kihoku.ehime.jp/site/kihokukanko/',
  stayList: 'https://www.town.kihoku.ehime.jp/site/kihokukanko/25601.html',
  narukawa: 'https://travel.rakuten.co.jp/HOTEL/141052/141052.html',
  chikanaga: 'https://www.wikidata.org/wiki/Q4388236',
  narukawaValley: 'https://www.wikidata.org/wiki/Q114605568',
  tabelogCity: 'https://tabelog.com/ehime/C38488/rstLst/'
} as const;

export const KIHOKU_ONSEN_PACK_NAMES = ["ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ） 風呂"] as const;
export const KIHOKU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KIHOKU_ONSEN_PACK_NAMES);
export const KIHOKU_EXPERIENCE_PACK_NAMES = [] as const;
export const KIHOKU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KIHOKU_EXPERIENCE_PACK_NAMES);
export const KIHOKU_STAY_PACK_NAMES = [] as const;
export const KIHOKU_STAY_PACK_SET: ReadonlySet<string> = new Set(KIHOKU_STAY_PACK_NAMES);
export const KIHOKU_SHOPPING_PACK_NAMES = [] as const;
export const KIHOKU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KIHOKU_SHOPPING_PACK_NAMES);

export const KIHOKU_SIGHT_PINS = ["近永駅", "佛光寺", "鬼北町役場", "鬼北町地域振興センター", "国道320号鬼北町川上", "国道320号鬼北町広見下大野"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KIHOKU_TRAVEL_ACCESSED};
}
export const KIHOKU_TRAVEL_STAY: readonly TravelRow[] = [
  stay("kihoku-stay-001", "ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ）", "愛媛県北宇和郡鬼北町奈良奈良奥山国有林", "0895-45-2639", "https://travel.rakuten.co.jp/HOTEL/141052/141052.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KIHOKU_TRAVEL_ACCESSED};
}
export const KIHOKU_TRAVEL_DINING: readonly TravelRow[] = [
  dining("kihoku-dining-01", "武左衛門 パン工房", "愛媛県北宇和郡鬼北町下鍵山54", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38014741/"),
  dining("kihoku-dining-02", "ラング", "愛媛県北宇和郡鬼北町興野々337-5", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38003118/"),
  dining("kihoku-dining-03", "みもざ", "愛媛県北宇和郡鬼北町近永72", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38012495/"),
  dining("kihoku-dining-04", "オン＆オフ", "愛媛県北宇和郡鬼北町小松110-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38006164/"),
  dining("kihoku-dining-05", "日吉夢産地", "愛媛県北宇和郡鬼北町下鍵山54", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38009710/"),
  dining("kihoku-dining-06", "やすらぎ", "愛媛県北宇和郡鬼北町大字出目2833", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38012288/"),
  dining("kihoku-dining-07", "パティスリー 縁", "愛媛県北宇和郡鬼北町出目2162", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38007348/"),
  dining("kihoku-dining-08", "レストラン森のまど", "愛媛県北宇和郡鬼北町下鍵山54 道の駅日吉夢産地内", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38005524/"),
  dining("kihoku-dining-09", "サムコッペ", "愛媛県北宇和郡鬼北町近永657-2", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38012630/"),
  dining("kihoku-dining-10", "鬼北ダイニング フェザン フィレール", "愛媛県北宇和郡鬼北町川上1961", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38013945/"),
  dining("kihoku-dining-11", "シャーベットハウス夢奏", "愛媛県北宇和郡鬼北町下鍵山54", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38017052/"),
  dining("kihoku-dining-12", "がんてつ", "愛媛県北宇和郡鬼北町大字永野市432-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38012044/"),
  dining("kihoku-dining-13", "Miroku", "愛媛県北宇和郡鬼北町永野市438-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38015507/"),
  dining("kihoku-dining-14", "彩り茶屋", "愛媛県北宇和郡鬼北町永野市138-6 道の駅森の三角ぼうし内", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38006945/"),
  dining("kihoku-dining-15", "杉の家", "愛媛県北宇和郡鬼北町川上1156", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38012292/"),
  dining("kihoku-dining-16", "成川渓谷休養センター", "愛媛県北宇和郡鬼北町大字奈良", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38011263/"),
];
export const KIHOKU_DINING_NAME_SET: ReadonlySet<string> = new Set(KIHOKU_TRAVEL_DINING.map((row) => row.name_ja));
export const KIHOKU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KIHOKU_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KIHOKU_TRAVEL_ALL: readonly TravelRow[] = [...KIHOKU_TRAVEL_DINING, ...KIHOKU_TRAVEL_STAY, ...KIHOKU_TRAVEL_SHOPPING, ...KIHOKU_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKihokuOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KIHOKU_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKihokuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KIHOKU_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKihokuStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKihokuShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKihokuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KIHOKU_DINING_NAME_SET.has(row.name_ja);
}
export function kihokuSightPhoto(nameJa: string): MimaPlacePhoto | null { return KIHOKU_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKihokuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKihokuOnsenPackRow(row) && !isKihokuExperiencePackRow(row) && !isKihokuStayPackRow(row) && !isKihokuDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KIHOKU_SIGHT_PINS) {
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
export function kihokuSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '鬼北町 飲食案内' : 'Kihoku Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '鬼北町 宿泊案内' : 'Kihoku Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '鬼北町 買物案内' : 'Kihoku Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kihokuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKihokuOnsenPackRow(row)) return 'onsen';
  if (isKihokuExperiencePackRow(row)) return 'experience';
  if (isKihokuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKihokuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kihokuPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKihokuOnsenPackRow(row) && !isKihokuExperiencePackRow(row) && !isKihokuStayPackRow(row) && !isKihokuDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKihokuOnsenPackRow(row);
  if (filter === 'experience') return isKihokuExperiencePackRow(row);
  if (filter === 'stay') return isKihokuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKihokuFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KIHOKU_HALL = KIHOKU.hall;
