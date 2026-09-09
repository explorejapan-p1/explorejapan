/**
 * Iyo City sourced facts. Do not invent population.
 * Hall / JIS from city HP + Wikipedia 伊予市 (accessed 2026-09-09). JIS 38210. Eighth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const IYO = {
  nameJa: '伊予市',
  nameEn: 'Iyo',
  reading: 'いよし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'iyo',
  jis: '38210',
  jlis: '382101',
  sameAs: 'https://www.city.iyo.lg.jp/',
  hall: {
    postalCode: '799-3193',
    addressJa: '愛媛県伊予市米湊820番地',
    addressEn: '820 Minato, Iyo City, Ehime 799-3193, Japan',
    phone: '089-982-1111'
  },
  sources: {
    home: 'https://www.city.iyo.lg.jp/',
    hall: 'https://www.city.iyo.lg.jp/',
    kanko: 'https://iyokankou.jp/',
    goshiki: 'https://www.city.iyo.lg.jp/shisetsu/shisetsu/koen/goshikipark.html',
    futami: 'https://www.city.iyo.lg.jp/shisetsu/shisetsu/koen/seaside.html',
    tabelogCity: 'https://tabelog.com/ehime/C38210/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const IYO_EXPECTED_ROW_COUNT = 8;
export const IYO_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Goshikihama Park. Hero title remains municipality name only. */

export const IYO_PLACE_PHOTO = wikiPhoto(
  "iyo-goshikihama-park.jpg",
  "https://commons.wikimedia.org/wiki/File:Goshikihama_Park_20240811_(2).jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2024-08-11",
  "五色浜公園", "Goshikihama Park"
);

const TABELOG_38016885 = "https://tabelog.com/ehime/A3801/A380103/38016885/";
const TABELOG_38011124 = "https://tabelog.com/ehime/A3801/A380103/38011124/";
const TABELOG_38013130 = "https://tabelog.com/ehime/A3801/A380103/38013130/";
const TABELOG_38016715 = "https://tabelog.com/ehime/A3801/A380103/38016715/";
const TABELOG_38004321 = "https://tabelog.com/ehime/A3801/A380103/38004321/";
const TABELOG_38005343 = "https://tabelog.com/ehime/A3801/A380103/38005343/";
const TABELOG_38007418 = "https://tabelog.com/ehime/A3801/A380103/38007418/";
const TABELOG_38016410 = "https://tabelog.com/ehime/A3801/A380103/38016410/";
const TABELOG_38015499 = "https://tabelog.com/ehime/A3801/A380103/38015499/";
const TABELOG_38006812 = "https://tabelog.com/ehime/A3801/A380103/38006812/";
const TABELOG_38005530 = "https://tabelog.com/ehime/A3801/A380103/38005530/";
const TABELOG_38013849 = "https://tabelog.com/ehime/A3801/A380103/38013849/";
const TABELOG_38013357 = "https://tabelog.com/ehime/A3801/A380103/38013357/";
const TABELOG_38013306 = "https://tabelog.com/ehime/A3801/A380103/38013306/";
const TABELOG_38008252 = "https://tabelog.com/ehime/A3801/A380103/38008252/";
const TABELOG_38006194 = "https://tabelog.com/ehime/A3801/A380103/38006194/";

export const IYO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "五色浜公園": IYO_PLACE_PHOTO,
  "ふたみシーサイド公園": wikiPhoto(
    "iyo-michinoeki-futami.jpg",
    "https://commons.wikimedia.org/wiki/File:Michinoeki_Futami.jpg",
    "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
    "MaedaAkihiko", "https://commons.wikimedia.org/wiki/User:MaedaAkihiko", "2025-01-01",
    "ふたみシーサイド公園（道の駅ふたみ）", "Futami Seaside Park (Michinoeki Futami)"
  ),
  "伊予市駅": wikiPhoto(
    "iyo-iyoshi-station.jpg",
    "https://commons.wikimedia.org/wiki/File:Iyoshi_Station_20240811_(1).jpg",
    "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
    "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2024-08-11",
    "伊予市駅", "Iyoshi Station"
  ),
  "萬安港旧灯台": wikiPhoto(
    "iyo-goshikihama-lighthouse.jpg",
    "https://commons.wikimedia.org/wiki/File:Goshikihama_Park_Lighthouse.jpg",
    "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
    "DFT B3LYP", "https://commons.wikimedia.org/wiki/User:DFT_B3LYP", "2017-10-06",
    "萬安港旧灯台", "Former Banan Port lighthouse"
  ),
  "三津浜焼伊予灘": sourcePhoto("iyo-38016885-dish.jpg", "三津浜焼伊予灘の料理写真", "三津浜焼伊予灘 food photo", TABELOG_38016885, '食べログ'),
  "魚民 伊予店": sourcePhoto("iyo-38011124-dish.jpg", "魚民 伊予店の料理写真", "魚民 伊予店 food photo", TABELOG_38011124, '食べログ'),
  "ラピ": sourcePhoto("iyo-38013130-dish.jpg", "ラピの料理写真", "ラピ food photo", TABELOG_38013130, '食べログ'),
  "Sorriso": sourcePhoto("iyo-38016715-dish.jpg", "Sorrisoの料理写真", "Sorriso food photo", TABELOG_38016715, '食べログ'),
  "居酒屋夕霧": sourcePhoto("iyo-38004321-dish.jpg", "居酒屋夕霧の料理写真", "居酒屋夕霧 food photo", TABELOG_38004321, '食べログ'),
  "DAIDOKORO　CAFE　MOKU": sourcePhoto("iyo-38005343-dish.jpg", "DAIDOKORO　CAFE　MOKUの料理写真", "DAIDOKORO　CAFE　MOKU food photo", TABELOG_38005343, '食べログ'),
  "ルドリュロラン": sourcePhoto("iyo-38007418-dish.jpg", "ルドリュロランの料理写真", "ルドリュロラン food photo", TABELOG_38007418, '食べログ'),
  "日吉": sourcePhoto("iyo-38016410-dish.jpg", "日吉の料理写真", "日吉 food photo", TABELOG_38016410, '食べログ'),
  "マルセロベーカリー": sourcePhoto("iyo-38015499-dish.jpg", "マルセロベーカリーの料理写真", "マルセロベーカリー food photo", TABELOG_38015499, '食べログ'),
  "じゃんじゃか 伊予店": sourcePhoto("iyo-38006812-dish.jpg", "じゃんじゃか 伊予店の料理写真", "じゃんじゃか 伊予店 food photo", TABELOG_38006812, '食べログ'),
  "Kitchen ichi-nichi": sourcePhoto("iyo-38005530-dish.jpg", "Kitchen ichi-nichiの料理写真", "Kitchen ichi-nichi food photo", TABELOG_38005530, '食べログ'),
  "TSUYAKICHI ふたみシーサイド公園店": sourcePhoto("iyo-38013849-dish.jpg", "TSUYAKICHI ふたみシーサイド公園店の料理写真", "TSUYAKICHI ふたみシーサイド公園店 food photo", TABELOG_38013849, '食べログ'),
  "オカベ": sourcePhoto("iyo-38013357-dish.jpg", "オカベの料理写真", "オカベ food photo", TABELOG_38013357, '食べログ'),
  "料理 いろは": sourcePhoto("iyo-38013306-dish.jpg", "料理 いろはの料理写真", "料理 いろは food photo", TABELOG_38013306, '食べログ'),
  "志乃や": sourcePhoto("iyo-38008252-dish.jpg", "志乃やの料理写真", "志乃や food photo", TABELOG_38008252, '食べログ'),
  "クラフトの里": sourcePhoto("iyo-38006194-dish.jpg", "クラフトの里の料理写真", "クラフトの里 food photo", TABELOG_38006194, '食べログ'),
  "花の森ホテル": sourcePhoto(
    "iyo-stay-h19527.jpg",
    "花の森ホテルの客室写真",
    "花の森ホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/19527/19527.html",
    '楽天トラベル'
  ),
  "ウェルピア伊予": sourcePhoto(
    "iyo-stay-h70933.jpg",
    "ウェルピア伊予の客室写真",
    "ウェルピア伊予 room photo",
    "https://travel.rakuten.co.jp/HOTEL/70933/70933.html",
    '楽天トラベル'
  ),
  "つたや旅館": sourcePhoto(
    "iyo-stay-ryokan.jpg",
    "つたや旅館の客室写真",
    "つたや旅館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/178605/178605.html",
    '楽天トラベル'
  ),
  "いよプリンスホテル": sourcePhoto(
    "iyo-stay-h179258.jpg",
    "いよプリンスホテルの客室写真",
    "いよプリンスホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/179258/179258.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ ＡＺ 愛媛伊予店": sourcePhoto(
    "iyo-stay-h181835.jpg",
    "ＨＯＴＥＬ ＡＺ 愛媛伊予店の客室写真",
    "ＨＯＴＥＬ ＡＺ 愛媛伊予店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/181835/181835.html",
    '楽天トラベル'
  ),
  "花の森ホテル 花の湯": sourcePhoto(
    "iyo-onsen-h19527.jpg",
    "花の森ホテル 花の湯の写真",
    "花の森ホテル 花の湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/19527/gallery.html",
    '楽天トラベル'
  ),
  "ウェルピア伊予 大浴場": sourcePhoto(
    "iyo-onsen-h70933.jpg",
    "ウェルピア伊予 大浴場の写真",
    "ウェルピア伊予 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/70933/gallery.html",
    '楽天トラベル'
  ),
  "つたや旅館 大浴場": sourcePhoto(
    "iyo-onsen-ryokan.jpg",
    "つたや旅館 大浴場の写真",
    "つたや旅館 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/178605/gallery.html",
    '楽天トラベル'
  ),
  "いよプリンスホテル 天然温泉": sourcePhoto(
    "iyo-onsen-h179258.jpg",
    "いよプリンスホテル 天然温泉の写真",
    "いよプリンスホテル 天然温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/179258/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: IYO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: IYO.sources.accessed};
}

export const IYO_FACILITIES: readonly FacilityRow[] = [

  sight("iyo-sight-01", "五色浜公園", "愛媛県伊予市灘町311番地", "089-982-1111", "https://www.city.iyo.lg.jp/shisetsu/shisetsu/koen/goshikipark.html", 33.75552778, 132.69522222),
  sight("iyo-sight-02", "ふたみシーサイド公園", "愛媛県伊予市双海町高岸甲2326番地", "089-986-0522", "https://www.city.iyo.lg.jp/shisetsu/shisetsu/koen/seaside.html", 33.68522222, 132.63422222),
  sight("iyo-sight-03", "伊予市駅", "愛媛県伊予市米湊", null, "https://ja.wikipedia.org/wiki/%E4%BC%8A%E4%BA%88%E5%B8%82%E9%A7%85", 33.75547778, 132.70237778),
  sight("iyo-sight-04", "萬安港旧灯台", "愛媛県伊予市灘町311番地", null, "https://www.city.iyo.lg.jp/machizukuri/kanko/guidemap/goshiki.html", 33.75552778, 132.69522222),
  sight("iyo-onsen-01", "花の森ホテル 花の湯", "愛媛県伊予市中山町中山11-405-2", null, "https://travel.rakuten.co.jp/HOTEL/19527/gallery.html", null, null),
  sight("iyo-onsen-02", "ウェルピア伊予 大浴場", "愛媛県伊予市下三谷1761-1", null, "https://travel.rakuten.co.jp/HOTEL/70933/gallery.html", null, null),
  sight("iyo-onsen-03", "つたや旅館 大浴場", "愛媛県伊予市灘町110", null, "https://travel.rakuten.co.jp/HOTEL/178605/gallery.html", null, null),
  sight("iyo-onsen-04", "いよプリンスホテル 天然温泉", "愛媛県伊予市灘町16‐1", null, "https://travel.rakuten.co.jp/HOTEL/179258/gallery.html", null, null),
];
