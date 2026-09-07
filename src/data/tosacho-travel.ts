/**
 * Tosa Town travel layer. No frozen pack.
 * Dining from 食べログ 土佐町 (C39363) — honest 3 with 640 dish JPGs (skipped コンビニ・旅館・ホテル・dish0). Stay: さめうら荘レイクサイドホテル Rakuten 和室 LARGE (mediaInfo【和室一例】). Onsen: 0 (in-room bath; stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TOSACHO, TOSACHO_SIGHT_PHOTOS} from './tosacho';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TOSACHO_TRAVEL_ACCESSED = '2026-09-08' as const;
export const TOSACHO_TRAVEL_SOURCES = {
  home: 'https://www.town.tosacho.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E8%B1%8A%E7%94%BA',
  kankou: 'https://www.town.tosacho.kochi.jp/kanko/',
  burakuji: 'https://commons.wikimedia.org/wiki/File:Burakuji_01.JPG',
  tabelogCity: 'https://tabelog.com/kochi/C39363/rstLst/',
  tosachonomori: 'https://travel.rakuten.co.jp/HOTEL/184242/184242.html'
} as const;

export const TOSACHO_ONSEN_PACK_NAMES = [] as const;
export const TOSACHO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TOSACHO_ONSEN_PACK_NAMES);
export const TOSACHO_EXPERIENCE_PACK_NAMES = [] as const;
export const TOSACHO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TOSACHO_EXPERIENCE_PACK_NAMES);
export const TOSACHO_STAY_PACK_NAMES = [] as const;
export const TOSACHO_STAY_PACK_SET: ReadonlySet<string> = new Set(TOSACHO_STAY_PACK_NAMES);
export const TOSACHO_SHOPPING_PACK_NAMES = [] as const;
export const TOSACHO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TOSACHO_SHOPPING_PACK_NAMES);

export const TOSACHO_SIGHT_PINS = ['道の駅土佐さめうら','土佐町役場','上吉野川橋','田井','土居のパノラマ'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TOSACHO_TRAVEL_ACCESSED};
}
export const TOSACHO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('tosacho-stay-01', 'さめうら荘レイクサイドホテル', '高知県土佐郡土佐町田井146-1', '0887-82-1020', 'https://travel.rakuten.co.jp/HOTEL/180726/180726.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TOSACHO_TRAVEL_ACCESSED};
}
export const TOSACHO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('tosacho-dining-01', '柳屋食堂', '高知県土佐郡土佐町田井1501', '0887-82-0152', 'https://tabelog.com/kochi/A3901/A390104/39005848/'),
  dining('tosacho-dining-02', 'cafeかのん', '高知県土佐郡土佐町田井1716-1', '0887-82-2634', 'https://tabelog.com/kochi/A3901/A390104/39005839/'),
  dining('tosacho-dining-03', 'ラーメン土佐町439', '高知県土佐郡土佐町田井1208-11', '0887-72-9567', 'https://tabelog.com/kochi/A3901/A390104/39008037/'),
];

export const TOSACHO_DINING_NAME_SET: ReadonlySet<string> = new Set(TOSACHO_TRAVEL_DINING.map((row) => row.name_ja));
export const TOSACHO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TOSACHO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TOSACHO_TRAVEL_ALL: readonly TravelRow[] = [...TOSACHO_TRAVEL_DINING, ...TOSACHO_TRAVEL_STAY, ...TOSACHO_TRAVEL_SHOPPING, ...TOSACHO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTosachoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return TOSACHO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTosachoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOSACHO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTosachoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTosachoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTosachoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOSACHO_DINING_NAME_SET.has(row.name_ja);
}
export function tosachoSightPhoto(nameJa: string): MimaPlacePhoto | null { return TOSACHO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTosachoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTosachoOnsenPackRow(row) && !isTosachoExperiencePackRow(row) && !isTosachoStayPackRow(row) && !isTosachoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TOSACHO_SIGHT_PINS) {
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
export function tosachoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '土佐町 飲食案内' : 'Tosa Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '土佐町 宿泊案内' : 'Tosa Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '土佐町 買物案内' : 'Tosa Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function tosachoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTosachoOnsenPackRow(row)) return 'onsen';
  if (isTosachoExperiencePackRow(row)) return 'experience';
  if (isTosachoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTosachoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function tosachoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTosachoOnsenPackRow(row) && !isTosachoExperiencePackRow(row) && !isTosachoStayPackRow(row) && !isTosachoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTosachoOnsenPackRow(row);
  if (filter === 'experience') return isTosachoExperiencePackRow(row);
  if (filter === 'stay') return isTosachoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTosachoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TOSACHO_HALL = TOSACHO.hall;
