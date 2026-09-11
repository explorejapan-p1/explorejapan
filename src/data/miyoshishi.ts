/**
 * Miyoshi City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34209. Eighth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市.
 * CRITICAL: slug miyoshishi = 三次市・広島県 (NOT Tokushima 三好市 miyoshi ReadySlug).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MIYOSHISHI = {
  nameJa: '三次市',
  nameEn: 'Miyoshi',
  reading: 'みよしし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'miyoshishi',
  jis: '34209',
  jlis: '342090',
  sameAs: 'https://www.city.miyoshi.hiroshima.jp/',
  hall: {
    postalCode: '728-8501',
    addressJa: '広島県三次市十日市中二丁目8番1号',
    addressEn: '8-1 Tokaichi-naka 2-chome, Miyoshi City, Hiroshima 728-8501, Japan',
    phone: '0824-62-6111'
  },
  sources: {
    home: 'https://www.city.miyoshi.hiroshima.jp/',
    hall: 'https://www.city.miyoshi.hiroshima.jp/',
    kanko: 'https://www.miyoshi-dmo.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34209/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const MIYOSHISHI_EXPECTED_ROW_COUNT = 7;
export const MIYOSHISHI_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 高谷山の霧の海. Hero title remains municipality name only. Unique (no wakimachi). */
export const MIYOSHISHI_PLACE_PHOTO = wikiPhoto(
  "miyoshishi-cover-mist.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMorning_Mist_Miyoshi.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "Ozizo", "https://commons.wikimedia.org/wiki/File%3AMorning_Mist_Miyoshi.jpg", "2009",
  "高谷山から望む三次の霧の海", "Sea of clouds over Miyoshi from Mt. Takaya"
);

export const MIYOSHISHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "三代目網元 魚鮮水産 三次駅前店": sourcePhoto("miyoshishi-34021761-dish.jpg", "三代目網元 魚鮮水産 三次駅前店の料理写真", "三代目網元 魚鮮水産 三次駅前店 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34021761/", '食べログ'),
  "HIROSHIMA NOH BEER こっちゃん所": sourcePhoto("miyoshishi-34031586-dish.jpg", "HIROSHIMA NOH BEER こっちゃん所の料理写真", "HIROSHIMA NOH BEER こっちゃん所 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34031586/", '食べログ'),
  "Mirasaka Trevis": sourcePhoto("miyoshishi-34031508-dish.jpg", "Mirasaka Trevisの料理写真", "Mirasaka Trevis food photo", "https://tabelog.com/hiroshima/A3405/A340501/34031508/", '食べログ'),
  "たむ商店 三次駅前店": sourcePhoto("miyoshishi-34021107-dish.jpg", "たむ商店 三次駅前店の料理写真", "たむ商店 三次駅前店 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34021107/", '食べログ'),
  "じゃ軒": sourcePhoto("miyoshishi-34011829-dish.jpg", "じゃ軒の料理写真", "じゃ軒 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34011829/", '食べログ'),
  "広島三次ワイナリー  バーベキューガーデン": sourcePhoto("miyoshishi-34019006-dish.jpg", "広島三次ワイナリー  バーベキューガーデンの料理写真", "広島三次ワイナリー  バーベキューガーデン food photo", "https://tabelog.com/hiroshima/A3405/A340501/34019006/", '食べログ'),
  "とんかつ和佳葉": sourcePhoto("miyoshishi-34006763-dish.jpg", "とんかつ和佳葉の料理写真", "とんかつ和佳葉 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34006763/", '食べログ'),
  "遊": sourcePhoto("miyoshishi-34006411-dish.jpg", "遊の料理写真", "遊 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34006411/", '食べログ'),
  "鳥小屋": sourcePhoto("miyoshishi-34006338-dish.jpg", "鳥小屋の料理写真", "鳥小屋 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34006338/", '食べログ'),
  "とん平食堂": sourcePhoto("miyoshishi-34008372-dish.jpg", "とん平食堂の料理写真", "とん平食堂 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34008372/", '食べログ'),
  "長浜ラーメン博多屋 三次店": sourcePhoto("miyoshishi-34011304-dish.jpg", "長浜ラーメン博多屋 三次店の料理写真", "長浜ラーメン博多屋 三次店 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34011304/", '食べログ'),
  "CALM": sourcePhoto("miyoshishi-34033690-dish.jpg", "CALMの料理写真", "CALM food photo", "https://tabelog.com/hiroshima/A3405/A340501/34033690/", '食べログ'),
  "真人鉄焼酒家": sourcePhoto("miyoshishi-34004363-dish.jpg", "真人鉄焼酒家の料理写真", "真人鉄焼酒家 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34004363/", '食べログ'),
  "カフェ ノエル": sourcePhoto("miyoshishi-34020134-dish.jpg", "カフェ ノエルの料理写真", "カフェ ノエル food photo", "https://tabelog.com/hiroshima/A3405/A340501/34020134/", '食べログ'),
  "夢工房　ねむの木": sourcePhoto("miyoshishi-34014918-dish.jpg", "夢工房　ねむの木の料理写真", "夢工房　ねむの木 food photo", "https://tabelog.com/hiroshima/A3405/A340501/34014918/", '食べログ'),
  "グリーン麦麦 トレッタみよし": sourcePhoto("miyoshishi-34020718-dish.jpg", "グリーン麦麦 トレッタみよしの料理写真", "グリーン麦麦 トレッタみよし food photo", "https://tabelog.com/hiroshima/A3405/A340501/34020718/", '食べログ'),
  "ホテルルートイン三次駅前": sourcePhoto("miyoshishi-stay-h187288.jpg", "ホテルルートイン三次駅前の客室写真", "ホテルルートイン三次駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/187288/187288.html", '楽天トラベル'),
  "三次グランドホテル": sourcePhoto("miyoshishi-stay-h1629.jpg", "三次グランドホテルの客室写真", "三次グランドホテル room photo", "https://travel.rakuten.co.jp/HOTEL/1629/1629.html", '楽天トラベル'),
  "ホテルアルファーワン三次": sourcePhoto("miyoshishi-stay-h15881.jpg", "ホテルアルファーワン三次の客室写真", "ホテルアルファーワン三次 room photo", "https://travel.rakuten.co.jp/HOTEL/15881/15881.html", '楽天トラベル'),
  "備長炭の湯　ホテルクラウンヒルズ三次": sourcePhoto("miyoshishi-stay-h38563.jpg", "備長炭の湯　ホテルクラウンヒルズ三次の客室写真", "備長炭の湯　ホテルクラウンヒルズ三次 room photo", "https://travel.rakuten.co.jp/HOTEL/38563/38563.html", '楽天トラベル'),
  "ビジネスホテル白鳥荘": sourcePhoto("miyoshishi-stay-h153323.jpg", "ビジネスホテル白鳥荘の客室写真", "ビジネスホテル白鳥荘 room photo", "https://travel.rakuten.co.jp/HOTEL/153323/153323.html", '楽天トラベル'),
  "田舎宿　風の道": sourcePhoto("miyoshishi-stay-h134794.jpg", "田舎宿　風の道の客室写真", "田舎宿　風の道 room photo", "https://travel.rakuten.co.jp/HOTEL/134794/134794.html", '楽天トラベル'),
  "Ｔａｂｉｓｔ　ライカ　広島三次": sourcePhoto("miyoshishi-stay-h179863.jpg", "Ｔａｂｉｓｔ　ライカ　広島三次の客室写真", "Ｔａｂｉｓｔ　ライカ　広島三次 room photo", "https://travel.rakuten.co.jp/HOTEL/179863/179863.html", '楽天トラベル'),
  "ホテルルートイン三次駅前 男性大浴場": sourcePhoto("miyoshishi-onsen-h187288.jpg", "ホテルルートイン三次駅前 男性大浴場の写真", "ホテルルートイン三次駅前 男性大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/187288/gallery.html", '楽天トラベル'),
  "備長炭の湯　ホテルクラウンヒルズ三次 大浴場": sourcePhoto("miyoshishi-onsen-h38563.jpg", "備長炭の湯　ホテルクラウンヒルズ三次 大浴場の写真", "備長炭の湯　ホテルクラウンヒルズ三次 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/38563/gallery.html", '楽天トラベル'),
  "高谷山": wikiPhoto(
  "miyoshishi-cover-mist.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMorning_Mist_Miyoshi.jpg",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "Ozizo", "https://commons.wikimedia.org/wiki/File%3AMorning_Mist_Miyoshi.jpg", "2009",
  "高谷山から望む霧の海", "Sea of clouds from Mt. Takaya"
),
  "三次もののけミュージアム": wikiPhoto(
  "miyoshishi-mononoke.jpg",
  "https://commons.wikimedia.org/wiki/File%3A8620_48650_at_Miyoshi_Mononoke_Museum.jpg",
  "CC0", "http://creativecommons.org/publicdomain/zero/1.0/",
  "Saigen Jiro", "https://commons.wikimedia.org/wiki/File%3A8620_48650_at_Miyoshi_Mononoke_Museum.jpg", "2019",
  "三次もののけミュージアム", "Miyoshi Mononoke Museum"
),
  "広島三次ワイナリー": wikiPhoto(
  "miyoshishi-winery.jpg",
  "https://commons.wikimedia.org/wiki/File%3AHIROSHIMA_MIYOSHI_WINERY.jpg",
  "CC0", "http://creativecommons.org/publicdomain/zero/1.0/",
  "Gungun01", "https://commons.wikimedia.org/wiki/File%3AHIROSHIMA_MIYOSHI_WINERY.jpg", "2024",
  "広島三次ワイナリー", "Hiroshima Miyoshi Winery"
),
  "尾関山公園": wikiPhoto(
  "miyoshishi-ozekiyama.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E5%B0%BE%E9%96%A2%E5%B1%B1_Mt.Ozekiyama_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E5%B0%BE%E9%96%A2%E5%B1%B1_Mt.Ozekiyama_-_panoramio.jpg", "2010",
  "尾関山公園", "Ozekiyama Park"
),
  "三次駅": wikiPhoto(
  "miyoshishi-station.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMiyoshi_Station_%28Hiroshima%29%2C_ekisha.jpg",
  "CC0", "http://creativecommons.org/publicdomain/zero/1.0/",
  "Saigen Jiro", "https://commons.wikimedia.org/wiki/File%3AMiyoshi_Station_%28Hiroshima%29%2C_ekisha.jpg", "2024",
  "三次駅", "Miyoshi Station (Hiroshima)"
),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: MIYOSHISHI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: MIYOSHISHI.sources.accessed};
}

export const MIYOSHISHI_FACILITIES: readonly FacilityRow[] = [
  sight("miyoshishi-sight-01", "高谷山", "広島県三次市粟屋町", null, "https://commons.wikimedia.org/wiki/File%3AMorning_Mist_Miyoshi.jpg", 34.7942108, 132.8205083),
  sight("miyoshishi-sight-02", "三次もののけミュージアム", "広島県三次市三次町1691番地4", null, "https://commons.wikimedia.org/wiki/File%3A8620_48650_at_Miyoshi_Mononoke_Museum.jpg", 34.81515, 132.8447298),
  sight("miyoshishi-sight-03", "広島三次ワイナリー", "広島県三次市東酒屋町10445-3", null, "https://commons.wikimedia.org/wiki/File%3AHIROSHIMA_MIYOSHI_WINERY.jpg", 34.7777718, 132.8666491),
  sight("miyoshishi-sight-04", "尾関山公園", "広島県三次市三次町439番地3", null, "https://commons.wikimedia.org/wiki/File%3A%E5%B0%BE%E9%96%A2%E5%B1%B1_Mt.Ozekiyama_-_panoramio.jpg", 34.8147321, 132.8391526),
  sight("miyoshishi-sight-05", "三次駅", "広島県三次市十日市南一丁目1番1号", null, "https://commons.wikimedia.org/wiki/File%3AMiyoshi_Station_%28Hiroshima%29%2C_ekisha.jpg", 34.8028431, 132.8559951),
  sight("miyoshishi-onsen-01", "ホテルルートイン三次駅前 男性大浴場", "広島県三次市十日市南1-5-5", "050-5211-5820", "https://travel.rakuten.co.jp/HOTEL/187288/gallery.html", null, null),
  sight("miyoshishi-onsen-02", "備長炭の湯　ホテルクラウンヒルズ三次 大浴場", "広島県三次市十日市東6-13-25", "050-1807-0109", "https://travel.rakuten.co.jp/HOTEL/38563/gallery.html", null, null),
];
