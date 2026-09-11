/**
 * Toyo Town travel layer. No frozen pack.
 * Dining: Tabelog C39301 kept 7 + 東洋白浜リゾートホテル レストラン Rakuten 食事. Experience: 海の駅東洋町. Sights +役場/野根川橋/甲浦駅. TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TOYO, TOYO_SIGHT_PHOTOS} from './toyo';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TOYO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const TOYO_TRAVEL_SOURCES = {
  home: 'https://www.town.toyo.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%B4%8B%E7%94%BA',
  kankou: 'https://www.town.toyo.kochi.jp/',
  shirahama: 'https://commons.wikimedia.org/wiki/File:Sirahama_20240514_1.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39301/rstLst/',
  shirahamaResort: 'https://travel.rakuten.co.jp/HOTEL/193185/193185.html'
} as const;

export const TOYO_ONSEN_PACK_NAMES = [] as const;
export const TOYO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TOYO_ONSEN_PACK_NAMES);
export const TOYO_EXPERIENCE_PACK_NAMES = ['海の駅東洋町'] as const;
export const TOYO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TOYO_EXPERIENCE_PACK_NAMES);
export const TOYO_STAY_PACK_NAMES = [] as const;
export const TOYO_STAY_PACK_SET: ReadonlySet<string> = new Set(TOYO_STAY_PACK_NAMES);
export const TOYO_SHOPPING_PACK_NAMES = [] as const;
export const TOYO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TOYO_SHOPPING_PACK_NAMES);

export const TOYO_SIGHT_PINS = ['白浜海水浴場','生見海岸','甲浦','法界上人堂','野根地区','東洋町役場','野根川橋','甲浦駅'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TOYO_TRAVEL_ACCESSED};
}
export const TOYO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('toyo-stay-01', '東洋白浜リゾートホテル', '高知県安芸郡東洋町大字白浜88-8', '0887-29-3344', 'https://travel.rakuten.co.jp/HOTEL/193185/193185.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TOYO_TRAVEL_ACCESSED};
}
export const TOYO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('toyo-dining-01', '海駅食堂', '高知県安芸郡東洋町大字白浜88-1', '0887-23-9955', 'https://tabelog.com/kochi/A3902/A390203/39008915/'),
  dining('toyo-dining-02', 'アント・ダイナ', '高知県安芸郡東洋町大字河内24-21', '0887-29-2080', 'https://tabelog.com/kochi/A3902/A390203/39000031/'),
  dining('toyo-dining-03', '和ダイニング ふぅふぅ', '高知県安芸郡東洋町大字河内1117-13', '080-4840-9060', 'https://tabelog.com/kochi/A3902/A390203/39009169/'),
  dining('toyo-dining-04', '道の駅 東洋町', '高知県安芸郡東洋町大字白浜88-1', '0887-23-9955', 'https://tabelog.com/kochi/A3902/A390203/39003198/'),
  dining('toyo-dining-05', 'いせや食堂', '高知県安芸郡東洋町河内24-52', '0887-29-2245', 'https://tabelog.com/kochi/A3902/A390203/39000908/'),
  dining('toyo-dining-06', 'GRILL JOIN', '高知県安芸郡東洋町河内1102-2', '0887-23-9255', 'https://tabelog.com/kochi/A3902/A390203/39007936/'),
  dining('toyo-dining-07', '野根キッチン', '高知県安芸郡東洋町野根丙1654-3', '090-7542-4435', 'https://tabelog.com/kochi/A3902/A390203/39006982/'),
  dining('toyo-dining-08', '東洋白浜リゾートホテル レストラン', '高知県安芸郡東洋町大字白浜88-8', '0887-29-3344', 'https://travel.rakuten.co.jp/HOTEL/193185/gallery.html'),
];

export const TOYO_DINING_NAME_SET: ReadonlySet<string> = new Set(TOYO_TRAVEL_DINING.map((row) => row.name_ja));
export const TOYO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TOYO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TOYO_TRAVEL_ALL: readonly TravelRow[] = [...TOYO_TRAVEL_DINING, ...TOYO_TRAVEL_STAY, ...TOYO_TRAVEL_SHOPPING, ...TOYO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isToyoOnsenPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isToyoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOYO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isToyoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isToyoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isToyoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOYO_DINING_NAME_SET.has(row.name_ja);
}
export function toyoSightPhoto(nameJa: string): MimaPlacePhoto | null { return TOYO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankToyoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isToyoOnsenPackRow(row) && !isToyoExperiencePackRow(row) && !isToyoStayPackRow(row) && !isToyoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TOYO_SIGHT_PINS) {
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
export function toyoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '東洋町 飲食案内' : 'Toyo Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '東洋町 宿泊案内' : 'Toyo Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '東洋町 買物案内' : 'Toyo Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function toyoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isToyoOnsenPackRow(row)) return 'onsen';
  if (isToyoExperiencePackRow(row)) return 'experience';
  if (isToyoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isToyoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function toyoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isToyoOnsenPackRow(row) && !isToyoExperiencePackRow(row) && !isToyoStayPackRow(row) && !isToyoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isToyoOnsenPackRow(row);
  if (filter === 'experience') return isToyoExperiencePackRow(row);
  if (filter === 'stay') return isToyoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveToyoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TOYO_HALL = TOYO.hall;
