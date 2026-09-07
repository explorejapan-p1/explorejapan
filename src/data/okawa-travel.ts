/**
 * Okawa Village travel layer. No frozen pack.
 * Dining from 食べログ 大川村 (C39364) — honest 1 with 640 dish JPG (結いの里; skipped 旅館民宿・ホテル). Stay: 自然王国 白滝の里 Rakuten 教室タイプ LARGE (noplan-k1 mediaInfo「教室」). Onsen: 0 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {OKAWA, OKAWA_SIGHT_PHOTOS} from './okawa';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const OKAWA_TRAVEL_ACCESSED = '2026-09-08' as const;
export const OKAWA_TRAVEL_SOURCES = {
  home: 'https://www.vill.okawa.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%B7%9D%E6%9D%91',
  kankou: 'https://www.vill.okawa.kochi.jp/life/dtl.php?hdnKey=1216',
  kogane: 'https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E9%87%91%E6%BB%9D_-_panoramio.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39364/rstLst/',
  shirataki: 'https://travel.rakuten.co.jp/HOTEL/16467/16467.html'
} as const;

export const OKAWA_ONSEN_PACK_NAMES = [] as const;
export const OKAWA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(OKAWA_ONSEN_PACK_NAMES);
export const OKAWA_EXPERIENCE_PACK_NAMES = [] as const;
export const OKAWA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(OKAWA_EXPERIENCE_PACK_NAMES);
export const OKAWA_STAY_PACK_NAMES = [] as const;
export const OKAWA_STAY_PACK_SET: ReadonlySet<string> = new Set(OKAWA_STAY_PACK_NAMES);
export const OKAWA_SHOPPING_PACK_NAMES = [] as const;
export const OKAWA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(OKAWA_SHOPPING_PACK_NAMES);

export const OKAWA_SIGHT_PINS = ['小金滝','大川村役場','村のえき','翁の滝','自然王国白滝の里'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: OKAWA_TRAVEL_ACCESSED};
}
export const OKAWA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('okawa-stay-01', '自然王国 白滝の里', '高知県土佐郡大川村朝谷26', '0887-84-2201', 'https://travel.rakuten.co.jp/HOTEL/16467/16467.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: OKAWA_TRAVEL_ACCESSED};
}
export const OKAWA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('okawa-dining-01', '結いの里', '高知県土佐郡大川村船戸239', '0887-84-2233', 'https://tabelog.com/kochi/A3901/A390104/39006661/'),
];

export const OKAWA_DINING_NAME_SET: ReadonlySet<string> = new Set(OKAWA_TRAVEL_DINING.map((row) => row.name_ja));
export const OKAWA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const OKAWA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const OKAWA_TRAVEL_ALL: readonly TravelRow[] = [...OKAWA_TRAVEL_DINING, ...OKAWA_TRAVEL_STAY, ...OKAWA_TRAVEL_SHOPPING, ...OKAWA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOkawaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return OKAWA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOkawaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OKAWA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOkawaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOkawaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOkawaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OKAWA_DINING_NAME_SET.has(row.name_ja);
}
export function okawaSightPhoto(nameJa: string): MimaPlacePhoto | null { return OKAWA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOkawaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOkawaOnsenPackRow(row) && !isOkawaExperiencePackRow(row) && !isOkawaStayPackRow(row) && !isOkawaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of OKAWA_SIGHT_PINS) {
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
export function okawaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '大川村 飲食案内' : 'Okawa Village dining list';
  if (row.category === 'stay') return locale === 'ja' ? '大川村 宿泊案内' : 'Okawa Village lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '大川村 買物案内' : 'Okawa Village shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '村の観光案内' : 'Village tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function okawaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOkawaOnsenPackRow(row)) return 'onsen';
  if (isOkawaExperiencePackRow(row)) return 'experience';
  if (isOkawaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOkawaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function okawaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOkawaOnsenPackRow(row) && !isOkawaExperiencePackRow(row) && !isOkawaStayPackRow(row) && !isOkawaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOkawaOnsenPackRow(row);
  if (filter === 'experience') return isOkawaExperiencePackRow(row);
  if (filter === 'stay') return isOkawaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOkawaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const OKAWA_HALL = OKAWA.hall;
