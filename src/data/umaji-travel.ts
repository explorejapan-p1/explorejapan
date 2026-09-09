/**
 * Umaji Village travel layer. No frozen pack.
 * Dining: Tabelog C39306 (やまなみ食堂・杉の家) + うまじ温泉 レストラン Rakuten 食事 still (day dining; TG610 miss-zero). Stay: 馬路温泉 wa12. Onsen: 大浴場 (stay≠onsen). Experience: 馬路森林鉄道 乗車体験. TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {UMAJI, UMAJI_SIGHT_PHOTOS} from './umaji';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const UMAJI_TRAVEL_ACCESSED = '2026-09-09' as const;
export const UMAJI_TRAVEL_SOURCES = {
  home: 'https://vill.umaji.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E9%A6%AC%E8%B7%AF%E6%9D%91',
  kankou: 'https://vill.umaji.lg.jp/',
  incline: 'https://commons.wikimedia.org/wiki/File:Umaji_Incline1.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39306/rstLst/',
  umajionsen: 'https://travel.rakuten.co.jp/HOTEL/149487/149487.html',
  restaurant: 'http://umaji.gr.jp/restaurant.php',
  rintetsu: 'https://umajimura.jp/spot/umaji-rintetsu/',
  yanaseDam: 'https://commons.wikimedia.org/wiki/File:%E9%AD%9A%E6%A2%81%E7%80%AC%E3%83%80%E3%83%A0%E6%B9%96_-_panoramio_(1).jpg',
  tengumori: 'https://commons.wikimedia.org/wiki/File:Mount_Tengumori_2014-05-22.jpg'
} as const;

export const UMAJI_ONSEN_PACK_NAMES = ['馬路温泉 大浴場'] as const;
export const UMAJI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(UMAJI_ONSEN_PACK_NAMES);
export const UMAJI_EXPERIENCE_PACK_NAMES = ['馬路森林鉄道 乗車体験'] as const;
export const UMAJI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(UMAJI_EXPERIENCE_PACK_NAMES);
export const UMAJI_STAY_PACK_NAMES = [] as const;
export const UMAJI_STAY_PACK_SET: ReadonlySet<string> = new Set(UMAJI_STAY_PACK_NAMES);
export const UMAJI_SHOPPING_PACK_NAMES = [] as const;
export const UMAJI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(UMAJI_SHOPPING_PACK_NAMES);

export const UMAJI_SIGHT_PINS = ['馬路村インクライン','馬路村役場','魚梁瀬丸山公園','西川渓谷','魚梁瀬森林鉄道','魚梁瀬ダム湖','天狗森'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: UMAJI_TRAVEL_ACCESSED};
}
export const UMAJI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('umaji-stay-01', '馬路温泉', '高知県安芸郡馬路村馬路3564-1', '0887-44-2026', 'https://travel.rakuten.co.jp/HOTEL/149487/149487.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: UMAJI_TRAVEL_ACCESSED};
}
export const UMAJI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('umaji-dining-01', 'やまなみ食堂', '高知県安芸郡馬路村馬路421', '0887-44-2625', 'https://tabelog.com/kochi/A3902/A390202/39003551/'),
  dining('umaji-dining-02', '魚梁瀬の食堂 杉の家', '高知県安芸郡馬路村魚梁瀬', '0887-43-2070', 'https://tabelog.com/kochi/A3902/A390202/39007999/'),
  dining('umaji-dining-03', 'うまじ温泉 レストラン', '高知県安芸郡馬路村馬路3564-1', '0887-44-2026', 'http://umaji.gr.jp/restaurant.php'),
];

export const UMAJI_DINING_NAME_SET: ReadonlySet<string> = new Set(UMAJI_TRAVEL_DINING.map((row) => row.name_ja));
export const UMAJI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const UMAJI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const UMAJI_TRAVEL_ALL: readonly TravelRow[] = [...UMAJI_TRAVEL_DINING, ...UMAJI_TRAVEL_STAY, ...UMAJI_TRAVEL_SHOPPING, ...UMAJI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isUmajiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return UMAJI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isUmajiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UMAJI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isUmajiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isUmajiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isUmajiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UMAJI_DINING_NAME_SET.has(row.name_ja);
}
export function umajiSightPhoto(nameJa: string): MimaPlacePhoto | null { return UMAJI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankUmajiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isUmajiOnsenPackRow(row) && !isUmajiExperiencePackRow(row) && !isUmajiStayPackRow(row) && !isUmajiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of UMAJI_SIGHT_PINS) {
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
export function umajiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '馬路村 飲食案内' : 'Umaji Village dining list';
  if (row.category === 'stay') return locale === 'ja' ? '馬路村 宿泊案内' : 'Umaji Village lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '馬路村 買物案内' : 'Umaji Village shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '村の観光案内' : 'Village tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function umajiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isUmajiOnsenPackRow(row)) return 'onsen';
  if (isUmajiExperiencePackRow(row)) return 'experience';
  if (isUmajiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isUmajiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function umajiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isUmajiOnsenPackRow(row) && !isUmajiExperiencePackRow(row) && !isUmajiStayPackRow(row) && !isUmajiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isUmajiOnsenPackRow(row);
  if (filter === 'experience') return isUmajiExperiencePackRow(row);
  if (filter === 'stay') return isUmajiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveUmajiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const UMAJI_HALL = UMAJI.hall;
