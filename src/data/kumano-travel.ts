/**
 * Kumano (Hiroshima Aki District) travel layer.
 * Dining from 食べログ 熊野町 (C34307)×16 with dish JPGs. Stay: 0 honest. Onsen: 0 honest. Experience: 0 honest.
 * Address gate: 広島県安芸郡熊野町 only. NOT Wakayama/Mie Kumano.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KUMANO, KUMANO_SIGHT_PHOTOS} from './kumano';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KUMANO_TRAVEL_ACCESSED = '2026-09-10' as const;
export const KUMANO_TRAVEL_SOURCES = {
  home: 'https://www.town.kumano.lg.jp/', hall: 'https://www.town.kumano.lg.jp/',
  kanko: 'https://www.town.kumano.lg.jp/11/index.html',
  tabelogCity: 'https://tabelog.com/hiroshima/C34307/rstLst/'
} as const;

export const KUMANO_ONSEN_PACK_NAMES = [] as const;
export const KUMANO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KUMANO_ONSEN_PACK_NAMES);
export const KUMANO_EXPERIENCE_PACK_NAMES = [] as const;
export const KUMANO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KUMANO_EXPERIENCE_PACK_NAMES);
export const KUMANO_STAY_PACK_NAMES = [] as const;
export const KUMANO_STAY_PACK_SET: ReadonlySet<string> = new Set(KUMANO_STAY_PACK_NAMES);
export const KUMANO_SHOPPING_PACK_NAMES = [] as const;
export const KUMANO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KUMANO_SHOPPING_PACK_NAMES);

export const KUMANO_SIGHT_PINS = ["筆の里工房", "榊山神社", "熊野町郷土館", "熊野本宮神社", "西光寺"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KUMANO_TRAVEL_ACCESSED};
}
export const KUMANO_TRAVEL_STAY: readonly TravelRow[] = [];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KUMANO_TRAVEL_ACCESSED};
}
export const KUMANO_TRAVEL_DINING: readonly TravelRow[] = [
  dining("kumano-dining-01", "よねだ屋", "広島県安芸郡熊野町萩原7-15-18", null, "https://tabelog.com/hiroshima/A3401/A340125/34022212/"),
  dining("kumano-dining-02", "碧ちゃ家", "広島県安芸郡熊野町中溝4-19-9", null, "https://tabelog.com/hiroshima/A3401/A340125/34010237/"),
  dining("kumano-dining-03", "おか半 総本店", "広島県安芸郡熊野町出来庭2-18-22", null, "https://tabelog.com/hiroshima/A3401/A340125/34000745/"),
  dining("kumano-dining-04", "ふくえどぅ", "広島県安芸郡熊野町出来庭7-18-9", null, "https://tabelog.com/hiroshima/A3401/A340125/34009820/"),
  dining("kumano-dining-05", "焼肉ハウス ファミリー", "広島県安芸郡熊野町東山116", null, "https://tabelog.com/hiroshima/A3401/A340125/34004787/"),
  dining("kumano-dining-06", "そばきりらいちょう", "広島県安芸郡熊野町萩原6-13-7", null, "https://tabelog.com/hiroshima/A3401/A340125/34031100/"),
  dining("kumano-dining-07", "Ｃａｆｅ照", "広島県安芸郡熊野町中溝5-17-1 筆の里工房 1F", null, "https://tabelog.com/hiroshima/A3401/A340125/34025816/"),
  dining("kumano-dining-08", "美味しい集会所 平和園 熊野店", "広島県安芸郡熊野町萩原6-2-4", null, "https://tabelog.com/hiroshima/A3401/A340125/34020082/"),
  dining("kumano-dining-09", "my-cafe", "広島県安芸郡熊野町貴船9-28", null, "https://tabelog.com/hiroshima/A3401/A340125/34028401/"),
  dining("kumano-dining-10", "Patisserie faisunreve", "広島県安芸郡熊野町川角5-12-19", null, "https://tabelog.com/hiroshima/A3401/A340125/34031303/"),
  dining("kumano-dining-11", "和木お食事処", "広島県安芸郡熊野町柿迫143", null, "https://tabelog.com/hiroshima/A3401/A340125/34006422/"),
  dining("kumano-dining-12", "六分儀", "広島県安芸郡熊野町石神16-6", null, "https://tabelog.com/hiroshima/A3401/A340125/34025329/"),
  dining("kumano-dining-13", "洋食だいにんぐなかむら", "広島県安芸郡熊野町中溝5-2-30", null, "https://tabelog.com/hiroshima/A3401/A340125/34017527/"),
  dining("kumano-dining-14", "お好み焼き ぼちぼち", "広島県安芸郡熊野町出来庭1-6-17", null, "https://tabelog.com/hiroshima/A3401/A340125/34019107/"),
  dining("kumano-dining-15", "食事処 打鐘", "広島県安芸郡熊野町出来庭4-17-38", null, "https://tabelog.com/hiroshima/A3401/A340125/34024021/"),
  dining("kumano-dining-16", "tomobio drink stand", "広島県安芸郡熊野町2682-210 トモ･ビオパーク さとの駅", null, "https://tabelog.com/hiroshima/A3401/A340404/34029160/"),
];
export const KUMANO_DINING_NAME_SET: ReadonlySet<string> = new Set(KUMANO_TRAVEL_DINING.map((row) => row.name_ja));
export const KUMANO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KUMANO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KUMANO_TRAVEL_ALL: readonly TravelRow[] = [...KUMANO_TRAVEL_DINING, ...KUMANO_TRAVEL_STAY, ...KUMANO_TRAVEL_SHOPPING, ...KUMANO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKumanoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KUMANO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKumanoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KUMANO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKumanoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKumanoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKumanoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KUMANO_DINING_NAME_SET.has(row.name_ja);
}
export function kumanoSightPhoto(nameJa: string): MimaPlacePhoto | null { return KUMANO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKumanoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKumanoOnsenPackRow(row) && !isKumanoExperiencePackRow(row) && !isKumanoStayPackRow(row) && !isKumanoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KUMANO_SIGHT_PINS) {
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
export function kumanoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '熊野町 飲食案内' : 'Kumano dining list';
  if (row.category === 'stay') return locale === 'ja' ? '熊野町 宿泊案内' : 'Kumano lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '熊野町 買物案内' : 'Kumano shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kumanoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKumanoOnsenPackRow(row)) return 'onsen';
  if (isKumanoExperiencePackRow(row)) return 'experience';
  if (isKumanoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKumanoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kumanoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKumanoOnsenPackRow(row) && !isKumanoExperiencePackRow(row) && !isKumanoStayPackRow(row) && !isKumanoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKumanoOnsenPackRow(row);
  if (filter === 'experience') return isKumanoExperiencePackRow(row);
  if (filter === 'stay') return isKumanoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKumanoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KUMANO_HALL = KUMANO.hall;
