/**
 * Ishii travel layer. Pack has no dining/stay categories.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 石井町 (C36341) public shop pages. Do not invent pack dining.
 * Do not copy 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {ISHII, ISHII_SIGHT_PHOTOS} from './ishii';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const ISHII_TRAVEL_ACCESSED = '2026-09-05' as const;

export const ISHII_TRAVEL_SOURCES = {
  home: 'https://www.town.ishii.lg.jp/',
  hall: 'https://www.town.ishii.lg.jp/docs/2018110500219/',
  kanko: 'https://www.town.ishii.lg.jp/navi/kanko/',
  tabelogCity: 'https://tabelog.com/tokushima/C36341/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const ISHII_ONSEN_PACK_NAMES = [] as const;

export const ISHII_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  ISHII_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const ISHII_STAY_PACK_NAMES = [] as const;

export const ISHII_STAY_PACK_SET: ReadonlySet<string> = new Set(
  ISHII_STAY_PACK_NAMES
);

export const ISHII_SIGHT_PINS = [
  '吉野川第十堰',
  '前山公園',
  '野鳥の森',
  '地福寺の藤'
] as const;

export const ISHII_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: ISHII_TRAVEL_ACCESSED
  };
}

export const ISHII_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'ishii-dining-01',
    "十三八",
    "徳島県名西郡石井町石井尼寺48-5",
    null,
    "https://tabelog.com/tokushima/A3601/A360101/36001237/"
  ),
  dining(
    'ishii-dining-02',
    "源喜亭",
    "徳島県名西郡石井町石井字石井524-3",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36004405/"
  ),
  dining(
    'ishii-dining-03',
    "福助",
    "徳島県名西郡石井町石井石井444",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36001390/"
  ),
  dining(
    'ishii-dining-04',
    "うどんのふじい",
    "徳島県名西郡石井町高原西高原257-6",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36006797/"
  ),
  dining(
    'ishii-dining-05',
    "直心庵",
    "徳島県名西郡石井町藍畑字高畑1424-8",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36000184/"
  ),
  dining(
    'ishii-dining-06',
    "手打ちそば まこ",
    "徳島県名西郡石井町石井字石井1-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36007455/"
  ),
  dining(
    'ishii-dining-07',
    "そば米居酒屋 雫",
    "徳島県名西郡石井町石井字白鳥349-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36007056/"
  ),
  dining(
    'ishii-dining-08',
    "ナッシュカリーアメリカン 徳島本店",
    "徳島県名西郡石井町高川原加茂野275-2",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36004796/"
  ),
  dining(
    'ishii-dining-09',
    "黄琳",
    "徳島県名西郡石井町高川原字天神707-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36003060/"
  ),
  dining(
    'ishii-dining-10',
    "中華そば 猪虎 石井店",
    "徳島県名西郡石井町高川原天神544-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36008215/"
  ),
  dining(
    'ishii-dining-11',
    "シェコレット",
    "徳島県名西郡石井町石井字石井656-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36007122/"
  ),
  dining(
    'ishii-dining-12',
    "たらいうどん 山のせ 石井店",
    "徳島県名西郡石井町石井字石井673-12",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36000048/"
  ),
  dining(
    'ishii-dining-13',
    "出多寿司",
    "徳島県名西郡石井町石井白鳥328",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36001504/"
  ),
  dining(
    'ishii-dining-14',
    "中華そば もりしょう",
    "徳島県名西郡石井町高原字西高原335-1",
    null,
    "https://tabelog.com/tokushima/A3603/A360301/36003239/"
  ),
];

export const ISHII_DINING_NAME_SET: ReadonlySet<string> = new Set(
  ISHII_TRAVEL_DINING.map((row) => row.name_ja)
);

export const ISHII_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const ISHII_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const ISHII_TRAVEL_ALL: readonly TravelRow[] = [
  ...ISHII_TRAVEL_DINING,
  ...ISHII_TRAVEL_STAY,
  ...ISHII_TRAVEL_SHOPPING,
  ...ISHII_TRAVEL_COMMERCE
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

export function isIshiiOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return ISHII_ONSEN_PACK_SET.has(row.name_ja);
}

export function isIshiiExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isIshiiStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function ishiiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return ISHII_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankIshiiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isIshiiOnsenPackRow(row) &&
      !isIshiiStayPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of ISHII_SIGHT_PINS) {
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

export function ishiiSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '石井町 飲食案内' : 'Ishii dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '石井町 宿泊案内' : 'Ishii lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function ishiiTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isIshiiOnsenPackRow(row)) return 'onsen';
  if (isIshiiStayPackRow(row)) return 'stay';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function ishiiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isIshiiOnsenPackRow(row) &&
      !isIshiiStayPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isIshiiOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isIshiiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveIshiiFilter(c: string | undefined, q: string): FilterId {
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

export const ISHII_HALL = ISHII.hall;
