/**
 * Saijo City travel layer. No frozen pack.
 * Dining from 食べログ 西条市 (C38206)×16 with dish JPGs. Stay: Rakuten 部屋 stills×22. Onsen: facility bath stills×12 (stay≠onsen). Experience: 0.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SAIJO, SAIJO_SIGHT_PHOTOS} from './saijo';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SAIJO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const SAIJO_TRAVEL_SOURCES = {
  home: 'https://www.city.saijo.ehime.jp/', hall: 'https://www.city.saijo.ehime.jp/',
  kanko: 'https://www.city.saijo.ehime.jp/soshiki/kanko/oashisu.html',
  ishizuchi: 'https://www.ishizuchisan.jp/',
  tabelogCity: 'https://tabelog.com/ehime/C38206/rstLst/'
} as const;

export const SAIJO_ONSEN_PACK_NAMES = ["ターミナルホテル東予 大浴場", "西条アーバンホテル 大浴場", "ホテル玉の家西条 大浴場", "休暇村 瀬戸内東予 大浴場", "ホテルルートイン伊予西条 旅人の湯", "源泉かけ流しの宿 湯之谷温泉 大浴場", "石鎚神社会館 大浴場", "エクストールイン西条駅前 大浴場", "やまだ屋／民泊 大浴場", "天然温泉 石鎚の湯 スーパーホテル伊予西条 天然温泉", "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ） 源泉かけ流しの温泉", "ホテルたいよう農園西条 大浴場"] as const;
export const SAIJO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SAIJO_ONSEN_PACK_NAMES);
export const SAIJO_EXPERIENCE_PACK_NAMES = [] as const;
export const SAIJO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SAIJO_EXPERIENCE_PACK_NAMES);
export const SAIJO_STAY_PACK_NAMES = [] as const;
export const SAIJO_STAY_PACK_SET: ReadonlySet<string> = new Set(SAIJO_STAY_PACK_NAMES);
export const SAIJO_SHOPPING_PACK_NAMES = [] as const;
export const SAIJO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SAIJO_SHOPPING_PACK_NAMES);

export const SAIJO_SIGHT_PINS = ["道の駅小松オアシス", "石鎚神社本社", "石鎚神社成就社", "石鎚登山ロープウェイ", "伊予西条駅", "前神寺"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SAIJO_TRAVEL_ACCESSED};
}
export const SAIJO_TRAVEL_STAY: readonly TravelRow[] = [

  stay("saijo-stay-001", "ターミナルホテル東予", "愛媛県西条市三津屋南6-29", null, "https://travel.rakuten.co.jp/HOTEL/1618/1618.html"),
  stay("saijo-stay-002", "西条アーバンホテル", "愛媛県西条市大町800-3", null, "https://travel.rakuten.co.jp/HOTEL/1625/1625.html"),
  stay("saijo-stay-003", "ホテルオレール西条", "愛媛県西条市大町798-9", null, "https://travel.rakuten.co.jp/HOTEL/2603/2603.html"),
  stay("saijo-stay-004", "ホテル青木", "愛媛県西条市大町802-18", null, "https://travel.rakuten.co.jp/HOTEL/12636/12636.html"),
  stay("saijo-stay-005", "ホテル玉の家西条", "愛媛県西条市大町802-10", null, "https://travel.rakuten.co.jp/HOTEL/15171/15171.html"),
  stay("saijo-stay-006", "休暇村 瀬戸内東予", "愛媛県西条市河原津 乙 7-179", null, "https://travel.rakuten.co.jp/HOTEL/56772/56772.html"),
  stay("saijo-stay-007", "ホテルルートイン伊予西条", "愛媛県西条市新田北新田191-1", null, "https://travel.rakuten.co.jp/HOTEL/70697/70697.html"),
  stay("saijo-stay-008", "ビジネスホテルアネックスあかやね", "愛媛県西条市大町808-2", null, "https://travel.rakuten.co.jp/HOTEL/135550/135550.html"),
  stay("saijo-stay-009", "源泉かけ流しの宿 湯之谷温泉", "愛媛県西条市洲之内甲1193", null, "https://travel.rakuten.co.jp/HOTEL/145488/145488.html"),
  stay("saijo-stay-010", "石鎚神社会館", "愛媛県西条市西田甲797", null, "https://travel.rakuten.co.jp/HOTEL/149036/149036.html"),
  stay("saijo-stay-011", "エクストールイン西条駅前", "愛媛県西条市大町771-1", null, "https://travel.rakuten.co.jp/HOTEL/151065/151065.html"),
  stay("saijo-stay-012", "お宿 すけ家", "愛媛県西条市三津屋722-3", null, "https://travel.rakuten.co.jp/HOTEL/153550/153550.html"),
  stay("saijo-stay-013", "西条セントラルホテル", "愛媛県西条市大町845-7", null, "https://travel.rakuten.co.jp/HOTEL/153631/153631.html"),
  stay("saijo-stay-014", "やまだ屋／民泊", "愛媛県西条市古川甲166-1", null, "https://travel.rakuten.co.jp/HOTEL/173371/173371.html"),
  stay("saijo-stay-015", "つごえの家 別邸 ＾", "愛媛県西条市中野乙15-4 Tsugoe′s House Villa", null, "https://travel.rakuten.co.jp/HOTEL/175336/175336.html"),
  stay("saijo-stay-016", "天然温泉 石鎚の湯 スーパーホテル伊予西条", "愛媛県西条市朔日市777-1", null, "https://travel.rakuten.co.jp/HOTEL/180260/180260.html"),
  stay("saijo-stay-017", "ＨＯＴＥＬ ＡＺ 愛媛東予店", "愛媛県西条市三津屋南2-29", null, "https://travel.rakuten.co.jp/HOTEL/183744/183744.html"),
  stay("saijo-stay-018", "ＩＴＯＭＡＣＨＩ ＨＯＴＥＬ ０（いとまちホテルゼロ）", "愛媛県西条市朔日市250-7", null, "https://travel.rakuten.co.jp/HOTEL/187958/187958.html"),
  stay("saijo-stay-019", "自然と静寂のオアシス：サイクリング、石鎚登山、お遍路の理想のハブ」：クレンリネスｄａｎｄａｎ／民泊", "愛媛県西条市周布1942-2", null, "https://travel.rakuten.co.jp/HOTEL/189440/189440.html"),
  stay("saijo-stay-020", "ホテルたいよう農園西条", "愛媛県西条市三津屋南6-15", null, "https://travel.rakuten.co.jp/HOTEL/192684/192684.html"),
  stay("saijo-stay-021", "セルフイン愛媛西条", "愛媛県西条市三津屋南6-22", null, "https://travel.rakuten.co.jp/HOTEL/196208/196208.html"),
  stay("saijo-stay-022", "トレイルイン 伊予西条店", "愛媛県西条市新田字市塚新田172-1 グランディールロッキー西条店 駐車場", null, "https://travel.rakuten.co.jp/HOTEL/198695/198695.html"),
];


function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SAIJO_TRAVEL_ACCESSED};
}
export const SAIJO_TRAVEL_DINING: readonly TravelRow[] = [

  dining("saijo-dining-01", "Musubi", "愛媛県西条市朔日市250-6", "0897-66-8700", "https://tabelog.com/ehime/A3802/A380202/38016220/"),
  dining("saijo-dining-02", "八剣伝 伊予西条中央店", "愛媛県西条市大町680-7", "0897-55-5279", "https://tabelog.com/ehime/A3802/A380202/38002741/"),
  dining("saijo-dining-03", "備長扇屋 いよ西条店", "愛媛県西条市朔日市767-1", "0897-58-2021", "https://tabelog.com/ehime/A3802/A380202/38001428/"),
  dining("saijo-dining-04", "居酒屋 天龍智龍", "愛媛県西条市大町1641-2", "0897-66-8509", "https://tabelog.com/ehime/A3802/A380202/38016102/"),
  dining("saijo-dining-05", "魚民 伊予西条駅前店", "愛媛県西条市大町854-3 コーポ栄寿第二ビル 1F", "0897-56-5888", "https://tabelog.com/ehime/A3802/A380202/38007333/"),
  dining("saijo-dining-06", "旬菜酒房ミツキヤ", "愛媛県西条市大町697-6", "0897-27-6523", "https://tabelog.com/ehime/A3802/A380202/38012317/"),
  dining("saijo-dining-07", "熟成豚専門店 かつ福 西条店", "愛媛県西条市喜多川316-1", "0897-55-4129", "https://tabelog.com/ehime/A3802/A380202/38010771/"),
  dining("saijo-dining-08", "パン工房 全粒粉とゆかいな仲間", "愛媛県西条市実報寺764-1", "070-7468-7888", "https://tabelog.com/ehime/A3802/A380202/38015401/"),
  dining("saijo-dining-09", "レガリス", "愛媛県西条市朔日市284-2", "0897-66-8670", "https://tabelog.com/ehime/A3802/A380202/38013566/"),
  dining("saijo-dining-10", "ゆずや", "愛媛県西条市丹原町今井263-5", "0898-68-3046", "https://tabelog.com/ehime/A3802/A380202/38008470/"),
  dining("saijo-dining-11", "レストラン　平城", "愛媛県西条市丹原町願連寺270-6", "0898-68-5091", "https://tabelog.com/ehime/A3802/A380202/38002206/"),
  dining("saijo-dining-12", "お好み焼き いこい", "愛媛県西条市新田52-2", "0897-53-3815", "https://tabelog.com/ehime/A3802/A380202/38001587/"),
  dining("saijo-dining-13", "ひろよし", "愛媛県西条市壬生川64", "0898-64-3923", "https://tabelog.com/ehime/A3802/A380202/38013279/"),
  dining("saijo-dining-14", "小麦の奴隷 西条店", "愛媛県西条市大町859-1 JR伊予西条駅", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380202/38015045/"),
  dining("saijo-dining-15", "ひょうたん", "愛媛県西条市三津屋南5-35", "不明の為情報お待ちしております", "https://tabelog.com/ehime/A3802/A380202/38003885/"),
  dining("saijo-dining-16", "麺処 大田屋", "愛媛県西条市朔日市528-3 共栄ビル　１Ｆ", "0897-55-2546", "https://tabelog.com/ehime/A3802/A380202/38005903/"),
];


export const SAIJO_DINING_NAME_SET: ReadonlySet<string> = new Set(SAIJO_TRAVEL_DINING.map((row) => row.name_ja));
export const SAIJO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SAIJO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SAIJO_TRAVEL_ALL: readonly TravelRow[] = [...SAIJO_TRAVEL_DINING, ...SAIJO_TRAVEL_STAY, ...SAIJO_TRAVEL_SHOPPING, ...SAIJO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isSaijoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAIJO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isSaijoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAIJO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isSaijoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSaijoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isSaijoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SAIJO_DINING_NAME_SET.has(row.name_ja);
}
export function saijoSightPhoto(nameJa: string): MimaPlacePhoto | null { return SAIJO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankSaijoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isSaijoOnsenPackRow(row) && !isSaijoExperiencePackRow(row) && !isSaijoStayPackRow(row) && !isSaijoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SAIJO_SIGHT_PINS) {
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
export function saijoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '西条市 飲食案内' : 'Saijo City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '西条市 宿泊案内' : 'Saijo City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '西条市 買物案内' : 'Saijo City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function saijoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isSaijoOnsenPackRow(row)) return 'onsen';
  if (isSaijoExperiencePackRow(row)) return 'experience';
  if (isSaijoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isSaijoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function saijoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isSaijoOnsenPackRow(row) && !isSaijoExperiencePackRow(row) && !isSaijoStayPackRow(row) && !isSaijoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isSaijoOnsenPackRow(row);
  if (filter === 'experience') return isSaijoExperiencePackRow(row);
  if (filter === 'stay') return isSaijoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveSaijoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SAIJO_HALL = SAIJO.hall;
