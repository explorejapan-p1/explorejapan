/**
 * Mitoyo City travel layer. No frozen pack.
 * Dining from 食べログ 三豊市 (C37208) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct bath names + bath stills.
 * Experience: Commons 道の駅たからだのさと. Shopping / commerce: honest 0.
 * Do not invent. Do not copy Tokushima / other-Kagawa TRAVEL_* rows or photos.
 * 高屋神社・天空の鳥居 stays on Kanonji hub — not listed here.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MITOYO, MITOYO_SIGHT_PHOTOS} from './mitoyo';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const MITOYO_TRAVEL_ACCESSED = '2026-09-09' as const;

export const MITOYO_TRAVEL_SOURCES = {
  home: 'https://www.city.mitoyo.lg.jp/',
  hall: 'https://www.city.mitoyo.lg.jp/',
  kankou: 'https://www.mitoyo-kanko.com/',
  chichibu: 'https://www.mitoyo-kanko.com/chichibugahama/',
  tabelogCity: 'https://tabelog.com/kagawa/C37208/rstLst/',
  lepaule: 'https://travel.rakuten.co.jp/HOTEL/140762/140762.html',
  mino: 'https://travel.rakuten.co.jp/HOTEL/136191/136191.html'
} as const;

export const MITOYO_ONSEN_PACK_NAMES = ["ふれあいパークみの 露天風呂", "ル・ポール粟島 大浴場"] as const;
export const MITOYO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MITOYO_ONSEN_PACK_NAMES);
export const MITOYO_EXPERIENCE_PACK_NAMES = ['道の駅たからだのさと'] as const;
export const MITOYO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MITOYO_EXPERIENCE_PACK_NAMES);
export const MITOYO_STAY_PACK_NAMES = [] as const;
export const MITOYO_STAY_PACK_SET: ReadonlySet<string> = new Set(MITOYO_STAY_PACK_NAMES);
export const MITOYO_SHOPPING_PACK_NAMES = [] as const;
export const MITOYO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MITOYO_SHOPPING_PACK_NAMES);

export const MITOYO_SIGHT_PINS = [
  '父母ヶ浜',
  '紫雲出山',
  '本山寺',
  '弥谷寺',
  '大興寺',
  '津嶋神社',
  '詫間駅',
  '不動の滝'
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
    accessed: MITOYO_TRAVEL_ACCESSED
  };
}

export const MITOYO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('mitoyo-stay-001', "天然いやだに温泉大師の湯ふれあいパークみの", "香川県三豊市三野町大見乙74", null, "https://travel.rakuten.co.jp/HOTEL/136191/136191.html"),
  stay('mitoyo-stay-002', "ル・ポール粟島", "香川県三豊市詫間町粟島1418－2", null, "https://travel.rakuten.co.jp/HOTEL/140762/140762.html"),
  stay('mitoyo-stay-003', "郷の宿陶山", "香川県三豊市詫間町詫間1355-1", null, "https://travel.rakuten.co.jp/HOTEL/144975/144975.html"),
  stay('mitoyo-stay-004', "アミーコ", "香川県三豊市山本町神田3836-1", null, "https://travel.rakuten.co.jp/HOTEL/153505/153505.html"),
  stay('mitoyo-stay-005', "燧‐Ｈｉｕｃｈｉ‐", "香川県三豊市詫間町大浜甲2144-4", null, "https://travel.rakuten.co.jp/HOTEL/153514/153514.html"),
  stay('mitoyo-stay-006', "Ｂａｙ Ｗｉｎｄ", "香川県三豊市仁尾町家の浦630-2", null, "https://travel.rakuten.co.jp/HOTEL/168689/168689.html"),
  stay('mitoyo-stay-007', "Ｌａ ｔｏｉｌｅ", "香川県三豊市高瀬町下麻272", null, "https://travel.rakuten.co.jp/HOTEL/171913/171913.html"),
  stay('mitoyo-stay-008', "大森商店", "香川県三豊市詫間町大浜甲130-1", null, "https://travel.rakuten.co.jp/HOTEL/177857/177857.html"),
  stay('mitoyo-stay-009', "瀬戸内うらしま邸／民泊", "香川県三豊市詫間町積1158-1", null, "https://travel.rakuten.co.jp/HOTEL/186506/186506.html"),
  stay('mitoyo-stay-010', "縹茫（ひょうぼう）", "香川県三豊市詫間町積992", null, "https://travel.rakuten.co.jp/HOTEL/188435/188435.html"),
  stay('mitoyo-stay-011', "積凪ＭＯＫＵＲＡＳＵ棟 （泊Ｒｕｔｔｏ）", "香川県三豊市詫間町積585-1", null, "https://travel.rakuten.co.jp/HOTEL/189086/189086.html"),
  stay('mitoyo-stay-012', "オーシャンドッグリゾート父母ヶ浜", "香川県三豊市仁尾町仁尾曽保甲1208-1 ※みかんの里の北隣", null, "https://travel.rakuten.co.jp/HOTEL/191858/191858.html"),
  stay('mitoyo-stay-013', "父母ヶ浜リゾートヴィラ ＳＥＮＪＡ", "香川県三豊市仁尾町乙4-5", null, "https://travel.rakuten.co.jp/HOTEL/192917/192917.html"),
  stay('mitoyo-stay-014', "ＮＩＰＰＯＮＩＡ仁尾 水鏡の町", "香川県三豊市仁尾町仁尾丁312番地", null, "https://travel.rakuten.co.jp/HOTEL/197303/197303.html"),
  stay('mitoyo-stay-015', "ＳＥＮＪＡ Ｄｅｗａｔａ", "香川県三豊市仁尾町仁尾乙213", null, "https://travel.rakuten.co.jp/HOTEL/198308/198308.html"),

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
    accessed: MITOYO_TRAVEL_ACCESSED
  };
}

export const MITOYO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('mitoyo-dining-01', '瀬戸内料理 かど家', '香川県三豊市仁尾町仁尾丁392-2', null, 'https://tabelog.com/kagawa/A3703/A370303/37013446/'),
  dining('mitoyo-dining-02', '居酒屋一心', '香川県三豊市豊中町比地大1080', null, 'https://tabelog.com/kagawa/A3703/A370303/37010021/'),
  dining('mitoyo-dining-03', '豚太郎 詫間店', '香川県三豊市詫間町詫間6784-122', null, 'https://tabelog.com/kagawa/A3703/A370303/37007909/'),
  dining('mitoyo-dining-04', '呆呑', '香川県三豊市三野町下高瀬1212-1', null, 'https://tabelog.com/kagawa/A3703/A370303/37006145/'),
  dining('mitoyo-dining-05', '台湾料理 順鑫閣', '香川県三豊市高瀬町下勝間693-7', null, 'https://tabelog.com/kagawa/A3703/A370303/37009271/'),
  dining('mitoyo-dining-06', 'こがね製麺所 高瀬店', '香川県三豊市高瀬町下勝間1621-1', null, 'https://tabelog.com/kagawa/A3703/A370303/37005581/'),
  dining('mitoyo-dining-07', '手打うどん 渡辺', '香川県三豊市高瀬町下勝間2552', null, 'https://tabelog.com/kagawa/A3703/A370303/37000093/'),
  dining('mitoyo-dining-08', 'とくしげ', '香川県三豊市詫間町詫間2102-10', null, 'https://tabelog.com/kagawa/A3703/A370303/37001870/'),
  dining('mitoyo-dining-09', '武蔵 詫間店', '香川県三豊市詫間町松崎1772-55', null, 'https://tabelog.com/kagawa/A3703/A370303/37006870/'),
  dining('mitoyo-dining-10', '千明', '香川県三豊市詫間町詫間593-4', null, 'https://tabelog.com/kagawa/A3703/A370303/37003972/'),
  dining('mitoyo-dining-11', '浜堂ラーメン', '香川県三豊市三野町大見甲3873-1', null, 'https://tabelog.com/kagawa/A3703/A370303/37009564/'),
  dining('mitoyo-dining-12', 'ピッツァ エ バール テンピオ', '香川県三豊市財田町財田上7040善教寺', null, 'https://tabelog.com/kagawa/A3703/A370303/37011445/'),
  dining('mitoyo-dining-13', 'curry 冬椿', '香川県三豊市豊中町岡本1600-2', null, 'https://tabelog.com/kagawa/A3703/A370303/37003311/'),
  dining('mitoyo-dining-14', '海鮮 夢太郎', '香川県三豊市詫間町松崎2823-6', null, 'https://tabelog.com/kagawa/A3703/A370303/37003264/'),
  dining('mitoyo-dining-15', '焼肉丼 炙り一番 ゆめタウン三豊店', '香川県三豊市豊中町本山甲22ゆめタウン三豊1Fフードコート', null, 'https://tabelog.com/kagawa/A3703/A370303/37012794/'),
  dining('mitoyo-dining-16', '鉄平', '香川県三豊市高瀬町上高瀬487-1', null, 'https://tabelog.com/kagawa/A3703/A370303/37002004/'),
];

export const MITOYO_DINING_NAME_SET: ReadonlySet<string> = new Set(
  MITOYO_TRAVEL_DINING.map((row) => row.name_ja)
);

export const MITOYO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MITOYO_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const MITOYO_TRAVEL_ALL: readonly TravelRow[] = [
  ...MITOYO_TRAVEL_DINING,
  ...MITOYO_TRAVEL_STAY,
  ...MITOYO_TRAVEL_SHOPPING,
  ...MITOYO_TRAVEL_COMMERCE
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

export function isMitoyoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MITOYO_ONSEN_PACK_SET.has(row.name_ja);
}

export function isMitoyoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MITOYO_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isMitoyoStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isMitoyoShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isMitoyoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MITOYO_DINING_NAME_SET.has(row.name_ja);
}

export function mitoyoSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return MITOYO_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankMitoyoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isMitoyoOnsenPackRow(row) &&
      !isMitoyoExperiencePackRow(row) &&
      !isMitoyoStayPackRow(row) &&
      !isMitoyoDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of MITOYO_SIGHT_PINS) {
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

export function mitoyoSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '三豊市 飲食案内' : 'Mitoyo dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '三豊市 宿泊案内' : 'Mitoyo lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '三豊市 買物案内' : 'Mitoyo shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function mitoyoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMitoyoOnsenPackRow(row)) return 'onsen';
  if (isMitoyoExperiencePackRow(row)) return 'experience';
  if (isMitoyoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMitoyoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function mitoyoPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isMitoyoOnsenPackRow(row) &&
      !isMitoyoExperiencePackRow(row) &&
      !isMitoyoStayPackRow(row) &&
      !isMitoyoDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMitoyoOnsenPackRow(row);
  if (filter === 'experience') return isMitoyoExperiencePackRow(row);
  if (filter === 'stay') return isMitoyoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveMitoyoFilter(c: string | undefined, q: string): FilterId {
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

export const MITOYO_HALL = MITOYO.hall;
