/**
 * Fuchu Town (Hiroshima Aki District) travel layer. Slug fuchucho ≠ fuchu (府中市).
 * Dining from 食べログ 府中町 (C34302)×16 with dish JPGs. Stay: Rakuten 部屋 still×1 (SOCIO). Onsen: honest 0 (安芸の湯 day-bath / in-room baths lack facility bath still HARD BAR). Experience: 0 honest.
 * Address gate: 広島県安芸郡府中町 only (not 府中市).
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {FUCHUCHO, FUCHUCHO_SIGHT_PHOTOS} from './fuchucho';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const FUCHUCHO_TRAVEL_ACCESSED = '2026-09-10' as const;
export const FUCHUCHO_TRAVEL_SOURCES = {
  home: 'https://www.town.fuchu.hiroshima.jp/', hall: 'https://www.town.fuchu.hiroshima.jp/',
  kanko: 'https://www.town.fuchu.hiroshima.jp/life/4/33/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34302/rstLst/'
} as const;

export const FUCHUCHO_ONSEN_PACK_NAMES = [] as const;
export const FUCHUCHO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(FUCHUCHO_ONSEN_PACK_NAMES);
export const FUCHUCHO_EXPERIENCE_PACK_NAMES = [] as const;
export const FUCHUCHO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(FUCHUCHO_EXPERIENCE_PACK_NAMES);
export const FUCHUCHO_STAY_PACK_NAMES = [] as const;
export const FUCHUCHO_STAY_PACK_SET: ReadonlySet<string> = new Set(FUCHUCHO_STAY_PACK_NAMES);
export const FUCHUCHO_SHOPPING_PACK_NAMES = [] as const;
export const FUCHUCHO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(FUCHUCHO_SHOPPING_PACK_NAMES);

export const FUCHUCHO_SIGHT_PINS = ["水分峡森林公園", "多家神社", "イオンモール広島府中", "道隆寺", "安芸総社跡"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: FUCHUCHO_TRAVEL_ACCESSED};
}
export const FUCHUCHO_TRAVEL_STAY: readonly TravelRow[] = [
  stay("fuchucho-stay-001", "ＳＯＣＩＯ　ＲＥＳＩＤＥＮＴＩＡＬ　ＨＯＴＥＬ（ソシオ　レジデンシャル　ホテル）", "広島県安芸郡府中町大須1-19-29", "080-7259-5551", "https://travel.rakuten.co.jp/HOTEL/198802/198802.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: FUCHUCHO_TRAVEL_ACCESSED};
}
export const FUCHUCHO_TRAVEL_DINING: readonly TravelRow[] = [
  dining("fuchucho-dining-01", "楽笑酒場 goji-goji 府中店", "広島県安芸郡府中町本町5-14-4", null, "https://tabelog.com/hiroshima/A3401/A340105/34022658/"),
  dining("fuchucho-dining-02", "や台ずし 向洋駅前町", "広島県安芸郡府中町青崎南5-191F・2F", null, "https://tabelog.com/hiroshima/A3401/A340105/34029100/"),
  dining("fuchucho-dining-03", "鉄板dining ちぎり", "広島県安芸郡府中町大須4-6-4", null, "https://tabelog.com/hiroshima/A3401/A340105/34030979/"),
  dining("fuchucho-dining-04", "台湾小籠包 イオンモール広島府中店", "広島県安芸郡府中町大須2-1-1イオンモール広島府中ROJIDining1F[138-7]", null, "https://tabelog.com/hiroshima/A3401/A340105/34025202/"),
  dining("fuchucho-dining-05", "韓Kitchen ありらんママ", "広島県安芸郡府中町大須4-5-10三保ビル", null, "https://tabelog.com/hiroshima/A3401/A340105/34029383/"),
  dining("fuchucho-dining-06", "炭火焼肉 萬まる 府中本店", "広島県安芸郡府中町大通1-7-9", null, "https://tabelog.com/hiroshima/A3401/A340105/34018963/"),
  dining("fuchucho-dining-07", "PEG", "広島県安芸郡府中町宮の町2-15-31ソレード宮の町", null, "https://tabelog.com/hiroshima/A3401/A340105/34034729/"),
  dining("fuchucho-dining-08", "鉄八", "広島県安芸郡府中町大須4-2-10", null, "https://tabelog.com/hiroshima/A3401/A340105/34029863/"),
  dining("fuchucho-dining-09", "バッケンモーツアルト ソレイユ店", "広島県安芸郡府中町大須2-1-1イオンモール広島府中1F", null, "https://tabelog.com/hiroshima/A3401/A340105/34015608/"),
  dining("fuchucho-dining-10", "ビーフボールカフェ RYOMA", "広島県安芸郡府中町浜田2-5-34", null, "https://tabelog.com/hiroshima/A3401/A340105/34001065/"),
  dining("fuchucho-dining-11", "居酒屋 金太郎", "広島県安芸郡府中町桃山1-5-6", null, "https://tabelog.com/hiroshima/A3401/A340105/34002994/"),
  dining("fuchucho-dining-12", "えんじゃ", "広島県安芸郡府中町浜田3-7-11", null, "https://tabelog.com/hiroshima/A3401/A340105/34019586/"),
  dining("fuchucho-dining-13", "香月堂 サンリブ府中店", "広島県安芸郡府中町大須4-2-10サンリブ府中1F", null, "https://tabelog.com/hiroshima/A3401/A340105/34019607/"),
  dining("fuchucho-dining-14", "ごっちん", "広島県安芸郡府中町大須4-6-21", null, "https://tabelog.com/hiroshima/A3401/A340105/34001855/"),
  dining("fuchucho-dining-15", "明石", "広島県安芸郡府中町本町1-4-6", null, "https://tabelog.com/hiroshima/A3401/A340105/34000943/"),
  dining("fuchucho-dining-16", "ジェラート工房 ポーラーベア イオン広島府中店", "広島県安芸郡府中町大須2-1-1イオンモール広島府中ロジダイニング", null, "https://tabelog.com/hiroshima/A3401/A340105/34026533/"),
];
export const FUCHUCHO_DINING_NAME_SET: ReadonlySet<string> = new Set(FUCHUCHO_TRAVEL_DINING.map((row) => row.name_ja));
export const FUCHUCHO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const FUCHUCHO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const FUCHUCHO_TRAVEL_ALL: readonly TravelRow[] = [...FUCHUCHO_TRAVEL_DINING, ...FUCHUCHO_TRAVEL_STAY, ...FUCHUCHO_TRAVEL_SHOPPING, ...FUCHUCHO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isFuchuchoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUCHUCHO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isFuchuchoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUCHUCHO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isFuchuchoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isFuchuchoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isFuchuchoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUCHUCHO_DINING_NAME_SET.has(row.name_ja);
}
export function fuchuchoSightPhoto(nameJa: string): MimaPlacePhoto | null { return FUCHUCHO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankFuchuchoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isFuchuchoOnsenPackRow(row) && !isFuchuchoExperiencePackRow(row) && !isFuchuchoStayPackRow(row) && !isFuchuchoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of FUCHUCHO_SIGHT_PINS) {
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
export function fuchuchoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '府中町 飲食案内' : 'Fuchu Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '府中町 宿泊案内' : 'Fuchu Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '府中町 買物案内' : 'Fuchu Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function fuchuchoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isFuchuchoOnsenPackRow(row)) return 'onsen';
  if (isFuchuchoExperiencePackRow(row)) return 'experience';
  if (isFuchuchoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isFuchuchoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function fuchuchoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isFuchuchoOnsenPackRow(row) && !isFuchuchoExperiencePackRow(row) && !isFuchuchoStayPackRow(row) && !isFuchuchoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isFuchuchoOnsenPackRow(row);
  if (filter === 'experience') return isFuchuchoExperiencePackRow(row);
  if (filter === 'stay') return isFuchuchoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveFuchuchoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const FUCHUCHO_HALL = FUCHUCHO.hall;
