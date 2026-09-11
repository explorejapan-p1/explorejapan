/**
 * Okayama City travel layer. No frozen pack.
 * Dining from 食べログ 岡山市 (C33100)×16 with dish JPGs. Stay: Rakuten 部屋 stills×9. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Experience: 0 honest.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {OKAYAMA, OKAYAMA_SIGHT_PHOTOS} from './okayama';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const OKAYAMA_TRAVEL_ACCESSED = '2026-09-11' as const;
export const OKAYAMA_TRAVEL_SOURCES = {
  home: 'https://www.city.okayama.jp/', hall: 'https://www.city.okayama.jp/',
  kanko: 'https://www.okayama-kanko.jp/',
  castle: 'https://commons.wikimedia.org/wiki/File:Okayama_Castle_01.jpg',
  tabelogCity: 'https://tabelog.com/okayama/C33100/rstLst/'
} as const;

export const OKAYAMA_ONSEN_PACK_NAMES = ["天然温泉　備前の湯　スーパーホテル岡山駅東口 大浴場", "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ） 大浴場"] as const;
export const OKAYAMA_ONSEN_PACK_SET: ReadonlySet<string> = new Set(OKAYAMA_ONSEN_PACK_NAMES);
export const OKAYAMA_EXPERIENCE_PACK_NAMES = [] as const;
export const OKAYAMA_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(OKAYAMA_EXPERIENCE_PACK_NAMES);
export const OKAYAMA_STAY_PACK_NAMES = [] as const;
export const OKAYAMA_STAY_PACK_SET: ReadonlySet<string> = new Set(OKAYAMA_STAY_PACK_NAMES);
export const OKAYAMA_SHOPPING_PACK_NAMES = [] as const;
export const OKAYAMA_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(OKAYAMA_SHOPPING_PACK_NAMES);

export const OKAYAMA_SIGHT_PINS = ["岡山城", "後楽園", "吉備津神社", "岡山県立美術館", "岡山市役所"] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: OKAYAMA_TRAVEL_ACCESSED};
}
export const OKAYAMA_TRAVEL_STAY: readonly TravelRow[] = [
  stay("okayama-stay-001", "天然温泉　備前の湯　スーパーホテル岡山駅東口", "岡山県岡山市北区桑田町17-10", null, "https://travel.rakuten.co.jp/HOTEL/179160/179160.html"),
  stay("okayama-stay-002", "天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ）", "岡山県岡山市北区錦町8-1", null, "https://travel.rakuten.co.jp/HOTEL/184280/184280.html"),
  stay("okayama-stay-003", "ホテルアベストグランデ岡山　なごみの湯", "岡山県岡山市北区駅前町1-8-5", null, "https://travel.rakuten.co.jp/HOTEL/167859/167859.html"),
  stay("okayama-stay-004", "アパホテル〈岡山駅前〉", "岡山県岡山市北区下石井1-3-12", null, "https://travel.rakuten.co.jp/HOTEL/109409/109409.html"),
  stay("okayama-stay-005", "ヴィアイン岡山（ＪＲ西日本グループ）", "岡山県岡山市北区駅元町1番25号", null, "https://travel.rakuten.co.jp/HOTEL/139447/139447.html"),
  stay("okayama-stay-006", "スマイルホテル岡山", "岡山県岡山市北区磨屋町10-8", null, "https://travel.rakuten.co.jp/HOTEL/181951/181951.html"),
  stay("okayama-stay-007", "ホテルマイステイズ岡山", "岡山県岡山市北区本町9-16", null, "https://travel.rakuten.co.jp/HOTEL/183037/183037.html"),
  stay("okayama-stay-008", "ホテルトレンド岡山駅前", "岡山県岡山市北区下石井1-1-17", null, "https://travel.rakuten.co.jp/HOTEL/172806/172806.html"),
  stay("okayama-stay-009", "ホテルエリアワン岡山（ホテルエリアワングループ）", "岡山県岡山市北区幸町7-1", null, "https://travel.rakuten.co.jp/HOTEL/1397/1397.html"),
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: OKAYAMA_TRAVEL_ACCESSED};
}
export const OKAYAMA_TRAVEL_DINING: readonly TravelRow[] = [
  dining("okayama-dining-01", "400℃ PIZZA", "岡山県岡山市北区富田町2-2-16 2F", null, "https://tabelog.com/okayama/A3301/A330101/33015797/"),
  dining("okayama-dining-02", "はすのみ", "岡山県岡山市北区平和町1-11", null, "https://tabelog.com/okayama/A3301/A330101/33007719/"),
  dining("okayama-dining-03", "鮨 縁", "岡山県岡山市北区平和町3-11 つるべマンション 1F", null, "https://tabelog.com/okayama/A3301/A330101/33001952/"),
  dining("okayama-dining-04", "喰切料理 八方", "岡山県岡山市北区弓之町12-6 1F", null, "https://tabelog.com/okayama/A3301/A330101/33015459/"),
  dining("okayama-dining-05", "400℃ mori no machi", "岡山県岡山市北区下石井2-10-107 杜の街プラザ 1F", null, "https://tabelog.com/okayama/A3301/A330101/33019066/"),
  dining("okayama-dining-06", "一鳥目", "岡山県岡山市北区表町1-6-56 オレンジビル 1F", null, "https://tabelog.com/okayama/A3301/A330101/33018075/"),
  dining("okayama-dining-07", "魚正 山本淳", "岡山県岡山市北区中央町7-5", null, "https://tabelog.com/okayama/A3301/A330101/33018496/"),
  dining("okayama-dining-08", "ヴィア パーチェ", "岡山県岡山市北区平和町5-24 アシモ西川　 １F", null, "https://tabelog.com/okayama/A3301/A330101/33010293/"),
  dining("okayama-dining-09", "たぬき屋", "岡山県岡山市北区東古松2-2-1", null, "https://tabelog.com/okayama/A3301/A330101/33000212/"),
  dining("okayama-dining-10", "季節料理かたやま", "岡山県岡山市北区平和町4-11 平和地所ビル 1F 西", null, "https://tabelog.com/okayama/A3301/A330101/33009794/"),
  dining("okayama-dining-11", "うじょう亭", "岡山県岡山市北区内山下1-8-18", null, "https://tabelog.com/okayama/A3301/A330101/33001167/"),
  dining("okayama-dining-12", "Okuto", "岡山県岡山市北区中山下 1-5-33 中野ビル 1F", null, "https://tabelog.com/okayama/A3301/A330101/33015738/"),
  dining("okayama-dining-13", "Duomo", "岡山県岡山市北区錦町3-4 山佐ビル 1F", null, "https://tabelog.com/okayama/A3301/A330101/33011042/"),
  dining("okayama-dining-14", "お好み焼き もり", "岡山県岡山市北区奉還町1-6-9", null, "https://tabelog.com/okayama/A3301/A330101/33000348/"),
  dining("okayama-dining-15", "天神そば", "岡山県岡山市北区天神町1-19", null, "https://tabelog.com/okayama/A3301/A330101/33000016/"),
  dining("okayama-dining-16", "スーリィ・ラ・セーヌ", "岡山県岡山市北区内山下1-2-15 安原ビル　１Ｆ", null, "https://tabelog.com/okayama/A3301/A330101/33000060/"),
];
export const OKAYAMA_DINING_NAME_SET: ReadonlySet<string> = new Set(OKAYAMA_TRAVEL_DINING.map((row) => row.name_ja));
export const OKAYAMA_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const OKAYAMA_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const OKAYAMA_TRAVEL_ALL: readonly TravelRow[] = [...OKAYAMA_TRAVEL_DINING, ...OKAYAMA_TRAVEL_STAY, ...OKAYAMA_TRAVEL_SHOPPING, ...OKAYAMA_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isOkayamaOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OKAYAMA_ONSEN_PACK_SET.has(row.name_ja);
}
export function isOkayamaExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OKAYAMA_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isOkayamaStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOkayamaShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isOkayamaDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return OKAYAMA_DINING_NAME_SET.has(row.name_ja);
}
export function okayamaSightPhoto(nameJa: string): MimaPlacePhoto | null { return OKAYAMA_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankOkayamaSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isOkayamaOnsenPackRow(row) && !isOkayamaExperiencePackRow(row) && !isOkayamaStayPackRow(row) && !isOkayamaDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of OKAYAMA_SIGHT_PINS) {
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
export function okayamaSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '岡山市 飲食案内' : 'Okayama City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '岡山市 宿泊案内' : 'Okayama City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '岡山市 買物案内' : 'Okayama City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function okayamaTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isOkayamaOnsenPackRow(row)) return 'onsen';
  if (isOkayamaExperiencePackRow(row)) return 'experience';
  if (isOkayamaStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isOkayamaDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function okayamaPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isOkayamaOnsenPackRow(row) && !isOkayamaExperiencePackRow(row) && !isOkayamaStayPackRow(row) && !isOkayamaDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isOkayamaOnsenPackRow(row);
  if (filter === 'experience') return isOkayamaExperiencePackRow(row);
  if (filter === 'stay') return isOkayamaStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveOkayamaFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const OKAYAMA_HALL = OKAYAMA.hall;
