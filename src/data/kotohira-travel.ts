/**
 * Kotohira Town travel layer. No frozen pack.
 * Dining from 食べログ 琴平町 (C37403) public shop pages. FOOD dish photos required.
 * Stay from 公式 room images (出典). Onsen pack uses distinct 大浴場 names + bath stills (no shared stay photo keys).
 * Shopping / commerce: honest 0. Onsen + experience densified when attributable.
 * Do not invent. Do not copy Tokushima / Takamatsu TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KOTOHIRA, KOTOHIRA_SIGHT_PHOTOS} from './kotohira';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KOTOHIRA_TRAVEL_ACCESSED = '2026-09-07' as const;

export const KOTOHIRA_TRAVEL_SOURCES = {
  home: 'https://www.town.kotohira.kagawa.jp/',
  hall: 'https://www.town.kotohira.kagawa.jp/soshiki/2.html',
  kanko: 'https://www.town.kotohira.kagawa.jp/soshiki/8/',
  tabelogCity: 'https://tabelog.com/kagawa/C37403/rstLst/',
  kotosankaku: 'https://www.kotosankaku.jp/',
  shikishima: 'https://dormy-hotels.com/resort/hotels/shikishimakan/'
} as const;

export const KOTOHIRA_ONSEN_PACK_NAMES = ['ことひら温泉 琴参閣 大浴場', 'ことひら温泉 御宿 敷島館 大浴場'] as const;
export const KOTOHIRA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KOTOHIRA_ONSEN_PACK_NAMES);
export const KOTOHIRA_EXPERIENCE_PACK_NAMES = ['旧金毘羅大芝居'] as const;
export const KOTOHIRA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KOTOHIRA_EXPERIENCE_PACK_NAMES);
export const KOTOHIRA_STAY_PACK_NAMES = [] as const;
export const KOTOHIRA_STAY_PACK_SET: ReadonlySet<string> = new Set(KOTOHIRA_STAY_PACK_NAMES);
export const KOTOHIRA_SHOPPING_PACK_NAMES = [] as const;
export const KOTOHIRA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KOTOHIRA_SHOPPING_PACK_NAMES);

export const KOTOHIRA_SIGHT_PINS = [
  '金刀比羅宮',
  '旭社',
  '金刀比羅宮表参道',
  '鞘橋',
  '高灯篭'
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
    accessed: KOTOHIRA_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room/bath 出典 first. */
export const KOTOHIRA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('kotohira-stay-01', 'ことひら温泉 琴参閣', '香川県仲多度郡琴平町685-11', '0877-75-1000', 'https://www.kotosankaku.jp/rooms/'),
  stay('kotohira-stay-02', 'ことひら温泉 御宿 敷島館', '香川県仲多度郡琴平町川西713-1', '0877-58-8001', 'https://dormy-hotels.com/resort/hotels/shikishimakan/rooms/')
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
    accessed: KOTOHIRA_TRAVEL_ACCESSED
  };
}

export const KOTOHIRA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'kotohira-dining-01',
    "大衆焼肉骨付鳥 金牛 琴平店",
    "香川県仲多度郡琴平町655-3",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37013981/"
  ),
  dining(
    'kotohira-dining-02',
    "美味処 寿&JAPANESE WHISKEY BAR 729",
    "香川県仲多度郡琴平町697",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37014191/"
  ),
  dining(
    'kotohira-dining-03',
    "ひだまり食堂",
    "香川県仲多度郡琴平町753",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37014974/"
  ),
  dining(
    'kotohira-dining-04',
    "cafe 森と山",
    "香川県仲多度郡琴平町959-4",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37013126/"
  ),
  dining(
    'kotohira-dining-05',
    "焼鳥 骨付鳥 田中屋",
    "香川県仲多度郡琴平町720-13",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37009828/"
  ),
  dining(
    'kotohira-dining-06',
    "焼肉 田中",
    "香川県仲多度郡琴平町五條641-1",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37012280/"
  ),
  dining(
    'kotohira-dining-07',
    "さぬき名物 骨付鳥 田中屋",
    "香川県仲多度郡琴平町685-11",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37005602/"
  ),
  dining(
    'kotohira-dining-08',
    "春日鮨",
    "香川県仲多度郡琴平町榎井457-3",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37002236/"
  ),
  dining(
    'kotohira-dining-09',
    "喫茶 ヤオ",
    "香川県仲多度郡琴平町940",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37008131/"
  ),
  dining(
    'kotohira-dining-10',
    "紅梅亭",
    "香川県仲多度郡琴平町556-1",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37000906/"
  ),
  dining(
    'kotohira-dining-11',
    "手打ちうどん むさし",
    "香川県仲多度郡琴平町五條637-2 小出ビル　１Ｆ",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37000722/"
  ),
  dining(
    'kotohira-dining-12',
    "金陵の郷",
    "香川県仲多度郡琴平町623",
    null,
    "https://tabelog.com/kagawa/A3703/A370302/37007797/"
  ),
];

export const KOTOHIRA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  KOTOHIRA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const KOTOHIRA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KOTOHIRA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const KOTOHIRA_TRAVEL_ALL: readonly TravelRow[] = [
  ...KOTOHIRA_TRAVEL_DINING,
  ...KOTOHIRA_TRAVEL_STAY,
  ...KOTOHIRA_TRAVEL_SHOPPING,
  ...KOTOHIRA_TRAVEL_COMMERCE
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

export function isKotohiraOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KOTOHIRA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isKotohiraExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KOTOHIRA_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isKotohiraStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isKotohiraShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isKotohiraDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KOTOHIRA_DINING_NAME_SET.has(row.name_ja);
}

export function kotohiraSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return KOTOHIRA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankKotohiraSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isKotohiraOnsenPackRow(row) &&
      !isKotohiraExperiencePackRow(row) &&
      !isKotohiraStayPackRow(row) &&
      !isKotohiraDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of KOTOHIRA_SIGHT_PINS) {
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

export function kotohiraSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '琴平町 飲食案内' : 'Kotohira Town dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '琴平町 宿泊案内' : 'Kotohira Town lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function kotohiraTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKotohiraOnsenPackRow(row)) return 'onsen';
  if (isKotohiraExperiencePackRow(row)) return 'experience';
  if (isKotohiraStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isKotohiraDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function kotohiraPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isKotohiraOnsenPackRow(row) &&
      !isKotohiraExperiencePackRow(row) &&
      !isKotohiraStayPackRow(row) &&
      !isKotohiraDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKotohiraOnsenPackRow(row);
  if (filter === 'experience') return isKotohiraExperiencePackRow(row);
  if (filter === 'stay') return isKotohiraStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveKotohiraFilter(c: string | undefined, q: string): FilterId {
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

export const KOTOHIRA_HALL = KOTOHIRA.hall;
