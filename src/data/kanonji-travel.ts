/**
 * Kanonji City travel layer. No frozen pack.
 * Dining from 食べログ 観音寺市 (C37205) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct 大浴場 names + bath stills.
 * Shopping / commerce: honest 0. Experience densified when attributable.
 * Do not invent. Do not copy Tokushima / Takamatsu / Kotohira / Marugame TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KANONJI, KANONJI_SIGHT_PHOTOS} from './kanonji';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const KANONJI_TRAVEL_ACCESSED = '2026-09-09' as const;

export const KANONJI_TRAVEL_SOURCES = {
  home: 'https://www.city.kanonji.kagawa.jp/',
  hall: 'https://www.city.kanonji.kagawa.jp/',
  kotohiki: 'https://www.city.kanonji.kagawa.jp/soshiki/21/1467.html',
  zenigata: 'https://www.city.kanonji.kagawa.jp/soshiki/21/333.html',
  tabelogCity: 'https://tabelog.com/kagawa/C37205/rstLst/',
  routeInn: 'https://travel.rakuten.co.jp/HOTEL/197475/197475.html',
  grand: 'https://travel.rakuten.co.jp/HOTEL/5647/5647.html',
  kamenoi: 'https://travel.rakuten.co.jp/HOTEL/44292/44292.html'
} as const;

export const KANONJI_ONSEN_PACK_NAMES = ["グランプレミア瀬戸内 〜四国・香川のリゾートグランピング＆ヴィラ〜 大浴場", "ホテルルートイン観音寺 大浴場", "リブマックスリゾート観音寺 大浴場", "Ｈｏｔｅｌ Ｏ． Ｓｅｔｏｕｃｈｉ 〜ホテルオーセトウチ〜 ｂｙ 琴弾廻廊 大浴場"] as const;
export const KANONJI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KANONJI_ONSEN_PACK_NAMES);
export const KANONJI_EXPERIENCE_PACK_NAMES = ['道の駅ことひき'] as const;
export const KANONJI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KANONJI_EXPERIENCE_PACK_NAMES);
export const KANONJI_STAY_PACK_NAMES = [] as const;
export const KANONJI_STAY_PACK_SET: ReadonlySet<string> = new Set(KANONJI_STAY_PACK_NAMES);
export const KANONJI_SHOPPING_PACK_NAMES = [] as const;
export const KANONJI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KANONJI_SHOPPING_PACK_NAMES);

export const KANONJI_SIGHT_PINS = [
  '銭形砂絵',
  '琴弾公園',
  '有明浜',
  '神恵院',
  '観音寺',
  '高屋神社',
  '豊稔池堰堤'
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
    accessed: KANONJI_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room 出典 first. */
export const KANONJI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('kanonji-stay-001', "グランプレミア瀬戸内 〜四国・香川のリゾートグランピング＆ヴィラ〜", "香川県観音寺市有明町6-10", null, "https://travel.rakuten.co.jp/HOTEL/184058/184058.html"),
  stay('kanonji-stay-002', "スマイルホテル観音寺（旧：ホテルシェトワ観音寺）", "香川県観音寺市坂本町4-6-8", null, "https://travel.rakuten.co.jp/HOTEL/181149/181149.html"),
  stay('kanonji-stay-003', "ハイパーイン観音寺駅前", "香川県観音寺市栄町3-5-5", "0875-25-2818", "https://travel.rakuten.co.jp/HOTEL/187287/187287.html"),
  stay('kanonji-stay-004', "ファミリーロッジ旅籠屋・讃岐観音寺店", "香川県観音寺市坂本町5-1-25", null, "https://travel.rakuten.co.jp/HOTEL/144479/144479.html"),
  stay('kanonji-stay-005', "ホテル サニーイン", "香川県観音寺市観音寺町甲1235", null, "https://travel.rakuten.co.jp/HOTEL/14066/14066.html"),
  stay('kanonji-stay-006', "ホテルルートイン観音寺", "香川県観音寺市南町4-3-46", null, "https://travel.rakuten.co.jp/HOTEL/197475/197475.html"),
  stay('kanonji-stay-007', "リブマックスリゾート観音寺", "香川県観音寺市池之尻町1101-4", "0875-27-6161", "https://travel.rakuten.co.jp/HOTEL/199292/199292.html"),
  stay('kanonji-stay-008', "天空ｖｉｌｌａ", "香川県観音寺市室本町775", null, "https://travel.rakuten.co.jp/HOTEL/197523/197523.html"),
  stay('kanonji-stay-009', "観音寺グランドホテル", "香川県観音寺市坂本町五丁目１８番４０号", null, "https://travel.rakuten.co.jp/HOTEL/5647/5647.html"),
  stay('kanonji-stay-010', "ＡＲＩＡＫＥ ｐａｌｍ ｔｒｅｅ ｈｏｕｓｅ （泊Ｒｕｔｔｏ）", "香川県観音寺市室本町531-1", null, "https://travel.rakuten.co.jp/HOTEL/188946/188946.html"),
  stay('kanonji-stay-011', "ＨＯＴＥＬ ＡＺ 香川観音寺店", "香川県観音寺市坂本町5丁目16番25号", null, "https://travel.rakuten.co.jp/HOTEL/196898/196898.html"),
  stay('kanonji-stay-012', "Ｈｏｔｅｌ Ｏ． Ｓｅｔｏｕｃｈｉ 〜ホテルオーセトウチ〜 ｂｙ 琴弾廻廊", "香川県観音寺市有明町5-49", null, "https://travel.rakuten.co.jp/HOTEL/193441/193441.html"),
  stay('kanonji-stay-013', "Ｔａｂｉｓｔ 本大ビジネスホテル 観音寺", "香川県観音寺市本大町1677-2", "0875-24-1384", "https://travel.rakuten.co.jp/HOTEL/57057/57057.html"),
  stay('kanonji-stay-014', "Ｔａｂｉｓｔ 琴弾荘", "香川県観音寺市有明町10-22", null, "https://travel.rakuten.co.jp/HOTEL/191785/191785.html"),
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
    accessed: KANONJI_TRAVEL_ACCESSED
  };
}

export const KANONJI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('kanonji-dining-01', 'カマ喜ri', '香川県観音寺市柞田町甲46-3', '0875-24-8288', 'https://tabelog.com/kagawa/A3703/A370301/37006622/'),
  dining('kanonji-dining-02', '西端手打 上戸うどん', '香川県観音寺市豊浜町箕浦974-1', null, 'https://tabelog.com/kagawa/A3703/A370301/37000152/'),
  dining('kanonji-dining-03', '手打ちうどん つるや', '香川県観音寺市坂本町3-7-18', '0875-23-1761', 'https://tabelog.com/kagawa/A3703/A370301/37000148/'),
  dining('kanonji-dining-04', 'かなくま餅', '香川県観音寺市植田町35-2', '0875-25-3044', 'https://tabelog.com/kagawa/A3703/A370301/37000510/'),
  dining('kanonji-dining-05', '讃岐麺処 山岡', '香川県観音寺市古川町273-1', null, 'https://tabelog.com/kagawa/A3703/A370303/37012136/'),
  dining('kanonji-dining-06', '大喜多', '香川県観音寺市池之尻町718', '0875-27-6411', 'https://tabelog.com/kagawa/A3703/A370301/37000603/'),
  dining('kanonji-dining-07', '本場かなくま餅 福田', '香川県観音寺市流岡町1436-2', '0875-25-3421', 'https://tabelog.com/kagawa/A3703/A370301/37000119/'),
  dining('kanonji-dining-08', 'IZAKAYA 時々 観音寺店', '香川県観音寺市昭和町1-8-39', '0875-25-6511', 'https://tabelog.com/kagawa/A3703/A370301/37001099/'),
  dining('kanonji-dining-09', '伊吹いりこセンター', '香川県観音寺市港町1-5-11', '080-2981-9384', 'https://tabelog.com/kagawa/A3703/A370301/37010828/'),
  dining('kanonji-dining-10', 'うまじ家 豊浜店', '香川県観音寺市豊浜町姫浜83-1', '0875-52-5835', 'https://tabelog.com/kagawa/A3703/A370301/37006102/'),
  dining('kanonji-dining-11', '麺紡', '香川県観音寺市大野原町大野原1257-7', '0875-23-7585', 'https://tabelog.com/kagawa/A3703/A370301/37008963/'),
  dining('kanonji-dining-12', '中丸水産', '香川県観音寺市港町1-3-32', '0875-25-1318', 'https://tabelog.com/kagawa/A3703/A370301/37012030/'),
  dining('kanonji-dining-13', '柳川 本店', '香川県観音寺市観音寺町甲2814-1', '0875-25-3846', 'https://tabelog.com/kagawa/A3703/A370301/37000632/'),
  dining('kanonji-dining-14', '骨付鳥 味鶴', '香川県観音寺市茂木町2-1-11 １Ｆ', '0875-25-8036', 'https://tabelog.com/kagawa/A3703/A370301/37000841/')
];

export const KANONJI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  KANONJI_TRAVEL_DINING.map((row) => row.name_ja)
);

export const KANONJI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KANONJI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const KANONJI_TRAVEL_ALL: readonly TravelRow[] = [
  ...KANONJI_TRAVEL_DINING,
  ...KANONJI_TRAVEL_STAY,
  ...KANONJI_TRAVEL_SHOPPING,
  ...KANONJI_TRAVEL_COMMERCE
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

export function isKanonjiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KANONJI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isKanonjiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KANONJI_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isKanonjiStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isKanonjiShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isKanonjiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KANONJI_DINING_NAME_SET.has(row.name_ja);
}

export function kanonjiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return KANONJI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankKanonjiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isKanonjiOnsenPackRow(row) &&
      !isKanonjiExperiencePackRow(row) &&
      !isKanonjiStayPackRow(row) &&
      !isKanonjiDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of KANONJI_SIGHT_PINS) {
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

export function kanonjiSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '観音寺市 飲食案内' : 'Kanonji City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '観音寺市 宿泊案内' : 'Kanonji City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function kanonjiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKanonjiOnsenPackRow(row)) return 'onsen';
  if (isKanonjiExperiencePackRow(row)) return 'experience';
  if (isKanonjiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isKanonjiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function kanonjiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isKanonjiOnsenPackRow(row) &&
      !isKanonjiExperiencePackRow(row) &&
      !isKanonjiStayPackRow(row) &&
      !isKanonjiDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKanonjiOnsenPackRow(row);
  if (filter === 'experience') return isKanonjiExperiencePackRow(row);
  if (filter === 'stay') return isKanonjiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveKanonjiFilter(c: string | undefined, q: string): FilterId {
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

export const KANONJI_HALL = KANONJI.hall;
