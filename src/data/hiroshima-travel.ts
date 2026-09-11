/**
 * Hiroshima City travel layer. No frozen pack.
 * Dining from 食べログ 広島市 (C34100)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 1 (おりづるタワー展望 Commons).
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {HIROSHIMA, HIROSHIMA_SIGHT_PHOTOS} from './hiroshima';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const HIROSHIMA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const HIROSHIMA_TRAVEL_SOURCES = {
  home: 'https://www.city.hiroshima.lg.jp/', hall: 'https://www.city.hiroshima.lg.jp/facility/yakusho/1031723.html',
  kanko: 'https://www.hiroshima-navi.or.jp/',
  castle: 'https://commons.wikimedia.org/wiki/File:Hiroshima_Castle.jpg',
  tabelogCity: 'https://tabelog.com/hiroshima/C34100/rstLst/'
} as const;

export const HIROSHIMA_ONSEN_PACK_NAMES = ["\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6 \u5927\u6d74\u5834", "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a \u5927\u6d74\u5834"] as const;
export const HIROSHIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(HIROSHIMA_ONSEN_PACK_NAMES);
export const HIROSHIMA_EXPERIENCE_PACK_NAMES = ["\u304a\u308a\u3065\u308b\u30bf\u30ef\u30fc\u5c55\u671b"] as const;
export const HIROSHIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(HIROSHIMA_EXPERIENCE_PACK_NAMES);
export const HIROSHIMA_STAY_PACK_NAMES = [] as const;
export const HIROSHIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(HIROSHIMA_STAY_PACK_NAMES);
export const HIROSHIMA_SHOPPING_PACK_NAMES = [] as const;
export const HIROSHIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(HIROSHIMA_SHOPPING_PACK_NAMES);

export const HIROSHIMA_SIGHT_PINS = ["\u5e83\u5cf6\u57ce", "\u539f\u7206\u30c9\u30fc\u30e0", "\u5e73\u548c\u8a18\u5ff5\u516c\u5712", "\u7e2e\u666f\u5712", "\u5e83\u5cf6\u770c\u7acb\u7f8e\u8853\u9928", "\u4e09\u6edd\u5bfa\u591a\u5b9d\u5854"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: HIROSHIMA_TRAVEL_ACCESSED};
}
export const HIROSHIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("hiroshima-stay-001", "\u30db\u30c6\u30eb\u30a2\u30af\u30c6\u30a3\u30d6\uff01\u5e83\u5cf6", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5e5f\u753a15-3", "082-212-0001", "https://travel.rakuten.co.jp/HOTEL/40245/40245.html"),
  stay("hiroshima-stay-002", "\uff46\uff41\uff56\u3000\u5e83\u5cf6\u30b9\u30bf\u30b8\u30a2\u30e0", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u5357\u533a\u897f\u87f9\u5c4b3-6-24", null, "https://travel.rakuten.co.jp/HOTEL/184520/184520.html"),
  stay("hiroshima-stay-003", "\uff46\uff41\uff56\u3000\u5e83\u5cf6\u5e73\u548c\u5927\u901a\u308a", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u897f\u5e73\u585a\u753a7-15", null, "https://travel.rakuten.co.jp/HOTEL/184661/184661.html"),
  stay("hiroshima-stay-004", "\u30cd\u30b9\u30c8\u30db\u30c6\u30eb\u5e83\u5cf6\u516b\u4e01\u5800", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5e5f\u753a13-12", null, "https://travel.rakuten.co.jp/HOTEL/172792/172792.html"),
  stay("hiroshima-stay-005", "\u30cd\u30b9\u30c8\u30db\u30c6\u30eb\u5e83\u5cf6\u99c5\u524d", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u5357\u533a\u8352\u795e\u753a3-11", null, "https://travel.rakuten.co.jp/HOTEL/179344/179344.html"),
  stay("hiroshima-stay-006", "\u30d9\u30c3\u30bb\u30eb\u30db\u30c6\u30eb\u5e83\u5cf6\u3000\u5e73\u548c\u5927\u901a\u308a\uff08\u5e83\u5cf6\uff12\u53f7\u5e97\uff09", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5b9d\u753a5-37", "082-248-7111", "https://travel.rakuten.co.jp/HOTEL/196623/196623.html"),
  stay("hiroshima-stay-007", "\u30c1\u30b5\u30f3\u30db\u30c6\u30eb\u5e83\u5cf6", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5e5f\u753a14-7", null, "https://travel.rakuten.co.jp/HOTEL/56807/56807.html"),
  stay("hiroshima-stay-008", "\u5929\u7136\u6e29\u6cc9\u30db\u30c6\u30eb\u30ea\u30d6\u30de\u30c3\u30af\u30b9\uff30\uff32\uff25\uff2d\uff29\uff35\uff2d\u5e83\u5cf6", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u6771\u533a\u4e8c\u8449\u306e\u91cc1-1-7", "082-567-2250", "https://travel.rakuten.co.jp/HOTEL/176743/176743.html"),
  stay("hiroshima-stay-009", "\u5929\u7136\u6e29\u6cc9\u3000\u7e2e\u666f\u306e\u6e6f\u3000\u30b9\u30fc\u30d1\u30fc\u30db\u30c6\u30eb\u5e83\u5cf6\u5929\u7136\u6e29\u6cc9\u30fb\u85ac\u7814\u5800\u901a\u308a", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u7530\u4e2d\u753a2-28", "082-578-9000", "https://travel.rakuten.co.jp/HOTEL/181958/181958.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: HIROSHIMA_TRAVEL_ACCESSED};
}
export const HIROSHIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("hiroshima-dining-01", "\u99b3\u8d70 \u5550\u5544\u4e00\u5341", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5bcc\u58eb\u898b\u753a5-1 \u968f\u6728\u30d3\u30eb 1F", "082-249-0957", "https://tabelog.com/hiroshima/A3401/A340117/34023887/"),
  dining("hiroshima-dining-02", "\u6c38\u5c71", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5e5f\u753a10-3", "070-4352-4891", "https://tabelog.com/hiroshima/A3401/A340108/34026172/"),
  dining("hiroshima-dining-03", "\u58ee\u58eb", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u7acb\u753a5-18", "082-504-6213", "https://tabelog.com/hiroshima/A3401/A340112/34022477/"),
  dining("hiroshima-dining-04", "\u5b63\u7bc0\u6599\u7406\u3000\u306a\u304b\u3057\u307e", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u6771\u767d\u5cf6\u753a10-4 TOHAKU\u30d3\u30eb", "082-225-3977", "https://tabelog.com/hiroshima/A3401/A340118/34016189/"),
  dining("hiroshima-dining-05", "\u548c\u725blab K", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u897f\u533a\u4e09\u7be0\u753a3-12-5 \u897f\u6751\u30d3\u30eb 1F", "082-238-4848", "https://tabelog.com/hiroshima/A3401/A340103/34029605/"),
  dining("hiroshima-dining-06", "\u3068\u308a \u3084\u307e\u3082\u3068", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u80e1\u753a2-25 \u30a2\u30af\u30ed\u30b91\u30d3\u30eb 2F", "082-909-9686", "https://tabelog.com/hiroshima/A3401/A340110/34031543/"),
  dining("hiroshima-dining-07", "\u4e2d\u571f", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5800\u5ddd\u753a4-18 \u80e1\u5b50GRIT 5F", "080-5919-8148", "https://tabelog.com/hiroshima/A3401/A340108/34026765/"),
  dining("hiroshima-dining-08", "\u4e2d\u56fd\u6599\u7406\u30de\u30b9\u30ad", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u5357\u533a\u4eac\u6a4b\u753a6-8 \u85e4\u591a\u30d3\u30eb 2F", "082-261-0608", "https://tabelog.com/hiroshima/A3401/A340121/34020426/"),
  dining("hiroshima-dining-09", "NICON", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u516b\u4e01\u580012-5 \u7b2c2\u30b7\u30c6\u30a3\u30d3\u30eb 3F", "082-909-2947", "https://tabelog.com/hiroshima/A3401/A340108/34027314/"),
  dining("hiroshima-dining-10", "DIRETTO", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5bcc\u58eb\u898b\u753a5-16", "070-8338-4140", "https://tabelog.com/hiroshima/A3401/A340117/34027088/"),
  dining("hiroshima-dining-11", "\u9ba8 \u677e", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u5357\u533a\u4eac\u6a4b\u753a8-11 1F", "082-569-5171", "https://tabelog.com/hiroshima/A3401/A340121/34029007/"),
  dining("hiroshima-dining-12", "\u4e2d\u56fd\u83dc\u3000\u5409\u65e5", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u6771\u533a\u82e5\u8349\u753a5-20", "082-909-9150", "https://tabelog.com/hiroshima/A3401/A340121/34032687/"),
  dining("hiroshima-dining-13", "EPURE", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u5357\u533a\u4eac\u6a4b\u753a4-14", "082-576-2414", "https://tabelog.com/hiroshima/A3401/A340121/34024620/"),
  dining("hiroshima-dining-14", "hiroto", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5bcc\u58eb\u898b\u753a4-17", "082-247-9889", "https://tabelog.com/hiroshima/A3401/A340117/34001321/"),
  dining("hiroshima-dining-15", "\u9ba8 \u3053\u3046\u3057\u308d\u3046", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5927\u624b\u753a2-6-9 \u30b0\u30e9\u30d3\u30b9\u30b3\u30fc\u30c8\u7d19\u5c4b\u753a 1F", "090-6747-9788", "https://tabelog.com/hiroshima/A3401/A340116/34033074/"),
  dining("hiroshima-dining-16", "\u9ba8 \u307e\u3064\u3070\u3089", "\u5e83\u5cf6\u770c\u5e83\u5cf6\u5e02\u4e2d\u533a\u5800\u5ddd\u753a1-15 \u3056\u304f\u308d\u30d3\u30eb 5F", "082-245-4578", "https://tabelog.com/hiroshima/A3401/A340109/34029426/"),
];
export const HIROSHIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(HIROSHIMA_TRAVEL_DINING.map((row) => row.name_ja));
export const HIROSHIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const HIROSHIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const HIROSHIMA_TRAVEL_ALL: readonly TravelRow[] = [...HIROSHIMA_TRAVEL_DINING, ...HIROSHIMA_TRAVEL_STAY, ...HIROSHIMA_TRAVEL_SHOPPING, ...HIROSHIMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isHiroshimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIROSHIMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isHiroshimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIROSHIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isHiroshimaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isHiroshimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isHiroshimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIROSHIMA_DINING_NAME_SET.has(row.name_ja);
}
export function hiroshimaSightPhoto(nameJa: string): MimaPlacePhoto | null { return HIROSHIMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankHiroshimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isHiroshimaOnsenPackRow(row) && !isHiroshimaExperiencePackRow(row) && !isHiroshimaStayPackRow(row) && !isHiroshimaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of HIROSHIMA_SIGHT_PINS) {
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
export function hiroshimaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '広島市 飲食案内' : 'Hiroshima City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '広島市 宿泊案内' : 'Hiroshima City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '広島市 買物案内' : 'Hiroshima City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function hiroshimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isHiroshimaOnsenPackRow(row)) return 'onsen';
  if (isHiroshimaExperiencePackRow(row)) return 'experience';
  if (isHiroshimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isHiroshimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function hiroshimaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isHiroshimaOnsenPackRow(row) && !isHiroshimaExperiencePackRow(row) && !isHiroshimaStayPackRow(row) && !isHiroshimaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isHiroshimaOnsenPackRow(row);
  if (filter === 'experience') return isHiroshimaExperiencePackRow(row);
  if (filter === 'stay') return isHiroshimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveHiroshimaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const HIROSHIMA_HALL = HIROSHIMA.hall;
