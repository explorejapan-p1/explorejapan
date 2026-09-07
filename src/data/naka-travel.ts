/**
 * Naka travel layer. Pack tourism has inns/onsen/camps without room or bath photos.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 那賀町 (C36368) public shop pages with FOOD dish heroes.
 * Shopping: 道の駅 pack names with place-named Commons exteriors (not bath photos).
 * PHOTO GAPS (honest 0 — no place-named Commons / room-bath / FOOD yet):
 * 観光: わじきラインキャンプ場, 美那川キャンプ村, 森林総合利用施設 （ファガスの森),
 *       コテージみやこわすれ, 農産物直売所あいおい, 森林文化公園あいあいランド
 * 宿泊/温泉/体験/商業: 0 — pack inns/onsen lack room or bath 出典; no commerce 出典.
 * Do not copy 佐那河内 / 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NAKA, NAKA_SIGHT_PHOTOS} from './naka';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const NAKA_TRAVEL_ACCESSED = '2026-09-05' as const;

export const NAKA_TRAVEL_SOURCES = {
  home: 'https://www.town.tokushima-naka.lg.jp/',
  hall: 'https://www.town.tokushima-naka.lg.jp/',
  kanko: 'https://www.town.tokushima-naka.lg.jp/gyosei/kankoguide/',
  tabelogCity: 'https://tabelog.com/tokushima/C36368/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const NAKA_ONSEN_PACK_NAMES = [] as const;

export const NAKA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  NAKA_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const NAKA_STAY_PACK_NAMES = [] as const;

export const NAKA_STAY_PACK_SET: ReadonlySet<string> = new Set(
  NAKA_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const NAKA_SHOPPING_PACK_NAMES = [
  'のぎくの館 （道の駅わじき）',
  '鷲の里 （観光物産センター）',
  'もみじ川温泉 （道の駅もみじ川温泉）'
] as const;

export const NAKA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  NAKA_SHOPPING_PACK_NAMES
);

export const NAKA_SIGHT_PINS = ['高の瀬峡平の里', '鷲敷ラインおよび氷柱観音', '剣山並びに亜寒帯植物林', '四季美谷温泉｜休業中'] as const;

export const NAKA_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: NAKA_TRAVEL_ACCESSED
  };
}

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
    accessed: NAKA_TRAVEL_ACCESSED
  };
}

export const NAKA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'naka-dining-01',
    "木頭カフェ西宇森",
    "徳島県那賀郡那賀町木頭西宇森廻り1-2 ニシウドルポ1F",
    "070-9001-3939",
    "https://tabelog.com/tokushima/A3603/A360302/36009044/"
  ),
  dining(
    'naka-dining-03',
    "Cafe ATARI",
    "徳島県那賀郡那賀町横石字大板53-19",
    "090-7577-7624",
    "https://tabelog.com/tokushima/A3602/A360203/36009140/"
  ),
  dining(
    'naka-dining-08',
    "釜揚げうどん まるお",
    "徳島県那賀郡那賀町中山関ヶ原34-56 道の駅わじき のぎくの館",
    "0884-62-3553",
    "https://tabelog.com/tokushima/A3602/A360201/36007962/"
  ),
  dining(
    'naka-dining-09',
    "やじろべえ食堂",
    "徳島県那賀郡那賀町和食郷字南川174-1",
    "0884-62-2356",
    "https://tabelog.com/tokushima/A3601/A360104/36000767/"
  ),
  dining(
    'naka-dining-05',
    "もみじ川温泉レストラン　湖畔",
    "徳島県那賀郡那賀町大久保字西納野4-7 道の駅 もみじ川温泉内",
    "0884-62-1171",
    "https://tabelog.com/tokushima/A3602/A360203/36003100/"
  ),
  dining(
    'naka-dining-10',
    "さんが　きっちんまま",
    "徳島県那賀郡那賀町小仁宇大坪333-1",
    null,
    "https://tabelog.com/tokushima/A3602/A360202/36004447/"
  ),
  dining(
    'naka-dining-12',
    "たちばな食堂",
    "徳島県那賀郡那賀町木頭出原字シモマチ35-1",
    "0884-68-2058",
    "https://tabelog.com/tokushima/A3602/A360202/36005658/"
  ),
  dining(
    'naka-dining-04',
    "菩提樹",
    "徳島県那賀郡那賀町和食郷田野89 道の駅 鷲の里",
    "0884-62-3222",
    "https://tabelog.com/tokushima/A3601/A360104/36004894/"
  ),
  dining(
    'naka-dining-13',
    "いわさ料理店",
    "徳島県那賀郡那賀町和食字町33-1",
    "0884-62-2393",
    "https://tabelog.com/tokushima/A3601/A360104/36006492/"
  ),
  dining(
    'naka-dining-14',
    "若竹",
    "徳島県那賀郡那賀町土佐字南町134-1",
    null,
    "https://tabelog.com/tokushima/A3601/A360104/36005506/"
  ),
  dining(
    'naka-dining-11',
    "津田千寿苑",
    "徳島県那賀郡那賀町土佐字南町114-1",
    "0884-62-2128",
    "https://tabelog.com/tokushima/A3601/A360104/36004354/"
  ),
  dining(
    'naka-dining-02',
    "きとうむら",
    "徳島県那賀郡那賀町木頭出原ヨコマチ23-2",
    "0884-68-2212",
    "https://tabelog.com/tokushima/A3601/A360101/36006513/"
  ),
  dining(
    'naka-dining-06',
    "道の駅 わじき",
    "徳島県那賀郡那賀町中山字関ヶ原34-56",
    "0884-62-3553",
    "https://tabelog.com/tokushima/A3602/A360201/36005082/"
  ),
  dining(
    'naka-dining-07',
    "宮田製菓",
    "徳島県那賀郡那賀町延野字王子48-5",
    "0884-62-0016",
    "https://tabelog.com/tokushima/A3602/A360203/36006500/"
  ),
  dining(
    'naka-dining-15',
    "どん栗",
    "徳島県那賀郡那賀町大戸字春森34-1",
    "0884-66-0848",
    "https://tabelog.com/tokushima/A3601/A360104/36006010/"
  ),
  dining(
    'naka-dining-16',
    "カントリーロード",
    "徳島県那賀郡那賀町和食郷字八幡原27-1",
    "0884-62-3188",
    "https://tabelog.com/tokushima/A3602/A360202/36007527/"
  ),
  dining(
    'naka-dining-17',
    "ゆり野 食堂",
    "徳島県那賀郡那賀町百合字松ノ木310-1",
    "0884-62-1289",
    "https://tabelog.com/tokushima/A3601/A360104/36004914/"
  ),
  dining(
    'naka-dining-18',
    "くるく",
    "徳島県那賀郡那賀町木頭南宇字ヲカダ25",
    "0884-68-2072",
    "https://tabelog.com/tokushima/A3602/A360202/36005661/"
  ),
  dining(
    'naka-dining-19',
    "ファガスの森 高城",
    "徳島県那賀郡那賀町沢谷字釜ケ谷1-1",
    "090-1578-3029",
    "https://tabelog.com/tokushima/A3603/A360301/36007461/"
  )

];

export const NAKA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  NAKA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const NAKA_TRAVEL_SHOPPING: readonly TravelRow[] = [
  shopping(
    'naka-shopping-01',
    'のぎくの館 （道の駅わじき）',
    '徳島県那賀郡那賀町中山字関ヶ原34番地56',
    '0884-62-3553',
    'https://www.town.tokushima-naka.lg.jp/gyosei/institution/shurui/1914.html'
  ),
  shopping(
    'naka-shopping-02',
    '鷲の里 （観光物産センター）',
    '徳島県那賀郡那賀町和食郷字田野62番地',
    null,
    'https://www.town.tokushima-naka.lg.jp/gyosei/institution/shurui/1914.html'
  ),
  shopping(
    'naka-shopping-03',
    'もみじ川温泉 （道の駅もみじ川温泉）',
    '徳島県那賀郡那賀町大久保字西納野4番地7',
    '0884-62-1171',
    'https://www.town.tokushima-naka.lg.jp/gyosei/institution/shurui/1914.html'
  )
];

export const NAKA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const NAKA_TRAVEL_ALL: readonly TravelRow[] = [
  ...NAKA_TRAVEL_DINING,
  ...NAKA_TRAVEL_STAY,
  ...NAKA_TRAVEL_SHOPPING,
  ...NAKA_TRAVEL_COMMERCE
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

export function isNakaOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NAKA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isNakaExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isNakaStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isNakaShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return NAKA_SHOPPING_PACK_SET.has(row.name_ja);
}

export function nakaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return NAKA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankNakaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isNakaOnsenPackRow(row) &&
      !isNakaStayPackRow(row) &&
      !isNakaShoppingPackRow(row) &&
      !NAKA_DINING_NAME_SET.has(row.name_ja)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of NAKA_SIGHT_PINS) {
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

export function nakaSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '那賀町 飲食案内' : 'Naka dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '那賀町 宿泊案内' : 'Naka lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '那賀町 買物案内' : 'Naka shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function nakaTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isNakaOnsenPackRow(row)) return 'onsen';
  if (isNakaStayPackRow(row)) return 'stay';
  if (isNakaShoppingPackRow(row)) return 'shopping';
  if (NAKA_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function nakaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isNakaOnsenPackRow(row) &&
      !isNakaStayPackRow(row) &&
      !isNakaShoppingPackRow(row) &&
      !NAKA_DINING_NAME_SET.has(nameJa)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNakaOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isNakaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveNakaFilter(c: string | undefined, q: string): FilterId {
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

export const NAKA_HALL = NAKA.hall;
