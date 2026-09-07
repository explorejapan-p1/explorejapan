/**
 * Nakatosa Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 / Wikipedia (accessed 2026-09-08). JIS 39401. Twenty-fifth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町・大豊町・土佐町・大川村・仁淀川町 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: 四万十源流の里 本館和室 LARGE (mediaInfo「本館和室」cat 00000001). Onsen: 0 (stay≠onsen). Shop/commerce honest 0. Dining honest 3.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const NAKATOSA = {
  nameJa: '中土佐町',
  nameEn: 'Nakatosa',
  reading: 'なかとさちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'nakatosa',
  jis: '39401',
  jlis: '394017',
  sameAs: 'https://www.town.nakatosa.lg.jp/',
  hall: {
    postalCode: '789-1301',
    addressJa: '高知県高岡郡中土佐町久礼6663-1',
    addressEn: '6663-1 Kure, Nakatosa Town, Takaoka District, Kochi 789-1301, Japan',
    phone: '0889-52-2211'
  },
  sources: {
    home: 'https://www.town.nakatosa.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E4%B8%AD%E5%9C%9F%E4%BD%90%E7%94%BA',
    stayList: 'https://www.town.nakatosa.lg.jp/life/detail.php?hdnKey=511',
    hutanazima: 'https://commons.wikimedia.org/wiki/File:Hutanazima_20240507_2.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39401/rstLst/',
    genryu: 'https://travel.rakuten.co.jp/HOTEL/162815/162815.html',
    accessed: '2026-09-08'
  }
} as const;

export const NAKATOSA_EXPECTED_ROW_COUNT = 5;
export const NAKATOSA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Futana Islands (Hutanazima). Hero title remains municipality name only. */
export const NAKATOSA_PLACE_PHOTO = wikiPhoto(
  'nakatosa-cover-hutanazima.jpg',
  'https://commons.wikimedia.org/wiki/File:Hutanazima_20240507_2.jpg',
  'CC0', 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
  'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2024-05-07',
  '双名島', 'Futana Islands (Hutanazima)'
);

const TABELOG_39000360 = 'https://tabelog.com/kochi/A3903/A390301/39000360/';
const TABELOG_39003609 = 'https://tabelog.com/kochi/A3903/A390301/39003609/';
const TABELOG_39006072 = 'https://tabelog.com/kochi/A3903/A390301/39006072/';
const RAKUTEN_162815 = 'https://travel.rakuten.co.jp/HOTEL/162815/162815.html';

export const NAKATOSA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '双名島': NAKATOSA_PLACE_PHOTO,
  '中土佐町役場': wikiPhoto(
    'nakatosa-town-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Nakatosa_town-office.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Bakkai', 'https://commons.wikimedia.org/wiki/User:Bakkai', '2008-12-18',
    '中土佐町役場', 'Nakatosa Town Hall'
  ),
  '久礼大正町市場': wikiPhoto(
    'nakatosa-taisho-market.jpg',
    'https://commons.wikimedia.org/wiki/File:%E4%B9%85%E7%A4%BC%E5%A4%A7%E6%AD%A3%E7%94%BA%E5%B8%82%E5%A0%B4.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E4%B9%85%E7%A4%BC%E5%A4%A7%E6%AD%A3%E7%94%BA%E5%B8%82%E5%A0%B4.jpg', '2013-03-17',
    '久礼大正町市場', 'Kure Taisho-machi Market'
  ),
  '道の駅なかとさ': wikiPhoto(
    'nakatosa-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Nakatosa_mitinoeki.png',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '中土佐くん', 'https://commons.wikimedia.org/wiki/User:%E4%B8%AD%E5%9C%9F%E4%BD%90%E3%81%8F%E3%82%93', '2022-02-12',
    '道の駅なかとさ', 'Michinoeki Nakatosa'
  ),
  '中土佐町立美術館': wikiPhoto(
    'nakatosa-art-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:Nakatosa_Town_Art_Museum_ac.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Asturio Cantabrio', 'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio', '2023-03',
    '中土佐町立美術館', 'Nakatosa Town Art Museum'
  ),
  '四万十源流の里': sourcePhoto(
    'nakatosa-stay-genryu.jpg',
    '四万十源流の里の本館和室客室写真',
    'Shimanto Genryu-no-Sato main-building Japanese-room photo',
    RAKUTEN_162815,
    '楽天トラベル'
  ),
  '市場のめし屋 浜ちゃん': sourcePhoto('nakatosa-39000360-dish.jpg', '市場のめし屋浜ちゃんの料理写真', 'Ichiba no Meshiya Hamachan food photo', TABELOG_39000360, '食べログ'),
  'お好み焼き・ラーメン ふるさと': sourcePhoto('nakatosa-39003609-dish.jpg', 'お好み焼き・ラーメンふるさとの料理写真', 'Okonomiyaki Ramen Furusato food photo', TABELOG_39003609, '食べログ'),
  'おもや': sourcePhoto('nakatosa-39006072-dish.jpg', 'おもやの料理写真', 'Omoya food photo', TABELOG_39006072, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: NAKATOSA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: NAKATOSA.sources.accessed};
}

export const NAKATOSA_FACILITIES: readonly FacilityRow[] = [
  sight('nakatosa-sight-01', '双名島', '高知県高岡郡中土佐町久礼', null, 'https://commons.wikimedia.org/wiki/File:Hutanazima_20240507_2.jpg', 33.3288976, 133.2492164),
  sight('nakatosa-sight-02', '中土佐町役場', '高知県高岡郡中土佐町久礼6663-1', '0889-52-2211', 'https://commons.wikimedia.org/wiki/File:Nakatosa_town-office.jpg', 33.3292639, 133.2248237),
  sight('nakatosa-sight-03', '久礼大正町市場', '高知県高岡郡中土佐町久礼大正町', null, 'https://commons.wikimedia.org/wiki/File:%E4%B9%85%E7%A4%BC%E5%A4%A7%E6%AD%A3%E7%94%BA%E5%B8%82%E5%A0%B4.jpg', 33.32929667, 133.23073167),
  sight('nakatosa-sight-04', '道の駅なかとさ', '高知県高岡郡中土佐町久礼8645-2', null, 'https://commons.wikimedia.org/wiki/File:Nakatosa_mitinoeki.png', 33.32325, 133.23561),
  sight('nakatosa-sight-05', '中土佐町立美術館', '高知県高岡郡中土佐町久礼8010番地23', '0889-52-4444', 'https://commons.wikimedia.org/wiki/File:Nakatosa_Town_Art_Museum_ac.jpg', 33.3214, 133.235672)
];
