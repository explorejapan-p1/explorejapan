/**
 * Mihara Village travel layer. No frozen pack.
 * Dining from 食べログ 三原村 (C39427) — honest 1 with 640 dish JPG (やまびこカフェ; skipped コンビニ・民宿・旅館・0-dish cafes). Stay: 農家民宿 森本まる official やまびこ washitsu futon still. Onsen: 0 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MIHARA, MIHARA_SIGHT_PHOTOS} from './mihara';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MIHARA_TRAVEL_ACCESSED = '2026-09-08' as const;
export const MIHARA_TRAVEL_SOURCES = {
  home: 'https://www.vill.mihara.kochi.jp/', hall: 'https://www.vill.mihara.kochi.jp/',
  yamabikoStay: 'https://mihara-yamabiko.com/stay/',
  tabelogCity: 'https://tabelog.com/kochi/C39427/rstLst/'
} as const;

export const MIHARA_ONSEN_PACK_NAMES = [] as const;
export const MIHARA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MIHARA_ONSEN_PACK_NAMES);
export const MIHARA_EXPERIENCE_PACK_NAMES = [] as const;
export const MIHARA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MIHARA_EXPERIENCE_PACK_NAMES);
export const MIHARA_STAY_PACK_NAMES = [] as const;
export const MIHARA_STAY_PACK_SET: ReadonlySet<string> = new Set(MIHARA_STAY_PACK_NAMES);
export const MIHARA_SHOPPING_PACK_NAMES = [] as const;
export const MIHARA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MIHARA_SHOPPING_PACK_NAMES);

export const MIHARA_SIGHT_PINS = ['星ヶ丘公園','五社神社','三原村役場'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MIHARA_TRAVEL_ACCESSED};
}
export const MIHARA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('mihara-stay-01', '農家民宿 森本まる', '高知県幡多郡三原村宮ノ川514-2', '0880-46-2622', 'https://mihara-yamabiko.com/stay/')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MIHARA_TRAVEL_ACCESSED};
}
export const MIHARA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('mihara-dining-01', 'やまびこカフェ', '高知県幡多郡三原村宮の川1130', '090-5914-7083', 'https://tabelog.com/kochi/A3904/A390403/39006162/'),
];

export const MIHARA_DINING_NAME_SET: ReadonlySet<string> = new Set(MIHARA_TRAVEL_DINING.map((row) => row.name_ja));
export const MIHARA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MIHARA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MIHARA_TRAVEL_ALL: readonly TravelRow[] = [...MIHARA_TRAVEL_DINING, ...MIHARA_TRAVEL_STAY, ...MIHARA_TRAVEL_SHOPPING, ...MIHARA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMiharaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return MIHARA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMiharaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIHARA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMiharaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMiharaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMiharaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIHARA_DINING_NAME_SET.has(row.name_ja);
}
export function miharaSightPhoto(nameJa: string): MimaPlacePhoto | null { return MIHARA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMiharaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMiharaOnsenPackRow(row) && !isMiharaExperiencePackRow(row) && !isMiharaStayPackRow(row) && !isMiharaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MIHARA_SIGHT_PINS) {
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
export function miharaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '三原村 飲食案内' : 'Mihara Village dining list';
  if (row.category === 'stay') return locale === 'ja' ? '三原村 宿泊案内' : 'Mihara Village lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '三原村 買物案内' : 'Mihara Village shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '村の観光案内' : 'Village tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function miharaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMiharaOnsenPackRow(row)) return 'onsen';
  if (isMiharaExperiencePackRow(row)) return 'experience';
  if (isMiharaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMiharaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function miharaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMiharaOnsenPackRow(row) && !isMiharaExperiencePackRow(row) && !isMiharaStayPackRow(row) && !isMiharaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMiharaOnsenPackRow(row);
  if (filter === 'experience') return isMiharaExperiencePackRow(row);
  if (filter === 'stay') return isMiharaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMiharaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const MIHARA_HALL = MIHARA.hall;
