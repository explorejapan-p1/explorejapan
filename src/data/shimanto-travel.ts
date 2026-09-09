/**
 * Shimanto City travel layer. No frozen pack.
 * Dining from 食べログ 四万十市 (C39210). Stay densify TG604: Rakuten room stills for attributable 四万十市 lodging (stay≠onsen). Onsen: Royal 4F bath still. Experience: 道の駅よって西土佐.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {SHIMANTO, SHIMANTO_SIGHT_PHOTOS} from './shimanto';
import {INFRA_CATEGORIES, SIGHTS_CATEGORIES, type FilterId, type TravelRow} from './mima-travel';

export const SHIMANTO_TRAVEL_ACCESSED = '2026-09-09' as const;
export const SHIMANTO_TRAVEL_SOURCES = {
  home: 'https://www.city.shimanto.lg.jp/', hall: 'https://ja.wikipedia.org/wiki/%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B8%82',
  kankou: 'https://www.city.shimanto.lg.jp/',
  stayOfficial: 'https://www.city.shimanto.lg.jp/site/scp/1501.html',
  stayAssoc: 'https://www.shimanto-kankou.com/stay',
  bridge: 'https://commons.wikimedia.org/wiki/File:Shimanto_River_Bridge(26676794871).jpg',
  tabelogCity: 'https://tabelog.com/kochi/C39210/rstLst/',
  royal: 'https://travel.rakuten.co.jp/HOTEL/9419/9419.html',
  rakutenShimanto: 'https://search.travel.rakuten.co.jp/ds/hotellist/Japan-Kochi-Shimanto'
} as const;

export const SHIMANTO_ONSEN_PACK_NAMES = ['新ロイヤルホテル四万十 大浴場'] as const;
export const SHIMANTO_ONSEN_PACK_SET: ReadonlySet<string> = new Set(SHIMANTO_ONSEN_PACK_NAMES);
export const SHIMANTO_EXPERIENCE_PACK_NAMES = ['道の駅よって西土佐'] as const;
export const SHIMANTO_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(SHIMANTO_EXPERIENCE_PACK_NAMES);
export const SHIMANTO_STAY_PACK_NAMES = [] as const;
export const SHIMANTO_STAY_PACK_SET: ReadonlySet<string> = new Set(SHIMANTO_STAY_PACK_NAMES);
export const SHIMANTO_SHOPPING_PACK_NAMES = [] as const;
export const SHIMANTO_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(SHIMANTO_SHOPPING_PACK_NAMES);

export const SHIMANTO_SIGHT_PINS = ['四万十川橋','岩間沈下橋','佐田沈下橋','一條神社','不破八幡宮','トンボ自然公園'] as const;

function stay(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'stay', address, phone, source_url, accessed: SHIMANTO_TRAVEL_ACCESSED};
}
export const SHIMANTO_TRAVEL_STAY: readonly TravelRow[] = [
  stay('shimanto-stay-01', '新ロイヤルホテル四万十', '高知県四万十市中村小姓町26', '0880-35-1000', 'https://travel.rakuten.co.jp/HOTEL/9419/9419.html'),
  stay('shimanto-stay-02', 'ホテルサンリバー四万十', '高知県四万十市右山383-15', '0880-34-8875', 'https://travel.rakuten.co.jp/HOTEL/165910/165910.html'),
  stay('shimanto-stay-03', '中村プリンスホテル', '高知県四万十市中村弥生町4-1', '0880-35-5551', 'https://travel.rakuten.co.jp/HOTEL/8989/8989.html'),
  stay('shimanto-stay-04', 'ホテルクラウンヒルズ中村', '高知県四万十市右山383-6', '050-1807-2974', 'https://travel.rakuten.co.jp/HOTEL/70893/70893.html'),
  stay('shimanto-stay-05', '中村第一ホテル', '高知県四万十市駅前町5-15', '0880-34-7211', 'https://travel.rakuten.co.jp/HOTEL/11023/11023.html'),
  stay('shimanto-stay-06', 'ホテルココモ', '高知県四万十市右山366', '0880-34-9331', 'https://travel.rakuten.co.jp/HOTEL/184394/184394.html'),
  stay('shimanto-stay-07', '四万十の宿', '高知県四万十市下田3370', '0880-33-1600', 'https://travel.rakuten.co.jp/HOTEL/16245/16245.html'),
  stay('shimanto-stay-08', 'なごみ宿 安住庵', '高知県四万十市中村1815', '0880-35-3184', 'https://travel.rakuten.co.jp/HOTEL/10838/10838.html'),
  stay('shimanto-stay-09', '山みず木', '高知県四万十市名鹿431-10', '0880-31-9160', 'https://travel.rakuten.co.jp/HOTEL/146135/146135.html'),
  stay('shimanto-stay-10', '四万十りばーさいど', '高知県四万十市佐田38-1', '0880-34-1518', 'https://travel.rakuten.co.jp/HOTEL/44089/44089.html'),
  stay('shimanto-stay-11', '四万十川の隠れコテージ おりや', '高知県四万十市口鴨川827', '050-3576-7268', 'https://travel.rakuten.co.jp/HOTEL/164466/164466.html'),
  stay('shimanto-stay-12', '古民家宿 寝つきいいキツネ', '高知県四万十市蕨岡乙北の川2285', '070-8547-2485', 'https://travel.rakuten.co.jp/HOTEL/170072/170072.html'),
  stay('shimanto-stay-13', '貸切宿ほとり', '高知県四万十市間崎857', '070-3772-5612', 'https://travel.rakuten.co.jp/HOTEL/188758/188758.html'),
  stay('shimanto-stay-14', 'さんいんどう', '高知県四万十市荒川1290', '090-5768-3188', 'https://travel.rakuten.co.jp/HOTEL/192726/192726.html'),
  stay('shimanto-stay-15', '民宿 鈴', '高知県四万十市中村大橋通7-11-6', '0880-34-5655', 'https://travel.rakuten.co.jp/HOTEL/19883/19883.html'),
  stay('shimanto-stay-16', '民宿 こばん', '高知県四万十市右山五月町6-10', '0880-34-5923', 'https://travel.rakuten.co.jp/HOTEL/147866/147866.html')
];

function dining(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string): TravelRow {
  return {id, name_ja, category: 'dining', address, phone, source_url, accessed: SHIMANTO_TRAVEL_ACCESSED};
}
export const SHIMANTO_TRAVEL_DINING: readonly TravelRow[] = [
  dining('shimanto-dining-01', '居酒屋 かねき', '高知県四万十市中村天神橋39-8', '0880-34-6009', 'https://tabelog.com/kochi/A3904/A390401/39008593/'),
  dining('shimanto-dining-02', 'ほうばい', '高知県四万十市中村栄町22 ジュゲムビル 1F', '0880-34-8228', 'https://tabelog.com/kochi/A3904/A390401/39008370/'),
  dining('shimanto-dining-03', '居酒屋誠道', '高知県四万十市中村東下町3-1', '0880-34-7717', 'https://tabelog.com/kochi/A3904/A390401/39008777/'),
  dining('shimanto-dining-04', '四万十屋', '高知県四万十市山路2494-1', '0880-36-2828', 'https://tabelog.com/kochi/A3904/A390401/39003313/'),
  dining('shimanto-dining-05', 'カテコテ', '高知県四万十市中村天神橋39', '0880-34-0902', 'https://tabelog.com/kochi/A3904/A390401/39004964/'),
  dining('shimanto-dining-06', '季節料理 たにぐち', '高知県四万十市中村大橋通4-50', '0880-34-3388', 'https://tabelog.com/kochi/A3904/A390401/39007106/'),
  dining('shimanto-dining-07', 'お食事処 さたけ', '高知県四万十市中村天神橋45', null, 'https://tabelog.com/kochi/A3904/A390401/39008604/'),
  dining('shimanto-dining-08', 'ラーメンハウス', '高知県四万十市古津賀2575', '0880-35-2330', 'https://tabelog.com/kochi/A3904/A390401/39001533/'),
  dining('shimanto-dining-09', '居酒屋 なかひら', '高知県四万十市中村天神橋34', '0880-34-4077', 'https://tabelog.com/kochi/A3904/A390401/39003615/'),
  dining('shimanto-dining-10', '人情酒場いわちゃん', '高知県四万十市中村天神橋18', '0880-34-4640', 'https://tabelog.com/kochi/A3904/A390401/39007289/'),
  dining('shimanto-dining-11', '居酒屋 ちきちん', '高知県四万十市中村東下町26', '0880-34-0565', 'https://tabelog.com/kochi/A3904/A390401/39004991/'),
  dining('shimanto-dining-12', '昭和ブギウギ食堂 のらくろ', '高知県四万十市中村大橋通4-16', null, 'https://tabelog.com/kochi/A3904/A390401/39006812/'),
  dining('shimanto-dining-13', 'いちもん家', '高知県四万十市右山383-7 サンリバー四万十敷地内', '0880-34-5552', 'https://tabelog.com/kochi/A3904/A390401/39004965/'),
  dining('shimanto-dining-14', '小鉄', '高知県四万十市古津賀2-12', '0880-34-0319', 'https://tabelog.com/kochi/A3904/A390401/39004171/'),
  dining('shimanto-dining-15', '西土佐食堂', '高知県四万十市西土佐江川崎2410-3 道の駅 よって西土佐', '0880-52-1398', 'https://tabelog.com/kochi/A3904/A390401/39002145/'),
  dining('shimanto-dining-16', 'ちきん館 本店', '高知県四万十市有岡31-1', '0880-37-0326', 'https://tabelog.com/kochi/A3904/A390401/39003528/'),
];

export const SHIMANTO_DINING_NAME_SET: ReadonlySet<string> = new Set(SHIMANTO_TRAVEL_DINING.map((row) => row.name_ja));
export const SHIMANTO_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const SHIMANTO_TRAVEL_COMMERCE: readonly TravelRow[] = [];
export const SHIMANTO_TRAVEL_ALL: readonly TravelRow[] = [...SHIMANTO_TRAVEL_DINING, ...SHIMANTO_TRAVEL_STAY, ...SHIMANTO_TRAVEL_SHOPPING, ...SHIMANTO_TRAVEL_COMMERCE];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);
function isPackCategory(value: string | undefined): value is FacilityCategory { return LOOKUP_CATEGORIES.some((cat) => cat === value); }
function isInfraCategory(value: string): boolean { return INFRA_SET.has(value); }
function isSightsCategory(value: string): boolean { return SIGHTS_SET.has(value); }

export function isShimantoOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHIMANTO_ONSEN_PACK_SET.has(row.name_ja);
}
export function isShimantoExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHIMANTO_EXPERIENCE_PACK_SET.has(row.name_ja);
}
export function isShimantoStayPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isShimantoShoppingPackRow(_row: {category: string; name_ja: string}): boolean { return false; }
export function isShimantoDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return SHIMANTO_DINING_NAME_SET.has(row.name_ja);
}
export function shimantoSightPhoto(nameJa: string): MimaPlacePhoto | null { return SHIMANTO_SIGHT_PHOTOS[nameJa] ?? null; }

type Rankable = {id: string; name_ja: string; category: string; lat: number | null; lon: number | null;};
export function rankShimantoSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter((row) => isSightsCategory(row.category) && !isShimantoOnsenPackRow(row) && !isShimantoExperiencePackRow(row) && !isShimantoStayPackRow(row) && !isShimantoDiningPackRow(row));
  const used = new Set<string>(); const usedNames = new Set<string>(); const pinned: T[] = [];
  for (const pin of SHIMANTO_SIGHT_PINS) {
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
export function shimantoSourcedHook(row: {name_ja: string; address: string | null; category: string; phone?: string | null}, locale: string): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') return locale === 'ja' ? '四万十市 飲食案内' : 'Shimanto City dining list';
  if (row.category === 'stay') return locale === 'ja' ? '四万十市 宿泊案内' : 'Shimanto City lodging list';
  if (row.category === 'shopping') return locale === 'ja' ? '四万十市 買物案内' : 'Shimanto City shopping list';
  if (row.category === 'tourism') return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  if (row.category === 'cultural_property') return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  return '';
}
export function shimantoTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isShimantoOnsenPackRow(row)) return 'onsen';
  if (isShimantoExperiencePackRow(row)) return 'experience';
  if (isShimantoStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (row.category === 'shopping') return 'shopping';
  if (isShimantoDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}
export function shimantoPackRowMatchesFilter(category: FacilityCategory, filter: FilterId, nameJa = ''): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') return isSightsCategory(category) && !isShimantoOnsenPackRow(row) && !isShimantoExperiencePackRow(row) && !isShimantoStayPackRow(row) && !isShimantoDiningPackRow(row);
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isShimantoOnsenPackRow(row);
  if (filter === 'experience') return isShimantoExperiencePackRow(row);
  if (filter === 'stay') return isShimantoStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}
export function resolveShimantoFilter(c: string | undefined, q: string): FilterId {
  if (c === 'sights' || c === 'stay' || c === 'dining' || c === 'onsen' || c === 'experience' || c === 'shopping' || c === 'commerce') return c;
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}
export const SHIMANTO_HALL = SHIMANTO.hall;
