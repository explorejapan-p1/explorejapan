/**
 * Kamiita travel layer. Pack has no dining/stay categories.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 上板町 (C36405) public shop pages. Do not invent pack dining.
 * Do not copy 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KAMIITA, KAMIITA_SIGHT_PHOTOS} from './kamiita';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KAMIITA_TRAVEL_ACCESSED = '2026-09-05' as const;

export const KAMIITA_TRAVEL_SOURCES = {
  home: 'https://www.townkamiita.jp/',
  hall: 'https://www.townkamiita.jp/',
  kanko: 'https://www.townkamiita.jp/illustmap',
  tabelogCity: 'https://tabelog.com/tokushima/C36405/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const KAMIITA_ONSEN_PACK_NAMES = [] as const;

export const KAMIITA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  KAMIITA_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const KAMIITA_STAY_PACK_NAMES = [] as const;

export const KAMIITA_STAY_PACK_SET: ReadonlySet<string> = new Set(
  KAMIITA_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const KAMIITA_SHOPPING_PACK_NAMES = [] as const;

export const KAMIITA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  KAMIITA_SHOPPING_PACK_NAMES
);

export const KAMIITA_SIGHT_PINS = [
  '第六番 安楽寺',
  '大山寺',
  '技の館',
  '上板町歴史民俗資料館',
  'ファミリースポーツ公園',
  '第十の堰'
] as const;

export const KAMIITA_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: KAMIITA_TRAVEL_ACCESSED
  };
}

export const KAMIITA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'kamiita-dining-01',
    "亀井製麺所",
    "徳島県板野郡上板町神宅字小柿7-3",
    "088-635-8455",
    "https://tabelog.com/tokushima/A3603/A360301/36007182/"
  ),
  dining(
    'kamiita-dining-02',
    "和楽や",
    "徳島県板野郡上板町七條古町64-1",
    "080-6385-3119",
    "https://tabelog.com/tokushima/A3603/A360301/36005631/"
  ),
  dining(
    'kamiita-dining-03',
    "岡萬本舗 北本店",
    "徳島県板野郡上板町西分字馬道南28-1",
    "088-694-6288",
    "https://tabelog.com/tokushima/A3603/A360303/36005669/"
  ),
  dining(
    'kamiita-dining-04',
    "お好み焼き 丸金",
    "徳島県板野郡上板町鍛冶屋原居屋敷南29-2",
    "088-694-3897",
    "https://tabelog.com/tokushima/A3603/A360301/36004892/"
  ),
  dining(
    'kamiita-dining-05',
    "Za Classic",
    "徳島県板野郡上板町鍛冶屋原妙楽寺6-2",
    "080-4034-2373",
    "https://tabelog.com/tokushima/A3603/A360301/36008674/"
  ),
  dining(
    'kamiita-dining-06',
    "つけ麺ヤー",
    "徳島県板野郡上板町椎本字寺ノ前588-9",
    "090-3232-0510",
    "https://tabelog.com/tokushima/A3603/A360303/36009117/"
  ),
  dining(
    'kamiita-dining-07',
    "ダイニング酒飯 じゅれーむ",
    "徳島県板野郡上板町泉谷字原東32-4 技の館 1F",
    "090-4333-8888",
    "https://tabelog.com/tokushima/A3603/A360301/36007343/"
  ),
  dining(
    'kamiita-dining-08',
    "中国料理龍盛",
    "徳島県板野郡上板町椎本字椎ノ宮277-1",
    "088-694-6942",
    "https://tabelog.com/tokushima/A3603/A360303/36003813/"
  ),
  dining(
    'kamiita-dining-09',
    "徳島ラーメン 麺王 上板スクエア店",
    "徳島県板野郡上板町椎本亀ノ本209-1 上板スクエア 4号館",
    "088-679-7780",
    "https://tabelog.com/tokushima/A3603/A360303/36006045/"
  ),
  dining(
    'kamiita-dining-10',
    "ニヤカフェ",
    "徳島県板野郡上板町七條字元原23",
    "088-678-6263",
    "https://tabelog.com/tokushima/A3603/A360301/36005949/"
  ),
  dining(
    'kamiita-dining-11',
    "ひより家",
    "徳島県板野郡上板町七條御宝14-11",
    "088-624-7468",
    "https://tabelog.com/tokushima/A3603/A360301/36008318/"
  ),
  dining(
    'kamiita-dining-12',
    "斉藤食堂",
    "徳島県板野郡上板町神宅字北屋敷21-17",
    "088-694-2921",
    "https://tabelog.com/tokushima/A3603/A360303/36005653/"
  ),
  dining(
    'kamiita-dining-13',
    "三玄",
    "徳島県板野郡上板町西分カヤノ-16-1",
    "088-694-4391",
    "https://tabelog.com/tokushima/A3603/A360303/36001163/"
  ),
  dining(
    'kamiita-dining-14',
    "寿食堂",
    "徳島県板野郡上板町七條字大道ノ上13-1",
    "088-694-2024",
    "https://tabelog.com/tokushima/A3603/A360301/36005257/"
  )
];

export const KAMIITA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  KAMIITA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const KAMIITA_TRAVEL_SHOPPING: readonly TravelRow[] = [];

export const KAMIITA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const KAMIITA_TRAVEL_ALL: readonly TravelRow[] = [
  ...KAMIITA_TRAVEL_DINING,
  ...KAMIITA_TRAVEL_STAY,
  ...KAMIITA_TRAVEL_SHOPPING,
  ...KAMIITA_TRAVEL_COMMERCE
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

export function isKamiitaOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMIITA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isKamiitaExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isKamiitaStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isKamiitaShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return KAMIITA_SHOPPING_PACK_SET.has(row.name_ja);
}

export function kamiitaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return KAMIITA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankKamiitaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isKamiitaOnsenPackRow(row) &&
      !isKamiitaStayPackRow(row) &&
      !isKamiitaShoppingPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of KAMIITA_SIGHT_PINS) {
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

export function kamiitaSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '上板町 飲食案内' : 'Kamiita dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '上板町 宿泊案内' : 'Kamiita lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '上板町 買物案内' : 'Kamiita shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function kamiitaTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isKamiitaOnsenPackRow(row)) return 'onsen';
  if (isKamiitaStayPackRow(row)) return 'stay';
  if (isKamiitaShoppingPackRow(row)) return 'shopping';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function kamiitaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isKamiitaOnsenPackRow(row) &&
      !isKamiitaStayPackRow(row) &&
      !isKamiitaShoppingPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKamiitaOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isKamiitaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveKamiitaFilter(c: string | undefined, q: string): FilterId {
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

export const KAMIITA_HALL = KAMIITA.hall;
