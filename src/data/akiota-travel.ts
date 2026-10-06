/**
 * Akiota (Hiroshima Yamagata District) travel layer.
 * Dining from 食べログ 安芸太田町 (C34368)×16 with dish JPGs. Stay: Rakuten 部屋 still×1. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県山県郡安芸太田町 only. NOT 安芸高田市 / akitakata.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {AKIOTA, AKIOTA_SIGHT_PHOTOS} from './akiota';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const AKIOTA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const AKIOTA_TRAVEL_SOURCES = {
  home: 'https://www.akiota.jp/', hall: 'https://www.akiota.jp/',
  kanko: 'https://cs-akiota.or.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34368/rstLst/'
} as const;

export const AKIOTA_ONSEN_PACK_NAMES = ["グリーンスパつつが 大浴場", "月ヶ瀬温泉"] as const;
export const AKIOTA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(AKIOTA_ONSEN_PACK_NAMES);
export const AKIOTA_EXPERIENCE_PACK_NAMES = [] as const;
export const AKIOTA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(AKIOTA_EXPERIENCE_PACK_NAMES);
export const AKIOTA_STAY_PACK_NAMES = [] as const;
export const AKIOTA_STAY_PACK_SET: ReadonlySet<string> = new Set(AKIOTA_STAY_PACK_NAMES);
export const AKIOTA_SHOPPING_PACK_NAMES = [] as const;
export const AKIOTA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(AKIOTA_SHOPPING_PACK_NAMES);

export const AKIOTA_SIGHT_PINS = ["三段峡", "温井ダム", "深入山", "井仁の棚田", "恐羅漢山"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: AKIOTA_TRAVEL_ACCESSED};
}
export const AKIOTA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("akiota-stay-001", "グリーンスパつつが", "広島県山県郡安芸太田町中筒賀280", "0826-32-2880", "https://travel.rakuten.co.jp/HOTEL/141106/141106.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: AKIOTA_TRAVEL_ACCESSED};
}
export const AKIOTA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("akiota-dining-01", "おふくろ弁当 もみじコロッケ店", "広島県山県郡安芸太田町上殿626", null, "https://tabelog.com/hiroshima/A3408/A340204/34013979/"),
  dining("akiota-dining-02", "鯛焼屋 よしお", "広島県山県郡安芸太田町加計3494-9", null, "https://tabelog.com/hiroshima/A3408/A340204/34030744/"),
  dining("akiota-dining-03", "渓流茶園", "広島県山県郡安芸太田町松原37-1", null, "https://tabelog.com/hiroshima/A3408/A340204/34018285/"),
  dining("akiota-dining-04", "和風レストラン 来夢", "広島県山県郡安芸太田町上殿632-2 道の駅 来夢とごうち　２Ｆ", null, "https://tabelog.com/hiroshima/A3408/A340204/34002220/"),
  dining("akiota-dining-05", "山が笑うオソラ食堂", "広島県山県郡安芸太田町戸河内744-1 安芸太田町役場隣", null, "https://tabelog.com/hiroshima/A3408/A340204/34032725/"),
  dining("akiota-dining-06", "きっちんたまがわ 温井店", "広島県山県郡安芸太田町加計温井 温井スプリングス向かい", null, "https://tabelog.com/hiroshima/A3408/A340204/34010242/"),
  dining("akiota-dining-07", "やぶ月", "広島県山県郡安芸太田町加計3505-2 月ヶ瀬温泉", null, "https://tabelog.com/hiroshima/A3408/A340204/34027749/"),
  dining("akiota-dining-08", "高丸商店 戸河内インター店", "広島県山県郡安芸太田町上殿626-1", null, "https://tabelog.com/hiroshima/A3408/A340204/34017515/"),
  dining("akiota-dining-09", "棚田カフェ イニ ミニ マニモ", "広島県山県郡安芸太田町中筒賀629-2", null, "https://tabelog.com/hiroshima/A3408/A340204/34023791/"),
  dining("akiota-dining-10", "松蕎庵", "広島県山県郡安芸太田町上殿2112", null, "https://tabelog.com/hiroshima/A3408/A340204/34028590/"),
  dining("akiota-dining-11", "ヨコタ製菓", "広島県山県郡安芸太田町加計3537-2", null, "https://tabelog.com/hiroshima/A3408/A340204/34013477/"),
  dining("akiota-dining-12", "清流の里 気紛れ庵", "広島県山県郡安芸太田町加計3524-7", null, "https://tabelog.com/hiroshima/A3408/A340204/34029610/"),
  dining("akiota-dining-13", "高丸商店 三段峡本店", "広島県山県郡安芸太田町柴木1727-3", null, "https://tabelog.com/hiroshima/A3408/A340204/34023600/"),
  dining("akiota-dining-14", "黒淵荘", "広島県山県郡安芸太田町藪ヶ迫", null, "https://tabelog.com/hiroshima/A3408/A340204/34033688/"),
  dining("akiota-dining-15", "ノース", "広島県山県郡安芸太田町上殿1867", null, "https://tabelog.com/hiroshima/A3408/A340204/34026621/"),
  dining("akiota-dining-16", "味彩紀行 とごうちインター店", "広島県山県郡安芸太田町上殿626", null, "https://tabelog.com/hiroshima/A3408/A340204/34018085/"),
];
export const AKIOTA_DINING_NAME_SET: ReadonlySet<string> = new Set(AKIOTA_TRAVEL_DINING.map((row) => row.name_ja));
export const AKIOTA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const AKIOTA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const AKIOTA_TRAVEL_ALL: readonly TravelRow[] = [...AKIOTA_TRAVEL_DINING, ...AKIOTA_TRAVEL_STAY, ...AKIOTA_TRAVEL_SHOPPING, ...AKIOTA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isAkiotaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKIOTA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isAkiotaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKIOTA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isAkiotaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAkiotaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAkiotaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKIOTA_DINING_NAME_SET.has(row.name_ja);
}
export function akiotaSightPhoto(nameJa: string): MimaPlacePhoto | null { return AKIOTA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankAkiotaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isAkiotaOnsenPackRow(row) && !isAkiotaExperiencePackRow(row) && !isAkiotaStayPackRow(row) && !isAkiotaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of AKIOTA_SIGHT_PINS) {
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
export function akiotaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '安芸太田町 飲食案内' : 'Akiota dining list';
  if (row.category === 'stay') return locale === 'ja' ? '安芸太田町 宿泊案内' : 'Akiota lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '安芸太田町 買物案内' : 'Akiota shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function akiotaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isAkiotaOnsenPackRow(row)) return 'onsen';
  if (isAkiotaExperiencePackRow(row)) return 'experience';
  if (isAkiotaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isAkiotaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function akiotaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isAkiotaOnsenPackRow(row) && !isAkiotaExperiencePackRow(row) && !isAkiotaStayPackRow(row) && !isAkiotaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isAkiotaOnsenPackRow(row);
  if (filter === 'experience') return isAkiotaExperiencePackRow(row);
  if (filter === 'stay') return isAkiotaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveAkiotaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const AKIOTA_HALL = AKIOTA.hall;
