/**
 * Kami City travel layer. No frozen pack.
 * Dining from 食べログ 香美市 (C39212). Stay: The Sixth Diary Kahoku Rakuten room. Onsen: honest 0 (no attributable 大浴場 keys; stay room ≠ onsen). Experience: 道の駅美良布.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KAMI, KAMI_SIGHT_PHOTOS} from './kami';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KAMI_TRAVEL_ACCESSED = '2026-09-08' as const;
export const KAMI_TRAVEL_SOURCES = {
  home: 'https://www.city.kami.lg.jp/', hall: 'https://www.city.kami.lg.jp/soshiki/3/cityoffice.html',
  kankou: 'https://www.city.kami.lg.jp/',
  anpanman: 'https://ja.wikipedia.org/wiki/%E9%A6%99%E7%BE%8E%E5%B8%82%E7%AB%8B%E3%82%84%E3%81%AA%E3%81%9B%E3%81%9F%E3%81%8B%E3%81%97%E8%A8%98%E5%BF%B5%E9%A4%A8',
  tabelogCity: 'https://tabelog.com/kochi/C39212/rstLst/',
  sixthdiary: 'https://travel.rakuten.co.jp/HOTEL/172327/172327.html'
} as const;

export const KAMI_ONSEN_PACK_NAMES = [] as const;
export const KAMI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KAMI_ONSEN_PACK_NAMES);
export const KAMI_EXPERIENCE_PACK_NAMES = ['道の駅美良布'] as const;
export const KAMI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KAMI_EXPERIENCE_PACK_NAMES);
export const KAMI_STAY_PACK_NAMES = [] as const;
export const KAMI_STAY_PACK_SET: ReadonlySet<string> = new Set(KAMI_STAY_PACK_NAMES);
export const KAMI_SHOPPING_PACK_NAMES = [] as const;
export const KAMI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KAMI_SHOPPING_PACK_NAMES);

export const KAMI_SIGHT_PINS = ['香美市立やなせたかし記念館','龍河洞','土佐山田駅','大川上美良布神社','べふ峡','繁藤駅'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KAMI_TRAVEL_ACCESSED};
}
export const KAMI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('kami-stay-01', 'ザ・シックスダイアリーかほくホテルアンドリゾート', '高知県香美市香北町美良布1224-2', '0887-59-2380', 'https://travel.rakuten.co.jp/HOTEL/172327/172327.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KAMI_TRAVEL_ACCESSED};
}
export const KAMI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('kami-dining-01', 'TOSACO TAP STAND', '高知県香美市香北町橋川野584-1', '0887-59-2633', 'https://tabelog.com/kochi/A3901/A390105/39008143/'),
  dining('kami-dining-02', '手打ち蕎麦 石州', '高知県香美市土佐山田町逆川1424-5', '090-8691-4907', 'https://tabelog.com/kochi/A3901/A390105/39007373/'),
  dining('kami-dining-03', 'さかえ', '高知県香美市土佐山田町466-1 1F', null, 'https://tabelog.com/kochi/A3901/A390105/39000067/'),
  dining('kami-dining-04', 'ラフディップ', '高知県香美市香北町太郎丸510-1', '0887-59-2500', 'https://tabelog.com/kochi/A3901/A390105/39006096/'),
  dining('kami-dining-05', '韮生の里 美良布直販店', '高知県香美市香北町美良布1211', '0887-59-3156', 'https://tabelog.com/kochi/A3901/A390105/39004843/'),
  dining('kami-dining-06', 'まるしん', '高知県香美市土佐山田町楠目339-1', '0887-53-3575', 'https://tabelog.com/kochi/A3901/A390105/39003705/'),
  dining('kami-dining-07', 'いのなかのかわず', '高知県香美市土佐山田町東本町1-2-37', '0887-52-8446', 'https://tabelog.com/kochi/A3901/A390105/39007309/'),
  dining('kami-dining-08', '大門', '高知県香美市土佐山田町栄町7-57', '0887-52-2933', 'https://tabelog.com/kochi/A3901/A390105/39002879/'),
  dining('kami-dining-09', '龍河温泉', '高知県香美市土佐山田町佐古薮430-1', '0887-53-4126', 'https://tabelog.com/kochi/A3901/A390105/39000084/'),
  dining('kami-dining-10', 'BAKE SHOP ヒジリ', '高知県香美市土佐山田町西本町1-2-18', '0887-52-0266', 'https://tabelog.com/kochi/A3901/A390105/39000443/'),
  dining('kami-dining-11', '平家の茶屋', '高知県香美市香北町橋川野597', '0887-59-3780', 'https://tabelog.com/kochi/A3901/A390105/39003676/'),
  dining('kami-dining-12', 'マリソル', '高知県香美市土佐山田町西本町1-4-32', '0887-53-3093', 'https://tabelog.com/kochi/A3901/A390105/39000099/'),
  dining('kami-dining-13', 'キッチン 韮生の里', '高知県香美市香北町美良布1211', null, 'https://tabelog.com/kochi/A3901/A390105/39007377/'),
  dining('kami-dining-14', 'ロイヤルニボシコーヒースタンド', '高知県香美市土佐山田町西本町3-1-24', null, 'https://tabelog.com/kochi/A3901/A390105/39006769/'),
  dining('kami-dining-15', 'リトルガーデン庭園喫茶', '高知県香美市土佐山田町佐古藪286-29', '0887-52-3686', 'https://tabelog.com/kochi/A3901/A390105/39002901/'),
  dining('kami-dining-16', '三谷ミート', '高知県香美市土佐山田町栄町11-3', '0887-53-5125', 'https://tabelog.com/kochi/A3901/A390105/39004104/'),
];

export const KAMI_DINING_NAME_SET: ReadonlySet<string> = new Set(KAMI_TRAVEL_DINING.map((row) => row.name_ja));
export const KAMI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KAMI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KAMI_TRAVEL_ALL: readonly TravelRow[] = [...KAMI_TRAVEL_DINING, ...KAMI_TRAVEL_STAY, ...KAMI_TRAVEL_SHOPPING, ...KAMI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKamiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKamiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKamiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKamiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKamiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMI_DINING_NAME_SET.has(row.name_ja);
}
export function kamiSightPhoto(nameJa: string): MimaPlacePhoto | null { return KAMI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKamiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKamiOnsenPackRow(row) && !isKamiExperiencePackRow(row) && !isKamiStayPackRow(row) && !isKamiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KAMI_SIGHT_PINS) {
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
export function kamiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '香美市 飲食案内' : 'Kami City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '香美市 宿泊案内' : 'Kami City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '香美市 買物案内' : 'Kami City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kamiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKamiOnsenPackRow(row)) return 'onsen';
  if (isKamiExperiencePackRow(row)) return 'experience';
  if (isKamiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKamiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kamiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKamiOnsenPackRow(row) && !isKamiExperiencePackRow(row) && !isKamiStayPackRow(row) && !isKamiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKamiOnsenPackRow(row);
  if (filter === 'experience') return isKamiExperiencePackRow(row);
  if (filter === 'stay') return isKamiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKamiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KAMI_HALL = KAMI.hall;
