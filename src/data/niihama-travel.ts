/**
 * Niihama City travel layer. No frozen pack.
 * Dining from 食べログ 新居浜市 (C38205)×16 with dish JPGs. Stay: Rakuten 部屋 stills×11. Onsen: facility bath stills×8 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NIIHAMA, NIIHAMA_SIGHT_PHOTOS} from './niihama';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const NIIHAMA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const NIIHAMA_TRAVEL_SOURCES = {
  home: 'https://www.city.niihama.lg.jp/', hall: 'https://www.city.niihama.lg.jp/',
  kanko: 'https://besshi.com/',
  minetopia: 'https://besshi.com/',
  tabelogCity: 'https://tabelog.com/ehime/C38205/rstLst/'
} as const;

export const NIIHAMA_ONSEN_PACK_NAMES = ["ビジネスホテル ＭＩＳＯＲＡ（ミソラ） 大浴場", "ホテルアルファーワン新居浜 楠の湯", "ホテルルートイン新居浜 大浴場", "天然温泉 伊予の湯 スーパーホテル新居浜 天然温泉", "ホテル新居浜ヒルズ（ＢＢＨホテルグループ） 大浴場", "オーベルジュ ゆらぎ 温泉", "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ） 貸切風呂", "ホテルＮｏ．１新居浜 大浴場"] as const;
export const NIIHAMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NIIHAMA_ONSEN_PACK_NAMES);
export const NIIHAMA_EXPERIENCE_PACK_NAMES = [] as const;
export const NIIHAMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(NIIHAMA_EXPERIENCE_PACK_NAMES);
export const NIIHAMA_STAY_PACK_NAMES = [] as const;
export const NIIHAMA_STAY_PACK_SET: ReadonlySet<string> = new Set(NIIHAMA_STAY_PACK_NAMES);
export const NIIHAMA_SHOPPING_PACK_NAMES = [] as const;
export const NIIHAMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(NIIHAMA_SHOPPING_PACK_NAMES);

export const NIIHAMA_SIGHT_PINS = ["道の駅マイントピア別子", "あかがねミュージアム", "別子銅山記念館", "東平", "旧山根製錬所煙突"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: NIIHAMA_TRAVEL_ACCESSED};
}
export const NIIHAMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('niihama-stay-001', "リーガロイヤルホテル新居浜", "愛媛県新居浜市前田町6-9", null, "https://travel.rakuten.co.jp/HOTEL/110/110.html"),
  stay('niihama-stay-002', "ホテルアルファーワン新居浜", "愛媛県新居浜市久保田町3-2-5", null, "https://travel.rakuten.co.jp/HOTEL/15899/15899.html"),
  stay('niihama-stay-003', "ホテルルートイン新居浜", "愛媛県新居浜市久保田町3-2-1", null, "https://travel.rakuten.co.jp/HOTEL/28430/28430.html"),
  stay('niihama-stay-004', "天然温泉 伊予の湯 スーパーホテル新居浜", "愛媛県新居浜市高木町3-7", null, "https://travel.rakuten.co.jp/HOTEL/68559/68559.html"),
  stay('niihama-stay-005', "ビジネスホテル 柳屋", "愛媛県新居浜市西原町2-4-26", null, "https://travel.rakuten.co.jp/HOTEL/84861/84861.html"),
  stay('niihama-stay-006', "オーベルジュ ゆらぎ", "愛媛県新居浜市別子山甲122", null, "https://travel.rakuten.co.jp/HOTEL/135373/135373.html"),
  stay('niihama-stay-007', "ホテル マックスビジョン", "愛媛県新居浜市久保田町1-7-7", null, "https://travel.rakuten.co.jp/HOTEL/149406/149406.html"),
  stay('niihama-stay-008', "ホテル新居浜ヒルズプリンス館（ＢＢＨホテルグループ）", "愛媛県新居浜市新須賀町3-4-26", null, "https://travel.rakuten.co.jp/HOTEL/153427/153427.html"),
  stay('niihama-stay-009', "東横ＩＮＮ新居浜駅前", "愛媛県新居浜市坂井町2-4-8", null, "https://travel.rakuten.co.jp/HOTEL/164664/164664.html"),
  stay('niihama-stay-010', "ホテルＮｏ．１新居浜", "愛媛県新居浜市徳常町9-5", null, "https://travel.rakuten.co.jp/HOTEL/181708/181708.html"),
  stay('niihama-stay-011', "ザ・グローバルタワー", "愛媛県新居浜市泉池町1-7", null, "https://travel.rakuten.co.jp/HOTEL/192297/192297.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: NIIHAMA_TRAVEL_ACCESSED};
}
export const NIIHAMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('niihama-dining-01', "八剣伝 さかい筋店", "愛媛県新居浜市西喜光地町2-3", "0897-41-6528", "https://tabelog.com/ehime/A3802/A380203/38004376/"),
  dining('niihama-dining-02', "焼肉 生粋 新居浜本店", "愛媛県新居浜市徳常町7-49 いっこく館2 1F", "0897-47-8529", "https://tabelog.com/ehime/A3802/A380203/38011787/"),
  dining('niihama-dining-03', "カツ丼とんかつ かつ福 新居浜店", "愛媛県新居浜市郷2-367-3", "0897-47-4129", "https://tabelog.com/ehime/A3802/A380203/38010186/"),
  dining('niihama-dining-04', "Restaurant Loca", "愛媛県新居浜市垣生3-乙324", "0897-45-4501", "https://tabelog.com/ehime/A3802/A380203/38015204/"),
  dining('niihama-dining-05', "魚民 新居浜登り道サンロード店", "愛媛県新居浜市泉池町8-32 コロンボ3号ビル1F", "0897-32-0388", "https://tabelog.com/ehime/A3802/A380203/38008138/"),
  dining('niihama-dining-06', "ピエロの巣", "愛媛県新居浜市清水町6", "0897-35-1050", "https://tabelog.com/ehime/A3802/A380203/38003063/"),
  dining('niihama-dining-07', "レーイグラッツェふじ", "愛媛県新居浜市高木町3-2", "0897-34-2211", "https://tabelog.com/ehime/A3802/A380203/38010056/"),
  dining('niihama-dining-08', "精肉問屋直営焼肉店 やきにくの蔵 新居浜つづら淵店", "愛媛県新居浜市若水町2-462-2", "0897-35-1129", "https://tabelog.com/ehime/A3802/A380203/38010682/"),
  dining('niihama-dining-09', "ひうち", "愛媛県新居浜市若水町1-7-3 ホワイトビル 1F", "0897-37-2988", "https://tabelog.com/ehime/A3802/A380203/38005866/"),
  dining('niihama-dining-10', "炭火焼肉 萬まる 川東店", "愛媛県新居浜市東雲町2-6-1", "0897-31-5210", "https://tabelog.com/ehime/A3802/A380203/38014456/"),
  dining('niihama-dining-11', "牛鶏焼肉 しゃーく", "愛媛県新居浜市久保田町3-1-20 モリヤビル 1F", "0897-47-5229", "https://tabelog.com/ehime/A3802/A380203/38014888/"),
  dining('niihama-dining-12', "居心伝 新居浜店", "愛媛県新居浜市高木町2-20", "0897-47-7175", "https://tabelog.com/ehime/A3802/A380203/38009336/"),
  dining('niihama-dining-13', "韓亭", "愛媛県新居浜市新須賀町4-15-24", "0897-32-9425", "https://tabelog.com/ehime/A3802/A380203/38008334/"),
  dining('niihama-dining-14', "鶏焼肉 粋怜", "愛媛県新居浜市若水町1-3-8", "0897-47-6669", "https://tabelog.com/ehime/A3802/A380203/38014367/"),
  dining('niihama-dining-15', "纏", "愛媛県新居浜市泉池町8-3", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380203/38016178/"),
  dining('niihama-dining-16', "ホルモン横丁 肉壱", "愛媛県新居浜市徳常町8-17 パープルヒルズ 1F", "0897-47-8429", "https://tabelog.com/ehime/A3802/A380203/38012821/"),
];

export const NIIHAMA_DINING_NAME_SET: ReadonlySet<string> = new Set(NIIHAMA_TRAVEL_DINING.map((row) => row.name_ja));
export const NIIHAMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const NIIHAMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const NIIHAMA_TRAVEL_ALL: readonly TravelRow[] = [...NIIHAMA_TRAVEL_DINING, ...NIIHAMA_TRAVEL_STAY, ...NIIHAMA_TRAVEL_SHOPPING, ...NIIHAMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isNiihamaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NIIHAMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isNiihamaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NIIHAMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isNiihamaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNiihamaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isNiihamaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NIIHAMA_DINING_NAME_SET.has(row.name_ja);
}
export function niihamaSightPhoto(nameJa: string): MimaPlacePhoto | null { return NIIHAMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankNiihamaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isNiihamaOnsenPackRow(row) && !isNiihamaExperiencePackRow(row) && !isNiihamaStayPackRow(row) && !isNiihamaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of NIIHAMA_SIGHT_PINS) {
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
export function niihamaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '新居浜市 飲食案内' : 'Niihama City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '新居浜市 宿泊案内' : 'Niihama City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '新居浜市 買物案内' : 'Niihama City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function niihamaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isNiihamaOnsenPackRow(row)) return 'onsen';
  if (isNiihamaExperiencePackRow(row)) return 'experience';
  if (isNiihamaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isNiihamaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function niihamaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isNiihamaOnsenPackRow(row) && !isNiihamaExperiencePackRow(row) && !isNiihamaStayPackRow(row) && !isNiihamaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNiihamaOnsenPackRow(row);
  if (filter === 'experience') return isNiihamaExperiencePackRow(row);
  if (filter === 'stay') return isNiihamaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveNiihamaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const NIIHAMA_HALL = NIIHAMA.hall;

