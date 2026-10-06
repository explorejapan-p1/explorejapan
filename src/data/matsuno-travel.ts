/**
 * Matsuno Town travel layer. No frozen pack.
 * Dining from 食べログ 松野町 (C38484)×16 with dish JPGs. Stay: Rakuten 部屋 stills×1. Onsen: facility bath still×1 (stay≠onsen EXTRA name). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MATSUNO, MATSUNO_SIGHT_PHOTOS} from './matsuno';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MATSUNO_TRAVEL_ACCESSED = '2026-09-10' as const;
export const MATSUNO_TRAVEL_SOURCES = {
  home: 'https://www.town.matsuno.ehime.jp/', hall: 'https://www.town.matsuno.ehime.jp/soshiki/1.html',
  kanko: 'https://matsuno-kankou.com/',
  nametoko: 'https://ja.wikipedia.org/wiki/%E6%BB%91%E5%BA%8A%E6%B8%93%E8%B0%B7',
  yukiwa: 'https://ja.wikipedia.org/wiki/%E9%9B%AA%E8%BC%AA%E3%81%AE%E6%BB%9D',
  nijinomori: 'https://www.wikidata.org/wiki/Q11641492',
  lodge: 'https://morino-kuni.com/riverside-lodge/',
  tabelogCity: 'https://tabelog.com/ehime/C38484/rstLst/'
} as const;

export const MATSUNO_ONSEN_PACK_NAMES = ["四万十川源流、森の国　水際のロッジ 風呂"] as const;
export const MATSUNO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MATSUNO_ONSEN_PACK_NAMES);
export const MATSUNO_EXPERIENCE_PACK_NAMES = [] as const;
export const MATSUNO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MATSUNO_EXPERIENCE_PACK_NAMES);
export const MATSUNO_STAY_PACK_NAMES = [] as const;
export const MATSUNO_STAY_PACK_SET: ReadonlySet<string> = new Set(MATSUNO_STAY_PACK_NAMES);
export const MATSUNO_SHOPPING_PACK_NAMES = [] as const;
export const MATSUNO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MATSUNO_SHOPPING_PACK_NAMES);

export const MATSUNO_SIGHT_PINS = ["雪輪の滝", "滑床渓谷", "虹の森公園", "虹の森おさかな館", "松丸駅", "三筋の滝"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MATSUNO_TRAVEL_ACCESSED};
}
export const MATSUNO_TRAVEL_STAY: readonly TravelRow[] = [
  stay("matsuno-stay-001", "四万十川源流、森の国　水際のロッジ", "愛媛県北宇和郡松野町目黒 滑床渓谷", "0895-43-0331", "https://travel.rakuten.co.jp/HOTEL/178513/178513.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MATSUNO_TRAVEL_ACCESSED};
}
export const MATSUNO_TRAVEL_DINING: readonly TravelRow[] = [
  dining("matsuno-dining-01", "レストラン遊鶴羽", "愛媛県北宇和郡松野町延野々1510-1 虹の森公園内", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38005525/"),
  dining("matsuno-dining-02", "CAFE&PUB TOMMY", "愛媛県北宇和郡松野町松丸227-2", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38006467/"),
  dining("matsuno-dining-03", "虹の森おさかな館喫茶コーナー", "愛媛県北宇和郡松野町延野々1510-1 虹の森公園", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38008615/"),
  dining("matsuno-dining-04", "セルバッジオ", "愛媛県北宇和郡松野町目黒 滑床渓谷 水際のロッジ 1F", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38013361/"),
  dining("matsuno-dining-05", "森とパン", "愛媛県北宇和郡松野町大字目黒386-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38013521/"),
  dining("matsuno-dining-06", "パン工房 &パン", "愛媛県北宇和郡松野町延野々1510-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38015040/"),
  dining("matsuno-dining-07", "こむぎ屋", "愛媛県北宇和郡松野町吉野655", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38015190/"),
  dining("matsuno-dining-08", "笑食寝 たきぐち", "愛媛県北宇和郡松野町豊岡4455-2", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38015241/"),
  dining("matsuno-dining-09", "甘味 霧中", "愛媛県北宇和郡松野町松丸88", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38015708/"),
  dining("matsuno-dining-10", "道の駅 虹の森公園まつの", "愛媛県北宇和郡松野町大字延野々1510-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38006193/"),
  dining("matsuno-dining-11", "濱匠", "愛媛県北宇和郡松野町延野々1405-3", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38012182/"),
  dining("matsuno-dining-12", "カフェ ヒミツキッチン", "愛媛県北宇和郡松野町大字豊岡1210", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38016924/"),
  dining("matsuno-dining-13", "水際のロッジ", "愛媛県北宇和郡松野町目黒 滑床渓谷", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38014287/"),
  dining("matsuno-dining-14", "四季の粋", "愛媛県北宇和郡松野町吉野2443", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38011266/"),
  dining("matsuno-dining-15", "森の国の宿あざみ野", "愛媛県北宇和郡松野町大字目黒1430", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380403/38011265/"),
  dining("matsuno-dining-16", "木もれび庵", "愛媛県北宇和郡松野町上家池588", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3804/A380401/38005798/"),
];
export const MATSUNO_DINING_NAME_SET: ReadonlySet<string> = new Set(MATSUNO_TRAVEL_DINING.map((row) => row.name_ja));
export const MATSUNO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MATSUNO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MATSUNO_TRAVEL_ALL: readonly TravelRow[] = [...MATSUNO_TRAVEL_DINING, ...MATSUNO_TRAVEL_STAY, ...MATSUNO_TRAVEL_SHOPPING, ...MATSUNO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMatsunoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MATSUNO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMatsunoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MATSUNO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMatsunoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMatsunoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMatsunoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MATSUNO_DINING_NAME_SET.has(row.name_ja);
}
export function matsunoSightPhoto(nameJa: string): MimaPlacePhoto | null { return MATSUNO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMatsunoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMatsunoOnsenPackRow(row) && !isMatsunoExperiencePackRow(row) && !isMatsunoStayPackRow(row) && !isMatsunoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MATSUNO_SIGHT_PINS) {
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
export function matsunoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '松野町 飲食案内' : 'Matsuno Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '松野町 宿泊案内' : 'Matsuno Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '松野町 買物案内' : 'Matsuno Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function matsunoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMatsunoOnsenPackRow(row)) return 'onsen';
  if (isMatsunoExperiencePackRow(row)) return 'experience';
  if (isMatsunoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMatsunoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function matsunoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMatsunoOnsenPackRow(row) && !isMatsunoExperiencePackRow(row) && !isMatsunoStayPackRow(row) && !isMatsunoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMatsunoOnsenPackRow(row);
  if (filter === 'experience') return isMatsunoExperiencePackRow(row);
  if (filter === 'stay') return isMatsunoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMatsunoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const MATSUNO_HALL = MATSUNO.hall;
