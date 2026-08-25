/**
 * Dining and lodging listed by Mima Tourism Bureau.
 * Names, addresses, and phones are copied from the public pages only.
 * Not in the frozen 515-row pack. Do not invent extra names or dining addresses.
 *
 * Dining: https://mimakankou.or.jp/gourmet/
 * Stay: https://mimakankou.or.jp/hoteltop/
 * City lodging index: https://www.city.mima.lg.jp/kanko/tomaru/
 * accessed 2026-08-26
 */

import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';

export const TRAVEL_ACCESSED = '2026-08-26' as const;

export const TRAVEL_SOURCES = {
  dining: 'https://mimakankou.or.jp/gourmet/',
  stay: 'https://mimakankou.or.jp/hoteltop/',
  cityStay: 'https://www.city.mima.lg.jp/kanko/tomaru/'
} as const;

export const TRAVEL_KINDS = ['dining', 'stay'] as const;
export type TravelKind = (typeof TRAVEL_KINDS)[number];

export type FilterId = 'all' | FacilityCategory | TravelKind;

export type TravelRow = {
  id: string;
  name_ja: string;
  category: TravelKind;
  address: string | null;
  phone: string | null;
  source_url: string;
  accessed: typeof TRAVEL_ACCESSED;
};

export const TRAVEL_COUNTS = {
  dining: 12,
  stay: 7
} as const satisfies Record<TravelKind, number>;

function dining(id: string, name_ja: string): TravelRow {
  return {
    id,
    name_ja,
    category: 'dining',
    address: null,
    phone: null,
    source_url: TRAVEL_SOURCES.dining,
    accessed: TRAVEL_ACCESSED
  };
}

function stay(
  id: string,
  name_ja: string,
  address: string,
  phone: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'stay',
    address,
    phone,
    source_url: TRAVEL_SOURCES.stay,
    accessed: TRAVEL_ACCESSED
  };
}

export const TRAVEL_DINING: readonly TravelRow[] = [
  dining('mima-dining-01', 'うだつ emon 茶房'),
  dining('mima-dining-02', 'Cafe角屋'),
  dining('mima-dining-03', '茶里庵(さりあん）'),
  dining('mima-dining-04', '二代目 天竜'),
  dining('mima-dining-05', 'プランタン'),
  dining('mima-dining-06', 'PUNTA'),
  dining('mima-dining-07', '四季料理 森友'),
  dining('mima-dining-08', '皿そば楽庵'),
  dining('mima-dining-09', '道の駅 藍蔵'),
  dining('mima-dining-10', '和ぁさん家'),
  dining('mima-dining-11', '割烹旅館田岡'),
  dining('mima-dining-12', 'ブルーヴィラあなぶき')
];

export const TRAVEL_STAY: readonly TravelRow[] = [
  stay(
    'mima-stay-01',
    'ADLIV',
    '美馬市脇町大字猪尻字若宮南131-2',
    '0883-52-1643'
  ),
  stay(
    'mima-stay-02',
    'オートキャンプ場 四国三郎の郷',
    '美馬市美馬町境目39-10',
    '0883-55-2002'
  ),
  stay(
    'mima-stay-03',
    '清月屋敷',
    '美馬市穴吹町穴吹市ノ下100-6',
    '0883-53-7733'
  ),
  stay(
    'mima-stay-04',
    '剣山頂上ヒュッテ',
    '美馬市木屋平字川井カケ570',
    '080-2997-8482'
  ),
  stay(
    'mima-stay-05',
    'ビジネスホテル稲田苑',
    '美馬市脇町拝原１００１−１',
    '0883-52-3333'
  ),
  stay(
    'mima-stay-06',
    'ビジネスホテルマツカ',
    '美馬市脇町大字猪尻建神社下南１５３−１',
    '0883-52-1555'
  ),
  stay(
    'mima-stay-07',
    'Paysage Moriguchi',
    '美馬市脇町大字脇町148-4',
    '0883-52-1578'
  )
];

export const TRAVEL_ALL: readonly TravelRow[] = [...TRAVEL_DINING, ...TRAVEL_STAY];

if (TRAVEL_DINING.length !== TRAVEL_COUNTS.dining) {
  throw new Error(`mima dining ${TRAVEL_DINING.length} != ${TRAVEL_COUNTS.dining}`);
}
if (TRAVEL_STAY.length !== TRAVEL_COUNTS.stay) {
  throw new Error(`mima stay ${TRAVEL_STAY.length} != ${TRAVEL_COUNTS.stay}`);
}

export function isTravelFilter(filter: FilterId): filter is TravelKind {
  return filter === 'dining' || filter === 'stay';
}

function isPackCategory(value: string | undefined): value is FacilityCategory {
  return LOOKUP_CATEGORIES.some((cat) => cat === value);
}

/** no c and no q → dining; q without c → all (pack name-wins plus travel names). */
export function resolveMimaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'dining' || c === 'stay') return c;
  if (c === 'all') return 'all';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'dining';
}
