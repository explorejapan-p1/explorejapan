/**
 * Ayagawa Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07). JIS 37387. Fifteenth Kagawa hub after … + Miki.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Honest 0 onsen/shop/commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const AYAGAWA = {
  nameJa: '綾川町',
  nameEn: 'Ayagawa',
  reading: 'あやがわちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'ayagawa',
  jis: '37387',
  jlis: '373877',
  sameAs: 'https://www.town.ayagawa.lg.jp/',
  hall: {
    postalCode: '761-2392',
    addressJa: '香川県綾歌郡綾川町滝宮299番地',
    addressEn: '299 Takinomiya, Ayagawa, Ayauta District, Kagawa 761-2392, Japan',
    phone: '087-876-1111'
  },
  sources: {
    home: 'https://www.town.ayagawa.lg.jp/',
    hall: 'https://www.town.ayagawa.lg.jp/',
    kankou: 'https://www.town.ayagawa.lg.jp/',
    tenmangu: 'https://ja.wikipedia.org/wiki/%E7%80%A7%E5%AE%AE%E5%A4%A9%E6%BA%80%E5%AE%AE',
    tabelogCity: 'https://tabelog.com/kagawa/C37387/rstLst/',
    precious: 'https://travel.rakuten.co.jp/HOTEL/192304/192304.html',
    accessed: '2026-09-09'
  }
} as const;

export const AYAGAWA_EXPECTED_ROW_COUNT = 7;
export const AYAGAWA_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Takinomiya Tenmangu — strongest attributable Ayagawa landmark. */
export const AYAGAWA_PLACE_PHOTO = wikiPhoto(
  'ayagawa-takinomiya-tenmangu.jpg',
  'https://commons.wikimedia.org/wiki/File:Takinomiya_tenmangu.jpg',
  'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
  'Bakkai', 'https://commons.wikimedia.org/wiki/User:Bakkai', '2009',
  '滝宮天満宮（香川県綾川町）', 'Takinomiya Tenmangu, Ayagawa, Kagawa'
);

const TABELOG_37014666 = 'https://tabelog.com/kagawa/A3702/A370202/37014666/';
const TABELOG_37005247 = 'https://tabelog.com/kagawa/A3702/A370202/37009775/';
const TABELOG_37010657 = 'https://tabelog.com/kagawa/A3702/A370202/37002018/';
const TABELOG_37002018 = 'https://tabelog.com/kagawa/A3702/A370202/37001568/';
const TABELOG_37001568 = 'https://tabelog.com/kagawa/A3702/A370202/37012185/';
const TABELOG_37002147 = 'https://tabelog.com/kagawa/A3702/A370202/37011423/';
const TABELOG_37003155 = 'https://tabelog.com/kagawa/A3702/A370202/37014899/';
const TABELOG_37014899 = 'https://tabelog.com/kagawa/A3702/A370202/37011446/';
const TABELOG_37003912 = 'https://tabelog.com/kagawa/A3702/A370201/37000889/';
const TABELOG_37000889 = 'https://tabelog.com/kagawa/A3702/A370202/37014635/';
const TABELOG_37012688 = 'https://tabelog.com/kagawa/A3702/A370202/37001427/';
const TABELOG_37001427 = 'https://tabelog.com/kagawa/A3702/A370202/37012162/';
const TABELOG_37011134 = 'https://tabelog.com/kagawa/A3702/A370202/37013475/';
const TABELOG_37013475 = 'https://tabelog.com/kagawa/A3702/A370202/37012766/';
const TABELOG_37012766 = 'https://tabelog.com/kagawa/A3702/A370202/37011073/';
const TABELOG_37011073 = 'https://tabelog.com/kagawa/A3702/A370202/37000077/';

/** Exact travel/sight name_ja only. */
export const AYAGAWA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {

  '滝宮天満宮': AYAGAWA_PLACE_PHOTO,
  '瀧宮神社': wikiPhoto(
    'ayagawa-takinomiya-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:%E7%80%A7%E5%AE%AE%E7%A5%9E%E7%A4%BE_%E9%A6%99%E5%B7%9D%E7%9C%8C%E7%B6%BE%E6%AD%8C%E9%83%A1%E7%B6%BE%E5%B7%9D%E7%94%BA_January_2016.jpg',
    'CC BY-SA 2.0', 'https://creativecommons.org/licenses/by-sa/2.0',
    'Tadashi Sugiyama', 'https://commons.wikimedia.org/wiki/User:Tadashi_Sugiyama', '2016-01',
    '瀧宮神社（綾川町）', 'Takinomiya Shrine, Ayagawa'
  ),
  '高鉢山': wikiPhoto(
    'ayagawa-takahachi.jpg',
    'https://commons.wikimedia.org/wiki/File:Takahachi.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Sunport1216', 'https://commons.wikimedia.org/wiki/User:Sunport1216', '2011',
    '高鉢山（綾上富士・綾川町）', 'Mount Takahachi, Ayagawa'
  ),
  '堤山（羽床富士）': wikiPhoto(
    'ayagawa-hayukafuji.jpg',
    'https://commons.wikimedia.org/wiki/File:Ayagawa,Hyukafuji.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Sunport1216', 'https://commons.wikimedia.org/wiki/User:Sunport1216', '2011',
    '堤山（羽床富士・綾川町）', 'Mount Tsutsuma (Hayuka Fuji), Ayagawa'
  ),
  '菩提院': wikiPhoto(
    'ayagawa-bodaiin.jpg',
    'https://commons.wikimedia.org/wiki/File:Bodaiin_01.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2020',
    '菩提院（綾川町）', 'Bodai-in temple, Ayagawa'
  ),
  '金毘羅灯籠（滝宮）': wikiPhoto(
    'ayagawa-konpira-tourou.jpg',
    'https://commons.wikimedia.org/wiki/File:Konpira_tourou_(Takinomiya).jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Sunport1216', 'https://commons.wikimedia.org/wiki/User:Sunport1216', '2011',
    '金毘羅灯籠（滝宮・綾川町）', 'Konpira stone lantern at Takinomiya, Ayagawa'
  ),
  '道の駅滝宮': wikiPhoto(
    'ayagawa-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Mitinoekitakinomiya.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami', 'https://commons.wikimedia.org/wiki/User:Osami', '2007',
    '道の駅滝宮（綾川町）', 'Michinoeki Takinomiya, Ayagawa'
  ),
  '大衆酒場 つばめ': sourcePhoto('ayagawa-37014666-dish.jpg', '大衆酒場 つばめの料理写真', '大衆酒場 つばめ food photo', TABELOG_37014666, '食べログ'),
  'もみじ温泉': sourcePhoto('ayagawa-37005247-dish.jpg', 'もみじ温泉の料理写真', 'もみじ温泉 food photo', TABELOG_37005247, '食べログ'),
  'あきちゃん': sourcePhoto('ayagawa-37010657-dish.jpg', 'あきちゃんの料理写真', 'あきちゃん food photo', TABELOG_37010657, '食べログ'),
  '美讃大野': sourcePhoto('ayagawa-37002018-dish.jpg', '美讃大野の料理写真', '美讃大野 food photo', TABELOG_37002018, '食べログ'),
  'だがし 夢や イオンモール綾川店': sourcePhoto('ayagawa-37001568-dish.jpg', 'だがし 夢や イオンモール綾川店の料理写真', 'だがし 夢や イオンモール綾川店 food photo', TABELOG_37001568, '食べログ'),
  'ケンタッキーフライドチキン イオンモール綾川店': sourcePhoto('ayagawa-37002147-dish.jpg', 'ケンタッキーフライドチキン イオンモール綾川店の料理写真', 'ケンタッキーフライドチキン イオンモール綾川店 food photo', TABELOG_37002147, '食べログ'),
  '居食家 白桜': sourcePhoto('ayagawa-37003155-dish.jpg', '居食家 白桜の料理写真', '居食家 白桜 food photo', TABELOG_37003155, '食べログ'),
  'さぬきうどんの駅 綾川': sourcePhoto('ayagawa-37014899-dish.jpg', 'さぬきうどんの駅 綾川の料理写真', 'さぬきうどんの駅 綾川 food photo', TABELOG_37014899, '食べログ'),
  '焼き豚P': sourcePhoto('ayagawa-37003912-dish.jpg', '焼き豚Pの料理写真', '焼き豚P food photo', TABELOG_37003912, '食べログ'),
  'ひまわりsun 俺の食堂': sourcePhoto('ayagawa-37000889-dish.jpg', 'ひまわりsun 俺の食堂の料理写真', 'ひまわりsun 俺の食堂 food photo', TABELOG_37000889, '食べログ'),
  'さくらの会': sourcePhoto('ayagawa-37012688-dish.jpg', 'さくらの会の料理写真', 'さくらの会 food photo', TABELOG_37012688, '食べログ'),
  'アイランド食品': sourcePhoto('ayagawa-37001427-dish.jpg', 'アイランド食品の料理写真', 'アイランド食品 food photo', TABELOG_37001427, '食べログ'),
  '鰻のへそ 滝宮店': sourcePhoto('ayagawa-37011134-dish.jpg', '鰻のへそ 滝宮店の料理写真', '鰻のへそ 滝宮店 food photo', TABELOG_37011134, '食べログ'),
  'こっこハウス綾川': sourcePhoto('ayagawa-37013475-dish.jpg', 'こっこハウス綾川の料理写真', 'こっこハウス綾川 food photo', TABELOG_37013475, '食べログ'),
  '山ちゃん': sourcePhoto('ayagawa-37012766-dish.jpg', '山ちゃんの料理写真', '山ちゃん food photo', TABELOG_37012766, '食べログ'),
  '手打うどん たむら': sourcePhoto('ayagawa-37011073-dish.jpg', '手打うどん たむらの料理写真', '手打うどん たむら food photo', TABELOG_37011073, '食べログ'),

  "マウンテン・ドーム": sourcePhoto(
    "ayagawa-stay-mountain.jpg",
    "マウンテン・ドームの客室写真",
    "マウンテン・ドーム room photo",
    "https://travel.rakuten.co.jp/HOTEL/16401/16401.html",
    '楽天トラベル'
  ),
  "Ｐｒｅｃｉｏｕｓ　Ｈｏｔｅｌ　綾川": sourcePhoto(
    "ayagawa-stay-precious.jpg",
    "Ｐｒｅｃｉｏｕｓ　Ｈｏｔｅｌ　綾川の客室写真",
    "Ｐｒｅｃｉｏｕｓ　Ｈｏｔｅｌ　綾川 room photo",
    "https://travel.rakuten.co.jp/HOTEL/192304/192304.html",
    '楽天トラベル'
  ),

};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: AYAGAWA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: AYAGAWA.sources.accessed};
}

export const AYAGAWA_FACILITIES: readonly FacilityRow[] = [
  sight('ayagawa-sight-01', '滝宮天満宮', '香川県綾歌郡綾川町滝宮', null, 'https://ja.wikipedia.org/wiki/%E7%80%A7%E5%AE%AE%E5%A4%A9%E6%BA%80%E5%AE%AE', 34.249075, 133.9203073),
  sight('ayagawa-sight-02', '瀧宮神社', '香川県綾歌郡綾川町滝宮', null, 'https://www.town.ayagawa.lg.jp/', 34.2496217, 133.9191267),
  sight('ayagawa-sight-03', '高鉢山', '香川県綾歌郡綾川町', null, 'https://www.town.ayagawa.lg.jp/', 34.1892965, 133.940805),
  sight('ayagawa-sight-04', '堤山（羽床富士）', '香川県綾歌郡綾川町羽床', null, 'https://www.town.ayagawa.lg.jp/', 34.234285, 133.8990314),
  sight('ayagawa-sight-05', '菩提院', '香川県綾歌郡綾川町', null, 'https://ja.wikipedia.org/wiki/%E8%8F%A9%E6%8F%90%E9%99%A2', 34.23722222, 133.92897222),
  sight('ayagawa-sight-06', '金毘羅灯籠（滝宮）', '香川県綾歌郡綾川町滝宮', null, 'https://www.town.ayagawa.lg.jp/', 34.2492, 133.9205),
  sight('ayagawa-experience-01', '道の駅滝宮', '香川県綾歌郡綾川町滝宮1578', null, 'https://www.town.ayagawa.lg.jp/', 34.2504761, 133.9167193),
];
