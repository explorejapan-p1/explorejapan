/**
 * Nahari Town travel layer. No frozen pack.
 * Dining from 食べログ 奈半利町 (C39302) — thin town honest 5 with 640 dish JPGs (skipped lodging/cafe/sweets/convenience/bento / no-640 / product-not-dish). Stay: ホテルなはり Rakuten 本館シングル. Onsen: 0. Experience: 0 (no distinct experience pack with sourced photo beyond station sight).
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NAHARI, NAHARI_SIGHT_PHOTOS} from './nahari';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const NAHARI_TRAVEL_ACCESSED = '2026-09-08' as const;
export const NAHARI_TRAVEL_SOURCES = {
  home: 'https://www.town.nahari.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%A5%88%E5%8D%8A%E5%88%A9%E7%94%BA',
  kankou: 'https://www.town.nahari.kochi.jp/',
  chuoPark: 'https://commons.wikimedia.org/wiki/File:Nahari_central_park_202308.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39302/rstLst/',
  hotelNahari: 'https://travel.rakuten.co.jp/HOTEL/20702/20702.html'
} as const;

export const NAHARI_ONSEN_PACK_NAMES = [] as const;
export const NAHARI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NAHARI_ONSEN_PACK_NAMES);
export const NAHARI_EXPERIENCE_PACK_NAMES = [] as const;
export const NAHARI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(NAHARI_EXPERIENCE_PACK_NAMES);
export const NAHARI_STAY_PACK_NAMES = [] as const;
export const NAHARI_STAY_PACK_SET: ReadonlySet<string> = new Set(NAHARI_STAY_PACK_NAMES);
export const NAHARI_SHOPPING_PACK_NAMES = [] as const;
export const NAHARI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(NAHARI_SHOPPING_PACK_NAMES);

export const NAHARI_SIGHT_PINS = ['奈半利中央公園','加領郷灯台','奈半利町甲','奈半利港眺望','奈半利駅'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: NAHARI_TRAVEL_ACCESSED};
}
export const NAHARI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('nahari-stay-01', 'ホテルなはり', '高知県安芸郡奈半利町乙593-1', '0887-38-5111', 'https://travel.rakuten.co.jp/HOTEL/20702/20702.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: NAHARI_TRAVEL_ACCESSED};
}
export const NAHARI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('nahari-dining-01', 'ショップ ヨシダ', '高知県安芸郡奈半利町乙119-1', '0887-38-4724', 'https://tabelog.com/kochi/A3902/A390202/39007542/'),
  dining('nahari-dining-02', 'ドライブインなぎさ', '高知県安芸郡奈半利町須川甲1905-1', '0887-38-3986', 'https://tabelog.com/kochi/A3902/A390202/39000567/'),
  dining('nahari-dining-03', '笑福', '高知県安芸郡奈半利町乙1700-2', '0887-30-1922', 'https://tabelog.com/kochi/A3902/A390202/39009187/'),
  dining('nahari-dining-04', '楽園', '高知県安芸郡奈半利町乙1745', '0887-38-4203', 'https://tabelog.com/kochi/A3902/A390202/39000994/'),
  dining('nahari-dining-05', '豚福亭', '高知県安芸郡奈半利町乙4861-1 なはり駅前', '0887-38-3001', 'https://tabelog.com/kochi/A3902/A390202/39002185/'),
];

export const NAHARI_DINING_NAME_SET: ReadonlySet<string> = new Set(NAHARI_TRAVEL_DINING.map((row) => row.name_ja));
export const NAHARI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const NAHARI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const NAHARI_TRAVEL_ALL: readonly TravelRow[] = [...NAHARI_TRAVEL_DINING, ...NAHARI_TRAVEL_STAY, ...NAHARI_TRAVEL_SHOPPING, ...NAHARI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isNahariOnsenPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNahariExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NAHARI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isNahariStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNahariShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNahariDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NAHARI_DINING_NAME_SET.has(row.name_ja);
}
export function nahariSightPhoto(nameJa: string): MimaPlacePhoto | null { return NAHARI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankNahariSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isNahariOnsenPackRow(row) && !isNahariExperiencePackRow(row) && !isNahariStayPackRow(row) && !isNahariDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of NAHARI_SIGHT_PINS) {
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
export function nahariSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '奈半利町 飲食案内' : 'Nahari Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '奈半利町 宿泊案内' : 'Nahari Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '奈半利町 買物案内' : 'Nahari Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function nahariTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isNahariOnsenPackRow(row)) return 'onsen';
  if (isNahariExperiencePackRow(row)) return 'experience';
  if (isNahariStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isNahariDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function nahariPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isNahariOnsenPackRow(row) && !isNahariExperiencePackRow(row) && !isNahariStayPackRow(row) && !isNahariDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNahariOnsenPackRow(row);
  if (filter === 'experience') return isNahariExperiencePackRow(row);
  if (filter === 'stay') return isNahariStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveNahariFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const NAHARI_HALL = NAHARI.hall;
