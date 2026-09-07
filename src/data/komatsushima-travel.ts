/**
 * Komatsushima City travel layer. No frozen pack.
 * Pass 1: empty dining. Pass 2 may add Tabelog FOOD dish photos.
 * Do not invent pack dining. Do not copy 鳴門 / 徳島市 / 阿南 / 藍住 TRAVEL_* rows or photos.
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
  tabelogCity: 'https://tabelog.com/tokushima/C36203/rstLst/'
} as const;

export const KOMATSUSHIMA_ONSEN_PACK_NAMES = [] as const;
export const KOMATSUSHIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KOMATSUSHIMA_ONSEN_PACK_NAMES);
export const KOMATSUSHIMA_STAY_PACK_NAMES = [] as const;
export const KOMATSUSHIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(KOMATSUSHIMA_STAY_PACK_NAMES);

export const KOMATSUSHIMA_SIGHT_PINS = [
  '大手海岸',
  '立江寺',
  '恩山寺',
  '金長神社',
  '小松島ステーションパーク'
] as const;

export const KOMATSUSHIMA_TRAVEL_STAY: readonly TravelRow[] = [];
export const KOMATSUSHIMA_TRAVEL_DINING: readonly TravelRow[] = [];
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

export function isKomatsushimaExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
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
  if (isKomatsushimaStayPackRow(row)) return 'stay';
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
      !isKomatsushimaStayPackRow(row) &&
      !isKomatsushimaDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKomatsushimaOnsenPackRow(row);
  if (filter === 'experience') return false;
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
