/**
 * Hidaka Village sourced facts. Do not invent population.
 * Hall / JIS from village HP / JIS X 0402 / Wikipedia 日高村 (accessed 2026-09-08). JIS 39410. Twenty-eighth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町・大豊町・土佐町・大川村・仁淀川町・中土佐町・越知町・梼原町 (佐川町・田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: 貸切宿 芽 洋室ベッド LARGE (gallery mediaInfo「洋室にはセミダブルのベッド2つ合わせ…」cat 00000001). Onsen: 0 (stay≠onsen — private hinoki bath in rental, not public onsen). Shop/commerce honest 0. Dining honest 3.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const HIDAKA = {
  nameJa: '日高村',
  nameEn: 'Hidaka',
  reading: 'ひだかむら',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'hidaka',
  jis: '39410',
  jlis: '394106',
  sameAs: 'https://www.vill.hidaka.kochi.jp/',
  hall: {
    postalCode: '781-2194',
    addressJa: '高知県高岡郡日高村本郷61番地1',
    addressEn: '61-1 Hongo, Hidaka Village, Takaoka District, Kochi 781-2194, Japan',
    phone: '0889-24-5111'
  },
  sources: {
    home: 'https://www.vill.hidaka.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E6%97%A5%E9%AB%98%E6%9D%91',
    nagoshi: 'https://commons.wikimedia.org/wiki/File:%E5%90%8D%E8%B6%8A%E5%B1%8B%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39410/rstLst/',
    mei: 'https://travel.rakuten.co.jp/HOTEL/185303/185303.html',
    accessed: '2026-09-08'
  }
} as const;

export const HIDAKA_EXPECTED_ROW_COUNT = 5;
export const HIDAKA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Nagoshi Chinka Bridge on Niyodo River. Hero title remains municipality name only. */
export const HIDAKA_PLACE_PHOTO = wikiPhoto(
  'hidaka-cover-nagoshi.jpg',
  'https://commons.wikimedia.org/wiki/File:%E5%90%8D%E8%B6%8A%E5%B1%8B%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg',
  'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
  'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E5%90%8D%E8%B6%8A%E5%B1%8B%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg', '2014-11-21',
  '名越屋沈下橋', 'Nagoshi Chinka Bridge'
);

const TABELOG_39008674 = 'https://tabelog.com/kochi/A3903/A390301/39008674/';
const TABELOG_39005243 = 'https://tabelog.com/kochi/A3903/A390302/39005243/';
const TABELOG_39002217 = 'https://tabelog.com/kochi/A3903/A390302/39002217/';
const RAKUTEN_185303 = 'https://travel.rakuten.co.jp/HOTEL/185303/185303.html';

export const HIDAKA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '名越屋沈下橋': HIDAKA_PLACE_PHOTO,
  '日高村役場': wikiPhoto(
    'hidaka-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Hidaka_Village_Office_K%C5%8Dchi_Prefecture_202408041545.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    '0211 SKDGAKUCHO', 'https://commons.wikimedia.org/wiki/User:0211_SKDGAKUCHO', '2024-08-04',
    '日高村役場', 'Hidaka Village Hall'
  ),
  '小村神社': wikiPhoto(
    'hidaka-omura.jpg',
    'https://commons.wikimedia.org/wiki/File:Omura_shrine.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Bakkai', 'https://commons.wikimedia.org/wiki/User:Bakkai', '2008-03-25',
    '小村神社拝殿', 'Omura Shrine haiden'
  ),
  '日下駅': wikiPhoto(
    'hidaka-kusaka.jpg',
    'https://commons.wikimedia.org/wiki/File:Kusaka_station_01.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian', 'https://commons.wikimedia.org/wiki/User:Navian', '2010-05-30',
    '日下駅', 'Kusaka Station'
  ),
  '柳瀬橋': wikiPhoto(
    'hidaka-yanase.jpg',
    'https://commons.wikimedia.org/wiki/File:%E4%BB%81%E6%B7%80%E5%B7%9D%E3%81%AE%E6%9F%B3%E7%80%AC%E6%A9%8B%E3%81%AE%E7%A9%BA%E6%92%AE%E5%86%99%E7%9C%9F.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '谷本 一郎', 'https://commons.wikimedia.org/wiki/User:%E8%B0%B7%E6%9C%AC_%E4%B8%80%E9%83%8E', '2017-07-15',
    '仁淀川の柳瀬橋', 'Yanase Bridge on the Niyodo River'
  ),
  '貸切宿 芽': sourcePhoto(
    'hidaka-stay-western.jpg',
    '貸切宿 芽の洋室ベッド客室写真',
    'Vacation Rental MEI western-room bed photo',
    RAKUTEN_185303,
    '楽天トラベル'
  ),
  '村の小さな台所 おきな': sourcePhoto('hidaka-39008674-dish.jpg', '村の小さな台所 おきなの料理写真', 'Mura no Chiisana Daidokoro Okina food photo', TABELOG_39008674, '食べログ'),
  'マンマ亭': sourcePhoto('hidaka-39005243-dish.jpg', 'マンマ亭の料理写真', 'Mamma-tei food photo', TABELOG_39005243, '食べログ'),
  '龍鳳': sourcePhoto('hidaka-39002217-dish.jpg', '龍鳳の料理写真', 'Ryuho food photo', TABELOG_39002217, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: HIDAKA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: HIDAKA.sources.accessed};
}

export const HIDAKA_FACILITIES: readonly FacilityRow[] = [
  sight('hidaka-sight-01', '名越屋沈下橋', '高知県高岡郡日高村', null, 'https://commons.wikimedia.org/wiki/File:%E5%90%8D%E8%B6%8A%E5%B1%8B%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg', 33.572486, 133.355378),
  sight('hidaka-sight-02', '日高村役場', '高知県高岡郡日高村本郷61番地1', '0889-24-5111', 'https://commons.wikimedia.org/wiki/File:Hidaka_Village_Office_K%C5%8Dchi_Prefecture_202408041545.jpg', 33.5350863, 133.3732023),
  sight('hidaka-sight-03', '小村神社', '高知県高岡郡日高村下分', null, 'https://commons.wikimedia.org/wiki/File:Omura_shrine.jpg', 33.54327778, 133.393),
  sight('hidaka-sight-04', '日下駅', '高知県高岡郡日高村本郷', null, 'https://commons.wikimedia.org/wiki/File:Kusaka_station_01.jpg', 33.5337, 133.37133333),
  sight('hidaka-sight-05', '柳瀬橋', '高知県高岡郡日高村', null, 'https://commons.wikimedia.org/wiki/File:%E4%BB%81%E6%B7%80%E5%B7%9D%E3%81%AE%E6%9F%B3%E7%80%AC%E6%A9%8B%E3%81%AE%E7%A9%BA%E6%92%AE%E5%86%99%E7%9C%9F.jpg', 33.5623125, 133.3282885)
];
