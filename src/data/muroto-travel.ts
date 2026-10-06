/**
 * Muroto City travel layer. No frozen pack.
 * Dining from 食べログ 室戸市 (C39202). Stay: TG610 densify Rakuten 部屋 stills. Onsen: honest 0 (no attributable 大浴場 keys; stay room ≠ onsen). Experience: 室戸世界ジオパークセンター.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MUROTO, MUROTO_SIGHT_PHOTOS} from './muroto';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MUROTO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const MUROTO_TRAVEL_SOURCES = {
  home: 'https://www.city.muroto.kochi.jp/', hall: 'https://www.city.muroto.kochi.jp/pages/gaiyo.php',
  kankou: 'https://www.city.muroto.kochi.jp/',
  cape: 'https://ja.wikipedia.org/wiki/%E5%AE%A4%E6%88%B8%E5%B2%A1',
  tabelogCity: 'https://tabelog.com/kochi/C39202/rstLst/',
  skyandsea: 'https://travel.rakuten.co.jp/HOTEL/195948/195948.html'
} as const;

export const MUROTO_ONSEN_PACK_NAMES = [] as const;
export const MUROTO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MUROTO_ONSEN_PACK_NAMES);
export const MUROTO_EXPERIENCE_PACK_NAMES = ['室戸世界ジオパークセンター'] as const;
export const MUROTO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MUROTO_EXPERIENCE_PACK_NAMES);
export const MUROTO_STAY_PACK_NAMES = [] as const;
export const MUROTO_STAY_PACK_SET: ReadonlySet<string> = new Set(MUROTO_STAY_PACK_NAMES);
export const MUROTO_SHOPPING_PACK_NAMES = [] as const;
export const MUROTO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MUROTO_SHOPPING_PACK_NAMES);

export const MUROTO_SIGHT_PINS = ['室戸岬','室戸岬灯台','むろと廃校水族館','金剛頂寺','最御崎寺','御厨人窟'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MUROTO_TRAVEL_ACCESSED};
}
export const MUROTO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('muroto-stay-01', 'スカイ アンド シー・ムロト', '高知県室戸市室戸岬町2752-1', '0887-98-7017', 'https://travel.rakuten.co.jp/HOTEL/195948/195948.html'),
  stay('muroto-stay-02', '民宿　室戸荘', '高知県室戸市室戸岬町6939-1', '0887-22-0409', 'https://travel.rakuten.co.jp/HOTEL/29983/29983.html'),
  stay('muroto-stay-03', 'ホテル冨士', '高知県室戸市室津2577', '0887-22-0205', 'https://travel.rakuten.co.jp/HOTEL/108612/108612.html'),
  stay('muroto-stay-04', '岬観光ホテル', '高知県室戸市室戸岬町4037', '0887-22-0541', 'https://travel.rakuten.co.jp/HOTEL/139956/139956.html'),
  stay('muroto-stay-05', 'ファミリーロッジ旅籠屋・室戸店', '高知県室戸市浮津三番町136-2', '0887-23-0858', 'https://travel.rakuten.co.jp/HOTEL/153158/153158.html'),
  stay('muroto-stay-06', '古民家の宿　蔵空間蔵宿', '高知県室戸市吉良川町甲2234', '0887-25-3700', 'https://travel.rakuten.co.jp/HOTEL/177084/177084.html'),
  stay('muroto-stay-07', '土佐備長炭の宿『宿玄』', '高知県室戸市吉良川町甲504-4', '080-8535-7038', 'https://travel.rakuten.co.jp/HOTEL/199901/199901.html'),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MUROTO_TRAVEL_ACCESSED};
}
export const MUROTO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('muroto-dining-01', 'SADAMARU BURGER', '高知県室戸市吉良川町丙495-1', '080-4036-1786', 'https://tabelog.com/kochi/A3902/A390203/39007539/'),
  dining('muroto-dining-02', 'やきとり亭', '高知県室戸市室津2192-1', null, 'https://tabelog.com/kochi/A3902/A390203/39008797/'),
  dining('muroto-dining-03', '室風', '高知県室戸市浮津1513‐4', '0887-22-0820', 'https://tabelog.com/kochi/A3902/A390203/39007742/'),
  dining('muroto-dining-04', '遍路の駅 夫婦善哉', '高知県室戸市室津2605', '0887-22-0580', 'https://tabelog.com/kochi/A3902/A390203/39004458/'),
  dining('muroto-dining-05', '一休', '高知県室戸市浮津85-6', '0887-22-0664', 'https://tabelog.com/kochi/A3902/A390203/39006223/'),
  dining('muroto-dining-06', 'お倉饅頭', '高知県室戸市羽根町甲876', '0887-26-1431', 'https://tabelog.com/kochi/A3902/A390202/39007372/'),
  dining('muroto-dining-07', '遊食亭', '高知県室戸市浮津655', null, 'https://tabelog.com/kochi/A3902/A390203/39008443/'),
  dining('muroto-dining-08', 'ジオカフェ ジオショップ', '高知県室戸市室戸岬町6939-1', '0887-98-5022', 'https://tabelog.com/kochi/A3902/A390203/39008917/'),
  dining('muroto-dining-09', 'ドライブイン・オハラ', '高知県室戸市羽根町甲577', '0887-26-1300', 'https://tabelog.com/kochi/A3902/A390202/39004476/'),
  dining('muroto-dining-10', '野根まんぢう 福田屋 室戸店', '高知県室戸市室戸岬町2872-4', '0887-23-1423', 'https://tabelog.com/kochi/A3902/A390203/39007641/'),
  dining('muroto-dining-11', '居酒屋 千太郎', '高知県室戸市室津2553-7', '0887-22-0713', 'https://tabelog.com/kochi/A3902/A390203/39007046/'),
  dining('muroto-dining-12', 'バイキング吉岡', '高知県室戸市浮津三番町22-4', '0887-22-0947', 'https://tabelog.com/kochi/A3902/A390203/39004132/'),
  dining('muroto-dining-13', 'COCO 室戸岬の先端です', '高知県室戸市室戸岬町6939-1', null, 'https://tabelog.com/kochi/A3902/A390203/39009040/'),
  dining('muroto-dining-14', '料亭 花月', '高知県室戸市室津2586', '0887-22-0115', 'https://tabelog.com/kochi/A3902/A390203/39004106/'),
  dining('muroto-dining-15', '吉良川魚処 玄', '高知県室戸市吉良川町甲2221', '080-2999-5948', 'https://tabelog.com/kochi/A3902/A390203/39008408/'),
  dining('muroto-dining-16', 'シットロト', '高知県室戸市元甲2748-3', '0887-22-1176', 'https://tabelog.com/kochi/A3902/A390203/39000348/'),
];

export const MUROTO_DINING_NAME_SET: ReadonlySet<string> = new Set(MUROTO_TRAVEL_DINING.map((row) => row.name_ja));
export const MUROTO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MUROTO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MUROTO_TRAVEL_ALL: readonly TravelRow[] = [...MUROTO_TRAVEL_DINING, ...MUROTO_TRAVEL_STAY, ...MUROTO_TRAVEL_SHOPPING, ...MUROTO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMurotoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MUROTO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMurotoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MUROTO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMurotoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMurotoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMurotoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MUROTO_DINING_NAME_SET.has(row.name_ja);
}
export function murotoSightPhoto(nameJa: string): MimaPlacePhoto | null { return MUROTO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMurotoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMurotoOnsenPackRow(row) && !isMurotoExperiencePackRow(row) && !isMurotoStayPackRow(row) && !isMurotoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MUROTO_SIGHT_PINS) {
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
export function murotoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '室戸市 飲食案内' : 'Muroto City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '室戸市 宿泊案内' : 'Muroto City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '室戸市 買物案内' : 'Muroto City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function murotoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMurotoOnsenPackRow(row)) return 'onsen';
  if (isMurotoExperiencePackRow(row)) return 'experience';
  if (isMurotoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMurotoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function murotoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMurotoOnsenPackRow(row) && !isMurotoExperiencePackRow(row) && !isMurotoStayPackRow(row) && !isMurotoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMurotoOnsenPackRow(row);
  if (filter === 'experience') return isMurotoExperiencePackRow(row);
  if (filter === 'stay') return isMurotoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMurotoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const MUROTO_HALL = MUROTO.hall;
