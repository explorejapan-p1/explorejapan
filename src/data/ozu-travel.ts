/**
 * Ozu City travel layer. No frozen pack.
 * Dining from 食べログ 大洲市 (C38207)×16 with dish JPGs. Stay: Rakuten 部屋 stills×8. Onsen: facility bath stills×3 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {OZU, OZU_SIGHT_PHOTOS} from './ozu';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const OZU_TRAVEL_ACCESSED = '2026-09-09' as const;
export const OZU_TRAVEL_SOURCES = {
  home: 'https://www.city.ozu.ehime.jp/', hall: 'https://www.city.ozu.ehime.jp/',
  kanko: 'https://www.city.ozu.ehime.jp/site/kanko/1223.html',
  garyu: 'https://www.garyusanso.jp/',
  tabelogCity: 'https://tabelog.com/ehime/C38207/rstLst/'
} as const;

export const OZU_ONSEN_PACK_NAMES = ["鹿野川温泉 大洲市交流促進センター 鹿野川荘 大浴場", "松楽旅館 大浴場", "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」 天然温泉"] as const;
export const OZU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(OZU_ONSEN_PACK_NAMES);
export const OZU_EXPERIENCE_PACK_NAMES = [] as const;
export const OZU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(OZU_EXPERIENCE_PACK_NAMES);
export const OZU_STAY_PACK_NAMES = [] as const;
export const OZU_STAY_PACK_SET: ReadonlySet<string> = new Set(OZU_STAY_PACK_NAMES);
export const OZU_SHOPPING_PACK_NAMES = [] as const;
export const OZU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(OZU_SHOPPING_PACK_NAMES);

export const OZU_SIGHT_PINS = ["大洲城", "臥龍山荘", "伊予大洲駅", "長浜大橋"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: OZU_TRAVEL_ACCESSED};
}
export const OZU_TRAVEL_STAY: readonly TravelRow[] = [

  stay("ozu-stay-001", "ホテル オータ", "愛媛県大洲市田口甲36－4", null, "https://travel.rakuten.co.jp/HOTEL/19200/19200.html"),
  stay("ozu-stay-002", "鹿野川温泉 大洲市交流促進センター 鹿野川荘", "愛媛県大洲市肱川町宇和川588-1", null, "https://travel.rakuten.co.jp/HOTEL/56672/56672.html"),
  stay("ozu-stay-003", "オオズプラザホテル", "愛媛県大洲市東大洲1341", null, "https://travel.rakuten.co.jp/HOTEL/67302/67302.html"),
  stay("ozu-stay-004", "料苑たる井", "愛媛県大洲市若宮465-1", null, "https://travel.rakuten.co.jp/HOTEL/129584/129584.html"),
  stay("ozu-stay-005", "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」", "愛媛県大洲市東大洲1487", null, "https://travel.rakuten.co.jp/HOTEL/166558/166558.html"),
  stay("ozu-stay-006", "ＮＩＰＰＯＮＩＡ ＨＯＴＥＬ 大洲 城下町", "愛媛県大洲市大洲378", null, "https://travel.rakuten.co.jp/HOTEL/179179/179179.html"),
  stay("ozu-stay-007", "まろや四季", "愛媛県大洲市大洲152-1", null, "https://travel.rakuten.co.jp/HOTEL/187626/187626.html"),
  stay("ozu-stay-008", "Ｃａｆｅ＆Ｈｏｔｅｌ Ｐａｌｅｔｔｅ ＳＴＡＹｓ", "愛媛県大洲市大洲373", null, "https://travel.rakuten.co.jp/HOTEL/196802/196802.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: OZU_TRAVEL_ACCESSED};
}
export const OZU_TRAVEL_DINING: readonly TravelRow[] = [

  dining("ozu-dining-01", "ルアン NIPPONIA HOTEL 大洲 城下町", "愛媛県大洲市大洲888 NIPPONIA HOTEL 大洲 城下町", "0120-210-289", "https://tabelog.com/ehime/A3803/A380301/38013794/"),
  dining("ozu-dining-02", "隠れ家 恵姫", "愛媛県大洲市平野町野田3370-1", "080-9285-8443", "https://tabelog.com/ehime/A3803/A380301/38015890/"),
  dining("ozu-dining-03", "韓国焼肉花月", "愛媛県大洲市大洲148", "0893-37-4608", "https://tabelog.com/ehime/A3803/A380301/38016321/"),
  dining("ozu-dining-04", "IKKYU", "愛媛県大洲市東大洲93-2", "0893-24-0024", "https://tabelog.com/ehime/A3803/A380301/38009979/"),
  dining("ozu-dining-05", "分油屋", "愛媛県大洲市大洲649-1", "0893-57-9300", "https://tabelog.com/ehime/A3803/A380301/38011908/"),
  dining("ozu-dining-06", "すき家 56号大洲松ヶ花店", "愛媛県大洲市新谷乙543-1", "非公開", "https://tabelog.com/ehime/A3803/A380301/38011408/"),
  dining("ozu-dining-07", "郷土料理 旬", "愛媛県大洲市大洲652", "0893-23-4031", "https://tabelog.com/ehime/A3803/A380301/38000862/"),
  dining("ozu-dining-08", "グリーンハウス", "愛媛県大洲市徳森319", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380301/38005682/"),
  dining("ozu-dining-09", "なな", "愛媛県大洲市田口甲390-5", "0893-24-0770", "https://tabelog.com/ehime/A3803/A380301/38003495/"),
  dining("ozu-dining-10", "モスバーガー 大洲店", "愛媛県大洲市新谷乙504-7", "0893-25-1318", "https://tabelog.com/ehime/A3803/A380301/38007511/"),
  dining("ozu-dining-11", "cafeさんぽ", "愛媛県大洲市平野町野田3402-1", "090-4974-4674", "https://tabelog.com/ehime/A3803/A380301/38011887/"),
  dining("ozu-dining-12", "お好み焼き にし川", "愛媛県大洲市大洲669-3", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3803/A380301/38010709/"),
  dining("ozu-dining-13", "たるよ志", "愛媛県大洲市長浜622-2", "0893-52-0227", "https://tabelog.com/ehime/A3803/A380301/38008504/"),
  dining("ozu-dining-14", "きつねや", "愛媛県大洲市中村244-1", "050-1808-5996", "https://tabelog.com/ehime/A3803/A380301/38016065/"),
  dining("ozu-dining-15", "山栄堂", "愛媛県大洲市常磐町128-1", "0893-24-5322", "https://tabelog.com/ehime/A3803/A380301/38001526/"),
  dining("ozu-dining-16", "わか宮食堂", "愛媛県大洲市東大洲195", "0893-24-5738", "https://tabelog.com/ehime/A3803/A380301/38003561/"),
];


export const OZU_DINING_NAME_SET: ReadonlySet<string> = new Set(OZU_TRAVEL_DINING.map((row) => row.name_ja));
export const OZU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const OZU_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const OZU_TRAVEL_ALL: readonly TravelRow[] = [...OZU_TRAVEL_DINING, ...OZU_TRAVEL_STAY, ...OZU_TRAVEL_SHOPPING, ...OZU_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOzuOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OZU_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOzuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OZU_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOzuStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOzuShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOzuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OZU_DINING_NAME_SET.has(row.name_ja);
}
export function ozuSightPhoto(nameJa: string): MimaPlacePhoto | null { return OZU_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOzuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOzuOnsenPackRow(row) && !isOzuExperiencePackRow(row) && !isOzuStayPackRow(row) && !isOzuDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of OZU_SIGHT_PINS) {
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
export function ozuSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '大洲市 飲食案内' : 'Ozu City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '大洲市 宿泊案内' : 'Ozu City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '大洲市 買物案内' : 'Ozu City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function ozuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOzuOnsenPackRow(row)) return 'onsen';
  if (isOzuExperiencePackRow(row)) return 'experience';
  if (isOzuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOzuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function ozuPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOzuOnsenPackRow(row) && !isOzuExperiencePackRow(row) && !isOzuStayPackRow(row) && !isOzuDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOzuOnsenPackRow(row);
  if (filter === 'experience') return isOzuExperiencePackRow(row);
  if (filter === 'stay') return isOzuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOzuFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const OZU_HALL = OZU.hall;

