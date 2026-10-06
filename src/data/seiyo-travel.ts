/**
 * Seiyo City travel layer. No frozen pack.
 * Dining from 食べログ 西予市 (C38214)×16 with dish JPGs. Stay: Rakuten 部屋 stills×7. Onsen: facility bath stills×3 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SEIYO, SEIYO_SIGHT_PHOTOS} from './seiyo';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SEIYO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const SEIYO_TRAVEL_SOURCES = {
  home: 'https://www.city.seiyo.ehime.jp/', hall: 'https://www.city.seiyo.ehime.jp/',
  kanko: 'https://seiyojikan.jp/',
  kaimei: 'https://ja.wikipedia.org/wiki/%E9%96%8B%E6%98%8E%E5%AD%A6%E6%A0%A1',
  oonogahara: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E9%87%8E%E3%83%B6%E5%8E%9F',
  tabelogCity: 'https://tabelog.com/ehime/C38214/rstLst/'
} as const;

export const SEIYO_ONSEN_PACK_NAMES = ["宇和パークホテル＆宇和サウナ 松葉の湯", "みかめ本館 大浴場", "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳ 温泉"] as const;
export const SEIYO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SEIYO_ONSEN_PACK_NAMES);
export const SEIYO_EXPERIENCE_PACK_NAMES = [] as const;
export const SEIYO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SEIYO_EXPERIENCE_PACK_NAMES);
export const SEIYO_STAY_PACK_NAMES = [] as const;
export const SEIYO_STAY_PACK_SET: ReadonlySet<string> = new Set(SEIYO_STAY_PACK_NAMES);
export const SEIYO_SHOPPING_PACK_NAMES = [] as const;
export const SEIYO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SEIYO_SHOPPING_PACK_NAMES);

export const SEIYO_SIGHT_PINS = ["開明学校", "大野ヶ原", "卯之町の町並み", "卯之町駅"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SEIYO_TRAVEL_ACCESSED};
}
export const SEIYO_TRAVEL_STAY: readonly TravelRow[] = [
  stay("seiyo-stay-001", "宇和パークホテル＆宇和サウナ", "愛媛県西予市宇和町上松葉330-1", null, "https://travel.rakuten.co.jp/HOTEL/17902/17902.html"),
  stay("seiyo-stay-002", "ｓｅａｓｉｄｅ うわかい", "愛媛県西予市三瓶町下泊24-2", null, "https://travel.rakuten.co.jp/HOTEL/30895/30895.html"),
  stay("seiyo-stay-003", "第１ビジネスホテル 松屋", "愛媛県西予市宇和町卯之町3-207", null, "https://travel.rakuten.co.jp/HOTEL/141285/141285.html"),
  stay("seiyo-stay-004", "みかめ本館", "愛媛県西予市三瓶町朝立1番耕地548-2", null, "https://travel.rakuten.co.jp/HOTEL/142924/142924.html"),
  stay("seiyo-stay-005", "おめぐり庵", "愛媛県西予市宇和町稲生325-2", null, "https://travel.rakuten.co.jp/HOTEL/166940/166940.html"),
  stay("seiyo-stay-006", "ｅｎｔｏｈｏｕｓｅ ｂａｒ＆ｇｕｅｓｔｈｏｕｓｅ ＾", "愛媛県西予市野村町野村9-180　ｅｎｔｏｈｏｕｓｅ　ｂａｒ＆ｇｕｅｓｔｈｏｕｓｅ", null, "https://travel.rakuten.co.jp/HOTEL/186043/186043.html"),
  stay("seiyo-stay-007", "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳ", "愛媛県西予市宇和町伊延東1040", null, "https://travel.rakuten.co.jp/HOTEL/188392/188392.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SEIYO_TRAVEL_ACCESSED};
}
export const SEIYO_TRAVEL_DINING: readonly TravelRow[] = [
  dining("seiyo-dining-01", "DINING-KITCHEN 蔵", "愛媛県西予市三瓶町朝立1-548-25", "0894-21-1772", "https://tabelog.com/ehime/A3804/A380402/38010810/"),
  dining("seiyo-dining-02", "森の魚", "愛媛県西予市野村町大野ヶ原113", "0894-76-0106", "https://tabelog.com/ehime/A3804/A380402/38005804/"),
  dining("seiyo-dining-03", "とんかつ丸七 愛媛店", "愛媛県西予市宇和町下松葉38-1", "080-9980-7677", "https://tabelog.com/ehime/A3804/A380402/38015661/"),
  dining("seiyo-dining-04", "Bar Ento", "愛媛県西予市野村町野村9-180", "080-6503-2544", "https://tabelog.com/ehime/A3804/A380402/38014136/"),
  dining("seiyo-dining-05", "大黒屋", "愛媛県西予市三瓶町朝立1-306-1", "0894-33-0377", "https://tabelog.com/ehime/A3801/A380103/38005971/"),
  dining("seiyo-dining-06", "わらぐろ", "愛媛県西予市宇和町卯之町3丁目262", "0894-62-5172", "https://tabelog.com/ehime/A3804/A380402/38006035/"),
  dining("seiyo-dining-07", "庭先cafe そら", "愛媛県西予市宇和町岩木1304", "0894-62-9537", "https://tabelog.com/ehime/A3803/A380302/38013951/"),
  dining("seiyo-dining-08", "あい笑", "愛媛県西予市宇和町小原679", "0894-62-2011", "https://tabelog.com/ehime/A3804/A380402/38013806/"),
  dining("seiyo-dining-09", "あけはま～れ", "愛媛県西予市明浜町高山甲461-1", "0894-64-1616", "https://tabelog.com/ehime/A3804/A380402/38013465/"),
  dining("seiyo-dining-10", "ハーモニーきらら", "愛媛県西予市宇和町卯之町4丁目239", "0894-62-2949", "https://tabelog.com/ehime/A3804/A380402/38006072/"),
  dining("seiyo-dining-11", "土居家 蔵", "愛媛県西予市野村町惣川1290", "0894-76-0636", "https://tabelog.com/ehime/A3804/A380402/38009079/"),
  dining("seiyo-dining-12", "ほわいとファーム", "愛媛県西予市野村町野村16-383-1", "0894-72-3351", "https://tabelog.com/ehime/A3804/A380402/38001187/"),
  dining("seiyo-dining-13", "はな菓子店", "愛媛県西予市宇和町ひまわり2-25", "0894-62-8812", "https://tabelog.com/ehime/A3804/A380402/38014603/"),
  dining("seiyo-dining-14", "ゆうぼく民", "愛媛県西予市宇和町坂戸673-1", "0894-62-5877", "https://tabelog.com/ehime/A3804/A380402/38010777/"),
  dining("seiyo-dining-15", "ふるさと創生館", "愛媛県西予市明浜町高山甲461-1", "0894-64-1330", "https://tabelog.com/ehime/A3804/A380402/38007926/"),
  dining("seiyo-dining-16", "シャルール", "愛媛県西予市宇和町田苗真土1611", "090-4785-4099", "https://tabelog.com/ehime/A3804/A380402/38012312/"),
];

export const SEIYO_DINING_NAME_SET: ReadonlySet<string> = new Set(SEIYO_TRAVEL_DINING.map((row) => row.name_ja));
export const SEIYO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SEIYO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SEIYO_TRAVEL_ALL: readonly TravelRow[] = [...SEIYO_TRAVEL_DINING, ...SEIYO_TRAVEL_STAY, ...SEIYO_TRAVEL_SHOPPING, ...SEIYO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isSeiyoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SEIYO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isSeiyoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SEIYO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isSeiyoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSeiyoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSeiyoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SEIYO_DINING_NAME_SET.has(row.name_ja);
}
export function seiyoSightPhoto(nameJa: string): MimaPlacePhoto | null { return SEIYO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankSeiyoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isSeiyoOnsenPackRow(row) && !isSeiyoExperiencePackRow(row) && !isSeiyoStayPackRow(row) && !isSeiyoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SEIYO_SIGHT_PINS) {
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
export function seiyoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '西予市 飲食案内' : 'Seiyo City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '西予市 宿泊案内' : 'Seiyo City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '西予市 買物案内' : 'Seiyo City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function seiyoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isSeiyoOnsenPackRow(row)) return 'onsen';
  if (isSeiyoExperiencePackRow(row)) return 'experience';
  if (isSeiyoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isSeiyoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function seiyoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isSeiyoOnsenPackRow(row) && !isSeiyoExperiencePackRow(row) && !isSeiyoStayPackRow(row) && !isSeiyoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSeiyoOnsenPackRow(row);
  if (filter === 'experience') return isSeiyoExperiencePackRow(row);
  if (filter === 'stay') return isSeiyoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveSeiyoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SEIYO_HALL = SEIYO.hall;
