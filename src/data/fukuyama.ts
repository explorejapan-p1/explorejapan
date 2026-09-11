/**
 * Fukuyama City (Hiroshima) sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-10). JIS 34207. Sixth Hiroshima hub after 広島市・呉市・竹原市・三原市・尾道市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const FUKUYAMA = {
  nameJa: '福山市',
  nameEn: 'Fukuyama',
  reading: 'ふくやま',
  prefectureJa: '広島県',
  prefectureEn: 'Hiroshima',
  prefectureSlug: 'hiroshima',
  slug: 'fukuyama',
  jis: '34207',
  jlis: '342071',
  sameAs: 'https://www.city.fukuyama.hiroshima.jp/',
  hall: {
    postalCode: '720-8501',
    addressJa: '広島県福山市東桜町3番5号',
    addressEn: '3-5 Higashi-Sakura-cho, Fukuyama City, Hiroshima 720-8501, Japan',
    phone: '084-921-2111'
  },
  sources: {
    home: 'https://www.city.fukuyama.hiroshima.jp/',
    hall: 'https://www.city.fukuyama.hiroshima.jp/',
    tabelogCity: 'https://tabelog.com/hiroshima/C34207/rstLst/',
    accessed: '2026-09-10'
  }
} as const;

export const FUKUYAMA_EXPECTED_ROW_COUNT = 11;
export const FUKUYAMA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-10', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-10', altJa, altEn};
}
/** Cover: Fukuyama Castle keep. Hero title remains municipality name only. */
export const FUKUYAMA_PLACE_PHOTO = wikiPhoto(
  "fukuyama-cover-castle-keep.jpg",
  "https://commons.wikimedia.org/wiki/File:Fukuyama_castle02s1980.jpg",
  "CC BY 2.5", "https://creativecommons.org/licenses/by/2.5",
  "663highland", "https://commons.wikimedia.org/wiki/File:Fukuyama_castle02s1980.jpg", "2006",
  "福山城天守", "Fukuyama Castle keep"
);

export const FUKUYAMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  "旬庵 あ茶ら": sourcePhoto("fukuyama-34010520-dish.jpg", "旬庵 あ茶らの料理写真", "旬庵 あ茶ら food photo", "https://tabelog.com/hiroshima/A3403/A340301/34010520/", '食べログ'),
  "個室居酒屋 泳ぎイカ×もつ鍋 九州料理 弁慶 福山駅前店": sourcePhoto("fukuyama-34023481-dish.jpg", "個室居酒屋 泳ぎイカ×もつ鍋 九州料理 弁慶 福山駅前店の料理写真", "個室居酒屋 泳ぎイカ×もつ鍋 九州料理 弁慶 福山駅前店 food photo", "https://tabelog.com/hiroshima/A3403/A340301/34023481/", '食べログ'),
  "焼肉としちゃん": sourcePhoto("fukuyama-34033156-dish.jpg", "焼肉としちゃんの料理写真", "焼肉としちゃん food photo", "https://tabelog.com/hiroshima/A3403/A340301/34033156/", '食べログ'),
  "梅の花 福山店": sourcePhoto("fukuyama-34018007-dish.jpg", "梅の花 福山店の料理写真", "梅の花 福山店 food photo", "https://tabelog.com/hiroshima/A3403/A340308/34018007/", '食べログ'),
  "や台ずし 福山町2号店": sourcePhoto("fukuyama-34030742-dish.jpg", "や台ずし 福山町2号店の料理写真", "や台ずし 福山町2号店 food photo", "https://tabelog.com/hiroshima/A3403/A340301/34030742/", '食べログ'),
  "赤から 福山南蔵王店": sourcePhoto("fukuyama-34021504-dish.jpg", "赤から 福山南蔵王店の料理写真", "赤から 福山南蔵王店 food photo", "https://tabelog.com/hiroshima/A3403/A340305/34021504/", '食べログ'),
  "黒毛和牛バル 529 ミートボックス 福山宮通本店": sourcePhoto("fukuyama-34025020-dish.jpg", "黒毛和牛バル 529 ミートボックス 福山宮通本店の料理写真", "黒毛和牛バル 529 ミートボックス 福山宮通本店 food photo", "https://tabelog.com/hiroshima/A3403/A340301/34025020/", '食べログ'),
  "個室 四国郷土活性化 藁家88 福山店": sourcePhoto("fukuyama-34026413-dish.jpg", "個室 四国郷土活性化 藁家88 福山店の料理写真", "個室 四国郷土活性化 藁家88 福山店 food photo", "https://tabelog.com/hiroshima/A3403/A340301/34026413/", '食べログ'),
  "しゃぶ吉": sourcePhoto("fukuyama-34008280-dish.jpg", "しゃぶ吉の料理写真", "しゃぶ吉 food photo", "https://tabelog.com/hiroshima/A3403/A340308/34008280/", '食べログ'),
  "肉料理ズシオ": sourcePhoto("fukuyama-34024356-dish.jpg", "肉料理ズシオの料理写真", "肉料理ズシオ food photo", "https://tabelog.com/hiroshima/A3403/A340301/34024356/", '食べログ'),
  "くいもの屋わん 福山店": sourcePhoto("fukuyama-34017729-dish.jpg", "くいもの屋わん 福山店の料理写真", "くいもの屋わん 福山店 food photo", "https://tabelog.com/hiroshima/A3403/A340301/34017729/", '食べログ'),
  "炉 うろこや": sourcePhoto("fukuyama-34030955-dish.jpg", "炉 うろこやの料理写真", "炉 うろこや food photo", "https://tabelog.com/hiroshima/A3403/A340301/34030955/", '食べログ'),
  "黒毛和牛ホルモン 大衆焼肉しんすけ": sourcePhoto("fukuyama-34030636-dish.jpg", "黒毛和牛ホルモン 大衆焼肉しんすけの料理写真", "黒毛和牛ホルモン 大衆焼肉しんすけ food photo", "https://tabelog.com/hiroshima/A3403/A340301/34030636/", '食べログ'),
  "個室完備 大衆とり酒場 とりいちず 広島福山店": sourcePhoto("fukuyama-34034390-dish.jpg", "個室完備 大衆とり酒場 とりいちず 広島福山店の料理写真", "個室完備 大衆とり酒場 とりいちず 広島福山店 food photo", "https://tabelog.com/hiroshima/A3403/A340301/34034390/", '食べログ'),
  "ヒョンチャンプルコギ 福山駅前": sourcePhoto("fukuyama-34030161-dish.jpg", "ヒョンチャンプルコギ 福山駅前の料理写真", "ヒョンチャンプルコギ 福山駅前 food photo", "https://tabelog.com/hiroshima/A3403/A340301/34030161/", '食べログ'),
  "砦": sourcePhoto("fukuyama-34020532-dish.jpg", "砦の料理写真", "砦 food photo", "https://tabelog.com/hiroshima/A3403/A340308/34020532/", '食べログ'),
  "リッチモンドホテル福山駅前": sourcePhoto("fukuyama-stay-h109493.jpg", "リッチモンドホテル福山駅前の客室写真", "リッチモンドホテル福山駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/109493/109493.html", '楽天トラベル'),
  "ダイワロイネットホテル福山駅前": sourcePhoto("fukuyama-stay-h179871.jpg", "ダイワロイネットホテル福山駅前の客室写真", "ダイワロイネットホテル福山駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/179871/179871.html", '楽天トラベル'),
  "福山ニューキャッスルホテル": sourcePhoto("fukuyama-stay-h614.jpg", "福山ニューキャッスルホテルの客室写真", "福山ニューキャッスルホテル room photo", "https://travel.rakuten.co.jp/HOTEL/614/614.html", '楽天トラベル'),
  "サンホテル福山": sourcePhoto("fukuyama-stay-h11123.jpg", "サンホテル福山の客室写真", "サンホテル福山 room photo", "https://travel.rakuten.co.jp/HOTEL/11123/11123.html", '楽天トラベル'),
  "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）福山": sourcePhoto("fukuyama-stay-h71928.jpg", "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）福山の客室写真", "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）福山 room photo", "https://travel.rakuten.co.jp/HOTEL/71928/71928.html", '楽天トラベル'),
  "福山オリエンタルホテル": sourcePhoto("fukuyama-stay-h2053.jpg", "福山オリエンタルホテルの客室写真", "福山オリエンタルホテル room photo", "https://travel.rakuten.co.jp/HOTEL/2053/2053.html", '楽天トラベル'),
  "ホテル１－２－３福山": sourcePhoto("fukuyama-stay-h15010.jpg", "ホテル１－２－３福山の客室写真", "ホテル１－２－３福山 room photo", "https://travel.rakuten.co.jp/HOTEL/15010/15010.html", '楽天トラベル'),
  "ベッセルイン福山駅北口（福山城前・福山２号店）": sourcePhoto("fukuyama-stay-h15087.jpg", "ベッセルイン福山駅北口（福山城前・福山２号店）の客室写真", "ベッセルイン福山駅北口（福山城前・福山２号店） room photo", "https://travel.rakuten.co.jp/HOTEL/15087/15087.html", '楽天トラベル'),
  "ホテルトレンド福山駅前": sourcePhoto("fukuyama-stay-h179326.jpg", "ホテルトレンド福山駅前の客室写真", "ホテルトレンド福山駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/179326/179326.html", '楽天トラベル'),
  "ベッセルホテル福山（国道２号線・福山１号店）": sourcePhoto("fukuyama-stay-h4788.jpg", "ベッセルホテル福山（国道２号線・福山１号店）の客室写真", "ベッセルホテル福山（国道２号線・福山１号店） room photo", "https://travel.rakuten.co.jp/HOTEL/4788/4788.html", '楽天トラベル'),
  "ＡＮＣＨＯＲ ＨＯＴＥＬ ＦＵＫＵＹＡＭＡ（アンカーホテル福山）": sourcePhoto("fukuyama-stay-h168353.jpg", "ＡＮＣＨＯＲ ＨＯＴＥＬ ＦＵＫＵＹＡＭＡ（アンカーホテル福山）の客室写真", "ＡＮＣＨＯＲ ＨＯＴＥＬ ＦＵＫＵＹＡＭＡ（アンカーホテル福山） room photo", "https://travel.rakuten.co.jp/HOTEL/168353/168353.html", '楽天トラベル'),
  "福山ターミナルホテル": sourcePhoto("fukuyama-stay-h860.jpg", "福山ターミナルホテルの客室写真", "福山ターミナルホテル room photo", "https://travel.rakuten.co.jp/HOTEL/860/860.html", '楽天トラベル'),
  "ホテルエリアワン福山（ホテルエリアワングループ）": sourcePhoto("fukuyama-stay-h67197.jpg", "ホテルエリアワン福山（ホテルエリアワングループ）の客室写真", "ホテルエリアワン福山（ホテルエリアワングループ） room photo", "https://travel.rakuten.co.jp/HOTEL/67197/67197.html", '楽天トラベル'),
  "福山プラザホテル": sourcePhoto("fukuyama-stay-h784.jpg", "福山プラザホテルの客室写真", "福山プラザホテル room photo", "https://travel.rakuten.co.jp/HOTEL/784/784.html", '楽天トラベル'),
  "ホテルリブマックス福山駅前": sourcePhoto("fukuyama-stay-h168559.jpg", "ホテルリブマックス福山駅前の客室写真", "ホテルリブマックス福山駅前 room photo", "https://travel.rakuten.co.jp/HOTEL/168559/168559.html", '楽天トラベル'),
  "東横ＩＮＮ福山駅新幹線南口": sourcePhoto("fukuyama-stay-h151477.jpg", "東横ＩＮＮ福山駅新幹線南口の客室写真", "東横ＩＮＮ福山駅新幹線南口 room photo", "https://travel.rakuten.co.jp/HOTEL/151477/151477.html", '楽天トラベル'),
  "ホテル１－２－３福山 大浴場": sourcePhoto("fukuyama-onsen-h15010.jpg", "ホテル１－２－３福山 大浴場の写真", "ホテル１－２－３福山 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/15010/gallery.html", '楽天トラベル'),
  "福山オリエンタルホテル 大浴場": sourcePhoto("fukuyama-onsen-h2053.jpg", "福山オリエンタルホテル 大浴場の写真", "福山オリエンタルホテル 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/2053/gallery.html", '楽天トラベル'),
  "ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）福山 大浴場": sourcePhoto("fukuyama-onsen-h71928.jpg", "ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）福山 大浴場の写真", "ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）福山 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/71928/gallery.html", '楽天トラベル'),
  "鞆の浦温泉　ホテル鴎風亭 大浴場": sourcePhoto("fukuyama-onsen-h74580.jpg", "鞆の浦温泉　ホテル鴎風亭 大浴場の写真", "鞆の浦温泉　ホテル鴎風亭 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/74580/gallery.html", '楽天トラベル'),
  "鞆の浦温泉　景勝館　漣亭 大浴場": sourcePhoto("fukuyama-onsen-h7099.jpg", "鞆の浦温泉　景勝館　漣亭 大浴場の写真", "鞆の浦温泉　景勝館　漣亭 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/7099/gallery.html", '楽天トラベル'),
  "鞆の浦温泉　汀邸　遠音近音 大浴場": sourcePhoto("fukuyama-onsen-h111259.jpg", "鞆の浦温泉　汀邸　遠音近音 大浴場の写真", "鞆の浦温泉　汀邸　遠音近音 大浴場 bath photo", "https://travel.rakuten.co.jp/HOTEL/111259/gallery.html", '楽天トラベル'),
  "福山城": wikiPhoto(
  "fukuyama-castle.jpg",
  "https://commons.wikimedia.org/wiki/File:Fukuyama_castle05s2048.jpg",
  "CC BY 2.5", "https://creativecommons.org/licenses/by/2.5",
  "663highland", "https://commons.wikimedia.org/wiki/File:Fukuyama_castle05s2048.jpg", "2006",
  "福山城筋鉄御門", "Fukuyama Castle Sujiganegomon"
),
  "鞆の浦": wikiPhoto(
  "fukuyama-tomonoura.jpg",
  "https://commons.wikimedia.org/wiki/File:Tomonoura08bs3200.jpg",
  "CC BY 2.5", "https://creativecommons.org/licenses/by/2.5",
  "663highland", "https://commons.wikimedia.org/wiki/File:Tomonoura08bs3200.jpg", "2008",
  "鞆の浦", "Tomonoura"
),
  "明王院": wikiPhoto(
  "fukuyama-myooin.jpg",
  "https://commons.wikimedia.org/wiki/File:My%C5%8D-%C5%8D-in_%28Fukuyama%29%2C_Five-storied_Pagoda_and_Main_Hall_001.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "Naokijp", "https://commons.wikimedia.org/wiki/File:My%C5%8D-%C5%8D-in_%28Fukuyama%29%2C_Five-storied_Pagoda_and_Main_Hall_001.jpg", "2019",
  "明王院", "Myoo-in"
),
  "ばら公園": wikiPhoto(
  "fukuyama-rose-park.jpg",
  "https://commons.wikimedia.org/wiki/File:%E7%A6%8F%E5%B1%B1%E3%81%B0%E3%82%89%E5%85%AC%E5%9C%92.jpg",
  "CC BY-SA 3.0", "http://creativecommons.org/licenses/by-sa/3.0/",
  "OS6", "https://commons.wikimedia.org/wiki/File:%E7%A6%8F%E5%B1%B1%E3%81%B0%E3%82%89%E5%85%AC%E5%9C%92.jpg", "2011",
  "福山ばら公園", "Fukuyama Rose Park"
),
  "福山駅": wikiPhoto(
  "fukuyama-station.jpg",
  "https://commons.wikimedia.org/wiki/File:Fukuyama_Station_Building_%28South%29_20200927.jpg",
  "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0",
  "1stfinal", "https://commons.wikimedia.org/wiki/File:Fukuyama_Station_Building_%28South%29_20200927.jpg", "2020",
  "福山駅", "Fukuyama Station"
),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: FUKUYAMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・Commons掲載情報', accessed: FUKUYAMA.sources.accessed};
}

export const FUKUYAMA_FACILITIES: readonly FacilityRow[] = [
  sight("fukuyama-sight-01", "福山城", "広島県福山市丸之内1丁目", null, "https://commons.wikimedia.org/wiki/File:Fukuyama_castle05s2048.jpg", 34.4909956, 133.3611464),
  sight("fukuyama-sight-02", "鞆の浦", "広島県福山市鞆町鞆", null, "https://commons.wikimedia.org/wiki/File:Tomonoura08bs3200.jpg", 34.3808768, 133.3803274),
  sight("fukuyama-sight-03", "明王院", "広島県福山市草戸町1473", null, "https://commons.wikimedia.org/wiki/File:My%C5%8D-%C5%8D-in_%28Fukuyama%29%2C_Five-storied_Pagoda_and_Main_Hall_001.jpg", 34.4783923, 133.3463283),
  sight("fukuyama-sight-04", "ばら公園", "広島県福山市花園町1丁目", null, "https://commons.wikimedia.org/wiki/File:%E7%A6%8F%E5%B1%B1%E3%81%B0%E3%82%89%E5%85%AC%E5%9C%92.jpg", 34.4812194, 133.3715221),
  sight("fukuyama-sight-05", "福山駅", "広島県福山市三之丸町30", null, "https://commons.wikimedia.org/wiki/File:Fukuyama_Station_Building_%28South%29_20200927.jpg", 34.4893855, 133.3622503),
  sight("fukuyama-onsen-01", "ホテル１－２－３福山 大浴場", "広島県福山市東桜町1-41", null, "https://travel.rakuten.co.jp/HOTEL/15010/gallery.html", null, null),
  sight("fukuyama-onsen-02", "福山オリエンタルホテル 大浴場", "広島県福山市城見町1-1-6", null, "https://travel.rakuten.co.jp/HOTEL/2053/gallery.html", null, null),
  sight("fukuyama-onsen-03", "ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）福山 大浴場", "広島県福山市御船町2-8-20", null, "https://travel.rakuten.co.jp/HOTEL/71928/gallery.html", null, null),
  sight("fukuyama-onsen-04", "鞆の浦温泉　ホテル鴎風亭 大浴場", "広島県福山市鞆町鞆136", null, "https://travel.rakuten.co.jp/HOTEL/74580/gallery.html", null, null),
  sight("fukuyama-onsen-05", "鞆の浦温泉　景勝館　漣亭 大浴場", "広島県福山市鞆町鞆421", null, "https://travel.rakuten.co.jp/HOTEL/7099/gallery.html", null, null),
  sight("fukuyama-onsen-06", "鞆の浦温泉　汀邸　遠音近音 大浴場", "広島県福山市鞆町鞆629", "0570-025-577", "https://travel.rakuten.co.jp/HOTEL/111259/gallery.html", null, null),
];
