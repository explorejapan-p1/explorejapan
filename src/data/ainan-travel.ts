/**
 * Ainan Town travel layer. No frozen pack.
 * Dining from 食べログ 愛南町 (C38506)×16 with dish JPGs. Stay: Rakuten 部屋 stills×4. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {AINAN, AINAN_SIGHT_PHOTOS} from './ainan';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const AINAN_TRAVEL_ACCESSED = '2026-09-10' as const;
export const AINAN_TRAVEL_SOURCES = {
  home: 'https://www.town.ainan.ehime.jp/', hall: 'https://www.town.ainan.ehime.jp/kurashi/chosei/yakuba/index.html',
  kanko: 'https://www.town.ainan.ehime.jp/kanko/',
  stayList: 'https://www.town.ainan.ehime.jp/kanko/sightseeing/shukuhaku/',
  select: 'https://travel.rakuten.co.jp/HOTEL/67356/67356.html',
  aoikuni: 'https://travel.rakuten.co.jp/HOTEL/149312/149312.html',
  az: 'https://travel.rakuten.co.jp/HOTEL/193143/193143.html',
  akebono: 'https://travel.rakuten.co.jp/HOTEL/134904/134904.html',
  sotodomari: 'https://commons.wikimedia.org/wiki/File:Sotodomari_%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%8D%97%E5%AE%87%E5%92%8C%E9%83%A1%E6%84%9B%E5%8D%97%E7%94%BA%E5%A4%96%E6%B3%8A1010035.JPG',
  tabelogCity: 'https://tabelog.com/ehime/C38506/rstLst/'
} as const;

export const AINAN_ONSEN_PACK_NAMES = ["ホテルセレクト愛媛愛南町 風呂", "一本松温泉あけぼの荘 風呂"] as const;
export const AINAN_ONSEN_PACK_SET: ReadonlySet<string> = new Set(AINAN_ONSEN_PACK_NAMES);
export const AINAN_EXPERIENCE_PACK_NAMES = [] as const;
export const AINAN_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(AINAN_EXPERIENCE_PACK_NAMES);
export const AINAN_STAY_PACK_NAMES = [] as const;
export const AINAN_STAY_PACK_SET: ReadonlySet<string> = new Set(AINAN_STAY_PACK_NAMES);
export const AINAN_SHOPPING_PACK_NAMES = [] as const;
export const AINAN_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(AINAN_SHOPPING_PACK_NAMES);

export const AINAN_SIGHT_PINS = ["愛南町役場", "外泊石垣の里", "僧都川", "船越（西海）", "光禅寺本堂", "紫電改展示館"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: AINAN_TRAVEL_ACCESSED};
}
export const AINAN_TRAVEL_STAY: readonly TravelRow[] = [
  stay("ainan-stay-001", "ホテルセレクト愛媛愛南町", "愛媛県南宇和郡愛南町広見3367-1", "0895-84-3311", "https://travel.rakuten.co.jp/HOTEL/67356/67356.html"),
  stay("ainan-stay-002", "宇和海国立公園　青い国ホテル", "愛媛県南宇和郡愛南町御荘平城3929-3", "0895-72-2131", "https://travel.rakuten.co.jp/HOTEL/149312/149312.html"),
  stay("ainan-stay-003", "ＨＯＴＥＬ　ＡＺ　愛媛愛南店", "愛媛県南宇和郡愛南町御荘平城681-2", "0895-72-3311", "https://travel.rakuten.co.jp/HOTEL/193143/193143.html"),
  stay("ainan-stay-004", "一本松温泉あけぼの荘", "愛媛県南宇和郡愛南町増田5470", "0895-84-3260", "https://travel.rakuten.co.jp/HOTEL/134904/134904.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: AINAN_TRAVEL_ACCESSED};
}
export const AINAN_TRAVEL_DINING: readonly TravelRow[] = [
  dining("ainan-dining-01", "居酒屋 花かるた", "愛媛県南宇和郡愛南町御荘平城3252-2", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38013072/"),
  dining("ainan-dining-02", "鉄板かめお", "愛媛県南宇和郡愛南町城辺甲3842", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38013580/"),
  dining("ainan-dining-03", "アンベール", "愛媛県南宇和郡愛南町御荘平城4296-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38005011/"),
  dining("ainan-dining-04", "酒処 尾崎", "愛媛県南宇和郡愛南町城辺甲2280-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38015093/"),
  dining("ainan-dining-05", "季節園", "愛媛県南宇和郡愛南町御荘平城2254", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38010905/"),
  dining("ainan-dining-06", "ばちこい", "愛媛県南宇和郡愛南町御荘平城3933-2", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38015441/"),
  dining("ainan-dining-07", "だんだん館", "愛媛県南宇和郡愛南町外泊252 石垣の里　だんだん館", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38001022/"),
  dining("ainan-dining-08", "池田屋", "愛媛県南宇和郡愛南町御荘平城2266", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38010076/"),
  dining("ainan-dining-09", "喫茶アルプス", "愛媛県南宇和郡愛南町御荘平城666", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38010728/"),
  dining("ainan-dining-10", "みかん職人 武田屋", "愛媛県南宇和郡愛南町御荘平城1-5", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38013928/"),
  dining("ainan-dining-11", "酒彩家 遊厨", "愛媛県南宇和郡愛南町御荘平城3637-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38011648/"),
  dining("ainan-dining-12", "炭焼き 船波", "愛媛県南宇和郡愛南町柏319", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38014714/"),
  dining("ainan-dining-13", "白椿", "愛媛県南宇和郡愛南町御荘平城3612", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38009896/"),
  dining("ainan-dining-14", "道の駅 みしょうMIC", "愛媛県南宇和郡愛南町御荘平城4296-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38007459/"),
  dining("ainan-dining-15", "愛南 市場食堂", "愛媛県南宇和郡愛南町鯆越166-4", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38007391/"),
  dining("ainan-dining-16", "お好み焼き　ひらの", "愛媛県南宇和郡愛南町御荘平城3621-3", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380404/38007319/"),
];
export const AINAN_DINING_NAME_SET: ReadonlySet<string> = new Set(AINAN_TRAVEL_DINING.map((row) => row.name_ja));
export const AINAN_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const AINAN_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const AINAN_TRAVEL_ALL: readonly TravelRow[] = [...AINAN_TRAVEL_DINING, ...AINAN_TRAVEL_STAY, ...AINAN_TRAVEL_SHOPPING, ...AINAN_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isAinanOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AINAN_ONSEN_PACK_SET.has(row.name_ja);
}
export function isAinanExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AINAN_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isAinanStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAinanShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAinanDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AINAN_DINING_NAME_SET.has(row.name_ja);
}
export function ainanSightPhoto(nameJa: string): MimaPlacePhoto | null { return AINAN_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankAinanSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isAinanOnsenPackRow(row) && !isAinanExperiencePackRow(row) && !isAinanStayPackRow(row) && !isAinanDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of AINAN_SIGHT_PINS) {
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
export function ainanSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '愛南町 飲食案内' : 'Ainan Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '愛南町 宿泊案内' : 'Ainan Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '愛南町 買物案内' : 'Ainan Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function ainanTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isAinanOnsenPackRow(row)) return 'onsen';
  if (isAinanExperiencePackRow(row)) return 'experience';
  if (isAinanStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isAinanDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function ainanPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isAinanOnsenPackRow(row) && !isAinanExperiencePackRow(row) && !isAinanStayPackRow(row) && !isAinanDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isAinanOnsenPackRow(row);
  if (filter === 'experience') return isAinanExperiencePackRow(row);
  if (filter === 'stay') return isAinanStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveAinanFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const AINAN_HALL = AINAN.hall;
