/**
 * Ino Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-08). JIS 39386. Fifth Kochi hub after 高知市・南国市・香南市・香美市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Honest 0 onsen (no attributable 大浴場 photo keys; stay uses room still ≠ onsen) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const INO = {
  nameJa: 'いの町',
  nameEn: 'Ino',
  reading: 'いのちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'ino',
  jis: '39386',
  jlis: '393860',
  sameAs: 'https://www.town.ino.kochi.jp/',
  hall: {
    postalCode: '781-2192',
    addressJa: '高知県吾川郡いの町1700番地1',
    addressEn: '1700-1 Ino Town, Agawa District, Kochi 781-2192, Japan',
    phone: '088-893-1111'
  },
  sources: {
    home: 'https://www.town.ino.kochi.jp/',
    hall: 'https://www.town.ino.kochi.jp/chosei/chouseijoho/4682/',
    kankou: 'https://www.inofan.jp/',
    nikobuchi: 'https://ja.wikipedia.org/wiki/%E3%81%AB%E3%81%93%E6%B7%B5',
    paperMuseum: 'https://ja.wikipedia.org/wiki/%E3%81%84%E3%81%AE%E7%94%BA%E7%B4%99%E3%81%AE%E5%8D%9A%E7%89%A9%E9%A4%A8',
    tabelogCity: 'https://tabelog.com/kochi/C39386/rstLst/',
    kamenoi: 'https://travel.rakuten.co.jp/HOTEL/44261/44261.html',
    accessed: '2026-09-08'
  }
} as const;

export const INO_EXPECTED_ROW_COUNT = 7;
export const INO_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Nikobuchi (Niyodo Blue). */
export const INO_PLACE_PHOTO = wikiPhoto(
  'ino-nikobuchi.jpg',
  'https://commons.wikimedia.org/wiki/File:Niko_Buchi_deep_water_No.1.jpg',
  'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
  'かるちる', 'https://commons.wikimedia.org/wiki/User:%E3%81%8B%E3%82%8B%E3%81%A1%E3%82%8B', '2009-10-16',
  'にこ淵（仁淀ブルー）', 'Nikobuchi (Niyodo Blue), Ino'
);

const TABELOG_39007065 = 'https://tabelog.com/kochi/A3901/A390103/39007065/';
const TABELOG_39000856 = 'https://tabelog.com/kochi/A3901/A390103/39000856/';
const TABELOG_39008250 = 'https://tabelog.com/kochi/A3903/A390301/39008250/';
const TABELOG_39008046 = 'https://tabelog.com/kochi/A3903/A390302/39008046/';
const TABELOG_39008354 = 'https://tabelog.com/kochi/A3901/A390103/39008354/';
const TABELOG_39005619 = 'https://tabelog.com/kochi/A3901/A390103/39005619/';
const TABELOG_39007160 = 'https://tabelog.com/kochi/A3901/A390103/39007160/';
const TABELOG_39003162 = 'https://tabelog.com/kochi/A3901/A390103/39003162/';
const TABELOG_39002980 = 'https://tabelog.com/kochi/A3901/A390103/39002980/';
const TABELOG_39004615 = 'https://tabelog.com/kochi/A3901/A390103/39004615/';
const TABELOG_39001631 = 'https://tabelog.com/kochi/A3901/A390103/39001631/';
const TABELOG_39003187 = 'https://tabelog.com/kochi/A3901/A390103/39003187/';
const TABELOG_39005038 = 'https://tabelog.com/kochi/A3901/A390103/39005038/';
const TABELOG_39001298 = 'https://tabelog.com/kochi/A3901/A390103/39001298/';
const TABELOG_39006687 = 'https://tabelog.com/kochi/A3901/A390103/39006687/';
const TABELOG_39008376 = 'https://tabelog.com/kochi/A3901/A390103/39008376/';

export const INO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  'にこ淵': INO_PLACE_PHOTO,
  'いの町紙の博物館': wikiPhoto(
    'ino-paper-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%84%E3%81%AE%E7%94%BA%E7%B4%99%E3%81%AE%E5%8D%9A%E7%89%A9%E9%A4%A8.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Oyazo', 'https://commons.wikimedia.org/wiki/User:Oyazo', '2014-04-02',
    'いの町紙の博物館', 'Ino Town Paper Museum'
  ),
  '伊野駅': wikiPhoto(
    'ino-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Dosansen_InoEkisya.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/',
    'GACHAN', 'https://ja.wikipedia.org/wiki/User:GACHAN', '2006-08-21',
    'JR伊野駅', 'JR Ino Station'
  ),
  '名越屋沈下橋': wikiPhoto(
    'ino-nagoya-bridge.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%90%8D%E8%B6%8A%E5%B1%8B%E6%B2%88%E4%B8%8B%E6%A9%8B.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://web.archive.org/web/20161102021416/http://www.panoramio.com/user/1770756?with_photo_id=117849525', '2015-03-18',
    '名越屋沈下橋', 'Nagoya Chinkabashi, Ino'
  ),
  '伊野停留場': wikiPhoto(
    'ino-tosaden.jpg',
    'https://commons.wikimedia.org/wiki/File:Ino_Station_(Toden).jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'L73MuOVg4dJHp0g', 'https://commons.wikimedia.org/wiki/User:L73MuOVg4dJHp0g', '2011-04-09',
    'とさでん交通伊野停留場', 'Tosaden Ino Station'
  ),
  '紙のこいのぼり': wikiPhoto(
    'ino-koinobori.jpg',
    'https://commons.wikimedia.org/wiki/File:%E7%B4%99%E3%81%AE%E3%81%93%E3%81%84%E3%81%AE%E3%81%BC%E3%82%8A_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'Naggie', 'https://web.archive.org/web/20161024104629/http://www.panoramio.com/user/2745906?with_photo_id=22657907', '2009-05-03',
    '紙のこいのぼり（仁淀川・いの町）', 'Paper carp streamers on the Niyodo River, Ino'
  ),
  '道の駅土佐和紙工芸村': wikiPhoto(
    'ino-michinoeki-washi.jpg',
    'https://commons.wikimedia.org/wiki/File:Roadside_Station_Tosa_washi_kogeimura.jpg',
    'Public domain', 'https://commons.wikimedia.org/wiki/File:Roadside_Station_Tosa_washi_kogeimura.jpg',
    'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2010-04-19',
    '道の駅土佐和紙工芸村', 'Michinoeki Tosa Washi Craft Village, Ino'
  ),
  '亀の井ホテル 高知': sourcePhoto(
    'ino-stay-kamenoi.jpg',
    '亀の井ホテル 高知の客室写真',
    '亀の井ホテル 高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/44261/44261.html',
    '楽天トラベル'
  ),
  'ＶＩＬＬＡ　ＭＯＩＴＯＳ　ＮＩＹＯＤＯ': sourcePhoto(
    'ino-stay-moitos.jpg',
    'ＶＩＬＬＡ　ＭＯＩＴＯＳ　ＮＩＹＯＤＯの客室写真',
    'ＶＩＬＬＡ　ＭＯＩＴＯＳ　ＮＩＹＯＤＯ room photo',
    'https://travel.rakuten.co.jp/HOTEL/193128/193128.html',
    '楽天トラベル'
  ),
  '坂の上の家／民泊': sourcePhoto(
    'ino-stay-sakanoue.jpg',
    '坂の上の家／民泊の客室写真',
    '坂の上の家／民泊 room photo',
    'https://travel.rakuten.co.jp/HOTEL/174639/174639.html',
    '楽天トラベル'
  ),
  '土佐和紙工芸村「くらうど」': sourcePhoto(
    'ino-stay-cloud.jpg',
    '土佐和紙工芸村「くらうど」の客室写真',
    '土佐和紙工芸村「くらうど」 room photo',
    'https://travel.rakuten.co.jp/HOTEL/75287/75287.html',
    '楽天トラベル'
  ),
  'Ｃａｓｏｌａｒｅ　Ｖｅｒｄｅ　Ｂｌｕ': sourcePhoto(
    'ino-stay-casolare.jpg',
    'Ｃａｓｏｌａｒｅ　Ｖｅｒｄｅ　Ｂｌｕの客室写真',
    'Ｃａｓｏｌａｒｅ　Ｖｅｒｄｅ　Ｂｌｕ room photo',
    'https://travel.rakuten.co.jp/HOTEL/192236/192236.html',
    '楽天トラベル'
  ),
  '街角食堂 ハラハチ': sourcePhoto('ino-39007065-dish.jpg', '街角食堂 ハラハチの料理写真', '街角食堂 ハラハチ food photo', TABELOG_39007065, '食べログ'),
  '美味しんぼ山岡': sourcePhoto('ino-39000856-dish.jpg', '美味しんぼ山岡の料理写真', '美味しんぼ山岡 food photo', TABELOG_39000856, '食べログ'),
  'によど屋 西の谷店': sourcePhoto('ino-39008250-dish.jpg', 'によど屋 西の谷店の料理写真', 'によど屋 西の谷店 food photo', TABELOG_39008250, '食べログ'),
  'アオイネコ': sourcePhoto('ino-39008046-dish.jpg', 'アオイネコの料理写真', 'アオイネコ food photo', TABELOG_39008046, '食べログ'),
  '山と川': sourcePhoto('ino-39008354-dish.jpg', '山と川の料理写真', '山と川 food photo', TABELOG_39008354, '食べログ'),
  'はこべ いの店': sourcePhoto('ino-39005619-dish.jpg', 'はこべ いの店の料理写真', 'はこべ いの店 food photo', TABELOG_39005619, '食べログ'),
  'さんぽ道': sourcePhoto('ino-39007160-dish.jpg', 'さんぽ道の料理写真', 'さんぽ道 food photo', TABELOG_39007160, '食べログ'),
  '手打そば 時屋': sourcePhoto('ino-39003162-dish.jpg', '手打そば 時屋の料理写真', '手打そば 時屋 food photo', TABELOG_39003162, '食べログ'),
  '畑山ガーデン': sourcePhoto('ino-39002980-dish.jpg', '畑山ガーデンの料理写真', '畑山ガーデン food photo', TABELOG_39002980, '食べログ'),
  'カフェ　ソラ': sourcePhoto('ino-39004615-dish.jpg', 'カフェ　ソラの料理写真', 'カフェ　ソラ food photo', TABELOG_39004615, '食べログ'),
  '草庵': sourcePhoto('ino-39001631-dish.jpg', '草庵の料理写真', '草庵 food photo', TABELOG_39001631, '食べログ'),
  'シラサ': sourcePhoto('ino-39003187-dish.jpg', 'シラサの料理写真', 'シラサ food photo', TABELOG_39003187, '食べログ'),
  '高知アイス売店': sourcePhoto('ino-39005038-dish.jpg', '高知アイス売店の料理写真', '高知アイス売店 food photo', TABELOG_39005038, '食べログ'),
  'えるぴお': sourcePhoto('ino-39001298-dish.jpg', 'えるぴおの料理写真', 'えるぴお food photo', TABELOG_39001298, '食べログ'),
  'Cafe仁淀ブルー': sourcePhoto('ino-39006687-dish.jpg', 'Cafe仁淀ブルーの料理写真', 'Cafe仁淀ブルー food photo', TABELOG_39006687, '食べログ'),
  'OAK Bakery': sourcePhoto('ino-39008376-dish.jpg', 'OAK Bakeryの料理写真', 'OAK Bakery food photo', TABELOG_39008376, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: INO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: INO.sources.accessed};
}

export const INO_FACILITIES: readonly FacilityRow[] = [
  sight('ino-sight-01', 'にこ淵', '高知県吾川郡いの町清水上分2976-11', null, 'https://ja.wikipedia.org/wiki/%E3%81%AB%E3%81%93%E6%B7%B5', 33.70511111, 133.34119444),
  sight('ino-sight-02', 'いの町紙の博物館', '高知県吾川郡いの町幸町110-1', '088-893-0886', 'https://ja.wikipedia.org/wiki/%E3%81%84%E3%81%AE%E7%94%BA%E7%B4%99%E3%81%AE%E5%8D%9A%E7%89%A9%E9%A4%A8', 33.54777778, 133.423),
  sight('ino-sight-03', '伊野駅', '高知県吾川郡いの町駅前町1', null, 'https://ja.wikipedia.org/wiki/%E4%BC%8A%E9%87%8E%E9%A7%85', 33.54748889, 133.43013889),
  sight('ino-sight-04', '名越屋沈下橋', '高知県吾川郡いの町勝賀瀬', null, 'https://www.inofan.jp/spot/nature/n139/', 33.572556, 133.355444),
  sight('ino-sight-05', '伊野停留場', '高知県吾川郡いの町駅前町', null, 'https://ja.wikipedia.org/wiki/%E4%BC%8A%E9%87%8E%E5%81%9C%E7%95%99%E5%A0%B4', 33.54845, 133.42843333),
  sight('ino-sight-06', '紙のこいのぼり', '高知県吾川郡いの町（仁淀川）', null, 'https://commons.wikimedia.org/wiki/File:%E7%B4%99%E3%81%AE%E3%81%93%E3%81%84%E3%81%AE%E3%81%BC%E3%82%8A_-_panoramio.jpg', 33.54972, 133.416349),
  sight('ino-experience-01', '道の駅土佐和紙工芸村', '高知県吾川郡いの町鹿敷1226', null, 'https://ja.wikipedia.org/wiki/%E9%81%93%E3%81%AE%E9%A7%85%E5%9C%9F%E4%BD%90%E5%92%8C%E7%B4%99%E5%B7%A5%E8%8A%B8%E6%9D%91', 33.57356, 133.36619)
];
