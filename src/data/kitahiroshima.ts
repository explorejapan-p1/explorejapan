/**
 * Kitahiroshima / 北広島町 (Hiroshima, Yamagata District) sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-10). JIS 34369. Twentieth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市・江田島市・府中町・海田町・熊野町・坂町・安芸太田町.
 * CRITICAL: Hiroshima 北広島町 only (NOT 北海道北広島市). Address gate: 広島県山県郡北広島町 / 広島県北広島町 only.
 * Stay: official 部屋 still×1. Onsen: facility bath still×3 (stay≠onsen EXTRA name). Dining Tabelog×16. Experience/shop/commerce: honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KITAHIROSHIMA = {
  nameJa: '北広島町',
  nameEn: 'Kitahiroshima',
  reading: 'きたひろしまちょう',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'kitahiroshima',
  jis: '34369',
  jlis: '343692',
  sameAs: 'https://www.town.kitahiroshima.lg.jp/',
  hall: {
    postalCode: '731-1595',
    addressJa: '広島県山県郡北広島町有田1234番地',
    addressEn: '1234 Arita, Kitahiroshima Town, Yamagata District, Hiroshima 731-1595, Japan',
    phone: '0826-72-2111'
  },
  sources: {
    home: 'https://www.town.kitahiroshima.lg.jp/',
    hall: 'https://www.town.kitahiroshima.lg.jp/',
    kanko: 'https://kitahiro.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34369/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const KITAHIROSHIMA_EXPECTED_ROW_COUNT = 8;
export const KITAHIROSHIMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: Kitahiroshima Town Office (Hiroshima). Hero title remains municipality name only. Unique (no wakimachi / no Hokkaido Kitahiroshima). */
export const KITAHIROSHIMA_PLACE_PHOTO = wikiPhoto(
  "kitahiroshima-cover-townhall.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKitahiroshima_town_hall.JPG",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "アラツク", "https://commons.wikimedia.org/wiki/File%3AKitahiroshima_town_hall.JPG", "2014",
  "北広島町役場", "Kitahiroshima Town Office"
);

export const KITAHIROSHIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "三八 松浦": sourcePhoto("kitahiroshima-34003271-dish.jpg", "三八 松浦の料理写真", "Sanpa Matsuura food photo", "https://tabelog.com/hiroshima/A3408/A340801/34003271/", '食べログ'),
  "どんぐり庵": sourcePhoto("kitahiroshima-34011568-dish.jpg", "どんぐり庵の料理写真", "Donguri-an food photo", "https://tabelog.com/hiroshima/A3408/A340801/34011568/", '食べログ'),
  "お好みハウス 新見": sourcePhoto("kitahiroshima-34015496-dish.jpg", "お好みハウス 新見の料理写真", "Okonomi House Niimi food photo", "https://tabelog.com/hiroshima/A3408/A340801/34015496/", '食べログ'),
  "へんぽこ茶屋": sourcePhoto("kitahiroshima-34014998-dish.jpg", "へんぽこ茶屋の料理写真", "Henpoko Chaya food photo", "https://tabelog.com/hiroshima/A3408/A340801/34014998/", '食べログ'),
  "啄木鳥": sourcePhoto("kitahiroshima-34017325-dish.jpg", "啄木鳥の料理写真", "Kitsutsuki food photo", "https://tabelog.com/hiroshima/A3408/A340801/34017325/", '食べログ'),
  "さんまらーめん 立盛": sourcePhoto("kitahiroshima-34030671-dish.jpg", "さんまらーめん 立盛の料理写真", "Sanma Ramen Tatsumori food photo", "https://tabelog.com/hiroshima/A3408/A340801/34030671/", '食べログ'),
  "レストラン 響": sourcePhoto("kitahiroshima-34019530-dish.jpg", "レストラン 響の料理写真", "Restaurant Hibiki food photo", "https://tabelog.com/hiroshima/A3408/A340801/34019530/", '食べログ'),
  "中華そば ちよだ二番": sourcePhoto("kitahiroshima-34016311-dish.jpg", "中華そば ちよだ二番の料理写真", "Chuka Soba Chiyoda Niban food photo", "https://tabelog.com/hiroshima/A3408/A340801/34016311/", '食べログ'),
  "正直村": sourcePhoto("kitahiroshima-34017381-dish.jpg", "正直村の料理写真", "Shojiki-mura food photo", "https://tabelog.com/hiroshima/A3408/A340801/34017381/", '食べログ'),
  "ぞうさんカフェ": sourcePhoto("kitahiroshima-34020057-dish.jpg", "ぞうさんカフェの料理写真", "Zousan Cafe food photo", "https://tabelog.com/hiroshima/A3408/A340801/34020057/", '食べログ'),
  "むすび むさし どんぐり村 豊平店": sourcePhoto("kitahiroshima-34001422-dish.jpg", "むすび むさし どんぐり村 豊平店の料理写真", "Musubi Musashi Dongurimura Toyohira food photo", "https://tabelog.com/hiroshima/A3408/A340801/34001422/", '食べログ'),
  "芸北ドルチェ": sourcePhoto("kitahiroshima-34017380-dish.jpg", "芸北ドルチェの料理写真", "Geihoku Dolce food photo", "https://tabelog.com/hiroshima/A3408/A340801/34017380/", '食べログ'),
  "きたひろ食堂": sourcePhoto("kitahiroshima-34022229-dish.jpg", "きたひろ食堂の料理写真", "Kitahiro Shokudo food photo", "https://tabelog.com/hiroshima/A3408/A340801/34022229/", '食べログ'),
  "Casual Kitchen Hana": sourcePhoto("kitahiroshima-34030255-dish.jpg", "Casual Kitchen Hanaの料理写真", "Casual Kitchen Hana food photo", "https://tabelog.com/hiroshima/A3408/A340801/34030255/", '食べログ'),
  "浄謙寺": sourcePhoto("kitahiroshima-34015662-dish.jpg", "浄謙寺の料理写真", "Jokenji food photo", "https://tabelog.com/hiroshima/A3408/A340801/34015662/", '食べログ'),
  "野の花かふぇ": sourcePhoto("kitahiroshima-34014932-dish.jpg", "野の花かふぇの料理写真", "Nonohana Cafe food photo", "https://tabelog.com/hiroshima/A3408/A340801/34014932/", '食べログ'),
  "広島北ホテル": sourcePhoto("kitahiroshima-stay-kitahotel.jpg", "広島北ホテルの客室写真", "Hiroshima Kita Hotel room photo", "http://h-kitahotel.jp/rooms.html", '広島北ホテル公式'),
  "広島北ホテル 大浴場": sourcePhoto("kitahiroshima-onsen-kitahotel.jpg", "広島北ホテル 大浴場の写真", "Hiroshima Kita Hotel bath photo", "http://h-kitahotel.jp/spa.html", '広島北ホテル公式'),
  "芸北オークガーデン 大浴場": sourcePhoto("kitahiroshima-onsen-oak.jpg", "芸北オークガーデン 大浴場の写真", "Geihoku Oak Garden bath photo", "https://onsen.nifty.com/geihoku-onsen/onsen003775/", 'ニフティ温泉'),
  "アザレア千代田 大浴場": sourcePhoto("kitahiroshima-onsen-azalea.jpg", "アザレア千代田 大浴場の写真", "Azalea Chiyoda bath photo", "https://onsen.nifty.com/geihoku-onsen/onsen019410/", 'ニフティ温泉'),
  "八幡湿原": sourcePhoto("kitahiroshima-yawata-shitsugen.jpg", "八幡湿原", "Yawata Wetland", "https://dive-hiroshima.com/explore/1637/", 'Dive! Hiroshima'),
  "雲月山": sourcePhoto("kitahiroshima-ungezan.jpg", "雲月山", "Mt. Ungetsu", "https://dive-hiroshima.com/explore/1638/", 'Dive! Hiroshima'),
  "聖湖": sourcePhoto("kitahiroshima-hijiriko.jpg", "聖湖", "Lake Hijiri", "https://dive-hiroshima.com/explore/199/", 'Dive! Hiroshima'),
  "龍頭山": sourcePhoto("kitahiroshima-ryuzusan.jpg", "龍頭山", "Mt. Ryuzu", "https://dive-hiroshima.com/explore/1654/", 'Dive! Hiroshima'),
  "壬生の花田植": wikiPhoto(
  "kitahiroshima-mibu-hanadaue.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMibu-hanadaue01.JPG",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "Kuma83", "https://commons.wikimedia.org/wiki/File%3AMibu-hanadaue01.JPG", "2010",
  "壬生の花田植", "Mibu no Hana Taue"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: KITAHIROSHIMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・Commons・Dive! Hiroshima・公式・ニフティ温泉掲載情報', accessed: KITAHIROSHIMA.sources.accessed};
}

export const KITAHIROSHIMA_FACILITIES: readonly FacilityRow[] = [
  sight("kitahiroshima-sight-01", "八幡湿原", "広島県山県郡北広島町東八幡原", "080-6339-2136", "https://dive-hiroshima.com/explore/1637/", 34.7084387, 132.1882356),
  sight("kitahiroshima-sight-02", "雲月山", "広島県山県郡北広島町土橋", "080-6339-2136", "https://dive-hiroshima.com/explore/1638/", 34.802133, 132.238703),
  sight("kitahiroshima-sight-03", "聖湖", "広島県山県郡北広島町西八幡原10870-4", "080-6339-2136", "https://dive-hiroshima.com/explore/199/", 34.66402517, 132.17108),
  sight("kitahiroshima-sight-04", "龍頭山", "広島県山県郡北広島町都志見", "0826-72-6908", "https://dive-hiroshima.com/explore/1654/", 34.662516, 132.420767),
  sight("kitahiroshima-sight-05", "壬生の花田植", "広島県山県郡北広島町壬生", "0826-72-6908", "https://commons.wikimedia.org/wiki/File:Mibu-hanadaue01.JPG", 34.6884019, 132.5436057),
  sight("kitahiroshima-onsen-01", "広島北ホテル 大浴場", "広島県山県郡北広島町南方3659", "0826-73-0011", "http://h-kitahotel.jp/spa.html", null, null),
  sight("kitahiroshima-onsen-02", "芸北オークガーデン 大浴場", "広島県山県郡北広島町細見10145-104", "0826-35-1230", "https://onsen.nifty.com/geihoku-onsen/onsen003775/", null, null),
  sight("kitahiroshima-onsen-03", "アザレア千代田 大浴場", "広島県山県郡北広島町壬生550", "0826-72-7500", "https://onsen.nifty.com/geihoku-onsen/onsen019410/", null, null),
];
