/**
 * Konan City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-08). JIS 39211. Third Kochi hub after 高知市・南国市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Honest 0 onsen (unit baths only) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KONAN = {
  nameJa: '香南市',
  nameEn: 'Konan',
  reading: 'こうなんし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'konan',
  jis: '39211',
  jlis: '392119',
  sameAs: 'https://www.city.kochi-konan.lg.jp/',
  hall: {
    postalCode: '781-5292',
    addressJa: '高知県香南市野市町西野2706番地',
    addressEn: '2706 Nishino, Noichi-cho, Konan City, Kochi 781-5292, Japan',
    phone: '0887-56-0511'
  },
  sources: {
    home: 'https://www.city.kochi-konan.lg.jp/',
    hall: 'https://www.city.kochi-konan.lg.jp/shiseijoho/konanshinogaiyo/index.html',
    kankou: 'https://www.city.kochi-konan.lg.jp/',
    ekingura: 'https://ja.wikipedia.org/wiki/%E5%BC%98%E7%80%AC%E9%87%91%E8%94%B5',
    tabelogCity: 'https://tabelog.com/kochi/C39211/rstLst/',
    kajuen: 'https://travel.rakuten.co.jp/HOTEL/13721/13721.html',
    accessed: '2026-09-09'
  }
} as const;

export const KONAN_EXPECTED_ROW_COUNT = 7;
export const KONAN_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Ekingura (赤岡). */
export const KONAN_PLACE_PHOTO = wikiPhoto(
  'konan-ekingura.jpg',
  'https://commons.wikimedia.org/wiki/File:Kochi_Konan_Ekingura_1.jpg',
  'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
  '京浜にけ', 'https://commons.wikimedia.org/wiki/File:Kochi_Konan_Ekingura_1.jpg', '2007-11-21',
  '絵金蔵', 'Ekingura, Akaoka, Konan'
);

const TABELOG_39003507 = 'https://tabelog.com/kochi/A3901/A390106/39003507/';
const TABELOG_39007459 = 'https://tabelog.com/kochi/A3901/A390106/39007459/';
const TABELOG_39002467 = 'https://tabelog.com/kochi/A3901/A390106/39002467/';
const TABELOG_39008320 = 'https://tabelog.com/kochi/A3901/A390106/39008320/';
const TABELOG_39007025 = 'https://tabelog.com/kochi/A3901/A390106/39007025/';
const TABELOG_39001144 = 'https://tabelog.com/kochi/A3901/A390106/39001144/';
const TABELOG_39001087 = 'https://tabelog.com/kochi/A3901/A390106/39001087/';
const TABELOG_39002333 = 'https://tabelog.com/kochi/A3901/A390106/39002333/';
const TABELOG_39006265 = 'https://tabelog.com/kochi/A3901/A390106/39006265/';
const TABELOG_39002786 = 'https://tabelog.com/kochi/A3901/A390106/39002786/';
const TABELOG_39007889 = 'https://tabelog.com/kochi/A3901/A390106/39007889/';
const TABELOG_39002200 = 'https://tabelog.com/kochi/A3901/A390106/39002200/';
const TABELOG_39008549 = 'https://tabelog.com/kochi/A3901/A390106/39008549/';
const TABELOG_39000367 = 'https://tabelog.com/kochi/A3901/A390106/39000367/';
const TABELOG_39003322 = 'https://tabelog.com/kochi/A3901/A390106/39003322/';
const TABELOG_39003727 = 'https://tabelog.com/kochi/A3901/A390106/39003727/';

export const KONAN_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '絵金蔵': KONAN_PLACE_PHOTO,
  'のいち駅': wikiPhoto(
    'konan-noichi-sta.jpg',
    'https://commons.wikimedia.org/wiki/File:TKT-NoichiStation.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'Onagadori', '//commons.wikimedia.org/wiki/User:Onagadori', '2007-12-30',
    'のいち駅', 'Noichi Station, Konan'
  ),
  'あかおか駅': wikiPhoto(
    'konan-akaoka-sta.jpg',
    'https://commons.wikimedia.org/wiki/File:Konan_Akaoka_Station_1.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '京浜にけ', 'https://commons.wikimedia.org/wiki/File:Konan_Akaoka_Station_1.jpg', '2011-08-27',
    'あかおか駅', 'Akaoka Station, Konan'
  ),
  '手結港可動橋': wikiPhoto(
    'konan-tei-bridge.jpg',
    'https://commons.wikimedia.org/wiki/File:Tei_harbor_drawbridge.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian', '//commons.wikimedia.org/wiki/User:Navian', '2009-05-04',
    '手結港可動橋', 'Tei harbor drawbridge, Konan'
  ),
  '高知県立のいち動物公園': wikiPhoto(
    'konan-zoo.jpg',
    'https://commons.wikimedia.org/wiki/File:Noichi_zoo.jpg',
    'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0',
    'Shoichi Masuhara', 'https://www.flickr.com/people/shoichi/', '2013-05-20',
    '高知県立のいち動物公園', 'Noichi Zoological Park of Kochi Prefecture'
  ),
  '夜須駅': wikiPhoto(
    'konan-yasu-sta.jpg',
    'https://commons.wikimedia.org/wiki/File:Yasu_station_kochi_01.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian', '//commons.wikimedia.org/wiki/User:Navian', '2010-05-16',
    '夜須駅', 'Yasu Station, Konan'
  ),
  '道の駅やす': wikiPhoto(
    'konan-yasu.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%82%84%E3%81%99.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Bakkai', '//commons.wikimedia.org/wiki/User:Bakkai', '2006-12-14',
    '道の駅やす', 'Michinoeki Yasu, Konan'
  ),
  '百家': sourcePhoto('konan-39003507-dish.jpg', '百家の料理写真', '百家 food photo', TABELOG_39003507, '食べログ'),
  'ふく手羽 のいち店': sourcePhoto('konan-39007459-dish.jpg', 'ふく手羽 のいち店の料理写真', 'ふく手羽 のいち店 food photo', TABELOG_39007459, '食べログ'),
  'カフェド昭': sourcePhoto('konan-39002467-dish.jpg', 'カフェド昭の料理写真', 'カフェド昭 food photo', TABELOG_39002467, '食べログ'),
  'オカシノイイトコロ。': sourcePhoto('konan-39008320-dish.jpg', 'オカシノイイトコロ。の料理写真', 'オカシノイイトコロ。 food photo', TABELOG_39008320, '食べログ'),
  '菓子工房 コンセルト': sourcePhoto('konan-39007025-dish.jpg', '菓子工房 コンセルトの料理写真', '菓子工房 コンセルト food photo', TABELOG_39007025, '食べログ'),
  'カフェ ほのまる': sourcePhoto('konan-39001144-dish.jpg', 'カフェ ほのまるの料理写真', 'カフェ ほのまる food photo', TABELOG_39001144, '食べログ'),
  '八剣伝 野市駅前店': sourcePhoto('konan-39001087-dish.jpg', '八剣伝 野市駅前店の料理写真', '八剣伝 野市駅前店 food photo', TABELOG_39001087, '食べログ'),
  '安愚楽': sourcePhoto('konan-39002333-dish.jpg', '安愚楽の料理写真', '安愚楽 food photo', TABELOG_39002333, '食べログ'),
  '豚太郎 野市店': sourcePhoto('konan-39006265-dish.jpg', '豚太郎 野市店の料理写真', '豚太郎 野市店 food photo', TABELOG_39006265, '食べログ'),
  '木香': sourcePhoto('konan-39002786-dish.jpg', '木香の料理写真', '木香 food photo', TABELOG_39002786, '食べログ'),
  '井上ワイナリー のいち醸造所&SHOP': sourcePhoto('konan-39007889-dish.jpg', '井上ワイナリー のいち醸造所&SHOPの料理写真', '井上ワイナリー のいち醸造所&SHOP food photo', TABELOG_39007889, '食べログ'),
  '豊楽': sourcePhoto('konan-39002200-dish.jpg', '豊楽の料理写真', '豊楽 food photo', TABELOG_39002200, '食べログ'),
  'お好み焼き 万代': sourcePhoto('konan-39008549-dish.jpg', 'お好み焼き 万代の料理写真', 'お好み焼き 万代 food photo', TABELOG_39008549, '食べログ'),
  '澤餅茶屋': sourcePhoto('konan-39000367-dish.jpg', '澤餅茶屋の料理写真', '澤餅茶屋 food photo', TABELOG_39000367, '食べログ'),
  'バル亀之助': sourcePhoto('konan-39003322-dish.jpg', 'バル亀之助の料理写真', 'バル亀之助 food photo', TABELOG_39003322, '食べログ'),
  '苺屋': sourcePhoto('konan-39003727-dish.jpg', '苺屋の料理写真', '苺屋 food photo', TABELOG_39003727, '食べログ'),
  'リゾートホテル海辺の果樹園': sourcePhoto(
    'konan-stay-kajuen.jpg',
    'リゾートホテル海辺の果樹園の客室写真',
    'リゾートホテル海辺の果樹園 room photo',
    'https://travel.rakuten.co.jp/HOTEL/13721/13721.html',
    '楽天トラベル'
  ),
  'ゲストハウス水仙': sourcePhoto(
    'konan-stay-suisen.jpg',
    'ゲストハウス水仙の客室写真',
    'ゲストハウス水仙 room photo',
    'https://travel.rakuten.co.jp/HOTEL/198024/198024.html',
    '楽天トラベル'
  ),
  '香南市サイクリングターミナル　海のやどしおや宿': sourcePhoto(
    'konan-stay-shioya.jpg',
    '香南市サイクリングターミナル　海のやどしおや宿の客室写真',
    '香南市サイクリングターミナル　海のやどしおや宿 room photo',
    'https://travel.rakuten.co.jp/HOTEL/44005/44005.html',
    '楽天トラベル'
  ),
  '高知黒潮ホテル': sourcePhoto(
    'konan-stay-kuroshio.jpg',
    '高知黒潮ホテルの客室写真',
    '高知黒潮ホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/15239/15239.html',
    '楽天トラベル'
  ),

};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: KONAN.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: KONAN.sources.accessed};
}

export const KONAN_FACILITIES: readonly FacilityRow[] = [
  sight('konan-sight-01', '絵金蔵', '高知県香南市赤岡町', null, 'https://ja.wikipedia.org/wiki/%E5%BC%98%E7%80%AC%E9%87%91%E8%94%B5', 33.54269, 133.72161),
  sight('konan-sight-02', 'のいち駅', '高知県香南市野市町西野', null, 'https://ja.wikipedia.org/wiki/%E3%81%AE%E3%81%84%E3%81%A1%E9%A7%85', 33.56188056, 133.698075),
  sight('konan-sight-03', 'あかおか駅', '高知県香南市赤岡町', null, 'https://ja.wikipedia.org/wiki/%E3%81%82%E3%81%8B%E3%81%8A%E3%81%8B%E9%A7%85', 33.539875, 133.72223333),
  sight('konan-sight-04', '手結港可動橋', '高知県香南市夜須町手結', null, 'https://ja.wikipedia.org/wiki/%E6%89%8B%E7%B5%90%E6%B8%AF%E5%8F%AF%E5%8B%95%E6%A9%8B', 33.52839, 133.75636),
  sight('konan-sight-05', '高知県立のいち動物公園', '高知県香南市野市町大谷798', null, 'https://ja.wikipedia.org/wiki/%E9%AB%98%E7%9F%A5%E7%9C%8C%E7%AB%8B%E3%81%AE%E3%81%84%E3%81%A1%E5%8B%95%E7%89%A9%E5%85%AC%E5%9C%92', 33.57109444, 133.70582222),
  sight('konan-sight-06', '夜須駅', '高知県香南市夜須町千切', null, 'https://ja.wikipedia.org/wiki/%E5%A4%9C%E9%A0%88%E9%A7%85_(%E9%AB%98%E7%9F%A5%E7%9C%8C)', 33.534425, 133.75431111),
  sight('konan-experience-01', '道の駅やす', '高知県香南市夜須町手結山506-1', null, 'https://ja.wikipedia.org/wiki/%E9%81%93%E3%81%AE%E9%A7%85%E3%82%84%E3%81%99', 33.53417, 133.75369)
];
