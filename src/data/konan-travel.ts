/**
 * Konan City travel layer. No frozen pack.
 * Dining from 食べログ 香南市 (C39211). Stay: 4 Rakuten room stills (TG610). Onsen: honest 0 this wave (黒潮ホテル bath not wired). Experience: 道の駅やす.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KONAN, KONAN_SIGHT_PHOTOS} from './konan';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KONAN_TRAVEL_ACCESSED = '2026-09-09' as const;
export const KONAN_TRAVEL_SOURCES = {
  home: 'https://www.city.kochi-konan.lg.jp/', hall: 'https://www.city.kochi-konan.lg.jp/shiseijoho/konanshinogaiyo/index.html',
  kankou: 'https://www.city.kochi-konan.lg.jp/',
  ekingura: 'https://ja.wikipedia.org/wiki/%E5%BC%98%E7%80%AC%E9%87%91%E8%94%B5',
  tabelogCity: 'https://tabelog.com/kochi/C39211/rstLst/',
  kajuen: 'https://travel.rakuten.co.jp/HOTEL/13721/13721.html'
} as const;

export const KONAN_ONSEN_PACK_NAMES = [] as const;
export const KONAN_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KONAN_ONSEN_PACK_NAMES);
export const KONAN_EXPERIENCE_PACK_NAMES = ['道の駅やす'] as const;
export const KONAN_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KONAN_EXPERIENCE_PACK_NAMES);
export const KONAN_STAY_PACK_NAMES = [] as const;
export const KONAN_STAY_PACK_SET: ReadonlySet<string> = new Set(KONAN_STAY_PACK_NAMES);
export const KONAN_SHOPPING_PACK_NAMES = [] as const;
export const KONAN_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KONAN_SHOPPING_PACK_NAMES);

export const KONAN_SIGHT_PINS = ['絵金蔵','のいち駅','あかおか駅','手結港可動橋','高知県立のいち動物公園','夜須駅'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KONAN_TRAVEL_ACCESSED};
}
export const KONAN_TRAVEL_STAY: readonly TravelRow[] = [
  stay('konan-stay-01', 'リゾートホテル海辺の果樹園', '高知県香南市夜須町手結山506-1', '0887-55-4111', 'https://travel.rakuten.co.jp/HOTEL/13721/13721.html'),
  stay('konan-stay-02', 'ゲストハウス水仙', '高知県香南市野市町西野242-21', '080-1622-4917', 'https://travel.rakuten.co.jp/HOTEL/198024/198024.html'),
  stay('konan-stay-03', '香南市サイクリングターミナル　海のやどしおや宿', '高知県香南市夜須町手結山1304', '0887-55-3196', 'https://travel.rakuten.co.jp/HOTEL/44005/44005.html'),
  stay('konan-stay-04', '高知黒潮ホテル', '高知県香南市野市町東野1630', '0887-56-5800', 'https://travel.rakuten.co.jp/HOTEL/15239/15239.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KONAN_TRAVEL_ACCESSED};
}
export const KONAN_TRAVEL_DINING: readonly TravelRow[] = [
  dining('konan-dining-01', '百家', '高知県香南市香我美町岸本761-1', '0887-55-1550', 'https://tabelog.com/kochi/A3901/A390106/39003507/'),
  dining('konan-dining-02', 'ふく手羽 のいち店', '高知県香南市野市町西野553-11大杉ソシアルビル 2F', '0887-52-8344', 'https://tabelog.com/kochi/A3901/A390106/39007459/'),
  dining('konan-dining-03', 'カフェド昭', '高知県香南市野市町西野2110-5', '0887-56-3004', 'https://tabelog.com/kochi/A3901/A390106/39002467/'),
  dining('konan-dining-04', 'オカシノイイトコロ。', '高知県香南市野市町西野2061-3菜芽ビル 1F', null, 'https://tabelog.com/kochi/A3901/A390106/39008320/'),
  dining('konan-dining-05', '菓子工房 コンセルト', '高知県香南市野市町西野2642-7', '0887-56-0762', 'https://tabelog.com/kochi/A3901/A390106/39007025/'),
  dining('konan-dining-06', 'カフェ ほのまる', '高知県香南市野市町西野1444', '0887-57-3248', 'https://tabelog.com/kochi/A3901/A390106/39001144/'),
  dining('konan-dining-07', '八剣伝 野市駅前店', '高知県香南市野市町西野2043-6', '0887-57-8282', 'https://tabelog.com/kochi/A3901/A390106/39001087/'),
  dining('konan-dining-08', '安愚楽', '高知県香南市野市町西野506-11', '0887-56-2770', 'https://tabelog.com/kochi/A3901/A390106/39002333/'),
  dining('konan-dining-09', '豚太郎 野市店', '高知県香南市野市町西野2609-3', '0887-56-3176', 'https://tabelog.com/kochi/A3901/A390106/39006265/'),
  dining('konan-dining-10', '木香', '高知県香南市野市町大谷622', null, 'https://tabelog.com/kochi/A3901/A390106/39002786/'),
  dining('konan-dining-11', '井上ワイナリー のいち醸造所&SHOP', '高知県香南市野市町大谷1424-31', '0887-50-6694', 'https://tabelog.com/kochi/A3901/A390106/39007889/'),
  dining('konan-dining-12', '豊楽', '高知県香南市赤岡町985-1', '0887-54-0077', 'https://tabelog.com/kochi/A3901/A390106/39002200/'),
  dining('konan-dining-13', 'お好み焼き 万代', '高知県香南市野市町西野ヌノ丸2700-2マルナカ野市店', '0887-57-8333', 'https://tabelog.com/kochi/A3901/A390106/39008549/'),
  dining('konan-dining-14', '澤餅茶屋', '高知県香南市夜須町手結1468', '0887-55-2948', 'https://tabelog.com/kochi/A3901/A390106/39000367/'),
  dining('konan-dining-15', 'バル亀之助', '高知県香南市野市町西野2359-5', '0887-50-3330', 'https://tabelog.com/kochi/A3901/A390106/39003322/'),
  dining('konan-dining-16', '苺屋', '高知県香南市野市町西野520-7', '0887-56-0939', 'https://tabelog.com/kochi/A3901/A390106/39003727/'),
];

export const KONAN_DINING_NAME_SET: ReadonlySet<string> = new Set(KONAN_TRAVEL_DINING.map((row) => row.name_ja));
export const KONAN_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KONAN_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KONAN_TRAVEL_ALL: readonly TravelRow[] = [...KONAN_TRAVEL_DINING, ...KONAN_TRAVEL_STAY, ...KONAN_TRAVEL_SHOPPING, ...KONAN_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKonanOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KONAN_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKonanExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KONAN_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKonanStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKonanShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKonanDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KONAN_DINING_NAME_SET.has(row.name_ja);
}
export function konanSightPhoto(nameJa: string): MimaPlacePhoto | null { return KONAN_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKonanSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKonanOnsenPackRow(row) && !isKonanExperiencePackRow(row) && !isKonanStayPackRow(row) && !isKonanDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KONAN_SIGHT_PINS) {
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
export function konanSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '香南市 飲食案内' : 'Konan City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '香南市 宿泊案内' : 'Konan City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '香南市 買物案内' : 'Konan City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function konanTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKonanOnsenPackRow(row)) return 'onsen';
  if (isKonanExperiencePackRow(row)) return 'experience';
  if (isKonanStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKonanDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function konanPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKonanOnsenPackRow(row) && !isKonanExperiencePackRow(row) && !isKonanStayPackRow(row) && !isKonanDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKonanOnsenPackRow(row);
  if (filter === 'experience') return isKonanExperiencePackRow(row);
  if (filter === 'stay') return isKonanStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKonanFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KONAN_HALL = KONAN.hall;
