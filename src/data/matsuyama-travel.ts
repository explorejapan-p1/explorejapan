/**
 * Matsuyama City travel layer. No frozen pack.
 * Dining from 食べログ 松山市 (C38201). Stay: Candeo Hotels Matsuyama Okaido Rakuten room (ワイドデスクダブル). Onsen: 道後温泉本館. Experience: 坊っちゃん列車.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {MATSUYAMA, MATSUYAMA_SIGHT_PHOTOS} from './matsuyama';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const MATSUYAMA_TRAVEL_ACCESSED = '2026-09-09' as const;
export const MATSUYAMA_TRAVEL_SOURCES = {
  home: 'https://www.city.matsuyama.ehime.jp/', hall: 'https://www.city.matsuyama.ehime.jp/shisetsu/shinos/annai.html',
  kankou: 'https://matsuyama-sightseeing.com/',
  castle: 'https://ja.wikipedia.org/wiki/%E6%9D%BE%E5%B1%B1%E5%9F%8E_(%E4%BC%8A%E4%BA%88)',
  tabelogCity: 'https://tabelog.com/ehime/C38201/rstLst/',
  candeo: 'https://travel.rakuten.co.jp/HOTEL/148952/148952.html'
} as const;

export const MATSUYAMA_ONSEN_PACK_NAMES = ["道後温泉本館", "道後温泉 道後グランドホテル 大浴場", "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜 ゆのね", "道後温泉 道後舘 大浴場", "チェックイン松山 大浴場", "道後温泉 ふなや 大浴場", "道後温泉 大和屋本店 露天風呂", "道後温泉 ホテル椿館 露天風呂", "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯― 露天風呂", "道後温泉 花ゆづき 天望露天風呂", "道後温泉 茶玻瑠 露天風呂", "天然温泉 松山ニューグランドホテル 大浴場", "道後温泉 オールドイングランド 道後山の手ホテル 大浴場", "奥道後 壱湯の守（いちゆのもり） 岩湯", "ホテルＮｏ．１松山 大浴場", "東道後のそらともり 大浴場", "たかのこのホテル 露天風呂", "大江戸温泉物語 道後 露天風呂", "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道 露天風呂", "リブマックスリゾート奥道後 大浴場", "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場", "道後温泉 八千代 大浴場", "道後温泉 ホテル古湧園 遥 露天風呂", "道後ｈａｋｕｒｏ 大浴場", "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接） 大浴場"] as const;
export const MATSUYAMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(MATSUYAMA_ONSEN_PACK_NAMES);
export const MATSUYAMA_EXPERIENCE_PACK_NAMES = ['坊っちゃん列車'] as const;
export const MATSUYAMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(MATSUYAMA_EXPERIENCE_PACK_NAMES);
export const MATSUYAMA_STAY_PACK_NAMES = [] as const;
export const MATSUYAMA_STAY_PACK_SET: ReadonlySet<string> = new Set(MATSUYAMA_STAY_PACK_NAMES);
export const MATSUYAMA_SHOPPING_PACK_NAMES = [] as const;
export const MATSUYAMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(MATSUYAMA_SHOPPING_PACK_NAMES);

export const MATSUYAMA_SIGHT_PINS = ['松山城','石手寺','伊佐爾波神社','坂の上の雲ミュージアム','湯築城跡','松山総合公園'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: MATSUYAMA_TRAVEL_ACCESSED};
}
export const MATSUYAMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay('matsuyama-stay-001', "道後温泉 道後グランドホテル", "愛媛県松山市道後湯之町16-21", null, "https://travel.rakuten.co.jp/HOTEL/6001/6001.html"),
  stay('matsuyama-stay-002', "ホテルマイステイズ松山", "愛媛県松山市大手町1-10-10", null, "https://travel.rakuten.co.jp/HOTEL/6276/6276.html"),
  stay('matsuyama-stay-003', "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜", "愛媛県松山市道後姫塚100", null, "https://travel.rakuten.co.jp/HOTEL/8384/8384.html"),
  stay('matsuyama-stay-004', "道後温泉 道後舘", "愛媛県松山市道後多幸町7-26", null, "https://travel.rakuten.co.jp/HOTEL/10788/10788.html"),
  stay('matsuyama-stay-005', "チェックイン松山", "愛媛県松山市三番町2-7-3", null, "https://travel.rakuten.co.jp/HOTEL/11211/11211.html"),
  stay('matsuyama-stay-006', "道後温泉 ふなや", "愛媛県松山市道後湯之町1-33", null, "https://travel.rakuten.co.jp/HOTEL/11332/11332.html"),
  stay('matsuyama-stay-007', "道後温泉 大和屋本店", "愛媛県松山市道後湯之町20-8", null, "https://travel.rakuten.co.jp/HOTEL/13429/13429.html"),
  stay('matsuyama-stay-008', "道後温泉 ホテル椿館", "愛媛県松山市道後鷺谷町5-32", null, "https://travel.rakuten.co.jp/HOTEL/13653/13653.html"),
  stay('matsuyama-stay-009', "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯―", "愛媛県松山市平和通3-1-15", null, "https://travel.rakuten.co.jp/HOTEL/15420/15420.html"),
  stay('matsuyama-stay-010', "道後温泉 花ゆづき", "愛媛県松山市道後湯月町4-16", null, "https://travel.rakuten.co.jp/HOTEL/16719/16719.html"),
  stay('matsuyama-stay-011', "道後温泉 茶玻瑠", "愛媛県松山市道後湯月町4-4", null, "https://travel.rakuten.co.jp/HOTEL/17668/17668.html"),
  stay('matsuyama-stay-012', "天然温泉 松山ニューグランドホテル", "愛媛県松山市二番町３丁目４－１０", null, "https://travel.rakuten.co.jp/HOTEL/19414/19414.html"),
  stay('matsuyama-stay-013', "道後温泉 オールドイングランド 道後山の手ホテル", "愛媛県松山市道後鷺谷町1-13", null, "https://travel.rakuten.co.jp/HOTEL/20469/20469.html"),
  stay('matsuyama-stay-014', "奥道後 壱湯の守（いちゆのもり）", "愛媛県松山市末町267", null, "https://travel.rakuten.co.jp/HOTEL/27716/27716.html"),
  stay('matsuyama-stay-015', "ホテルＮｏ．１松山", "愛媛県松山市千舟町2-7-3", null, "https://travel.rakuten.co.jp/HOTEL/43995/43995.html"),
  stay('matsuyama-stay-016', "東道後のそらともり", "愛媛県松山市南久米町3-1", null, "https://travel.rakuten.co.jp/HOTEL/80639/80639.html"),
  stay('matsuyama-stay-017', "ホテル道後やや", "愛媛県松山市道後多幸町6-1", null, "https://travel.rakuten.co.jp/HOTEL/108156/108156.html"),
  stay('matsuyama-stay-018', "たかのこのホテル", "愛媛県松山市鷹子町737-2", null, "https://travel.rakuten.co.jp/HOTEL/140784/140784.html"),
  stay('matsuyama-stay-019', "大江戸温泉物語 道後", "愛媛県松山市道後姫塚112-1", null, "https://travel.rakuten.co.jp/HOTEL/147473/147473.html"),
  stay('matsuyama-stay-020', "ネストホテル松山", "愛媛県松山市二番町1-7-1", null, "https://travel.rakuten.co.jp/HOTEL/147840/147840.html"),
  stay('matsuyama-stay-021', "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道", "愛媛県松山市大街道2-5-12", null, "https://travel.rakuten.co.jp/HOTEL/148952/148952.html"),
  stay('matsuyama-stay-022', "ダイワロイネットホテル松山", "愛媛県松山市一番町2-6-5", null, "https://travel.rakuten.co.jp/HOTEL/151213/151213.html"),
  stay('matsuyama-stay-023', "リブマックスリゾート奥道後", "愛媛県松山市末町300-1", null, "https://travel.rakuten.co.jp/HOTEL/158312/158312.html"),
  stay('matsuyama-stay-024', "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ）", "愛媛県松山市大街道2-6-5", null, "https://travel.rakuten.co.jp/HOTEL/165105/165105.html"),
  stay('matsuyama-stay-025', "道後温泉 八千代", "愛媛県松山市道後多幸町6-34", null, "https://travel.rakuten.co.jp/HOTEL/166206/166206.html"),
  stay('matsuyama-stay-026', "道後温泉 ホテル古湧園 遥", "愛媛県松山市道後鷺谷町1-1", null, "https://travel.rakuten.co.jp/HOTEL/176808/176808.html"),
  stay('matsuyama-stay-027', "道後ｈａｋｕｒｏ", "愛媛県松山市道後鷺谷町3-1", null, "https://travel.rakuten.co.jp/HOTEL/179083/179083.html"),
  stay('matsuyama-stay-028', "コンフォートホテル松山", "愛媛県松山市花園町3-18", null, "https://travel.rakuten.co.jp/HOTEL/180563/180563.html"),
  stay('matsuyama-stay-029', "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）", "愛媛県松山市湊町5-2-2", null, "https://travel.rakuten.co.jp/HOTEL/183045/183045.html"),
  stay('matsuyama-stay-030', "日和ホテル松山", "愛媛県松山市一番町３丁目３－１", null, "https://travel.rakuten.co.jp/HOTEL/198319/198319.html"),
  stay('matsuyama-stay-031', "アパホテル〈松山市駅前〉（２０２６年７月ＯＰＥＮ）", "愛媛県松山市湊町6-3-2", null, "https://travel.rakuten.co.jp/HOTEL/199177/199177.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: MATSUYAMA_TRAVEL_ACCESSED};
}
export const MATSUYAMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining('matsuyama-dining-01', 'くるますし', '愛媛県松山市一番町1-6-9', '089-932-3689', 'https://tabelog.com/ehime/A3801/A380101/38002524/'),
  dining('matsuyama-dining-02', '鮨 いの', '愛媛県松山市二番町1-10-9 MITUWA320 3F', '089-948-9986', 'https://tabelog.com/ehime/A3801/A380101/38010409/'),
  dining('matsuyama-dining-03', '道後 海舟', '愛媛県松山市道後湯乃町15-27', '089-915-6600', 'https://tabelog.com/ehime/A3801/A380101/38013243/'),
  dining('matsuyama-dining-04', '名前のないイタリア料理店', '愛媛県松山市千舟町4-1-4 ヒラキビル 1F', '089-943-3003', 'https://tabelog.com/ehime/A3801/A380101/38009262/'),
  dining('matsuyama-dining-05', '馳走屋河の', '愛媛県松山市二番町2-8-6 グリーングラスビル 2F', '089-931-7322', 'https://tabelog.com/ehime/A3801/A380101/38004254/'),
  dining('matsuyama-dining-06', '鮨かわなか', '愛媛県松山市一番町1-11-9', '089-943-3665', 'https://tabelog.com/ehime/A3801/A380101/38013098/'),
  dining('matsuyama-dining-07', 'Scino', '愛媛県松山市千舟町2-7-74 大森ビル 1F', '089-909-3244', 'https://tabelog.com/ehime/A3801/A380101/38015208/'),
  dining('matsuyama-dining-08', '洋食屋 Shii', '愛媛県松山市三番町5-3-8 フレッシュリーブス 404', '090-2898-5343', 'https://tabelog.com/ehime/A3801/A380101/38012016/'),
  dining('matsuyama-dining-09', '味暦 正生', '愛媛県松山市湊町6-4-14', '089-943-8355', 'https://tabelog.com/ehime/A3801/A380101/38000637/'),
  dining('matsuyama-dining-10', '炭心', '愛媛県松山市二番町2-1-6 ささやビル１F', '089-986-6603', 'https://tabelog.com/ehime/A3801/A380101/38001214/'),
  dining('matsuyama-dining-11', '上海点心 豫園', '愛媛県松山市朝生田町5-8-15', '089-934-7311', 'https://tabelog.com/ehime/A3801/A380101/38000161/'),
  dining('matsuyama-dining-12', '鍋焼うどん アサヒ', '愛媛県松山市湊町3-10-11', '089-921-6470', 'https://tabelog.com/ehime/A3801/A380101/38000348/'),
  dining('matsuyama-dining-13', 'ラ・セーラ', '愛媛県松山市千舟町3-2-4 鴻池ビル 2F', '089-934-6008', 'https://tabelog.com/ehime/A3801/A380101/38000678/'),
  dining('matsuyama-dining-14', 'さかな工房　丸万', '愛媛県松山市祇園町3-21', '089-921-7242', 'https://tabelog.com/ehime/A3801/A380101/38005974/'),
  dining('matsuyama-dining-15', 'ことり', '愛媛県松山市湊町3-7-2', '089-921-3003', 'https://tabelog.com/ehime/A3801/A380101/38000037/'),
  dining('matsuyama-dining-16', '霧の森菓子工房 松山店', '愛媛県松山市大街道3-3-1', '089-934-5567', 'https://tabelog.com/ehime/A3801/A380101/38000209/'),
];

export const MATSUYAMA_DINING_NAME_SET: ReadonlySet<string> = new Set(MATSUYAMA_TRAVEL_DINING.map((row) => row.name_ja));
export const MATSUYAMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const MATSUYAMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const MATSUYAMA_TRAVEL_ALL: readonly TravelRow[] = [...MATSUYAMA_TRAVEL_DINING, ...MATSUYAMA_TRAVEL_STAY, ...MATSUYAMA_TRAVEL_SHOPPING, ...MATSUYAMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isMatsuyamaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MATSUYAMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isMatsuyamaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MATSUYAMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isMatsuyamaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMatsuyamaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isMatsuyamaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return MATSUYAMA_DINING_NAME_SET.has(row.name_ja);
}
export function matsuyamaSightPhoto(nameJa: string): MimaPlacePhoto | null { return MATSUYAMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankMatsuyamaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isMatsuyamaOnsenPackRow(row) && !isMatsuyamaExperiencePackRow(row) && !isMatsuyamaStayPackRow(row) && !isMatsuyamaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of MATSUYAMA_SIGHT_PINS) {
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
export function matsuyamaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '松山市 飲食案内' : 'Matsuyama City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '松山市 宿泊案内' : 'Matsuyama City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '松山市 買物案内' : 'Matsuyama City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function matsuyamaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isMatsuyamaOnsenPackRow(row)) return 'onsen';
  if (isMatsuyamaExperiencePackRow(row)) return 'experience';
  if (isMatsuyamaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isMatsuyamaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function matsuyamaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isMatsuyamaOnsenPackRow(row) && !isMatsuyamaExperiencePackRow(row) && !isMatsuyamaStayPackRow(row) && !isMatsuyamaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isMatsuyamaOnsenPackRow(row);
  if (filter === 'experience') return isMatsuyamaExperiencePackRow(row);
  if (filter === 'stay') return isMatsuyamaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveMatsuyamaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const MATSUYAMA_HALL = MATSUYAMA.hall;
