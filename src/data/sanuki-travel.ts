/**
 * Sanuki City travel layer. No frozen pack.
 * Dining from 食べログ さぬき市 (C37206) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct bath name + bath still.
 * Experience: Commons 道の駅ながお. Shopping / commerce: honest 0.
 * Do not invent. Do not copy Tokushima / other-Kagawa TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SANUKI, SANUKI_SIGHT_PHOTOS} from './sanuki';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const SANUKI_TRAVEL_ACCESSED = '2026-09-09' as const;

export const SANUKI_TRAVEL_SOURCES = {
  home: 'https://www.city.sanuki.lg.jp/',
  hall: 'https://www.city.sanuki.kagawa.jp/guide/map_shido',
  kankou: 'https://www.city.sanuki.lg.jp/',
  tabelogCity: 'https://tabelog.com/kagawa/C37206/rstLst/',
  jakomaru: 'https://travel.rakuten.co.jp/HOTEL/68660/68660.html',
  montpellier: 'https://travel.rakuten.co.jp/HOTEL/30931/30931.html'
} as const;

export const SANUKI_ONSEN_PACK_NAMES = ["薬師湯温泉 旅館 竹屋敷 大浴場", "じゃこ丸パーク津田 大浴場"] as const;
export const SANUKI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SANUKI_ONSEN_PACK_NAMES);
export const SANUKI_EXPERIENCE_PACK_NAMES = ['道の駅ながお'] as const;
export const SANUKI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SANUKI_EXPERIENCE_PACK_NAMES);
export const SANUKI_STAY_PACK_NAMES = [] as const;
export const SANUKI_STAY_PACK_SET: ReadonlySet<string> = new Set(SANUKI_STAY_PACK_NAMES);
export const SANUKI_SHOPPING_PACK_NAMES = [] as const;
export const SANUKI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SANUKI_SHOPPING_PACK_NAMES);

export const SANUKI_SIGHT_PINS = [
  '志度寺',
  '長尾寺',
  '津田の松原',
  '大串半島',
  '志度駅',
  '石清水神社'
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
    accessed: SANUKI_TRAVEL_ACCESSED
  };
}

export const SANUKI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('sanuki-stay-001', "薬師湯温泉 旅館 竹屋敷", "香川県さぬき市多和竹屋敷123-1", null, "https://travel.rakuten.co.jp/HOTEL/19409/19409.html"),
  stay('sanuki-stay-002', "旅宿 にった", "香川県さぬき市津田町津田2734-24", null, "https://travel.rakuten.co.jp/HOTEL/29992/29992.html"),
  stay('sanuki-stay-003', "民宿 北山瀬ノ下荘", "香川県さぬき市津田町津田3806-2", null, "https://travel.rakuten.co.jp/HOTEL/30057/30057.html"),
  stay('sanuki-stay-004', "モンペリエ　オーヴェルジュ", "香川県さぬき市津田町津田3311-1", null, "https://travel.rakuten.co.jp/HOTEL/30931/30931.html"),
  stay('sanuki-stay-005', "いしや旅館", "香川県さぬき市志度599-1", null, "https://travel.rakuten.co.jp/HOTEL/31191/31191.html"),
  stay('sanuki-stay-006', "じゃこ丸パーク津田", "香川県さぬき市津田町松原地内", null, "https://travel.rakuten.co.jp/HOTEL/68660/68660.html"),
  stay('sanuki-stay-007', "ＯｙａｄｏＥｎｄｏ小路の庭", "香川県さぬき市津田町津田946-4　ＯｙａｄｏＥｎｄｏ", null, "https://travel.rakuten.co.jp/HOTEL/169723/169723.html"),
  stay('sanuki-stay-008', "まち宿ＡＥＴＥ", "香川県さぬき市津田町津田737　まち宿ＡＥＴＥ", null, "https://travel.rakuten.co.jp/HOTEL/169977/169977.html"),
  stay('sanuki-stay-009', "１棟貸しの宿 遠藤", "香川県さぬき市津田町津田946-5", null, "https://travel.rakuten.co.jp/HOTEL/173442/173442.html"),
  stay('sanuki-stay-010', "Ｂｅａｃｈ ＳＰＡ ＴＳＵＤＡ ２＆３棟", "香川県さぬき市津田町鶴羽2180-1　Ｂｅａｃｈ　ＳＰＡ　ＴＳＵＤＡ　2＆3棟", null, "https://travel.rakuten.co.jp/HOTEL/185843/185843.html"),
  stay('sanuki-stay-011', "Ｂｅａｃｈ ＳＰＡ ＴＳＵＤＡ（０ Ｃｅｒｏ棟）", "香川県さぬき市津田町鶴羽2180-6　Ｂｅａｃｈ　ＳＰＡ　ＴＳＵＤＡ【0　Ｃｅｒｏ棟】", null, "https://travel.rakuten.co.jp/HOTEL/186142/186142.html"),
  stay('sanuki-stay-012', "Ｂｅａｃｈ ＳＰＡ ＴＳＵＤＡ（１ Ｕｎｏ棟）", "香川県さぬき市津田町鶴羽中谷2180-5　Ｂｅａｃｈ　ＳＰＡ　Ｔｓｕｄａ　（1　Ｕｎｏ棟）", null, "https://travel.rakuten.co.jp/HOTEL/186145/186145.html"),
  stay('sanuki-stay-013', "マリオン屋島東９０６号／民泊", "香川県さぬき市志度1263-4　マリオン屋島東", null, "https://travel.rakuten.co.jp/HOTEL/186154/186154.html"),
  stay('sanuki-stay-014', "宿 ｉｎｎ ＴＥＫ－ＴＥＫ", "香川県さぬき市長尾西979-4　Ｙａｄｏ　ｉｎｎ　ＴＥＫ-ＴＥＫ", null, "https://travel.rakuten.co.jp/HOTEL/186234/186234.html"),
  stay('sanuki-stay-015', "ｍｉｍｏｒｏ", "香川県さぬき市津田町津田3323-1", null, "https://travel.rakuten.co.jp/HOTEL/188864/188864.html"),
  stay('sanuki-stay-016', "みろく自然公園キャンプ場", "香川県さぬき市大川町富田中3286", null, "https://travel.rakuten.co.jp/HOTEL/193990/193990.html"),
  stay('sanuki-stay-017', "ゲストハウス ３号館", "香川県さぬき市鴨庄4168-5　タウンハウス3号館", null, "https://travel.rakuten.co.jp/HOTEL/195199/195199.html"),
  stay('sanuki-stay-018', "ゲストハウス ベルエール小方１階／２階", "香川県さぬき市鴨庄4132-5　ベルエール小方", null, "https://travel.rakuten.co.jp/HOTEL/195784/195784.html"),
  stay('sanuki-stay-019', "さぬき路Ａ棟・さぬき路Ｂ棟", "香川県さぬき市津田町津田1378-1", null, "https://travel.rakuten.co.jp/HOTEL/196315/196315.html"),
  stay('sanuki-stay-020', "鈴音 ｂｙ ４Ｓ ＳＴＡＹ", "香川県さぬき市前山936-13", null, "https://travel.rakuten.co.jp/HOTEL/198787/198787.html"),
  stay('sanuki-stay-021', "ゲストハウス ベルエール小方（１０９）", "香川県さぬき市鴨庄.4132-5　ベルエール小方", null, "https://travel.rakuten.co.jp/HOTEL/200462/200462.html"),
  stay('sanuki-stay-022', "波音 ｂｙ ４Ｓ ＳＴＡＹ", "香川県さぬき市津田町津田1188", null, "https://travel.rakuten.co.jp/HOTEL/201877/201877.html"),
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
    accessed: SANUKI_TRAVEL_ACCESSED
  };
}

export const SANUKI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('sanuki-dining-01', '麺処まはろ', '香川県さぬき市寒川町神前3970', null, 'https://tabelog.com/kagawa/A3701/A370102/37001543/'),
  dining('sanuki-dining-02', '手打うどん　源内', '香川県さぬき市志度1597-10', null, 'https://tabelog.com/kagawa/A3701/A370102/37000100/'),
  dining('sanuki-dining-03', '麺でぃ～', '香川県さぬき市志度1905-2', null, 'https://tabelog.com/kagawa/A3701/A370102/37010253/'),
  dining('sanuki-dining-04', '溜', '香川県さぬき市造田宮西849-1', null, 'https://tabelog.com/kagawa/A3701/A370102/37007600/'),
  dining('sanuki-dining-05', '羽立', '香川県さぬき市津田町津田2161-2', null, 'https://tabelog.com/kagawa/A3701/A370102/37004773/'),
  dining('sanuki-dining-06', '八十八庵', '香川県さぬき市多和兼割93-1', null, 'https://tabelog.com/kagawa/A3701/A370102/37000380/'),
  dining('sanuki-dining-07', '牟礼製麺', '香川県さぬき市志度503', null, 'https://tabelog.com/kagawa/A3701/A370102/37001546/'),
  dining('sanuki-dining-08', 'ラーメン山村 本店', '香川県さぬき市鴨部6104-6', null, 'https://tabelog.com/kagawa/A3701/A370102/37001617/'),
  dining('sanuki-dining-09', 'らぁ麺Labo 七施', '香川県さぬき市津田町鶴羽2140-1', null, 'https://tabelog.com/kagawa/A3701/A370102/37012332/'),
  dining('sanuki-dining-10', '大川オアシス', '香川県さぬき市津田町鶴羽2326-12', null, 'https://tabelog.com/kagawa/A3701/A370102/37008812/'),
  dining('sanuki-dining-11', 'かき焼き わたなべ', '香川県さぬき市志度5382-47', null, 'https://tabelog.com/kagawa/A3701/A370102/37000347/'),
  dining('sanuki-dining-12', 'シセン', '香川県さぬき市志度2116-2', null, 'https://tabelog.com/kagawa/A3701/A370102/37001703/'),
  dining('sanuki-dining-13', '手打うどん　まるたけ', '香川県さぬき市大川町富田中3309-1', null, 'https://tabelog.com/kagawa/A3701/A370102/37006656/'),
  dining('sanuki-dining-14', 'こがね製麺所 寒川店', '香川県さぬき市寒川町石田西2047-1', null, 'https://tabelog.com/kagawa/A3701/A370102/37011870/'),
  dining('sanuki-dining-15', '松原うどん', '香川県さぬき市津田町津田103-3', null, 'https://tabelog.com/kagawa/A3701/A370102/37001541/'),
  dining('sanuki-dining-16', '寿司処 ここも 志度店', '香川県さぬき市志度2114-1', null, 'https://tabelog.com/kagawa/A3701/A370102/37009809/'),
];

export const SANUKI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  SANUKI_TRAVEL_DINING.map((row) => row.name_ja)
);

export const SANUKI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SANUKI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const SANUKI_TRAVEL_ALL: readonly TravelRow[] = [
  ...SANUKI_TRAVEL_DINING,
  ...SANUKI_TRAVEL_STAY,
  ...SANUKI_TRAVEL_SHOPPING,
  ...SANUKI_TRAVEL_COMMERCE
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

export function isSanukiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SANUKI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isSanukiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SANUKI_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isSanukiStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isSanukiShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isSanukiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SANUKI_DINING_NAME_SET.has(row.name_ja);
}

export function sanukiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return SANUKI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankSanukiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isSanukiOnsenPackRow(row) &&
      !isSanukiExperiencePackRow(row) &&
      !isSanukiStayPackRow(row) &&
      !isSanukiDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of SANUKI_SIGHT_PINS) {
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

export function sanukiSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? 'さぬき市 飲食案内' : 'Sanuki dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? 'さぬき市 宿泊案内' : 'Sanuki lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? 'さぬき市 買物案内' : 'Sanuki shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function sanukiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isSanukiOnsenPackRow(row)) return 'onsen';
  if (isSanukiExperiencePackRow(row)) return 'experience';
  if (isSanukiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isSanukiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function sanukiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isSanukiOnsenPackRow(row) &&
      !isSanukiExperiencePackRow(row) &&
      !isSanukiStayPackRow(row) &&
      !isSanukiDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSanukiOnsenPackRow(row);
  if (filter === 'experience') return isSanukiExperiencePackRow(row);
  if (filter === 'stay') return isSanukiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveSanukiFilter(c: string | undefined, q: string): FilterId {
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

export const SANUKI_HALL = SANUKI.hall;
