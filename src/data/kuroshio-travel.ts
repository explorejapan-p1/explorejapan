/**
 * Kuroshio Town travel layer. No frozen pack.
 * Dining from 食べログ 黒潮町 (C39428). Stay: ネスト・ウエストガーデン土佐 Rakuten スタンダードツイン. Onsen: 0 (no bath mediaInfo key). Experience: 土佐西南大規模公園.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KUROSHIO, KUROSHIO_SIGHT_PHOTOS} from './kuroshio';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KUROSHIO_TRAVEL_ACCESSED = '2026-09-08' as const;
export const KUROSHIO_TRAVEL_SOURCES = {
  home: 'https://www.town.kuroshio.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E9%BB%92%E6%BD%AE%E7%94%BA',
  kankou: 'https://www.town.kuroshio.lg.jp/',
  matsubara: 'https://commons.wikimedia.org/wiki/File:Irino_no_Matsubara,_enkei.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39428/rstLst/',
  nest: 'https://travel.rakuten.co.jp/HOTEL/75381/75381.html'
} as const;

export const KUROSHIO_ONSEN_PACK_NAMES = [] as const;
export const KUROSHIO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KUROSHIO_ONSEN_PACK_NAMES);
export const KUROSHIO_EXPERIENCE_PACK_NAMES = ['土佐西南大規模公園'] as const;
export const KUROSHIO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KUROSHIO_EXPERIENCE_PACK_NAMES);
export const KUROSHIO_STAY_PACK_NAMES = [] as const;
export const KUROSHIO_STAY_PACK_SET: ReadonlySet<string> = new Set(KUROSHIO_STAY_PACK_NAMES);
export const KUROSHIO_SHOPPING_PACK_NAMES = [] as const;
export const KUROSHIO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KUROSHIO_SHOPPING_PACK_NAMES);

export const KUROSHIO_SIGHT_PINS = ['入野松原','入野海岸','砂浜美術館','加茂神社','佐賀地区'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KUROSHIO_TRAVEL_ACCESSED};
}
export const KUROSHIO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('kuroshio-stay-01', 'ネスト・ウエストガーデン土佐', '高知県幡多郡黒潮町入野184', '0880-43-0101', 'https://travel.rakuten.co.jp/HOTEL/75381/75381.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KUROSHIO_TRAVEL_ACCESSED};
}
export const KUROSHIO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('kuroshio-dining-01', '農園', '高知県幡多郡黒潮町入野2082-6', '080-3925-4402', 'https://tabelog.com/kochi/A3904/A390402/39008616/'),
  dining('kuroshio-dining-02', '居酒屋ぽこぺん', '高知県幡多郡黒潮町入野2014-7', '0880-43-1287', 'https://tabelog.com/kochi/A3904/A390402/39005069/'),
  dining('kuroshio-dining-03', 'いろりや', '高知県幡多郡黒潮町入野558-2', '0880-43-3838', 'https://tabelog.com/kochi/A3904/A390402/39008427/'),
  dining('kuroshio-dining-04', '甘味処 和や', '高知県幡多郡黒潮町入野2865', '090-9329-7472', 'https://tabelog.com/kochi/A3904/A390402/39000079/'),
  dining('kuroshio-dining-05', 'むうん', '高知県幡多郡黒潮町佐賀894-1', '0880-55-2978', 'https://tabelog.com/kochi/A3904/A390402/39006275/'),
  dining('kuroshio-dining-06', '庄寿庵', '高知県幡多郡黒潮町佐賀正月坂3132-1', '0880-55-3500', 'https://tabelog.com/kochi/A3904/A390402/39008428/'),
  dining('kuroshio-dining-07', '黒潮一番館', '高知県幡多郡黒潮町佐賀字海雲寺374-9', '0880-55-3680', 'https://tabelog.com/kochi/A3904/A390402/39000954/'),
  dining('kuroshio-dining-08', 'Sea56', '高知県幡多郡黒潮町入野558-1', '080-8068-9709', 'https://tabelog.com/kochi/A3904/A390402/39008631/'),
  dining('kuroshio-dining-09', 'お好み焼き 田中', '高知県幡多郡黒潮町入野3316', '0880-43-4800', 'https://tabelog.com/kochi/A3904/A390402/39001364/'),
  dining('kuroshio-dining-10', '焼き鳥イマジョウ商店', '高知県幡多郡黒潮町入野1986', '090-1576-5893', 'https://tabelog.com/kochi/A3904/A390402/39009035/'),
  dining('kuroshio-dining-11', '居酒屋 真味', '高知県幡多郡黒潮町入野5601-1', '0880-43-0616', 'https://tabelog.com/kochi/A3904/A390402/39005878/'),
  dining('kuroshio-dining-12', '道の駅 ビオスおおがた ひなたや食堂', '高知県幡多郡黒潮町浮鞭953-1', '0880-43-3113', 'https://tabelog.com/kochi/A3904/A390402/39008665/'),
  dining('kuroshio-dining-13', '道の駅 なぶら土佐佐賀', '高知県幡多郡黒潮町佐賀1350', '0880-55-3325', 'https://tabelog.com/kochi/A3904/A390402/39002146/'),
  dining('kuroshio-dining-14', '飲み処 ゆうゆう', '高知県幡多郡黒潮町入野字西松崎2567-1', '0880-43-0737', 'https://tabelog.com/kochi/A3904/A390402/39005250/'),
  dining('kuroshio-dining-15', '鬼守家', '高知県幡多郡黒潮町佐賀830-1', '0880-55-2128', 'https://tabelog.com/kochi/A3904/A390402/39004888/'),
  dining('kuroshio-dining-16', 'お好み焼き まるや', '高知県幡多郡黒潮町入野1570-5', '080-3921-0735', 'https://tabelog.com/kochi/A3904/A390402/39001986/'),
];

export const KUROSHIO_DINING_NAME_SET: ReadonlySet<string> = new Set(KUROSHIO_TRAVEL_DINING.map((row) => row.name_ja));
export const KUROSHIO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KUROSHIO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KUROSHIO_TRAVEL_ALL: readonly TravelRow[] = [...KUROSHIO_TRAVEL_DINING, ...KUROSHIO_TRAVEL_STAY, ...KUROSHIO_TRAVEL_SHOPPING, ...KUROSHIO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKuroshioOnsenPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKuroshioExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KUROSHIO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKuroshioStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKuroshioShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKuroshioDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KUROSHIO_DINING_NAME_SET.has(row.name_ja);
}
export function kuroshioSightPhoto(nameJa: string): MimaPlacePhoto | null { return KUROSHIO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKuroshioSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKuroshioOnsenPackRow(row) && !isKuroshioExperiencePackRow(row) && !isKuroshioStayPackRow(row) && !isKuroshioDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KUROSHIO_SIGHT_PINS) {
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
export function kuroshioSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '黒潮町 飲食案内' : 'Kuroshio Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '黒潮町 宿泊案内' : 'Kuroshio Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '黒潮町 買物案内' : 'Kuroshio Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kuroshioTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKuroshioOnsenPackRow(row)) return 'onsen';
  if (isKuroshioExperiencePackRow(row)) return 'experience';
  if (isKuroshioStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKuroshioDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kuroshioPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKuroshioOnsenPackRow(row) && !isKuroshioExperiencePackRow(row) && !isKuroshioStayPackRow(row) && !isKuroshioDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKuroshioOnsenPackRow(row);
  if (filter === 'experience') return isKuroshioExperiencePackRow(row);
  if (filter === 'stay') return isKuroshioStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKuroshioFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KUROSHIO_HALL = KUROSHIO.hall;
