/**
 * Sukumo City travel layer. No frozen pack.
 * Dining from 食べログ 宿毛市 (C39208). Stay: TG610 densify Rakuten 部屋 stills.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SUKUMO, SUKUMO_SIGHT_PHOTOS} from './sukumo';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SUKUMO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const SUKUMO_TRAVEL_SOURCES = {
  home: 'https://www.city.sukumo.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%AE%BF%E6%AF%9B%E5%B8%82',
  kankou: 'https://www.city.sukumo.kochi.jp/',
  bay: 'https://commons.wikimedia.org/wiki/File:Sukumo_Bay_-_Sep_6,_2019.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39208/rstLst/',
  yashi: 'https://travel.rakuten.co.jp/HOTEL/153227/153227.html'
} as const;

export const SUKUMO_ONSEN_PACK_NAMES = ['宿毛リゾート椰子の湯 露天風呂'] as const;
export const SUKUMO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SUKUMO_ONSEN_PACK_NAMES);
export const SUKUMO_EXPERIENCE_PACK_NAMES = ['道の駅すくも'] as const;
export const SUKUMO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SUKUMO_EXPERIENCE_PACK_NAMES);
export const SUKUMO_STAY_PACK_NAMES = [] as const;
export const SUKUMO_STAY_PACK_SET: ReadonlySet<string> = new Set(SUKUMO_STAY_PACK_NAMES);
export const SUKUMO_SHOPPING_PACK_NAMES = [] as const;
export const SUKUMO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SUKUMO_SHOPPING_PACK_NAMES);

export const SUKUMO_SIGHT_PINS = ['宿毛湾','咸陽島','宿毛城','延光寺','沖の島','出井甌穴'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SUKUMO_TRAVEL_ACCESSED};
}
export const SUKUMO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('sukumo-stay-01', '宿毛リゾート椰子の湯', '高知県宿毛市大島17-27', '0880-65-8185', 'https://travel.rakuten.co.jp/HOTEL/153227/153227.html'),
  stay('sukumo-stay-02', '秋沢ホテル', '高知県宿毛市幸町6-43', '0880-63-2129', 'https://travel.rakuten.co.jp/HOTEL/4858/4858.html'),
  stay('sukumo-stay-03', 'ホテルアバン宿毛', '高知県宿毛市宿毛1108', '0880-63-1180', 'https://travel.rakuten.co.jp/HOTEL/17785/17785.html'),
  stay('sukumo-stay-04', 'ホテル　マツヤ', '高知県宿毛市宿毛5343-10', '0880-63-1185', 'https://travel.rakuten.co.jp/HOTEL/5413/5413.html'),
  stay('sukumo-stay-05', 'ホテル　あさひ', '高知県宿毛市高砂7-12', '0880-65-6707', 'https://travel.rakuten.co.jp/HOTEL/149313/149313.html'),
  stay('sukumo-stay-06', 'ＧＲＡＮＨＩＬＬＳ　ＹＡＳＨＩ', '高知県宿毛市大島17-28', '0880-65-8666', 'https://travel.rakuten.co.jp/HOTEL/193042/193042.html'),
  stay('sukumo-stay-07', 'ゲストハウス　みんちゅう', '高知県宿毛市高砂22-17', '0880-79-0885', 'https://travel.rakuten.co.jp/HOTEL/189207/189207.html'),
  stay('sukumo-stay-08', 'ゲストハウス　ＡＬＢＥＲＧＵＥ　ＳＡＫＵＲＡ', '高知県宿毛市片島4-5-16', '0880-63-9841', 'https://travel.rakuten.co.jp/HOTEL/191989/191989.html'),
  stay('sukumo-stay-09', 'すくもＢＯＸ', '高知県宿毛市片島9-7', null, 'https://travel.rakuten.co.jp/HOTEL/192401/192401.html'),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SUKUMO_TRAVEL_ACCESSED};
}
export const SUKUMO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('sukumo-dining-01', 'まなべ', '高知県宿毛市駅東町3-303', null, 'https://tabelog.com/kochi/A3904/A390403/39005745/'),
  dining('sukumo-dining-02', '居酒屋 いごっそ', '高知県宿毛市港南台2-1-4', '0880-65-5500', 'https://tabelog.com/kochi/A3904/A390403/39005748/'),
  dining('sukumo-dining-03', '天下茶屋', '高知県宿毛市平田町戸内1869-1', '0880-66-0541', 'https://tabelog.com/kochi/A3904/A390403/39005752/'),
  dining('sukumo-dining-04', '彩食や 一期一笑', '高知県宿毛市宿毛5340-10', '0880-63-1661', 'https://tabelog.com/kochi/A3904/A390403/39005734/'),
  dining('sukumo-dining-05', '眞兵衛', '高知県宿毛市高砂1-13', '0880-65-7020', 'https://tabelog.com/kochi/A3904/A390403/39008796/'),
  dining('sukumo-dining-06', '酒と肴 直', '高知県宿毛市中央2-8-28', '090-1325-0070', 'https://tabelog.com/kochi/A3904/A390403/39001249/'),
  dining('sukumo-dining-07', '丸万', '高知県宿毛市押ノ川207-3', '0880-63-0303', 'https://tabelog.com/kochi/A3904/A390403/39008592/'),
  dining('sukumo-dining-08', '豚太郎 宿毛店', '高知県宿毛市駅前町2-201', '0880-63-0030', 'https://tabelog.com/kochi/A3904/A390403/39002101/'),
  dining('sukumo-dining-09', 'なにわや', '高知県宿毛市中央2-1-5', '0880-63-5100', 'https://tabelog.com/kochi/A3904/A390403/39005730/'),
  dining('sukumo-dining-10', '睦月', '高知県宿毛市中央6-2-13', '080-4038-5864', 'https://tabelog.com/kochi/A3904/A390403/39007244/'),
  dining('sukumo-dining-11', '鶴亀', '高知県宿毛市和田443-6', '0880-63-3854', 'https://tabelog.com/kochi/A3904/A390403/39005761/'),
  dining('sukumo-dining-12', 'みよき', '高知県宿毛市中央2-6-13', '0880-63-2377', 'https://tabelog.com/kochi/A3904/A390403/39004852/'),
  dining('sukumo-dining-13', '末廣鮨', '高知県宿毛市片島4-55', '0880-65-8460', 'https://tabelog.com/kochi/A3904/A390403/39005743/'),
  dining('sukumo-dining-14', '手打うどん とし家', '高知県宿毛市小深浦398-1', null, 'https://tabelog.com/kochi/A3904/A390403/39009202/'),
  dining('sukumo-dining-15', '麺屋 神楽', '高知県宿毛市宿毛5386-59', null, 'https://tabelog.com/kochi/A3904/A390403/39008598/'),
  dining('sukumo-dining-16', '来々軒', '高知県宿毛市幸町7-60', '0880-63-1856', 'https://tabelog.com/kochi/A3904/A390403/39004788/'),
];

export const SUKUMO_DINING_NAME_SET: ReadonlySet<string> = new Set(SUKUMO_TRAVEL_DINING.map((row) => row.name_ja));
export const SUKUMO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SUKUMO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SUKUMO_TRAVEL_ALL: readonly TravelRow[] = [...SUKUMO_TRAVEL_DINING, ...SUKUMO_TRAVEL_STAY, ...SUKUMO_TRAVEL_SHOPPING, ...SUKUMO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isSukumoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SUKUMO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isSukumoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SUKUMO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isSukumoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSukumoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSukumoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SUKUMO_DINING_NAME_SET.has(row.name_ja);
}
export function sukumoSightPhoto(nameJa: string): MimaPlacePhoto | null { return SUKUMO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankSukumoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isSukumoOnsenPackRow(row) && !isSukumoExperiencePackRow(row) && !isSukumoStayPackRow(row) && !isSukumoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SUKUMO_SIGHT_PINS) {
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
export function sukumoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '宿毛市 飲食案内' : 'Sukumo City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '宿毛市 宿泊案内' : 'Sukumo City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '宿毛市 買物案内' : 'Sukumo City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function sukumoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isSukumoOnsenPackRow(row)) return 'onsen';
  if (isSukumoExperiencePackRow(row)) return 'experience';
  if (isSukumoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isSukumoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function sukumoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isSukumoOnsenPackRow(row) && !isSukumoExperiencePackRow(row) && !isSukumoStayPackRow(row) && !isSukumoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSukumoOnsenPackRow(row);
  if (filter === 'experience') return isSukumoExperiencePackRow(row);
  if (filter === 'stay') return isSukumoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveSukumoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SUKUMO_HALL = SUKUMO.hall;
