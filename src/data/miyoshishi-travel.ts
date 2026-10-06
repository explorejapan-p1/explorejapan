/**
 * Miyoshi City (Hiroshima) travel layer. Slug miyoshishi. No frozen pack.
 * Dining from 食べログ 三次市 (C34209)×16 with dish JPGs. Stay: Rakuten 部屋 stills×7. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県三次市 only (NOT Tokushima 三好市).
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MIYOSHISHI, MIYOSHISHI_SIGHT_PHOTOS} from './miyoshishi';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MIYOSHISHI_TRAVEL_ACCESSED = '2026-09-10' as const;
export const MIYOSHISHI_TRAVEL_SOURCES = {
  home: 'https://www.city.miyoshi.hiroshima.jp/', hall: 'https://www.city.miyoshi.hiroshima.jp/',
  kanko: 'https://www.miyoshi-dmo.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34209/rstLst/'
} as const;

export const MIYOSHISHI_ONSEN_PACK_NAMES = ["ホテルルートイン三次駅前 男性大浴場", "備長炭の湯　ホテルクラウンヒルズ三次 大浴場"] as const;
export const MIYOSHISHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MIYOSHISHI_ONSEN_PACK_NAMES);
export const MIYOSHISHI_EXPERIENCE_PACK_NAMES = [] as const;
export const MIYOSHISHI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MIYOSHISHI_EXPERIENCE_PACK_NAMES);
export const MIYOSHISHI_STAY_PACK_NAMES = [] as const;
export const MIYOSHISHI_STAY_PACK_SET: ReadonlySet<string> = new Set(MIYOSHISHI_STAY_PACK_NAMES);
export const MIYOSHISHI_SHOPPING_PACK_NAMES = [] as const;
export const MIYOSHISHI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MIYOSHISHI_SHOPPING_PACK_NAMES);

export const MIYOSHISHI_SIGHT_PINS = ["高谷山", "三次もののけミュージアム", "広島三次ワイナリー", "尾関山公園", "三次駅"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MIYOSHISHI_TRAVEL_ACCESSED};
}
export const MIYOSHISHI_TRAVEL_STAY: readonly TravelRow[] = [
  stay("miyoshishi-stay-001", "ホテルルートイン三次駅前", "広島県三次市十日市南1-5-5", "050-5211-5820", "https://travel.rakuten.co.jp/HOTEL/187288/187288.html"),
  stay("miyoshishi-stay-002", "三次グランドホテル", "広島県三次市十日市南1-10-1", "0824-63-3111", "https://travel.rakuten.co.jp/HOTEL/1629/1629.html"),
  stay("miyoshishi-stay-003", "ホテルアルファーワン三次", "広島県三次市十日市西1-4-22", "0824-63-3200", "https://travel.rakuten.co.jp/HOTEL/15881/15881.html"),
  stay("miyoshishi-stay-004", "備長炭の湯　ホテルクラウンヒルズ三次", "広島県三次市十日市東6-13-25", "050-1807-0109", "https://travel.rakuten.co.jp/HOTEL/38563/38563.html"),
  stay("miyoshishi-stay-005", "ビジネスホテル白鳥荘", "広島県三次市和知町1842-7", "0824-66-3110", "https://travel.rakuten.co.jp/HOTEL/153323/153323.html"),
  stay("miyoshishi-stay-006", "田舎宿　風の道", "広島県三次市和知町1703-4", null, "https://travel.rakuten.co.jp/HOTEL/134794/134794.html"),
  stay("miyoshishi-stay-007", "Ｔａｂｉｓｔ　ライカ　広島三次", "広島県三次市東酒屋町557-1", "0824-63-6207", "https://travel.rakuten.co.jp/HOTEL/179863/179863.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MIYOSHISHI_TRAVEL_ACCESSED};
}
export const MIYOSHISHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining("miyoshishi-dining-01", "三代目網元 魚鮮水産 三次駅前店", "広島県三次市十日市南1-4-5 三次ステーションプラザ 1F", "0824-65-1807", "https://tabelog.com/hiroshima/A3405/A340501/34021761/"),
  dining("miyoshishi-dining-02", "HIROSHIMA NOH BEER こっちゃん所", "広島県三次市十日市中2-8-11", "080-6415-2607", "https://tabelog.com/hiroshima/A3405/A340501/34031586/"),
  dining("miyoshishi-dining-03", "Mirasaka Trevis", "広島県三次市三良坂町三良坂804", "050-5456-1660", "https://tabelog.com/hiroshima/A3405/A340501/34031508/"),
  dining("miyoshishi-dining-04", "たむ商店 三次駅前店", "広島県三次市十日市南1-2-23 三次市交通観光センター 2F", "0824-62-5354", "https://tabelog.com/hiroshima/A3405/A340501/34021107/"),
  dining("miyoshishi-dining-05", "じゃ軒", "広島県三次市南畑敷町68-4", "050-5595-8662", "https://tabelog.com/hiroshima/A3405/A340501/34011829/"),
  dining("miyoshishi-dining-06", "広島三次ワイナリー  バーベキューガーデン", "広島県三次市東酒屋町10445-3", "0824-64-0202", "https://tabelog.com/hiroshima/A3405/A340501/34019006/"),
  dining("miyoshishi-dining-07", "とんかつ和佳葉", "広島県三次市十日市中3-3-9", "082-462-0472", "https://tabelog.com/hiroshima/A3405/A340501/34006763/"),
  dining("miyoshishi-dining-08", "遊", "広島県三次市十日市西1-3-6", "082-464-3221", "https://tabelog.com/hiroshima/A3405/A340501/34006411/"),
  dining("miyoshishi-dining-09", "鳥小屋", "広島県三次市十日市中3-13-5", "082-462-2948", "https://tabelog.com/hiroshima/A3405/A340501/34006338/"),
  dining("miyoshishi-dining-10", "とん平食堂", "広島県三次市十日市中1-12-5", null, "https://tabelog.com/hiroshima/A3405/A340501/34008372/"),
  dining("miyoshishi-dining-11", "長浜ラーメン博多屋 三次店", "広島県三次市十日市南一丁目9-13", "0824-63-0003", "https://tabelog.com/hiroshima/A3405/A340501/34011304/"),
  dining("miyoshishi-dining-12", "CALM", "広島県三次市四拾貫町神田谷 カルチャーセンター", null, "https://tabelog.com/hiroshima/A3405/A340501/34033690/"),
  dining("miyoshishi-dining-13", "真人鉄焼酒家", "広島県三次市畠敷町400-4", "082-462-7929", "https://tabelog.com/hiroshima/A3405/A340501/34004363/"),
  dining("miyoshishi-dining-14", "カフェ ノエル", "広島県三次市廻神町1392-1", "0824-66-1151", "https://tabelog.com/hiroshima/A3405/A340501/34020134/"),
  dining("miyoshishi-dining-15", "夢工房　ねむの木", "広島県三次市甲奴町本郷1215-1", "0847-67-5051", "https://tabelog.com/hiroshima/A3405/A340501/34014918/"),
  dining("miyoshishi-dining-16", "グリーン麦麦 トレッタみよし", "広島県三次市東酒屋町438 トレッタみよし", "0824-63-9777", "https://tabelog.com/hiroshima/A3405/A340501/34020718/"),
];
export const MIYOSHISHI_DINING_NAME_SET: ReadonlySet<string> = new Set(MIYOSHISHI_TRAVEL_DINING.map((row) => row.name_ja));
export const MIYOSHISHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MIYOSHISHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MIYOSHISHI_TRAVEL_ALL: readonly TravelRow[] = [...MIYOSHISHI_TRAVEL_DINING, ...MIYOSHISHI_TRAVEL_STAY, ...MIYOSHISHI_TRAVEL_SHOPPING, ...MIYOSHISHI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMiyoshishiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIYOSHISHI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMiyoshishiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIYOSHISHI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMiyoshishiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMiyoshishiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMiyoshishiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIYOSHISHI_DINING_NAME_SET.has(row.name_ja);
}
export function miyoshishiSightPhoto(nameJa: string): MimaPlacePhoto | null { return MIYOSHISHI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMiyoshishiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMiyoshishiOnsenPackRow(row) && !isMiyoshishiExperiencePackRow(row) && !isMiyoshishiStayPackRow(row) && !isMiyoshishiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MIYOSHISHI_SIGHT_PINS) {
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
export function miyoshishiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '三次市 飲食案内' : 'Miyoshi City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '三次市 宿泊案内' : 'Miyoshi City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '三次市 買物案内' : 'Miyoshi City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function miyoshishiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMiyoshishiOnsenPackRow(row)) return 'onsen';
  if (isMiyoshishiExperiencePackRow(row)) return 'experience';
  if (isMiyoshishiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMiyoshishiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function miyoshishiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMiyoshishiOnsenPackRow(row) && !isMiyoshishiExperiencePackRow(row) && !isMiyoshishiStayPackRow(row) && !isMiyoshishiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMiyoshishiOnsenPackRow(row);
  if (filter === 'experience') return isMiyoshishiExperiencePackRow(row);
  if (filter === 'stay') return isMiyoshishiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMiyoshishiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const MIYOSHISHI_HALL = MIYOSHISHI.hall;
