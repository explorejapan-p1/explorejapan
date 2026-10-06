/**
 * Otoyo Town travel layer. No frozen pack.
 * Dining: Tabelog C39344 (3 kept + 喜群・大豊ラーメン・立川PA下りスナック・土佐北川駅 駅前食堂). Stay: 大豊の森. Onsen: 0 (private bath; stay≠onsen). Experience: 大豊の森 薪割り体験 (Rakuten gallery). TG610 densify.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {OTOYO, OTOYO_SIGHT_PHOTOS} from './otoyo';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const OTOYO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const OTOYO_TRAVEL_SOURCES = {
  home: 'https://www.town.otoyo.kochi.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E8%B1%8A%E7%94%BA',
  kankou: 'https://www.town.otoyo.kochi.jp/kanko/',
  burakuji: 'https://commons.wikimedia.org/wiki/File:Burakuji_01.JPG',
  tabelogCity: 'https://tabelog.com/kochi/C39344/rstLst/',
  otoyonomori: 'https://travel.rakuten.co.jp/HOTEL/184242/184242.html',
  otoyonomoriGallery: 'https://travel.rakuten.co.jp/HOTEL/184242/gallery.html',
  oldBridge: 'https://commons.wikimedia.org/wiki/File:Old_Yoshinogawa-bridge,Otoyo-town,Japan.jpg',
  kajigamine: 'https://commons.wikimedia.org/wiki/File:Mt.Kajigamine_from_Mt.Siraga.jpg'
} as const;

export const OTOYO_ONSEN_PACK_NAMES = [] as const;
export const OTOYO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(OTOYO_ONSEN_PACK_NAMES);
export const OTOYO_EXPERIENCE_PACK_NAMES = ['大豊の森 薪割り体験'] as const;
export const OTOYO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(OTOYO_EXPERIENCE_PACK_NAMES);
export const OTOYO_STAY_PACK_NAMES = [] as const;
export const OTOYO_STAY_PACK_SET: ReadonlySet<string> = new Set(OTOYO_STAY_PACK_NAMES);
export const OTOYO_SHOPPING_PACK_NAMES = [] as const;
export const OTOYO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(OTOYO_SHOPPING_PACK_NAMES);

export const OTOYO_SIGHT_PINS = ['豊楽寺','龍王の滝','大豊町役場','道の駅大杉','八畝の乳イチョウ','旧吉野川橋','梶ヶ森'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: OTOYO_TRAVEL_ACCESSED};
}
export const OTOYO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('otoyo-stay-01', '大豊の森', '高知県長岡郡大豊町和田90-11', '090-9592-9228', 'https://travel.rakuten.co.jp/HOTEL/184242/184242.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: OTOYO_TRAVEL_ACCESSED};
}
export const OTOYO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('otoyo-dining-01', 'ひばり食堂', '高知県長岡郡大豊町高須226', '0887-72-0972', 'https://tabelog.com/kochi/A3901/A390104/39000436/'),
  dining('otoyo-dining-02', 'きっちん なかとよや', '高知県長岡郡大豊町大久保139-4', '090-9456-2987', 'https://tabelog.com/kochi/A3901/A390104/39006349/'),
  dining('otoyo-dining-03', '永渕食堂 シャンティ', '高知県長岡郡大豊町永渕548', '080-3550-5554', 'https://tabelog.com/kochi/A3901/A390104/39006981/'),
  dining('otoyo-dining-04', '喜群', '高知県長岡郡大豊町高須238', '0887-72-0183', 'https://tabelog.com/kochi/A3901/A390104/39002103/'),
  dining('otoyo-dining-05', '大豊ラーメン', '高知県長岡郡大豊町磯谷74-1', '0887-73-0234', 'https://tabelog.com/kochi/A3901/A390104/39002165/'),
  dining('otoyo-dining-06', '立川パーキングエリア（下り線）スナックコーナー', '高知県長岡郡大豊町立川下名 高知自動車道下り線立川ＰＡ内', '0887-78-0066', 'https://tabelog.com/kochi/A3901/A390104/39003666/'),
  dining('otoyo-dining-07', '土佐北川駅 駅前食堂', '高知県長岡郡大豊町小川1391', '0887-72-0915', 'https://tabelog.com/kochi/A3901/A390104/39006362/'),
];

export const OTOYO_DINING_NAME_SET: ReadonlySet<string> = new Set(OTOYO_TRAVEL_DINING.map((row) => row.name_ja));
export const OTOYO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const OTOYO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const OTOYO_TRAVEL_ALL: readonly TravelRow[] = [...OTOYO_TRAVEL_DINING, ...OTOYO_TRAVEL_STAY, ...OTOYO_TRAVEL_SHOPPING, ...OTOYO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOtoyoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  return OTOYO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOtoyoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OTOYO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOtoyoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOtoyoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOtoyoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OTOYO_DINING_NAME_SET.has(row.name_ja);
}
export function otoyoSightPhoto(nameJa: string): MimaPlacePhoto | null { return OTOYO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOtoyoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOtoyoOnsenPackRow(row) && !isOtoyoExperiencePackRow(row) && !isOtoyoStayPackRow(row) && !isOtoyoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of OTOYO_SIGHT_PINS) {
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
export function otoyoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '大豊町 飲食案内' : 'Otoyo Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '大豊町 宿泊案内' : 'Otoyo Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '大豊町 買物案内' : 'Otoyo Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function otoyoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOtoyoOnsenPackRow(row)) return 'onsen';
  if (isOtoyoExperiencePackRow(row)) return 'experience';
  if (isOtoyoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOtoyoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function otoyoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOtoyoOnsenPackRow(row) && !isOtoyoExperiencePackRow(row) && !isOtoyoStayPackRow(row) && !isOtoyoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOtoyoOnsenPackRow(row);
  if (filter === 'experience') return isOtoyoExperiencePackRow(row);
  if (filter === 'stay') return isOtoyoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOtoyoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const OTOYO_HALL = OTOYO.hall;
