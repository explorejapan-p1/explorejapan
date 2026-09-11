/**
 * Miki Town travel layer. No frozen pack.
 * Dining from 食べログ 三木町 (C37341) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen: honest 0 (AZ unit bath only).
 * Experience: Commons トレスタ白山アイスアリーナ. Shopping / commerce: honest 0.
 * Do not invent. Do not copy Tokushima / other-Kagawa TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MIKI, MIKI_SIGHT_PHOTOS} from './miki';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const MIKI_TRAVEL_ACCESSED = '2026-09-09' as const;

export const MIKI_TRAVEL_SOURCES = {
  home: 'https://www.town.miki.lg.jp/',
  hall: 'https://www.town.miki.lg.jp/',
  kankou: 'https://www.town.miki.lg.jp/',
  jodoji: 'https://ja.wikipedia.org/wiki/%E6%B5%84%E5%9C%9F%E5%AF%BA_(%E9%A6%99%E5%B7%9D%E7%9C%8C%E4%B8%89%E6%9C%A8%E7%94%BA)',
  tabelogCity: 'https://tabelog.com/kagawa/C37341/rstLst/',
  az: 'https://travel.rakuten.co.jp/HOTEL/197767/197767.html'
} as const;

export const MIKI_ONSEN_PACK_NAMES = ["屋島灘温泉 ＴＲＥＳＴＡ白山 露天風呂"] as const;
export const MIKI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MIKI_ONSEN_PACK_NAMES);
export const MIKI_EXPERIENCE_PACK_NAMES = ['トレスタ白山アイスアリーナ'] as const;
export const MIKI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MIKI_EXPERIENCE_PACK_NAMES);
export const MIKI_STAY_PACK_NAMES = [] as const;
export const MIKI_STAY_PACK_SET: ReadonlySet<string> = new Set(MIKI_STAY_PACK_NAMES);
export const MIKI_SHOPPING_PACK_NAMES = [] as const;
export const MIKI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MIKI_SHOPPING_PACK_NAMES);

export const MIKI_SIGHT_PINS = [
  '浄土寺',
  '虹の滝（男滝）',
  '虹の滝（雌滝）',
  '公渕森林公園',
  '白山神社',
  '男井間池',
  '池戸八幡神社',
  '白山'
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
    accessed: MIKI_TRAVEL_ACCESSED
  };
}

export const MIKI_TRAVEL_STAY: readonly TravelRow[] = [
  stay("miki-stay-01", "屋島灘温泉 ＴＲＥＳＴＡ白山", "香川県木田郡三木町下高岡972-30", null, "https://travel.rakuten.co.jp/HOTEL/70305/70305.html"),
  stay("miki-stay-02", "ＨＯＴＥＬ　ＡＺ　香川三木店", "香川県木田郡三木町大字鹿伏289", "087-816-3111", "https://travel.rakuten.co.jp/HOTEL/197767/197767.html"),
  stay("miki-stay-03", "Ｍｉｋｉ里山グランピング", "香川県木田郡三木町朝倉字上乃生2102-2", null, "https://travel.rakuten.co.jp/HOTEL/191742/191742.html"),
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
    accessed: MIKI_TRAVEL_ACCESSED
  };
}

export const MIKI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('miki-dining-01', '三木酒場 にのころ', '香川県木田郡三木町井上64-1', '087-814-5573', 'https://tabelog.com/kagawa/A3701/A370102/37010311/'),
  dining('miki-dining-02', '絆', '香川県木田郡三木町池戸3317-1', null, 'https://tabelog.com/kagawa/A3701/A370102/37013715/'),
  dining('miki-dining-03', '味泉', '香川県木田郡三木町池戸3317-1', '087-898-6198', 'https://tabelog.com/kagawa/A3701/A370102/37001524/'),
  dining('miki-dining-04', '三嶋屋', '香川県木田郡三木町下高岡744-1', '087-898-7990', 'https://tabelog.com/kagawa/A3701/A370102/37003487/'),
  dining('miki-dining-05', 'レストランオリーブ', '香川県木田郡三木町池戸1750-1', '087-898-2000', 'https://tabelog.com/kagawa/A3701/A370102/37004392/'),
  dining('miki-dining-06', 'さぬき親鳥中華そば かしわの木', '香川県木田郡三木町井戸2316-4', '080-9831-6213', 'https://tabelog.com/kagawa/A3701/A370102/37011038/'),
  dining('miki-dining-07', 'すし富', '香川県木田郡三木町氷上301-1', '087-898-2040', 'https://tabelog.com/kagawa/A3701/A370102/37002196/'),
  dining('miki-dining-08', 'カキ焼き白山', '香川県木田郡三木町大字下高岡972-30 トレスタ白山 レジャープール敷地内', null, 'https://tabelog.com/kagawa/A3701/A370102/37010788/'),
  dining('miki-dining-09', 'ラーメン庵 福一本陣', '香川県木田郡三木町氷上14-1', '087-898-2917', 'https://tabelog.com/kagawa/A3701/A370102/37006076/'),
  dining('miki-dining-10', '三木マルシェ', '香川県木田郡三木町大字鹿伏360 三木町文化交流プラザ西駐車場', '087-898-2366', 'https://tabelog.com/kagawa/A3701/A370102/37011701/'),
  dining('miki-dining-11', 'R', '香川県木田郡三木町池戸423', '080-6388-0004', 'https://tabelog.com/kagawa/A3701/A370101/37013184/'),
  dining('miki-dining-12', '焼肉五苑 三木店', '香川県木田郡三木町鹿伏210-1', '087-840-2955', 'https://tabelog.com/kagawa/A3701/A370102/37004584/'),
  dining('miki-dining-13', '丸幸', '香川県木田郡三木町大字平木76-9', '087-898-0249', 'https://tabelog.com/kagawa/A3701/A370102/37007553/'),
  dining('miki-dining-14', 'らん', '香川県木田郡三木町池戸3283-3', '087-891-2770', 'https://tabelog.com/kagawa/A3701/A370102/37003826/'),
  dining('miki-dining-15', '元祖かっしゃ焼 三木店', '香川県木田郡三木町大字下高岡558-1', '087-891-9188', 'https://tabelog.com/kagawa/A3701/A370102/37005441/'),
  dining('miki-dining-16', 'みき', '香川県木田郡三木町池戸2845-3', '087-898-4190', 'https://tabelog.com/kagawa/A3701/A370102/37001523/'),
];


export const MIKI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  MIKI_TRAVEL_DINING.map((row) => row.name_ja)
);

export const MIKI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MIKI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const MIKI_TRAVEL_ALL: readonly TravelRow[] = [
  ...MIKI_TRAVEL_DINING,
  ...MIKI_TRAVEL_STAY,
  ...MIKI_TRAVEL_SHOPPING,
  ...MIKI_TRAVEL_COMMERCE
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

export function isMikiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIKI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isMikiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIKI_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isMikiStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isMikiShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isMikiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MIKI_DINING_NAME_SET.has(row.name_ja);
}

export function mikiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return MIKI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankMikiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isMikiOnsenPackRow(row) &&
      !isMikiExperiencePackRow(row) &&
      !isMikiStayPackRow(row) &&
      !isMikiDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of MIKI_SIGHT_PINS) {
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

export function mikiSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '三木町 飲食案内' : 'Miki dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '三木町 宿泊案内' : 'Miki lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '三木町 買物案内' : 'Miki shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function mikiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMikiOnsenPackRow(row)) return 'onsen';
  if (isMikiExperiencePackRow(row)) return 'experience';
  if (isMikiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMikiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function mikiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isMikiOnsenPackRow(row) &&
      !isMikiExperiencePackRow(row) &&
      !isMikiStayPackRow(row) &&
      !isMikiDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMikiOnsenPackRow(row);
  if (filter === 'experience') return isMikiExperiencePackRow(row);
  if (filter === 'stay') return isMikiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveMikiFilter(c: string | undefined, q: string): FilterId {
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

export const MIKI_HALL = MIKI.hall;
