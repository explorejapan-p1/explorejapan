/**
 * Kurashiki City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-11). JIS 33202. Second Okayama hub (倉敷市).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KURASHIKI = {
  nameJa: '倉敷市',
  nameEn: 'Kurashiki',
  reading: 'くらしきし',
  prefectureJa: '岡山県',
  prefectureEn: 'Okayama',
  prefectureSlug: 'okayama',
  slug: 'kurashiki',
  jis: '33202',
  jlis: '332020',
  sameAs: 'https://www.city.kurashiki.okayama.jp/',
  hall: {
    postalCode: '710-8565',
    addressJa: '岡山県倉敷市西中新田640',
    addressEn: '640 Nishinakashinden, Kurashiki City, Okayama 710-8565, Japan',
    phone: '086-426-3030'
  },
  sources: {
    home: 'https://www.city.kurashiki.okayama.jp/',
    hall: 'https://www.city.kurashiki.okayama.jp/cityinfo/facility/1000105/1008257.html',
    kanko: 'https://www.kurashiki-tabi.jp/',
    bikan: 'https://commons.wikimedia.org/wiki/File:Kurashiki_Bikan_historical_quarter_20190324-3.jpg',
    tabelogCity: 'https://tabelog.com/okayama/C33202/rstLst/',
    accessed: '2026-09-11'
  }
} as const;

export const KURASHIKI_EXPECTED_ROW_COUNT = 7;
export const KURASHIKI_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-11', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-11', altJa, altEn};
}

/** Cover: Kurashiki Bikan. Hero title remains municipality name only. Unique (no wakimachi / no okayama-castle reuse). */
export const KURASHIKI_PLACE_PHOTO = wikiPhoto(
  "kurashiki-bikan.jpg",
  "https://commons.wikimedia.org/wiki/File:Kurashiki_Bikan_historical_quarter_20190324-3.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Suicasmo", "https://commons.wikimedia.org/wiki/User:Suicasmo", "2019-03-24",
  "倉敷美観地区", "Kurashiki Bikan historical quarter"
);

export const KURASHIKI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "倉敷美観地区": wikiPhoto(
  "kurashiki-bikan.jpg",
  "https://commons.wikimedia.org/wiki/File:Kurashiki_Bikan_historical_quarter_20190324-3.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Suicasmo", "https://commons.wikimedia.org/wiki/User:Suicasmo", "2019-03-24",
  "倉敷美観地区", "Kurashiki Bikan historical quarter"
),
  "大原美術館": wikiPhoto(
  "kurashiki-ohara.jpg",
  "https://commons.wikimedia.org/wiki/File:Kurashiki_Ohara_Art_Museum02nt3200.jpg",
  "CC BY 2.5", "https://creativecommons.org/licenses/by/2.5",
  "663highland", "https://commons.wikimedia.org/wiki/User:663highland", "2008-07-27",
  "大原美術館", "Ohara Museum of Art"
),
  "倉敷市役所": wikiPhoto(
  "kurashiki-cityhall.jpg",
  "https://commons.wikimedia.org/wiki/File:Main_building_of_Kurashiki_city_office.JPG",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "tatushin", "https://commons.wikimedia.org/wiki/File:Main_building_of_Kurashiki_city_office.JPG", "2005-11-12",
  "倉敷市役所", "Kurashiki City Hall"
),
  "倉敷アイビースクエア": wikiPhoto(
  "kurashiki-ivy.jpg",
  "https://commons.wikimedia.org/wiki/File:Kurashiki_Ivy_Square_01.jpg",
  "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0",
  "ノボホショコロトソ", "https://commons.wikimedia.org/wiki/File:Kurashiki_Ivy_Square_01.jpg", "2024-09-23",
  "倉敷アイビースクエア", "Kurashiki Ivy Square"
),
  "瀬戸大橋（鷲羽山）": wikiPhoto(
  "kurashiki-seto-ohashi.jpg",
  "https://commons.wikimedia.org/wiki/File:%E5%80%89%E6%95%B7%E5%B8%82%E5%85%90%E5%B3%B6_%E7%80%AC%E6%88%B8%E5%A4%A7%E6%A9%8B_%EF%BC%88%E9%B7%B2%E7%BE%BD%E5%B1%B1%E3%83%8F%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89%EF%BC%89_-_panoramio.jpg",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Yoshio Kohara", "https://commons.wikimedia.org/wiki/File:%E5%80%89%E6%95%B7%E5%B8%82%E5%85%90%E5%B3%B6_%E7%80%AC%E6%88%B8%E5%A4%A7%E6%A9%8B_%EF%BC%88%E9%B7%B2%E7%BE%BD%E5%B1%B1%E3%83%8F%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89%EF%BC%89_-_panoramio.jpg", "Taken on 1",
  "瀬戸大橋（鷲羽山）", "Seto Ohashi from Washuzan"
),
  "ステーキのどん 倉敷店": sourcePhoto("kurashiki-33001088-dish.jpg", "ステーキのどん 倉敷店の料理写真", "ステーキのどん 倉敷店 food photo", "https://tabelog.com/okayama/A3302/A330201/33001088/", '食べログ'),
  "倉敷個室居酒屋 藤と川蝉": sourcePhoto("kurashiki-33006578-dish.jpg", "倉敷個室居酒屋 藤と川蝉の料理写真", "倉敷個室居酒屋 藤と川蝉 food photo", "https://tabelog.com/okayama/A3302/A330201/33006578/", '食べログ'),
  "九州個室酒場 ザ･ゴエモン 倉敷駅前店": sourcePhoto("kurashiki-33019513-dish.jpg", "九州個室酒場 ザ･ゴエモン 倉敷駅前店の料理写真", "九州個室酒場 ザ･ゴエモン 倉敷駅前店 food photo", "https://tabelog.com/okayama/A3302/A330201/33019513/", '食べログ'),
  "地鶏と魚と個室 ふじ子 倉敷駅前店": sourcePhoto("kurashiki-33020701-dish.jpg", "地鶏と魚と個室 ふじ子 倉敷駅前店の料理写真", "地鶏と魚と個室 ふじ子 倉敷駅前店 food photo", "https://tabelog.com/okayama/A3302/A330201/33020701/", '食べログ'),
  "個室居酒屋 囲": sourcePhoto("kurashiki-33015793-dish.jpg", "個室居酒屋 囲の料理写真", "個室居酒屋 囲 food photo", "https://tabelog.com/okayama/A3302/A330201/33015793/", '食べログ'),
  "炭火ビストロみとら": sourcePhoto("kurashiki-33022016-dish.jpg", "炭火ビストロみとらの料理写真", "炭火ビストロみとら food photo", "https://tabelog.com/okayama/A3302/A330201/33022016/", '食べログ'),
  "赤から 倉敷堀南店": sourcePhoto("kurashiki-33014061-dish.jpg", "赤から 倉敷堀南店の料理写真", "赤から 倉敷堀南店 food photo", "https://tabelog.com/okayama/A3302/A330201/33014061/", '食べログ'),
  "又一別館": sourcePhoto("kurashiki-33002185-dish.jpg", "又一別館の料理写真", "又一別館 food photo", "https://tabelog.com/okayama/A3302/A330201/33002185/", '食べログ'),
  "自家製蕎麦 武野屋 中庄店": sourcePhoto("kurashiki-33015960-dish.jpg", "自家製蕎麦 武野屋 中庄店の料理写真", "自家製蕎麦 武野屋 中庄店 food photo", "https://tabelog.com/okayama/A3302/A330201/33015960/", '食べログ'),
  "や台ずし 倉敷駅前町2号店": sourcePhoto("kurashiki-33019400-dish.jpg", "や台ずし 倉敷駅前町2号店の料理写真", "や台ずし 倉敷駅前町2号店 food photo", "https://tabelog.com/okayama/A3302/A330201/33019400/", '食べログ'),
  "個室居酒屋 笑衛門 倉敷駅前店": sourcePhoto("kurashiki-33014424-dish.jpg", "個室居酒屋 笑衛門 倉敷駅前店の料理写真", "個室居酒屋 笑衛門 倉敷駅前店 food photo", "https://tabelog.com/okayama/A3302/A330201/33014424/", '食べログ'),
  "炭焼酒場 一夜": sourcePhoto("kurashiki-33019832-dish.jpg", "炭焼酒場 一夜の料理写真", "炭焼酒場 一夜 food photo", "https://tabelog.com/okayama/A3302/A330201/33019832/", '食べログ'),
  "古民家バル旧本藤邸": sourcePhoto("kurashiki-33012046-dish.jpg", "古民家バル旧本藤邸の料理写真", "古民家バル旧本藤邸 food photo", "https://tabelog.com/okayama/A3302/A330201/33012046/", '食べログ'),
  "うどんとお酒と彩り siki": sourcePhoto("kurashiki-33021628-dish.jpg", "うどんとお酒と彩り sikiの料理写真", "うどんとお酒と彩り siki food photo", "https://tabelog.com/okayama/A3302/A330201/33021628/", '食べログ'),
  "そじ坊 倉敷イオンモール店": sourcePhoto("kurashiki-33006156-dish.jpg", "そじ坊 倉敷イオンモール店の料理写真", "そじ坊 倉敷イオンモール店 food photo", "https://tabelog.com/okayama/A3302/A330201/33006156/", '食べログ'),
  "吾照里 倉敷店": sourcePhoto("kurashiki-33021275-dish.jpg", "吾照里 倉敷店の料理写真", "吾照里 倉敷店 food photo", "https://tabelog.com/okayama/A3302/A330201/33021275/", '食べログ'),
  "天然温泉　阿智の湯　ドーミーイン倉敷": sourcePhoto("kurashiki-stay-h72042.jpg", "天然温泉　阿智の湯　ドーミーイン倉敷の客室写真", "天然温泉　阿智の湯　ドーミーイン倉敷 room photo", "https://travel.rakuten.co.jp/HOTEL/72042/72042.html", '楽天トラベル'),
  "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島": sourcePhoto("kurashiki-stay-h80773.jpg", "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島の客室写真", "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島 room photo", "https://travel.rakuten.co.jp/HOTEL/80773/80773.html", '楽天トラベル'),
  "グリーンリッチホテル倉敷駅前　人工温泉・二股湯の華": sourcePhoto("kurashiki-stay-h177110.jpg", "グリーンリッチホテル倉敷駅前　人工温泉・二股湯の華の客室写真", "グリーンリッチホテル倉敷駅前　人工温泉・二股湯の華 room photo", "https://travel.rakuten.co.jp/HOTEL/177110/177110.html", '楽天トラベル'),
  "鷲羽温泉　鷲羽グランドホテル　備前屋甲子": sourcePhoto("kurashiki-stay-h4722.jpg", "鷲羽温泉　鷲羽グランドホテル　備前屋甲子の客室写真", "鷲羽温泉　鷲羽グランドホテル　備前屋甲子 room photo", "https://travel.rakuten.co.jp/HOTEL/4722/4722.html", '楽天トラベル'),
  "倉敷由加温泉ホテル　山桃花": sourcePhoto("kurashiki-stay-h7135.jpg", "倉敷由加温泉ホテル　山桃花の客室写真", "倉敷由加温泉ホテル　山桃花 room photo", "https://travel.rakuten.co.jp/HOTEL/7135/7135.html", '楽天トラベル'),
  "センチュリオンホテル＆スパ倉敷": sourcePhoto("kurashiki-stay-h162970.jpg", "センチュリオンホテル＆スパ倉敷の客室写真", "センチュリオンホテル＆スパ倉敷 room photo", "https://travel.rakuten.co.jp/HOTEL/162970/162970.html", '楽天トラベル'),
  "アパホテル〈倉敷駅前〉": sourcePhoto("kurashiki-stay-h75332.jpg", "アパホテル〈倉敷駅前〉の客室写真", "アパホテル〈倉敷駅前〉 room photo", "https://travel.rakuten.co.jp/HOTEL/75332/75332.html", '楽天トラベル'),
  "倉敷国際ホテル": sourcePhoto("kurashiki-stay-h7584.jpg", "倉敷国際ホテルの客室写真", "倉敷国際ホテル room photo", "https://travel.rakuten.co.jp/HOTEL/7584/7584.html", '楽天トラベル'),
  "倉敷ロイヤルアートホテル": sourcePhoto("kurashiki-stay-h147499.jpg", "倉敷ロイヤルアートホテルの客室写真", "倉敷ロイヤルアートホテル room photo", "https://travel.rakuten.co.jp/HOTEL/147499/147499.html", '楽天トラベル'),
  "天然温泉　阿智の湯　ドーミーイン倉敷 大浴場": sourcePhoto("kurashiki-onsen-h72042.jpg", "天然温泉　阿智の湯　ドーミーイン倉敷 大浴場の写真", "天然温泉　阿智の湯　ドーミーイン倉敷 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/72042/gallery.html", '楽天トラベル'),
  "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島 大浴場": sourcePhoto("kurashiki-onsen-h80773.jpg", "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島 大浴場の写真", "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/80773/gallery.html", '楽天トラベル'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: KURASHIKI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光・Commons・楽天掲載情報', accessed: KURASHIKI.sources.accessed};
}

export const KURASHIKI_FACILITIES: readonly FacilityRow[] = [
  sight("kurashiki-sight-01", "倉敷美観地区", "岡山県倉敷市中央1丁目周辺", null, "https://commons.wikimedia.org/wiki/File:Kurashiki_Bikan_historical_quarter_20190324-3.jpg", 34.5958, 133.7717),
  sight("kurashiki-sight-02", "大原美術館", "岡山県倉敷市中央1-1-15", null, "https://commons.wikimedia.org/wiki/File:Kurashiki_Ohara_Art_Museum02nt3200.jpg", 34.596, 133.7728),
  sight("kurashiki-sight-03", "倉敷市役所", "岡山県倉敷市西中新田640", null, "https://commons.wikimedia.org/wiki/File:Main_building_of_Kurashiki_city_office.JPG", 34.5851, 133.7722),
  sight("kurashiki-sight-04", "倉敷アイビースクエア", "岡山県倉敷市本町7-2", null, "https://commons.wikimedia.org/wiki/File:Kurashiki_Ivy_Square_01.jpg", 34.5945, 133.7698),
  sight("kurashiki-sight-05", "瀬戸大橋（鷲羽山）", "岡山県倉敷市下津井吹上", null, "https://commons.wikimedia.org/wiki/File:%E5%80%89%E6%95%B7%E5%B8%82%E5%85%90%E5%B3%B6_%E7%80%AC%E6%88%B8%E5%A4%A7%E6%A9%8B_%EF%BC%88%E9%B7%B2%E7%BE%BD%E5%B1%B1%E3%83%8F%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89%EF%BC%89_-_panoramio.jpg", 34.4375, 133.8125),
  sight("kurashiki-onsen-01", "天然温泉　阿智の湯　ドーミーイン倉敷 大浴場", "岡山県倉敷市阿知3-21-11", null, "https://travel.rakuten.co.jp/HOTEL/72042/gallery.html", null, null),
  sight("kurashiki-onsen-02", "天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島 大浴場", "岡山県倉敷市水島西栄町10-8", null, "https://travel.rakuten.co.jp/HOTEL/80773/gallery.html", null, null),
];
