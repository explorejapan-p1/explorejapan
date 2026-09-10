/**
 * Masaki Town travel layer. No frozen pack.
 * Dining from 食べログ 松前町 (C38401)×16 with dish JPGs. Stay: 0 (no Rakuten address ∈ 松前町). Onsen: 0 (元気人村 day-bath lacks licensed facility bath still). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MASAKI, MASAKI_SIGHT_PHOTOS} from './masaki';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MASAKI_TRAVEL_ACCESSED = '2026-09-10' as const;
export const MASAKI_TRAVEL_SOURCES = {
  home: 'https://www.town.masaki.ehime.jp/', hall: 'https://www.town.masaki.ehime.jp/',
  kanko: 'https://www.town.masaki.ehime.jp/kanko/',
  emifull: 'https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%9F%E3%83%95%E3%83%ABMASAKI',
  tabelogCity: 'https://tabelog.com/ehime/C38401/rstLst/'
} as const;

export const MASAKI_ONSEN_PACK_NAMES = [] as const;
export const MASAKI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MASAKI_ONSEN_PACK_NAMES);
export const MASAKI_EXPERIENCE_PACK_NAMES = [] as const;
export const MASAKI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MASAKI_EXPERIENCE_PACK_NAMES);
export const MASAKI_STAY_PACK_NAMES = [] as const;
export const MASAKI_STAY_PACK_SET: ReadonlySet<string> = new Set(MASAKI_STAY_PACK_NAMES);
export const MASAKI_SHOPPING_PACK_NAMES = [] as const;
export const MASAKI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MASAKI_SHOPPING_PACK_NAMES);

export const MASAKI_SIGHT_PINS = ["エミフルMASAKI", "松前公園", "塩屋海岸", "松前城跡"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MASAKI_TRAVEL_ACCESSED};
}
export const MASAKI_TRAVEL_STAY: readonly TravelRow[] = [];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MASAKI_TRAVEL_ACCESSED};
}
export const MASAKI_TRAVEL_DINING: readonly TravelRow[] = [
  dining("masaki-dining-01", "Eggs 'n Things エミフルMASAKI店", "愛媛県伊予郡松前町筒井850", "089-989-8855", "https://tabelog.com/ehime/A3801/A380103/38014030/"),
  dining("masaki-dining-02", "淡路島バーガースタンド 松前店", "愛媛県伊予郡松前町筒井356-1", "089-989-6760", "https://tabelog.com/ehime/A3801/A380103/38015028/"),
  dining("masaki-dining-03", "boulangerie COUPE depuis2014", "愛媛県伊予郡松前町大字東古泉677-1", "089-906-5550", "https://tabelog.com/ehime/A3801/A380103/38011980/"),
  dining("masaki-dining-04", "川崎屋", "愛媛県伊予郡松前町浜460", "089-984-1056", "https://tabelog.com/ehime/A3801/A380103/38006131/"),
  dining("masaki-dining-05", "とんび家", "愛媛県伊予郡松前町筒井850", "089-985-5355", "https://tabelog.com/ehime/A3801/A380103/38006836/"),
  dining("masaki-dining-06", "シャトレーゼ 松前店", "愛媛県伊予郡松前町筒井字中須賀400-1", "089-985-4655", "https://tabelog.com/ehime/A3801/A380103/38014174/"),
  dining("masaki-dining-07", "からあげのすたみな亭 松前本店", "愛媛県伊予郡松前町大字西古泉576-1", "089-984-0646", "https://tabelog.com/ehime/A3801/A380103/38006262/"),
  dining("masaki-dining-08", "ザ・どん エミフルMASAKI店", "愛媛県伊予郡松前町筒井850", "089-985-0100", "https://tabelog.com/ehime/A3801/A380103/38006662/"),
  dining("masaki-dining-09", "のむら", "愛媛県伊予郡松前町東古泉475-6", "089-984-6114", "https://tabelog.com/ehime/A3801/A380103/38000442/"),
  dining("masaki-dining-10", "白川", "愛媛県伊予郡松前町昌農地41-5", "089-985-2499", "https://tabelog.com/ehime/A3801/A380103/38001358/"),
  dining("masaki-dining-11", "ピザ・ロイヤルハット 松前店", "愛媛県伊予郡松前町浜807", "089-984-7766", "https://tabelog.com/ehime/A3801/A380103/38007983/"),
  dining("masaki-dining-12", "ルピシア 松前店", "愛媛県伊予郡松前町筒井850番", "089-960-3303", "https://tabelog.com/ehime/A3801/A380103/38008561/"),
  dining("masaki-dining-13", "えびすだこ", "愛媛県伊予郡松前町筒井1413-10", "080-5788-8989", "https://tabelog.com/ehime/A3801/A380103/38015126/"),
  dining("masaki-dining-14", "リンガーハット 伊予松前店", "愛媛県伊予郡松前町北黒田347-1", "089-961-6167", "https://tabelog.com/ehime/A3801/A380103/38006314/"),
  dining("masaki-dining-15", "サーティワンアイスクリーム エミフルMASAKI店", "愛媛県伊予郡松前町筒井850", "089-907-3931", "https://tabelog.com/ehime/A3801/A380103/38007581/"),
  dining("masaki-dining-16", "びっくりドンキー 伊予松前店", "愛媛県伊予郡松前町恵久美620", "089-989-0555", "https://tabelog.com/ehime/A3801/A380103/38016943/"),
];
export const MASAKI_DINING_NAME_SET: ReadonlySet<string> = new Set(MASAKI_TRAVEL_DINING.map((row) => row.name_ja));
export const MASAKI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MASAKI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MASAKI_TRAVEL_ALL: readonly TravelRow[] = [...MASAKI_TRAVEL_DINING, ...MASAKI_TRAVEL_STAY, ...MASAKI_TRAVEL_SHOPPING, ...MASAKI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMasakiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MASAKI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMasakiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MASAKI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMasakiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMasakiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMasakiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MASAKI_DINING_NAME_SET.has(row.name_ja);
}
export function masakiSightPhoto(nameJa: string): MimaPlacePhoto | null { return MASAKI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMasakiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMasakiOnsenPackRow(row) && !isMasakiExperiencePackRow(row) && !isMasakiStayPackRow(row) && !isMasakiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MASAKI_SIGHT_PINS) {
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
export function masakiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '松前町 飲食案内' : 'Masaki Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '松前町 宿泊案内' : 'Masaki Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '松前町 買物案内' : 'Masaki Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function masakiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMasakiOnsenPackRow(row)) return 'onsen';
  if (isMasakiExperiencePackRow(row)) return 'experience';
  if (isMasakiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMasakiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function masakiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMasakiOnsenPackRow(row) && !isMasakiExperiencePackRow(row) && !isMasakiStayPackRow(row) && !isMasakiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMasakiOnsenPackRow(row);
  if (filter === 'experience') return isMasakiExperiencePackRow(row);
  if (filter === 'stay') return isMasakiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMasakiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'dining';
}
export const MASAKI_HALL = MASAKI.hall;
