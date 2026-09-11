/**
 * Sakaide City travel layer. No frozen pack.
 * Dining from 食べログ 坂出市 (C37203) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct 大浴場 names + bath stills.
 * Shopping / commerce: honest 0. Experience densified when attributable.
 * Do not invent. Do not copy Tokushima / other-Kagawa TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SAKAIDE, SAKAIDE_SIGHT_PHOTOS} from './sakaide';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const SAKAIDE_TRAVEL_ACCESSED = '2026-09-09' as const;

export const SAKAIDE_TRAVEL_SOURCES = {
  home: 'https://www.city.sakaide.lg.jp/',
  hall: 'https://www.city.sakaide.lg.jp/soshiki/zaimu/mapannai.html',
  seto: 'https://www.city.sakaide.lg.jp/soshiki/sangyoukankou/setoohashi.html',
  kankou: 'https://sakaide-kankou.com/',
  tabelogCity: 'https://tabelog.com/kagawa/C37203/rstLst/',
  routeInn: 'https://travel.rakuten.co.jp/HOTEL/70208/70208.html',
  grand: 'https://travel.rakuten.co.jp/HOTEL/15414/15414.html',
  plaza: 'https://travel.rakuten.co.jp/HOTEL/17901/17901.html'
} as const;

export const SAKAIDE_ONSEN_PACK_NAMES = ["ビジネスホテル美咲 大浴場", "ホテルルートイン坂出北インター 大浴場", "休暇村 讃岐五色台 大浴場", "坂出グランドホテル 大浴場", "旅館 久米ひまわり荘 大浴場", "旅館川久米 大浴場", "湯元さぬき瀬戸大橋温泉 せとうちそう 大浴場", "美咲旅館 大浴場"] as const;
export const SAKAIDE_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SAKAIDE_ONSEN_PACK_NAMES);
export const SAKAIDE_EXPERIENCE_PACK_NAMES = ['道の駅瀬戸大橋記念公園'] as const;
export const SAKAIDE_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SAKAIDE_EXPERIENCE_PACK_NAMES);
export const SAKAIDE_STAY_PACK_NAMES = [] as const;
export const SAKAIDE_STAY_PACK_SET: ReadonlySet<string> = new Set(SAKAIDE_STAY_PACK_NAMES);
export const SAKAIDE_SHOPPING_PACK_NAMES = [] as const;
export const SAKAIDE_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SAKAIDE_SHOPPING_PACK_NAMES);

export const SAKAIDE_SIGHT_PINS = [
  '瀬戸大橋',
  '瀬戸大橋記念公園',
  '瀬戸大橋タワー',
  '東山魁夷せとうち美術館',
  '与島',
  '鍋島灯台',
  '飯野山',
  '白峯寺',
  '沙弥島'
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
    accessed: SAKAIDE_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room 出典 first. */
export const SAKAIDE_TRAVEL_STAY: readonly TravelRow[] = [
  stay('sakaide-stay-001', "いろりの宿 木乃古 ＾", "香川県坂出市王越町木沢469-1　Ｉｒｏｒｉ　ｎｏ　Ｙａｄｏ　Ｋｉｎｏｋｏ", null, "https://travel.rakuten.co.jp/HOTEL/186296/186296.html"),
  stay('sakaide-stay-002', "お遍路ハウス八十場／民泊", "香川県坂出市西庄町1702　ＯｈｅｎｒｏＨｏｕｓｅ　Ｙａｓｏｂａ", null, "https://travel.rakuten.co.jp/HOTEL/194429/194429.html"),
  stay('sakaide-stay-003', "がもう家", "香川県坂出市加茂町825", null, "https://travel.rakuten.co.jp/HOTEL/192225/192225.html"),
  stay('sakaide-stay-004', "ゲストハウス 坂出駅前館", "香川県坂出市京町1-5-1", null, "https://travel.rakuten.co.jp/HOTEL/196872/196872.html"),
  stay('sakaide-stay-005', "ビジネスホテル美咲", "香川県坂出市西大浜北2-3-1", null, "https://travel.rakuten.co.jp/HOTEL/53401/53401.html"),
  stay('sakaide-stay-006', "ホテル ニューセンチュリー坂出", "香川県坂出市久米町1-25-8", null, "https://travel.rakuten.co.jp/HOTEL/19775/19775.html"),
  stay('sakaide-stay-007', "ホテルルートイン坂出北インター", "香川県坂出市西大浜北4-5-31", null, "https://travel.rakuten.co.jp/HOTEL/70208/70208.html"),
  stay('sakaide-stay-008', "リゾートホテル ＪＲ坂出駅から徒歩７分 ＾", "香川県坂出市本町2-9-1　ＲＥＮＴビル", null, "https://travel.rakuten.co.jp/HOTEL/190936/190936.html"),
  stay('sakaide-stay-009', "休暇村 讃岐五色台", "香川県坂出市大屋冨町3042", null, "https://travel.rakuten.co.jp/HOTEL/76780/76780.html"),
  stay('sakaide-stay-010', "坂出グランドホテル", "香川県坂出市西大浜北1-2-33", null, "https://travel.rakuten.co.jp/HOTEL/15414/15414.html"),
  stay('sakaide-stay-011', "坂出プラザホテル", "香川県坂出市西大浜北3-2-43", null, "https://travel.rakuten.co.jp/HOTEL/17901/17901.html"),
  stay('sakaide-stay-012', "旅館 みき", "香川県坂出市本町3丁目3-25", "0877-46-5441", "https://travel.rakuten.co.jp/HOTEL/107653/107653.html"),
  stay('sakaide-stay-013', "旅館 久米ひまわり荘", "香川県坂出市西大浜南3-1-15", null, "https://travel.rakuten.co.jp/HOTEL/56170/56170.html"),
  stay('sakaide-stay-014', "旅館川久米", "香川県坂出市元町1丁目7-12", null, "https://travel.rakuten.co.jp/HOTEL/76783/76783.html"),
  stay('sakaide-stay-015', "湯元さぬき瀬戸大橋温泉 せとうちそう", "香川県坂出市常盤町2-1-20", null, "https://travel.rakuten.co.jp/HOTEL/8175/8175.html"),
  stay('sakaide-stay-016', "美咲旅館", "香川県坂出市西大浜北2-4-38", null, "https://travel.rakuten.co.jp/HOTEL/53400/53400.html"),
  stay('sakaide-stay-017', "ＢＡＹ ＭＡＲＩＮＡ ログハウス ＾", "香川県坂出市大屋冨町3100　ＢＡＹ　ＭＡＲＩＮＡ　Ｌｏｇｈｏｕｓｅ", null, "https://travel.rakuten.co.jp/HOTEL/171129/171129.html"),
  stay('sakaide-stay-018', "ＨＯＴＥＬ Ｒ９ Ｔｈｅ Ｙａｒｄ 坂出", "香川県坂出市西大浜北3-3-45", null, "https://travel.rakuten.co.jp/HOTEL/193223/193223.html"),
  stay('sakaide-stay-019', "ＭＹＴＨ‐Ｓ【大人専用１８禁・ハピホテ提携】", "香川県坂出市西大浜北2-47-23", null, "https://travel.rakuten.co.jp/HOTEL/163466/163466.html"),
  stay('sakaide-stay-020', "ＭＹＴＨ－Ｊ【大人専用１８禁・ハピホテ提携】", "香川県坂出市西大浜北4-5-14", null, "https://travel.rakuten.co.jp/HOTEL/163468/163468.html"),
  stay('sakaide-stay-021', "ＭＹＴＨ－Ｗ【大人専用１８禁・ハピホテ提携】", "香川県坂出市西大浜北1-3-32", null, "https://travel.rakuten.co.jp/HOTEL/163467/163467.html"),
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
    accessed: SAKAIDE_TRAVEL_ACCESSED
  };
}

export const SAKAIDE_TRAVEL_DINING: readonly TravelRow[] = [
  dining('sakaide-dining-01', '讃岐うどん がもう', '香川県坂出市加茂町420-1', '0877-48-0409', 'https://tabelog.com/kagawa/A3702/A370201/37000019/'),
  dining('sakaide-dining-02', '日の出製麺所', '香川県坂出市富士見町1-8-5', '0877-46-3882', 'https://tabelog.com/kagawa/A3702/A370201/37000016/'),
  dining('sakaide-dining-03', '山下うどん', '香川県坂出市加茂町147-1', '0877-48-1304', 'https://tabelog.com/kagawa/A3702/A370201/37000020/'),
  dining('sakaide-dining-04', 'やなぎ屋 西大浜店', '香川県坂出市西大浜北2-48-22', '0877-45-5517', 'https://tabelog.com/kagawa/A3702/A370201/37005702/'),
  dining('sakaide-dining-05', 'とらや', '香川県坂出市沖の浜1-4', '0877-45-7366', 'https://tabelog.com/kagawa/A3702/A370201/37001355/'),
  dining('sakaide-dining-06', 'まいどまいど', '香川県坂出市川津町45-5', '0877-45-2750', 'https://tabelog.com/kagawa/A3702/A370201/37005010/'),
  dining('sakaide-dining-07', 'めんや七福 別邸', '香川県坂出市川津町3355-2', '0877-35-7567', 'https://tabelog.com/kagawa/A3702/A370201/37008600/'),
  dining('sakaide-dining-08', '手打ちうどん かまや', '香川県坂出市川津町3537-1', '0877-85-3665', 'https://tabelog.com/kagawa/A3702/A370201/37012661/'),
  dining('sakaide-dining-09', 'さぬきまるふじ', '香川県坂出市林田町3907-3', '0877-47-3136', 'https://tabelog.com/kagawa/A3702/A370201/37001360/'),
  dining('sakaide-dining-10', '饂飩 こむぎや', '香川県坂出市京町2-4-1', '0877-55-5280', 'https://tabelog.com/kagawa/A3702/A370201/37000943/'),
  dining('sakaide-dining-11', '手打うどん 町川', '香川県坂出市青海町870-1', null, 'https://tabelog.com/kagawa/A3702/A370201/37000708/'),
  dining('sakaide-dining-12', 'ウェリントン', '香川県坂出市久米町2-10-31', '0877-45-6777', 'https://tabelog.com/kagawa/A3702/A370201/37000106/'),
  dining('sakaide-dining-13', '清水屋', '香川県坂出市西庄町759-1', '0877-46-1505', 'https://tabelog.com/kagawa/A3702/A370201/37000701/'),
  dining('sakaide-dining-14', 'ホクセイ', '香川県坂出市林田町758-1', '0877-47-2081', 'https://tabelog.com/kagawa/A3702/A370201/37002605/'),
];

export const SAKAIDE_DINING_NAME_SET: ReadonlySet<string> = new Set(
  SAKAIDE_TRAVEL_DINING.map((row) => row.name_ja)
);

export const SAKAIDE_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SAKAIDE_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const SAKAIDE_TRAVEL_ALL: readonly TravelRow[] = [
  ...SAKAIDE_TRAVEL_DINING,
  ...SAKAIDE_TRAVEL_STAY,
  ...SAKAIDE_TRAVEL_SHOPPING,
  ...SAKAIDE_TRAVEL_COMMERCE
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

export function isSakaideOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAKAIDE_ONSEN_PACK_SET.has(row.name_ja);
}

export function isSakaideExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAKAIDE_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isSakaideStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isSakaideShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isSakaideDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAKAIDE_DINING_NAME_SET.has(row.name_ja);
}

export function sakaideSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return SAKAIDE_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankSakaideSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isSakaideOnsenPackRow(row) &&
      !isSakaideExperiencePackRow(row) &&
      !isSakaideStayPackRow(row) &&
      !isSakaideDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of SAKAIDE_SIGHT_PINS) {
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

export function sakaideSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '坂出市 飲食案内' : 'Sakaide City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '坂出市 宿泊案内' : 'Sakaide City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function sakaideTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isSakaideOnsenPackRow(row)) return 'onsen';
  if (isSakaideExperiencePackRow(row)) return 'experience';
  if (isSakaideStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isSakaideDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function sakaidePackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isSakaideOnsenPackRow(row) &&
      !isSakaideExperiencePackRow(row) &&
      !isSakaideStayPackRow(row) &&
      !isSakaideDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSakaideOnsenPackRow(row);
  if (filter === 'experience') return isSakaideExperiencePackRow(row);
  if (filter === 'stay') return isSakaideStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveSakaideFilter(c: string | undefined, q: string): FilterId {
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

export const SAKAIDE_HALL = SAKAIDE.hall;
