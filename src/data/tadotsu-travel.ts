/**
 * Tadotsu Town travel layer. No frozen pack.
 * Dining from 食べログ 多度津町 (C37404). Stay: Hotel Toyota Rakuten room. Onsen honest 0. Experience: 桃陵公園 Commons.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TADOTSU, TADOTSU_SIGHT_PHOTOS} from './tadotsu';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TADOTSU_TRAVEL_ACCESSED = '2026-09-08' as const;
export const TADOTSU_TRAVEL_SOURCES = {
  home: 'https://www.town.tadotsu.lg.jp/', hall: 'https://www.town.tadotsu.lg.jp/',
  kankou: 'https://www.town.tadotsu.lg.jp/',
  kaiganji: 'https://ja.wikipedia.org/wiki/%E6%B5%B7%E5%B2%B8%E5%AF%BA',
  tabelogCity: 'https://tabelog.com/kagawa/C37404/rstLst/',
  toyota: 'https://travel.rakuten.co.jp/HOTEL/137791/137791.html'
} as const;

export const TADOTSU_ONSEN_PACK_NAMES = [] as const;
export const TADOTSU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TADOTSU_ONSEN_PACK_NAMES);
export const TADOTSU_EXPERIENCE_PACK_NAMES = ['桃陵公園'] as const;
export const TADOTSU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TADOTSU_EXPERIENCE_PACK_NAMES);
export const TADOTSU_STAY_PACK_NAMES = [] as const;
export const TADOTSU_STAY_PACK_SET: ReadonlySet<string> = new Set(TADOTSU_STAY_PACK_NAMES);
export const TADOTSU_SHOPPING_PACK_NAMES = [] as const;
export const TADOTSU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TADOTSU_SHOPPING_PACK_NAMES);

export const TADOTSU_SIGHT_PINS = ['海岸寺','多度津駅','多度津港'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TADOTSU_TRAVEL_ACCESSED};
}
export const TADOTSU_TRAVEL_STAY: readonly TravelRow[] = [
  stay('tadotsu-stay-01', 'ホテル　トヨタ', '香川県仲多度郡多度津町栄町3-2-10', '0877-33-0088', 'https://travel.rakuten.co.jp/HOTEL/137791/137791.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TADOTSU_TRAVEL_ACCESSED};
}
export const TADOTSU_TRAVEL_DINING: readonly TravelRow[] = [

  dining('tadotsu-dining-01', '焼き肉専門店 成屋', '香川県仲多度郡多度津町北鴨2-580-1', '0877-85-3929', 'https://tabelog.com/kagawa/A3702/A370202/37009890/'),
  dining('tadotsu-dining-02', 'Base65Plus', '香川県仲多度郡多度津町庄874-1', '0877-35-9282', 'https://tabelog.com/kagawa/A3702/A370202/37014118/'),
  dining('tadotsu-dining-03', '海食処 笑門家', '香川県仲多度郡多度津町東浜7-11', '0877-32-1331', 'https://tabelog.com/kagawa/A3702/A370202/37003262/'),
  dining('tadotsu-dining-04', '讃岐らぁ麺 伊吹いりこセンター 根ッCO LABO 多度津店', '香川県仲多度郡多度津町青木565-2', '080-8640-6701', 'https://tabelog.com/kagawa/A3702/A370202/37014692/'),
  dining('tadotsu-dining-05', '家中舎', '香川県仲多度郡多度津町家中4-25', '0877-35-8765', 'https://tabelog.com/kagawa/A3702/A370202/37012381/'),
  dining('tadotsu-dining-06', 'ひろ濱うどん', '香川県仲多度郡多度津町堀江2-161-8', '0877-32-4455', 'https://tabelog.com/kagawa/A3702/A370202/37000680/'),
  dining('tadotsu-dining-07', 'すずめの酒場', '香川県仲多度郡多度津町本通1-3-18 おのみち屋内', '0877-89-3587', 'https://tabelog.com/kagawa/A3702/A370202/37014261/'),
  dining('tadotsu-dining-08', 'お好み焼 よこた', '香川県仲多度郡多度津町大通り4-22', '0877-33-1503', 'https://tabelog.com/kagawa/A3702/A370202/37004238/'),
  dining('tadotsu-dining-09', '御晩菜 糸', '香川県仲多度郡多度津町仲ノ町4-5', '090-3871-3507', 'https://tabelog.com/kagawa/A3702/A370202/37014340/'),
  dining('tadotsu-dining-10', 'わかやま', '香川県仲多度郡多度津町東浜4-14', '0877-32-2864', 'https://tabelog.com/kagawa/A3702/A370202/37003831/'),
  dining('tadotsu-dining-11', '絹の館', '香川県仲多度郡多度津町東白方285-1', '0877-89-9796', 'https://tabelog.com/kagawa/A3702/A370202/37014119/'),
  dining('tadotsu-dining-12', '麦笑', '香川県仲多度郡多度津町葛原857-6', null, 'https://tabelog.com/kagawa/A3702/A370202/37010071/'),
  dining('tadotsu-dining-13', '根ッ子', '香川県仲多度郡多度津町青木565-2', null, 'https://tabelog.com/kagawa/A3702/A370202/37013805/'),
  dining('tadotsu-dining-14', '上海軒', '香川県仲多度郡多度津町家中1-12', '0877-33-3959', 'https://tabelog.com/kagawa/A3702/A370202/37000162/'),
  dining('tadotsu-dining-15', '焼き小屋 さと', '香川県仲多度郡多度津町西白方245-1', '090-4500-7873', 'https://tabelog.com/kagawa/A3702/A370202/37009609/'),
  dining('tadotsu-dining-16', '台湾料理 趙記', '香川県仲多度郡多度津町西浜12-7', '0877-88-8388', 'https://tabelog.com/kagawa/A3702/A370202/37011885/'),
];

export const TADOTSU_DINING_NAME_SET: ReadonlySet<string> = new Set(TADOTSU_TRAVEL_DINING.map((row) => row.name_ja));
export const TADOTSU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TADOTSU_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TADOTSU_TRAVEL_ALL: readonly TravelRow[] = [...TADOTSU_TRAVEL_DINING, ...TADOTSU_TRAVEL_STAY, ...TADOTSU_TRAVEL_SHOPPING, ...TADOTSU_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTadotsuOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TADOTSU_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTadotsuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TADOTSU_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTadotsuStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTadotsuShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTadotsuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TADOTSU_DINING_NAME_SET.has(row.name_ja);
}
export function tadotsuSightPhoto(nameJa: string): MimaPlacePhoto | null { return TADOTSU_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTadotsuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTadotsuOnsenPackRow(row) && !isTadotsuExperiencePackRow(row) && !isTadotsuStayPackRow(row) && !isTadotsuDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TADOTSU_SIGHT_PINS) {
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
export function tadotsuSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '多度津町 飲食案内' : 'Tadotsu dining list';
  if (row.category === 'stay') return locale === 'ja' ? '多度津町 宿泊案内' : 'Tadotsu lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '多度津町 買物案内' : 'Tadotsu shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function tadotsuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTadotsuOnsenPackRow(row)) return 'onsen';
  if (isTadotsuExperiencePackRow(row)) return 'experience';
  if (isTadotsuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTadotsuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function tadotsuPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTadotsuOnsenPackRow(row) && !isTadotsuExperiencePackRow(row) && !isTadotsuStayPackRow(row) && !isTadotsuDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTadotsuOnsenPackRow(row);
  if (filter === 'experience') return isTadotsuExperiencePackRow(row);
  if (filter === 'stay') return isTadotsuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTadotsuFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TADOTSU_HALL = TADOTSU.hall;
