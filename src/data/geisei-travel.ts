/**
 * Geisei Village travel layer. No frozen pack.
 * Dining from 食べログ C39307 — 4 with 640 dish JPGs (incl. SEA HOUSE pasta; skipped lodging hotel restaurants LOCAVORE/四季 / cafe トレビス / bento 喜ら功 / convenience / no-640). Stay: 芸西村の家. Onsen: 0 (大浴場≠温泉). Experience: 0. TG610.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {GEISEI, GEISEI_SIGHT_PHOTOS} from './geisei';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const GEISEI_TRAVEL_ACCESSED = '2026-09-09' as const;
export const GEISEI_TRAVEL_SOURCES = {
  home: 'https://www.vill.geisei.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E8%8A%B8%E8%A5%BF%E6%9D%91',
  kankou: 'https://www.vill.geisei.kochi.jp/',
  kotogahama: 'https://commons.wikimedia.org/wiki/File:Kotogahama.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39307/rstLst/',
  muraNoIe: 'https://travel.rakuten.co.jp/HOTEL/197184/197184.html'
} as const;

export const GEISEI_ONSEN_PACK_NAMES = [] as const;
export const GEISEI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(GEISEI_ONSEN_PACK_NAMES);
export const GEISEI_EXPERIENCE_PACK_NAMES = [] as const;
export const GEISEI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(GEISEI_EXPERIENCE_PACK_NAMES);
export const GEISEI_STAY_PACK_NAMES = [] as const;
export const GEISEI_STAY_PACK_SET: ReadonlySet<string> = new Set(GEISEI_STAY_PACK_NAMES);
export const GEISEI_SHOPPING_PACK_NAMES = [] as const;
export const GEISEI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(GEISEI_SHOPPING_PACK_NAMES);

export const GEISEI_SIGHT_PINS = ['琴ヶ浜','和食駅','西分駅','芸西村役場'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: GEISEI_TRAVEL_ACCESSED};
}
export const GEISEI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('geisei-stay-01', '芸西村の家', '高知県安芸郡芸西村和食甲4525', '0887-33-2894', 'https://travel.rakuten.co.jp/HOTEL/197184/197184.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: GEISEI_TRAVEL_ACCESSED};
}
export const GEISEI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('geisei-dining-01', '活魚レストラン 藤 芸西店', '高知県安芸郡芸西村西分甲2840-4', '0887-33-3772', 'https://tabelog.com/kochi/A3901/A390106/39002820/'),
  dining('geisei-dining-02', 'Kochi黒潮カントリークラブ', '高知県安芸郡芸西村西分甲5207', '0887-33-4455', 'https://tabelog.com/kochi/A3901/A390106/39005910/'),
  dining('geisei-dining-03', 'レストランサザンクロス', '高知県安芸郡芸西村和食甲4525', '0887-33-4410', 'https://tabelog.com/kochi/A3901/A390106/39002685/'),
  dining('geisei-dining-04', 'SEA HOUSE', '高知県安芸郡芸西村西分乙54-1', '0887-32-2880', 'https://tabelog.com/kochi/A3901/A390106/39004235/'),
];

export const GEISEI_DINING_NAME_SET: ReadonlySet<string> = new Set(GEISEI_TRAVEL_DINING.map((row) => row.name_ja));
export const GEISEI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const GEISEI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const GEISEI_TRAVEL_ALL: readonly TravelRow[] = [...GEISEI_TRAVEL_DINING, ...GEISEI_TRAVEL_STAY, ...GEISEI_TRAVEL_SHOPPING, ...GEISEI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isGeiseiOnsenPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isGeiseiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return GEISEI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isGeiseiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isGeiseiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isGeiseiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return GEISEI_DINING_NAME_SET.has(row.name_ja);
}
export function geiseiSightPhoto(nameJa: string): MimaPlacePhoto | null { return GEISEI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankGeiseiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isGeiseiOnsenPackRow(row) && !isGeiseiExperiencePackRow(row) && !isGeiseiStayPackRow(row) && !isGeiseiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of GEISEI_SIGHT_PINS) {
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
export function geiseiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '芸西村 飲食案内' : 'Geisei Village dining list';
  if (row.category === 'stay') return locale === 'ja' ? '芸西村 宿泊案内' : 'Geisei Village lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '芸西村 買物案内' : 'Geisei Village shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '村の観光案内' : 'Village tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function geiseiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isGeiseiOnsenPackRow(row)) return 'onsen';
  if (isGeiseiExperiencePackRow(row)) return 'experience';
  if (isGeiseiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isGeiseiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function geiseiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isGeiseiOnsenPackRow(row) && !isGeiseiExperiencePackRow(row) && !isGeiseiStayPackRow(row) && !isGeiseiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isGeiseiOnsenPackRow(row);
  if (filter === 'experience') return isGeiseiExperiencePackRow(row);
  if (filter === 'stay') return isGeiseiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveGeiseiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const GEISEI_HALL = GEISEI.hall;
