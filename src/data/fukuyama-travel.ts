/**
 * Fukuyama City (Hiroshima) travel layer. Slug fukuyama. No frozen pack.
 * Dining from 食べログ 福山市 (C34207)×16 with dish JPGs. Stay: Rakuten 部屋 stills×16. Onsen: facility bath still×6 (stay≠onsen EXTRA name). Experience: 0 honest.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {FUKUYAMA, FUKUYAMA_SIGHT_PHOTOS} from './fukuyama';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const FUKUYAMA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const FUKUYAMA_TRAVEL_SOURCES = {
  home: 'https://www.city.fukuyama.hiroshima.jp/', hall: 'https://www.city.fukuyama.hiroshima.jp/',
  tabelogCity: 'https://tabelog.com/hiroshima/C34207/rstLst/'
} as const;

export const FUKUYAMA_ONSEN_PACK_NAMES = ["ホテル１－２－３福山 大浴場", "福山オリエンタルホテル 大浴場", "ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）福山 大浴場", "鞆の浦温泉　ホテル鴎風亭 大浴場", "鞆の浦温泉　景勝館　漣亭 大浴場", "鞆の浦温泉　汀邸　遠音近音 大浴場"] as const;
export const FUKUYAMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(FUKUYAMA_ONSEN_PACK_NAMES);
export const FUKUYAMA_EXPERIENCE_PACK_NAMES = [] as const;
export const FUKUYAMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(FUKUYAMA_EXPERIENCE_PACK_NAMES);
export const FUKUYAMA_STAY_PACK_NAMES = [] as const;
export const FUKUYAMA_STAY_PACK_SET: ReadonlySet<string> = new Set(FUKUYAMA_STAY_PACK_NAMES);
export const FUKUYAMA_SHOPPING_PACK_NAMES = [] as const;
export const FUKUYAMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(FUKUYAMA_SHOPPING_PACK_NAMES);

export const FUKUYAMA_SIGHT_PINS = ["福山城", "鞆の浦", "明王院", "ばら公園", "福山駅"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: FUKUYAMA_TRAVEL_ACCESSED};
}
export const FUKUYAMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("fukuyama-stay-001", "リッチモンドホテル福山駅前", "広島県福山市東桜町1-1", null, "https://travel.rakuten.co.jp/HOTEL/109493/109493.html"),
  stay("fukuyama-stay-002", "ダイワロイネットホテル福山駅前", "広島県福山市三之丸町2番16号", "084-973-6880", "https://travel.rakuten.co.jp/HOTEL/179871/179871.html"),
  stay("fukuyama-stay-003", "福山ニューキャッスルホテル", "広島県福山市三之丸町8-16", "084-922-2121", "https://travel.rakuten.co.jp/HOTEL/614/614.html"),
  stay("fukuyama-stay-004", "サンホテル福山", "広島県福山市城見町1-2-33", "084-925-8111", "https://travel.rakuten.co.jp/HOTEL/11123/11123.html"),
  stay("fukuyama-stay-005", "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）福山", "広島県福山市御船町2-8-20", null, "https://travel.rakuten.co.jp/HOTEL/71928/71928.html"),
  stay("fukuyama-stay-006", "福山オリエンタルホテル", "広島県福山市城見町1-1-6", null, "https://travel.rakuten.co.jp/HOTEL/2053/2053.html"),
  stay("fukuyama-stay-007", "ホテル１－２－３福山", "広島県福山市東桜町1-41", null, "https://travel.rakuten.co.jp/HOTEL/15010/15010.html"),
  stay("fukuyama-stay-008", "ベッセルイン福山駅北口（福山城前・福山２号店）", "広島県福山市丸之内１丁目２－１", null, "https://travel.rakuten.co.jp/HOTEL/15087/15087.html"),
  stay("fukuyama-stay-009", "ホテルトレンド福山駅前", "広島県福山市元町12番14号", "084-922-7077", "https://travel.rakuten.co.jp/HOTEL/179326/179326.html"),
  stay("fukuyama-stay-010", "ベッセルホテル福山（国道２号線・福山１号店）", "広島県福山市南本庄３丁目４番３７号", null, "https://travel.rakuten.co.jp/HOTEL/4788/4788.html"),
  stay("fukuyama-stay-011", "ＡＮＣＨＯＲ ＨＯＴＥＬ ＦＵＫＵＹＡＭＡ（アンカーホテル福山）", "広島県福山市城見町1-1-10", null, "https://travel.rakuten.co.jp/HOTEL/168353/168353.html"),
  stay("fukuyama-stay-012", "福山ターミナルホテル", "広島県福山市宝町2-30", null, "https://travel.rakuten.co.jp/HOTEL/860/860.html"),
  stay("fukuyama-stay-013", "ホテルエリアワン福山（ホテルエリアワングループ）", "広島県福山市三之丸町9-12", null, "https://travel.rakuten.co.jp/HOTEL/67197/67197.html"),
  stay("fukuyama-stay-014", "福山プラザホテル", "広島県福山市住吉町1-40", null, "https://travel.rakuten.co.jp/HOTEL/784/784.html"),
  stay("fukuyama-stay-015", "ホテルリブマックス福山駅前", "広島県福山市三之丸町9-22", "0849-91-0050", "https://travel.rakuten.co.jp/HOTEL/168559/168559.html"),
  stay("fukuyama-stay-016", "東横ＩＮＮ福山駅新幹線南口", "広島県福山市三之丸町9-24", "084-916-1045", "https://travel.rakuten.co.jp/HOTEL/151477/151477.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: FUKUYAMA_TRAVEL_ACCESSED};
}
export const FUKUYAMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("fukuyama-dining-01", "旬庵 あ茶ら", "広島県福山市船町4-4", null, "https://tabelog.com/hiroshima/A3403/A340301/34010520/"),
  dining("fukuyama-dining-02", "個室居酒屋 泳ぎイカ×もつ鍋 九州料理 弁慶 福山駅前店", "広島県福山市元町13-5 有楽リオンビル 3F", null, "https://tabelog.com/hiroshima/A3403/A340301/34023481/"),
  dining("fukuyama-dining-03", "焼肉としちゃん", "広島県福山市延広町2-10", null, "https://tabelog.com/hiroshima/A3403/A340301/34033156/"),
  dining("fukuyama-dining-04", "梅の花 福山店", "広島県福山市明神町2-15-51", null, "https://tabelog.com/hiroshima/A3403/A340308/34018007/"),
  dining("fukuyama-dining-05", "や台ずし 福山町2号店", "広島県福山市伏見町4-26", null, "https://tabelog.com/hiroshima/A3403/A340301/34030742/"),
  dining("fukuyama-dining-06", "赤から 福山南蔵王店", "広島県福山市南蔵王町5-4-32", null, "https://tabelog.com/hiroshima/A3403/A340305/34021504/"),
  dining("fukuyama-dining-07", "黒毛和牛バル 529 ミートボックス 福山宮通本店", "広島県福山市延広町2-2", null, "https://tabelog.com/hiroshima/A3403/A340301/34025020/"),
  dining("fukuyama-dining-08", "個室 四国郷土活性化 藁家88 福山店", "広島県福山市元町12-1 福福ビル 1F、2F", null, "https://tabelog.com/hiroshima/A3403/A340301/34026413/"),
  dining("fukuyama-dining-09", "しゃぶ吉", "広島県福山市昭和町2-13", null, "https://tabelog.com/hiroshima/A3403/A340308/34008280/"),
  dining("fukuyama-dining-10", "肉料理ズシオ", "広島県福山市笠岡町2-1", null, "https://tabelog.com/hiroshima/A3403/A340301/34024356/"),
  dining("fukuyama-dining-11", "くいもの屋わん 福山店", "広島県福山市伏見町4-25 オンリービル 2Ｆ", null, "https://tabelog.com/hiroshima/A3403/A340301/34017729/"),
  dining("fukuyama-dining-12", "炉 うろこや", "広島県福山市延広町7-31", null, "https://tabelog.com/hiroshima/A3403/A340301/34030955/"),
  dining("fukuyama-dining-13", "黒毛和牛ホルモン 大衆焼肉しんすけ", "広島県福山市延広町6-8-1", null, "https://tabelog.com/hiroshima/A3403/A340301/34030636/"),
  dining("fukuyama-dining-14", "個室完備 大衆とり酒場 とりいちず 広島福山店", "広島県福山市延広町6-1 大塚貸店舗 1棟 1F・2F・3F", null, "https://tabelog.com/hiroshima/A3403/A340301/34034390/"),
  dining("fukuyama-dining-15", "ヒョンチャンプルコギ 福山駅前", "広島県福山市宝町3-1", null, "https://tabelog.com/hiroshima/A3403/A340301/34030161/"),
  dining("fukuyama-dining-16", "砦", "広島県福山市霞町1-5-2", null, "https://tabelog.com/hiroshima/A3403/A340308/34020532/"),
];
export const FUKUYAMA_DINING_NAME_SET: ReadonlySet<string> = new Set(FUKUYAMA_TRAVEL_DINING.map((row) => row.name_ja));
export const FUKUYAMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const FUKUYAMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const FUKUYAMA_TRAVEL_ALL: readonly TravelRow[] = [...FUKUYAMA_TRAVEL_DINING, ...FUKUYAMA_TRAVEL_STAY, ...FUKUYAMA_TRAVEL_SHOPPING, ...FUKUYAMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isFukuyamaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUKUYAMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isFukuyamaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUKUYAMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isFukuyamaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isFukuyamaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isFukuyamaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return FUKUYAMA_DINING_NAME_SET.has(row.name_ja);
}
export function fukuyamaSightPhoto(nameJa: string): MimaPlacePhoto | null { return FUKUYAMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankFukuyamaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isFukuyamaOnsenPackRow(row) && !isFukuyamaExperiencePackRow(row) && !isFukuyamaStayPackRow(row) && !isFukuyamaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of FUKUYAMA_SIGHT_PINS) {
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
export function fukuyamaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '福山市 飲食案内' : 'Fukuyama City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '福山市 宿泊案内' : 'Fukuyama City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '福山市 買物案内' : 'Fukuyama City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function fukuyamaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isFukuyamaOnsenPackRow(row)) return 'onsen';
  if (isFukuyamaExperiencePackRow(row)) return 'experience';
  if (isFukuyamaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isFukuyamaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function fukuyamaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isFukuyamaOnsenPackRow(row) && !isFukuyamaExperiencePackRow(row) && !isFukuyamaStayPackRow(row) && !isFukuyamaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isFukuyamaOnsenPackRow(row);
  if (filter === 'experience') return isFukuyamaExperiencePackRow(row);
  if (filter === 'stay') return isFukuyamaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveFukuyamaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const FUKUYAMA_HALL = FUKUYAMA.hall;
