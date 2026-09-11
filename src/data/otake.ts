/**
 * Otake City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34211. Tenth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const OTAKE = {
  nameJa: '大竹市',
  nameEn: 'Otake',
  reading: 'おおたけし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'otake',
  jis: '34211',
  jlis: '342110',
  sameAs: 'https://www.city.otake.hiroshima.jp/',
  hall: {
    postalCode: '739-0692',
    addressJa: '広島県大竹市小方1丁目11番1号',
    addressEn: '11-1 Ogata 1-chome, Otake City, Hiroshima 739-0692, Japan',
    phone: '0827-59-2111'
  },
  sources: {
    home: 'https://www.city.otake.hiroshima.jp/',
    hall: 'https://www.city.otake.hiroshima.jp/',
    kanko: 'https://www.city.otake.hiroshima.jp/soshiki/somu/sangyoshinko/gyomu/kanko/index.html',
    tabelogCity: 'https://tabelog.com/hiroshima/C34211/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const OTAKE_EXPECTED_ROW_COUNT = 8;
export const OTAKE_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 下瀬美術館. Hero title remains municipality name only. Unique (no wakimachi). */
export const OTAKE_PLACE_PHOTO = wikiPhoto(
  "otake-cover-simose.jpg",
  "https://commons.wikimedia.org/wiki/File%3AShimose_art_museum_1.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Totti", "https://commons.wikimedia.org/wiki/File%3AShimose_art_museum_1.jpg", "2023",
  "下瀬美術館", "Simose Art Museum"
);

export const OTAKE_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "SIMOSE French Restaurant": sourcePhoto("otake-34031059-dish.jpg", "SIMOSE French Restaurantの料理写真", "SIMOSE French Restaurant food photo", "https://tabelog.com/hiroshima/A3402/A340203/34031059/", '食べログ'),
  "居酒屋一心": sourcePhoto("otake-34012455-dish.jpg", "居酒屋一心の料理写真", "居酒屋一心 food photo", "https://tabelog.com/hiroshima/A3402/A340203/34012455/", '食べログ'),
  "カフェ＆フード サンヒトリ": sourcePhoto("otake-34025826-dish.jpg", "カフェ＆フード サンヒトリの料理写真", "カフェ＆フード サンヒトリ food photo", "https://tabelog.com/hiroshima/A3402/A340203/34025826/", '食べログ'),
  "プラスグッドデイ": sourcePhoto("otake-34023049-dish.jpg", "プラスグッドデイの料理写真", "プラスグッドデイ food photo", "https://tabelog.com/hiroshima/A3402/A340203/34023049/", '食べログ'),
  "のYAKI": sourcePhoto("otake-34023855-dish.jpg", "のYAKIの料理写真", "のYAKI food photo", "https://tabelog.com/hiroshima/A3402/A340203/34023855/", '食べログ'),
  "どんどん ゆめタウン大竹店": sourcePhoto("otake-34005629-dish.jpg", "どんどん ゆめタウン大竹店の料理写真", "どんどん ゆめタウン大竹店 food photo", "https://tabelog.com/hiroshima/A3402/A340203/34005629/", '食べログ'),
  "晩酌家ＫＩＫＵ": sourcePhoto("otake-34006381-dish.jpg", "晩酌家ＫＩＫＵの料理写真", "晩酌家ＫＩＫＵ food photo", "https://tabelog.com/hiroshima/A3402/A340203/34006381/", '食べログ'),
  "鑫旺": sourcePhoto("otake-34017822-dish.jpg", "鑫旺の料理写真", "鑫旺 food photo", "https://tabelog.com/hiroshima/A3402/A340203/34017822/", '食べログ'),
  "大正キッチン": sourcePhoto("otake-34025488-dish.jpg", "大正キッチンの料理写真", "大正キッチン food photo", "https://tabelog.com/hiroshima/A3402/A340203/34025488/", '食べログ'),
  "お食事処 みずなか": sourcePhoto("otake-34002562-dish.jpg", "お食事処 みずなかの料理写真", "お食事処 みずなか food photo", "https://tabelog.com/hiroshima/A3402/A340203/34002562/", '食べログ'),
  "オオタケ バル ガク": sourcePhoto("otake-34023810-dish.jpg", "オオタケ バル ガクの料理写真", "オオタケ バル ガク food photo", "https://tabelog.com/hiroshima/A3402/A340203/34023810/", '食べログ'),
  "ばり嗎 大竹南栄店": sourcePhoto("otake-34034709-dish.jpg", "ばり嗎 大竹南栄店の料理写真", "ばり嗎 大竹南栄店 food photo", "https://tabelog.com/hiroshima/A3402/A340203/34034709/", '食べログ'),
  "Les gouters gaku": sourcePhoto("otake-34030531-dish.jpg", "Les gouters gakuの料理写真", "Les gouters gaku food photo", "https://tabelog.com/hiroshima/A3402/A340203/34030531/", '食べログ'),
  "さちのたね": sourcePhoto("otake-34034023-dish.jpg", "さちのたねの料理写真", "さちのたね food photo", "https://tabelog.com/hiroshima/A3402/A340203/34034023/", '食べログ'),
  "小西お好み焼き店": sourcePhoto("otake-34001197-dish.jpg", "小西お好み焼き店の料理写真", "小西お好み焼き店 food photo", "https://tabelog.com/hiroshima/A3402/A340203/34001197/", '食べログ'),
  "うさ季": sourcePhoto("otake-34030187-dish.jpg", "うさ季の料理写真", "うさ季 food photo", "https://tabelog.com/hiroshima/A3402/A340203/34030187/", '食べログ'),
  "サンホテル大竹": sourcePhoto("otake-stay-h188903.jpg", "サンホテル大竹の客室写真", "サンホテル大竹 room photo", "https://travel.rakuten.co.jp/HOTEL/188903/188903.html", '楽天トラベル'),
  "ビジネスホテルマスヤ": sourcePhoto("otake-stay-h137845.jpg", "ビジネスホテルマスヤの客室写真", "ビジネスホテルマスヤ room photo", "https://travel.rakuten.co.jp/HOTEL/137845/137845.html", '楽天トラベル'),
  "Ｓｉｍｏｓｅ　Ａｒｔ　Ｇａｒｄｅｎ　Ｖｉｌｌａ": sourcePhoto("otake-stay-h191449.jpg", "Ｓｉｍｏｓｅ　Ａｒｔ　Ｇａｒｄｅｎ　Ｖｉｌｌａの客室写真", "Ｓｉｍｏｓｅ　Ａｒｔ　Ｇａｒｄｅｎ　Ｖｉｌｌａ room photo", "https://travel.rakuten.co.jp/HOTEL/191449/191449.html", '楽天トラベル'),
  "プライベートサウナ　アザミガーデン大竹　＾": sourcePhoto("otake-stay-h199620.jpg", "プライベートサウナ　アザミガーデン大竹　＾の客室写真", "プライベートサウナ　アザミガーデン大竹　＾ room photo", "https://travel.rakuten.co.jp/HOTEL/199620/199620.html", '楽天トラベル'),
  "サンホテル大竹 銭湯『昇鯉湯』": sourcePhoto("otake-onsen-h188903.jpg", "サンホテル大竹 銭湯『昇鯉湯』の写真", "サンホテル大竹 銭湯『昇鯉湯』 bath photo", "https://travel.rakuten.co.jp/HOTEL/188903/gallery.html", '楽天トラベル'),
  "ビジネスホテルマスヤ 男性専用共同風呂": sourcePhoto("otake-onsen-h137845.jpg", "ビジネスホテルマスヤ 男性専用共同風呂の写真", "ビジネスホテルマスヤ 男性専用共同風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/137845/gallery.html", '楽天トラベル'),
  "プライベートサウナ　アザミガーデン大竹　＾ 風呂": sourcePhoto("otake-onsen-h199620.jpg", "プライベートサウナ　アザミガーデン大竹　＾ 風呂の写真", "プライベートサウナ　アザミガーデン大竹　＾ 風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/199620/gallery.html", '楽天トラベル'),
  "亀居公園": wikiPhoto(
  "otake-kamei.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKamei_Castle_05_Honmaru.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "TT mk2", "https://commons.wikimedia.org/wiki/File%3AKamei_Castle_05_Honmaru.jpg", "2019",
  "亀居公園（亀居城本丸）", "Kamei Park (Kamei Castle honmaru)"
),
  "大竹駅": wikiPhoto(
  "otake-station.jpg",
  "https://commons.wikimedia.org/wiki/File%3AOtake_station_new.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Shuichi-815", "https://commons.wikimedia.org/wiki/File%3AOtake_station_new.jpg", "2024",
  "大竹駅", "Ōtake Station"
),
  "下瀬美術館": wikiPhoto(
  "otake-simose.jpg",
  "https://commons.wikimedia.org/wiki/File%3AShimose_art_museum_1.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Totti", "https://commons.wikimedia.org/wiki/File%3AShimose_art_museum_1.jpg", "2023",
  "下瀬美術館", "Simose Art Museum"
),
  "三倉岳": wikiPhoto(
  "otake-mikuradake.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E4%B8%89%E5%80%89%E5%B2%B3_Mikuradake_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E4%B8%89%E5%80%89%E5%B2%B3_Mikuradake_-_panoramio.jpg", "2010",
  "三倉岳", "Mount Mikura"
),
  "阿多田島": wikiPhoto(
  "otake-atatajima.jpg",
  "https://commons.wikimedia.org/wiki/File%3AAtata_Island_Hiroshima_2014.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Sanjo", "https://commons.wikimedia.org/wiki/File%3AAtata_Island_Hiroshima_2014.JPG", "2014",
  "阿多田島", "Atata Island"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: OTAKE.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: OTAKE.sources.accessed};
}

export const OTAKE_FACILITIES: readonly FacilityRow[] = [
  sight("otake-sight-01", "亀居公園", "広島県大竹市小方2丁目", null, "https://commons.wikimedia.org/wiki/File%3AKamei_Castle_05_Honmaru.jpg", 34.240789, 132.21696),
  sight("otake-sight-02", "大竹駅", "広島県大竹市新町一丁目", null, "https://commons.wikimedia.org/wiki/File%3AOtake_station_new.jpg", 34.217857, 132.223345),
  sight("otake-sight-03", "下瀬美術館", "広島県大竹市晴海2-10-50", null, "https://commons.wikimedia.org/wiki/File%3AShimose_art_museum_1.jpg", 34.2419526, 132.2271649),
  sight("otake-sight-04", "三倉岳", "広島県大竹市", null, "https://commons.wikimedia.org/wiki/File%3A%E4%B8%89%E5%80%89%E5%B2%B3_Mikuradake_-_panoramio.jpg", 34.3170565, 132.1480035),
  sight("otake-sight-05", "阿多田島", "広島県大竹市", null, "https://commons.wikimedia.org/wiki/File%3AAtata_Island_Hiroshima_2014.JPG", 34.1919427, 132.305699),
  sight("otake-onsen-01", "サンホテル大竹 銭湯『昇鯉湯』", "広島県大竹市北栄6-7", "0827-52-8810", "https://travel.rakuten.co.jp/HOTEL/188903/gallery.html", null, null),
  sight("otake-onsen-02", "ビジネスホテルマスヤ 男性専用共同風呂", "広島県大竹市新町1-8-11", "0827-52-2446", "https://travel.rakuten.co.jp/HOTEL/137845/gallery.html", null, null),
  sight("otake-onsen-03", "プライベートサウナ　アザミガーデン大竹　＾ 風呂", "広島県大竹市栗谷町大栗林302-1", "080-7008-6427", "https://travel.rakuten.co.jp/HOTEL/199620/gallery.html", null, null),
];
