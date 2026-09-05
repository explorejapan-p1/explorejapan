/**
 * Higashimiyoshi travel layer. Pack has no dining/stay categories.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 東みよし町 (C36489) public shop pages. Do not invent pack dining.
 * Do not copy 三好市 TRAVEL_* rows or photos (祖谷 / 大歩危 / Oboke / Iya).
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {HIGASHIMIYOSHI, HIGASHIMIYOSHI_SIGHT_PHOTOS} from './higashimiyoshi';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const HIGASHIMIYOSHI_TRAVEL_ACCESSED = '2026-09-05' as const;

export const HIGASHIMIYOSHI_TRAVEL_SOURCES = {
  home: 'https://www.town.higashimiyoshi.lg.jp/',
  hall: 'https://www.town.higashimiyoshi.lg.jp/',
  kanko: 'https://www.town.higashimiyoshi.lg.jp/docs/996.html',
  tabelogCity: 'https://tabelog.com/tokushima/C36489/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required — none yet. */
export const HIGASHIMIYOSHI_ONSEN_PACK_NAMES = [] as const;

export const HIGASHIMIYOSHI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  HIGASHIMIYOSHI_ONSEN_PACK_NAMES
);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const HIGASHIMIYOSHI_STAY_PACK_NAMES = [] as const;

export const HIGASHIMIYOSHI_STAY_PACK_SET: ReadonlySet<string> = new Set(
  HIGASHIMIYOSHI_STAY_PACK_NAMES
);

export const HIGASHIMIYOSHI_SIGHT_PINS = [
  '加茂の大クス',
  '美濃田の淵',
  '吉野川ハイウェイオアシス',
  '美濃田の淵キャンプ村'
] as const;

export const HIGASHIMIYOSHI_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: HIGASHIMIYOSHI_TRAVEL_ACCESSED
  };
}

export const HIGASHIMIYOSHI_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'higashimiyoshi-dining-01',
    'まあ庵',
    '徳島県三好郡東みよし町加茂1709',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36006271/'
  ),
  dining(
    'higashimiyoshi-dining-02',
    'おはなうどん',
    '徳島県三好郡東みよし町中庄1272-1',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36001320/'
  ),
  dining(
    'higashimiyoshi-dining-03',
    '手作りジェラートの店 ポコアポコ',
    '徳島県三好郡東みよし町昼間2984-8',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36000809/'
  ),
  dining(
    'higashimiyoshi-dining-04',
    '大黒屋',
    '徳島県三好郡東みよし町加茂1863-2',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36001167/'
  ),
  dining(
    'higashimiyoshi-dining-05',
    '茶蔵',
    '徳島県三好郡東みよし町中庄2556',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36003236/'
  ),
  dining(
    'higashimiyoshi-dining-06',
    '宝寿し',
    '徳島県三好郡東みよし町加茂1836-3',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36001536/'
  ),
  dining(
    'higashimiyoshi-dining-07',
    '田岡うどん',
    '徳島県三好郡東みよし町加茂1700',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36002909/'
  ),
  dining(
    'higashimiyoshi-dining-08',
    'やきとり一番',
    '徳島県三好郡東みよし町西庄字川原田44-1',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36006274/'
  ),
  dining(
    'higashimiyoshi-dining-09',
    'あしろや',
    '徳島県三好郡東みよし町足代1542-1',
    null,
    'https://tabelog.com/tokushima/A3604/A360401/36005331/'
  ),
  dining(
    'higashimiyoshi-dining-10',
    'みかも喫茶',
    '徳島県三好郡東みよし町加茂3214-1',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36007294/'
  ),
  dining(
    'higashimiyoshi-dining-11',
    '骨付き鶏　みかもの大ちゃん',
    '徳島県三好郡東みよし町加茂1670-1',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36003307/'
  ),
  dining(
    'higashimiyoshi-dining-12',
    '三月田',
    '徳島県三好郡東みよし町加茂1861-1',
    null,
    'https://tabelog.com/tokushima/A3604/A360402/36006273/'
  )
];

export const HIGASHIMIYOSHI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  HIGASHIMIYOSHI_TRAVEL_DINING.map((row) => row.name_ja)
);

export const HIGASHIMIYOSHI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const HIGASHIMIYOSHI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const HIGASHIMIYOSHI_TRAVEL_ALL: readonly TravelRow[] = [
  ...HIGASHIMIYOSHI_TRAVEL_DINING,
  ...HIGASHIMIYOSHI_TRAVEL_STAY,
  ...HIGASHIMIYOSHI_TRAVEL_SHOPPING,
  ...HIGASHIMIYOSHI_TRAVEL_COMMERCE
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

export function isHigashimiyoshiOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return HIGASHIMIYOSHI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isHigashimiyoshiExperiencePackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isHigashimiyoshiStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function higashimiyoshiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return HIGASHIMIYOSHI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankHigashimiyoshiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isHigashimiyoshiOnsenPackRow(row) &&
      !isHigashimiyoshiStayPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of HIGASHIMIYOSHI_SIGHT_PINS) {
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

export function higashimiyoshiSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '東みよし町 飲食案内' : 'Higashimiyoshi dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '東みよし町 宿泊案内' : 'Higashimiyoshi lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function higashimiyoshiTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isHigashimiyoshiOnsenPackRow(row)) return 'onsen';
  if (isHigashimiyoshiStayPackRow(row)) return 'stay';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function higashimiyoshiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isHigashimiyoshiOnsenPackRow(row) &&
      !isHigashimiyoshiStayPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isHigashimiyoshiOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isHigashimiyoshiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveHigashimiyoshiFilter(c: string | undefined, q: string): FilterId {
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

export const HIGASHIMIYOSHI_HALL = HIGASHIMIYOSHI.hall;
