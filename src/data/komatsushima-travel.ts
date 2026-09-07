/**
 * Komatsushima City travel layer. No frozen pack.
 * Dining from 食べログ 小松島市 (C36203) public shop pages. FOOD dish photos required.
 * Stay from NAVITIME 小松島市ホテル一覧 + 楽天トラベル share/room-exterior images (出典). Rank strongest first.
 * Experience: 小松島ステーションパーク remapped (Commons SL park). Onsen/shopping/commerce honest 0.
 * Do not invent pack dining/stay. Do not copy 鳴門 / 徳島市 / 阿南 / 藍住 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KOMATSUSHIMA, KOMATSUSHIMA_SIGHT_PHOTOS} from './komatsushima';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KOMATSUSHIMA_TRAVEL_ACCESSED = '2026-09-07' as const;

export const KOMATSUSHIMA_TRAVEL_SOURCES = {
  home: 'https://www.city.komatsushima.lg.jp/',
  hall: 'https://www.city.komatsushima.lg.jp/docs/2617.html',
  kanko: 'https://www.city.komatsushima.lg.jp/kanko/kanko/',
  navi: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/',
  tabelogCity: 'https://tabelog.com/tokushima/C36203/rstLst/',
  stayNavi: 'https://www.navitime.co.jp/category/0608002/36203/',
  rakutenTravel: 'https://travel.rakuten.co.jp/'
} as const;

export const KOMATSUSHIMA_ONSEN_PACK_NAMES = [] as const;
export const KOMATSUSHIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KOMATSUSHIMA_ONSEN_PACK_NAMES);
export const KOMATSUSHIMA_EXPERIENCE_PACK_NAMES = ['小松島ステーションパーク'] as const;
export const KOMATSUSHIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KOMATSUSHIMA_EXPERIENCE_PACK_NAMES);
export const KOMATSUSHIMA_STAY_PACK_NAMES = [] as const;
export const KOMATSUSHIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(KOMATSUSHIMA_STAY_PACK_NAMES);

export const KOMATSUSHIMA_SIGHT_PINS = [
  '大手海岸',
  '金長神社',
  '立江寺',
  '恩山寺',
  '豊国神社',
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
    accessed: KOMATSUSHIMA_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room/exterior 出典 first. NAVITIME + 楽天シェア画像. */
export const KOMATSUSHIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay(
    'komatsushima-stay-01',
    'スーパーホテル徳島・小松島天然温泉',
    '徳島県小松島市小松島町字若井崎10-6',
    '0885-32-9001',
    'https://travel.rakuten.co.jp/HOTEL/182768/182768.html'
  ),
  stay(
    'komatsushima-stay-02',
    'HOTEL AZ 徳島小松島店',
    '徳島県小松島市金磯町字土手町93-1',
    '0885-32-5670',
    'https://travel.rakuten.co.jp/HOTEL/181837/181837.html'
  ),
  stay(
    'komatsushima-stay-03',
    'みどり旅館',
    '徳島県小松島市小松島町外開7-5',
    '0885-32-3633',
    'https://travel.rakuten.co.jp/HOTEL/158330/158330.html'
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
    accessed: KOMATSUSHIMA_TRAVEL_ACCESSED
  };
}

export const KOMATSUSHIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'komatsushima-dining-01',
    '岡本中華 小松島本店',
    "徳島県小松島市中田町字奥林60-1",
    "0885-32-0653",
    "https://tabelog.com/tokushima/A3601/A360103/36000030/"
  ),
  dining(
    'komatsushima-dining-02',
    '讃岐うどん しろちゃん',
    "徳島県小松島市小松島町字新港33-7",
    "0885-38-6422",
    "https://tabelog.com/tokushima/A3601/A360103/36007302/"
  ),
  dining(
    'komatsushima-dining-03',
    '恵比須丸',
    "徳島県小松島市大林町森ノ本6-1",
    "0885-37-0581",
    "https://tabelog.com/tokushima/A3601/A360103/36000370/"
  ),
  dining(
    'komatsushima-dining-04',
    '中華そば猪虎',
    "徳島県小松島市横須町8-52",
    "0885-33-0839",
    "https://tabelog.com/tokushima/A3601/A360103/36006427/"
  ),
  dining(
    'komatsushima-dining-05',
    '松本中華そば店',
    "徳島県小松島市小松島町馬場ノ本71",
    "0885-32-1355",
    "https://tabelog.com/tokushima/A3601/A360103/36002606/"
  ),
  dining(
    'komatsushima-dining-06',
    '七ふくうどん',
    "徳島県小松島市横須町16-12",
    "050-5594-0547",
    "https://tabelog.com/tokushima/A3601/A360103/36001374/"
  ),
  dining(
    'komatsushima-dining-07',
    'おひるごはん&おさけごはん MOG食堂',
    "徳島県小松島市小松島町字井利ノ口43-1",
    "0885-39-0855",
    "https://tabelog.com/tokushima/A3601/A360103/36007576/"
  ),
  dining(
    'komatsushima-dining-08',
    'セルフうどん すずめ',
    "徳島県小松島市中田町内開8-1第一多田ビル１Ｆ",
    "0885-33-3837",
    "https://tabelog.com/tokushima/A3601/A360103/36003888/"
  ),
  dining(
    'komatsushima-dining-09',
    'いっすんぼうし',
    "徳島県小松島市江田町敷地前78-4",
    "088-669-3978",
    "https://tabelog.com/tokushima/A3601/A360103/36001217/"
  ),
  dining(
    'komatsushima-dining-10',
    '田んぼと畑のレストラン あいさいキッチン',
    "徳島県小松島市立江町炭屋ヶ谷47-3みはらしの丘あいさい広場",
    "0885-38-0112",
    "https://tabelog.com/tokushima/A3601/A360103/36007496/"
  ),
  dining(
    'komatsushima-dining-11',
    '津久司蒲鉾',
    "徳島県小松島市南小松島町2-34",
    "0885-33-2345",
    "https://tabelog.com/tokushima/A3601/A360103/36004802/"
  ),
  dining(
    'komatsushima-dining-12',
    '谷ちくわ商店',
    "徳島県小松島市横須町3-59",
    "08853-2-0867",
    "https://tabelog.com/tokushima/A3601/A360103/36000581/"
  ),
  dining(
    'komatsushima-dining-13',
    '和食家 てんすい',
    "徳島県小松島市中田町奥林60-1",
    "0885-32-8680",
    "https://tabelog.com/tokushima/A3601/A360103/36002491/"
  ),
  dining(
    'komatsushima-dining-14',
    '幸蘭',
    "徳島県小松島市金磯町9-50",
    "0885-33-2147",
    "https://tabelog.com/tokushima/A3601/A360103/36000956/"
  ),
  dining(
    'komatsushima-dining-15',
    'うどんや　どんな',
    "徳島県小松島市中田町字内開4番地11",
    "0885-38-6568",
    "https://tabelog.com/tokushima/A3601/A360103/36004169/"
  ),
  dining(
    'komatsushima-dining-16',
    '潮音',
    "徳島県小松島市芝生町狭間10-1",
    "080-8080-9601",
    "https://tabelog.com/tokushima/A3601/A360103/36008502/"
  ),
  dining(
    'komatsushima-dining-17',
    'ゆ～ちゃん',
    "徳島県小松島市芝生町字宮ノ前28-1",
    "088-533-3385",
    "https://tabelog.com/tokushima/A3601/A360103/36004798/"
  ),
  dining(
    'komatsushima-dining-18',
    'まるか',
    "徳島県小松島市小松島町字新港29-4",
    "090-7575-3725",
    "https://tabelog.com/tokushima/A3601/A360103/36004972/"
  ),
  dining(
    'komatsushima-dining-19',
    '赤石飯店',
    "徳島県小松島市赤石町3-43",
    "0885-38-1552",
    "https://tabelog.com/tokushima/A3601/A360103/36001584/"
  ),
  dining(
    'komatsushima-dining-20',
    'めん処 玉好 小松島本店',
    "徳島県小松島市中田町内開10-7",
    "0885-32-7016",
    "https://tabelog.com/tokushima/A3601/A360103/36000265/"
  ),
  dining(
    'komatsushima-dining-21',
    'たの久',
    "徳島県小松島市神田瀬町角田13-2",
    "0885-33-3591",
    "https://tabelog.com/tokushima/A3601/A360103/36001329/"
  ),
  dining(
    'komatsushima-dining-22',
    '炭火焼鳥とりすけ',
    "徳島県小松島市神田瀬町12-27",
    "0885-32-1709",
    "https://tabelog.com/tokushima/A3601/A360103/36006988/"
  ),
  dining(
    'komatsushima-dining-23',
    'まんぷく亭',
    "徳島県小松島市大林町宮ノ本60",
    "0885-38-0188",
    "https://tabelog.com/tokushima/A3601/A360103/36000962/"
  ),
  dining(
    'komatsushima-dining-24',
    'キッチンゑみ',
    "徳島県小松島市立江町松本5-1",
    "0885-37-1048",
    "https://tabelog.com/tokushima/A3601/A360103/36005081/"
  ),
  dining(
    'komatsushima-dining-25',
    '中華そば 樽屋',
    "徳島県小松島市南小松島町7-5",
    "0885-34-9115",
    "https://tabelog.com/tokushima/A3601/A360103/36004985/"
  )
];
export const KOMATSUSHIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KOMATSUSHIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const KOMATSUSHIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  KOMATSUSHIMA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const KOMATSUSHIMA_TRAVEL_ALL: readonly TravelRow[] = [
  ...KOMATSUSHIMA_TRAVEL_DINING,
  ...KOMATSUSHIMA_TRAVEL_STAY,
  ...KOMATSUSHIMA_TRAVEL_SHOPPING,
  ...KOMATSUSHIMA_TRAVEL_COMMERCE
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

export function isKomatsushimaOnsenPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isKomatsushimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KOMATSUSHIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isKomatsushimaStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isKomatsushimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KOMATSUSHIMA_DINING_NAME_SET.has(row.name_ja);
}

export function komatsushimaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return KOMATSUSHIMA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankKomatsushimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isKomatsushimaOnsenPackRow(row) &&
      !isKomatsushimaExperiencePackRow(row) &&
      !isKomatsushimaStayPackRow(row) &&
      !isKomatsushimaDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of KOMATSUSHIMA_SIGHT_PINS) {
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

export function komatsushimaSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '小松島市 飲食案内' : 'Komatsushima City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '小松島市 宿泊案内' : 'Komatsushima City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function komatsushimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKomatsushimaOnsenPackRow(row)) return 'onsen';
  if (isKomatsushimaExperiencePackRow(row)) return 'experience';
  if (isKomatsushimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isKomatsushimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function komatsushimaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isKomatsushimaOnsenPackRow(row) &&
      !isKomatsushimaExperiencePackRow(row) &&
      !isKomatsushimaStayPackRow(row) &&
      !isKomatsushimaDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKomatsushimaOnsenPackRow(row);
  if (filter === 'experience') return isKomatsushimaExperiencePackRow(row);
  if (filter === 'stay') return isKomatsushimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveKomatsushimaFilter(c: string | undefined, q: string): FilterId {
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
  return 'sights';
}

export const KOMATSUSHIMA_HALL = KOMATSUSHIMA.hall;
