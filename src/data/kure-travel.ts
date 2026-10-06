/**
 * Kure City travel layer. No frozen pack.
 * Dining from 食べログ 呉市 (C34202)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0 honest.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KURE, KURE_SIGHT_PHOTOS} from './kure';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KURE_TRAVEL_ACCESSED = '2026-09-10' as const;
export const KURE_TRAVEL_SOURCES = {
  home: 'https://www.city.kure.lg.jp/', hall: 'https://www.city.kure.lg.jp/soshiki/24/annai.html',
  kanko: 'https://www.city.kure.lg.jp/',
  yamato: 'https://www.yamato-museum.com/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34202/rstLst/'
} as const;

export const KURE_ONSEN_PACK_NAMES = ["シャトレーゼ　ガトーキングダム　せとうち 大浴場", "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａ 風呂"] as const;
export const KURE_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KURE_ONSEN_PACK_NAMES);
export const KURE_EXPERIENCE_PACK_NAMES = [] as const;
export const KURE_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KURE_EXPERIENCE_PACK_NAMES);
export const KURE_STAY_PACK_NAMES = [] as const;
export const KURE_STAY_PACK_SET: ReadonlySet<string> = new Set(KURE_STAY_PACK_NAMES);
export const KURE_SHOPPING_PACK_NAMES = [] as const;
export const KURE_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KURE_SHOPPING_PACK_NAMES);

export const KURE_SIGHT_PINS = ["大和ミュージアム", "アレイからすこじま", "音戸大橋", "入船山記念館", "呉市立美術館", "てつのくじら館"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KURE_TRAVEL_ACCESSED};
}
export const KURE_TRAVEL_STAY: readonly TravelRow[] = [
  stay("kure-stay-001", "呉阪急ホテル", "広島県呉市中央1-1-1", "0823-20-1111", "https://travel.rakuten.co.jp/HOTEL/7470/7470.html"),  stay("kure-stay-002", "コンフォートホテル呉", "広島県呉市宝町2-38", "0823-32-4811", "https://travel.rakuten.co.jp/HOTEL/78130/78130.html"),  stay("kure-stay-003", "東横ＩＮＮ呉駅", "広島県呉市宝町3-33", "0823-23-1045", "https://travel.rakuten.co.jp/HOTEL/199252/199252.html"),  stay("kure-stay-004", "広ステーションホテル　アネックス", "広島県呉市広中町4-16", "0823-71-0101", "https://travel.rakuten.co.jp/HOTEL/17729/17729.html"),  stay("kure-stay-005", "ビューポートくれホテル", "広島県呉市中通1-1-2", "0823-20-0660", "https://travel.rakuten.co.jp/HOTEL/129442/129442.html"),  stay("kure-stay-006", "クレイトンベイホテル", "広島県呉市築地町3-3", null, "https://travel.rakuten.co.jp/HOTEL/17718/17718.html"),  stay("kure-stay-007", "ホテルクレシオ　呉本通り", "広島県呉市本通3-4-10", null, "https://travel.rakuten.co.jp/HOTEL/41419/41419.html"),  stay("kure-stay-008", "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａ", "広島県呉市本町15-22", null, "https://travel.rakuten.co.jp/HOTEL/68088/68088.html"),  stay("kure-stay-009", "広ステーションホテル　リージェントハウス", "広島県呉市広中町4-29", "0823-71-2233", "https://travel.rakuten.co.jp/HOTEL/17737/17737.html"),];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KURE_TRAVEL_ACCESSED};
}
export const KURE_TRAVEL_DINING: readonly TravelRow[] = [
  dining("kure-dining-01", "四川料理110", "広島県呉市中央2-5-2 NSビル 2F", "0823-27-3105", "https://tabelog.com/hiroshima/A3404/A340401/34018498/"),  dining("kure-dining-02", "旨唐揚げと居酒メシ ミライザカ 呉中通り店", "広島県呉市中通3-7-4 新藤ビル1・2F", "0823-32-3035", "https://tabelog.com/hiroshima/A3404/A340401/34003000/"),  dining("kure-dining-03", "鉄板 橘", "広島県呉市本町7-23", null, "https://tabelog.com/hiroshima/A3404/A340401/34034883/"),  dining("kure-dining-04", "や台ずし 呉中通町", "広島県呉市中通4-1-4 1F", "0823-22-4328", "https://tabelog.com/hiroshima/A3404/A340401/34029943/"),  dining("kure-dining-05", "信州そば処 そじ坊 呉ゆめタウン店", "広島県呉市宝町5-10 ゆめタウン呉 3F", "0823-24-7717", "https://tabelog.com/hiroshima/A3404/A340401/34027647/"),  dining("kure-dining-06", "サムギョプサル ぶる", "広島県呉市中通3-8-17", "090-1335-1129", "https://tabelog.com/hiroshima/A3404/A340401/34033920/"),  dining("kure-dining-07", "とんかつ ひと", "広島県呉市中通2-1-14 イワモトビル 102", "0823-36-7130", "https://tabelog.com/hiroshima/A3404/A340401/34034881/"),  dining("kure-dining-08", "Kei", "広島県呉市中通2-7-2 中通レンガマンション 2F", "0823-32-0002", "https://tabelog.com/hiroshima/A3404/A340401/34031613/"),  dining("kure-dining-09", "くし山", "広島県呉市広本町1-11-16 ホタルビル　1F", "0823-72-7889", "https://tabelog.com/hiroshima/A3404/A340401/34020895/"),  dining("kure-dining-10", "音戸", "広島県呉市中央1-1-1 呉阪急ホテル 1F", "0823-20-1118", "https://tabelog.com/hiroshima/A3404/A340401/34011514/"),  dining("kure-dining-11", "イルマーレ", "広島県呉市中央1-1-1 呉阪急ホテル 1F", "0823-20-1116", "https://tabelog.com/hiroshima/A3404/A340401/34027503/"),  dining("kure-dining-12", "鉄板焼 犇亭", "広島県呉市中通2丁目4-5", "050-1793-2052", "https://tabelog.com/hiroshima/A3404/A340401/34011808/"),  dining("kure-dining-13", "Ngon", "広島県呉市本通4-3-12 瀬野ビル 2Ｆ", "080-2050-5454", "https://tabelog.com/hiroshima/A3404/A340401/34029934/"),  dining("kure-dining-14", "鉄板焼 とよふみ", "広島県呉市中通4-2-14 西田ビル 1F", "0823-21-2737", "https://tabelog.com/hiroshima/A3404/A340401/34028206/"),  dining("kure-dining-15", "炭火焼肉ごろう 呉店", "広島県呉市中央3-11-24 パークアベニュー新枡谷ビル B1F", "0823-32-4129", "https://tabelog.com/hiroshima/A3404/A340401/34019278/"),  dining("kure-dining-16", "和彩大地", "広島県呉市中通り3-2-11", "0823-21-4006", "https://tabelog.com/hiroshima/A3404/A340401/34029017/"),];
export const KURE_DINING_NAME_SET: ReadonlySet<string> = new Set(KURE_TRAVEL_DINING.map((row) => row.name_ja));
export const KURE_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KURE_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KURE_TRAVEL_ALL: readonly TravelRow[] = [...KURE_TRAVEL_DINING, ...KURE_TRAVEL_STAY, ...KURE_TRAVEL_SHOPPING, ...KURE_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKureOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KURE_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKureExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KURE_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKureStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKureShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKureDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KURE_DINING_NAME_SET.has(row.name_ja);
}
export function kureSightPhoto(nameJa: string): MimaPlacePhoto | null { return KURE_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKureSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKureOnsenPackRow(row) && !isKureExperiencePackRow(row) && !isKureStayPackRow(row) && !isKureDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KURE_SIGHT_PINS) {
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
export function kureSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '呉市 飲食案内' : 'Kure City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '呉市 宿泊案内' : 'Kure City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '呉市 買物案内' : 'Kure City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kureTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKureOnsenPackRow(row)) return 'onsen';
  if (isKureExperiencePackRow(row)) return 'experience';
  if (isKureStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKureDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kurePackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKureOnsenPackRow(row) && !isKureExperiencePackRow(row) && !isKureStayPackRow(row) && !isKureDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKureOnsenPackRow(row);
  if (filter === 'experience') return isKureExperiencePackRow(row);
  if (filter === 'stay') return isKureStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKureFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KURE_HALL = KURE.hall;
