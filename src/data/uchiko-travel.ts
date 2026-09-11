/**
 * Uchiko Town travel layer. No frozen pack.
 * Dining from 食べログ 内子町 (C38422)×16 with dish JPGs. Stay: Rakuten 部屋 stills×15. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {UCHIKO, UCHIKO_SIGHT_PHOTOS} from './uchiko';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const UCHIKO_TRAVEL_ACCESSED = '2026-09-10' as const;
export const UCHIKO_TRAVEL_SOURCES = {
  home: 'https://www.town.uchiko.ehime.jp/', hall: 'https://www.town.uchiko.ehime.jp/map/annaihonntyou.html',
  kanko: 'https://www.town.uchiko.ehime.jp/',
  yokaichi: 'https://ja.wikipedia.org/wiki/%E5%85%AB%E6%97%A5%E5%B8%82%E8%AD%B7%E5%9B%BD',
  uchikoza: 'https://ja.wikipedia.org/wiki/%E5%86%85%E5%AD%90%E5%BA%A7',
  kamihaga: 'https://www.town.uchiko.ehime.jp/site/hozonsenta/kamihaga.html',
  tabelogCity: 'https://tabelog.com/ehime/C38422/rstLst/'
} as const;

export const UCHIKO_ONSEN_PACK_NAMES = ["ＨＯＴＥＬ　ＯＮＬＹＯＮＥ 風呂", "オーベルジュ内子 風呂"] as const;
export const UCHIKO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(UCHIKO_ONSEN_PACK_NAMES);
export const UCHIKO_EXPERIENCE_PACK_NAMES = [] as const;
export const UCHIKO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(UCHIKO_EXPERIENCE_PACK_NAMES);
export const UCHIKO_STAY_PACK_NAMES = [] as const;
export const UCHIKO_STAY_PACK_SET: ReadonlySet<string> = new Set(UCHIKO_STAY_PACK_NAMES);
export const UCHIKO_SHOPPING_PACK_NAMES = [] as const;
export const UCHIKO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(UCHIKO_SHOPPING_PACK_NAMES);

export const UCHIKO_SIGHT_PINS = ["八日市護国伝統的建造物群保存地区", "内子座", "木蝋資料館 上芳我邸", "八日市・護国町並保存センター", "五十崎凧博物館", "道の駅内子フレッシュパークからり"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: UCHIKO_TRAVEL_ACCESSED};
}
export const UCHIKO_TRAVEL_STAY: readonly TravelRow[] = [
  stay("uchiko-stay-001", "ＨＯＴＥＬ　ＡＺ　愛媛内子店", "愛媛県喜多郡内子町内子1529-1", "0893-44-3371", "https://travel.rakuten.co.jp/HOTEL/160773/160773.html"),
  stay("uchiko-stay-002", "ＨＯＴＥＬ　ＯＮＬＹＯＮＥ", "愛媛県喜多郡内子町内子1913", "0893-57-6844", "https://travel.rakuten.co.jp/HOTEL/197320/197320.html"),
  stay("uchiko-stay-003", "オーベルジュ内子", "愛媛県喜多郡内子町五十崎乙485-2", "0893-44-6565", "https://travel.rakuten.co.jp/HOTEL/181810/181810.html"),
  stay("uchiko-stay-004", "内子の宿　久", "愛媛県喜多郡内子町内子２８７１番地", "0893-44-5735", "https://travel.rakuten.co.jp/HOTEL/167011/167011.html"),
  stay("uchiko-stay-005", "内子の宿　織", "愛媛県喜多郡内子町内子３０１３", "0893-44-5735", "https://travel.rakuten.co.jp/HOTEL/167010/167010.html"),
  stay("uchiko-stay-006", "内子の宿　こころ", "愛媛県喜多郡内子町内子1949", "0893-44-5735", "https://travel.rakuten.co.jp/HOTEL/173234/173234.html"),
  stay("uchiko-stay-007", "内子の宿　紬", "愛媛県喜多郡内子町内子1995", "0893-44-5735", "https://travel.rakuten.co.jp/HOTEL/197382/197382.html"),
  stay("uchiko-stay-008", "内子の宿　二重", "愛媛県喜多郡内子町内子1993", "0893-44-5735", "https://travel.rakuten.co.jp/HOTEL/197385/197385.html"),
  stay("uchiko-stay-009", "内子の宿　絣", "愛媛県喜多郡内子町内子1995", "0893-44-5735", "https://travel.rakuten.co.jp/HOTEL/197383/197383.html"),
  stay("uchiko-stay-010", "内子の宿　単衣", "愛媛県喜多郡内子町内子1993", "0893-44-5735", "https://travel.rakuten.co.jp/HOTEL/197384/197384.html"),
  stay("uchiko-stay-011", "石畳の宿", "愛媛県喜多郡内子町石畳2877", "0893-44-5730", "https://travel.rakuten.co.jp/HOTEL/141920/141920.html"),
  stay("uchiko-stay-012", "あかり　ｂｙ　４Ｓ　ＳＴＡＹ", "愛媛県喜多郡内子町内子2095", "080-4892-1749", "https://travel.rakuten.co.jp/HOTEL/201934/201934.html"),
  stay("uchiko-stay-013", "古民家ゲストハウス＆バー　内子晴れ", "愛媛県喜多郡内子町内子3025", "0893-57-6330", "https://travel.rakuten.co.jp/HOTEL/165841/165841.html"),
  stay("uchiko-stay-014", "内子の宿　中芳我", "愛媛県喜多郡内子町内子2655", "0893-44-5735", "https://travel.rakuten.co.jp/HOTEL/184191/184191.html"),
  stay("uchiko-stay-015", "Ｔｅｄ＇ｓ　＾", "愛媛県喜多郡内子町内子1973 Ｔｅｄ＇ｓ", "080-8836-2916", "https://travel.rakuten.co.jp/HOTEL/194679/194679.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: UCHIKO_TRAVEL_ACCESSED};
}
export const UCHIKO_TRAVEL_DINING: readonly TravelRow[] = [
  dining("uchiko-dining-01", "ちゃんこ屋 花筏", "愛媛県喜多郡内子町内子1964", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38016831/"),
  dining("uchiko-dining-02", "レストランからり", "愛媛県喜多郡内子町内子2452 内子フレッシュパークからり", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38000243/"),
  dining("uchiko-dining-03", "珈琲館京和", "愛媛県喜多郡内子町内子737", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38003310/"),
  dining("uchiko-dining-04", "ふじや旅館", "愛媛県喜多郡内子町小田253", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380304/38007240/"),
  dining("uchiko-dining-05", "もんた", "愛媛県喜多郡内子町内子3418", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38003931/"),
  dining("uchiko-dining-06", "イザカヤ にこり", "愛媛県喜多郡内子町内子1148-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38012686/"),
  dining("uchiko-dining-07", "小田深山荘", "愛媛県喜多郡内子町中川小田深山", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380402/38007239/"),
  dining("uchiko-dining-08", "伍十食屋こころ", "愛媛県喜多郡内子町内子2233", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38015482/"),
  dining("uchiko-dining-09", "かば忠 内子店", "愛媛県喜多郡内子町内子甲1290", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38001747/"),
  dining("uchiko-dining-10", "かじか亭", "愛媛県喜多郡内子町寺村251-1 道の駅 小田の郷せせらぎ内", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38006046/"),
  dining("uchiko-dining-11", "善蔵", "愛媛県喜多郡内子町内子1958", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38009353/"),
  dining("uchiko-dining-12", "やきとり一膳", "愛媛県喜多郡内子町内子1785", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38001823/"),
  dining("uchiko-dining-13", "からりパン工房", "愛媛県喜多郡内子町内子2452 内子フレッシュパークからり", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38010356/"),
  dining("uchiko-dining-14", "新倉鮮魚", "愛媛県喜多郡内子町大瀬中央4601", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38011318/"),
  dining("uchiko-dining-15", "神田", "愛媛県喜多郡内子町五十崎甲1311-2", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38008004/"),
  dining("uchiko-dining-16", "春吉", "愛媛県喜多郡内子町内子1934", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380303/38017019/"),
];
export const UCHIKO_DINING_NAME_SET: ReadonlySet<string> = new Set(UCHIKO_TRAVEL_DINING.map((row) => row.name_ja));
export const UCHIKO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const UCHIKO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const UCHIKO_TRAVEL_ALL: readonly TravelRow[] = [...UCHIKO_TRAVEL_DINING, ...UCHIKO_TRAVEL_STAY, ...UCHIKO_TRAVEL_SHOPPING, ...UCHIKO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isUchikoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UCHIKO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isUchikoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UCHIKO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isUchikoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isUchikoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isUchikoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return UCHIKO_DINING_NAME_SET.has(row.name_ja);
}
export function uchikoSightPhoto(nameJa: string): MimaPlacePhoto | null { return UCHIKO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankUchikoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isUchikoOnsenPackRow(row) && !isUchikoExperiencePackRow(row) && !isUchikoStayPackRow(row) && !isUchikoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of UCHIKO_SIGHT_PINS) {
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
export function uchikoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '内子町 飲食案内' : 'Uchiko Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '内子町 宿泊案内' : 'Uchiko Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '内子町 買物案内' : 'Uchiko Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function uchikoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isUchikoOnsenPackRow(row)) return 'onsen';
  if (isUchikoExperiencePackRow(row)) return 'experience';
  if (isUchikoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isUchikoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function uchikoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isUchikoOnsenPackRow(row) && !isUchikoExperiencePackRow(row) && !isUchikoStayPackRow(row) && !isUchikoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isUchikoOnsenPackRow(row);
  if (filter === 'experience') return isUchikoExperiencePackRow(row);
  if (filter === 'stay') return isUchikoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveUchikoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const UCHIKO_HALL = UCHIKO.hall;
