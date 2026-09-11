/**
 * Tokushima City travel layer. No frozen pack.
 * Dining from 食べログ 徳島市 (C36201) public shop pages. FOOD dish photos required.
 * Stay from NAVITIME/楽天トラベル hotel listings + hotel official og/room images where available.
 * Rank strongest Instagram-style photos first. Do not invent listings or fake reviews.
 * Sights densify: city keikan + Commons (弁天山 / 文化の森 / 眉山公園). Fun!Fun! lead → city/Commons only.
 * Shopping / commerce densified from Commons (アミコ / 東新町 / 両国本町 / ボードウォーク). そごう閉店(2020)→アミコ東館.
 * Onsen: 天然温泉びざんの湯 bath from ホテルサンルート徳島 official (出典). Experience densified.
 * Do not copy 鳴門 / 阿南 / 小松島 / 美馬 TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TOKUSHIMA_CITY, TOKUSHIMA_CITY_SIGHT_PHOTOS} from './tokushima-city';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const TOKUSHIMA_CITY_TRAVEL_ACCESSED = '2026-09-09' as const;

export const TOKUSHIMA_CITY_TRAVEL_SOURCES = {
  kanko: 'https://www.tokushima-kankou.or.jp/',
  cityHome: 'https://www.city.tokushima.tokushima.jp/',
  bizan: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/bizan.html',
  boardWalk: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/board_walk.html',
  awaodori: 'https://www.city.tokushima.tokushima.jp/shisetsu/bunka_art/awaodori_kaikan.html',
  castlePark: 'https://www.city.tokushima.tokushima.jp/shisetsu/park/chuo.html',
  tabelogCity: 'https://tabelog.com/tokushima/C36201/rstLst/',
  stayNavi: 'https://www.navitime.co.jp/category/0608002/36201/',
  rakutenTravel: 'https://travel.rakuten.co.jp/',
  amico: 'https://www.amico-tokushima.jp/',
  sunroute: 'https://sotetsu-hotels.com/sunroute/tokushima/',
  bizanYu: 'https://www.awanavi.jp/archives/spot/1670'
} as const;

export const TOKUSHIMA_CITY_SIGHT_PINS = [
  '眉山',
  '新町川水際公園・しんまちボードウォーク',
  '弁天山',
  '阿波おどり会館',
  '徳島城跡',
  '文化の森総合公園',
  '眉山公園'
] as const;

function stay(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'stay',
    address,
    phone,
    source_url,
    accessed: TOKUSHIMA_CITY_TRAVEL_ACCESSED
  };
}

export const TOKUSHIMA_CITY_TRAVEL_STAY: readonly TravelRow[] = [
  stay(
    "tokushima-city-stay-01",
    "JRホテルクレメント徳島",
    "徳島県徳島市寺島本町西1-61",
    "088-656-3111",
    "https://www.jrclement.co.jp/tokushima/"
  ),
  stay(
    "tokushima-city-stay-02",
    "ホテルサンルート徳島",
    "徳島県徳島市元町1-5-1",
    "088-653-8111",
    "https://sotetsu-hotels.com/sunroute/tokushima/"
  ),
  stay(
    "tokushima-city-stay-03",
    "ダイワロイネットホテル徳島駅前",
    "徳島県徳島市寺島本町東3丁目8番地",
    "088-611-8455",
    "https://www.daiwaroynet.jp/tokushima-ekimae/"
  ),
  stay(
    "tokushima-city-stay-04",
    "アパホテル〈徳島駅前〉",
    "徳島県徳島市一番町2-21",
    "088-655-5005",
    "https://web.travel.rakuten.co.jp/share/HOTEL/19105/19105.jpg"
  ),
  stay(
    "tokushima-city-stay-05",
    "東横INN徳島駅前",
    "徳島県徳島市両国本町1-5",
    "088-657-1045",
    "https://www.toyoko-inn.com/search/detail/00187/"
  ),
  stay(
    "tokushima-city-stay-06",
    "徳島グランヴィリオホテル",
    "徳島県徳島市万代町3-5-1",
    "088-624-1111",
    "https://web.travel.rakuten.co.jp/share/HOTEL/71949/71949.jpg"
  ),
  stay(
    "tokushima-city-stay-07",
    "スマイルホテル徳島",
    "徳島県徳島市元町1-24",
    "088-626-0889",
    "https://www.smile-hotels.com/hotels/tokushima/"
  ),
  stay(
    "tokushima-city-stay-08",
    "ホテル グランドパレス徳島",
    "徳島県徳島市寺島本町西1-60-1",
    "088-626-1111",
    "https://web.travel.rakuten.co.jp/share/HOTEL/8830/8830.jpg"
  ),
  stay(
    "tokushima-city-stay-09",
    "アグネスホテル徳島",
    "徳島県徳島市寺島本町西1-28",
    "088-626-2222",
    "https://web.travel.rakuten.co.jp/share/HOTEL/9417/9417.jpg"
  ),
  stay(
    "tokushima-city-stay-10",
    "徳島ワシントンホテルプラザ",
    "徳島県徳島市大道1-61-1",
    "088-653-7111",
    "https://img.travel.rakuten.co.jp/share/image_up/17801/LARGE/7a6731a69a1039f0de98aea780814643ee29baf9.47.9.26.3.jpg"
  ),
  stay(
    "tokushima-city-stay-11",
    "東横INN徳島駅眉山口",
    "徳島県徳島市東大工町2-7",
    "088-626-1045",
    "https://web.travel.rakuten.co.jp/share/HOTEL/532/532.jpg"
  ),
  stay(
    "tokushima-city-stay-12",
    "アグネスホテル プラス",
    "徳島県徳島市寺島本町西1-34",
    "088-655-1212",
    "https://web.travel.rakuten.co.jp/share/HOTEL/1530/1530.jpg"
  ),
  stay(
    "tokushima-city-stay-13",
    "ホテル フォーシーズン徳島",
    "徳島県徳島市寺島本町西1-54-1",
    "088-622-2203",
    "https://web.travel.rakuten.co.jp/share/HOTEL/151296/151296.jpg"
  ),
  stay(
    "tokushima-city-stay-14",
    "阿波観光ホテル",
    "徳島県徳島市一番町3-16-3",
    "088-622-5161",
    "https://web.travel.rakuten.co.jp/share/HOTEL/7503/7503.jpg"
  ),
  stay(
    "tokushima-city-stay-15",
    "Tabist Hotel Tiki",
    "徳島県徳島市栄町3-9-1",
    "088-611-7770",
    "https://web.travel.rakuten.co.jp/share/HOTEL/187177/187177.jpg"
  ),
  stay(
    "tokushima-city-stay-16",
    "アルファホテル徳島",
    "徳島県徳島市東大工町2-11",
    "088-655-0222",
    "https://web.travel.rakuten.co.jp/share/HOTEL/130110/130110.jpg"
  ),
  stay(
    "tokushima-city-stay-17",
    "Yadoya Hiwasa 徳島",
    "徳島県徳島市西船場町1-9",
    "088-661-1381",
    "https://img.travel.rakuten.co.jp/share/image_up/142657/LARGE/f44e3182f0637118ef71be8efb68039c8f5622d6.47.9.26.3.jpg"
  ),
  stay(
    "tokushima-city-stay-18",
    "ハイパーイン 徳島両国橋",
    "徳島県徳島市富田浜1丁目9",
    "088-625-1288",
    "https://web.travel.rakuten.co.jp/share/HOTEL/18922/18922.jpg"
  ),
  stay(
    "tokushima-city-stay-19",
    "ホテル キャッスルCV",
    "徳島県徳島市北常三島2-11-1",
    "088-625-2334",
    "https://web.travel.rakuten.co.jp/share/HOTEL/109104/109104.jpg"
  ),
  stay(
    "tokushima-city-stay-20",
    "ビジネスホテル コスモス徳島",
    "徳島県徳島市中央通2-35-4",
    "088-622-2001",
    "https://img.travel.rakuten.co.jp/share/image_up/14303/LARGE/946181a570351cb2a0c75b286d8b2cfe1a2140de.47.1.26.2.jpg"
  ),
  stay(
    "tokushima-city-stay-21",
    "ビジネス旅館七歩",
    "徳島県徳島市秋田町2-49",
    "088-622-8891",
    "https://img.travel.rakuten.co.jp/share/image_up/187619/LARGE/dcd7dc03f312e206d8617ec72af10e135cac25cf.47.9.26.3.jpg"
  ),
  stay(
    "tokushima-city-stay-22",
    "ホテルみづほ",
    "徳島県徳島市南仲之町1-46-3",
    "088-654-4151",
    "https://web.travel.rakuten.co.jp/share/HOTEL/32020/32020.jpg"
  ),
  stay(
    "tokushima-city-stay-23",
    "剣山ホテル",
    "徳島県徳島市南内町2-11",
    "088-654-3331",
    "https://web.travel.rakuten.co.jp/share/HOTEL/29720/29720.jpg"
  ),
  stay(
    "tokushima-city-stay-24",
    "ホテル アストリア",
    "徳島県徳島市一番町2-26-1",
    "088-653-6151",
    "https://web.travel.rakuten.co.jp/share/HOTEL/178420/178420.jpg"
  ),
  stay(
    "tokushima-city-stay-25",
    "セルフイン徳島蔵本駅前",
    "徳島県徳島市蔵本町2-13-2",
    "088-676-2818",
    "https://img.travel.rakuten.co.jp/share/image_up/109099/LARGE/300879d51a33542c385caf4d96024e38dcaa7f61.47.9.26.3.jpg"
  ),
  stay(
    "tokushima-city-stay-26",
    "ホテル千秋閣",
    "徳島県徳島市幸町3-55",
    "088-622-9121",
    "https://web.travel.rakuten.co.jp/share/HOTEL/70883/70883.jpg"
  ),
  stay(
    "tokushima-city-stay-27",
    "ビジネスホテル サンパール",
    "徳島県徳島市富田橋1-86",
    "088-653-3537",
    "https://img.travel.rakuten.co.jp/share/image_up/8723/LARGE/hBi1vE.jpeg"
  ),
  stay(
    "tokushima-city-stay-28",
    "センチュリープラザホテル",
    "徳島県徳島市南昭和町1-46-1",
    "088-655-3333",
    "https://web.travel.rakuten.co.jp/share/HOTEL/84972/84972.jpg"
  ),
  stay(
    "tokushima-city-stay-29",
    "ビジネスホテル アバァンティ(AVANTI)",
    "徳島県徳島市東大工町1-20",
    "088-654-5550",
    "https://web.travel.rakuten.co.jp/share/HOTEL/28052/28052.jpg"
  ),
  stay(
    "tokushima-city-stay-30",
    "ハイパーイン ホテル越久(えちひさ)",
    "徳島県徳島市富田浜1-22",
    "088-623-6081",
    "https://web.travel.rakuten.co.jp/share/HOTEL/76869/76869.jpg"
  ),
  stay(
    "tokushima-city-stay-31",
    "徳島ステーションホテル",
    "徳島県徳島市寺島本町東3-4",
    "088-652-8181",
    "https://web.travel.rakuten.co.jp/share/HOTEL/12634/12634.jpg"
  ),
  stay(
    "tokushima-city-stay-32",
    "心のやすらぐ宿 旅館ニュー丸新",
    "徳島県徳島市富田浜3-10",
    "088-652-4752",
    "https://web.travel.rakuten.co.jp/share/HOTEL/10786/10786.jpg"
  ),
  stay(
    "tokushima-city-stay-33",
    "Hostel Coliberty",
    "徳島県徳島市幟町4-23",
    "070-8428-5797",
    "https://web.travel.rakuten.co.jp/share/HOTEL/184482/184482.jpg"
  ),
  stay(
    "tokushima-city-stay-34",
    "ホテル サンシャイン徳島",
    "徳島県徳島市南出来島町2丁目9",
    "088-622-2333",
    "https://web.travel.rakuten.co.jp/share/HOTEL/164950/164950.jpg"
  ),
  stay(
    "tokushima-city-stay-35",
    "ビジネスホテルアネックスみづほ",
    "徳島県徳島市富田橋1-119-7",
    "088-654-7878",
    "https://web.travel.rakuten.co.jp/share/HOTEL/172414/172414.jpg"
  ),
  stay(
    "tokushima-city-stay-36",
    "ハイパーイン メイアップ徳島",
    "徳島県徳島市幸町3-108",
    null,
    "https://travel.rakuten.co.jp/HOTEL/17801/17801.html"
  ),
  stay(
    "tokushima-city-stay-37",
    "ビジネスホテル パレス２１",
    "徳島県徳島市中洲町1-26",
    null,
    "https://travel.rakuten.co.jp/HOTEL/29720/29720.html"
  ),
  stay(
    "tokushima-city-stay-38",
    "阿波の国・昴宿よしの",
    "徳島県徳島市一番町3-18",
    null,
    "https://travel.rakuten.co.jp/HOTEL/74531/74531.html"
  ),
  stay(
    "tokushima-city-stay-39",
    "ホテルたいよう農園 徳島県庁前",
    "徳島県徳島市昭和町1-15",
    null,
    "https://travel.rakuten.co.jp/HOTEL/76869/76869.html"
  ),
  stay(
    "tokushima-city-stay-40",
    "天空のスカイビューホテル 眉山海月",
    "徳島県徳島市八万町中津山3-70",
    null,
    "https://travel.rakuten.co.jp/HOTEL/187619/187619.html"
  ),
  stay(
    "tokushima-city-stay-41",
    "ホテル偕幸",
    "徳島県徳島市伊賀町1-8",
    null,
    "https://travel.rakuten.co.jp/HOTEL/197157/197157.html"
  ),
  stay(
    "tokushima-city-stay-42",
    "ＣＯＺＹ ＣＯＭＦＯＲＴＳ ＨＯＴＥＬ（コージーコンフォーツホテル）",
    "徳島県徳島市仲之町1-40",
    null,
    "https://travel.rakuten.co.jp/HOTEL/202210/202210.html"
  )
];

function dining(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'dining',
    address,
    phone,
    source_url,
    accessed: TOKUSHIMA_CITY_TRAVEL_ACCESSED
  };
}

export const TOKUSHIMA_CITY_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    "tokushima-city-dining-01",
    "いのたに 本店",
    "徳島県徳島市西大工町4-25",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000011/"
  ),
  dining(
    "tokushima-city-dining-02",
    "かま田",
    "徳島県徳島市秋田町1-14 カカコビル 2F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005584/"
  ),
  dining(
    "tokushima-city-dining-03",
    "ししくい",
    "徳島県徳島市南沖洲4-5-7-1",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000015/"
  ),
  dining(
    "tokushima-city-dining-04",
    "ぽんず",
    "徳島県徳島市南内町2-5-1",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005708/"
  ),
  dining(
    "tokushima-city-dining-05",
    "口福 みなみ",
    "徳島県徳島市籠屋町2-7-1 ありすがわビル 2F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006741/"
  ),
  dining(
    "tokushima-city-dining-06",
    "パスト エ ビバンド ガク",
    "徳島県徳島市秋田町2-52",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36004801/"
  ),
  dining(
    "tokushima-city-dining-07",
    "オーバッシュカフェ",
    "徳島県徳島市東船場1-26",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36004761/"
  ),
  dining(
    "tokushima-city-dining-08",
    "肴屋けん三",
    "徳島県徳島市昭和町2-42",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006457/"
  ),
  dining(
    "tokushima-city-dining-09",
    "巽屋",
    "徳島県徳島市住吉5-68-1",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000036/"
  ),
  dining(
    "tokushima-city-dining-10",
    "ビストロ・ラ・カシェット",
    "徳島県徳島市南矢三町1-8-18",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006724/"
  ),
  dining(
    "tokushima-city-dining-11",
    "ラ ボッテガ デル オーリオ",
    "徳島県徳島市富田町2-8 福美ビル2F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36004067/"
  ),
  dining(
    "tokushima-city-dining-12",
    "いさみ",
    "徳島県徳島市富田町2-30",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005458/"
  ),
  dining(
    "tokushima-city-dining-13",
    "炭火焼ステーキ 但馬",
    "徳島県徳島市八万町犬山261-3",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36008044/"
  ),
  dining(
    "tokushima-city-dining-14",
    "美味心鮮 籠屋町 鳴帆渡",
    "徳島県徳島市籠屋町2丁目25",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36002872/"
  ),
  dining(
    "tokushima-city-dining-15",
    "居酒屋　はる坊",
    "徳島県徳島市中央通1丁目25",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36003103/"
  ),
  dining(
    "tokushima-city-dining-16",
    "とくさん",
    "徳島県徳島市寺島本町西1-42 EBISUビル",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000488/"
  ),
  dining(
    "tokushima-city-dining-17",
    "手打ちそば 遊山",
    "徳島県徳島市八万町上長谷102-1",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006466/"
  ),
  dining(
    "tokushima-city-dining-18",
    "食彩かなで",
    "徳島県徳島市秋田町2-8",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005710/"
  ),
  dining(
    "tokushima-city-dining-19",
    "東條",
    "徳島県徳島市東新町2-12 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36007407/"
  ),
  dining(
    "tokushima-city-dining-20",
    "和田乃屋 本店",
    "徳島県徳島市眉山町大滝山5-3",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000347/"
  ),
  dining(
    "tokushima-city-dining-21",
    "酒菜和の香",
    "徳島県徳島市安宅2-3-17",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36001081/"
  ),
  dining(
    "tokushima-city-dining-22",
    "鳥焼処 鳥ぼん 本店",
    "徳島県徳島市一番町2-11-3",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000176/"
  ),
  dining(
    "tokushima-city-dining-23",
    "阿波尾鶏指定料理店 紺屋町 よしこの",
    "徳島県徳島市紺屋町5-6 アクティ21 8Ｆ",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006720/"
  ),
  dining(
    "tokushima-city-dining-24",
    "萬里",
    "徳島県徳島市寺島本町東2-11-3",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000629/"
  ),
  dining(
    "tokushima-city-dining-25",
    "御料理 なつめ",
    "徳島県徳島市栄町1-37",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000275/"
  ),
  dining(
    "tokushima-city-dining-26",
    "酒肴結 さかぐち",
    "徳島県徳島市栄町2-5-1 久米ビル 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006104/"
  ),
  dining(
    "tokushima-city-dining-27",
    "喜助",
    "徳島県徳島市中央通1-16 福井ビル１階",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000821/"
  ),
  dining(
    "tokushima-city-dining-28",
    "居酒屋",
    "徳島県徳島市南内町2-10",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36002362/"
  ),
  dining(
    "tokushima-city-dining-29",
    "S.B.DINER TOKUSHIMA",
    "徳島県徳島市両国本町1-14",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006765/"
  ),
  dining(
    "tokushima-city-dining-30",
    "王者-23",
    "徳島県徳島市国府町和田字表17-4",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005071/"
  ),
  dining(
    "tokushima-city-dining-31",
    "Roast Chicken&M.C.Cafe Bon",
    "徳島県徳島市南出来島町1-41-1",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005804/"
  ),
  dining(
    "tokushima-city-dining-32",
    "ポエシア",
    "徳島県徳島市秋田町1-54 ロイヤルクレイン秋田町 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005048/"
  ),
  dining(
    "tokushima-city-dining-33",
    "Bar 余白",
    "徳島県徳島市寺島本町東2-18-1",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36007504/"
  ),
  dining(
    "tokushima-city-dining-34",
    "くさか",
    "徳島県徳島市秋田町2-5-1 サントリープラザビル 2F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36007280/"
  ),
  dining(
    "tokushima-city-dining-35",
    "鳥ぼん 徳島本町店",
    "徳島県徳島市徳島本町1-12-1",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005691/"
  ),
  dining(
    "tokushima-city-dining-36",
    "元祖大判焼 あたりや",
    "徳島県徳島市元町1-24 アミコビル 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000061/"
  ),
  dining(
    "tokushima-city-dining-37",
    "セルフうどん やま 徳島駅前店",
    "徳島県徳島市寺島本町東3-12-7",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36001628/"
  ),
  dining(
    "tokushima-city-dining-38",
    "ココロ",
    "徳島県徳島市秋田町2-33 キリンシーグラムビル 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36008620/"
  ),
  dining(
    "tokushima-city-dining-39",
    "活魚水産 紺屋町本店",
    "徳島県徳島市紺屋町21-4",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36003913/"
  ),
  dining(
    "tokushima-city-dining-40",
    "つるはし",
    "徳島県徳島市東山手町1-14",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36001267/"
  ),
  dining(
    "tokushima-city-dining-41",
    "堂の浦 駅前店",
    "徳島県徳島市寺島本町西1丁目45-1",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36004932/"
  ),
  dining(
    "tokushima-city-dining-42",
    "食楽園",
    "徳島県徳島市南仲之町1-8",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36001271/"
  ),
  dining(
    "tokushima-city-dining-43",
    "中華そば かわい",
    "徳島県徳島市川内町加賀須野436-4",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36003040/"
  ),
  dining(
    "tokushima-city-dining-44",
    "食らんど もっちゃん",
    "徳島県徳島市富田町2-29",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36001665/"
  ),
  dining(
    "tokushima-city-dining-45",
    "スガッチィー",
    "徳島県徳島市住吉1-6-11",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000855/"
  ),
  dining(
    "tokushima-city-dining-46",
    "やました",
    "徳島県徳島市栄町1丁目72-2 keyaki place1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006442/"
  ),
  dining(
    "tokushima-city-dining-47",
    "麺屋 六根",
    "徳島県徳島市寺島本町西1-32",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36003938/"
  ),
  dining(
    "tokushima-city-dining-48",
    "西食",
    "徳島県徳島市川内町榎瀬629-4",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36000182/"
  ),
  dining(
    "tokushima-city-dining-49",
    "地鶏料理専門店 無玄",
    "徳島県徳島市鷹匠町1-33 丸平ビル 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36003961/"
  ),
  dining(
    "tokushima-city-dining-50",
    "esse",
    "徳島県徳島市秋田町2-35-2 イーストビル 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36008675/"
  ),
  dining(
    "tokushima-city-dining-51",
    "WAKA Ristorante",
    "徳島県徳島市蔵本町3-8",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006817/"
  ),
  dining(
    "tokushima-city-dining-52",
    "森珈琲店",
    "徳島県徳島市寺島本町西1-57 徳島駅前ターミナルビル 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36002642/"
  ),
  dining(
    "tokushima-city-dining-53",
    "酒菜きっちん 雄食",
    "徳島県徳島市一番町3-5",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36005751/"
  ),
  dining(
    "tokushima-city-dining-54",
    "すし瀬名波",
    "徳島県徳島市栄町1-39-1 ゴリラ横丁ビル 1F",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36006605/"
  ),
  dining(
    "tokushima-city-dining-55",
    "蓮菜",
    "徳島県徳島市紺屋町32",
    "",
    "https://tabelog.com/tokushima/A3601/A360101/36002138/"
  ),
];

export const TOKUSHIMA_CITY_DINING_NAME_SET: ReadonlySet<string> = new Set(
  TOKUSHIMA_CITY_TRAVEL_DINING.map((row) => row.name_ja)
);

export const TOKUSHIMA_CITY_STAY_NAME_SET: ReadonlySet<string> = new Set(
  TOKUSHIMA_CITY_TRAVEL_STAY.map((row) => row.name_ja)
);

function shopping(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'shopping',
    address,
    phone,
    source_url,
    accessed: TOKUSHIMA_CITY_TRAVEL_ACCESSED
  };
}

function commerce(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'commerce',
    address,
    phone,
    source_url,
    accessed: TOKUSHIMA_CITY_TRAVEL_ACCESSED
  };
}

/** Rank strongest Instagram-style arcade/mall photos first. */
export const TOKUSHIMA_CITY_TRAVEL_SHOPPING: readonly TravelRow[] = [
  shopping(
    'tokushima-city-shopping-01',
    '東新町商店街',
    '徳島県徳島市東新町',
    null,
    'https://www.city.tokushima.tokushima.jp/kankou/'
  ),
  shopping(
    'tokushima-city-shopping-02',
    'アミコ専門店街',
    '徳島県徳島市元町1丁目24番地',
    '088-621-4427',
    TOKUSHIMA_CITY_TRAVEL_SOURCES.amico
  ),
  shopping(
    'tokushima-city-shopping-03',
    '両国本町商店街',
    '徳島県徳島市両国本町',
    null,
    'https://www.city.tokushima.tokushima.jp/kankou/'
  ),
  shopping(
    'tokushima-city-shopping-04',
    'しんまちボードウォーク（パラソルショップ）',
    '徳島県徳島市南内町・新町橋',
    null,
    TOKUSHIMA_CITY_TRAVEL_SOURCES.boardWalk
  )
];

export const TOKUSHIMA_CITY_TRAVEL_COMMERCE: readonly TravelRow[] = [
  commerce(
    'tokushima-city-commerce-01',
    'アミコビル',
    '徳島県徳島市寺島本町西1丁目・元町1丁目',
    '088-621-4427',
    TOKUSHIMA_CITY_TRAVEL_SOURCES.amico
  ),
  commerce(
    'tokushima-city-commerce-02',
    'アミコ東館',
    '徳島県徳島市寺島本町西1丁目5番地',
    null,
    TOKUSHIMA_CITY_TRAVEL_SOURCES.amico
  )
];

export const TOKUSHIMA_CITY_TRAVEL_ALL: readonly TravelRow[] = [
  ...TOKUSHIMA_CITY_TRAVEL_STAY,
  ...TOKUSHIMA_CITY_TRAVEL_DINING,
  ...TOKUSHIMA_CITY_TRAVEL_SHOPPING,
  ...TOKUSHIMA_CITY_TRAVEL_COMMERCE
];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);

function isPackCategory(value: string | undefined): value is FacilityCategory {
  return LOOKUP_CATEGORIES.some((cat) => cat === value);
}

function isInfraCategory(value: string): boolean {
  return INFRA_SET.has(value);
}

function isSightsCategory(value: string): boolean {
  return SIGHTS_SET.has(value);
}

export const TOKUSHIMA_CITY_EXPERIENCE_PACK_NAMES = ['あわぎん眉山ロープウエイ', '徳島城博物館', '徳島ガラススタジオ', 'とくしま動物園', 'ひょうたん島クルーズ'] as const;
export const TOKUSHIMA_CITY_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TOKUSHIMA_CITY_EXPERIENCE_PACK_NAMES);

export const TOKUSHIMA_CITY_ONSEN_PACK_NAMES = [
  "天然温泉びざんの湯",
  "阿波観光ホテル 大浴場",
  "センチュリープラザホテル 女湯",
  "ホテル サンシャイン徳島 大浴場",
  "阿波の国・昴宿よしの 大浴場",
  "アグネスホテル プラス 大浴場",
  "天空のスカイビューホテル 眉山海月 露天風呂"
] as const;
export const TOKUSHIMA_CITY_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TOKUSHIMA_CITY_ONSEN_PACK_NAMES);

export function isTokushimaCityOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOKUSHIMA_CITY_ONSEN_PACK_SET.has(row.name_ja);
}

export function isTokushimaCityExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOKUSHIMA_CITY_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isTokushimaCityStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTokushimaCityDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TOKUSHIMA_CITY_DINING_NAME_SET.has(row.name_ja);
}

export function tokushimaCitySightPhoto(nameJa: string): MimaPlacePhoto | null {
  return TOKUSHIMA_CITY_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankTokushimaCitySeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isTokushimaCityOnsenPackRow(row) &&
      !isTokushimaCityExperiencePackRow(row) &&
      !isTokushimaCityStayPackRow(row) &&
      !isTokushimaCityDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of TOKUSHIMA_CITY_SIGHT_PINS) {
    const hit = sights.find((row) => row.name_ja === pin);
    if (!hit) continue;
    pinned.push(hit);
    used.add(hit.id);
    usedNames.add(hit.name_ja);
  }
  const restTourism: T[] = [];
  const restCultural: T[] = [];
  for (const row of sights) {
    if (used.has(row.id)) continue;
    if (usedNames.has(row.name_ja)) continue;
    used.add(row.id);
    usedNames.add(row.name_ja);
    if (row.category === 'tourism') restTourism.push(row);
    else restCultural.push(row);
  }
  return [...pinned, ...restTourism, ...restCultural];
}

export function tokushimaCitySourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '徳島市 飲食案内' : 'Tokushima dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '徳島市 宿泊案内' : 'Tokushima lodging list';
  }
  if (row.category === 'shopping') {
    return locale === 'ja' ? '徳島市 買物案内' : 'Tokushima shopping list';
  }
  if (row.category === 'commerce') {
    return locale === 'ja' ? '徳島市 商業案内' : 'Tokushima commerce list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function tokushimaCityTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTokushimaCityOnsenPackRow(row)) return 'onsen';
  if (isTokushimaCityExperiencePackRow(row)) return 'experience';
  if (isTokushimaCityStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isTokushimaCityDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function tokushimaCityPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isTokushimaCityOnsenPackRow(row) &&
      !isTokushimaCityExperiencePackRow(row) &&
      !isTokushimaCityStayPackRow(row) &&
      !isTokushimaCityDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTokushimaCityOnsenPackRow(row);
  if (filter === 'experience') return isTokushimaCityExperiencePackRow(row);
  if (filter === 'stay') return isTokushimaCityStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveTokushimaCityFilter(c: string | undefined, q: string): FilterId {
  if (
    c === 'sights' ||
    c === 'stay' ||
    c === 'dining' ||
    c === 'onsen' ||
    c === 'experience' ||
    c === 'shopping' ||
    c === 'commerce'
  ) {
    return c;
  }
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}

export const TOKUSHIMA_CITY_HALL = TOKUSHIMA_CITY.hall;
