/**
 * Tobe Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + Wikipedia 砥部町 (accessed 2026-09-10). JIS 38402. Fifteenth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市・上島町・久万高原町・松前町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TOBE = {
  nameJa: '砥部町',
  nameEn: 'Tobe',
  reading: 'とべちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'tobe',
  jis: '38402',
  jlis: '384021',
  sameAs: 'https://www.town.tobe.ehime.jp/',
  hall: {
    postalCode: '791-2195',
    addressJa: '愛媛県伊予郡砥部町宮内1392番地',
    addressEn: '1392 Miyauchi, Tobe Town, Iyo District, Ehime 791-2195, Japan',
    phone: '089-962-2323'
  },
  sources: {
    home: 'https://www.town.tobe.ehime.jp/',
    hall: 'https://www.town.tobe.ehime.jp/site_info/',
    kanko: 'https://www.town.tobe.ehime.jp/',
    pottery: 'https://ja.wikipedia.org/wiki/%E7%A0%A5%E9%83%A8%E7%84%BC',
    zoo: 'https://ja.wikipedia.org/wiki/%E3%81%A8%E3%81%B9%E5%8B%95%E7%89%A9%E5%9C%92',
    tabelogCity: 'https://tabelog.com/ehime/C38402/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const TOBE_EXPECTED_ROW_COUNT = 5;
export const TOBE_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: 砥部焼伝統産業会館. Hero title remains municipality name only. */

export const TOBE_PLACE_PHOTO = wikiPhoto(
  "tobe-traditional-hall.jpg",
  "https://commons.wikimedia.org/wiki/File:Tobe-yaki_Pottery_Traditional_Industry_Hall_20240530_(1).jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2024-05-30",
  "砥部焼伝統産業会館", "Tobe-yaki Traditional Industry Hall"
);

const TABELOG_38001163 = "https://tabelog.com/ehime/A3801/A380103/38001163/";
const TABELOG_38015709 = "https://tabelog.com/ehime/A3801/A380103/38015709/";
const TABELOG_38005830 = "https://tabelog.com/ehime/A3801/A380103/38005830/";
const TABELOG_38009356 = "https://tabelog.com/ehime/A3801/A380103/38009356/";
const TABELOG_38008527 = "https://tabelog.com/ehime/A3801/A380101/38008527/";
const TABELOG_38007277 = "https://tabelog.com/ehime/A3801/A380101/38007277/";
const TABELOG_38005648 = "https://tabelog.com/ehime/A3801/A380103/38005648/";
const TABELOG_38015748 = "https://tabelog.com/ehime/A3801/A380103/38015748/";
const TABELOG_38016729 = "https://tabelog.com/ehime/A3801/A380103/38016729/";
const TABELOG_38016675 = "https://tabelog.com/ehime/A3801/A380103/38016675/";
const TABELOG_38002834 = "https://tabelog.com/ehime/A3801/A380103/38002834/";
const TABELOG_38009123 = "https://tabelog.com/ehime/A3801/A380103/38009123/";
const TABELOG_38001638 = "https://tabelog.com/ehime/A3801/A380103/38001638/";
const TABELOG_38006297 = "https://tabelog.com/ehime/A3801/A380103/38006297/";
const TABELOG_38010028 = "https://tabelog.com/ehime/A3801/A380103/38010028/";
const TABELOG_38015927 = "https://tabelog.com/ehime/A3801/A380103/38015927/";

export const TOBE_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "砥部焼伝統産業会館": TOBE_PLACE_PHOTO,
  "砥部焼陶芸館": wikiPhoto(
  "tobe-togeikan.jpg",
  "https://commons.wikimedia.org/wiki/File:Tobe-yaki_Togeikan_20240530.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2024-05-30",
  "砥部焼陶芸館", "Tobe Pottery Museum"
),
  "とべ動物園": wikiPhoto(
  "tobe-zoo.jpg",
  "https://commons.wikimedia.org/wiki/File:Tobe_Zoological_Park_20251029.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2025-10-29",
  "とべ動物園", "Tobe Zoological Park"
),
  "砥部焼たいまつモニュメント": wikiPhoto(
  "tobe-torchlight.jpg",
  "https://commons.wikimedia.org/wiki/File:Tobe_Ware_Torchlight_Monument_20251123.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2025-11-23",
  "砥部焼たいまつモニュメント", "Tobe Ware Torchlight Monument"
),
  "こぶし食堂": sourcePhoto("tobe-38001163-dish.jpg", "こぶし食堂の料理写真", "こぶし食堂 food photo", TABELOG_38001163, '食べログ'),
  "炭火焼鳥 もりおか": sourcePhoto("tobe-38015709-dish.jpg", "炭火焼鳥 もりおかの料理写真", "炭火焼鳥 もりおか food photo", TABELOG_38015709, '食べログ'),
  "展望レストラン SKY GARDEN": sourcePhoto("tobe-38005830-dish.jpg", "展望レストラン SKY GARDENの料理写真", "展望レストラン SKY GARDEN food photo", TABELOG_38005830, '食べログ'),
  "山鳥青果": sourcePhoto("tobe-38009356-dish.jpg", "山鳥青果の料理写真", "山鳥青果 food photo", TABELOG_38009356, '食べログ'),
  "ピザ・ロイヤルハット とべ高尾田店": sourcePhoto("tobe-38008527-dish.jpg", "ピザ・ロイヤルハット とべ高尾田店の料理写真", "ピザ・ロイヤルハット とべ高尾田店 food photo", TABELOG_38008527, '食べログ'),
  "パスコ 砥部店": sourcePhoto("tobe-38007277-dish.jpg", "パスコ 砥部店の料理写真", "パスコ 砥部店 food photo", TABELOG_38007277, '食べログ'),
  "珈琲貴族": sourcePhoto("tobe-38005648-dish.jpg", "珈琲貴族の料理写真", "珈琲貴族 food photo", TABELOG_38005648, '食べログ'),
  "ズズキッチン": sourcePhoto("tobe-38015748-dish.jpg", "ズズキッチンの料理写真", "ズズキッチン food photo", TABELOG_38015748, '食べログ'),
  "串の焼鬼の呑み食い処": sourcePhoto("tobe-38016729-dish.jpg", "串の焼鬼の呑み食い処の料理写真", "串の焼鬼の呑み食い処 food photo", TABELOG_38016729, '食べログ'),
  "時地人 MATSUYAMA": sourcePhoto("tobe-38016675-dish.jpg", "時地人 MATSUYAMAの料理写真", "時地人 MATSUYAMA food photo", TABELOG_38016675, '食べログ'),
  "うどん茶屋 北斗 砥部店": sourcePhoto("tobe-38002834-dish.jpg", "うどん茶屋 北斗 砥部店の料理写真", "うどん茶屋 北斗 砥部店 food photo", TABELOG_38002834, '食べログ'),
  "ぎやてい": sourcePhoto("tobe-38009123-dish.jpg", "ぎやていの料理写真", "ぎやてい food photo", TABELOG_38009123, '食べログ'),
  "IPPO": sourcePhoto("tobe-38001638-dish.jpg", "IPPOの料理写真", "IPPO food photo", TABELOG_38001638, '食べログ'),
  "なかまる": sourcePhoto("tobe-38006297-dish.jpg", "なかまるの料理写真", "なかまる food photo", TABELOG_38006297, '食べログ'),
  "ピッツェリア トレンタノーヴェ": sourcePhoto("tobe-38010028-dish.jpg", "ピッツェリア トレンタノーヴェの料理写真", "ピッツェリア トレンタノーヴェ food photo", TABELOG_38010028, '食べログ'),
  "SANKAKU754": sourcePhoto("tobe-38015927-dish.jpg", "SANKAKU754の料理写真", "SANKAKU754 food photo", TABELOG_38015927, '食べログ'),
  "南道後温泉　ホテルていれぎ館": sourcePhoto(
    "tobe-stay-h130460.jpg",
    "南道後温泉　ホテルていれぎ館の客室写真",
    "南道後温泉　ホテルていれぎ館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/130460/130460.html",
    '楽天トラベル'
  ),
  "時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ（旧：ＴＯＢＥオーベルジュリゾート）": sourcePhoto(
    "tobe-stay-h188387.jpg",
    "時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ（旧：ＴＯＢＥオーベルジュリゾート）の客室写真",
    "時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ（旧：ＴＯＢＥオーベルジュリゾート） room photo",
    "https://travel.rakuten.co.jp/HOTEL/188387/188387.html",
    '楽天トラベル'
  ),
  "時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ 風呂": sourcePhoto(
    "tobe-onsen-h188387.jpg",
    "時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ 風呂の写真",
    "時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/188387/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: TOBE.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: TOBE.sources.accessed};
}

export const TOBE_FACILITIES: readonly FacilityRow[] = [

  sight("tobe-sight-01", "砥部焼伝統産業会館", "愛媛県伊予郡砥部町宮内1392", null, "https://ja.wikipedia.org/wiki/%E7%A0%A5%E9%83%A8%E7%84%BC", 33.7585, 132.7923),
  sight("tobe-sight-02", "砥部焼陶芸館", "愛媛県伊予郡砥部町宮内83番地", null, "https://www.togeikan.com/", 33.7558, 132.7945),
  sight("tobe-sight-03", "とべ動物園", "愛媛県伊予郡砥部町上原町240", null, "https://ja.wikipedia.org/wiki/%E3%81%A8%E3%81%B9%E5%8B%95%E7%89%A9%E5%9C%92", 33.7492, 132.8015),
  sight("tobe-sight-04", "砥部焼たいまつモニュメント", "愛媛県伊予郡砥部町宮内", null, "https://www.town.tobe.ehime.jp/", 33.758, 132.7928),
  sight("tobe-onsen-01", "時地人－　ＪＩＪＩＪＩＮ　Ｍａｔｓｕｙａｍａ 風呂", "愛媛県伊予郡砥部町宮内1622-7", "089-960-7501", "https://travel.rakuten.co.jp/HOTEL/188387/gallery.html", null, null),
];
