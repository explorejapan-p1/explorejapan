/**
 * Tsuyama City travel layer. No frozen pack.
 * Dining from 食べログ 津山市 (C33203)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0 honest.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TSUYAMA, TSUYAMA_SIGHT_PHOTOS} from './tsuyama';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const TSUYAMA_TRAVEL_ACCESSED = '2026-09-11' as const;
export const TSUYAMA_TRAVEL_SOURCES = {
  home: 'https://www.city.tsuyama.lg.jp/', hall: 'https://www.city.tsuyama.lg.jp/',
  kanko: 'https://www.tsuyamakan.jp/',
  castle: 'https://commons.wikimedia.org/wiki/File:%E6%B4%A5%E5%B1%B1%E5%9F%8E_%E5%82%99%E4%B8%AD%E6%AB%93%E3%81%A8%E6%A1%9C.jpg',
  tabelogCity: 'https://tabelog.com/okayama/C33203/rstLst/'
} as const;

export const TSUYAMA_ONSEN_PACK_NAMES = ["天然温泉「旅人の湯」ホテルルートイン津山駅前 大浴場", "ザ・シロヤマテラス津山別邸 大浴場"] as const;
export const TSUYAMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TSUYAMA_ONSEN_PACK_NAMES);
export const TSUYAMA_EXPERIENCE_PACK_NAMES = [] as const;
export const TSUYAMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TSUYAMA_EXPERIENCE_PACK_NAMES);
export const TSUYAMA_STAY_PACK_NAMES = [] as const;
export const TSUYAMA_STAY_PACK_SET: ReadonlySet<string> = new Set(TSUYAMA_STAY_PACK_NAMES);
export const TSUYAMA_SHOPPING_PACK_NAMES = [] as const;
export const TSUYAMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TSUYAMA_SHOPPING_PACK_NAMES);

export const TSUYAMA_SIGHT_PINS = ["津山城（鶴山公園）", "衆楽園", "津山市役所", "津山まなびの鉄道館", "鶴山公園"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: TSUYAMA_TRAVEL_ACCESSED};
}
export const TSUYAMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("tsuyama-stay-001", "天然温泉「旅人の湯」ホテルルートイン津山駅前", "岡山県津山市横山108-1", null, "https://travel.rakuten.co.jp/HOTEL/180675/180675.html"),
  stay("tsuyama-stay-002", "ホテルアルファーワン津山", "岡山県津山市大谷190-16", null, "https://travel.rakuten.co.jp/HOTEL/15900/15900.html"),
  stay("tsuyama-stay-003", "ザ・シロヤマテラス津山別邸", "岡山県津山市山下(さんげ)30-1", null, "https://travel.rakuten.co.jp/HOTEL/168420/168420.html"),
  stay("tsuyama-stay-004", "津山鶴山ホテル", "岡山県津山市東新町114-4", null, "https://travel.rakuten.co.jp/HOTEL/6280/6280.html"),
  stay("tsuyama-stay-005", "津山セントラルホテル　タウンハウス　津山城前（ＢＢＨホテルグループ）", "岡山県津山市大手町2-2", null, "https://travel.rakuten.co.jp/HOTEL/53111/53111.html"),
  stay("tsuyama-stay-006", "津山セントラルホテル　アネックス　津山城前（ＢＢＨホテルグループ）", "岡山県津山市大手町7-1", null, "https://travel.rakuten.co.jp/HOTEL/53110/53110.html"),
  stay("tsuyama-stay-007", "ホテルセレクトイン津山", "岡山県津山市川崎176", null, "https://travel.rakuten.co.jp/HOTEL/1735/1735.html"),
  stay("tsuyama-stay-008", "ＨＯＴＥＬ　ＡＺ　岡山津山店", "岡山県津山市神戸244-6", null, "https://travel.rakuten.co.jp/HOTEL/196256/196256.html"),
  stay("tsuyama-stay-009", "ＨＯＴＥＬ　Ｒ９　Ｔｈｅ　Ｙａｒｄ　津山", "岡山県津山市院庄字五反田1033-1", null, "https://travel.rakuten.co.jp/HOTEL/183208/183208.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: TSUYAMA_TRAVEL_ACCESSED};
}
export const TSUYAMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("tsuyama-dining-01", "千恵", "岡山県津山市小性町39", null, "https://tabelog.com/okayama/A3304/A330401/33000057/"),
  dining("tsuyama-dining-02", "囲炉裏焼きあなみ", "岡山県津山市阿波1170", null, "https://tabelog.com/okayama/A3304/A330401/33007525/"),
  dining("tsuyama-dining-03", "麺屋 大輔", "岡山県津山市東一宮47-9", null, "https://tabelog.com/okayama/A3304/A330401/33000098/"),
  dining("tsuyama-dining-04", "豚平", "岡山県津山市院庄1051-3", null, "https://tabelog.com/okayama/A3304/A330401/33002651/"),
  dining("tsuyama-dining-05", "橋野食堂", "岡山県津山市川崎549-9", null, "https://tabelog.com/okayama/A3304/A330401/33004349/"),
  dining("tsuyama-dining-06", "広島風お好み焼 くいしん坊", "岡山県津山市川崎138-2", null, "https://tabelog.com/okayama/A3304/A330401/33003240/"),
  dining("tsuyama-dining-07", "つゝや", "岡山県津山市小原82-4", null, "https://tabelog.com/okayama/A3304/A330401/33001725/"),
  dining("tsuyama-dining-08", "イタリアンジェラートLATTE", "岡山県津山市大田750-1", null, "https://tabelog.com/okayama/A3304/A330401/33001943/"),
  dining("tsuyama-dining-09", "お好み焼 三枝", "岡山県津山市上河原441-5", null, "https://tabelog.com/okayama/A3304/A330401/33003885/"),
  dining("tsuyama-dining-10", "いっぱい茶屋　東宝", "岡山県津山市南町1-30", null, "https://tabelog.com/okayama/A3304/A330401/33007787/"),
  dining("tsuyama-dining-11", "肉ハサミ屋", "岡山県津山市山下46-20", null, "https://tabelog.com/okayama/A3304/A330401/33016036/"),
  dining("tsuyama-dining-12", "石川屋", "岡山県津山市上村1442", null, "https://tabelog.com/okayama/A3304/A330401/33002802/"),
  dining("tsuyama-dining-13", "津山城東とうふ茶屋 早瀬豆富店", "岡山県津山市東新町82", null, "https://tabelog.com/okayama/A3304/A330401/33014689/"),
  dining("tsuyama-dining-14", "むぎわらぼうし", "岡山県津山市林田29-21", null, "https://tabelog.com/okayama/A3304/A330401/33006026/"),
  dining("tsuyama-dining-15", "リストランテ シエロ", "岡山県津山市高野山西2230-3", null, "https://tabelog.com/okayama/A3304/A330401/33009459/"),
  dining("tsuyama-dining-16", "酒 肴 おでん 小納屋", "岡山県津山市元魚町531F", null, "https://tabelog.com/okayama/A3304/A330401/33014050/"),
];
export const TSUYAMA_DINING_NAME_SET: ReadonlySet<string> = new Set(TSUYAMA_TRAVEL_DINING.map((row) => row.name_ja));
export const TSUYAMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TSUYAMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const TSUYAMA_TRAVEL_ALL: readonly TravelRow[] = [...TSUYAMA_TRAVEL_DINING, ...TSUYAMA_TRAVEL_STAY, ...TSUYAMA_TRAVEL_SHOPPING, ...TSUYAMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isTsuyamaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TSUYAMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isTsuyamaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TSUYAMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isTsuyamaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTsuyamaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isTsuyamaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TSUYAMA_DINING_NAME_SET.has(row.name_ja);
}
export function tsuyamaSightPhoto(nameJa: string): MimaPlacePhoto | null { return TSUYAMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankTsuyamaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isTsuyamaOnsenPackRow(row) && !isTsuyamaExperiencePackRow(row) && !isTsuyamaStayPackRow(row) && !isTsuyamaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of TSUYAMA_SIGHT_PINS) {
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
export function tsuyamaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '津山市 飲食案内' : 'Tsuyama City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '津山市 宿泊案内' : 'Tsuyama City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '津山市 買物案内' : 'Tsuyama City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function tsuyamaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTsuyamaOnsenPackRow(row)) return 'onsen';
  if (isTsuyamaExperiencePackRow(row)) return 'experience';
  if (isTsuyamaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTsuyamaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function tsuyamaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isTsuyamaOnsenPackRow(row) && !isTsuyamaExperiencePackRow(row) && !isTsuyamaStayPackRow(row) && !isTsuyamaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTsuyamaOnsenPackRow(row);
  if (filter === 'experience') return isTsuyamaExperiencePackRow(row);
  if (filter === 'stay') return isTsuyamaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveTsuyamaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const TSUYAMA_HALL = TSUYAMA.hall;
