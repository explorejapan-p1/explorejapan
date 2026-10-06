/**
 * Mihara City (Hiroshima) travel layer. Slug miharashi. No frozen pack.
 * Dining from 食べログ 三原市 (C34204)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath still×4 (stay≠onsen EXTRA name). Experience: 0 honest.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MIHARASHI, MIHARASHI_SIGHT_PHOTOS} from './miharashi';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MIHARASHI_TRAVEL_ACCESSED = '2026-09-10' as const;
export const MIHARASHI_TRAVEL_SOURCES = {
  home: 'https://www.city.mihara.hiroshima.jp/', hall: 'https://www.city.mihara.hiroshima.jp/map/honcho.html',
  tabelogCity: 'https://tabelog.com/hiroshima/C34204/rstLst/'
} as const;

export const MIHARASHI_ONSEN_PACK_NAMES = ["ホテルルートイン三原駅前 大浴場", "リブマックスリゾート三原温泉シーフロント 大浴場", "天然温泉「浮城の湯」スーパーホテル三原駅前 大浴場", "ホテル　白竜湖リゾート 大浴場"] as const;
export const MIHARASHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MIHARASHI_ONSEN_PACK_NAMES);
export const MIHARASHI_EXPERIENCE_PACK_NAMES = [] as const;
export const MIHARASHI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MIHARASHI_EXPERIENCE_PACK_NAMES);
export const MIHARASHI_STAY_PACK_NAMES = [] as const;
export const MIHARASHI_STAY_PACK_SET: ReadonlySet<string> = new Set(MIHARASHI_STAY_PACK_NAMES);
export const MIHARASHI_SHOPPING_PACK_NAMES = [] as const;
export const MIHARASHI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MIHARASHI_SHOPPING_PACK_NAMES);

export const MIHARASHI_SIGHT_PINS = ["三原城跡", "仏通寺", "久井岩海", "三原内港", "須波港"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MIHARASHI_TRAVEL_ACCESSED};
}
export const MIHARASHI_TRAVEL_STAY: readonly TravelRow[] = [
  stay("miharashi-stay-001", "ホテルルートイン三原駅前", "広島県三原市城町1-3-3", "0848-81-0082", "https://travel.rakuten.co.jp/HOTEL/180590/180590.html"),
  stay("miharashi-stay-002", "リブマックスリゾート三原温泉シーフロント", "広島県三原市須波ハイツ1-1-15", "0848-69-2200", "https://travel.rakuten.co.jp/HOTEL/199408/199408.html"),
  stay("miharashi-stay-003", "広島エアポートホテル", "広島県三原市本郷町善入寺64-25", null, "https://travel.rakuten.co.jp/HOTEL/1446/1446.html"),
  stay("miharashi-stay-004", "天然温泉「浮城の湯」スーパーホテル三原駅前", "広島県三原市城町1-12-10", null, "https://travel.rakuten.co.jp/HOTEL/158646/158646.html"),
  stay("miharashi-stay-005", "ホテル　白竜湖リゾート", "広島県三原市大和町箱川4007-7", "0847-34-0006", "https://travel.rakuten.co.jp/HOTEL/149038/149038.html"),
  stay("miharashi-stay-006", "ＨＯＴＥＬ　ＡＺ　広島三原店", "広島県三原市糸崎4-1-28", null, "https://travel.rakuten.co.jp/HOTEL/181390/181390.html"),
  stay("miharashi-stay-007", "三原ステーションホテル", "広島県三原市城町1-10-15", "0848-63-8181", "https://travel.rakuten.co.jp/HOTEL/11313/11313.html"),
  stay("miharashi-stay-008", "三原シティホテル", "広島県三原市城町2-2-2", "0848-62-1212", "https://travel.rakuten.co.jp/HOTEL/830/830.html"),
  stay("miharashi-stay-009", "三原国際ホテル", "広島県三原市城町1-2-1", null, "https://travel.rakuten.co.jp/HOTEL/7286/7286.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MIHARASHI_TRAVEL_ACCESSED};
}
export const MIHARASHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining("miharashi-dining-01", "や台ずし 三原駅前町", "広島県三原市城町1-8-4", null, "https://tabelog.com/hiroshima/A3404/A340303/34019937/"),  dining("miharashi-dining-02", "ビストロ ソウボウ", "広島県三原市円一町2-1-1 リージョンプラザ２F", null, "https://tabelog.com/hiroshima/A3404/A340303/34007192/"),  dining("miharashi-dining-03", "お好み焼き 徳川 三原店", "広島県三原市城町2-13-1 イオン三原店 1F", null, "https://tabelog.com/hiroshima/A3404/A340303/34006785/"),  dining("miharashi-dining-04", "くいもの屋わん 三原駅前店", "広島県三原市城町1-4-1 4F", null, "https://tabelog.com/hiroshima/A3404/A340303/34024661/"),  dining("miharashi-dining-05", "ACERO", "広島県三原市本郷町善入寺64-25 広島エアポートホテル 1F", null, "https://tabelog.com/hiroshima/A3404/A340303/34010877/"),  dining("miharashi-dining-06", "げんなおし", "広島県三原市城町1-11-12", null, "https://tabelog.com/hiroshima/A3404/A340303/34026979/"),  dining("miharashi-dining-07", "楽食楽呑 つぎ穂", "広島県三原市城町1-9-11", null, "https://tabelog.com/hiroshima/A3404/A340303/34031931/"),  dining("miharashi-dining-08", "ぐらんどーる", "広島県三原市城町1-19-1 呑村ビル 1F", null, "https://tabelog.com/hiroshima/A3404/A340303/34031306/"),  dining("miharashi-dining-09", "焼肉酒場にく。", "広島県三原市城町1-20-19", null, "https://tabelog.com/hiroshima/A3404/A340303/34029412/"),  dining("miharashi-dining-10", "浜べゑ 三原駅前店", "広島県三原市城町1-9-1 渡邊ビル 1F", null, "https://tabelog.com/hiroshima/A3404/A340303/34029400/"),  dining("miharashi-dining-11", "溶岩焼なごみ", "広島県三原市城町1-10-12", null, "https://tabelog.com/hiroshima/A3404/A340303/34030367/"),  dining("miharashi-dining-12", "ZONA FORTUNATO", "広島県三原市須波西町 すなみ海浜公園内", null, "https://tabelog.com/hiroshima/A3404/A340303/34001062/"),  dining("miharashi-dining-13", "no.503", "広島県三原市大和町大草20075-28", null, "https://tabelog.com/hiroshima/A3404/A340303/34033374/"),  dining("miharashi-dining-14", "RESTAURANT YOGANSU", "広島県三原市大和町和木652-3 道の駅 よがんす白竜", null, "https://tabelog.com/hiroshima/A3404/A340303/34017820/"),  dining("miharashi-dining-15", "おか田", "広島県三原市鷺浦町向田野原3543-1", null, "https://tabelog.com/hiroshima/A3404/A340303/34031779/"),  dining("miharashi-dining-16", "ヤッサ饅頭本舗", "広島県三原市本町3丁目15-7", null, "https://tabelog.com/hiroshima/A3404/A340303/34007130/"),
];
export const MIHARASHI_DINING_NAME_SET: ReadonlySet<string> = new Set(MIHARASHI_TRAVEL_DINING.map((row) => row.name_ja));
export const MIHARASHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MIHARASHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MIHARASHI_TRAVEL_ALL: readonly TravelRow[] = [...MIHARASHI_TRAVEL_DINING, ...MIHARASHI_TRAVEL_STAY, ...MIHARASHI_TRAVEL_SHOPPING, ...MIHARASHI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMiharashiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIHARASHI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMiharashiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIHARASHI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMiharashiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMiharashiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMiharashiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIHARASHI_DINING_NAME_SET.has(row.name_ja);
}
export function miharashiSightPhoto(nameJa: string): MimaPlacePhoto | null { return MIHARASHI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMiharashiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMiharashiOnsenPackRow(row) && !isMiharashiExperiencePackRow(row) && !isMiharashiStayPackRow(row) && !isMiharashiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MIHARASHI_SIGHT_PINS) {
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
export function miharashiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '三原市 飲食案内' : 'Mihara City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '三原市 宿泊案内' : 'Mihara City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '三原市 買物案内' : 'Mihara City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function miharashiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMiharashiOnsenPackRow(row)) return 'onsen';
  if (isMiharashiExperiencePackRow(row)) return 'experience';
  if (isMiharashiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMiharashiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function miharashiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMiharashiOnsenPackRow(row) && !isMiharashiExperiencePackRow(row) && !isMiharashiStayPackRow(row) && !isMiharashiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMiharashiOnsenPackRow(row);
  if (filter === 'experience') return isMiharashiExperiencePackRow(row);
  if (filter === 'stay') return isMiharashiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMiharashiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const MIHARASHI_HALL = MIHARASHI.hall;
