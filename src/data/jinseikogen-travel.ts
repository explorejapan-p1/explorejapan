/**
 * Jinseikogen (Hiroshima Jinseki District) travel layer.
 * Dining from 食べログ 神石高原町 (C34545)×16 with dish JPGs. Stay: official 部屋 still×1. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県神石郡神石高原町 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {JINSEIKOGEN, JINSEIKOGEN_SIGHT_PHOTOS} from './jinseikogen';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const JINSEIKOGEN_TRAVEL_ACCESSED = '2026-09-11' as const;
export const JINSEIKOGEN_TRAVEL_SOURCES = {
  home: 'https://www.jinsekigun.jp/town/', hall: 'https://www.jinsekigun.jp/town/formation/',
  kanko: 'https://jkougen.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34545/rstLst/'
} as const;

export const JINSEIKOGEN_ONSEN_PACK_NAMES = ["光信寺の湯 ゆっくら 大浴場", "神石高原温泉"] as const;
export const JINSEIKOGEN_ONSEN_PACK_SET: ReadonlySet<string> = new Set(JINSEIKOGEN_ONSEN_PACK_NAMES);
export const JINSEIKOGEN_EXPERIENCE_PACK_NAMES = [] as const;
export const JINSEIKOGEN_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(JINSEIKOGEN_EXPERIENCE_PACK_NAMES);
export const JINSEIKOGEN_STAY_PACK_NAMES = [] as const;
export const JINSEIKOGEN_STAY_PACK_SET: ReadonlySet<string> = new Set(JINSEIKOGEN_STAY_PACK_NAMES);
export const JINSEIKOGEN_SHOPPING_PACK_NAMES = [] as const;
export const JINSEIKOGEN_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(JINSEIKOGEN_SHOPPING_PACK_NAMES);

export const JINSEIKOGEN_SIGHT_PINS = ["神石高原ティアガルテン", "とよまつ紙ヒコーキ・タワー", "道の駅さんわ182ステーション", "帝釈峡神龍湖", "帝釈峡スコラ高原"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: JINSEIKOGEN_TRAVEL_ACCESSED};
}
export const JINSEIKOGEN_TRAVEL_STAY: readonly TravelRow[] = [
  stay("jinseikogen-stay-001", "光信寺の湯 ゆっくら", "広島県神石郡神石高原町光信58-1", "0847-85-4000", "https://www.yukkura-kohshinji.jp/room"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: JINSEIKOGEN_TRAVEL_ACCESSED};
}
export const JINSEIKOGEN_TRAVEL_DINING: readonly TravelRow[] = [
  dining("jinseikogen-dining-01", "ぬく森", "広島県神石郡神石高原町時安1056-4", null, "https://tabelog.com/hiroshima/A3405/A340504/34010898/"),
  dining("jinseikogen-dining-02", "ティアガルテンカフェ", "広島県神石郡神石高原町上豊松72-8", null, "https://tabelog.com/hiroshima/A3405/A340504/34025292/"),
  dining("jinseikogen-dining-03", "オオカミブレッド", "広島県神石郡神石高原町井関2603-1", null, "https://tabelog.com/hiroshima/A3405/A340504/34022589/"),
  dining("jinseikogen-dining-04", "門花亭", "広島県神石郡神石高原町高光1329", null, "https://tabelog.com/hiroshima/A3405/A340502/34030122/"),
  dining("jinseikogen-dining-05", "レストラン帝釈の里", "広島県神石郡神石高原町相渡2167", null, "https://tabelog.com/hiroshima/A3405/A340504/34020682/"),
  dining("jinseikogen-dining-06", "COHAN CAFE", "広島県神石郡神石高原町永野5034-7", null, "https://tabelog.com/hiroshima/A3405/A340504/34033832/"),
  dining("jinseikogen-dining-07", "紅葉会館", "広島県神石郡神石高原町永野5037-17", null, "https://tabelog.com/hiroshima/A3405/A340504/34002076/"),
  dining("jinseikogen-dining-08", "ロティ ハラパン", "広島県神石郡神石高原町牧204", null, "https://tabelog.com/hiroshima/A3405/A340504/34018193/"),
  dining("jinseikogen-dining-09", "手抜きうどん", "広島県神石郡神石高原町近田1772", null, "https://tabelog.com/hiroshima/A3405/A340504/34027304/"),
  dining("jinseikogen-dining-10", "たまちゃん", "広島県神石郡神石高原町1465", null, "https://tabelog.com/hiroshima/A3405/A340504/34025739/"),
  dining("jinseikogen-dining-11", "森の花屋さん", "広島県神石郡神石高原町井関6181-135", null, "https://tabelog.com/hiroshima/A3405/A340504/34016981/"),
  dining("jinseikogen-dining-12", "雪花亭", "広島県神石郡神石高原町安田684", null, "https://tabelog.com/hiroshima/A3405/A340504/34007739/"),
  dining("jinseikogen-dining-13", "GARDEN mimuracoffee", "広島県神石郡神石高原町上豊松72-8", null, "https://tabelog.com/hiroshima/A3405/A340504/34031105/"),
  dining("jinseikogen-dining-14", "山里の餅 やまうち", "広島県神石郡神石高原町小畠1444", null, "https://tabelog.com/hiroshima/A3405/A340504/34026154/"),
  dining("jinseikogen-dining-15", "182CAFE", "広島県神石郡神石高原町坂瀬川5146-2", null, "https://tabelog.com/hiroshima/A3405/A340504/34026831/"),
  dining("jinseikogen-dining-16", "農家喫茶 だんばら", "広島県神石郡神石高原町油木乙567", null, "https://tabelog.com/hiroshima/A3405/A340504/34013585/"),
];
export const JINSEIKOGEN_DINING_NAME_SET: ReadonlySet<string> = new Set(JINSEIKOGEN_TRAVEL_DINING.map((row) => row.name_ja));
export const JINSEIKOGEN_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const JINSEIKOGEN_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const JINSEIKOGEN_TRAVEL_ALL: readonly TravelRow[] = [...JINSEIKOGEN_TRAVEL_DINING, ...JINSEIKOGEN_TRAVEL_STAY, ...JINSEIKOGEN_TRAVEL_SHOPPING, ...JINSEIKOGEN_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isJinseikogenOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return JINSEIKOGEN_ONSEN_PACK_SET.has(row.name_ja);
}
export function isJinseikogenExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return JINSEIKOGEN_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isJinseikogenStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isJinseikogenShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isJinseikogenDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return JINSEIKOGEN_DINING_NAME_SET.has(row.name_ja);
}
export function jinseikogenSightPhoto(nameJa: string): MimaPlacePhoto | null { return JINSEIKOGEN_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankJinseikogenSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isJinseikogenOnsenPackRow(row) && !isJinseikogenExperiencePackRow(row) && !isJinseikogenStayPackRow(row) && !isJinseikogenDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of JINSEIKOGEN_SIGHT_PINS) {
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
export function jinseikogenSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '神石高原町 飲食案内' : 'Jinseikogen dining list';
  if (row.category === 'stay') return locale === 'ja' ? '神石高原町 宿泊案内' : 'Jinseikogen lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '神石高原町 買物案内' : 'Jinseikogen shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function jinseikogenTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isJinseikogenOnsenPackRow(row)) return 'onsen';
  if (isJinseikogenExperiencePackRow(row)) return 'experience';
  if (isJinseikogenStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isJinseikogenDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function jinseikogenPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isJinseikogenOnsenPackRow(row) && !isJinseikogenExperiencePackRow(row) && !isJinseikogenStayPackRow(row) && !isJinseikogenDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isJinseikogenOnsenPackRow(row);
  if (filter === 'experience') return isJinseikogenExperiencePackRow(row);
  if (filter === 'stay') return isJinseikogenStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveJinseikogenFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const JINSEIKOGEN_HALL = JINSEIKOGEN.hall;
