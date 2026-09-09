/**
 * Ochi Town travel layer. No frozen pack.
 * Dining: Tabelog C39403 (3 kept + 麺や倉橋・かどた・味楽・仙八・花・狩女). Stay: スノーピークおち仁淀川. Onsen: 0 (stay≠onsen). Experience: 0. TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {OCHI, OCHI_SIGHT_PHOTOS} from './ochi';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const OCHI_TRAVEL_ACCESSED = '2026-09-09' as const;
export const OCHI_TRAVEL_SOURCES = {
  home: 'https://www.town.ochi.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E8%B6%8A%E7%9F%A5%E7%94%BA',
  stayList: 'https://www.town.ochi.kochi.jp/kankou/stayafter/',
  yokokura: 'https://commons.wikimedia.org/wiki/File:%E6%A8%AA%E5%80%89%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0%E3%81%8B%E3%82%89%E3%81%AE%E4%BB%81%E6%B7%80%E5%B7%9D%E3%81%A8%E8%B6%8A%E7%9F%A5%E7%94%BA.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39403/rstLst/',
  snowpeak: 'https://www.snowpeak.co.jp/locations/ochi/'
} as const;

export const OCHI_ONSEN_PACK_NAMES = [] as const;
export const OCHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(OCHI_ONSEN_PACK_NAMES);
export const OCHI_EXPERIENCE_PACK_NAMES = [] as const;
export const OCHI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(OCHI_EXPERIENCE_PACK_NAMES);
export const OCHI_STAY_PACK_NAMES = [] as const;
export const OCHI_STAY_PACK_SET: ReadonlySet<string> = new Set(OCHI_STAY_PACK_NAMES);
export const OCHI_SHOPPING_PACK_NAMES = [] as const;
export const OCHI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(OCHI_SHOPPING_PACK_NAMES);

export const OCHI_SIGHT_PINS = ['横倉山','越知町役場','中仁淀橋','大樽の滝','横倉山自然の森博物館','平家の宮','安徳天皇侍従能登守教経石碑'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: OCHI_TRAVEL_ACCESSED};
}
export const OCHI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('ochi-stay-01', 'スノーピークおち仁淀川キャンプフィールド', '高知県高岡郡越知町片岡4番地', '0889-27-2622', 'https://www.snowpeak.co.jp/locations/ochi/')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: OCHI_TRAVEL_ACCESSED};
}
export const OCHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('ochi-dining-01', '自由軒 本店', '高知県高岡郡越知町野老山2882', '0889-26-0198', 'https://tabelog.com/kochi/A3903/A390302/39000097/'),
  dining('ochi-dining-02', 'ドライブイン片岡', '高知県高岡郡越知町越知丙737', '0889-26-0357', 'https://tabelog.com/kochi/A3903/A390302/39003552/'),
  dining('ochi-dining-03', 'フクロー飲食店', '高知県高岡郡越知町越知甲2143', null, 'https://tabelog.com/kochi/A3903/A390302/39002386/'),
  dining('ochi-dining-04', '麺や倉橋', '高知県高岡郡越知町越知丙746', '0889-20-9595', 'https://tabelog.com/kochi/A3903/A390302/39006664/'),
  dining('ochi-dining-05', '居食屋 かどた', '高知県高岡郡越知町越知甲1737-2', '0889-26-0241', 'https://tabelog.com/kochi/A3903/A390302/39004044/'),
  dining('ochi-dining-06', '味楽', '高知県高岡郡越知町越知甲2333-4', '0889-26-3381', 'https://tabelog.com/kochi/A3903/A390302/39000919/'),
  dining('ochi-dining-07', '仙八', '高知県高岡郡越知町越知甲1951-18', '0889-26-3270', 'https://tabelog.com/kochi/A3903/A390302/39007611/'),
  dining('ochi-dining-08', '花', '高知県高岡郡越知町越知甲1997', '0889-26-3272', 'https://tabelog.com/kochi/A3903/A390302/39003331/'),
  dining('ochi-dining-09', '狩女', '高知県高岡郡越知町越知甲1538-1', '0889-26-3456', 'https://tabelog.com/kochi/A3903/A390302/39000620/'),
];

export const OCHI_DINING_NAME_SET: ReadonlySet<string> = new Set(OCHI_TRAVEL_DINING.map((row) => row.name_ja));
export const OCHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const OCHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const OCHI_TRAVEL_ALL: readonly TravelRow[] = [...OCHI_TRAVEL_DINING, ...OCHI_TRAVEL_STAY, ...OCHI_TRAVEL_SHOPPING, ...OCHI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOchiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return OCHI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOchiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OCHI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOchiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOchiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOchiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OCHI_DINING_NAME_SET.has(row.name_ja);
}
export function ochiSightPhoto(nameJa: string): MimaPlacePhoto | null { return OCHI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOchiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOchiOnsenPackRow(row) && !isOchiExperiencePackRow(row) && !isOchiStayPackRow(row) && !isOchiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of OCHI_SIGHT_PINS) {
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
export function ochiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '越知町 飲食案内' : 'Ochi Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '越知町 宿泊案内' : 'Ochi Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '越知町 買物案内' : 'Ochi Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function ochiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOchiOnsenPackRow(row)) return 'onsen';
  if (isOchiExperiencePackRow(row)) return 'experience';
  if (isOchiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOchiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function ochiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOchiOnsenPackRow(row) && !isOchiExperiencePackRow(row) && !isOchiStayPackRow(row) && !isOchiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOchiOnsenPackRow(row);
  if (filter === 'experience') return isOchiExperiencePackRow(row);
  if (filter === 'stay') return isOchiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOchiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const OCHI_HALL = OCHI.hall;
