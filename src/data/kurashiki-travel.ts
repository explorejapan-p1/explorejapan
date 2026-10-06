/**
 * Kurashiki City travel layer. No frozen pack.
 * Dining from 食べログ 倉敷市 (C33202)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0 honest.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {KURASHIKI, KURASHIKI_SIGHT_PHOTOS} from './kurashiki';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const KURASHIKI_TRAVEL_ACCESSED = '2026-09-11' as const;
export const KURASHIKI_TRAVEL_SOURCES = {
  home: 'https://www.city.kurashiki.okayama.jp/', hall: 'https://www.city.kurashiki.okayama.jp/cityinfo/facility/1000105/1008257.html',
  kanko: 'https://www.kurashiki-tabi.jp/',
  bikan: 'https://commons.wikimedia.org/wiki/File:Kurashiki_Bikan_historical_quarter_20190324-3.jpg',
  tabelogCity: 'https://tabelog.com/okayama/C33202/rstLst/'
} as const;

export const KURASHIKI_ONSEN_PACK_NAMES = ["天然温泉　阿智の湯　ドーミーイン倉敷 大浴場", "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島 大浴場"] as const;
export const KURASHIKI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(KURASHIKI_ONSEN_PACK_NAMES);
export const KURASHIKI_EXPERIENCE_PACK_NAMES = [] as const;
export const KURASHIKI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(KURASHIKI_EXPERIENCE_PACK_NAMES);
export const KURASHIKI_STAY_PACK_NAMES = [] as const;
export const KURASHIKI_STAY_PACK_SET: ReadonlySet<string> = new Set(KURASHIKI_STAY_PACK_NAMES);
export const KURASHIKI_SHOPPING_PACK_NAMES = [] as const;
export const KURASHIKI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(KURASHIKI_SHOPPING_PACK_NAMES);

export const KURASHIKI_SIGHT_PINS = ["倉敷美観地区", "大原美術館", "倉敷市役所", "倉敷アイビースクエア", "瀬戸大橋（鷲羽山）"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: KURASHIKI_TRAVEL_ACCESSED};
}
export const KURASHIKI_TRAVEL_STAY: readonly TravelRow[] = [
  stay("kurashiki-stay-001", "天然温泉　阿智の湯　ドーミーイン倉敷", "岡山県倉敷市阿知3-21-11", null, "https://travel.rakuten.co.jp/HOTEL/72042/72042.html"),
  stay("kurashiki-stay-002", "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島", "岡山県倉敷市水島西栄町10-8", null, "https://travel.rakuten.co.jp/HOTEL/80773/80773.html"),
  stay("kurashiki-stay-003", "グリーンリッチホテル倉敷駅前　人工温泉・二股湯の華", "岡山県倉敷市阿知3丁目14番5号", null, "https://travel.rakuten.co.jp/HOTEL/177110/177110.html"),
  stay("kurashiki-stay-004", "鷲羽温泉　鷲羽グランドホテル　備前屋甲子", "岡山県倉敷市下津井5-1-1", null, "https://travel.rakuten.co.jp/HOTEL/4722/4722.html"),
  stay("kurashiki-stay-005", "倉敷由加温泉ホテル　山桃花", "岡山県倉敷市児島由加3285番地", null, "https://travel.rakuten.co.jp/HOTEL/7135/7135.html"),
  stay("kurashiki-stay-006", "センチュリオンホテル＆スパ倉敷", "岡山県倉敷市阿知2-4-6", null, "https://travel.rakuten.co.jp/HOTEL/162970/162970.html"),
  stay("kurashiki-stay-007", "アパホテル〈倉敷駅前〉", "岡山県倉敷市阿知1-7-2", null, "https://travel.rakuten.co.jp/HOTEL/75332/75332.html"),
  stay("kurashiki-stay-008", "倉敷国際ホテル", "岡山県倉敷市中央1-1-44", null, "https://travel.rakuten.co.jp/HOTEL/7584/7584.html"),
  stay("kurashiki-stay-009", "倉敷ロイヤルアートホテル", "岡山県倉敷市阿知3-21-19", null, "https://travel.rakuten.co.jp/HOTEL/147499/147499.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: KURASHIKI_TRAVEL_ACCESSED};
}
export const KURASHIKI_TRAVEL_DINING: readonly TravelRow[] = [
  dining("kurashiki-dining-01", "ステーキのどん 倉敷店", "岡山県倉敷市老松町4丁目7-28", null, "https://tabelog.com/okayama/A3302/A330201/33001088/"),
  dining("kurashiki-dining-02", "倉敷個室居酒屋 藤と川蝉", "岡山県倉敷市鶴形1-1-20", null, "https://tabelog.com/okayama/A3302/A330201/33006578/"),
  dining("kurashiki-dining-03", "九州個室酒場 ザ･ゴエモン 倉敷駅前店", "岡山県倉敷市阿知2-8-8", null, "https://tabelog.com/okayama/A3302/A330201/33019513/"),
  dining("kurashiki-dining-04", "地鶏と魚と個室 ふじ子 倉敷駅前店", "岡山県倉敷市阿知2-18-3", null, "https://tabelog.com/okayama/A3302/A330201/33020701/"),
  dining("kurashiki-dining-05", "個室居酒屋 囲", "岡山県倉敷市阿知2-5-30", null, "https://tabelog.com/okayama/A3302/A330201/33015793/"),
  dining("kurashiki-dining-06", "炭火ビストロみとら", "岡山県倉敷市阿知2-11-7", null, "https://tabelog.com/okayama/A3302/A330201/33022016/"),
  dining("kurashiki-dining-07", "赤から 倉敷堀南店", "岡山県倉敷市堀南796-1", null, "https://tabelog.com/okayama/A3302/A330201/33014061/"),
  dining("kurashiki-dining-08", "又一別館", "岡山県倉敷市児島元浜町149", null, "https://tabelog.com/okayama/A3302/A330201/33002185/"),
  dining("kurashiki-dining-09", "自家製蕎麦 武野屋 中庄店", "岡山県倉敷市下庄473-3", null, "https://tabelog.com/okayama/A3302/A330201/33015960/"),
  dining("kurashiki-dining-10", "や台ずし 倉敷駅前町2号店", "岡山県倉敷市阿知2-8-1", null, "https://tabelog.com/okayama/A3302/A330201/33019400/"),
  dining("kurashiki-dining-11", "個室居酒屋 笑衛門 倉敷駅前店", "岡山県倉敷市阿知2-7-17", null, "https://tabelog.com/okayama/A3302/A330201/33014424/"),
  dining("kurashiki-dining-12", "炭焼酒場 一夜", "岡山県倉敷市阿知3-21-34", null, "https://tabelog.com/okayama/A3302/A330201/33019832/"),
  dining("kurashiki-dining-13", "古民家バル旧本藤邸", "岡山県倉敷市鶴形1-2-20", null, "https://tabelog.com/okayama/A3302/A330201/33012046/"),
  dining("kurashiki-dining-14", "うどんとお酒と彩り siki", "岡山県倉敷市鶴形1-4-4", null, "https://tabelog.com/okayama/A3302/A330201/33021628/"),
  dining("kurashiki-dining-15", "そじ坊 倉敷イオンモール店", "岡山県倉敷市水江1番地イオンモール倉敷１F", null, "https://tabelog.com/okayama/A3302/A330201/33006156/"),
  dining("kurashiki-dining-16", "吾照里 倉敷店", "岡山県倉敷市昭和2-1-69わしうビル1F", null, "https://tabelog.com/okayama/A3302/A330201/33021275/"),
];
export const KURASHIKI_DINING_NAME_SET: ReadonlySet<string> = new Set(KURASHIKI_TRAVEL_DINING.map((row) => row.name_ja));
export const KURASHIKI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const KURASHIKI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const KURASHIKI_TRAVEL_ALL: readonly TravelRow[] = [...KURASHIKI_TRAVEL_DINING, ...KURASHIKI_TRAVEL_STAY, ...KURASHIKI_TRAVEL_SHOPPING, ...KURASHIKI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isKurashikiOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KURASHIKI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isKurashikiExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KURASHIKI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isKurashikiStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKurashikiShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isKurashikiDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return KURASHIKI_DINING_NAME_SET.has(row.name_ja);
}
export function kurashikiSightPhoto(nameJa: string): MimaPlacePhoto | null { return KURASHIKI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankKurashikiSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isKurashikiOnsenPackRow(row) && !isKurashikiExperiencePackRow(row) && !isKurashikiStayPackRow(row) && !isKurashikiDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of KURASHIKI_SIGHT_PINS) {
    const hit = sights.find((row) => row.name_ja === pin);
    if (!hit) continue; pinned.push(hit); used.add(hit.id); usedNames.add(hit.name_ja);
  }
  const restTourism: T[] = []; const restCultural: T[] = [];
  for (const row of sights) {
    if (used.has(row.id) || usedNames.has(row.name_ja)) continue;
    used.add(row.id); usedNames.add(row.name_ja);
    if (row.category === 'tourism') restTourism.push(row); else restCultural.push(row);
  }
  return [...pinned, ...restTourism, ...restCultural];
}
export function kurashikiSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '倉敷市 飲食案内' : 'Kurashiki City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '倉敷市 宿泊案内' : 'Kurashiki City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '倉敷市 買物案内' : 'Kurashiki City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function kurashikiTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isKurashikiOnsenPackRow(row)) return 'onsen';
  if (isKurashikiExperiencePackRow(row)) return 'experience';
  if (isKurashikiStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isKurashikiDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function kurashikiPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isKurashikiOnsenPackRow(row) && !isKurashikiExperiencePackRow(row) && !isKurashikiStayPackRow(row) && !isKurashikiDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isKurashikiOnsenPackRow(row);
  if (filter === 'experience') return isKurashikiExperiencePackRow(row);
  if (filter === 'stay') return isKurashikiStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveKurashikiFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const KURASHIKI_HALL = KURASHIKI.hall;
