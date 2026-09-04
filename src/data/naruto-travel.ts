/**
 * Naruto City travel layer. Scaffold: empty dining/stay/shopping/commerce.
 * No frozen pack. Do not invent pack dining. Do not copy 徳島市 / 北島 / 松茂 TRAVEL_* rows.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NARUTO, NARUTO_SIGHT_PHOTOS} from './naruto';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const NARUTO_TRAVEL_ACCESSED = '2026-09-05' as const;

export const NARUTO_TRAVEL_SOURCES = {
  home: 'https://www.city.naruto.tokushima.jp/',
  hall: 'https://www.city.naruto.tokushima.jp/docs/2025090900052/',
  kanko: 'https://www.city.naruto.tokushima.jp/category/bunya/kanko/',
  uzunomichi: 'https://www.uzunomichi.jp/',
  uzushio: 'https://uzushio-guruguru.com/'
} as const;

export const NARUTO_ONSEN_PACK_NAMES = [] as const;
export const NARUTO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NARUTO_ONSEN_PACK_NAMES);
export const NARUTO_STAY_PACK_NAMES = [] as const;
export const NARUTO_STAY_PACK_SET: ReadonlySet<string> = new Set(NARUTO_STAY_PACK_NAMES);

export const NARUTO_SIGHT_PINS = ['鳴門の渦潮'] as const;

export const NARUTO_TRAVEL_STAY: readonly TravelRow[] = [];
export const NARUTO_TRAVEL_DINING: readonly TravelRow[] = [];
export const NARUTO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const NARUTO_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const NARUTO_DINING_NAME_SET: ReadonlySet<string> = new Set(
  NARUTO_TRAVEL_DINING.map((row) => row.name_ja)
);

export const NARUTO_TRAVEL_ALL: readonly TravelRow[] = [
  ...NARUTO_TRAVEL_DINING,
  ...NARUTO_TRAVEL_STAY,
  ...NARUTO_TRAVEL_SHOPPING,
  ...NARUTO_TRAVEL_COMMERCE
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

export function isNarutoOnsenPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isNarutoExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isNarutoStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isNarutoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NARUTO_DINING_NAME_SET.has(row.name_ja);
}

export function narutoSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return NARUTO_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankNarutoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isNarutoOnsenPackRow(row) &&
      !isNarutoStayPackRow(row) &&
      !isNarutoDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of NARUTO_SIGHT_PINS) {
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

export function narutoSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '鳴門市 飲食案内' : 'Naruto City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '鳴門市 宿泊案内' : 'Naruto City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function narutoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isNarutoOnsenPackRow(row)) return 'onsen';
  if (isNarutoStayPackRow(row)) return 'stay';
  if (isNarutoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function narutoPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isNarutoOnsenPackRow(row) &&
      !isNarutoStayPackRow(row) &&
      !isNarutoDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNarutoOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isNarutoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveNarutoFilter(c: string | undefined, q: string): FilterId {
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

export const NARUTO_HALL = NARUTO.hall;
