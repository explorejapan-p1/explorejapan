/**
 * Otoyo Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 (accessed 2026-09-08). JIS 39344. Twenty-first Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/experience + Commons sights. Stay: 大豊の森. Dining densify TG610. Experience: 大豊の森 薪割り体験. Onsen: 0 (private bath; stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const OTOYO = {
  nameJa: '大豊町',
  nameEn: 'Otoyo',
  reading: 'おおとよちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'otoyo',
  jis: '39344',
  jlis: '393440',
  sameAs: 'https://www.town.otoyo.kochi.jp/',
  hall: {
    postalCode: '789-0392',
    addressJa: '高知県長岡郡大豊町津家1626番地',
    addressEn: '1626 Tsuge, Otoyo Town, Nagaoka District, Kochi 789-0392, Japan',
    phone: '0887-72-0450'
  },
  sources: {
    home: 'https://www.town.otoyo.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E8%B1%8A%E7%94%BA',
    yakuba: 'https://www.town.otoyo.kochi.jp/yakuba/',
    kankou: 'https://www.town.otoyo.kochi.jp/kanko/',
    burakuji: 'https://commons.wikimedia.org/wiki/File:Burakuji_01.JPG',
    tabelogCity: 'https://tabelog.com/kochi/C39344/rstLst/',
    otoyonomori: 'https://travel.rakuten.co.jp/HOTEL/184242/184242.html',
    accessed: '2026-09-09'
  }
} as const;

export const OTOYO_EXPECTED_ROW_COUNT = 8;
export const OTOYO_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Buraku-ji. Hero title remains municipality name only. */
export const OTOYO_PLACE_PHOTO = wikiPhoto(
  'otoyo-cover-burakuji.jpg',
  'https://commons.wikimedia.org/wiki/File:Burakuji_01.JPG',
  'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
  'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-06-06',
  '豊楽寺', 'Buraku-ji Temple'
);

const TABELOG_39000436 = 'https://tabelog.com/kochi/A3901/A390104/39000436/';
const TABELOG_39006349 = 'https://tabelog.com/kochi/A3901/A390104/39006349/';
const TABELOG_39006981 = 'https://tabelog.com/kochi/A3901/A390104/39006981/';
const TABELOG_39002103 = 'https://tabelog.com/kochi/A3901/A390104/39002103/';
const TABELOG_39002165 = 'https://tabelog.com/kochi/A3901/A390104/39002165/';
const TABELOG_39003666 = 'https://tabelog.com/kochi/A3901/A390104/39003666/';
const TABELOG_39006362 = 'https://tabelog.com/kochi/A3901/A390104/39006362/';
const COMMONS_OLD_BRIDGE = 'https://commons.wikimedia.org/wiki/File:Old_Yoshinogawa-bridge,Otoyo-town,Japan.jpg';
const COMMONS_KAJIGAMINE = 'https://commons.wikimedia.org/wiki/File:Mt.Kajigamine_from_Mt.Siraga.jpg';
const RAKUTEN_184242_GALLERY = 'https://travel.rakuten.co.jp/HOTEL/184242/gallery.html';
const RAKUTEN_184242 = 'https://travel.rakuten.co.jp/HOTEL/184242/184242.html';

export const OTOYO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '豊楽寺': OTOYO_PLACE_PHOTO,
  '龍王の滝': wikiPhoto(
    'otoyo-ryuo-falls.jpg',
    'https://commons.wikimedia.org/wiki/File:Ryuo_Falls_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-06-06',
    '龍王の滝', 'Ryuo Falls'
  ),
  '大豊町役場': wikiPhoto(
    'otoyo-town-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Otoyo_town_hall.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', 'https://commons.wikimedia.org/wiki/User:%E3%82%A2%E3%83%A9%E3%83%84%E3%82%AF', '2014-04-28',
    '大豊町役場', 'Otoyo Town Hall'
  ),
  '道の駅大杉': wikiPhoto(
    'otoyo-michinoeki-osugi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E5%A4%A7%E6%9D%89.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami', 'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E5%A4%A7%E6%9D%89.jpg', '2011',
    '道の駅大杉', 'Roadside Station Osugi'
  ),
  '八畝の乳イチョウ': wikiPhoto(
    'otoyo-chichi-ichou.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%85%AB%E7%95%9D%E3%81%AE%E4%B9%B3%E3%82%A4%E3%83%81%E3%83%A7%E3%82%A6.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E5%85%AB%E7%95%9D%E3%81%AE%E4%B9%B3%E3%82%A4%E3%83%81%E3%83%A7%E3%82%A6.jpg', '2015-03-18',
    '八畝の乳イチョウ', 'Yase milk ginkgo'
  ),
  '大豊の森': sourcePhoto(
    'otoyo-stay-otoyonomori.jpg',
    '大豊の森の和室写真',
    'Otoyonomori Japanese-room photo',
    RAKUTEN_184242,
    '楽天トラベル'
  ),
  'ひばり食堂': sourcePhoto('otoyo-39000436-dish.jpg', 'ひばり食堂の料理写真', 'Hibari Shokudo food photo', TABELOG_39000436, '食べログ'),
  'きっちん なかとよや': sourcePhoto('otoyo-39006349-dish.jpg', 'きっちん なかとよやの料理写真', 'Kitchen Nakatoyoya food photo', TABELOG_39006349, '食べログ'),
  '永渕食堂 シャンティ': sourcePhoto('otoyo-39006981-dish.jpg', '永渕食堂 シャンティの料理写真', 'Nagabuchi Shokudo Shanti food photo', TABELOG_39006981, '食べログ'),
  '喜群': sourcePhoto('otoyo-39002103-dish.jpg', '喜群の料理写真', 'Kigun food photo', TABELOG_39002103, '食べログ'),
  '大豊ラーメン': sourcePhoto('otoyo-39002165-dish.jpg', '大豊ラーメンの料理写真', 'Otoyo Ramen food photo', TABELOG_39002165, '食べログ'),
  '立川パーキングエリア（下り線）スナックコーナー': sourcePhoto('otoyo-39003666-dish.jpg', '立川PA下り線スナックコーナーの料理写真', 'Tachikawa PA outbound snack corner food photo', TABELOG_39003666, '食べログ'),
  '土佐北川駅 駅前食堂': sourcePhoto('otoyo-39006362-dish.jpg', '土佐北川駅 駅前食堂の料理写真', 'Tosa-Kitagawa Station Ekimae Shokudo food photo', TABELOG_39006362, '食べログ'),
  '旧吉野川橋': wikiPhoto(
    'otoyo-old-yoshinogawa-bridge.jpg',
    COMMONS_OLD_BRIDGE,
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'katorisi', 'https://commons.wikimedia.org/wiki/User:Katorisi', '2010-09-06',
    '旧吉野川橋', 'Old Yoshinogawa Bridge'
  ),
  '梶ヶ森': wikiPhoto(
    'otoyo-kajigamine.jpg',
    COMMONS_KAJIGAMINE,
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Yama0904', 'https://commons.wikimedia.org/wiki/User:Yama0904', '2013-11-16',
    '白髪山から見た梶ヶ森', 'Mount Kajigamine from Mount Shiraga'
  ),
  '大豊の森 薪割り体験': sourcePhoto(
    'otoyo-makiwari.jpg',
    '大豊の森の薪割り体験写真',
    'Otoyonomori firewood-splitting experience photo',
    RAKUTEN_184242_GALLERY,
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: OTOYO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: OTOYO.sources.accessed};
}

export const OTOYO_FACILITIES: readonly FacilityRow[] = [
  sight('otoyo-sight-01', '豊楽寺', '高知県長岡郡大豊町寺内', null, 'https://commons.wikimedia.org/wiki/File:Burakuji_01.JPG', 33.79208333, 133.72711111),
  sight('otoyo-sight-02', '龍王の滝', '高知県長岡郡大豊町佐賀山', null, 'https://commons.wikimedia.org/wiki/File:Ryuo_Falls_01.JPG', 33.7623715, 133.7609146),
  sight('otoyo-sight-03', '大豊町役場', '高知県長岡郡大豊町津家1626番地', '0887-72-0450', 'https://commons.wikimedia.org/wiki/File:Otoyo_town_hall.JPG', 33.764257, 133.664269),
  sight('otoyo-sight-04', '道の駅大杉', '高知県長岡郡大豊町杉', null, 'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E5%A4%A7%E6%9D%89.jpg', 33.75089, 133.66336),
  sight('otoyo-sight-05', '八畝の乳イチョウ', '高知県長岡郡大豊町八畝', null, 'https://commons.wikimedia.org/wiki/File:%E5%85%AB%E7%95%9D%E3%81%AE%E4%B9%B3%E3%82%A4%E3%83%81%E3%83%A7%E3%82%A6.jpg', 33.779428, 133.772864),
  sight('otoyo-sight-06', '旧吉野川橋', '高知県長岡郡大豊町磯谷', null, COMMONS_OLD_BRIDGE, 33.787069, 133.700959),
  sight('otoyo-sight-07', '梶ヶ森', '高知県長岡郡大豊町', null, COMMONS_KAJIGAMINE, 33.7592049, 133.7515234),
  sight('otoyo-experience-01', '大豊の森 薪割り体験', '高知県長岡郡大豊町和田90-11', '090-9592-9228', RAKUTEN_184242_GALLERY, 33.774028, 133.710822)
];
