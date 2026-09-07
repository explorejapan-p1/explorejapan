/**
 * Kaiyo travel layer. Pack tourism has inns/onsen/camps without room or bath photos.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 海陽町 (C36388) public shop pages with FOOD dish heroes.
 * Shopping: 道の駅 pack name with place-named Commons exterior (not bath photos).
 * Do not copy 牟岐 / 美波 / 那賀 / 佐那河内 / 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KAIYO, KAIYO_SIGHT_PHOTOS} from './kaiyo';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KAIYO_TRAVEL_ACCESSED = '2026-09-07' as const;

export const KAIYO_TRAVEL_SOURCES = {
  home: 'https://www.town.kaiyo.lg.jp/',
  hall: 'https://www.town.kaiyo.lg.jp/docs/2011041300637/',
  kanko: 'https://www.town.kaiyo.lg.jp/docs/2024082800028/',
  tabelogCity: 'https://tabelog.com/tokushima/C36388/rstLst/'
} as const;

export const KAIYO_ONSEN_PACK_NAMES = [] as const;
export const KAIYO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KAIYO_ONSEN_PACK_NAMES);
export const KAIYO_STAY_PACK_NAMES = [] as const;
export const KAIYO_STAY_PACK_SET: ReadonlySet<string> = new Set(KAIYO_STAY_PACK_NAMES);
export const KAIYO_SHOPPING_PACK_NAMES = ['海陽町宍喰観光ターミナル（道の駅宍喰温泉）'] as const;
export const KAIYO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KAIYO_SHOPPING_PACK_NAMES);
export const KAIYO_SIGHT_PINS = ['海陽町漁火の森公園施設'] as const;
export const KAIYO_TRAVEL_STAY: readonly TravelRow[] = [];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KAIYO_TRAVEL_ACCESSED};
}
function shopping(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'shopping', address, phone, source_url, accessed: KAIYO_TRAVEL_ACCESSED};
}

export const KAIYO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('kaiyo-dining-01', "味政", "徳島県海部郡海陽町浅川字大田30-1", "0884-73-0500", "https://tabelog.com/tokushima/A3602/A360204/36004755/"),
  dining('kaiyo-dining-02', "ひこうせん", "徳島県海部郡海陽町宍喰浦字古目82-2", "0884-76-3488", "https://tabelog.com/tokushima/A3602/A360204/36000074/"),
  dining('kaiyo-dining-03', "ホテルリビエラししくい レストランベガ", "徳島県海部郡海陽町宍喰浦字松原226-1 ホテルリビエラししくい1F", "0884-76-3300", "https://tabelog.com/tokushima/A3602/A360204/36004397/"),
  dining('kaiyo-dining-04', "のなみ", "徳島県海部郡海陽町奥浦西分28-2", "0884-73-0662", "https://tabelog.com/tokushima/A3602/A360204/36000079/"),
  dining('kaiyo-dining-05', "カピタン", "徳島県海部郡海陽町大里杉谷15-3", "0884-73-3410", "https://tabelog.com/tokushima/A3602/A360204/36000988/"),
  dining('kaiyo-dining-06', "笑舌", "徳島県海部郡海陽町奥浦字町内133-1", "0884-73-4016", "https://tabelog.com/tokushima/A3602/A360204/36003999/"),
  dining('kaiyo-dining-07', "ももや食堂", "徳島県海部郡海陽町奥浦字新町59-1", "0884-73-2451", "https://tabelog.com/tokushima/A3602/A360204/36000571/"),
  dining('kaiyo-dining-08', "遊遊NASA", "徳島県海部郡海陽町奥浦字鹿ヶ谷58-3", "0884-73-0300", "https://tabelog.com/tokushima/A3602/A360204/36007333/"),
  dining('kaiyo-dining-09', "道の駅 宍喰温泉", "徳島県海部郡海陽町久保字板取219-6", "0884-76-3442", "https://tabelog.com/tokushima/A3602/A360204/36006408/"),
  dining('kaiyo-dining-10', "海賊の家", "徳島県海部郡海陽町宍喰浦古目84-4", "0884-76-2707", "https://tabelog.com/tokushima/A3602/A360204/36002916/"),
  dining('kaiyo-dining-11', "パン デ パパ", "徳島県海部郡海陽町大里字松ノ本64", "0884-73-3277", "https://tabelog.com/tokushima/A3602/A360204/36007487/"),
  dining('kaiyo-dining-12', "豚皇  那佐店", "徳島県海部郡海陽町宍喰浦字那佐281-14", "0884-76-2702", "https://tabelog.com/tokushima/A3602/A360204/36003554/"),
  dining('kaiyo-dining-13', "ホウライドウ ピアカイフ店", "徳島県海部郡海陽町奥浦町内200 ショッピングセンターPIA KAIFU内", "0884-73-3992", "https://tabelog.com/tokushima/A3602/A360204/36007603/"),
  dining('kaiyo-dining-14', "さばせ大福", "徳島県海部郡海陽町浅川鯖瀬口73-1", null, "https://tabelog.com/tokushima/A3602/A360204/36000769/"),
  dining('kaiyo-dining-15', "Le Perle", "徳島県海部郡海陽町大里字松の本51-6", "0884-73-3167", "https://tabelog.com/tokushima/A3602/A360204/36003487/"),
  dining('kaiyo-dining-16', "レックス カフェ", "徳島県海部郡海陽町鞆浦字山下10-12", "0884-73-2963", "https://tabelog.com/tokushima/A3602/A360204/36007003/"),
  dining('kaiyo-dining-17', "陽錦楼", "徳島県海部郡海陽町四方原大道西40-6", "0884-73-3130", "https://tabelog.com/tokushima/A3602/A360204/36000986/"),
  dining('kaiyo-dining-18', "バハティ", "徳島県海部郡海陽町久保板取222-1", "0884-76-2696", "https://tabelog.com/tokushima/A3602/A360204/36000609/"),
  dining('kaiyo-dining-19', "宝来堂", "徳島県海部郡海陽町奥浦字新町53", "0884-73-0510", "https://tabelog.com/tokushima/A3602/A360204/36004753/"),
];

export const KAIYO_DINING_NAME_SET: ReadonlySet<string> = new Set(KAIYO_TRAVEL_DINING.map((row) => row.name_ja));

export const KAIYO_TRAVEL_SHOPPING: readonly TravelRow[] = [
  shopping('kaiyo-shopping-01', '海陽町宍喰観光ターミナル（道の駅宍喰温泉）', '徳島県海部郡海陽町久保字板取219-6', '0884-76-3442', 'https://www.town.kaiyo.lg.jp/docs/2024082800028/')
];

export const KAIYO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KAIYO_TRAVEL_ALL: readonly TravelRow[] = [...KAIYO_TRAVEL_DINING, ...KAIYO_TRAVEL_STAY, ...KAIYO_TRAVEL_SHOPPING, ...KAIYO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKaiyoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAIYO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKaiyoExperiencePackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKaiyoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKaiyoShoppingPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return KAIYO_SHOPPING_PACK_SET.has(row.name_ja);
}
export function kaiyoSightPhoto(nameJa: string): MimaPlacePhoto | null { return KAIYO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKaiyoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKaiyoOnsenPackRow(row) && !isKaiyoStayPackRow(row) && !isKaiyoShoppingPackRow(row) && !KAIYO_DINING_NAME_SET.has(row.name_ja));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KAIYO_SIGHT_PINS) { const hit = sights.find((row) => row.name_ja === pin); if (!hit) continue; pinned.push(hit); used.add(hit.id); usedNames.add(hit.name_ja); }
  const restTourism: T[] = []; const restCultural: T[] = [];
  for (const row of sights) { if (used.has(row.id) || usedNames.has(row.name_ja)) continue; used.add(row.id); usedNames.add(row.name_ja); if (row.category === 'tourism') restTourism.push(row); else restCultural.push(row); }
  return [...pinned, ...restTourism, ...restCultural];
}
export function kaiyoSourcedHook(row: {name_ja: string; address: string | null; category: string}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '海陽町 飲食案内' : 'Kaiyo dining list';
  if (row.category === 'stay') return locale === 'ja' ? '海陽町 宿泊案内' : 'Kaiyo lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '海陽町 買物案内' : 'Kaiyo shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kaiyoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKaiyoOnsenPackRow(row)) return 'onsen';
  if (isKaiyoStayPackRow(row)) return 'stay';
  if (isKaiyoShoppingPackRow(row)) return 'shopping';
  if (KAIYO_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kaiyoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKaiyoOnsenPackRow(row) && !isKaiyoStayPackRow(row) && !isKaiyoShoppingPackRow(row) && !KAIYO_DINING_NAME_SET.has(nameJa);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKaiyoOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isKaiyoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKaiyoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KAIYO_HALL = KAIYO.hall;
