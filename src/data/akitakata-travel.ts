/**
 * Akitakata City (Hiroshima) travel layer. Slug akitakata. No frozen pack.
 * Dining from 食べログ 安芸高田市 (C34214)×16 with dish JPGs. Stay: Rakuten 部屋 stills×4. Onsen: facility bath stills×4 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県安芸高田市 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {AKITAKATA, AKITAKATA_SIGHT_PHOTOS} from './akitakata';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const AKITAKATA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const AKITAKATA_TRAVEL_SOURCES = {
  home: 'https://www.akitakata.jp/', hall: 'https://www.akitakata.jp/',
  kanko: 'https://www.akitakata.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34214/rstLst/'
} as const;

export const AKITAKATA_ONSEN_PACK_NAMES = ["たかみや湯の森　福寿荘 露天檜風呂", "神楽門前湯治村 天然温泉", "豪農の家・安芸高田 露天風呂（1）", "里山Ｈａｎａｒｅ 風呂"] as const;
export const AKITAKATA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(AKITAKATA_ONSEN_PACK_NAMES);
export const AKITAKATA_EXPERIENCE_PACK_NAMES = [] as const;
export const AKITAKATA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(AKITAKATA_EXPERIENCE_PACK_NAMES);
export const AKITAKATA_STAY_PACK_NAMES = [] as const;
export const AKITAKATA_STAY_PACK_SET: ReadonlySet<string> = new Set(AKITAKATA_STAY_PACK_NAMES);
export const AKITAKATA_SHOPPING_PACK_NAMES = [] as const;
export const AKITAKATA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(AKITAKATA_SHOPPING_PACK_NAMES);

export const AKITAKATA_SIGHT_PINS = ["神楽門前湯治村（観光）", "吉田郡山城跡", "三矢の訓碑", "毛利元就墓所", "百万一心の碑"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: AKITAKATA_TRAVEL_ACCESSED};
}
export const AKITAKATA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("akitakata-stay-001", "たかみや湯の森　福寿荘", "広島県安芸高田市高宮町原田1779-1", "0826-59-0059", "https://travel.rakuten.co.jp/HOTEL/158368/158368.html"),
  stay("akitakata-stay-002", "神楽門前湯治村", "広島県安芸高田市美土里町本郷14627", "0826-54-0888", "https://travel.rakuten.co.jp/HOTEL/168595/168595.html"),
  stay("akitakata-stay-003", "豪農の家・安芸高田", "広島県安芸高田市吉田町上入江871", "03-6905-6825", "https://travel.rakuten.co.jp/HOTEL/171966/171966.html"),
  stay("akitakata-stay-004", "里山Ｈａｎａｒｅ", "広島県安芸高田市吉田町上入江1013", "03-6905-6825", "https://travel.rakuten.co.jp/HOTEL/188249/188249.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: AKITAKATA_TRAVEL_ACCESSED};
}
export const AKITAKATA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("akitakata-dining-01", "ラーメン長洲", "広島県安芸高田市向原町長田2139-1", null, "https://tabelog.com/hiroshima/A3405/A340503/34020690/"),
  dining("akitakata-dining-02", "サンパラソル", "広島県安芸高田市吉田町常友1270-3", null, "https://tabelog.com/hiroshima/A3405/A340503/34020319/"),
  dining("akitakata-dining-03", "鮪専門 かざぐるま", "広島県安芸高田市向原町坂1365", null, "https://tabelog.com/hiroshima/A3405/A340503/34028965/"),
  dining("akitakata-dining-04", "にゃんこ屋", "広島県安芸高田市吉田町常友1610-1", null, "https://tabelog.com/hiroshima/A3405/A340503/34011988/"),
  dining("akitakata-dining-05", "なかむら", "広島県安芸高田市甲田町高田原1424", null, "https://tabelog.com/hiroshima/A3405/A340503/34031973/"),
  dining("akitakata-dining-06", "縄文あいす　ひとは館", "広島県安芸高田市向原町長田1857", null, "https://tabelog.com/hiroshima/A3405/A340503/34011989/"),
  dining("akitakata-dining-07", "キッチンよしだ", "広島県安芸高田市向原町坂647", null, "https://tabelog.com/hiroshima/A3405/A340503/34005899/"),
  dining("akitakata-dining-08", "みわ", "広島県安芸高田市高宮町", null, "https://tabelog.com/hiroshima/A3405/A340503/34030279/"),
  dining("akitakata-dining-09", "山崎", "広島県安芸高田市甲田町高田原1639-2", null, "https://tabelog.com/hiroshima/A3405/A340503/34029302/"),
  dining("akitakata-dining-10", "台湾料理 福祥順 吉田店", "広島県安芸高田市吉田町吉田1952-1", null, "https://tabelog.com/hiroshima/A3405/A340503/34018447/"),
  dining("akitakata-dining-11", "つくしんぼ", "広島県安芸高田市吉田町吉田269-2", null, "https://tabelog.com/hiroshima/A3405/A340503/34013957/"),
  dining("akitakata-dining-12", "ふみちゃん家のたまご", "広島県安芸高田市甲田町下小原732-11", null, "https://tabelog.com/hiroshima/A3405/A340503/34032977/"),
  dining("akitakata-dining-13", "長浜ラーメン 博多屋 吉田店", "広島県安芸高田市吉田町吉田1938", null, "https://tabelog.com/hiroshima/A3405/A340503/34013617/"),
  dining("akitakata-dining-14", "本郷パーキングエリア（上り線）スナックコーナー", "広島県安芸高田市美土里町本郷5305", null, "https://tabelog.com/hiroshima/A3405/A340503/34013327/"),
  dining("akitakata-dining-15", "シャルムお好み焼店", "広島県安芸高田市甲田町高田原1022-48", null, "https://tabelog.com/hiroshima/A3405/A340503/34009326/"),
  dining("akitakata-dining-16", "ささき亭", "広島県安芸高田市向原町長田1132-2", null, "https://tabelog.com/hiroshima/A3405/A340503/34020100/"),
];
export const AKITAKATA_DINING_NAME_SET: ReadonlySet<string> = new Set(AKITAKATA_TRAVEL_DINING.map((row) => row.name_ja));
export const AKITAKATA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const AKITAKATA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const AKITAKATA_TRAVEL_ALL: readonly TravelRow[] = [...AKITAKATA_TRAVEL_DINING, ...AKITAKATA_TRAVEL_STAY, ...AKITAKATA_TRAVEL_SHOPPING, ...AKITAKATA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isAkitakataOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKITAKATA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isAkitakataExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKITAKATA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isAkitakataStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAkitakataShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAkitakataDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AKITAKATA_DINING_NAME_SET.has(row.name_ja);
}
export function akitakataSightPhoto(nameJa: string): MimaPlacePhoto | null { return AKITAKATA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankAkitakataSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isAkitakataOnsenPackRow(row) && !isAkitakataExperiencePackRow(row) && !isAkitakataStayPackRow(row) && !isAkitakataDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of AKITAKATA_SIGHT_PINS) {
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
export function akitakataSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '安芸高田市 飲食案内' : 'Akitakata City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '安芸高田市 宿泊案内' : 'Akitakata City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '安芸高田市 買物案内' : 'Akitakata City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function akitakataTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isAkitakataOnsenPackRow(row)) return 'onsen';
  if (isAkitakataExperiencePackRow(row)) return 'experience';
  if (isAkitakataStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isAkitakataDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function akitakataPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isAkitakataOnsenPackRow(row) && !isAkitakataExperiencePackRow(row) && !isAkitakataStayPackRow(row) && !isAkitakataDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isAkitakataOnsenPackRow(row);
  if (filter === 'experience') return isAkitakataExperiencePackRow(row);
  if (filter === 'stay') return isAkitakataStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveAkitakataFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const AKITAKATA_HALL = AKITAKATA.hall;
