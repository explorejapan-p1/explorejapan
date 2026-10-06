/**
 * Sera (Hiroshima Sera District) travel layer.
 * Dining from 食べログ 世羅町 (C34462)×16 with dish JPGs. Stay: Rakuten 部屋 still×1. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県世羅郡世羅町 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SERA, SERA_SIGHT_PHOTOS} from './sera';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SERA_TRAVEL_ACCESSED = '2026-09-11' as const;
export const SERA_TRAVEL_SOURCES = {
  home: 'https://www.town.sera.hiroshima.jp/', hall: 'https://www.town.sera.hiroshima.jp/',
  kanko: 'https://seranan.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34462/rstLst/'
} as const;

export const SERA_ONSEN_PACK_NAMES = ["大衆演劇せら温泉 大浴場", "せら香遊ランド 大浴場"] as const;
export const SERA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SERA_ONSEN_PACK_NAMES);
export const SERA_EXPERIENCE_PACK_NAMES = [] as const;
export const SERA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SERA_EXPERIENCE_PACK_NAMES);
export const SERA_STAY_PACK_NAMES = [] as const;
export const SERA_STAY_PACK_SET: ReadonlySet<string> = new Set(SERA_STAY_PACK_NAMES);
export const SERA_SHOPPING_PACK_NAMES = [] as const;
export const SERA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SERA_SHOPPING_PACK_NAMES);

export const SERA_SIGHT_PINS = ["せらワイナリー", "世羅高原農場", "道の駅世羅", "花夢の里", "古城山展望台"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SERA_TRAVEL_ACCESSED};
}
export const SERA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("sera-stay-001", "すずらんホテル木原", "広島県世羅郡世羅町西上原427-6", "0847-22-0160", "https://travel.rakuten.co.jp/HOTEL/19106/19106.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SERA_TRAVEL_ACCESSED};
}
export const SERA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("sera-dining-01", "焼肉えぇじゃん 世羅店", "広島県世羅郡世羅町大字小世良684-1", null, "https://tabelog.com/hiroshima/A3405/A340504/34022132/"),
  dining("sera-dining-02", "料理屋 日日", "広島県世羅郡世羅町津口312", null, "https://tabelog.com/hiroshima/A3405/A340504/34031496/"),
  dining("sera-dining-03", "三波羅", "広島県世羅郡世羅町西神崎876-1", null, "https://tabelog.com/hiroshima/A3405/A340504/34016800/"),
  dining("sera-dining-04", "おへそカフェ アンド ベーカリー", "広島県世羅郡世羅町宇津戸1155", null, "https://tabelog.com/hiroshima/A3405/A340504/34014898/"),
  dining("sera-dining-05", "マルシェ", "広島県世羅郡世羅町本郷915-9", null, "https://tabelog.com/hiroshima/A3405/A340504/34017002/"),
  dining("sera-dining-06", "ファミリーレストラン タイニー", "広島県世羅郡世羅町大字西上原483-3", null, "https://tabelog.com/hiroshima/A3405/A340504/34001689/"),
  dining("sera-dining-07", "農場レストラン", "広島県世羅郡世羅町別迫1124-11 世羅高原農場", null, "https://tabelog.com/hiroshima/A3405/A340504/34019374/"),
  dining("sera-dining-08", "手打ちそばコウのトリ", "広島県世羅郡世羅町寺町1549-9", null, "https://tabelog.com/hiroshima/A3405/A340504/34032703/"),
  dining("sera-dining-09", "CAFE 悠悠緩緩", "広島県世羅郡世羅町小国1252", null, "https://tabelog.com/hiroshima/A3405/A340504/34024050/"),
  dining("sera-dining-10", "喜久鮨", "広島県世羅郡世羅町西上原159-1", null, "https://tabelog.com/hiroshima/A3405/A340504/34012994/"),
  dining("sera-dining-11", "pakan", "広島県世羅郡世羅町京丸765-7", null, "https://tabelog.com/hiroshima/A3405/A340504/34033440/"),
  dining("sera-dining-12", "日向草", "広島県世羅郡世羅町重永198", null, "https://tabelog.com/hiroshima/A3405/A340504/34025587/"),
  dining("sera-dining-13", "洋風居酒屋　三番", "広島県世羅郡世羅町本郷48-5", null, "https://tabelog.com/hiroshima/A3405/A340504/34011481/"),
  dining("sera-dining-14", "キッチン風見鶏", "広島県世羅郡世羅町東神崎261-4", null, "https://tabelog.com/hiroshima/A3405/A340504/34018580/"),
  dining("sera-dining-15", "仲田屋", "広島県世羅郡世羅町東神崎394-7", null, "https://tabelog.com/hiroshima/A3405/A340504/34019863/"),
  dining("sera-dining-16", "車力", "広島県世羅郡世羅町重永245", null, "https://tabelog.com/hiroshima/A3405/A340504/34017076/"),
];
export const SERA_DINING_NAME_SET: ReadonlySet<string> = new Set(SERA_TRAVEL_DINING.map((row) => row.name_ja));
export const SERA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SERA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SERA_TRAVEL_ALL: readonly TravelRow[] = [...SERA_TRAVEL_DINING, ...SERA_TRAVEL_STAY, ...SERA_TRAVEL_SHOPPING, ...SERA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isSeraOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SERA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isSeraExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SERA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isSeraStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSeraShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSeraDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SERA_DINING_NAME_SET.has(row.name_ja);
}
export function seraSightPhoto(nameJa: string): MimaPlacePhoto | null { return SERA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankSeraSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isSeraOnsenPackRow(row) && !isSeraExperiencePackRow(row) && !isSeraStayPackRow(row) && !isSeraDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SERA_SIGHT_PINS) {
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
export function seraSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '世羅町 飲食案内' : 'Sera dining list';
  if (row.category === 'stay') return locale === 'ja' ? '世羅町 宿泊案内' : 'Sera lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '世羅町 買物案内' : 'Sera shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function seraTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isSeraOnsenPackRow(row)) return 'onsen';
  if (isSeraExperiencePackRow(row)) return 'experience';
  if (isSeraStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isSeraDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function seraPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isSeraOnsenPackRow(row) && !isSeraExperiencePackRow(row) && !isSeraStayPackRow(row) && !isSeraDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSeraOnsenPackRow(row);
  if (filter === 'experience') return isSeraExperiencePackRow(row);
  if (filter === 'stay') return isSeraStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveSeraFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SERA_HALL = SERA.hall;
