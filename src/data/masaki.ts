/**
 * Masaki Town sourced facts. Do not invent population.
 * Hall / JIS from town HP + Wikipedia 松前町 (accessed 2026-09-10). JIS 38401. Fourteenth Ehime hub after 松山市・今治市・宇和島市・八幡浜市・新居浜市・西条市・大洲市・伊予市・四国中央市・西予市・東温市・上島町・久万高原町.
 * No frozen pack — photo-only tourism + Tabelog dining. Stay/onsen: honest 0 (no Rakuten listing with address ∈ 松前町; day-bath 元気人村 has no licensed facility bath still). Experience/shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / town).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MASAKI = {
  nameJa: '松前町',
  nameEn: 'Masaki',
  reading: 'まさきちょう',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'masaki',
  jis: '38401',
  jlis: '384011',
  sameAs: 'https://www.town.masaki.ehime.jp/',
  hall: {
    postalCode: '791-3192',
    addressJa: '愛媛県伊予郡松前町大字筒井631番地',
    addressEn: '631 Tsutsui, Masaki Town, Iyo District, Ehime 791-3192, Japan',
    phone: '089-985-2111'
  },
  sources: {
    home: 'https://www.town.masaki.ehime.jp/',
    hall: 'https://www.town.masaki.ehime.jp/',
    kanko: 'https://www.town.masaki.ehime.jp/kanko/',
    emifull: 'https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%9F%E3%83%95%E3%83%ABMASAKI',
    park: 'https://www.town.masaki.ehime.jp/',
    shioya: 'https://www.town.masaki.ehime.jp/',
    castle: 'https://ja.wikipedia.org/wiki/%E6%9D%BE%E5%89%8D%E5%9F%8E_(%E4%BC%8A%E4%BA%88%E5%9B%BD)',
    tabelogCity: 'https://tabelog.com/ehime/C38401/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const MASAKI_EXPECTED_ROW_COUNT = 4;
export const MASAKI_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: エミフルMASAKI. Hero title remains municipality name only. */

export const MASAKI_PLACE_PHOTO = wikiPhoto(
  "masaki-emifull.jpg",
  "https://commons.wikimedia.org/wiki/File:Emifull_MASAKI_20251207_(1).jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2025-12-07",
  "エミフルMASAKI", "Emifull MASAKI"
);

const TABELOG_38014030 = "https://tabelog.com/ehime/A3801/A380103/38014030/";
const TABELOG_38015028 = "https://tabelog.com/ehime/A3801/A380103/38015028/";
const TABELOG_38011980 = "https://tabelog.com/ehime/A3801/A380103/38011980/";
const TABELOG_38006131 = "https://tabelog.com/ehime/A3801/A380103/38006131/";
const TABELOG_38006836 = "https://tabelog.com/ehime/A3801/A380103/38006836/";
const TABELOG_38014174 = "https://tabelog.com/ehime/A3801/A380103/38014174/";
const TABELOG_38006262 = "https://tabelog.com/ehime/A3801/A380103/38006262/";
const TABELOG_38006662 = "https://tabelog.com/ehime/A3801/A380103/38006662/";
const TABELOG_38000442 = "https://tabelog.com/ehime/A3801/A380103/38000442/";
const TABELOG_38001358 = "https://tabelog.com/ehime/A3801/A380103/38001358/";
const TABELOG_38007983 = "https://tabelog.com/ehime/A3801/A380103/38007983/";
const TABELOG_38008561 = "https://tabelog.com/ehime/A3801/A380103/38008561/";
const TABELOG_38015126 = "https://tabelog.com/ehime/A3801/A380103/38015126/";
const TABELOG_38006314 = "https://tabelog.com/ehime/A3801/A380103/38006314/";
const TABELOG_38007581 = "https://tabelog.com/ehime/A3801/A380103/38007581/";
const TABELOG_38016943 = "https://tabelog.com/ehime/A3801/A380103/38016943/";

export const MASAKI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "エミフルMASAKI": MASAKI_PLACE_PHOTO,
  "松前公園": wikiPhoto(
  "masaki-park.jpg",
  "https://commons.wikimedia.org/wiki/File:Masaki_Park_20251205_(1).jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2025-12-05",
  "松前公園", "Masaki Park"
),
  "塩屋海岸": wikiPhoto(
  "masaki-shioya-beach.jpg",
  "https://commons.wikimedia.org/wiki/File:Shioya_Beach_20240619_(1).jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2024-06-19",
  "塩屋海岸", "Shioya Beach"
),
  "松前城跡": wikiPhoto(
  "masaki-castle-ruins.jpg",
  "https://commons.wikimedia.org/wiki/File:Masaki_Castle_Ruins_20240428_(1).jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "CT-May", "https://commons.wikimedia.org/wiki/User:CT-May", "2024-04-28",
  "松前城跡", "Masaki Castle Ruins"
),
  "Eggs 'n Things エミフルMASAKI店": sourcePhoto("masaki-38014030-dish.jpg", "Eggs 'n Things エミフルMASAKI店の料理写真", "Eggs 'n Things エミフルMASAKI店 food photo", TABELOG_38014030, '食べログ'),
  "淡路島バーガースタンド 松前店": sourcePhoto("masaki-38015028-dish.jpg", "淡路島バーガースタンド 松前店の料理写真", "淡路島バーガースタンド 松前店 food photo", TABELOG_38015028, '食べログ'),
  "boulangerie COUPE depuis2014": sourcePhoto("masaki-38011980-dish.jpg", "boulangerie COUPE depuis2014の料理写真", "boulangerie COUPE depuis2014 food photo", TABELOG_38011980, '食べログ'),
  "川崎屋": sourcePhoto("masaki-38006131-dish.jpg", "川崎屋の料理写真", "川崎屋 food photo", TABELOG_38006131, '食べログ'),
  "とんび家": sourcePhoto("masaki-38006836-dish.jpg", "とんび家の料理写真", "とんび家 food photo", TABELOG_38006836, '食べログ'),
  "シャトレーゼ 松前店": sourcePhoto("masaki-38014174-dish.jpg", "シャトレーゼ 松前店の料理写真", "シャトレーゼ 松前店 food photo", TABELOG_38014174, '食べログ'),
  "からあげのすたみな亭 松前本店": sourcePhoto("masaki-38006262-dish.jpg", "からあげのすたみな亭 松前本店の料理写真", "からあげのすたみな亭 松前本店 food photo", TABELOG_38006262, '食べログ'),
  "ザ・どん エミフルMASAKI店": sourcePhoto("masaki-38006662-dish.jpg", "ザ・どん エミフルMASAKI店の料理写真", "ザ・どん エミフルMASAKI店 food photo", TABELOG_38006662, '食べログ'),
  "のむら": sourcePhoto("masaki-38000442-dish.jpg", "のむらの料理写真", "のむら food photo", TABELOG_38000442, '食べログ'),
  "白川": sourcePhoto("masaki-38001358-dish.jpg", "白川の料理写真", "白川 food photo", TABELOG_38001358, '食べログ'),
  "ピザ・ロイヤルハット 松前店": sourcePhoto("masaki-38007983-dish.jpg", "ピザ・ロイヤルハット 松前店の料理写真", "ピザ・ロイヤルハット 松前店 food photo", TABELOG_38007983, '食べログ'),
  "ルピシア 松前店": sourcePhoto("masaki-38008561-dish.jpg", "ルピシア 松前店の料理写真", "ルピシア 松前店 food photo", TABELOG_38008561, '食べログ'),
  "えびすだこ": sourcePhoto("masaki-38015126-dish.jpg", "えびすだこの料理写真", "えびすだこ food photo", TABELOG_38015126, '食べログ'),
  "リンガーハット 伊予松前店": sourcePhoto("masaki-38006314-dish.jpg", "リンガーハット 伊予松前店の料理写真", "リンガーハット 伊予松前店 food photo", TABELOG_38006314, '食べログ'),
  "サーティワンアイスクリーム エミフルMASAKI店": sourcePhoto("masaki-38007581-dish.jpg", "サーティワンアイスクリーム エミフルMASAKI店の料理写真", "サーティワンアイスクリーム エミフルMASAKI店 food photo", TABELOG_38007581, '食べログ'),
  "びっくりドンキー 伊予松前店": sourcePhoto("masaki-38016943-dish.jpg", "びっくりドンキー 伊予松前店の料理写真", "びっくりドンキー 伊予松前店 food photo", TABELOG_38016943, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: MASAKI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: MASAKI.sources.accessed};
}

export const MASAKI_FACILITIES: readonly FacilityRow[] = [
  sight("masaki-sight-01", "エミフルMASAKI", "愛媛県伊予郡松前町筒井850", null, "https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%9F%E3%83%95%E3%83%ABMASAKI", 33.7892, 132.7125),
  sight("masaki-sight-02", "松前公園", "愛媛県伊予郡松前町筒井", null, "https://www.town.masaki.ehime.jp/", 33.7875, 132.7115),
  sight("masaki-sight-03", "塩屋海岸", "愛媛県伊予郡松前町北黒田", null, "https://www.town.masaki.ehime.jp/", 33.795, 132.695),
  sight("masaki-sight-04", "松前城跡", "愛媛県伊予郡松前町筒井", null, "https://ja.wikipedia.org/wiki/%E6%9D%BE%E5%89%8D%E5%9F%8E_(%E4%BC%8A%E4%BA%88%E5%9B%BD)", 33.7865, 132.708),
];
