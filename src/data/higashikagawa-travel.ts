/**
 * Higashikagawa City travel layer. No frozen pack.
 * Dining from 食べログ 東かがわ市 (C37207) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct bath name + bath still.
 * Experience: Commons 讃州井筒屋敷. Shopping / commerce: honest 0.
 * Do not invent. Do not copy Tokushima / other-Kagawa TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {HIGASHIKAGAWA, HIGASHIKAGAWA_SIGHT_PHOTOS} from './higashikagawa';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const HIGASHIKAGAWA_TRAVEL_ACCESSED = '2026-09-07' as const;

export const HIGASHIKAGAWA_TRAVEL_SOURCES = {
  home: 'https://www.higashikagawa.jp/',
  hall: 'https://www.higashikagawa.jp/shiseijoho/shiyakusho_madoguchiannai/1898.html',
  kankou: 'https://higashikagawa.net/',
  tabelogCity: 'https://tabelog.com/kagawa/C37207/rstLst/',
  vessel: 'https://travel.rakuten.co.jp/HOTEL/140768/140768.html',
  az: 'https://travel.rakuten.co.jp/HOTEL/158467/158467.html'
} as const;

export const HIGASHIKAGAWA_ONSEN_PACK_NAMES = ['瀬戸内リゾート　ベッセルおおち 大浴場'] as const;
export const HIGASHIKAGAWA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(HIGASHIKAGAWA_ONSEN_PACK_NAMES);
export const HIGASHIKAGAWA_EXPERIENCE_PACK_NAMES = ['讃州井筒屋敷'] as const;
export const HIGASHIKAGAWA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(HIGASHIKAGAWA_EXPERIENCE_PACK_NAMES);
export const HIGASHIKAGAWA_STAY_PACK_NAMES = [] as const;
export const HIGASHIKAGAWA_STAY_PACK_SET: ReadonlySet<string> = new Set(HIGASHIKAGAWA_STAY_PACK_NAMES);
export const HIGASHIKAGAWA_SHOPPING_PACK_NAMES = [] as const;
export const HIGASHIKAGAWA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(HIGASHIKAGAWA_SHOPPING_PACK_NAMES);

export const HIGASHIKAGAWA_SIGHT_PINS = [
  '引田城跡',
  '引田のまち並み',
  '引田港',
  '白鳥神社',
  '釈王寺',
  '與田寺'
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
    accessed: HIGASHIKAGAWA_TRAVEL_ACCESSED
  };
}

export const HIGASHIKAGAWA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('higashikagawa-stay-01', '瀬戸内リゾート　ベッセルおおち', '香川県東かがわ市馬篠1200', '0879-26-1126', 'https://travel.rakuten.co.jp/HOTEL/140768/140768.html'),
  stay('higashikagawa-stay-02', 'ＨＯＴＥＬ　ＡＺ　香川東かがわ店', '香川県東かがわ市湊字水入1856-2', '0879-26-0331', 'https://travel.rakuten.co.jp/HOTEL/158467/158467.html')
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
    accessed: HIGASHIKAGAWA_TRAVEL_ACCESSED
  };
}

export const HIGASHIKAGAWA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('higashikagawa-dining-01', '魚源', '香川県東かがわ市三本松1176-1', '0879-26-9119', 'https://tabelog.com/kagawa/A3704/A370402/37010244/'),
  dining('higashikagawa-dining-02', '味道源', '香川県東かがわ市三本松680-69', '0879-25-3336', 'https://tabelog.com/kagawa/A3704/A370402/37002993/'),
  dining('higashikagawa-dining-03', 'やきどり', '香川県東かがわ市引田765-31', '0879-33-3145', 'https://tabelog.com/kagawa/A3704/A370402/37003820/'),
  dining('higashikagawa-dining-04', '大衆酒場 ばろん', '香川県東かがわ市三本松680-113', null, 'https://tabelog.com/kagawa/A3704/A370402/37014584/'),
  dining('higashikagawa-dining-05', '福味 三本松店', '香川県東かがわ市三本松1896-1', '0879-49-1361', 'https://tabelog.com/kagawa/A3704/A370402/37008155/'),
  dining('higashikagawa-dining-06', 'かめびし茶屋', '香川県東かがわ市引田2174', '0879-33-2555', 'https://tabelog.com/kagawa/A3704/A370402/37000291/'),
  dining('higashikagawa-dining-07', 'UNWASTED', '香川県東かがわ市三本松1256-7', '080-4755-3070', 'https://tabelog.com/kagawa/A3704/A370402/37012056/'),
  dining('higashikagawa-dining-08', '五名ふるさとの家', '香川県東かがわ市五名1400', '0879-29-2832', 'https://tabelog.com/kagawa/A3704/A370402/37010810/'),
  dining('higashikagawa-dining-09', '吾割安', '香川県東かがわ市三本松1512', '0879-25-9000', 'https://tabelog.com/kagawa/A3704/A370402/37001928/'),
  dining('higashikagawa-dining-10', '居酒屋冨', '香川県東かがわ市三本松719-1', '080-8908-9074', 'https://tabelog.com/kagawa/A3704/A370402/37004102/'),
  dining('higashikagawa-dining-11', '元匠 東かがわ店', '香川県東かがわ市西村815', '0879-25-1677', 'https://tabelog.com/kagawa/A3704/A370402/37004937/'),
  dining('higashikagawa-dining-12', 'ヌーベルポスト', '香川県東かがわ市引田2253', '0879-33-3202', 'https://tabelog.com/kagawa/A3704/A370402/37014280/'),
  dining('higashikagawa-dining-13', 'まるいち', '香川県東かがわ市三本松680-149', '0879-24-0394', 'https://tabelog.com/kagawa/A3704/A370402/37003807/'),
  dining('higashikagawa-dining-14', 'ごはんや　醤', '香川県東かがわ市引田2163 讃州井筒屋敷　一之蔵', null, 'https://tabelog.com/kagawa/A3704/A370402/37002023/'),
  dining('higashikagawa-dining-15', '食堂 おおや', '香川県東かがわ市三本松1176-1', null, 'https://tabelog.com/kagawa/A3704/A370402/37014337/'),
  dining('higashikagawa-dining-16', '三吉丸水産', '香川県東かがわ市三本松2268-73', null, 'https://tabelog.com/kagawa/A3704/A370402/37012155/'),
];

export const HIGASHIKAGAWA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  HIGASHIKAGAWA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const HIGASHIKAGAWA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const HIGASHIKAGAWA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const HIGASHIKAGAWA_TRAVEL_ALL: readonly TravelRow[] = [
  ...HIGASHIKAGAWA_TRAVEL_DINING,
  ...HIGASHIKAGAWA_TRAVEL_STAY,
  ...HIGASHIKAGAWA_TRAVEL_SHOPPING,
  ...HIGASHIKAGAWA_TRAVEL_COMMERCE
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

export function isHigashikagawaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIGASHIKAGAWA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isHigashikagawaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIGASHIKAGAWA_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isHigashikagawaStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isHigashikagawaShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isHigashikagawaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIGASHIKAGAWA_DINING_NAME_SET.has(row.name_ja);
}

export function higashikagawaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return HIGASHIKAGAWA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankHigashikagawaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isHigashikagawaOnsenPackRow(row) &&
      !isHigashikagawaExperiencePackRow(row) &&
      !isHigashikagawaStayPackRow(row) &&
      !isHigashikagawaDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of HIGASHIKAGAWA_SIGHT_PINS) {
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

export function higashikagawaSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '東かがわ市 飲食案内' : 'Higashikagawa dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '東かがわ市 宿泊案内' : 'Higashikagawa lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '東かがわ市 買物案内' : 'Higashikagawa shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function higashikagawaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isHigashikagawaOnsenPackRow(row)) return 'onsen';
  if (isHigashikagawaExperiencePackRow(row)) return 'experience';
  if (isHigashikagawaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isHigashikagawaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function higashikagawaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isHigashikagawaOnsenPackRow(row) &&
      !isHigashikagawaExperiencePackRow(row) &&
      !isHigashikagawaStayPackRow(row) &&
      !isHigashikagawaDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isHigashikagawaOnsenPackRow(row);
  if (filter === 'experience') return isHigashikagawaExperiencePackRow(row);
  if (filter === 'stay') return isHigashikagawaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveHigashikagawaFilter(c: string | undefined, q: string): FilterId {
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
