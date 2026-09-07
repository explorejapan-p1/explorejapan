/**
 * Komatsushima City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 36203. Not 鳴門 / 徳島市 / 阿南 / 藍住.
 * No frozen pack — photo-only tourism + Tabelog dining like naruto/anan.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KOMATSUSHIMA = {
  nameJa: '小松島市',
  nameEn: 'Komatsushima City',
  reading: 'こまつしまし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'komatsushima',
  jis: '36203',
  jlis: '362031',
  sameAs: 'https://www.city.komatsushima.lg.jp/',
  hall: {
    postalCode: '773-8501',
    addressJa: '徳島県小松島市横須町1番1号',
    addressEn: '1-1 Yokosu-cho, Komatsushima, Tokushima 773-8501, Japan',
    phone: '0885-32-2111'
  },
  sources: {
    home: 'https://www.city.komatsushima.lg.jp/',
    hall: 'https://www.city.komatsushima.lg.jp/docs/2617.html',
    kanko: 'https://www.city.komatsushima.lg.jp/kanko/kanko/',
    navi: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/',
    reijo: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/reijo/',
    tatsueji: 'https://www.awanavi.jp/spot/1000219/',
    onzanji: 'https://www.awanavi.jp/archives/spot/2804',
    kincho: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/spots/5157.html',
    stationPark: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/',
    tabelogCity: 'https://tabelog.com/tokushima/C36203/rstLst/',
    accessed: '2026-09-07'
  }
} as const;

export const KOMATSUSHIMA_EXPECTED_ROW_COUNT = 5;
export const KOMATSUSHIMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string,
  commons: string,
  license: string,
  licenseUrl: string,
  author: string,
  authorUrl: string,
  taken: string,
  altJa: string,
  altEn: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons,
    license,
    licenseUrl,
    author,
    authorUrl,
    taken,
    accessed: '2026-09-07',
    altJa,
    altEn
  };
}

function sourcePhoto(
  file: string,
  altJa: string,
  altEn: string,
  page: string,
  author: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons: page,
    license: '出典',
    licenseUrl: page,
    author,
    authorUrl: page,
    taken: '2026',
    accessed: '2026-09-07',
    altJa,
    altEn
  };
}

/** Cover: File:Ote beach 2010-8-14 No,2.JPG — 大手海岸（和田島）. Not 鳴門大手 / Omiko (徳島市). */
export const KOMATSUSHIMA_PLACE_PHOTO = wikiPhoto(
  'komatsushima-ote-beach.jpg',
  'https://commons.wikimedia.org/wiki/File:Ote_beach_2010-8-14_No,2.JPG',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0',
  'Mti',
  'https://commons.wikimedia.org/wiki/User:Mti',
  '2010-08-14',
  '大手海岸（小松島市和田島町）',
  'Ōte Beach, Wadajima, Komatsushima City'
);

const TABELOG_36000030 = "https://tabelog.com/tokushima/A3601/A360103/36000030/";
const TABELOG_36007302 = "https://tabelog.com/tokushima/A3601/A360103/36007302/";
const TABELOG_36000370 = "https://tabelog.com/tokushima/A3601/A360103/36000370/";
const TABELOG_36006427 = "https://tabelog.com/tokushima/A3601/A360103/36006427/";
const TABELOG_36002606 = "https://tabelog.com/tokushima/A3601/A360103/36002606/";
const TABELOG_36001374 = "https://tabelog.com/tokushima/A3601/A360103/36001374/";
const TABELOG_36007576 = "https://tabelog.com/tokushima/A3601/A360103/36007576/";
const TABELOG_36003888 = "https://tabelog.com/tokushima/A3601/A360103/36003888/";
const TABELOG_36001217 = "https://tabelog.com/tokushima/A3601/A360103/36001217/";
const TABELOG_36007496 = "https://tabelog.com/tokushima/A3601/A360103/36007496/";
const TABELOG_36004802 = "https://tabelog.com/tokushima/A3601/A360103/36004802/";
const TABELOG_36000581 = "https://tabelog.com/tokushima/A3601/A360103/36000581/";
const TABELOG_36002491 = "https://tabelog.com/tokushima/A3601/A360103/36002491/";
const TABELOG_36000956 = "https://tabelog.com/tokushima/A3601/A360103/36000956/";
const TABELOG_36004169 = "https://tabelog.com/tokushima/A3601/A360103/36004169/";
const TABELOG_36008502 = "https://tabelog.com/tokushima/A3601/A360103/36008502/";
const TABELOG_36004798 = "https://tabelog.com/tokushima/A3601/A360103/36004798/";
const TABELOG_36004972 = "https://tabelog.com/tokushima/A3601/A360103/36004972/";
const TABELOG_36001584 = "https://tabelog.com/tokushima/A3601/A360103/36001584/";
const TABELOG_36000265 = "https://tabelog.com/tokushima/A3601/A360103/36000265/";
const TABELOG_36001329 = "https://tabelog.com/tokushima/A3601/A360103/36001329/";
const TABELOG_36006988 = "https://tabelog.com/tokushima/A3601/A360103/36006988/";
const TABELOG_36000962 = "https://tabelog.com/tokushima/A3601/A360103/36000962/";
const TABELOG_36005081 = "https://tabelog.com/tokushima/A3601/A360103/36005081/";
const TABELOG_36004985 = "https://tabelog.com/tokushima/A3601/A360103/36004985/";

/** Exact travel/sight name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. No 鳴門 / 徳島市 / 阿南 / 藍住 Files. */
export const KOMATSUSHIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '大手海岸': KOMATSUSHIMA_PLACE_PHOTO,
  '立江寺': wikiPhoto(
    'komatsushima-tatsueji.jpg',
    'https://commons.wikimedia.org/wiki/File:Tatsue-ji,_Main_Gate_and_Two_story_pagoda_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-07-15',
    '立江寺の山門と多宝塔（四国八十八箇所第十九番・小松島市）',
    'Tatsue-ji main gate and pagoda, Shikoku pilgrimage temple 19, Komatsushima'
  ),
  '恩山寺': wikiPhoto(
    'komatsushima-onzanji.jpg',
    'https://commons.wikimedia.org/wiki/File:Onzanji_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-05-04',
    '恩山寺の山門（四国八十八箇所第十八番・小松島市）',
    'Onzan-ji temple gate, Shikoku pilgrimage temple 18, Komatsushima'
  ),
  '金長神社': wikiPhoto(
    'komatsushima-kincho-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:Kincho_Jinja_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2010-04-17',
    '金長神社の鳥居（小松島市中田町）',
    'Kincho Shrine torii, Nakata-cho, Komatsushima'
  ),
  '小松島ステーションパーク': wikiPhoto(
    'komatsushima-station-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Komatsushima_Station_Park_in_2014-4-4_No,1.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Mti',
    'https://commons.wikimedia.org/wiki/User:Mti',
    '2014-04-04',
    '小松島ステーションパーク（小松島市）',
    'Komatsushima Station Park, Komatsushima City'
  ),
  '岡本中華 小松島本店': sourcePhoto(
    "komatsushima-36000030-dish.jpg",
    "岡本中華 小松島本店の料理写真",
    "岡本中華 小松島本店 food photo",
    TABELOG_36000030,
    '食べログ'
  ),
  '讃岐うどん しろちゃん': sourcePhoto(
    "komatsushima-36007302-dish.jpg",
    "讃岐うどん しろちゃんの料理写真",
    "讃岐うどん しろちゃん food photo",
    TABELOG_36007302,
    '食べログ'
  ),
  '恵比須丸': sourcePhoto(
    "komatsushima-36000370-dish.jpg",
    "恵比須丸の料理写真",
    "恵比須丸 food photo",
    TABELOG_36000370,
    '食べログ'
  ),
  '中華そば猪虎': sourcePhoto(
    "komatsushima-36006427-dish.jpg",
    "中華そば猪虎の料理写真",
    "中華そば猪虎 food photo",
    TABELOG_36006427,
    '食べログ'
  ),
  '松本中華そば店': sourcePhoto(
    "komatsushima-36002606-dish.jpg",
    "松本中華そば店の料理写真",
    "松本中華そば店 food photo",
    TABELOG_36002606,
    '食べログ'
  ),
  '七ふくうどん': sourcePhoto(
    "komatsushima-36001374-dish.jpg",
    "七ふくうどんの料理写真",
    "七ふくうどん food photo",
    TABELOG_36001374,
    '食べログ'
  ),
  'おひるごはん&おさけごはん MOG食堂': sourcePhoto(
    "komatsushima-36007576-dish.jpg",
    "おひるごはん&おさけごはん MOG食堂の料理写真",
    "おひるごはん&おさけごはん MOG食堂 food photo",
    TABELOG_36007576,
    '食べログ'
  ),
  'セルフうどん すずめ': sourcePhoto(
    "komatsushima-36003888-dish.jpg",
    "セルフうどん すずめの料理写真",
    "セルフうどん すずめ food photo",
    TABELOG_36003888,
    '食べログ'
  ),
  'いっすんぼうし': sourcePhoto(
    "komatsushima-36001217-dish.jpg",
    "いっすんぼうしの料理写真",
    "いっすんぼうし food photo",
    TABELOG_36001217,
    '食べログ'
  ),
  '田んぼと畑のレストラン あいさいキッチン': sourcePhoto(
    "komatsushima-36007496-dish.jpg",
    "田んぼと畑のレストラン あいさいキッチンの料理写真",
    "田んぼと畑のレストラン あいさいキッチン food photo",
    TABELOG_36007496,
    '食べログ'
  ),
  '津久司蒲鉾': sourcePhoto(
    "komatsushima-36004802-dish.jpg",
    "津久司蒲鉾の料理写真",
    "津久司蒲鉾 food photo",
    TABELOG_36004802,
    '食べログ'
  ),
  '谷ちくわ商店': sourcePhoto(
    "komatsushima-36000581-dish.jpg",
    "谷ちくわ商店の料理写真",
    "谷ちくわ商店 food photo",
    TABELOG_36000581,
    '食べログ'
  ),
  '和食家 てんすい': sourcePhoto(
    "komatsushima-36002491-dish.jpg",
    "和食家 てんすいの料理写真",
    "和食家 てんすい food photo",
    TABELOG_36002491,
    '食べログ'
  ),
  '幸蘭': sourcePhoto(
    "komatsushima-36000956-dish.jpg",
    "幸蘭の料理写真",
    "幸蘭 food photo",
    TABELOG_36000956,
    '食べログ'
  ),
  'うどんや　どんな': sourcePhoto(
    "komatsushima-36004169-dish.jpg",
    "うどんや　どんなの料理写真",
    "うどんや　どんな food photo",
    TABELOG_36004169,
    '食べログ'
  ),
  '潮音': sourcePhoto(
    "komatsushima-36008502-dish.jpg",
    "潮音の料理写真",
    "潮音 food photo",
    TABELOG_36008502,
    '食べログ'
  ),
  'ゆ～ちゃん': sourcePhoto(
    "komatsushima-36004798-dish.jpg",
    "ゆ～ちゃんの料理写真",
    "ゆ～ちゃん food photo",
    TABELOG_36004798,
    '食べログ'
  ),
  'まるか': sourcePhoto(
    "komatsushima-36004972-dish.jpg",
    "まるかの料理写真",
    "まるか food photo",
    TABELOG_36004972,
    '食べログ'
  ),
  '赤石飯店': sourcePhoto(
    "komatsushima-36001584-dish.jpg",
    "赤石飯店の料理写真",
    "赤石飯店 food photo",
    TABELOG_36001584,
    '食べログ'
  ),
  'めん処 玉好 小松島本店': sourcePhoto(
    "komatsushima-36000265-dish.jpg",
    "めん処 玉好 小松島本店の料理写真",
    "めん処 玉好 小松島本店 food photo",
    TABELOG_36000265,
    '食べログ'
  ),
  'たの久': sourcePhoto(
    "komatsushima-36001329-dish.jpg",
    "たの久の料理写真",
    "たの久 food photo",
    TABELOG_36001329,
    '食べログ'
  ),
  '炭火焼鳥とりすけ': sourcePhoto(
    "komatsushima-36006988-dish.jpg",
    "炭火焼鳥とりすけの料理写真",
    "炭火焼鳥とりすけ food photo",
    TABELOG_36006988,
    '食べログ'
  ),
  'まんぷく亭': sourcePhoto(
    "komatsushima-36000962-dish.jpg",
    "まんぷく亭の料理写真",
    "まんぷく亭 food photo",
    TABELOG_36000962,
    '食べログ'
  ),
  'キッチンゑみ': sourcePhoto(
    "komatsushima-36005081-dish.jpg",
    "キッチンゑみの料理写真",
    "キッチンゑみ food photo",
    TABELOG_36005081,
    '食べログ'
  ),
  '中華そば 樽屋': sourcePhoto(
    "komatsushima-36004985-dish.jpg",
    "中華そば 樽屋の料理写真",
    "中華そば 樽屋 food photo",
    TABELOG_36004985,
    '食べログ'
  ),

  'スーパーホテル徳島・小松島天然温泉': sourcePhoto(
    'komatsushima-stay-01.jpg',
    'スーパーホテル徳島・小松島天然温泉の客室・外観写真',
    'Super Hotel Tokushima Komatsushima room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/182768/182768.html',
    '楽天トラベル'
  ),
  'HOTEL AZ 徳島小松島店': sourcePhoto(
    'komatsushima-stay-02.jpg',
    'HOTEL AZ 徳島小松島店の客室・外観写真',
    'HOTEL AZ Tokushima Komatsushima room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/181837/181837.html',
    '楽天トラベル'
  ),
  'みどり旅館': sourcePhoto(
    'komatsushima-stay-03.jpg',
    'みどり旅館の客室・外観写真',
    'Midori Ryokan room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/158330/158330.html',
    '楽天トラベル'
  ),
};

function sight(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string,
  lat: number,
  lon: number
): FacilityRow {
  return {
    id,
    jis: KOMATSUSHIMA.jis,
    name_ja,
    reading: null,
    category: 'tourism',
    lat,
    lon,
    address,
    phone,
    official_url: source_url,
    hours: null,
    source_url,
    license: '市公式サイト掲載情報',
    accessed: KOMATSUSHIMA.sources.accessed
  };
}

/** Photo-only tourism rows. No frozen jsonl. Wikipedia / sourced coords. */
export const KOMATSUSHIMA_FACILITIES: readonly FacilityRow[] = [
  sight(
    'komatsushima-sight-01',
    '大手海岸',
    '徳島県小松島市和田島町',
    null,
    KOMATSUSHIMA.sources.navi,
    34.005,
    134.607
  ),
  sight(
    'komatsushima-sight-02',
    '立江寺',
    '徳島県小松島市立江町字若松13',
    '0885-37-1019',
    KOMATSUSHIMA.sources.tatsueji,
    33.96786111,
    134.60580556
  ),
  sight(
    'komatsushima-sight-03',
    '恩山寺',
    '徳島県小松島市田野町字恩山寺谷40',
    '0885-33-1218',
    KOMATSUSHIMA.sources.onzanji,
    33.986,
    134.57825
  ),
  sight(
    'komatsushima-sight-04',
    '金長神社',
    '徳島県小松島市中田町字脇谷',
    '0885-32-3809',
    KOMATSUSHIMA.sources.kincho,
    34.017,
    134.58666667
  ),
  sight(
    'komatsushima-sight-05',
    '小松島ステーションパーク',
    '徳島県小松島市小松島町',
    null,
    KOMATSUSHIMA.sources.stationPark,
    34.01086389,
    134.58689444
  )
];
