/**
 * Iyo City travel layer. No frozen pack.
 * Dining from 食べログ 伊予市 (C38210)×16 with dish JPGs. Stay: Rakuten 部屋 stills×5. Onsen: facility bath stills×4 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {IYO, IYO_SIGHT_PHOTOS} from './iyo';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const IYO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const IYO_TRAVEL_SOURCES = {
  home: 'https://www.city.iyo.lg.jp/', hall: 'https://www.city.iyo.lg.jp/',
  kanko: 'https://iyokankou.jp/',
  goshiki: 'https://www.city.iyo.lg.jp/shisetsu/shisetsu/koen/goshikipark.html',
  futami: 'https://www.city.iyo.lg.jp/shisetsu/shisetsu/koen/seaside.html',
  tabelogCity: 'https://tabelog.com/ehime/C38210/rstLst/'
} as const;

export const IYO_ONSEN_PACK_NAMES = ["花の森ホテル 花の湯", "ウェルピア伊予 大浴場", "つたや旅館 大浴場", "いよプリンスホテル 天然温泉"] as const;
export const IYO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(IYO_ONSEN_PACK_NAMES);
export const IYO_EXPERIENCE_PACK_NAMES = [] as const;
export const IYO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(IYO_EXPERIENCE_PACK_NAMES);
export const IYO_STAY_PACK_NAMES = [] as const;
export const IYO_STAY_PACK_SET: ReadonlySet<string> = new Set(IYO_STAY_PACK_NAMES);
export const IYO_SHOPPING_PACK_NAMES = [] as const;
export const IYO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(IYO_SHOPPING_PACK_NAMES);

export const IYO_SIGHT_PINS = ["五色浜公園", "ふたみシーサイド公園", "伊予市駅", "萬安港旧灯台"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: IYO_TRAVEL_ACCESSED};
}
export const IYO_TRAVEL_STAY: readonly TravelRow[] = [

  stay("iyo-stay-001", "花の森ホテル", "愛媛県伊予市中山町中山11-405-2", null, "https://travel.rakuten.co.jp/HOTEL/19527/19527.html"),
  stay("iyo-stay-002", "ウェルピア伊予", "愛媛県伊予市下三谷1761-1", null, "https://travel.rakuten.co.jp/HOTEL/70933/70933.html"),
  stay("iyo-stay-003", "つたや旅館", "愛媛県伊予市灘町110", null, "https://travel.rakuten.co.jp/HOTEL/178605/178605.html"),
  stay("iyo-stay-004", "いよプリンスホテル", "愛媛県伊予市灘町16‐1", null, "https://travel.rakuten.co.jp/HOTEL/179258/179258.html"),
  stay("iyo-stay-005", "ＨＯＴＥＬ ＡＺ 愛媛伊予店", "愛媛県伊予市稲荷字北田甲710番地1", null, "https://travel.rakuten.co.jp/HOTEL/181835/181835.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: IYO_TRAVEL_ACCESSED};
}
export const IYO_TRAVEL_DINING: readonly TravelRow[] = [

  dining("iyo-dining-01", "三津浜焼伊予灘", "愛媛県伊予市双海町上灘甲5812-2", "090-3452-7011", "https://tabelog.com/ehime/A3801/A380103/38016885/"),
  dining("iyo-dining-02", "魚民 伊予店", "愛媛県伊予市下吾川996-1", "089-982-6388", "https://tabelog.com/ehime/A3801/A380103/38011124/"),
  dining("iyo-dining-03", "ラピ", "愛媛県伊予市上三谷甲2209-13", "089-916-3088", "https://tabelog.com/ehime/A3801/A380103/38013130/"),
  dining("iyo-dining-04", "Sorriso", "愛媛県伊予市上吾川22-7", "089-989-7670", "https://tabelog.com/ehime/A3801/A380103/38016715/"),
  dining("iyo-dining-05", "居酒屋夕霧", "愛媛県伊予市尾崎46", "089-982-7118", "https://tabelog.com/ehime/A3801/A380103/38004321/"),
  dining("iyo-dining-06", "DAIDOKORO　CAFE　MOKU", "愛媛県伊予市上野1342-2", "089-904-9506", "https://tabelog.com/ehime/A3801/A380103/38005343/"),
  dining("iyo-dining-07", "ルドリュロラン", "愛媛県伊予市双海町高岸甲1227-1", "089-986-0358", "https://tabelog.com/ehime/A3801/A380103/38007418/"),
  dining("iyo-dining-08", "日吉", "愛媛県伊予市米湊827-4 町屋", "080-2984-2511", "https://tabelog.com/ehime/A3801/A380103/38016410/"),
  dining("iyo-dining-09", "マルセロベーカリー", "愛媛県伊予市灘町111-1 タニオカ洋品店", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3801/A380103/38015499/"),
  dining("iyo-dining-10", "じゃんじゃか 伊予店", "愛媛県伊予市米湊728-3", "089-946-7518", "https://tabelog.com/ehime/A3801/A380103/38006812/"),
  dining("iyo-dining-11", "Kitchen ichi-nichi", "愛媛県伊予市市場725-1", "089-983-2193", "https://tabelog.com/ehime/A3801/A380103/38005530/"),
  dining("iyo-dining-12", "TSUYAKICHI ふたみシーサイド公園店", "愛媛県伊予市双海町高串甲2326", "089-986-0522", "https://tabelog.com/ehime/A3801/A380103/38013849/"),
  dining("iyo-dining-13", "オカベ", "愛媛県伊予市市場150", "089-983-1230", "https://tabelog.com/ehime/A3801/A380103/38013357/"),
  dining("iyo-dining-14", "料理 いろは", "愛媛県伊予市灘町64", "089-982-1684", "https://tabelog.com/ehime/A3801/A380103/38013306/"),
  dining("iyo-dining-15", "志乃や", "愛媛県伊予市米湊827-4 手づくり交流市場　「町家」", "089-946-7245", "https://tabelog.com/ehime/A3801/A380103/38008252/"),
  dining("iyo-dining-16", "クラフトの里", "愛媛県伊予市中山町中山子271", "089-968-0756", "https://tabelog.com/ehime/A3801/A380103/38006194/"),
];


export const IYO_DINING_NAME_SET: ReadonlySet<string> = new Set(IYO_TRAVEL_DINING.map((row) => row.name_ja));
export const IYO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const IYO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const IYO_TRAVEL_ALL: readonly TravelRow[] = [...IYO_TRAVEL_DINING, ...IYO_TRAVEL_STAY, ...IYO_TRAVEL_SHOPPING, ...IYO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isIyoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IYO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isIyoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IYO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isIyoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isIyoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isIyoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IYO_DINING_NAME_SET.has(row.name_ja);
}
export function iyoSightPhoto(nameJa: string): MimaPlacePhoto | null { return IYO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankIyoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isIyoOnsenPackRow(row) && !isIyoExperiencePackRow(row) && !isIyoStayPackRow(row) && !isIyoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of IYO_SIGHT_PINS) {
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
export function iyoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '伊予市 飲食案内' : 'Iyo City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '伊予市 宿泊案内' : 'Iyo City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '伊予市 買物案内' : 'Iyo City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function iyoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isIyoOnsenPackRow(row)) return 'onsen';
  if (isIyoExperiencePackRow(row)) return 'experience';
  if (isIyoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isIyoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function iyoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isIyoOnsenPackRow(row) && !isIyoExperiencePackRow(row) && !isIyoStayPackRow(row) && !isIyoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isIyoOnsenPackRow(row);
  if (filter === 'experience') return isIyoExperiencePackRow(row);
  if (filter === 'stay') return isIyoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveIyoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const IYO_HALL = IYO.hall;

