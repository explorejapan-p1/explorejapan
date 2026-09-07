/**
 * Yasuda Town travel layer. No frozen pack.
 * Dining from 食べログ 安田町 (C39304) — thin town honest 6 with 640 dish JPGs (skipped lodging/cafe/sweets/bento/sake / no-640 / cake). Stay: いなかじかん Rakuten 和室. Onsen: 0 (バスルーム/サウナ≠温泉; stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {YASUDA, YASUDA_SIGHT_PHOTOS} from './yasuda';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const YASUDA_TRAVEL_ACCESSED = '2026-09-08' as const;
export const YASUDA_TRAVEL_SOURCES = {
  home: 'https://www.town.yasuda.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%AE%89%E7%94%B0%E7%94%BA',
  kankou: 'https://www.town.yasuda.kochi.jp/',
  shimaishi: 'https://commons.wikimedia.org/wiki/File:%E5%B3%B6%E7%9F%B3%E3%83%94%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF%E5%BA%83%E5%A0%B4_-_panoramio.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39304/rstLst/',
  inakajikan: 'https://travel.rakuten.co.jp/HOTEL/197146/197146.html'
} as const;

export const YASUDA_ONSEN_PACK_NAMES = [] as const;
export const YASUDA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(YASUDA_ONSEN_PACK_NAMES);
export const YASUDA_EXPERIENCE_PACK_NAMES = [] as const;
export const YASUDA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(YASUDA_EXPERIENCE_PACK_NAMES);
export const YASUDA_STAY_PACK_NAMES = [] as const;
export const YASUDA_STAY_PACK_SET: ReadonlySet<string> = new Set(YASUDA_STAY_PACK_NAMES);
export const YASUDA_SHOPPING_PACK_NAMES = [] as const;
export const YASUDA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(YASUDA_SHOPPING_PACK_NAMES);

export const YASUDA_SIGHT_PINS = ['島石ピクニック広場','唐浜休憩所','別所','安田駅','唐浜駅'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: YASUDA_TRAVEL_ACCESSED};
}
export const YASUDA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('yasuda-stay-01', 'いなかじかん', '高知県安芸郡安田町正弘731', '0887-39-2088', 'https://travel.rakuten.co.jp/HOTEL/197146/197146.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: YASUDA_TRAVEL_ACCESSED};
}
export const YASUDA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('yasuda-dining-01', '味工房 じねん', '高知県安芸郡安田町正弘566', '0887-39-2366', 'https://tabelog.com/kochi/A3902/A390202/39000379/'),
  dining('yasuda-dining-02', 'レストラン岬', '高知県安芸郡安田町大字安田16-2', '0887-38-6326', 'https://tabelog.com/kochi/A3902/A390202/39006154/'),
  dining('yasuda-dining-03', 'ドライブイン27神峯店', '高知県安芸郡安田町唐浜2549', '0887-38-3313', 'https://tabelog.com/kochi/A3902/A390202/39006159/'),
  dining('yasuda-dining-04', '望海ノ菜縁', '高知県安芸郡安田町安田1574-3 輝るポート安田内', null, 'https://tabelog.com/kochi/A3902/A390202/39006900/'),
  dining('yasuda-dining-05', '萬領', '高知県安芸郡安田町西島51', '0887-38-3244', 'https://tabelog.com/kochi/A3902/A390202/39008223/'),
  dining('yasuda-dining-06', '魚輝 輝るぽーと安田店', '高知県安芸郡安田町安田1716-6 輝るぽーと安田', '090-2789-4363', 'https://tabelog.com/kochi/A3902/A390202/39007919/'),
];

export const YASUDA_DINING_NAME_SET: ReadonlySet<string> = new Set(YASUDA_TRAVEL_DINING.map((row) => row.name_ja));
export const YASUDA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const YASUDA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const YASUDA_TRAVEL_ALL: readonly TravelRow[] = [...YASUDA_TRAVEL_DINING, ...YASUDA_TRAVEL_STAY, ...YASUDA_TRAVEL_SHOPPING, ...YASUDA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isYasudaOnsenPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isYasudaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return YASUDA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isYasudaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isYasudaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isYasudaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return YASUDA_DINING_NAME_SET.has(row.name_ja);
}
export function yasudaSightPhoto(nameJa: string): MimaPlacePhoto | null { return YASUDA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankYasudaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isYasudaOnsenPackRow(row) && !isYasudaExperiencePackRow(row) && !isYasudaStayPackRow(row) && !isYasudaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of YASUDA_SIGHT_PINS) {
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
export function yasudaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '安田町 飲食案内' : 'Yasuda Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '安田町 宿泊案内' : 'Yasuda Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '安田町 買物案内' : 'Yasuda Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function yasudaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isYasudaOnsenPackRow(row)) return 'onsen';
  if (isYasudaExperiencePackRow(row)) return 'experience';
  if (isYasudaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isYasudaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function yasudaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isYasudaOnsenPackRow(row) && !isYasudaExperiencePackRow(row) && !isYasudaStayPackRow(row) && !isYasudaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isYasudaOnsenPackRow(row);
  if (filter === 'experience') return isYasudaExperiencePackRow(row);
  if (filter === 'stay') return isYasudaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveYasudaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const YASUDA_HALL = YASUDA.hall;
