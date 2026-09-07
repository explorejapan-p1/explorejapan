/**
 * Anan City travel layer. No frozen pack.
 * Dining from 食べログ 阿南市 (C36204) public shop pages. FOOD dish photos required.
 * Stay from NAVITIME/観光協会 leads + 楽天トラベル share/room-exterior images (出典). Rank strongest first.
 * Onsen / experience / shopping / commerce: honest 0 (no invent).
 * Do not invent pack dining/stay. Do not copy 小松島 / 鳴門 / 徳島市 / 藍住 / 那賀 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {ANAN, ANAN_SIGHT_PHOTOS} from './anan';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const ANAN_TRAVEL_ACCESSED = '2026-09-07' as const;

export const ANAN_TRAVEL_SOURCES = {
  home: 'https://www.city.anan.tokushima.jp/',
  hall: 'https://www.city.anan.tokushima.jp/',
  kanko: 'https://www.city.anan.tokushima.jp/category/bunya/kankobunka/',
  tabelogCity: 'https://tabelog.com/tokushima/C36204/rstLst/',
  stayNavi: 'https://www.navitime.co.jp/category/0608002/36204/',
  rakutenTravel: 'https://travel.rakuten.co.jp/',
  ananKankoStay: 'https://www.anan-kankou.jp/itemclass.php?m=3'
} as const;

export const ANAN_ONSEN_PACK_NAMES = [] as const;
export const ANAN_ONSEN_PACK_SET: ReadonlySet<string> = new Set(ANAN_ONSEN_PACK_NAMES);
export const ANAN_EXPERIENCE_PACK_NAMES = ['太龍寺ロープウェイ'] as const;
export const ANAN_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(ANAN_EXPERIENCE_PACK_NAMES);
export const ANAN_STAY_PACK_NAMES = [] as const;
export const ANAN_STAY_PACK_SET: ReadonlySet<string> = new Set(ANAN_STAY_PACK_NAMES);
export const ANAN_SHOPPING_PACK_NAMES = [] as const;
export const ANAN_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(ANAN_SHOPPING_PACK_NAMES);

export const ANAN_SIGHT_PINS = [
  '蒲生田岬',
  '太龍寺',
  '平等寺',
  '那賀川'
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
    accessed: ANAN_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room/exterior 出典 first. 楽天シェア + 公式掲載画像. */
export const ANAN_TRAVEL_STAY: readonly TravelRow[] = [
  stay(
    'anan-stay-01',
    'スーパーホテル阿南・富岡',
    '徳島県阿南市学原町深田9-1',
    '0884-22-9000',
    'https://travel.rakuten.co.jp/HOTEL/172821/172821.html'
  ),
  stay(
    'anan-stay-02',
    'スーパーホテル阿南・市役所前禁煙館',
    '徳島県阿南市富岡町トノ町51-9',
    '0884-28-9002',
    'https://travel.rakuten.co.jp/HOTEL/179159/179159.html'
  ),
  stay(
    'anan-stay-03',
    'スマイルホテル阿南',
    '徳島県阿南市富岡町滝の下42-4',
    '0884-23-2222',
    'https://travel.rakuten.co.jp/HOTEL/25307/25307.html'
  ),
  stay(
    'anan-stay-04',
    'ホテルルートイン阿南',
    '徳島県阿南市領家町火屋ヶ原142',
    '050-5847-7340',
    'https://travel.rakuten.co.jp/HOTEL/164934/164934.html'
  ),
  stay(
    'anan-stay-05',
    'ベイサイドホテル龍宮',
    '徳島県阿南市橘町幸田92-2',
    '0884-27-2027',
    'https://travel.rakuten.co.jp/HOTEL/30081/30081.html'
  ),
  stay(
    'anan-stay-06',
    'あなんステーションホテル',
    '徳島県阿南市富岡町今福寺43-5',
    '0884-28-7711',
    'https://travel.rakuten.co.jp/HOTEL/70924/70924.html'
  ),
  stay(
    'anan-stay-07',
    '阿南第一ホテル',
    '徳島県阿南市富岡町西池田口14-1',
    '0884-22-6622',
    'https://travel.rakuten.co.jp/HOTEL/5414/5414.html'
  )
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
    accessed: ANAN_TRAVEL_ACCESSED
  };
}

export const ANAN_TRAVEL_DINING: readonly TravelRow[] = [

  dining(
    'anan-dining-01',
    "Loup",
    "徳島県阿南市羽ノ浦町岩脇字原平97",
    null,
    "https://tabelog.com/tokushima/A3602/A360201/36007104/"
  ),
  dining(
    'anan-dining-02',
    "神龍",
    "徳島県阿南市羽ノ浦町宮倉芝生1-3",
    "0884-44-1306",
    "https://tabelog.com/tokushima/A3602/A360201/36003856/"
  ),
  dining(
    'anan-dining-03',
    "魚まさ",
    "徳島県阿南市富岡町南向26-4 武田ビル 1F",
    "0884-23-0191",
    "https://tabelog.com/tokushima/A3602/A360201/36005595/"
  ),
  dining(
    'anan-dining-04',
    "ウト・ウーク",
    "徳島県阿南市橘町北新田1-2",
    "0884-27-3377",
    "https://tabelog.com/tokushima/A3602/A360201/36000366/"
  ),
  dining(
    'anan-dining-05',
    "大菩薩峠",
    "徳島県阿南市福井町土井ケ崎",
    "0884-34-2701",
    "https://tabelog.com/tokushima/A3602/A360201/36000844/"
  ),
  dining(
    'anan-dining-06',
    "中華そば HIRO",
    "徳島県阿南市富岡町西石塚20-4",
    "0884-23-1994",
    "https://tabelog.com/tokushima/A3602/A360201/36000810/"
  ),
  dining(
    'anan-dining-07',
    "おさかなひぐち",
    "徳島県阿南市羽ノ浦町宮倉芝生79-1 パル羽ノ浦イートモール",
    "080-3923-6787",
    "https://tabelog.com/tokushima/A3602/A360201/36008635/"
  ),
  dining(
    'anan-dining-08',
    "酒樂亭",
    "徳島県阿南市富岡町南向26",
    "0884-23-4033",
    "https://tabelog.com/tokushima/A3602/A360201/36002393/"
  ),
  dining(
    'anan-dining-09',
    "天徳",
    "徳島県阿南市宝田町平岡920-4",
    "090-8280-8111",
    "https://tabelog.com/tokushima/A3602/A360201/36004420/"
  ),
  dining(
    'anan-dining-10',
    "溶岩焼きステーキ&ハンバーグ 崋山",
    "徳島県阿南市那賀川町工地759-1",
    "0884-49-5529",
    "https://tabelog.com/tokushima/A3602/A360201/36008714/"
  ),
  dining(
    'anan-dining-11',
    "王味",
    "徳島県阿南市上中町中原87-3",
    "0884-22-8500",
    "https://tabelog.com/tokushima/A3602/A360201/36000843/"
  ),
  dining(
    'anan-dining-12',
    "そば工房ＨＩＲＯ",
    "徳島県阿南市那賀川町今津浦白石12-5",
    "0884-42-3938",
    "https://tabelog.com/tokushima/A3602/A360201/36001328/"
  ),
  dining(
    'anan-dining-13',
    "かまたまーる",
    "徳島県阿南市橘町青木55-1",
    "0884-28-1227",
    "https://tabelog.com/tokushima/A3602/A360201/36005381/"
  ),
  dining(
    'anan-dining-14',
    "茉莉花",
    "徳島県阿南市津乃峰町戎山119-6",
    "090-9556-6961",
    "https://tabelog.com/tokushima/A3602/A360201/36005630/"
  ),
  dining(
    'anan-dining-15',
    "居酒屋食堂 とりあえず…やましげ",
    "徳島県阿南市那賀川町芳崎271-3",
    "080-4031-0013",
    "https://tabelog.com/tokushima/A3602/A360201/36006424/"
  ),
  dining(
    'anan-dining-16',
    "焼肉・中華そば も",
    "徳島県阿南市桑野町井ノ口原",
    "0884-26-0801",
    "https://tabelog.com/tokushima/A3602/A360201/36000888/"
  ),
];

export const ANAN_DINING_NAME_SET: ReadonlySet<string> = new Set(
  ANAN_TRAVEL_DINING.map((row) => row.name_ja)
);

export const ANAN_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const ANAN_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const ANAN_TRAVEL_ALL: readonly TravelRow[] = [
  ...ANAN_TRAVEL_DINING,
  ...ANAN_TRAVEL_STAY,
  ...ANAN_TRAVEL_SHOPPING,
  ...ANAN_TRAVEL_COMMERCE
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

export function isAnanOnsenPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isAnanExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ANAN_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isAnanStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isAnanShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isAnanDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ANAN_DINING_NAME_SET.has(row.name_ja);
}

export function ananSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return ANAN_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankAnanSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isAnanOnsenPackRow(row) &&
      !isAnanExperiencePackRow(row) &&
      !isAnanStayPackRow(row) &&
      !isAnanDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of ANAN_SIGHT_PINS) {
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

export function ananSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '阿南市 飲食案内' : 'Anan City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '阿南市 宿泊案内' : 'Anan City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function ananTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isAnanOnsenPackRow(row)) return 'onsen';
  if (isAnanExperiencePackRow(row)) return 'experience';
  if (isAnanStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isAnanDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function ananPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isAnanOnsenPackRow(row) &&
      !isAnanExperiencePackRow(row) &&
      !isAnanStayPackRow(row) &&
      !isAnanDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isAnanOnsenPackRow(row);
  if (filter === 'experience') return isAnanExperiencePackRow(row);
  if (filter === 'stay') return isAnanStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveAnanFilter(c: string | undefined, q: string): FilterId {
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

export const ANAN_HALL = ANAN.hall;
