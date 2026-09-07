/**
 * Ino Town travel layer. No frozen pack.
 * Dining from 食べログ いの町 (C39386). Stay: Kamenoi Hotel Kochi Rakuten room. Onsen: honest 0 (no attributable 大浴場 keys; stay room ≠ onsen). Experience: 道の駅土佐和紙工芸村.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {INO, INO_SIGHT_PHOTOS} from './ino';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const INO_TRAVEL_ACCESSED = '2026-09-08' as const;
export const INO_TRAVEL_SOURCES = {
  home: 'https://www.town.ino.kochi.jp/', hall: 'https://www.town.ino.kochi.jp/chosei/chouseijoho/4682/',
  kankou: 'https://www.inofan.jp/',
  nikobuchi: 'https://ja.wikipedia.org/wiki/%E3%81%AB%E3%81%93%E6%B7%B5',
  tabelogCity: 'https://tabelog.com/kochi/C39386/rstLst/',
  kamenoi: 'https://travel.rakuten.co.jp/HOTEL/44261/44261.html'
} as const;

export const INO_ONSEN_PACK_NAMES = [] as const;
export const INO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(INO_ONSEN_PACK_NAMES);
export const INO_EXPERIENCE_PACK_NAMES = ['道の駅土佐和紙工芸村'] as const;
export const INO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(INO_EXPERIENCE_PACK_NAMES);
export const INO_STAY_PACK_NAMES = [] as const;
export const INO_STAY_PACK_SET: ReadonlySet<string> = new Set(INO_STAY_PACK_NAMES);
export const INO_SHOPPING_PACK_NAMES = [] as const;
export const INO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(INO_SHOPPING_PACK_NAMES);

export const INO_SIGHT_PINS = ['にこ淵','いの町紙の博物館','伊野駅','名越屋沈下橋','伊野停留場','紙のこいのぼり'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: INO_TRAVEL_ACCESSED};
}
export const INO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('ino-stay-01', '亀の井ホテル 高知', '高知県吾川郡いの町波川1569', '088-892-1580', 'https://travel.rakuten.co.jp/HOTEL/44261/44261.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: INO_TRAVEL_ACCESSED};
}
export const INO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('ino-dining-01', '街角食堂 ハラハチ', '高知県吾川郡いの町3607-4', '080-6395-9667', 'https://tabelog.com/kochi/A3901/A390103/39007065/'),
  dining('ino-dining-02', '美味しんぼ山岡', '高知県吾川郡いの町枝川441-6', '088-893-5536', 'https://tabelog.com/kochi/A3901/A390103/39000856/'),
  dining('ino-dining-03', 'によど屋 西の谷店', '高知県吾川郡いの町勝賀瀬10-1', '090-8696-7707', 'https://tabelog.com/kochi/A3903/A390301/39008250/'),
  dining('ino-dining-04', 'アオイネコ', '高知県吾川郡いの町小川東津賀才53-1 吾北むささび温泉 1F', '080-6372-7596', 'https://tabelog.com/kochi/A3903/A390302/39008046/'),
  dining('ino-dining-05', '山と川', '高知県吾川郡いの町鹿敷1226', '088-892-1117', 'https://tabelog.com/kochi/A3901/A390103/39008354/'),
  dining('ino-dining-06', 'はこべ いの店', '高知県吾川郡いの町205 サニーアクシス', '088-892-2115', 'https://tabelog.com/kochi/A3901/A390103/39005619/'),
  dining('ino-dining-07', 'さんぽ道', '高知県吾川郡いの町大国町108', '088-892-0224', 'https://tabelog.com/kochi/A3901/A390103/39007160/'),
  dining('ino-dining-08', '手打そば 時屋', '高知県吾川郡いの町中野川29-1', '088-850-5666', 'https://tabelog.com/kochi/A3901/A390103/39003162/'),
  dining('ino-dining-09', '畑山ガーデン', '高知県吾川郡いの町波川98', '088-893-4848', 'https://tabelog.com/kochi/A3901/A390103/39002980/'),
  dining('ino-dining-10', 'カフェ　ソラ', '高知県吾川郡いの町天王北3-2-10', '088-856-8616', 'https://tabelog.com/kochi/A3901/A390103/39004615/'),
  dining('ino-dining-11', '草庵', '高知県吾川郡いの町幸町93', '088-892-3684', 'https://tabelog.com/kochi/A3901/A390103/39001631/'),
  dining('ino-dining-12', 'シラサ', '高知県吾川郡いの町寺川175', '090-1177-5633', 'https://tabelog.com/kochi/A3901/A390103/39003187/'),
  dining('ino-dining-13', '高知アイス売店', '高知県吾川郡いの町柳瀬上分807-1', '090-3787-8511', 'https://tabelog.com/kochi/A3901/A390103/39005038/'),
  dining('ino-dining-14', 'えるぴお', '高知県吾川郡いの町枝川5', null, 'https://tabelog.com/kochi/A3901/A390103/39001298/'),
  dining('ino-dining-15', 'Cafe仁淀ブルー', '高知県吾川郡いの町加田1455-1', '088-856-8577', 'https://tabelog.com/kochi/A3901/A390103/39006687/'),
  dining('ino-dining-16', 'OAK Bakery', '高知県吾川郡いの町1692', '090-4915-6310', 'https://tabelog.com/kochi/A3901/A390103/39008376/'),
];

export const INO_DINING_NAME_SET: ReadonlySet<string> = new Set(INO_TRAVEL_DINING.map((row) => row.name_ja));
export const INO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const INO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const INO_TRAVEL_ALL: readonly TravelRow[] = [...INO_TRAVEL_DINING, ...INO_TRAVEL_STAY, ...INO_TRAVEL_SHOPPING, ...INO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isInoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return INO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isInoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return INO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isInoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isInoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isInoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return INO_DINING_NAME_SET.has(row.name_ja);
}
export function inoSightPhoto(nameJa: string): MimaPlacePhoto | null { return INO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankInoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isInoOnsenPackRow(row) && !isInoExperiencePackRow(row) && !isInoStayPackRow(row) && !isInoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of INO_SIGHT_PINS) {
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
export function inoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? 'いの町 飲食案内' : 'Ino Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? 'いの町 宿泊案内' : 'Ino Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? 'いの町 買物案内' : 'Ino Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function inoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isInoOnsenPackRow(row)) return 'onsen';
  if (isInoExperiencePackRow(row)) return 'experience';
  if (isInoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isInoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function inoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isInoOnsenPackRow(row) && !isInoExperiencePackRow(row) && !isInoStayPackRow(row) && !isInoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isInoOnsenPackRow(row);
  if (filter === 'experience') return isInoExperiencePackRow(row);
  if (filter === 'stay') return isInoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveInoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const INO_HALL = INO.hall;
