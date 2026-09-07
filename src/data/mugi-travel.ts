/**
 * Mugi travel layer. Pack tourism has Mollusco without room/bath photos for stay/onsen.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 牟岐町 (C36383) public shop pages with FOOD dish heroes.
 * Shopping / experience / commerce: honest 0 — no remappable pack photos this pass.
 * PHOTO GAPS (honest 0):
 * 宿泊/温泉/買物/商業/体験: no room/bath/shop exterior 出典 on pack names; Tabelog dining FOOD only.
 * 観光 without Commons: pack tourism is thin (モラスコむぎ + cultural 出羽島/松坂 already mapped).
 * Do not copy 那賀 / 佐那河内 / 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MUGI, MUGI_SIGHT_PHOTOS} from './mugi';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const MUGI_TRAVEL_ACCESSED = '2026-09-07' as const;

export const MUGI_TRAVEL_SOURCES = {
  home: 'https://www.town.tokushima-mugi.lg.jp/',
  hall: 'https://www.town.tokushima-mugi.lg.jp/doc/2024122001101/',
  kanko: 'https://www.town.tokushima-mugi.lg.jp/category/bunya/kanko/',
  tabelogCity: 'https://tabelog.com/tokushima/C36383/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const MUGI_ONSEN_PACK_NAMES = [] as const;

export const MUGI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  MUGI_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const MUGI_STAY_PACK_NAMES = [] as const;

export const MUGI_STAY_PACK_SET: ReadonlySet<string> = new Set(
  MUGI_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const MUGI_SHOPPING_PACK_NAMES = [] as const;

export const MUGI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  MUGI_SHOPPING_PACK_NAMES
);

export const MUGI_SIGHT_PINS = ['牟岐町モデル木造施設 モラスコむぎ', '出羽島伝統的建造物群保存地区'] as const;

export const MUGI_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: MUGI_TRAVEL_ACCESSED
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
    accessed: MUGI_TRAVEL_ACCESSED
  };
}

export const MUGI_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'mugi-dining-02',
    "牟岐朝日食堂",
    "徳島県海部郡牟岐町中村本村10-24 マーブル牟岐 1F",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36009060/"
  ),
  dining(
    'mugi-dining-08',
    "牟岐５５ラーメン",
    "徳島県海部郡牟岐町川長関33-1",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36005075/"
  ),
  dining(
    'mugi-dining-03',
    "揚子江",
    "徳島県海部郡牟岐町中村大谷67-1",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36000984/"
  ),
  dining(
    'mugi-dining-04',
    "亜梨巣",
    "徳島県海部郡牟岐町中村本村290",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36002810/"
  ),
  dining(
    'mugi-dining-05',
    "WADA",
    "徳島県海部郡牟岐町川長字関81-2",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36003486/"
  ),
  dining(
    'mugi-dining-06',
    "しらきや",
    "徳島県海部郡牟岐町内妻字白木68-2",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36003189/"
  ),
  dining(
    'mugi-dining-09',
    "魚秀やかた",
    "徳島県海部郡牟岐町大字中村字杉谷13-1",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36009012/"
  ),
  dining(
    'mugi-dining-10',
    "ほどほど",
    "徳島県海部郡牟岐町大字中村字大谷121-1",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36004908/"
  ),
  dining(
    'mugi-dining-12',
    "HORAI 牟岐店",
    "徳島県海部郡牟岐町大字中村字本村106-10",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36005952/"
  ),
  dining(
    'mugi-dining-01',
    "つくしお好焼店",
    "徳島県海部郡牟岐町川長天神前70-4",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36002586/"
  ),
  dining(
    'mugi-dining-07',
    "徳島スモーク",
    "徳島県海部郡牟岐町辺川75-1",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36008574/"
  ),
  dining(
    'mugi-dining-11',
    "家形船",
    "徳島県海部郡牟岐町大字内妻字白木34",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36000367/"
  ),
  dining(
    'mugi-dining-13',
    "ねんねこ",
    "徳島県海部郡牟岐町中村本村54-43",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36008858/"
  ),
  dining(
    'mugi-dining-14',
    "フルール",
    "徳島県海部郡牟岐町川長字新光寺7-3",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36000084/"
  ),
  dining(
    'mugi-dining-15',
    "貴美",
    "徳島県海部郡牟岐町中村本村154-8",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36002819/"
  ),
  dining(
    'mugi-dining-16',
    "海賊茶屋",
    "徳島県海部郡牟岐町牟岐浦出羽島49-2",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36009054/"
  ),
  dining(
    'mugi-dining-17',
    "ふくまつ",
    "徳島県海部郡牟岐町大字中村字清水212",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36005954/"
  ),
  dining(
    'mugi-dining-18',
    "ポケット",
    "徳島県海部郡牟岐町中村本村106-10 ポルト",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36004648/"
  ),
  dining(
    'mugi-dining-19',
    "ブー",
    "徳島県海部郡牟岐町中村本村7-3",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36002037/"
  )

];

export const MUGI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  MUGI_TRAVEL_DINING.map((row) => row.name_ja)
);

export const MUGI_TRAVEL_SHOPPING: readonly TravelRow[] = [];

export const MUGI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const MUGI_TRAVEL_ALL: readonly TravelRow[] = [
  ...MUGI_TRAVEL_DINING,
  ...MUGI_TRAVEL_STAY,
  ...MUGI_TRAVEL_SHOPPING,
  ...MUGI_TRAVEL_COMMERCE
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

export function isMugiOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MUGI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isMugiExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isMugiStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isMugiShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return MUGI_SHOPPING_PACK_SET.has(row.name_ja);
}

export function mugiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return MUGI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankMugiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isMugiOnsenPackRow(row) &&
      !isMugiStayPackRow(row) &&
      !isMugiShoppingPackRow(row) &&
      !MUGI_DINING_NAME_SET.has(row.name_ja)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of MUGI_SIGHT_PINS) {
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

export function mugiSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '牟岐町 飲食案内' : 'Mugi dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '牟岐町 宿泊案内' : 'Mugi lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '牟岐町 買物案内' : 'Mugi shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（町・オープンデータ）' : 'Cultural property (town / open data)';
  }
  return '';
}

export function mugiTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isMugiOnsenPackRow(row)) return 'onsen';
  if (isMugiStayPackRow(row)) return 'stay';
  if (isMugiShoppingPackRow(row)) return 'shopping';
  if (MUGI_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function mugiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isMugiOnsenPackRow(row) &&
      !isMugiStayPackRow(row) &&
      !isMugiShoppingPackRow(row) &&
      !MUGI_DINING_NAME_SET.has(nameJa)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMugiOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isMugiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveMugiFilter(c: string | undefined, q: string): FilterId {
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

export const MUGI_HALL = MUGI.hall;
