/**
 * Toon City travel layer. No frozen pack.
 * Dining from 食べログ 東温市 (C38215)×16 with dish JPGs. Stay: Rakuten 部屋 stills×6. Onsen: facility bath stills×1 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TOON, TOON_SIGHT_PHOTOS} from './toon';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TOON_TRAVEL_ACCESSED = '2026-09-09' as const;
export const TOON_TRAVEL_SOURCES = {
  home: 'https://www.city.toon.ehime.jp/', hall: 'https://www.city.toon.ehime.jp/',
  kanko: 'https://www.city.toon.ehime.jp/soshiki/13/index.html',
  shirai: 'https://ja.wikipedia.org/wiki/%E7%99%BD%E7%8C%AA%E3%81%AE%E6%BF%B1',
  namekawa: 'https://ja.wikipedia.org/wiki/%E6%BB%91%E5%B7%9D%E6%B8%93%E8%B0%B7',
  tabelogCity: 'https://tabelog.com/ehime/C38215/rstLst/'
} as const;

export const TOON_ONSEN_PACK_NAMES = ["くつろぎの宿 樹楽（旧：見奈良天然温泉 利楽） 露天風呂"] as const;
export const TOON_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TOON_ONSEN_PACK_NAMES);
export const TOON_EXPERIENCE_PACK_NAMES = [] as const;
export const TOON_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TOON_EXPERIENCE_PACK_NAMES);
export const TOON_STAY_PACK_NAMES = [] as const;
export const TOON_STAY_PACK_SET: ReadonlySet<string> = new Set(TOON_STAY_PACK_NAMES);
export const TOON_SHOPPING_PACK_NAMES = [] as const;
export const TOON_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TOON_SHOPPING_PACK_NAMES);

export const TOON_SIGHT_PINS = ["白猪の滝", "滑川渓谷", "坊っちゃん劇場", "高畠華宵大正ロマン館"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TOON_TRAVEL_ACCESSED};
}
export const TOON_TRAVEL_STAY: readonly TravelRow[] = [
  stay("toon-stay-001", "\u304f\u3064\u308d\u304e\u306e\u5bbf \u6a39\u697d\uff08\u65e7\uff1a\u898b\u5948\u826f\u5929\u7136\u6e29\u6cc9 \u5229\u697d\uff09", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u898b\u5948\u826f1110", null, "https://travel.rakuten.co.jp/HOTEL/80553/80553.html"),
  stay("toon-stay-002", "\u30d5\u30ea\u30fc\u30c7\u30a4\u30ba\u30a4\u30f3\u6a2a\u6cb3\u539f", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u6a2a\u6cb3\u539f189", null, "https://travel.rakuten.co.jp/HOTEL/147767/147767.html"),
  stay("toon-stay-003", "\u7027\u4e43\u5143 \u8fd1\u85e4\u5bb6", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u6cb3\u4e4b\u51853434-1", null, "https://travel.rakuten.co.jp/HOTEL/171868/171868.html"),
  stay("toon-stay-004", "\uff50\uff52\uff49\uff56\uff41\uff54\uff45 \uff59\uff4f\uff55\uff52 \uff52\uff45\uff53\uff4f\uff52\uff54 \uff29\uff34\uff34\uff25\uff2b\uff35\uff32\uff21\uff49 \u677e\u5c71", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u677e\u702c\u5ddd\u4e591020-132", null, "https://travel.rakuten.co.jp/HOTEL/187888/187888.html"),
  stay("toon-stay-005", "\u30d5\u30ea\u30fc\u30c7\u30a4\u30ba\u30ea\u30be\u30fc\u30c8\u685c\u4e09\u91cc", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u6cb3\u4e4b\u5185\u4e59553", null, "https://travel.rakuten.co.jp/HOTEL/193164/193164.html"),
  stay("toon-stay-006", "\u8fd1\u85e4\u5bb6\u5225\u90b8 \uff27\uff4c\uff41\uff4d\uff50\uff49\uff4e\uff47 \uff2b\uff21\uff33\uff35\uff2d\uff29 \u82b1\u6f84", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u6cb3\u4e4b\u5185\u75322098", null, "https://travel.rakuten.co.jp/HOTEL/197411/197411.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TOON_TRAVEL_ACCESSED};
}
export const TOON_TRAVEL_DINING: readonly TravelRow[] = [
  dining("toon-dining-01", "\u30da\u30eb \u30e1\u30eb", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u5357\u65b92193-3", "089-909-9905", "https://tabelog.com/ehime/A3801/A380102/38013217/"),
  dining("toon-dining-02", "\u30de\u30cb\u30d5\u30a3\u30fc\u30af", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u4e0b\u6797\u75321073-11", "089-964-9195", "https://tabelog.com/ehime/A3801/A380102/38011349/"),
  dining("toon-dining-03", "\u6bcd\u6075\u5922\u30b9\u30a4\u30fc\u30c4\u30d1\u30fc\u30af", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u5247\u4e4b\u5185\u75322585-1", "089-955-8333", "https://tabelog.com/ehime/A3801/A380102/38011126/"),
  dining("toon-dining-04", "\u30d1\u30c6\u30a3\u30b9\u30ea\u30fc\u5fc3\u7d50", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u91ce\u75301-30-4", "089-964-5540", "https://tabelog.com/ehime/A3801/A380102/38012007/"),
  dining("toon-dining-05", "\u30b5\u30fc\u30c6\u30a3\u30ef\u30f3\u30a2\u30a4\u30b9\u30af\u30ea\u30fc\u30e0 \u91cd\u4fe1\u30d5\u30b8\u30b0\u30e9\u30f3\u5e97", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u91ce\u75303-1-13 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1 1F", "089-990-1331", "https://tabelog.com/ehime/A3801/A380102/38005828/"),
  dining("toon-dining-06", "\u8fb2\u7523\u7269\u76f4\u58f2\u6240\u3055\u304f\u3089\u5e02\u5834", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u5317\u65b9\u75322081-1", "089-960-6510", "https://tabelog.com/ehime/A3801/A380102/38009377/"),
  dining("toon-dining-07", "\u5510\u63da\u3052\u98df\u5802 \u3054\u3044\u3061 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u91ce\u75303-1-13 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1 1F", "089-909-7951", "https://tabelog.com/ehime/A3801/A380102/38014040/"),
  dining("toon-dining-08", "\u30d3\u30a2\u30fc\u30c9\u30d1\u30d1 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u91ce\u75303-1-13", "\u4e0d\u660e\u306e\u70ba\u60c5\u5831\u304a\u5f85\u3061\u3057\u3066\u304a\u308a\u307e\u3059", "https://tabelog.com/ehime/A3801/A380102/38014613/"),
  dining("toon-dining-09", "\u30d5\u30a1\u30df\u30ea\u30fc\u30de\u30fc\u30c8 \u5168\u8fb2\u3075\u308c\u3063\u3057\u3085\u5e83\u5834\u5e97", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u5317\u91ce\u7530345", "089-964-4300", "https://tabelog.com/ehime/A3801/A380101/38011292/"),
  dining("toon-dining-10", "\u7bc9\u5730\u9280\u3060\u3053 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u91ce\u75303-1-13 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1 1\uff26", "089-990-1718", "https://tabelog.com/ehime/A3801/A380102/38000692/"),
  dining("toon-dining-11", "\u82e5\u7af9", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u7530\u7aaa2058-4", "089-964-6038", "https://tabelog.com/ehime/A3801/A380102/38014602/"),
  dining("toon-dining-12", "\u30bb\u30eb\u30d5\u8b83\u5c90\u3046\u3069\u3093 \u3053\u3060\u308f\u308a\u88fd\u9eba", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u6a0b\u53e31388-5", "\u4e0d\u660e\u306e\u70ba\u60c5\u5831\u304a\u5f85\u3061\u3057\u3066\u304a\u308a\u307e\u3059", "https://tabelog.com/ehime/A3801/A380102/38014948/"),
  dining("toon-dining-13", "\u30e1\u30ed\u30a6(MELLOW)", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u7530\u7aaa1069-1", "089-993-7377", "https://tabelog.com/ehime/A3801/A380102/38015805/"),
  dining("toon-dining-14", "\u30d6\u30fc\u30e9\u30f3\u30b8\u30a7\u30ea\u30fc \u30e1\u30be\u30f3 \u8fbb", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u5247\u4e4b\u51852435-2", "089-948-8363", "https://tabelog.com/ehime/A3801/A380102/38016838/"),
  dining("toon-dining-15", "\u30b8\u30e7\u30a4\u30d5\u30eb \u611b\u5a9b\u6771\u6e29\u5e97", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u7530\u7aaa1898-3", "089-955-5667", "https://tabelog.com/ehime/A3801/A380102/38007062/"),
  dining("toon-dining-16", "\u4e00\u516d\u672c\u8217 \u91cd\u4fe1\u5e97", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u5fd7\u6d25\u5ddd171 \u30bb\u30d6\u30f3\u30b9\u30bf\u30fc\u91cd\u4fe1\u5e97 1F", "089-960-5016", "https://tabelog.com/ehime/A3801/A380102/38008739/"),
];

export const TOON_DINING_NAME_SET: ReadonlySet<string> = new Set(TOON_TRAVEL_DINING.map((row) => row.name_ja));
export const TOON_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TOON_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TOON_TRAVEL_ALL: readonly TravelRow[] = [...TOON_TRAVEL_DINING, ...TOON_TRAVEL_STAY, ...TOON_TRAVEL_SHOPPING, ...TOON_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isToonOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOON_ONSEN_PACK_SET.has(row.name_ja);
}
export function isToonExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOON_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isToonStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isToonShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isToonDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOON_DINING_NAME_SET.has(row.name_ja);
}
export function toonSightPhoto(nameJa: string): MimaPlacePhoto | null { return TOON_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankToonSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isToonOnsenPackRow(row) && !isToonExperiencePackRow(row) && !isToonStayPackRow(row) && !isToonDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TOON_SIGHT_PINS) {
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
export function toonSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '東温市 飲食案内' : 'Toon City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '東温市 宿泊案内' : 'Toon City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '東温市 買物案内' : 'Toon City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function toonTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isToonOnsenPackRow(row)) return 'onsen';
  if (isToonExperiencePackRow(row)) return 'experience';
  if (isToonStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isToonDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function toonPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isToonOnsenPackRow(row) && !isToonExperiencePackRow(row) && !isToonStayPackRow(row) && !isToonDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isToonOnsenPackRow(row);
  if (filter === 'experience') return isToonExperiencePackRow(row);
  if (filter === 'stay') return isToonStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveToonFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TOON_HALL = TOON.hall;
