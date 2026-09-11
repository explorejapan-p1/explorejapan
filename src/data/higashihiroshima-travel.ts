/**
 * Higashihiroshima City (Hiroshima) travel layer. Slug higashihiroshima. No frozen pack.
 * Dining from 食べログ 東広島市 (C34212)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath stills×5 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県東広島市 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {HIGASHIHIROSHIMA, HIGASHIHIROSHIMA_SIGHT_PHOTOS} from './higashihiroshima';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const HIGASHIHIROSHIMA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const HIGASHIHIROSHIMA_TRAVEL_SOURCES = {
  home: 'https://www.city.higashihiroshima.lg.jp/', hall: 'https://www.city.higashihiroshima.lg.jp/soshiki/chiikishinko/1_1/1/index.html',
  kanko: 'https://higashihiroshima-kanko.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34212/rstLst/'
} as const;

export const HIGASHIHIROSHIMA_ONSEN_PACK_NAMES = ["東広島グリーンホテルモーリス 男性大浴場", "ホテルエリアワン広島ウイング＜獅子伏温泉＞ 温泉スパシオン", "ホテルカモ 天然温泉ホットカモ", "ホテルルートイン東広島西条駅前 大浴場", "備長炭の湯　ホテル東広島ヒルズ西条インター 備長炭の湯"] as const;
export const HIGASHIHIROSHIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(HIGASHIHIROSHIMA_ONSEN_PACK_NAMES);
export const HIGASHIHIROSHIMA_EXPERIENCE_PACK_NAMES = [] as const;
export const HIGASHIHIROSHIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(HIGASHIHIROSHIMA_EXPERIENCE_PACK_NAMES);
export const HIGASHIHIROSHIMA_STAY_PACK_NAMES = [] as const;
export const HIGASHIHIROSHIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(HIGASHIHIROSHIMA_STAY_PACK_NAMES);
export const HIGASHIHIROSHIMA_SHOPPING_PACK_NAMES = [] as const;
export const HIGASHIHIROSHIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(HIGASHIHIROSHIMA_SHOPPING_PACK_NAMES);

export const HIGASHIHIROSHIMA_SIGHT_PINS = ["西条酒蔵通り", "三ツ城古墳", "安芸国分寺", "鏡山城跡", "西条駅"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: HIGASHIHIROSHIMA_TRAVEL_ACCESSED};
}
export const HIGASHIHIROSHIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("higashihiroshima-stay-001", "東広島グリーンホテルモーリス", "広島県東広島市西条昭和町11-8", "082-422-6161", "https://travel.rakuten.co.jp/HOTEL/43917/43917.html"),
  stay("higashihiroshima-stay-002", "ホテルエリアワン広島ウイング＜獅子伏温泉＞（ホテルエリアワングループ）", "広島県東広島市河内町入野11296-72", "082-437-1234", "https://travel.rakuten.co.jp/HOTEL/149325/149325.html"),
  stay("higashihiroshima-stay-003", "ベッセルホテル東広島（東広島駅前）", "広島県東広島市三永二丁目6-36", "082-426-2222", "https://travel.rakuten.co.jp/HOTEL/50624/50624.html"),
  stay("higashihiroshima-stay-004", "ホテルカモ　［ＨＯＴＥＬ　ＫＡＭＯ］", "広島県東広島市西条町御薗宇6184", "0824-22-1101", "https://travel.rakuten.co.jp/HOTEL/7061/7061.html"),
  stay("higashihiroshima-stay-005", "ホテルルートイン東広島西条駅前", "広島県東広島市西条本町14-24", "050-5837-7501", "https://travel.rakuten.co.jp/HOTEL/161066/161066.html"),
  stay("higashihiroshima-stay-006", "備長炭の湯　ホテル東広島ヒルズ西条インター（ＢＢＨホテルグループ）", "広島県東広島市西条大坪町2-13", "050-1807-3043", "https://travel.rakuten.co.jp/HOTEL/71972/71972.html"),
  stay("higashihiroshima-stay-007", "ホテル　サンライズ２１", "広島県東広島市西条昭和町5-10", "082-431-3232", "https://travel.rakuten.co.jp/HOTEL/78173/78173.html"),
  stay("higashihiroshima-stay-008", "東横ＩＮＮ東広島西条駅前", "広島県東広島市西条本町12-2", "082-422-1045", "https://travel.rakuten.co.jp/HOTEL/108365/108365.html"),
  stay("higashihiroshima-stay-009", "西条ＨＡＫＵＷＡホテル", "広島県東広島市西条下見6-5-45", "082-431-1111", "https://travel.rakuten.co.jp/HOTEL/108769/108769.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: HIGASHIHIROSHIMA_TRAVEL_ACCESSED};
}
export const HIGASHIHIROSHIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("higashihiroshima-dining-01", "三代目 鳥メロ 広島西条駅前店", "広島県東広島市西条本町12-5 賀茂泉館 3F", null, "https://tabelog.com/hiroshima/A3407/A340701/34023219/"),
  dining("higashihiroshima-dining-02", "や台ずし 西条駅酒蔵通町", "広島県東広島市西条本町2-16", null, "https://tabelog.com/hiroshima/A3407/A340701/34024422/"),
  dining("higashihiroshima-dining-03", "焼肉牛舞 西条店", "広島県東広島市西条町寺家5478-2", null, "https://tabelog.com/hiroshima/A3407/A340701/34034838/"),
  dining("higashihiroshima-dining-04", "旨唐揚げと居酒メシ ミライザカ 広島西条駅前店", "広島県東広島市西条本町12-5 賀茂泉館 2F", null, "https://tabelog.com/hiroshima/A3407/A340701/34000686/"),
  dining("higashihiroshima-dining-05", "多酒多采 かげとら", "広島県東広島市西条昭和町4-21", null, "https://tabelog.com/hiroshima/A3407/A340701/34003466/"),
  dining("higashihiroshima-dining-06", "お好み焼き 徳川 西条店", "広島県東広島市西条昭和町3-15", null, "https://tabelog.com/hiroshima/A3407/A340701/34022950/"),
  dining("higashihiroshima-dining-07", "山茶花", "広島県東広島市安芸津町三津4397", null, "https://tabelog.com/hiroshima/A3407/A340702/34005156/"),
  dining("higashihiroshima-dining-08", "山内農場 西条駅前店", "広島県東広島市西条栄町2-3 新21ビル 2F", null, "https://tabelog.com/hiroshima/A3407/A340701/34018613/"),
  dining("higashihiroshima-dining-09", "おいしい和食 華ごころ", "広島県東広島市西条町下見459-17", null, "https://tabelog.com/hiroshima/A3407/A340701/34003624/"),
  dining("higashihiroshima-dining-10", "魚民 西条駅前店", "広島県東広島市西条栄町2-3 新21ビル　１Ｆ", null, "https://tabelog.com/hiroshima/A3407/A340701/34005324/"),
  dining("higashihiroshima-dining-11", "料理屋そうびき", "広島県東広島市西条岡町10-24 第10内海ビル 3F", null, "https://tabelog.com/hiroshima/A3407/A340701/34023121/"),
  dining("higashihiroshima-dining-12", "炭火焼肉　萬まる 西条店", "広島県東広島市西条中央6-6-12", null, "https://tabelog.com/hiroshima/A3407/A340701/34020142/"),
  dining("higashihiroshima-dining-13", "一心", "広島県東広島市西条大坪町11-27 ラルクビル", null, "https://tabelog.com/hiroshima/A3407/A340701/34034251/"),
  dining("higashihiroshima-dining-14", "肉料理 春祺廊", "広島県東広島市西条昭和町10-2", null, "https://tabelog.com/hiroshima/A3407/A340701/34025213/"),
  dining("higashihiroshima-dining-15", "すし亭 西条駅前店", "広島県東広島市西条本町1-3", null, "https://tabelog.com/hiroshima/A3407/A340701/34000457/"),
  dining("higashihiroshima-dining-16", "BAR & DINING Nao's", "広島県東広島市西条岡町3-34 大蔵ビル 2F", null, "https://tabelog.com/hiroshima/A3407/A340701/34021146/"),
];
export const HIGASHIHIROSHIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(HIGASHIHIROSHIMA_TRAVEL_DINING.map((row) => row.name_ja));
export const HIGASHIHIROSHIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const HIGASHIHIROSHIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const HIGASHIHIROSHIMA_TRAVEL_ALL: readonly TravelRow[] = [...HIGASHIHIROSHIMA_TRAVEL_DINING, ...HIGASHIHIROSHIMA_TRAVEL_STAY, ...HIGASHIHIROSHIMA_TRAVEL_SHOPPING, ...HIGASHIHIROSHIMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isHigashihiroshimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIGASHIHIROSHIMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isHigashihiroshimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIGASHIHIROSHIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isHigashihiroshimaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isHigashihiroshimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isHigashihiroshimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIGASHIHIROSHIMA_DINING_NAME_SET.has(row.name_ja);
}
export function higashihiroshimaSightPhoto(nameJa: string): MimaPlacePhoto | null { return HIGASHIHIROSHIMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankHigashihiroshimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isHigashihiroshimaOnsenPackRow(row) && !isHigashihiroshimaExperiencePackRow(row) && !isHigashihiroshimaStayPackRow(row) && !isHigashihiroshimaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of HIGASHIHIROSHIMA_SIGHT_PINS) {
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
export function higashihiroshimaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '東広島市 飲食案内' : 'Higashihiroshima City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '東広島市 宿泊案内' : 'Higashihiroshima City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '東広島市 買物案内' : 'Higashihiroshima City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function higashihiroshimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isHigashihiroshimaOnsenPackRow(row)) return 'onsen';
  if (isHigashihiroshimaExperiencePackRow(row)) return 'experience';
  if (isHigashihiroshimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isHigashihiroshimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function higashihiroshimaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isHigashihiroshimaOnsenPackRow(row) && !isHigashihiroshimaExperiencePackRow(row) && !isHigashihiroshimaStayPackRow(row) && !isHigashihiroshimaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isHigashihiroshimaOnsenPackRow(row);
  if (filter === 'experience') return isHigashihiroshimaExperiencePackRow(row);
  if (filter === 'stay') return isHigashihiroshimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveHigashihiroshimaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const HIGASHIHIROSHIMA_HALL = HIGASHIHIROSHIMA.hall;
