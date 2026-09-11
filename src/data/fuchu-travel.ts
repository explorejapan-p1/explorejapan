/**
 * Fuchu City (Hiroshima) travel layer. Slug fuchu. No frozen pack.
 * Dining from 食べログ 府中市 (C34208)×16 with dish JPGs. Stay: Rakuten 部屋 stills×3. Onsen: facility bath still×1 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県府中市 only (NOT Tokyo 府中市, NOT 安芸郡府中町).
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {FUCHU, FUCHU_SIGHT_PHOTOS} from './fuchu';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const FUCHU_TRAVEL_ACCESSED = '2026-09-10' as const;
export const FUCHU_TRAVEL_SOURCES = {
  home: 'https://www.city.fuchu.hiroshima.jp/', hall: 'https://www.city.fuchu.hiroshima.jp/',
  kanko: 'https://fuchu-kanko.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34208/rstLst/'
} as const;

export const FUCHU_ONSEN_PACK_NAMES = ["富士旅館＜広島県＞ 大浴場"] as const;
export const FUCHU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(FUCHU_ONSEN_PACK_NAMES);
export const FUCHU_EXPERIENCE_PACK_NAMES = [] as const;
export const FUCHU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(FUCHU_EXPERIENCE_PACK_NAMES);
export const FUCHU_STAY_PACK_NAMES = [] as const;
export const FUCHU_STAY_PACK_SET: ReadonlySet<string> = new Set(FUCHU_STAY_PACK_NAMES);
export const FUCHU_SHOPPING_PACK_NAMES = [] as const;
export const FUCHU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(FUCHU_SHOPPING_PACK_NAMES);

export const FUCHU_SIGHT_PINS = ["上下町並み", "矢野岩海", "道の駅びんご府中", "府中駅", "府中公園"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: FUCHU_TRAVEL_ACCESSED};
}
export const FUCHU_TRAVEL_STAY: readonly TravelRow[] = [
  stay("fuchu-stay-001", "府中第一ホテル", "広島県府中市元町468-3", "0847-46-3111", "https://travel.rakuten.co.jp/HOTEL/9648/9648.html"),
  stay("fuchu-stay-002", "富士旅館＜広島県＞", "広島県府中市府中町25-3", "0847-41-2295", "https://travel.rakuten.co.jp/HOTEL/16069/16069.html"),
  stay("fuchu-stay-003", "大吉旅館", "広島県府中市府中町146", "0847-41-2268", "https://travel.rakuten.co.jp/HOTEL/17644/17644.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: FUCHU_TRAVEL_ACCESSED};
}
export const FUCHU_TRAVEL_DINING: readonly TravelRow[] = [
  dining("fuchu-dining-01", "香輝惣菜", "広島県府中市府川町186-1", "0847-46-2677", "https://tabelog.com/hiroshima/A3405/A340504/34015469/"),
  dining("fuchu-dining-02", "同楽縁 府中店", "広島県府中市元町445-1", "0847-46-3351", "https://tabelog.com/hiroshima/A3405/A340504/34017522/"),
  dining("fuchu-dining-03", "江戸前 華寿し", "広島県府中市中須町315-1", "0847-51-8900", "https://tabelog.com/hiroshima/A3405/A340504/34017936/"),
  dining("fuchu-dining-04", "味の蔵　府中店", "広島県府中市府川町318-1", "0847-46-2022", "https://tabelog.com/hiroshima/A3405/A340504/34016437/"),
  dining("fuchu-dining-05", "鷹屋", "広島県府中市中須町1119-3", "0847-45-6606", "https://tabelog.com/hiroshima/A3405/A340504/34015480/"),
  dining("fuchu-dining-06", "幸成堂", "広島県府中市府川町100-12", "0847-46-3556", "https://tabelog.com/hiroshima/A3405/A340504/34015520/"),
  dining("fuchu-dining-07", "お好み焼き きよ", "広島県府中市府中町190-49", "0847-41-7766", "https://tabelog.com/hiroshima/A3405/A340504/34022613/"),
  dining("fuchu-dining-08", "居酒屋　じゅんちゃん", "広島県府中市元町98-3", null, "https://tabelog.com/hiroshima/A3405/A340504/34006798/"),
  dining("fuchu-dining-09", "道の駅 びんご府中 レストラン", "広島県府中市府川町230-1", "0847-54-2300", "https://tabelog.com/hiroshima/A3405/A340504/34022799/"),
  dining("fuchu-dining-10", "麺屋 一藤", "広島県府中市中須町1106", "0847-45-2653", "https://tabelog.com/hiroshima/A3405/A340504/34015517/"),
  dining("fuchu-dining-11", "ダイニング　永遠", "広島県府中市中須町964-1", "0847-46-4206", "https://tabelog.com/hiroshima/A3405/A340504/34015072/"),
  dining("fuchu-dining-12", "棕櫚庵", "広島県府中市上下町階見1797", "0847-62-2429", "https://tabelog.com/hiroshima/A3405/A340504/34015407/"),
  dining("fuchu-dining-13", "びんご府中たこ焼き", "広島県府中市目崎町7-1", null, "https://tabelog.com/hiroshima/A3405/A340504/34019034/"),
  dining("fuchu-dining-14", "幸", "広島県府中市中須町958-10", "0847-45-4125", "https://tabelog.com/hiroshima/A3405/A340504/34008688/"),
  dining("fuchu-dining-15", "珈琲 煎濾 天満屋府中店", "広島県府中市府川町186-1", "0847-45-3377", "https://tabelog.com/hiroshima/A3405/A340504/34019035/"),
  dining("fuchu-dining-16", "麺猿", "広島県府中市上下町井永132-1", "090-3988-9775", "https://tabelog.com/hiroshima/A3405/A340504/34020584/"),
];
export const FUCHU_DINING_NAME_SET: ReadonlySet<string> = new Set(FUCHU_TRAVEL_DINING.map((row) => row.name_ja));
export const FUCHU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const FUCHU_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const FUCHU_TRAVEL_ALL: readonly TravelRow[] = [...FUCHU_TRAVEL_DINING, ...FUCHU_TRAVEL_STAY, ...FUCHU_TRAVEL_SHOPPING, ...FUCHU_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isFuchuOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUCHU_ONSEN_PACK_SET.has(row.name_ja);
}
export function isFuchuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUCHU_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isFuchuStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isFuchuShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isFuchuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUCHU_DINING_NAME_SET.has(row.name_ja);
}
export function fuchuSightPhoto(nameJa: string): MimaPlacePhoto | null { return FUCHU_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankFuchuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isFuchuOnsenPackRow(row) && !isFuchuExperiencePackRow(row) && !isFuchuStayPackRow(row) && !isFuchuDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of FUCHU_SIGHT_PINS) {
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
export function fuchuSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '府中市 飲食案内' : 'Fuchu City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '府中市 宿泊案内' : 'Fuchu City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '府中市 買物案内' : 'Fuchu City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function fuchuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isFuchuOnsenPackRow(row)) return 'onsen';
  if (isFuchuExperiencePackRow(row)) return 'experience';
  if (isFuchuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isFuchuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function fuchuPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isFuchuOnsenPackRow(row) && !isFuchuExperiencePackRow(row) && !isFuchuStayPackRow(row) && !isFuchuDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isFuchuOnsenPackRow(row);
  if (filter === 'experience') return isFuchuExperiencePackRow(row);
  if (filter === 'stay') return isFuchuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveFuchuFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const FUCHU_HALL = FUCHU.hall;
