/**
 * Zentsuji City travel layer. No frozen pack.
 * Dining from 食べログ 善通寺市 (C37204) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct 露天風呂 name + bath still.
 * Shopping: Commons arcade. Commerce / experience: honest 0.
 * Do not invent. Do not copy Tokushima / other-Kagawa TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {ZENTSUJI, ZENTSUJI_SIGHT_PHOTOS} from './zentsuji';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const ZENTSUJI_TRAVEL_ACCESSED = '2026-09-09' as const;

export const ZENTSUJI_TRAVEL_SOURCES = {
  home: 'https://www.city.zentsuji.kagawa.jp/',
  hall: 'https://www.city.zentsuji.kagawa.jp/map/zentsujishiyakusyo.html',
  kankou: 'https://www.kukainavi.com/',
  zentsuji: 'https://www.zentsuji.com/',
  tabelogCity: 'https://tabelog.com/kagawa/C37204/rstLst/',
  grand: 'https://travel.rakuten.co.jp/HOTEL/15603/15603.html',
  tsurukichi: 'https://travel.rakuten.co.jp/HOTEL/180078/180078.html'
} as const;

export const ZENTSUJI_ONSEN_PACK_NAMES = ["善通寺グランドホテル 大浴場", "遍路民宿 鶴吉 露天風呂"] as const;
export const ZENTSUJI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(ZENTSUJI_ONSEN_PACK_NAMES);
export const ZENTSUJI_EXPERIENCE_PACK_NAMES = [] as const;
export const ZENTSUJI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(ZENTSUJI_EXPERIENCE_PACK_NAMES);
export const ZENTSUJI_STAY_PACK_NAMES = [] as const;
export const ZENTSUJI_STAY_PACK_SET: ReadonlySet<string> = new Set(ZENTSUJI_STAY_PACK_NAMES);
export const ZENTSUJI_SHOPPING_PACK_NAMES = [] as const;
export const ZENTSUJI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(ZENTSUJI_SHOPPING_PACK_NAMES);

export const ZENTSUJI_SIGHT_PINS = [
  '総本山善通寺',
  '曼荼羅寺',
  '出釈迦寺',
  '甲山寺',
  '善通寺駅',
  '善通寺市美術館'
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
    accessed: ZENTSUJI_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room 出典 first. */
export const ZENTSUJI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('zentsuji-stay-001', "善通寺グランドホテル", "香川県善通寺市上吉田町8-8-5", null, "https://travel.rakuten.co.jp/HOTEL/15603/15603.html"),
  stay('zentsuji-stay-002', "ゲストハウス ミカサスカサ", "香川県善通寺市金蔵寺町1230-1", null, "https://travel.rakuten.co.jp/HOTEL/135969/135969.html"),
  stay('zentsuji-stay-003', "お遍路宿 旅人の宿 風のくぐる", "香川県善通寺市上吉田町306-1", null, "https://travel.rakuten.co.jp/HOTEL/144468/144468.html"),
  stay('zentsuji-stay-004', "遍路民宿 鶴吉", "香川県善通寺市弘田町999-1", null, "https://travel.rakuten.co.jp/HOTEL/180078/180078.html"),

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
    accessed: ZENTSUJI_TRAVEL_ACCESSED
  };
}

export const ZENTSUJI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('zentsuji-dining-01', '備長扇屋 善通寺店', '香川県善通寺市生野町1655', '0877-64-0237', 'https://tabelog.com/kagawa/A3703/A370302/37000990/'),
  dining('zentsuji-dining-02', '樹里庵', '香川県善通寺市善通寺町2-5-18', '0877-62-2229', 'https://tabelog.com/kagawa/A3703/A370302/37001187/'),
  dining('zentsuji-dining-03', '焼肉 松坂 本店', '香川県善通寺市吉原町540-3', '0877-62-5032', 'https://tabelog.com/kagawa/A3703/A370302/37004579/'),
  dining('zentsuji-dining-04', 'めん六や 香川善通寺店', '香川県善通寺市弘田町字木ノ前894 ダイナム信頼の森', null, 'https://tabelog.com/kagawa/A3703/A370302/37008081/'),
  dining('zentsuji-dining-05', '本格手打 あかみち', '香川県善通寺市与北町1014-4', null, 'https://tabelog.com/kagawa/A3703/A370302/37012988/'),
  dining('zentsuji-dining-06', 'ボーノ', '香川県善通寺市善通寺町1-1-10', '0877-63-8201', 'https://tabelog.com/kagawa/A3703/A370302/37005236/'),
  dining('zentsuji-dining-07', '松村食堂', '香川県善通寺市上吉田町7-2-2', null, 'https://tabelog.com/kagawa/A3703/A370302/37004721/'),
  dining('zentsuji-dining-08', '白川うどん', '香川県善通寺市櫛梨町500-1', '0877-64-0687', 'https://tabelog.com/kagawa/A3703/A370302/37000240/'),
  dining('zentsuji-dining-09', 'にこいち', '香川県善通寺市上吉田町8-5-8', '0877-85-9702', 'https://tabelog.com/kagawa/A3703/A370302/37013003/'),
  dining('zentsuji-dining-10', 'げんきや食堂', '香川県善通寺市上吉田町3-3-5', '0877-85-6291', 'https://tabelog.com/kagawa/A3703/A370302/37012320/'),
  dining('zentsuji-dining-11', '香川家', '香川県善通寺市生野町440-6', '0877-83-1893', 'https://tabelog.com/kagawa/A3703/A370302/37012611/'),
  dining('zentsuji-dining-12', 'たこやき 西岡商店', '香川県善通寺市上吉田町416-2', null, 'https://tabelog.com/kagawa/A3703/A370302/37012491/'),
  dining('zentsuji-dining-13', 'ペイザン 善通寺本店', '香川県善通寺市金蔵寺町1114-1', '0877-63-5570', 'https://tabelog.com/kagawa/A3703/A370302/37000173/'),
  dining('zentsuji-dining-14', '千成食堂', '香川県善通寺市上吉田町3-7-3', '0877-62-1040', 'https://tabelog.com/kagawa/A3703/A370302/37003971/'),
  dining('zentsuji-dining-15', 'たまや', '香川県善通寺市生野本町2-4-14', '0877-62-1093', 'https://tabelog.com/kagawa/A3703/A370302/37001440/'),
  dining('zentsuji-dining-16', '龍江', '香川県善通寺市善通寺町5-8-27', '0877-64-1877', 'https://tabelog.com/kagawa/A3703/A370302/37011281/'),
];

export const ZENTSUJI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  ZENTSUJI_TRAVEL_DINING.map((row) => row.name_ja)
);

function shopping(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'shopping',
    address,
    phone,
    source_url,
    accessed: ZENTSUJI_TRAVEL_ACCESSED
  };
}

export const ZENTSUJI_TRAVEL_SHOPPING: readonly TravelRow[] = [
  shopping('zentsuji-shopping-01', '善通寺市大通り商店街', '香川県善通寺市', null, 'https://www.city.zentsuji.kagawa.jp/')
];
export const ZENTSUJI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const ZENTSUJI_TRAVEL_ALL: readonly TravelRow[] = [
  ...ZENTSUJI_TRAVEL_DINING,
  ...ZENTSUJI_TRAVEL_STAY,
  ...ZENTSUJI_TRAVEL_SHOPPING,
  ...ZENTSUJI_TRAVEL_COMMERCE
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

export function isZentsujiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ZENTSUJI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isZentsujiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ZENTSUJI_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isZentsujiStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isZentsujiShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isZentsujiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ZENTSUJI_DINING_NAME_SET.has(row.name_ja);
}

export function zentsujiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return ZENTSUJI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankZentsujiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isZentsujiOnsenPackRow(row) &&
      !isZentsujiExperiencePackRow(row) &&
      !isZentsujiStayPackRow(row) &&
      !isZentsujiDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of ZENTSUJI_SIGHT_PINS) {
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

export function zentsujiSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '善通寺市 飲食案内' : 'Zentsuji dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '善通寺市 宿泊案内' : 'Zentsuji lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '善通寺市 買物案内' : 'Zentsuji shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function zentsujiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isZentsujiOnsenPackRow(row)) return 'onsen';
  if (isZentsujiExperiencePackRow(row)) return 'experience';
  if (isZentsujiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isZentsujiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function zentsujiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isZentsujiOnsenPackRow(row) &&
      !isZentsujiExperiencePackRow(row) &&
      !isZentsujiStayPackRow(row) &&
      !isZentsujiDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isZentsujiOnsenPackRow(row);
  if (filter === 'experience') return isZentsujiExperiencePackRow(row);
  if (filter === 'stay') return isZentsujiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveZentsujiFilter(c: string | undefined, q: string): FilterId {
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

export const ZENTSUJI_HALL = ZENTSUJI.hall;
