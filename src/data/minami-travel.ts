/**
 * Minami travel layer. Pack tourism has inns/camps without room or bath photos.
 * Stay: Rakuten 部屋 stills — 白い燈台 / ケアンズ / モビレージ / 花乃宿 / 明山荘 (TG610 densify).
 * Onsen: EXTRA 白い燈台 展望露天風呂 / 明山荘 大浴場 (HARD BAR stay≠onsen).
 * Dining from 食べログ 美波町 (C36387) public shop pages with FOOD dish heroes.
 * Shopping: 道の駅 pack name with place-named Commons exterior.
 * Experience: 日和佐うみがめ博物館カレッタ remapped (Commons).
 * PHOTO GAPS: 薬王寺温泉 醫王の湯 AwaNavi exterior only (no facility bath still); 商業 honest 0.
 * Do not copy 牟岐 / 那賀 / 佐那河内 / 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 松茂 / 北島 / 藍住 / 鳴門 / 徳島市 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MINAMI, MINAMI_SIGHT_PHOTOS} from './minami';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const MINAMI_TRAVEL_ACCESSED = '2026-09-09' as const;

export const MINAMI_TRAVEL_SOURCES = {
  home: 'https://www.town.minami.lg.jp/',
  hall: 'https://www.town.minami.lg.jp/',
  kanko: 'https://www.town.minami.lg.jp/docs/182.html',
  stayNavi: 'https://www.navitime.co.jp/category/06/36387/',
  rakutenTravel: 'https://travel.rakuten.co.jp/',
  tabelogCity: 'https://tabelog.com/tokushima/C36387/rstLst/'
} as const;

/** Exact tourism-pack names shown on 温泉, not 観光. Bath photo required. */
export const MINAMI_ONSEN_PACK_NAMES = [
  'えびす洞温泉 ホテル 白い燈台 展望露天風呂',
  '民宿 明山荘 大浴場'
] as const;

export const MINAMI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(
  MINAMI_ONSEN_PACK_NAMES
);
export const MINAMI_EXPERIENCE_PACK_NAMES = ['日和佐うみがめ博物館カレッタ'] as const;
export const MINAMI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MINAMI_EXPERIENCE_PACK_NAMES);

/** Exact tourism-pack names shown on 宿泊, not 観光. Room/bath photo required — none yet. */
export const MINAMI_STAY_PACK_NAMES = [] as const;

export const MINAMI_STAY_PACK_SET: ReadonlySet<string> = new Set(
  MINAMI_STAY_PACK_NAMES
);

/** Tourism pack names remapped to 買物 (not 観光) when photo sourced. */
export const MINAMI_SHOPPING_PACK_NAMES = ['道の駅日和佐'] as const;

export const MINAMI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(
  MINAMI_SHOPPING_PACK_NAMES
);

export const MINAMI_SIGHT_PINS = [
  '薬王寺瑜祇塔',
  '南阿波サンライン',
  '日和佐城',
  '恵比須浜キャンプ村',
  '日和佐灯台'
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
    accessed: MINAMI_TRAVEL_ACCESSED
  };
}

/** Ranked strongest room 出典 first. Skipped dining-name collisions さくら庵 / 樹園. */
export const MINAMI_TRAVEL_STAY: readonly TravelRow[] = [
  stay(
    'minami-stay-01',
    'えびす洞温泉 ホテル 白い燈台',
    '徳島県海部郡美波町日和佐浦455',
    '0884-77-1170',
    'https://travel.rakuten.co.jp/HOTEL/4799/4799.html'
  ),
  stay(
    'minami-stay-02',
    'ビジネスホテル・ケアンズ',
    '徳島県海部郡美波町奥河内弁才天75-17',
    '0884-77-1211',
    'https://travel.rakuten.co.jp/HOTEL/30831/30831.html'
  ),
  stay(
    'minami-stay-03',
    '南阿波サンラインモビレージ',
    '徳島県海部郡美波町山河内字明丸1-1',
    '0884-77-0709',
    'https://travel.rakuten.co.jp/HOTEL/108774/108774.html'
  ),
  stay(
    'minami-stay-04',
    '花乃宿',
    '徳島県海部郡美波町奥河内字本村8-1',
    '0884-70-1881',
    'https://travel.rakuten.co.jp/HOTEL/196323/196323.html'
  ),
  stay(
    'minami-stay-05',
    '民宿 明山荘',
    '徳島県海部郡美波町田井82-1',
    '0884-78-1717',
    'https://travel.rakuten.co.jp/HOTEL/184182/184182.html'
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
    accessed: MINAMI_TRAVEL_ACCESSED
  };
}

function shopping(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'shopping',
    address,
    phone,
    source_url,
    accessed: MINAMI_TRAVEL_ACCESSED
  };
}

export const MINAMI_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'minami-dining-01',
    "イザリcafe",
    "徳島県海部郡美波町伊座利301-1",
    "0884-78-1186",
    "https://tabelog.com/tokushima/A3602/A360203/36003206/"
  ),
  dining(
    'minami-dining-02',
    "ひわさ屋",
    "徳島県海部郡美波町奥河内寺前122",
    "0884-77-3528",
    "https://tabelog.com/tokushima/A3602/A360203/36000905/"
  ),
  dining(
    'minami-dining-03',
    "豊田屋",
    "徳島県海部郡美波町奥河内寺前93",
    "0120-74-1136",
    "https://tabelog.com/tokushima/A3602/A360203/36004754/"
  ),
  dining(
    'minami-dining-04',
    "やすらぎ",
    "徳島県海部郡美波町奥河内字寺前",
    "0884-77-2095",
    "https://tabelog.com/tokushima/A3601/A360103/36000699/"
  ),
  dining(
    'minami-dining-05',
    "手打ち蕎麦 美波乃風",
    "徳島県海部郡美波町西河内大久保71-2",
    "080-6235-4110",
    "https://tabelog.com/tokushima/A3602/A360203/36008514/"
  ),
  dining(
    'minami-dining-06',
    "皐月庵",
    "徳島県海部郡美波町北河内大戸583-1",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36009181/"
  ),
  dining(
    'minami-dining-07',
    "平山食堂",
    "徳島県海部郡美波町奥河内字弁才天250-9",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36004757/"
  ),
  dining(
    'minami-dining-08',
    "民宿ゆき荘",
    "徳島県海部郡美波町西由岐字愛宕山13-19",
    "0884-78-0513",
    "https://tabelog.com/tokushima/A3602/A360203/36004862/"
  ),
  dining(
    'minami-dining-09',
    "明山荘",
    "徳島県海部郡美波町田井82-1",
    "0884-78-1717",
    "https://tabelog.com/tokushima/A3602/A360203/36005276/"
  ),
  dining(
    'minami-dining-10',
    "白い燈台",
    "徳島県海部郡美波町日和佐浦455",
    "0884-77-1170",
    "https://tabelog.com/tokushima/A3602/A360203/36008689/"
  ),
  dining(
    'minami-dining-11',
    "クニ舛田",
    "徳島県海部郡美波町恵比須浜字田井218",
    "0884-77-2173",
    "https://tabelog.com/tokushima/A3602/A360203/36006402/"
  ),
  dining(
    'minami-dining-12',
    "さくら庵",
    "徳島県海部郡美波町奥河内字寺前114-6",
    "080-7817-2258",
    "https://tabelog.com/tokushima/A3602/A360203/36009231/"
  ),
  dining(
    'minami-dining-13',
    "宝食堂",
    "徳島県海部郡美波町奥河内弁財天172",
    "0884-77-0605",
    "https://tabelog.com/tokushima/A3602/A360203/36002472/"
  ),
  dining(
    'minami-dining-14',
    "ハラトウフテン",
    "徳島県海部郡美波町奥河内寺前522-43",
    "0884-77-0318",
    "https://tabelog.com/tokushima/A3602/A360203/36008342/"
  ),
  dining(
    'minami-dining-15',
    "ミルアン",
    "徳島県海部郡美波町日和佐浦125",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36007942/"
  ),
  dining(
    'minami-dining-16',
    "Cafe 初花",
    "徳島県海部郡美波町奥河内弁才天85-17",
    "0884-70-1445",
    "https://tabelog.com/tokushima/A3602/A360203/36006447/"
  ),
  dining(
    'minami-dining-17',
    "十一屋 菓子店",
    "徳島県海部郡美波町奥河内字本村91",
    "0884-77-0158",
    "https://tabelog.com/tokushima/A3602/A360203/36004353/"
  ),
  dining(
    'minami-dining-18',
    "TEISHABA cafe",
    "徳島県海部郡美波町奥河内弁才天75-15",
    "090-5018-8892",
    "https://tabelog.com/tokushima/A3602/A360203/36009167/"
  ),
  dining(
    'minami-dining-19',
    "かめまんねん",
    "徳島県海部郡美波町奥河内寺前277",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36009143/"
  ),
  dining(
    'minami-dining-20',
    "ドライブイン 海賊舟",
    "徳島県海部郡美波町北河内字本村484-16",
    "0884-77-0013",
    "https://tabelog.com/tokushima/A3602/A360203/36003555/"
  ),
  dining(
    'minami-dining-21',
    "てこ屋",
    "徳島県海部郡美波町日和佐浦41-1",
    "0884-77-0073",
    "https://tabelog.com/tokushima/A3602/A360203/36002245/"
  ),
  dining(
    'minami-dining-22',
    "アジュール昭吾堂",
    "徳島県海部郡美波町奥河内字寺前237-4",
    "0884-77-0126",
    "https://tabelog.com/tokushima/A3602/A360203/36006301/"
  ),
  dining(
    'minami-dining-23',
    "菖蒲みやげ店",
    "徳島県海部郡美波町奥河内字寺前236-4",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36008172/"
  ),
  dining(
    'minami-dining-24',
    "大みん軒",
    "徳島県海部郡美波町奥河内弁才天11-8",
    "0884-77-0420",
    "https://tabelog.com/tokushima/A3602/A360203/36000985/"
  ),
  dining(
    'minami-dining-25',
    "阿波尾鶏中華そば藍庵",
    "徳島県海部郡美波町奥河内字寺前229-1",
    "0884-70-1590",
    "https://tabelog.com/tokushima/A3602/A360203/36007132/"
  ),
  dining(
    'minami-dining-26',
    "タートル",
    "徳島県海部郡美波町日和佐浦370-1",
    "0884-77-2474",
    "https://tabelog.com/tokushima/A3602/A360203/36002924/"
  ),
  dining(
    'minami-dining-27',
    "グリル漁火",
    "徳島県海部郡美波町日和佐浦455 ホテル白い燈台５階",
    "0884-77-1170",
    "https://tabelog.com/tokushima/A3602/A360203/36003168/"
  ),
  dining(
    'minami-dining-28',
    "とば作 日和佐店",
    "徳島県海部郡美波町奥河内寺前238-1",
    "0884-77-0024",
    "https://tabelog.com/tokushima/A3602/A360203/36001633/"
  ),
  dining(
    'minami-dining-29',
    "味登里",
    "徳島県海部郡美波町奥河内字弁才天1-3",
    "0884-77-1134",
    "https://tabelog.com/tokushima/A3602/A360203/36009243/"
  ),
  dining(
    'minami-dining-30',
    "無量寿",
    "徳島県海部郡美波町奥河内寺前248 薬王寺温泉　医王の湯",
    "0884-77-1126",
    "https://tabelog.com/tokushima/A3602/A360203/36004703/"
  ),
  dining(
    'minami-dining-31',
    "お好み焼天花",
    "徳島県海部郡美波町奥河内寺前239-1",
    "0884-77-3033",
    "https://tabelog.com/tokushima/A3602/A360203/36002181/"
  ),
  dining(
    'minami-dining-32',
    "そうざい屋 しのき",
    "徳島県海部郡美波町奥河内字寺前493-6",
    null,
    "https://tabelog.com/tokushima/A3602/A360203/36008916/"
  ),
  dining(
    'minami-dining-33',
    "オモニ",
    "徳島県海部郡美波町奥河内字寺前490-4",
    "0884-70-1464",
    "https://tabelog.com/tokushima/A3602/A360203/36007073/"
  ),
  dining(
    'minami-dining-34',
    "居酒屋つくし",
    "徳島県海部郡美波町奥河内字寺前205-2",
    "090-9773-9905",
    "https://tabelog.com/tokushima/A3602/A360203/36006389/"
  ),
  dining(
    'minami-dining-35',
    "停車場",
    "徳島県海部郡美波町奥河内弁才天75-19",
    "0884-77-0022",
    "https://tabelog.com/tokushima/A3602/A360203/36001844/"
  ),
  dining(
    'minami-dining-36',
    "ラトリエ あべ",
    "徳島県海部郡美波町山河内字なか26",
    "0884-77-3755",
    "https://tabelog.com/tokushima/A3602/A360203/36005067/"
  ),
  dining(
    'minami-dining-37',
    "まめぼんcafe",
    "徳島県海部郡美波町奥河内寺前100-9",
    "0884-70-1372",
    "https://tabelog.com/tokushima/A3602/A360203/36006072/"
  ),
  dining(
    'minami-dining-38',
    "樹園",
    "徳島県海部郡美波町田井834-5",
    "0884-78-1695",
    "https://tabelog.com/tokushima/A3602/A360203/36004911/"
  ),
  dining(
    'minami-dining-39',
    "道の駅 日和佐",
    "徳島県海部郡美波町奥河内寺前493-6",
    "0884-77-2121",
    "https://tabelog.com/tokushima/A3602/A360203/36004164/"
  ),
  dining(
    'minami-dining-40',
    "むらかみ",
    "徳島県海部郡美波町奥河内字弁才天68-1",
    "0884-77-0083",
    "https://tabelog.com/tokushima/A3602/A360203/36003205/"
  ),
  dining(
    'minami-dining-41',
    "平和園",
    "徳島県海部郡美波町奥河内寺前493-3",
    "0884-77-3477",
    "https://tabelog.com/tokushima/A3602/A360203/36006403/"
  ),
  dining(
    'minami-dining-42',
    "Classic Burgers",
    "徳島県海部郡美波町奥河内寺前277-1",
    "080-1571-4396",
    "https://tabelog.com/tokushima/A3602/A360203/36009045/"
  )
];

export const MINAMI_DINING_NAME_SET: ReadonlySet<string> = new Set(
  MINAMI_TRAVEL_DINING.map((row) => row.name_ja)
);

export const MINAMI_TRAVEL_SHOPPING: readonly TravelRow[] = [
  shopping(
    'minami-shopping-01',
    '道の駅日和佐',
    '徳島県海部郡美波町奥河内字寺前493-6',
    '0884-77-2121',
    'https://www.town.minami.lg.jp/docs/182.html'
  )
];

export const MINAMI_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const MINAMI_TRAVEL_ALL: readonly TravelRow[] = [
  ...MINAMI_TRAVEL_DINING,
  ...MINAMI_TRAVEL_STAY,
  ...MINAMI_TRAVEL_SHOPPING,
  ...MINAMI_TRAVEL_COMMERCE
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

export function isMinamiOnsenPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MINAMI_ONSEN_PACK_SET.has(row.name_ja);
}

export function isMinamiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MINAMI_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isMinamiStayPackRow(_row: {
  category: string;
  name_ja: string;
}): boolean {
  return false;
}

export function isMinamiShoppingPackRow(row: {
  category: string;
  name_ja: string;
}): boolean {
  if (row.category !== 'tourism' && row.category !== 'public_facility') return false;
  return MINAMI_SHOPPING_PACK_SET.has(row.name_ja);
}

export function minamiSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return MINAMI_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankMinamiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isMinamiOnsenPackRow(row) &&
      !isMinamiExperiencePackRow(row) &&
      !isMinamiStayPackRow(row) &&
      !isMinamiShoppingPackRow(row) &&
      !MINAMI_DINING_NAME_SET.has(row.name_ja)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of MINAMI_SIGHT_PINS) {
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

export function minamiSourcedHook(
  row: {name_ja: string; address: string | null; category: string},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '美波町 飲食案内' : 'Minami dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '美波町 宿泊案内' : 'Minami lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '美波町 買物案内' : 'Minami shopping list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '町の観光案内' : 'Town tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function minamiTopChipForRow(row: {
  category: string;
  name_ja: string;
}): FilterId {
  if (isMinamiOnsenPackRow(row)) return 'onsen';
  if (isMinamiExperiencePackRow(row)) return 'experience';
  if (isMinamiStayPackRow(row)) return 'stay';
  if (isMinamiShoppingPackRow(row)) return 'shopping';
  if (MINAMI_DINING_NAME_SET.has(row.name_ja)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function minamiPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isMinamiOnsenPackRow(row) &&
      !isMinamiExperiencePackRow(row) &&
      !isMinamiStayPackRow(row) &&
      !isMinamiShoppingPackRow(row) &&
      !MINAMI_DINING_NAME_SET.has(nameJa)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMinamiOnsenPackRow(row);
  if (filter === 'experience') return isMinamiExperiencePackRow(row);
  if (filter === 'stay') return isMinamiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveMinamiFilter(c: string | undefined, q: string): FilterId {
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

export const MINAMI_HALL = MINAMI.hall;
