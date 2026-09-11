/**
 * Toyo Town sourced facts. Do not invent population.
 * Hall / JIS from town Wikipedia / town HP facts (accessed 2026-09-08). JIS 39301. Fourteenth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: 東洋白浜リゾートホテル ツインルーム. Onsen: 0 (no bath mediaInfo key; stay≠onsen). TG610 densify: +hotel restaurant dining, +役場/野根川橋/甲浦駅. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TOYO = {
  nameJa: '東洋町',
  nameEn: 'Toyo',
  reading: 'とうようちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'toyo',
  jis: '39301',
  jlis: '393011',
  sameAs: 'https://www.town.toyo.kochi.jp/',
  hall: {
    postalCode: '781-7414',
    addressJa: '高知県安芸郡東洋町大字生見758番地3',
    addressEn: '758-3 Ikumi, Toyo Town, Aki District, Kochi 781-7414, Japan',
    phone: '0887-29-3111'
  },
  sources: {
    home: 'https://www.town.toyo.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%B4%8B%E7%94%BA',
    kankou: 'https://www.town.toyo.kochi.jp/',
    shirahama: 'https://commons.wikimedia.org/wiki/File:Sirahama_20240514_1.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39301/rstLst/',
    shirahamaResort: 'https://travel.rakuten.co.jp/HOTEL/193185/193185.html',
    accessed: '2026-09-09'
  }
} as const;

export const TOYO_EXPECTED_ROW_COUNT = 9;
export const TOYO_EXPECTED_GEO_COUNT = 9;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Shirahama beach / coast. */
export const TOYO_PLACE_PHOTO = wikiPhoto(
  'toyo-cover-shirahama.jpg',
  'https://commons.wikimedia.org/wiki/File:Sirahama_20240514_1.jpg',
  'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
  'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2024-05-14',
  '白浜海水浴場', 'Shirahama Beach, Toyo'
);

const TABELOG_39008915 = 'https://tabelog.com/kochi/A3902/A390203/39008915/';
const TABELOG_39000031 = 'https://tabelog.com/kochi/A3902/A390203/39000031/';
const TABELOG_39009169 = 'https://tabelog.com/kochi/A3902/A390203/39009169/';
const TABELOG_39003198 = 'https://tabelog.com/kochi/A3902/A390203/39003198/';
const TABELOG_39000908 = 'https://tabelog.com/kochi/A3902/A390203/39000908/';
const TABELOG_39007936 = 'https://tabelog.com/kochi/A3902/A390203/39007936/';
const TABELOG_39006982 = 'https://tabelog.com/kochi/A3902/A390203/39006982/';

const RAKUTEN_193185_GALLERY = 'https://travel.rakuten.co.jp/HOTEL/193185/gallery.html';
const COMMONS_TOWN_HALL = 'https://commons.wikimedia.org/wiki/File:Toyo_town_hall.JPG';
const COMMONS_NONE_BRIDGE = 'https://commons.wikimedia.org/wiki/File:%E9%87%8E%E6%A0%B9%E5%B7%9D%E6%A9%8B_-_panoramio.jpg';
const COMMONS_KANNOURA_ST = 'https://commons.wikimedia.org/wiki/File:%E7%94%B2%E6%B5%A6%E9%A7%85_-_panoramio.jpg';

export const TOYO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '白浜海水浴場': TOYO_PLACE_PHOTO,
  '生見海岸': wikiPhoto(
    'toyo-ikumi.jpg',
    'https://commons.wikimedia.org/wiki/File:Ikumi_coast_20240514_1.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2024-05-14',
    '生見海岸', 'Ikumi Coast, Toyo'
  ),
  '甲浦': wikiPhoto(
    'toyo-kannoura.jpg',
    'https://commons.wikimedia.org/wiki/File:Kannoura_-_panoramio.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Nagono', 'https://commons.wikimedia.org/wiki/File:Kannoura_-_panoramio.jpg', '2005-08-19',
    '甲浦', 'Kannoura, Toyo'
  ),
  '法界上人堂': wikiPhoto(
    'toyo-houkai.jpg',
    'https://commons.wikimedia.org/wiki/File:Houkaisyounindou.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2017-12-25',
    '法界上人堂', 'Hōkai Shōnin-dō, Toyo'
  ),
  '野根地区': wikiPhoto(
    'toyo-none.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%9D%B1%E6%B4%8B%E7%94%BA%E9%87%8E%E6%A0%B9_-_panoramio.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Yobito KAYANUMA', 'https://commons.wikimedia.org/wiki/File:%E6%9D%B1%E6%B4%8B%E7%94%BA%E9%87%8E%E6%A0%B9_-_panoramio.jpg', '2011-02-13',
    '野根地区', 'None district, Toyo'
  ),
  '海の駅東洋町': wikiPhoto(
    'toyo-uminoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Uminoeki_touyoutyou_20240514_1.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2024-05-15',
    '海の駅東洋町', 'Umi-no-Eki Toyo'
  ),
  '東洋白浜リゾートホテル': sourcePhoto(
    'toyo-stay-shirahama.jpg',
    '東洋白浜リゾートホテルの客室写真',
    'Toyo Shirahama Resort Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/193185/193185.html',
    '楽天トラベル'
  ),
  '海駅食堂': sourcePhoto('toyo-39008915-dish.jpg', '海駅食堂の料理写真', '海駅食堂 food photo', TABELOG_39008915, '食べログ'),
  'アント・ダイナ': sourcePhoto('toyo-39000031-dish.jpg', 'アント・ダイナの料理写真', 'アント・ダイナ food photo', TABELOG_39000031, '食べログ'),
  '和ダイニング ふぅふぅ': sourcePhoto('toyo-39009169-dish.jpg', '和ダイニング ふぅふぅの料理写真', '和ダイニング ふぅふぅ food photo', TABELOG_39009169, '食べログ'),
  '道の駅 東洋町': sourcePhoto('toyo-39003198-dish.jpg', '道の駅 東洋町の料理写真', '道の駅 東洋町 food photo', TABELOG_39003198, '食べログ'),
  'いせや食堂': sourcePhoto('toyo-39000908-dish.jpg', 'いせや食堂の料理写真', 'いせや食堂 food photo', TABELOG_39000908, '食べログ'),
  'GRILL JOIN': sourcePhoto('toyo-39007936-dish.jpg', 'GRILL JOINの料理写真', 'GRILL JOIN food photo', TABELOG_39007936, '食べログ'),
  '野根キッチン': sourcePhoto('toyo-39006982-dish.jpg', '野根キッチンの料理写真', '野根キッチン food photo', TABELOG_39006982, '食べログ'),
  '東洋白浜リゾートホテル レストラン': sourcePhoto(
    'toyo-restaurant-dish.jpg',
    '東洋白浜リゾートホテルレストランの料理写真',
    'Toyo Shirahama Resort Hotel restaurant food photo',
    RAKUTEN_193185_GALLERY,
    '楽天トラベル'
  ),
  '東洋町役場': wikiPhoto(
    'toyo-town-hall.jpg',
    COMMONS_TOWN_HALL,
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', COMMONS_TOWN_HALL, '2014-04-27',
    '東洋町役場', 'Toyo Town Hall'
  ),
  '野根川橋': wikiPhoto(
    'toyo-none-bridge.jpg',
    COMMONS_NONE_BRIDGE,
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'panoramio', COMMONS_NONE_BRIDGE, '2011-02-13',
    '野根川橋', 'None-gawa Bridge, Toyo'
  ),
  '甲浦駅': wikiPhoto(
    'toyo-kannoura-station.jpg',
    COMMONS_KANNOURA_ST,
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'panoramio', COMMONS_KANNOURA_ST, '2011-02-13',
    '甲浦駅', 'Kannoura Station'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: TOYO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: TOYO.sources.accessed};
}

export const TOYO_FACILITIES: readonly FacilityRow[] = [
  sight('toyo-sight-01', '白浜海水浴場', '高知県安芸郡東洋町白浜', null, 'https://commons.wikimedia.org/wiki/File:Sirahama_20240514_1.jpg', 33.5422279, 134.2937422),
  sight('toyo-sight-02', '生見海岸', '高知県安芸郡東洋町生見', null, 'https://commons.wikimedia.org/wiki/File:Ikumi_coast_20240514_1.jpg', 33.5252970, 134.2820477),
  sight('toyo-sight-03', '甲浦', '高知県安芸郡東洋町河内', null, 'https://commons.wikimedia.org/wiki/File:Kannoura_-_panoramio.jpg', 33.5469012, 134.2877985),
  sight('toyo-sight-04', '法界上人堂', '高知県安芸郡東洋町', null, 'https://commons.wikimedia.org/wiki/File:Houkaisyounindou.jpg', 33.5469012, 134.2877985),
  sight('toyo-sight-05', '野根地区', '高知県安芸郡東洋町野根', null, 'https://commons.wikimedia.org/wiki/File:%E6%9D%B1%E6%B4%8B%E7%94%BA%E9%87%8E%E6%A0%B9_-_panoramio.jpg', 33.5343657, 134.2306566),
  sight('toyo-experience-01', '海の駅東洋町', '高知県安芸郡東洋町白浜', null, 'https://commons.wikimedia.org/wiki/File:Uminoeki_touyoutyou_20240514_1.jpg', 33.5431947, 134.2947647),
  sight('toyo-sight-06', '東洋町役場', '高知県安芸郡東洋町大字生見758番地3', '0887-29-3111', COMMONS_TOWN_HALL, 33.5279733, 134.2800534),
  sight('toyo-sight-07', '野根川橋', '高知県安芸郡東洋町野根', null, COMMONS_NONE_BRIDGE, 33.501650, 134.266800),
  sight('toyo-sight-08', '甲浦駅', '高知県安芸郡東洋町甲浦', null, COMMONS_KANNOURA_ST, 33.546483, 134.287300)
];
