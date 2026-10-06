/**
 * Kaita (Hiroshima Aki District) travel layer.
 * Dining from 食べログ 海田町 (C34304)×16 with dish JPGs. Stay: Rakuten 部屋 stills×2. Onsen: facility bath still×1 (stay≠onsen EXTRA name). Experience: 0 honest.
 * Address gate: 広島県安芸郡海田町 only.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KAITA, KAITA_SIGHT_PHOTOS} from './kaita';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KAITA_TRAVEL_ACCESSED = '2026-09-10' as const;
export const KAITA_TRAVEL_SOURCES = {
  home: 'https://www.town.kaita.lg.jp/', hall: 'https://www.town.kaita.lg.jp/',
  kanko: 'https://www.town.kaita.lg.jp/site/kaita-info/693.html',
  tabelogCity: 'https://tabelog.com/hiroshima/C34304/rstLst/'
} as const;

export const KAITA_ONSEN_PACK_NAMES = ["ホテルアストンプラザ広島２号館 大浴場"] as const;
export const KAITA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KAITA_ONSEN_PACK_NAMES);
export const KAITA_EXPERIENCE_PACK_NAMES = [] as const;
export const KAITA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KAITA_EXPERIENCE_PACK_NAMES);
export const KAITA_STAY_PACK_NAMES = [] as const;
export const KAITA_STAY_PACK_SET: ReadonlySet<string> = new Set(KAITA_STAY_PACK_NAMES);
export const KAITA_SHOPPING_PACK_NAMES = [] as const;
export const KAITA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KAITA_SHOPPING_PACK_NAMES);

export const KAITA_SIGHT_PINS = ["旧千葉家住宅", "熊野神社", "大師寺", "織田幹雄記念館", "海田観音免のクスノキ"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KAITA_TRAVEL_ACCESSED};
}
export const KAITA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("kaita-stay-001", "ホテルアストンプラザ広島２号館（２０２６年５月１日新築オープン）", "広島県安芸郡海田町南大正町1-12", "082-881-0003", "https://travel.rakuten.co.jp/HOTEL/199100/199100.html"),
  stay("kaita-stay-002", "海田中央ホテル", "広島県安芸郡海田町大正町7-4", "082-823-7262", "https://travel.rakuten.co.jp/HOTEL/145333/145333.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KAITA_TRAVEL_ACCESSED};
}
export const KAITA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("kaita-dining-01", "Kittan", "広島県安芸郡海田町南幸町15-3", null, "https://tabelog.com/hiroshima/A3401/A340404/34031669/"),
  dining("kaita-dining-02", "やきとり三国志", "広島県安芸郡海田町大正町2-25", null, "https://tabelog.com/hiroshima/A3401/A340404/34004181/"),
  dining("kaita-dining-03", "居酒屋竹の子", "広島県安芸郡海田町窪町4-52", null, "https://tabelog.com/hiroshima/A3401/A340404/34009191/"),
  dining("kaita-dining-04", "コンディトライ モーツアルト 海田店", "広島県安芸郡海田町南大正町4-31", null, "https://tabelog.com/hiroshima/A3401/A340404/34010977/"),
  dining("kaita-dining-05", "ゆたか食堂", "広島県安芸郡海田町大正町8-1", null, "https://tabelog.com/hiroshima/A3401/A340404/34029875/"),
  dining("kaita-dining-06", "焼肉 てっちゃん 海田店", "広島県安芸郡海田町日の出町3-15", null, "https://tabelog.com/hiroshima/A3401/A340404/34029723/"),
  dining("kaita-dining-07", "讃岐屋 海田店", "広島県安芸郡海田町南大正町4-26", null, "https://tabelog.com/hiroshima/A3401/A340404/34005564/"),
  dining("kaita-dining-08", "ユア カフェ", "広島県安芸郡海田町月見町8-34", null, "https://tabelog.com/hiroshima/A3401/A340404/34023877/"),
  dining("kaita-dining-09", "お好み焼 鉄板焼 徳川 海田店", "広島県安芸郡海田町栄町5-16", null, "https://tabelog.com/hiroshima/A3401/A340404/34007122/"),
  dining("kaita-dining-10", "肉豆冨とレモンサワー 大衆食堂 安べゑ 海田市駅南口店", "広島県安芸郡海田町窪町7-22 DMビル 2F", null, "https://tabelog.com/hiroshima/A3401/A340404/34027937/"),
  dining("kaita-dining-11", "LOUPE COFFEE STAND 海田店", "広島県安芸郡海田町蟹原2-11-8", null, "https://tabelog.com/hiroshima/A3401/A340404/34034936/"),
  dining("kaita-dining-12", "味の館", "広島県安芸郡海田町栄町7-1ビルA", null, "https://tabelog.com/hiroshima/A3401/A340404/34002154/"),
  dining("kaita-dining-13", "牛角 海田店", "広島県安芸郡海田町窪町9-19", null, "https://tabelog.com/hiroshima/A3401/A340404/34010510/"),
  dining("kaita-dining-14", "八剣伝 海田南本町店", "広島県安芸郡海田町南本町1-10", null, "https://tabelog.com/hiroshima/A3401/A340404/34009241/"),
  dining("kaita-dining-15", "魚民のすし 海田市北口駅前店", "広島県安芸郡海田町新町16-9 山岡ビル 1F", null, "https://tabelog.com/hiroshima/A3401/A340404/34034391/"),
  dining("kaita-dining-16", "うつわ", "広島県安芸郡海田町大正町2-25", null, "https://tabelog.com/hiroshima/A3401/A340404/34013191/"),
];
export const KAITA_DINING_NAME_SET: ReadonlySet<string> = new Set(KAITA_TRAVEL_DINING.map((row) => row.name_ja));
export const KAITA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KAITA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KAITA_TRAVEL_ALL: readonly TravelRow[] = [...KAITA_TRAVEL_DINING, ...KAITA_TRAVEL_STAY, ...KAITA_TRAVEL_SHOPPING, ...KAITA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKaitaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAITA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKaitaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAITA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKaitaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKaitaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKaitaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAITA_DINING_NAME_SET.has(row.name_ja);
}
export function kaitaSightPhoto(nameJa: string): MimaPlacePhoto | null { return KAITA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKaitaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKaitaOnsenPackRow(row) && !isKaitaExperiencePackRow(row) && !isKaitaStayPackRow(row) && !isKaitaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KAITA_SIGHT_PINS) {
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
export function kaitaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '海田町 飲食案内' : 'Kaita dining list';
  if (row.category === 'stay') return locale === 'ja' ? '海田町 宿泊案内' : 'Kaita lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '海田町 買物案内' : 'Kaita shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kaitaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKaitaOnsenPackRow(row)) return 'onsen';
  if (isKaitaExperiencePackRow(row)) return 'experience';
  if (isKaitaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKaitaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kaitaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKaitaOnsenPackRow(row) && !isKaitaExperiencePackRow(row) && !isKaitaStayPackRow(row) && !isKaitaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKaitaOnsenPackRow(row);
  if (filter === 'experience') return isKaitaExperiencePackRow(row);
  if (filter === 'stay') return isKaitaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKaitaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KAITA_HALL = KAITA.hall;
