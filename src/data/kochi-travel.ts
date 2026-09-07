/**
 * Kochi City travel layer. No frozen pack.
 * Dining from 食べログ 高知市 (C39201). Stay: Kochi Pacific Hotel Rakuten room. Onsen: honest 0 (unit baths only). Experience: ひろめ市場.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KOCHI, KOCHI_SIGHT_PHOTOS} from './kochi';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KOCHI_TRAVEL_ACCESSED = '2026-09-08' as const;
export const KOCHI_TRAVEL_SOURCES = {
  home: 'https://www.city.kochi.kochi.jp/', hall: 'https://www.city.kochi.kochi.jp/',
  kankou: 'https://www.city.kochi.kochi.jp/',
  castle: 'https://ja.wikipedia.org/wiki/%E9%AB%98%E7%9F%A5%E5%9F%8E',
  tabelogCity: 'https://tabelog.com/kochi/C39201/rstLst/',
  pacific: 'https://travel.rakuten.co.jp/HOTEL/8584/8584.html'
} as const;

export const KOCHI_ONSEN_PACK_NAMES = [] as const;
export const KOCHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KOCHI_ONSEN_PACK_NAMES);
export const KOCHI_EXPERIENCE_PACK_NAMES = ['ひろめ市場'] as const;
export const KOCHI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KOCHI_EXPERIENCE_PACK_NAMES);
export const KOCHI_STAY_PACK_NAMES = [] as const;
export const KOCHI_STAY_PACK_SET: ReadonlySet<string> = new Set(KOCHI_STAY_PACK_NAMES);
export const KOCHI_SHOPPING_PACK_NAMES = [] as const;
export const KOCHI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KOCHI_SHOPPING_PACK_NAMES);

export const KOCHI_SIGHT_PINS = ['高知城','桂浜','坂本龍馬像','日曜市','わんぱーくこうちアニマルランド','五台山','高知県立牧野植物園','竹林寺'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KOCHI_TRAVEL_ACCESSED};
}
export const KOCHI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('kochi-stay-01', '高知パシフィックホテル', '高知県高知市駅前町1-15', '088-884-0777', 'https://travel.rakuten.co.jp/HOTEL/8584/8584.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KOCHI_TRAVEL_ACCESSED};
}
export const KOCHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('kochi-dining-01', 'ラ・プリマ・ヴォルタ', '高知県高知市はりまや町2-10-1', '088-885-7041', 'https://tabelog.com/kochi/A3901/A390101/39004068/'),
  dining('kochi-dining-02', '将人', '高知県高知市廿代町2-8 1F', '088-824-1308', 'https://tabelog.com/kochi/A3901/A390101/39007487/'),
  dining('kochi-dining-03', 'IHARA', '高知県高知市はりまや町2-10-1 アルコビル B1F', null, 'https://tabelog.com/kochi/A3901/A390101/39007924/'),
  dining('kochi-dining-04', 'どんこ', '高知県高知市はりまや町2-1-21', '088-875-2424', 'https://tabelog.com/kochi/A3901/A390101/39000703/'),
  dining('kochi-dining-05', 'アンナータ', '高知県高知市南はりまや町1-17-23 MPビル 2F', '088-821-7222', 'https://tabelog.com/kochi/A3901/A390101/39007166/'),
  dining('kochi-dining-06', 'コックドール', '高知県高知市帯屋町1-13-13', '088-872-0745', 'https://tabelog.com/kochi/A3901/A390101/39000346/'),
  dining('kochi-dining-07', 'うますし', '高知県高知市追手筋1-9-8', '088-823-7660', 'https://tabelog.com/kochi/A3901/A390101/39005612/'),
  dining('kochi-dining-08', 'ゆう喜屋', '高知県高知市帯屋町1-9-25', '088-873-0388', 'https://tabelog.com/kochi/A3901/A390101/39001250/'),
  dining('kochi-dining-09', '黒尊', '高知県高知市本町3-4-13', '088-873-2624', 'https://tabelog.com/kochi/A3901/A390101/39000063/'),
  dining('kochi-dining-10', '座屋', '高知県高知市廿代町2-8', '088-824-1308', 'https://tabelog.com/kochi/A3901/A390101/39000116/'),
  dining('kochi-dining-11', 'かね春', '高知県高知市春野町芳原2569-1', '088-841-6650', 'https://tabelog.com/kochi/A3901/A390101/39000409/'),
  dining('kochi-dining-12', '屋台安兵衛', '高知県高知市廿代町4-19', '088-873-2773', 'https://tabelog.com/kochi/A3901/A390101/39000019/'),
  dining('kochi-dining-13', 'いまどき安兵衛', '高知県高知市はりまや町2-7-6', '088-885-7762', 'https://tabelog.com/kochi/A3901/A390101/39000134/'),
  dining('kochi-dining-14', 'かもん亭', '高知県高知市はりまや町2-3-13', '088-885-0855', 'https://tabelog.com/kochi/A3901/A390101/39001888/'),
  dining('kochi-dining-15', '土佐あかうしとワイン プティ・ヴェール', '高知県高知市帯屋町2-3-1 ひろめ市場', '088-822-2520', 'https://tabelog.com/kochi/A3901/A390101/39003723/'),
  dining('kochi-dining-16', 'すごろく', '高知県高知市はりまや町2-4-11', '088-884-4569', 'https://tabelog.com/kochi/A3901/A390101/39001021/'),
];

export const KOCHI_DINING_NAME_SET: ReadonlySet<string> = new Set(KOCHI_TRAVEL_DINING.map((row) => row.name_ja));
export const KOCHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KOCHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KOCHI_TRAVEL_ALL: readonly TravelRow[] = [...KOCHI_TRAVEL_DINING, ...KOCHI_TRAVEL_STAY, ...KOCHI_TRAVEL_SHOPPING, ...KOCHI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKochiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KOCHI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKochiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KOCHI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKochiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKochiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKochiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KOCHI_DINING_NAME_SET.has(row.name_ja);
}
export function kochiSightPhoto(nameJa: string): MimaPlacePhoto | null { return KOCHI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKochiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKochiOnsenPackRow(row) && !isKochiExperiencePackRow(row) && !isKochiStayPackRow(row) && !isKochiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KOCHI_SIGHT_PINS) {
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
export function kochiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '高知市 飲食案内' : 'Kochi City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '高知市 宿泊案内' : 'Kochi City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '高知市 買物案内' : 'Kochi City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kochiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKochiOnsenPackRow(row)) return 'onsen';
  if (isKochiExperiencePackRow(row)) return 'experience';
  if (isKochiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKochiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kochiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKochiOnsenPackRow(row) && !isKochiExperiencePackRow(row) && !isKochiStayPackRow(row) && !isKochiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKochiOnsenPackRow(row);
  if (filter === 'experience') return isKochiExperiencePackRow(row);
  if (filter === 'stay') return isKochiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKochiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KOCHI_HALL = KOCHI.hall;
