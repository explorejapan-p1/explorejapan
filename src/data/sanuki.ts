/**
 * Sanuki City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37206. Twelfth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide + Naoshima + Shodoshima + Zentsuji + Mitoyo + Utazu + Tonosho.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SANUKI = {
  nameJa: 'さぬき市',
  nameEn: 'Sanuki',
  reading: 'さぬきし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'sanuki',
  jis: '37206',
  jlis: '372069',
  sameAs: 'https://www.city.sanuki.lg.jp/',
  hall: {
    postalCode: '769-2195',
    addressJa: '香川県さぬき市志度5385番地8',
    addressEn: '5385-8 Shido, Sanuki, Kagawa 769-2195, Japan',
    phone: '087-894-1111'
  },
  sources: {
    home: 'https://www.city.sanuki.lg.jp/',
    hall: 'https://www.city.sanuki.kagawa.jp/guide/map_shido',
    kankou: 'https://www.city.sanuki.lg.jp/',
    shidoji: 'https://www.city.sanuki.lg.jp/',
    tabelogCity: 'https://tabelog.com/kagawa/C37206/rstLst/',
    jakomaru: 'https://travel.rakuten.co.jp/HOTEL/68660/68660.html',
    montpellier: 'https://travel.rakuten.co.jp/HOTEL/30931/30931.html',
    accessed: '2026-09-07'
  }
} as const;

export const SANUKI_EXPECTED_ROW_COUNT = 8;
export const SANUKI_EXPECTED_GEO_COUNT = 8;

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

/** Cover: Shido-ji — strongest Sanuki landmark (Shikoku pilgrimage #86). */
export const SANUKI_PLACE_PHOTO = wikiPhoto(
  'sanuki-shidoji.jpg',
  'https://commons.wikimedia.org/wiki/File:Shido-ji_temple.jpg',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0/',
  'Bakkai',
  'https://en.wikipedia.org/wiki/ja:User:Bakkai',
  '2007-10-18',
  '志度寺（香川県さぬき市）',
  'Shido-ji Temple, Sanuki, Kagawa'
);

const TABELOG_37001543 = 'https://tabelog.com/kagawa/A3701/A370102/37001543/';
const TABELOG_37000100 = 'https://tabelog.com/kagawa/A3701/A370102/37000100/';
const TABELOG_37010253 = 'https://tabelog.com/kagawa/A3701/A370102/37010253/';
const TABELOG_37007600 = 'https://tabelog.com/kagawa/A3701/A370102/37007600/';
const TABELOG_37004773 = 'https://tabelog.com/kagawa/A3701/A370102/37004773/';
const TABELOG_37000380 = 'https://tabelog.com/kagawa/A3701/A370102/37000380/';
const TABELOG_37001546 = 'https://tabelog.com/kagawa/A3701/A370102/37001546/';
const TABELOG_37001617 = 'https://tabelog.com/kagawa/A3701/A370102/37001617/';
const TABELOG_37012332 = 'https://tabelog.com/kagawa/A3701/A370102/37012332/';
const TABELOG_37008812 = 'https://tabelog.com/kagawa/A3701/A370102/37008812/';
const TABELOG_37000347 = 'https://tabelog.com/kagawa/A3701/A370102/37000347/';
const TABELOG_37001703 = 'https://tabelog.com/kagawa/A3701/A370102/37001703/';
const TABELOG_37006656 = 'https://tabelog.com/kagawa/A3701/A370102/37006656/';
const TABELOG_37011870 = 'https://tabelog.com/kagawa/A3701/A370102/37011870/';
const TABELOG_37001541 = 'https://tabelog.com/kagawa/A3701/A370102/37001541/';
const TABELOG_37009809 = 'https://tabelog.com/kagawa/A3701/A370102/37009809/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const SANUKI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '志度寺': SANUKI_PLACE_PHOTO,
  '長尾寺': wikiPhoto(
    'sanuki-nagaoji.jpg',
    'https://commons.wikimedia.org/wiki/File:Nagaoji_20230415_1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Araiyasushige',
    'https://commons.wikimedia.org/wiki/User:Araiyasushige',
    '2023-04-15',
    '長尾寺（さぬき市）',
    'Nagao-ji Temple, Sanuki'
  ),
  '津田の松原': wikiPhoto(
    'sanuki-tsuda-matsubara.jpg',
    'https://commons.wikimedia.org/wiki/File:Tsuda-no-Matsubara_SA.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Squash-0601',
    'https://commons.wikimedia.org/wiki/File:Tsuda-no-Matsubara_SA.jpg',
    '2010-01-03',
    '津田の松原（さぬき市）',
    'Tsuda-no-Matsubara pine grove, Sanuki'
  ),
  '大串半島': wikiPhoto(
    'sanuki-ogushi.jpg',
    'https://commons.wikimedia.org/wiki/File:Oogusihantou_20221028_1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-10-28',
    '大串半島（さぬき市）',
    'Ogushi Peninsula, Sanuki'
  ),
  '志度駅': wikiPhoto(
    'sanuki-shido-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Shido_Station,_ekisha.jpg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Saigen Jiro',
    'https://commons.wikimedia.org/wiki/User:Saigen_Jiro',
    '2016-10-10',
    'JR志度駅（さぬき市）',
    'JR Shido Station, Sanuki'
  ),
  '石清水神社': wikiPhoto(
    'sanuki-iwashimizu.jpg',
    'https://commons.wikimedia.org/wiki/File:%E7%9F%B3%E6%B8%85%E6%B0%B4%E7%A5%9E%E7%A4%BE_%E3%81%95%E3%81%AC%E3%81%8D%E5%B8%82%E6%B4%A5%E7%94%B0%E7%94%BA_May_26,_2017.jpg',
    'CC BY-SA 2.0',
    'https://creativecommons.org/licenses/by-sa/2.0',
    'Mathias Erhart',
    'https://www.flickr.com/photos/mathias-erhart/',
    '2017-05-26',
    '石清水神社（さぬき市津田町）',
    'Iwashimizu Shrine, Tsuda, Sanuki'
  ),
  '道の駅ながお': wikiPhoto(
    'sanuki-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%81%AA%E3%81%8C%E3%81%8A2.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%81%AA%E3%81%8C%E3%81%8A2.jpg',
    '2009',
    '道の駅ながお（さぬき市）',
    'Michinoeki Nagao, Sanuki'
  ),
  'じゃこ丸パーク津田': sourcePhoto(
    'sanuki-stay-jakomaru.jpg',
    'じゃこ丸パーク津田の和室写真',
    'Jakomaru Park Tsuda Japanese-style room photo',
    'https://travel.rakuten.co.jp/HOTEL/68660/gallery.html',
    '楽天トラベル'
  ),
  'モンペリエ　オーヴェルジュ': sourcePhoto(
    'sanuki-stay-montpellier.jpg',
    'モンペリエ　オーヴェルジュの客室写真',
    'Montpellier Auberge guest room photo',
    'https://travel.rakuten.co.jp/HOTEL/30931/gallery.html',
    '楽天トラベル'
  ),
  'じゃこ丸パーク津田 大浴場': sourcePhoto(
    'sanuki-onsen-jakomaru.jpg',
    'じゃこ丸パーク津田の大浴場写真',
    'Jakomaru Park Tsuda large bath photo',
    'https://travel.rakuten.co.jp/HOTEL/68660/gallery.html',
    '楽天トラベル'
  ),
  '麺処まはろ': sourcePhoto('sanuki-37001543-dish.jpg', '麺処まはろの料理写真', '麺処まはろ food photo', TABELOG_37001543, '食べログ'),
  '手打うどん　源内': sourcePhoto('sanuki-37000100-dish.jpg', '手打うどん　源内の料理写真', '手打うどん　源内 food photo', TABELOG_37000100, '食べログ'),
  '麺でぃ～': sourcePhoto('sanuki-37010253-dish.jpg', '麺でぃ～の料理写真', '麺でぃ～ food photo', TABELOG_37010253, '食べログ'),
  '溜': sourcePhoto('sanuki-37007600-dish.jpg', '溜の料理写真', '溜 food photo', TABELOG_37007600, '食べログ'),
  '羽立': sourcePhoto('sanuki-37004773-dish.jpg', '羽立の料理写真', '羽立 food photo', TABELOG_37004773, '食べログ'),
  '八十八庵': sourcePhoto('sanuki-37000380-dish.jpg', '八十八庵の料理写真', '八十八庵 food photo', TABELOG_37000380, '食べログ'),
  '牟礼製麺': sourcePhoto('sanuki-37001546-dish.jpg', '牟礼製麺の料理写真', '牟礼製麺 food photo', TABELOG_37001546, '食べログ'),
  'ラーメン山村 本店': sourcePhoto('sanuki-37001617-dish.jpg', 'ラーメン山村 本店の料理写真', 'ラーメン山村 本店 food photo', TABELOG_37001617, '食べログ'),
  'らぁ麺Labo 七施': sourcePhoto('sanuki-37012332-dish.jpg', 'らぁ麺Labo 七施の料理写真', 'らぁ麺Labo 七施 food photo', TABELOG_37012332, '食べログ'),
  '大川オアシス': sourcePhoto('sanuki-37008812-dish.jpg', '大川オアシスの料理写真', '大川オアシス food photo', TABELOG_37008812, '食べログ'),
  'かき焼き わたなべ': sourcePhoto('sanuki-37000347-dish.jpg', 'かき焼き わたなべの料理写真', 'かき焼き わたなべ food photo', TABELOG_37000347, '食べログ'),
  'シセン': sourcePhoto('sanuki-37001703-dish.jpg', 'シセンの料理写真', 'シセン food photo', TABELOG_37001703, '食べログ'),
  '手打うどん　まるたけ': sourcePhoto('sanuki-37006656-dish.jpg', '手打うどん　まるたけの料理写真', '手打うどん　まるたけ food photo', TABELOG_37006656, '食べログ'),
  'こがね製麺所 寒川店': sourcePhoto('sanuki-37011870-dish.jpg', 'こがね製麺所 寒川店の料理写真', 'こがね製麺所 寒川店 food photo', TABELOG_37011870, '食べログ'),
  '松原うどん': sourcePhoto('sanuki-37001541-dish.jpg', '松原うどんの料理写真', '松原うどん food photo', TABELOG_37001541, '食べログ'),
  '寿司処 ここも 志度店': sourcePhoto('sanuki-37009809-dish.jpg', '寿司処 ここも 志度店の料理写真', '寿司処 ここも 志度店 food photo', TABELOG_37009809, '食べログ'),
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
    jis: SANUKI.jis,
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
    accessed: SANUKI.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const SANUKI_FACILITIES: readonly FacilityRow[] = [
  sight('sanuki-sight-01', '志度寺', '香川県さぬき市志度3800', '087-894-0069', 'https://www.city.sanuki.lg.jp/', 34.3242502, 134.1796409),
  sight('sanuki-sight-02', '長尾寺', '香川県さぬき市長尾西653', '0879-52-2041', 'https://www.city.sanuki.lg.jp/', 34.26670556, 134.17171944),
  sight('sanuki-sight-03', '津田の松原', '香川県さぬき市津田町津田', null, 'https://www.city.sanuki.lg.jp/', 34.2855383, 134.2531794),
  sight('sanuki-sight-04', '大串半島', '香川県さぬき市大串', null, 'https://www.city.sanuki.lg.jp/', 34.3657154, 134.2083095),
  sight('sanuki-sight-05', '志度駅', '香川県さぬき市志度', null, 'https://www.city.sanuki.lg.jp/', 34.3217035, 134.1731612),
  sight('sanuki-sight-06', '石清水神社', '香川県さぬき市津田町津田', null, 'https://www.city.sanuki.lg.jp/', 34.286509, 134.251656),
  sight('sanuki-experience-01', '道の駅ながお', '香川県さぬき市多和', null, 'https://www.city.sanuki.lg.jp/', 34.2210873, 134.1743623),
  sight('sanuki-onsen-01', 'じゃこ丸パーク津田 大浴場', '香川県さぬき市津田町松原地内', '0879-42-2521', 'https://travel.rakuten.co.jp/HOTEL/68660/gallery.html', 34.2855383, 134.2531794)
];
