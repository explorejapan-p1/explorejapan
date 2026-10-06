/**
 * Kitagawa Village travel layer. No frozen pack.
 * Dining: Tabelog C39305 640×3 + ゆずの宿 レストラン Rakuten 食事 still. Stay: ゆずの宿 客室和洋. Onsen: 大浴場 (stay≠onsen). Experience: モネの庭 散策. TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KITAGAWA, KITAGAWA_SIGHT_PHOTOS} from './kitagawa';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KITAGAWA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const KITAGAWA_TRAVEL_SOURCES = {
  home: 'https://www.kitagawamura.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%8C%97%E5%B7%9D%E6%9D%91',
  kankou: 'https://kitagawakanko.jp/',
  monet: 'https://commons.wikimedia.org/wiki/File:Monet-Marumottan-mizu02.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39305/rstLst/',
  yuzunoyado: 'https://travel.rakuten.co.jp/HOTEL/167471/167471.html',
  monetTour: 'https://kitagawakanko.jp/tourism/monet.html',
  rintetsu: 'https://kitagawakanko.jp/rintetsu/index.html',
  horigao: 'https://commons.wikimedia.org/wiki/File:%E5%A0%80%E3%83%B6%E7%94%9F%E6%A9%8B_-_panoramio.jpg',
  nakaokaStatue: 'https://commons.wikimedia.org/wiki/File:Statue_of_Nakaoka_Shintaro.jpg'
} as const;

export const KITAGAWA_ONSEN_PACK_NAMES = ['北川村温泉 ゆずの宿 大浴場'] as const;
export const KITAGAWA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KITAGAWA_ONSEN_PACK_NAMES);
export const KITAGAWA_EXPERIENCE_PACK_NAMES = ['モネの庭 散策'] as const;
export const KITAGAWA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KITAGAWA_EXPERIENCE_PACK_NAMES);
export const KITAGAWA_STAY_PACK_NAMES = [] as const;
export const KITAGAWA_STAY_PACK_SET: ReadonlySet<string> = new Set(KITAGAWA_STAY_PACK_NAMES);
export const KITAGAWA_SHOPPING_PACK_NAMES = [] as const;
export const KITAGAWA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KITAGAWA_SHOPPING_PACK_NAMES);

export const KITAGAWA_SIGHT_PINS = ['北川村モネの庭マルモッタン','中岡慎太郎館','中岡慎太郎生家','北川村役場','魚梁瀬ダム','堀ヶ生橋','中岡慎太郎像'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KITAGAWA_TRAVEL_ACCESSED};
}
export const KITAGAWA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('kitagawa-stay-01', '北川村温泉 ゆずの宿', '高知県安芸郡北川村小島121', '0887-30-1526', 'https://travel.rakuten.co.jp/HOTEL/167471/167471.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KITAGAWA_TRAVEL_ACCESSED};
}
export const KITAGAWA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('kitagawa-dining-01', 'レストラン モネの家', '高知県安芸郡北川村野友甲1100', '0887-32-1233', 'https://tabelog.com/kochi/A3902/A390202/39000118/'),
  dining('kitagawa-dining-02', '慎太郎食堂', '高知県安芸郡北川村柏木494', '0887-38-2413', 'https://tabelog.com/kochi/A3902/A390202/39007075/'),
  dining('kitagawa-dining-03', 'いごっそラーメン店長', '高知県安芸郡北川村野友乙', '090-9094-8057', 'https://tabelog.com/kochi/A3902/A390202/39004173/'),
  dining('kitagawa-dining-04', 'ゆずの宿 レストラン', '高知県安芸郡北川村小島121', '0887-30-1526', 'https://travel.rakuten.co.jp/HOTEL/167471/gallery.html'),
];

export const KITAGAWA_DINING_NAME_SET: ReadonlySet<string> = new Set(KITAGAWA_TRAVEL_DINING.map((row) => row.name_ja));
export const KITAGAWA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KITAGAWA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KITAGAWA_TRAVEL_ALL: readonly TravelRow[] = [...KITAGAWA_TRAVEL_DINING, ...KITAGAWA_TRAVEL_STAY, ...KITAGAWA_TRAVEL_SHOPPING, ...KITAGAWA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKitagawaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return KITAGAWA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKitagawaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KITAGAWA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKitagawaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKitagawaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKitagawaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KITAGAWA_DINING_NAME_SET.has(row.name_ja);
}
export function kitagawaSightPhoto(nameJa: string): MimaPlacePhoto | null { return KITAGAWA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKitagawaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKitagawaOnsenPackRow(row) && !isKitagawaExperiencePackRow(row) && !isKitagawaStayPackRow(row) && !isKitagawaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KITAGAWA_SIGHT_PINS) {
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
export function kitagawaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '北川村 飲食案内' : 'Kitagawa Village dining list';
  if (row.category === 'stay') return locale === 'ja' ? '北川村 宿泊案内' : 'Kitagawa Village lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '北川村 買物案内' : 'Kitagawa Village shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '村の観光案内' : 'Village tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kitagawaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKitagawaOnsenPackRow(row)) return 'onsen';
  if (isKitagawaExperiencePackRow(row)) return 'experience';
  if (isKitagawaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKitagawaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kitagawaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKitagawaOnsenPackRow(row) && !isKitagawaExperiencePackRow(row) && !isKitagawaStayPackRow(row) && !isKitagawaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKitagawaOnsenPackRow(row);
  if (filter === 'experience') return isKitagawaExperiencePackRow(row);
  if (filter === 'stay') return isKitagawaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKitagawaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KITAGAWA_HALL = KITAGAWA.hall;
