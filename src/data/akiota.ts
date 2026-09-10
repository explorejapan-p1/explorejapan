/**
 * Akiota / 安芸太田町 (Hiroshima, Yamagata District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-10). JIS 34368. Nineteenth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市・府中町・海田町・熊野町・坂町.
 * CRITICAL: Hiroshima 安芸太田町 only (NOT 安芸高田市 / akitakata). Address gate: 広島県山県郡安芸太田町 / 広島県安芸太田町 only.
 * Stay: Rakuten 部屋 still×1. Onsen: facility bath still×2 (stay≠onsen EXTRA name). Dining Tabelog×16. Experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const AKIOTA = {
  nameJa: '安芸太田町',
  nameEn: 'Akiota',
  reading: 'あきおおたちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'akiota',
  jis: '34368',
  jlis: '343684',
  sameAs: 'https://www.akiota.jp/',
  hall: {
    postalCode: '731-3810',
    addressJa: '広島県山県郡安芸太田町大字戸河内784番地1',
    addressEn: '784-1 Togouchi, Akiota Town, Yamagata District, Hiroshima 731-3810, Japan',
    phone: '0826-28-2111'
  },
  sources: {
    home: 'https://www.akiota.jp/',
    hall: 'https://www.akiota.jp/',
    kanko: 'https://cs-akiota.or.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34368/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const AKIOTA_EXPECTED_ROW_COUNT = 7;
export const AKIOTA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: Akiota Town Office. Hero title remains municipality name only. Unique (no wakimachi / no akitakata). */
export const AKIOTA_PLACE_PHOTO = wikiPhoto(
  "akiota-cover-townhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3AAkiota_town_hall.JPG",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "アラツク", "https://commons.wikimedia.org/wiki/File%3AAkiota_town_hall.JPG", "2014",
  "安芸太田町役場", "Akiota Town Office"
);

export const AKIOTA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "おふくろ弁当 もみじコロッケ店": sourcePhoto("akiota-34013979-dish.jpg", "おふくろ弁当 もみじコロッケ店の料理写真", "おふくろ弁当 もみじコロッケ店 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34013979/", '食べログ'),
  "鯛焼屋 よしお": sourcePhoto("akiota-34030744-dish.jpg", "鯛焼屋 よしおの料理写真", "鯛焼屋 よしお food photo", "https://tabelog.com/hiroshima/A3408/A340204/34030744/", '食べログ'),
  "渓流茶園": sourcePhoto("akiota-34018285-dish.jpg", "渓流茶園の料理写真", "渓流茶園 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34018285/", '食べログ'),
  "和風レストラン 来夢": sourcePhoto("akiota-34002220-dish.jpg", "和風レストラン 来夢の料理写真", "和風レストラン 来夢 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34002220/", '食べログ'),
  "山が笑うオソラ食堂": sourcePhoto("akiota-34032725-dish.jpg", "山が笑うオソラ食堂の料理写真", "山が笑うオソラ食堂 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34032725/", '食べログ'),
  "きっちんたまがわ 温井店": sourcePhoto("akiota-34010242-dish.jpg", "きっちんたまがわ 温井店の料理写真", "きっちんたまがわ 温井店 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34010242/", '食べログ'),
  "やぶ月": sourcePhoto("akiota-34027749-dish.jpg", "やぶ月の料理写真", "やぶ月 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34027749/", '食べログ'),
  "高丸商店 戸河内インター店": sourcePhoto("akiota-34017515-dish.jpg", "高丸商店 戸河内インター店の料理写真", "高丸商店 戸河内インター店 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34017515/", '食べログ'),
  "棚田カフェ イニ ミニ マニモ": sourcePhoto("akiota-34023791-dish.jpg", "棚田カフェ イニ ミニ マニモの料理写真", "棚田カフェ イニ ミニ マニモ food photo", "https://tabelog.com/hiroshima/A3408/A340204/34023791/", '食べログ'),
  "松蕎庵": sourcePhoto("akiota-34028590-dish.jpg", "松蕎庵の料理写真", "松蕎庵 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34028590/", '食べログ'),
  "ヨコタ製菓": sourcePhoto("akiota-34013477-dish.jpg", "ヨコタ製菓の料理写真", "ヨコタ製菓 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34013477/", '食べログ'),
  "清流の里 気紛れ庵": sourcePhoto("akiota-34029610-dish.jpg", "清流の里 気紛れ庵の料理写真", "清流の里 気紛れ庵 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34029610/", '食べログ'),
  "高丸商店 三段峡本店": sourcePhoto("akiota-34023600-dish.jpg", "高丸商店 三段峡本店の料理写真", "高丸商店 三段峡本店 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34023600/", '食べログ'),
  "黒淵荘": sourcePhoto("akiota-34033688-dish.jpg", "黒淵荘の料理写真", "黒淵荘 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34033688/", '食べログ'),
  "ノース": sourcePhoto("akiota-34026621-dish.jpg", "ノースの料理写真", "ノース food photo", "https://tabelog.com/hiroshima/A3408/A340204/34026621/", '食べログ'),
  "味彩紀行 とごうちインター店": sourcePhoto("akiota-34018085-dish.jpg", "味彩紀行 とごうちインター店の料理写真", "味彩紀行 とごうちインター店 food photo", "https://tabelog.com/hiroshima/A3408/A340204/34018085/", '食べログ'),
  "グリーンスパつつが": sourcePhoto("akiota-stay-greenspa.jpg", "グリーンスパつつがの客室写真", "Green Spa Tsutsuga room photo", "https://travel.rakuten.co.jp/HOTEL/141106/141106.html", '楽天トラベル'),
  "グリーンスパつつが 大浴場": sourcePhoto("akiota-onsen-greenspa.jpg", "グリーンスパつつが 大浴場の写真", "Green Spa Tsutsuga bath photo", "https://travel.rakuten.co.jp/HOTEL/141106/141106.html", '楽天トラベル'),
  "月ヶ瀬温泉": sourcePhoto("akiota-onsen-tsukigase.jpg", "月ヶ瀬温泉の浴場写真", "Tsukigase Onsen bath photo", "https://onsen.nifty.com/sandankyou-onsen/onsen016897/", 'ニフティ温泉'),
  "三段峡": wikiPhoto(
  "akiota-sandankyo.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E4%B8%89%E6%AE%B5%E5%B3%A1_DSC_0147.jpg",
  "CC BY 2.0", "https://creativecommons.org/licenses/by/2.0",
  "Nobuyuki Kondo", "https://commons.wikimedia.org/wiki/File%3A%E4%B8%89%E6%AE%B5%E5%B3%A1_DSC_0147.jpg", "2013",
  "三段峡", "Sandankyo Gorge"
),
  "温井ダム": wikiPhoto(
  "akiota-nukui-dam.jpg",
  "https://commons.wikimedia.org/wiki/File%3ANukui_Dam.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Qurren", "https://commons.wikimedia.org/wiki/File%3ANukui_Dam.jpg", "2017",
  "温井ダム", "Nukui Dam"
),
  "深入山": wikiPhoto(
  "akiota-shinnyu.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMt.Shinnyuzan.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "As6022014", "https://commons.wikimedia.org/wiki/File%3AMt.Shinnyuzan.jpg", "2013",
  "深入山", "Mt. Shinnyu"
),
  "井仁の棚田": sourcePhoto("akiota-ini-tanada.jpg", "井仁の棚田", "Ini Rice Terraces", "https://dive-hiroshima.com/explore/2428/", 'Dive! Hiroshima'),
  "恐羅漢山": wikiPhoto(
  "akiota-osorakan.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMt.Osorakanzan.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "As6022014", "https://commons.wikimedia.org/wiki/File%3AMt.Osorakanzan.jpg", "2013",
  "恐羅漢山", "Mt. Osorakan"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: AKIOTA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons・Dive! Hiroshima・楽天・ニフティ温泉掲載情報', accessed: AKIOTA.sources.accessed};
}

export const AKIOTA_FACILITIES: readonly FacilityRow[] = [
  sight("akiota-sight-01", "三段峡", "広島県山県郡安芸太田町柴木", "0826-28-1800", "https://dive-hiroshima.com/explore/46/", 34.630357, 132.187106),
  sight("akiota-sight-02", "温井ダム", "広島県山県郡安芸太田町大字加計1956-2", "0826-22-1501", "https://dive-hiroshima.com/explore/47/", 34.634301, 132.2996011),
  sight("akiota-sight-03", "深入山", "広島県山県郡安芸太田町大字松原1-1", "0826-28-1800", "https://dive-hiroshima.com/explore/51/", 34.64992463, 132.2068233),
  sight("akiota-sight-04", "井仁の棚田", "広島県山県郡安芸太田町中筒賀", "0826-28-1800", "https://dive-hiroshima.com/explore/2428/", 34.560314813121, 132.28415146335),
  sight("akiota-sight-05", "恐羅漢山", "広島県山県郡安芸太田町横川740-1", "0826-28-7270", "https://dive-hiroshima.com/explore/49/", 34.595342, 132.129667),
  sight("akiota-onsen-01", "グリーンスパつつが 大浴場", "広島県山県郡安芸太田町中筒賀280", "0826-32-2880", "https://travel.rakuten.co.jp/HOTEL/141106/141106.html", null, null),
  sight("akiota-onsen-02", "月ヶ瀬温泉", "広島県山県郡安芸太田町加計3505-2", null, "https://onsen.nifty.com/sandankyou-onsen/onsen016897/", null, null),
];
