/**
 * Uwajima City sourced facts. Do not invent population.
 * Hall / JIS from city HP footer + Wikipedia 宇和島市 (accessed 2026-09-09). JIS 38203. Third Ehime hub after 松山市・今治市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const UWAJIMA = {
  nameJa: '宇和島市',
  nameEn: 'Uwajima',
  reading: 'うわじまし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'uwajima',
  jis: '38203',
  jlis: '382035',
  sameAs: 'https://www.city.uwajima.ehime.jp/',
  hall: {
    postalCode: '798-8601',
    addressJa: '愛媛県宇和島市曙町1番地',
    addressEn: '1 Akebono-cho, Uwajima City, Ehime 798-8601, Japan',
    phone: '0895-24-1111'
  },
  sources: {
    home: 'https://www.city.uwajima.ehime.jp/',
    hall: 'https://www.city.uwajima.ehime.jp/map/uwajima-shiyakusho.html',
    kanko: 'https://www.city.uwajima.ehime.jp/site/uwajima-jo/',
    castle: 'https://ja.wikipedia.org/wiki/%E5%AE%87%E5%92%8C%E5%B3%B6%E5%9F%8E',
    tabelogCity: 'https://tabelog.com/ehime/C38203/rstLst/',
    clement: 'https://travel.rakuten.co.jp/HOTEL/789/789.html',
    accessed: '2026-09-09'
  }
} as const;

export const UWAJIMA_EXPECTED_ROW_COUNT = 10;
export const UWAJIMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Uwajima Castle. Hero title remains municipality name only. */
export const UWAJIMA_PLACE_PHOTO = wikiPhoto(
  'uwajima-castle.jpg',
  'https://commons.wikimedia.org/wiki/File:Uwajima_Castle_01.JPG',
  'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
  'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-07-19',
  '宇和島城', 'Uwajima Castle'
);

const TABELOG_38012720 = "https://tabelog.com/ehime/A3803/A380301/38012720/";
const TABELOG_38014442 = "https://tabelog.com/ehime/A3803/A380301/38014442/";
const TABELOG_38015889 = "https://tabelog.com/ehime/A3803/A380301/38015889/";
const TABELOG_38014494 = "https://tabelog.com/ehime/A3803/A380301/38014494/";
const TABELOG_38015003 = "https://tabelog.com/ehime/A3803/A380301/38015003/";
const TABELOG_38010443 = "https://tabelog.com/ehime/A3803/A380301/38010443/";
const TABELOG_38002319 = "https://tabelog.com/ehime/A3803/A380301/38002319/";
const TABELOG_38015223 = "https://tabelog.com/ehime/A3803/A380301/38015223/";
const TABELOG_38008637 = "https://tabelog.com/ehime/A3803/A380301/38008637/";
const TABELOG_38014827 = "https://tabelog.com/ehime/A3803/A380301/38014827/";
const TABELOG_38005706 = "https://tabelog.com/ehime/A3803/A380301/38005706/";
const TABELOG_38012787 = "https://tabelog.com/ehime/A3803/A380301/38012787/";
const TABELOG_38017316 = "https://tabelog.com/ehime/A3803/A380301/38017316/";
const TABELOG_38009280 = "https://tabelog.com/ehime/A3803/A380301/38009280/";
const TABELOG_38015459 = "https://tabelog.com/ehime/A3803/A380301/38015459/";
const TABELOG_38000879 = "https://tabelog.com/ehime/A3803/A380301/38000879/";

export const UWAJIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '宇和島城': UWAJIMA_PLACE_PHOTO,
  '天赦園': wikiPhoto(
    'uwajima-tenshaen.jpg',
    'https://commons.wikimedia.org/wiki/File:Tensyaen20210406_01.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2021-04-06',
    '天赦園', 'Tensha-en Garden'
  ),
  '遊子水荷浦の段畑': wikiPhoto(
    'uwajima-yusu-danbatake.jpg',
    'https://commons.wikimedia.org/wiki/File:2012%E9%81%8A%E5%AD%90%E6%B0%B4%E8%8D%B7%E6%B5%A6%E3%81%AE%E6%AE%B5%E7%95%911.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami', 'https://commons.wikimedia.org/wiki/User:Osami', '2012-02',
    '遊子水荷浦の段畑', 'Yusu Mizugaura terraced fields'
  ),
  '道の駅 みなとオアシスうわじま きさいや広場': wikiPhoto(
    'uwajima-kisaiya.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%8D%E3%81%95%E3%81%84%E3%82%84%E5%BA%83%E5%A0%B4.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    'キアラア', 'https://commons.wikimedia.org/wiki/User:%E3%82%AD%E3%82%A2%E3%83%A9%E3%82%A2', '2026-03-21',
    '道の駅 みなとオアシスうわじま きさいや広場', 'Michinoeki Minato Oasis Uwajima Kisaiya Square'
  ),
  '宇和島市立伊達博物館': wikiPhoto(
    'uwajima-date-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:Uwajima_Date_Museum_1.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '京浜にけ', 'https://commons.wikimedia.org/wiki/User:%E4%BA%AC%E6%B5%9C%E3%81%AB%E3%81%91', '2012',
    '宇和島市立伊達博物館', 'Uwajima Date Museum'
  ),
  "ASAHI食堂": sourcePhoto('uwajima-38012720-dish.jpg', "ASAHI食堂の料理写真", "ASAHI食堂 food photo", TABELOG_38012720, '食べログ'),
  "やきとり 鳥翔": sourcePhoto('uwajima-38014442-dish.jpg', "やきとり 鳥翔の料理写真", "やきとり 鳥翔 food photo", TABELOG_38014442, '食べログ'),
  "京": sourcePhoto('uwajima-38015889-dish.jpg', "京の料理写真", "京 food photo", TABELOG_38015889, '食べログ'),
  "kitchen sola": sourcePhoto('uwajima-38014494-dish.jpg', "kitchen solaの料理写真", "kitchen sola food photo", TABELOG_38014494, '食べログ'),
  "炭火焼鳥 ごえん": sourcePhoto('uwajima-38015003-dish.jpg', "炭火焼鳥 ごえんの料理写真", "炭火焼鳥 ごえん food photo", TABELOG_38015003, '食べログ'),
  "しゃぶしゃぶ温野菜 宇和島店": sourcePhoto('uwajima-38010443-dish.jpg', "しゃぶしゃぶ温野菜 宇和島店の料理写真", "しゃぶしゃぶ温野菜 宇和島店 food photo", TABELOG_38010443, '食べログ'),
  "国安": sourcePhoto('uwajima-38002319-dish.jpg', "国安の料理写真", "国安 food photo", TABELOG_38002319, '食べログ'),
  "食事処 なにわ": sourcePhoto('uwajima-38015223-dish.jpg', "食事処 なにわの料理写真", "食事処 なにわ food photo", TABELOG_38015223, '食べログ'),
  "みよし食堂": sourcePhoto('uwajima-38008637-dish.jpg', "みよし食堂の料理写真", "みよし食堂 food photo", TABELOG_38008637, '食べログ'),
  "宇和島市観光情報センター シロシタ": sourcePhoto('uwajima-38014827-dish.jpg', "宇和島市観光情報センター シロシタの料理写真", "宇和島市観光情報センター シロシタ food photo", TABELOG_38014827, '食べログ'),
  "パティシエ･ド･ポルト": sourcePhoto('uwajima-38005706-dish.jpg', "パティシエ･ド･ポルトの料理写真", "パティシエ･ド･ポルト food photo", TABELOG_38005706, '食べログ'),
  "レストラン こにし": sourcePhoto('uwajima-38012787-dish.jpg', "レストラン こにしの料理写真", "レストラン こにし food photo", TABELOG_38012787, '食べログ'),
  "縁麻辣湯  宇和島": sourcePhoto('uwajima-38017316-dish.jpg', "縁麻辣湯  宇和島の料理写真", "縁麻辣湯  宇和島 food photo", TABELOG_38017316, '食べログ'),
  "丸亀製麺 宇和島店": sourcePhoto('uwajima-38009280-dish.jpg', "丸亀製麺 宇和島店の料理写真", "丸亀製麺 宇和島店 food photo", TABELOG_38009280, '食べログ'),
  "DINING BAR TRE-TRE": sourcePhoto('uwajima-38015459-dish.jpg', "DINING BAR TRE-TREの料理写真", "DINING BAR TRE-TRE food photo", TABELOG_38015459, '食べログ'),
  "寿提夢 津島店": sourcePhoto('uwajima-38000879-dish.jpg', "寿提夢 津島店の料理写真", "寿提夢 津島店 food photo", TABELOG_38000879, '食べログ'),
  "ＪＲホテルクレメント宇和島": sourcePhoto(
    "uwajima-stay-clement.jpg",
    "ＪＲホテルクレメント宇和島の客室写真",
    "ＪＲホテルクレメント宇和島 room photo",
    "https://travel.rakuten.co.jp/HOTEL/789/789.html",
    '楽天トラベル'
  ),
  "宇和島オリエンタルホテル": sourcePhoto(
    "uwajima-stay-h2352.jpg",
    "宇和島オリエンタルホテルの客室写真",
    "宇和島オリエンタルホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/2352/2352.html",
    '楽天トラベル'
  ),
  "宇和島ターミナルホテル": sourcePhoto(
    "uwajima-stay-h9647.jpg",
    "宇和島ターミナルホテルの客室写真",
    "宇和島ターミナルホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/9647/9647.html",
    '楽天トラベル'
  ),
  "宇和島リージェントホテル": sourcePhoto(
    "uwajima-stay-h16805.jpg",
    "宇和島リージェントホテルの客室写真",
    "宇和島リージェントホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/16805/16805.html",
    '楽天トラベル'
  ),
  "ホテルＣＯＲＡＬ（コーラル）宇和島": sourcePhoto(
    "uwajima-stay-h29188.jpg",
    "ホテルＣＯＲＡＬ（コーラル）宇和島の客室写真",
    "ホテルＣＯＲＡＬ（コーラル）宇和島 room photo",
    "https://travel.rakuten.co.jp/HOTEL/29188/29188.html",
    '楽天トラベル'
  ),
  "ホテルイシバシ": sourcePhoto(
    "uwajima-stay-h130595.jpg",
    "ホテルイシバシの客室写真",
    "ホテルイシバシ room photo",
    "https://travel.rakuten.co.jp/HOTEL/130595/130595.html",
    '楽天トラベル'
  ),
  "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉": sourcePhoto(
    "uwajima-stay-superhotel.jpg",
    "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉の客室写真",
    "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉 room photo",
    "https://travel.rakuten.co.jp/HOTEL/184525/184525.html",
    '楽天トラベル'
  ),
  "ゲストハウスＧＯ－ＨＩＧＨＴＡＫＡ": sourcePhoto(
    "uwajima-stay-guesthouse.jpg",
    "ゲストハウスＧＯ－ＨＩＧＨＴＡＫＡの客室写真",
    "ゲストハウスＧＯ－ＨＩＧＨＴＡＫＡ room photo",
    "https://travel.rakuten.co.jp/HOTEL/196127/196127.html",
    '楽天トラベル'
  ),
  "釣り人が集う宿 レジャー民宿・西遊漁センター": sourcePhoto(
    "uwajima-stay-h198564.jpg",
    "釣り人が集う宿 レジャー民宿・西遊漁センターの客室写真",
    "釣り人が集う宿 レジャー民宿・西遊漁センター room photo",
    "https://travel.rakuten.co.jp/HOTEL/198564/198564.html",
    '楽天トラベル'
  ),
  "宇和島オリエンタルホテル 大浴場": sourcePhoto(
    "uwajima-onsen-h2352.jpg",
    "宇和島オリエンタルホテル 大浴場の写真",
    "宇和島オリエンタルホテル 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/2352/gallery.html",
    '楽天トラベル'
  ),
  "宇和島第一ホテル だいいちの湯": sourcePhoto(
    "uwajima-onsen-h11363.jpg",
    "宇和島第一ホテル だいいちの湯の写真",
    "宇和島第一ホテル だいいちの湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/11363/gallery.html",
    '楽天トラベル'
  ),
  "ホテルＣＯＲＡＬ（コーラル）宇和島 大浴場": sourcePhoto(
    "uwajima-onsen-h29188.jpg",
    "ホテルＣＯＲＡＬ（コーラル）宇和島 大浴場の写真",
    "ホテルＣＯＲＡＬ（コーラル）宇和島 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/29188/gallery.html",
    '楽天トラベル'
  ),
  "ホテルイシバシ 男湯・温泉": sourcePhoto(
    "uwajima-onsen-h130595.jpg",
    "ホテルイシバシ 男湯・温泉の写真",
    "ホテルイシバシ 男湯・温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/130595/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉 男女別天然温泉": sourcePhoto(
    "uwajima-onsen-superhotel.jpg",
    "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉 男女別天然温泉の写真",
    "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉 男女別天然温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/184525/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: UWAJIMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: UWAJIMA.sources.accessed};
}

export const UWAJIMA_FACILITIES: readonly FacilityRow[] = [
  sight('uwajima-sight-01', '宇和島城', '愛媛県宇和島市丸之内', null, 'https://ja.wikipedia.org/wiki/%E5%AE%87%E5%92%8C%E5%B3%B6%E5%9F%8E', 33.21947778, 132.56523611),
  sight('uwajima-sight-02', '天赦園', '愛媛県宇和島市天赦公園', null, 'https://ja.wikipedia.org/wiki/%E5%A4%A9%E8%B5%A6%E5%9C%92', 33.21551389, 132.561125),
  sight('uwajima-sight-03', '遊子水荷浦の段畑', '愛媛県宇和島市遊子', null, 'https://ja.wikipedia.org/wiki/%E9%81%8A%E5%AD%90%E6%B0%B4%E8%8D%B7%E6%B5%A6%E3%81%AE%E6%AE%B5%E7%95%91', 33.20675, 132.45541667),
  sight('uwajima-sight-04', '道の駅 みなとオアシスうわじま きさいや広場', '愛媛県宇和島市弁天町1-318-16', null, 'https://www.kisaiyahiroba.com/', 33.222339, 132.558731),
  sight('uwajima-sight-05', '宇和島市立伊達博物館', '愛媛県宇和島市丸之内1丁目2-13', null, 'https://ja.wikipedia.org/wiki/%E5%AE%87%E5%92%8C%E5%B3%B6%E5%B8%82%E7%AB%8B%E4%BC%8A%E9%81%94%E5%8D%9A%E7%89%A9%E9%A4%A8', 33.21594, 132.56264),
  sight('uwajima-onsen-01', "宇和島オリエンタルホテル 大浴場", "愛媛県宇和島市鶴島町6-10", null, "https://travel.rakuten.co.jp/HOTEL/2352/gallery.html", null, null),
  sight('uwajima-onsen-02', "宇和島第一ホテル だいいちの湯", "愛媛県宇和島市中央町1-3-9", null, "https://travel.rakuten.co.jp/HOTEL/11363/gallery.html", null, null),
  sight('uwajima-onsen-03', "ホテルＣＯＲＡＬ（コーラル）宇和島 大浴場", "愛媛県宇和島市住吉町2-7-10", null, "https://travel.rakuten.co.jp/HOTEL/29188/gallery.html", null, null),
  sight('uwajima-onsen-04', "ホテルイシバシ 男湯・温泉", "愛媛県宇和島市栄町港2-4-14", null, "https://travel.rakuten.co.jp/HOTEL/130595/gallery.html", null, null),
  sight('uwajima-onsen-05', "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉 男女別天然温泉", "愛媛県宇和島市錦町4-1", null, "https://travel.rakuten.co.jp/HOTEL/184525/gallery.html", null, null),
];
