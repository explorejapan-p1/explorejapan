/**
 * Onomichi City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34205. Fifth Hiroshima hub after 広島市・呉市・竹原市・三原市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const ONOMICHI = {
  nameJa: '尾道市',
  nameEn: 'Onomichi',
  reading: 'おのみち',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'onomichi',
  jis: '34205',
  jlis: '342051',
  sameAs: 'https://www.city.onomichi.hiroshima.jp/',
  hall: {
    postalCode: '722-8501',
    addressJa: '広島県尾道市久保一丁目15番1号',
    addressEn: '1-15-1 Kubo, Onomichi City, Hiroshima 722-8501, Japan',
    phone: '0848-38-9111'
  },
  sources: {
    home: 'https://www.city.onomichi.hiroshima.jp/',
    hall: 'https://www.city.onomichi.hiroshima.jp/soshiki/8/3235.html',
    tabelogCity: 'https://tabelog.com/hiroshima/C34205/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const ONOMICHI_EXPECTED_ROW_COUNT = 11;
export const ONOMICHI_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: view from Senko-ji. Hero title remains municipality name only. */
export const ONOMICHI_PLACE_PHOTO = wikiPhoto(
  "onomichi-cover-senkoji-view.jpg",
  "https://commons.wikimedia.org/wiki/File%3AOnomichi_from_Senko-ji.jpg",
  "CC BY-SA 3.0", "http://creativecommons.org/licenses/by-sa/3.0/",
  "Shinkansen at Japanese Wikipedia", "https://commons.wikimedia.org/wiki/File%3AOnomichi_from_Senko-ji.jpg", "2006",
  "千光寺からの尾道市街", "Onomichi city from Senko-ji"
);

export const ONOMICHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "The RESTAURANT": sourcePhoto("onomichi-34019254-dish.jpg", "The RESTAURANTの料理写真", "The RESTAURANT food photo", "https://tabelog.com/hiroshima/A3406/A340302/34019254/", '食べログ'),
  "廻船酒蔵 ベッチャーの胃ぶくろ": sourcePhoto("onomichi-34001070-dish.jpg", "廻船酒蔵 ベッチャーの胃ぶくろの料理写真", "廻船酒蔵 ベッチャーの胃ぶくろ food photo", "https://tabelog.com/hiroshima/A3406/A340302/34001070/", '食べログ'),
  "尾道WHARF": sourcePhoto("onomichi-34019761-dish.jpg", "尾道WHARFの料理写真", "尾道WHARF food photo", "https://tabelog.com/hiroshima/A3406/A340302/34019761/", '食べログ'),
  "Lock’y": sourcePhoto("onomichi-34034456-dish.jpg", "Lock’yの料理写真", "Lock’y food photo", "https://tabelog.com/hiroshima/A3406/A340302/34034456/", '食べログ'),
  "赤から 東尾道店": sourcePhoto("onomichi-34024631-dish.jpg", "赤から 東尾道店の料理写真", "赤から 東尾道店 food photo", "https://tabelog.com/hiroshima/A3406/A340302/34024631/", '食べログ'),
  "鮨 やくしどう": sourcePhoto("onomichi-34029479-dish.jpg", "鮨 やくしどうの料理写真", "鮨 やくしどう food photo", "https://tabelog.com/hiroshima/A3406/A340302/34029479/", '食べログ'),
  "えひめ屋": sourcePhoto("onomichi-34004710-dish.jpg", "えひめ屋の料理写真", "えひめ屋 food photo", "https://tabelog.com/hiroshima/A3406/A340601/34004710/", '食べログ'),
  "寿乃": sourcePhoto("onomichi-34013021-dish.jpg", "寿乃の料理写真", "寿乃 food photo", "https://tabelog.com/hiroshima/A3406/A340602/34013021/", '食べログ'),
  "HOLLAND VILLAGE CAFÉ ONOMICHI": sourcePhoto("onomichi-34034509-dish.jpg", "HOLLAND VILLAGE CAFÉ ONOMICHIの料理写真", "HOLLAND VILLAGE CAFÉ ONOMICHI food photo", "https://tabelog.com/hiroshima/A3406/A340302/34034509/", '食べログ'),
  "LOG": sourcePhoto("onomichi-34025504-dish.jpg", "LOGの料理写真", "LOG food photo", "https://tabelog.com/hiroshima/A3406/A340302/34025504/", '食べログ'),
  "イタリア料理 コラッジオ": sourcePhoto("onomichi-34002416-dish.jpg", "イタリア料理 コラッジオの料理写真", "イタリア料理 コラッジオ food photo", "https://tabelog.com/hiroshima/A3406/A340302/34002416/", '食べログ'),
  "かき左右衛門": sourcePhoto("onomichi-34015532-dish.jpg", "かき左右衛門の料理写真", "かき左右衛門 food photo", "https://tabelog.com/hiroshima/A3406/A340302/34015532/", '食べログ'),
  "魚民 尾道南口駅前店": sourcePhoto("onomichi-34012131-dish.jpg", "魚民 尾道南口駅前店の料理写真", "魚民 尾道南口駅前店 food photo", "https://tabelog.com/hiroshima/A3406/A340302/34012131/", '食べログ'),
  "やきにく孫悟空 尾道店": sourcePhoto("onomichi-34011708-dish.jpg", "やきにく孫悟空 尾道店の料理写真", "やきにく孫悟空 尾道店 food photo", "https://tabelog.com/hiroshima/A3406/A340302/34011708/", '食べログ'),
  "千年の宴 尾道南口駅前店": sourcePhoto("onomichi-34012134-dish.jpg", "千年の宴 尾道南口駅前店の料理写真", "千年の宴 尾道南口駅前店 food photo", "https://tabelog.com/hiroshima/A3406/A340302/34012134/", '食べログ'),
  "たまがんぞう": sourcePhoto("onomichi-34002428-dish.jpg", "たまがんぞうの料理写真", "たまがんぞう food photo", "https://tabelog.com/hiroshima/A3406/A340302/34002428/", '食べログ'),
  "ホテルアルファーワン尾道": sourcePhoto("onomichi-stay-h15917.jpg", "ホテルアルファーワン尾道の客室写真", "ホテルアルファーワン尾道 room photo", "https://travel.rakuten.co.jp/HOTEL/15917/15917.html", '楽天トラベル'),
  "さくらしまなみホテル尾道駅前": sourcePhoto("onomichi-stay-h182744.jpg", "さくらしまなみホテル尾道駅前の客室写真", "さくらしまなみホテル尾道駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/182744/182744.html", '楽天トラベル'),
  "グリーンヒルホテル尾道": sourcePhoto("onomichi-stay-h783.jpg", "グリーンヒルホテル尾道の客室写真", "グリーンヒルホテル尾道 room photo", "https://travel.rakuten.co.jp/HOTEL/783/783.html", '楽天トラベル'),
  "尾道国際ホテル": sourcePhoto("onomichi-stay-h470.jpg", "尾道国際ホテルの客室写真", "尾道国際ホテル room photo", "https://travel.rakuten.co.jp/HOTEL/470/470.html", '楽天トラベル'),
  "尾道第一ホテル": sourcePhoto("onomichi-stay-h4612.jpg", "尾道第一ホテルの客室写真", "尾道第一ホテル room photo", "https://travel.rakuten.co.jp/HOTEL/4612/4612.html", '楽天トラベル'),
  "尾道ロイヤルホテル": sourcePhoto("onomichi-stay-h4766.jpg", "尾道ロイヤルホテルの客室写真", "尾道ロイヤルホテル room photo", "https://travel.rakuten.co.jp/HOTEL/4766/4766.html", '楽天トラベル'),
  "天然温泉　尾道みなと館": sourcePhoto("onomichi-stay-h153136.jpg", "天然温泉　尾道みなと館の客室写真", "天然温泉　尾道みなと館 room photo", "https://travel.rakuten.co.jp/HOTEL/153136/153136.html", '楽天トラベル'),
  "尾道倶楽部": sourcePhoto("onomichi-stay-h195943.jpg", "尾道倶楽部の客室写真", "尾道倶楽部 room photo", "https://travel.rakuten.co.jp/HOTEL/195943/195943.html", '楽天トラベル'),
  "ＨＯＴＥＬ　ＣＹＣＬＥ（ホテルサイクル）": sourcePhoto("onomichi-stay-h145459.jpg", "ＨＯＴＥＬ　ＣＹＣＬＥ（ホテルサイクル）の客室写真", "ＨＯＴＥＬ　ＣＹＣＬＥ（ホテルサイクル） room photo", "https://travel.rakuten.co.jp/HOTEL/145459/145459.html", '楽天トラベル'),
  "オリエントホテルＯＮＯＭＩＣＨＩ": sourcePhoto("onomichi-stay-h191609.jpg", "オリエントホテルＯＮＯＭＩＣＨＩの客室写真", "オリエントホテルＯＮＯＭＩＣＨＩ room photo", "https://travel.rakuten.co.jp/HOTEL/191609/191609.html", '楽天トラベル'),
  "ＨＯＴＥＬ　ＢＥＡＣＯＮ　ＯＮＯＭＩＣＨＩ（ホテルビーコンおのみち）": sourcePhoto("onomichi-stay-h184027.jpg", "ＨＯＴＥＬ　ＢＥＡＣＯＮ　ＯＮＯＭＩＣＨＩ（ホテルビーコンおのみち）の客室写真", "ＨＯＴＥＬ　ＢＥＡＣＯＮ　ＯＮＯＭＩＣＨＩ（ホテルビーコンおのみち） room photo", "https://travel.rakuten.co.jp/HOTEL/184027/184027.html", '楽天トラベル'),
  "ホテル　いんのしま": sourcePhoto("onomichi-stay-h14705.jpg", "ホテル　いんのしまの客室写真", "ホテル　いんのしま room photo", "https://travel.rakuten.co.jp/HOTEL/14705/14705.html", '楽天トラベル'),
  "天然温泉　尾道ふれあいの里": sourcePhoto("onomichi-stay-h84829.jpg", "天然温泉　尾道ふれあいの里の客室写真", "天然温泉　尾道ふれあいの里 room photo", "https://travel.rakuten.co.jp/HOTEL/84829/84829.html", '楽天トラベル'),
  "Ａｒｂｏｒ　Ｏｎｏｍｉｃｈｉ": sourcePhoto("onomichi-stay-h199230.jpg", "Ａｒｂｏｒ　Ｏｎｏｍｉｃｈｉの客室写真", "Ａｒｂｏｒ　Ｏｎｏｍｉｃｈｉ room photo", "https://travel.rakuten.co.jp/HOTEL/199230/199230.html", '楽天トラベル'),
  "おのみち帆聲": sourcePhoto("onomichi-stay-h184441.jpg", "おのみち帆聲の客室写真", "おのみち帆聲 room photo", "https://travel.rakuten.co.jp/HOTEL/184441/184441.html", '楽天トラベル'),
  "尾道やすらぎの宿　しーそー": sourcePhoto("onomichi-stay-h166267.jpg", "尾道やすらぎの宿　しーそーの客室写真", "尾道やすらぎの宿　しーそー room photo", "https://travel.rakuten.co.jp/HOTEL/166267/166267.html", '楽天トラベル'),
  "ホテル　いんのしま 大浴場": sourcePhoto("onomichi-onsen-h14705.jpg", "ホテル　いんのしま 大浴場の写真", "ホテル　いんのしま 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/14705/gallery.html", '楽天トラベル'),
  "天然温泉　尾道みなと館 大浴場": sourcePhoto("onomichi-onsen-h153136.jpg", "天然温泉　尾道みなと館 大浴場の写真", "天然温泉　尾道みなと館 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/153136/gallery.html", '楽天トラベル'),
  "尾道倶楽部 大浴場": sourcePhoto("onomichi-onsen-h195943.jpg", "尾道倶楽部 大浴場の写真", "尾道倶楽部 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/195943/gallery.html", '楽天トラベル'),
  "天然温泉　尾道ふれあいの里 大浴場": sourcePhoto("onomichi-onsen-h84829.jpg", "天然温泉　尾道ふれあいの里 大浴場の写真", "天然温泉　尾道ふれあいの里 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/84829/gallery.html", '楽天トラベル'),
  "Ａｚｕｍｉ　Ｓｅｔｏｄａ 大浴場": sourcePhoto("onomichi-onsen-h184183.jpg", "Ａｚｕｍｉ　Ｓｅｔｏｄａ 大浴場の写真", "Ａｚｕｍｉ　Ｓｅｔｏｄａ 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/184183/gallery.html", '楽天トラベル'),
  "天然温泉うら湯　旅館浦島 大浴場": sourcePhoto("onomichi-onsen-h52248.jpg", "天然温泉うら湯　旅館浦島 大浴場の写真", "天然温泉うら湯　旅館浦島 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/52248/gallery.html", '楽天トラベル'),
  "千光寺": wikiPhoto(
  "onomichi-senkoji.jpg",
  "https://commons.wikimedia.org/wiki/File%3ASenkoji_Onomichi16s3872.jpg",
  "CC BY 2.5", "https://creativecommons.org/licenses/by/2.5",
  "663highland", "https://commons.wikimedia.org/wiki/File%3ASenkoji_Onomichi16s3872.jpg", "2008",
  "千光寺", "Senko-ji"
),
  "尾道水道": wikiPhoto(
  "onomichi-channel.jpg",
  "https://commons.wikimedia.org/wiki/File%3AOnomichi_Channel03s3200.jpg",
  "CC BY 2.5", "https://creativecommons.org/licenses/by/2.5",
  "663highland", "https://commons.wikimedia.org/wiki/File%3AOnomichi_Channel03s3200.jpg", "2008",
  "尾道水道", "Onomichi Channel"
),
  "浄土寺": wikiPhoto(
  "onomichi-jodoji.jpg",
  "https://commons.wikimedia.org/wiki/File%3AOnomichi_Jodoji_05.JPG",
  "CC BY-SA 3.0", "http://creativecommons.org/licenses/by-sa/3.0/",
  "by Reggaeman", "https://commons.wikimedia.org/wiki/File%3AOnomichi_Jodoji_05.JPG", "2008",
  "浄土寺", "Jodo-ji"
),
  "尾道駅": wikiPhoto(
  "onomichi-station.jpg",
  "https://commons.wikimedia.org/wiki/File%3AOnomichi-Station-new-South-building2020.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Tokyo-Good", "https://commons.wikimedia.org/wiki/File%3AOnomichi-Station-new-South-building2020.jpg", "2020",
  "尾道駅", "Onomichi Station"
),
  "因島大橋": wikiPhoto(
  "onomichi-innoshima-bridge.jpg",
  "https://commons.wikimedia.org/wiki/File%3AInnoshima_Bridge_from_Innoshima_Bridge_Memorial_Park.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "そらみみ", "https://commons.wikimedia.org/wiki/File%3AInnoshima_Bridge_from_Innoshima_Bridge_Memorial_Park.jpg", "2018",
  "因島大橋", "Innoshima Bridge"
),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: ONOMICHI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: ONOMICHI.sources.accessed};
}

export const ONOMICHI_FACILITIES: readonly FacilityRow[] = [
  sight("onomichi-sight-01", "千光寺", "広島県尾道市東土堂町15-1", null, "https://commons.wikimedia.org/wiki/File%3ASenkoji_Onomichi16s3872.jpg", 34.410925, 133.19878333),
  sight("onomichi-sight-02", "尾道水道", "広島県尾道市東御所町", null, "https://commons.wikimedia.org/wiki/File%3AOnomichi_Channel03s3200.jpg", 34.398611111111, 133.18388888889),
  sight("onomichi-sight-03", "浄土寺", "広島県尾道市東端町20-28", null, "https://commons.wikimedia.org/wiki/File%3AOnomichi_Jodoji_05.JPG", 34.41216667, 133.21030556),
  sight("onomichi-sight-04", "尾道駅", "広島県尾道市東御所町1-1", null, "https://commons.wikimedia.org/wiki/File%3AOnomichi-Station-new-South-building2020.jpg", 34.40483333, 133.19366667),
  sight("onomichi-sight-05", "因島大橋", "広島県尾道市向島町立花", null, "https://commons.wikimedia.org/wiki/File%3AInnoshima_Bridge_from_Innoshima_Bridge_Memorial_Park.jpg", 34.3563492, 133.1782994),
  sight("onomichi-onsen-01", "ホテル　いんのしま 大浴場", "広島県尾道市因島土生町平木288", "0845-22-4661", "https://travel.rakuten.co.jp/HOTEL/14705/gallery.html", null, null),
  sight("onomichi-onsen-02", "天然温泉　尾道みなと館 大浴場", "広島県尾道市久保1-3-36", "0848-20-8222", "https://travel.rakuten.co.jp/HOTEL/153136/gallery.html", null, null),
  sight("onomichi-onsen-03", "尾道倶楽部 大浴場", "広島県尾道市西土堂町15-20", "0848-29-9206", "https://travel.rakuten.co.jp/HOTEL/195943/gallery.html", null, null),
  sight("onomichi-onsen-04", "天然温泉　尾道ふれあいの里 大浴場", "広島県尾道市御調町高尾1369", null, "https://travel.rakuten.co.jp/HOTEL/84829/gallery.html", null, null),
  sight("onomichi-onsen-05", "Ａｚｕｍｉ　Ｓｅｔｏｄａ 大浴場", "広島県尾道市瀬戸田町瀬戸田269", null, "https://travel.rakuten.co.jp/HOTEL/184183/gallery.html", null, null),
  sight("onomichi-onsen-06", "天然温泉うら湯　旅館浦島 大浴場", "広島県尾道市美ノ郷町三成2500", null, "https://travel.rakuten.co.jp/HOTEL/52248/gallery.html", null, null),
];
