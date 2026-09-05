/**
 * Katsuura travel layer. Pack tourism includes inns without room photos.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 勝浦町 (C36301) public shop pages. Do not invent pack dining.
 * Do not copy 神山 / 上板 / 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KATSUURA, KATSUURA_SIGHT_PHOTOS} from './katsuura';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KATSUURA_TRAVEL_ACCESSED = '2026-09-05' as const;

export const KATSUURA_TRAVEL_SOURCES = {
  home: 'https://www.town.katsuura.lg.jp/',
  hall: 'https://www.town.katsuura.lg.jp/docs/2010111200280/',
  kanko: 'https://katsuura-tourism.jp/',
  tabelogCity: 'https://tabelog.com/tokushima/C36301/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const KATSUURA_ONSEN_PACK_NAMES = [] as const;

export const KATSUURA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  KATSUURA_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const KATSUURA_STAY_PACK_NAMES = [] as const;

export const KATSUURA_STAY_PACK_SET: ReadonlySet<string> = new Set(
  KATSUURA_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const KATSUURA_SHOPPING_PACK_NAMES = [] as const;

export const KATSUURA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  KATSUURA_SHOPPING_PACK_NAMES
);

export const KATSUURA_SIGHT_PINS = [
  '鶴林寺',
  '星谷寺(星の岩屋)',
  '立川渓谷',
  '恐竜の里',
  '道の駅ひなの里かつうら',
  '勝浦川、星谷運動公園',
  '鹿背山・稼勢山',
  '坂本八幡神社'
] as const;

export const KATSUURA_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: KATSUURA_TRAVEL_ACCESSED
  };
}

export const KATSUURA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'katsuura-dining-01',
    'このむ',
    '徳島県勝浦郡勝浦町沼江字殿光13-1',
    '0885-42-1003',
    'https://tabelog.com/tokushima/A3601/A360103/36003366/'
  ),
  dining(
    'katsuura-dining-02',
    'みりか',
    '徳島県勝浦郡勝浦町三溪下川原72-1',
    '0885-42-3901',
    'https://tabelog.com/tokushima/A3603/A360301/36003433/'
  ),
  dining(
    'katsuura-dining-03',
    '前松堂',
    '徳島県勝浦郡勝浦町沼江字西岡27-3',
    '0885-42-3025',
    'https://tabelog.com/tokushima/A3601/A360104/36003453/'
  ),
  dining(
    'katsuura-dining-04',
    'Maeno',
    '徳島県勝浦郡勝浦町三渓字上川原43-10',
    '0885-42-2044',
    'https://tabelog.com/tokushima/A3601/A360103/36005670/'
  ),
  dining(
    'katsuura-dining-05',
    '滝口清水堂',
    '徳島県勝浦郡勝浦町大字中角字長田48-1',
    '0885-42-3170',
    'https://tabelog.com/tokushima/A3601/A360103/36006065/'
  ),
  dining(
    'katsuura-dining-06',
    'つばめ食堂',
    '徳島県勝浦郡勝浦町棚野字竹国1-4',
    '090-7785-6772',
    'https://tabelog.com/tokushima/A3601/A360104/36004711/'
  ),
  dining(
    'katsuura-dining-07',
    '金子屋',
    '徳島県勝浦郡勝浦町大字生名字石垣3-1',
    '0885-42-2721',
    'https://tabelog.com/tokushima/A3601/A360103/36006067/'
  ),
  dining(
    'katsuura-dining-08',
    '喫茶オレンジ',
    '徳島県勝浦郡勝浦町大字生名字月ノ瀬4-1 （道の駅・ひなの里かつうら）内',
    '0885-42-2732',
    'https://tabelog.com/tokushima/A3601/A360103/36004095/'
  ),
  dining(
    'katsuura-dining-09',
    '田舎寿し　なか山',
    '徳島県勝浦郡勝浦町三渓下川原72-32',
    '0885-42-3847',
    'https://tabelog.com/tokushima/A3601/A360104/36004741/'
  ),
  dining(
    'katsuura-dining-10',
    'うおよし',
    '徳島県勝浦郡勝浦町生名字屋敷53-1',
    '0885-42-4411',
    'https://tabelog.com/tokushima/A3601/A360103/36003185/'
  ),
  dining(
    'katsuura-dining-11',
    '江戸蕎麦 一竿風月',
    '徳島県勝浦郡勝浦町大字三渓字西谷113-1',
    '080-3926-0717',
    'https://tabelog.com/tokushima/A3601/A360103/36007751/'
  ),
  dining(
    'katsuura-dining-12',
    '魚達',
    '徳島県勝浦郡勝浦町大字棚野字桧岡104',
    '0885-42-4424',
    'https://tabelog.com/tokushima/A3601/A360104/36006059/'
  ),
  dining(
    'katsuura-dining-13',
    '手打ちうどん　みやこ家',
    '徳島県勝浦郡勝浦町大字生名字月ノ瀬 道の駅 ひなの里かつうら',
    '080-4035-3858',
    'https://tabelog.com/tokushima/A3601/A360104/36004114/'
  )
];

export const KATSUURA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  KATSUURA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const KATSUURA_TRAVEL_SHOPPING: readonly TravelRow[] = [];

export const KATSUURA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const KATSUURA_TRAVEL_ALL: readonly TravelRow[] = [
  ...KATSUURA_TRAVEL_DINING,
  ...KATSUURA_TRAVEL_STAY,
  ...KATSUURA_TRAVEL_SHOPPING,
  ...KATSUURA_TRAVEL_COMMERCE
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

export function isKatsuuraOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KATSUURA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isKatsuuraExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isKatsuuraStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isKatsuuraShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return KATSUURA_SHOPPING_PACK_SET.has(row.name_ja);
}

export function katsuuraSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return KATSUURA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankKatsuuraSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isKatsuuraOnsenPackRow(row) &&
      !isKatsuuraStayPackRow(row) &&
      !isKatsuuraShoppingPackRow(row) &&
      !KATSUURA_DINING_NAME_SET.has(row.name_ja)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of KATSUURA_SIGHT_PINS) {
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

export function katsuuraSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '勝浦町 飲食案内' : 'Katsuura dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '勝浦町 宿泊案内' : 'Katsuura lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '勝浦町 買物案内' : 'Katsuura shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function katsuuraTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isKatsuuraOnsenPackRow(row)) return 'onsen';
  if (isKatsuuraStayPackRow(row)) return 'stay';
  if (isKatsuuraShoppingPackRow(row)) return 'shopping';
  if (KATSUURA_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function katsuuraPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isKatsuuraOnsenPackRow(row) &&
      !isKatsuuraStayPackRow(row) &&
      !isKatsuuraShoppingPackRow(row) &&
      !KATSUURA_DINING_NAME_SET.has(nameJa)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKatsuuraOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isKatsuuraStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveKatsuuraFilter(c: string | undefined, q: string): FilterId {
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

export const KATSUURA_HALL = KATSUURA.hall;
