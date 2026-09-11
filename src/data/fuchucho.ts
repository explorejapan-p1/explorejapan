/**
 * Fuchu Town / 府中町 (Hiroshima, Aki District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-10). JIS 34302. Fifteenth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市.
 * CRITICAL: slug fuchucho = 府中町 (town) ≠ ready hub fuchu = 府中市. Address gate: 広島県安芸郡府中町 / 広島県府中町 only.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay×1. Onsen/experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const FUCHUCHO = {
  nameJa: '府中町',
  nameEn: 'Fuchu Town',
  reading: 'ふちゅうちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'fuchucho',
  jis: '34302',
  jlis: '343021',
  sameAs: 'https://www.town.fuchu.hiroshima.jp/',
  hall: {
    postalCode: '735-8686',
    addressJa: '広島県安芸郡府中町大通三丁目5番1号',
    addressEn: '5-1 Odori 3-chome, Fuchu Town, Aki District, Hiroshima 735-8686, Japan',
    phone: '082-286-3111'
  },
  sources: {
    home: 'https://www.town.fuchu.hiroshima.jp/',
    hall: 'https://www.town.fuchu.hiroshima.jp/',
    kanko: 'https://www.town.fuchu.hiroshima.jp/life/4/33/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34302/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const FUCHUCHO_EXPECTED_ROW_COUNT = 5;
export const FUCHUCHO_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: night view from 府中町. Hero title remains municipality name only. Unique (no wakimachi). */
export const FUCHUCHO_PLACE_PHOTO = wikiPhoto(
  "fuchucho-cover-night.jpg",
  "https://commons.wikimedia.org/wiki/File%3AView_of_Hiroshima_City_from_Fuchu_Town_at_night_1.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "そらみみ", "https://commons.wikimedia.org/wiki/File%3AView_of_Hiroshima_City_from_Fuchu_Town_at_night_1.jpg", "2018",
  "府中町から望む広島市街の夜景", "Night view of Hiroshima City from Fuchu Town"
);

export const FUCHUCHO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {

  "楽笑酒場 goji-goji 府中店": sourcePhoto("fuchucho-34022658-dish.jpg", "楽笑酒場 goji-goji 府中店の料理写真", "楽笑酒場 goji-goji 府中店 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34022658/", '食べログ'),
  "や台ずし 向洋駅前町": sourcePhoto("fuchucho-34029100-dish.jpg", "や台ずし 向洋駅前町の料理写真", "や台ずし 向洋駅前町 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34029100/", '食べログ'),
  "鉄板dining ちぎり": sourcePhoto("fuchucho-34030979-dish.jpg", "鉄板dining ちぎりの料理写真", "鉄板dining ちぎり food photo", "https://tabelog.com/hiroshima/A3401/A340105/34030979/", '食べログ'),
  "台湾小籠包 イオンモール広島府中店": sourcePhoto("fuchucho-34025202-dish.jpg", "台湾小籠包 イオンモール広島府中店の料理写真", "台湾小籠包 イオンモール広島府中店 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34025202/", '食べログ'),
  "韓Kitchen ありらんママ": sourcePhoto("fuchucho-34029383-dish.jpg", "韓Kitchen ありらんママの料理写真", "韓Kitchen ありらんママ food photo", "https://tabelog.com/hiroshima/A3401/A340105/34029383/", '食べログ'),
  "炭火焼肉 萬まる 府中本店": sourcePhoto("fuchucho-34018963-dish.jpg", "炭火焼肉 萬まる 府中本店の料理写真", "炭火焼肉 萬まる 府中本店 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34018963/", '食べログ'),
  "PEG": sourcePhoto("fuchucho-34034729-dish.jpg", "PEGの料理写真", "PEG food photo", "https://tabelog.com/hiroshima/A3401/A340105/34034729/", '食べログ'),
  "鉄八": sourcePhoto("fuchucho-34029863-dish.jpg", "鉄八の料理写真", "鉄八 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34029863/", '食べログ'),
  "バッケンモーツアルト ソレイユ店": sourcePhoto("fuchucho-34015608-dish.jpg", "バッケンモーツアルト ソレイユ店の料理写真", "バッケンモーツアルト ソレイユ店 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34015608/", '食べログ'),
  "ビーフボールカフェ RYOMA": sourcePhoto("fuchucho-34001065-dish.jpg", "ビーフボールカフェ RYOMAの料理写真", "ビーフボールカフェ RYOMA food photo", "https://tabelog.com/hiroshima/A3401/A340105/34001065/", '食べログ'),
  "居酒屋 金太郎": sourcePhoto("fuchucho-34002994-dish.jpg", "居酒屋 金太郎の料理写真", "居酒屋 金太郎 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34002994/", '食べログ'),
  "えんじゃ": sourcePhoto("fuchucho-34019586-dish.jpg", "えんじゃの料理写真", "えんじゃ food photo", "https://tabelog.com/hiroshima/A3401/A340105/34019586/", '食べログ'),
  "香月堂 サンリブ府中店": sourcePhoto("fuchucho-34019607-dish.jpg", "香月堂 サンリブ府中店の料理写真", "香月堂 サンリブ府中店 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34019607/", '食べログ'),
  "ごっちん": sourcePhoto("fuchucho-34001855-dish.jpg", "ごっちんの料理写真", "ごっちん food photo", "https://tabelog.com/hiroshima/A3401/A340105/34001855/", '食べログ'),
  "明石": sourcePhoto("fuchucho-34000943-dish.jpg", "明石の料理写真", "明石 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34000943/", '食べログ'),
  "ジェラート工房 ポーラーベア イオン広島府中店": sourcePhoto("fuchucho-34026533-dish.jpg", "ジェラート工房 ポーラーベア イオン広島府中店の料理写真", "ジェラート工房 ポーラーベア イオン広島府中店 food photo", "https://tabelog.com/hiroshima/A3401/A340105/34026533/", '食べログ'),
  "ＳＯＣＩＯ　ＲＥＳＩＤＥＮＴＩＡＬ　ＨＯＴＥＬ（ソシオ　レジデンシャル　ホテル）": sourcePhoto("fuchucho-stay-h198802.jpg", "ＳＯＣＩＯ　ＲＥＳＩＤＥＮＴＩＡＬ　ＨＯＴＥＬ（ソシオ　レジデンシャル　ホテル）の客室写真", "ＳＯＣＩＯ　ＲＥＳＩＤＥＮＴＩＡＬ　ＨＯＴＥＬ（ソシオ　レジデンシャル　ホテル） room photo", "https://travel.rakuten.co.jp/HOTEL/198802/198802.html", '楽天トラベル'),
  "水分峡森林公園": wikiPhoto(
  "fuchucho-mikumari.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E6%B0%B4%E5%88%86%E5%B3%A1%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9C%9201.JPG",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://commons.wikimedia.org/wiki/File%3A%E6%B0%B4%E5%88%86%E5%B3%A1%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9C%9201.JPG", "2007",
  "水分峡森林公園", "Mikumari Forest Park"
),
  "多家神社": wikiPhoto(
  "fuchucho-take-jinja.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E5%A4%9A%E5%AE%B6%E7%A5%9E%E7%A4%BE01.JPG",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://commons.wikimedia.org/wiki/File%3A%E5%A4%9A%E5%AE%B6%E7%A5%9E%E7%A4%BE01.JPG", "2007",
  "多家神社", "Take Shrine"
),
  "イオンモール広島府中": wikiPhoto(
  "fuchucho-aeon.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E5%BA%83%E5%B3%B6%E5%BA%9C%E4%B8%AD.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "廣丸 博一", "https://commons.wikimedia.org/wiki/File%3A%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E5%BA%83%E5%B3%B6%E5%BA%9C%E4%B8%AD.jpg", "2016",
  "イオンモール広島府中", "AEON MALL Hiroshima Fuchu"
),
  "道隆寺": wikiPhoto(
  "fuchucho-doruji.jpg",
  "https://commons.wikimedia.org/wiki/File%3ADoruji%20hiroshima.JPG",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://commons.wikimedia.org/wiki/File%3ADoruji%20hiroshima.JPG", "2011",
  "道隆寺", "Doryuji Temple"
),
  "安芸総社跡": wikiPhoto(
  "fuchucho-soja.jpg",
  "https://commons.wikimedia.org/wiki/File%3ASoja-ato%20in%20Fuchu%2C%20Hiroshima%20%28town%29.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0",
  "Saigen Jiro", "https://commons.wikimedia.org/wiki/File%3ASoja-ato%20in%20Fuchu%2C%20Hiroshima%20%28town%29.jpg", "2015",
  "安芸総社跡", "Former Aki Soja site"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: FUCHUCHO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons掲載情報', accessed: FUCHUCHO.sources.accessed};
}

export const FUCHUCHO_FACILITIES: readonly FacilityRow[] = [
  sight("fuchucho-sight-01", "水分峡森林公園", "広島県安芸郡府中町字石コロヒ83番", null, "https://www.town.fuchu.hiroshima.jp/site/mikumari/", 34.411073, 132.524209),
  sight("fuchucho-sight-02", "多家神社", "広島県安芸郡府中町宮の町3丁目", null, "https://ja.wikipedia.org/wiki/%E5%A4%9A%E5%AE%B6%E7%A5%9E%E7%A4%BE", 34.3959163, 132.5102409),
  sight("fuchucho-sight-03", "イオンモール広島府中", "広島県安芸郡府中町大須2-1-1", null, "https://aeonmall-hiroshimafuchu.com/", 34.3946064, 132.4991921),
  sight("fuchucho-sight-04", "道隆寺", "広島県安芸郡府中町みくまり3-9-8", "082-282-4636", "https://dive-hiroshima.com/explore/1377/", 34.4046637, 132.5127796),
  sight("fuchucho-sight-05", "安芸総社跡", "広島県安芸郡府中町本町3-2-23", null, "https://www.town.fuchu.hiroshima.jp/soshiki/16/1038.html", 34.4000539, 132.5124353),
];
