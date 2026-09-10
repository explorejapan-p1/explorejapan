/**
 * Higashihiroshima City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34212. Eleventh Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市・福山市・府中市・三次市・庄原市・大竹市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const HIGASHIHIROSHIMA = {
  nameJa: '東広島市',
  nameEn: 'Higashihiroshima',
  reading: 'ひがしひろしまし',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'higashihiroshima',
  jis: '34212',
  jlis: '342120',
  sameAs: 'https://www.city.higashihiroshima.lg.jp/',
  hall: {
    postalCode: '739-8601',
    addressJa: '広島県東広島市西条栄町8番29号',
    addressEn: '8-29 Saijo Sakae-machi, Higashihiroshima City, Hiroshima 739-8601, Japan',
    phone: '082-422-2111'
  },
  sources: {
    home: 'https://www.city.higashihiroshima.lg.jp/',
    hall: 'https://www.city.higashihiroshima.lg.jp/soshiki/chiikishinko/1_1/1/index.html',
    kanko: 'https://higashihiroshima-kanko.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34212/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const HIGASHIHIROSHIMA_EXPECTED_ROW_COUNT = 10;
export const HIGASHIHIROSHIMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: 西条酒蔵通り（賀茂鶴）. Hero title remains municipality name only. Unique (no wakimachi). */
export const HIGASHIHIROSHIMA_PLACE_PHOTO = wikiPhoto(
  "higashihiroshima-cover-kamotsuru.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E9%85%92%E8%94%B5%E9%80%9A%E3%82%8A_%E8%B3%80%E8%8C%82%E9%B6%B4_Sake_brewery_%22Kamotsuru%22_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E9%85%92%E8%94%B5%E9%80%9A%E3%82%8A_%E8%B3%80%E8%8C%82%E9%B6%B4_Sake_brewery_%22Kamotsuru%22_-_panoramio.jpg", "2008",
  "西条酒蔵通り（賀茂鶴酒造）", "Saijo Sake Brewery Street (Kamotsuru)"
);

export const HIGASHIHIROSHIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "三代目 鳥メロ 広島西条駅前店": sourcePhoto("higashihiroshima-34023219-dish.jpg", "三代目 鳥メロ 広島西条駅前店の料理写真", "三代目 鳥メロ 広島西条駅前店 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34023219/", '食べログ'),
  "や台ずし 西条駅酒蔵通町": sourcePhoto("higashihiroshima-34024422-dish.jpg", "や台ずし 西条駅酒蔵通町の料理写真", "や台ずし 西条駅酒蔵通町 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34024422/", '食べログ'),
  "焼肉牛舞 西条店": sourcePhoto("higashihiroshima-34034838-dish.jpg", "焼肉牛舞 西条店の料理写真", "焼肉牛舞 西条店 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34034838/", '食べログ'),
  "旨唐揚げと居酒メシ ミライザカ 広島西条駅前店": sourcePhoto("higashihiroshima-34000686-dish.jpg", "旨唐揚げと居酒メシ ミライザカ 広島西条駅前店の料理写真", "旨唐揚げと居酒メシ ミライザカ 広島西条駅前店 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34000686/", '食べログ'),
  "多酒多采 かげとら": sourcePhoto("higashihiroshima-34003466-dish.jpg", "多酒多采 かげとらの料理写真", "多酒多采 かげとら food photo", "https://tabelog.com/hiroshima/A3407/A340701/34003466/", '食べログ'),
  "お好み焼き 徳川 西条店": sourcePhoto("higashihiroshima-34022950-dish.jpg", "お好み焼き 徳川 西条店の料理写真", "お好み焼き 徳川 西条店 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34022950/", '食べログ'),
  "山茶花": sourcePhoto("higashihiroshima-34005156-dish.jpg", "山茶花の料理写真", "山茶花 food photo", "https://tabelog.com/hiroshima/A3407/A340702/34005156/", '食べログ'),
  "山内農場 西条駅前店": sourcePhoto("higashihiroshima-34018613-dish.jpg", "山内農場 西条駅前店の料理写真", "山内農場 西条駅前店 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34018613/", '食べログ'),
  "おいしい和食 華ごころ": sourcePhoto("higashihiroshima-34003624-dish.jpg", "おいしい和食 華ごころの料理写真", "おいしい和食 華ごころ food photo", "https://tabelog.com/hiroshima/A3407/A340701/34003624/", '食べログ'),
  "魚民 西条駅前店": sourcePhoto("higashihiroshima-34005324-dish.jpg", "魚民 西条駅前店の料理写真", "魚民 西条駅前店 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34005324/", '食べログ'),
  "料理屋そうびき": sourcePhoto("higashihiroshima-34023121-dish.jpg", "料理屋そうびきの料理写真", "料理屋そうびき food photo", "https://tabelog.com/hiroshima/A3407/A340701/34023121/", '食べログ'),
  "炭火焼肉　萬まる 西条店": sourcePhoto("higashihiroshima-34020142-dish.jpg", "炭火焼肉　萬まる 西条店の料理写真", "炭火焼肉　萬まる 西条店 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34020142/", '食べログ'),
  "一心": sourcePhoto("higashihiroshima-34034251-dish.jpg", "一心の料理写真", "一心 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34034251/", '食べログ'),
  "肉料理 春祺廊": sourcePhoto("higashihiroshima-34025213-dish.jpg", "肉料理 春祺廊の料理写真", "肉料理 春祺廊 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34025213/", '食べログ'),
  "すし亭 西条駅前店": sourcePhoto("higashihiroshima-34000457-dish.jpg", "すし亭 西条駅前店の料理写真", "すし亭 西条駅前店 food photo", "https://tabelog.com/hiroshima/A3407/A340701/34000457/", '食べログ'),
  "BAR & DINING Nao's": sourcePhoto("higashihiroshima-34021146-dish.jpg", "BAR & DINING Nao'sの料理写真", "BAR & DINING Nao's food photo", "https://tabelog.com/hiroshima/A3407/A340701/34021146/", '食べログ'),
  "東広島グリーンホテルモーリス": sourcePhoto("higashihiroshima-stay-h43917.jpg", "東広島グリーンホテルモーリスの客室写真", "東広島グリーンホテルモーリス room photo", "https://travel.rakuten.co.jp/HOTEL/43917/43917.html", '楽天トラベル'),
  "ホテルエリアワン広島ウイング＜獅子伏温泉＞（ホテルエリアワングループ）": sourcePhoto("higashihiroshima-stay-h149325.jpg", "ホテルエリアワン広島ウイング＜獅子伏温泉＞（ホテルエリアワングループ）の客室写真", "ホテルエリアワン広島ウイング＜獅子伏温泉＞（ホテルエリアワングループ） room photo", "https://travel.rakuten.co.jp/HOTEL/149325/149325.html", '楽天トラベル'),
  "ベッセルホテル東広島（東広島駅前）": sourcePhoto("higashihiroshima-stay-h50624.jpg", "ベッセルホテル東広島（東広島駅前）の客室写真", "ベッセルホテル東広島（東広島駅前） room photo", "https://travel.rakuten.co.jp/HOTEL/50624/50624.html", '楽天トラベル'),
  "ホテルカモ　［ＨＯＴＥＬ　ＫＡＭＯ］": sourcePhoto("higashihiroshima-stay-h7061.jpg", "ホテルカモ　［ＨＯＴＥＬ　ＫＡＭＯ］の客室写真", "ホテルカモ　［ＨＯＴＥＬ　ＫＡＭＯ］ room photo", "https://travel.rakuten.co.jp/HOTEL/7061/7061.html", '楽天トラベル'),
  "ホテルルートイン東広島西条駅前": sourcePhoto("higashihiroshima-stay-h161066.jpg", "ホテルルートイン東広島西条駅前の客室写真", "ホテルルートイン東広島西条駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/161066/161066.html", '楽天トラベル'),
  "備長炭の湯　ホテル東広島ヒルズ西条インター（ＢＢＨホテルグループ）": sourcePhoto("higashihiroshima-stay-h71972.jpg", "備長炭の湯　ホテル東広島ヒルズ西条インター（ＢＢＨホテルグループ）の客室写真", "備長炭の湯　ホテル東広島ヒルズ西条インター（ＢＢＨホテルグループ） room photo", "https://travel.rakuten.co.jp/HOTEL/71972/71972.html", '楽天トラベル'),
  "ホテル　サンライズ２１": sourcePhoto("higashihiroshima-stay-h78173.jpg", "ホテル　サンライズ２１の客室写真", "ホテル　サンライズ２１ room photo", "https://travel.rakuten.co.jp/HOTEL/78173/78173.html", '楽天トラベル'),
  "東横ＩＮＮ東広島西条駅前": sourcePhoto("higashihiroshima-stay-h108365.jpg", "東横ＩＮＮ東広島西条駅前の客室写真", "東横ＩＮＮ東広島西条駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/108365/108365.html", '楽天トラベル'),
  "西条ＨＡＫＵＷＡホテル": sourcePhoto("higashihiroshima-stay-h108769.jpg", "西条ＨＡＫＵＷＡホテルの客室写真", "西条ＨＡＫＵＷＡホテル room photo", "https://travel.rakuten.co.jp/HOTEL/108769/108769.html", '楽天トラベル'),
  "東広島グリーンホテルモーリス 男性大浴場": sourcePhoto("higashihiroshima-onsen-h43917.jpg", "東広島グリーンホテルモーリス 男性大浴場の写真", "東広島グリーンホテルモーリス 男性大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/43917/gallery.html", '楽天トラベル'),
  "ホテルエリアワン広島ウイング＜獅子伏温泉＞ 温泉スパシオン": sourcePhoto("higashihiroshima-onsen-h149325.jpg", "ホテルエリアワン広島ウイング＜獅子伏温泉＞ 温泉スパシオンの写真", "ホテルエリアワン広島ウイング＜獅子伏温泉＞ 温泉スパシオン bath photo", "https://travel.rakuten.co.jp/HOTEL/149325/gallery.html", '楽天トラベル'),
  "ホテルカモ 天然温泉ホットカモ": sourcePhoto("higashihiroshima-onsen-h7061.jpg", "ホテルカモ 天然温泉ホットカモの写真", "ホテルカモ 天然温泉ホットカモ bath photo", "https://travel.rakuten.co.jp/HOTEL/7061/gallery.html", '楽天トラベル'),
  "ホテルルートイン東広島西条駅前 大浴場": sourcePhoto("higashihiroshima-onsen-h161066.jpg", "ホテルルートイン東広島西条駅前 大浴場の写真", "ホテルルートイン東広島西条駅前 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/161066/gallery.html", '楽天トラベル'),
  "備長炭の湯　ホテル東広島ヒルズ西条インター 備長炭の湯": sourcePhoto("higashihiroshima-onsen-h71972.jpg", "備長炭の湯　ホテル東広島ヒルズ西条インター 備長炭の湯の写真", "備長炭の湯　ホテル東広島ヒルズ西条インター 備長炭の湯 bath photo", "https://travel.rakuten.co.jp/HOTEL/71972/gallery.html", '楽天トラベル'),
  "西条酒蔵通り": wikiPhoto(
  "higashihiroshima-sakagura.jpg",
  "https://commons.wikimedia.org/wiki/File%3A%E9%85%92%E8%94%B5%E9%80%9A%E3%82%8A_%E8%B3%80%E8%8C%82%E9%B6%B4_Sake_brewery_%22Kamotsuru%22_-_panoramio.jpg",
  "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0",
  "OS6", "https://commons.wikimedia.org/wiki/File%3A%E9%85%92%E8%94%B5%E9%80%9A%E3%82%8A_%E8%B3%80%E8%8C%82%E9%B6%B4_Sake_brewery_%22Kamotsuru%22_-_panoramio.jpg", "2008",
  "西条酒蔵通り（賀茂鶴酒造）", "Saijo Sake Brewery Street (Kamotsuru)"
),
  "三ツ城古墳": wikiPhoto(
  "higashihiroshima-mitsujo.jpg",
  "https://commons.wikimedia.org/wiki/File%3AMitsujo_Kofun%2C_enkei.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "Saigen Jiro", "https://commons.wikimedia.org/wiki/File%3AMitsujo_Kofun%2C_enkei.jpg", "2019",
  "三ツ城古墳", "Mitsujo Kofun"
),
  "安芸国分寺": wikiPhoto(
  "higashihiroshima-kokubunji.jpg",
  "https://commons.wikimedia.org/wiki/File%3AAki_Kokubunji%2C_hondou.jpg",
  "CC0", "https://creativecommons.org/publicdomain/zero/1.0/",
  "Saigen Jiro", "https://commons.wikimedia.org/wiki/File%3AAki_Kokubunji%2C_hondou.jpg", "2019",
  "安芸国分寺", "Aki Kokubun-ji"
),
  "鏡山城跡": wikiPhoto(
  "higashihiroshima-kagamiyama.jpg",
  "https://commons.wikimedia.org/wiki/File%3AKagamiyama_Castle.jpg",
  "CC BY-SA 2.5", "https://creativecommons.org/licenses/by-sa/2.5",
  "Monado", "https://commons.wikimedia.org/wiki/File%3AKagamiyama_Castle.jpg", "2006",
  "鏡山城跡", "Kagamiyama Castle ruins"
),
  "西条駅": wikiPhoto(
  "higashihiroshima-saijo-station.jpg",
  "https://commons.wikimedia.org/wiki/File%3AJr-west-Saijo-South-Station-building2019.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Tokyo-Good", "https://commons.wikimedia.org/wiki/File%3AJr-west-Saijo-South-Station-building2019.jpg", "2019",
  "西条駅", "Saijō Station"
),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: HIGASHIHIROSHIMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: HIGASHIHIROSHIMA.sources.accessed};
}

export const HIGASHIHIROSHIMA_FACILITIES: readonly FacilityRow[] = [
  sight("higashihiroshima-sight-01", "西条酒蔵通り", "広島県東広島市西条本町", null, "https://commons.wikimedia.org/wiki/File%3A%E9%85%92%E8%94%B5%E9%80%9A%E3%82%8A_%E8%B3%80%E8%8C%82%E9%B6%B4_Sake_brewery_%22Kamotsuru%22_-_panoramio.jpg", 34.4300598, 132.7453469),
  sight("higashihiroshima-sight-02", "三ツ城古墳", "広島県東広島市西条中央7丁目", null, "https://commons.wikimedia.org/wiki/File%3AMitsujo_Kofun%2C_enkei.jpg", 34.4163263, 132.7339153),
  sight("higashihiroshima-sight-03", "安芸国分寺", "広島県東広島市西条町吉行", null, "https://commons.wikimedia.org/wiki/File%3AAki_Kokubunji%2C_hondou.jpg", 34.4341872, 132.7488111),
  sight("higashihiroshima-sight-04", "鏡山城跡", "広島県東広島市鏡山", null, "https://commons.wikimedia.org/wiki/File%3AKagamiyama_Castle.jpg", 34.4040671, 132.7278349),
  sight("higashihiroshima-sight-05", "西条駅", "広島県東広島市西条本町", null, "https://commons.wikimedia.org/wiki/File%3AJr-west-Saijo-South-Station-building2019.jpg", 34.4311331, 132.743575),
  sight("higashihiroshima-onsen-01", "東広島グリーンホテルモーリス 男性大浴場", "広島県東広島市西条昭和町11-8", "082-422-6161", "https://travel.rakuten.co.jp/HOTEL/43917/gallery.html", null, null),
  sight("higashihiroshima-onsen-02", "ホテルエリアワン広島ウイング＜獅子伏温泉＞ 温泉スパシオン", "広島県東広島市河内町入野11296-72", "082-437-1234", "https://travel.rakuten.co.jp/HOTEL/149325/gallery.html", null, null),
  sight("higashihiroshima-onsen-03", "ホテルカモ 天然温泉ホットカモ", "広島県東広島市西条町御薗宇6184", "0824-22-1101", "https://travel.rakuten.co.jp/HOTEL/7061/gallery.html", null, null),
  sight("higashihiroshima-onsen-04", "ホテルルートイン東広島西条駅前 大浴場", "広島県東広島市西条本町14-24", "050-5837-7501", "https://travel.rakuten.co.jp/HOTEL/161066/gallery.html", null, null),
  sight("higashihiroshima-onsen-05", "備長炭の湯　ホテル東広島ヒルズ西条インター 備長炭の湯", "広島県東広島市西条大坪町2-13", "050-1807-3043", "https://travel.rakuten.co.jp/HOTEL/71972/gallery.html", null, null),
];
