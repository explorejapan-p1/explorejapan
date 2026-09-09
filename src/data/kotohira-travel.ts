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

export const KOTOHIRA_TRAVEL_ACCESSED = '2026-09-09' as const;

export const KOTOHIRA_TRAVEL_SOURCES = {
  home: 'https://www.town.kotohira.kagawa.jp/',
  hall: 'https://www.town.kotohira.kagawa.jp/soshiki/2.html',
  kanko: 'https://www.town.kotohira.kagawa.jp/soshiki/8/',
  tabelogCity: 'https://tabelog.com/kagawa/C37403/rstLst/',
  kotosankaku: 'https://www.kotosankaku.jp/',
  shikishima: 'https://dormy-hotels.com/resort/hotels/shikishimakan/'
} as const;

export const KOTOHIRA_ONSEN_PACK_NAMES = ["ことひら温泉 御宿 敷島館 大浴場", "ことひら温泉 琴参閣 大浴場", "こんぴら温泉 つるや旅館 女将と若女将のおもてなしの宿＜香川県＞ 大浴場", "こんぴら温泉 琴平グランドホテル 桜の抄 大浴場", "こんぴら温泉 琴平リバーサイドホテル 大浴場", "こんぴら温泉 琴平花壇 大浴場", "こんぴら温泉 貸切湯の宿 ことね 大浴場", "こんぴら温泉湯元八千代 大浴場", "サンウェルコトヒラ 大浴場", "湯元こんぴら温泉華の湯 紅梅亭 大浴場", "琴平パークホテル 大浴場", "ＵＤＯＮ ｎａ ＨＯＴＥＬ 琴平 大浴場"] as const;
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
  stay('kotohira-stay-01', "ことひら温泉 御宿 敷島館", "香川県仲多度郡琴平町川西713-1", null, "https://travel.rakuten.co.jp/HOTEL/176626/176626.html"),
  stay('kotohira-stay-02', "ことひら温泉 琴参閣", "香川県仲多度郡琴平町685-11", null, "https://travel.rakuten.co.jp/HOTEL/14833/14833.html"),
  stay('kotohira-stay-03', "ことぶき旅館", "香川県仲多度郡琴平町245-5", null, "https://travel.rakuten.co.jp/HOTEL/129438/129438.html"),
  stay('kotohira-stay-04', "こんぴら温泉 つるや旅館 女将と若女将のおもてなしの宿＜香川県＞", "香川県仲多度郡琴平町620", null, "https://travel.rakuten.co.jp/HOTEL/15481/15481.html"),
  stay('kotohira-stay-05', "こんぴら温泉 琴平グランドホテル 桜の抄", "香川県仲多度郡琴平町977-1", null, "https://travel.rakuten.co.jp/HOTEL/5900/5900.html"),
  stay('kotohira-stay-06', "こんぴら温泉 琴平リバーサイドホテル", "香川県仲多度郡琴平町246-1", null, "https://travel.rakuten.co.jp/HOTEL/752/752.html"),
  stay('kotohira-stay-07', "こんぴら温泉 琴平花壇", "香川県仲多度郡琴平町１２４１番地５", null, "https://travel.rakuten.co.jp/HOTEL/7247/7247.html"),
  stay('kotohira-stay-08', "こんぴら温泉 貸切湯の宿 ことね", "香川県仲多度郡琴平町685-21", null, "https://travel.rakuten.co.jp/HOTEL/141259/141259.html"),
  stay('kotohira-stay-09', "こんぴら温泉湯元八千代", "香川県仲多度郡琴平町611", null, "https://travel.rakuten.co.jp/HOTEL/8572/8572.html"),
  stay('kotohira-stay-10', "こんぴら町家", "香川県仲多度郡琴平町榎井876-9（本館うす）榎井852-4（別館まる）榎井856-14（新館はな）", "0877-85-3533", "https://travel.rakuten.co.jp/HOTEL/168682/168682.html"),
  stay('kotohira-stay-11', "こんぴら路地裏宿 みちくさ", "香川県仲多度郡琴平町794-2", "0877-89-5515", "https://travel.rakuten.co.jp/HOTEL/179061/179061.html"),
  stay('kotohira-stay-12', "つながるカフェ＆ゲストハウス ＺｏｕＺｕ", "香川県仲多度郡琴平町榎井791-20", null, "https://travel.rakuten.co.jp/HOTEL/167580/167580.html"),
  stay('kotohira-stay-13', "ゲストハウス ノスタルジー", "香川県仲多度郡琴平町五條654-1", "090-1009-0547", "https://travel.rakuten.co.jp/HOTEL/179229/179229.html"),
  stay('kotohira-stay-14', "ゲストハウス琴平 ＾", "香川県仲多度郡琴平町564－3", "070-1528-9327", "https://travel.rakuten.co.jp/HOTEL/168986/168986.html"),
  stay('kotohira-stay-15', "コトリ コワーキング＆ホステル琴平", "香川県仲多度郡琴平町720-15", "0877-85-7820", "https://travel.rakuten.co.jp/HOTEL/191925/191925.html"),
  stay('kotohira-stay-16', "サンウェルコトヒラ", "香川県仲多度郡琴平町162-1", null, "https://travel.rakuten.co.jp/HOTEL/147508/147508.html"),
  stay('kotohira-stay-17', "ヴィラこんぴら ＾", "香川県仲多度郡琴平町968ヴィラこんぴら", "090-3460-6242", "https://travel.rakuten.co.jp/HOTEL/199482/199482.html"),
  stay('kotohira-stay-18', "寝て朝食の宿 時しらず", "香川県仲多度郡琴平町榎井577-1", "0877-75-5761", "https://travel.rakuten.co.jp/HOTEL/147109/147109.html"),
  stay('kotohira-stay-19', "湯元こんぴら温泉華の湯 紅梅亭", "香川県仲多度郡琴平町556-1", null, "https://travel.rakuten.co.jp/HOTEL/5901/5901.html"),
  stay('kotohira-stay-20', "琴ノ宿Ｃｈｉｚｕ １棟貸しのスイート 準天然温泉とサウナで贅沢なひとときを。 ＾", "香川県仲多度郡琴平町榎井753-2琴ノ宿Ｃｈｉｚｕ", "0875-89-1774", "https://travel.rakuten.co.jp/HOTEL/193894/193894.html"),
  stay('kotohira-stay-21', "琴平パークホテル", "香川県仲多度郡琴平町榎井706-7", null, "https://travel.rakuten.co.jp/HOTEL/39930/39930.html"),
  stay('kotohira-stay-22', "虎屋別館", "香川県仲多度郡琴平町963", "0877-89-7080", "https://travel.rakuten.co.jp/HOTEL/192329/192329.html"),
  stay('kotohira-stay-23', "虎屋旅館", "香川県仲多度郡琴平町957-1", "0877-89-6746", "https://travel.rakuten.co.jp/HOTEL/188191/188191.html"),
  stay('kotohira-stay-24', "ＧＯＫＡＮ ＫＯＴＯＨＩＲＡ", "香川県仲多度郡琴平町279-3", null, "https://travel.rakuten.co.jp/HOTEL/196367/196367.html"),
  stay('kotohira-stay-25', "Ｈｏｓｔｅｌ コトヒラクラスカ", "香川県仲多度郡琴平町618", "0877-89-5901", "https://travel.rakuten.co.jp/HOTEL/192293/192293.html"),
  stay('kotohira-stay-26', "ＫＯＴＯＶｉｌｌａ", "香川県仲多度郡琴平町榎井791-20", "090-9770-8240", "https://travel.rakuten.co.jp/HOTEL/198320/198320.html"),
  stay('kotohira-stay-27', "Ｌｉｅｎ ｄｅ ｐｒｅｍｉｅｒ 讃", "香川県仲多度郡琴平町555-4", "070-4389-4145", "https://travel.rakuten.co.jp/HOTEL/197455/197455.html"),
  stay('kotohira-stay-28', "ＮＩＮＥ ＳＴＯＲＩＥＳ ＨＯＴＥＬ", "香川県仲多度郡琴平町213", "087-887-5036", "https://travel.rakuten.co.jp/HOTEL/196103/196103.html"),
  stay('kotohira-stay-29', "ＵＤＯＮ ｎａ ＨＯＴＥＬ 琴平", "香川県仲多度郡琴平町字川西796番1", "0877-89-8333", "https://travel.rakuten.co.jp/HOTEL/197370/197370.html"),
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
