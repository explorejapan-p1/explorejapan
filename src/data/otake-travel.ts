/**
 * Otake City (Hiroshima) travel layer. Slug otake. No frozen pack.
 * Dining from 食べログ 大竹市 (C34211)×16 with dish JPGs. Stay: Rakuten 部屋 stills×4. Onsen: facility bath stills×3 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県大竹市 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {OTAKE, OTAKE_SIGHT_PHOTOS} from './otake';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const OTAKE_TRAVEL_ACCESSED = '2026-09-10' as const;
export const OTAKE_TRAVEL_SOURCES = {
  home: 'https://www.city.otake.hiroshima.jp/', hall: 'https://www.city.otake.hiroshima.jp/',
  kanko: 'https://www.city.otake.hiroshima.jp/soshiki/somu/sangyoshinko/gyomu/kanko/index.html',
  tabelogCity: 'https://tabelog.com/hiroshima/C34211/rstLst/'
} as const;

export const OTAKE_ONSEN_PACK_NAMES = ["サンホテル大竹 銭湯『昇鯉湯』", "ビジネスホテルマスヤ 男性専用共同風呂", "プライベートサウナ　アザミガーデン大竹　＾ 風呂"] as const;
export const OTAKE_ONSEN_PACK_SET: ReadonlySet<string> = new Set(OTAKE_ONSEN_PACK_NAMES);
export const OTAKE_EXPERIENCE_PACK_NAMES = [] as const;
export const OTAKE_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(OTAKE_EXPERIENCE_PACK_NAMES);
export const OTAKE_STAY_PACK_NAMES = [] as const;
export const OTAKE_STAY_PACK_SET: ReadonlySet<string> = new Set(OTAKE_STAY_PACK_NAMES);
export const OTAKE_SHOPPING_PACK_NAMES = [] as const;
export const OTAKE_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(OTAKE_SHOPPING_PACK_NAMES);

export const OTAKE_SIGHT_PINS = ["亀居公園", "大竹駅", "下瀬美術館", "三倉岳", "阿多田島"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: OTAKE_TRAVEL_ACCESSED};
}
export const OTAKE_TRAVEL_STAY: readonly TravelRow[] = [
  stay("otake-stay-001", "サンホテル大竹", "広島県大竹市北栄6-7", "0827-52-8810", "https://travel.rakuten.co.jp/HOTEL/188903/188903.html"),
  stay("otake-stay-002", "ビジネスホテルマスヤ", "広島県大竹市新町1-8-11", "0827-52-2446", "https://travel.rakuten.co.jp/HOTEL/137845/137845.html"),
  stay("otake-stay-003", "Ｓｉｍｏｓｅ　Ａｒｔ　Ｇａｒｄｅｎ　Ｖｉｌｌａ", "広島県大竹市晴海2-10-50", null, "https://travel.rakuten.co.jp/HOTEL/191449/191449.html"),
  stay("otake-stay-004", "プライベートサウナ　アザミガーデン大竹　＾", "広島県大竹市栗谷町大栗林302-1", "080-7008-6427", "https://travel.rakuten.co.jp/HOTEL/199620/199620.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: OTAKE_TRAVEL_ACCESSED};
}
export const OTAKE_TRAVEL_DINING: readonly TravelRow[] = [
  dining("otake-dining-01", "SIMOSE French Restaurant", "広島県大竹市晴海2-10-50", null, "https://tabelog.com/hiroshima/A3402/A340203/34031059/"),
  dining("otake-dining-02", "居酒屋一心", "広島県大竹市新町1-8-14", null, "https://tabelog.com/hiroshima/A3402/A340203/34012455/"),
  dining("otake-dining-03", "カフェ＆フード サンヒトリ", "広島県大竹市玖波4-1-1 広島西医療センター 1F", null, "https://tabelog.com/hiroshima/A3402/A340203/34025826/"),
  dining("otake-dining-04", "プラスグッドデイ", "広島県大竹市玖波1-6-2", null, "https://tabelog.com/hiroshima/A3402/A340203/34023049/"),
  dining("otake-dining-05", "のYAKI", "広島県大竹市油見3-18-11 商工会議所 1F", null, "https://tabelog.com/hiroshima/A3402/A340203/34023855/"),
  dining("otake-dining-06", "どんどん ゆめタウン大竹店", "広島県大竹市晴海1-6-1", null, "https://tabelog.com/hiroshima/A3402/A340203/34005629/"),
  dining("otake-dining-07", "晩酌家ＫＩＫＵ", "広島県大竹市玖波3-2-3", null, "https://tabelog.com/hiroshima/A3402/A340203/34006381/"),
  dining("otake-dining-08", "鑫旺", "広島県大竹市西栄1-20-13", null, "https://tabelog.com/hiroshima/A3402/A340203/34017822/"),
  dining("otake-dining-09", "大正キッチン", "広島県大竹市南栄3-1-37", null, "https://tabelog.com/hiroshima/A3402/A340203/34025488/"),
  dining("otake-dining-10", "お食事処 みずなか", "広島県大竹市玖波1-2-34", null, "https://tabelog.com/hiroshima/A3402/A340203/34002562/"),
  dining("otake-dining-11", "オオタケ バル ガク", "広島県大竹市新町1-3-3", null, "https://tabelog.com/hiroshima/A3402/A340203/34023810/"),
  dining("otake-dining-12", "ばり嗎 大竹南栄店", "広島県大竹市南栄1-6-3", null, "https://tabelog.com/hiroshima/A3402/A340203/34034709/"),
  dining("otake-dining-13", "Les gouters gaku", "広島県大竹市新町1-9-1 1F", null, "https://tabelog.com/hiroshima/A3402/A340203/34030531/"),
  dining("otake-dining-14", "さちのたね", "広島県大竹市松ケ原町443", null, "https://tabelog.com/hiroshima/A3402/A340203/34034023/"),
  dining("otake-dining-15", "小西お好み焼き店", "広島県大竹市晴海1-4-30", null, "https://tabelog.com/hiroshima/A3402/A340203/34001197/"),
  dining("otake-dining-16", "うさ季", "広島県大竹市玖波3-7-22", null, "https://tabelog.com/hiroshima/A3402/A340203/34030187/"),
];
export const OTAKE_DINING_NAME_SET: ReadonlySet<string> = new Set(OTAKE_TRAVEL_DINING.map((row) => row.name_ja));
export const OTAKE_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const OTAKE_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const OTAKE_TRAVEL_ALL: readonly TravelRow[] = [...OTAKE_TRAVEL_DINING, ...OTAKE_TRAVEL_STAY, ...OTAKE_TRAVEL_SHOPPING, ...OTAKE_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOtakeOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OTAKE_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOtakeExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OTAKE_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOtakeStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOtakeShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOtakeDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OTAKE_DINING_NAME_SET.has(row.name_ja);
}
export function otakeSightPhoto(nameJa: string): MimaPlacePhoto | null { return OTAKE_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOtakeSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOtakeOnsenPackRow(row) && !isOtakeExperiencePackRow(row) && !isOtakeStayPackRow(row) && !isOtakeDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of OTAKE_SIGHT_PINS) {
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
export function otakeSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '大竹市 飲食案内' : 'Otake City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '大竹市 宿泊案内' : 'Otake City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '大竹市 買物案内' : 'Otake City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function otakeTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOtakeOnsenPackRow(row)) return 'onsen';
  if (isOtakeExperiencePackRow(row)) return 'experience';
  if (isOtakeStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOtakeDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function otakePackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOtakeOnsenPackRow(row) && !isOtakeExperiencePackRow(row) && !isOtakeStayPackRow(row) && !isOtakeDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOtakeOnsenPackRow(row);
  if (filter === 'experience') return isOtakeExperiencePackRow(row);
  if (filter === 'stay') return isOtakeStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOtakeFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const OTAKE_HALL = OTAKE.hall;
