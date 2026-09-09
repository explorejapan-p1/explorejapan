/**
 * Tadotsu Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-08). JIS 37404. Sixteenth Kagawa hub after … + Ayagawa.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Honest 0 onsen/shop/commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TADOTSU = {
  nameJa: '多度津町',
  nameEn: 'Tadotsu',
  reading: 'たどつちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'tadotsu',
  jis: '37404',
  jlis: '374041',
  sameAs: 'https://www.town.tadotsu.lg.jp/',
  hall: {
    postalCode: '764-8501',
    addressJa: '香川県仲多度郡多度津町栄町三丁目3番95号',
    addressEn: '3-3-95 Sakae-cho, Tadotsu, Nakatado District, Kagawa 764-8501, Japan',
    phone: '0877-33-1110'
  },
  sources: {
    home: 'https://www.town.tadotsu.lg.jp/',
    hall: 'https://www.town.tadotsu.lg.jp/',
    kankou: 'https://www.town.tadotsu.lg.jp/',
    kaiganji: 'https://ja.wikipedia.org/wiki/%E6%B5%B7%E5%B2%B8%E5%AF%BA',
    tabelogCity: 'https://tabelog.com/kagawa/C37404/rstLst/',
    toyota: 'https://travel.rakuten.co.jp/HOTEL/137791/137791.html',
    accessed: '2026-09-08'
  }
} as const;

export const TADOTSU_EXPECTED_ROW_COUNT = 4;
export const TADOTSU_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Kaiganji — strongest attributable Tadotsu landmark. */
export const TADOTSU_PLACE_PHOTO = wikiPhoto(
  'tadotsu-kaiganji.jpg',
  'https://commons.wikimedia.org/wiki/File:Kaiganji20220414_1.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2022-04-12',
  '海岸寺（香川県多度津町）', 'Kaiganji temple, Tadotsu, Kagawa'
);

const TABELOG_37009890 = 'https://tabelog.com/kagawa/A3702/A370202/37009890/';
const TABELOG_37014118 = 'https://tabelog.com/kagawa/A3702/A370202/37014118/';
const TABELOG_37003262 = 'https://tabelog.com/kagawa/A3702/A370202/37003262/';
const TABELOG_37014692 = 'https://tabelog.com/kagawa/A3702/A370202/37014692/';
const TABELOG_37012381 = 'https://tabelog.com/kagawa/A3702/A370202/37012381/';
const TABELOG_37000680 = 'https://tabelog.com/kagawa/A3702/A370202/37000680/';
const TABELOG_37014261 = 'https://tabelog.com/kagawa/A3702/A370202/37014261/';
const TABELOG_37004238 = 'https://tabelog.com/kagawa/A3702/A370202/37004238/';
const TABELOG_37014340 = 'https://tabelog.com/kagawa/A3702/A370202/37014340/';
const TABELOG_37003831 = 'https://tabelog.com/kagawa/A3702/A370202/37003831/';
const TABELOG_37014119 = 'https://tabelog.com/kagawa/A3702/A370202/37014119/';
const TABELOG_37010071 = 'https://tabelog.com/kagawa/A3702/A370202/37010071/';
const TABELOG_37013805 = 'https://tabelog.com/kagawa/A3702/A370202/37013805/';
const TABELOG_37000162 = 'https://tabelog.com/kagawa/A3702/A370202/37000162/';
const TABELOG_37009609 = 'https://tabelog.com/kagawa/A3702/A370202/37009609/';
const TABELOG_37011885 = 'https://tabelog.com/kagawa/A3702/A370202/37011885/';

/** Exact travel/sight name_ja only. */
export const TADOTSU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '海岸寺': TADOTSU_PLACE_PHOTO,
  '桃陵公園': wikiPhoto(
    'tadotsu-toryo-parking.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%A1%83%E9%99%B5%E5%85%AC%E5%9C%92_%E9%A7%90%E8%BB%8A%E5%A0%B4.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'たいたいたいたい', 'https://commons.wikimedia.org/wiki/User:%E3%81%9F%E3%81%84%E3%81%9F%E3%81%84%E3%81%9F%E3%81%84%E3%81%9F%E3%81%84', '2023-01-29',
    '桃陵公園（多度津町）', 'Toryo Park, Tadotsu'
  ),
  '多度津駅': wikiPhoto(
    'tadotsu-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Tadotsu_Station-2018.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Gohachiyasu1214', 'https://commons.wikimedia.org/wiki/User:Gohachiyasu1214', '2018-10-16',
    '多度津駅', 'Tadotsu Station'
  ),
  '多度津港': wikiPhoto(
    'tadotsu-port.jpg',
    'https://commons.wikimedia.org/wiki/File:Tadotsu_port2.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'ブルーノ・プラス', 'https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AB%E3%83%BC%E3%83%8E%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B9', '2023-02',
    '多度津港', 'Tadotsu Port'
  ),
  'ホテル　トヨタ': sourcePhoto(
    'tadotsu-stay-toyota.jpg',
    'ホテル　トヨタの客室写真',
    'Hotel Toyota room photo',
    'https://travel.rakuten.co.jp/HOTEL/137791/137791.html',
    '楽天トラベル'
  ),
  '古民家ステイ　香露軒': sourcePhoto(
    'tadotsu-stay-koroken.jpg',
    '古民家ステイ　香露軒の客室写真',
    '古民家ステイ　香露軒 room photo',
    'https://travel.rakuten.co.jp/HOTEL/162766/162766.html',
    '楽天トラベル'
  ),
  '空と家　本棟　＾': sourcePhoto(
    'tadotsu-stay-soratoie.jpg',
    '空と家　本棟　＾の客室写真',
    '空と家　本棟　＾ room photo',
    'https://travel.rakuten.co.jp/HOTEL/190305/190305.html',
    '楽天トラベル'
  ),
  'ＺＥＲＯ　ＢＡＳＥ　ｖｉｌｌａ　（泊Ｒｕｔｔｏ）': sourcePhoto(
    'tadotsu-stay-zerobase.jpg',
    'ＺＥＲＯ　ＢＡＳＥ　ｖｉｌｌａ　（泊Ｒｕｔｔｏ）の客室写真',
    'ＺＥＲＯ　ＢＡＳＥ　ｖｉｌｌａ　（泊Ｒｕｔｔｏ） room photo',
    'https://travel.rakuten.co.jp/HOTEL/191454/191454.html',
    '楽天トラベル'
  ),
  'マホロバハウス': sourcePhoto(
    'tadotsu-stay-mahoroba.jpg',
    'マホロバハウスの客室写真',
    'マホロバハウス room photo',
    'https://travel.rakuten.co.jp/HOTEL/199115/199115.html',
    '楽天トラベル'
  ),
  'ペットと泊まれる宿　純華／民泊': sourcePhoto(
    'tadotsu-stay-junka.jpg',
    'ペットと泊まれる宿　純華／民泊の客室写真',
    'ペットと泊まれる宿　純華／民泊 room photo',
    'https://travel.rakuten.co.jp/HOTEL/200719/200719.html',
    '楽天トラベル'
  ),
  '焼き肉専門店 成屋': sourcePhoto('tadotsu-37009890-dish.jpg', '焼き肉専門店 成屋の料理写真', '焼き肉専門店 成屋 food photo', TABELOG_37009890, '食べログ'),
  'Base65Plus': sourcePhoto('tadotsu-37014118-dish.jpg', 'Base65Plusの料理写真', 'Base65Plus food photo', TABELOG_37014118, '食べログ'),
  '海食処 笑門家': sourcePhoto('tadotsu-37003262-dish.jpg', '海食処 笑門家の料理写真', '海食処 笑門家 food photo', TABELOG_37003262, '食べログ'),
  '讃岐らぁ麺 伊吹いりこセンター 根ッCO LABO 多度津店': sourcePhoto('tadotsu-37014692-dish.jpg', '讃岐らぁ麺 伊吹いりこセンター 根ッCO LABO 多度津店の料理写真', '讃岐らぁ麺 伊吹いりこセンター 根ッCO LABO 多度津店 food photo', TABELOG_37014692, '食べログ'),
  '家中舎': sourcePhoto('tadotsu-37012381-dish.jpg', '家中舎の料理写真', '家中舎 food photo', TABELOG_37012381, '食べログ'),
  'ひろ濱うどん': sourcePhoto('tadotsu-37000680-dish.jpg', 'ひろ濱うどんの料理写真', 'ひろ濱うどん food photo', TABELOG_37000680, '食べログ'),
  'すずめの酒場': sourcePhoto('tadotsu-37014261-dish.jpg', 'すずめの酒場の料理写真', 'すずめの酒場 food photo', TABELOG_37014261, '食べログ'),
  'お好み焼 よこた': sourcePhoto('tadotsu-37004238-dish.jpg', 'お好み焼 よこたの料理写真', 'お好み焼 よこた food photo', TABELOG_37004238, '食べログ'),
  '御晩菜 糸': sourcePhoto('tadotsu-37014340-dish.jpg', '御晩菜 糸の料理写真', '御晩菜 糸 food photo', TABELOG_37014340, '食べログ'),
  'わかやま': sourcePhoto('tadotsu-37003831-dish.jpg', 'わかやまの料理写真', 'わかやま food photo', TABELOG_37003831, '食べログ'),
  '絹の館': sourcePhoto('tadotsu-37014119-dish.jpg', '絹の館の料理写真', '絹の館 food photo', TABELOG_37014119, '食べログ'),
  '麦笑': sourcePhoto('tadotsu-37010071-dish.jpg', '麦笑の料理写真', '麦笑 food photo', TABELOG_37010071, '食べログ'),
  '根ッ子': sourcePhoto('tadotsu-37013805-dish.jpg', '根ッ子の料理写真', '根ッ子 food photo', TABELOG_37013805, '食べログ'),
  '上海軒': sourcePhoto('tadotsu-37000162-dish.jpg', '上海軒の料理写真', '上海軒 food photo', TABELOG_37000162, '食べログ'),
  '焼き小屋 さと': sourcePhoto('tadotsu-37009609-dish.jpg', '焼き小屋 さとの料理写真', '焼き小屋 さと food photo', TABELOG_37009609, '食べログ'),
  '台湾料理 趙記': sourcePhoto('tadotsu-37011885-dish.jpg', '台湾料理 趙記の料理写真', '台湾料理 趙記 food photo', TABELOG_37011885, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: TADOTSU.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: TADOTSU.sources.accessed};
}

export const TADOTSU_FACILITIES: readonly FacilityRow[] = [
  sight('tadotsu-sight-01', '海岸寺', '香川県仲多度郡多度津町西白方', null, 'https://ja.wikipedia.org/wiki/%E6%B5%B7%E5%B2%B8%E5%AF%BA', 34.253673, 133.7298512),
  sight('tadotsu-sight-02', '多度津駅', '香川県仲多度郡多度津町栄町三丁目', null, 'https://www.town.tadotsu.lg.jp/', 34.27108889, 133.75673611),
  sight('tadotsu-sight-03', '多度津港', '香川県仲多度郡多度津町西港町', null, 'https://www.town.tadotsu.lg.jp/', 34.26818, 133.737743),
  sight('tadotsu-experience-01', '桃陵公園', '香川県仲多度郡多度津町', null, 'https://www.town.tadotsu.lg.jp/', 34.26972222, 133.7475)
];
