/**
 * Shimanto Town travel layer. No frozen pack.
 * Dining densify TG610: Tabelog C39412 (3 kept + さくら・武蔵・食堂ヒラグシ・駒鳥・焼き肉 にくよし). Stay: ファミリーロッジ旅籠屋・四万十店. Onsen: 0 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SHIMANTOCHO, SHIMANTOCHO_SIGHT_PHOTOS} from './shimantocho';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SHIMANTOCHO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const SHIMANTOCHO_TRAVEL_SOURCES = {
  home: 'https://www.town.shimanto.lg.jp/', hall: 'https://www.town.shimanto.lg.jp/yakuba/',
  itchibaw: 'https://commons.wikimedia.org/wiki/File:%E4%B8%80%E6%96%97%E4%BF%B5%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39412/rstLst/',
  hatagoya: 'https://travel.rakuten.co.jp/HOTEL/167315/167315.html'
} as const;

export const SHIMANTOCHO_ONSEN_PACK_NAMES = [] as const;
export const SHIMANTOCHO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SHIMANTOCHO_ONSEN_PACK_NAMES);
export const SHIMANTOCHO_EXPERIENCE_PACK_NAMES = [] as const;
export const SHIMANTOCHO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SHIMANTOCHO_EXPERIENCE_PACK_NAMES);
export const SHIMANTOCHO_STAY_PACK_NAMES = [] as const;
export const SHIMANTOCHO_STAY_PACK_SET: ReadonlySet<string> = new Set(SHIMANTOCHO_STAY_PACK_NAMES);
export const SHIMANTOCHO_SHOPPING_PACK_NAMES = [] as const;
export const SHIMANTOCHO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SHIMANTOCHO_SHOPPING_PACK_NAMES);

export const SHIMANTOCHO_SIGHT_PINS = ['一斗俵沈下橋','岩本寺','海洋堂ホビー館四万十','窪川駅','道の駅四万十大正','道の駅あぐり窪川'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SHIMANTOCHO_TRAVEL_ACCESSED};
}
export const SHIMANTOCHO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('shimantocho-stay-01', 'ファミリーロッジ旅籠屋・四万十店', '高知県高岡郡四万十町東大奈路519', '0880-22-4858', 'https://travel.rakuten.co.jp/HOTEL/167315/167315.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SHIMANTOCHO_TRAVEL_ACCESSED};
}
export const SHIMANTOCHO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('shimantocho-dining-01', 'Pizzeria Lo-co', '高知県高岡郡四万十町新開町2-1', '090-1570-0065', 'https://tabelog.com/kochi/A3904/A390402/39004802/'),
  dining('shimantocho-dining-02', 'コバコ', '高知県高岡郡四万十町本町2-1', '080-2037-7889', 'https://tabelog.com/kochi/A3904/A390402/39007371/'),
  dining('shimantocho-dining-03', 'ボルゲリ', '高知県高岡郡四万十町榊山町6-20', '0880-22-0811', 'https://tabelog.com/kochi/A3904/A390402/39005618/'),
  dining('shimantocho-dining-04', 'さくら', '高知県高岡郡四万十町茂串町5-8', '0880-22-0516', 'https://tabelog.com/kochi/A3904/A390402/39002862/'),
  dining('shimantocho-dining-05', '武蔵', '高知県高岡郡四万十町本町7-21', '0880-22-0634', 'https://tabelog.com/kochi/A3904/A390402/39002973/'),
  dining('shimantocho-dining-06', '食堂ヒラグシ', '高知県高岡郡四万十町平串411', '0880-22-8132', 'https://tabelog.com/kochi/A3904/A390402/39001825/'),
  dining('shimantocho-dining-07', '駒鳥', '高知県高岡郡四万十町本町2-18', '0880-22-0374', 'https://tabelog.com/kochi/A3904/A390402/39003346/'),
  dining('shimantocho-dining-08', '焼き肉 にくよし', '高知県高岡郡四万十町古市8-26', '0880-22-0807', 'https://tabelog.com/kochi/A3904/A390402/39006450/'),
];

export const SHIMANTOCHO_DINING_NAME_SET: ReadonlySet<string> = new Set(SHIMANTOCHO_TRAVEL_DINING.map((row) => row.name_ja));
export const SHIMANTOCHO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SHIMANTOCHO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SHIMANTOCHO_TRAVEL_ALL: readonly TravelRow[] = [...SHIMANTOCHO_TRAVEL_DINING, ...SHIMANTOCHO_TRAVEL_STAY, ...SHIMANTOCHO_TRAVEL_SHOPPING, ...SHIMANTOCHO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isShimantochoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return SHIMANTOCHO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isShimantochoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHIMANTOCHO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isShimantochoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isShimantochoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isShimantochoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHIMANTOCHO_DINING_NAME_SET.has(row.name_ja);
}
export function shimantochoSightPhoto(nameJa: string): MimaPlacePhoto | null { return SHIMANTOCHO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankShimantochoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isShimantochoOnsenPackRow(row) && !isShimantochoExperiencePackRow(row) && !isShimantochoStayPackRow(row) && !isShimantochoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SHIMANTOCHO_SIGHT_PINS) {
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
export function shimantochoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '四万十町 飲食案内' : 'Shimanto Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '四万十町 宿泊案内' : 'Shimanto Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '四万十町 買物案内' : 'Shimanto Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function shimantochoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isShimantochoOnsenPackRow(row)) return 'onsen';
  if (isShimantochoExperiencePackRow(row)) return 'experience';
  if (isShimantochoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isShimantochoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function shimantochoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isShimantochoOnsenPackRow(row) && !isShimantochoExperiencePackRow(row) && !isShimantochoStayPackRow(row) && !isShimantochoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isShimantochoOnsenPackRow(row);
  if (filter === 'experience') return isShimantochoExperiencePackRow(row);
  if (filter === 'stay') return isShimantochoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveShimantochoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SHIMANTOCHO_HALL = SHIMANTOCHO.hall;
