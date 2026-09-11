/**
 * Sera / 世羅町 (Hiroshima, Sera District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-11). JIS 34462. Twenty-second Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市・府中町・海田町・熊野町・坂町・安芸太田町・北広島町・大崎上島町.
 * CRITICAL: Hiroshima 世羅町 only (世羅郡). Address gate: 広島県世羅郡世羅町 only.
 * Stay: Rakuten 部屋 still×1. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Dining Tabelog×16. Experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SERA = {
  nameJa: '世羅町',
  nameEn: 'Sera',
  reading: 'せらちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'sera',
  jis: '34462',
  jlis: '344621',
  sameAs: 'https://www.town.sera.hiroshima.jp/',
  hall: {
    postalCode: '722-1192',
    addressJa: '広島県世羅郡世羅町西上原123-1',
    addressEn: '123-1 Nishiuehara, Sera Town, Sera District, Hiroshima 722-1192, Japan',
    phone: '0847-22-1111'
  },
  sources: {
    home: 'https://www.town.sera.hiroshima.jp/',
    hall: 'https://www.town.sera.hiroshima.jp/',
    kanko: 'https://seranan.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34462/rstLst/',
    accessed: '2026-09-11'
  }
} as const;

export const SERA_EXPECTED_ROW_COUNT = 7;
export const SERA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-11', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-11', altJa, altEn};
}
/** Cover: Sera Town Office. Hero title remains municipality name only. Unique (no wakimachi). */
export const SERA_PLACE_PHOTO = wikiPhoto(
  "sera-cover-townhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3ASera_Town_Office.JPG",
  "Copyrighted free use", "https://commons.wikimedia.org/wiki/File%3ASera_Town_Office.JPG",
  "Iikunitukutta", "https://commons.wikimedia.org/wiki/File%3ASera_Town_Office.JPG", "2010",
  "世羅町役場", "Sera Town Office"
);

export const SERA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "焼肉えぇじゃん 世羅店": sourcePhoto("sera-34022132-dish.jpg", "焼肉えぇじゃん 世羅店の料理写真", "Yakiniku Eejan Sera food photo", "https://tabelog.com/hiroshima/A3405/A340504/34022132/", '食べログ'),
  "料理屋 日日": sourcePhoto("sera-34031496-dish.jpg", "料理屋 日日の料理写真", "Ryoriya Hibi food photo", "https://tabelog.com/hiroshima/A3405/A340504/34031496/", '食べログ'),
  "三波羅": sourcePhoto("sera-34016800-dish.jpg", "三波羅の料理写真", "Sanbara food photo", "https://tabelog.com/hiroshima/A3405/A340504/34016800/", '食べログ'),
  "おへそカフェ アンド ベーカリー": sourcePhoto("sera-34014898-dish.jpg", "おへそカフェ アンド ベーカリーの料理写真", "Oheso Cafe and Bakery food photo", "https://tabelog.com/hiroshima/A3405/A340504/34014898/", '食べログ'),
  "マルシェ": sourcePhoto("sera-34017002-dish.jpg", "マルシェの料理写真", "Marche food photo", "https://tabelog.com/hiroshima/A3405/A340504/34017002/", '食べログ'),
  "ファミリーレストラン タイニー": sourcePhoto("sera-34001689-dish.jpg", "ファミリーレストラン タイニーの料理写真", "Family Restaurant Tiny food photo", "https://tabelog.com/hiroshima/A3405/A340504/34001689/", '食べログ'),
  "農場レストラン": sourcePhoto("sera-34019374-dish.jpg", "農場レストランの料理写真", "Farm Restaurant food photo", "https://tabelog.com/hiroshima/A3405/A340504/34019374/", '食べログ'),
  "手打ちそばコウのトリ": sourcePhoto("sera-34032703-dish.jpg", "手打ちそばコウのトリの料理写真", "Teuchi Soba Kounotori food photo", "https://tabelog.com/hiroshima/A3405/A340504/34032703/", '食べログ'),
  "CAFE 悠悠緩緩": sourcePhoto("sera-34024050-dish.jpg", "CAFE 悠悠緩緩の料理写真", "CAFE Yuyukankan food photo", "https://tabelog.com/hiroshima/A3405/A340504/34024050/", '食べログ'),
  "喜久鮨": sourcePhoto("sera-34012994-dish.jpg", "喜久鮨の料理写真", "Kiku Sushi food photo", "https://tabelog.com/hiroshima/A3405/A340504/34012994/", '食べログ'),
  "pakan": sourcePhoto("sera-34033440-dish.jpg", "pakanの料理写真", "pakan food photo", "https://tabelog.com/hiroshima/A3405/A340504/34033440/", '食べログ'),
  "日向草": sourcePhoto("sera-34025587-dish.jpg", "日向草の料理写真", "Hinata-gusa food photo", "https://tabelog.com/hiroshima/A3405/A340504/34025587/", '食べログ'),
  "洋風居酒屋　三番": sourcePhoto("sera-34011481-dish.jpg", "洋風居酒屋　三番の料理写真", "Yofu Izakaya Sanban food photo", "https://tabelog.com/hiroshima/A3405/A340504/34011481/", '食べログ'),
  "キッチン風見鶏": sourcePhoto("sera-34018580-dish.jpg", "キッチン風見鶏の料理写真", "Kitchen Kazamidori food photo", "https://tabelog.com/hiroshima/A3405/A340504/34018580/", '食べログ'),
  "仲田屋": sourcePhoto("sera-34019863-dish.jpg", "仲田屋の料理写真", "Nakata-ya food photo", "https://tabelog.com/hiroshima/A3405/A340504/34019863/", '食べログ'),
  "車力": sourcePhoto("sera-34017076-dish.jpg", "車力の料理写真", "Shariki food photo", "https://tabelog.com/hiroshima/A3405/A340504/34017076/", '食べログ'),
  "すずらんホテル木原": sourcePhoto("sera-stay-suzuran.jpg", "すずらんホテル木原の客室写真", "Suzuran Hotel Kihara room photo", "https://travel.rakuten.co.jp/HOTEL/19106/19106.html", '楽天トラベル'),
  "大衆演劇せら温泉 大浴場": sourcePhoto("sera-onsen-seraonsen.jpg", "大衆演劇せら温泉 大浴場の写真", "Taishu Engeki Sera Onsen bath photo", "https://www.seraonsen.com/floor/", '大衆演劇せら温泉公式'),
  "せら香遊ランド 大浴場": sourcePhoto("sera-onsen-kouyu.jpg", "せら香遊ランド 大浴場の写真", "Sera Kouyu Land bath photo", "https://onsen.nifty.com/miyoshi-onsen/onsen003771/", 'ニフティ温泉'),
  "せらワイナリー": wikiPhoto(
  "sera-winery.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E3%81%9B%E3%82%89%E3%83%AF%E3%82%A4%E3%83%8A%E3%83%AA%E3%83%BC_Sera_Winery_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E3%81%9B%E3%82%89%E3%83%AF%E3%82%A4%E3%83%8A%E3%83%AA%E3%83%BC_Sera_Winery_-_panoramio.jpg", "2007",
  "せらワイナリー", "Sera Winery"
),
  "世羅高原農場": wikiPhoto(
  "sera-farm.jpg",
  "https://commons.wikimedia.org/wiki/File%3ASera_Kogen_Farm_%E4%B8%96%E7%BE%85%E9%AB%98%E5%8E%9F%E8%BE%B2%E5%A0%B4_-_panoramio.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Yoshio Kohara", "https://commons.wikimedia.org/wiki/File%3ASera_Kogen_Farm_%E4%B8%96%E7%BE%85%E9%AB%98%E5%8E%9F%E8%BE%B2%E5%A0%B4_-_panoramio.jpg", "2014",
  "世羅高原農場", "Sera Kogen Farm"
),
  "道の駅世羅": wikiPhoto(
  "sera-michinoeki.jpg",
  "https://commons.wikimedia.org/wiki/File%3ARoadside_station_sera.JPG",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Jack serow", "https://commons.wikimedia.org/wiki/File%3ARoadside_station_sera.JPG", "2015",
  "道の駅世羅", "Roadside Station Sera"
),
  "古城山展望台": wikiPhoto(
  "sera-kojozan.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E5%8F%A4%E5%9F%8E%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E5%8F%A4%E5%9F%8E%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0_-_panoramio.jpg", "2008",
  "古城山展望台", "Mt. Kojozan Viewpoint"
),
  "花夢の里": wikiPhoto(
  "sera-hanayumenosato.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E8%8A%B1%E5%A4%A2%E3%81%AE%E9%87%8C_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "柳田亮", "https://commons.wikimedia.org/wiki/File%3A%E8%8A%B1%E5%A4%A2%E3%81%AE%E9%87%8C_-_panoramio.jpg", "2008",
  "花夢の里", "Hanayume-no-sato"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: SERA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons・世羅町観光協会・公式掲載情報', accessed: SERA.sources.accessed};
}

export const SERA_FACILITIES: readonly FacilityRow[] = [
  sight("sera-sight-01", "せらワイナリー", "広島県世羅郡世羅町黒渕518-1", null, "https://seranan.jp/fac/amuse/", 34.629783, 132.982764),
  sight("sera-sight-02", "世羅高原農場", "広島県世羅郡世羅町別迫1124-11", "0570-074-075", "https://seranan.jp/fac/seeing/", 34.6556674, 133.0432655),
  sight("sera-sight-03", "道の駅世羅", "広島県世羅郡世羅町川尻2402-1", "0847-22-4400", "https://seranan.jp/road-side-station/", 34.596, 133.083944),
  sight("sera-sight-04", "花夢の里", "広島県世羅郡世羅町上津田3-3", null, "https://seranan.jp/fac/seeing/", 34.640425, 132.920835),
  sight("sera-sight-05", "古城山展望台", "広島県世羅郡世羅町甲山", null, "https://commons.wikimedia.org/wiki/File:%E5%8F%A4%E5%9F%8E%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0_-_panoramio.jpg", 34.581708, 133.057394),
  sight("sera-onsen-01", "大衆演劇せら温泉 大浴場", "広島県世羅郡世羅町甲山134", "0847-22-4126", "https://www.seraonsen.com/floor/", null, null),
  sight("sera-onsen-02", "せら香遊ランド 大浴場", "広島県世羅郡世羅町京丸809-3", "0847-22-5280", "https://onsen.nifty.com/miyoshi-onsen/onsen003771/", null, null),
];
