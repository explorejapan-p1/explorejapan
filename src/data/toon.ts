/**
 * Toon City sourced facts. Do not invent population.
 * Hall / JIS from city HP + Wikipedia 東温市 (accessed 2026-09-09). JIS 38215. Eleventh Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TOON = {
  nameJa: '東温市',
  nameEn: 'Toon',
  reading: 'とうおんし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'toon',
  jis: '38215',
  jlis: '382151',
  sameAs: 'https://www.city.toon.ehime.jp/',
  hall: {
    postalCode: '791-0292',
    addressJa: '愛媛県東温市見奈良530番地1',
    addressEn: '530-1 Minara, Toon City, Ehime 791-0292, Japan',
    phone: '089-964-2001'
  },
  sources: {
    home: 'https://www.city.toon.ehime.jp/',
    hall: 'https://www.city.toon.ehime.jp/',
    kanko: 'https://www.city.toon.ehime.jp/soshiki/13/index.html',
    shirai: 'https://ja.wikipedia.org/wiki/%E7%99%BD%E7%8C%AA%E3%81%AE%E6%BF%B1',
    namekawa: 'https://ja.wikipedia.org/wiki/%E6%BB%91%E5%B7%9D%E6%B8%93%E8%B0%B7',
    botchan: 'https://ja.wikipedia.org/wiki/%E5%9D%8A%E3%81%A3%E3%81%A1%E3%82%83%E3%82%93%E5%8A%87%E5%A0%B4',
    takabatake: 'https://ja.wikipedia.org/wiki/%E9%AB%98%E7%95%A0%E8%8F%AF%E8%82%85%E5%A4%A7%E6%AD%A3%E3%83%AD%E3%83%9E%E3%83%B3%E9%A4%A8',
    tabelogCity: 'https://tabelog.com/ehime/C38215/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const TOON_EXPECTED_ROW_COUNT = 5;
export const TOON_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: 白猪の滝. Hero title remains municipality name only. */

export const TOON_PLACE_PHOTO = wikiPhoto(
  "toon-shirai-falls.jpg",
  "https://commons.wikimedia.org/wiki/File:Sirainotaki_20221109_1.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Dokudami", "https://commons.wikimedia.org/wiki/User:Dokudami", "2022-11-09",
  "\u767d\u732a\u306e\u6edd", "Shirai Falls"
);

const TABELOG_38013217 = "https://tabelog.com/ehime/A3801/A380102/38013217/";
const TABELOG_38011349 = "https://tabelog.com/ehime/A3801/A380102/38011349/";
const TABELOG_38011126 = "https://tabelog.com/ehime/A3801/A380102/38011126/";
const TABELOG_38012007 = "https://tabelog.com/ehime/A3801/A380102/38012007/";
const TABELOG_38005828 = "https://tabelog.com/ehime/A3801/A380102/38005828/";
const TABELOG_38009377 = "https://tabelog.com/ehime/A3801/A380102/38009377/";
const TABELOG_38014040 = "https://tabelog.com/ehime/A3801/A380102/38014040/";
const TABELOG_38014613 = "https://tabelog.com/ehime/A3801/A380102/38014613/";
const TABELOG_38011292 = "https://tabelog.com/ehime/A3801/A380101/38011292/";
const TABELOG_38000692 = "https://tabelog.com/ehime/A3801/A380102/38000692/";
const TABELOG_38014602 = "https://tabelog.com/ehime/A3801/A380102/38014602/";
const TABELOG_38014948 = "https://tabelog.com/ehime/A3801/A380102/38014948/";
const TABELOG_38015805 = "https://tabelog.com/ehime/A3801/A380102/38015805/";
const TABELOG_38016838 = "https://tabelog.com/ehime/A3801/A380102/38016838/";
const TABELOG_38007062 = "https://tabelog.com/ehime/A3801/A380102/38007062/";
const TABELOG_38008739 = "https://tabelog.com/ehime/A3801/A380102/38008739/";

export const TOON_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "白猪の滝": TOON_PLACE_PHOTO,
  "滑川渓谷": wikiPhoto(
  "toon-namekawa.jpg",
  "https://commons.wikimedia.org/wiki/File:Namekawa20220717_7.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Dokudami", "https://commons.wikimedia.org/wiki/User:Dokudami", "2022-07-17",
  "\u6ed1\u5ddd\u6e13\u8c37", "Namekawa Gorge"
),
  "坊っちゃん劇場": wikiPhoto(
  "toon-botchan-gekijo.jpg",
  "https://commons.wikimedia.org/wiki/File:Botchan_gekijo.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "As6022014", "https://commons.wikimedia.org/wiki/File:Botchan_gekijo.jpg", "2010-06-08",
  "\u574a\u3063\u3061\u3083\u3093\u5287\u5834", "Botchan Theater"
),
  "高畠華宵大正ロマン館": wikiPhoto(
  "toon-takabatake-roman.jpg",
  "https://commons.wikimedia.org/wiki/File:Takabatake_Taisho_roman.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "As6022014", "https://commons.wikimedia.org/wiki/File:Takabatake_Taisho_roman.jpg", "2010-06-08",
  "\u9ad8\u7560\u83ef\u5bb5\u5927\u6b63\u30ed\u30de\u30f3\u9928", "Takabatake Kasho Taisho Roman Museum"
),
  "\u30da\u30eb \u30e1\u30eb": sourcePhoto("toon-38013217-dish.jpg", "\u30da\u30eb \u30e1\u30eb\u306e\u6599\u7406\u5199\u771f", "\u30da\u30eb \u30e1\u30eb food photo", TABELOG_38013217, '食べログ'),
  "\u30de\u30cb\u30d5\u30a3\u30fc\u30af": sourcePhoto("toon-38011349-dish.jpg", "\u30de\u30cb\u30d5\u30a3\u30fc\u30af\u306e\u6599\u7406\u5199\u771f", "\u30de\u30cb\u30d5\u30a3\u30fc\u30af food photo", TABELOG_38011349, '食べログ'),
  "\u6bcd\u6075\u5922\u30b9\u30a4\u30fc\u30c4\u30d1\u30fc\u30af": sourcePhoto("toon-38011126-dish.jpg", "\u6bcd\u6075\u5922\u30b9\u30a4\u30fc\u30c4\u30d1\u30fc\u30af\u306e\u6599\u7406\u5199\u771f", "\u6bcd\u6075\u5922\u30b9\u30a4\u30fc\u30c4\u30d1\u30fc\u30af food photo", TABELOG_38011126, '食べログ'),
  "\u30d1\u30c6\u30a3\u30b9\u30ea\u30fc\u5fc3\u7d50": sourcePhoto("toon-38012007-dish.jpg", "\u30d1\u30c6\u30a3\u30b9\u30ea\u30fc\u5fc3\u7d50\u306e\u6599\u7406\u5199\u771f", "\u30d1\u30c6\u30a3\u30b9\u30ea\u30fc\u5fc3\u7d50 food photo", TABELOG_38012007, '食べログ'),
  "\u30b5\u30fc\u30c6\u30a3\u30ef\u30f3\u30a2\u30a4\u30b9\u30af\u30ea\u30fc\u30e0 \u91cd\u4fe1\u30d5\u30b8\u30b0\u30e9\u30f3\u5e97": sourcePhoto("toon-38005828-dish.jpg", "\u30b5\u30fc\u30c6\u30a3\u30ef\u30f3\u30a2\u30a4\u30b9\u30af\u30ea\u30fc\u30e0 \u91cd\u4fe1\u30d5\u30b8\u30b0\u30e9\u30f3\u5e97\u306e\u6599\u7406\u5199\u771f", "\u30b5\u30fc\u30c6\u30a3\u30ef\u30f3\u30a2\u30a4\u30b9\u30af\u30ea\u30fc\u30e0 \u91cd\u4fe1\u30d5\u30b8\u30b0\u30e9\u30f3\u5e97 food photo", TABELOG_38005828, '食べログ'),
  "\u8fb2\u7523\u7269\u76f4\u58f2\u6240\u3055\u304f\u3089\u5e02\u5834": sourcePhoto("toon-38009377-dish.jpg", "\u8fb2\u7523\u7269\u76f4\u58f2\u6240\u3055\u304f\u3089\u5e02\u5834\u306e\u6599\u7406\u5199\u771f", "\u8fb2\u7523\u7269\u76f4\u58f2\u6240\u3055\u304f\u3089\u5e02\u5834 food photo", TABELOG_38009377, '食べログ'),
  "\u5510\u63da\u3052\u98df\u5802 \u3054\u3044\u3061 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97": sourcePhoto("toon-38014040-dish.jpg", "\u5510\u63da\u3052\u98df\u5802 \u3054\u3044\u3061 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97\u306e\u6599\u7406\u5199\u771f", "\u5510\u63da\u3052\u98df\u5802 \u3054\u3044\u3061 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97 food photo", TABELOG_38014040, '食べログ'),
  "\u30d3\u30a2\u30fc\u30c9\u30d1\u30d1 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97": sourcePhoto("toon-38014613-dish.jpg", "\u30d3\u30a2\u30fc\u30c9\u30d1\u30d1 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97\u306e\u6599\u7406\u5199\u771f", "\u30d3\u30a2\u30fc\u30c9\u30d1\u30d1 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97 food photo", TABELOG_38014613, '食べログ'),
  "\u30d5\u30a1\u30df\u30ea\u30fc\u30de\u30fc\u30c8 \u5168\u8fb2\u3075\u308c\u3063\u3057\u3085\u5e83\u5834\u5e97": sourcePhoto("toon-38011292-dish.jpg", "\u30d5\u30a1\u30df\u30ea\u30fc\u30de\u30fc\u30c8 \u5168\u8fb2\u3075\u308c\u3063\u3057\u3085\u5e83\u5834\u5e97\u306e\u6599\u7406\u5199\u771f", "\u30d5\u30a1\u30df\u30ea\u30fc\u30de\u30fc\u30c8 \u5168\u8fb2\u3075\u308c\u3063\u3057\u3085\u5e83\u5834\u5e97 food photo", TABELOG_38011292, '食べログ'),
  "\u7bc9\u5730\u9280\u3060\u3053 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97": sourcePhoto("toon-38000692-dish.jpg", "\u7bc9\u5730\u9280\u3060\u3053 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97\u306e\u6599\u7406\u5199\u771f", "\u7bc9\u5730\u9280\u3060\u3053 \u30d5\u30b8\u30b0\u30e9\u30f3\u91cd\u4fe1\u5e97 food photo", TABELOG_38000692, '食べログ'),
  "\u82e5\u7af9": sourcePhoto("toon-38014602-dish.jpg", "\u82e5\u7af9\u306e\u6599\u7406\u5199\u771f", "\u82e5\u7af9 food photo", TABELOG_38014602, '食べログ'),
  "\u30bb\u30eb\u30d5\u8b83\u5c90\u3046\u3069\u3093 \u3053\u3060\u308f\u308a\u88fd\u9eba": sourcePhoto("toon-38014948-dish.jpg", "\u30bb\u30eb\u30d5\u8b83\u5c90\u3046\u3069\u3093 \u3053\u3060\u308f\u308a\u88fd\u9eba\u306e\u6599\u7406\u5199\u771f", "\u30bb\u30eb\u30d5\u8b83\u5c90\u3046\u3069\u3093 \u3053\u3060\u308f\u308a\u88fd\u9eba food photo", TABELOG_38014948, '食べログ'),
  "\u30e1\u30ed\u30a6(MELLOW)": sourcePhoto("toon-38015805-dish.jpg", "\u30e1\u30ed\u30a6(MELLOW)\u306e\u6599\u7406\u5199\u771f", "\u30e1\u30ed\u30a6(MELLOW) food photo", TABELOG_38015805, '食べログ'),
  "\u30d6\u30fc\u30e9\u30f3\u30b8\u30a7\u30ea\u30fc \u30e1\u30be\u30f3 \u8fbb": sourcePhoto("toon-38016838-dish.jpg", "\u30d6\u30fc\u30e9\u30f3\u30b8\u30a7\u30ea\u30fc \u30e1\u30be\u30f3 \u8fbb\u306e\u6599\u7406\u5199\u771f", "\u30d6\u30fc\u30e9\u30f3\u30b8\u30a7\u30ea\u30fc \u30e1\u30be\u30f3 \u8fbb food photo", TABELOG_38016838, '食べログ'),
  "\u30b8\u30e7\u30a4\u30d5\u30eb \u611b\u5a9b\u6771\u6e29\u5e97": sourcePhoto("toon-38007062-dish.jpg", "\u30b8\u30e7\u30a4\u30d5\u30eb \u611b\u5a9b\u6771\u6e29\u5e97\u306e\u6599\u7406\u5199\u771f", "\u30b8\u30e7\u30a4\u30d5\u30eb \u611b\u5a9b\u6771\u6e29\u5e97 food photo", TABELOG_38007062, '食べログ'),
  "\u4e00\u516d\u672c\u8217 \u91cd\u4fe1\u5e97": sourcePhoto("toon-38008739-dish.jpg", "\u4e00\u516d\u672c\u8217 \u91cd\u4fe1\u5e97\u306e\u6599\u7406\u5199\u771f", "\u4e00\u516d\u672c\u8217 \u91cd\u4fe1\u5e97 food photo", TABELOG_38008739, '食べログ'),
  "\u304f\u3064\u308d\u304e\u306e\u5bbf \u6a39\u697d\uff08\u65e7\uff1a\u898b\u5948\u826f\u5929\u7136\u6e29\u6cc9 \u5229\u697d\uff09": sourcePhoto(
    "toon-stay-h80553.jpg",
    "\u304f\u3064\u308d\u304e\u306e\u5bbf \u6a39\u697d\uff08\u65e7\uff1a\u898b\u5948\u826f\u5929\u7136\u6e29\u6cc9 \u5229\u697d\uff09\u306e\u5ba2\u5ba4\u5199\u771f",
    "\u304f\u3064\u308d\u304e\u306e\u5bbf \u6a39\u697d\uff08\u65e7\uff1a\u898b\u5948\u826f\u5929\u7136\u6e29\u6cc9 \u5229\u697d\uff09 room photo",
    "https://travel.rakuten.co.jp/HOTEL/80553/80553.html",
    '楽天トラベル'
  ),
  "\u30d5\u30ea\u30fc\u30c7\u30a4\u30ba\u30a4\u30f3\u6a2a\u6cb3\u539f": sourcePhoto(
    "toon-stay-h147767.jpg",
    "\u30d5\u30ea\u30fc\u30c7\u30a4\u30ba\u30a4\u30f3\u6a2a\u6cb3\u539f\u306e\u5ba2\u5ba4\u5199\u771f",
    "\u30d5\u30ea\u30fc\u30c7\u30a4\u30ba\u30a4\u30f3\u6a2a\u6cb3\u539f room photo",
    "https://travel.rakuten.co.jp/HOTEL/147767/147767.html",
    '楽天トラベル'
  ),
  "\u7027\u4e43\u5143 \u8fd1\u85e4\u5bb6": sourcePhoto(
    "toon-stay-h171868.jpg",
    "\u7027\u4e43\u5143 \u8fd1\u85e4\u5bb6\u306e\u5ba2\u5ba4\u5199\u771f",
    "\u7027\u4e43\u5143 \u8fd1\u85e4\u5bb6 room photo",
    "https://travel.rakuten.co.jp/HOTEL/171868/171868.html",
    '楽天トラベル'
  ),
  "\uff50\uff52\uff49\uff56\uff41\uff54\uff45 \uff59\uff4f\uff55\uff52 \uff52\uff45\uff53\uff4f\uff52\uff54 \uff29\uff34\uff34\uff25\uff2b\uff35\uff32\uff21\uff49 \u677e\u5c71": sourcePhoto(
    "toon-stay-h187888.jpg",
    "\uff50\uff52\uff49\uff56\uff41\uff54\uff45 \uff59\uff4f\uff55\uff52 \uff52\uff45\uff53\uff4f\uff52\uff54 \uff29\uff34\uff34\uff25\uff2b\uff35\uff32\uff21\uff49 \u677e\u5c71\u306e\u5ba2\u5ba4\u5199\u771f",
    "\uff50\uff52\uff49\uff56\uff41\uff54\uff45 \uff59\uff4f\uff55\uff52 \uff52\uff45\uff53\uff4f\uff52\uff54 \uff29\uff34\uff34\uff25\uff2b\uff35\uff32\uff21\uff49 \u677e\u5c71 room photo",
    "https://travel.rakuten.co.jp/HOTEL/187888/187888.html",
    '楽天トラベル'
  ),
  "\u30d5\u30ea\u30fc\u30c7\u30a4\u30ba\u30ea\u30be\u30fc\u30c8\u685c\u4e09\u91cc": sourcePhoto(
    "toon-stay-h193164.jpg",
    "\u30d5\u30ea\u30fc\u30c7\u30a4\u30ba\u30ea\u30be\u30fc\u30c8\u685c\u4e09\u91cc\u306e\u5ba2\u5ba4\u5199\u771f",
    "\u30d5\u30ea\u30fc\u30c7\u30a4\u30ba\u30ea\u30be\u30fc\u30c8\u685c\u4e09\u91cc room photo",
    "https://travel.rakuten.co.jp/HOTEL/193164/193164.html",
    '楽天トラベル'
  ),
  "\u8fd1\u85e4\u5bb6\u5225\u90b8 \uff27\uff4c\uff41\uff4d\uff50\uff49\uff4e\uff47 \uff2b\uff21\uff33\uff35\uff2d\uff29 \u82b1\u6f84": sourcePhoto(
    "toon-stay-h197411.jpg",
    "\u8fd1\u85e4\u5bb6\u5225\u90b8 \uff27\uff4c\uff41\uff4d\uff50\uff49\uff4e\uff47 \uff2b\uff21\uff33\uff35\uff2d\uff29 \u82b1\u6f84\u306e\u5ba2\u5ba4\u5199\u771f",
    "\u8fd1\u85e4\u5bb6\u5225\u90b8 \uff27\uff4c\uff41\uff4d\uff50\uff49\uff4e\uff47 \uff2b\uff21\uff33\uff35\uff2d\uff29 \u82b1\u6f84 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197411/197411.html",
    '楽天トラベル'
  ),
  "\u304f\u3064\u308d\u304e\u306e\u5bbf \u6a39\u697d\uff08\u65e7\uff1a\u898b\u5948\u826f\u5929\u7136\u6e29\u6cc9 \u5229\u697d\uff09 \u9732\u5929\u98a8\u5442": sourcePhoto(
    "toon-onsen-h80553.jpg",
    "\u304f\u3064\u308d\u304e\u306e\u5bbf \u6a39\u697d\uff08\u65e7\uff1a\u898b\u5948\u826f\u5929\u7136\u6e29\u6cc9 \u5229\u697d\uff09 \u9732\u5929\u98a8\u5442\u306e\u5199\u771f",
    "\u304f\u3064\u308d\u304e\u306e\u5bbf \u6a39\u697d\uff08\u65e7\uff1a\u898b\u5948\u826f\u5929\u7136\u6e29\u6cc9 \u5229\u697d\uff09 \u9732\u5929\u98a8\u5442 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/80553/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: TOON.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: TOON.sources.accessed};
}

export const TOON_FACILITIES: readonly FacilityRow[] = [
  sight("toon-sight-01", "\u767d\u732a\u306e\u6edd", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u6cb3\u4e4b\u5185", null, "https://ja.wikipedia.org/wiki/%E7%99%BD%E7%8C%AA%E3%81%AE%E6%BF%B1", 33.75941444, 132.96950333),
  sight("toon-sight-02", "\u6ed1\u5ddd\u6e13\u8c37", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u6d77\u4e0a", null, "https://ja.wikipedia.org/wiki/%E6%BB%91%E5%B7%9D%E6%B8%93%E8%B0%B7", 33.7729225, 133.00509611),
  sight("toon-sight-03", "\u574a\u3063\u3061\u3083\u3093\u5287\u5834", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u898b\u5948\u826f1125", null, "https://ja.wikipedia.org/wiki/%E5%9D%8A%E3%81%A3%E3%81%A1%E3%82%83%E3%82%93%E5%8A%87%E5%A0%B4", 33.78980556, 132.88002778),
  sight("toon-sight-04", "\u9ad8\u7560\u83ef\u5bb5\u5927\u6b63\u30ed\u30de\u30f3\u9928", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u4e0b\u6797\u4e19654-1", null, "https://ja.wikipedia.org/wiki/%E9%AB%98%E7%95%A0%E8%8F%AF%E8%82%85%E5%A4%A7%E6%AD%A3%E3%83%AD%E3%83%9E%E3%83%B3%E9%A4%A8", 33.76902778, 132.88547222),
  sight("toon-onsen-01", "\u304f\u3064\u308d\u304e\u306e\u5bbf \u6a39\u697d\uff08\u65e7\uff1a\u898b\u5948\u826f\u5929\u7136\u6e29\u6cc9 \u5229\u697d\uff09 \u9732\u5929\u98a8\u5442", "\u611b\u5a9b\u770c\u6771\u6e29\u5e02\u898b\u5948\u826f1110", null, "https://travel.rakuten.co.jp/HOTEL/80553/gallery.html", null, null),
];
