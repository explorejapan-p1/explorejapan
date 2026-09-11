/**
 * Kamijima Town travel layer. No frozen pack.
 * Dining from 食べログ 上島町 (C38356)×16 with dish JPGs. Stay: Rakuten 部屋 stills×1. Onsen: facility bath stills×1 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KAMIJIMA, KAMIJIMA_SIGHT_PHOTOS} from './kamijima';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KAMIJIMA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const KAMIJIMA_TRAVEL_SOURCES = {
  home: 'https://www.town.kamijima.lg.jp/', hall: 'https://www.town.kamijima.lg.jp/',
  kanko: 'https://kamijima.info/',
  sekizen: 'https://ja.wikipedia.org/wiki/%E7%A9%8D%E5%96%84%E5%B1%B1',
  iwagiBridge: 'https://ja.wikipedia.org/wiki/%E5%B2%A9%E5%9F%8E%E6%A9%8B',
  tabelogCity: 'https://tabelog.com/ehime/C38356/rstLst/'
} as const;

export const KAMIJIMA_ONSEN_PACK_NAMES = ["インランド・シー・リゾート フェスパ 満天の湯"] as const;
export const KAMIJIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KAMIJIMA_ONSEN_PACK_NAMES);
export const KAMIJIMA_EXPERIENCE_PACK_NAMES = [] as const;
export const KAMIJIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KAMIJIMA_EXPERIENCE_PACK_NAMES);
export const KAMIJIMA_STAY_PACK_NAMES = [] as const;
export const KAMIJIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(KAMIJIMA_STAY_PACK_NAMES);
export const KAMIJIMA_SHOPPING_PACK_NAMES = [] as const;
export const KAMIJIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KAMIJIMA_SHOPPING_PACK_NAMES);

export const KAMIJIMA_SIGHT_PINS = ["積善山展望台", "岩城橋", "弓削大橋", "ゆめしま海道（積善山より）"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KAMIJIMA_TRAVEL_ACCESSED};
}
export const KAMIJIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("kamijima-stay-001", "インランド・シー・リゾート フェスパ", "愛媛県越智郡上島町弓削日比287", null, "https://travel.rakuten.co.jp/HOTEL/30026/30026.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KAMIJIMA_TRAVEL_ACCESSED};
}
export const KAMIJIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("kamijima-dining-01", "ととや", "愛媛県越智郡上島町弓削下弓削210", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380205/38005246/"),
  dining("kamijima-dining-02", "ニューヤマザキデイリーストア 弓削店", "愛媛県越智郡上島町弓削下弓削1037", "0897-74-0866", "https://tabelog.com/ehime/A3802/A380205/38015838/"),
  dining("kamijima-dining-03", "おかえりなさい", "愛媛県越智郡上島町生名2111-2", "080-2908-8990", "https://tabelog.com/ehime/A3802/A380205/38012223/"),
  dining("kamijima-dining-04", "わらしべ。 岩城島BASE", "愛媛県越智郡上島町岩城553", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380201/38014354/"),
  dining("kamijima-dining-05", "Aコープ 弓削店", "愛媛県越智郡上島町弓削下弓削119", "0897-77-3134", "https://tabelog.com/ehime/A3802/A380205/38015823/"),
  dining("kamijima-dining-06", "たい屋", "愛媛県越智郡上島町岩城4974", "090-4977-3179", "https://tabelog.com/ehime/A3802/A380201/38014250/"),
  dining("kamijima-dining-07", "いわぎ物産センター", "愛媛県越智郡上島町岩城2586番地", "0897-75-3288", "https://tabelog.com/ehime/A3802/A380201/38007015/"),
  dining("kamijima-dining-08", "民宿　よし正", "愛媛県越智郡上島町岩城1540番地", "0897-75-2267", "https://tabelog.com/ehime/A3802/A380201/38007370/"),
  dining("kamijima-dining-09", "いっ福", "愛媛県越智郡上島町弓削太田114", "080-4635-8334", "https://tabelog.com/ehime/A3802/A380205/38015058/"),
  dining("kamijima-dining-10", "中浦鮮魚店", "愛媛県越智郡上島町生名1656", "0897-76-3044", "https://tabelog.com/ehime/A3802/A380201/38008514/"),
  dining("kamijima-dining-11", "キッチン 313 カミユゲ", "愛媛県越智郡上島町弓削上弓削313", "090-7371-6888", "https://tabelog.com/ehime/A3802/A380205/38011093/"),
  dining("kamijima-dining-12", "しまでcafe", "愛媛県越智郡上島町弓削下弓削830-1", "0897-77-2232", "https://tabelog.com/ehime/A3802/A380205/38001621/"),
  dining("kamijima-dining-13", "ゆめしま珈琲焙煎所 侘数奇", "愛媛県越智郡上島町生名448-2 生名港務所 2F", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380201/38017325/"),
  dining("kamijima-dining-14", "ミスティー亀井", "愛媛県越智郡上島町岩城1523", "0897-75-2006", "https://tabelog.com/ehime/A3802/A380205/38008339/"),
  dining("kamijima-dining-15", "タムラ食品", "愛媛県越智郡上島町岩城2160", "0897-75-2030", "https://tabelog.com/ehime/A3802/A380201/38007451/"),
  dining("kamijima-dining-16", "vida con miel", "愛媛県越智郡上島町弓削狩尾177-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380205/38014803/"),
];
export const KAMIJIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(KAMIJIMA_TRAVEL_DINING.map((row) => row.name_ja));
export const KAMIJIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KAMIJIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KAMIJIMA_TRAVEL_ALL: readonly TravelRow[] = [...KAMIJIMA_TRAVEL_DINING, ...KAMIJIMA_TRAVEL_STAY, ...KAMIJIMA_TRAVEL_SHOPPING, ...KAMIJIMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKamijimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMIJIMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKamijimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMIJIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKamijimaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKamijimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKamijimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMIJIMA_DINING_NAME_SET.has(row.name_ja);
}
export function kamijimaSightPhoto(nameJa: string): MimaPlacePhoto | null { return KAMIJIMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKamijimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKamijimaOnsenPackRow(row) && !isKamijimaExperiencePackRow(row) && !isKamijimaStayPackRow(row) && !isKamijimaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KAMIJIMA_SIGHT_PINS) {
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
export function kamijimaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '上島町 飲食案内' : 'Kamijima Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '上島町 宿泊案内' : 'Kamijima Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '上島町 買物案内' : 'Kamijima Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kamijimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKamijimaOnsenPackRow(row)) return 'onsen';
  if (isKamijimaExperiencePackRow(row)) return 'experience';
  if (isKamijimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKamijimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kamijimaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKamijimaOnsenPackRow(row) && !isKamijimaExperiencePackRow(row) && !isKamijimaStayPackRow(row) && !isKamijimaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKamijimaOnsenPackRow(row);
  if (filter === 'experience') return isKamijimaExperiencePackRow(row);
  if (filter === 'stay') return isKamijimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKamijimaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KAMIJIMA_HALL = KAMIJIMA.hall;
