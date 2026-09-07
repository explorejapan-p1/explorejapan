/**
 * Yusuhara Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 / Wikipedia 檮原町 (accessed 2026-09-08). JIS 39405. Twenty-seventh Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町・大豊町・土佐町・大川村・仁淀川町・中土佐町・越知町 (佐川町・田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: 雲の上のホテル別館・マルシェユスハラ ツインルーム LARGE (gallery mediaInfo「ツインルーム」cat 00000001). Onsen: 0 (stay≠onsen — baths at 雲の上の温泉 separate). Shop/commerce honest 0. Dining honest 3.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const YUSUHARA = {
  nameJa: '梼原町',
  nameEn: 'Yusuhara',
  reading: 'ゆすはらちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'yusuhara',
  jis: '39405',
  jlis: '394050',
  sameAs: 'https://www.town.yusuhara.lg.jp/',
  hall: {
    postalCode: '785-0695',
    addressJa: '高知県高岡郡梼原町梼原1444番地1',
    addressEn: '1444-1 Yusuhara, Yusuhara Town, Takaoka District, Kochi 785-0695, Japan',
    phone: '0889-65-1111'
  },
  sources: {
    home: 'https://www.town.yusuhara.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E6%AA%8B%E5%8E%9F%E7%94%BA',
    tengu: 'https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E7%8B%97%E9%AB%98%E5%8E%9F_-_panoramio.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39405/rstLst/',
    marche: 'https://travel.rakuten.co.jp/HOTEL/109505/109505.html',
    accessed: '2026-09-08'
  }
} as const;

export const YUSUHARA_EXPECTED_ROW_COUNT = 5;
export const YUSUHARA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Tengu Highland (Shikoku Karst). Hero title remains municipality name only. */
export const YUSUHARA_PLACE_PHOTO = wikiPhoto(
  'yusuhara-cover-tengu.jpg',
  'https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E7%8B%97%E9%AB%98%E5%8E%9F_-_panoramio.jpg',
  'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
  'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E7%8B%97%E9%AB%98%E5%8E%9F_-_panoramio.jpg', '2014-10-08',
  '天狗高原', 'Tengu Highland'
);

const TABELOG_39000002 = 'https://tabelog.com/kochi/A3903/A390303/39000002/';
const TABELOG_39003589 = 'https://tabelog.com/kochi/A3903/A390303/39003589/';
const TABELOG_39003612 = 'https://tabelog.com/kochi/A3903/A390303/39003612/';
const RAKUTEN_109505 = 'https://travel.rakuten.co.jp/HOTEL/109505/109505.html';

export const YUSUHARA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '天狗高原': YUSUHARA_PLACE_PHOTO,
  '梼原町役場': wikiPhoto(
    'yusuhara-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Yusuhara_town_office.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Kaityu20', 'https://commons.wikimedia.org/wiki/User:Kaityu20', '2013-12-01',
    '梼原町役場', 'Yusuhara Town Hall'
  ),
  'まちの駅「ゆすはら」': wikiPhoto(
    'yusuhara-machinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%BE%E3%81%A1%E3%81%AE%E9%A7%85%E3%80%8C%E3%82%86%E3%81%99%E3%81%AF%E3%82%89%E3%80%8D.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Asset utilitist', 'https://commons.wikimedia.org/wiki/User:Asset_utilitist', '2026-05-23',
    'まちの駅「ゆすはら」', 'Machi-no-eki Yusuhara'
  ),
  '韮ヶ峠': wikiPhoto(
    'yusuhara-niraga.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%9F%AE%E3%83%B6%E5%B3%A0%E3%81%A8%E9%BE%8D%E9%A6%AC%E5%83%8F.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Koda6029', 'https://commons.wikimedia.org/wiki/User:Koda6029', '2021-05-03',
    '韮ヶ峠と龍馬像', 'Niraga Pass and Ryoma statue'
  ),
  'いちやがもり': wikiPhoto(
    'yusuhara-ichiyaga.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%84%E3%81%A1%E3%82%84%E3%81%8C%E3%82%82%E3%82%8A.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2015-08-24',
    'いちやがもり（源氏ヶ駄場）', 'Ichiyagamori at Genjigadaba'
  ),
  '雲の上のホテル別館・マルシェユスハラ': sourcePhoto(
    'yusuhara-stay-twin.jpg',
    '雲の上のホテル別館・マルシェユスハラのツインルーム客室写真',
    'Kumo-no-Ue Hotel Annex Marche Yusuhara twin-room photo',
    RAKUTEN_109505,
    '楽天トラベル'
  ),
  '雲の上のレストラン': sourcePhoto('yusuhara-39000002-dish.jpg', '雲の上のレストランの料理写真', 'Kumo-no-Ue Restaurant food photo', TABELOG_39000002, '食べログ'),
  'くさぶき': sourcePhoto('yusuhara-39003589-dish.jpg', 'くさぶきの料理写真', 'Kusabuki food photo', TABELOG_39003589, '食べログ'),
  'シェムワ': sourcePhoto('yusuhara-39003612-dish.jpg', 'シェムワの料理写真', 'Chez Moi food photo', TABELOG_39003612, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: YUSUHARA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: YUSUHARA.sources.accessed};
}

export const YUSUHARA_FACILITIES: readonly FacilityRow[] = [
  sight('yusuhara-sight-01', '天狗高原', '高知県高岡郡梼原町', null, 'https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E7%8B%97%E9%AB%98%E5%8E%9F_-_panoramio.jpg', 33.47285, 132.988905556),
  sight('yusuhara-sight-02', '梼原町役場', '高知県高岡郡梼原町梼原1444番地1', '0889-65-1111', 'https://commons.wikimedia.org/wiki/File:Yusuhara_town_office.jpg', 33.39219, 132.92703),
  sight('yusuhara-sight-03', 'まちの駅「ゆすはら」', '高知県高岡郡梼原町梼原1196-1', '0889-65-1288', 'https://commons.wikimedia.org/wiki/File:%E3%81%BE%E3%81%A1%E3%81%AE%E9%A7%85%E3%80%8C%E3%82%86%E3%81%99%E3%81%AF%E3%82%89%E3%80%8D.jpg', 33.3937323, 132.9267913),
  sight('yusuhara-sight-04', '韮ヶ峠', '高知県高岡郡梼原町', null, 'https://commons.wikimedia.org/wiki/File:%E9%9F%AE%E3%83%B6%E5%B3%A0%E3%81%A8%E9%BE%8D%E9%A6%AC%E5%83%8F.jpg', 33.47425, 132.83825),
  sight('yusuhara-sight-05', 'いちやがもり', '高知県高岡郡梼原町', null, 'https://commons.wikimedia.org/wiki/File:%E3%81%84%E3%81%A1%E3%82%84%E3%81%8C%E3%82%82%E3%82%8A.jpg', 33.47222222222222, 132.86583333333334)
];
