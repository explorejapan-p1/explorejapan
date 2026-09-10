/**
 * Kihoku Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + ehime-municipalities (accessed 2026-09-10). JIS 38488. Nineteenth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市・上島町・久万高原町・松前町・砥部町・内子町・伊方町・松野町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KIHOKU = {
  nameJa: '鬼北町',
  nameEn: 'Kihoku',
  reading: 'きほくちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'kihoku',
  jis: '38488',
  jlis: '384887',
  sameAs: 'https://www.town.kihoku.ehime.jp/',
  hall: {
    postalCode: '798-1395',
    addressJa: '愛媛県北宇和郡鬼北町大字近永800番地1',
    addressEn: '800-1 Oaza Chikanaga, Kihoku Town, Kitauwa District, Ehime 798-1395, Japan',
    phone: '0895-45-1111'
  },
  sources: {
    home: 'https://www.town.kihoku.ehime.jp/',
    hall: 'https://www.town.kihoku.ehime.jp/soshiki/',
    kanko: 'https://www.town.kihoku.ehime.jp/site/kihokukanko/',
    stayList: 'https://www.town.kihoku.ehime.jp/site/kihokukanko/25601.html',
    narukawa: 'https://travel.rakuten.co.jp/HOTEL/141052/141052.html',
    chikanaga: 'https://www.wikidata.org/wiki/Q4388236',
    narukawaValley: 'https://www.wikidata.org/wiki/Q114605568',
    tabelogCity: 'https://tabelog.com/ehime/C38488/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const KIHOKU_EXPECTED_ROW_COUNT = 7;
export const KIHOKU_EXPECTED_GEO_COUNT = 2;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: 近永駅. Hero title remains municipality name only. */

export const KIHOKU_PLACE_PHOTO = wikiPhoto(
  "kihoku-chikanaga-station.jpg",
  "https://commons.wikimedia.org/wiki/File:Chikanaga_station_03.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "Navian", "https://commons.wikimedia.org/wiki/User:Navian", "2010-05",
  "近永駅", "Chikanaga Station"
);

const TABELOG_38014741 = "https://tabelog.com/ehime/A3804/A380403/38014741/";
const TABELOG_38003118 = "https://tabelog.com/ehime/A3804/A380403/38003118/";
const TABELOG_38012495 = "https://tabelog.com/ehime/A3804/A380403/38012495/";
const TABELOG_38006164 = "https://tabelog.com/ehime/A3804/A380403/38006164/";
const TABELOG_38009710 = "https://tabelog.com/ehime/A3804/A380403/38009710/";
const TABELOG_38012288 = "https://tabelog.com/ehime/A3804/A380403/38012288/";
const TABELOG_38007348 = "https://tabelog.com/ehime/A3804/A380403/38007348/";
const TABELOG_38005524 = "https://tabelog.com/ehime/A3804/A380403/38005524/";
const TABELOG_38012630 = "https://tabelog.com/ehime/A3804/A380403/38012630/";
const TABELOG_38013945 = "https://tabelog.com/ehime/A3804/A380403/38013945/";
const TABELOG_38017052 = "https://tabelog.com/ehime/A3804/A380403/38017052/";
const TABELOG_38012044 = "https://tabelog.com/ehime/A3804/A380403/38012044/";
const TABELOG_38015507 = "https://tabelog.com/ehime/A3804/A380403/38015507/";
const TABELOG_38006945 = "https://tabelog.com/ehime/A3804/A380403/38006945/";
const TABELOG_38012292 = "https://tabelog.com/ehime/A3804/A380403/38012292/";
const TABELOG_38011263 = "https://tabelog.com/ehime/A3804/A380403/38011263/";

export const KIHOKU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "武左衛門 パン工房": sourcePhoto("kihoku-38014741-dish.jpg", "武左衛門 パン工房の料理写真", "武左衛門 パン工房 food photo", TABELOG_38014741, '食べログ'),
  "ラング": sourcePhoto("kihoku-38003118-dish.jpg", "ラングの料理写真", "ラング food photo", TABELOG_38003118, '食べログ'),
  "みもざ": sourcePhoto("kihoku-38012495-dish.jpg", "みもざの料理写真", "みもざ food photo", TABELOG_38012495, '食べログ'),
  "オン＆オフ": sourcePhoto("kihoku-38006164-dish.jpg", "オン＆オフの料理写真", "オン＆オフ food photo", TABELOG_38006164, '食べログ'),
  "日吉夢産地": sourcePhoto("kihoku-38009710-dish.jpg", "日吉夢産地の料理写真", "日吉夢産地 food photo", TABELOG_38009710, '食べログ'),
  "やすらぎ": sourcePhoto("kihoku-38012288-dish.jpg", "やすらぎの料理写真", "やすらぎ food photo", TABELOG_38012288, '食べログ'),
  "パティスリー 縁": sourcePhoto("kihoku-38007348-dish.jpg", "パティスリー 縁の料理写真", "パティスリー 縁 food photo", TABELOG_38007348, '食べログ'),
  "レストラン森のまど": sourcePhoto("kihoku-38005524-dish.jpg", "レストラン森のまどの料理写真", "レストラン森のまど food photo", TABELOG_38005524, '食べログ'),
  "サムコッペ": sourcePhoto("kihoku-38012630-dish.jpg", "サムコッペの料理写真", "サムコッペ food photo", TABELOG_38012630, '食べログ'),
  "鬼北ダイニング フェザン フィレール": sourcePhoto("kihoku-38013945-dish.jpg", "鬼北ダイニング フェザン フィレールの料理写真", "鬼北ダイニング フェザン フィレール food photo", TABELOG_38013945, '食べログ'),
  "シャーベットハウス夢奏": sourcePhoto("kihoku-38017052-dish.jpg", "シャーベットハウス夢奏の料理写真", "シャーベットハウス夢奏 food photo", TABELOG_38017052, '食べログ'),
  "がんてつ": sourcePhoto("kihoku-38012044-dish.jpg", "がんてつの料理写真", "がんてつ food photo", TABELOG_38012044, '食べログ'),
  "Miroku": sourcePhoto("kihoku-38015507-dish.jpg", "Mirokuの料理写真", "Miroku food photo", TABELOG_38015507, '食べログ'),
  "彩り茶屋": sourcePhoto("kihoku-38006945-dish.jpg", "彩り茶屋の料理写真", "彩り茶屋 food photo", TABELOG_38006945, '食べログ'),
  "杉の家": sourcePhoto("kihoku-38012292-dish.jpg", "杉の家の料理写真", "杉の家 food photo", TABELOG_38012292, '食べログ'),
  "成川渓谷休養センター": sourcePhoto("kihoku-38011263-dish.jpg", "成川渓谷休養センターの料理写真", "成川渓谷休養センター food photo", TABELOG_38011263, '食べログ'),
  "近永駅": wikiPhoto(
  "kihoku-chikanaga-station.jpg",
  "https://commons.wikimedia.org/wiki/File:Chikanaga_station_03.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "Navian", "https://commons.wikimedia.org/wiki/User:Navian", "2010-05",
  "近永駅", "Chikanaga Station"
),
  "佛光寺": wikiPhoto(
  "kihoku-bukkoji.jpg",
  "https://commons.wikimedia.org/wiki/File:Bukko-ji_(Kihoku).jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Suikotei", "https://commons.wikimedia.org/wiki/User:Suikotei", "2019-08",
  "佛光寺", "Bukko-ji Temple"
),
  "鬼北町役場": wikiPhoto(
  "kihoku-town-office.jpg",
  "https://commons.wikimedia.org/wiki/File:Kihoku_town-office_Ehime.jpg",
  "CC BY-SA 3.0", "http://creativecommons.org/licenses/by-sa/3.0/",
  "Bakkai", "https://ja.wikipedia.org/wiki/User:Bakkai", "2008-12",
  "鬼北町役場", "Kihoku Town Hall"
),
  "鬼北町地域振興センター": wikiPhoto(
  "kihoku-regional-hall.jpg",
  "https://commons.wikimedia.org/wiki/File:Kihoku_Town_Regional_Promotion_Hall_ac_(1).jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Asturio Cantabrio", "https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio", "2020-12",
  "鬼北町地域振興センター", "Kihoku Regional Promotion Hall"
),
  "国道320号鬼北町川上": wikiPhoto(
  "kihoku-route320-kawakami.jpg",
  "https://commons.wikimedia.org/wiki/File:国道320鬼北町川上.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "osami", "https://commons.wikimedia.org/wiki/User:Osami", "2012-08",
  "国道320号鬼北町川上", "Route 320 Kawakami Kihoku"
),
  "国道320号鬼北町広見下大野": wikiPhoto(
  "kihoku-route320-hirami.jpg",
  "https://commons.wikimedia.org/wiki/File:国道320鬼北町広見下大野.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "osami", "https://commons.wikimedia.org/wiki/User:Osami", "2012-08",
  "国道320号鬼北町広見下大野", "Route 320 Hirami Shimono"
),
  "ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ）": sourcePhoto(
    "kihoku-stay-h141052.jpg",
    "ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ）の客室写真",
    "ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/141052/141052.html",
    '楽天トラベル'
  ),
  "ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ） 風呂": sourcePhoto(
    "kihoku-onsen-h141052.jpg",
    "ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ） 風呂の写真",
    "ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ） 風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/141052/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: KIHOKU.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: KIHOKU.sources.accessed};
}

export const KIHOKU_FACILITIES: readonly FacilityRow[] = [
  sight("kihoku-sight-01", "近永駅", "愛媛県北宇和郡鬼北町近永", null, "https://www.wikidata.org/wiki/Q4388236", 33.2555, 132.6758),
  sight("kihoku-sight-02", "佛光寺", "愛媛県北宇和郡鬼北町", null, "https://commons.wikimedia.org/wiki/File:Bukko-ji_(Kihoku).jpg", null, null),
  sight("kihoku-sight-03", "鬼北町役場", "愛媛県北宇和郡鬼北町大字近永800番地1", "0895-45-1111", "https://www.town.kihoku.ehime.jp/", 33.25577777777778, 132.68408333333332),
  sight("kihoku-sight-04", "鬼北町地域振興センター", "愛媛県北宇和郡鬼北町近永", null, "https://commons.wikimedia.org/wiki/File:Kihoku_Town_Regional_Promotion_Hall_ac_(1).jpg", null, null),
  sight("kihoku-sight-05", "国道320号鬼北町川上", "愛媛県北宇和郡鬼北町川上", null, "https://commons.wikimedia.org/wiki/File:国道320鬼北町川上.jpg", null, null),
  sight("kihoku-sight-06", "国道320号鬼北町広見下大野", "愛媛県北宇和郡鬼北町下大野", null, "https://commons.wikimedia.org/wiki/File:国道320鬼北町広見下大野.jpg", null, null),
  sight("kihoku-onsen-01", "ＮＡＴＵＲＥ　ＨＯＴＥＬ　ＮＡＲＵＫＡＷＡ（ネイチャーホテル・ナルカワ） 風呂", "愛媛県北宇和郡鬼北町奈良奈良奥山国有林", "0895-45-2639", "https://travel.rakuten.co.jp/HOTEL/141052/gallery.html", null, null),
];
