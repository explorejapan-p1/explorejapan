/**
 * Ayagawa Town travel layer. No frozen pack.
 * Dining from 食べログ 綾川町 (C37387). Stay: Precious Hotel Rakuten room. Onsen honest 0. Experience: 道の駅滝宮 Commons.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {AYAGAWA, AYAGAWA_SIGHT_PHOTOS} from './ayagawa';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const AYAGAWA_TRAVEL_ACCESSED = '2026-09-07' as const;
export const AYAGAWA_TRAVEL_SOURCES = {
  home: 'https://www.town.ayagawa.lg.jp/', hall: 'https://www.town.ayagawa.lg.jp/',
  kankou: 'https://www.town.ayagawa.lg.jp/',
  tenmangu: 'https://ja.wikipedia.org/wiki/%E7%80%A7%E5%AE%AE%E5%A4%A9%E6%BA%80%E5%AE%AE',
  tabelogCity: 'https://tabelog.com/kagawa/C37387/rstLst/',
  precious: 'https://travel.rakuten.co.jp/HOTEL/192304/192304.html'
} as const;

export const AYAGAWA_ONSEN_PACK_NAMES = [] as const;
export const AYAGAWA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(AYAGAWA_ONSEN_PACK_NAMES);
export const AYAGAWA_EXPERIENCE_PACK_NAMES = ['道の駅滝宮'] as const;
export const AYAGAWA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(AYAGAWA_EXPERIENCE_PACK_NAMES);
export const AYAGAWA_STAY_PACK_NAMES = [] as const;
export const AYAGAWA_STAY_PACK_SET: ReadonlySet<string> = new Set(AYAGAWA_STAY_PACK_NAMES);
export const AYAGAWA_SHOPPING_PACK_NAMES = [] as const;
export const AYAGAWA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(AYAGAWA_SHOPPING_PACK_NAMES);

export const AYAGAWA_SIGHT_PINS = ['滝宮天満宮','瀧宮神社','高鉢山','堤山（羽床富士）','菩提院','金毘羅灯籠（滝宮）'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: AYAGAWA_TRAVEL_ACCESSED};
}
export const AYAGAWA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('ayagawa-stay-01', 'Ｐｒｅｃｉｏｕｓ　Ｈｏｔｅｌ　綾川', '香川県綾歌郡綾川町滝宮169-3', '087-810-1155', 'https://travel.rakuten.co.jp/HOTEL/192304/192304.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: AYAGAWA_TRAVEL_ACCESSED};
}
export const AYAGAWA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('ayagawa-dining-01', '大衆酒場 つばめ', '香川県綾歌郡綾川町萱原451-1', '087-816-0805', 'https://tabelog.com/kagawa/A3702/A370202/37014666/'),
  dining('ayagawa-dining-02', 'もみじ温泉', '香川県綾歌郡綾川町東分甲343-3', '087-878-1155', 'https://tabelog.com/kagawa/A3702/A370202/37009775/'),
  dining('ayagawa-dining-03', 'あきちゃん', '香川県綾歌郡綾川町畑田3036-1', '087-877-2468', 'https://tabelog.com/kagawa/A3702/A370202/37002018/'),
  dining('ayagawa-dining-04', '美讃大野', '香川県綾歌郡綾川町陶1292-3', '087-876-3053', 'https://tabelog.com/kagawa/A3702/A370202/37001568/'),
  dining('ayagawa-dining-05', 'だがし 夢や イオンモール綾川店', '香川県綾歌郡綾川町萱原822-1 イオンモール綾川 3F', '087-876-8677', 'https://tabelog.com/kagawa/A3702/A370202/37012185/'),
  dining('ayagawa-dining-06', 'ケンタッキーフライドチキン イオンモール綾川店', '香川県綾歌郡綾川町萱原822-1 イオンモール綾川 1F', '087-876-5230', 'https://tabelog.com/kagawa/A3702/A370202/37011423/'),
  dining('ayagawa-dining-07', '居食家 白桜', '香川県綾歌郡綾川町羽床下88-5', null, 'https://tabelog.com/kagawa/A3702/A370202/37014899/'),
  dining('ayagawa-dining-08', 'さぬきうどんの駅 綾川', '香川県綾歌郡綾川町滝宮1578 道の駅 滝宮 綾川町うどん会館', '087-813-7037', 'https://tabelog.com/kagawa/A3702/A370202/37011446/'),
  dining('ayagawa-dining-09', '焼き豚P', '香川県綾歌郡綾川町羽床下307-1', '087-876-3354', 'https://tabelog.com/kagawa/A3702/A370201/37000889/'),
  dining('ayagawa-dining-10', 'ひまわりsun 俺の食堂', '香川県綾歌郡綾川町山田上2178', '080-4039-4437', 'https://tabelog.com/kagawa/A3702/A370202/37014635/'),
  dining('ayagawa-dining-11', 'さくらの会', '香川県綾歌郡綾川町東分乙390-17 高山航空公園内', '非公開', 'https://tabelog.com/kagawa/A3702/A370202/37001427/'),
  dining('ayagawa-dining-12', 'アイランド食品', '香川県綾歌郡綾川町滝宮1801-1', '087-876-2514', 'https://tabelog.com/kagawa/A3702/A370202/37012162/'),
  dining('ayagawa-dining-13', '鰻のへそ 滝宮店', '香川県綾歌郡綾川町滝宮1578', '087-899-6665', 'https://tabelog.com/kagawa/A3702/A370202/37013475/'),
  dining('ayagawa-dining-14', 'こっこハウス綾川', '香川県綾歌郡綾川町陶1105', null, 'https://tabelog.com/kagawa/A3702/A370202/37012766/'),
  dining('ayagawa-dining-15', '山ちゃん', '香川県綾歌郡綾川町畑田2265-4', '080-2975-1986', 'https://tabelog.com/kagawa/A3702/A370202/37011073/'),
  dining('ayagawa-dining-16', '手打うどん たむら', '香川県綾歌郡綾川町陶1090-3', '087-876-0922', 'https://tabelog.com/kagawa/A3702/A370202/37000077/'),
];

export const AYAGAWA_DINING_NAME_SET: ReadonlySet<string> = new Set(AYAGAWA_TRAVEL_DINING.map((row) => row.name_ja));
export const AYAGAWA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const AYAGAWA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const AYAGAWA_TRAVEL_ALL: readonly TravelRow[] = [...AYAGAWA_TRAVEL_DINING, ...AYAGAWA_TRAVEL_STAY, ...AYAGAWA_TRAVEL_SHOPPING, ...AYAGAWA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isAyagawaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AYAGAWA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isAyagawaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AYAGAWA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isAyagawaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAyagawaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isAyagawaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AYAGAWA_DINING_NAME_SET.has(row.name_ja);
}
export function ayagawaSightPhoto(nameJa: string): MimaPlacePhoto | null { return AYAGAWA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankAyagawaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isAyagawaOnsenPackRow(row) && !isAyagawaExperiencePackRow(row) && !isAyagawaStayPackRow(row) && !isAyagawaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of AYAGAWA_SIGHT_PINS) {
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
export function ayagawaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '綾川町 飲食案内' : 'Ayagawa dining list';
  if (row.category === 'stay') return locale === 'ja' ? '綾川町 宿泊案内' : 'Ayagawa lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '綾川町 買物案内' : 'Ayagawa shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function ayagawaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isAyagawaOnsenPackRow(row)) return 'onsen';
  if (isAyagawaExperiencePackRow(row)) return 'experience';
  if (isAyagawaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isAyagawaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function ayagawaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isAyagawaOnsenPackRow(row) && !isAyagawaExperiencePackRow(row) && !isAyagawaStayPackRow(row) && !isAyagawaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isAyagawaOnsenPackRow(row);
  if (filter === 'experience') return isAyagawaExperiencePackRow(row);
  if (filter === 'stay') return isAyagawaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveAyagawaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const AYAGAWA_HALL = AYAGAWA.hall;
