/**
 * Etajima City (Hiroshima) travel layer. Slug etajima. No frozen pack.
 * Dining from 食べログ 江田島市 (C34215)×16 with dish JPGs. Stay: Rakuten 部屋 stills×6. Onsen: facility bath stills×5 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県江田島市 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {ETAJIMA, ETAJIMA_SIGHT_PHOTOS} from './etajima';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const ETAJIMA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const ETAJIMA_TRAVEL_SOURCES = {
  home: 'https://www.city.etajima.hiroshima.jp/cms/', hall: 'https://www.city.etajima.hiroshima.jp/cms/',
  kanko: 'https://www.city.etajima.hiroshima.jp/cms/categories/articles/134',
  tabelogCity: 'https://tabelog.com/hiroshima/C34215/rstLst/'
} as const;

export const ETAJIMA_ONSEN_PACK_NAMES = ["えたじま温泉　江田島荘 源泉かけ流し「ぬる湯」", "ＡＫＩＺＵＫＩ 風呂", "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩ A棟風呂", "江田島宿り　ＮＯＲＡ 浴室", "ＮＯＲＡ 浴室"] as const;
export const ETAJIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(ETAJIMA_ONSEN_PACK_NAMES);
export const ETAJIMA_EXPERIENCE_PACK_NAMES = [] as const;
export const ETAJIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(ETAJIMA_EXPERIENCE_PACK_NAMES);
export const ETAJIMA_STAY_PACK_NAMES = [] as const;
export const ETAJIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(ETAJIMA_STAY_PACK_NAMES);
export const ETAJIMA_SHOPPING_PACK_NAMES = [] as const;
export const ETAJIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(ETAJIMA_SHOPPING_PACK_NAMES);

export const ETAJIMA_SIGHT_PINS = ["海上自衛隊第1術科学校（旧海軍兵学校）", "旧海軍兵学校大講堂", "教育参考館", "小用港", "古鷹山"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: ETAJIMA_TRAVEL_ACCESSED};
}
export const ETAJIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("etajima-stay-001", "えたじま温泉　江田島荘", "広島県江田島市能美町中町4718", "0823-27-7755", "https://travel.rakuten.co.jp/HOTEL/182130/182130.html"),
  stay("etajima-stay-002", "ＡＫＩＺＵＫＩ", "広島県江田島市江田島町秋月2-18-25", "070-8538-6249", "https://travel.rakuten.co.jp/HOTEL/193279/193279.html"),
  stay("etajima-stay-003", "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩ", "広島県江田島市沖美町是長1570-7", null, "https://travel.rakuten.co.jp/HOTEL/197168/197168.html"),
  stay("etajima-stay-004", "江田島宿り　ＮＯＲＡ", "広島県江田島市能美町中町850-10", "070-4030-0684", "https://travel.rakuten.co.jp/HOTEL/197675/197675.html"),
  stay("etajima-stay-005", "ＮＯＲＡ", "広島県江田島市能美町中町850-10", "090-7127-5119", "https://travel.rakuten.co.jp/HOTEL/193139/193139.html"),
  stay("etajima-stay-006", "島のいえ　和心／民泊", "広島県江田島市沖美町高祖109-9", "070-2171-3335", "https://travel.rakuten.co.jp/HOTEL/200630/200630.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: ETAJIMA_TRAVEL_ACCESSED};
}
export const ETAJIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("etajima-dining-01", "寿司 生簀料理　割烹 大学", "広島県江田島市大柿町大原1174-2", null, "https://tabelog.com/hiroshima/A3404/A340405/34010624/"),
  dining("etajima-dining-02", "四季の味 ひらの", "広島県江田島市江田島町切串5-1-7", null, "https://tabelog.com/hiroshima/A3404/A340405/34010643/"),
  dining("etajima-dining-03", "デザートパーラー　アルパティオ", "広島県江田島市大柿町飛渡瀬180 ゆめタウン江田島内 1F", null, "https://tabelog.com/hiroshima/A3404/A340405/34029971/"),
  dining("etajima-dining-04", "居酒屋 さかずき", "広島県江田島市江田島町中央1-2-14", null, "https://tabelog.com/hiroshima/A3404/A340405/34019904/"),
  dining("etajima-dining-05", "和伊菜 灯", "広島県江田島市江田島町中央1-2-14", null, "https://tabelog.com/hiroshima/A3404/A340405/34030548/"),
  dining("etajima-dining-06", "locavore", "広島県江田島市能美町中町4718 江田島荘", null, "https://tabelog.com/hiroshima/A3404/A340405/34030798/"),
  dining("etajima-dining-07", "お好み焼き 大吉", "広島県江田島市江田島町切串3-2-31", null, "https://tabelog.com/hiroshima/A3404/A340405/34030134/"),
  dining("etajima-dining-08", "なかねお好み焼店", "広島県江田島市江田島町小用2丁目8-3", null, "https://tabelog.com/hiroshima/A3404/A340405/34010642/"),
  dining("etajima-dining-09", "Cafe Lisboa", "広島県江田島市江田島町中央4-20-1", null, "https://tabelog.com/hiroshima/A3404/A340405/34030600/"),
  dining("etajima-dining-10", "江田島銘醸株式会社", "広島県江田島市江田島町中央2-27-1", null, "https://tabelog.com/hiroshima/A3404/A340405/34024398/"),
  dining("etajima-dining-11", "エドワーズ ロースタリー カフェ", "広島県江田島市大柿町深江4267", null, "https://tabelog.com/hiroshima/A3404/A340405/34026386/"),
  dining("etajima-dining-12", "お好み焼き 鉄板焼き 日和", "広島県江田島市能美町中町4859-21", null, "https://tabelog.com/hiroshima/A3404/A340405/34010648/"),
  dining("etajima-dining-13", "さつき荘", "広島県江田島市能美町高田14-3", null, "https://tabelog.com/hiroshima/A3404/A340405/34010645/"),
  dining("etajima-dining-14", "江田島カフェ　ウィングス", "広島県江田島市大柿町飛渡瀬311", null, "https://tabelog.com/hiroshima/A3404/A340405/34033036/"),
  dining("etajima-dining-15", "虎八", "広島県江田島市大柿町柿浦2090-2", null, "https://tabelog.com/hiroshima/A3404/A340405/34033396/"),
  dining("etajima-dining-16", "かなわオイスター", "広島県江田島市大柿町深江1453-20", null, "https://tabelog.com/hiroshima/A3404/A340405/34026619/"),
];
export const ETAJIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(ETAJIMA_TRAVEL_DINING.map((row) => row.name_ja));
export const ETAJIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const ETAJIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const ETAJIMA_TRAVEL_ALL: readonly TravelRow[] = [...ETAJIMA_TRAVEL_DINING, ...ETAJIMA_TRAVEL_STAY, ...ETAJIMA_TRAVEL_SHOPPING, ...ETAJIMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isEtajimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ETAJIMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isEtajimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ETAJIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isEtajimaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isEtajimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isEtajimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ETAJIMA_DINING_NAME_SET.has(row.name_ja);
}
export function etajimaSightPhoto(nameJa: string): MimaPlacePhoto | null { return ETAJIMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankEtajimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isEtajimaOnsenPackRow(row) && !isEtajimaExperiencePackRow(row) && !isEtajimaStayPackRow(row) && !isEtajimaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of ETAJIMA_SIGHT_PINS) {
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
export function etajimaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '江田島市 飲食案内' : 'Etajima City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '江田島市 宿泊案内' : 'Etajima City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '江田島市 買物案内' : 'Etajima City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function etajimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isEtajimaOnsenPackRow(row)) return 'onsen';
  if (isEtajimaExperiencePackRow(row)) return 'experience';
  if (isEtajimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isEtajimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function etajimaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isEtajimaOnsenPackRow(row) && !isEtajimaExperiencePackRow(row) && !isEtajimaStayPackRow(row) && !isEtajimaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isEtajimaOnsenPackRow(row);
  if (filter === 'experience') return isEtajimaExperiencePackRow(row);
  if (filter === 'stay') return isEtajimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveEtajimaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const ETAJIMA_HALL = ETAJIMA.hall;
