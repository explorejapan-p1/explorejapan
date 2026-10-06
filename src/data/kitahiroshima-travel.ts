/**
 * Kitahiroshima (Hiroshima Yamagata District) travel layer.
 * Dining from 食べログ 北広島町 (C34369)×16 with dish JPGs. Stay: official 部屋 still×1. Onsen: facility bath still×3 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県山県郡北広島町 only. NOT 北海道北広島市.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KITAHIROSHIMA, KITAHIROSHIMA_SIGHT_PHOTOS} from './kitahiroshima';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KITAHIROSHIMA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const KITAHIROSHIMA_TRAVEL_SOURCES = {
  home: 'https://www.town.kitahiroshima.lg.jp/', hall: 'https://www.town.kitahiroshima.lg.jp/',
  kanko: 'https://kitahiro.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34369/rstLst/'
} as const;

export const KITAHIROSHIMA_ONSEN_PACK_NAMES = ["広島北ホテル 大浴場", "芸北オークガーデン 大浴場", "アザレア千代田 大浴場"] as const;
export const KITAHIROSHIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KITAHIROSHIMA_ONSEN_PACK_NAMES);
export const KITAHIROSHIMA_EXPERIENCE_PACK_NAMES = [] as const;
export const KITAHIROSHIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KITAHIROSHIMA_EXPERIENCE_PACK_NAMES);
export const KITAHIROSHIMA_STAY_PACK_NAMES = [] as const;
export const KITAHIROSHIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(KITAHIROSHIMA_STAY_PACK_NAMES);
export const KITAHIROSHIMA_SHOPPING_PACK_NAMES = [] as const;
export const KITAHIROSHIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KITAHIROSHIMA_SHOPPING_PACK_NAMES);

export const KITAHIROSHIMA_SIGHT_PINS = ["八幡湿原", "雲月山", "聖湖", "龍頭山", "壬生の花田植"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KITAHIROSHIMA_TRAVEL_ACCESSED};
}
export const KITAHIROSHIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("kitahiroshima-stay-001", "広島北ホテル", "広島県山県郡北広島町南方3659", "0826-73-0011", "http://h-kitahotel.jp/rooms.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KITAHIROSHIMA_TRAVEL_ACCESSED};
}
export const KITAHIROSHIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("kitahiroshima-dining-01", "三八 松浦", "広島県山県郡北広島町有田1007-3", null, "https://tabelog.com/hiroshima/A3408/A340801/34003271/"),
  dining("kitahiroshima-dining-02", "どんぐり庵", "広島県山県郡北広島町都志見2609 どんぐり館内", null, "https://tabelog.com/hiroshima/A3408/A340801/34011568/"),
  dining("kitahiroshima-dining-03", "お好みハウス 新見", "広島県山県郡北広島町壬生171-1", null, "https://tabelog.com/hiroshima/A3408/A340801/34015496/"),
  dining("kitahiroshima-dining-04", "へんぽこ茶屋", "広島県山県郡北広島町本地4292", null, "https://tabelog.com/hiroshima/A3408/A340801/34014998/"),
  dining("kitahiroshima-dining-05", "啄木鳥", "広島県山県郡北広島町阿坂421-1", null, "https://tabelog.com/hiroshima/A3408/A340801/34017325/"),
  dining("kitahiroshima-dining-06", "さんまらーめん 立盛", "広島県山県郡北広島町春木251", null, "https://tabelog.com/hiroshima/A3408/A340801/34030671/"),
  dining("kitahiroshima-dining-07", "レストラン 響", "広島県山県郡北広島町有田1122 道の駅 舞ロードIC千代田", null, "https://tabelog.com/hiroshima/A3408/A340801/34019530/"),
  dining("kitahiroshima-dining-08", "中華そば ちよだ二番", "広島県山県郡北広島町壬生10", null, "https://tabelog.com/hiroshima/A3408/A340801/34016311/"),
  dining("kitahiroshima-dining-09", "正直村", "広島県山県郡北広島町西八幡原770-1", null, "https://tabelog.com/hiroshima/A3408/A340801/34017381/"),
  dining("kitahiroshima-dining-10", "ぞうさんカフェ", "広島県山県郡北広島町荒神原201", null, "https://tabelog.com/hiroshima/A3408/A340801/34020057/"),
  dining("kitahiroshima-dining-11", "むすび むさし どんぐり村 豊平店", "広島県山県郡北広島町都志見2609", null, "https://tabelog.com/hiroshima/A3408/A340801/34001422/"),
  dining("kitahiroshima-dining-12", "芸北ドルチェ", "広島県山県郡北広島町細見145-104 芸北オークガーデン", null, "https://tabelog.com/hiroshima/A3408/A340801/34017380/"),
  dining("kitahiroshima-dining-13", "きたひろ食堂", "広島県山県郡北広島町有田1122 道の駅舞ロードIC千代田", null, "https://tabelog.com/hiroshima/A3408/A340801/34022229/"),
  dining("kitahiroshima-dining-14", "Casual Kitchen Hana", "広島県山県郡北広島町有田989-1", null, "https://tabelog.com/hiroshima/A3408/A340801/34030255/"),
  dining("kitahiroshima-dining-15", "浄謙寺", "広島県山県郡北広島町奥原161", null, "https://tabelog.com/hiroshima/A3408/A340801/34015662/"),
  dining("kitahiroshima-dining-16", "野の花かふぇ", "広島県山県郡北広島町都志見733-99", null, "https://tabelog.com/hiroshima/A3408/A340801/34014932/"),
];
export const KITAHIROSHIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(KITAHIROSHIMA_TRAVEL_DINING.map((row) => row.name_ja));
export const KITAHIROSHIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KITAHIROSHIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KITAHIROSHIMA_TRAVEL_ALL: readonly TravelRow[] = [...KITAHIROSHIMA_TRAVEL_DINING, ...KITAHIROSHIMA_TRAVEL_STAY, ...KITAHIROSHIMA_TRAVEL_SHOPPING, ...KITAHIROSHIMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKitahiroshimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KITAHIROSHIMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKitahiroshimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KITAHIROSHIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKitahiroshimaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKitahiroshimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKitahiroshimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KITAHIROSHIMA_DINING_NAME_SET.has(row.name_ja);
}
export function kitahiroshimaSightPhoto(nameJa: string): MimaPlacePhoto | null { return KITAHIROSHIMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKitahiroshimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKitahiroshimaOnsenPackRow(row) && !isKitahiroshimaExperiencePackRow(row) && !isKitahiroshimaStayPackRow(row) && !isKitahiroshimaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KITAHIROSHIMA_SIGHT_PINS) {
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
export function kitahiroshimaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '北広島町 飲食案内' : 'Kitahiroshima dining list';
  if (row.category === 'stay') return locale === 'ja' ? '北広島町 宿泊案内' : 'Kitahiroshima lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '北広島町 買物案内' : 'Kitahiroshima shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kitahiroshimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKitahiroshimaOnsenPackRow(row)) return 'onsen';
  if (isKitahiroshimaExperiencePackRow(row)) return 'experience';
  if (isKitahiroshimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKitahiroshimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kitahiroshimaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKitahiroshimaOnsenPackRow(row) && !isKitahiroshimaExperiencePackRow(row) && !isKitahiroshimaStayPackRow(row) && !isKitahiroshimaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKitahiroshimaOnsenPackRow(row);
  if (filter === 'experience') return isKitahiroshimaExperiencePackRow(row);
  if (filter === 'stay') return isKitahiroshimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKitahiroshimaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KITAHIROSHIMA_HALL = KITAHIROSHIMA.hall;
