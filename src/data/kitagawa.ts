/**
 * Kitagawa Village sourced facts. Do not invent population.
 * Hall / JIS from village HP / JIS X 0402 (accessed 2026-09-08). JIS 39305. Eighteenth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog/Rakuten dining + Rakuten stay/onsen + Commons experience/sights. Stay: ゆずの宿 客室和洋. Dining +ゆずの宿レストラン. Experience: モネの庭 散策. Onsen: 大浴場 (stay≠onsen). TG610 densify. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KITAGAWA = {
  nameJa: '北川村',
  nameEn: 'Kitagawa',
  reading: 'きたがわむら',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'kitagawa',
  jis: '39305',
  jlis: '393053',
  sameAs: 'https://www.kitagawamura.jp/',
  hall: {
    postalCode: '781-6441',
    addressJa: '高知県安芸郡北川村野友甲1530番地',
    addressEn: '1530 Notomo-ko, Kitagawa Village, Aki District, Kochi 781-6441, Japan',
    phone: '0887-32-1212'
  },
  sources: {
    home: 'https://www.kitagawamura.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%8C%97%E5%B7%9D%E6%9D%91',
    kankou: 'https://kitagawakanko.jp/',
    monet: 'https://commons.wikimedia.org/wiki/File:Monet-Marumottan-mizu02.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39305/rstLst/',
    yuzunoyado: 'https://travel.rakuten.co.jp/HOTEL/167471/167471.html',
    rintetsu: 'https://kitagawakanko.jp/rintetsu/index.html',
    accessed: '2026-09-09'
  }
} as const;

export const KITAGAWA_EXPECTED_ROW_COUNT = 9;
export const KITAGAWA_EXPECTED_GEO_COUNT = 9;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Monet's Garden Marmottan water garden. Hero title remains municipality name only. */
export const KITAGAWA_PLACE_PHOTO = wikiPhoto(
  'kitagawa-cover-monet.jpg',
  'https://commons.wikimedia.org/wiki/File:Monet-Marumottan-mizu02.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  'Earthboud1960', 'https://commons.wikimedia.org/wiki/User:Earthboud1960', '2016-07-20',
  '北川村モネの庭マルモッタンの水の庭', 'Monet\'s Garden Marmottan water garden, Kitagawa'
);

const TABELOG_39000118 = 'https://tabelog.com/kochi/A3902/A390202/39000118/';
const TABELOG_39007075 = 'https://tabelog.com/kochi/A3902/A390202/39007075/';
const TABELOG_39004173 = 'https://tabelog.com/kochi/A3902/A390202/39004173/';
const RAKUTEN_167471 = 'https://travel.rakuten.co.jp/HOTEL/167471/167471.html';
const RAKUTEN_GALLERY = 'https://travel.rakuten.co.jp/HOTEL/167471/gallery.html';
const MONET_HIKARI = 'https://commons.wikimedia.org/wiki/File:Monet-Marumottan-hikari02.jpg';
const HORIGAO = 'https://commons.wikimedia.org/wiki/File:%E5%A0%80%E3%83%B6%E7%94%9F%E6%A9%8B_-_panoramio.jpg';
const NAKAOKA_STATUE = 'https://commons.wikimedia.org/wiki/File:Statue_of_Nakaoka_Shintaro.jpg';

export const KITAGAWA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '北川村モネの庭マルモッタン': KITAGAWA_PLACE_PHOTO,
  '中岡慎太郎館': wikiPhoto(
    'kitagawa-nakaoka-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:Kitagawa_Nakaoka_Shintaro_Museum_1.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '京浜にけ', 'https://commons.wikimedia.org/wiki/File:Kitagawa_Nakaoka_Shintaro_Museum_1.JPG', '2010-08-27',
    '中岡慎太郎館', 'Nakaoka Shintaro Museum'
  ),
  '中岡慎太郎生家': wikiPhoto(
    'kitagawa-nakaoka-birthplace.jpg',
    'https://commons.wikimedia.org/wiki/File:Nakaoka_Shintaro_Birthplace.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Yanajin', 'https://commons.wikimedia.org/wiki/File:Nakaoka_Shintaro_Birthplace.jpg', '2009-04-11',
    '中岡慎太郎生家', 'Nakaoka Shintaro Birthplace'
  ),
  '北川村役場': wikiPhoto(
    'kitagawa-village-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Kitagawa_village_hall.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', 'https://commons.wikimedia.org/wiki/User:%E3%82%A2%E3%83%A9%E3%83%84%E3%82%AF', '2014-04-27',
    '北川村役場', 'Kitagawa Village Hall'
  ),
  '魚梁瀬ダム': wikiPhoto(
    'kitagawa-yanase-dam.jpg',
    'https://commons.wikimedia.org/wiki/File:Yanase_Reservoir.JPG',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    '河川一等兵', 'https://commons.wikimedia.org/wiki/File:Yanase_Reservoir.JPG', '2009-05-17',
    '魚梁瀬ダム', 'Yanase Dam'
  ),
  '北川村温泉 ゆずの宿': sourcePhoto(
    'kitagawa-stay-yuzunoyado.jpg',
    '北川村温泉 ゆずの宿の客室和洋写真',
    'Kitagawa Onsen Yuzu-no-Yado Japanese-Western room photo',
    RAKUTEN_167471,
    '楽天トラベル'
  ),
  '北川村温泉 ゆずの宿 大浴場': sourcePhoto(
    'kitagawa-onsen-yuzunoyado.jpg',
    '北川村温泉 ゆずの宿の温泉大浴場写真',
    'Kitagawa Onsen Yuzu-no-Yado large bath photo',
    RAKUTEN_167471,
    '楽天トラベル'
  ),
  'レストラン モネの家': sourcePhoto('kitagawa-39000118-dish.jpg', 'レストラン モネの家の料理写真', 'Restaurant Monet\'s House food photo', TABELOG_39000118, '食べログ'),
  '慎太郎食堂': sourcePhoto('kitagawa-39007075-dish.jpg', '慎太郎食堂の料理写真', 'Shintaro Shokudo food photo', TABELOG_39007075, '食べログ'),
  'いごっそラーメン店長': sourcePhoto('kitagawa-39004173-dish.jpg', 'いごっそラーメン店長の料理写真', 'Igosso Ramen Tenchō food photo', TABELOG_39004173, '食べログ'),
  'ゆずの宿 レストラン': sourcePhoto(
    'kitagawa-restaurant-dish.jpg',
    'ゆずの宿レストランの郷土前菜写真',
    'Yuzu-no-Yado restaurant appetizer photo',
    RAKUTEN_GALLERY,
    '楽天トラベル'
  ),
  'モネの庭 散策': wikiPhoto(
    'kitagawa-exp-monet.jpg',
    MONET_HIKARI,
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Earthboud1960', MONET_HIKARI, '2016-07-20',
    'モネの庭マルモッタン光の庭の散策写真', 'Monet\'s Garden Marmottan light garden walk'
  ),
  '堀ヶ生橋': wikiPhoto(
    'kitagawa-horigao-bridge.jpg',
    HORIGAO,
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', HORIGAO, '2015-11-09',
    '堀ヶ生橋', 'Horigao Bridge'
  ),
  '中岡慎太郎像': wikiPhoto(
    'kitagawa-nakaoka-statue.jpg',
    NAKAOKA_STATUE,
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    'おにく', NAKAOKA_STATUE, '2017',
    '中岡慎太郎像', 'Statue of Nakaoka Shintaro'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: KITAGAWA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: KITAGAWA.sources.accessed};
}

export const KITAGAWA_FACILITIES: readonly FacilityRow[] = [
  sight('kitagawa-sight-01', '北川村モネの庭マルモッタン', '高知県安芸郡北川村野友甲1100', '0887-32-1233', 'https://commons.wikimedia.org/wiki/File:Monet-Marumottan-mizu02.jpg', 33.4407251, 134.0357370),
  sight('kitagawa-sight-02', '中岡慎太郎館', '高知県安芸郡北川村柏木140', '0887-38-8600', 'https://commons.wikimedia.org/wiki/File:Kitagawa_Nakaoka_Shintaro_Museum_1.JPG', 33.4563570, 134.0573080),
  sight('kitagawa-sight-03', '中岡慎太郎生家', '高知県安芸郡北川村柏木', null, 'https://commons.wikimedia.org/wiki/File:Nakaoka_Shintaro_Birthplace.jpg', 33.4563570, 134.0573080),
  sight('kitagawa-sight-04', '北川村役場', '高知県安芸郡北川村野友甲1530番地', '0887-32-1212', 'https://commons.wikimedia.org/wiki/File:Kitagawa_village_hall.JPG', 33.4478600, 134.0421470),
  sight('kitagawa-sight-05', '魚梁瀬ダム', '高知県安芸郡北川村', null, 'https://commons.wikimedia.org/wiki/File:Yanase_Reservoir.JPG', 33.5923086, 134.1123891),
  sight('kitagawa-sight-06', '堀ヶ生橋', '高知県安芸郡北川村', null, HORIGAO, 33.527513, 134.130292),
  sight('kitagawa-sight-07', '中岡慎太郎像', '高知県安芸郡北川村柏木', null, NAKAOKA_STATUE, 33.4563570, 134.0573080),
  sight('kitagawa-onsen-01', '北川村温泉 ゆずの宿 大浴場', '高知県安芸郡北川村小島121', '0887-30-1526', RAKUTEN_167471, 33.4983556, 134.1004768),
  sight('kitagawa-experience-01', 'モネの庭 散策', '高知県安芸郡北川村野友甲1100', '0887-32-1233', 'https://kitagawakanko.jp/tourism/monet.html', 33.4407251, 134.0357370)
];
