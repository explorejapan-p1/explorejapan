/**
 * Yawatahama City sourced facts. Do not invent population.
 * Hall / JIS from city HP 庁舎案内 + Wikipedia 八幡浜市 (accessed 2026-09-09). JIS 38204. Fourth Ehime hub after 松山市・今治市・宇和島市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const YAWATAHAMA = {
  nameJa: '八幡浜市',
  nameEn: 'Yawatahama',
  reading: 'やわたはまし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'yawatahama',
  jis: '38204',
  jlis: '382043',
  sameAs: 'https://www.city.yawatahama.ehime.jp/',
  hall: {
    postalCode: '796-8501',
    addressJa: '愛媛県八幡浜市北浜一丁目1番1号',
    addressEn: '1-1-1 Kitahama, Yawatahama City, Ehime 796-8501, Japan',
    phone: '0894-22-3111'
  },
  sources: {
    home: 'https://www.city.yawatahama.ehime.jp/',
    hall: 'https://www.city.yawatahama.ehime.jp/intro/chosha/',
    kanko: 'https://www.minatto.net/',
    minatto: 'https://www.minatto.net/',
    tabelogCity: 'https://tabelog.com/ehime/C38204/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const YAWATAHAMA_EXPECTED_ROW_COUNT = 9;
export const YAWATAHAMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Michinoeki Yawatahama Minatto. Hero title remains municipality name only. */
export const YAWATAHAMA_PLACE_PHOTO = wikiPhoto(
  'yawatahama-minatto.jpg',
  'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E5%85%AB%E5%B9%A1%E6%B5%9C%E3%81%BF%E3%81%AA%E3%81%A3%E3%81%A83.jpg',
  "CC0", "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "キアラア", "https://commons.wikimedia.org/wiki/User:%E3%82%AD%E3%82%A2%E3%83%A9%E3%82%A2", "2025-05-22",
  '道の駅・みなとオアシス 八幡浜みなっと', 'Michinoeki Minato Oasis Yawatahama Minatto'
);

const TABELOG_38016598 = "https://tabelog.com/ehime/A3803/A380302/38016598/";
const TABELOG_38009747 = "https://tabelog.com/ehime/A3803/A380302/38009747/";
const TABELOG_38005927 = "https://tabelog.com/ehime/A3803/A380302/38005927/";
const TABELOG_38003284 = "https://tabelog.com/ehime/A3803/A380302/38003284/";
const TABELOG_38001114 = "https://tabelog.com/ehime/A3803/A380302/38001114/";
const TABELOG_38014122 = "https://tabelog.com/ehime/A3803/A380302/38014122/";
const TABELOG_38006378 = "https://tabelog.com/ehime/A3803/A380302/38006378/";
const TABELOG_38011923 = "https://tabelog.com/ehime/A3803/A380302/38011923/";
const TABELOG_38007377 = "https://tabelog.com/ehime/A3803/A380302/38007377/";
const TABELOG_38005668 = "https://tabelog.com/ehime/A3803/A380302/38005668/";
const TABELOG_38004840 = "https://tabelog.com/ehime/A3803/A380302/38004840/";
const TABELOG_38004625 = "https://tabelog.com/ehime/A3803/A380302/38004625/";
const TABELOG_38001615 = "https://tabelog.com/ehime/A3803/A380302/38001615/";
const TABELOG_38001495 = "https://tabelog.com/ehime/A3803/A380302/38001495/";
const TABELOG_38016106 = "https://tabelog.com/ehime/A3803/A380302/38016106/";
const TABELOG_38006544 = "https://tabelog.com/ehime/A3803/A380302/38006544/";

export const YAWATAHAMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "道の駅・みなとオアシス 八幡浜みなっと": YAWATAHAMA_PLACE_PHOTO,
  "日土小学校": wikiPhoto(
    "yawatahama-hizuchi-es.jpg",
    "https://commons.wikimedia.org/wiki/File:%E6%97%A5%E5%9C%9F%E5%B0%8F%E5%AD%A6%E6%A0%A1.jpg",
    "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
    "Yawatahamangcc2016", "https://commons.wikimedia.org/wiki/User:Yawatahamangcc2016", "2016-12-19",
    "日土小学校", "Hizuchi Elementary School"
  ),
  "八幡浜港": wikiPhoto(
    "yawatahama-port.jpg",
    "https://commons.wikimedia.org/wiki/File:Yawatahama_Port_20250107.jpg",
    "CC0", "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "特急いよのたみ", "https://commons.wikimedia.org/wiki/User:%E7%89%B9%E6%80%A5%E3%81%84%E3%82%88%E3%81%AE%E3%81%9F%E3%81%BF", "7 January ",
    "八幡浜港", "Port of Yawatahama"
  ),
  "川之石の町並み": wikiPhoto(
    "yawatahama-kawanoishi.jpg",
    "https://commons.wikimedia.org/wiki/File:%E5%B7%9D%E4%B9%8B%E7%9F%B3_-_panoramio.jpg",
    "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
    "Yobito KAYANUMA", "https://commons.wikimedia.org/wiki/User:Yobito_KAYANUMA", "Taken on 1",
    "川之石の町並み", "Kawanoishi townscape"
  ),
  "明治橋": wikiPhoto(
    "yawatahama-meiji-bridge.jpg",
    "https://commons.wikimedia.org/wiki/File:Meiji_Bridge_in_Yawatahama_(1)_-_May_9,_2010.jpg",
    "CC BY 2.0", "https://creativecommons.org/licenses/by/2.0",
    "Yoichiro Shigeyama", "https://www.flickr.com/people/50661325@N05", "2010-05-09",
    "明治橋", "Meiji Bridge (Yawatahama)"
  ),
  "酒ト踊ルPOLOLi": sourcePhoto("yawatahama-38016598-dish.jpg", "酒ト踊ルPOLOLiの料理写真", "酒ト踊ルPOLOLi food photo", TABELOG_38016598, '食べログ'),
  "こないちもんめ": sourcePhoto("yawatahama-38009747-dish.jpg", "こないちもんめの料理写真", "こないちもんめ food photo", TABELOG_38009747, '食べログ'),
  "火の鳥": sourcePhoto("yawatahama-38005927-dish.jpg", "火の鳥の料理写真", "火の鳥 food photo", TABELOG_38005927, '食べログ'),
  "白石食堂": sourcePhoto("yawatahama-38003284-dish.jpg", "白石食堂の料理写真", "白石食堂 food photo", TABELOG_38003284, '食べログ'),
  "くいもんや３０５": sourcePhoto("yawatahama-38001114-dish.jpg", "くいもんや３０５の料理写真", "くいもんや３０５ food photo", TABELOG_38001114, '食べログ'),
  "YAMATTO学舎": sourcePhoto("yawatahama-38014122-dish.jpg", "YAMATTO学舎の料理写真", "YAMATTO学舎 food photo", TABELOG_38014122, '食べログ'),
  "あわしま堂": sourcePhoto("yawatahama-38006378-dish.jpg", "あわしま堂の料理写真", "あわしま堂 food photo", TABELOG_38006378, '食べログ'),
  "BRASSERIE WILL": sourcePhoto("yawatahama-38011923-dish.jpg", "BRASSERIE WILLの料理写真", "BRASSERIE WILL food photo", TABELOG_38011923, '食べログ'),
  "谷本蒲鉾店 練技館": sourcePhoto("yawatahama-38007377-dish.jpg", "谷本蒲鉾店 練技館の料理写真", "谷本蒲鉾店 練技館 food photo", TABELOG_38007377, '食べログ'),
  "高松屋 暁": sourcePhoto("yawatahama-38005668-dish.jpg", "高松屋 暁の料理写真", "高松屋 暁 food photo", TABELOG_38005668, '食べログ'),
  "モンブラン": sourcePhoto("yawatahama-38004840-dish.jpg", "モンブランの料理写真", "モンブラン food photo", TABELOG_38004840, '食べログ'),
  "平家谷そうめん流し": sourcePhoto("yawatahama-38004625-dish.jpg", "平家谷そうめん流しの料理写真", "平家谷そうめん流し food photo", TABELOG_38004625, '食べログ'),
  "松月堂": sourcePhoto("yawatahama-38001615-dish.jpg", "松月堂の料理写真", "松月堂 food photo", TABELOG_38001615, '食べログ'),
  "すし光": sourcePhoto("yawatahama-38001495-dish.jpg", "すし光の料理写真", "すし光 food photo", TABELOG_38001495, '食べログ'),
  "ONKEN BURANKO": sourcePhoto("yawatahama-38016106-dish.jpg", "ONKEN BURANKOの料理写真", "ONKEN BURANKO food photo", TABELOG_38016106, '食べログ'),
  "平田蒲鉾店": sourcePhoto("yawatahama-38006544-dish.jpg", "平田蒲鉾店の料理写真", "平田蒲鉾店 food photo", TABELOG_38006544, '食べログ'),
  "八幡浜センチュリーホテル イトー": sourcePhoto(
    "yawatahama-stay-h746.jpg",
    "八幡浜センチュリーホテル イトーの客室写真",
    "八幡浜センチュリーホテル イトー room photo",
    "https://travel.rakuten.co.jp/HOTEL/746/746.html",
    '楽天トラベル'
  ),
  "ハーバープラザホテル": sourcePhoto(
    "yawatahama-stay-h1016.jpg",
    "ハーバープラザホテルの客室写真",
    "ハーバープラザホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/1016/1016.html",
    '楽天トラベル'
  ),
  "ビジネスホテル ヤマキ": sourcePhoto(
    "yawatahama-stay-h43948.jpg",
    "ビジネスホテル ヤマキの客室写真",
    "ビジネスホテル ヤマキ room photo",
    "https://travel.rakuten.co.jp/HOTEL/43948/43948.html",
    '楽天トラベル'
  ),
  "スーパーホテル八幡浜": sourcePhoto(
    "yawatahama-stay-superhotel.jpg",
    "スーパーホテル八幡浜の客室写真",
    "スーパーホテル八幡浜 room photo",
    "https://travel.rakuten.co.jp/HOTEL/109135/109135.html",
    '楽天トラベル'
  ),
  "大正湯": sourcePhoto(
    "yawatahama-stay-h177498.jpg",
    "大正湯の客室写真",
    "大正湯 room photo",
    "https://travel.rakuten.co.jp/HOTEL/177498/177498.html",
    '楽天トラベル'
  ),
  "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａ": sourcePhoto(
    "yawatahama-stay-h187464.jpg",
    "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａの客室写真",
    "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａ room photo",
    "https://travel.rakuten.co.jp/HOTEL/187464/187464.html",
    '楽天トラベル'
  ),
  "ハーバープラザホテル 八幡浜黒湯温泉": sourcePhoto(
    "yawatahama-onsen-h1016.jpg",
    "ハーバープラザホテル 八幡浜黒湯温泉の写真",
    "ハーバープラザホテル 八幡浜黒湯温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/1016/gallery.html",
    '楽天トラベル'
  ),
  "スーパーホテル八幡浜 天然温泉": sourcePhoto(
    "yawatahama-onsen-superhotel.jpg",
    "スーパーホテル八幡浜 天然温泉の写真",
    "スーパーホテル八幡浜 天然温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/109135/gallery.html",
    '楽天トラベル'
  ),
  "大正湯 女湯": sourcePhoto(
    "yawatahama-onsen-h177498.jpg",
    "大正湯 女湯の写真",
    "大正湯 女湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/177498/gallery.html",
    '楽天トラベル'
  ),
  "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａ 大浴場": sourcePhoto(
    "yawatahama-onsen-h187464.jpg",
    "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａ 大浴場の写真",
    "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａ 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/187464/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: YAWATAHAMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: YAWATAHAMA.sources.accessed};
}

export const YAWATAHAMA_FACILITIES: readonly FacilityRow[] = [
  sight('yawatahama-sight-01', "道の駅・みなとオアシス 八幡浜みなっと", "愛媛県八幡浜市沖新田1581番地23", null, "https://www.minatto.net/", 33.45819, 132.41825),
  sight('yawatahama-sight-02', "日土小学校", "愛媛県八幡浜市日土町2番耕地851", null, "https://ja.wikipedia.org/wiki/%E5%85%AB%E5%B9%A1%E6%B5%9C%E5%B8%82%E7%AB%8B%E6%97%A5%E5%9C%9F%E5%B0%8F%E5%AD%A6%E6%A0%A1", 33.50063889, 132.42786111),
  sight('yawatahama-sight-03', "八幡浜港", "愛媛県八幡浜市沖新田", null, "https://ja.wikipedia.org/wiki/%E5%85%AB%E5%B9%A1%E6%B5%9C%E6%B8%AF", 33.4581966, 132.4150988),
  sight('yawatahama-sight-04', "川之石の町並み", "愛媛県八幡浜市保内町川之石", null, "https://ja.wikipedia.org/wiki/%E5%B7%9D%E4%B9%8B%E7%9F%B3%E7%94%BA", 33.47672, 132.39883),
  sight('yawatahama-sight-05', "明治橋", "愛媛県八幡浜市新町", null, "https://commons.wikimedia.org/wiki/Category:Meiji_Bridge_(Yawatahama)", 33.456794, 132.428931),
  sight('yawatahama-onsen-01', "ハーバープラザホテル 八幡浜黒湯温泉", "愛媛県八幡浜市仲之町360-1", null, "https://travel.rakuten.co.jp/HOTEL/1016/gallery.html", null, null),
  sight('yawatahama-onsen-02', "スーパーホテル八幡浜 天然温泉", "愛媛県八幡浜市千代田町1460-123", null, "https://travel.rakuten.co.jp/HOTEL/109135/gallery.html", null, null),
  sight('yawatahama-onsen-03', "大正湯 女湯", "愛媛県八幡浜市1132", null, "https://travel.rakuten.co.jp/HOTEL/177498/gallery.html", null, null),
  sight('yawatahama-onsen-04', "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｙａｗａｔａｈａｍａ 大浴場", "愛媛県八幡浜市松柏丙794駅前", null, "https://travel.rakuten.co.jp/HOTEL/187464/gallery.html", null, null),
];

