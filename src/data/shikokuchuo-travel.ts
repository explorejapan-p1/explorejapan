/**
 * Shikokuchuo City travel layer. No frozen pack.
 * Dining from 食べログ 四国中央市 (C38213)×16 with dish JPGs. Stay: Rakuten 部屋 stills×13. Onsen: facility bath stills×3 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SHIKOKUCHUO, SHIKOKUCHUO_SIGHT_PHOTOS} from './shikokuchuo';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SHIKOKUCHUO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const SHIKOKUCHUO_TRAVEL_SOURCES = {
  home: 'https://www.city.shikokuchuo.ehime.jp/', hall: 'https://www.city.shikokuchuo.ehime.jp/',
  kanko: 'http://www.shikochu-kankou.jp/',
  suiha: 'http://www.shikochu-kankou.jp/%e8%87%aa%e7%84%b6%e3%83%bb%e8%8a%b1%e3%83%bb%e5%85%ac%e5%9c%92/%e7%bf%a0%e6%b3%a2%e9%ab%98%e5%8e%9f-2/',
  kawanoeCastle: 'https://ja.wikipedia.org/wiki/%E5%B7%9D%E4%B9%8B%E6%B1%9F%E5%9F%8E',
  tabelogCity: 'https://tabelog.com/ehime/C38213/rstLst/'
} as const;

export const SHIKOKUCHUO_ONSEN_PACK_NAMES = ["霧の森コテージ 霧の森交湯", "天然温泉「東予の湯」スーパーホテル四国中央 天然温泉", "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐ 天然温泉"] as const;
export const SHIKOKUCHUO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SHIKOKUCHUO_ONSEN_PACK_NAMES);
export const SHIKOKUCHUO_EXPERIENCE_PACK_NAMES = [] as const;
export const SHIKOKUCHUO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SHIKOKUCHUO_EXPERIENCE_PACK_NAMES);
export const SHIKOKUCHUO_STAY_PACK_NAMES = [] as const;
export const SHIKOKUCHUO_STAY_PACK_SET: ReadonlySet<string> = new Set(SHIKOKUCHUO_STAY_PACK_NAMES);
export const SHIKOKUCHUO_SHOPPING_PACK_NAMES = [] as const;
export const SHIKOKUCHUO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SHIKOKUCHUO_SHOPPING_PACK_NAMES);

export const SHIKOKUCHUO_SIGHT_PINS = ["翠波高原", "川之江城", "紙のまち資料館", "伊予土居駅"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SHIKOKUCHUO_TRAVEL_ACCESSED};
}
export const SHIKOKUCHUO_TRAVEL_STAY: readonly TravelRow[] = [
  stay("shikokuchuo-stay-001", "川之江ビジネスホテル", "愛媛県四国中央市川之江町4062-15", null, "https://travel.rakuten.co.jp/HOTEL/1536/1536.html"),
  stay("shikokuchuo-stay-002", "プリンスホテル杉源", "愛媛県四国中央市川之江町1760", null, "https://travel.rakuten.co.jp/HOTEL/13595/13595.html"),
  stay("shikokuchuo-stay-003", "ビジネスホテル マイルド", "愛媛県四国中央市三島朝日3-1-12", null, "https://travel.rakuten.co.jp/HOTEL/107725/107725.html"),
  stay("shikokuchuo-stay-004", "ホテル グランフォーレ", "愛媛県四国中央市三島朝日1-1-30", null, "https://travel.rakuten.co.jp/HOTEL/111173/111173.html"),
  stay("shikokuchuo-stay-005", "霧の森コテージ", "愛媛県四国中央市新宮町馬立4491-1", null, "https://travel.rakuten.co.jp/HOTEL/135399/135399.html"),
  stay("shikokuchuo-stay-006", "天然温泉「東予の湯」スーパーホテル四国中央", "愛媛県四国中央市下柏町852-1", null, "https://travel.rakuten.co.jp/HOTEL/137424/137424.html"),
  stay("shikokuchuo-stay-007", "ホテルリブマックスＢＵＤＧＥＴ伊予三島", "愛媛県四国中央市三島中央3-14-5", null, "https://travel.rakuten.co.jp/HOTEL/139959/139959.html"),
  stay("shikokuchuo-stay-008", "ホテルセレクトイン四国中央", "愛媛県四国中央市川之江町1902-1", null, "https://travel.rakuten.co.jp/HOTEL/147159/147159.html"),
  stay("shikokuchuo-stay-009", "四国セントラルホテル", "愛媛県四国中央市川之江町4066-1", null, "https://travel.rakuten.co.jp/HOTEL/176614/176614.html"),
  stay("shikokuchuo-stay-010", "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐", "愛媛県四国中央市妻鳥町1687-3", null, "https://travel.rakuten.co.jp/HOTEL/184348/184348.html"),
  stay("shikokuchuo-stay-011", "ＨＯＴＥＬ Ｒ９ Ｔｈｅ Ｙａｒｄ 四国中央", "愛媛県四国中央市川之江町939-15", null, "https://travel.rakuten.co.jp/HOTEL/184703/184703.html"),
  stay("shikokuchuo-stay-012", "ＨＯＴＥＬ ＡＺ 愛媛土居インター店", "愛媛県四国中央市土居町野田甲1315-2", null, "https://travel.rakuten.co.jp/HOTEL/193142/193142.html"),
  stay("shikokuchuo-stay-013", "シコチューベース ＾", "愛媛県四国中央市中曽根町上石床乙356-1", null, "https://travel.rakuten.co.jp/HOTEL/193963/193963.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SHIKOKUCHUO_TRAVEL_ACCESSED};
}
export const SHIKOKUCHUO_TRAVEL_DINING: readonly TravelRow[] = [
  dining("shikokuchuo-dining-01", "釜焼鳥本舗 川之江店", "愛媛県四国中央市川之江町1506-1", "0896-58-5203", "https://tabelog.com/ehime/A3802/A380204/38006272/"),
  dining("shikokuchuo-dining-02", "Restaurant&Cafe Riina", "愛媛県四国中央市土居町津根3995-1", "0896-74-0880", "https://tabelog.com/ehime/A3802/A380204/38006000/"),
  dining("shikokuchuo-dining-03", "ピッツェリア　エイゴロ　伊予三島", "愛媛県四国中央市三島金子2-3-16", "0896-28-1170", "https://tabelog.com/ehime/A3802/A380204/38010745/"),
  dining("shikokuchuo-dining-04", "寿司と居酒屋 魚民 伊予三島店", "愛媛県四国中央市三島中央1-16-5 伊予三島店舗 1F", "0896-23-7088", "https://tabelog.com/ehime/A3802/A380204/38008628/"),
  dining("shikokuchuo-dining-05", "鶏焼肉 三六九", "愛媛県四国中央市土居町小林1785-1", "0896-77-4429", "https://tabelog.com/ehime/A3802/A380204/38016754/"),
  dining("shikokuchuo-dining-06", "三島バル evoevo", "愛媛県四国中央市三島中央2-5-7 1F", "0896-24-1018", "https://tabelog.com/ehime/A3802/A380204/38010967/"),
  dining("shikokuchuo-dining-07", "Riisa cafe", "愛媛県四国中央市土居町入野39 ハローズショッピングモール", "0896-75-6900", "https://tabelog.com/ehime/A3802/A380204/38010096/"),
  dining("shikokuchuo-dining-08", "たまちゃんち", "愛媛県四国中央市豊岡町長田1687", "070-5515-5002", "https://tabelog.com/ehime/A3802/A380204/38016624/"),
  dining("shikokuchuo-dining-09", "チャイニーズレストラン パンダ", "愛媛県四国中央市金生町下分967-2", "0896-22-4150", "https://tabelog.com/ehime/A3802/A380204/38013660/"),
  dining("shikokuchuo-dining-10", "ビジネスホテルマイルド", "愛媛県四国中央市三島朝日3-1-12", "0896-24-3090", "https://tabelog.com/ehime/A3802/A380204/38016604/"),
  dining("shikokuchuo-dining-11", "GREEN TAIL CAFE", "愛媛県四国中央市三島朝日3-1-12 ビジネスホテルマイルド", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380204/38016920/"),
  dining("shikokuchuo-dining-12", "cafe cherry blossom", "愛媛県四国中央市妻鳥町463-5", "0896-57-2585", "https://tabelog.com/ehime/A3802/A380204/38006888/"),
  dining("shikokuchuo-dining-13", "鳥栄", "愛媛県四国中央市川之江町2496", "0896-56-3818", "https://tabelog.com/ehime/A3802/A380204/38002037/"),
  dining("shikokuchuo-dining-14", "養老乃瀧 川之江店", "愛媛県四国中央市川之江町1856-44", "0896-57-2520", "https://tabelog.com/ehime/A3802/A380204/38004380/"),
  dining("shikokuchuo-dining-15", "ホテル セレクトイン四国中央", "愛媛県四国中央市川之江町1902-1", "0896-22-3900", "https://tabelog.com/ehime/A3802/A380204/38013437/"),
  dining("shikokuchuo-dining-16", "やき鳥一番鳥", "愛媛県四国中央市三島宮川4-10-72", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380204/38002028/"),
];

export const SHIKOKUCHUO_DINING_NAME_SET: ReadonlySet<string> = new Set(SHIKOKUCHUO_TRAVEL_DINING.map((row) => row.name_ja));
export const SHIKOKUCHUO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SHIKOKUCHUO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SHIKOKUCHUO_TRAVEL_ALL: readonly TravelRow[] = [...SHIKOKUCHUO_TRAVEL_DINING, ...SHIKOKUCHUO_TRAVEL_STAY, ...SHIKOKUCHUO_TRAVEL_SHOPPING, ...SHIKOKUCHUO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isShikokuchuoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHIKOKUCHUO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isShikokuchuoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHIKOKUCHUO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isShikokuchuoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isShikokuchuoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isShikokuchuoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHIKOKUCHUO_DINING_NAME_SET.has(row.name_ja);
}
export function shikokuchuoSightPhoto(nameJa: string): MimaPlacePhoto | null { return SHIKOKUCHUO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankShikokuchuoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isShikokuchuoOnsenPackRow(row) && !isShikokuchuoExperiencePackRow(row) && !isShikokuchuoStayPackRow(row) && !isShikokuchuoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SHIKOKUCHUO_SIGHT_PINS) {
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
export function shikokuchuoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '四国中央市 飲食案内' : 'Shikokuchuo City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '四国中央市 宿泊案内' : 'Shikokuchuo City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '四国中央市 買物案内' : 'Shikokuchuo City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function shikokuchuoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isShikokuchuoOnsenPackRow(row)) return 'onsen';
  if (isShikokuchuoExperiencePackRow(row)) return 'experience';
  if (isShikokuchuoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isShikokuchuoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function shikokuchuoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isShikokuchuoOnsenPackRow(row) && !isShikokuchuoExperiencePackRow(row) && !isShikokuchuoStayPackRow(row) && !isShikokuchuoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isShikokuchuoOnsenPackRow(row);
  if (filter === 'experience') return isShikokuchuoExperiencePackRow(row);
  if (filter === 'stay') return isShikokuchuoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveShikokuchuoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SHIKOKUCHUO_HALL = SHIKOKUCHUO.hall;
