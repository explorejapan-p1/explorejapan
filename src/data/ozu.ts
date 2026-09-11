/**
 * Ozu City sourced facts. Do not invent population.
 * Hall / JIS from city HP + Wikipedia 大洲市 (accessed 2026-09-09). JIS 38207. Seventh Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const OZU = {
  nameJa: '大洲市',
  nameEn: 'Ozu',
  reading: 'おおずし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'ozu',
  jis: '38207',
  jlis: '382071',
  sameAs: 'https://www.city.ozu.ehime.jp/',
  hall: {
    postalCode: '795-8601',
    addressJa: '愛媛県大洲市大洲690番地の1',
    addressEn: '690-1 Ozu, Ozu City, Ehime 795-8601, Japan',
    phone: '0893-24-2111'
  },
  sources: {
    home: 'https://www.city.ozu.ehime.jp/',
    hall: 'https://www.city.ozu.ehime.jp/',
    kanko: 'https://www.city.ozu.ehime.jp/site/kanko/1223.html',
    garyu: 'https://www.garyusanso.jp/',
    tabelogCity: 'https://tabelog.com/ehime/C38207/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const OZU_EXPECTED_ROW_COUNT = 7;
export const OZU_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Ozu Castle. Hero title remains municipality name only. */

export const OZU_PLACE_PHOTO = wikiPhoto(
  "ozu-castle.jpg",
  "https://commons.wikimedia.org/wiki/File:Ozu_Castle,_enkei.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "Saigen Jiro", "https://commons.wikimedia.org/wiki/User:Saigen_Jiro", "2020-12-27",
  "大洲城", "Ozu Castle"
);

const TABELOG_38013794 = "https://tabelog.com/ehime/A3803/A380301/38013794/";
const TABELOG_38015890 = "https://tabelog.com/ehime/A3803/A380301/38015890/";
const TABELOG_38016321 = "https://tabelog.com/ehime/A3803/A380301/38016321/";
const TABELOG_38009979 = "https://tabelog.com/ehime/A3803/A380301/38009979/";
const TABELOG_38011908 = "https://tabelog.com/ehime/A3803/A380301/38011908/";
const TABELOG_38011408 = "https://tabelog.com/ehime/A3803/A380301/38011408/";
const TABELOG_38000862 = "https://tabelog.com/ehime/A3803/A380301/38000862/";
const TABELOG_38005682 = "https://tabelog.com/ehime/A3803/A380301/38005682/";
const TABELOG_38003495 = "https://tabelog.com/ehime/A3803/A380301/38003495/";
const TABELOG_38007511 = "https://tabelog.com/ehime/A3803/A380301/38007511/";
const TABELOG_38011887 = "https://tabelog.com/ehime/A3803/A380301/38011887/";
const TABELOG_38010709 = "https://tabelog.com/ehime/A3803/A380301/38010709/";
const TABELOG_38008504 = "https://tabelog.com/ehime/A3803/A380301/38008504/";
const TABELOG_38016065 = "https://tabelog.com/ehime/A3803/A380301/38016065/";
const TABELOG_38001526 = "https://tabelog.com/ehime/A3803/A380301/38001526/";
const TABELOG_38003561 = "https://tabelog.com/ehime/A3803/A380301/38003561/";

export const OZU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "大洲城": OZU_PLACE_PHOTO,
  "臥龍山荘": wikiPhoto(
    "ozu-garyu-sanso.jpg",
    "https://commons.wikimedia.org/wiki/File:臥龍山荘_-_garyuu_sanso_-_panoramio.jpg",
    "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
    "yano@mama.akari.ne.jp", "https://commons.wikimedia.org/wiki/File:臥龍山荘_-_garyuu_sanso_-_panoramio.jpg", "2013-05-03",
    "臥龍山荘", "Garyu Sanso"
  ),
  "伊予大洲駅": wikiPhoto(
    "ozu-iyo-ozu-station.jpg",
    "https://commons.wikimedia.org/wiki/File:IYO-OZU_Station_20110907.jpg",
    "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
    "Rsa", "https://commons.wikimedia.org/wiki/User:Rsa", "2011-09-07",
    "伊予大洲駅", "Iyo-Ozu Station"
  ),
  "長浜大橋": wikiPhoto(
    "ozu-nagahama-bridge.jpg",
    "https://commons.wikimedia.org/wiki/File:Nagahama_Drawbridge_in_Ōzu.jpg",
    "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
    "Amake", "https://commons.wikimedia.org/wiki/User:Amake", "2007-04",
    "長浜大橋", "Nagahama Drawbridge"
  ),
  "ルアン NIPPONIA HOTEL 大洲 城下町": sourcePhoto("ozu-38013794-dish.jpg", "ルアン NIPPONIA HOTEL 大洲 城下町の料理写真", "ルアン NIPPONIA HOTEL 大洲 城下町 food photo", TABELOG_38013794, '食べログ'),
  "隠れ家 恵姫": sourcePhoto("ozu-38015890-dish.jpg", "隠れ家 恵姫の料理写真", "隠れ家 恵姫 food photo", TABELOG_38015890, '食べログ'),
  "韓国焼肉花月": sourcePhoto("ozu-38016321-dish.jpg", "韓国焼肉花月の料理写真", "韓国焼肉花月 food photo", TABELOG_38016321, '食べログ'),
  "IKKYU": sourcePhoto("ozu-38009979-dish.jpg", "IKKYUの料理写真", "IKKYU food photo", TABELOG_38009979, '食べログ'),
  "分油屋": sourcePhoto("ozu-38011908-dish.jpg", "分油屋の料理写真", "分油屋 food photo", TABELOG_38011908, '食べログ'),
  "すき家 56号大洲松ヶ花店": sourcePhoto("ozu-38011408-dish.jpg", "すき家 56号大洲松ヶ花店の料理写真", "すき家 56号大洲松ヶ花店 food photo", TABELOG_38011408, '食べログ'),
  "郷土料理 旬": sourcePhoto("ozu-38000862-dish.jpg", "郷土料理 旬の料理写真", "郷土料理 旬 food photo", TABELOG_38000862, '食べログ'),
  "グリーンハウス": sourcePhoto("ozu-38005682-dish.jpg", "グリーンハウスの料理写真", "グリーンハウス food photo", TABELOG_38005682, '食べログ'),
  "なな": sourcePhoto("ozu-38003495-dish.jpg", "ななの料理写真", "なな food photo", TABELOG_38003495, '食べログ'),
  "モスバーガー 大洲店": sourcePhoto("ozu-38007511-dish.jpg", "モスバーガー 大洲店の料理写真", "モスバーガー 大洲店 food photo", TABELOG_38007511, '食べログ'),
  "cafeさんぽ": sourcePhoto("ozu-38011887-dish.jpg", "cafeさんぽの料理写真", "cafeさんぽ food photo", TABELOG_38011887, '食べログ'),
  "お好み焼き にし川": sourcePhoto("ozu-38010709-dish.jpg", "お好み焼き にし川の料理写真", "お好み焼き にし川 food photo", TABELOG_38010709, '食べログ'),
  "たるよ志": sourcePhoto("ozu-38008504-dish.jpg", "たるよ志の料理写真", "たるよ志 food photo", TABELOG_38008504, '食べログ'),
  "きつねや": sourcePhoto("ozu-38016065-dish.jpg", "きつねやの料理写真", "きつねや food photo", TABELOG_38016065, '食べログ'),
  "山栄堂": sourcePhoto("ozu-38001526-dish.jpg", "山栄堂の料理写真", "山栄堂 food photo", TABELOG_38001526, '食べログ'),
  "わか宮食堂": sourcePhoto("ozu-38003561-dish.jpg", "わか宮食堂の料理写真", "わか宮食堂 food photo", TABELOG_38003561, '食べログ'),
  "ホテル オータ": sourcePhoto(
    "ozu-stay-h19200.jpg",
    "ホテル オータの客室写真",
    "ホテル オータ room photo",
    "https://travel.rakuten.co.jp/HOTEL/19200/19200.html",
    '楽天トラベル'
  ),
  "鹿野川温泉 大洲市交流促進センター 鹿野川荘": sourcePhoto(
    "ozu-stay-h56672.jpg",
    "鹿野川温泉 大洲市交流促進センター 鹿野川荘の客室写真",
    "鹿野川温泉 大洲市交流促進センター 鹿野川荘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/56672/56672.html",
    '楽天トラベル'
  ),
  "オオズプラザホテル": sourcePhoto(
    "ozu-stay-h67302.jpg",
    "オオズプラザホテルの客室写真",
    "オオズプラザホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/67302/67302.html",
    '楽天トラベル'
  ),
  "料苑たる井": sourcePhoto(
    "ozu-stay-h129584.jpg",
    "料苑たる井の客室写真",
    "料苑たる井 room photo",
    "https://travel.rakuten.co.jp/HOTEL/129584/129584.html",
    '楽天トラベル'
  ),
  "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」": sourcePhoto(
    "ozu-stay-superhotel.jpg",
    "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」の客室写真",
    "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」 room photo",
    "https://travel.rakuten.co.jp/HOTEL/166558/166558.html",
    '楽天トラベル'
  ),
  "ＮＩＰＰＯＮＩＡ ＨＯＴＥＬ 大洲 城下町": sourcePhoto(
    "ozu-stay-h179179.jpg",
    "ＮＩＰＰＯＮＩＡ ＨＯＴＥＬ 大洲 城下町の客室写真",
    "ＮＩＰＰＯＮＩＡ ＨＯＴＥＬ 大洲 城下町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/179179/179179.html",
    '楽天トラベル'
  ),
  "まろや四季": sourcePhoto(
    "ozu-stay-h187626.jpg",
    "まろや四季の客室写真",
    "まろや四季 room photo",
    "https://travel.rakuten.co.jp/HOTEL/187626/187626.html",
    '楽天トラベル'
  ),
  "Ｃａｆｅ＆Ｈｏｔｅｌ Ｐａｌｅｔｔｅ ＳＴＡＹｓ": sourcePhoto(
    "ozu-stay-h196802.jpg",
    "Ｃａｆｅ＆Ｈｏｔｅｌ Ｐａｌｅｔｔｅ ＳＴＡＹｓの客室写真",
    "Ｃａｆｅ＆Ｈｏｔｅｌ Ｐａｌｅｔｔｅ ＳＴＡＹｓ room photo",
    "https://travel.rakuten.co.jp/HOTEL/196802/196802.html",
    '楽天トラベル'
  ),
  "鹿野川温泉 大洲市交流促進センター 鹿野川荘 大浴場": sourcePhoto(
    "ozu-onsen-h56672.jpg",
    "鹿野川温泉 大洲市交流促進センター 鹿野川荘 大浴場の写真",
    "鹿野川温泉 大洲市交流促進センター 鹿野川荘 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/56672/gallery.html",
    '楽天トラベル'
  ),
  "松楽旅館 大浴場": sourcePhoto(
    "ozu-onsen-ryokan.jpg",
    "松楽旅館 大浴場の写真",
    "松楽旅館 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/145082/gallery.html",
    '楽天トラベル'
  ),
  "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」 天然温泉": sourcePhoto(
    "ozu-onsen-superhotel.jpg",
    "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」 天然温泉の写真",
    "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」 天然温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/166558/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: OZU.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: OZU.sources.accessed};
}

export const OZU_FACILITIES: readonly FacilityRow[] = [

  sight("ozu-sight-01", "大洲城", "愛媛県大洲市大洲903番地", "0893-24-1146", "https://www.city.ozu.ehime.jp/site/kanko/1223.html", 33.51, 132.54),
  sight("ozu-sight-02", "臥龍山荘", "愛媛県大洲市大洲411-2", null, "https://www.garyusanso.jp/", 33.50630555555556, 132.55008333333333),
  sight("ozu-sight-03", "伊予大洲駅", "愛媛県大洲市中村119", null, "https://ja.wikipedia.org/wiki/%E4%BC%8A%E4%BA%88%E5%A4%A7%E6%B4%B2%E9%A7%85", 33.5185, 132.54485555555556),
  sight("ozu-sight-04", "長浜大橋", "愛媛県大洲市長浜", null, "https://ja.wikipedia.org/wiki/%E9%95%B7%E6%B5%9C%E5%A4%A7%E6%A9%8B", 33.61, 132.47977777777777),
  sight("ozu-onsen-01", "鹿野川温泉 大洲市交流促進センター 鹿野川荘 大浴場", "愛媛県大洲市肱川町宇和川588-1", null, "https://travel.rakuten.co.jp/HOTEL/56672/gallery.html", null, null),
  sight("ozu-onsen-02", "松楽旅館 大浴場", "愛媛県大洲市大洲727-2", null, "https://travel.rakuten.co.jp/HOTEL/145082/gallery.html", null, null),
  sight("ozu-onsen-03", "スーパーホテル愛媛・大洲インター 天然温泉「朝霧の湯」 天然温泉", "愛媛県大洲市東大洲1487", null, "https://travel.rakuten.co.jp/HOTEL/166558/gallery.html", null, null),
];
