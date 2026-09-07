/**
 * Aizumi travel layer. Pack tourism has no inns/onsen with room or bath photos.
 * Onsen / stay: omit without room or bath photo (honest 0).
 * Dining from 食べログ 藍住町 (C36403) public shop pages with FOOD dish heroes (ranked; menu/supermarket/blur dropped).
 * Shopping / commerce / stay / onsen / experience: honest 0 (no room/bath/view or place-named remaps this pass).
 * HARD BAR 2026-09-07: scenic cover; dish close-ups only; strongest photos first.
 * Do not copy 板野 / 上板 / 北島 / 松茂 / 石井 / 那賀 / 牟岐 / 美波 / 海陽 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {AIZUMI, AIZUMI_SIGHT_PHOTOS} from './aizumi';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const AIZUMI_TRAVEL_ACCESSED = '2026-09-07' as const;

export const AIZUMI_TRAVEL_SOURCES = {
  home: 'https://www.town.aizumi.lg.jp/',
  hall: 'https://www.town.aizumi.lg.jp/',
  kanko: 'https://www.town.aizumi.lg.jp/docs/2014012100052/',
  tabelogCity: 'https://tabelog.com/tokushima/C36403/rstLst/'
} as const;

export const AIZUMI_ONSEN_PACK_NAMES = [] as const;
export const AIZUMI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(AIZUMI_ONSEN_PACK_NAMES);
export const AIZUMI_STAY_PACK_NAMES = [] as const;
export const AIZUMI_STAY_PACK_SET: ReadonlySet<string> = new Set(AIZUMI_STAY_PACK_NAMES);
export const AIZUMI_SHOPPING_PACK_NAMES = [] as const;
export const AIZUMI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(AIZUMI_SHOPPING_PACK_NAMES);

export const AIZUMI_SIGHT_PINS = [
  '正法寺川公園',
  'バラ園',
  '東中富桜づつみ公園',
  '東中富親水公園',
  '史跡公園',
  '歴史館「藍の館」'
] as const;

export const AIZUMI_TRAVEL_STAY: readonly TravelRow[] = [];

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
    accessed: AIZUMI_TRAVEL_ACCESSED
  };
}

export const AIZUMI_TRAVEL_DINING: readonly TravelRow[] = [

  dining(
    'aizumi-dining-01',
    "牛骨らぁめん 牛若",
    "徳島県板野郡藍住町東中富字朏傍示54-2",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36005889/"
  ),
  dining(
    'aizumi-dining-02',
    "やきとりの扇屋 徳島藍住店",
    "徳島県板野郡藍住町奥野字和田122-1",
    "088-693-4053",
    "https://tabelog.com/tokushima/A3603/A360303/36000414/"
  ),
  dining(
    'aizumi-dining-03',
    "徳島らぁ麺 堂の浦 藍住店",
    "徳島県板野郡藍住町奥野猪熊71-1",
    "090-5713-4085",
    "https://tabelog.com/tokushima/A3603/A360303/36008594/"
  ),
  dining(
    'aizumi-dining-04',
    "松のや 藍住店",
    "徳島県板野郡藍住町東中富朏傍示27-2",
    "090-9276-9054",
    "https://tabelog.com/tokushima/A3603/A360303/36009180/"
  ),
  dining(
    'aizumi-dining-05',
    "阿波焼肉 牛藍",
    "徳島県板野郡藍住町東中富直道傍示125-69",
    "088-660-4516",
    "https://tabelog.com/tokushima/A3603/A360303/36008638/"
  ),
  dining(
    'aizumi-dining-06',
    "赤から 徳島藍住店",
    "徳島県板野郡藍住町徳命字元村東109",
    "088-693-0202",
    "https://tabelog.com/tokushima/A3603/A360303/36005380/"
  ),
  dining(
    'aizumi-dining-07',
    "みのり",
    "徳島県板野郡藍住町勝瑞字東勝地201-2",
    "088-641-3510",
    "https://tabelog.com/tokushima/A3603/A360303/36000041/"
  ),
  dining(
    'aizumi-dining-08',
    "竹とんぼ",
    "徳島県板野郡藍住町勝瑞成長165-6",
    "088-641-1508",
    "https://tabelog.com/tokushima/A3603/A360303/36002839/"
  ),
  dining(
    'aizumi-dining-09',
    "炭火焼 雅",
    "徳島県板野郡藍住町東中富字直道傍示67-11",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36008892/"
  ),
  dining(
    'aizumi-dining-10',
    "TABEGORO BENTO",
    "徳島県板野郡藍住町笠木字中野106",
    "088-676-3364",
    "https://tabelog.com/tokushima/A3603/A360303/36008303/"
  ),
  dining(
    'aizumi-dining-11',
    "リュスティック",
    "徳島県板野郡藍住町矢上字原217-15",
    "088-679-1505",
    "https://tabelog.com/tokushima/A3603/A360303/36005704/"
  ),
  dining(
    'aizumi-dining-12',
    "萬坊食楽喜酒",
    "徳島県板野郡藍住町矢上西160-92",
    "088-693-0777",
    "https://tabelog.com/tokushima/A3603/A360303/36003626/"
  ),
  dining(
    'aizumi-dining-13',
    "ろくキッチン",
    "徳島県板野郡藍住町乙瀬出来地32-16",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36008990/"
  ),
  dining(
    'aizumi-dining-14',
    "SIScone",
    "徳島県板野郡藍住町勝瑞東勝地61-10",
    null,
    "https://tabelog.com/tokushima/A3603/A360303/36008972/"
  ),
  dining(
    'aizumi-dining-15',
    "銀座コージーコーナー ゆめタウン徳島店",
    "徳島県板野郡藍住町奥野東中須88-1 ゆめタウン徳島 1F",
    "088-693-0123",
    "https://tabelog.com/tokushima/A3603/A360303/36008663/"
  ),
  dining(
    'aizumi-dining-16',
    "日本料理 季季",
    "徳島県板野郡藍住町東中富字長江傍示4-6",
    "090-8197-0976",
    "https://tabelog.com/tokushima/A3603/A360303/36007843/"
  ),
];

export const AIZUMI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  AIZUMI_TRAVEL_DINING.map((row) => row.name_ja)
);
export const AIZUMI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const AIZUMI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const AIZUMI_TRAVEL_ALL: readonly TravelRow[] = [
  ...AIZUMI_TRAVEL_DINING,
  ...AIZUMI_TRAVEL_STAY,
  ...AIZUMI_TRAVEL_SHOPPING,
  ...AIZUMI_TRAVEL_COMMERCE
];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);

function isInfraCategory(value: string): boolean {
  return INFRA_SET.has(value);
}
function isSightsCategory(value: string): boolean {
  return SIGHTS_SET.has(value);
}

export function isAizumiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return AIZUMI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isAizumiExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}
export function isAizumiStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}
export function isAizumiShoppingPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return AIZUMI_SHOPPING_PACK_SET.has(row.name_ja);
}
export function aizumiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return AIZUMI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankAizumiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isAizumiOnsenPackRow(row) &&
      !isAizumiStayPackRow(row) &&
      !isAizumiShoppingPackRow(row) &&
      !AIZUMI_DINING_NAME_SET.has(row.name_ja)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of AIZUMI_SIGHT_PINS) {
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

export function aizumiSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '藍住町 飲食案内' : 'Aizumi dining list';
  if (row.category === 'stay') return locale === 'ja' ? '藍住町 宿泊案内' : 'Aizumi lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '藍住町 買物案内' : 'Aizumi shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}

export function aizumiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isAizumiOnsenPackRow(row)) return 'onsen';
  if (isAizumiStayPackRow(row)) return 'stay';
  if (isAizumiShoppingPackRow(row)) return 'shopping';
  if (AIZUMI_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function aizumiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isAizumiOnsenPackRow(row) &&
      !isAizumiStayPackRow(row) &&
      !isAizumiShoppingPackRow(row) &&
      !AIZUMI_DINING_NAME_SET.has(nameJa)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isAizumiOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isAizumiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveAizumiFilter(c: string | undefined, q: string): FilterId {
  if (
    c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' ||
    c === 'experience' || c === 'shopping' || c === 'commerce'
  ) return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (q.trim() !== '') return 'all';
  return 'stay';
}
