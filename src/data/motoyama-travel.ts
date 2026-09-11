/**
 * Motoyama Town travel layer. No frozen pack.
 * Dining: Tabelog C39341 (3 kept + 居酒屋にっさん・汗見川食堂カドヤ・Kitchen クルネ・レストラン ハーベステラス). Stay: 一軒宿あせみ. Onsen: 0 (private shower; stay≠onsen). Experience: 0 honest (カヌー/クライミング/モンベル no HARD BAR activity still). TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MOTOYAMA, MOTOYAMA_SIGHT_PHOTOS} from './motoyama';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MOTOYAMA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const MOTOYAMA_TRAVEL_SOURCES = {
  home: 'https://www.town.motoyama.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E6%9C%AC%E5%B1%B1%E7%94%BA',
  kankou: 'https://www.town.motoyama.kochi.jp/kanko_bunka_sports/index.html',
  bridge: 'https://commons.wikimedia.org/wiki/File:%E6%97%A7%E6%9C%AC%E5%B1%B1%E5%A4%A7%E6%A9%8B.jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39341/rstLst/',
  asemi: 'https://travel.rakuten.co.jp/HOTEL/199462/199462.html',
  yamazakiDam: 'https://commons.wikimedia.org/wiki/File:Yamazaki_Dam_right_view.jpg',
  townscape: 'https://commons.wikimedia.org/wiki/File:Japan_-_Kochi_Motoyama,_july_2010_(4981093637).jpg'
} as const;

export const MOTOYAMA_ONSEN_PACK_NAMES = [] as const;
export const MOTOYAMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MOTOYAMA_ONSEN_PACK_NAMES);
export const MOTOYAMA_EXPERIENCE_PACK_NAMES = [] as const;
export const MOTOYAMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MOTOYAMA_EXPERIENCE_PACK_NAMES);
export const MOTOYAMA_STAY_PACK_NAMES = [] as const;
export const MOTOYAMA_STAY_PACK_SET: ReadonlySet<string> = new Set(MOTOYAMA_STAY_PACK_NAMES);
export const MOTOYAMA_SHOPPING_PACK_NAMES = [] as const;
export const MOTOYAMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MOTOYAMA_SHOPPING_PACK_NAMES);

export const MOTOYAMA_SIGHT_PINS = ['旧本山大橋','本山町役場','赤滝','白髪山','土佐あかうしの放牧','山崎ダム','本山町眺望'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MOTOYAMA_TRAVEL_ACCESSED};
}
export const MOTOYAMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('motoyama-stay-01', '一軒宿あせみ', '高知県長岡郡本山町吉野426-4', '050-1809-5103', 'https://travel.rakuten.co.jp/HOTEL/199462/199462.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MOTOYAMA_TRAVEL_ACCESSED};
}
export const MOTOYAMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('motoyama-dining-01', 'まるごと・あかうし!', '高知県長岡郡本山町本山763-1', '080-5760-8108', 'https://tabelog.com/kochi/A3901/A390104/39008806/'),
  dining('motoyama-dining-02', 'いち松', '高知県長岡郡本山町本山752-3', '0887-76-3667', 'https://tabelog.com/kochi/A3901/A390104/39004214/'),
  dining('motoyama-dining-03', '味楽', '高知県長岡郡本山町寺家232', '0887-82-0833', 'https://tabelog.com/kochi/A3901/A390104/39005430/'),
  dining('motoyama-dining-04', '居酒屋にっさん', '高知県長岡郡本山町本山536', '0887-76-2906', 'https://tabelog.com/kochi/A3901/A390104/39006880/'),
  dining('motoyama-dining-05', '汗見川食堂カドヤ', '高知県長岡郡本山町吉野202-7', '090-3610-8664', 'https://tabelog.com/kochi/A3901/A390104/39008621/'),
  dining('motoyama-dining-06', 'Kitchen クルネ', '高知県長岡郡本山町本山474', '0887-72-9718', 'https://tabelog.com/kochi/A3901/A390104/39008877/'),
  dining('motoyama-dining-07', 'レストラン ハーベステラス', '高知県長岡郡本山町本山2133-1', '0887-72-9672', 'https://tabelog.com/kochi/A3901/A390104/39007049/'),
];

export const MOTOYAMA_DINING_NAME_SET: ReadonlySet<string> = new Set(MOTOYAMA_TRAVEL_DINING.map((row) => row.name_ja));
export const MOTOYAMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MOTOYAMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MOTOYAMA_TRAVEL_ALL: readonly TravelRow[] = [...MOTOYAMA_TRAVEL_DINING, ...MOTOYAMA_TRAVEL_STAY, ...MOTOYAMA_TRAVEL_SHOPPING, ...MOTOYAMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMotoyamaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return MOTOYAMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMotoyamaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MOTOYAMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMotoyamaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMotoyamaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMotoyamaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MOTOYAMA_DINING_NAME_SET.has(row.name_ja);
}
export function motoyamaSightPhoto(nameJa: string): MimaPlacePhoto | null { return MOTOYAMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMotoyamaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMotoyamaOnsenPackRow(row) && !isMotoyamaExperiencePackRow(row) && !isMotoyamaStayPackRow(row) && !isMotoyamaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MOTOYAMA_SIGHT_PINS) {
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
export function motoyamaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '本山町 飲食案内' : 'Motoyama Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '本山町 宿泊案内' : 'Motoyama Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '本山町 買物案内' : 'Motoyama Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function motoyamaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMotoyamaOnsenPackRow(row)) return 'onsen';
  if (isMotoyamaExperiencePackRow(row)) return 'experience';
  if (isMotoyamaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMotoyamaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function motoyamaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMotoyamaOnsenPackRow(row) && !isMotoyamaExperiencePackRow(row) && !isMotoyamaStayPackRow(row) && !isMotoyamaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMotoyamaOnsenPackRow(row);
  if (filter === 'experience') return isMotoyamaExperiencePackRow(row);
  if (filter === 'stay') return isMotoyamaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMotoyamaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const MOTOYAMA_HALL = MOTOYAMA.hall;
