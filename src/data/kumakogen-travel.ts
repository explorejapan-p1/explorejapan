/**
 * Kumakogen Town travel layer. No frozen pack.
 * Dining from 食べログ 久万高原町 (C38386)×16 with dish JPGs. Stay: Rakuten 部屋 stills×4. Onsen: facility bath stills×4 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KUMAKOGEN, KUMAKOGEN_SIGHT_PHOTOS} from './kumakogen';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KUMAKOGEN_TRAVEL_ACCESSED = '2026-09-10' as const;
export const KUMAKOGEN_TRAVEL_SOURCES = {
  home: 'https://www.kumakogen.jp/', hall: 'https://www.kumakogen.jp/map/kuma.html',
  kanko: 'https://kuma-kanko.com/',
  furuiwaya: 'https://ja.wikipedia.org/wiki/%E5%8F%A4%E5%B2%A9%E5%B1%8B',
  omogo: 'https://ja.wikipedia.org/wiki/%E9%9D%A2%E6%B2%B3%E6%B8%93',
  tabelogCity: 'https://tabelog.com/ehime/C38386/rstLst/'
} as const;

export const KUMAKOGEN_ONSEN_PACK_NAMES = ["国民宿舎　古岩屋荘 大浴場", "やすらぎの宿　でんこ お風呂", "いやしの宿　八丁坂 お風呂", "国民宿舎　石鎚 大浴場"] as const;
export const KUMAKOGEN_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KUMAKOGEN_ONSEN_PACK_NAMES);
export const KUMAKOGEN_EXPERIENCE_PACK_NAMES = [] as const;
export const KUMAKOGEN_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KUMAKOGEN_EXPERIENCE_PACK_NAMES);
export const KUMAKOGEN_STAY_PACK_NAMES = [] as const;
export const KUMAKOGEN_STAY_PACK_SET: ReadonlySet<string> = new Set(KUMAKOGEN_STAY_PACK_NAMES);
export const KUMAKOGEN_SHOPPING_PACK_NAMES = [] as const;
export const KUMAKOGEN_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KUMAKOGEN_SHOPPING_PACK_NAMES);

export const KUMAKOGEN_SIGHT_PINS = ["古岩屋", "面河渓", "岩屋寺", "大寶寺"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KUMAKOGEN_TRAVEL_ACCESSED};
}
export const KUMAKOGEN_TRAVEL_STAY: readonly TravelRow[] = [
  stay("kumakogen-stay-001", "国民宿舎　古岩屋荘", "愛媛県上浮穴郡久万高原町直瀬乙1636", null, "https://travel.rakuten.co.jp/HOTEL/104672/104672.html"),
  stay("kumakogen-stay-002", "やすらぎの宿　でんこ", "愛媛県上浮穴郡久万高原町入野1363-1", null, "https://travel.rakuten.co.jp/HOTEL/128621/128621.html"),
  stay("kumakogen-stay-003", "いやしの宿　八丁坂", "愛媛県上浮穴郡久万高原町下畑野川甲1609-7", null, "https://travel.rakuten.co.jp/HOTEL/168300/168300.html"),
  stay("kumakogen-stay-004", "国民宿舎　石鎚", "愛媛県上浮穴郡久万高原町土小屋", null, "https://travel.rakuten.co.jp/HOTEL/196130/196130.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KUMAKOGEN_TRAVEL_ACCESSED};
}
export const KUMAKOGEN_TRAVEL_DINING: readonly TravelRow[] = [
  dining("kumakogen-dining-01", "生そば 若宮", "愛媛県上浮穴郡久万高原町露峰甲1684-3", "0892-50-2311", "https://tabelog.com/ehime/A3803/A380304/38013606/"),
  dining("kumakogen-dining-02", "サンサンパン工房", "愛媛県上浮穴郡久万高原町入野1855-6", "0892-21-3405", "https://tabelog.com/ehime/A3803/A380304/38010282/"),
  dining("kumakogen-dining-03", "ガーデンタイム", "愛媛県上浮穴郡久万高原町久万1470-2", "0892-21-0005", "https://tabelog.com/ehime/A3803/A380304/38008851/"),
  dining("kumakogen-dining-04", "竹森ガーデン", "愛媛県上浮穴郡久万高原町下畑野川乙209-39", "0892-41-0005", "https://tabelog.com/ehime/A3803/A380304/38009456/"),
  dining("kumakogen-dining-05", "時あそび うず", "愛媛県上浮穴郡久万高原町東川6550", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380304/38016827/"),
  dining("kumakogen-dining-06", "久万の茶屋 まほら葉", "愛媛県上浮穴郡久万高原町入野1855-6 道の駅 天空の郷さんさん", "0892-21-3445", "https://tabelog.com/ehime/A3803/A380304/38015818/"),
  dining("kumakogen-dining-07", "クマ カフェ", "愛媛県上浮穴郡久万高原町菅生2-1880-26", "0892-27-4147", "https://tabelog.com/ehime/A3803/A380304/38011716/"),
  dining("kumakogen-dining-08", "Ninepy", "愛媛県上浮穴郡久万高原町久万1590-14", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380304/38016396/"),
  dining("kumakogen-dining-09", "面河茶屋", "愛媛県上浮穴郡久万高原町若山21-1521", "0892-58-2511", "https://tabelog.com/ehime/A3803/A380304/38009815/"),
  dining("kumakogen-dining-10", "カフェレストラン こもれび", "愛媛県上浮穴郡久万高原町父野川318-3", "0892-21-2990", "https://tabelog.com/ehime/A3803/A380304/38006045/"),
  dining("kumakogen-dining-11", "レストランさんさん", "愛媛県上浮穴郡久万高原町入野1855-6 天空の郷さんさん", "0892-21-3403", "https://tabelog.com/ehime/A3803/A380304/38010235/"),
  dining("kumakogen-dining-12", "あん", "愛媛県上浮穴郡久万高原町久万219-1", "0892-21-0002", "https://tabelog.com/ehime/A3803/A380304/38011688/"),
  dining("kumakogen-dining-13", "アニキのサウナ", "愛媛県上浮穴郡久万高原町入野1692-1", "0892-21-3357", "https://tabelog.com/ehime/A3803/A380304/38016753/"),
  dining("kumakogen-dining-14", "吉野屋 菓子舗", "愛媛県上浮穴郡久万高原町久万166-1", "0892-21-2138", "https://tabelog.com/ehime/A3803/A380304/38009801/"),
  dining("kumakogen-dining-15", "高原ゴルフ倶楽部", "愛媛県上浮穴郡久万高原町下畑野川乙1182", "0892-41-0331", "https://tabelog.com/ehime/A3803/A380304/38015656/"),
  dining("kumakogen-dining-16", "中華そば 鶴姫", "愛媛県上浮穴郡久万高原町中津7027-2 レストラン湖畔やなだに", "0892-54-2518", "https://tabelog.com/ehime/A3803/A380304/38014116/"),
];
export const KUMAKOGEN_DINING_NAME_SET: ReadonlySet<string> = new Set(KUMAKOGEN_TRAVEL_DINING.map((row) => row.name_ja));
export const KUMAKOGEN_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KUMAKOGEN_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KUMAKOGEN_TRAVEL_ALL: readonly TravelRow[] = [...KUMAKOGEN_TRAVEL_DINING, ...KUMAKOGEN_TRAVEL_STAY, ...KUMAKOGEN_TRAVEL_SHOPPING, ...KUMAKOGEN_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKumakogenOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KUMAKOGEN_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKumakogenExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KUMAKOGEN_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKumakogenStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKumakogenShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKumakogenDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KUMAKOGEN_DINING_NAME_SET.has(row.name_ja);
}
export function kumakogenSightPhoto(nameJa: string): MimaPlacePhoto | null { return KUMAKOGEN_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKumakogenSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKumakogenOnsenPackRow(row) && !isKumakogenExperiencePackRow(row) && !isKumakogenStayPackRow(row) && !isKumakogenDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KUMAKOGEN_SIGHT_PINS) {
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
export function kumakogenSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '久万高原町 飲食案内' : 'Kumakogen Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '久万高原町 宿泊案内' : 'Kumakogen Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '久万高原町 買物案内' : 'Kumakogen Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kumakogenTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKumakogenOnsenPackRow(row)) return 'onsen';
  if (isKumakogenExperiencePackRow(row)) return 'experience';
  if (isKumakogenStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKumakogenDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kumakogenPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKumakogenOnsenPackRow(row) && !isKumakogenExperiencePackRow(row) && !isKumakogenStayPackRow(row) && !isKumakogenDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKumakogenOnsenPackRow(row);
  if (filter === 'experience') return isKumakogenExperiencePackRow(row);
  if (filter === 'stay') return isKumakogenStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKumakogenFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KUMAKOGEN_HALL = KUMAKOGEN.hall;
