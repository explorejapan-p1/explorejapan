/**
 * Takehara City travel layer. No frozen pack.
 * Dining from 食べログ 竹原市 (C34203)×16 with dish JPGs. Stay: Rakuten 部屋 stills×7. Onsen: facility bath still×3 (stay≠onsen EXTRA name). Experience: 0 honest.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TAKEHARA, TAKEHARA_SIGHT_PHOTOS} from './takehara';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TAKEHARA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const TAKEHARA_TRAVEL_SOURCES = {
  home: 'https://www.city.takehara.lg.jp/', hall: 'https://www.city.takehara.lg.jp/index.html',
  kanko: 'https://www.takeharakankou.jp/',
  historic: 'https://www.takeharakankou.jp/beginner/historic-district/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34203/rstLst/'
} as const;

export const TAKEHARA_ONSEN_PACK_NAMES = ["Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイド 大浴場", "休暇村　大久野島 大浴場", "ホテル　大広苑 大浴場"] as const;
export const TAKEHARA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TAKEHARA_ONSEN_PACK_NAMES);
export const TAKEHARA_EXPERIENCE_PACK_NAMES = [] as const;
export const TAKEHARA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TAKEHARA_EXPERIENCE_PACK_NAMES);
export const TAKEHARA_STAY_PACK_NAMES = [] as const;
export const TAKEHARA_STAY_PACK_SET: ReadonlySet<string> = new Set(TAKEHARA_STAY_PACK_NAMES);
export const TAKEHARA_SHOPPING_PACK_NAMES = [] as const;
export const TAKEHARA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TAKEHARA_SHOPPING_PACK_NAMES);

export const TAKEHARA_SIGHT_PINS = ["たけはら町並み保存地区", "西方寺・普明閣", "松阪邸", "大久野島", "忠海港"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TAKEHARA_TRAVEL_ACCESSED};
}
export const TAKEHARA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("takehara-stay-001", "グリーンスカイホテル竹原", "広島県竹原市中央4-2-18", "0846-22-1355", "https://travel.rakuten.co.jp/HOTEL/147937/147937.html"),  stay("takehara-stay-002", "ＮＩＰＰＯＮＩＡ　ＨＯＴＥＬ　竹原　製塩町", "広島県竹原市本町1丁目4-16", null, "https://travel.rakuten.co.jp/HOTEL/176744/176744.html"),  stay("takehara-stay-003", "ホテル　大広苑", "広島県竹原市竹原町3591", "0846-22-2970", "https://travel.rakuten.co.jp/HOTEL/7002/7002.html"),  stay("takehara-stay-004", "Ｔａｂｉｓｔ　瀬戸内の宿　竹原シーサイド", "広島県竹原市忠海長浜3-18-26", "0846-26-2236", "https://travel.rakuten.co.jp/HOTEL/187988/187988.html"),  stay("takehara-stay-005", "休暇村　大久野島", "広島県竹原市忠海町大久野島", "0846-26-0321", "https://travel.rakuten.co.jp/HOTEL/31391/31391.html"),  stay("takehara-stay-006", "古民家宿　あかり忠海／民泊", "広島県竹原市忠海中町2-9-20", "090-8311-8800", "https://travel.rakuten.co.jp/HOTEL/186383/186383.html"),  stay("takehara-stay-007", "瀬戸内リゾートヴィラ", "広島県竹原市吉名町831", "0846-23-4141", "https://travel.rakuten.co.jp/HOTEL/199073/199073.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TAKEHARA_TRAVEL_ACCESSED};
}
export const TAKEHARA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("takehara-dining-01", "レストランアップルミント", "広島県竹原市中央2-7-18", null, "https://tabelog.com/hiroshima/A3404/A340402/34033816/"),  dining("takehara-dining-02", "ルアン NIPPONIA HOTEL 竹原 製塩町", "広島県竹原市本町1-4-16 ニッポニアホテル 竹原 製塩町", null, "https://tabelog.com/hiroshima/A3404/A340402/34027252/"),  dining("takehara-dining-03", "喜楽軒", "広島県竹原市本町1-3-2", null, "https://tabelog.com/hiroshima/A3404/A340402/34004471/"),  dining("takehara-dining-04", "てっぱんやき千代", "広島県竹原市中央3-9-3", null, "https://tabelog.com/hiroshima/A3404/A340402/34010297/"),  dining("takehara-dining-05", "茶房 きまぐれ", "広島県竹原市竹原町3592-3", null, "https://tabelog.com/hiroshima/A3404/A340402/34031378/"),  dining("takehara-dining-06", "竹原カントリークラブ レストラン", "広島県竹原市小梨町字堂平2022", null, "https://tabelog.com/hiroshima/A3404/A340402/34029987/"),  dining("takehara-dining-07", "キッチン&カフェ GUU", "広島県竹原市中央2-7-18", null, "https://tabelog.com/hiroshima/A3404/A340402/34030235/"),  dining("takehara-dining-08", "Hanashu", "広島県竹原市中央2-2-24", null, "https://tabelog.com/hiroshima/A3404/A340402/34033955/"),  dining("takehara-dining-09", "とん吉", "広島県竹原市港町3-1-9", null, "https://tabelog.com/hiroshima/A3404/A340402/34006765/"),  dining("takehara-dining-10", "神田もち店", "広島県竹原市中央3丁目12-26", null, "https://tabelog.com/hiroshima/A3404/A340402/34013129/"),  dining("takehara-dining-11", "中尾醸造株式会社", "広島県竹原市中央5-9-14", null, "https://tabelog.com/hiroshima/A3404/A340402/34020297/"),  dining("takehara-dining-12", "MOMOKICHI庵", "広島県竹原市高崎町2415-1", null, "https://tabelog.com/hiroshima/A3404/A340402/34030381/"),  dining("takehara-dining-13", "CAFE-BY-THE-SEA", "広島県竹原市港町4-2-24", null, "https://tabelog.com/hiroshima/A3404/A340402/34032905/"),  dining("takehara-dining-14", "かまぼこの近末", "広島県竹原市中央2-6-27", null, "https://tabelog.com/hiroshima/A3404/A340402/34017098/"),  dining("takehara-dining-15", "NIPPONIA HOTEL 竹原 製塩町", "広島県竹原市本町1-4-16", null, "https://tabelog.com/hiroshima/A3404/A340402/34030680/"),  dining("takehara-dining-16", "お好み焼山ちゃん", "広島県竹原市竹原町2968-1", null, "https://tabelog.com/hiroshima/A3404/A340402/34006596/"),
];
export const TAKEHARA_DINING_NAME_SET: ReadonlySet<string> = new Set(TAKEHARA_TRAVEL_DINING.map((row) => row.name_ja));
export const TAKEHARA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TAKEHARA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TAKEHARA_TRAVEL_ALL: readonly TravelRow[] = [...TAKEHARA_TRAVEL_DINING, ...TAKEHARA_TRAVEL_STAY, ...TAKEHARA_TRAVEL_SHOPPING, ...TAKEHARA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTakeharaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAKEHARA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTakeharaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAKEHARA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTakeharaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTakeharaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTakeharaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAKEHARA_DINING_NAME_SET.has(row.name_ja);
}
export function takeharaSightPhoto(nameJa: string): MimaPlacePhoto | null { return TAKEHARA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTakeharaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTakeharaOnsenPackRow(row) && !isTakeharaExperiencePackRow(row) && !isTakeharaStayPackRow(row) && !isTakeharaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TAKEHARA_SIGHT_PINS) {
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
export function takeharaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '竹原市 飲食案内' : 'Takehara City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '竹原市 宿泊案内' : 'Takehara City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '竹原市 買物案内' : 'Takehara City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function takeharaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTakeharaOnsenPackRow(row)) return 'onsen';
  if (isTakeharaExperiencePackRow(row)) return 'experience';
  if (isTakeharaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTakeharaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function takeharaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTakeharaOnsenPackRow(row) && !isTakeharaExperiencePackRow(row) && !isTakeharaStayPackRow(row) && !isTakeharaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTakeharaOnsenPackRow(row);
  if (filter === 'experience') return isTakeharaExperiencePackRow(row);
  if (filter === 'stay') return isTakeharaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTakeharaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TAKEHARA_HALL = TAKEHARA.hall;
