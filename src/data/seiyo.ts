/**
 * Seiyo City sourced facts. Do not invent population.
 * Hall / JIS from city HP + Wikipedia 西予市 (accessed 2026-09-09). JIS 38214. Tenth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SEIYO = {
  nameJa: '西予市',
  nameEn: 'Seiyo',
  reading: 'せいよし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'seiyo',
  jis: '38214',
  jlis: '382141',
  sameAs: 'https://www.city.seiyo.ehime.jp/',
  hall: {
    postalCode: '797-8501',
    addressJa: '愛媛県西予市宇和町卯之町三丁目434番地1',
    addressEn: '3-434-1 Unomachi, Uwa-cho, Seiyo City, Ehime 797-8501, Japan',
    phone: '0894-62-1111'
  },
  sources: {
    home: 'https://www.city.seiyo.ehime.jp/',
    hall: 'https://www.city.seiyo.ehime.jp/',
    kanko: 'https://seiyojikan.jp/',
    kaimei: 'https://ja.wikipedia.org/wiki/%E9%96%8B%E6%98%8E%E5%AD%A6%E6%A0%A1',
    oonogahara: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E9%87%8E%E3%83%B6%E5%8E%9F',
    unomachi: 'https://ja.wikipedia.org/wiki/%E5%8D%AF%E4%B9%8B%E7%94%BA',
    tabelogCity: 'https://tabelog.com/ehime/C38214/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const SEIYO_EXPECTED_ROW_COUNT = 7;
export const SEIYO_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: 開明学校. Hero title remains municipality name only. */

export const SEIYO_PLACE_PHOTO = wikiPhoto(
  "seiyo-kaimei-gakko.jpg",
  "https://commons.wikimedia.org/wiki/File:Kaimei_Gakko_01.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Reggaeman", "https://commons.wikimedia.org/wiki/User:Reggaeman", "2010-11-27",
  "開明学校", "Kaimei School"
);

const TABELOG_38010810 = "https://tabelog.com/ehime/A3804/A380402/38010810/";
const TABELOG_38005804 = "https://tabelog.com/ehime/A3804/A380402/38005804/";
const TABELOG_38015661 = "https://tabelog.com/ehime/A3804/A380402/38015661/";
const TABELOG_38014136 = "https://tabelog.com/ehime/A3804/A380402/38014136/";
const TABELOG_38005971 = "https://tabelog.com/ehime/A3801/A380103/38005971/";
const TABELOG_38006035 = "https://tabelog.com/ehime/A3804/A380402/38006035/";
const TABELOG_38013951 = "https://tabelog.com/ehime/A3803/A380302/38013951/";
const TABELOG_38013806 = "https://tabelog.com/ehime/A3804/A380402/38013806/";
const TABELOG_38013465 = "https://tabelog.com/ehime/A3804/A380402/38013465/";
const TABELOG_38006072 = "https://tabelog.com/ehime/A3804/A380402/38006072/";
const TABELOG_38009079 = "https://tabelog.com/ehime/A3804/A380402/38009079/";
const TABELOG_38001187 = "https://tabelog.com/ehime/A3804/A380402/38001187/";
const TABELOG_38014603 = "https://tabelog.com/ehime/A3804/A380402/38014603/";
const TABELOG_38010777 = "https://tabelog.com/ehime/A3804/A380402/38010777/";
const TABELOG_38007926 = "https://tabelog.com/ehime/A3804/A380402/38007926/";
const TABELOG_38012312 = "https://tabelog.com/ehime/A3804/A380402/38012312/";

export const SEIYO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "開明学校": SEIYO_PLACE_PHOTO,
  "大野ヶ原": wikiPhoto(
    "seiyo-oonogahara.jpg",
    "https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E9%87%8E%E3%83%B6%E5%8E%9F.jpg",
    "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
    "Koda6029", "https://commons.wikimedia.org/wiki/User:Koda6029", "2021-05-03",
    "大野ヶ原", "Onogahara"
  ),
  "卯之町の町並み": wikiPhoto(
    "seiyo-unomachi-townscape.jpg",
    "https://commons.wikimedia.org/wiki/File:Town_of_Unomachi.jpg",
    "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
    "PekePON", "https://commons.wikimedia.org/wiki/User:PekePON", "2009-03-21",
    "卯之町の町並み", "Unomachi townscape"
  ),
  "卯之町駅": wikiPhoto(
    "seiyo-unomachi-station.jpg",
    "https://commons.wikimedia.org/wiki/File:Unomachi_Station_20110907.jpg",
    "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
    "Rsa", "https://commons.wikimedia.org/wiki/User:Rsa", "2011-09-07",
    "卯之町駅", "Unomachi Station"
  ),
  "DINING-KITCHEN 蔵": sourcePhoto("seiyo-38010810-dish.jpg", "DINING-KITCHEN 蔵の料理写真", "DINING-KITCHEN 蔵 food photo", TABELOG_38010810, '食べログ'),
  "森の魚": sourcePhoto("seiyo-38005804-dish.jpg", "森の魚の料理写真", "森の魚 food photo", TABELOG_38005804, '食べログ'),
  "とんかつ丸七 愛媛店": sourcePhoto("seiyo-38015661-dish.jpg", "とんかつ丸七 愛媛店の料理写真", "とんかつ丸七 愛媛店 food photo", TABELOG_38015661, '食べログ'),
  "Bar Ento": sourcePhoto("seiyo-38014136-dish.jpg", "Bar Entoの料理写真", "Bar Ento food photo", TABELOG_38014136, '食べログ'),
  "大黒屋": sourcePhoto("seiyo-38005971-dish.jpg", "大黒屋の料理写真", "大黒屋 food photo", TABELOG_38005971, '食べログ'),
  "わらぐろ": sourcePhoto("seiyo-38006035-dish.jpg", "わらぐろの料理写真", "わらぐろ food photo", TABELOG_38006035, '食べログ'),
  "庭先cafe そら": sourcePhoto("seiyo-38013951-dish.jpg", "庭先cafe そらの料理写真", "庭先cafe そら food photo", TABELOG_38013951, '食べログ'),
  "あい笑": sourcePhoto("seiyo-38013806-dish.jpg", "あい笑の料理写真", "あい笑 food photo", TABELOG_38013806, '食べログ'),
  "あけはま～れ": sourcePhoto("seiyo-38013465-dish.jpg", "あけはま～れの料理写真", "あけはま～れ food photo", TABELOG_38013465, '食べログ'),
  "ハーモニーきらら": sourcePhoto("seiyo-38006072-dish.jpg", "ハーモニーきららの料理写真", "ハーモニーきらら food photo", TABELOG_38006072, '食べログ'),
  "土居家 蔵": sourcePhoto("seiyo-38009079-dish.jpg", "土居家 蔵の料理写真", "土居家 蔵 food photo", TABELOG_38009079, '食べログ'),
  "ほわいとファーム": sourcePhoto("seiyo-38001187-dish.jpg", "ほわいとファームの料理写真", "ほわいとファーム food photo", TABELOG_38001187, '食べログ'),
  "はな菓子店": sourcePhoto("seiyo-38014603-dish.jpg", "はな菓子店の料理写真", "はな菓子店 food photo", TABELOG_38014603, '食べログ'),
  "ゆうぼく民": sourcePhoto("seiyo-38010777-dish.jpg", "ゆうぼく民の料理写真", "ゆうぼく民 food photo", TABELOG_38010777, '食べログ'),
  "ふるさと創生館": sourcePhoto("seiyo-38007926-dish.jpg", "ふるさと創生館の料理写真", "ふるさと創生館 food photo", TABELOG_38007926, '食べログ'),
  "シャルール": sourcePhoto("seiyo-38012312-dish.jpg", "シャルールの料理写真", "シャルール food photo", TABELOG_38012312, '食べログ'),
  "宇和パークホテル＆宇和サウナ": sourcePhoto(
    "seiyo-stay-h17902.jpg",
    "宇和パークホテル＆宇和サウナの客室写真",
    "宇和パークホテル＆宇和サウナ room photo",
    "https://travel.rakuten.co.jp/HOTEL/17902/17902.html",
    '楽天トラベル'
  ),
  "ｓｅａｓｉｄｅ うわかい": sourcePhoto(
    "seiyo-stay-h30895.jpg",
    "ｓｅａｓｉｄｅ うわかいの客室写真",
    "ｓｅａｓｉｄｅ うわかい room photo",
    "https://travel.rakuten.co.jp/HOTEL/30895/30895.html",
    '楽天トラベル'
  ),
  "第１ビジネスホテル 松屋": sourcePhoto(
    "seiyo-stay-h141285.jpg",
    "第１ビジネスホテル 松屋の客室写真",
    "第１ビジネスホテル 松屋 room photo",
    "https://travel.rakuten.co.jp/HOTEL/141285/141285.html",
    '楽天トラベル'
  ),
  "みかめ本館": sourcePhoto(
    "seiyo-stay-h142924.jpg",
    "みかめ本館の客室写真",
    "みかめ本館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/142924/142924.html",
    '楽天トラベル'
  ),
  "おめぐり庵": sourcePhoto(
    "seiyo-stay-h166940.jpg",
    "おめぐり庵の客室写真",
    "おめぐり庵 room photo",
    "https://travel.rakuten.co.jp/HOTEL/166940/166940.html",
    '楽天トラベル'
  ),
  "ｅｎｔｏｈｏｕｓｅ ｂａｒ＆ｇｕｅｓｔｈｏｕｓｅ ＾": sourcePhoto(
    "seiyo-stay-h186043.jpg",
    "ｅｎｔｏｈｏｕｓｅ ｂａｒ＆ｇｕｅｓｔｈｏｕｓｅ ＾の客室写真",
    "ｅｎｔｏｈｏｕｓｅ ｂａｒ＆ｇｕｅｓｔｈｏｕｓｅ ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/186043/186043.html",
    '楽天トラベル'
  ),
  "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳ": sourcePhoto(
    "seiyo-stay-h188392.jpg",
    "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳの客室写真",
    "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳ room photo",
    "https://travel.rakuten.co.jp/HOTEL/188392/188392.html",
    '楽天トラベル'
  ),
  "宇和パークホテル＆宇和サウナ 松葉の湯": sourcePhoto(
    "seiyo-onsen-h17902.jpg",
    "宇和パークホテル＆宇和サウナ 松葉の湯の写真",
    "宇和パークホテル＆宇和サウナ 松葉の湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/17902/gallery.html",
    '楽天トラベル'
  ),
  "みかめ本館 大浴場": sourcePhoto(
    "seiyo-onsen-h142924.jpg",
    "みかめ本館 大浴場の写真",
    "みかめ本館 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/142924/gallery.html",
    '楽天トラベル'
  ),
  "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳ 温泉": sourcePhoto(
    "seiyo-onsen-h188392.jpg",
    "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳ 温泉の写真",
    "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳ 温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/188392/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: SEIYO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: SEIYO.sources.accessed};
}

export const SEIYO_FACILITIES: readonly FacilityRow[] = [

  sight("seiyo-sight-01", "開明学校", "愛媛県西予市宇和町卯之町3丁目109", null, "https://ja.wikipedia.org/wiki/%E9%96%8B%E6%98%8E%E5%AD%A6%E6%A0%A1", 33.36425, 132.51361111),
  sight("seiyo-sight-02", "大野ヶ原", "愛媛県西予市野村町大野ヶ原", null, "https://ja.wikipedia.org/wiki/%E5%A4%A7%E9%87%8E%E3%83%B6%E5%8E%9F", 33.48042222, 132.87093333),
  sight("seiyo-sight-03", "卯之町の町並み", "愛媛県西予市宇和町卯之町", null, "https://ja.wikipedia.org/wiki/%E5%8D%AF%E4%B9%8B%E7%94%BA", 33.363889, 132.513167),
  sight("seiyo-sight-04", "卯之町駅", "愛媛県西予市宇和町卯之町", null, "https://ja.wikipedia.org/wiki/%E5%8D%AF%E4%B9%8B%E7%94%BA%E9%A7%85", 33.363175, 132.50993889),
  sight("seiyo-onsen-01", "宇和パークホテル＆宇和サウナ 松葉の湯", "愛媛県西予市宇和町上松葉330-1", null, "https://travel.rakuten.co.jp/HOTEL/17902/gallery.html", null, null),
  sight("seiyo-onsen-02", "みかめ本館 大浴場", "愛媛県西予市三瓶町朝立1番耕地548-2", null, "https://travel.rakuten.co.jp/HOTEL/142924/gallery.html", null, null),
  sight("seiyo-onsen-03", "ａｔｅｌｉｅｒ Ｏ－ＨＵＩＳ 温泉", "愛媛県西予市宇和町伊延東1040", null, "https://travel.rakuten.co.jp/HOTEL/188392/gallery.html", null, null),
];
