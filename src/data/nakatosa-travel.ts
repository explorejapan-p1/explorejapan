/**
 * Nakatosa Town travel layer. No frozen pack.
 * Dining: Tabelog C39401 (3 kept + 讃岐・高知屋・浜焼き海王・黒潮工房・ポン吉・あずま・彩翔・住吉町・茶伊菜). Stay: 四万十源流の里. Onsen: 0 (stay≠onsen). Experience: 0. TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NAKATOSA, NAKATOSA_SIGHT_PHOTOS} from './nakatosa';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const NAKATOSA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const NAKATOSA_TRAVEL_SOURCES = {
  home: 'https://www.town.nakatosa.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E4%B8%AD%E5%9C%9F%E4%BD%90%E7%94%BA',
  stayList: 'https://www.town.nakatosa.lg.jp/life/detail.php?hdnKey=511',
  hutanazima: 'https://commons.wikimedia.org/wiki/File:Hutanazima_20240507_2.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39401/rstLst/',
  genryu: 'https://travel.rakuten.co.jp/HOTEL/162815/162815.html'
} as const;

export const NAKATOSA_ONSEN_PACK_NAMES = [] as const;
export const NAKATOSA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NAKATOSA_ONSEN_PACK_NAMES);
export const NAKATOSA_EXPERIENCE_PACK_NAMES = [] as const;
export const NAKATOSA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(NAKATOSA_EXPERIENCE_PACK_NAMES);
export const NAKATOSA_STAY_PACK_NAMES = [] as const;
export const NAKATOSA_STAY_PACK_SET: ReadonlySet<string> = new Set(NAKATOSA_STAY_PACK_NAMES);
export const NAKATOSA_SHOPPING_PACK_NAMES = [] as const;
export const NAKATOSA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(NAKATOSA_SHOPPING_PACK_NAMES);

export const NAKATOSA_SIGHT_PINS = ['双名島','中土佐町役場','久礼大正町市場','道の駅なかとさ','中土佐町立美術館','久礼八幡宮','久礼湾'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: NAKATOSA_TRAVEL_ACCESSED};
}
export const NAKATOSA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('nakatosa-stay-01', '四万十源流の里', '高知県高岡郡中土佐町大野見神母野652', '0889-57-2126', 'https://travel.rakuten.co.jp/HOTEL/162815/162815.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: NAKATOSA_TRAVEL_ACCESSED};
}
export const NAKATOSA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('nakatosa-dining-01', '市場のめし屋 浜ちゃん', '高知県高岡郡中土佐町久礼大正町 久礼大正町市場内', '0889-52-2060', 'https://tabelog.com/kochi/A3903/A390301/39000360/'),
  dining('nakatosa-dining-02', 'お好み焼き・ラーメン ふるさと', '高知県高岡郡中土佐町久礼6778-3', '0889-52-3825', 'https://tabelog.com/kochi/A3903/A390301/39003609/'),
  dining('nakatosa-dining-03', 'おもや', '高知県高岡郡中土佐町久礼6619-6', '0889-52-2012', 'https://tabelog.com/kochi/A3903/A390301/39006072/'),
  dining('nakatosa-dining-04', '讃岐', '高知県高岡郡中土佐町久礼2212-1', '0889-52-2122', 'https://tabelog.com/kochi/A3903/A390301/39003353/'),
  dining('nakatosa-dining-05', '高知屋', '高知県高岡郡中土佐町久礼6543-2', '0889-52-3399', 'https://tabelog.com/kochi/A3903/A390301/39000414/'),
  dining('nakatosa-dining-06', '浜焼き 海王', '高知県高岡郡中土佐町久礼8645-2 道の駅 なかとさ', '0889-59-2200', 'https://tabelog.com/kochi/A3903/A390301/39007257/'),
  dining('nakatosa-dining-07', '黒潮工房', '高知県高岡郡中土佐町久礼8009-11', '0889-52-3500', 'https://tabelog.com/kochi/A3903/A390301/39000298/'),
  dining('nakatosa-dining-08', '串焼き ポン吉', '高知県高岡郡中土佐町久礼大正町6372-1', '090-2380-5545', 'https://tabelog.com/kochi/A3903/A390301/39007164/'),
  dining('nakatosa-dining-09', '和食宴 あずま', '高知県高岡郡中土佐町久礼6179-2', '0889-52-2237', 'https://tabelog.com/kochi/A3903/A390301/39000433/'),
  dining('nakatosa-dining-10', '彩翔', '高知県高岡郡中土佐町久礼6755', '0889-52-2377', 'https://tabelog.com/kochi/A3903/A390301/39008421/'),
  dining('nakatosa-dining-11', 'ファミリー居酒屋御惣菜住吉町', '高知県高岡郡中土佐町久礼6496', '0889-52-4888', 'https://tabelog.com/kochi/A3903/A390301/39001183/'),
  dining('nakatosa-dining-12', 'らーめんハウス 茶伊菜', '高知県高岡郡中土佐町久礼6639-5', '0889-52-4280', 'https://tabelog.com/kochi/A3903/A390301/39000858/'),
];

export const NAKATOSA_DINING_NAME_SET: ReadonlySet<string> = new Set(NAKATOSA_TRAVEL_DINING.map((row) => row.name_ja));
export const NAKATOSA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const NAKATOSA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const NAKATOSA_TRAVEL_ALL: readonly TravelRow[] = [...NAKATOSA_TRAVEL_DINING, ...NAKATOSA_TRAVEL_STAY, ...NAKATOSA_TRAVEL_SHOPPING, ...NAKATOSA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isNakatosaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return NAKATOSA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isNakatosaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NAKATOSA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isNakatosaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNakatosaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNakatosaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NAKATOSA_DINING_NAME_SET.has(row.name_ja);
}
export function nakatosaSightPhoto(nameJa: string): MimaPlacePhoto | null { return NAKATOSA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankNakatosaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isNakatosaOnsenPackRow(row) && !isNakatosaExperiencePackRow(row) && !isNakatosaStayPackRow(row) && !isNakatosaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of NAKATOSA_SIGHT_PINS) {
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
export function nakatosaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '中土佐町 飲食案内' : 'Nakatosa Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '中土佐町 宿泊案内' : 'Nakatosa Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '中土佐町 買物案内' : 'Nakatosa Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function nakatosaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isNakatosaOnsenPackRow(row)) return 'onsen';
  if (isNakatosaExperiencePackRow(row)) return 'experience';
  if (isNakatosaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isNakatosaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function nakatosaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isNakatosaOnsenPackRow(row) && !isNakatosaExperiencePackRow(row) && !isNakatosaStayPackRow(row) && !isNakatosaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNakatosaOnsenPackRow(row);
  if (filter === 'experience') return isNakatosaExperiencePackRow(row);
  if (filter === 'stay') return isNakatosaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveNakatosaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const NAKATOSA_HALL = NAKATOSA.hall;
