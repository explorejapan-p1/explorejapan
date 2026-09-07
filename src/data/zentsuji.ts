/**
 * Zentsuji City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37204. Eighth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide + Naoshima + Shodoshima.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split) + Commons arcade shop.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const ZENTSUJI = {
  nameJa: '善通寺市',
  nameEn: 'Zentsuji',
  reading: 'ぜんつうじし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'zentsuji',
  jis: '37204',
  jlis: '372048',
  sameAs: 'https://www.city.zentsuji.kagawa.jp/',
  hall: {
    postalCode: '765-8503',
    addressJa: '香川県善通寺市文京町二丁目1番1号',
    addressEn: '2-1-1 Bunkyo-cho, Zentsuji, Kagawa 765-8503, Japan',
    phone: '0877-62-2121'
  },
  sources: {
    home: 'https://www.city.zentsuji.kagawa.jp/',
    hall: 'https://www.city.zentsuji.kagawa.jp/map/zentsujishiyakusyo.html',
    kankou: 'https://www.kukainavi.com/',
    zentsuji: 'https://www.zentsuji.com/',
    tabelogCity: 'https://tabelog.com/kagawa/C37204/rstLst/',
    grand: 'https://travel.rakuten.co.jp/HOTEL/15603/15603.html',
    tsurukichi: 'https://travel.rakuten.co.jp/HOTEL/180078/180078.html',
    accessed: '2026-09-07'
  }
} as const;

export const ZENTSUJI_EXPECTED_ROW_COUNT = 7;
export const ZENTSUJI_EXPECTED_GEO_COUNT = 7;

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

/** Cover: South Great Gate + five-storied pagoda — strongest Zentsuji landmark. */
export const ZENTSUJI_PLACE_PHOTO = wikiPhoto(
  'zentsuji-pagoda-gate.jpg',
  'https://commons.wikimedia.org/wiki/File:Zents%C5%AB-ji,_Minami-Dai-mon_Gate_and_Five-storied_Pagoda_001.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  'Naokijp',
  'https://commons.wikimedia.org/wiki/User:Naokijp',
  '2017-05-04',
  '総本山善通寺・南大門と五重塔（善通寺市）',
  'South Great Gate and five-storied pagoda at Zentsū-ji, Zentsuji'
);
const TABELOG_37000990 = 'https://tabelog.com/kagawa/A3703/A370302/37000990/';
const TABELOG_37004150 = 'https://tabelog.com/kagawa/A3703/A370302/37001187/';
const TABELOG_37001187 = 'https://tabelog.com/kagawa/A3703/A370302/37004579/';
const TABELOG_37013704 = 'https://tabelog.com/kagawa/A3703/A370302/37008081/';
const TABELOG_37007885 = 'https://tabelog.com/kagawa/A3703/A370302/37012988/';
const TABELOG_37012988 = 'https://tabelog.com/kagawa/A3703/A370302/37005236/';
const TABELOG_37009702 = 'https://tabelog.com/kagawa/A3703/A370302/37004721/';
const TABELOG_37004721 = 'https://tabelog.com/kagawa/A3703/A370302/37000240/';
const TABELOG_37000240 = 'https://tabelog.com/kagawa/A3703/A370302/37013003/';
const TABELOG_37006834 = 'https://tabelog.com/kagawa/A3703/A370302/37012320/';
const TABELOG_37012320 = 'https://tabelog.com/kagawa/A3703/A370302/37012611/';
const TABELOG_37012491 = 'https://tabelog.com/kagawa/A3703/A370302/37012491/';
const TABELOG_37003988 = 'https://tabelog.com/kagawa/A3703/A370302/37000173/';
const TABELOG_37000173 = 'https://tabelog.com/kagawa/A3703/A370302/37003971/';
const TABELOG_37003971 = 'https://tabelog.com/kagawa/A3703/A370302/37001440/';
const TABELOG_37001440 = 'https://tabelog.com/kagawa/A3703/A370302/37011281/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const ZENTSUJI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '総本山善通寺': ZENTSUJI_PLACE_PHOTO,
  '曼荼羅寺': wikiPhoto(
    'zentsuji-mandaraji.jpg',
    'https://commons.wikimedia.org/wiki/File:Mandara-ji,_Main_Hall_001.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-05-04',
    '四国八十八箇所第72番札所 曼荼羅寺の本堂（善通寺市）',
    'Main hall of Mandara-ji (Shikoku pilgrimage temple 72), Zentsuji'
  ),
  '出釈迦寺': wikiPhoto(
    'zentsuji-shusshakaji.jpg',
    'https://commons.wikimedia.org/wiki/File:Shusshaka-ji,_Main_Hall_001.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-05-04',
    '四国八十八箇所第73番札所 出釈迦寺の本堂（善通寺市）',
    'Main hall of Shusshaka-ji (Shikoku pilgrimage temple 73), Zentsuji'
  ),
  '甲山寺': wikiPhoto(
    'zentsuji-koyamaji.jpg',
    'https://commons.wikimedia.org/wiki/File:K%C5%8Dyama-ji,_Main_Hall_001.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-05-04',
    '四国八十八箇所第74番札所 甲山寺の本堂（善通寺市）',
    'Main hall of Kōyama-ji (Shikoku pilgrimage temple 74), Zentsuji'
  ),
  '善通寺駅': wikiPhoto(
    'zentsuji-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Zentsuji_Station03s3s4592.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2010-09-18',
    'JR土讃線 善通寺駅（善通寺市）',
    'Zentsūji Station on the Dosan Line, Zentsuji'
  ),
  '善通寺市美術館': wikiPhoto(
    'zentsuji-art-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:Zentsuji_City_Art_Museum_ac_(1).jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2023-03',
    '善通寺市美術館（文京町）',
    'Zentsuji City Art Museum, Bunkyo-cho'
  ),
  '善通寺市大通り商店街': wikiPhoto(
    'zentsuji-odori-shotengai.jpg',
    'https://commons.wikimedia.org/wiki/File:Zentsuji_City_Odori_Shopping_Street_ac_(2).jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2023-03',
    '善通寺市大通り商店街のアーケード（善通寺市）',
    'Zentsuji Odori Shopping Street arcade'
  ),
  '善通寺グランドホテル': sourcePhoto(
    'zentsuji-stay-grand.jpg',
    '善通寺グランドホテルの客室写真（スーペリアツイン）',
    'Zentsuji Grand Hotel Superior Twin room photo',
    'https://travel.rakuten.co.jp/HOTEL/15603/15603.html',
    '楽天トラベル'
  ),
  '遍路民宿 鶴吉': sourcePhoto(
    'zentsuji-stay-tsurukichi.jpg',
    '遍路民宿 鶴吉の客室写真（洋間）',
    'Henro minshuku Tsurukichi Western-style room photo',
    'https://travel.rakuten.co.jp/HOTEL/180078/gallery.html',
    '楽天トラベル'
  ),
  '遍路民宿 鶴吉 露天風呂': sourcePhoto(
    'zentsuji-onsen-tsurukichi.jpg',
    '遍路民宿 鶴吉の露天風呂写真',
    'Henro minshuku Tsurukichi open-air bath photo',
    'https://travel.rakuten.co.jp/HOTEL/180078/gallery.html',
    '楽天トラベル'
  ),
  '備長扇屋 善通寺店': sourcePhoto('zentsuji-37000990-dish.jpg', '備長扇屋 善通寺店の料理写真', '備長扇屋 善通寺店 food photo', TABELOG_37000990, '食べログ'),
  '樹里庵': sourcePhoto('zentsuji-37004150-dish.jpg', '樹里庵の料理写真', '樹里庵 food photo', TABELOG_37004150, '食べログ'),
  '焼肉 松坂 本店': sourcePhoto('zentsuji-37001187-dish.jpg', '焼肉 松坂 本店の料理写真', '焼肉 松坂 本店 food photo', TABELOG_37001187, '食べログ'),
  'めん六や 香川善通寺店': sourcePhoto('zentsuji-37013704-dish.jpg', 'めん六や 香川善通寺店の料理写真', 'めん六や 香川善通寺店 food photo', TABELOG_37013704, '食べログ'),
  '本格手打 あかみち': sourcePhoto('zentsuji-37007885-dish.jpg', '本格手打 あかみちの料理写真', '本格手打 あかみち food photo', TABELOG_37007885, '食べログ'),
  'ボーノ': sourcePhoto('zentsuji-37012988-dish.jpg', 'ボーノの料理写真', 'ボーノ food photo', TABELOG_37012988, '食べログ'),
  '松村食堂': sourcePhoto('zentsuji-37009702-dish.jpg', '松村食堂の料理写真', '松村食堂 food photo', TABELOG_37009702, '食べログ'),
  '白川うどん': sourcePhoto('zentsuji-37004721-dish.jpg', '白川うどんの料理写真', '白川うどん food photo', TABELOG_37004721, '食べログ'),
  'にこいち': sourcePhoto('zentsuji-37000240-dish.jpg', 'にこいちの料理写真', 'にこいち food photo', TABELOG_37000240, '食べログ'),
  'げんきや食堂': sourcePhoto('zentsuji-37006834-dish.jpg', 'げんきや食堂の料理写真', 'げんきや食堂 food photo', TABELOG_37006834, '食べログ'),
  '香川家': sourcePhoto('zentsuji-37012320-dish.jpg', '香川家の料理写真', '香川家 food photo', TABELOG_37012320, '食べログ'),
  'たこやき 西岡商店': sourcePhoto('zentsuji-37012491-dish.jpg', 'たこやき 西岡商店の料理写真', 'たこやき 西岡商店 food photo', TABELOG_37012491, '食べログ'),
  'ペイザン 善通寺本店': sourcePhoto('zentsuji-37003988-dish.jpg', 'ペイザン 善通寺本店の料理写真', 'ペイザン 善通寺本店 food photo', TABELOG_37003988, '食べログ'),
  '千成食堂': sourcePhoto('zentsuji-37000173-dish.jpg', '千成食堂の料理写真', '千成食堂 food photo', TABELOG_37000173, '食べログ'),
  'たまや': sourcePhoto('zentsuji-37003971-dish.jpg', 'たまやの料理写真', 'たまや food photo', TABELOG_37003971, '食べログ'),
  '龍江': sourcePhoto('zentsuji-37001440-dish.jpg', '龍江の料理写真', '龍江 food photo', TABELOG_37001440, '食べログ'),
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
    jis: ZENTSUJI.jis,
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
    license: '市公式・公式観光サイト掲載情報',
    accessed: ZENTSUJI.sources.accessed
  };
}

/** Photo-only tourism / onsen rows. No frozen jsonl. */
export const ZENTSUJI_FACILITIES: readonly FacilityRow[] = [
  sight('zentsuji-sight-01', '総本山善通寺', '香川県善通寺市善通寺町3-3-1', '0877-62-0111', 'https://www.zentsuji.com/', 34.22501, 133.77433),
  sight('zentsuji-sight-02', '曼荼羅寺', '香川県善通寺市吉原町1380-1', '0877-63-0071', 'https://www.kukainavi.com/', 34.22333, 133.75032),
  sight('zentsuji-sight-03', '出釈迦寺', '香川県善通寺市吉原町1091', '0877-63-0073', 'https://www.kukainavi.com/', 34.21914, 133.75025),
  sight('zentsuji-sight-04', '甲山寺', '香川県善通寺市稲木町甲1408', '0877-62-0567', 'https://www.kukainavi.com/', 34.23307, 133.76572),
  sight('zentsuji-sight-05', '善通寺駅', '香川県善通寺市上吉田町1-1-1', null, 'https://www.city.zentsuji.kagawa.jp/', 34.22999, 133.78922),
  sight('zentsuji-sight-06', '善通寺市美術館', '香川県善通寺市文京町2-1-3', '0877-63-6331', 'https://www.city.zentsuji.kagawa.jp/', 34.22730, 133.78705),
  sight('zentsuji-onsen-01', '遍路民宿 鶴吉 露天風呂', '香川県善通寺市弘田町999-1', null, 'https://travel.rakuten.co.jp/HOTEL/180078/gallery.html', 34.23921, 133.75447)
];
