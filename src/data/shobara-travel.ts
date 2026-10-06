/**
 * Shobara City (Hiroshima) travel layer. Slug shobara. No frozen pack.
 * Dining from 食べログ 庄原市 (C34210)×16 with dish JPGs. Stay: Rakuten 部屋 stills×7. Onsen: facility bath still×4 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県庄原市 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SHOBARA, SHOBARA_SIGHT_PHOTOS} from './shobara';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SHOBARA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const SHOBARA_TRAVEL_SOURCES = {
  home: 'https://www.city.shobara.hiroshima.jp/', hall: 'https://www.city.shobara.hiroshima.jp/',
  kanko: 'https://www.shobara-info.com/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34210/rstLst/'
} as const;

export const SHOBARA_ONSEN_PACK_NAMES = ["桜花の郷　ラ・フォーレ庄原 大浴場", "休暇村　帝釈峡 本館大浴場「さもやまの湯」", "帝釈峡観光ホテル　錦彩館 露天風呂", "帝釈峡観光ホテル別館養浩荘 大浴場"] as const;
export const SHOBARA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SHOBARA_ONSEN_PACK_NAMES);
export const SHOBARA_EXPERIENCE_PACK_NAMES = [] as const;
export const SHOBARA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SHOBARA_EXPERIENCE_PACK_NAMES);
export const SHOBARA_STAY_PACK_NAMES = [] as const;
export const SHOBARA_STAY_PACK_SET: ReadonlySet<string> = new Set(SHOBARA_STAY_PACK_NAMES);
export const SHOBARA_SHOPPING_PACK_NAMES = [] as const;
export const SHOBARA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SHOBARA_SHOPPING_PACK_NAMES);

export const SHOBARA_SIGHT_PINS = ["国営備北丘陵公園", "備後庄原駅", "雄橋", "比婆山", "道の駅たかの"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SHOBARA_TRAVEL_ACCESSED};
}
export const SHOBARA_TRAVEL_STAY: readonly TravelRow[] = [

  stay("shobara-stay-001", "庄原グランドホテル", "広島県庄原市西本町2-16-5", "0824-72-6789", "https://travel.rakuten.co.jp/HOTEL/134802/134802.html"),
  stay("shobara-stay-002", "帝釈峡観光ホテル別館養浩荘", "広島県庄原市東城町三坂922-1", null, "https://travel.rakuten.co.jp/HOTEL/144499/144499.html"),
  stay("shobara-stay-003", "ホテル比婆荘", "広島県庄原市西本町1-19-12", "0824-72-1717", "https://travel.rakuten.co.jp/HOTEL/158671/158671.html"),
  stay("shobara-stay-004", "せとうち古民家ステイズＨｉｒｏｓｈｉｍａ　こざこ森", "広島県庄原市高野町下湯川279", null, "https://travel.rakuten.co.jp/HOTEL/179716/179716.html"),
  stay("shobara-stay-005", "桜花の郷　ラ・フォーレ庄原", "広島県庄原市新庄町5281-1", null, "https://travel.rakuten.co.jp/HOTEL/183874/183874.html"),
  stay("shobara-stay-006", "帝釈峡観光ホテル　錦彩館", "広島県庄原市東城町三坂526", null, "https://travel.rakuten.co.jp/HOTEL/28051/28051.html"),
  stay("shobara-stay-007", "休暇村　帝釈峡", "広島県庄原市東城町三坂962-1", "08477-2-3110", "https://travel.rakuten.co.jp/HOTEL/50714/50714.html"),
];


function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SHOBARA_TRAVEL_ACCESSED};
}
export const SHOBARA_TRAVEL_DINING: readonly TravelRow[] = [

  dining("shobara-dining-01", "あしび", "広島県庄原市高野町下門田318-1", "0824-86-3041", "https://tabelog.com/hiroshima/A3405/A340502/34018127/"),
  dining("shobara-dining-02", "ボア", "広島県庄原市三日市町648", null, "https://tabelog.com/hiroshima/A3405/A340502/34006023/"),
  dining("shobara-dining-03", "酒落", "広島県庄原市東城町川西412-5", null, "https://tabelog.com/hiroshima/A3405/A340502/34012454/"),
  dining("shobara-dining-04", "たかのキッチン", "広島県庄原市高野町下門田49 道の駅たかの", "0824-86-3131", "https://tabelog.com/hiroshima/A3405/A340502/34018153/"),
  dining("shobara-dining-05", "そば処　みのり", "広島県庄原市七塚町59-1", "0824-74-1128", "https://tabelog.com/hiroshima/A3405/A340502/34017058/"),
  dining("shobara-dining-06", "イザナミ茶屋", "広島県庄原市西城町大字熊野", "08248-2-3502", "https://tabelog.com/hiroshima/A3405/A340502/34007653/"),
  dining("shobara-dining-07", "いさ味", "広島県庄原市中本町2丁目7-10", "0824-73-0512", "https://tabelog.com/hiroshima/A3405/A340502/34011341/"),
  dining("shobara-dining-08", "手づくり工房アーミッシュ", "広島県庄原市口和町竹地谷307-94", "0824-87-2775", "https://tabelog.com/hiroshima/A3405/A340502/34024821/"),
  dining("shobara-dining-09", "生活や", "広島県庄原市宮内町428-1", "0824-72-7198", "https://tabelog.com/hiroshima/A3405/A340502/34013068/"),
  dining("shobara-dining-10", "ラ・アレーズ", "広島県庄原市西本町2-17-4", "0824-72-1187", "https://tabelog.com/hiroshima/A3405/A340502/34018171/"),
  dining("shobara-dining-11", "アンドカフェ", "広島県庄原市中本町1-3-1 1F", "090-7828-5540", "https://tabelog.com/hiroshima/A3405/A340502/34032186/"),
  dining("shobara-dining-12", "ターボ", "広島県庄原市西本町2-14-10", "0824-72-2950", "https://tabelog.com/hiroshima/A3405/A340502/34008302/"),
  dining("shobara-dining-13", "パンドラ", "広島県庄原市西本町1-22-38", "0824-72-4107", "https://tabelog.com/hiroshima/A3405/A340502/34009801/"),
  dining("shobara-dining-14", "ブレッドハウス 庄原店", "広島県庄原市板橋町150-1 ザ・ビッグ庄原店内", null, "https://tabelog.com/hiroshima/A3405/A340502/34011843/"),
  dining("shobara-dining-15", "ふくふく牧場のチーズ工房", "広島県庄原市口和町湯木1390 ふくふく牧場", "0824-87-2195", "https://tabelog.com/hiroshima/A3405/A340502/34020210/"),
  dining("shobara-dining-16", "アーリータイム", "広島県庄原市中本町1-1-35", null, "https://tabelog.com/hiroshima/A3405/A340502/34012067/"),
];

export const SHOBARA_DINING_NAME_SET: ReadonlySet<string> = new Set(SHOBARA_TRAVEL_DINING.map((row) => row.name_ja));
export const SHOBARA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SHOBARA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SHOBARA_TRAVEL_ALL: readonly TravelRow[] = [...SHOBARA_TRAVEL_DINING, ...SHOBARA_TRAVEL_STAY, ...SHOBARA_TRAVEL_SHOPPING, ...SHOBARA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isShobaraOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHOBARA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isShobaraExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHOBARA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isShobaraStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isShobaraShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isShobaraDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHOBARA_DINING_NAME_SET.has(row.name_ja);
}
export function shobaraSightPhoto(nameJa: string): MimaPlacePhoto | null { return SHOBARA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankShobaraSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isShobaraOnsenPackRow(row) && !isShobaraExperiencePackRow(row) && !isShobaraStayPackRow(row) && !isShobaraDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SHOBARA_SIGHT_PINS) {
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
export function shobaraSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '庄原市 飲食案内' : 'Shobara City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '庄原市 宿泊案内' : 'Shobara City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '庄原市 買物案内' : 'Shobara City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function shobaraTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isShobaraOnsenPackRow(row)) return 'onsen';
  if (isShobaraExperiencePackRow(row)) return 'experience';
  if (isShobaraStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isShobaraDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function shobaraPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isShobaraOnsenPackRow(row) && !isShobaraExperiencePackRow(row) && !isShobaraStayPackRow(row) && !isShobaraDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isShobaraOnsenPackRow(row);
  if (filter === 'experience') return isShobaraExperiencePackRow(row);
  if (filter === 'stay') return isShobaraStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveShobaraFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SHOBARA_HALL = SHOBARA.hall;
