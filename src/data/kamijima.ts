/**
 * Kamijima Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + Wikipedia 上島町 (accessed 2026-09-09). JIS 38356. Twelfth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KAMIJIMA = {
  nameJa: '上島町',
  nameEn: 'Kamijima',
  reading: 'かみじまちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'kamijima',
  jis: '38356',
  jlis: '383562',
  sameAs: 'https://www.town.kamijima.lg.jp/',
  hall: {
    postalCode: '794-2592',
    addressJa: '愛媛県越智郡上島町弓削下弓削210番地',
    addressEn: '210 Shimoyuge, Yuge, Kamijima Town, Ochi District, Ehime 794-2592, Japan',
    phone: '0897-77-2500'
  },
  sources: {
    home: 'https://www.town.kamijima.lg.jp/',
    hall: 'https://www.town.kamijima.lg.jp/',
    kanko: 'https://kamijima.info/',
    sekizen: 'https://ja.wikipedia.org/wiki/%E7%A9%8D%E5%96%84%E5%B1%B1',
    iwagiBridge: 'https://ja.wikipedia.org/wiki/%E5%B2%A9%E5%9F%8E%E6%A9%8B',
    yugeBridge: 'https://ja.wikipedia.org/wiki/%E5%BC%93%E5%89%8A%E5%A4%A7%E6%A9%8B',
    tabelogCity: 'https://tabelog.com/ehime/C38356/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const KAMIJIMA_EXPECTED_ROW_COUNT = 5;
export const KAMIJIMA_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: 積善山展望台. Hero title remains municipality name only. */

export const KAMIJIMA_PLACE_PHOTO = wikiPhoto(
  "kamijima-sekizen-observatory.jpg",
  "https://commons.wikimedia.org/wiki/File:\u7a4d\u5584\u5c71\u5c55\u671b\u53f0.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "\u4e0a\u5cf6\u753a \u89b3\u5149\u5199\u771f\u63d0\u4f9b\u30b5\u30fc\u30d3\u30b9", "https://commons.wikimedia.org/wiki/File:\u7a4d\u5584\u5c71\u5c55\u671b\u53f0.jpg", "2015-04-13",
  "\u7a4d\u5584\u5c71\u5c55\u671b\u53f0", "Sekizen Observatory"
);

const TABELOG_38005246 = "https://tabelog.com/ehime/A3802/A380205/38005246/";
const TABELOG_38015838 = "https://tabelog.com/ehime/A3802/A380205/38015838/";
const TABELOG_38012223 = "https://tabelog.com/ehime/A3802/A380205/38012223/";
const TABELOG_38014354 = "https://tabelog.com/ehime/A3802/A380201/38014354/";
const TABELOG_38015823 = "https://tabelog.com/ehime/A3802/A380205/38015823/";
const TABELOG_38014250 = "https://tabelog.com/ehime/A3802/A380201/38014250/";
const TABELOG_38007015 = "https://tabelog.com/ehime/A3802/A380201/38007015/";
const TABELOG_38007370 = "https://tabelog.com/ehime/A3802/A380201/38007370/";
const TABELOG_38015058 = "https://tabelog.com/ehime/A3802/A380205/38015058/";
const TABELOG_38008514 = "https://tabelog.com/ehime/A3802/A380201/38008514/";
const TABELOG_38011093 = "https://tabelog.com/ehime/A3802/A380205/38011093/";
const TABELOG_38001621 = "https://tabelog.com/ehime/A3802/A380205/38001621/";
const TABELOG_38017325 = "https://tabelog.com/ehime/A3802/A380201/38017325/";
const TABELOG_38008339 = "https://tabelog.com/ehime/A3802/A380205/38008339/";
const TABELOG_38007451 = "https://tabelog.com/ehime/A3802/A380201/38007451/";
const TABELOG_38014803 = "https://tabelog.com/ehime/A3802/A380205/38014803/";

export const KAMIJIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "積善山展望台": KAMIJIMA_PLACE_PHOTO,
  "岩城橋": wikiPhoto(
  "kamijima-iwagi-bridge.jpg",
  "https://commons.wikimedia.org/wiki/File:Iwagi_bridge.under_shot.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "\u30d6\u30eb\u30fc\u30ce\u30fb\u30d7\u30e9\u30b9", "https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AB%E3%83%BC%E3%83%8E%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B9&amp;action=edit&amp;redlink=1", "2022-05",
  "\u5ca9\u57ce\u6a4b", "Iwagi Bridge"
),
  "弓削大橋": wikiPhoto(
  "kamijima-yuge-bridge.jpg",
  "https://commons.wikimedia.org/wiki/File:Yuge_Bridge.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "RitikaPahwa4444", "https://commons.wikimedia.org/wiki/User:RitikaPahwa4444", "23 April 2",
  "\u5f13\u524a\u5927\u6a4b", "Yuge Bridge"
),
  "ゆめしま海道（積善山より）": wikiPhoto(
  "kamijima-yumeshima-kaido.jpg",
  "https://commons.wikimedia.org/wiki/File:\u5ca9\u57ce\u30fb\u7a4d\u5584\u5c71\u304b\u3089\u898b\u308b\u3086\u3081\u3057\u307e\u6d77\u9053.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "\u4e0a\u5cf6\u753a \u89b3\u5149\u5199\u771f\u63d0\u4f9b\u30b5\u30fc\u30d3\u30b9", "https://commons.wikimedia.org/wiki/File:\u5ca9\u57ce\u30fb\u7a4d\u5584\u5c71\u304b\u3089\u898b\u308b\u3086\u3081\u3057\u307e\u6d77\u9053.jpg", "2015-04-13",
  "\u3086\u3081\u3057\u307e\u6d77\u9053\uff08\u7a4d\u5584\u5c71\u3088\u308a\uff09", "Yumeshima Kaido from Mt. Sekizen"
),
  "ととや": sourcePhoto("kamijima-38005246-dish.jpg", "ととやの料理写真", "ととや food photo", TABELOG_38005246, '食べログ'),
  "ニューヤマザキデイリーストア 弓削店": sourcePhoto("kamijima-38015838-dish.jpg", "ニューヤマザキデイリーストア 弓削店の料理写真", "ニューヤマザキデイリーストア 弓削店 food photo", TABELOG_38015838, '食べログ'),
  "おかえりなさい": sourcePhoto("kamijima-38012223-dish.jpg", "おかえりなさいの料理写真", "おかえりなさい food photo", TABELOG_38012223, '食べログ'),
  "わらしべ。 岩城島BASE": sourcePhoto("kamijima-38014354-dish.jpg", "わらしべ。 岩城島BASEの料理写真", "わらしべ。 岩城島BASE food photo", TABELOG_38014354, '食べログ'),
  "Aコープ 弓削店": sourcePhoto("kamijima-38015823-dish.jpg", "Aコープ 弓削店の料理写真", "Aコープ 弓削店 food photo", TABELOG_38015823, '食べログ'),
  "たい屋": sourcePhoto("kamijima-38014250-dish.jpg", "たい屋の料理写真", "たい屋 food photo", TABELOG_38014250, '食べログ'),
  "いわぎ物産センター": sourcePhoto("kamijima-38007015-dish.jpg", "いわぎ物産センターの料理写真", "いわぎ物産センター food photo", TABELOG_38007015, '食べログ'),
  "民宿　よし正": sourcePhoto("kamijima-38007370-dish.jpg", "民宿　よし正の料理写真", "民宿　よし正 food photo", TABELOG_38007370, '食べログ'),
  "いっ福": sourcePhoto("kamijima-38015058-dish.jpg", "いっ福の料理写真", "いっ福 food photo", TABELOG_38015058, '食べログ'),
  "中浦鮮魚店": sourcePhoto("kamijima-38008514-dish.jpg", "中浦鮮魚店の料理写真", "中浦鮮魚店 food photo", TABELOG_38008514, '食べログ'),
  "キッチン 313 カミユゲ": sourcePhoto("kamijima-38011093-dish.jpg", "キッチン 313 カミユゲの料理写真", "キッチン 313 カミユゲ food photo", TABELOG_38011093, '食べログ'),
  "しまでcafe": sourcePhoto("kamijima-38001621-dish.jpg", "しまでcafeの料理写真", "しまでcafe food photo", TABELOG_38001621, '食べログ'),
  "ゆめしま珈琲焙煎所 侘数奇": sourcePhoto("kamijima-38017325-dish.jpg", "ゆめしま珈琲焙煎所 侘数奇の料理写真", "ゆめしま珈琲焙煎所 侘数奇 food photo", TABELOG_38017325, '食べログ'),
  "ミスティー亀井": sourcePhoto("kamijima-38008339-dish.jpg", "ミスティー亀井の料理写真", "ミスティー亀井 food photo", TABELOG_38008339, '食べログ'),
  "タムラ食品": sourcePhoto("kamijima-38007451-dish.jpg", "タムラ食品の料理写真", "タムラ食品 food photo", TABELOG_38007451, '食べログ'),
  "vida con miel": sourcePhoto("kamijima-38014803-dish.jpg", "vida con mielの料理写真", "vida con miel food photo", TABELOG_38014803, '食べログ'),
  "インランド・シー・リゾート フェスパ": sourcePhoto(
    "kamijima-stay-h30026.jpg",
    "インランド・シー・リゾート フェスパの客室写真",
    "インランド・シー・リゾート フェスパ room photo",
    "https://travel.rakuten.co.jp/HOTEL/30026/30026.html",
    '楽天トラベル'
  ),
  "インランド・シー・リゾート フェスパ 満天の湯": sourcePhoto(
    "kamijima-onsen-h30026.jpg",
    "インランド・シー・リゾート フェスパ 満天の湯の写真",
    "インランド・シー・リゾート フェスパ 満天の湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/30026/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: KAMIJIMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: KAMIJIMA.sources.accessed};
}

export const KAMIJIMA_FACILITIES: readonly FacilityRow[] = [
  sight("kamijima-sight-01", "積善山展望台", "愛媛県越智郡上島町岩城", null, "https://ja.wikipedia.org/wiki/%E7%A9%8D%E5%96%84%E5%B1%B1", 34.2705, 133.1508),
  sight("kamijima-sight-02", "岩城橋", "愛媛県越智郡上島町", null, "https://ja.wikipedia.org/wiki/%E5%B2%A9%E5%9F%8E%E6%A9%8B", 34.261667, 133.168417),
  sight("kamijima-sight-03", "弓削大橋", "愛媛県越智郡上島町", null, "https://ja.wikipedia.org/wiki/%E5%BC%93%E5%89%8A%E5%A4%A7%E6%A9%8B", 34.2535, 133.2045),
  sight("kamijima-sight-04", "ゆめしま海道（積善山より）", "愛媛県越智郡上島町岩城", null, "https://commons.wikimedia.org/wiki/File:%E5%B2%A9%E5%9F%8E%E3%83%BB%E7%A9%8D%E5%96%84%E5%B1%B1%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%E3%82%86%E3%82%81%E3%81%97%E3%81%BE%E6%B5%B7%E9%81%93.jpg", 34.2705, 133.1508),
  sight("kamijima-onsen-01", "インランド・シー・リゾート フェスパ 満天の湯", "愛媛県越智郡上島町弓削日比287", null, "https://travel.rakuten.co.jp/HOTEL/30026/gallery.html", null, null),
];
