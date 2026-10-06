/**
 * Ikata Town travel layer. No frozen pack.
 * Dining from 食べログ 伊方町 (C38442)×16 with dish JPGs. Stay: Rakuten 部屋 stills×5. Onsen: facility bath still×3 (stay≠onsen EXTRA name). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {IKATA, IKATA_SIGHT_PHOTOS} from './ikata';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const IKATA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const IKATA_TRAVEL_SOURCES = {
  home: 'https://www.town.ikata.ehime.jp/', hall: 'https://www.town.ikata.ehime.jp/soshiki/1/378.html',
  kanko: 'https://www.town.ikata.ehime.jp/',
  lighthouse: 'https://ja.wikipedia.org/wiki/%E4%BD%90%E7%94%B0%E5%B2%AC%E7%81%AF%E5%8F%B0',
  cape: 'https://ja.wikipedia.org/wiki/%E4%BD%90%E7%94%B0%E5%B2%AC',
  onsen: 'https://www.kamegaike.com/',
  tabelogCity: 'https://tabelog.com/ehime/C38442/rstLst/'
} as const;

export const IKATA_ONSEN_PACK_NAMES = ["亀ヶ池温泉　亀乃湯別邸 風呂", "えびすや旅館 風呂", "民宿　大岩 風呂"] as const;
export const IKATA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(IKATA_ONSEN_PACK_NAMES);
export const IKATA_EXPERIENCE_PACK_NAMES = [] as const;
export const IKATA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(IKATA_EXPERIENCE_PACK_NAMES);
export const IKATA_STAY_PACK_NAMES = [] as const;
export const IKATA_STAY_PACK_SET: ReadonlySet<string> = new Set(IKATA_STAY_PACK_NAMES);
export const IKATA_SHOPPING_PACK_NAMES = [] as const;
export const IKATA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(IKATA_SHOPPING_PACK_NAMES);

export const IKATA_SIGHT_PINS = ["佐田岬灯台", "佐田岬", "道の駅 伊方きらら館", "道の駅 佐田岬半島ミュージアム", "三崎八幡神社", "佐田岬第4砲台跡"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: IKATA_TRAVEL_ACCESSED};
}
export const IKATA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("ikata-stay-001", "亀ヶ池温泉　亀乃湯別邸", "愛媛県西宇和郡伊方町二見甲1289", "0894-39-1160", "https://travel.rakuten.co.jp/HOTEL/191618/191618.html"),
  stay("ikata-stay-002", "えびすや旅館", "愛媛県西宇和郡伊方町三崎1514-1", "0894-54-0013", "https://travel.rakuten.co.jp/HOTEL/15465/15465.html"),
  stay("ikata-stay-003", "民宿　大岩", "愛媛県西宇和郡伊方町正野26", "0894-56-0070", "https://travel.rakuten.co.jp/HOTEL/31183/31183.html"),
  stay("ikata-stay-004", "ＨＡＮＡＲＥ　ｓｔａｙ＆ｓｐａｃｅ", "愛媛県西宇和郡伊方町三崎1281", "070-8419-1830", "https://travel.rakuten.co.jp/HOTEL/192800/192800.html"),
  stay("ikata-stay-005", "民宿みちもと", "愛媛県西宇和郡伊方町二見乙973-2（鳥津とりず）", "0894-39-0036", "https://travel.rakuten.co.jp/HOTEL/142943/142943.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: IKATA_TRAVEL_ACCESSED};
}
export const IKATA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("ikata-dining-01", "Dining海", "愛媛県西宇和郡伊方町二見甲1289", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38015495/"),
  dining("ikata-dining-02", "カフェ 木と樹", "愛媛県西宇和郡伊方町三崎1700-11 佐田岬はなはな内", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38013540/"),
  dining("ikata-dining-03", "ジェラテリア だんだん", "愛媛県西宇和郡伊方町塩成293", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38015206/"),
  dining("ikata-dining-04", "居酒屋 縁", "愛媛県西宇和郡伊方町三崎1522", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38015350/"),
  dining("ikata-dining-05", "清海", "愛媛県西宇和郡伊方町三崎1535", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38004934/"),
  dining("ikata-dining-06", "清海じゃこてん部", "愛媛県西宇和郡伊方町三崎1615-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38012187/"),
  dining("ikata-dining-07", "マルマ食堂", "愛媛県西宇和郡伊方町河内1458", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38004936/"),
  dining("ikata-dining-08", "佐田岬はなはな", "愛媛県西宇和郡伊方町三崎1700-11", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38010936/"),
  dining("ikata-dining-09", "しらす食堂", "愛媛県西宇和郡伊方町三崎1700-11 佐田岬はなはな 2F", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38013412/"),
  dining("ikata-dining-10", "お食事処　宇和海", "愛媛県西宇和郡伊方町塩成2677-3", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38005251/"),
  dining("ikata-dining-11", "CAFE&RESTAURANT NEW PORT", "愛媛県西宇和郡伊方町湊浦1102-18", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38017081/"),
  dining("ikata-dining-12", "まりーな亭", "愛媛県西宇和郡伊方町三崎589", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38000829/"),
  dining("ikata-dining-13", "伊方じゃこてん", "愛媛県西宇和郡伊方町九町3-179 きらら館駐車場内", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38006074/"),
  dining("ikata-dining-14", "風車", "愛媛県西宇和郡伊方町塩成2300-1", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38005248/"),
  dining("ikata-dining-15", "アトリエ・カフェ Pi-Pi", "愛媛県西宇和郡伊方町塩成2239-5", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38014320/"),
  dining("ikata-dining-16", "お料理 ひろせ", "愛媛県西宇和郡伊方町湊浦1985-2", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380302/38015351/"),
];
export const IKATA_DINING_NAME_SET: ReadonlySet<string> = new Set(IKATA_TRAVEL_DINING.map((row) => row.name_ja));
export const IKATA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const IKATA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const IKATA_TRAVEL_ALL: readonly TravelRow[] = [...IKATA_TRAVEL_DINING, ...IKATA_TRAVEL_STAY, ...IKATA_TRAVEL_SHOPPING, ...IKATA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isIkataOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IKATA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isIkataExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IKATA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isIkataStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isIkataShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isIkataDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IKATA_DINING_NAME_SET.has(row.name_ja);
}
export function ikataSightPhoto(nameJa: string): MimaPlacePhoto | null { return IKATA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankIkataSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isIkataOnsenPackRow(row) && !isIkataExperiencePackRow(row) && !isIkataStayPackRow(row) && !isIkataDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of IKATA_SIGHT_PINS) {
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
export function ikataSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '伊方町 飲食案内' : 'Ikata Town dining list';
  if (row.category === 'stay') return locale === 'ja' ? '伊方町 宿泊案内' : 'Ikata Town lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '伊方町 買物案内' : 'Ikata Town shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function ikataTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isIkataOnsenPackRow(row)) return 'onsen';
  if (isIkataExperiencePackRow(row)) return 'experience';
  if (isIkataStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isIkataDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function ikataPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isIkataOnsenPackRow(row) && !isIkataExperiencePackRow(row) && !isIkataStayPackRow(row) && !isIkataDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isIkataOnsenPackRow(row);
  if (filter === 'experience') return isIkataExperiencePackRow(row);
  if (filter === 'stay') return isIkataStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveIkataFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const IKATA_HALL = IKATA.hall;
