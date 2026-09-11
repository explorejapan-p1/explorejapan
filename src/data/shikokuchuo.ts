/**
 * Shikokuchuo City sourced facts. Do not invent population.
 * Hall / JIS from city HP + Wikipedia 四国中央市 (accessed 2026-09-09). JIS 38213. Ninth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SHIKOKUCHUO = {
  nameJa: '四国中央市',
  nameEn: 'Shikokuchuo',
  reading: 'しこくちゅうおうし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'shikokuchuo',
  jis: '38213',
  jlis: '382132',
  sameAs: 'https://www.city.shikokuchuo.ehime.jp/',
  hall: {
    postalCode: '799-0497',
    addressJa: '愛媛県四国中央市三島宮川四丁目6番55号',
    addressEn: '4-6-55 Mishima-Miyagawa, Shikokuchuo City, Ehime 799-0497, Japan',
    phone: '0896-28-6000'
  },
  sources: {
    home: 'https://www.city.shikokuchuo.ehime.jp/',
    hall: 'https://www.city.shikokuchuo.ehime.jp/',
    kanko: 'http://www.shikochu-kankou.jp/',
    suiha: 'http://www.shikochu-kankou.jp/%e8%87%aa%e7%84%b6%e3%83%bb%e8%8a%b1%e3%83%bb%e5%85%ac%e5%9c%92/%e7%bf%a0%e6%b3%a2%e9%ab%98%e5%8e%9f-2/',
    kawanoeCastle: 'https://ja.wikipedia.org/wiki/%E5%B7%9D%E4%B9%8B%E6%B1%9F%E5%9F%8E',
    paperMuseum: 'https://commons.wikimedia.org/wiki/File:Shikokuchuo_city_Paper_museum_-_building.jpg',
    tabelogCity: 'https://tabelog.com/ehime/C38213/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const SHIKOKUCHUO_EXPECTED_ROW_COUNT = 7;
export const SHIKOKUCHUO_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: 翠波高原. Hero title remains municipality name only. */

export const SHIKOKUCHUO_PLACE_PHOTO = wikiPhoto(
  "shikokuchuo-suiha-kogen.jpg",
  "https://commons.wikimedia.org/wiki/File:Suiha10.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Dokudami", "https://commons.wikimedia.org/wiki/User:Dokudami", "2016-08-26",
  "翠波高原", "Suiha Highland"
);

const TABELOG_38006272 = "https://tabelog.com/ehime/A3802/A380204/38006272/";
const TABELOG_38006000 = "https://tabelog.com/ehime/A3802/A380204/38006000/";
const TABELOG_38010745 = "https://tabelog.com/ehime/A3802/A380204/38010745/";
const TABELOG_38008628 = "https://tabelog.com/ehime/A3802/A380204/38008628/";
const TABELOG_38016754 = "https://tabelog.com/ehime/A3802/A380204/38016754/";
const TABELOG_38010967 = "https://tabelog.com/ehime/A3802/A380204/38010967/";
const TABELOG_38010096 = "https://tabelog.com/ehime/A3802/A380204/38010096/";
const TABELOG_38016624 = "https://tabelog.com/ehime/A3802/A380204/38016624/";
const TABELOG_38013660 = "https://tabelog.com/ehime/A3802/A380204/38013660/";
const TABELOG_38016604 = "https://tabelog.com/ehime/A3802/A380204/38016604/";
const TABELOG_38016920 = "https://tabelog.com/ehime/A3802/A380204/38016920/";
const TABELOG_38006888 = "https://tabelog.com/ehime/A3802/A380204/38006888/";
const TABELOG_38002037 = "https://tabelog.com/ehime/A3802/A380204/38002037/";
const TABELOG_38004380 = "https://tabelog.com/ehime/A3802/A380204/38004380/";
const TABELOG_38013437 = "https://tabelog.com/ehime/A3802/A380204/38013437/";
const TABELOG_38002028 = "https://tabelog.com/ehime/A3802/A380204/38002028/";

export const SHIKOKUCHUO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "翠波高原": SHIKOKUCHUO_PLACE_PHOTO,
  "川之江城": wikiPhoto(
    "shikokuchuo-kawanoe-castle.jpg",
    "https://commons.wikimedia.org/wiki/File:%E5%9B%9B%E5%9B%BD%E4%B8%AD%E5%A4%AE%E5%B8%82_%E5%B7%9D%E4%B9%8B%E6%B1%9F%E5%9F%8E%E3%81%8B%E3%82%89_%2846130130545%29.jpg",
    "CC BY 2.0", "https://creativecommons.org/licenses/by/2.0",
    "Sketyl none", "https://commons.wikimedia.org/wiki/File:%E5%9B%9B%E5%9B%BD%E4%B8%AD%E5%A4%AE%E5%B8%82_%E5%B7%9D%E4%B9%8B%E6%B1%9F%E5%9F%8E%E3%81%8B%E3%82%89_%2846130130545%29.jpg", "2018-09-01",
    "川之江城からの眺望", "View from Kawanoe Castle"
  ),
  "紙のまち資料館": wikiPhoto(
    "shikokuchuo-paper-museum.jpg",
    "https://commons.wikimedia.org/wiki/File:Shikokuchuo_city_Paper_museum_-_building.jpg",
    "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
    "運動会プロテインパワー", "https://commons.wikimedia.org/wiki/User:%E9%81%8B%E5%8B%95%E4%BC%9A%E3%83%97%E3%83%AD%E3%83%86%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AF%E3%83%BC", "2023-07",
    "紙のまち資料館", "Paper Town Museum"
  ),
  "伊予土居駅": wikiPhoto(
    "shikokuchuo-iyodoi-station.jpg",
    "https://commons.wikimedia.org/wiki/File:Front_of_Iyodoi_Station_4888.JPG",
    "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
    "AUTUMNSNAKE", "https://commons.wikimedia.org/wiki/User:AUTUMNSNAKE", "2007-04-04",
    "伊予土居駅", "Iyodoi Station"
  ),
  "釜焼鳥本舗 川之江店": sourcePhoto("shikokuchuo-38006272-dish.jpg", "釜焼鳥本舗 川之江店の料理写真", "釜焼鳥本舗 川之江店 food photo", TABELOG_38006272, '食べログ'),
  "Restaurant&Cafe Riina": sourcePhoto("shikokuchuo-38006000-dish.jpg", "Restaurant&Cafe Riinaの料理写真", "Restaurant&Cafe Riina food photo", TABELOG_38006000, '食べログ'),
  "ピッツェリア　エイゴロ　伊予三島": sourcePhoto("shikokuchuo-38010745-dish.jpg", "ピッツェリア　エイゴロ　伊予三島の料理写真", "ピッツェリア　エイゴロ　伊予三島 food photo", TABELOG_38010745, '食べログ'),
  "寿司と居酒屋 魚民 伊予三島店": sourcePhoto("shikokuchuo-38008628-dish.jpg", "寿司と居酒屋 魚民 伊予三島店の料理写真", "寿司と居酒屋 魚民 伊予三島店 food photo", TABELOG_38008628, '食べログ'),
  "鶏焼肉 三六九": sourcePhoto("shikokuchuo-38016754-dish.jpg", "鶏焼肉 三六九の料理写真", "鶏焼肉 三六九 food photo", TABELOG_38016754, '食べログ'),
  "三島バル evoevo": sourcePhoto("shikokuchuo-38010967-dish.jpg", "三島バル evoevoの料理写真", "三島バル evoevo food photo", TABELOG_38010967, '食べログ'),
  "Riisa cafe": sourcePhoto("shikokuchuo-38010096-dish.jpg", "Riisa cafeの料理写真", "Riisa cafe food photo", TABELOG_38010096, '食べログ'),
  "たまちゃんち": sourcePhoto("shikokuchuo-38016624-dish.jpg", "たまちゃんちの料理写真", "たまちゃんち food photo", TABELOG_38016624, '食べログ'),
  "チャイニーズレストラン パンダ": sourcePhoto("shikokuchuo-38013660-dish.jpg", "チャイニーズレストラン パンダの料理写真", "チャイニーズレストラン パンダ food photo", TABELOG_38013660, '食べログ'),
  "ビジネスホテルマイルド": sourcePhoto("shikokuchuo-38016604-dish.jpg", "ビジネスホテルマイルドの料理写真", "ビジネスホテルマイルド food photo", TABELOG_38016604, '食べログ'),
  "GREEN TAIL CAFE": sourcePhoto("shikokuchuo-38016920-dish.jpg", "GREEN TAIL CAFEの料理写真", "GREEN TAIL CAFE food photo", TABELOG_38016920, '食べログ'),
  "cafe cherry blossom": sourcePhoto("shikokuchuo-38006888-dish.jpg", "cafe cherry blossomの料理写真", "cafe cherry blossom food photo", TABELOG_38006888, '食べログ'),
  "鳥栄": sourcePhoto("shikokuchuo-38002037-dish.jpg", "鳥栄の料理写真", "鳥栄 food photo", TABELOG_38002037, '食べログ'),
  "養老乃瀧 川之江店": sourcePhoto("shikokuchuo-38004380-dish.jpg", "養老乃瀧 川之江店の料理写真", "養老乃瀧 川之江店 food photo", TABELOG_38004380, '食べログ'),
  "ホテル セレクトイン四国中央": sourcePhoto("shikokuchuo-38013437-dish.jpg", "ホテル セレクトイン四国中央の料理写真", "ホテル セレクトイン四国中央 food photo", TABELOG_38013437, '食べログ'),
  "やき鳥一番鳥": sourcePhoto("shikokuchuo-38002028-dish.jpg", "やき鳥一番鳥の料理写真", "やき鳥一番鳥 food photo", TABELOG_38002028, '食べログ'),
  "川之江ビジネスホテル": sourcePhoto(
    "shikokuchuo-stay-h1536.jpg",
    "川之江ビジネスホテルの客室写真",
    "川之江ビジネスホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/1536/1536.html",
    '楽天トラベル'
  ),
  "プリンスホテル杉源": sourcePhoto(
    "shikokuchuo-stay-h13595.jpg",
    "プリンスホテル杉源の客室写真",
    "プリンスホテル杉源 room photo",
    "https://travel.rakuten.co.jp/HOTEL/13595/13595.html",
    '楽天トラベル'
  ),
  "ビジネスホテル マイルド": sourcePhoto(
    "shikokuchuo-stay-h107725.jpg",
    "ビジネスホテル マイルドの客室写真",
    "ビジネスホテル マイルド room photo",
    "https://travel.rakuten.co.jp/HOTEL/107725/107725.html",
    '楽天トラベル'
  ),
  "ホテル グランフォーレ": sourcePhoto(
    "shikokuchuo-stay-h111173.jpg",
    "ホテル グランフォーレの客室写真",
    "ホテル グランフォーレ room photo",
    "https://travel.rakuten.co.jp/HOTEL/111173/111173.html",
    '楽天トラベル'
  ),
  "霧の森コテージ": sourcePhoto(
    "shikokuchuo-stay-h135399.jpg",
    "霧の森コテージの客室写真",
    "霧の森コテージ room photo",
    "https://travel.rakuten.co.jp/HOTEL/135399/135399.html",
    '楽天トラベル'
  ),
  "天然温泉「東予の湯」スーパーホテル四国中央": sourcePhoto(
    "shikokuchuo-stay-superhotel.jpg",
    "天然温泉「東予の湯」スーパーホテル四国中央の客室写真",
    "天然温泉「東予の湯」スーパーホテル四国中央 room photo",
    "https://travel.rakuten.co.jp/HOTEL/137424/137424.html",
    '楽天トラベル'
  ),
  "ホテルリブマックスＢＵＤＧＥＴ伊予三島": sourcePhoto(
    "shikokuchuo-stay-h139959.jpg",
    "ホテルリブマックスＢＵＤＧＥＴ伊予三島の客室写真",
    "ホテルリブマックスＢＵＤＧＥＴ伊予三島 room photo",
    "https://travel.rakuten.co.jp/HOTEL/139959/139959.html",
    '楽天トラベル'
  ),
  "ホテルセレクトイン四国中央": sourcePhoto(
    "shikokuchuo-stay-h147159.jpg",
    "ホテルセレクトイン四国中央の客室写真",
    "ホテルセレクトイン四国中央 room photo",
    "https://travel.rakuten.co.jp/HOTEL/147159/147159.html",
    '楽天トラベル'
  ),
  "四国セントラルホテル": sourcePhoto(
    "shikokuchuo-stay-h176614.jpg",
    "四国セントラルホテルの客室写真",
    "四国セントラルホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/176614/176614.html",
    '楽天トラベル'
  ),
  "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐": sourcePhoto(
    "shikokuchuo-stay-routeinn.jpg",
    "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐の客室写真",
    "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐ room photo",
    "https://travel.rakuten.co.jp/HOTEL/184348/184348.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ Ｒ９ Ｔｈｅ Ｙａｒｄ 四国中央": sourcePhoto(
    "shikokuchuo-stay-h184703.jpg",
    "ＨＯＴＥＬ Ｒ９ Ｔｈｅ Ｙａｒｄ 四国中央の客室写真",
    "ＨＯＴＥＬ Ｒ９ Ｔｈｅ Ｙａｒｄ 四国中央 room photo",
    "https://travel.rakuten.co.jp/HOTEL/184703/184703.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ ＡＺ 愛媛土居インター店": sourcePhoto(
    "shikokuchuo-stay-h193142.jpg",
    "ＨＯＴＥＬ ＡＺ 愛媛土居インター店の客室写真",
    "ＨＯＴＥＬ ＡＺ 愛媛土居インター店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/193142/193142.html",
    '楽天トラベル'
  ),
  "シコチューベース ＾": sourcePhoto(
    "shikokuchuo-stay-h193963.jpg",
    "シコチューベース ＾の客室写真",
    "シコチューベース ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/193963/193963.html",
    '楽天トラベル'
  ),
  "霧の森コテージ 霧の森交湯": sourcePhoto(
    "shikokuchuo-onsen-h135399.jpg",
    "霧の森コテージ 霧の森交湯の写真",
    "霧の森コテージ 霧の森交湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/135399/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉「東予の湯」スーパーホテル四国中央 天然温泉": sourcePhoto(
    "shikokuchuo-onsen-superhotel.jpg",
    "天然温泉「東予の湯」スーパーホテル四国中央 天然温泉の写真",
    "天然温泉「東予の湯」スーパーホテル四国中央 天然温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/137424/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐ 天然温泉": sourcePhoto(
    "shikokuchuo-onsen-routeinn.jpg",
    "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐ 天然温泉の写真",
    "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐ 天然温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/184348/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: SHIKOKUCHUO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: SHIKOKUCHUO.sources.accessed};
}

export const SHIKOKUCHUO_FACILITIES: readonly FacilityRow[] = [
  sight("shikokuchuo-sight-01", "翠波高原", "愛媛県四国中央市金砂町平野山乙306-1", "0896-28-6169", "http://www.shikochu-kankou.jp/%e8%87%aa%e7%84%b6%e3%83%bb%e8%8a%b1%e3%83%bb%e5%85%ac%e5%9c%92/%e7%bf%a0%e6%b3%a2%e9%ab%98%e5%8e%9f-2/", 33.9403773, 133.5371381),
  sight("shikokuchuo-sight-02", "川之江城", "愛媛県四国中央市川之江町", null, "https://ja.wikipedia.org/wiki/%E5%B7%9D%E4%B9%8B%E6%B1%9F%E5%9F%8E", 34.013, 133.56755556),
  sight("shikokuchuo-sight-03", "紙のまち資料館", "愛媛県四国中央市川之江町", null, "https://commons.wikimedia.org/wiki/File:Shikokuchuo_city_Paper_museum_-_building.jpg", 34.0079743, 133.5734893),
  sight("shikokuchuo-sight-04", "伊予土居駅", "愛媛県四国中央市土居町土居", null, "https://ja.wikipedia.org/wiki/%E4%BC%8A%E4%BA%88%E5%9C%9F%E5%B1%85%E9%A7%85", 33.95904167, 133.42826667),
  sight("shikokuchuo-onsen-01", "霧の森コテージ 霧の森交湯", "愛媛県四国中央市新宮町馬立4491-1", null, "https://travel.rakuten.co.jp/HOTEL/135399/gallery.html", null, null),
  sight("shikokuchuo-onsen-02", "天然温泉「東予の湯」スーパーホテル四国中央 天然温泉", "愛媛県四国中央市下柏町852-1", null, "https://travel.rakuten.co.jp/HOTEL/137424/gallery.html", null, null),
  sight("shikokuchuo-onsen-03", "天然温泉「旅人の湯」ホテルルートイン四国中央‐三島川之江インター‐ 天然温泉", "愛媛県四国中央市妻鳥町1687-3", null, "https://travel.rakuten.co.jp/HOTEL/184348/gallery.html", null, null),
];
