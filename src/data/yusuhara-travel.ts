/**
 * Yusuhara Town travel layer. No frozen pack.
 * Dining: Tabelog C39405 (3 kept + インディーズ・チムジルバンレストラン鷹取・スパイス&カレー BONGA・かざぐるま). Stay: 雲の上のホテル別館・マルシェユスハラ. Onsen: 0 (stay≠onsen). Experience: 0. TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {YUSUHARA, YUSUHARA_SIGHT_PHOTOS} from './yusuhara';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const YUSUHARA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const YUSUHARA_TRAVEL_SOURCES = {
  home: 'https://www.town.yusuhara.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E6%AA%8B%E5%8E%9F%E7%94%BA',
  tengu: 'https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E7%8B%97%E9%AB%98%E5%8E%9F_-_panoramio.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39405/rstLst/',
  marche: 'https://travel.rakuten.co.jp/HOTEL/109505/109505.html'
} as const;

export const YUSUHARA_ONSEN_PACK_NAMES = [] as const;
export const YUSUHARA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(YUSUHARA_ONSEN_PACK_NAMES);
export const YUSUHARA_EXPERIENCE_PACK_NAMES = [] as const;
export const YUSUHARA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(YUSUHARA_EXPERIENCE_PACK_NAMES);
export const YUSUHARA_STAY_PACK_NAMES = [] as const;
export const YUSUHARA_STAY_PACK_SET: ReadonlySet<string> = new Set(YUSUHARA_STAY_PACK_NAMES);
export const YUSUHARA_SHOPPING_PACK_NAMES = [] as const;
export const YUSUHARA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(YUSUHARA_SHOPPING_PACK_NAMES);

export const YUSUHARA_SIGHT_PINS = ['天狗高原','梼原町役場','まちの駅「ゆすはら」','韮ヶ峠','いちやがもり','神在居の千枚田','大野ヶ原'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: YUSUHARA_TRAVEL_ACCESSED};
}
export const YUSUHARA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('yusuhara-stay-01', '雲の上のホテル別館・マルシェユスハラ', '高知県高岡郡梼原町梼原1196-1', '0889-65-1288', 'https://travel.rakuten.co.jp/HOTEL/109505/109505.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: YUSUHARA_TRAVEL_ACCESSED};
}
export const YUSUHARA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('yusuhara-dining-01', '雲の上のレストラン', '高知県高岡郡梼原町太郎川3799-3 雲の上のホテル内', '0889-65-1100', 'https://tabelog.com/kochi/A3903/A390303/39000002/'),
  dining('yusuhara-dining-02', 'くさぶき', '高知県高岡郡梼原町太郎川799 太郎川公園内', '0889-65-0500', 'https://tabelog.com/kochi/A3903/A390303/39003589/'),
  dining('yusuhara-dining-03', 'シェムワ', '高知県高岡郡梼原町松原401', '0889-40-2727', 'https://tabelog.com/kochi/A3903/A390303/39003612/'),
  dining('yusuhara-dining-04', 'インディーズ', '高知県高岡郡梼原町梼原1419', null, 'https://tabelog.com/kochi/A3903/A390303/39003533/'),
  dining('yusuhara-dining-05', 'チムジルバンレストラン鷹取', '高知県高岡郡梼原町下折渡210', '0889-62-3308', 'https://tabelog.com/kochi/A3903/A390303/39005883/'),
  dining('yusuhara-dining-06', 'スパイス&カレー BONGA', '高知県高岡郡梼原町梼原1345', '080-3952-1583', 'https://tabelog.com/kochi/A3903/A390303/39007517/'),
  dining('yusuhara-dining-07', 'かざぐるま', '高知県高岡郡梼原町梼原1648', null, 'https://tabelog.com/kochi/A3903/A390303/39008199/'),
];

export const YUSUHARA_DINING_NAME_SET: ReadonlySet<string> = new Set(YUSUHARA_TRAVEL_DINING.map((row) => row.name_ja));
export const YUSUHARA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const YUSUHARA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const YUSUHARA_TRAVEL_ALL: readonly TravelRow[] = [...YUSUHARA_TRAVEL_DINING, ...YUSUHARA_TRAVEL_STAY, ...YUSUHARA_TRAVEL_SHOPPING, ...YUSUHARA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isYusuharaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return YUSUHARA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isYusuharaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return YUSUHARA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isYusuharaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isYusuharaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isYusuharaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return YUSUHARA_DINING_NAME_SET.has(row.name_ja);
}
export function yusuharaSightPhoto(nameJa: string): MimaPlacePhoto | null { return YUSUHARA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankYusuharaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isYusuharaOnsenPackRow(row) && !isYusuharaExperiencePackRow(row) && !isYusuharaStayPackRow(row) && !isYusuharaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of YUSUHARA_SIGHT_PINS) {
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
export function yusuharaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '梼原町 飲食案内' : 'Yusuhara Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '梼原町 宿泊案内' : 'Yusuhara Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '梼原町 買物案内' : 'Yusuhara Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function yusuharaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isYusuharaOnsenPackRow(row)) return 'onsen';
  if (isYusuharaExperiencePackRow(row)) return 'experience';
  if (isYusuharaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isYusuharaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function yusuharaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isYusuharaOnsenPackRow(row) && !isYusuharaExperiencePackRow(row) && !isYusuharaStayPackRow(row) && !isYusuharaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isYusuharaOnsenPackRow(row);
  if (filter === 'experience') return isYusuharaExperiencePackRow(row);
  if (filter === 'stay') return isYusuharaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveYusuharaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const YUSUHARA_HALL = YUSUHARA.hall;
