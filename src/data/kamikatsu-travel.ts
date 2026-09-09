/**
 * Kamikatsu travel layer. Pack tourism includes inns/cafes/shops as tourism.
 * Stay: HOTEL WHY + 月ヶ谷温泉「月の宿」 Rakuten 部屋 still (TG610 densify).
 * Onsen: EXTRA 月ヶ谷温泉 月の宿 大浴場 bath still (HARD BAR stay≠onsen).
 * Dining from 食べログ 上勝町 (C36302) public shop pages with FOOD dish heroes.
 * PHOTO GAPS: other pack lodgings (Villa/Rolling Room/山挨/花びより/山西/あさひ/…) lack room 出典 — omit.
 * Do not copy 勝浦 / 神山 / 上板 / 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KAMIKATSU, KAMIKATSU_SIGHT_PHOTOS} from './kamikatsu';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KAMIKATSU_TRAVEL_ACCESSED = '2026-09-09' as const;

export const KAMIKATSU_TRAVEL_SOURCES = {
  home: 'https://www.kamikatsu.jp/',
  hall: 'https://www.kamikatsu.jp/',
  kanko: 'https://www.tourism-kamikatsu.jp/',
  tabelogCity: 'https://tabelog.com/tokushima/C36302/rstLst/',
  hotelWhy: 'https://why-kamikatsu.jp/pages/stay',
  tsukigaya: 'https://travel.rakuten.co.jp/HOTEL/50245/50245.html'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required. */
export const KAMIKATSU_ONSEN_PACK_NAMES = [
  '月ヶ谷温泉 月の宿 大浴場'
] as const;

export const KAMIKATSU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  KAMIKATSU_ONSEN_PACK_NAMES
);
export const KAMIKATSU_EXPERIENCE_PACK_NAMES = ['上勝町ゼロ・ウェイストセンターWHY'] as const;
export const KAMIKATSU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KAMIKATSU_EXPERIENCE_PACK_NAMES);


/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const KAMIKATSU_STAY_PACK_NAMES = [] as const;

export const KAMIKATSU_STAY_PACK_SET: ReadonlySet<string> = new Set(
  KAMIKATSU_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const KAMIKATSU_SHOPPING_PACK_NAMES = ['たけいち笑店'] as const;

export const KAMIKATSU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  KAMIKATSU_SHOPPING_PACK_NAMES
);

export const KAMIKATSU_SIGHT_PINS = [
  '樫原の棚田',
  '上勝町ゼロ・ウェイストセンターWHY',
  '月頂山 宝珠院 慈眼寺',
  '百間滝',
  '雄淵・雌淵',
  '高丸山',
  '山犬嶽',
  '剣山スーパー林道',
  '美愁湖・正木ダム公園',
  '灌頂ヶ滝'
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
    accessed: KAMIKATSU_TRAVEL_ACCESSED
  };
}

/** Ranked strongest room 出典. Dining already uses 月ヶ谷温泉 月の宿 — stay uses 「」 form. */
export const KAMIKATSU_TRAVEL_STAY: readonly TravelRow[] = [
  stay(
    'kamikatsu-stay-01',
    'HOTEL WHY',
    '徳島県勝浦郡上勝町大字福原字下日浦7番地2',
    '070-2616-9012',
    'https://why-kamikatsu.jp/pages/stay'
  ),
  stay(
    'kamikatsu-stay-02',
    '月ヶ谷温泉「月の宿」',
    '徳島県勝浦郡上勝町福原平間71-1',
    '0885-46-0203',
    'https://travel.rakuten.co.jp/HOTEL/50245/50245.html'
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
    accessed: KAMIKATSU_TRAVEL_ACCESSED
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
    accessed: KAMIKATSU_TRAVEL_ACCESSED
  };
}

export const KAMIKATSU_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'kamikatsu-dining-01',
    'ペルトナーレ',
    '徳島県勝浦郡上勝町福原古川71',
    '050-5456-1674',
    'https://tabelog.com/tokushima/A3601/A360104/36008813/'
  ),
  dining(
    'kamikatsu-dining-02',
    'ポールスター',
    '徳島県勝浦郡上勝町福原字平間32-1',
    '0885-46-0338',
    'https://tabelog.com/tokushima/A3601/A360104/36005429/'
  ),
  dining(
    'kamikatsu-dining-03',
    'ライズアンドウィン ブルーイングカンパニー バーベキューアンド ジェネラルストア',
    '徳島県勝浦郡上勝町大字正木平間237-2',
    '0885-45-0688',
    'https://tabelog.com/tokushima/A3601/A360104/36005766/'
  ),
  dining(
    'kamikatsu-dining-04',
    '喫茶いくみ',
    '徳島県勝浦郡上勝町大字生実字谷口12',
    null,
    'https://tabelog.com/tokushima/A3601/A360104/36006052/'
  ),
  dining(
    'kamikatsu-dining-05',
    'せせらぎ食堂',
    '徳島県勝浦郡上勝町旭字丸山20-1 すぎとやま 神田アトリエ内',
    '050-3438-8310',
    'https://tabelog.com/tokushima/A3601/A360104/36008995/'
  ),
  dining(
    'kamikatsu-dining-06',
    'バーイロリ',
    '徳島県勝浦郡上勝町大字福原字庵ノ谷27',
    '090-2789-8577',
    'https://tabelog.com/tokushima/A3601/A360104/36006727/'
  ),
  dining(
    'kamikatsu-dining-07',
    'TONPUKU',
    '徳島県勝浦郡上勝町福原平間62',
    null,
    'https://tabelog.com/tokushima/A3601/A360104/36009157/'
  ),
  dining(
    'kamikatsu-dining-08',
    'いっきゅう茶屋',
    '徳島県勝浦郡上勝町大字福原字下日浦76-12',
    '0885-46-0198',
    'https://tabelog.com/tokushima/A3601/A360104/36003090/'
  ),
  dining(
    'kamikatsu-dining-09',
    'あさかげ亭',
    '徳島県勝浦郡上勝町生実白鶴23-1',
    null,
    'https://tabelog.com/tokushima/A3601/A360104/36006782/'
  ),
  dining(
    'kamikatsu-dining-10',
    '月ヶ谷温泉 月の宿',
    '徳島県勝浦郡上勝町福原平間71-1',
    '0885-46-0203',
    'https://tabelog.com/tokushima/A3601/A360104/36000691/'
  )
];

export const KAMIKATSU_DINING_NAME_SET: ReadonlySet<string> = new Set(
  KAMIKATSU_TRAVEL_DINING.map((row) => row.name_ja)
);

export const KAMIKATSU_TRAVEL_SHOPPING: readonly TravelRow[] = [
  shopping(
    'kamikatsu-shopping-01',
    'たけいち笑店',
    '徳島県勝浦郡上勝町旭中村16-1',
    null,
    'https://www.tourism-kamikatsu.jp/pages/buy'
  )
];

export const KAMIKATSU_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const KAMIKATSU_TRAVEL_ALL: readonly TravelRow[] = [
  ...KAMIKATSU_TRAVEL_DINING,
  ...KAMIKATSU_TRAVEL_STAY,
  ...KAMIKATSU_TRAVEL_SHOPPING,
  ...KAMIKATSU_TRAVEL_COMMERCE
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

export function isKamikatsuOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMIKATSU_ONSEN_PACK_SET.has(row.name_ja);
}

export function isKamikatsuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KAMIKATSU_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isKamikatsuStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isKamikatsuShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return KAMIKATSU_SHOPPING_PACK_SET.has(row.name_ja);
}

export function kamikatsuSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return KAMIKATSU_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankKamikatsuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isKamikatsuOnsenPackRow(row) &&
      !isKamikatsuExperiencePackRow(row) &&
      !isKamikatsuStayPackRow(row) &&
      !isKamikatsuShoppingPackRow(row) &&
      !KAMIKATSU_DINING_NAME_SET.has(row.name_ja)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of KAMIKATSU_SIGHT_PINS) {
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

export function kamikatsuSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '上勝町 飲食案内' : 'Kamikatsu dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '上勝町 宿泊案内' : 'Kamikatsu lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '上勝町 買物案内' : 'Kamikatsu shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function kamikatsuTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isKamikatsuExperiencePackRow(row)) return 'experience';
  if (isKamikatsuOnsenPackRow(row)) return 'onsen';
  if (isKamikatsuStayPackRow(row)) return 'stay';
  if (isKamikatsuShoppingPackRow(row)) return 'shopping';
  if (KAMIKATSU_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function kamikatsuPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isKamikatsuOnsenPackRow(row) &&
      !isKamikatsuExperiencePackRow(row) &&
      !isKamikatsuStayPackRow(row) &&
      !isKamikatsuShoppingPackRow(row) &&
      !KAMIKATSU_DINING_NAME_SET.has(nameJa)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKamikatsuOnsenPackRow(row);
  if (filter === 'experience') return isKamikatsuExperiencePackRow(row);
  if (filter === 'stay') return isKamikatsuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveKamikatsuFilter(c: string | undefined, q: string): FilterId {
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

export const KAMIKATSU_HALL = KAMIKATSU.hall;
