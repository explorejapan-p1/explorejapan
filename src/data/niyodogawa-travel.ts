/**
 * Niyodogawa Town travel layer. No frozen pack.
 * Dining from 食べログ 仁淀川町 (C39387) — honest 3 with dish JPGs (きたはら / スープカレー トランス / 味処 おさき; skipped 民宿・ホテル内・dish0). Stay: 中津渓谷 ゆの森 Rakuten 本館和室 LARGE (plan LARGE a6e422c3 = mediaInfo「本館和室」). Onsen: 0 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NIYODOGAWA, NIYODOGAWA_SIGHT_PHOTOS} from './niyodogawa';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const NIYODOGAWA_TRAVEL_ACCESSED = '2026-09-08' as const;
export const NIYODOGAWA_TRAVEL_SOURCES = {
  home: 'https://www.town.niyodogawa.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E4%BB%81%E6%B7%80%E5%B7%9D%E7%94%BA',
  kankou: 'https://www.town.niyodogawa.lg.jp/',
  nakatsu: 'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E6%B4%A5%E6%B8%93%E8%B0%B7_-_panoramio.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39387/rstLst/',
  yunomori: 'https://travel.rakuten.co.jp/HOTEL/107685/107685.html'
} as const;

export const NIYODOGAWA_ONSEN_PACK_NAMES = [] as const;
export const NIYODOGAWA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NIYODOGAWA_ONSEN_PACK_NAMES);
export const NIYODOGAWA_EXPERIENCE_PACK_NAMES = [] as const;
export const NIYODOGAWA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(NIYODOGAWA_EXPERIENCE_PACK_NAMES);
export const NIYODOGAWA_STAY_PACK_NAMES = [] as const;
export const NIYODOGAWA_STAY_PACK_SET: ReadonlySet<string> = new Set(NIYODOGAWA_STAY_PACK_NAMES);
export const NIYODOGAWA_SHOPPING_PACK_NAMES = [] as const;
export const NIYODOGAWA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(NIYODOGAWA_SHOPPING_PACK_NAMES);

export const NIYODOGAWA_SIGHT_PINS = ['中津渓谷','仁淀川町役場','雨竜の滝','長者の棚田','大渡ダム'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: NIYODOGAWA_TRAVEL_ACCESSED};
}
export const NIYODOGAWA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('niyodogawa-stay-01', '中津渓谷 ゆの森', '高知県吾川郡仁淀川町名野川258-1', '0889-36-0680', 'https://travel.rakuten.co.jp/HOTEL/107685/107685.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: NIYODOGAWA_TRAVEL_ACCESSED};
}
export const NIYODOGAWA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('niyodogawa-dining-01', 'きたはら', '高知県吾川郡仁淀川町大崎238-3', '0889-20-2123', 'https://tabelog.com/kochi/A3903/A390302/39007425/'),
  dining('niyodogawa-dining-02', 'スープカレー トランス', '高知県吾川郡仁淀川町大崎474-12', '070-8515-4504', 'https://tabelog.com/kochi/A3903/A390302/39008745/'),
  dining('niyodogawa-dining-03', '味処 おさき', '高知県吾川郡仁淀川町大崎325', '0889-35-0309', 'https://tabelog.com/kochi/A3903/A390302/39006963/'),
];

export const NIYODOGAWA_DINING_NAME_SET: ReadonlySet<string> = new Set(NIYODOGAWA_TRAVEL_DINING.map((row) => row.name_ja));
export const NIYODOGAWA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const NIYODOGAWA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const NIYODOGAWA_TRAVEL_ALL: readonly TravelRow[] = [...NIYODOGAWA_TRAVEL_DINING, ...NIYODOGAWA_TRAVEL_STAY, ...NIYODOGAWA_TRAVEL_SHOPPING, ...NIYODOGAWA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isNiyodogawaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return NIYODOGAWA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isNiyodogawaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NIYODOGAWA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isNiyodogawaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNiyodogawaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNiyodogawaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NIYODOGAWA_DINING_NAME_SET.has(row.name_ja);
}
export function niyodogawaSightPhoto(nameJa: string): MimaPlacePhoto | null { return NIYODOGAWA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankNiyodogawaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isNiyodogawaOnsenPackRow(row) && !isNiyodogawaExperiencePackRow(row) && !isNiyodogawaStayPackRow(row) && !isNiyodogawaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of NIYODOGAWA_SIGHT_PINS) {
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
export function niyodogawaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '仁淀川町 飲食案内' : 'Niyodogawa Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '仁淀川町 宿泊案内' : 'Niyodogawa Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '仁淀川町 買物案内' : 'Niyodogawa Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function niyodogawaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isNiyodogawaOnsenPackRow(row)) return 'onsen';
  if (isNiyodogawaExperiencePackRow(row)) return 'experience';
  if (isNiyodogawaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isNiyodogawaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function niyodogawaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isNiyodogawaOnsenPackRow(row) && !isNiyodogawaExperiencePackRow(row) && !isNiyodogawaStayPackRow(row) && !isNiyodogawaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNiyodogawaOnsenPackRow(row);
  if (filter === 'experience') return isNiyodogawaExperiencePackRow(row);
  if (filter === 'stay') return isNiyodogawaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveNiyodogawaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const NIYODOGAWA_HALL = NIYODOGAWA.hall;
