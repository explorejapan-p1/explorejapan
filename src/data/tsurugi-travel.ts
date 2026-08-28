/**
 * Tsurugi travel layer. Pack has no dining/stay categories.
 * Stay names already in the frozen tourism pack stay on 宿泊 via exact name_ja.
 * Extra names are copied from the town 町内宿泊施設 page only.
 * Do not copy 美馬 TRAVEL_* rows. 剣山頂上ヒュッテ is not listed here.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TSURUGI, TSURUGI_SIGHT_PHOTOS} from './tsurugi';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const TSURUGI_TRAVEL_ACCESSED = '2026-08-28' as const;

export const TSURUGI_TRAVEL_SOURCES = {
  stayList: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3491.html',
  stayStay: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3458.html',
  play: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3457.html',
  nature: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3456.html',
  onsen: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3467.html',
  yuyukanRest: 'https://yuyukan.jp/restaurant/',
  shokokaiDining: 'https://r.goope.jp/tsci3600/shokokai/member/1/',
  tabelogTown: 'https://tabelog.com/tokushima/C36468/rstLst/'
} as const;

/** Exact tourism-pack names shown on 宿泊, not 観光. */
export const TSURUGI_STAY_PACK_NAMES = [
  'ラ・フォーレつるぎ山',
  'つるぎの宿 岩戸',
  'ゲストハウス上田屋（うえだや）',
  'ゲストハウス上田屋（半田館）',
  '折目邸～遊懐～（おりめてい～ゆかい～）',
  'ビジネスホテルふじ',
  '雲上の民宿　家曽敷（やそしき）',
  '古見茶屋（こみちゃや）',
  '発酵一宇',
  'そらの宿　磯貝',
  'しらたきの宿'
] as const;

export const TSURUGI_STAY_PACK_SET: ReadonlySet<string> = new Set(TSURUGI_STAY_PACK_NAMES);

export const TSURUGI_ONSEN_PACK_NAME = '剣山木綿麻温泉（つるぎさんゆうまおんせん）' as const;

export const TSURUGI_SIGHT_PINS = ['二層うだつの町並み', '旧永井家庄屋屋敷', '織本屋'] as const;

function extraStay(
  id: string,
  name_ja: string,
  address: string,
  phone: string | null
): TravelRow {
  return {
    id,
    name_ja,
    category: 'stay',
    address,
    phone,
    source_url: TSURUGI_TRAVEL_SOURCES.stayList,
    accessed: TSURUGI_TRAVEL_ACCESSED
  };
}

/** Official 町内宿泊施設 names not already in the frozen pack. Exact name_ja. */
export const TSURUGI_TRAVEL_STAY: readonly TravelRow[] = [
  extraStay(
    'tsurugi-stay-01',
    'たかがわ自然農園',
    '徳島県美馬郡つるぎ町半田字小野421-1',
    '090-9877-9458'
  ),
  extraStay(
    'tsurugi-stay-02',
    '家賀の郷 清笹（けかのさと きよささ）',
    '徳島県美馬郡つるぎ町貞光字家賀道上293-3',
    '0883-68-8808'
  ),
  extraStay(
    'tsurugi-stay-03',
    '風空縁紡 ～かくえんぼ～',
    '徳島県美馬郡つるぎ町一宇字大佐古663-6',
    '090-5924-7063'
  ),
  extraStay(
    'tsurugi-stay-04',
    '簡易宿泊施設 貞光・ゆうまの宿',
    '徳島県美馬郡つるぎ町貞光字岡82-3',
    '090-3461-5069'
  ),
  extraStay(
    'tsurugi-stay-05',
    '家賀乃里 古城（けかのさと こじょう）',
    '徳島県美馬郡つるぎ町貞光字家賀道上474',
    '090-5144-4896'
  ),
  extraStay(
    'tsurugi-stay-06',
    '古民家 剣の宿ゆう',
    '徳島県美馬郡つるぎ町一宇字剪宇220',
    '080-4033-3956'
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
    accessed: TSURUGI_TRAVEL_ACCESSED
  };
}

export const TSURUGI_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'tsurugi-dining-01',
    '道の駅 貞光ゆうゆう館',
    '徳島県美馬郡つるぎ町貞光字大須賀11-1',
    '0883-62-5000',
    'https://yuyukan.jp/restaurant/'
  ),
  dining(
    'tsurugi-dining-02',
    'ふるた食堂',
    '徳島県美馬郡つるぎ町半田日開野273-5',
    '0883-65-0240',
    'https://tabelog.com/tokushima/A3603/A360302/36007977/'
  ),
  dining(
    'tsurugi-dining-03',
    '純手打ちうどん のぶ',
    '徳島県美馬郡つるぎ町貞光字大須賀42-8',
    null,
    'https://tabelog.com/tokushima/A3603/A360302/36003271/'
  ),
  dining(
    'tsurugi-dining-04',
    'インドラ',
    '徳島県美馬郡つるぎ町貞光太田西286-2',
    '0883-62-3268',
    'https://tabelog.com/tokushima/A3603/A360302/36002665/'
  ),
  dining(
    'tsurugi-dining-05',
    'めん処 かねか',
    '徳島県美馬郡つるぎ町貞光太田東161',
    '0883-62-4844',
    'https://tabelog.com/tokushima/A3603/A360302/36000680/'
  ),
  dining(
    'tsurugi-dining-06',
    'お好み焼　なんでやねん',
    '徳島県美馬郡つるぎ町半田字小野294-4',
    null,
    'https://r.goope.jp/nandeyanen/'
  ),
  // 要確認: 商工会会員ページに店名のみ。住所・電話は掲載なし。
  dining(
    'tsurugi-dining-07',
    'おまかせキッチン',
    null,
    null,
    'https://r.goope.jp/omakase-kitchen/'
  )
];
export const TSURUGI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TSURUGI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const TSURUGI_TRAVEL_ALL: readonly TravelRow[] = [
  ...TSURUGI_TRAVEL_DINING,
  ...TSURUGI_TRAVEL_STAY,
  ...TSURUGI_TRAVEL_SHOPPING,
  ...TSURUGI_TRAVEL_COMMERCE
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

export function isTsurugiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return row.name_ja === TSURUGI_ONSEN_PACK_NAME;
}

export function isTsurugiExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTsurugiStayPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TSURUGI_STAY_PACK_SET.has(row.name_ja);
}

export function tsurugiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return TSURUGI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankTsurugiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isTsurugiOnsenPackRow(row) &&
      !isTsurugiStayPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of TSURUGI_SIGHT_PINS) {
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
    if (row.category === 'tourism') restTourism.push(row);
    else restCultural.push(row);
  }
  return [...pinned, ...restTourism, ...restCultural];
}

export function tsurugiSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  if (row.address && row.address.trim() !== '') return row.address;
  if (row.category === 'dining') {
    return locale === 'ja' ? 'つるぎ町 飲食案内' : 'Tsurugi Town dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? 'つるぎ町 宿泊案内' : 'Tsurugi Town lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function tsurugiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTsurugiOnsenPackRow(row)) return 'onsen';
  if (isTsurugiStayPackRow(row)) return 'stay';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function tsurugiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return isSightsCategory(category) && !isTsurugiOnsenPackRow(row) && !isTsurugiStayPackRow(row);
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTsurugiOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isTsurugiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveTsurugiFilter(c: string | undefined, q: string): FilterId {
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

export const TSURUGI_HALL = TSURUGI.hall;
