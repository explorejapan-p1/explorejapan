/**
 * Tonosho Town travel layer. No frozen pack.
 * Dining from 食べログ 土庄町 (C37322) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct bath name + bath still.
 * Experience: Commons 銚子渓自然動物園お猿の国. Shopping / commerce: honest 0.
 * Do not invent. Do not copy Tokushima / other-Kagawa / Shodoshima-Town TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TONOSHO, TONOSHO_SIGHT_PHOTOS} from './tonosho';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const TONOSHO_TRAVEL_ACCESSED = '2026-09-09' as const;

export const TONOSHO_TRAVEL_SOURCES = {
  home: 'https://www.town.tonosho.kagawa.jp/',
  hall: 'https://www.town.tonosho.kagawa.jp/access.html',
  kankou: 'https://www.town.tonosho.kagawa.jp/kanko/',
  angel: 'https://www.town.tonosho.kagawa.jp/kanko/sightseeing/575.html',
  tabelogCity: 'https://tabelog.com/kagawa/C37322/rstLst/',
  kokusai: 'https://travel.rakuten.co.jp/HOTEL/17990/17990.html',
  greenplaza: 'https://travel.rakuten.co.jp/HOTEL/188032/188032.html'
} as const;

export const TONOSHO_ONSEN_PACK_NAMES = ["小豆島温泉 オリビアン小豆島 夕陽ヶ丘ホテル 天空の露天風呂", "小豆島温泉 天空のオーシャンビューホテル 海廬 露天風呂", "小豆島温泉“瀬戸の御湯”ホテルニュー海風 瀬戸の御湯", "小豆島国際ホテル オリーブの湯", "ホテルグリーンプラザ小豆島 大浴場"] as const;
export const TONOSHO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TONOSHO_ONSEN_PACK_NAMES);
export const TONOSHO_EXPERIENCE_PACK_NAMES = ['銚子渓自然動物園お猿の国'] as const;
export const TONOSHO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TONOSHO_EXPERIENCE_PACK_NAMES);
export const TONOSHO_STAY_PACK_NAMES = [] as const;
export const TONOSHO_STAY_PACK_SET: ReadonlySet<string> = new Set(TONOSHO_STAY_PACK_NAMES);
export const TONOSHO_SHOPPING_PACK_NAMES = [] as const;
export const TONOSHO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TONOSHO_SHOPPING_PACK_NAMES);

export const TONOSHO_SIGHT_PINS = [
  'エンジェルロード',
  '銚子渓',
  '土庄港',
  '迷路のまち',
  '小豆島大観音',
  '大坂城残石記念公園'
] as const;

function stay(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'stay',
    address,
    phone,
    source_url,
    accessed: TONOSHO_TRAVEL_ACCESSED
  };
}

export const TONOSHO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('tonosho-stay-001', "小豆島温泉 オリビアン小豆島 夕陽ヶ丘ホテル", "香川県小豆郡土庄町屋形崎甲63-1", null, "https://travel.rakuten.co.jp/HOTEL/7592/7592.html"),
  stay('tonosho-stay-002', "小豆島温泉 天空のオーシャンビューホテル 海廬", "香川県小豆郡土庄町甲1135", null, "https://travel.rakuten.co.jp/HOTEL/7805/7805.html"),
  stay('tonosho-stay-003', "小豆島ビジネスホテルニューポート", "香川県小豆郡土庄町甲5165-237", null, "https://travel.rakuten.co.jp/HOTEL/10889/10889.html"),
  stay('tonosho-stay-004', "小豆島温泉“瀬戸の御湯”ホテルニュー海風", "香川県小豆郡土庄町甲2111-1", null, "https://travel.rakuten.co.jp/HOTEL/14108/14108.html"),
  stay('tonosho-stay-005', "カントリーイン ザ ホワイトマリーン", "香川県小豆郡土庄町甲1466-1", null, "https://travel.rakuten.co.jp/HOTEL/14167/14167.html"),
  stay('tonosho-stay-006', "ペンション・サンセットコースト", "香川県小豆郡土庄町甲3462-1", null, "https://travel.rakuten.co.jp/HOTEL/17731/17731.html"),
  stay('tonosho-stay-007', "小豆島国際ホテル", "香川県小豆郡土庄町 甲 24-67", null, "https://travel.rakuten.co.jp/HOTEL/17990/17990.html"),
  stay('tonosho-stay-008', "小豆島 オアシス", "香川県小豆郡土庄町上庄1953-7", null, "https://travel.rakuten.co.jp/HOTEL/20128/20128.html"),
  stay('tonosho-stay-009', "海辺の宿 入舟", "香川県小豆郡土庄町甲1171-14", null, "https://travel.rakuten.co.jp/HOTEL/20489/20489.html"),
  stay('tonosho-stay-010', "喜久家旅館", "香川県小豆郡土庄町甲5978-16", null, "https://travel.rakuten.co.jp/HOTEL/147001/147001.html"),
  stay('tonosho-stay-011', "ホテルグリーンプラザ小豆島", "香川県小豆郡土庄町伊喜末2464", null, "https://travel.rakuten.co.jp/HOTEL/188032/188032.html"),
  stay('tonosho-stay-012', "ひとり旅宿 サイヌツノ", "香川県小豆郡土庄町大部甲1029-1", null, "https://travel.rakuten.co.jp/HOTEL/197435/197435.html"),
];

function dining(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'dining',
    address,
    phone,
    source_url,
    accessed: TONOSHO_TRAVEL_ACCESSED
  };
}

export const TONOSHO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('tonosho-dining-01', '島活', '香川県小豆郡土庄町甲267', null, 'https://tabelog.com/kagawa/A3705/A370501/37004672/'),
  dining('tonosho-dining-02', '別邸　銀四郎', '香川県小豆郡土庄町甲5165-113', null, 'https://tabelog.com/kagawa/A3705/A370501/37014217/'),
  dining('tonosho-dining-03', 'ピッツァ カモス', '香川県小豆郡土庄町甲吉ヶ浦6190-80', null, 'https://tabelog.com/kagawa/A3705/A370501/37010501/'),
  dining('tonosho-dining-04', '小豆島ラーメンHISHIO 小豆島エンジェルロード店', '香川県小豆郡土庄町甲24-18', null, 'https://tabelog.com/kagawa/A3705/A370501/37006291/'),
  dining('tonosho-dining-05', '手延べ麺お食事処 銀四郎', '香川県小豆郡土庄町甲5165-94', null, 'https://tabelog.com/kagawa/A3705/A370501/37008675/'),
  dining('tonosho-dining-06', '居酒屋 南国', '香川県小豆郡土庄町鹿島海水浴場', null, 'https://tabelog.com/kagawa/A3705/A370501/37005340/'),
  dining('tonosho-dining-07', '味彩', '香川県小豆郡土庄町甲24-14', null, 'https://tabelog.com/kagawa/A3705/A370501/37004779/'),
  dining('tonosho-dining-08', 'オアシス', '香川県小豆郡土庄町上庄1953-7', null, 'https://tabelog.com/kagawa/A3705/A370501/37006736/'),
  dining('tonosho-dining-09', '來家', '香川県小豆郡土庄町王子前甲41-5', null, 'https://tabelog.com/kagawa/A3705/A370501/37001080/'),
  dining('tonosho-dining-10', 'おおみねのうどん屋さん', '香川県小豆郡土庄町甲5164', null, 'https://tabelog.com/kagawa/A3705/A370501/37005583/'),
  dining('tonosho-dining-11', '宝来軒', '香川県小豆郡土庄町淵崎甲2421-2', null, 'https://tabelog.com/kagawa/A3705/A370501/37011318/'),
  dining('tonosho-dining-12', '海のレストラン', '香川県小豆郡土庄町豊島家浦字小港525-1', null, 'https://tabelog.com/kagawa/A3705/A370501/37007483/'),
  dining('tonosho-dining-13', '海蘆', '香川県小豆郡土庄町甲1135', null, 'https://tabelog.com/kagawa/A3705/A370501/37007016/'),
  dining('tonosho-dining-14', '本格中国料理　錦華', '香川県小豆郡土庄町甲1360-71', null, 'https://tabelog.com/kagawa/A3705/A370501/37005704/'),
  dining('tonosho-dining-15', 'なぎさ', '香川県小豆郡土庄町甲2155-6', null, 'https://tabelog.com/kagawa/A3705/A370501/37005597/'),
  dining('tonosho-dining-16', '料理芸術 かりえん', '香川県小豆郡土庄町東港', null, 'https://tabelog.com/kagawa/A3705/A370501/37000727/'),
];

export const TONOSHO_DINING_NAME_SET: ReadonlySet<string> = new Set(
  TONOSHO_TRAVEL_DINING.map((row) => row.name_ja)
);

export const TONOSHO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TONOSHO_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const TONOSHO_TRAVEL_ALL: readonly TravelRow[] = [
  ...TONOSHO_TRAVEL_DINING,
  ...TONOSHO_TRAVEL_STAY,
  ...TONOSHO_TRAVEL_SHOPPING,
  ...TONOSHO_TRAVEL_COMMERCE
];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);

function isPackCategory(value: string | undefined): value is FacilityCategory {
  return LOOKUP_CATEGORIES.some((cat) => cat === value);
}

function isInfraCategory(value: string): boolean {
  return INFRA_SET.has(value);
}

function isSightsCategory(value: string): boolean {
  return SIGHTS_SET.has(value);
}

export function isTonoshoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TONOSHO_ONSEN_PACK_SET.has(row.name_ja);
}

export function isTonoshoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TONOSHO_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isTonoshoStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTonoshoShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTonoshoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TONOSHO_DINING_NAME_SET.has(row.name_ja);
}

export function tonoshoSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return TONOSHO_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankTonoshoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isTonoshoOnsenPackRow(row) &&
      !isTonoshoExperiencePackRow(row) &&
      !isTonoshoStayPackRow(row) &&
      !isTonoshoDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of TONOSHO_SIGHT_PINS) {
    const hit = sights.find((row) => row.name_ja === pin);
    if (!hit) continue;
    pinned.push(hit);
    used.add(hit.id);
    usedNames.add(hit.name_ja);
  }
  const restTourism: T[] = [];
  const restCultural: T[] = [];
  for (const row of sights) {
    if (used.has(row.id)) continue;
    if (usedNames.has(row.name_ja)) continue;
    used.add(row.id);
    usedNames.add(row.name_ja);
    if (row.category === 'tourism') restTourism.push(row);
    else restCultural.push(row);
  }
  return [...pinned, ...restTourism, ...restCultural];
}

export function tonoshoSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '土庄町 飲食案内' : 'Tonosho dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '土庄町 宿泊案内' : 'Tonosho lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '土庄町 買物案内' : 'Tonosho shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function tonoshoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTonoshoOnsenPackRow(row)) return 'onsen';
  if (isTonoshoExperiencePackRow(row)) return 'experience';
  if (isTonoshoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isTonoshoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function tonoshoPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isTonoshoOnsenPackRow(row) &&
      !isTonoshoExperiencePackRow(row) &&
      !isTonoshoStayPackRow(row) &&
      !isTonoshoDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTonoshoOnsenPackRow(row);
  if (filter === 'experience') return isTonoshoExperiencePackRow(row);
  if (filter === 'stay') return isTonoshoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveTonoshoFilter(c: string | undefined, q: string): FilterId {
  if (
    c === 'sights' ||
    c === 'stay' ||
    c === 'dining' ||
    c === 'onsen' ||
    c === 'experience' ||
    c === 'shopping' ||
    c === 'commerce'
  ) {
    return c;
  }
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}

export const TONOSHO_HALL = TONOSHO.hall;
