/**
 * Etajima City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34215. Fourteenth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市・東広島市・廿日市・安芸高田市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const ETAJIMA = {
  nameJa: '江田島市',
  nameEn: 'Etajima',
  reading: 'えたじまし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'etajima',
  jis: '34215',
  jlis: '342150',
  sameAs: 'https://www.city.etajima.hiroshima.jp/cms/',
  hall: {
    postalCode: '737-2297',
    addressJa: '広島県江田島市大柿町大原505番地',
    addressEn: '505 Ohara, Ogaki-cho, Etajima City, Hiroshima 737-2297, Japan',
    phone: '0823-43-1111'
  },
  sources: {
    home: 'https://www.city.etajima.hiroshima.jp/cms/',
    hall: 'https://www.city.etajima.hiroshima.jp/cms/',
    kanko: 'https://www.city.etajima.hiroshima.jp/cms/categories/articles/134',
    tabelogCity: 'https://tabelog.com/hiroshima/C34215/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const ETAJIMA_EXPECTED_ROW_COUNT = 10;
export const ETAJIMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 江田島島景観. Hero title remains municipality name only. Unique (no wakimachi). */
export const ETAJIMA_PLACE_PHOTO = wikiPhoto(
  "etajima-cover-island.jpg",
  "https://commons.wikimedia.org/wiki/File%3AEtajima_Island._-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "柳田亮", "https://commons.wikimedia.org/wiki/File%3AEtajima_Island._-_panoramio.jpg", "2013",
  "江田島の島景観", "Etajima island landscape"
);

export const ETAJIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "寿司 生簀料理　割烹 大学": sourcePhoto("etajima-34010624-dish.jpg", "寿司 生簀料理　割烹 大学の料理写真", "寿司 生簀料理　割烹 大学 food photo", "https://tabelog.com/hiroshima/A3404/A340405/34010624/", '食べログ'),
  "四季の味 ひらの": sourcePhoto("etajima-34010643-dish.jpg", "四季の味 ひらのの料理写真", "四季の味 ひらの food photo", "https://tabelog.com/hiroshima/A3404/A340405/34010643/", '食べログ'),
  "デザートパーラー　アルパティオ": sourcePhoto("etajima-34029971-dish.jpg", "デザートパーラー　アルパティオの料理写真", "デザートパーラー　アルパティオ food photo", "https://tabelog.com/hiroshima/A3404/A340405/34029971/", '食べログ'),
  "居酒屋 さかずき": sourcePhoto("etajima-34019904-dish.jpg", "居酒屋 さかずきの料理写真", "居酒屋 さかずき food photo", "https://tabelog.com/hiroshima/A3404/A340405/34019904/", '食べログ'),
  "和伊菜 灯": sourcePhoto("etajima-34030548-dish.jpg", "和伊菜 灯の料理写真", "和伊菜 灯 food photo", "https://tabelog.com/hiroshima/A3404/A340405/34030548/", '食べログ'),
  "locavore": sourcePhoto("etajima-34030798-dish.jpg", "locavoreの料理写真", "locavore food photo", "https://tabelog.com/hiroshima/A3404/A340405/34030798/", '食べログ'),
  "お好み焼き 大吉": sourcePhoto("etajima-34030134-dish.jpg", "お好み焼き 大吉の料理写真", "お好み焼き 大吉 food photo", "https://tabelog.com/hiroshima/A3404/A340405/34030134/", '食べログ'),
  "なかねお好み焼店": sourcePhoto("etajima-34010642-dish.jpg", "なかねお好み焼店の料理写真", "なかねお好み焼店 food photo", "https://tabelog.com/hiroshima/A3404/A340405/34010642/", '食べログ'),
  "Cafe Lisboa": sourcePhoto("etajima-34030600-dish.jpg", "Cafe Lisboaの料理写真", "Cafe Lisboa food photo", "https://tabelog.com/hiroshima/A3404/A340405/34030600/", '食べログ'),
  "江田島銘醸株式会社": sourcePhoto("etajima-34024398-dish.jpg", "江田島銘醸株式会社の料理写真", "江田島銘醸株式会社 food photo", "https://tabelog.com/hiroshima/A3404/A340405/34024398/", '食べログ'),
  "エドワーズ ロースタリー カフェ": sourcePhoto("etajima-34026386-dish.jpg", "エドワーズ ロースタリー カフェの料理写真", "エドワーズ ロースタリー カフェ food photo", "https://tabelog.com/hiroshima/A3404/A340405/34026386/", '食べログ'),
  "お好み焼き 鉄板焼き 日和": sourcePhoto("etajima-34010648-dish.jpg", "お好み焼き 鉄板焼き 日和の料理写真", "お好み焼き 鉄板焼き 日和 food photo", "https://tabelog.com/hiroshima/A3404/A340405/34010648/", '食べログ'),
  "さつき荘": sourcePhoto("etajima-34010645-dish.jpg", "さつき荘の料理写真", "さつき荘 food photo", "https://tabelog.com/hiroshima/A3404/A340405/34010645/", '食べログ'),
  "江田島カフェ　ウィングス": sourcePhoto("etajima-34033036-dish.jpg", "江田島カフェ　ウィングスの料理写真", "江田島カフェ　ウィングス food photo", "https://tabelog.com/hiroshima/A3404/A340405/34033036/", '食べログ'),
  "虎八": sourcePhoto("etajima-34033396-dish.jpg", "虎八の料理写真", "虎八 food photo", "https://tabelog.com/hiroshima/A3404/A340405/34033396/", '食べログ'),
  "かなわオイスター": sourcePhoto("etajima-34026619-dish.jpg", "かなわオイスターの料理写真", "かなわオイスター food photo", "https://tabelog.com/hiroshima/A3404/A340405/34026619/", '食べログ'),
  "えたじま温泉　江田島荘": sourcePhoto("etajima-stay-h182130.jpg", "えたじま温泉　江田島荘の客室写真", "えたじま温泉　江田島荘 room photo", "https://travel.rakuten.co.jp/HOTEL/182130/182130.html", '楽天トラベル'),
  "ＡＫＩＺＵＫＩ": sourcePhoto("etajima-stay-h193279.jpg", "ＡＫＩＺＵＫＩの客室写真", "ＡＫＩＺＵＫＩ room photo", "https://travel.rakuten.co.jp/HOTEL/193279/193279.html", '楽天トラベル'),
  "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩ": sourcePhoto("etajima-stay-h197168.jpg", "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩの客室写真", "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩ room photo", "https://travel.rakuten.co.jp/HOTEL/197168/197168.html", '楽天トラベル'),
  "江田島宿り　ＮＯＲＡ": sourcePhoto("etajima-stay-h197675.jpg", "江田島宿り　ＮＯＲＡの客室写真", "江田島宿り　ＮＯＲＡ room photo", "https://travel.rakuten.co.jp/HOTEL/197675/197675.html", '楽天トラベル'),
  "ＮＯＲＡ": sourcePhoto("etajima-stay-h193139.jpg", "ＮＯＲＡの客室写真", "ＮＯＲＡ room photo", "https://travel.rakuten.co.jp/HOTEL/193139/193139.html", '楽天トラベル'),
  "島のいえ　和心／民泊": sourcePhoto("etajima-stay-h200630.jpg", "島のいえ　和心／民泊の客室写真", "島のいえ　和心／民泊 room photo", "https://travel.rakuten.co.jp/HOTEL/200630/200630.html", '楽天トラベル'),
  "えたじま温泉　江田島荘 源泉かけ流し「ぬる湯」": sourcePhoto("etajima-onsen-h182130.jpg", "えたじま温泉　江田島荘 源泉かけ流し「ぬる湯」の写真", "えたじま温泉　江田島荘 源泉かけ流し「ぬる湯」 bath photo", "https://travel.rakuten.co.jp/HOTEL/182130/gallery.html", '楽天トラベル'),
  "ＡＫＩＺＵＫＩ 風呂": sourcePhoto("etajima-onsen-h193279.jpg", "ＡＫＩＺＵＫＩ 風呂の写真", "ＡＫＩＺＵＫＩ 風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/193279/gallery.html", '楽天トラベル'),
  "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩ A棟風呂": sourcePhoto("etajima-onsen-h197168.jpg", "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩ A棟風呂の写真", "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩ A棟風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/197168/gallery.html", '楽天トラベル'),
  "江田島宿り　ＮＯＲＡ 浴室": sourcePhoto("etajima-onsen-h197675.jpg", "江田島宿り　ＮＯＲＡ 浴室の写真", "江田島宿り　ＮＯＲＡ 浴室 bath photo", "https://travel.rakuten.co.jp/HOTEL/197675/gallery.html", '楽天トラベル'),
  "ＮＯＲＡ 浴室": sourcePhoto("etajima-onsen-h193139.jpg", "ＮＯＲＡ 浴室の写真", "ＮＯＲＡ 浴室 bath photo", "https://travel.rakuten.co.jp/HOTEL/193139/gallery.html", '楽天トラベル'),
  "海上自衛隊第1術科学校（旧海軍兵学校）": wikiPhoto(
  "etajima-1mss.jpg",
  "https://commons.wikimedia.org/wiki/File:%E6%B5%B7%E4%B8%8A%E8%87%AA%E8%A1%9B%E9%9A%8A%E7%AC%AC1%E8%A1%93%E7%A7%91%E5%AD%A6%E6%A0%A1.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "カテキン", "https://commons.wikimedia.org/wiki/File:%E6%B5%B7%E4%B8%8A%E8%87%AA%E8%A1%9B%E9%9A%8A%E7%AC%AC1%E8%A1%93%E7%A7%91%E5%AD%A6%E6%A0%A1.JPG", "2012",
  "海上自衛隊第1術科学校（旧海軍兵学校）", "JMSDF 1st Service School (former Naval Academy)"
),
  "旧海軍兵学校大講堂": wikiPhoto(
  "etajima-auditorium.jpg",
  "https://commons.wikimedia.org/wiki/File:Imperial_Japanese_Naval_Academy_Auditorium.JPG",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "HKT3012", "https://commons.wikimedia.org/wiki/File:Imperial_Japanese_Naval_Academy_Auditorium.JPG", "2018",
  "旧海軍兵学校大講堂", "Former Naval Academy Auditorium"
),
  "教育参考館": wikiPhoto(
  "etajima-kyouiku.jpg",
  "https://commons.wikimedia.org/wiki/File:Kyouikusankoukan001.JPG",
  "Public domain", "https://creativecommons.org/publicdomain/mark/1.0/",
  "Fwn", "https://commons.wikimedia.org/wiki/File:Kyouikusankoukan001.JPG", "2005",
  "教育参考館", "Naval Academy Educational Reference Museum"
),
  "小用港": wikiPhoto(
  "etajima-koyo-port.jpg",
  "https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E7%94%A8%E6%B8%AF_%28%E6%B1%9F%E7%94%B0%E5%B3%B6%E5%B8%82%29.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0",
  "Syced", "https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E7%94%A8%E6%B8%AF_%28%E6%B1%9F%E7%94%B0%E5%B3%B6%E5%B8%82%29.jpg", "2015",
  "小用港", "Koyo Port"
),
  "古鷹山": wikiPhoto(
  "etajima-furutaka.jpg",
  "https://commons.wikimedia.org/wiki/File:Furutaka.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Asasa198", "https://commons.wikimedia.org/wiki/File:Furutaka.JPG", "2010",
  "古鷹山", "Mount Furutaka"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: ETAJIMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: ETAJIMA.sources.accessed};
}

export const ETAJIMA_FACILITIES: readonly FacilityRow[] = [
  sight("etajima-sight-01", "海上自衛隊第1術科学校（旧海軍兵学校）", "広島県江田島市江田島町国有無番地", "0823-42-1211", "https://www.city.etajima.hiroshima.jp/cms/articles/show/809", 34.244417, 132.47225),
  sight("etajima-sight-02", "旧海軍兵学校大講堂", "広島県江田島市江田島町国有無番地", null, "https://commons.wikimedia.org/wiki/File:Imperial_Japanese_Naval_Academy_Auditorium.JPG", 34.2448, 132.4728),
  sight("etajima-sight-03", "教育参考館", "広島県江田島市江田島町国有無番地", null, "https://commons.wikimedia.org/wiki/File:Kyouikusankoukan001.JPG", 34.247102, 132.466818),
  sight("etajima-sight-04", "小用港", "広島県江田島市江田島町小用", null, "https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E7%94%A8%E6%B8%AF_%28%E6%B1%9F%E7%94%B0%E5%B3%B6%E5%B8%82%29.jpg", 34.2476982, 132.4930093),
  sight("etajima-sight-05", "古鷹山", "広島県江田島市江田島町", null, "https://commons.wikimedia.org/wiki/File:Furutaka.JPG", 34.2593942, 132.4747185),
  sight("etajima-onsen-01", "えたじま温泉　江田島荘 源泉かけ流し「ぬる湯」", "広島県江田島市能美町中町4718", "0823-27-7755", "https://travel.rakuten.co.jp/HOTEL/182130/gallery.html", null, null),
  sight("etajima-onsen-02", "ＡＫＩＺＵＫＩ 風呂", "広島県江田島市江田島町秋月2-18-25", "070-8538-6249", "https://travel.rakuten.co.jp/HOTEL/193279/gallery.html", null, null),
  sight("etajima-onsen-03", "ＬＩＦＥＭＥＮＴ　ＧＬＡＮＺ　ＯＫＩＭＩ A棟風呂", "広島県江田島市沖美町是長1570-7", null, "https://travel.rakuten.co.jp/HOTEL/197168/gallery.html", null, null),
  sight("etajima-onsen-04", "江田島宿り　ＮＯＲＡ 浴室", "広島県江田島市能美町中町850-10", "070-4030-0684", "https://travel.rakuten.co.jp/HOTEL/197675/gallery.html", null, null),
  sight("etajima-onsen-05", "ＮＯＲＡ 浴室", "広島県江田島市能美町中町850-10", "090-7127-5119", "https://travel.rakuten.co.jp/HOTEL/193139/gallery.html", null, null),
];
