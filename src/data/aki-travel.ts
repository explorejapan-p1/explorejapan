/**
 * Aki City travel layer. No frozen pack.
 * Dining from 食べログ 安芸市 (C39203). Stay: Hotel TAMAI Rakuten room. Onsen: honest 0 (no attributable 大浴場 keys; stay room ≠ onsen). Experience: 安芸市書道美術館.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {AKI, AKI_SIGHT_PHOTOS} from './aki';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const AKI_TRAVEL_ACCESSED = '2026-09-08' as const;
export const AKI_TRAVEL_SOURCES = {
  home: 'https://www.city.aki.kochi.jp/', hall: 'https://www.city.aki.kochi.jp/life/dtl.php?hdnKey=12',
  kankou: 'https://www.akikanko.or.jp/',
  noradokei: 'https://www.city.aki.kochi.jp/life/dtl.php?hdnKey=42',
  tabelogCity: 'https://tabelog.com/kochi/C39203/rstLst/',
  tamai: 'https://travel.rakuten.co.jp/HOTEL/20497/20497.html'
} as const;

export const AKI_ONSEN_PACK_NAMES = [] as const;
export const AKI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(AKI_ONSEN_PACK_NAMES);
export const AKI_EXPERIENCE_PACK_NAMES = ['安芸市書道美術館'] as const;
export const AKI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(AKI_EXPERIENCE_PACK_NAMES);
export const AKI_STAY_PACK_NAMES = [] as const;
export const AKI_STAY_PACK_SET: ReadonlySet<string> = new Set(AKI_STAY_PACK_NAMES);
export const AKI_SHOPPING_PACK_NAMES = [] as const;
export const AKI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(AKI_SHOPPING_PACK_NAMES);

export const AKI_SIGHT_PINS = ['野良時計','安芸城跡','伊尾木洞','岩崎弥太郎生家','安芸駅','安芸市立歴史民俗資料館'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: AKI_TRAVEL_ACCESSED};
}
export const AKI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('aki-stay-01', 'ホテルＴＡＭＡＩ', '高知県安芸市矢ノ丸1-6', '0887-35-2111', 'https://travel.rakuten.co.jp/HOTEL/20497/20497.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: AKI_TRAVEL_ACCESSED};
}
export const AKI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('aki-dining-01', '食酒家 KITENA', '高知県安芸市矢ノ丸3-1-7', '0887-32-0228', 'https://tabelog.com/kochi/A3902/A390201/39008213/'),
  dining('aki-dining-02', 'アップル', '高知県安芸市久世町1-8', '0887-35-4281', 'https://tabelog.com/kochi/A3902/A390201/39001774/'),
  dining('aki-dining-03', '百人一酒', '高知県安芸市矢ノ丸1-6-19', '0887-35-2575', 'https://tabelog.com/kochi/A3902/A390201/39003750/'),
  dining('aki-dining-04', 'メリーガーデンカフェ', '高知県安芸市川北甲 6951', '0887-32-0650', 'https://tabelog.com/kochi/A3902/A390201/39006854/'),
  dining('aki-dining-05', '寺尾鮮魚店', '高知県安芸市本町3-8-26', '0887-34-3531', 'https://tabelog.com/kochi/A3902/A390201/39005925/'),
  dining('aki-dining-06', 'シェヌー', '高知県安芸市下山1626-1', '0887-34-3666', 'https://tabelog.com/kochi/A3902/A390201/39000622/'),
  dining('aki-dining-07', '晴食堂', '高知県安芸市千歳町10-10', '090-9779-6899', 'https://tabelog.com/kochi/A3902/A390201/39006647/'),
  dining('aki-dining-08', '横田ベーカリーナポリ', '高知県安芸市本町1丁目11-19', '0887-35-2957', 'https://tabelog.com/kochi/A3902/A390201/39003793/'),
  dining('aki-dining-09', 'ジャスト', '高知県安芸市本町5-20-12', '0887-35-3693', 'https://tabelog.com/kochi/A3902/A390201/39001390/'),
  dining('aki-dining-10', 'わじき屋 分店', '高知県安芸市本町3-2-31', '0887-35-2250', 'https://tabelog.com/kochi/A3902/A390201/39007802/'),
  dining('aki-dining-11', 'カフェ ハラーノ', '高知県安芸市川北乙1607-9', '090-8042-4089', 'https://tabelog.com/kochi/A3902/A390201/39007226/'),
  dining('aki-dining-12', '国虎屋', '高知県安芸市穴内乙683-1', '0887-35-3448', 'https://tabelog.com/kochi/A3902/A390201/39000032/'),
  dining('aki-dining-13', '浜幸 安芸店', '高知県安芸市庄之芝1-52', '0887-34-2880', 'https://tabelog.com/kochi/A3902/A390201/39004670/'),
  dining('aki-dining-14', '居酒屋 夜行虎', '高知県安芸市本町1-11-15', '0887-34-0456', 'https://tabelog.com/kochi/A3902/A390201/39006534/'),
  dining('aki-dining-15', '一音灯', '高知県安芸市下山2427-12', '050-5475-7830', 'https://tabelog.com/kochi/A3902/A390201/39008627/'),
  dining('aki-dining-16', 'りすぼん', '高知県安芸市矢ノ丸4-2-32', '0887-34-1444', 'https://tabelog.com/kochi/A3902/A390201/39002081/'),
];

export const AKI_DINING_NAME_SET: ReadonlySet<string> = new Set(AKI_TRAVEL_DINING.map((row) => row.name_ja));
export const AKI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const AKI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const AKI_TRAVEL_ALL: readonly TravelRow[] = [...AKI_TRAVEL_DINING, ...AKI_TRAVEL_STAY, ...AKI_TRAVEL_SHOPPING, ...AKI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isAkiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isAkiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isAkiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAkiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAkiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKI_DINING_NAME_SET.has(row.name_ja);
}
export function akiSightPhoto(nameJa: string): MimaPlacePhoto | null { return AKI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankAkiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isAkiOnsenPackRow(row) && !isAkiExperiencePackRow(row) && !isAkiStayPackRow(row) && !isAkiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of AKI_SIGHT_PINS) {
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
export function akiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '安芸市 飲食案内' : 'Aki City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '安芸市 宿泊案内' : 'Aki City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '安芸市 買物案内' : 'Aki City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function akiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isAkiOnsenPackRow(row)) return 'onsen';
  if (isAkiExperiencePackRow(row)) return 'experience';
  if (isAkiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isAkiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function akiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isAkiOnsenPackRow(row) && !isAkiExperiencePackRow(row) && !isAkiStayPackRow(row) && !isAkiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isAkiOnsenPackRow(row);
  if (filter === 'experience') return isAkiExperiencePackRow(row);
  if (filter === 'stay') return isAkiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveAkiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const AKI_HALL = AKI.hall;
