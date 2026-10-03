/**
 * Tamano City travel layer. No frozen pack.
 * Stay: guest-room or sleeping-space stills. Onsen: that facility's bath stills.
 * Dining/experience/sights: Okayama tourism WEB rows with a Tamano address and a facility photo.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TAMANO, TAMANO_SIGHT_PHOTOS} from './tamano';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TAMANO_TRAVEL_ACCESSED = '2026-10-03' as const;
export const TAMANO_TRAVEL_SOURCES = {
  home: 'https://www.city.tamano.lg.jp/',
  hall: 'https://www.city.tamano.lg.jp/',
  kanko: 'https://www.okayama-kanko.jp/spot/index_1_2_7___0____.html',
  beach: 'https://www.okayama-kanko.jp/spot/detail_10622.html'
} as const;

export const TAMANO_ONSEN_PACK_NAMES = ["瀬戸内温泉 たまの湯", "たまの温泉"] as const;
export const TAMANO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TAMANO_ONSEN_PACK_NAMES);
export const TAMANO_EXPERIENCE_PACK_NAMES = ["おもちゃ王国", "渋川動物公園", "備前焼王子窯", "せとうち農園", "瀬戸内ヨットチャーター", "アートレンタサイクル", "駅東創庫", "渋川ウォーターパーク", "たまの観光ボランティアガイドの会", "瀬戸内ナチュラルフィールド"] as const;
export const TAMANO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TAMANO_EXPERIENCE_PACK_NAMES);
export const TAMANO_STAY_PACK_NAMES = [] as const;
export const TAMANO_STAY_PACK_SET: ReadonlySet<string> = new Set(TAMANO_STAY_PACK_NAMES);
export const TAMANO_SHOPPING_PACK_NAMES = [] as const;
export const TAMANO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TAMANO_SHOPPING_PACK_NAMES);

export const TAMANO_SIGHT_PINS = ["渋川海水浴場", "宇野のチヌ", "王子が岳", "渋川マリン水族館", "常山城跡"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TAMANO_TRAVEL_ACCESSED};
}
export const TAMANO_TRAVEL_STAY: readonly TravelRow[] = [

  stay("tamano-stay-001", "UNO HOTEL", "岡山県玉野市築港1-1-12", null, "https://www.okayama-kanko.jp/reserve/detail_16062.html"),
  stay("tamano-stay-002", "KEIRIN HOTEL 10", "岡山県玉野市築港5-18-3", null, "https://www.okayama-kanko.jp/reserve/detail_100879.html"),
  stay("tamano-stay-003", "菊水旅館", "岡山県玉野市築港1-24-6", null, "https://www.okayama-kanko.jp/reserve/detail_12229.html"),
  stay("tamano-stay-004", "ダイヤモンド瀬戸内マリンホテル", "岡山県玉野市渋川2-12-1", null, "https://www.okayama-kanko.jp/reserve/detail_12048.html"),
  stay("tamano-stay-005", "花三旅館", "岡山県玉野市築港1-4-25", null, "https://www.okayama-kanko.jp/reserve/detail_12234.html"),
  stay("tamano-stay-006", "SETONITE", "岡山県玉野市田井5-28-30", null, "https://www.okayama-kanko.jp/reserve/detail_100129.html"),
  stay("tamano-stay-007", "てんとうみ　渋川海岸グランピング", "岡山県玉野市渋川2-4-8", null, "https://www.okayama-kanko.jp/reserve/detail_1002884.html"),
  stay("tamano-stay-008", "The Nature Uno", "岡山県玉野市玉4-22-10", null, "https://www.okayama-kanko.jp/reserve/detail_1002865.html"),
  stay("tamano-stay-009", "たまの湯キャンプ場", "岡山県玉野市築港5-4-1", null, "https://www.okayama-kanko.jp/spot/detail_14910.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TAMANO_TRAVEL_ACCESSED};
}
export const TAMANO_TRAVEL_DINING: readonly TravelRow[] = [

  dining("tamano-dining-01", "海の駅 シーサイドマート", "岡山県玉野市宇野1-7-5", null, "https://www.okayama-kanko.jp/gourmet/detail_101606.html"),
];
export const TAMANO_DINING_NAME_SET: ReadonlySet<string> = new Set(TAMANO_TRAVEL_DINING.map((row) => row.name_ja));
export const TAMANO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TAMANO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TAMANO_TRAVEL_ALL: readonly TravelRow[] = [...TAMANO_TRAVEL_DINING, ...TAMANO_TRAVEL_STAY, ...TAMANO_TRAVEL_SHOPPING, ...TAMANO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTamanoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAMANO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTamanoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAMANO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTamanoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTamanoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTamanoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAMANO_DINING_NAME_SET.has(row.name_ja);
}
export function tamanoSightPhoto(nameJa: string): MimaPlacePhoto | null { return TAMANO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTamanoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTamanoOnsenPackRow(row) && !isTamanoExperiencePackRow(row) && !isTamanoStayPackRow(row) && !isTamanoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TAMANO_SIGHT_PINS) {
    const hit = sights.find((row) => row.name_ja === pin || row.name_ja.startsWith(pin));
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
export function tamanoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '玉野市 飲食案内' : 'Tamano City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '玉野市 宿泊案内' : 'Tamano City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '玉野市 買物案内' : 'Tamano City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function tamanoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTamanoOnsenPackRow(row)) return 'onsen';
  if (isTamanoExperiencePackRow(row)) return 'experience';
  if (isTamanoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTamanoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function tamanoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTamanoOnsenPackRow(row) && !isTamanoExperiencePackRow(row) && !isTamanoStayPackRow(row) && !isTamanoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTamanoOnsenPackRow(row);
  if (filter === 'experience') return isTamanoExperiencePackRow(row);
  if (filter === 'stay') return isTamanoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTamanoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TAMANO_HALL = TAMANO.hall;
