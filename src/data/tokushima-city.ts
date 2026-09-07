/**
 * Tokushima City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-08-28). JIS 36201. Not 鳴門 / 三好 / 藍住.
 * Code name tokushima-city so it does not clash with prefecture slug tokushima.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TOKUSHIMA_CITY = {
  nameJa: '徳島市',
  nameEn: 'Tokushima',
  reading: 'とくしまし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'tokushima',
  jis: '36201',
  jlis: '362018',
  sameAs: 'https://www.city.tokushima.tokushima.jp/',
  hall: {
    postalCode: '770-8571',
    addressJa: '徳島県徳島市幸町2丁目5番地',
    addressEn: '2-5 Saiwai-cho, Tokushima, Tokushima 770-8571, Japan',
    phone: '088-621-5111'
  },
  sources: {
    home: 'https://www.city.tokushima.tokushima.jp/',
    hall: 'https://www.city.tokushima.tokushima.jp/shisei/shiyakusho/shiyakusho_about.html',
    hallMap: 'https://www.city.tokushima.tokushima.jp/shisei/shiyakusho/ka_ichiran/index.html',
    kanko: 'https://www.tokushima-kankou.or.jp/',
    bizan: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/bizan.html',
    boardWalk: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/board_walk.html',
    awaodori: 'https://www.city.tokushima.tokushima.jp/shisetsu/bunka_art/awaodori_kaikan.html',
    castlePark: 'https://www.city.tokushima.tokushima.jp/shisetsu/park/chuo.html',
    bentenYama: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/benten_yama.html',
    bunkaNoMori: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/bunkanomori.html',
    bizanPark: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/bizan.html',
    johaku: 'https://www.city.tokushima.tokushima.jp/johaku/',
    glassStudio: 'https://www.city.tokushima.tokushima.jp/shisetsu/bunka_art/glass/index.html',
    zoo: 'https://tokushimazoo.jp/',
    hyotanCruise: 'https://www.awanavi.jp/archives/spot/2542',
    tabelogCity: 'https://tabelog.com/tokushima/C36201/rstLst/',
    amico: 'https://www.amico-tokushima.jp/',
    sunroute: 'https://sotetsu-hotels.com/sunroute/tokushima/',
    bizanYu: 'https://www.awanavi.jp/archives/spot/1670',
    accessed: '2026-09-07'
  }
} as const;

export const TOKUSHIMA_CITY_EXPECTED_ROW_COUNT = 13;
export const TOKUSHIMA_CITY_EXPECTED_GEO_COUNT = 13;

function wikiPhoto(
  file: string,
  commons: string,
  license: string,
  licenseUrl: string,
  author: string,
  authorUrl: string,
  taken: string,
  altJa: string,
  altEn: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons,
    license,
    licenseUrl,
    author,
    authorUrl,
    taken,
    accessed: '2026-09-07',
    altJa,
    altEn
  };
}


/** Cover: File:Mount Bizan from Shimmachi River 20200607.jpg — 新町川から臨む眉山. Not 鳴門渦潮 / 大歩危 / かずら橋. */
export const TOKUSHIMA_CITY_PLACE_PHOTO = wikiPhoto(
  'bizan-shimmachi.jpg',
  'https://commons.wikimedia.org/wiki/File:Mount_Bizan_from_Shimmachi_River_20200607.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  '新幹線',
  'https://commons.wikimedia.org/wiki/User:%E6%96%B0%E5%B9%B9%E7%B7%9A',
  '2020-06-07',
  '新町川から臨む眉山（徳島市）',
  'Mount Bizan from the Shinmachi River, Tokushima'
);

function sourcePhoto(
  file: string,
  altJa: string,
  altEn: string,
  page: string,
  author: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons: page,
    license: '出典',
    licenseUrl: page,
    author,
    authorUrl: page,
    taken: '2026',
    accessed: '2026-09-07',
    altJa,
    altEn
  };
}

/** Exact travel/sight name_ja only. No 鳴門 / 三好 / 藍住 photos. */
export const TOKUSHIMA_CITY_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '眉山': TOKUSHIMA_CITY_PLACE_PHOTO,
  '徳島城跡': wikiPhoto(
    'tokushima-castle.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_castle03s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-07',
    '徳島城跡（徳島市徳島町城内）',
    'Tokushima Castle ruins, Tokushima-cho, Tokushima'
  ),
  '新町川水際公園・しんまちボードウォーク': wikiPhoto(
    'shinmachi-boardwalk.jpg',
    'https://commons.wikimedia.org/wiki/File:Shinmachi_boardwalk01s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-06',
    'しんまちボードウォーク（徳島市南内町）',
    'Shinmachi Boardwalk, Minamiuchi-cho, Tokushima'
  ),
  '阿波おどり会館': wikiPhoto(
    'awa-odori-kaikan.jpg',
    'https://commons.wikimedia.org/wiki/File:Awa_Odori_Hall_and_Mount_Bizan.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'そらみみ',
    'https://commons.wikimedia.org/wiki/User:Soramimi',
    '2016-05-04',
    '阿波おどり会館と眉山ロープウェイ（徳島市新町橋）',
    'Awa Odori Hall and Bizan Ropeway, Shinmachibashi, Tokushima'
  ),
  'あわぎん眉山ロープウエイ': wikiPhoto(
    'bizan-ropeway.jpg',
    'https://commons.wikimedia.org/wiki/File:071006_Bizan_Ropeway_Tokushima_Japan02bs9.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-06',
    'あわぎん眉山ロープウエイ（徳島市新町橋）',
    'Awagin Bizan Ropeway, Shinmachibashi, Tokushima'
  ),

  '弁天山': wikiPhoto(
    'benten-yama.jpg',
    'https://commons.wikimedia.org/wiki/File:Benten-yama_in_Tokushima,_zenkei.jpg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Saigen Jiro',
    'https://commons.wikimedia.org/wiki/User:Saigen_Jiro',
    '2016-07-16',
    '弁天山全景（徳島市八万町）',
    'Mount Benten panorama, Hachiman-cho, Tokushima'
  ),
  '文化の森総合公園': wikiPhoto(
    'bunka-no-mori.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_bunka-no-mori_park02s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-28',
    '文化の森総合公園（徳島市八万町）',
    'Tokushima Bunka-no-mori Park, Hachiman-cho, Tokushima'
  ),
  '眉山公園': wikiPhoto(
    'bizan-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Bizan_Park_20200405.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    '新幹線',
    'https://commons.wikimedia.org/wiki/User:%E6%96%B0%E5%B9%B9%E7%B7%9A',
    '2020-04-05',
    '眉山公園（徳島市）',
    'Bizan Park, Tokushima'
  ),
  '徳島城博物館': wikiPhoto(
    'tokushima-castle-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_castle_museum02s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-07',
    '徳島城博物館（徳島市徳島町城内）',
    'Tokushima Castle Museum, Tokushima-cho, Tokushima'
  ),
  '徳島ガラススタジオ': wikiPhoto(
    'tokushima-glass-studio.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_glass_studio.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    '正やた',
    'https://commons.wikimedia.org/wiki/File:Tokushima_glass_studio.jpg',
    '2015-05-08',
    '徳島ガラススタジオ（徳島市勝占町）',
    'Tokushima Glass Studio, Katsura-cho, Tokushima'
  ),
  'とくしま動物園': wikiPhoto(
    'tokushima-zoo-gate.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_Zoo_Main_Entrance.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'KishujiRapid',
    'https://commons.wikimedia.org/wiki/User:KishujiRapid',
    '2016-04-17',
    'とくしま動物園正門（徳島市）',
    'Tokushima Zoo main gate, Tokushima'
  ),
  'ひょうたん島クルーズ': wikiPhoto(
    'tokushima-hyotan-cruise.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_hyoutanjima_cruise.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'ブルーノ・プラス',
    'https://commons.wikimedia.org/wiki/File:Tokushima_hyoutanjima_cruise.jpg',
    '2023-04',
    'ひょうたん島クルーズ船（徳島市）',
    'Hyotan-jima cruise boat, Tokushima'
  ),
  "いのたに 本店": sourcePhoto(
    "tokushima-36000011-dish.jpg",
    "いのたに 本店の料理写真",
    "いのたに 本店 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000011/",
    '食べログ'
  ),
  "かま田": sourcePhoto(
    "tokushima-36005584-dish.jpg",
    "かま田の料理写真",
    "かま田 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005584/",
    '食べログ'
  ),
  "ししくい": sourcePhoto(
    "tokushima-36000015-dish.jpg",
    "ししくいの料理写真",
    "ししくい food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000015/",
    '食べログ'
  ),
  "ぽんず": sourcePhoto(
    "tokushima-36005708-dish.jpg",
    "ぽんずの料理写真",
    "ぽんず food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005708/",
    '食べログ'
  ),
  "口福 みなみ": sourcePhoto(
    "tokushima-36006741-dish.jpg",
    "口福 みなみの料理写真",
    "口福 みなみ food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006741/",
    '食べログ'
  ),
  "パスト エ ビバンド ガク": sourcePhoto(
    "tokushima-36004801-dish.jpg",
    "パスト エ ビバンド ガクの料理写真",
    "パスト エ ビバンド ガク food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36004801/",
    '食べログ'
  ),
  "オーバッシュカフェ": sourcePhoto(
    "tokushima-36004761-dish.jpg",
    "オーバッシュカフェの料理写真",
    "オーバッシュカフェ food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36004761/",
    '食べログ'
  ),
  "肴屋けん三": sourcePhoto(
    "tokushima-36006457-dish.jpg",
    "肴屋けん三の料理写真",
    "肴屋けん三 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006457/",
    '食べログ'
  ),
  "巽屋": sourcePhoto(
    "tokushima-36000036-dish.jpg",
    "巽屋の料理写真",
    "巽屋 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000036/",
    '食べログ'
  ),
  "ビストロ・ラ・カシェット": sourcePhoto(
    "tokushima-36006724-dish.jpg",
    "ビストロ・ラ・カシェットの料理写真",
    "ビストロ・ラ・カシェット food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006724/",
    '食べログ'
  ),
  "ラ ボッテガ デル オーリオ": sourcePhoto(
    "tokushima-36004067-dish.jpg",
    "ラ ボッテガ デル オーリオの料理写真",
    "ラ ボッテガ デル オーリオ food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36004067/",
    '食べログ'
  ),
  "いさみ": sourcePhoto(
    "tokushima-36005458-dish.jpg",
    "いさみの料理写真",
    "いさみ food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005458/",
    '食べログ'
  ),
  "炭火焼ステーキ 但馬": sourcePhoto(
    "tokushima-36008044-dish.jpg",
    "炭火焼ステーキ 但馬の料理写真",
    "炭火焼ステーキ 但馬 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36008044/",
    '食べログ'
  ),
  "美味心鮮 籠屋町 鳴帆渡": sourcePhoto(
    "tokushima-36002872-dish.jpg",
    "美味心鮮 籠屋町 鳴帆渡の料理写真",
    "美味心鮮 籠屋町 鳴帆渡 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36002872/",
    '食べログ'
  ),
  "居酒屋　はる坊": sourcePhoto(
    "tokushima-36003103-dish.jpg",
    "居酒屋　はる坊の料理写真",
    "居酒屋　はる坊 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36003103/",
    '食べログ'
  ),
  "とくさん": sourcePhoto(
    "tokushima-36000488-dish.jpg",
    "とくさんの料理写真",
    "とくさん food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000488/",
    '食べログ'
  ),
  "手打ちそば 遊山": sourcePhoto(
    "tokushima-36006466-dish.jpg",
    "手打ちそば 遊山の料理写真",
    "手打ちそば 遊山 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006466/",
    '食べログ'
  ),
  "食彩かなで": sourcePhoto(
    "tokushima-36005710-dish.jpg",
    "食彩かなでの料理写真",
    "食彩かなで food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005710/",
    '食べログ'
  ),
  "東條": sourcePhoto(
    "tokushima-36007407-dish.jpg",
    "東條の料理写真",
    "東條 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36007407/",
    '食べログ'
  ),
  "和田乃屋 本店": sourcePhoto(
    "tokushima-36000347-dish.jpg",
    "和田乃屋 本店の料理写真",
    "和田乃屋 本店 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000347/",
    '食べログ'
  ),
  "酒菜和の香": sourcePhoto(
    "tokushima-36001081-dish.jpg",
    "酒菜和の香の料理写真",
    "酒菜和の香 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36001081/",
    '食べログ'
  ),
  "鳥焼処 鳥ぼん 本店": sourcePhoto(
    "tokushima-36000176-dish.jpg",
    "鳥焼処 鳥ぼん 本店の料理写真",
    "鳥焼処 鳥ぼん 本店 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000176/",
    '食べログ'
  ),
  "阿波尾鶏指定料理店 紺屋町 よしこの": sourcePhoto(
    "tokushima-36006720-dish.jpg",
    "阿波尾鶏指定料理店 紺屋町 よしこのの料理写真",
    "阿波尾鶏指定料理店 紺屋町 よしこの food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006720/",
    '食べログ'
  ),
  "萬里": sourcePhoto(
    "tokushima-36000629-dish.jpg",
    "萬里の料理写真",
    "萬里 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000629/",
    '食べログ'
  ),
  "御料理 なつめ": sourcePhoto(
    "tokushima-36000275-dish.jpg",
    "御料理 なつめの料理写真",
    "御料理 なつめ food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000275/",
    '食べログ'
  ),
  "酒肴結 さかぐち": sourcePhoto(
    "tokushima-36006104-dish.jpg",
    "酒肴結 さかぐちの料理写真",
    "酒肴結 さかぐち food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006104/",
    '食べログ'
  ),
  "喜助": sourcePhoto(
    "tokushima-36000821-dish.jpg",
    "喜助の料理写真",
    "喜助 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000821/",
    '食べログ'
  ),
  "居酒屋": sourcePhoto(
    "tokushima-36002362-dish.jpg",
    "居酒屋の料理写真",
    "居酒屋 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36002362/",
    '食べログ'
  ),
  "S.B.DINER TOKUSHIMA": sourcePhoto(
    "tokushima-36006765-dish.jpg",
    "S.B.DINER TOKUSHIMAの料理写真",
    "S.B.DINER TOKUSHIMA food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006765/",
    '食べログ'
  ),
  "王者-23": sourcePhoto(
    "tokushima-36005071-dish.jpg",
    "王者-23の料理写真",
    "王者-23 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005071/",
    '食べログ'
  ),
  "Roast Chicken&M.C.Cafe Bon": sourcePhoto(
    "tokushima-36005804-dish.jpg",
    "Roast Chicken&M.C.Cafe Bonの料理写真",
    "Roast Chicken&M.C.Cafe Bon food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005804/",
    '食べログ'
  ),
  "ポエシア": sourcePhoto(
    "tokushima-36005048-dish.jpg",
    "ポエシアの料理写真",
    "ポエシア food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005048/",
    '食べログ'
  ),
  "Bar 余白": sourcePhoto(
    "tokushima-36007504-dish.jpg",
    "Bar 余白の料理写真",
    "Bar 余白 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36007504/",
    '食べログ'
  ),
  "くさか": sourcePhoto(
    "tokushima-36007280-dish.jpg",
    "くさかの料理写真",
    "くさか food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36007280/",
    '食べログ'
  ),
  "鳥ぼん 徳島本町店": sourcePhoto(
    "tokushima-36005691-dish.jpg",
    "鳥ぼん 徳島本町店の料理写真",
    "鳥ぼん 徳島本町店 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005691/",
    '食べログ'
  ),
  "元祖大判焼 あたりや": sourcePhoto(
    "tokushima-36000061-dish.jpg",
    "元祖大判焼 あたりやの料理写真",
    "元祖大判焼 あたりや food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000061/",
    '食べログ'
  ),
  "セルフうどん やま 徳島駅前店": sourcePhoto(
    "tokushima-36001628-dish.jpg",
    "セルフうどん やま 徳島駅前店の料理写真",
    "セルフうどん やま 徳島駅前店 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36001628/",
    '食べログ'
  ),
  "ココロ": sourcePhoto(
    "tokushima-36008620-dish.jpg",
    "ココロの料理写真",
    "ココロ food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36008620/",
    '食べログ'
  ),
  "活魚水産 紺屋町本店": sourcePhoto(
    "tokushima-36003913-dish.jpg",
    "活魚水産 紺屋町本店の料理写真",
    "活魚水産 紺屋町本店 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36003913/",
    '食べログ'
  ),
  "つるはし": sourcePhoto(
    "tokushima-36001267-dish.jpg",
    "つるはしの料理写真",
    "つるはし food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36001267/",
    '食べログ'
  ),
  "堂の浦 駅前店": sourcePhoto(
    "tokushima-36004932-dish.jpg",
    "堂の浦 駅前店の料理写真",
    "堂の浦 駅前店 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36004932/",
    '食べログ'
  ),
  "食楽園": sourcePhoto(
    "tokushima-36001271-dish.jpg",
    "食楽園の料理写真",
    "食楽園 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36001271/",
    '食べログ'
  ),
  "中華そば かわい": sourcePhoto(
    "tokushima-36003040-dish.jpg",
    "中華そば かわいの料理写真",
    "中華そば かわい food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36003040/",
    '食べログ'
  ),
  "食らんど もっちゃん": sourcePhoto(
    "tokushima-36001665-dish.jpg",
    "食らんど もっちゃんの料理写真",
    "食らんど もっちゃん food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36001665/",
    '食べログ'
  ),
  "スガッチィー": sourcePhoto(
    "tokushima-36000855-dish.jpg",
    "スガッチィーの料理写真",
    "スガッチィー food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000855/",
    '食べログ'
  ),
  "やました": sourcePhoto(
    "tokushima-36006442-dish.jpg",
    "やましたの料理写真",
    "やました food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006442/",
    '食べログ'
  ),
  "麺屋 六根": sourcePhoto(
    "tokushima-36003938-dish.jpg",
    "麺屋 六根の料理写真",
    "麺屋 六根 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36003938/",
    '食べログ'
  ),
  "西食": sourcePhoto(
    "tokushima-36000182-dish.jpg",
    "西食の料理写真",
    "西食 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36000182/",
    '食べログ'
  ),
  "地鶏料理専門店 無玄": sourcePhoto(
    "tokushima-36003961-dish.jpg",
    "地鶏料理専門店 無玄の料理写真",
    "地鶏料理専門店 無玄 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36003961/",
    '食べログ'
  ),
  "esse": sourcePhoto(
    "tokushima-36008675-dish.jpg",
    "esseの料理写真",
    "esse food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36008675/",
    '食べログ'
  ),
  "WAKA Ristorante": sourcePhoto(
    "tokushima-36006817-dish.jpg",
    "WAKA Ristoranteの料理写真",
    "WAKA Ristorante food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006817/",
    '食べログ'
  ),
  "森珈琲店": sourcePhoto(
    "tokushima-36002642-dish.jpg",
    "森珈琲店の料理写真",
    "森珈琲店 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36002642/",
    '食べログ'
  ),
  "酒菜きっちん 雄食": sourcePhoto(
    "tokushima-36005751-dish.jpg",
    "酒菜きっちん 雄食の料理写真",
    "酒菜きっちん 雄食 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36005751/",
    '食べログ'
  ),
  "すし瀬名波": sourcePhoto(
    "tokushima-36006605-dish.jpg",
    "すし瀬名波の料理写真",
    "すし瀬名波 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36006605/",
    '食べログ'
  ),
  "蓮菜": sourcePhoto(
    "tokushima-36002138-dish.jpg",
    "蓮菜の料理写真",
    "蓮菜 food photo",
    "https://tabelog.com/tokushima/A3601/A360101/36002138/",
    '食べログ'
  ),
  "JRホテルクレメント徳島": sourcePhoto(
    "tokushima-stay-clement-room.jpg",
    "JRホテルクレメント徳島の客室・外観写真",
    "JRホテルクレメント徳島 room or exterior photo",
    "https://www.jrclement.co.jp/tokushima/",
    "JRホテルクレメント徳島公式"
  ),
  "ホテルサンルート徳島": sourcePhoto(
    "tokushima-stay-sunroute-room.jpg",
    "ホテルサンルート徳島の客室・外観写真",
    "ホテルサンルート徳島 room or exterior photo",
    "https://sotetsu-hotels.com/sunroute/tokushima/",
    "ホテルサンルート徳島公式"
  ),
  "ダイワロイネットホテル徳島駅前": sourcePhoto(
    "tokushima-stay-daiwa-og.jpg",
    "ダイワロイネットホテル徳島駅前の客室・外観写真",
    "ダイワロイネットホテル徳島駅前 room or exterior photo",
    "https://www.daiwaroynet.jp/tokushima-ekimae/",
    "ダイワロイネットホテルズ公式"
  ),
  "アパホテル〈徳島駅前〉": sourcePhoto(
    "tokushima-stay-09.jpg",
    "アパホテル〈徳島駅前〉の客室・外観写真",
    "アパホテル〈徳島駅前〉 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/19105/19105.jpg",
    "楽天トラベル"
  ),
  "東横INN徳島駅前": sourcePhoto(
    "tokushima-stay-toyoko-og.jpg",
    "東横INN徳島駅前の客室・外観写真",
    "東横INN徳島駅前 room or exterior photo",
    "https://www.toyoko-inn.com/search/detail/00187/",
    "東横INN公式"
  ),
  "徳島グランヴィリオホテル": sourcePhoto(
    "tokushima-stay-26.jpg",
    "徳島グランヴィリオホテルの客室・外観写真",
    "徳島グランヴィリオホテル room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/71949/71949.jpg",
    "楽天トラベル"
  ),
  "スマイルホテル徳島": sourcePhoto(
    "tokushima-stay-smile.jpg",
    "スマイルホテル徳島の客室・外観写真",
    "スマイルホテル徳島 room or exterior photo",
    "https://www.smile-hotels.com/hotels/tokushima/",
    "スマイルホテル徳島公式"
  ),
  "ホテル グランドパレス徳島": sourcePhoto(
    "tokushima-stay-11.jpg",
    "ホテル グランドパレス徳島の客室・外観写真",
    "ホテル グランドパレス徳島 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/8830/8830.jpg",
    "楽天トラベル"
  ),
  "アグネスホテル徳島": sourcePhoto(
    "tokushima-stay-10.jpg",
    "アグネスホテル徳島の客室・外観写真",
    "アグネスホテル徳島 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/9417/9417.jpg",
    "楽天トラベル"
  ),
  "徳島ワシントンホテルプラザ": sourcePhoto(
    "tokushima-stay-14.jpg",
    "徳島ワシントンホテルプラザの客室・外観写真",
    "徳島ワシントンホテルプラザ room or exterior photo",
    "https://img.travel.rakuten.co.jp/share/image_up/17801/LARGE/7a6731a69a1039f0de98aea780814643ee29baf9.47.9.26.3.jpg",
    "楽天トラベル"
  ),
  "東横INN徳島駅眉山口": sourcePhoto(
    "tokushima-stay-06.jpg",
    "東横INN徳島駅眉山口の客室・外観写真",
    "東横INN徳島駅眉山口 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/532/532.jpg",
    "楽天トラベル"
  ),
  "アグネスホテル プラス": sourcePhoto(
    "tokushima-stay-18.jpg",
    "アグネスホテル プラスの客室・外観写真",
    "アグネスホテル プラス room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/1530/1530.jpg",
    "楽天トラベル"
  ),
  "ホテル フォーシーズン徳島": sourcePhoto(
    "tokushima-stay-24.jpg",
    "ホテル フォーシーズン徳島の客室・外観写真",
    "ホテル フォーシーズン徳島 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/151296/151296.jpg",
    "楽天トラベル"
  ),
  "阿波観光ホテル": sourcePhoto(
    "tokushima-stay-08.jpg",
    "阿波観光ホテルの客室・外観写真",
    "阿波観光ホテル room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/7503/7503.jpg",
    "楽天トラベル"
  ),
  "Tabist Hotel Tiki": sourcePhoto(
    "tokushima-stay-41.jpg",
    "Tabist Hotel Tikiの客室・外観写真",
    "Tabist Hotel Tiki room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/187177/187177.jpg",
    "楽天トラベル"
  ),
  "アルファホテル徳島": sourcePhoto(
    "tokushima-stay-17.jpg",
    "アルファホテル徳島の客室・外観写真",
    "アルファホテル徳島 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/130110/130110.jpg",
    "楽天トラベル"
  ),
  "Yadoya Hiwasa 徳島": sourcePhoto(
    "tokushima-stay-37.jpg",
    "Yadoya Hiwasa 徳島の客室・外観写真",
    "Yadoya Hiwasa 徳島 room or exterior photo",
    "https://img.travel.rakuten.co.jp/share/image_up/142657/LARGE/f44e3182f0637118ef71be8efb68039c8f5622d6.47.9.26.3.jpg",
    "楽天トラベル"
  ),
  "ハイパーイン 徳島両国橋": sourcePhoto(
    "tokushima-stay-25.jpg",
    "ハイパーイン 徳島両国橋の客室・外観写真",
    "ハイパーイン 徳島両国橋 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/18922/18922.jpg",
    "楽天トラベル"
  ),
  "ホテル キャッスルCV": sourcePhoto(
    "tokushima-stay-32.jpg",
    "ホテル キャッスルCVの客室・外観写真",
    "ホテル キャッスルCV room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/109104/109104.jpg",
    "楽天トラベル"
  ),
  "ビジネスホテル コスモス徳島": sourcePhoto(
    "tokushima-stay-23.jpg",
    "ビジネスホテル コスモス徳島の客室・外観写真",
    "ビジネスホテル コスモス徳島 room or exterior photo",
    "https://img.travel.rakuten.co.jp/share/image_up/14303/LARGE/946181a570351cb2a0c75b286d8b2cfe1a2140de.47.1.26.2.jpg",
    "楽天トラベル"
  ),
  "ビジネス旅館七歩": sourcePhoto(
    "tokushima-stay-42.jpg",
    "ビジネス旅館七歩の客室・外観写真",
    "ビジネス旅館七歩 room or exterior photo",
    "https://img.travel.rakuten.co.jp/share/image_up/187619/LARGE/dcd7dc03f312e206d8617ec72af10e135cac25cf.47.9.26.3.jpg",
    "楽天トラベル"
  ),
  "ホテルみづほ": sourcePhoto(
    "tokushima-stay-33.jpg",
    "ホテルみづほの客室・外観写真",
    "ホテルみづほ room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/32020/32020.jpg",
    "楽天トラベル"
  ),
  "剣山ホテル": sourcePhoto(
    "tokushima-stay-28.jpg",
    "剣山ホテルの客室・外観写真",
    "剣山ホテル room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/29720/29720.jpg",
    "楽天トラベル"
  ),
  "ホテル アストリア": sourcePhoto(
    "tokushima-stay-39.jpg",
    "ホテル アストリアの客室・外観写真",
    "ホテル アストリア room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/178420/178420.jpg",
    "楽天トラベル"
  ),
  "セルフイン徳島蔵本駅前": sourcePhoto(
    "tokushima-stay-35.jpg",
    "セルフイン徳島蔵本駅前の客室・外観写真",
    "セルフイン徳島蔵本駅前 room or exterior photo",
    "https://img.travel.rakuten.co.jp/share/image_up/109099/LARGE/300879d51a33542c385caf4d96024e38dcaa7f61.47.9.26.3.jpg",
    "楽天トラベル"
  ),
  "ホテル千秋閣": sourcePhoto(
    "tokushima-stay-22.jpg",
    "ホテル千秋閣の客室・外観写真",
    "ホテル千秋閣 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/70883/70883.jpg",
    "楽天トラベル"
  ),
  "ビジネスホテル サンパール": sourcePhoto(
    "tokushima-stay-38.jpg",
    "ビジネスホテル サンパールの客室・外観写真",
    "ビジネスホテル サンパール room or exterior photo",
    "https://img.travel.rakuten.co.jp/share/image_up/8723/LARGE/hBi1vE.jpeg",
    "楽天トラベル"
  ),
  "センチュリープラザホテル": sourcePhoto(
    "tokushima-stay-19.jpg",
    "センチュリープラザホテルの客室・外観写真",
    "センチュリープラザホテル room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/84972/84972.jpg",
    "楽天トラベル"
  ),
  "ビジネスホテル アバァンティ(AVANTI)": sourcePhoto(
    "tokushima-stay-21.jpg",
    "ビジネスホテル アバァンティ(AVANTI)の客室・外観写真",
    "ビジネスホテル アバァンティ(AVANTI) room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/28052/28052.jpg",
    "楽天トラベル"
  ),
  "ハイパーイン ホテル越久(えちひさ)": sourcePhoto(
    "tokushima-stay-12.jpg",
    "ハイパーイン ホテル越久(えちひさ)の客室・外観写真",
    "ハイパーイン ホテル越久(えちひさ) room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/76869/76869.jpg",
    "楽天トラベル"
  ),
  "徳島ステーションホテル": sourcePhoto(
    "tokushima-stay-20.jpg",
    "徳島ステーションホテルの客室・外観写真",
    "徳島ステーションホテル room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/12634/12634.jpg",
    "楽天トラベル"
  ),
  "心のやすらぐ宿 旅館ニュー丸新": sourcePhoto(
    "tokushima-stay-16.jpg",
    "心のやすらぐ宿 旅館ニュー丸新の客室・外観写真",
    "心のやすらぐ宿 旅館ニュー丸新 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/10786/10786.jpg",
    "楽天トラベル"
  ),
  "Hostel Coliberty": sourcePhoto(
    "tokushima-stay-40.jpg",
    "Hostel Colibertyの客室・外観写真",
    "Hostel Coliberty room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/184482/184482.jpg",
    "楽天トラベル"
  ),
  "ホテル サンシャイン徳島": sourcePhoto(
    "tokushima-stay-34.jpg",
    "ホテル サンシャイン徳島の客室・外観写真",
    "ホテル サンシャイン徳島 room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/164950/164950.jpg",
    "楽天トラベル"
  ),
  "ビジネスホテルアネックスみづほ": sourcePhoto(
    "tokushima-stay-36.jpg",
    "ビジネスホテルアネックスみづほの客室・外観写真",
    "ビジネスホテルアネックスみづほ room or exterior photo",
    "https://web.travel.rakuten.co.jp/share/HOTEL/172414/172414.jpg",
    "楽天トラベル"
  ),
  // --- 買物 / 商業 (Commons; rank strongest arcade/mall first) ---
  '東新町商店街': wikiPhoto(
    'higashi-shinmachi-arcade-1.jpg',
    'https://commons.wikimedia.org/wiki/File:Higashi-Shinmachi_Shopping_Street_ac_(1).jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2022-08',
    '東新町商店街アーケード（徳島市）',
    'Higashi-Shinmachi Shopping Street arcade, Tokushima'
  ),
  'アミコ専門店街': wikiPhoto(
    'amico-senmontengai.jpg',
    'https://commons.wikimedia.org/wiki/File:Amico_Senmontengai.jpg',
    'Public domain',
    'https://commons.wikimedia.org/wiki/File:Amico_Senmontengai.jpg',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2009-10-10',
    'アミコ専門店街（徳島市元町）',
    'Amico specialty shopping arcade, Motomachi, Tokushima'
  ),
  '両国本町商店街': wikiPhoto(
    'ryogoku-honcho-2.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%BE%B3%E5%B3%B6%E7%9C%8C%E5%BE%B3%E5%B3%B6%E5%B8%82%E4%B8%A1%E5%9B%BD%E6%9C%AC%E7%94%BA2%E4%B8%81%E7%9B%AE.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Mti',
    'https://commons.wikimedia.org/wiki/User:Mti',
    '2011-06-10',
    '両国本町商店街（徳島市両国本町2丁目）',
    'Ryogoku-honcho shopping street, Tokushima'
  ),
  'しんまちボードウォーク（パラソルショップ）': wikiPhoto(
    'shinmachi-boardwalk-alt.jpg',
    'https://commons.wikimedia.org/wiki/File:Shinmachi_boardwalk01s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-06',
    'しんまちボードウォークと商店沿い（徳島市）',
    'Shinmachi Boardwalk shopping frontage, Tokushima'
  ),
  'アミコビル': wikiPhoto(
    'amico-building-aibahama.jpg',
    'https://commons.wikimedia.org/wiki/File:Amico_Building_from_Aibahama_Park_20210207.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    '新幹線',
    'https://commons.wikimedia.org/wiki/User:%E6%96%B0%E5%B9%B9%E7%B7%9A',
    '2021-02-07',
    '藍場浜公園からアミコビル（徳島市）',
    'Amico Building from Aibahama Park, Tokushima'
  ),
  'アミコ東館': wikiPhoto(
    'amico-building-ac1.jpg',
    'https://commons.wikimedia.org/wiki/File:Amico_ac_(1).jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2022-08',
    'アミコ東館外観（徳島市寺島本町西）',
    'Amico East Building exterior, Tokushima'
  ),
  '天然温泉びざんの湯': sourcePhoto(
    'bizan-no-yu-bath.jpg',
    '天然温泉びざんの湯の浴場（ホテルサンルート徳島）',
    'Bizan-no-Yu natural hot spring bath, Hotel Sunroute Tokushima',
    'https://sotetsu-hotels.com/sunroute/tokushima/',
    'ホテルサンルート徳島'
  ),
};

function sight(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string,
  lat: number,
  lon: number
): FacilityRow {
  return {
    id,
    jis: TOKUSHIMA_CITY.jis,
    name_ja,
    reading: null,
    category: 'tourism',
    lat,
    lon,
    address,
    phone,
    official_url: source_url,
    hours: null,
    source_url,
    license: '市公式サイト掲載情報',
    accessed: TOKUSHIMA_CITY.sources.accessed
  };
}

/** Photo-only tourism rows copied from city pages. No frozen jsonl. Wikipedia coords. */
export const TOKUSHIMA_CITY_FACILITIES: readonly FacilityRow[] = [
  sight(
    'tokushima-city-sight-01',
    '眉山',
    null,
    null,
    TOKUSHIMA_CITY.sources.bizan,
    34.06692592,
    134.53769878
  ),
  sight(
    'tokushima-city-sight-02',
    '徳島城跡',
    '徳島県徳島市徳島町城内1番外',
    null,
    TOKUSHIMA_CITY.sources.castlePark,
    34.07519167,
    134.555275
  ),
  sight(
    'tokushima-city-sight-03',
    '新町川水際公園・しんまちボードウォーク',
    '徳島県徳島市南内町',
    null,
    TOKUSHIMA_CITY.sources.boardWalk,
    34.07051389,
    134.54898889
  ),
  sight(
    'tokushima-city-sight-04',
    '阿波おどり会館',
    '徳島県徳島市新町橋2丁目20番地',
    null,
    TOKUSHIMA_CITY.sources.awaodori,
    34.07013889,
    134.54508333
  ),
  sight(
    'tokushima-city-sight-05',
    'あわぎん眉山ロープウエイ',
    '徳島県徳島市新町橋2丁目20番地',
    '088-652-3617',
    TOKUSHIMA_CITY.sources.bizan,
    34.07013889,
    134.54508333
  ),
  sight(
    'tokushima-city-sight-06',
    '弁天山',
    '徳島県徳島市八万町中津山',
    null,
    TOKUSHIMA_CITY.sources.bentenYama,
    34.02388889,
    134.54166667
  ),
  sight(
    'tokushima-city-sight-07',
    '文化の森総合公園',
    '徳島県徳島市八万町向寺山',
    null,
    TOKUSHIMA_CITY.sources.bunkaNoMori,
    34.0395,
    134.52611111
  ),
  sight(
    'tokushima-city-sight-08',
    '眉山公園',
    '徳島県徳島市眉山町大滝山',
    null,
    TOKUSHIMA_CITY.sources.bizanPark,
    34.067,
    134.53369444
  ),
  sight(
    'tokushima-city-sight-09',
    '徳島城博物館',
    '徳島県徳島市徳島町城内1番地の8',
    '088-656-2525',
    TOKUSHIMA_CITY.sources.johaku,
    34.073528,
    134.555639
  ),
  sight(
    'tokushima-city-sight-10',
    '徳島ガラススタジオ',
    '徳島県徳島市勝占町',
    '088-669-1195',
    TOKUSHIMA_CITY.sources.glassStudio,
    34.02005556,
    134.555
  ),
  sight(
    'tokushima-city-sight-11',
    'とくしま動物園',
    '徳島県徳島市',
    '088-636-3215',
    TOKUSHIMA_CITY.sources.zoo,
    34.01408333,
    134.52211111
  ),
  sight(
    'tokushima-city-sight-12',
    'ひょうたん島クルーズ',
    '徳島県徳島市南内町（しんまちボードウォーク発着）',
    '090-3783-2084',
    TOKUSHIMA_CITY.sources.hyotanCruise,
    34.07051389,
    134.54898889
  ),
  sight(
    'tokushima-city-sight-13',
    '天然温泉びざんの湯',
    '徳島県徳島市元町1-5-1 ホテルサンルート徳島',
    '088-653-8111',
    TOKUSHIMA_CITY.sources.sunroute,
    34.0737,
    134.5512
  )
];
