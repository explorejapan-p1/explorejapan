/**
 * Yoshinogawa travel layer. Pack has no dining/stay categories.
 * Onsen names already in the frozen tourism pack stay on 温泉 via exact name_ja.
 * Extra stay names are copied from the city 宿泊施設一覧 page only.
 * Dining is copied from 食べログ public shop pages. Do not invent pack dining.
 * Do not copy 美馬 or つるぎ TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {YOSHINOGAWA, YOSHINOGAWA_SIGHT_PHOTOS} from './yoshinogawa';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const YOSHINOGAWA_TRAVEL_ACCESSED = '2026-08-28' as const;

export const YOSHINOGAWA_TRAVEL_SOURCES = {
  stayList: 'https://www.city.yoshinogawa.lg.jp/docs/2010101500109/',
  spots: 'https://www.city.yoshinogawa.lg.jp/docs/2010101500123/',
  kanko: 'https://www.city.yoshinogawa.lg.jp/kankoguide/',
  fuigoRoom: 'https://fuigo-onsen.com/room.html',
  misato: 'https://misato-spica.com/',
  access: 'https://access-kamojima.com/',
  tabelogCity: 'https://tabelog.com/tokushima/C36205/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. */
export const YOSHINOGAWA_ONSEN_PACK_NAMES = [
  '鴨島温泉鴨の湯',
  'ふいご温泉',
  '美郷の湯',
  '保養センター上桜温泉',
  'ヘルスランド美郷'
] as const;

export const YOSHINOGAWA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  YOSHINOGAWA_ONSEN_PACK_NAMES
);

export const YOSHINOGAWA_SIGHT_PINS = [
  '川島城',
  '藤井寺',
  '岩の鼻展望台',
  '江川湧水源'
] as const;

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
    source_url: YOSHINOGAWA_TRAVEL_SOURCES.stayList,
    accessed: YOSHINOGAWA_TRAVEL_ACCESSED
  };
}

/** Official 宿泊施設一覧 names that are not the onsen-pack rows. Exact name_ja. */
export const YOSHINOGAWA_TRAVEL_STAY: readonly TravelRow[] = [
  extraStay(
    'yoshinogawa-stay-01',
    'セントラルホテル鴨島',
    '徳島県吉野川市鴨島町鴨島471-2',
    '0883-24-8989'
  ),
  extraStay(
    'yoshinogawa-stay-02',
    'ビジネスホテル アクセス鴨島',
    '徳島県吉野川市鴨島町鴨島224-1',
    '0883-24-5050'
  ),
  extraStay(
    'yoshinogawa-stay-03',
    'ビジネスホテル ロードサイド',
    '徳島県吉野川市鴨島町内原160-3',
    '0883-22-1088'
  ),
  extraStay(
    'yoshinogawa-stay-04',
    'さくら旅館',
    '徳島県吉野川市鴨島町鴨島502-11',
    '0883-24-2404'
  ),
  extraStay(
    'yoshinogawa-stay-05',
    '旅館吉野',
    '徳島県吉野川市鴨島町飯尾1444-1',
    '0883-24-1263'
  ),
  extraStay(
    'yoshinogawa-stay-06',
    '三笠屋旅館',
    '徳島県吉野川市鴨島町鴨島461-10',
    '0883-24-2511'
  ),
  extraStay(
    'yoshinogawa-stay-07',
    'Guest House チャンネルカン',
    '徳島県吉野川市鴨島町知恵島740-1',
    '0883-24-7059'
  ),
  extraStay(
    'yoshinogawa-stay-08',
    'HOSTEL OE',
    '徳島県吉野川市鴨島町鴨島485-4',
    '0883-26-0117'
  ),
  extraStay(
    'yoshinogawa-stay-09',
    'お宿イレブン',
    '徳島県吉野川市鴨島町飯尾1484番地1',
    '080-2989-8070'
  ),
  extraStay(
    'yoshinogawa-stay-10',
    'パインハウス',
    '徳島県吉野川市鴨島町知恵島507-1',
    '090-5910-1952'
  ),
  extraStay(
    'yoshinogawa-stay-11',
    '愛楽友ふぁーむ ちえの森',
    '徳島県吉野川市鴨島町山路2007-1',
    '090-1575-8909'
  ),
  extraStay(
    'yoshinogawa-stay-12',
    '米谷旅館',
    '徳島県吉野川市川島町川島420-3',
    '0883-25-2226'
  ),
  extraStay(
    'yoshinogawa-stay-13',
    'あわらくや',
    '徳島県吉野川市川島町川島178',
    '0883-25-3699'
  ),
  extraStay(
    'yoshinogawa-stay-14',
    '板東商店guest room～藍染めと宿',
    '徳島県吉野川市山川町川東73-3',
    '0883-33-9843'
  ),
  extraStay(
    'yoshinogawa-stay-15',
    'たねのや',
    '徳島県吉野川市美郷字川俣47',
    '0883-43-2900'
  ),
  extraStay(
    'yoshinogawa-stay-16',
    'どこも山',
    '徳島県吉野川市美郷字丸山14-2',
    '0883-26-7630'
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
    accessed: YOSHINOGAWA_TRAVEL_ACCESSED
  };
}

export const YOSHINOGAWA_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'yoshinogawa-dining-01',
    '中華そば 王将',
    '徳島県吉野川市鴨島町喜来323-183',
    '0883-24-7762',
    'https://tabelog.com/tokushima/A3603/A360301/36000755/'
  ),
  dining(
    'yoshinogawa-dining-02',
    'お食事処 青柳',
    '徳島県吉野川市鴨島町鴨島851',
    '0883-24-1709',
    'https://tabelog.com/tokushima/A3603/A360301/36004103/'
  ),
  dining(
    'yoshinogawa-dining-03',
    '花杏豆 鴨島店',
    '徳島県吉野川市鴨島町鴨島487-5',
    '0883-22-0262',
    'https://tabelog.com/tokushima/A3603/A360301/36001823/'
  ),
  dining(
    'yoshinogawa-dining-04',
    'セルフうどん やま 鴨島店',
    '徳島県吉野川市鴨島町鴨島151-1',
    '0883-36-9595',
    'https://tabelog.com/tokushima/A3603/A360301/36005006/'
  ),
  dining(
    'yoshinogawa-dining-05',
    '鴨島飯店',
    '徳島県吉野川市鴨島町鴨島538',
    '0883-24-6710',
    'https://tabelog.com/tokushima/A3603/A360301/36001581/'
  ),
  dining(
    'yoshinogawa-dining-06',
    '海鮮活魚 潤',
    '徳島県吉野川市鴨島町上下島87-1',
    '0883-24-6863',
    'https://tabelog.com/tokushima/A3603/A360301/36006583/'
  ),
  dining(
    'yoshinogawa-dining-07',
    '焼肉 青',
    '徳島県吉野川市鴨島町鴨島字神島485-4',
    '0883-24-3929',
    'https://tabelog.com/tokushima/A3603/A360301/36008974/'
  )
];

export const YOSHINOGAWA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const YOSHINOGAWA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const YOSHINOGAWA_TRAVEL_ALL: readonly TravelRow[] = [
  ...YOSHINOGAWA_TRAVEL_DINING,
  ...YOSHINOGAWA_TRAVEL_STAY,
  ...YOSHINOGAWA_TRAVEL_SHOPPING,
  ...YOSHINOGAWA_TRAVEL_COMMERCE
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

export function isYoshinogawaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return YOSHINOGAWA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isYoshinogawaExperiencePackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isYoshinogawaStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function yoshinogawaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return YOSHINOGAWA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankYoshinogawaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isYoshinogawaOnsenPackRow(row) &&
      !isYoshinogawaStayPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of YOSHINOGAWA_SIGHT_PINS) {
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

export function yoshinogawaSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '吉野川市 飲食案内' : 'Yoshinogawa dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '吉野川市 宿泊案内' : 'Yoshinogawa lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function yoshinogawaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isYoshinogawaOnsenPackRow(row)) return 'onsen';
  if (isYoshinogawaStayPackRow(row)) return 'stay';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function yoshinogawaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isYoshinogawaOnsenPackRow(row) &&
      !isYoshinogawaStayPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isYoshinogawaOnsenPackRow(row);
  if (filter === 'experience') return false;
  if (filter === 'stay') return isYoshinogawaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveYoshinogawaFilter(c: string | undefined, q: string): FilterId {
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

export const YOSHINOGAWA_HALL = YOSHINOGAWA.hall;
