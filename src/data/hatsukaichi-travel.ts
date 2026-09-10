/**
 * Hatsukaichi City (Hiroshima) travel layer. Slug hatsukaichi. No frozen pack.
 * Dining from 食べログ 廿日市市 (C34213)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath stills×5 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県廿日市市 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {HATSUKAICHI, HATSUKAICHI_SIGHT_PHOTOS} from './hatsukaichi';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const HATSUKAICHI_TRAVEL_ACCESSED = '2026-09-10' as const;
export const HATSUKAICHI_TRAVEL_SOURCES = {
  home: 'https://www.city.hatsukaichi.hiroshima.jp/', hall: 'https://www.city.hatsukaichi.hiroshima.jp/',
  kanko: 'https://www.city.hatsukaichi.hiroshima.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34213/rstLst/'
} as const;

export const HATSUKAICHI_ONSEN_PACK_NAMES = ["安芸グランドホテル 大浴場【平安の湯　雅】", "グランヴィリオホテル宮島　天然温泉「日本三景　みやじまの湯」男性用露天風呂", "宮島　神撰の宿　ホテルみや離宮 大浴場　乙姫", "ホテル宮島別荘 展望畳大浴場 湯Like", "宮浜温泉　湯の宿　宮浜グランドホテル 広島側大浴場"] as const;
export const HATSUKAICHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(HATSUKAICHI_ONSEN_PACK_NAMES);
export const HATSUKAICHI_EXPERIENCE_PACK_NAMES = [] as const;
export const HATSUKAICHI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(HATSUKAICHI_EXPERIENCE_PACK_NAMES);
export const HATSUKAICHI_STAY_PACK_NAMES = [] as const;
export const HATSUKAICHI_STAY_PACK_SET: ReadonlySet<string> = new Set(HATSUKAICHI_STAY_PACK_NAMES);
export const HATSUKAICHI_SHOPPING_PACK_NAMES = [] as const;
export const HATSUKAICHI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(HATSUKAICHI_SHOPPING_PACK_NAMES);

export const HATSUKAICHI_SIGHT_PINS = ["厳島神社", "厳島神社大鳥居", "五重塔", "紅葉谷公園", "弥山"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: HATSUKAICHI_TRAVEL_ACCESSED};
}
export const HATSUKAICHI_TRAVEL_STAY: readonly TravelRow[] = [
  stay("hatsukaichi-stay-001", "安芸グランドホテル", "広島県廿日市市宮島口西1-1-17", "0829-56-0111", "https://travel.rakuten.co.jp/HOTEL/7754/7754.html"),
  stay("hatsukaichi-stay-002", "グランヴィリオホテル宮島　和蔵　－ルートインホテルズ－", "広島県廿日市市宮島口西1丁目1ｰ37", "0829-50-2501", "https://travel.rakuten.co.jp/HOTEL/180527/180527.html"),
  stay("hatsukaichi-stay-003", "リブマックスリゾート宮浜温泉Ｏｃｅａｎ", "広島県廿日市市宮浜温泉2-13-10", "0829-50-0070", "https://travel.rakuten.co.jp/HOTEL/178590/178590.html"),
  stay("hatsukaichi-stay-004", "宮島グランドホテル　有もと", "広島県廿日市市宮島町南町364", "0829-44-2411", "https://travel.rakuten.co.jp/HOTEL/18848/18848.html"),
  stay("hatsukaichi-stay-005", "リブマックスリゾート安芸宮島", "広島県廿日市市宮島町634", "0829-40-2882", "https://travel.rakuten.co.jp/HOTEL/163048/163048.html"),
  stay("hatsukaichi-stay-006", "宮島　神撰の宿　ホテルみや離宮", "広島県廿日市市宮島町849", null, "https://travel.rakuten.co.jp/HOTEL/11125/11125.html"),
  stay("hatsukaichi-stay-007", "宮島コーラルホテル", "広島県廿日市市宮島口1-9-8", null, "https://travel.rakuten.co.jp/HOTEL/17769/17769.html"),
  stay("hatsukaichi-stay-008", "ホテル宮島別荘", "広島県廿日市市宮島町1165", null, "https://travel.rakuten.co.jp/HOTEL/161276/161276.html"),
  stay("hatsukaichi-stay-009", "宮浜温泉　湯の宿　宮浜グランドホテル", "広島県廿日市市宮浜温泉2-5-4", null, "https://travel.rakuten.co.jp/HOTEL/13743/13743.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: HATSUKAICHI_TRAVEL_ACCESSED};
}
export const HATSUKAICHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining("hatsukaichi-dining-01", "そじ坊 ゆめタウン廿日市店", "広島県廿日市市下平良2-2-1 ゆめタウン廿日市 1F", null, "https://tabelog.com/hiroshima/A3402/A340201/34020822/"),
  dining("hatsukaichi-dining-02", "宮島鮨 まいもん", "広島県廿日市市宮島口1-8-14 レアルマーレ望厳荘 1F", null, "https://tabelog.com/hiroshima/A3402/A340205/34028196/"),
  dining("hatsukaichi-dining-03", "宮島味処 しまの音", "広島県廿日市市宮島町469", null, "https://tabelog.com/hiroshima/A3402/A340202/34034829/"),
  dining("hatsukaichi-dining-04", "備長扇屋 廿日市串戸店", "広島県廿日市市串戸2-9-8", null, "https://tabelog.com/hiroshima/A3402/A340201/34020727/"),
  dining("hatsukaichi-dining-05", "天扇", "広島県廿日市市宮島町810-1", null, "https://tabelog.com/hiroshima/A3402/A340202/34023529/"),
  dining("hatsukaichi-dining-06", "炭火焼肉 ぶち 廿日市店", "広島県廿日市市宮内1094-1", null, "https://tabelog.com/hiroshima/A3402/A340201/34028754/"),
  dining("hatsukaichi-dining-07", "きわみ和牛鉄板宮美", "広島県廿日市市宮島口1-10-11 2F", null, "https://tabelog.com/hiroshima/A3402/A340205/34034867/"),
  dining("hatsukaichi-dining-08", "イノクチ水産さかなや道場 広電廿日市駅前店", "広島県廿日市市廿日市2-3-6 マキノビル 1F", null, "https://tabelog.com/hiroshima/A3402/A340201/34022119/"),
  dining("hatsukaichi-dining-09", "魚民 廿日市駅前店", "広島県廿日市市駅前4-23 １Ｆ", null, "https://tabelog.com/hiroshima/A3402/A340201/34012130/"),
  dining("hatsukaichi-dining-10", "お好み焼き　徳川 廿日市店", "広島県廿日市市下平良2-1-22", null, "https://tabelog.com/hiroshima/A3402/A340201/34023648/"),
  dining("hatsukaichi-dining-11", "宮島茶屋～CHAYA～", "広島県廿日市市宮島町滝町240", null, "https://tabelog.com/hiroshima/A3402/A340202/34033606/"),
  dining("hatsukaichi-dining-12", "ガネーシュ 廿日市店", "広島県廿日市市新宮1-9-34 tina court", null, "https://tabelog.com/hiroshima/A3402/A340201/34007082/"),
  dining("hatsukaichi-dining-13", "他人吉", "広島県廿日市市宮島口1-5-11 あなごめしうえの宮島口本店 2F", null, "https://tabelog.com/hiroshima/A3402/A340205/34002628/"),
  dining("hatsukaichi-dining-14", "旨味処 朋", "広島県廿日市市廿日市2-3-9", null, "https://tabelog.com/hiroshima/A3402/A340201/34027868/"),
  dining("hatsukaichi-dining-15", "HIGHWAY OUTDOOR PARK 宮島", "広島県廿日市市上平良76", null, "https://tabelog.com/hiroshima/A3402/A340201/34029118/"),
  dining("hatsukaichi-dining-16", "お好み焼 まとちゃん", "広島県廿日市市宮島町70-2", null, "https://tabelog.com/hiroshima/A3402/A340202/34018532/"),
];
export const HATSUKAICHI_DINING_NAME_SET: ReadonlySet<string> = new Set(HATSUKAICHI_TRAVEL_DINING.map((row) => row.name_ja));
export const HATSUKAICHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const HATSUKAICHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const HATSUKAICHI_TRAVEL_ALL: readonly TravelRow[] = [...HATSUKAICHI_TRAVEL_DINING, ...HATSUKAICHI_TRAVEL_STAY, ...HATSUKAICHI_TRAVEL_SHOPPING, ...HATSUKAICHI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isHatsukaichiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HATSUKAICHI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isHatsukaichiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HATSUKAICHI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isHatsukaichiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isHatsukaichiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isHatsukaichiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HATSUKAICHI_DINING_NAME_SET.has(row.name_ja);
}
export function hatsukaichiSightPhoto(nameJa: string): MimaPlacePhoto | null { return HATSUKAICHI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankHatsukaichiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isHatsukaichiOnsenPackRow(row) && !isHatsukaichiExperiencePackRow(row) && !isHatsukaichiStayPackRow(row) && !isHatsukaichiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of HATSUKAICHI_SIGHT_PINS) {
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
export function hatsukaichiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '廿日市市 飲食案内' : 'Hatsukaichi City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '廿日市市 宿泊案内' : 'Hatsukaichi City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '廿日市市 買物案内' : 'Hatsukaichi City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function hatsukaichiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isHatsukaichiOnsenPackRow(row)) return 'onsen';
  if (isHatsukaichiExperiencePackRow(row)) return 'experience';
  if (isHatsukaichiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isHatsukaichiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function hatsukaichiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isHatsukaichiOnsenPackRow(row) && !isHatsukaichiExperiencePackRow(row) && !isHatsukaichiStayPackRow(row) && !isHatsukaichiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isHatsukaichiOnsenPackRow(row);
  if (filter === 'experience') return isHatsukaichiExperiencePackRow(row);
  if (filter === 'stay') return isHatsukaichiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveHatsukaichiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const HATSUKAICHI_HALL = HATSUKAICHI.hall;
