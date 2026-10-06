/**
 * Saka (Hiroshima Aki District) travel layer.
 * Dining from 食べログ 坂町 (C34309)×16 with dish JPGs. Stay: 0 honest. Onsen: facility bath still×1 (アジアンリゾート・スパ シーレ 大浴場). Experience: 0 honest.
 * Address gate: 広島県安芸郡坂町 only. NOT 坂出 / other 坂.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SAKA, SAKA_SIGHT_PHOTOS} from './saka';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SAKA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const SAKA_TRAVEL_SOURCES = {
  home: 'https://www.town.saka.lg.jp/', hall: 'https://www.town.saka.lg.jp/',
  kanko: 'https://www.town.saka.lg.jp/charm/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34309/rstLst/'
} as const;

export const SAKA_ONSEN_PACK_NAMES = ["アジアンリゾート・スパ シーレ 大浴場"] as const;
export const SAKA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SAKA_ONSEN_PACK_NAMES);
export const SAKA_EXPERIENCE_PACK_NAMES = [] as const;
export const SAKA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SAKA_EXPERIENCE_PACK_NAMES);
export const SAKA_STAY_PACK_NAMES = [] as const;
export const SAKA_STAY_PACK_SET: ReadonlySet<string> = new Set(SAKA_STAY_PACK_NAMES);
export const SAKA_SHOPPING_PACK_NAMES = [] as const;
export const SAKA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SAKA_SHOPPING_PACK_NAMES);

export const SAKA_SIGHT_PINS = ["ベイサイドビーチ坂", "横浜公園", "八幡山八幡神社", "シモハナホール", "坂駅前"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SAKA_TRAVEL_ACCESSED};
}
export const SAKA_TRAVEL_STAY: readonly TravelRow[] = [];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SAKA_TRAVEL_ACCESSED};
}
export const SAKA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("saka-dining-01", "パティスリー レクール", "広島県安芸郡坂町横浜中央1-4-1", null, "https://tabelog.com/hiroshima/A3401/A340124/34014004/"),
  dining("saka-dining-02", "お好み焼 こいけ", "広島県安芸郡坂町横浜東1-15-28", null, "https://tabelog.com/hiroshima/A3401/A340124/34017835/"),
  dining("saka-dining-03", "禅ぱん", "広島県安芸郡坂町鯛尾2丁目8番16号", null, "https://tabelog.com/hiroshima/A3401/A340124/34016161/"),
  dining("saka-dining-04", "ALOHA CAFÉ Pineapple ベイサイドビーチ坂店", "広島県安芸郡坂町水尻9075-4", null, "https://tabelog.com/hiroshima/A3401/A340124/34032253/"),
  dining("saka-dining-05", "レストランカリブ", "広島県安芸郡坂町鯛尾2-7-1", null, "https://tabelog.com/hiroshima/A3401/A340124/34003558/"),
  dining("saka-dining-06", "わきみず亭", "広島県安芸郡坂町北新地2-3-4", null, "https://tabelog.com/hiroshima/A3401/A340124/34024246/"),
  dining("saka-dining-07", "台湾料理 福祥閣", "広島県安芸郡坂町小屋浦1-8-11", null, "https://tabelog.com/hiroshima/A3401/A340124/34024483/"),
  dining("saka-dining-08", "Italian Kitchen VANSAN パルティ・フジ坂店", "広島県安芸郡坂町平成ヶ浜3-2-11", null, "https://tabelog.com/hiroshima/A3401/A340124/34031673/"),
  dining("saka-dining-09", "海人", "広島県安芸郡坂町平成ケ浜3-2-11 アジアンリゾート・スパ　シーレ", null, "https://tabelog.com/hiroshima/A3401/A340124/34000688/"),
  dining("saka-dining-10", "お好み焼き 西谷", "広島県安芸郡坂町小屋浦2-34-2", null, "https://tabelog.com/hiroshima/A3401/A340124/34025016/"),
  dining("saka-dining-11", "壮家", "広島県安芸郡坂町坂西1-13-1", null, "https://tabelog.com/hiroshima/A3401/A340124/34016538/"),
  dining("saka-dining-12", "古民家Bar あめのちハレ", "広島県安芸郡坂町坂西1-23-25", null, "https://tabelog.com/hiroshima/A3401/A340124/34029790/"),
  dining("saka-dining-13", "じゃんじゃか 坂店", "広島県安芸郡坂町平成ケ浜3-2-11", null, "https://tabelog.com/hiroshima/A3401/A340124/34000484/"),
  dining("saka-dining-14", "三河屋珈琲 パルティ坂店", "広島県安芸郡坂町平成ヶ浜3-2-11", null, "https://tabelog.com/hiroshima/A3401/A340124/34025336/"),
  dining("saka-dining-15", "フランス菓子 パリ土産", "広島県安芸郡坂町坂東2-2-7-1", null, "https://tabelog.com/hiroshima/A3401/A340124/34028603/"),
  dining("saka-dining-16", "どんと 安芸店", "広島県安芸郡坂町北新地2丁目3-30", null, "https://tabelog.com/hiroshima/A3401/A340124/34013370/"),
];
export const SAKA_DINING_NAME_SET: ReadonlySet<string> = new Set(SAKA_TRAVEL_DINING.map((row) => row.name_ja));
export const SAKA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SAKA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SAKA_TRAVEL_ALL: readonly TravelRow[] = [...SAKA_TRAVEL_DINING, ...SAKA_TRAVEL_STAY, ...SAKA_TRAVEL_SHOPPING, ...SAKA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isSakaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAKA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isSakaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAKA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isSakaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSakaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSakaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAKA_DINING_NAME_SET.has(row.name_ja);
}
export function sakaSightPhoto(nameJa: string): MimaPlacePhoto | null { return SAKA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankSakaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isSakaOnsenPackRow(row) && !isSakaExperiencePackRow(row) && !isSakaStayPackRow(row) && !isSakaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SAKA_SIGHT_PINS) {
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
export function sakaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '坂町 飲食案内' : 'Saka dining list';
  if (row.category === 'stay') return locale === 'ja' ? '坂町 宿泊案内' : 'Saka lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '坂町 買物案内' : 'Saka shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function sakaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isSakaOnsenPackRow(row)) return 'onsen';
  if (isSakaExperiencePackRow(row)) return 'experience';
  if (isSakaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isSakaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function sakaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isSakaOnsenPackRow(row) && !isSakaExperiencePackRow(row) && !isSakaStayPackRow(row) && !isSakaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSakaOnsenPackRow(row);
  if (filter === 'experience') return isSakaExperiencePackRow(row);
  if (filter === 'stay') return isSakaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveSakaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SAKA_HALL = SAKA.hall;
