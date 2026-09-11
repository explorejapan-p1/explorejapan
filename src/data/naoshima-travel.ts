/**
 * Naoshima Town travel layer. No frozen pack.
 * Dining from 食べログ 直島町 (C37364) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル room images (出典). Onsen pack uses distinct 大浴場 names + bath stills.
 * Shopping / commerce: honest 0. Experience densified when attributable.
 * Do not invent. Do not copy Tokushima / other-Kagawa TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {NAOSHIMA, NAOSHIMA_SIGHT_PHOTOS} from './naoshima';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const NAOSHIMA_TRAVEL_ACCESSED = '2026-09-09' as const;

export const NAOSHIMA_TRAVEL_SOURCES = {
  home: 'https://www.town.naoshima.lg.jp/',
  hall: 'https://www.town.naoshima.lg.jp/about/shisetsu/townhall.html',
  kankou: 'https://naoshima.net/',
  benesse: 'https://benesse-artsite.jp/',
  tabelogCity: 'https://tabelog.com/kagawa/C37364/rstLst/',
  benesseStay: 'https://travel.rakuten.co.jp/HOTEL/107793/107793.html',
  tsutsuji: 'https://travel.rakuten.co.jp/HOTEL/111253/111253.html'
} as const;

export const NAOSHIMA_ONSEN_PACK_NAMES = ["直島ふるさと海の家 つつじ荘 貸切風呂"] as const;
export const NAOSHIMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(NAOSHIMA_ONSEN_PACK_NAMES);
export const NAOSHIMA_EXPERIENCE_PACK_NAMES = ['直島銭湯「I♥湯」'] as const;
export const NAOSHIMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(NAOSHIMA_EXPERIENCE_PACK_NAMES);
export const NAOSHIMA_STAY_PACK_NAMES = [] as const;
export const NAOSHIMA_STAY_PACK_SET: ReadonlySet<string> = new Set(NAOSHIMA_STAY_PACK_NAMES);
export const NAOSHIMA_SHOPPING_PACK_NAMES = [] as const;
export const NAOSHIMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(NAOSHIMA_SHOPPING_PACK_NAMES);

export const NAOSHIMA_SIGHT_PINS = [
  '草間彌生「南瓜」',
  '宮浦港',
  '地中美術館',
  'ベネッセハウス ミュージアム',
  '李禹煥美術館',
  '直島パヴィリオン',
  '家プロジェクト 護王神社',
  '琴弾地海水浴場',
  'ANDO MUSEUM'
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
    accessed: NAOSHIMA_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room 出典 first. */
export const NAOSHIMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('naoshima-stay-001', "はなみずき", "香川県香川郡直島町一円3652-3", null, "https://travel.rakuten.co.jp/HOTEL/177776/177776.html"),
  stay('naoshima-stay-002', "ほっこり民宿 清ｓａｙａ", "香川県香川郡直島町2310-168", null, "https://travel.rakuten.co.jp/HOTEL/151329/151329.html"),
  stay('naoshima-stay-003', "やどセブンビーチ ＾", "香川県香川郡直島町2310-19　ｙａｄｏ　Ｓｅｖｅｎ　Ｂｅａｃｈ", null, "https://travel.rakuten.co.jp/HOTEL/169438/169438.html"),
  stay('naoshima-stay-004', "よこんぼ２ ペットと泊まれる宿 ＾", "香川県香川郡直島町3756-4　よこんぼ2　ペットと泊まれる宿", null, "https://travel.rakuten.co.jp/HOTEL/186554/186554.html"),
  stay('naoshima-stay-005', "クイントハウス直島", "香川県香川郡直島町2255", null, "https://travel.rakuten.co.jp/HOTEL/184653/184653.html"),
  stay('naoshima-stay-006', "ゲストハウス 島宿あいすなお", "香川県香川郡直島町765", null, "https://travel.rakuten.co.jp/HOTEL/151331/151331.html"),
  stay('naoshima-stay-007', "ゲストハウス ＰＬＥＮＯ ＾", "香川県香川郡直島町890-3", null, "https://travel.rakuten.co.jp/HOTEL/185909/185909.html"),
  stay('naoshima-stay-008', "ベネッセハウス", "香川県香川郡直島町琴弾地", null, "https://travel.rakuten.co.jp/HOTEL/107793/107793.html"),
  stay('naoshima-stay-009', "マローラおばさんの家（やどセブンビーチ別館） ＾", "香川県香川郡直島町2310-19　Ｍｒｓ．　Ｍａｒｏｕｌｌａ＇ｓ　ＨＯＵＳＥ", null, "https://travel.rakuten.co.jp/HOTEL/169439/169439.html"),
  stay('naoshima-stay-010', "民宿 おやじの海", "香川県香川郡直島町本村774", null, "https://travel.rakuten.co.jp/HOTEL/109394/109394.html"),
  stay('naoshima-stay-011', "民宿 西村屋", "香川県香川郡直島町746", null, "https://travel.rakuten.co.jp/HOTEL/168636/168636.html"),
  stay('naoshima-stay-012', "民宿シーズン", "香川県香川郡直島町84", null, "https://travel.rakuten.co.jp/HOTEL/153636/153636.html"),
  stay('naoshima-stay-013', "民宿竹の家", "香川県香川郡直島町1119-1", null, "https://travel.rakuten.co.jp/HOTEL/151145/151145.html"),
  stay('naoshima-stay-014', "直島 海辺の宿 波へい", "香川県香川郡直島町39-10", null, "https://travel.rakuten.co.jp/HOTEL/153635/153635.html"),
  stay('naoshima-stay-015', "直島ふるさと海の家 つつじ荘", "香川県香川郡直島町352-1", null, "https://travel.rakuten.co.jp/HOTEL/111253/111253.html"),
  stay('naoshima-stay-016', "直島宿泊所めん宿 浦 ＾", "香川県香川郡直島町4780-7", null, "https://travel.rakuten.co.jp/HOTEL/185498/185498.html"),
  stay('naoshima-stay-017', "Ｅｐｉｓｏｄｅ１", "香川県香川郡直島町4780-13", null, "https://travel.rakuten.co.jp/HOTEL/141197/141197.html"),
  stay('naoshima-stay-018', "ＧＵＥＳＴＨＯＵＳＥ ＢａｍｂｏｏＶｉｌｌａｇｅ", "香川県香川郡直島町3299-2", null, "https://travel.rakuten.co.jp/HOTEL/160872/160872.html"),
  stay('naoshima-stay-019', "ＧｕｅｓｔＨｏｕｓｅ海っ子", "香川県香川郡直島町4777-8", null, "https://travel.rakuten.co.jp/HOTEL/151328/151328.html"),
  stay('naoshima-stay-020', "Ｌａ Ｃｕｒａｃｉｏｎ（ラ・クラシオン）", "香川県香川郡直島町積浦4780-8", null, "https://travel.rakuten.co.jp/HOTEL/158374/158374.html"),
  stay('naoshima-stay-021', "ＭＹ ＬＯＤＧＥ ｎａｏｓｈｉｍａ", "香川県香川郡直島町3718-56", null, "https://travel.rakuten.co.jp/HOTEL/179899/179899.html"),
  stay('naoshima-stay-022', "ＳＰＡＲＫＹ’ｓ Ｈｏｕｓｅ", "香川県香川郡直島町家の上１９１５", null, "https://travel.rakuten.co.jp/HOTEL/167287/167287.html"),
  stay('naoshima-stay-023', "Ｙｅｌｌｏｗ Ｈｏｕｓｅ", "香川県香川郡直島町4777-11", null, "https://travel.rakuten.co.jp/HOTEL/188473/188473.html"),
  stay('naoshima-stay-024', "ｋｏｋｏｃｈｉ", "香川県香川郡直島町3698-6", null, "https://travel.rakuten.co.jp/HOTEL/178219/178219.html"),
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
    accessed: NAOSHIMA_TRAVEL_ACCESSED
  };
}

export const NAOSHIMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('naoshima-dining-01', '地中カフェ', '香川県香川郡直島町3449-1 地中美術館内', '087-892-3755', 'https://tabelog.com/kagawa/A3701/A370103/37000602/'),
  dining('naoshima-dining-02', 'カフェ おうぎや', '香川県香川郡直島町宮浦2249-40 「海の駅なおしま」内', '090-3189-0471', 'https://tabelog.com/kagawa/A3701/A370103/37001630/'),
  dining('naoshima-dining-03', '直島パスタ REGALO', '香川県香川郡直島町518-2', '090-7198-5999', 'https://tabelog.com/kagawa/A3701/A370103/37012730/'),
  dining('naoshima-dining-04', 'マイマイ', '香川県香川郡直島町本村750', '090-8286-7039', 'https://tabelog.com/kagawa/A3701/A370103/37005337/'),
  dining('naoshima-dining-05', 'EAT LOCAL 直島食堂', '香川県香川郡直島町352-1 直島町ふるさと海の家 つつじ荘', '087-892-2838', 'https://tabelog.com/kagawa/A3701/A370103/37013834/'),
  dining('naoshima-dining-06', 'カフェサロン 中奥', '香川県香川郡直島町本村中奥1167', '087-892-3887', 'https://tabelog.com/kagawa/A3701/A370103/37005671/'),
  dining('naoshima-dining-07', 'Sarrasin', '香川県香川郡直島町695-1', null, 'https://tabelog.com/kagawa/A3701/A370103/37014503/'),
  dining('naoshima-dining-08', 'ミカヅキショウテン', '香川県香川郡直島町2291-5', '087-813-1322', 'https://tabelog.com/kagawa/A3701/A370103/37010090/'),
  dining('naoshima-dining-09', 'UMI NO STAND つつじ荘', '香川県香川郡直島町352-1', '087-892-2838', 'https://tabelog.com/kagawa/A3701/A370103/37006497/'),
  dining('naoshima-dining-10', '&CAFE', '香川県香川郡直島町3299-73', null, 'https://tabelog.com/kagawa/A3701/A370103/37014452/'),
  dining('naoshima-dining-11', 'よもぎ亭', '香川県香川郡直島町本村709', null, 'https://tabelog.com/kagawa/A3701/A370103/37012671/'),
  dining('naoshima-dining-12', 'おかしとコーヒー', '香川県香川郡直島町710', null, 'https://tabelog.com/kagawa/A3701/A370103/37012672/'),
  dining('naoshima-dining-13', '古小路', '香川県香川郡直島町844-2', '090-7975-1427', 'https://tabelog.com/kagawa/A3701/A370103/37014320/'),
  dining('naoshima-dining-14', '海の見えるお食事処 なごみ', '香川県香川郡直島町3694-1 直島町福祉センター内', '087-892-2458', 'https://tabelog.com/kagawa/A3701/A370103/37006494/'),
];

export const NAOSHIMA_DINING_NAME_SET: ReadonlySet<string> = new Set(
  NAOSHIMA_TRAVEL_DINING.map((row) => row.name_ja)
);

export const NAOSHIMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const NAOSHIMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const NAOSHIMA_TRAVEL_ALL: readonly TravelRow[] = [
  ...NAOSHIMA_TRAVEL_DINING,
  ...NAOSHIMA_TRAVEL_STAY,
  ...NAOSHIMA_TRAVEL_SHOPPING,
  ...NAOSHIMA_TRAVEL_COMMERCE
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

export function isNaoshimaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NAOSHIMA_ONSEN_PACK_SET.has(row.name_ja);
}

export function isNaoshimaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NAOSHIMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isNaoshimaStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isNaoshimaShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isNaoshimaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return NAOSHIMA_DINING_NAME_SET.has(row.name_ja);
}

export function naoshimaSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return NAOSHIMA_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankNaoshimaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isNaoshimaOnsenPackRow(row) &&
      !isNaoshimaExperiencePackRow(row) &&
      !isNaoshimaStayPackRow(row) &&
      !isNaoshimaDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of NAOSHIMA_SIGHT_PINS) {
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

export function naoshimaSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '直島町 飲食案内' : 'Naoshima Town dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '直島町 宿泊案内' : 'Naoshima Town lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function naoshimaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isNaoshimaOnsenPackRow(row)) return 'onsen';
  if (isNaoshimaExperiencePackRow(row)) return 'experience';
  if (isNaoshimaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isNaoshimaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function naoshimaPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isNaoshimaOnsenPackRow(row) &&
      !isNaoshimaExperiencePackRow(row) &&
      !isNaoshimaStayPackRow(row) &&
      !isNaoshimaDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isNaoshimaOnsenPackRow(row);
  if (filter === 'experience') return isNaoshimaExperiencePackRow(row);
  if (filter === 'stay') return isNaoshimaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveNaoshimaFilter(c: string | undefined, q: string): FilterId {
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

export const NAOSHIMA_HALL = NAOSHIMA.hall;
