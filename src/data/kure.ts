/**
 * Kure City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34202. Second Hiroshima hub after 広島市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KURE = {
  nameJa: '呉市',
  nameEn: 'Kure',
  reading: 'くれし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'kure',
  jis: '34202',
  jlis: '342025',
  sameAs: 'https://www.city.kure.lg.jp/',
  hall: {
    postalCode: '737-8501',
    addressJa: '広島県呉市中央4丁目1番6号',
    addressEn: '4-1-6 Chuo, Kure City, Hiroshima 737-8501, Japan',
    phone: '0823-25-3100'
  },
  sources: {
    home: 'https://www.city.kure.lg.jp/',
    hall: 'https://www.city.kure.lg.jp/soshiki/24/annai.html',
    kanko: 'https://www.city.kure.lg.jp/',
    yamato: 'https://www.yamato-museum.com/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34202/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const KURE_EXPECTED_ROW_COUNT = 8;
export const KURE_EXPECTED_GEO_COUNT = 1;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}

/** Cover: 呉市役所. Hero title remains municipality name only. */
export const KURE_PLACE_PHOTO = wikiPhoto(
  "kure-city-hall.jpg",
  "https://commons.wikimedia.org/wiki/File:Kure-City-Hall-1.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "Evelyn-rose", "https://commons.wikimedia.org/wiki/File:Kure-City-Hall-1.jpg", "2020",
  "呉市役所", "Kure City Hall"
);

export const KURE_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {

  "四川料理110": sourcePhoto("kure-34018498-dish.jpg", "四川料理110の料理写真", "四川料理110 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34018498/", '食べログ'),
  "旨唐揚げと居酒メシ ミライザカ 呉中通り店": sourcePhoto("kure-34003000-dish.jpg", "旨唐揚げと居酒メシ ミライザカ 呉中通り店の料理写真", "旨唐揚げと居酒メシ ミライザカ 呉中通り店 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34003000/", '食べログ'),
  "鉄板 橘": sourcePhoto("kure-34034883-dish.jpg", "鉄板 橘の料理写真", "鉄板 橘 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34034883/", '食べログ'),
  "や台ずし 呉中通町": sourcePhoto("kure-34029943-dish.jpg", "や台ずし 呉中通町の料理写真", "や台ずし 呉中通町 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34029943/", '食べログ'),
  "信州そば処 そじ坊 呉ゆめタウン店": sourcePhoto("kure-34027647-dish.jpg", "信州そば処 そじ坊 呉ゆめタウン店の料理写真", "信州そば処 そじ坊 呉ゆめタウン店 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34027647/", '食べログ'),
  "サムギョプサル ぶる": sourcePhoto("kure-34033920-dish.jpg", "サムギョプサル ぶるの料理写真", "サムギョプサル ぶる food photo", "https://tabelog.com/hiroshima/A3404/A340401/34033920/", '食べログ'),
  "とんかつ ひと": sourcePhoto("kure-34034881-dish.jpg", "とんかつ ひとの料理写真", "とんかつ ひと food photo", "https://tabelog.com/hiroshima/A3404/A340401/34034881/", '食べログ'),
  "Kei": sourcePhoto("kure-34031613-dish.jpg", "Keiの料理写真", "Kei food photo", "https://tabelog.com/hiroshima/A3404/A340401/34031613/", '食べログ'),
  "くし山": sourcePhoto("kure-34020895-dish.jpg", "くし山の料理写真", "くし山 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34020895/", '食べログ'),
  "音戸": sourcePhoto("kure-34011514-dish.jpg", "音戸の料理写真", "音戸 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34011514/", '食べログ'),
  "イルマーレ": sourcePhoto("kure-34027503-dish.jpg", "イルマーレの料理写真", "イルマーレ food photo", "https://tabelog.com/hiroshima/A3404/A340401/34027503/", '食べログ'),
  "鉄板焼 犇亭": sourcePhoto("kure-34011808-dish.jpg", "鉄板焼 犇亭の料理写真", "鉄板焼 犇亭 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34011808/", '食べログ'),
  "Ngon": sourcePhoto("kure-34029934-dish.jpg", "Ngonの料理写真", "Ngon food photo", "https://tabelog.com/hiroshima/A3404/A340401/34029934/", '食べログ'),
  "鉄板焼 とよふみ": sourcePhoto("kure-34028206-dish.jpg", "鉄板焼 とよふみの料理写真", "鉄板焼 とよふみ food photo", "https://tabelog.com/hiroshima/A3404/A340401/34028206/", '食べログ'),
  "炭火焼肉ごろう 呉店": sourcePhoto("kure-34019278-dish.jpg", "炭火焼肉ごろう 呉店の料理写真", "炭火焼肉ごろう 呉店 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34019278/", '食べログ'),
  "和彩大地": sourcePhoto("kure-34029017-dish.jpg", "和彩大地の料理写真", "和彩大地 food photo", "https://tabelog.com/hiroshima/A3404/A340401/34029017/", '食べログ'),
  "呉阪急ホテル": sourcePhoto("kure-stay-h7470.jpg", "呉阪急ホテルの客室写真", "呉阪急ホテル room photo", "https://travel.rakuten.co.jp/HOTEL/7470/7470.html", '楽天トラベル'),
  "コンフォートホテル呉": sourcePhoto("kure-stay-h78130.jpg", "コンフォートホテル呉の客室写真", "コンフォートホテル呉 room photo", "https://travel.rakuten.co.jp/HOTEL/78130/78130.html", '楽天トラベル'),
  "東横ＩＮＮ呉駅": sourcePhoto("kure-stay-h199252.jpg", "東横ＩＮＮ呉駅の客室写真", "東横ＩＮＮ呉駅 room photo", "https://travel.rakuten.co.jp/HOTEL/199252/199252.html", '楽天トラベル'),
  "広ステーションホテル　アネックス": sourcePhoto("kure-stay-h17729.jpg", "広ステーションホテル　アネックスの客室写真", "広ステーションホテル　アネックス room photo", "https://travel.rakuten.co.jp/HOTEL/17729/17729.html", '楽天トラベル'),
  "ビューポートくれホテル": sourcePhoto("kure-stay-h129442.jpg", "ビューポートくれホテルの客室写真", "ビューポートくれホテル room photo", "https://travel.rakuten.co.jp/HOTEL/129442/129442.html", '楽天トラベル'),
  "クレイトンベイホテル": sourcePhoto("kure-stay-h17718.jpg", "クレイトンベイホテルの客室写真", "クレイトンベイホテル room photo", "https://travel.rakuten.co.jp/HOTEL/17718/17718.html", '楽天トラベル'),
  "ホテルクレシオ　呉本通り": sourcePhoto("kure-stay-h41419.jpg", "ホテルクレシオ　呉本通りの客室写真", "ホテルクレシオ　呉本通り room photo", "https://travel.rakuten.co.jp/HOTEL/41419/41419.html", '楽天トラベル'),
  "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａ": sourcePhoto("kure-stay-h68088.jpg", "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａの客室写真", "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａ room photo", "https://travel.rakuten.co.jp/HOTEL/68088/68088.html", '楽天トラベル'),
  "広ステーションホテル　リージェントハウス": sourcePhoto("kure-stay-h17737.jpg", "広ステーションホテル　リージェントハウスの客室写真", "広ステーションホテル　リージェントハウス room photo", "https://travel.rakuten.co.jp/HOTEL/17737/17737.html", '楽天トラベル'),
  "シャトレーゼ　ガトーキングダム　せとうち 大浴場": sourcePhoto("kure-onsen-h193539.jpg", "シャトレーゼ　ガトーキングダム　せとうち 大浴場の写真", "シャトレーゼ　ガトーキングダム　せとうち 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/193539/gallery.html", '楽天トラベル'),
  "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａ 風呂": sourcePhoto("kure-onsen-h68088.jpg", "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａ 風呂の写真", "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａ 風呂 bath photo", "https://travel.rakuten.co.jp/HOTEL/68088/gallery.html", '楽天トラベル'),
  "大和ミュージアム": wikiPhoto(
  "kure-yamato-museum.jpg",
  "https://commons.wikimedia.org/wiki/File:Kure_Yamato_Museum_2013-08F.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "At by At", "https://commons.wikimedia.org/wiki/File:Kure_Yamato_Museum_2013-08F.JPG", "2013",
  "大和ミュージアム", "Yamato Museum"
),
  "アレイからすこじま": wikiPhoto(
  "kure-alley-karasukojima.jpg",
  "https://commons.wikimedia.org/wiki/File:Alley-Karasukojima.JPG",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "TRJN", "https://commons.wikimedia.org/wiki/File:Alley-Karasukojima.JPG", "2015",
  "アレイからすこじま", "Alley Karasukojima"
),
  "音戸大橋": wikiPhoto(
  "kure-ondo-bridge.jpg",
  "https://commons.wikimedia.org/wiki/File:Ondo_Bridge_20130303-01.JPG",
  "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0",
  "Taisyo", "https://commons.wikimedia.org/wiki/File:Ondo_Bridge_20130303-01.JPG", "2013",
  "音戸大橋", "Ondo Bridge"
),
  "入船山記念館": wikiPhoto(
  "kure-irifuneyama.jpg",
  "https://commons.wikimedia.org/wiki/File:Kyu-Kurechinjufu-shireichokan-chosha-20010902.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Otraff", "https://commons.wikimedia.org/wiki/File:Kyu-Kurechinjufu-shireichokan-chosha-20010902.jpg", "2001",
  "入船山記念館", "Irifuneyama Memorial Museum"
),
  "呉市立美術館": wikiPhoto(
  "kure-museum-art.jpg",
  "https://commons.wikimedia.org/wiki/File:Kure_Municipal_Museum_of_Art_Annex.JPG",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "Twilight2640", "https://commons.wikimedia.org/wiki/File:Kure_Municipal_Museum_of_Art_Annex.JPG", "2013",
  "呉市立美術館", "Kure Municipal Museum of Art"
),
  "てつのくじら館": wikiPhoto(
  "kure-tetsu-no-kujira.jpg",
  "https://commons.wikimedia.org/wiki/File:JMSDF-Kure-Museum-1.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "Evelyn-rose", "https://commons.wikimedia.org/wiki/File:JMSDF-Kure-Museum-1.jpg", "2020",
  "てつのくじら館", "JMSDF Kure Museum"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: KURE.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光・Commons掲載情報', accessed: KURE.sources.accessed};
}

export const KURE_FACILITIES: readonly FacilityRow[] = [
  sight("kure-sight-01", "大和ミュージアム", "広島県呉市宝町5-20", null, "https://www.yamato-museum.com/", 34.2419, 132.5558),
  sight("kure-sight-02", "アレイからすこじま", "広島県呉市海岸", null, "https://commons.wikimedia.org/wiki/File:Alley-Karasukojima.JPG", null, null),
  sight("kure-sight-03", "音戸大橋", "広島県呉市音戸町", null, "https://commons.wikimedia.org/wiki/File:Ondo_Bridge_20130303-01.JPG", null, null),
  sight("kure-sight-04", "入船山記念館", "広島県呉市幸町4-6", null, "https://commons.wikimedia.org/wiki/File:Kyu-Kurechinjufu-shireichokan-chosha-20010902.jpg", null, null),
  sight("kure-sight-05", "呉市立美術館", "広島県呉市幸町4-22", null, "https://commons.wikimedia.org/wiki/File:Kure_Municipal_Museum_of_Art_Annex.JPG", null, null),
  sight("kure-sight-06", "てつのくじら館", "広島県呉市宝町5-32", null, "https://jmsdf-kure-museum.go.jp/", null, null),
  sight("kure-onsen-01", "シャトレーゼ　ガトーキングダム　せとうち 大浴場", "広島県呉市安浦町三津口326-48", null, "https://travel.rakuten.co.jp/HOTEL/193539/gallery.html", null, null),
  sight("kure-onsen-02", "Ｋ．Ｍ．Ｈ　Ａｒｔ　ｈｏｔｅｌ　ｂｙ　Ｋｕｒｅ　Ｍｏｒｉｓａｗａ 風呂", "広島県呉市本町15-22", null, "https://travel.rakuten.co.jp/HOTEL/68088/gallery.html", null, null),
];
