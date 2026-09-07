/**
 * Susaki City travel layer. No frozen pack.
 * Dining from 食べログ 須崎市 (C39206). Stay: ＨＯＴＥＬ　ＡＺ　高知須崎店 Rakuten room still (シングルルーム). Onsen honest 0. Experience: 道の駅かわうその里すさき.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SUSAKI, SUSAKI_SIGHT_PHOTOS} from './susaki';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SUSAKI_TRAVEL_ACCESSED = '2026-09-08' as const;
export const SUSAKI_TRAVEL_SOURCES = {
  home: 'https://www.city.susaki.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E9%A0%88%E5%B4%8E%E5%B8%82',
  kankou: 'https://www.city.susaki.lg.jp/',
  yokonami: 'https://commons.wikimedia.org/wiki/File:Yokonami_Nature_Park_Coastline_(52004285222).jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39206/rstLst/',
  az: 'https://travel.rakuten.co.jp/HOTEL/196115/196115.html'
} as const;

export const SUSAKI_ONSEN_PACK_NAMES = [] as const;
export const SUSAKI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SUSAKI_ONSEN_PACK_NAMES);
export const SUSAKI_EXPERIENCE_PACK_NAMES = ['道の駅かわうその里すさき'] as const;
export const SUSAKI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SUSAKI_EXPERIENCE_PACK_NAMES);
export const SUSAKI_STAY_PACK_NAMES = [] as const;
export const SUSAKI_STAY_PACK_SET: ReadonlySet<string> = new Set(SUSAKI_STAY_PACK_NAMES);
export const SUSAKI_SHOPPING_PACK_NAMES = [] as const;
export const SUSAKI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SUSAKI_SHOPPING_PACK_NAMES);

export const SUSAKI_SIGHT_PINS = ['横浪黒潮ライン','大善寺','鳴無神社','須賀神社','野見湾','桑田山雪割り桜'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SUSAKI_TRAVEL_ACCESSED};
}
export const SUSAKI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('susaki-stay-01', 'ＨＯＴＥＬ　ＡＺ　高知須崎店', '高知県須崎市神田2489-28', '0889-42-3301', 'https://travel.rakuten.co.jp/HOTEL/196115/196115.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SUSAKI_TRAVEL_ACCESSED};
}
export const SUSAKI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('susaki-dining-01', 'だるま', '高知県須崎市栄町2-18', null, 'https://tabelog.com/kochi/A3903/A390301/39000124/'),
  dining('susaki-dining-02', 'レストラン とれた亭', '高知県須崎市下分甲263-3 道の駅かわうその里すさき 2F', '0889-40-0004', 'https://tabelog.com/kochi/A3903/A390301/39006239/'),
  dining('susaki-dining-03', 'たけうち', '高知県須崎市緑町8-27', '0889-42-2195', 'https://tabelog.com/kochi/A3903/A390301/39004035/'),
  dining('susaki-dining-04', 'ばさら 離れ屋', '高知県須崎市西崎町6-6 ホテルバンダガ 1F', null, 'https://tabelog.com/kochi/A3903/A390301/39008988/'),
  dining('susaki-dining-05', '喫茶 安和の里', '高知県須崎市安和919-2', '0889-42-8613', 'https://tabelog.com/kochi/A3903/A390301/39003852/'),
  dining('susaki-dining-06', 'シプラインディアンレストラン', '高知県須崎市多ノ郷甲435-1', '0889-48-0056', 'https://tabelog.com/kochi/A3903/A390301/39004039/'),
  dining('susaki-dining-07', '鳥よし', '高知県須崎市大間東町1-21', '0889-43-2203', 'https://tabelog.com/kochi/A3903/A390301/39003246/'),
  dining('susaki-dining-08', '鈴', '高知県須崎市原町1-11', '0889-42-4745', 'https://tabelog.com/kochi/A3903/A390301/39001246/'),
  dining('susaki-dining-09', 'AZcafe -Shidaka- 高知須崎店', '高知県須崎市神田2489-28', '0889-42-3301', 'https://tabelog.com/kochi/A3903/A390301/39008999/'),
  dining('susaki-dining-10', '喜楽', '高知県須崎市南古市町2-9', '0889-42-6097', 'https://tabelog.com/kochi/A3903/A390301/39002102/'),
  dining('susaki-dining-11', '土居義', '高知県須崎市西崎町6-12', '0889-42-8787', 'https://tabelog.com/kochi/A3903/A390301/39002182/'),
  dining('susaki-dining-12', 'ピエロ珈琲専科', '高知県須崎市東糺町3-6', null, 'https://tabelog.com/kochi/A3903/A390301/39001819/'),
  dining('susaki-dining-13', '回転寿司いちばん船', '高知県須崎市神田2500-1 マルナカ須崎店', '0889-40-0011', 'https://tabelog.com/kochi/A3903/A390301/39006414/'),
  dining('susaki-dining-14', 'イタリア料理 レガーロ', '高知県須崎市緑町8-27 2F', '080-6376-1894', 'https://tabelog.com/kochi/A3903/A390301/39007064/'),
  dining('susaki-dining-15', '須崎大漁堂', '高知県須崎市青木町1-19', '0889-59-1881', 'https://tabelog.com/kochi/A3903/A390301/39008120/'),
  dining('susaki-dining-16', '舞夢喫茶店', '高知県須崎市青木町7-13', '0889-43-2088', 'https://tabelog.com/kochi/A3903/A390301/39002416/'),
];

export const SUSAKI_DINING_NAME_SET: ReadonlySet<string> = new Set(SUSAKI_TRAVEL_DINING.map((row) => row.name_ja));
export const SUSAKI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SUSAKI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SUSAKI_TRAVEL_ALL: readonly TravelRow[] = [...SUSAKI_TRAVEL_DINING, ...SUSAKI_TRAVEL_STAY, ...SUSAKI_TRAVEL_SHOPPING, ...SUSAKI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isSusakiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SUSAKI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isSusakiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SUSAKI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isSusakiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSusakiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSusakiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SUSAKI_DINING_NAME_SET.has(row.name_ja);
}
export function susakiSightPhoto(nameJa: string): MimaPlacePhoto | null { return SUSAKI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankSusakiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isSusakiOnsenPackRow(row) && !isSusakiExperiencePackRow(row) && !isSusakiStayPackRow(row) && !isSusakiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SUSAKI_SIGHT_PINS) {
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
export function susakiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '須崎市 飲食案内' : 'Susaki City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '須崎市 宿泊案内' : 'Susaki City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '須崎市 買物案内' : 'Susaki City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function susakiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isSusakiOnsenPackRow(row)) return 'onsen';
  if (isSusakiExperiencePackRow(row)) return 'experience';
  if (isSusakiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isSusakiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function susakiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isSusakiOnsenPackRow(row) && !isSusakiExperiencePackRow(row) && !isSusakiStayPackRow(row) && !isSusakiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSusakiOnsenPackRow(row);
  if (filter === 'experience') return isSusakiExperiencePackRow(row);
  if (filter === 'stay') return isSusakiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveSusakiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SUSAKI_HALL = SUSAKI.hall;
