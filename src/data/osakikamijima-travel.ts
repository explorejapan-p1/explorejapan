/**
 * Osakikamijima (Hiroshima Toyota District) travel layer.
 * Dining from 食べログ 大崎上島町 (C34431)×16 with dish JPGs. Stay: official 部屋 still×1. Onsen: facility bath still×1 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県豊田郡大崎上島町 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {OSAKIKAMIJIMA, OSAKIKAMIJIMA_SIGHT_PHOTOS} from './osakikamijima';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const OSAKIKAMIJIMA_TRAVEL_ACCESSED = '2026-09-11' as const;
export const OSAKIKAMIJIMA_TRAVEL_SOURCES = {
  home: 'https://www.town.osakikamijima.hiroshima.jp/', hall: 'https://www.town.osakikamijima.hiroshima.jp/',
  kanko: 'https://osakikamijima-navi.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34431/rstLst/'
} as const;

export const OSAKIKAMIJIMA_ONSEN_PACK_NAMES = ["きのえ温泉 ホテル清風館 大浴場"] as const;
export const OSAKIKAMIJIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(OSAKIKAMIJIMA_ONSEN_PACK_NAMES);
export const OSAKIKAMIJIMA_EXPERIENCE_PACK_NAMES = [] as const;
export const OSAKIKAMIJIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(OSAKIKAMIJIMA_EXPERIENCE_PACK_NAMES);
export const OSAKIKAMIJIMA_STAY_PACK_NAMES = [] as const;
export const OSAKIKAMIJIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(OSAKIKAMIJIMA_STAY_PACK_NAMES);
export const OSAKIKAMIJIMA_SHOPPING_PACK_NAMES = [] as const;
export const OSAKIKAMIJIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(OSAKIKAMIJIMA_SHOPPING_PACK_NAMES);

export const OSAKIKAMIJIMA_SIGHT_PINS = ["神峰山", "海と島の歴史資料館大望月邸", "木江ふれあい郷土資料館", "長島大橋", "木江厳島神社"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: OSAKIKAMIJIMA_TRAVEL_ACCESSED};
}
export const OSAKIKAMIJIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("osakikamijima-stay-001", "きのえ温泉 ホテル清風館", "広島県豊田郡大崎上島町沖浦1900", "0846-62-0555", "https://hotel-seifukan.co.jp/room/"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: OSAKIKAMIJIMA_TRAVEL_ACCESSED};
}
export const OSAKIKAMIJIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("osakikamijima-dining-01", "徳森食堂", "広島県豊田郡大崎上島町中野5587-14", null, "https://tabelog.com/hiroshima/A3404/A340406/34007334/"),
  dining("osakikamijima-dining-02", "海舟櫓", "広島県豊田郡大崎上島町中野5530-30", null, "https://tabelog.com/hiroshima/A3404/A340406/34007563/"),
  dining("osakikamijima-dining-03", "長屋門カフェ", "広島県豊田郡大崎上島町東野2721-1", null, "https://tabelog.com/hiroshima/A3404/A340406/34033831/"),
  dining("osakikamijima-dining-04", "一正堂製菓", "広島県豊田郡大崎上島町中野4054-7", null, "https://tabelog.com/hiroshima/A3404/A340406/34023856/"),
  dining("osakikamijima-dining-05", "星と陽", "広島県豊田郡大崎上島町中野4998-1", null, "https://tabelog.com/hiroshima/A3404/A340406/34030483/"),
  dining("osakikamijima-dining-06", "たけもとカレー", "広島県豊田郡大崎上島町中野1833-5", null, "https://tabelog.com/hiroshima/A3404/A340406/34030484/"),
  dining("osakikamijima-dining-07", "北豊ラーメン", "広島県豊田郡大崎上島町中野5571-4", null, "https://tabelog.com/hiroshima/A3404/A340406/34020382/"),
  dining("osakikamijima-dining-08", "AQUA ROOM SKY MARINE", "広島県豊田郡大崎上島町東野鮴崎5509-14", null, "https://tabelog.com/hiroshima/A3404/A340406/34032102/"),
  dining("osakikamijima-dining-09", "麺や梵", "広島県豊田郡大崎上島町大串3080-7", null, "https://tabelog.com/hiroshima/A3404/A340406/34026603/"),
  dining("osakikamijima-dining-10", "久万田", "広島県豊田郡大崎上島町東野2429-1", null, "https://tabelog.com/hiroshima/A3404/A340406/34026512/"),
  dining("osakikamijima-dining-11", "千代", "広島県豊田郡大崎上島町東野634", null, "https://tabelog.com/hiroshima/A3404/A340406/34021805/"),
  dining("osakikamijima-dining-12", "ミカタカフェ", "広島県豊田郡大崎上島町中野1871", null, "https://tabelog.com/hiroshima/A3404/A340406/34030485/"),
  dining("osakikamijima-dining-13", "岩崎農園カフェ", "広島県豊田郡大崎上島町中野4093-1", null, "https://tabelog.com/hiroshima/A3404/A340406/34030486/"),
  dining("osakikamijima-dining-14", "HOGALAKA", "広島県豊田郡大崎上島町東野4020-1 パルディ大崎上島店内", null, "https://tabelog.com/hiroshima/A3404/A340406/34013748/"),
  dining("osakikamijima-dining-15", "珈琲 陶", "広島県豊田郡大崎上島町東野4604-1", null, "https://tabelog.com/hiroshima/A3404/A340406/34030499/"),
  dining("osakikamijima-dining-16", "ニューカープ", "広島県豊田郡大崎上島町木江4977-4", null, "https://tabelog.com/hiroshima/A3404/A340406/34025391/"),
];
export const OSAKIKAMIJIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(OSAKIKAMIJIMA_TRAVEL_DINING.map((row) => row.name_ja));
export const OSAKIKAMIJIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const OSAKIKAMIJIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const OSAKIKAMIJIMA_TRAVEL_ALL: readonly TravelRow[] = [...OSAKIKAMIJIMA_TRAVEL_DINING, ...OSAKIKAMIJIMA_TRAVEL_STAY, ...OSAKIKAMIJIMA_TRAVEL_SHOPPING, ...OSAKIKAMIJIMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOsakikamijimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OSAKIKAMIJIMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOsakikamijimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OSAKIKAMIJIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOsakikamijimaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOsakikamijimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOsakikamijimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OSAKIKAMIJIMA_DINING_NAME_SET.has(row.name_ja);
}
export function osakikamijimaSightPhoto(nameJa: string): MimaPlacePhoto | null { return OSAKIKAMIJIMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOsakikamijimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOsakikamijimaOnsenPackRow(row) && !isOsakikamijimaExperiencePackRow(row) && !isOsakikamijimaStayPackRow(row) && !isOsakikamijimaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of OSAKIKAMIJIMA_SIGHT_PINS) {
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
export function osakikamijimaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '大崎上島町 飲食案内' : 'Osakikamijima dining list';
  if (row.category === 'stay') return locale === 'ja' ? '大崎上島町 宿泊案内' : 'Osakikamijima lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '大崎上島町 買物案内' : 'Osakikamijima shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function osakikamijimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOsakikamijimaOnsenPackRow(row)) return 'onsen';
  if (isOsakikamijimaExperiencePackRow(row)) return 'experience';
  if (isOsakikamijimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOsakikamijimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function osakikamijimaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOsakikamijimaOnsenPackRow(row) && !isOsakikamijimaExperiencePackRow(row) && !isOsakikamijimaStayPackRow(row) && !isOsakikamijimaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOsakikamijimaOnsenPackRow(row);
  if (filter === 'experience') return isOsakikamijimaExperiencePackRow(row);
  if (filter === 'stay') return isOsakikamijimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOsakikamijimaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const OSAKIKAMIJIMA_HALL = OSAKIKAMIJIMA.hall;
