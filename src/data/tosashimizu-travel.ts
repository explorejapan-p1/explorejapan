/**
 * Tosashimizu City travel layer. No frozen pack.
 * Dining from 食べログ 土佐清水市 (C39209). Stay: TG610 densify Rakuten 部屋 stills.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TOSASHIMIZU, TOSASHIMIZU_SIGHT_PHOTOS} from './tosashimizu';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TOSASHIMIZU_TRAVEL_ACCESSED = '2026-09-09' as const;
export const TOSASHIMIZU_TRAVEL_SOURCES = {
  home: 'https://www.city.tosashimizu.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E6%B8%85%E6%B0%B4%E5%B8%82',
  kankou: 'https://www.city.tosashimizu.lg.jp/',
  ashizuri: 'https://commons.wikimedia.org/wiki/File:Ashizuri_Cape_01.JPG',
  tabelogCity: 'https://tabelog.com/kochi/C39209/rstLst/',
  mana: 'https://travel.rakuten.co.jp/HOTEL/74616/74616.html'
} as const;

export const TOSASHIMIZU_ONSEN_PACK_NAMES = ['ＴｈｅＭａｎａ　Ｖｉｌｌａｇｅ 露天風呂'] as const;
export const TOSASHIMIZU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TOSASHIMIZU_ONSEN_PACK_NAMES);
export const TOSASHIMIZU_EXPERIENCE_PACK_NAMES = ['ジョン万次郎資料館'] as const;
export const TOSASHIMIZU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TOSASHIMIZU_EXPERIENCE_PACK_NAMES);
export const TOSASHIMIZU_STAY_PACK_NAMES = [] as const;
export const TOSASHIMIZU_STAY_PACK_SET: ReadonlySet<string> = new Set(TOSASHIMIZU_STAY_PACK_NAMES);
export const TOSASHIMIZU_SHOPPING_PACK_NAMES = [] as const;
export const TOSASHIMIZU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TOSASHIMIZU_SHOPPING_PACK_NAMES);

export const TOSASHIMIZU_SIGHT_PINS = ['足摺岬','足摺岬灯台','金剛福寺','竜串','白山洞門','大岐の浜'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TOSASHIMIZU_TRAVEL_ACCESSED};
}
export const TOSASHIMIZU_TRAVEL_STAY: readonly TravelRow[] = [
  stay('tosashimizu-stay-01', 'ＴｈｅＭａｎａ　Ｖｉｌｌａｇｅ', '高知県土佐清水市足摺岬783', '0880-88-1111', 'https://travel.rakuten.co.jp/HOTEL/74616/74616.html'),
  stay('tosashimizu-stay-02', 'あしずり温泉郷　足摺国際ホテル', '高知県土佐清水市足摺岬662', '0880-88-0201', 'https://travel.rakuten.co.jp/HOTEL/8329/8329.html'),
  stay('tosashimizu-stay-03', 'あしずり温泉郷　足摺サニーサイドホテル', '高知県土佐清水市松尾19-2', '0880-88-0331', 'https://travel.rakuten.co.jp/HOTEL/14660/14660.html'),
  stay('tosashimizu-stay-04', 'アシズリテルメ', '高知県土佐清水市足摺岬1433-3', '0880-88-0301', 'https://travel.rakuten.co.jp/HOTEL/193166/193166.html'),
  stay('tosashimizu-stay-05', 'あしずり温泉郷　ホテル足摺園', '高知県土佐清水市足摺岬478-5', '0880-88-0033', 'https://travel.rakuten.co.jp/HOTEL/12632/12632.html'),
  stay('tosashimizu-stay-06', '民宿　冠', '高知県土佐清水市足摺岬634', '0880-88-0059', 'https://travel.rakuten.co.jp/HOTEL/164914/164914.html'),
  stay('tosashimizu-stay-07', '足摺岬　民宿　福田家', '高知県土佐清水市足摺岬1409-3', null, 'https://travel.rakuten.co.jp/HOTEL/29205/29205.html'),
  stay('tosashimizu-stay-08', 'ＯＵＣＨＩ　ＨＯＴＥＬ　日々', '高知県土佐清水市浦尻31-11', '090-9456-0563', 'https://travel.rakuten.co.jp/HOTEL/165052/165052.html'),
  stay('tosashimizu-stay-09', 'ゲストハウス大岐ビーチ', '高知県土佐清水市大岐884-23', '050-7123-3331', 'https://travel.rakuten.co.jp/HOTEL/158794/158794.html'),
  stay('tosashimizu-stay-10', 'スノーピーク土佐清水キャンプフィールド', '高知県土佐清水市三崎字エジリ4145-1', '0880-87-9789', 'https://travel.rakuten.co.jp/HOTEL/188424/188424.html'),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TOSASHIMIZU_TRAVEL_ACCESSED};
}
export const TOSASHIMIZU_TRAVEL_DINING: readonly TravelRow[] = [
  dining('tosashimizu-dining-01', 'Azzurrissimo', '高知県土佐清水市足摺岬783', '0880-88-1113', 'https://tabelog.com/kochi/A3904/A390404/39007932/'),
  dining('tosashimizu-dining-02', '満鮨', '高知県土佐清水市栄町4-1', '0880-82-2116', 'https://tabelog.com/kochi/A3904/A390404/39004766/'),
  dining('tosashimizu-dining-03', 'てっぱん たなべ', '高知県土佐清水市市場町7-6', '0880-82-3684', 'https://tabelog.com/kochi/A3904/A390404/39007154/'),
  dining('tosashimizu-dining-04', 'おか柳', '高知県土佐清水市幸町4-26', '0880-87-9701', 'https://tabelog.com/kochi/A3904/A390404/39006203/'),
  dining('tosashimizu-dining-05', '足摺グランドレスト', '高知県土佐清水市足摺岬214-13', '0880-88-0326', 'https://tabelog.com/kochi/A3904/A390404/39005642/'),
  dining('tosashimizu-dining-06', '鮮魚 一八', '高知県土佐清水市養老283-18', '080-6372-8690', 'https://tabelog.com/kochi/A3904/A390404/39004894/'),
  dining('tosashimizu-dining-07', '福田家', '高知県土佐清水市足摺岬1409-3', '0880-88-0529', 'https://tabelog.com/kochi/A3904/A390404/39008511/'),
  dining('tosashimizu-dining-08', '北京', '高知県土佐清水市寿町5-16', '0880-82-1963', 'https://tabelog.com/kochi/A3904/A390404/39004878/'),
  dining('tosashimizu-dining-09', '焼肉ぷるこぎ 土佐清水店', '高知県土佐清水市中央町3-16', '0880-82-5100', 'https://tabelog.com/kochi/A3904/A390404/39004396/'),
  dining('tosashimizu-dining-10', 'ほうばい', '高知県土佐清水市久百々122', null, 'https://tabelog.com/kochi/A3904/A390404/39008523/'),
  dining('tosashimizu-dining-11', 'ヤマアのお椀', '高知県土佐清水市旭町3-13', null, 'https://tabelog.com/kochi/A3904/A390404/39005034/'),
  dining('tosashimizu-dining-12', '居酒屋 道楽亭', '高知県土佐清水市栄町10-7', '0880-82-3667', 'https://tabelog.com/kochi/A3904/A390404/39008517/'),
  dining('tosashimizu-dining-13', 'りきゅう家', '高知県土佐清水市中央町2-12', '090-4334-0343', 'https://tabelog.com/kochi/A3904/A390404/39004863/'),
  dining('tosashimizu-dining-14', '高知県立 足摺海洋館 サトウミ', '高知県土佐清水市三崎字今芝4032', '0880-85-0635', 'https://tabelog.com/kochi/A3904/A390404/39007396/'),
  dining('tosashimizu-dining-15', '和ダイニング ふかみ', '高知県土佐清水市栄町8-11', '0880-82-0267', 'https://tabelog.com/kochi/A3904/A390404/39005631/'),
  dining('tosashimizu-dining-16', '朝ごはん屋', '高知県土佐清水市天神町1-16 1F', '070-5263-8649', 'https://tabelog.com/kochi/A3904/A390404/39009084/'),
];

export const TOSASHIMIZU_DINING_NAME_SET: ReadonlySet<string> = new Set(TOSASHIMIZU_TRAVEL_DINING.map((row) => row.name_ja));
export const TOSASHIMIZU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TOSASHIMIZU_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TOSASHIMIZU_TRAVEL_ALL: readonly TravelRow[] = [...TOSASHIMIZU_TRAVEL_DINING, ...TOSASHIMIZU_TRAVEL_STAY, ...TOSASHIMIZU_TRAVEL_SHOPPING, ...TOSASHIMIZU_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTosashimizuOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOSASHIMIZU_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTosashimizuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOSASHIMIZU_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTosashimizuStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTosashimizuShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTosashimizuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOSASHIMIZU_DINING_NAME_SET.has(row.name_ja);
}
export function tosashimizuSightPhoto(nameJa: string): MimaPlacePhoto | null { return TOSASHIMIZU_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTosashimizuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTosashimizuOnsenPackRow(row) && !isTosashimizuExperiencePackRow(row) && !isTosashimizuStayPackRow(row) && !isTosashimizuDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TOSASHIMIZU_SIGHT_PINS) {
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
export function tosashimizuSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '土佐清水市 飲食案内' : 'Tosashimizu City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '土佐清水市 宿泊案内' : 'Tosashimizu City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '土佐清水市 買物案内' : 'Tosashimizu City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function tosashimizuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTosashimizuOnsenPackRow(row)) return 'onsen';
  if (isTosashimizuExperiencePackRow(row)) return 'experience';
  if (isTosashimizuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTosashimizuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function tosashimizuPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTosashimizuOnsenPackRow(row) && !isTosashimizuExperiencePackRow(row) && !isTosashimizuStayPackRow(row) && !isTosashimizuDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTosashimizuOnsenPackRow(row);
  if (filter === 'experience') return isTosashimizuExperiencePackRow(row);
  if (filter === 'stay') return isTosashimizuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTosashimizuFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TOSASHIMIZU_HALL = TOSASHIMIZU.hall;
