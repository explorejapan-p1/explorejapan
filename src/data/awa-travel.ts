/**
 * Awa travel layer. Pack has no dining/stay categories.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 阿波市 public shop pages. Do not invent pack dining.
 * Do not copy 美馬 / つるぎ / 吉野川 / 三好 TRAVEL_* rows or photos.
 * Do not mix 東みよし町 (36489).
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {AWA, AWA_SIGHT_PHOTOS} from './awa';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const AWA_TRAVEL_ACCESSED = '2026-09-05' as const;

export const AWA_TRAVEL_SOURCES = {
  home: 'https://www.city.awa.lg.jp/',
  hall: 'https://www.city.awa.lg.jp/docs/2014032600037/',
  kanko: 'https://www.city.awa.lg.jp/category/bunya/kanko/',
  tabelogCity: 'https://tabelog.com/tokushima/C36206/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const AWA_ONSEN_PACK_NAMES = [] as const;

export const AWA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(AWA_ONSEN_PACK_NAMES);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const AWA_STAY_PACK_NAMES = [] as const;

export const AWA_STAY_PACK_SET: ReadonlySet<string> = new Set(AWA_STAY_PACK_NAMES);

export const AWA_SIGHT_PINS = [
  '阿波の土柱',
  '第10番札所 切幡寺',
  '第8番札所 熊谷寺',
  '第7番札所 十楽寺'
] as const;

export const AWA_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: AWA_TRAVEL_ACCESSED
  };
}

export const AWA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'awa-dining-01',
    'Cafe ヨモスガラ',
    '徳島県阿波市吉野町柿原原261-10',
    null,
    'https://tabelog.com/tokushima/A3603/A360301/36008944/'
  ),
  dining(
    'awa-dining-02',
    '英',
    '徳島県阿波市阿波町川久保37 1F',
    null,
    'https://tabelog.com/tokushima/A3603/A360301/36002270/'
  ),
  dining(
    'awa-dining-03',
    '焼鳥鳥吉',
    '徳島県阿波市市場町山野上大西180-1',
    null,
    'https://tabelog.com/tokushima/A3603/A360301/36001133/'
  ),
  dining(
    'awa-dining-04',
    'タテイシ',
    '徳島県阿波市吉野町柿原字谷87-1',
    null,
    'https://tabelog.com/tokushima/A3603/A360301/36003425/'
  ),
  dining(
    'awa-dining-05',
    'とき',
    '徳島県阿波市土成町水田月成187',
    null,
    'https://tabelog.com/tokushima/A3603/A360301/36002731/'
  ),
  dining(
    'awa-dining-06',
    '御所 社乃森',
    '徳島県阿波市土成町宮川内字落久保71-2',
    null,
    'https://tabelog.com/tokushima/A3603/A360301/36004926/'
  ),
  dining(
    'awa-dining-07',
    '花詩',
    '徳島県阿波市阿波町丸山63-1',
    null,
    'https://tabelog.com/tokushima/A3603/A360301/36001287/'
  ),
  dining(
    'awa-dining-08',
    '天吉うどん 阿波店',
    '徳島県阿波市阿波町西林166-1',
    null,
    'https://tabelog.com/tokushima/A3603/A360301/36001601/'
  )
];

export const AWA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  AWA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const AWA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const AWA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const AWA_TRAVEL_ALL: readonly TravelRow[] = [
  ...AWA_TRAVEL_DINING,
  ...AWA_TRAVEL_STAY,
  ...AWA_TRAVEL_SHOPPING,
  ...AWA_TRAVEL_COMMERCE
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

export function isAwaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AWA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isAwaExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isAwaStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function awaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return AWA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankAwaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isAwaOnsenPackRow(row) &&
      !isAwaStayPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of AWA_SIGHT_PINS) {
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

export function awaSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '阿波市 飲食案内' : 'Awa dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '阿波市 宿泊案内' : 'Awa lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function awaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isAwaOnsenPackRow(row)) return 'onsen';
  if (isAwaStayPackRow(row)) return 'stay';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function awaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isAwaOnsenPackRow(row) &&
      !isAwaStayPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isAwaOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isAwaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveAwaFilter(c: string | undefined, q: string): FilterId {
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

export const AWA_HALL = AWA.hall;
