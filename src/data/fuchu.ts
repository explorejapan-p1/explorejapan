/**
 * Fuchu City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34208. Seventh Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市.
 * CRITICAL: slug fuchu = 府中市・広島県 (NOT Tokyo 府中市, NOT fuchucho 府中町).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const FUCHU = {
  nameJa: '府中市',
  nameEn: 'Fuchu',
  reading: 'ふちゅうし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'fuchu',
  jis: '34208',
  jlis: '342080',
  sameAs: 'https://www.city.fuchu.hiroshima.jp/',
  hall: {
    postalCode: '726-8601',
    addressJa: '広島県府中市府川町315番地',
    addressEn: '315 Fukawa-cho, Fuchu City, Hiroshima 726-8601, Japan',
    phone: '0847-44-9099'
  },
  sources: {
    home: 'https://www.city.fuchu.hiroshima.jp/',
    hall: 'https://www.city.fuchu.hiroshima.jp/',
    kanko: 'https://fuchu-kanko.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34208/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const FUCHU_EXPECTED_ROW_COUNT = 6;
export const FUCHU_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 府中公園. Hero title remains municipality name only. Unique (no wakimachi). */
export const FUCHU_PLACE_PHOTO = wikiPhoto(
  "fuchu-cover-park.jpg",
  "https://commons.wikimedia.org/wiki/File:%E5%BA%9C%E4%B8%AD%E5%85%AC%E5%9C%92_Fuchu_park_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File:%E5%BA%9C%E4%B8%AD%E5%85%AC%E5%9C%92_Fuchu_park_-_panoramio.jpg", "2008",
  "府中公園", "Fuchu Park"
);

export const FUCHU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "香輝惣菜": sourcePhoto("fuchu-34015469-dish.jpg", "香輝惣菜の料理写真", "香輝惣菜 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34015469/", '食べログ'),
  "同楽縁 府中店": sourcePhoto("fuchu-34017522-dish.jpg", "同楽縁 府中店の料理写真", "同楽縁 府中店 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34017522/", '食べログ'),
  "江戸前 華寿し": sourcePhoto("fuchu-34017936-dish.jpg", "江戸前 華寿しの料理写真", "江戸前 華寿し food photo", "https://tabelog.com/hiroshima/A3405/A340504/34017936/", '食べログ'),
  "味の蔵　府中店": sourcePhoto("fuchu-34016437-dish.jpg", "味の蔵　府中店の料理写真", "味の蔵　府中店 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34016437/", '食べログ'),
  "鷹屋": sourcePhoto("fuchu-34015480-dish.jpg", "鷹屋の料理写真", "鷹屋 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34015480/", '食べログ'),
  "幸成堂": sourcePhoto("fuchu-34015520-dish.jpg", "幸成堂の料理写真", "幸成堂 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34015520/", '食べログ'),
  "お好み焼き きよ": sourcePhoto("fuchu-34022613-dish.jpg", "お好み焼き きよの料理写真", "お好み焼き きよ food photo", "https://tabelog.com/hiroshima/A3405/A340504/34022613/", '食べログ'),
  "居酒屋　じゅんちゃん": sourcePhoto("fuchu-34006798-dish.jpg", "居酒屋　じゅんちゃんの料理写真", "居酒屋　じゅんちゃん food photo", "https://tabelog.com/hiroshima/A3405/A340504/34006798/", '食べログ'),
  "道の駅 びんご府中 レストラン": sourcePhoto("fuchu-34022799-dish.jpg", "道の駅 びんご府中 レストランの料理写真", "道の駅 びんご府中 レストラン food photo", "https://tabelog.com/hiroshima/A3405/A340504/34022799/", '食べログ'),
  "麺屋 一藤": sourcePhoto("fuchu-34015517-dish.jpg", "麺屋 一藤の料理写真", "麺屋 一藤 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34015517/", '食べログ'),
  "ダイニング　永遠": sourcePhoto("fuchu-34015072-dish.jpg", "ダイニング　永遠の料理写真", "ダイニング　永遠 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34015072/", '食べログ'),
  "棕櫚庵": sourcePhoto("fuchu-34015407-dish.jpg", "棕櫚庵の料理写真", "棕櫚庵 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34015407/", '食べログ'),
  "びんご府中たこ焼き": sourcePhoto("fuchu-34019034-dish.jpg", "びんご府中たこ焼きの料理写真", "びんご府中たこ焼き food photo", "https://tabelog.com/hiroshima/A3405/A340504/34019034/", '食べログ'),
  "幸": sourcePhoto("fuchu-34008688-dish.jpg", "幸の料理写真", "幸 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34008688/", '食べログ'),
  "珈琲 煎濾 天満屋府中店": sourcePhoto("fuchu-34019035-dish.jpg", "珈琲 煎濾 天満屋府中店の料理写真", "珈琲 煎濾 天満屋府中店 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34019035/", '食べログ'),
  "麺猿": sourcePhoto("fuchu-34020584-dish.jpg", "麺猿の料理写真", "麺猿 food photo", "https://tabelog.com/hiroshima/A3405/A340504/34020584/", '食べログ'),
  "府中第一ホテル": sourcePhoto("fuchu-stay-h9648.jpg", "府中第一ホテルの客室写真", "府中第一ホテル room photo", "https://travel.rakuten.co.jp/HOTEL/9648/9648.html", '楽天トラベル'),
  "富士旅館＜広島県＞": sourcePhoto("fuchu-stay-h16069.jpg", "富士旅館＜広島県＞の客室写真", "富士旅館＜広島県＞ room photo", "https://travel.rakuten.co.jp/HOTEL/16069/16069.html", '楽天トラベル'),
  "大吉旅館": sourcePhoto("fuchu-stay-h17644.jpg", "大吉旅館の客室写真", "大吉旅館 room photo", "https://travel.rakuten.co.jp/HOTEL/17644/17644.html", '楽天トラベル'),
  "富士旅館＜広島県＞ 大浴場": sourcePhoto("fuchu-onsen-h16069.jpg", "富士旅館＜広島県＞ 大浴場の写真", "富士旅館＜広島県＞ 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/16069/gallery.html", '楽天トラベル'),
  "上下町並み": wikiPhoto(
  "fuchu-joge-machinami.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E4%B8%8A%E4%B8%8B%E7%94%BA02_Joge_town_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E4%B8%8A%E4%B8%8B%E7%94%BA02_Joge_town_-_panoramio.jpg", "2008",
  "上下町並み", "Joge historic townscape"
),
  "矢野岩海": wikiPhoto(
  "fuchu-yano-gankai.jpg",
  "https://commons.wikimedia.org/wiki/File%3AYano-gankai.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "As6022014", "https://commons.wikimedia.org/wiki/File%3AYano-gankai.jpg", "2010",
  "矢野岩海", "Yano Gankai"
),
  "道の駅びんご府中": wikiPhoto(
  "fuchu-michinoeki.jpg",
  "https://commons.wikimedia.org/wiki/File%3AFUCHU-michi-no-eki.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "melvil", "https://commons.wikimedia.org/wiki/File%3AFUCHU-michi-no-eki.jpg", "2021",
  "道の駅びんご府中", "Michinoeki Bingo Fuchu"
),
  "府中駅": wikiPhoto(
  "fuchu-station.jpg",
  "https://commons.wikimedia.org/wiki/File%3AFuch%C5%AB_Station_%28Hiroshima%29%2C_ekisha-2.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "Saigen Jiro", "https://commons.wikimedia.org/wiki/File%3AFuch%C5%AB_Station_%28Hiroshima%29%2C_ekisha-2.jpg", "2019",
  "府中駅", "Fuch\u016b Station (Hiroshima)"
),
  "府中公園": wikiPhoto(
  "fuchu-cover-park.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E5%BA%9C%E4%B8%AD%E5%85%AC%E5%9C%92_Fuchu_park_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E5%BA%9C%E4%B8%AD%E5%85%AC%E5%9C%92_Fuchu_park_-_panoramio.jpg", "2008",
  "府中公園", "Fuchu Park"
),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: FUCHU.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: FUCHU.sources.accessed};
}

export const FUCHU_FACILITIES: readonly FacilityRow[] = [
  sight("fuchu-sight-01", "上下町並み", "広島県府中市上下町上下", null, "https://commons.wikimedia.org/wiki/File%3A%E4%B8%8A%E4%B8%8B%E7%94%BA02_Joge_town_-_panoramio.jpg", 34.6995252, 133.125157),
  sight("fuchu-sight-02", "矢野岩海", "広島県府中市上下町矢野", null, "https://commons.wikimedia.org/wiki/File%3AYano-gankai.jpg", null, null),
  sight("fuchu-sight-03", "道の駅びんご府中", "広島県府中市府川町230-1", null, "https://commons.wikimedia.org/wiki/File%3AFUCHU-michi-no-eki.jpg", 34.5701658, 133.2359782),
  sight("fuchu-sight-04", "府中駅", "広島県府中市元町", null, "https://commons.wikimedia.org/wiki/File%3AFuch%C5%AB_Station_%28Hiroshima%29%2C_ekisha-2.jpg", 34.5717058, 133.2362267),
  sight("fuchu-sight-05", "府中公園", "広島県府中市府中町", null, "https://commons.wikimedia.org/wiki/File%3A%E5%BA%9C%E4%B8%AD%E5%85%AC%E5%9C%92_Fuchu_park_-_panoramio.jpg", 34.5805723, 133.232669),
  sight("fuchu-onsen-01", "富士旅館＜広島県＞ 大浴場", "広島県府中市府中町25-3", "0847-41-2295", "https://travel.rakuten.co.jp/HOTEL/16069/gallery.html", null, null),
];
