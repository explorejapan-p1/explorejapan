/**
 * Otsuki Town travel layer. No frozen pack.
 * Dining densify TG610: Tabelog C39424 (3 kept + なぎさ・土佐 力豚屋). Stay: ベルリーフ大月. Onsen: 0 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {OTSUKI, OTSUKI_SIGHT_PHOTOS} from './otsuki';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const OTSUKI_TRAVEL_ACCESSED = '2026-09-09' as const;
export const OTSUKI_TRAVEL_SOURCES = {
  home: 'https://www.town.otsuki.kochi.jp/', hall: 'https://www.town.otsuki.kochi.jp/index2.php',
  kashiwajima: 'https://commons.wikimedia.org/wiki/File:Kashiwajima_(Otsuki),_zenkei-1.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39424/rstLst/',
  belleaf: 'https://travel.rakuten.co.jp/HOTEL/201933/201933.html'
} as const;

export const OTSUKI_ONSEN_PACK_NAMES = [] as const;
export const OTSUKI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(OTSUKI_ONSEN_PACK_NAMES);
export const OTSUKI_EXPERIENCE_PACK_NAMES = [] as const;
export const OTSUKI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(OTSUKI_EXPERIENCE_PACK_NAMES);
export const OTSUKI_STAY_PACK_NAMES = [] as const;
export const OTSUKI_STAY_PACK_SET: ReadonlySet<string> = new Set(OTSUKI_STAY_PACK_NAMES);
export const OTSUKI_SHOPPING_PACK_NAMES = [] as const;
export const OTSUKI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(OTSUKI_SHOPPING_PACK_NAMES);

export const OTSUKI_SIGHT_PINS = ['柏島','柏島石堤','柏島観光情報発信センター','大堂展望台','道の駅大月','竜ヶ浜キャンプ場'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: OTSUKI_TRAVEL_ACCESSED};
}
export const OTSUKI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('otsuki-stay-01', 'ベルリーフ大月', '高知県幡多郡大月町周防形404', '0880-79-5025', 'https://travel.rakuten.co.jp/HOTEL/201933/201933.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: OTSUKI_TRAVEL_ACCESSED};
}
export const OTSUKI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('otsuki-dining-01', '魚ごころ', '高知県幡多郡大月町柏島1096-2', '0880-76-0077', 'https://tabelog.com/kochi/A3904/A390404/39003905/'),
  dining('otsuki-dining-02', 'お好みきみ', '高知県幡多郡大月町柏島149-2', '0880-76-0453', 'https://tabelog.com/kochi/A3904/A390404/39005685/'),
  dining('otsuki-dining-03', '谷鮮魚食堂', '高知県幡多郡大月町弘見2693-1', '0880-79-0816', 'https://tabelog.com/kochi/A3904/A390404/39009012/'),
  dining('otsuki-dining-04', 'なぎさ', '高知県幡多郡大月町大字平山13-33', null, 'https://tabelog.com/kochi/A3904/A390404/39004919/'),
  dining('otsuki-dining-05', '土佐 力豚屋', '高知県幡多郡大月町弘見2693-1', '0880-79-0815', 'https://tabelog.com/kochi/A3904/A390404/39007917/'),
];

export const OTSUKI_DINING_NAME_SET: ReadonlySet<string> = new Set(OTSUKI_TRAVEL_DINING.map((row) => row.name_ja));
export const OTSUKI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const OTSUKI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const OTSUKI_TRAVEL_ALL: readonly TravelRow[] = [...OTSUKI_TRAVEL_DINING, ...OTSUKI_TRAVEL_STAY, ...OTSUKI_TRAVEL_SHOPPING, ...OTSUKI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOtsukiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return OTSUKI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOtsukiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OTSUKI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOtsukiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOtsukiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOtsukiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OTSUKI_DINING_NAME_SET.has(row.name_ja);
}
export function otsukiSightPhoto(nameJa: string): MimaPlacePhoto | null { return OTSUKI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOtsukiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOtsukiOnsenPackRow(row) && !isOtsukiExperiencePackRow(row) && !isOtsukiStayPackRow(row) && !isOtsukiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of OTSUKI_SIGHT_PINS) {
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
export function otsukiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '大月町 飲食案内' : 'Otsuki Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '大月町 宿泊案内' : 'Otsuki Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '大月町 買物案内' : 'Otsuki Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function otsukiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOtsukiOnsenPackRow(row)) return 'onsen';
  if (isOtsukiExperiencePackRow(row)) return 'experience';
  if (isOtsukiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOtsukiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function otsukiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOtsukiOnsenPackRow(row) && !isOtsukiExperiencePackRow(row) && !isOtsukiStayPackRow(row) && !isOtsukiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOtsukiOnsenPackRow(row);
  if (filter === 'experience') return isOtsukiExperiencePackRow(row);
  if (filter === 'stay') return isOtsukiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOtsukiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const OTSUKI_HALL = OTSUKI.hall;
