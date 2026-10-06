/**
 * Marugame City travel layer. No frozen pack.
 * Dining from 食べログ 丸亀市 (C37202) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct 大浴場 names + bath stills.
 * Shopping / commerce: honest 0. Experience densified when attributable.
 * Do not invent. Do not copy Tokushima / Takamatsu / Kotohira TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MARUGAME, MARUGAME_SIGHT_PHOTOS} from './marugame';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const MARUGAME_TRAVEL_ACCESSED = '2026-09-09' as const;

export const MARUGAME_TRAVEL_SOURCES = {
  home: 'https://www.city.marugame.lg.jp/',
  hall: 'https://www.city.marugame.lg.jp/',
  castle: 'https://www.city.marugame.lg.jp/site/castle/',
  tabelogCity: 'https://tabelog.com/kagawa/C37202/rstLst/',
  apa: 'https://travel.rakuten.co.jp/HOTEL/80598/80598.html',
  superHotel: 'https://travel.rakuten.co.jp/HOTEL/178679/178679.html'
} as const;

export const MARUGAME_ONSEN_PACK_NAMES = ["アパホテル〈丸亀駅前大通〉 大浴場", "オークラホテル丸亀 大浴場", "スーパーホテル丸亀駅前 天然温泉「京極の湯」 大浴場", "ホテルルートイン丸亀 大浴場", "ＡＫＩＹＡｔｏ Ｍａｒｕｇａｍｅ Ｍｏｎｔｍａｒｔｒｅ 大浴場"] as const;
export const MARUGAME_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MARUGAME_ONSEN_PACK_NAMES);
export const MARUGAME_EXPERIENCE_PACK_NAMES = ['うちわの港ミュージアム'] as const;
export const MARUGAME_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MARUGAME_EXPERIENCE_PACK_NAMES);
export const MARUGAME_STAY_PACK_NAMES = [] as const;
export const MARUGAME_STAY_PACK_SET: ReadonlySet<string> = new Set(MARUGAME_STAY_PACK_NAMES);
export const MARUGAME_SHOPPING_PACK_NAMES = [] as const;
export const MARUGAME_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MARUGAME_SHOPPING_PACK_NAMES);

export const MARUGAME_SIGHT_PINS = [
  '丸亀城',
  '丸亀城天守',
  '丸亀城石垣',
  '中津万象園',
  '飯野山'
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
    accessed: MARUGAME_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room 出典 first. */
export const MARUGAME_TRAVEL_STAY: readonly TravelRow[] = [
  stay('marugame-stay-01', "アパホテル〈丸亀駅前大通〉", "香川県丸亀市大手町3-6-1", "0570-096-411", "https://travel.rakuten.co.jp/HOTEL/80598/80598.html"),
  stay('marugame-stay-02', "エムズルーモス", "香川県丸亀市土居町1-15-8", "090-4334-5171", "https://travel.rakuten.co.jp/HOTEL/199264/199264.html"),
  stay('marugame-stay-03', "オークラホテル丸亀", "香川県丸亀市富士見町3-3-50", "0877-23-2222", "https://travel.rakuten.co.jp/HOTEL/675/675.html"),
  stay('marugame-stay-04', "ゲストハウスＡＫＡＨＩＧＥ丸亀 （泊Ｒｕｔｔｏ）", "香川県丸亀市通町27-1", "087-789-6800", "https://travel.rakuten.co.jp/HOTEL/191550/191550.html"),
  stay('marugame-stay-05', "コンフォートイン善通寺インター", "香川県丸亀市原田町西三分一1587-1", "0877-58-2911", "https://travel.rakuten.co.jp/HOTEL/191700/191700.html"),
  stay('marugame-stay-06', "スーパーホテル丸亀駅前　天然温泉「京極の湯」", "香川県丸亀市通町142-1", null, "https://travel.rakuten.co.jp/HOTEL/178679/178679.html"),
  stay('marugame-stay-07', "ビジネスホテル 青山", "香川県丸亀市土器町東3-639", "0877-24-4800", "https://travel.rakuten.co.jp/HOTEL/104775/104775.html"),
  stay('marugame-stay-08', "ホテルアルファーワン丸亀", "香川県丸亀市浜町10-1", null, "https://travel.rakuten.co.jp/HOTEL/15882/15882.html"),
  stay('marugame-stay-09', "ホテルルートイン丸亀", "香川県丸亀市田村町二丁田512-1", "050-5576-7995", "https://travel.rakuten.co.jp/HOTEL/109518/109518.html"),
  stay('marugame-stay-10', "ヴィラかめちぃ｜瀬戸内観光の拠点に ＾", "香川県丸亀市福島町11", "00-0000-0000", "https://travel.rakuten.co.jp/HOTEL/200920/200920.html"),
  stay('marugame-stay-11', "丸亀ゲストハウス ウェルかめ", "香川県丸亀市浜町115-13", "080-1997-3983", "https://travel.rakuten.co.jp/HOTEL/151452/151452.html"),
  stay('marugame-stay-12', "丸亀ゲストハウス ババノバ", "香川県丸亀市本町27-1", "080-6956-6056", "https://travel.rakuten.co.jp/HOTEL/192643/192643.html"),
  stay('marugame-stay-13', "丸亀プラザホテル", "香川県丸亀市塩飽町50-3", null, "https://travel.rakuten.co.jp/HOTEL/12630/12630.html"),
  stay('marugame-stay-14', "東横ＩＮＮ丸亀駅前", "香川県丸亀市浜町26-1", "0877-58-1045", "https://travel.rakuten.co.jp/HOTEL/183080/183080.html"),
  stay('marugame-stay-15', "金倉苑／民泊", "香川県丸亀市金倉町443-2", "0877-32-6600", "https://travel.rakuten.co.jp/HOTEL/173438/173438.html"),
  stay('marugame-stay-16', "ＡＫＩＹＡｔｏ Ｍａｒｕｇａｍｅ Ｍｏｎｔｍａｒｔｒｅ", "香川県丸亀市土居町1-10-2", "050-8892-0040", "https://travel.rakuten.co.jp/HOTEL/199283/199283.html"),
  stay('marugame-stay-17', "Ｃｏｓｍｏ Ｓｔａｙ 丸亀駅前", "香川県丸亀市福島町30-1", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/197217/197217.html"),
  stay('marugame-stay-18', "Ｒｅｎｔａｌ Ｒｏｏｍ９", "香川県丸亀市富屋町3-13Ｆ", "080-4031-8899", "https://travel.rakuten.co.jp/HOTEL/173174/173174.html"),
  stay('marugame-stay-19', "ｍａｒｕｇａｍｅ ｓｔｏｐ ＾", "香川県丸亀市塩屋町4-4-12ｍａｒｕｇａｍｅｓｔｏｐ", null, "https://travel.rakuten.co.jp/HOTEL/185747/185747.html"),
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
    accessed: MARUGAME_TRAVEL_ACCESSED
  };
}

export const MARUGAME_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'marugame-dining-01',
    "中村うどん",
    "香川県丸亀市土器町東9-283 CLOVER SHOEIビル1F",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37000135/"
  ),
  dining(
    'marugame-dining-02',
    "純手打うどん よしや",
    "香川県丸亀市飯野町東二343-1",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37004606/"
  ),
  dining(
    'marugame-dining-03',
    "麺処 綿谷 丸亀店",
    "香川県丸亀市北平山町2-6-18",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37000289/"
  ),
  dining(
    'marugame-dining-04',
    "なかむら",
    "香川県丸亀市飯山町西坂元1373-3",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37000068/"
  ),
  dining(
    'marugame-dining-05',
    "麦香",
    "香川県丸亀市綾歌町岡田上1898-3",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37006914/"
  ),
  dining(
    'marugame-dining-06',
    "山とも",
    "香川県丸亀市土器町東9-194",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37008415/"
  ),
  dining(
    'marugame-dining-07',
    "手打ちうどん 歩",
    "香川県丸亀市飯野町東二484",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37001376/"
  ),
  dining(
    'marugame-dining-08',
    "手打ちセルフうどん 海侍 其の壱 飯山店",
    "香川県丸亀市飯山町東坂元2710-5",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37006447/"
  ),
  dining(
    'marugame-dining-09',
    "うどん おかだ",
    "香川県丸亀市飯野町東二623-1",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37009661/"
  ),
  dining(
    'marugame-dining-10',
    "まえばうどん",
    "香川県丸亀市綾歌町栗熊東420-2",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37000070/"
  ),
  dining(
    'marugame-dining-11',
    "あやうた製麺",
    "香川県丸亀市綾歌町岡田西1785",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37007004/"
  ),
  dining(
    'marugame-dining-12',
    "釜揚げうどん岡じま 丸亀店",
    "香川県丸亀市塩屋町3-11-24",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37007722/"
  ),
  dining(
    'marugame-dining-13',
    "骨付鳥 一鶴 丸亀本店",
    "香川県丸亀市浜町317",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37000066/"
  ),
  dining(
    'marugame-dining-14',
    "時とまるudon",
    "香川県丸亀市綾歌町富熊399-3",
    null,
    "https://tabelog.com/kagawa/A3702/A370202/37013411/"
  )
];

export const MARUGAME_DINING_NAME_SET: ReadonlySet<string> = new Set(
  MARUGAME_TRAVEL_DINING.map((row) => row.name_ja)
);

export const MARUGAME_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MARUGAME_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const MARUGAME_TRAVEL_ALL: readonly TravelRow[] = [
  ...MARUGAME_TRAVEL_DINING,
  ...MARUGAME_TRAVEL_STAY,
  ...MARUGAME_TRAVEL_SHOPPING,
  ...MARUGAME_TRAVEL_COMMERCE
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

export function isMarugameOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MARUGAME_ONSEN_PACK_SET.has(row.name_ja);
}

export function isMarugameExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MARUGAME_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isMarugameStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isMarugameShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isMarugameDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MARUGAME_DINING_NAME_SET.has(row.name_ja);
}

export function marugameSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return MARUGAME_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankMarugameSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isMarugameOnsenPackRow(row) &&
      !isMarugameExperiencePackRow(row) &&
      !isMarugameStayPackRow(row) &&
      !isMarugameDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of MARUGAME_SIGHT_PINS) {
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

export function marugameSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '丸亀市 飲食案内' : 'Marugame City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '丸亀市 宿泊案内' : 'Marugame City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function marugameTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMarugameOnsenPackRow(row)) return 'onsen';
  if (isMarugameExperiencePackRow(row)) return 'experience';
  if (isMarugameStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isMarugameDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function marugamePackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isMarugameOnsenPackRow(row) &&
      !isMarugameExperiencePackRow(row) &&
      !isMarugameStayPackRow(row) &&
      !isMarugameDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMarugameOnsenPackRow(row);
  if (filter === 'experience') return isMarugameExperiencePackRow(row);
  if (filter === 'stay') return isMarugameStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveMarugameFilter(c: string | undefined, q: string): FilterId {
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

export const MARUGAME_HALL = MARUGAME.hall;
