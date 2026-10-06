/**
 * Imabari City travel layer. No frozen pack.
 * Dining from 食べログ 今治市 (C38202)×16 with dish JPGs. Stay: Rakuten 部屋 stills×27. Onsen: facility bath stills×22 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {IMABARI, IMABARI_SIGHT_PHOTOS} from './imabari';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const IMABARI_TRAVEL_ACCESSED = '2026-09-09' as const;
export const IMABARI_TRAVEL_SOURCES = {
  home: 'https://www.city.imabari.ehime.jp/', hall: 'https://www.city.imabari.ehime.jp/profile/',
  kanko: 'https://www.city.imabari.ehime.jp/kanko/',
  castle: 'https://ja.wikipedia.org/wiki/%E4%BB%8A%E6%B2%BB%E5%9F%8E',
  tabelogCity: 'https://tabelog.com/ehime/C38202/rstLst/',
  kikusui: 'https://travel.rakuten.co.jp/HOTEL/10758/10758.html'
} as const;

export const IMABARI_ONSEN_PACK_NAMES = ["今治国際ホテル 今治温泉", "Ｔａｂｉｓｔ カドヤ別荘 美肌温泉", "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿 大浴場", "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ） 大浴場", "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ） 貸切風呂", "ホテル七福 展望風呂", "鈍川温泉 美賀登（みかど） 大浴場", "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉ 大浴場", "米長旅館 大浴場", "大潮荘 大浴場", "ビジネス旅館 笑福 大浴場", "鈍川温泉 皆楽荘 温泉", "門田旅館 鈍川温泉", "結乃屋ＭＩＴＳＵＢＡＣＨＩ 大浴場", "サウナ＆スパ・ホテル 喜助の宿 今治駅前店 大浴場", "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク） 大浴場", "天然温泉 海道の湯 スーパーホテル今治 今治の名湯", "ＪＲクレメントイン今治 喜助の湯", "しまなみプライムホテル今治 大浴場", "天然温泉「旅人の湯」ホテルルートイン今治 大浴場", "今治ステーションホテル 人工温泉", "海宿千年松 満天の湯"] as const;
export const IMABARI_ONSEN_PACK_SET: ReadonlySet<string> = new Set(IMABARI_ONSEN_PACK_NAMES);
export const IMABARI_EXPERIENCE_PACK_NAMES = [] as const;
export const IMABARI_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(IMABARI_EXPERIENCE_PACK_NAMES);
export const IMABARI_STAY_PACK_NAMES = [] as const;
export const IMABARI_STAY_PACK_SET: ReadonlySet<string> = new Set(IMABARI_STAY_PACK_NAMES);
export const IMABARI_SHOPPING_PACK_NAMES = [] as const;
export const IMABARI_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(IMABARI_SHOPPING_PACK_NAMES);

export const IMABARI_SIGHT_PINS = ['今治城','来島海峡大橋','タオル美術館ICHIHIRO','大山祇神社','亀老山'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: IMABARI_TRAVEL_ACCESSED};
}
export const IMABARI_TRAVEL_STAY: readonly TravelRow[] = [
  stay('imabari-stay-001', "今治国際ホテル", "愛媛県今治市旭町2-3-4", null, "https://travel.rakuten.co.jp/HOTEL/1036/1036.html"),
  stay('imabari-stay-002', "今治アーバンホテル", "愛媛県今治市北宝来町1-5-28(本館） 北宝来町1-3-2（新館）", null, "https://travel.rakuten.co.jp/HOTEL/1624/1624.html"),
  stay('imabari-stay-003', "Ｔａｂｉｓｔ カドヤ別荘", "愛媛県今治市玉川町鈍川甲280", null, "https://travel.rakuten.co.jp/HOTEL/4738/4738.html"),
  stay('imabari-stay-004', "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿", "愛媛県今治市湯ノ浦30番地", null, "https://travel.rakuten.co.jp/HOTEL/7249/7249.html"),
  stay('imabari-stay-005', "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ）", "愛媛県今治市北宝来町1-5-9", null, "https://travel.rakuten.co.jp/HOTEL/9047/9047.html"),
  stay('imabari-stay-006', "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ）", "愛媛県今治市中浜町1-2-5", null, "https://travel.rakuten.co.jp/HOTEL/10758/10758.html"),
  stay('imabari-stay-007', "ホテル七福", "愛媛県今治市片原町2-1-21", null, "https://travel.rakuten.co.jp/HOTEL/12613/12613.html"),
  stay('imabari-stay-008', "今治プラザホテル", "愛媛県今治市別宮町1-3-5", null, "https://travel.rakuten.co.jp/HOTEL/13722/13722.html"),
  stay('imabari-stay-009', "鈍川温泉 美賀登（みかど）", "愛媛県今治市玉川町鈍川庚773-1", null, "https://travel.rakuten.co.jp/HOTEL/13961/13961.html"),
  stay('imabari-stay-010', "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉ", "愛媛県今治市中寺239-1", null, "https://travel.rakuten.co.jp/HOTEL/18384/18384.html"),
  stay('imabari-stay-011', "米長旅館", "愛媛県今治市常盤町1-1-4", null, "https://travel.rakuten.co.jp/HOTEL/28080/28080.html"),
  stay('imabari-stay-012', "大潮荘", "愛媛県今治市小浦町2-5-1", null, "https://travel.rakuten.co.jp/HOTEL/69341/69341.html"),
  stay('imabari-stay-013', "ビジネス旅館 笑福", "愛媛県今治市風早町2-1-16", null, "https://travel.rakuten.co.jp/HOTEL/84931/84931.html"),
  stay('imabari-stay-014', "門田旅館", "愛媛県今治市玉川町鈍川庚772-5", null, "https://travel.rakuten.co.jp/HOTEL/141390/141390.html"),
  stay('imabari-stay-015', "ゲストハウスオレンジの風 ＾", "愛媛県今治市共栄町3-3-20　Ｇｕｅｓｔ　Ｈｏｕｓｅ　Ｏｒａｎｇｅ　ｎｏ　Ｋａｚｅ", null, "https://travel.rakuten.co.jp/HOTEL/169574/169574.html"),
  stay('imabari-stay-016', "結乃屋ＭＩＴＳＵＢＡＣＨＩ", "愛媛県今治市吉海町南浦825-1", null, "https://travel.rakuten.co.jp/HOTEL/178305/178305.html"),
  stay('imabari-stay-017', "サウナ＆スパ・ホテル 喜助の宿 今治駅前店", "愛媛県今治市中日吉町1-2-30", null, "https://travel.rakuten.co.jp/HOTEL/179035/179035.html"),
  stay('imabari-stay-018', "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク）", "愛媛県今治市馬島1006", null, "https://travel.rakuten.co.jp/HOTEL/180620/180620.html"),
  stay('imabari-stay-019', "天然温泉 海道の湯 スーパーホテル今治", "愛媛県今治市松本町4-6-10", null, "https://travel.rakuten.co.jp/HOTEL/182375/182375.html"),
  stay('imabari-stay-020', "ＪＲクレメントイン今治", "愛媛県今治市北宝来町2丁目甲773-9", null, "https://travel.rakuten.co.jp/HOTEL/182564/182564.html"),
  stay('imabari-stay-021', "今治大成ホテル", "愛媛県今治市風早町4-88-1", null, "https://travel.rakuten.co.jp/HOTEL/189285/189285.html"),
  stay('imabari-stay-022', "レアレアリゾートヴィラかもいけ／民泊", "愛媛県今治市大西町九王乙325-38　ＬｅａＬｅａ　Ｒｅｓｏｒｔ　Ｖｉｌｌａ　Ｋａｍｏｉｋｅ", null, "https://travel.rakuten.co.jp/HOTEL/190149/190149.html"),
  stay('imabari-stay-023', "しまなみプライムホテル今治", "愛媛県今治市常盤町4-6-10", null, "https://travel.rakuten.co.jp/HOTEL/191553/191553.html"),
  stay('imabari-stay-024', "天然温泉「旅人の湯」ホテルルートイン今治", "愛媛県今治市馬越町3-3-15", null, "https://travel.rakuten.co.jp/HOTEL/191656/191656.html"),
  stay('imabari-stay-025', "今治ステーションホテル", "愛媛県今治市北宝来町2-2-23", null, "https://travel.rakuten.co.jp/HOTEL/191781/191781.html"),
  stay('imabari-stay-026', "海宿千年松", "愛媛県今治市吉海町名駒25", null, "https://travel.rakuten.co.jp/HOTEL/196522/196522.html"),
  stay('imabari-stay-027', "ＨＯＴＥＬ ＳＴＡＹ＋", "愛媛県今治市常盤町3-4-5", null, "https://travel.rakuten.co.jp/HOTEL/198931/198931.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: IMABARI_TRAVEL_ACCESSED};
}
export const IMABARI_TRAVEL_DINING: readonly TravelRow[] = [
  dining('imabari-dining-01', '魚菜燻吟 あき山', '愛媛県今治市北日吉町1-24-6', '050-5869-2736', 'https://tabelog.com/ehime/A3802/A380201/38012923/'),
  dining('imabari-dining-02', '炭火焼鳥とりっこ 今治店', '愛媛県今治市馬越町3-167-1', '050-5456-2223', 'https://tabelog.com/ehime/A3802/A380201/38012159/'),
  dining('imabari-dining-03', '焼肉高麗', '愛媛県今治市常盤町8-4-16', '050-5571-8218', 'https://tabelog.com/ehime/A3802/A380201/38005558/'),
  dining('imabari-dining-04', '焼肉 大栄', '愛媛県今治市松本町1-8-12 １Ｆ', '050-5593-0589', 'https://tabelog.com/ehime/A3802/A380201/38000094/'),
  dining('imabari-dining-05', '精肉問屋直営焼肉店 やきにくの蔵 今治店', '愛媛県今治市南鳥生町4丁目493-1', '0898-52-8929', 'https://tabelog.com/ehime/A3802/A380201/38011685/'),
  dining('imabari-dining-06', 'BISTRO Paysan', '愛媛県今治市吉海町南浦379', '050-8884-8416', 'https://tabelog.com/ehime/A3802/A380201/38014785/'),
  dining('imabari-dining-07', 'アブリヤ 阿部商店', '愛媛県今治市松本町2-1-24', '050-5595-1864', 'https://tabelog.com/ehime/A3802/A380201/38011929/'),
  dining('imabari-dining-08', '来島海鮮酒Bar ANCHOR', '愛媛県今治市恵美須町1-1-17', '0898-39-3150', 'https://tabelog.com/ehime/A3802/A380201/38010461/'),
  dining('imabari-dining-09', 'やきとり 山鳥', '愛媛県今治市末広町1-4-7', '0898-22-7188', 'https://tabelog.com/ehime/A3802/A380201/38001952/'),
  dining('imabari-dining-10', '八勝亭オリエント 今治店', '愛媛県今治市旭町1-5-12', '0898-31-9119', 'https://tabelog.com/ehime/A3802/A380201/38000001/'),
  dining('imabari-dining-11', 'おでん屋 ふみ', '愛媛県今治市大正町2-2-14 村上ビル 1F', '0898-34-7699', 'https://tabelog.com/ehime/A3802/A380201/38016736/'),
  dining('imabari-dining-12', '千年の宴 今治東口駅前店', '愛媛県今治市北宝来町1-5-32 ライブタウン宝来 １Ｆ', '050-5869-2985', 'https://tabelog.com/ehime/A3802/A380201/38001393/'),
  dining('imabari-dining-13', '森見光洲園', '愛媛県今治市共栄町3-1-5', '050-5597-1697', 'https://tabelog.com/ehime/A3802/A380201/38002151/'),
  dining('imabari-dining-14', 'ICHIE', '愛媛県今治市片山3-1-10', '0898-52-3727', 'https://tabelog.com/ehime/A3802/A380201/38016271/'),
  dining('imabari-dining-15', '丸起 松本店', '愛媛県今治市松本町2-2-16 万利茂ビル 1F', '080-6067-2914', 'https://tabelog.com/ehime/A3802/A380201/38016483/'),
  dining('imabari-dining-16', 'オーベルジュ', '愛媛県今治市大西町宮脇甲1416-3 ますや旅館', '0898-53-2104', 'https://tabelog.com/ehime/A3802/A380201/38008524/'),
];

export const IMABARI_DINING_NAME_SET: ReadonlySet<string> = new Set(IMABARI_TRAVEL_DINING.map((row) => row.name_ja));
export const IMABARI_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const IMABARI_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const IMABARI_TRAVEL_ALL: readonly TravelRow[] = [...IMABARI_TRAVEL_DINING, ...IMABARI_TRAVEL_STAY, ...IMABARI_TRAVEL_SHOPPING, ...IMABARI_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isImabariOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IMABARI_ONSEN_PACK_SET.has(row.name_ja);
}
export function isImabariExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IMABARI_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isImabariStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isImabariShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isImabariDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return IMABARI_DINING_NAME_SET.has(row.name_ja);
}
export function imabariSightPhoto(nameJa: string): MimaPlacePhoto | null { return IMABARI_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankImabariSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isImabariOnsenPackRow(row) && !isImabariExperiencePackRow(row) && !isImabariStayPackRow(row) && !isImabariDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of IMABARI_SIGHT_PINS) {
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
export function imabariSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '今治市 飲食案内' : 'Imabari City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '今治市 宿泊案内' : 'Imabari City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '今治市 買物案内' : 'Imabari City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function imabariTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isImabariOnsenPackRow(row)) return 'onsen';
  if (isImabariExperiencePackRow(row)) return 'experience';
  if (isImabariStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isImabariDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function imabariPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isImabariOnsenPackRow(row) && !isImabariExperiencePackRow(row) && !isImabariStayPackRow(row) && !isImabariDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isImabariOnsenPackRow(row);
  if (filter === 'experience') return isImabariExperiencePackRow(row);
  if (filter === 'stay') return isImabariStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveImabariFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const IMABARI_HALL = IMABARI.hall;
