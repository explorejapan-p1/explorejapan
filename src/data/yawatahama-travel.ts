/**
 * Yawatahama City travel layer. No frozen pack.
 * Dining from 食べログ 八幡浜市 (C38204)×16 with dish JPGs. Stay: Rakuten 部屋 stills×6. Onsen: facility bath stills×4 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {YAWATAHAMA, YAWATAHAMA_SIGHT_PHOTOS} from './yawatahama';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const YAWATAHAMA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const YAWATAHAMA_TRAVEL_SOURCES = {
  home: 'https://www.city.yawatahama.ehime.jp/', hall: 'https://www.city.yawatahama.ehime.jp/intro/chosha/',
  kanko: 'https://www.minatto.net/',
  minatto: 'https://www.minatto.net/',
  tabelogCity: 'https://tabelog.com/ehime/C38204/rstLst/'
} as const;

export const YAWATAHAMA_ONSEN_PACK_NAMES = ["ハーバープラザホテル 八幡浜黒湯温泉", "スーパーホテル八幡浜 天然温泉", "大正湯 女湯", "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａ 大浴場"] as const;
export const YAWATAHAMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(YAWATAHAMA_ONSEN_PACK_NAMES);
export const YAWATAHAMA_EXPERIENCE_PACK_NAMES = [] as const;
export const YAWATAHAMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(YAWATAHAMA_EXPERIENCE_PACK_NAMES);
export const YAWATAHAMA_STAY_PACK_NAMES = [] as const;
export const YAWATAHAMA_STAY_PACK_SET: ReadonlySet<string> = new Set(YAWATAHAMA_STAY_PACK_NAMES);
export const YAWATAHAMA_SHOPPING_PACK_NAMES = [] as const;
export const YAWATAHAMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(YAWATAHAMA_SHOPPING_PACK_NAMES);

export const YAWATAHAMA_SIGHT_PINS = ["道の駅・みなとオアシス 八幡浜みなっと", "日土小学校", "八幡浜港", "川之石の町並み", "明治橋"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: YAWATAHAMA_TRAVEL_ACCESSED};
}
export const YAWATAHAMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('yawatahama-stay-001', "八幡浜センチュリーホテル イトー", "愛媛県八幡浜市天神通1-1460-7", null, "https://travel.rakuten.co.jp/HOTEL/746/746.html"),
  stay('yawatahama-stay-002', "ハーバープラザホテル", "愛媛県八幡浜市仲之町360-1", null, "https://travel.rakuten.co.jp/HOTEL/1016/1016.html"),
  stay('yawatahama-stay-003', "ビジネスホテル ヤマキ", "愛媛県八幡浜市保内町宮内1番耕地248番地", null, "https://travel.rakuten.co.jp/HOTEL/43948/43948.html"),
  stay('yawatahama-stay-004', "スーパーホテル八幡浜", "愛媛県八幡浜市千代田町1460-123", null, "https://travel.rakuten.co.jp/HOTEL/109135/109135.html"),
  stay('yawatahama-stay-005', "大正湯", "愛媛県八幡浜市1132", null, "https://travel.rakuten.co.jp/HOTEL/177498/177498.html"),
  stay('yawatahama-stay-006', "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａ", "愛媛県八幡浜市松柏丙794駅前", null, "https://travel.rakuten.co.jp/HOTEL/187464/187464.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: YAWATAHAMA_TRAVEL_ACCESSED};
}
export const YAWATAHAMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('yawatahama-dining-01', "酒ト踊ルPOLOLi", "愛媛県八幡浜市新町2-1423-1", "070-8475-1989", "https://tabelog.com/ehime/A3803/A380302/38016598/"),
  dining('yawatahama-dining-02', "こないちもんめ", "愛媛県八幡浜市保内町宮内1-323-1", "080-3927-5344", "https://tabelog.com/ehime/A3803/A380302/38009747/"),
  dining('yawatahama-dining-03', "火の鳥", "愛媛県八幡浜市中央158", "0894-22-4223", "https://tabelog.com/ehime/A3803/A380302/38005927/"),
  dining('yawatahama-dining-04', "白石食堂", "愛媛県八幡浜市保内町喜木2-103-3", "0894-36-0664", "https://tabelog.com/ehime/A3803/A380302/38003284/"),
  dining('yawatahama-dining-05', "くいもんや３０５", "愛媛県八幡浜市1465-1新1", "0894-22-4002", "https://tabelog.com/ehime/A3803/A380302/38001114/"),
  dining('yawatahama-dining-06', "YAMATTO学舎", "愛媛県八幡浜市日土町6-961", "0894-21-4217", "https://tabelog.com/ehime/A3803/A380302/38014122/"),
  dining('yawatahama-dining-07', "あわしま堂", "愛媛県八幡浜市保内町川之石1-237-53", "0894-36-2177", "https://tabelog.com/ehime/A3803/A380302/38006378/"),
  dining('yawatahama-dining-08', "BRASSERIE WILL", "愛媛県八幡浜市379-10 せんばビル 1F", "0894-22-3501", "https://tabelog.com/ehime/A3803/A380302/38011923/"),
  dining('yawatahama-dining-09', "谷本蒲鉾店 練技館", "愛媛県八幡浜市駅前1", "0894-22-0266", "https://tabelog.com/ehime/A3803/A380302/38007377/"),
  dining('yawatahama-dining-10', "高松屋 暁", "愛媛県八幡浜市432(旧港)", "0894-22-0157", "https://tabelog.com/ehime/A3803/A380302/38005668/"),
  dining('yawatahama-dining-11', "モンブラン", "愛媛県八幡浜市新町1-1440", "0894-22-0166", "https://tabelog.com/ehime/A3803/A380302/38004840/"),
  dining('yawatahama-dining-12', "平家谷そうめん流し", "愛媛県八幡浜市保内町宮内8-265-1", "0894-36-2414", "https://tabelog.com/ehime/A3803/A380302/38004625/"),
  dining('yawatahama-dining-13', "松月堂", "愛媛県八幡浜市幸町337-2", "0894-22-1530", "https://tabelog.com/ehime/A3803/A380302/38001615/"),
  dining('yawatahama-dining-14', "すし光", "愛媛県八幡浜市仲之町395-6", "0894-22-1130", "https://tabelog.com/ehime/A3803/A380302/38001495/"),
  dining('yawatahama-dining-15', "ONKEN BURANKO", "愛媛県八幡浜市千代田町1469-12", "0894-21-4881", "https://tabelog.com/ehime/A3803/A380302/38016106/"),
  dining('yawatahama-dining-16', "平田蒲鉾店", "愛媛県八幡浜市矢野町3-1132-11", "0894-22-0421", "https://tabelog.com/ehime/A3803/A380302/38006544/"),
];

export const YAWATAHAMA_DINING_NAME_SET: ReadonlySet<string> = new Set(YAWATAHAMA_TRAVEL_DINING.map((row) => row.name_ja));
export const YAWATAHAMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const YAWATAHAMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const YAWATAHAMA_TRAVEL_ALL: readonly TravelRow[] = [...YAWATAHAMA_TRAVEL_DINING, ...YAWATAHAMA_TRAVEL_STAY, ...YAWATAHAMA_TRAVEL_SHOPPING, ...YAWATAHAMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isYawatahamaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return YAWATAHAMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isYawatahamaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return YAWATAHAMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isYawatahamaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isYawatahamaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isYawatahamaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return YAWATAHAMA_DINING_NAME_SET.has(row.name_ja);
}
export function yawatahamaSightPhoto(nameJa: string): MimaPlacePhoto | null { return YAWATAHAMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankYawatahamaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isYawatahamaOnsenPackRow(row) && !isYawatahamaExperiencePackRow(row) && !isYawatahamaStayPackRow(row) && !isYawatahamaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of YAWATAHAMA_SIGHT_PINS) {
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
export function yawatahamaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '八幡浜市 飲食案内' : 'Yawatahama City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '八幡浜市 宿泊案内' : 'Yawatahama City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '八幡浜市 買物案内' : 'Yawatahama City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function yawatahamaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isYawatahamaOnsenPackRow(row)) return 'onsen';
  if (isYawatahamaExperiencePackRow(row)) return 'experience';
  if (isYawatahamaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isYawatahamaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function yawatahamaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isYawatahamaOnsenPackRow(row) && !isYawatahamaExperiencePackRow(row) && !isYawatahamaStayPackRow(row) && !isYawatahamaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isYawatahamaOnsenPackRow(row);
  if (filter === 'experience') return isYawatahamaExperiencePackRow(row);
  if (filter === 'stay') return isYawatahamaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveYawatahamaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const YAWATAHAMA_HALL = YAWATAHAMA.hall;

