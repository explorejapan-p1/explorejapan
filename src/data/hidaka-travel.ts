/**
 * Hidaka Village travel layer. No frozen pack.
 * Dining: Tabelog C39410 (3 kept + えみ・とく乃屋・キッチンリトルシェフ・ミライエキッチン・大阪なにわ 道頓堀たこやき). Stay: 貸切宿 芽. Onsen: 0 (stay≠onsen). Experience: 0. Sights honest 5. TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {HIDAKA, HIDAKA_SIGHT_PHOTOS} from './hidaka';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const HIDAKA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const HIDAKA_TRAVEL_SOURCES = {
  home: 'https://www.vill.hidaka.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E6%97%A5%E9%AB%98%E6%9D%91',
  nagoshi: 'https://commons.wikimedia.org/wiki/File:%E5%90%8D%E8%B6%8A%E5%B1%8B%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39410/rstLst/',
  mei: 'https://travel.rakuten.co.jp/HOTEL/185303/185303.html'
} as const;

export const HIDAKA_ONSEN_PACK_NAMES = [] as const;
export const HIDAKA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(HIDAKA_ONSEN_PACK_NAMES);
export const HIDAKA_EXPERIENCE_PACK_NAMES = [] as const;
export const HIDAKA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(HIDAKA_EXPERIENCE_PACK_NAMES);
export const HIDAKA_STAY_PACK_NAMES = [] as const;
export const HIDAKA_STAY_PACK_SET: ReadonlySet<string> = new Set(HIDAKA_STAY_PACK_NAMES);
export const HIDAKA_SHOPPING_PACK_NAMES = [] as const;
export const HIDAKA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(HIDAKA_SHOPPING_PACK_NAMES);

export const HIDAKA_SIGHT_PINS = ['名越屋沈下橋','日高村役場','小村神社','日下駅','柳瀬橋'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: HIDAKA_TRAVEL_ACCESSED};
}
export const HIDAKA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('hidaka-stay-01', '貸切宿 芽', '高知県高岡郡日高村沖名5156-2', '070-9036-3396', 'https://travel.rakuten.co.jp/HOTEL/185303/185303.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: HIDAKA_TRAVEL_ACCESSED};
}
export const HIDAKA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('hidaka-dining-01', '村の小さな台所 おきな', '高知県高岡郡日高村沖名5466', '090-2821-5290', 'https://tabelog.com/kochi/A3903/A390301/39008674/'),
  dining('hidaka-dining-02', 'マンマ亭', '高知県高岡郡日高村下分1706-1', '0889-24-7916', 'https://tabelog.com/kochi/A3903/A390302/39005243/'),
  dining('hidaka-dining-03', '龍鳳', '高知県高岡郡日高村本郷251-3', '0889-24-4112', 'https://tabelog.com/kochi/A3903/A390302/39002217/'),
  dining('hidaka-dining-04', 'えみ', '高知県高岡郡日高村本郷159-5', '0889-24-4622', 'https://tabelog.com/kochi/A3903/A390302/39001948/'),
  dining('hidaka-dining-05', 'とく乃屋', '高知県高岡郡日高村岩目地727-2', '0889-39-1936', 'https://tabelog.com/kochi/A3903/A390302/39008113/'),
  dining('hidaka-dining-06', 'キッチンリトルシェフ', '高知県高岡郡日高村下分1886-3', null, 'https://tabelog.com/kochi/A3903/A390302/39008541/'),
  dining('hidaka-dining-07', 'ミライエキッチン', '高知県高岡郡日高村本村226-1', '0889-39-1857', 'https://tabelog.com/kochi/A3901/A390103/39007978/'),
  dining('hidaka-dining-08', '大阪なにわ 道頓堀たこやき', '高知県高岡郡日高村下分1886-3', '0889-24-4482', 'https://tabelog.com/kochi/A3903/A390302/39006317/'),
];

export const HIDAKA_DINING_NAME_SET: ReadonlySet<string> = new Set(HIDAKA_TRAVEL_DINING.map((row) => row.name_ja));
export const HIDAKA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const HIDAKA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const HIDAKA_TRAVEL_ALL: readonly TravelRow[] = [...HIDAKA_TRAVEL_DINING, ...HIDAKA_TRAVEL_STAY, ...HIDAKA_TRAVEL_SHOPPING, ...HIDAKA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isHidakaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return HIDAKA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isHidakaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIDAKA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isHidakaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isHidakaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isHidakaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIDAKA_DINING_NAME_SET.has(row.name_ja);
}
export function hidakaSightPhoto(nameJa: string): MimaPlacePhoto | null { return HIDAKA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankHidakaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isHidakaOnsenPackRow(row) && !isHidakaExperiencePackRow(row) && !isHidakaStayPackRow(row) && !isHidakaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of HIDAKA_SIGHT_PINS) {
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
export function hidakaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '日高村 飲食案内' : 'Hidaka Village dining list';
  if (row.category === 'stay') return locale === 'ja' ? '日高村 宿泊案内' : 'Hidaka Village lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '日高村 買物案内' : 'Hidaka Village shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '村の観光案内' : 'Village tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function hidakaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isHidakaOnsenPackRow(row)) return 'onsen';
  if (isHidakaExperiencePackRow(row)) return 'experience';
  if (isHidakaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isHidakaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function hidakaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isHidakaOnsenPackRow(row) && !isHidakaExperiencePackRow(row) && !isHidakaStayPackRow(row) && !isHidakaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isHidakaOnsenPackRow(row);
  if (filter === 'experience') return isHidakaExperiencePackRow(row);
  if (filter === 'stay') return isHidakaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveHidakaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const HIDAKA_HALL = HIDAKA.hall;
