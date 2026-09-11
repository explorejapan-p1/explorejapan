/**
 * Nahari Town sourced facts. Do not invent population.
 * Hall / JIS from town Wikipedia / town HP facts (accessed 2026-09-08). JIS 39302. Fifteenth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町.
 * No frozen pack — photo-only tourism + Tabelog/Rakuten dining + Rakuten stay + Commons sights. Stay: ホテルなはり 本館シングル. Dining densify TG610. Onsen: 0 (大浴場≠温泉; stay≠onsen). Experience honest 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const NAHARI = {
  nameJa: '奈半利町',
  nameEn: 'Nahari',
  reading: 'なはりちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'nahari',
  jis: '39302',
  jlis: '393029',
  sameAs: 'https://www.town.nahari.kochi.jp/',
  hall: {
    postalCode: '781-6402',
    addressJa: '高知県安芸郡奈半利町乙1659番地1',
    addressEn: '1659-1 Otsu, Nahari Town, Aki District, Kochi 781-6402, Japan',
    phone: '0887-38-4011'
  },
  sources: {
    home: 'https://www.town.nahari.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%A5%88%E5%8D%8A%E5%88%A9%E7%94%BA',
    kankou: 'https://www.town.nahari.kochi.jp/',
    chuoPark: 'https://commons.wikimedia.org/wiki/File:Nahari_central_park_202308.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39302/rstLst/',
    hotelNahari: 'https://travel.rakuten.co.jp/HOTEL/20702/20702.html',
    accessed: '2026-09-09'
  }
} as const;

export const NAHARI_EXPECTED_ROW_COUNT = 7;
export const NAHARI_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Nahari Central Park. Hero title remains municipality name only. */
export const NAHARI_PLACE_PHOTO = wikiPhoto(
  'nahari-cover-chuo-park.jpg',
  'https://commons.wikimedia.org/wiki/File:Nahari_central_park_202308.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  '運動会プロテインパワー', 'https://commons.wikimedia.org/wiki/User:%E9%81%8B%E5%8B%95%E4%BC%9A%E3%83%97%E3%83%AD%E3%83%86%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AF%E3%83%BC', '2023-08',
  '奈半利中央公園', 'Nahari Central Park'
);

const TABELOG_39007542 = 'https://tabelog.com/kochi/A3902/A390202/39007542/';
const TABELOG_39000567 = 'https://tabelog.com/kochi/A3902/A390202/39000567/';
const TABELOG_39009187 = 'https://tabelog.com/kochi/A3902/A390202/39009187/';
const TABELOG_39000994 = 'https://tabelog.com/kochi/A3902/A390202/39000994/';
const TABELOG_39002185 = 'https://tabelog.com/kochi/A3902/A390202/39002185/';
const TABELOG_39002438 = 'https://tabelog.com/kochi/A3902/A390202/39002438/';
const TABELOG_39000909 = 'https://tabelog.com/kochi/A3902/A390202/39000909/';
const TABELOG_39003358 = 'https://tabelog.com/kochi/A3902/A390202/39003358/';
const TABELOG_39007454 = 'https://tabelog.com/kochi/A3902/A390202/39007454/';
const RAKUTEN_20702_GALLERY = 'https://travel.rakuten.co.jp/HOTEL/20702/gallery.html';
const COMMONS_TOWN_HALL = 'https://commons.wikimedia.org/wiki/File:Nahari_town_hall.jpg';
const COMMONS_RAIL_BRIDGE = 'https://commons.wikimedia.org/wiki/File:Nahari_bridge_over_railway.JPG';

export const NAHARI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '奈半利中央公園': NAHARI_PLACE_PHOTO,
  '加領郷灯台': wikiPhoto(
    'nahari-karyogo-toudai.jpg',
    'https://commons.wikimedia.org/wiki/File:Karyougou_toudai_20240319_1.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2024-03-19',
    '加領郷灯台', 'Karyogo Lighthouse, Nahari'
  ),
  '奈半利町甲': wikiPhoto(
    'nahari-kou.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%A5%88%E5%8D%8A%E5%88%A9%E7%94%BA%E7%94%B2_-_panoramio.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Yobito KAYANUMA', 'https://commons.wikimedia.org/wiki/File:%E5%A5%88%E5%8D%8A%E5%88%A9%E7%94%BA%E7%94%B2_-_panoramio.jpg', '2011-02-13',
    '奈半利町甲', 'Kō district, Nahari'
  ),
  '奈半利港眺望': wikiPhoto(
    'nahari-port-view.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%8F%E3%82%8D%E9%89%84%E5%A5%88%E5%8D%8A%E5%88%A9%E9%A7%85%E3%81%8B%E3%82%89%E3%81%AE%E7%9C%BA%E3%82%81%E3%83%BB%E5%8D%97%E5%90%91%E3%81%8D_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'minamikaze', 'https://commons.wikimedia.org/wiki/File:%E3%81%8F%E3%82%8D%E9%89%84%E5%A5%88%E5%8D%8A%E5%88%A9%E9%A7%85%E3%81%8B%E3%82%89%E3%81%AE%E7%9C%BA%E3%82%81%E3%83%BB%E5%8D%97%E5%90%91%E3%81%8D_-_panoramio.jpg', '2011-07-27',
    '奈半利港眺望', 'View toward Nahari Port'
  ),
  '奈半利駅': wikiPhoto(
    'nahari-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Tosa_Kuroshio_Railway_Nahari_Station.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Yasu', 'https://commons.wikimedia.org/wiki/User:Yasu', '2017-12-31',
    '奈半利駅', 'Nahari Station'
  ),
  'ホテルなはり': sourcePhoto(
    'nahari-stay-hotel.jpg',
    'ホテルなはりの客室写真',
    'Hotel Nahari room photo',
    'https://travel.rakuten.co.jp/HOTEL/20702/20702.html',
    '楽天トラベル'
  ),
  'ショップ ヨシダ': sourcePhoto('nahari-39007542-dish.jpg', 'ショップ ヨシダの料理写真', 'ショップ ヨシダ food photo', TABELOG_39007542, '食べログ'),
  'ドライブインなぎさ': sourcePhoto('nahari-39000567-dish.jpg', 'ドライブインなぎさの料理写真', 'ドライブインなぎさ food photo', TABELOG_39000567, '食べログ'),
  '笑福': sourcePhoto('nahari-39009187-dish.jpg', '笑福の料理写真', '笑福 food photo', TABELOG_39009187, '食べログ'),
  '楽園': sourcePhoto('nahari-39000994-dish.jpg', '楽園の料理写真', '楽園 food photo', TABELOG_39000994, '食べログ'),
  '豚福亭': sourcePhoto('nahari-39002185-dish.jpg', '豚福亭の料理写真', '豚福亭 food photo', TABELOG_39002185, '食べログ'),
  'イタリア食堂トンノ': sourcePhoto('nahari-39002438-dish.jpg', 'イタリア食堂トンノの料理写真', 'Italia Shokudo Tonno food photo', TABELOG_39002438, '食べログ'),
  '葉牡丹': sourcePhoto('nahari-39000909-dish.jpg', '葉牡丹の料理写真', 'Habotan food photo', TABELOG_39000909, '食べログ'),
  '長門寿司割烹': sourcePhoto('nahari-39003358-dish.jpg', '長門寿司割烹の料理写真', 'Nagato Sushi Kappo food photo', TABELOG_39003358, '食べログ'),
  '喰いものや 合': sourcePhoto('nahari-39007454-dish.jpg', '喰いものや 合の料理写真', 'Kuimonoya Ai food photo', TABELOG_39007454, '食べログ'),
  'ホテルなはり レストラン': sourcePhoto(
    'nahari-restaurant-dish.jpg',
    'ホテルなはりレストランのなはり御膳写真',
    'Hotel Nahari restaurant Nahari gozen photo',
    RAKUTEN_20702_GALLERY,
    '楽天トラベル'
  ),
  '奈半利町役場': wikiPhoto(
    'nahari-town-hall.jpg',
    COMMONS_TOWN_HALL,
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Vanquish0', COMMONS_TOWN_HALL, '2016-05-04',
    '奈半利町役場', 'Nahari Town Hall'
  ),
  '奈半利鉄道橋': wikiPhoto(
    'nahari-railway-bridge.jpg',
    COMMONS_RAIL_BRIDGE,
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian', 'https://commons.wikimedia.org/wiki/User:Navian', '2009-08-15',
    '奈半利の鉄道橋', 'Nahari railway bridge'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: NAHARI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: NAHARI.sources.accessed};
}

export const NAHARI_FACILITIES: readonly FacilityRow[] = [
  sight('nahari-sight-01', '奈半利中央公園', '高知県安芸郡奈半利町', null, 'https://commons.wikimedia.org/wiki/File:Nahari_central_park_202308.jpg', 33.4241767, 134.0209483),
  sight('nahari-sight-02', '加領郷灯台', '高知県安芸郡奈半利町加領郷', null, 'https://commons.wikimedia.org/wiki/File:Karyougou_toudai_20240319_1.jpg', 33.3855401, 134.0365610),
  sight('nahari-sight-03', '奈半利町甲', '高知県安芸郡奈半利町甲', null, 'https://commons.wikimedia.org/wiki/File:%E5%A5%88%E5%8D%8A%E5%88%A9%E7%94%BA%E7%94%B2_-_panoramio.jpg', 33.4140770, 134.0600880),
  sight('nahari-sight-04', '奈半利港眺望', '高知県安芸郡奈半利町', null, 'https://commons.wikimedia.org/wiki/File:%E3%81%8F%E3%82%8D%E9%89%84%E5%A5%88%E5%8D%8A%E5%88%A9%E9%A7%85%E3%81%8B%E3%82%89%E3%81%AE%E7%9C%BA%E3%82%81%E3%83%BB%E5%8D%97%E5%90%91%E3%81%8D_-_panoramio.jpg', 33.4250589, 134.0181116),
  sight('nahari-sight-05', '奈半利駅', '高知県安芸郡奈半利町', null, 'https://commons.wikimedia.org/wiki/File:Tosa_Kuroshio_Railway_Nahari_Station.jpg', 33.4248664, 134.0180436),
  sight('nahari-sight-06', '奈半利町役場', '高知県安芸郡奈半利町乙1659番地1', '0887-38-4011', COMMONS_TOWN_HALL, 33.4241767, 134.0209483),
  sight('nahari-sight-07', '奈半利鉄道橋', '高知県安芸郡奈半利町', null, COMMONS_RAIL_BRIDGE, 33.417967, 134.025733)
];
