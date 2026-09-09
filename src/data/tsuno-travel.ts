/**
 * Tsuno Town travel layer. No frozen pack.
 * Dining: Tabelog C39411 (3 kept + 夕晩屋・吉村虎太郎邸・風車の駅・豚太郎 東津野店・いろは食堂). Stay: 星ふるヴィレッジTENGU. Onsen: 0 (stay≠onsen). Experience: 0. TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TSUNO, TSUNO_SIGHT_PHOTOS} from './tsuno';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TSUNO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const TSUNO_TRAVEL_SOURCES = {
  home: 'https://town.kochi-tsuno.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E6%B4%A5%E9%87%8E%E7%94%BA',
  karst: 'https://commons.wikimedia.org/wiki/File:Sikokukarusuto_20250724_2.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39411/rstLst/',
  tengu: 'https://travel.rakuten.co.jp/HOTEL/129993/129993.html'
} as const;

export const TSUNO_ONSEN_PACK_NAMES = [] as const;
export const TSUNO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TSUNO_ONSEN_PACK_NAMES);
export const TSUNO_EXPERIENCE_PACK_NAMES = [] as const;
export const TSUNO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TSUNO_EXPERIENCE_PACK_NAMES);
export const TSUNO_STAY_PACK_NAMES = [] as const;
export const TSUNO_STAY_PACK_SET: ReadonlySet<string> = new Set(TSUNO_STAY_PACK_NAMES);
export const TSUNO_SHOPPING_PACK_NAMES = [] as const;
export const TSUNO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TSUNO_SHOPPING_PACK_NAMES);

export const TSUNO_SIGHT_PINS = ['四国カルスト','風の里公園','四万十川源流之碑','有宮神社','道の駅布施ヶ坂','不入山','森の巣箱'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TSUNO_TRAVEL_ACCESSED};
}
export const TSUNO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('tsuno-stay-01', '星ふるヴィレッジTENGU', '高知県高岡郡津野町芳生野乙4921-22', '0889-62-3188', 'https://travel.rakuten.co.jp/HOTEL/129993/129993.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TSUNO_TRAVEL_ACCESSED};
}
export const TSUNO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('tsuno-dining-01', '自由軒 葉山店', '高知県高岡郡津野町杉ノ川甲308-1', '0889-56-3744', 'https://tabelog.com/kochi/A3903/A390303/39004821/'),
  dining('tsuno-dining-02', '山賊茶屋', '高知県高岡郡津野町船戸新改1816-1', '0889-62-3319', 'https://tabelog.com/kochi/A3903/A390303/39005006/'),
  dining('tsuno-dining-03', 'いまはし', '高知県高岡郡津野町永野486-1', '0889-55-2288', 'https://tabelog.com/kochi/A3903/A390303/39004508/'),
  dining('tsuno-dining-04', '夕晩屋', '高知県高岡郡津野町北川5172', '0889-62-2906', 'https://tabelog.com/kochi/A3903/A390303/39005801/'),
  dining('tsuno-dining-05', '吉村虎太郎邸', '高知県高岡郡津野町芳生野甲1456-1', '0889-62-2601', 'https://tabelog.com/kochi/A3903/A390303/39009141/'),
  dining('tsuno-dining-06', '風車の駅', '高知県高岡郡津野町永野553', '0889-55-2570', 'https://tabelog.com/kochi/A3903/A390303/39002986/'),
  dining('tsuno-dining-07', '豚太郎 東津野店', '高知県高岡郡津野町力石', '0889-62-3360', 'https://tabelog.com/kochi/A3903/A390303/39006722/'),
  dining('tsuno-dining-08', 'いろは食堂', '高知県高岡郡津野町赤木1151', '0889-56-3322', 'https://tabelog.com/kochi/A3903/A390303/39006947/'),
];

export const TSUNO_DINING_NAME_SET: ReadonlySet<string> = new Set(TSUNO_TRAVEL_DINING.map((row) => row.name_ja));
export const TSUNO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TSUNO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TSUNO_TRAVEL_ALL: readonly TravelRow[] = [...TSUNO_TRAVEL_DINING, ...TSUNO_TRAVEL_STAY, ...TSUNO_TRAVEL_SHOPPING, ...TSUNO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTsunoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return TSUNO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTsunoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TSUNO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTsunoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTsunoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTsunoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TSUNO_DINING_NAME_SET.has(row.name_ja);
}
export function tsunoSightPhoto(nameJa: string): MimaPlacePhoto | null { return TSUNO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTsunoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTsunoOnsenPackRow(row) && !isTsunoExperiencePackRow(row) && !isTsunoStayPackRow(row) && !isTsunoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TSUNO_SIGHT_PINS) {
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
export function tsunoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '津野町 飲食案内' : 'Tsuno Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '津野町 宿泊案内' : 'Tsuno Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '津野町 買物案内' : 'Tsuno Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function tsunoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTsunoOnsenPackRow(row)) return 'onsen';
  if (isTsunoExperiencePackRow(row)) return 'experience';
  if (isTsunoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTsunoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function tsunoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTsunoOnsenPackRow(row) && !isTsunoExperiencePackRow(row) && !isTsunoStayPackRow(row) && !isTsunoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTsunoOnsenPackRow(row);
  if (filter === 'experience') return isTsunoExperiencePackRow(row);
  if (filter === 'stay') return isTsunoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTsunoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TSUNO_HALL = TSUNO.hall;
