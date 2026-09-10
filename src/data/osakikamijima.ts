/**
 * Osakikamijima / 大崎上島町 (Hiroshima, Toyota District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-11). JIS 34431. Twenty-first Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市・府中町・海田町・熊野町・坂町・安芸太田町・北広島町.
 * CRITICAL: Hiroshima 大崎上島町 only (豊田郡). Address gate: 広島県豊田郡大崎上島町 / 広島県大崎上島町 only.
 * Stay: official 部屋 still×1. Onsen: facility bath still×1 (stay≠onsen EXTRA name). Dining Tabelog×16. Experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const OSAKIKAMIJIMA = {
  nameJa: '大崎上島町',
  nameEn: 'Osakikamijima',
  reading: 'おおさきかみじまちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'osakikamijima',
  jis: '34431',
  jlis: '344311',
  sameAs: 'https://www.town.osakikamijima.hiroshima.jp/',
  hall: {
    postalCode: '725-0231',
    addressJa: '広島県豊田郡大崎上島町東野6625番地1',
    addressEn: '6625-1 Higashino, Osakikamijima Town, Toyota District, Hiroshima 725-0231, Japan',
    phone: '0846-65-3111'
  },
  sources: {
    home: 'https://www.town.osakikamijima.hiroshima.jp/',
    hall: 'https://www.town.osakikamijima.hiroshima.jp/',
    kanko: 'https://osakikamijima-navi.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34431/rstLst/',
    accessed: '2026-09-11'
  }
} as const;

export const OSAKIKAMIJIMA_EXPECTED_ROW_COUNT = 6;
export const OSAKIKAMIJIMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-11', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-11', altJa, altEn};
}
/** Cover: Osakikamijima Town Office. Hero title remains municipality name only. Unique (no wakimachi). */
export const OSAKIKAMIJIMA_PLACE_PHOTO = wikiPhoto(
  "osakikamijima-cover-townhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3AOsakikamijima_Town_Hall.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Samasama14", "https://commons.wikimedia.org/wiki/File%3AOsakikamijima_Town_Hall.jpg", "2013",
  "大崎上島町役場", "Osakikamijima Town Office"
);

export const OSAKIKAMIJIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "徳森食堂": sourcePhoto("osakikamijima-34007334-dish.jpg", "徳森食堂の料理写真", "Tokumori Shokudo food photo", "https://tabelog.com/hiroshima/A3404/A340406/34007334/", '食べログ'),
  "海舟櫓": sourcePhoto("osakikamijima-34007563-dish.jpg", "海舟櫓の料理写真", "Kaishu Yagura food photo", "https://tabelog.com/hiroshima/A3404/A340406/34007563/", '食べログ'),
  "長屋門カフェ": sourcePhoto("osakikamijima-34033831-dish.jpg", "長屋門カフェの料理写真", "Nagayamon Cafe food photo", "https://tabelog.com/hiroshima/A3404/A340406/34033831/", '食べログ'),
  "一正堂製菓": sourcePhoto("osakikamijima-34023856-dish.jpg", "一正堂製菓の料理写真", "Isseido Seika food photo", "https://tabelog.com/hiroshima/A3404/A340406/34023856/", '食べログ'),
  "星と陽": sourcePhoto("osakikamijima-34030483-dish.jpg", "星と陽の料理写真", "Hoshi to Hi food photo", "https://tabelog.com/hiroshima/A3404/A340406/34030483/", '食べログ'),
  "たけもとカレー": sourcePhoto("osakikamijima-34030484-dish.jpg", "たけもとカレーの料理写真", "Takemoto Curry food photo", "https://tabelog.com/hiroshima/A3404/A340406/34030484/", '食べログ'),
  "北豊ラーメン": sourcePhoto("osakikamijima-34020382-dish.jpg", "北豊ラーメンの料理写真", "Hokuto Ramen food photo", "https://tabelog.com/hiroshima/A3404/A340406/34020382/", '食べログ'),
  "AQUA ROOM SKY MARINE": sourcePhoto("osakikamijima-34032102-dish.jpg", "AQUA ROOM SKY MARINEの料理写真", "AQUA ROOM SKY MARINE food photo", "https://tabelog.com/hiroshima/A3404/A340406/34032102/", '食べログ'),
  "麺や梵": sourcePhoto("osakikamijima-34026603-dish.jpg", "麺や梵の料理写真", "Menya Bon food photo", "https://tabelog.com/hiroshima/A3404/A340406/34026603/", '食べログ'),
  "久万田": sourcePhoto("osakikamijima-34026512-dish.jpg", "久万田の料理写真", "Kumata food photo", "https://tabelog.com/hiroshima/A3404/A340406/34026512/", '食べログ'),
  "千代": sourcePhoto("osakikamijima-34021805-dish.jpg", "千代の料理写真", "Chiyo food photo", "https://tabelog.com/hiroshima/A3404/A340406/34021805/", '食べログ'),
  "ミカタカフェ": sourcePhoto("osakikamijima-34030485-dish.jpg", "ミカタカフェの料理写真", "Mikata Cafe food photo", "https://tabelog.com/hiroshima/A3404/A340406/34030485/", '食べログ'),
  "岩崎農園カフェ": sourcePhoto("osakikamijima-34030486-dish.jpg", "岩崎農園カフェの料理写真", "Iwasaki Farm Cafe food photo", "https://tabelog.com/hiroshima/A3404/A340406/34030486/", '食べログ'),
  "HOGALAKA": sourcePhoto("osakikamijima-34013748-dish.jpg", "HOGALAKAの料理写真", "HOGALAKA food photo", "https://tabelog.com/hiroshima/A3404/A340406/34013748/", '食べログ'),
  "珈琲 陶": sourcePhoto("osakikamijima-34030499-dish.jpg", "珈琲 陶の料理写真", "Coffee To food photo", "https://tabelog.com/hiroshima/A3404/A340406/34030499/", '食べログ'),
  "ニューカープ": sourcePhoto("osakikamijima-34025391-dish.jpg", "ニューカープの料理写真", "New Carp food photo", "https://tabelog.com/hiroshima/A3404/A340406/34025391/", '食べログ'),
  "きのえ温泉 ホテル清風館": sourcePhoto("osakikamijima-stay-seifukan.jpg", "きのえ温泉 ホテル清風館の客室写真", "Kinoe Onsen Hotel Seifukan room photo", "https://hotel-seifukan.co.jp/room/", 'ホテル清風館公式'),
  "きのえ温泉 ホテル清風館 大浴場": sourcePhoto("osakikamijima-onsen-seifukan.jpg", "きのえ温泉 ホテル清風館 大浴場の写真", "Kinoe Onsen Hotel Seifukan bath photo", "https://hotel-seifukan.co.jp/spa/", 'ホテル清風館公式'),
  "神峰山": sourcePhoto("osakikamijima-kannomine.jpg", "神峰山", "Mt. Kannomine", "https://dive-hiroshima.com/explore/126/", 'Dive! Hiroshima'),
  "海と島の歴史資料館大望月邸": sourcePhoto("osakikamijima-omochizuki.jpg", "海と島の歴史資料館大望月邸", "Umi to Shima History Museum Omochizuki Residence", "https://dive-hiroshima.com/explore/2431/", 'Dive! Hiroshima'),
  "木江ふれあい郷土資料館": sourcePhoto("osakikamijima-kinoe-museum.jpg", "木江ふれあい郷土資料館", "Kinoe Fureai Local Museum", "https://dive-hiroshima.com/explore/1972/", 'Dive! Hiroshima'),
  "長島大橋": sourcePhoto("osakikamijima-nagashima-bridge.jpg", "長島大橋", "Nagashima Bridge", "https://dive-hiroshima.com/explore/1374/", 'Dive! Hiroshima'),
  "木江厳島神社": wikiPhoto(
  "osakikamijima-kinoe-itsukushima.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKinoe_Itsukushima_Shrine_2013-08.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "At by At", "https://commons.wikimedia.org/wiki/File%3AKinoe_Itsukushima_Shrine_2013-08.JPG", "2013",
  "木江厳島神社", "Kinoe Itsukushima Shrine"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: OSAKIKAMIJIMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons・Dive! Hiroshima・公式掲載情報', accessed: OSAKIKAMIJIMA.sources.accessed};
}

export const OSAKIKAMIJIMA_FACILITIES: readonly FacilityRow[] = [
  sight("osakikamijima-sight-01", "神峰山", "広島県豊田郡大崎上島町中野字鬼ヶ嶽181", "0846-65-3455", "https://dive-hiroshima.com/explore/126/", 34.2264071, 132.9058879),
  sight("osakikamijima-sight-02", "海と島の歴史資料館大望月邸", "広島県豊田郡大崎上島町東野2721-1", "0846-67-3229", "https://dive-hiroshima.com/explore/2431/", 34.261669, 132.909378),
  sight("osakikamijima-sight-03", "木江ふれあい郷土資料館", "広島県豊田郡大崎上島町沖浦1911", "0846-62-0555", "https://dive-hiroshima.com/explore/1972/", 34.2157843, 132.9168847),
  sight("osakikamijima-sight-04", "長島大橋", "広島県豊田郡大崎上島町中野", null, "https://dive-hiroshima.com/explore/1374/", 34.254175, 132.877183),
  sight("osakikamijima-sight-05", "木江厳島神社", "広島県豊田郡大崎上島町木江", "0846-65-3455", "https://commons.wikimedia.org/wiki/File:Kinoe_Itsukushima_Shrine_2013-08.JPG", 34.23469948, 132.91082072),
  sight("osakikamijima-onsen-01", "きのえ温泉 ホテル清風館 大浴場", "広島県豊田郡大崎上島町沖浦1900", "0846-62-0555", "https://hotel-seifukan.co.jp/spa/", null, null),
];
