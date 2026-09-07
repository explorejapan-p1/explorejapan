/**
 * Manno Town travel layer. No frozen pack.
 * Dining from 食べログ まんのう町 (C37406). Stay: Yuyamaso Asan Rakuten room. Onsen: distinct bath key. Experience: 道の駅ことなみ.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MANNO, MANNO_SIGHT_PHOTOS} from './manno';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MANNO_TRAVEL_ACCESSED = '2026-09-08' as const;
export const MANNO_TRAVEL_SOURCES = {
  home: 'https://www.town.manno.lg.jp/', hall: 'https://www.town.manno.lg.jp/',
  kankou: 'https://www.town.manno.lg.jp/',
  park: 'https://ja.wikipedia.org/wiki/%E5%9B%BD%E5%96%B6%E8%B3%9B%E5%B2%90%E3%81%BE%E3%82%93%E3%81%AE%E3%81%86%E5%85%AC%E5%9C%92',
  tabelogCity: 'https://tabelog.com/kagawa/C37406/rstLst/',
  asan: 'https://travel.rakuten.co.jp/HOTEL/161204/161204.html'
} as const;

export const MANNO_ONSEN_PACK_NAMES = ['湯山荘　阿讃琴南 大浴場'] as const;
export const MANNO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MANNO_ONSEN_PACK_NAMES);
export const MANNO_EXPERIENCE_PACK_NAMES = ['道の駅ことなみ'] as const;
export const MANNO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MANNO_EXPERIENCE_PACK_NAMES);
export const MANNO_STAY_PACK_NAMES = [] as const;
export const MANNO_STAY_PACK_SET: ReadonlySet<string> = new Set(MANNO_STAY_PACK_NAMES);
export const MANNO_SHOPPING_PACK_NAMES = [] as const;
export const MANNO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MANNO_SHOPPING_PACK_NAMES);

export const MANNO_SIGHT_PINS = ['国営讃岐まんのう公園','満濃池','まんのう天文台','ひまわりの里','かりんの丘公園','小橋の滝'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MANNO_TRAVEL_ACCESSED};
}
export const MANNO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('manno-stay-01', '湯山荘　阿讃琴南', '香川県仲多度郡まんのう町勝浦１', null, 'https://travel.rakuten.co.jp/HOTEL/161204/161204.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MANNO_TRAVEL_ACCESSED};
}
export const MANNO_TRAVEL_DINING: readonly TravelRow[] = [

  dining('manno-dining-01', 'グリーンパークまんのう', '香川県仲多度郡まんのう町吉野4243-12 国営讃岐まんのう公園内', '0877-79-1730', 'https://tabelog.com/kagawa/A3703/A370302/37010908/'),
  dining('manno-dining-02', 'ハニル', '香川県仲多度郡まんのう町羽間2159', '0877-73-3066', 'https://tabelog.com/kagawa/A3703/A370302/37003306/'),
  dining('manno-dining-03', '山神うどん', '香川県仲多度郡まんのう町公文839', '0877-73-2438', 'https://tabelog.com/kagawa/A3703/A370302/37000691/'),
  dining('manno-dining-04', 'かがわ', '香川県仲多度郡まんのう町造田1963-5', null, 'https://tabelog.com/kagawa/A3703/A370302/37014659/'),
  dining('manno-dining-05', '宮崎地鶏 寿', '香川県仲多度郡まんのう町吉野2656-1', '0877-89-6814', 'https://tabelog.com/kagawa/A3703/A370302/37013145/'),
  dining('manno-dining-06', 'sevenplace 糀処', '香川県仲多度郡まんのう町七箇3034', null, 'https://tabelog.com/kagawa/A3703/A370302/37014593/'),
  dining('manno-dining-07', 'フルーツサンド専門店 Yemonya', '香川県仲多度郡まんのう町公文403-1', '0877-85-6396', 'https://tabelog.com/kagawa/A3703/A370302/37011906/'),
  dining('manno-dining-08', 'そば処　おいで家', '香川県仲多度郡まんのう町川東1438-3', '0877-56-0511', 'https://tabelog.com/kagawa/A3703/A370302/37004698/'),
  dining('manno-dining-09', '旬菜旬魚 いえもんや', '香川県仲多度郡まんのう町公文403-1', '0877-85-6393', 'https://tabelog.com/kagawa/A3703/A370302/37009276/'),
  dining('manno-dining-10', '食彩茶屋華凛', '香川県仲多度郡まんのう町四條新道218-5', '0877-73-5855', 'https://tabelog.com/kagawa/A3703/A370302/37001878/'),
  dining('manno-dining-11', '長田うどん', '香川県仲多度郡まんのう町吉野1290-1', '0877-79-2171', 'https://tabelog.com/kagawa/A3703/A370302/37000005/'),
  dining('manno-dining-12', '岡田うどん', '香川県仲多度郡まんのう町四條576-3', '0877-75-2571', 'https://tabelog.com/kagawa/A3703/A370302/37002376/'),
  dining('manno-dining-13', '山よし 佐文店', '香川県仲多度郡まんのう町佐文802-1', '0877-43-7567', 'https://tabelog.com/kagawa/A3703/A370302/37010082/'),
  dining('manno-dining-14', 'うまか房の食卓', '香川県仲多度郡まんのう町吉野下1081-1', '0877-58-9038', 'https://tabelog.com/kagawa/A3703/A370302/37002784/'),
  dining('manno-dining-15', 'ホット ショップ タカノ', '香川県仲多度郡まんのう町造田1805-2', '0877-85-2301', 'https://tabelog.com/kagawa/A3703/A370302/37008164/'),
  dining('manno-dining-16', 'おらん家', '香川県仲多度郡まんのう町西高篠374-4', '0877-73-3403', 'https://tabelog.com/kagawa/A3703/A370302/37002022/'),
];

export const MANNO_DINING_NAME_SET: ReadonlySet<string> = new Set(MANNO_TRAVEL_DINING.map((row) => row.name_ja));
export const MANNO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MANNO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MANNO_TRAVEL_ALL: readonly TravelRow[] = [...MANNO_TRAVEL_DINING, ...MANNO_TRAVEL_STAY, ...MANNO_TRAVEL_SHOPPING, ...MANNO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMannoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MANNO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMannoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MANNO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMannoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMannoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMannoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MANNO_DINING_NAME_SET.has(row.name_ja);
}
export function mannoSightPhoto(nameJa: string): MimaPlacePhoto | null { return MANNO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMannoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMannoOnsenPackRow(row) && !isMannoExperiencePackRow(row) && !isMannoStayPackRow(row) && !isMannoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MANNO_SIGHT_PINS) {
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
export function mannoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? 'まんのう町 飲食案内' : 'Manno dining list';
  if (row.category === 'stay') return locale === 'ja' ? 'まんのう町 宿泊案内' : 'Manno lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? 'まんのう町 買物案内' : 'Manno shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function mannoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMannoOnsenPackRow(row)) return 'onsen';
  if (isMannoExperiencePackRow(row)) return 'experience';
  if (isMannoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMannoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function mannoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMannoOnsenPackRow(row) && !isMannoExperiencePackRow(row) && !isMannoStayPackRow(row) && !isMannoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMannoOnsenPackRow(row);
  if (filter === 'experience') return isMannoExperiencePackRow(row);
  if (filter === 'stay') return isMannoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMannoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const MANNO_HALL = MANNO.hall;
