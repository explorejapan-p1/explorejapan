/**
 * Takamatsu City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37201. First Kagawa hub.
 * No frozen pack — photo-only tourism + Tabelog dining like anan/tokushima-city.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TAKAMATSU = {
  nameJa: '高松市',
  nameEn: 'Takamatsu City',
  reading: 'たかまつし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'takamatsu',
  jis: '37201',
  jlis: '372013',
  sameAs: 'https://www.city.takamatsu.kagawa.jp/',
  hall: {
    postalCode: '760-8571',
    addressJa: '香川県高松市番町一丁目8番15号',
    addressEn: '1-8-15 Bancho, Takamatsu, Kagawa 760-8571, Japan',
    phone: '087-839-2011'
  },
  sources: {
    home: 'https://www.city.takamatsu.kagawa.jp/',
    hall: 'https://www.city.takamatsu.kagawa.jp/',
    kanko: 'https://www.my-kagawa.jp/',
    ritsurin: 'https://www.city.takamatsu.kagawa.jp/kurashi/kosodate/bunka/bunkazai/shiteibunkazai/meisho/ritsurin.html',
    tamamo: 'https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/shisetsu/park/tamamo/index.html',
    yashima: 'https://www.my-kagawa.jp/point',
    yashimaji: 'https://www.my-kagawa.jp/point',
    megijima: 'https://www.my-kagawa.jp/point',
    shikokumura: 'https://www.my-kagawa.jp/point',
    cable: 'https://www.my-kagawa.jp/point',
    noguchi: 'https://www.my-kagawa.jp/point',
    tabelogCity: 'https://tabelog.com/kagawa/C37201/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const TAKAMATSU_EXPECTED_ROW_COUNT = 25;
export const TAKAMATSU_EXPECTED_GEO_COUNT = 8;

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
    accessed: '2026-09-09',
    altJa,
    altEn
  };
}

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
    accessed: '2026-09-09',
    altJa,
    altEn
  };
}

/** Cover: 栗林公園 観月橋 — strongest Takamatsu landmark. Not Tokushima. */
export const TAKAMATSU_PLACE_PHOTO = wikiPhoto(
  'takamatsu-ritsurin-kangetsu.jpg',
  'https://commons.wikimedia.org/wiki/File:Ritsurin_garden_kangetsu_bridge.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  'ブルーノ・プラス',
  'https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AB%E3%83%BC%E3%83%8E%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B9',
  '2023-04',
  '栗林公園・観月橋（特別名勝・高松市）',
  'Kangetsu Bridge at Ritsurin Garden, Special Place of Scenic Beauty, Takamatsu'
);

const TABELOG_37008167 = "https://tabelog.com/kagawa/A3701/A370101/37008167/";
const TABELOG_37006820 = "https://tabelog.com/kagawa/A3701/A370101/37006820/";
const TABELOG_37000760 = "https://tabelog.com/kagawa/A3701/A370101/37000760/";
const TABELOG_37000358 = "https://tabelog.com/kagawa/A3701/A370101/37000358/";
const TABELOG_37000049 = "https://tabelog.com/kagawa/A3701/A370101/37000049/";
const TABELOG_37000242 = "https://tabelog.com/kagawa/A3701/A370101/37000242/";
const TABELOG_37000026 = "https://tabelog.com/kagawa/A3701/A370101/37000026/";
const TABELOG_37001209 = "https://tabelog.com/kagawa/A3701/A370101/37001209/";
const TABELOG_37000874 = "https://tabelog.com/kagawa/A3701/A370101/37000874/";
const TABELOG_37000048 = "https://tabelog.com/kagawa/A3701/A370101/37000048/";
const TABELOG_37000040 = "https://tabelog.com/kagawa/A3701/A370101/37000040/";
const TABELOG_37000134 = "https://tabelog.com/kagawa/A3701/A370101/37000134/";
const TABELOG_37005339 = "https://tabelog.com/kagawa/A3701/A370101/37005339/";
const TABELOG_37000768 = "https://tabelog.com/kagawa/A3701/A370101/37000768/";

/** Exact travel/sight name_ja only. No Tokushima Files. */
export const TAKAMATSU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {

  '栗林公園': TAKAMATSU_PLACE_PHOTO,
  '掬月亭': wikiPhoto(
    'takamatsu-ritsurin-kikugetsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Ritsurin_garden_kikugetsutei.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'ブルーノ・プラス',
    'https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AB%E3%83%BC%E3%83%8E%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B9',
    '2023-04',
    '栗林公園・掬月亭（高松市）',
    'Kikugetsu-tei tea house, Ritsurin Garden, Takamatsu'
  ),
  '高松城（玉藻公園）': wikiPhoto(
    'takamatsu-castle-sanuki.jpg',
    'https://commons.wikimedia.org/wiki/File:Takamatsu_Castle_(Sanuki)_20170609-2.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Suicasmo',
    'https://commons.wikimedia.org/wiki/User:Suicasmo',
    '2017-06-09',
    '高松城・玉藻公園（高松市）',
    'Takamatsu Castle (Tamamo Park), Takamatsu'
  ),
  '屋島': wikiPhoto(
    'takamatsu-yashima.jpg',
    'https://commons.wikimedia.org/wiki/File:Takamatsu_Yashima_M3671.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Wikipedia',
    'https://commons.wikimedia.org/wiki/File:Takamatsu_Yashima_M3671.jpg',
    '2007',
    '屋島（高松市）',
    'Yashima plateau, Takamatsu'
  ),
  '屋島寺': wikiPhoto(
    'takamatsu-yashimaji.jpg',
    'https://commons.wikimedia.org/wiki/File:Yashimaji_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-05-04',
    '屋島寺（四国八十八箇所第八十四番・高松市）',
    'Yashima-ji, Shikoku pilgrimage temple 84, Takamatsu'
  ),
  '女木島': wikiPhoto(
    'takamatsu-megijima.jpg',
    'https://commons.wikimedia.org/wiki/File:Megijima-Top.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Petr Vodička',
    'https://commons.wikimedia.org/wiki/User:PetrVod',
    '2013',
    '女木島（高松市）',
    'Megijima island, Takamatsu'
  ),
  '四国村': wikiPhoto(
    'takamatsu-shikokumura.jpg',
    'https://commons.wikimedia.org/wiki/File:Shikokumura29s3200.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2008',
    '四国村（高松市）',
    'Shikoku Mura open-air museum, Takamatsu'
  ),
  '屋島ケーブルカー': wikiPhoto(
    'takamatsu-yashima-cable.jpg',
    'https://commons.wikimedia.org/wiki/File:Yashima_cable_car_2.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Muyo',
    'https://commons.wikimedia.org/wiki/User:Muyo',
    '1997-12-29',
    '屋島ケーブルカー（高松市）',
    'Yashima cable car, Takamatsu'
  ),
  'イサム・ノグチ庭園美術館': wikiPhoto(
    'takamatsu-noguchi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%82%A4%E3%82%B5%E3%83%A0%E3%83%8E%E3%82%B0%E3%83%81%E5%BA%AD%E5%9C%92%E5%A4%96%E8%A6%B3.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami',
    'https://commons.wikimedia.org/wiki/File:%E3%82%A4%E3%82%B5%E3%83%A0%E3%83%8E%E3%82%B0%E3%83%81%E5%BA%AD%E5%9C%92%E5%A4%96%E8%A6%B3.jpg',
    '2007',
    'イサム・ノグチ庭園美術館（高松市）',
    'Isamu Noguchi Garden Museum, Takamatsu'
  ),

  "両忘": sourcePhoto(
    "takamatsu-37008167-dish.jpg",
    "両忘の料理写真",
    "両忘 food photo",
    TABELOG_37008167,
    '食べログ'
  ),
  "ふる里うどん": sourcePhoto(
    "takamatsu-37006820-dish.jpg",
    "ふる里うどんの料理写真",
    "ふる里うどん food photo",
    TABELOG_37006820,
    '食べログ'
  ),
  "寿司 中川": sourcePhoto(
    "takamatsu-37000760-dish.jpg",
    "寿司 中川の料理写真",
    "寿司 中川 food photo",
    TABELOG_37000760,
    '食べログ'
  ),
  "鮨舳": sourcePhoto(
    "takamatsu-37000358-dish.jpg",
    "鮨舳の料理写真",
    "鮨舳 food photo",
    TABELOG_37000358,
    '食べログ'
  ),
  "手打うどん はりや": sourcePhoto(
    "takamatsu-37000049-dish.jpg",
    "手打うどん はりやの料理写真",
    "手打うどん はりや food photo",
    TABELOG_37000049,
    '食べログ'
  ),
  "手打十段 うどんバカ一代": sourcePhoto(
    "takamatsu-37000242-dish.jpg",
    "手打十段 うどんバカ一代の料理写真",
    "手打十段 うどんバカ一代 food photo",
    TABELOG_37000242,
    '食べログ'
  ),
  "うどん さか枝": sourcePhoto(
    "takamatsu-37000026-dish.jpg",
    "うどん さか枝の料理写真",
    "うどん さか枝 food photo",
    TABELOG_37000026,
    '食べログ'
  ),
  "うどん 一福": sourcePhoto(
    "takamatsu-37001209-dish.jpg",
    "うどん 一福の料理写真",
    "うどん 一福 food photo",
    TABELOG_37001209,
    '食べログ'
  ),
  "手打うどん 麦蔵": sourcePhoto(
    "takamatsu-37000874-dish.jpg",
    "手打うどん 麦蔵の料理写真",
    "手打うどん 麦蔵 food photo",
    TABELOG_37000874,
    '食べログ'
  ),
  "讃岐うどん 上原屋本店": sourcePhoto(
    "takamatsu-37000048-dish.jpg",
    "讃岐うどん 上原屋本店の料理写真",
    "讃岐うどん 上原屋本店 food photo",
    TABELOG_37000048,
    '食べログ'
  ),
  "中西うどん": sourcePhoto(
    "takamatsu-37000040-dish.jpg",
    "中西うどんの料理写真",
    "中西うどん food photo",
    TABELOG_37000040,
    '食べログ'
  ),
  "本格手打 もり家": sourcePhoto(
    "takamatsu-37000134-dish.jpg",
    "本格手打 もり家の料理写真",
    "本格手打 もり家 food photo",
    TABELOG_37000134,
    '食べログ'
  ),
  "宮武うどん": sourcePhoto(
    "takamatsu-37005339-dish.jpg",
    "宮武うどんの料理写真",
    "宮武うどん food photo",
    TABELOG_37005339,
    '食べログ'
  ),
  "れんげ料理店": sourcePhoto(
    "takamatsu-37000768-dish.jpg",
    "れんげ料理店の料理写真",
    "れんげ料理店 food photo",
    TABELOG_37000768,
    '食べログ'
  ),

  "【あさひハウス】 ＾": sourcePhoto(
    "takamatsu-stay-h175031.jpg",
    "【あさひハウス】 ＾の客室写真",
    "【あさひハウス】 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/175031/175031.html",
    '楽天トラベル'
  ),
  "あじ温泉 庵治観光ホテル 海のやどり": sourcePhoto(
    "takamatsu-stay-h10981.jpg",
    "あじ温泉 庵治観光ホテル 海のやどりの客室写真",
    "あじ温泉 庵治観光ホテル 海のやどり room photo",
    "https://travel.rakuten.co.jp/HOTEL/10981/10981.html",
    '楽天トラベル'
  ),
  "かえる ゲストハウス （ＫＡＥＲＵ ＧＵＥＳＴ ＨＯＵＳＥ）": sourcePhoto(
    "takamatsu-stay-h167851.jpg",
    "かえる ゲストハウス （ＫＡＥＲＵ ＧＵＥＳＴ ＨＯＵＳＥ）の客室写真",
    "かえる ゲストハウス （ＫＡＥＲＵ ＧＵＥＳＴ ＨＯＵＳＥ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/167851/167851.html",
    '楽天トラベル'
  ),
  "ささや旅館": sourcePhoto(
    "takamatsu-stay-h15205.jpg",
    "ささや旅館の客室写真",
    "ささや旅館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/15205/15205.html",
    '楽天トラベル'
  ),
  "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ）": sourcePhoto(
    "takamatsu-stay-dormy-70853.jpg",
    "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ）の客室写真",
    "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/70853/70853.html",
    '楽天トラベル'
  ),
  "アパホテル〈高松瓦町〉": sourcePhoto(
    "takamatsu-stay-apa.jpg",
    "アパホテル〈高松瓦町〉の客室写真",
    "アパホテル〈高松瓦町〉 room photo",
    "https://travel.rakuten.co.jp/HOTEL/19840/19840.html",
    '楽天トラベル'
  ),
  "エクストールイン高松": sourcePhoto(
    "takamatsu-stay-extol-172251.jpg",
    "エクストールイン高松の客室写真",
    "エクストールイン高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/172251/172251.html",
    '楽天トラベル'
  ),
  "エクストールイン高松中央インター": sourcePhoto(
    "takamatsu-stay-extol-196181.jpg",
    "エクストールイン高松中央インターの客室写真",
    "エクストールイン高松中央インター room photo",
    "https://travel.rakuten.co.jp/HOTEL/196181/196181.html",
    '楽天トラベル'
  ),
  "グランドベース高松": sourcePhoto(
    "takamatsu-stay-h179320.jpg",
    "グランドベース高松の客室写真",
    "グランドベース高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/179320/179320.html",
    '楽天トラベル'
  ),
  "グレースコートホテル高松": sourcePhoto(
    "takamatsu-stay-h18845.jpg",
    "グレースコートホテル高松の客室写真",
    "グレースコートホテル高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/18845/18845.html",
    '楽天トラベル'
  ),
  "ゲストハウス ルミエール田町／民泊": sourcePhoto(
    "takamatsu-stay-h185580.jpg",
    "ゲストハウス ルミエール田町／民泊の客室写真",
    "ゲストハウス ルミエール田町／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/185580/185580.html",
    '楽天トラベル'
  ),
  "ゲストハウス屋島 ＾": sourcePhoto(
    "takamatsu-stay-h171507.jpg",
    "ゲストハウス屋島 ＾の客室写真",
    "ゲストハウス屋島 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/171507/171507.html",
    '楽天トラベル'
  ),
  "ゲストハウス扇 ＾": sourcePhoto(
    "takamatsu-stay-h185970.jpg",
    "ゲストハウス扇 ＾の客室写真",
    "ゲストハウス扇 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185970/185970.html",
    '楽天トラベル'
  ),
  "ゲストハウス瀬戸音十庵": sourcePhoto(
    "takamatsu-stay-h166185.jpg",
    "ゲストハウス瀬戸音十庵の客室写真",
    "ゲストハウス瀬戸音十庵 room photo",
    "https://travel.rakuten.co.jp/HOTEL/166185/166185.html",
    '楽天トラベル'
  ),
  "ゲストハウス若葉屋": sourcePhoto(
    "takamatsu-stay-h153572.jpg",
    "ゲストハウス若葉屋の客室写真",
    "ゲストハウス若葉屋 room photo",
    "https://travel.rakuten.co.jp/HOTEL/153572/153572.html",
    '楽天トラベル'
  ),
  "ゲストハウスｋｏｉ鯉": sourcePhoto(
    "takamatsu-stay-h184692.jpg",
    "ゲストハウスｋｏｉ鯉の客室写真",
    "ゲストハウスｋｏｉ鯉 room photo",
    "https://travel.rakuten.co.jp/HOTEL/184692/184692.html",
    '楽天トラベル'
  ),
  "コンフォートホテル高松": sourcePhoto(
    "takamatsu-stay-comfort.jpg",
    "コンフォートホテル高松の客室写真",
    "コンフォートホテル高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/183297/183297.html",
    '楽天トラベル'
  ),
  "ゴールデンタイム高松": sourcePhoto(
    "takamatsu-stay-h72077.jpg",
    "ゴールデンタイム高松の客室写真",
    "ゴールデンタイム高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/72077/72077.html",
    '楽天トラベル'
  ),
  "ダイワロイネットホテル高松": sourcePhoto(
    "takamatsu-stay-daiwa.jpg",
    "ダイワロイネットホテル高松の客室写真",
    "ダイワロイネットホテル高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/136268/136268.html",
    '楽天トラベル'
  ),
  "トラディッショナル アパートメント": sourcePhoto(
    "takamatsu-stay-h151192.jpg",
    "トラディッショナル アパートメントの客室写真",
    "トラディッショナル アパートメント room photo",
    "https://travel.rakuten.co.jp/HOTEL/151192/151192.html",
    '楽天トラベル'
  ),
  "ハイパーイン高松駅前": sourcePhoto(
    "takamatsu-stay-h167674.jpg",
    "ハイパーイン高松駅前の客室写真",
    "ハイパーイン高松駅前 room photo",
    "https://travel.rakuten.co.jp/HOTEL/167674/167674.html",
    '楽天トラベル'
  ),
  "ビジネスホテル イーストパーク栗林": sourcePhoto(
    "takamatsu-stay-h775.jpg",
    "ビジネスホテル イーストパーク栗林の客室写真",
    "ビジネスホテル イーストパーク栗林 room photo",
    "https://travel.rakuten.co.jp/HOTEL/775/775.html",
    '楽天トラベル'
  ),
  "ビジネスホテル シャトーエスト高松": sourcePhoto(
    "takamatsu-stay-h9489.jpg",
    "ビジネスホテル シャトーエスト高松の客室写真",
    "ビジネスホテル シャトーエスト高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/9489/9489.html",
    '楽天トラベル'
  ),
  "ビジネスホテル プリンス": sourcePhoto(
    "takamatsu-stay-h16312.jpg",
    "ビジネスホテル プリンスの客室写真",
    "ビジネスホテル プリンス room photo",
    "https://travel.rakuten.co.jp/HOTEL/16312/16312.html",
    '楽天トラベル'
  ),
  "ビジネスホテル ルピナス": sourcePhoto(
    "takamatsu-stay-h25824.jpg",
    "ビジネスホテル ルピナスの客室写真",
    "ビジネスホテル ルピナス room photo",
    "https://travel.rakuten.co.jp/HOTEL/25824/25824.html",
    '楽天トラベル'
  ),
  "ビジネスホテル東宝イン高松": sourcePhoto(
    "takamatsu-stay-h13609.jpg",
    "ビジネスホテル東宝イン高松の客室写真",
    "ビジネスホテル東宝イン高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/13609/13609.html",
    '楽天トラベル'
  ),
  "ビジネスホテル清恵": sourcePhoto(
    "takamatsu-stay-h28071.jpg",
    "ビジネスホテル清恵の客室写真",
    "ビジネスホテル清恵 room photo",
    "https://travel.rakuten.co.jp/HOTEL/28071/28071.html",
    '楽天トラベル'
  ),
  "ファミリーロッジ旅籠屋・高松店": sourcePhoto(
    "takamatsu-stay-h134764.jpg",
    "ファミリーロッジ旅籠屋・高松店の客室写真",
    "ファミリーロッジ旅籠屋・高松店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/134764/134764.html",
    '楽天トラベル'
  ),
  "ファーストイン高松": sourcePhoto(
    "takamatsu-stay-h130100.jpg",
    "ファーストイン高松の客室写真",
    "ファーストイン高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/130100/130100.html",
    '楽天トラベル'
  ),
  "ホテル パークサイド高松": sourcePhoto(
    "takamatsu-stay-h37424.jpg",
    "ホテル パークサイド高松の客室写真",
    "ホテル パークサイド高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/37424/37424.html",
    '楽天トラベル'
  ),
  "ホテル パールガーデン": sourcePhoto(
    "takamatsu-stay-h84770.jpg",
    "ホテル パールガーデンの客室写真",
    "ホテル パールガーデン room photo",
    "https://travel.rakuten.co.jp/HOTEL/84770/84770.html",
    '楽天トラベル'
  ),
  "ホテル ＷｅＢａｓｅ高松": sourcePhoto(
    "takamatsu-stay-h168533.jpg",
    "ホテル ＷｅＢａｓｅ高松の客室写真",
    "ホテル ＷｅＢａｓｅ高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/168533/168533.html",
    '楽天トラベル'
  ),
  "ホテルたいよう農園 屋島": sourcePhoto(
    "takamatsu-stay-h197287.jpg",
    "ホテルたいよう農園 屋島の客室写真",
    "ホテルたいよう農園 屋島 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197287/197287.html",
    '楽天トラベル'
  ),
  "ホテルエリアワン高松シティ（ホテルエリアワングループ）": sourcePhoto(
    "takamatsu-stay-areaone-183326.jpg",
    "ホテルエリアワン高松シティ（ホテルエリアワングループ）の客室写真",
    "ホテルエリアワン高松シティ（ホテルエリアワングループ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/183326/183326.html",
    '楽天トラベル'
  ),
  "ホテルエリアワン高松（ホテルエリアワングループ）": sourcePhoto(
    "takamatsu-stay-areaone-70661.jpg",
    "ホテルエリアワン高松（ホテルエリアワングループ）の客室写真",
    "ホテルエリアワン高松（ホテルエリアワングループ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/70661/70661.html",
    '楽天トラベル'
  ),
  "ホテルサンシャイン高松": sourcePhoto(
    "takamatsu-stay-h776.jpg",
    "ホテルサンシャイン高松の客室写真",
    "ホテルサンシャイン高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/776/776.html",
    '楽天トラベル'
  ),
  "ホテルパレス高松 〜ＰＡＬＡＣＥ ＴＡＫＡＭＡＴＳＵ〜": sourcePhoto(
    "takamatsu-stay-h777.jpg",
    "ホテルパレス高松 〜ＰＡＬＡＣＥ ＴＡＫＡＭＡＴＳＵ〜の客室写真",
    "ホテルパレス高松 〜ＰＡＬＡＣＥ ＴＡＫＡＭＡＴＳＵ〜 room photo",
    "https://travel.rakuten.co.jp/HOTEL/777/777.html",
    '楽天トラベル'
  ),
  "ホテルマリンパレスさぬき": sourcePhoto(
    "takamatsu-stay-h25826.jpg",
    "ホテルマリンパレスさぬきの客室写真",
    "ホテルマリンパレスさぬき room photo",
    "https://travel.rakuten.co.jp/HOTEL/25826/25826.html",
    '楽天トラベル'
  ),
  "ホテルリブマックス高松駅前": sourcePhoto(
    "takamatsu-stay-h182568.jpg",
    "ホテルリブマックス高松駅前の客室写真",
    "ホテルリブマックス高松駅前 room photo",
    "https://travel.rakuten.co.jp/HOTEL/182568/182568.html",
    '楽天トラベル'
  ),
  "ホテルルートイン高松屋島": sourcePhoto(
    "takamatsu-stay-routeinn.jpg",
    "ホテルルートイン高松屋島の客室写真",
    "ホテルルートイン高松屋島 room photo",
    "https://travel.rakuten.co.jp/HOTEL/167563/167563.html",
    '楽天トラベル'
  ),
  "ホテル夢 常盤店【大人専用１８禁・ハピホテ提携】": sourcePhoto(
    "takamatsu-stay-h163281.jpg",
    "ホテル夢 常盤店【大人専用１８禁・ハピホテ提携】の客室写真",
    "ホテル夢 常盤店【大人専用１８禁・ハピホテ提携】 room photo",
    "https://travel.rakuten.co.jp/HOTEL/163281/163281.html",
    '楽天トラベル'
  ),
  "ホテル川六 エルステージ高松": sourcePhoto(
    "takamatsu-stay-h12614.jpg",
    "ホテル川六 エルステージ高松の客室写真",
    "ホテル川六 エルステージ高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/12614/12614.html",
    '楽天トラベル'
  ),
  "ホテル望海荘": sourcePhoto(
    "takamatsu-stay-h9264.jpg",
    "ホテル望海荘の客室写真",
    "ホテル望海荘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/9264/9264.html",
    '楽天トラベル'
  ),
  "ホテル福屋": sourcePhoto(
    "takamatsu-stay-h14763.jpg",
    "ホテル福屋の客室写真",
    "ホテル福屋 room photo",
    "https://travel.rakuten.co.jp/HOTEL/14763/14763.html",
    '楽天トラベル'
  ),
  "ホテル高松ヒルズ 瓦町駅前（ＢＢＨホテルグループ）": sourcePhoto(
    "takamatsu-stay-h52530.jpg",
    "ホテル高松ヒルズ 瓦町駅前（ＢＢＨホテルグループ）の客室写真",
    "ホテル高松ヒルズ 瓦町駅前（ＢＢＨホテルグループ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/52530/52530.html",
    '楽天トラベル'
  ),
  "ホテルＮｏ．１高松": sourcePhoto(
    "takamatsu-stay-h18987.jpg",
    "ホテルＮｏ．１高松の客室写真",
    "ホテルＮｏ．１高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/18987/18987.html",
    '楽天トラベル'
  ),
  "メゾン太田／民泊": sourcePhoto(
    "takamatsu-stay-h170139.jpg",
    "メゾン太田／民泊の客室写真",
    "メゾン太田／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/170139/170139.html",
    '楽天トラベル'
  ),
  "リーガホテルゼスト高松": sourcePhoto(
    "takamatsu-stay-riega.jpg",
    "リーガホテルゼスト高松の客室写真",
    "リーガホテルゼスト高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/8869/8869.html",
    '楽天トラベル'
  ),
  "ロイヤルパークホテル高松": sourcePhoto(
    "takamatsu-stay-h9486.jpg",
    "ロイヤルパークホテル高松の客室写真",
    "ロイヤルパークホテル高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/9486/9486.html",
    '楽天トラベル'
  ),
  "一棟貸し 女木島オーテの宿 瀬戸内芸術祭 ＾": sourcePhoto(
    "takamatsu-stay-h194348.jpg",
    "一棟貸し 女木島オーテの宿 瀬戸内芸術祭 ＾の客室写真",
    "一棟貸し 女木島オーテの宿 瀬戸内芸術祭 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/194348/194348.html",
    '楽天トラベル'
  ),
  "一棟貸し 島ゑ空": sourcePhoto(
    "takamatsu-stay-h202106.jpg",
    "一棟貸し 島ゑ空の客室写真",
    "一棟貸し 島ゑ空 room photo",
    "https://travel.rakuten.co.jp/HOTEL/202106/202106.html",
    '楽天トラベル'
  ),
  "万喜屋": sourcePhoto(
    "takamatsu-stay-h151451.jpg",
    "万喜屋の客室写真",
    "万喜屋 room photo",
    "https://travel.rakuten.co.jp/HOTEL/151451/151451.html",
    '楽天トラベル'
  ),
  "商店街ＨＯＴＥＬＳ": sourcePhoto(
    "takamatsu-stay-h181190.jpg",
    "商店街ＨＯＴＥＬＳの客室写真",
    "商店街ＨＯＴＥＬＳ room photo",
    "https://travel.rakuten.co.jp/HOTEL/181190/181190.html",
    '楽天トラベル'
  ),
  "商店街ＨＯＴＥＬＳ ＥＩＴＡ": sourcePhoto(
    "takamatsu-stay-h181191.jpg",
    "商店街ＨＯＴＥＬＳ ＥＩＴＡの客室写真",
    "商店街ＨＯＴＥＬＳ ＥＩＴＡ room photo",
    "https://travel.rakuten.co.jp/HOTEL/181191/181191.html",
    '楽天トラベル'
  ),
  "四国高松温泉 ニューグランデみまつ": sourcePhoto(
    "takamatsu-stay-h9440.jpg",
    "四国高松温泉 ニューグランデみまつの客室写真",
    "四国高松温泉 ニューグランデみまつ room photo",
    "https://travel.rakuten.co.jp/HOTEL/9440/9440.html",
    '楽天トラベル'
  ),
  "天然温泉 牛若の湯 スーパーホテル高松禁煙館": sourcePhoto(
    "takamatsu-stay-superhotel-40517.jpg",
    "天然温泉 牛若の湯 スーパーホテル高松禁煙館の客室写真",
    "天然温泉 牛若の湯 スーパーホテル高松禁煙館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/40517/40517.html",
    '楽天トラベル'
  ),
  "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ）": sourcePhoto(
    "takamatsu-stay-dormy-167716.jpg",
    "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ）の客室写真",
    "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/167716/167716.html",
    '楽天トラベル'
  ),
  "天然温泉 讃岐の湯 スーパーホテル高松・田町": sourcePhoto(
    "takamatsu-stay-superhotel-50215.jpg",
    "天然温泉 讃岐の湯 スーパーホテル高松・田町の客室写真",
    "天然温泉 讃岐の湯 スーパーホテル高松・田町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/50215/50215.html",
    '楽天トラベル'
  ),
  "屋島の宿 桃太郎": sourcePhoto(
    "takamatsu-stay-h18988.jpg",
    "屋島の宿 桃太郎の客室写真",
    "屋島の宿 桃太郎 room photo",
    "https://travel.rakuten.co.jp/HOTEL/18988/18988.html",
    '楽天トラベル'
  ),
  "旅館 さくら": sourcePhoto(
    "takamatsu-stay-h199473.jpg",
    "旅館 さくらの客室写真",
    "旅館 さくら room photo",
    "https://travel.rakuten.co.jp/HOTEL/199473/199473.html",
    '楽天トラベル'
  ),
  "旅館 やすらぎ": sourcePhoto(
    "takamatsu-stay-h193263.jpg",
    "旅館 やすらぎの客室写真",
    "旅館 やすらぎ room photo",
    "https://travel.rakuten.co.jp/HOTEL/193263/193263.html",
    '楽天トラベル'
  ),
  "日和庵／民泊": sourcePhoto(
    "takamatsu-stay-h170275.jpg",
    "日和庵／民泊の客室写真",
    "日和庵／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/170275/170275.html",
    '楽天トラベル'
  ),
  "東横ＩＮＮ高松兵庫町": sourcePhoto(
    "takamatsu-stay-toyoko-108319.jpg",
    "東横ＩＮＮ高松兵庫町の客室写真",
    "東横ＩＮＮ高松兵庫町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/108319/108319.html",
    '楽天トラベル'
  ),
  "東横ＩＮＮ高松駅前": sourcePhoto(
    "takamatsu-stay-toyoko-193287.jpg",
    "東横ＩＮＮ高松駅前の客室写真",
    "東横ＩＮＮ高松駅前 room photo",
    "https://travel.rakuten.co.jp/HOTEL/193287/193287.html",
    '楽天トラベル'
  ),
  "民宿 やまちゃん／民泊": sourcePhoto(
    "takamatsu-stay-h195039.jpg",
    "民宿 やまちゃん／民泊の客室写真",
    "民宿 やまちゃん／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/195039/195039.html",
    '楽天トラベル'
  ),
  "浜町小院 ＾": sourcePhoto(
    "takamatsu-stay-h171360.jpg",
    "浜町小院 ＾の客室写真",
    "浜町小院 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/171360/171360.html",
    '楽天トラベル'
  ),
  "瀬戸内満月荘": sourcePhoto(
    "takamatsu-stay-h176556.jpg",
    "瀬戸内満月荘の客室写真",
    "瀬戸内満月荘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/176556/176556.html",
    '楽天トラベル'
  ),
  "瀬戸風月 ＾": sourcePhoto(
    "takamatsu-stay-h171816.jpg",
    "瀬戸風月 ＾の客室写真",
    "瀬戸風月 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/171816/171816.html",
    '楽天トラベル'
  ),
  "牟礼ぐらし宿／民泊": sourcePhoto(
    "takamatsu-stay-h200020.jpg",
    "牟礼ぐらし宿／民泊の客室写真",
    "牟礼ぐらし宿／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/200020/200020.html",
    '楽天トラベル'
  ),
  "瓦町ドミトリー": sourcePhoto(
    "takamatsu-stay-h160690.jpg",
    "瓦町ドミトリーの客室写真",
    "瓦町ドミトリー room photo",
    "https://travel.rakuten.co.jp/HOTEL/160690/160690.html",
    '楽天トラベル'
  ),
  "瓦町駅・ｈｏｍｅ１０１室 ＾": sourcePhoto(
    "takamatsu-stay-h185154.jpg",
    "瓦町駅・ｈｏｍｅ１０１室 ＾の客室写真",
    "瓦町駅・ｈｏｍｅ１０１室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185154/185154.html",
    '楽天トラベル'
  ),
  "瓦町駅・ｈｏｍｅ２０１室 ＾": sourcePhoto(
    "takamatsu-stay-h185200.jpg",
    "瓦町駅・ｈｏｍｅ２０１室 ＾の客室写真",
    "瓦町駅・ｈｏｍｅ２０１室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185200/185200.html",
    '楽天トラベル'
  ),
  "瓦町駅・ｈｏｍｅ４０１号室 ＾": sourcePhoto(
    "takamatsu-stay-h185197.jpg",
    "瓦町駅・ｈｏｍｅ４０１号室 ＾の客室写真",
    "瓦町駅・ｈｏｍｅ４０１号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185197/185197.html",
    '楽天トラベル'
  ),
  "瓦町駅．ｈｏｍｅ ３０１号室 ＾": sourcePhoto(
    "takamatsu-stay-h185201.jpg",
    "瓦町駅．ｈｏｍｅ ３０１号室 ＾の客室写真",
    "瓦町駅．ｈｏｍｅ ３０１号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185201/185201.html",
    '楽天トラベル'
  ),
  "福宿 ＦＵＫＵＩＮＮ ３０２号室 ＾": sourcePhoto(
    "takamatsu-stay-h185592.jpg",
    "福宿 ＦＵＫＵＩＮＮ ３０２号室 ＾の客室写真",
    "福宿 ＦＵＫＵＩＮＮ ３０２号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185592/185592.html",
    '楽天トラベル'
  ),
  "福宿ＦＵＫＵＩＮＮ ２０１号室 ＾": sourcePhoto(
    "takamatsu-stay-h185616.jpg",
    "福宿ＦＵＫＵＩＮＮ ２０１号室 ＾の客室写真",
    "福宿ＦＵＫＵＩＮＮ ２０１号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185616/185616.html",
    '楽天トラベル'
  ),
  "福宿ＦＵＫＵＩＮＮ１０１号室 ＾": sourcePhoto(
    "takamatsu-stay-h185618.jpg",
    "福宿ＦＵＫＵＩＮＮ１０１号室 ＾の客室写真",
    "福宿ＦＵＫＵＩＮＮ１０１号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185618/185618.html",
    '楽天トラベル'
  ),
  "福宿ＦＵＫＵＩＮＮ１０２号室 ＾": sourcePhoto(
    "takamatsu-stay-h185619.jpg",
    "福宿ＦＵＫＵＩＮＮ１０２号室 ＾の客室写真",
    "福宿ＦＵＫＵＩＮＮ１０２号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185619/185619.html",
    '楽天トラベル'
  ),
  "福宿ＦＵＫＵＩＮＮ２０２号室 ＾": sourcePhoto(
    "takamatsu-stay-h185593.jpg",
    "福宿ＦＵＫＵＩＮＮ２０２号室 ＾の客室写真",
    "福宿ＦＵＫＵＩＮＮ２０２号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185593/185593.html",
    '楽天トラベル'
  ),
  "福宿ＦＵＫＵＩＮＮ２０３号室 ＾": sourcePhoto(
    "takamatsu-stay-h185594.jpg",
    "福宿ＦＵＫＵＩＮＮ２０３号室 ＾の客室写真",
    "福宿ＦＵＫＵＩＮＮ２０３号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185594/185594.html",
    '楽天トラベル'
  ),
  "福宿ＦＵＫＵＩＮＮ３０１号室 ＾": sourcePhoto(
    "takamatsu-stay-h185617.jpg",
    "福宿ＦＵＫＵＩＮＮ３０１号室 ＾の客室写真",
    "福宿ＦＵＫＵＩＮＮ３０１号室 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/185617/185617.html",
    '楽天トラベル'
  ),
  "穴吹邸": sourcePhoto(
    "takamatsu-stay-h187641.jpg",
    "穴吹邸の客室写真",
    "穴吹邸 room photo",
    "https://travel.rakuten.co.jp/HOTEL/187641/187641.html",
    '楽天トラベル'
  ),
  "紺屋町ゲストハウス 久々": sourcePhoto(
    "takamatsu-stay-h168733.jpg",
    "紺屋町ゲストハウス 久々の客室写真",
    "紺屋町ゲストハウス 久々 room photo",
    "https://travel.rakuten.co.jp/HOTEL/168733/168733.html",
    '楽天トラベル'
  ),
  "貸切ワン泊 Ｌａ′Ｍｕｌｅ（ラミュール）": sourcePhoto(
    "takamatsu-stay-h198313.jpg",
    "貸切ワン泊 Ｌａ′Ｍｕｌｅ（ラミュール）の客室写真",
    "貸切ワン泊 Ｌａ′Ｍｕｌｅ（ラミュール） room photo",
    "https://travel.rakuten.co.jp/HOTEL/198313/198313.html",
    '楽天トラベル'
  ),
  "遊び家ふるたか ＾": sourcePhoto(
    "takamatsu-stay-h190192.jpg",
    "遊び家ふるたか ＾の客室写真",
    "遊び家ふるたか ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/190192/190192.html",
    '楽天トラベル'
  ),
  "雀 ＳｕＺｕｍｅ": sourcePhoto(
    "takamatsu-stay-h188774.jpg",
    "雀 ＳｕＺｕｍｅの客室写真",
    "雀 ＳｕＺｕｍｅ room photo",
    "https://travel.rakuten.co.jp/HOTEL/188774/188774.html",
    '楽天トラベル'
  ),
  "高松の宿 花園や": sourcePhoto(
    "takamatsu-stay-h181977.jpg",
    "高松の宿 花園やの客室写真",
    "高松の宿 花園や room photo",
    "https://travel.rakuten.co.jp/HOTEL/181977/181977.html",
    '楽天トラベル'
  ),
  "高松ゲストハウスあかね": sourcePhoto(
    "takamatsu-stay-h160804.jpg",
    "高松ゲストハウスあかねの客室写真",
    "高松ゲストハウスあかね room photo",
    "https://travel.rakuten.co.jp/HOTEL/160804/160804.html",
    '楽天トラベル'
  ),
  "高松ゲストハウスＢＪステーション": sourcePhoto(
    "takamatsu-stay-h153459.jpg",
    "高松ゲストハウスＢＪステーションの客室写真",
    "高松ゲストハウスＢＪステーション room photo",
    "https://travel.rakuten.co.jp/HOTEL/153459/153459.html",
    '楽天トラベル'
  ),
  "高松シティホテル": sourcePhoto(
    "takamatsu-stay-h5681.jpg",
    "高松シティホテルの客室写真",
    "高松シティホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/5681/5681.html",
    '楽天トラベル'
  ),
  "高松センチュリーホテル": sourcePhoto(
    "takamatsu-stay-century.jpg",
    "高松センチュリーホテルの客室写真",
    "高松センチュリーホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/7593/7593.html",
    '楽天トラベル'
  ),
  "高松パークホテル": sourcePhoto(
    "takamatsu-stay-h4837.jpg",
    "高松パークホテルの客室写真",
    "高松パークホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/4837/4837.html",
    '楽天トラベル'
  ),
  "高松ホテルサキカ": sourcePhoto(
    "takamatsu-stay-h11289.jpg",
    "高松ホテルサキカの客室写真",
    "高松ホテルサキカ room photo",
    "https://travel.rakuten.co.jp/HOTEL/11289/11289.html",
    '楽天トラベル'
  ),
  "高松国際ホテル": sourcePhoto(
    "takamatsu-stay-kokusai.jpg",
    "高松国際ホテルの客室写真",
    "高松国際ホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/13730/13730.html",
    '楽天トラベル'
  ),
  "髙松の宿 かめおか屋": sourcePhoto(
    "takamatsu-stay-39641-197624.jpg",
    "髙松の宿 かめおか屋の客室写真",
    "髙松の宿 かめおか屋 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197624/197624.html",
    '楽天トラベル'
  ),
  "髙柳旅館": sourcePhoto(
    "takamatsu-stay-39641-196641.jpg",
    "髙柳旅館の客室写真",
    "髙柳旅館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/196641/196641.html",
    '楽天トラベル'
  ),
  "２Ｆ": sourcePhoto(
    "takamatsu-stay-h196350.jpg",
    "２Ｆの客室写真",
    "２Ｆ room photo",
    "https://travel.rakuten.co.jp/HOTEL/196350/196350.html",
    '楽天トラベル'
  ),
  "７７７ Ｔａｋａｍａｔｓｕ Ｇｕｅｓｔ Ｈｏｕｓｅ": sourcePhoto(
    "takamatsu-stay-h176717.jpg",
    "７７７ Ｔａｋａｍａｔｓｕ Ｇｕｅｓｔ Ｈｏｕｓｅの客室写真",
    "７７７ Ｔａｋａｍａｔｓｕ Ｇｕｅｓｔ Ｈｏｕｓｅ room photo",
    "https://travel.rakuten.co.jp/HOTEL/176717/176717.html",
    '楽天トラベル'
  ),
  "ＡＬＰＨＡＢＥＤ ＩＮＮ 高松駅前": sourcePhoto(
    "takamatsu-stay-h172707.jpg",
    "ＡＬＰＨＡＢＥＤ ＩＮＮ 高松駅前の客室写真",
    "ＡＬＰＨＡＢＥＤ ＩＮＮ 高松駅前 room photo",
    "https://travel.rakuten.co.jp/HOTEL/172707/172707.html",
    '楽天トラベル'
  ),
  "ＡＰＡＲＴＭＥＮＴ ＨＯＴＥＬ 高松裏路地": sourcePhoto(
    "takamatsu-stay-h198638.jpg",
    "ＡＰＡＲＴＭＥＮＴ ＨＯＴＥＬ 高松裏路地の客室写真",
    "ＡＰＡＲＴＭＥＮＴ ＨＯＴＥＬ 高松裏路地 room photo",
    "https://travel.rakuten.co.jp/HOTEL/198638/198638.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ サンポート高松": sourcePhoto(
    "takamatsu-stay-h167741.jpg",
    "Ａｌｐｈａｂｅｄ サンポート高松の客室写真",
    "Ａｌｐｈａｂｅｄ サンポート高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/167741/167741.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松ステーション": sourcePhoto(
    "takamatsu-stay-h176880.jpg",
    "Ａｌｐｈａｂｅｄ 高松ステーションの客室写真",
    "Ａｌｐｈａｂｅｄ 高松ステーション room photo",
    "https://travel.rakuten.co.jp/HOTEL/176880/176880.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松レインボー通り": sourcePhoto(
    "takamatsu-stay-h177930.jpg",
    "Ａｌｐｈａｂｅｄ 高松レインボー通りの客室写真",
    "Ａｌｐｈａｂｅｄ 高松レインボー通り room photo",
    "https://travel.rakuten.co.jp/HOTEL/177930/177930.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松丸亀町": sourcePhoto(
    "takamatsu-stay-h173003.jpg",
    "Ａｌｐｈａｂｅｄ 高松丸亀町の客室写真",
    "Ａｌｐｈａｂｅｄ 高松丸亀町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/173003/173003.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松兵庫町": sourcePhoto(
    "takamatsu-stay-h168304.jpg",
    "Ａｌｐｈａｂｅｄ 高松兵庫町の客室写真",
    "Ａｌｐｈａｂｅｄ 高松兵庫町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/168304/168304.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松北浜ＥＡＳＴ": sourcePhoto(
    "takamatsu-stay-h168252.jpg",
    "Ａｌｐｈａｂｅｄ 高松北浜ＥＡＳＴの客室写真",
    "Ａｌｐｈａｂｅｄ 高松北浜ＥＡＳＴ room photo",
    "https://travel.rakuten.co.jp/HOTEL/168252/168252.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松古新町": sourcePhoto(
    "takamatsu-stay-h165983.jpg",
    "Ａｌｐｈａｂｅｄ 高松古新町の客室写真",
    "Ａｌｐｈａｂｅｄ 高松古新町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/165983/165983.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松屋島": sourcePhoto(
    "takamatsu-stay-h176878.jpg",
    "Ａｌｐｈａｂｅｄ 高松屋島の客室写真",
    "Ａｌｐｈａｂｅｄ 高松屋島 room photo",
    "https://travel.rakuten.co.jp/HOTEL/176878/176878.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松瓦町ＩＩ": sourcePhoto(
    "takamatsu-stay-h176879.jpg",
    "Ａｌｐｈａｂｅｄ 高松瓦町ＩＩの客室写真",
    "Ａｌｐｈａｂｅｄ 高松瓦町ＩＩ room photo",
    "https://travel.rakuten.co.jp/HOTEL/176879/176879.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ 高松美術館通り": sourcePhoto(
    "takamatsu-stay-h177931.jpg",
    "Ａｌｐｈａｂｅｄ 高松美術館通りの客室写真",
    "Ａｌｐｈａｂｅｄ 高松美術館通り room photo",
    "https://travel.rakuten.co.jp/HOTEL/177931/177931.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ Ｖｉｌｌａ和歌／民泊": sourcePhoto(
    "takamatsu-stay-h190402.jpg",
    "Ａｌｐｈａｂｅｄ Ｖｉｌｌａ和歌／民泊の客室写真",
    "Ａｌｐｈａｂｅｄ Ｖｉｌｌａ和歌／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/190402/190402.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ高松中央公園": sourcePhoto(
    "takamatsu-stay-h179814.jpg",
    "Ａｌｐｈａｂｅｄ高松中央公園の客室写真",
    "Ａｌｐｈａｂｅｄ高松中央公園 room photo",
    "https://travel.rakuten.co.jp/HOTEL/179814/179814.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ高松瓦町": sourcePhoto(
    "takamatsu-stay-h167817.jpg",
    "Ａｌｐｈａｂｅｄ高松瓦町の客室写真",
    "Ａｌｐｈａｂｅｄ高松瓦町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/167817/167817.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ高松瓦町イースト": sourcePhoto(
    "takamatsu-stay-h168781.jpg",
    "Ａｌｐｈａｂｅｄ高松瓦町イーストの客室写真",
    "Ａｌｐｈａｂｅｄ高松瓦町イースト room photo",
    "https://travel.rakuten.co.jp/HOTEL/168781/168781.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ高松瓦町ウエスト": sourcePhoto(
    "takamatsu-stay-h168779.jpg",
    "Ａｌｐｈａｂｅｄ高松瓦町ウエストの客室写真",
    "Ａｌｐｈａｂｅｄ高松瓦町ウエスト room photo",
    "https://travel.rakuten.co.jp/HOTEL/168779/168779.html",
    '楽天トラベル'
  ),
  "Ａｌｐｈａｂｅｄ高松香西駅前": sourcePhoto(
    "takamatsu-stay-h172090.jpg",
    "Ａｌｐｈａｂｅｄ高松香西駅前の客室写真",
    "Ａｌｐｈａｂｅｄ高松香西駅前 room photo",
    "https://travel.rakuten.co.jp/HOTEL/172090/172090.html",
    '楽天トラベル'
  ),
  "Ａｒｔ Ｓｅｔｏｕｃｈｉ Ｔｒｉｅｎｎａｌｅ Ｈｏｔｅｌ": sourcePhoto(
    "takamatsu-stay-h178924.jpg",
    "Ａｒｔ Ｓｅｔｏｕｃｈｉ Ｔｒｉｅｎｎａｌｅ Ｈｏｔｅｌの客室写真",
    "Ａｒｔ Ｓｅｔｏｕｃｈｉ Ｔｒｉｅｎｎａｌｅ Ｈｏｔｅｌ room photo",
    "https://travel.rakuten.co.jp/HOTEL/178924/178924.html",
    '楽天トラベル'
  ),
  "Ｃｌａｓｓｙ仏生山／民泊": sourcePhoto(
    "takamatsu-stay-h189467.jpg",
    "Ｃｌａｓｓｙ仏生山／民泊の客室写真",
    "Ｃｌａｓｓｙ仏生山／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/189467/189467.html",
    '楽天トラベル'
  ),
  "Ｃｏｍｍｏｎｓ Ｌｏｄｇｅ ＨＩＫＡＲＩ": sourcePhoto(
    "takamatsu-stay-h197697.jpg",
    "Ｃｏｍｍｏｎｓ Ｌｏｄｇｅ ＨＩＫＡＲＩの客室写真",
    "Ｃｏｍｍｏｎｓ Ｌｏｄｇｅ ＨＩＫＡＲＩ room photo",
    "https://travel.rakuten.co.jp/HOTEL/197697/197697.html",
    '楽天トラベル'
  ),
  "Ｄａｎｎｏｕｒａ Ｒｅｓｏｒｔ Ｖｉｌｌａ／民泊": sourcePhoto(
    "takamatsu-stay-h195738.jpg",
    "Ｄａｎｎｏｕｒａ Ｒｅｓｏｒｔ Ｖｉｌｌａ／民泊の客室写真",
    "Ｄａｎｎｏｕｒａ Ｒｅｓｏｒｔ Ｖｉｌｌａ／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/195738/195738.html",
    '楽天トラベル'
  ),
  "Ｇｕｅｓｔ Ｈｏｕｓｅ Ａｊｉ ｎａｋａｎｉｗａ／民泊": sourcePhoto(
    "takamatsu-stay-h190705.jpg",
    "Ｇｕｅｓｔ Ｈｏｕｓｅ Ａｊｉ ｎａｋａｎｉｗａ／民泊の客室写真",
    "Ｇｕｅｓｔ Ｈｏｕｓｅ Ａｊｉ ｎａｋａｎｉｗａ／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/190705/190705.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ ＲＡＨ": sourcePhoto(
    "takamatsu-stay-h202440.jpg",
    "ＨＯＴＥＬ ＲＡＨの客室写真",
    "ＨＯＴＥＬ ＲＡＨ room photo",
    "https://travel.rakuten.co.jp/HOTEL/202440/202440.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ ＳＷＥＥＴＷＡＴＥＲ": sourcePhoto(
    "takamatsu-stay-h196876.jpg",
    "ＨＯＴＥＬ ＳＷＥＥＴＷＡＴＥＲの客室写真",
    "ＨＯＴＥＬ ＳＷＥＥＴＷＡＴＥＲ room photo",
    "https://travel.rakuten.co.jp/HOTEL/196876/196876.html",
    '楽天トラベル'
  ),
  "Ｈａｂｉ ａｐａｒｔｍｅｎｔ ＾": sourcePhoto(
    "takamatsu-stay-h195532.jpg",
    "Ｈａｂｉ ａｐａｒｔｍｅｎｔ ＾の客室写真",
    "Ｈａｂｉ ａｐａｒｔｍｅｎｔ ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/195532/195532.html",
    '楽天トラベル'
  ),
  "Ｈｏｓｔｅｌ ＪＡＱ ｔａｋａｍａｔｓｕ": sourcePhoto(
    "takamatsu-stay-h192023.jpg",
    "Ｈｏｓｔｅｌ ＪＡＱ ｔａｋａｍａｔｓｕの客室写真",
    "Ｈｏｓｔｅｌ ＪＡＱ ｔａｋａｍａｔｓｕ room photo",
    "https://travel.rakuten.co.jp/HOTEL/192023/192023.html",
    '楽天トラベル'
  ),
  "ＩＮＡＲＩ ゲストハウス栗林 ＾": sourcePhoto(
    "takamatsu-stay-h176248.jpg",
    "ＩＮＡＲＩ ゲストハウス栗林 ＾の客室写真",
    "ＩＮＡＲＩ ゲストハウス栗林 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/176248/176248.html",
    '楽天トラベル'
  ),
  "ＪＲクレメントイン高松": sourcePhoto(
    "takamatsu-stay-clement-167467.jpg",
    "ＪＲクレメントイン高松の客室写真",
    "ＪＲクレメントイン高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/167467/167467.html",
    '楽天トラベル'
  ),
  "ＪＲクレメントイン高松兵庫町（２０２６年７月１日リニューアルオープン）": sourcePhoto(
    "takamatsu-stay-clement-198876.jpg",
    "ＪＲクレメントイン高松兵庫町（２０２６年７月１日リニューアルオープン）の客室写真",
    "ＪＲクレメントイン高松兵庫町（２０２６年７月１日リニューアルオープン） room photo",
    "https://travel.rakuten.co.jp/HOTEL/198876/198876.html",
    '楽天トラベル'
  ),
  "ＪＲホテルクレメント高松": sourcePhoto(
    "takamatsu-stay-clement-14862.jpg",
    "ＪＲホテルクレメント高松の客室写真",
    "ＪＲホテルクレメント高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/14862/14862.html",
    '楽天トラベル'
  ),
  "Ｊａｓｍｉｎ Ｔ１８號 ＾": sourcePhoto(
    "takamatsu-stay-h190907.jpg",
    "Ｊａｓｍｉｎ Ｔ１８號 ＾の客室写真",
    "Ｊａｓｍｉｎ Ｔ１８號 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/190907/190907.html",
    '楽天トラベル'
  ),
  "Ｊａｓｍｉｎ錦町Ｉ ＾": sourcePhoto(
    "takamatsu-stay-h194403.jpg",
    "Ｊａｓｍｉｎ錦町Ｉ ＾の客室写真",
    "Ｊａｓｍｉｎ錦町Ｉ ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/194403/194403.html",
    '楽天トラベル'
  ),
  "Ｊａｓｍｉｎ錦町ＩＩ ＾": sourcePhoto(
    "takamatsu-stay-h194407.jpg",
    "Ｊａｓｍｉｎ錦町ＩＩ ＾の客室写真",
    "Ｊａｓｍｉｎ錦町ＩＩ ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/194407/194407.html",
    '楽天トラベル'
  ),
  "Ｊａｓｍｉｎ錦町ＩＩＩ ＾": sourcePhoto(
    "takamatsu-stay-h194408.jpg",
    "Ｊａｓｍｉｎ錦町ＩＩＩ ＾の客室写真",
    "Ｊａｓｍｉｎ錦町ＩＩＩ ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/194408/194408.html",
    '楽天トラベル'
  ),
  "Ｊａｓｍｉｎ錦町ＩＶ ＾": sourcePhoto(
    "takamatsu-stay-h194409.jpg",
    "Ｊａｓｍｉｎ錦町ＩＶ ＾の客室写真",
    "Ｊａｓｍｉｎ錦町ＩＶ ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/194409/194409.html",
    '楽天トラベル'
  ),
  "Ｊａｓｍｉｎ錦町Ｖ ＾": sourcePhoto(
    "takamatsu-stay-h194410.jpg",
    "Ｊａｓｍｉｎ錦町Ｖ ＾の客室写真",
    "Ｊａｓｍｉｎ錦町Ｖ ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/194410/194410.html",
    '楽天トラベル'
  ),
  "Ｋ’ｓホテル": sourcePhoto(
    "takamatsu-stay-h177485.jpg",
    "Ｋ’ｓホテルの客室写真",
    "Ｋ’ｓホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/177485/177485.html",
    '楽天トラベル'
  ),
  "Ｋ＇ｓホテル栗林公園北": sourcePhoto(
    "takamatsu-stay-65287.jpg",
    "Ｋ＇ｓホテル栗林公園北の客室写真",
    "Ｋ＇ｓホテル栗林公園北 room photo",
    "https://travel.rakuten.co.jp/HOTEL/202181/202181.html",
    '楽天トラベル'
  ),
  "ＫＡＮＥＭＩＴＳＵ ＣＡＰＩＴＡＬ ＨＯＴＥＬ": sourcePhoto(
    "takamatsu-stay-h183281.jpg",
    "ＫＡＮＥＭＩＴＳＵ ＣＡＰＩＴＡＬ ＨＯＴＥＬの客室写真",
    "ＫＡＮＥＭＩＴＳＵ ＣＡＰＩＴＡＬ ＨＯＴＥＬ room photo",
    "https://travel.rakuten.co.jp/HOTEL/183281/183281.html",
    '楽天トラベル'
  ),
  "ＫＯＫＯ ＨＯＴＥＬ 高松": sourcePhoto(
    "takamatsu-stay-h181859.jpg",
    "ＫＯＫＯ ＨＯＴＥＬ 高松の客室写真",
    "ＫＯＫＯ ＨＯＴＥＬ 高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/181859/181859.html",
    '楽天トラベル'
  ),
  "ＫＵＫＵ Ｐｅｔ Ｌｏｄｇｅ": sourcePhoto(
    "takamatsu-stay-h197974.jpg",
    "ＫＵＫＵ Ｐｅｔ Ｌｏｄｇｅの客室写真",
    "ＫＵＫＵ Ｐｅｔ Ｌｏｄｇｅ room photo",
    "https://travel.rakuten.co.jp/HOTEL/197974/197974.html",
    '楽天トラベル'
  ),
  "ＭＫ７５７ Ｂ－ＳＴＡＹ高松Ｇｏｌｄ Ｓｈｉｐ／民泊": sourcePhoto(
    "takamatsu-stay-65293.jpg",
    "ＭＫ７５７ Ｂ－ＳＴＡＹ高松Ｇｏｌｄ Ｓｈｉｐ／民泊の客室写真",
    "ＭＫ７５７ Ｂ－ＳＴＡＹ高松Ｇｏｌｄ Ｓｈｉｐ／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/200566/200566.html",
    '楽天トラベル'
  ),
  "Ｍｉｎｅｙａｍａ Ｇｒｅｅｎ Ｖｉｌｌａ／民泊": sourcePhoto(
    "takamatsu-stay-h190499.jpg",
    "Ｍｉｎｅｙａｍａ Ｇｒｅｅｎ Ｖｉｌｌａ／民泊の客室写真",
    "Ｍｉｎｅｙａｍａ Ｇｒｅｅｎ Ｖｉｌｌａ／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/190499/190499.html",
    '楽天トラベル'
  ),
  "ＰａｌｍＶｉｌｌａ〜最大１０名！テラスでＢＢＱ☆車４台可☆／民泊": sourcePhoto(
    "takamatsu-stay-h185506.jpg",
    "ＰａｌｍＶｉｌｌａ〜最大１０名！テラスでＢＢＱ☆車４台可☆／民泊の客室写真",
    "ＰａｌｍＶｉｌｌａ〜最大１０名！テラスでＢＢＱ☆車４台可☆／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/185506/185506.html",
    '楽天トラベル'
  ),
  "ＳＵＮＮＹ ＤＡＹ ＨＯＳＴＥＬ": sourcePhoto(
    "takamatsu-stay-h165595.jpg",
    "ＳＵＮＮＹ ＤＡＹ ＨＯＳＴＥＬの客室写真",
    "ＳＵＮＮＹ ＤＡＹ ＨＯＳＴＥＬ room photo",
    "https://travel.rakuten.co.jp/HOTEL/165595/165595.html",
    '楽天トラベル'
  ),
  "Ｓｅｔｏ家琴ノ葉": sourcePhoto(
    "takamatsu-stay-h197715.jpg",
    "Ｓｅｔｏ家琴ノ葉の客室写真",
    "Ｓｅｔｏ家琴ノ葉 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197715/197715.html",
    '楽天トラベル'
  ),
  "Ｓｅｔｏ家高松駅前": sourcePhoto(
    "takamatsu-stay-h197760.jpg",
    "Ｓｅｔｏ家高松駅前の客室写真",
    "Ｓｅｔｏ家高松駅前 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197760/197760.html",
    '楽天トラベル'
  ),
  "Ｓｅｔｏ家ＳＡＵＮＡ 兵庫町": sourcePhoto(
    "takamatsu-stay-h199013.jpg",
    "Ｓｅｔｏ家ＳＡＵＮＡ 兵庫町の客室写真",
    "Ｓｅｔｏ家ＳＡＵＮＡ 兵庫町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/199013/199013.html",
    '楽天トラベル'
  ),
  "Ｓｅｔｏｌｉｖｅ 別邸 ｂｙ ４Ｓ ＳＴＡＹ": sourcePhoto(
    "takamatsu-stay-h198788.jpg",
    "Ｓｅｔｏｌｉｖｅ 別邸 ｂｙ ４Ｓ ＳＴＡＹの客室写真",
    "Ｓｅｔｏｌｉｖｅ 別邸 ｂｙ ４Ｓ ＳＴＡＹ room photo",
    "https://travel.rakuten.co.jp/HOTEL/198788/198788.html",
    '楽天トラベル'
  ),
  "ＴＥＮ ｔｏ ＳＥＮ ゲストハウス高松": sourcePhoto(
    "takamatsu-stay-h160667.jpg",
    "ＴＥＮ ｔｏ ＳＥＮ ゲストハウス高松の客室写真",
    "ＴＥＮ ｔｏ ＳＥＮ ゲストハウス高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/160667/160667.html",
    '楽天トラベル'
  ),
  "ＴＲＡＶＥＬ＆ＢＯＯＫ ＨＯＴＥＬ ＨＵＬＡＴＯＮ ＣＡＢＩＮ ＴＡＫＡＭＡＴＳＵ": sourcePhoto(
    "takamatsu-stay-h168423.jpg",
    "ＴＲＡＶＥＬ＆ＢＯＯＫ ＨＯＴＥＬ ＨＵＬＡＴＯＮ ＣＡＢＩＮ ＴＡＫＡＭＡＴＳＵの客室写真",
    "ＴＲＡＶＥＬ＆ＢＯＯＫ ＨＯＴＥＬ ＨＵＬＡＴＯＮ ＣＡＢＩＮ ＴＡＫＡＭＡＴＳＵ room photo",
    "https://travel.rakuten.co.jp/HOTEL/168423/168423.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ シティホテルパティオ": sourcePhoto(
    "takamatsu-stay-h139873.jpg",
    "Ｔａｂｉｓｔ シティホテルパティオの客室写真",
    "Ｔａｂｉｓｔ シティホテルパティオ room photo",
    "https://travel.rakuten.co.jp/HOTEL/139873/139873.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ ニュー月光園": sourcePhoto(
    "takamatsu-stay-h40694.jpg",
    "Ｔａｂｉｓｔ ニュー月光園の客室写真",
    "Ｔａｂｉｓｔ ニュー月光園 room photo",
    "https://travel.rakuten.co.jp/HOTEL/40694/40694.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ ビジネスホテル ジャパン 高松 香川": sourcePhoto(
    "takamatsu-stay-h41130.jpg",
    "Ｔａｂｉｓｔ ビジネスホテル ジャパン 高松 香川の客室写真",
    "Ｔａｂｉｓｔ ビジネスホテル ジャパン 高松 香川 room photo",
    "https://travel.rakuten.co.jp/HOTEL/41130/41130.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ ビジネスホテル丸登美 高松 香川": sourcePhoto(
    "takamatsu-stay-h108660.jpg",
    "Ｔａｂｉｓｔ ビジネスホテル丸登美 高松 香川の客室写真",
    "Ｔａｂｉｓｔ ビジネスホテル丸登美 高松 香川 room photo",
    "https://travel.rakuten.co.jp/HOTEL/108660/108660.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ ビジネスホテル瓦町": sourcePhoto(
    "takamatsu-stay-h197426.jpg",
    "Ｔａｂｉｓｔ ビジネスホテル瓦町の客室写真",
    "Ｔａｂｉｓｔ ビジネスホテル瓦町 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197426/197426.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ ホテル吉泊": sourcePhoto(
    "takamatsu-stay-h192739.jpg",
    "Ｔａｂｉｓｔ ホテル吉泊の客室写真",
    "Ｔａｂｉｓｔ ホテル吉泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/192739/192739.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ 栗林山荘": sourcePhoto(
    "takamatsu-stay-h183975.jpg",
    "Ｔａｂｉｓｔ 栗林山荘の客室写真",
    "Ｔａｂｉｓｔ 栗林山荘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/183975/183975.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ 高松パールホテル": sourcePhoto(
    "takamatsu-stay-h54500.jpg",
    "Ｔａｂｉｓｔ 高松パールホテルの客室写真",
    "Ｔａｂｉｓｔ 高松パールホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/54500/54500.html",
    '楽天トラベル'
  ),
  "ＹＵＺＵＫＩ": sourcePhoto(
    "takamatsu-stay-h172790.jpg",
    "ＹＵＺＵＫＩの客室写真",
    "ＹＵＺＵＫＩ room photo",
    "https://travel.rakuten.co.jp/HOTEL/172790/172790.html",
    '楽天トラベル'
  ),
  "ａｔｉｃ Ｇｕｅｓｔｈｏｕｓｅ": sourcePhoto(
    "takamatsu-stay-h199028.jpg",
    "ａｔｉｃ Ｇｕｅｓｔｈｏｕｓｅの客室写真",
    "ａｔｉｃ Ｇｕｅｓｔｈｏｕｓｅ room photo",
    "https://travel.rakuten.co.jp/HOTEL/199028/199028.html",
    '楽天トラベル'
  ),
  "ｆａｖ 高松": sourcePhoto(
    "takamatsu-stay-h181189.jpg",
    "ｆａｖ 高松の客室写真",
    "ｆａｖ 高松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/181189/181189.html",
    '楽天トラベル'
  ),
  "ｋｏｉｋｏｉ天神町 ＾": sourcePhoto(
    "takamatsu-stay-h189811.jpg",
    "ｋｏｉｋｏｉ天神町 ＾の客室写真",
    "ｋｏｉｋｏｉ天神町 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/189811/189811.html",
    '楽天トラベル'
  ),
  "あじ温泉 庵治観光ホテル 海のやどり 大浴場": sourcePhoto(
    "takamatsu-onsen-h10981.jpg",
    "あじ温泉 庵治観光ホテル 海のやどり 大浴場の写真",
    "あじ温泉 庵治観光ホテル 海のやどり 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/10981/gallery.html",
    '楽天トラベル'
  ),
  "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場": sourcePhoto(
    "takamatsu-onsen-dormy-70853.jpg",
    "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場の写真",
    "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/70853/gallery.html",
    '楽天トラベル'
  ),
  "ゴールデンタイム高松 大浴場": sourcePhoto(
    "takamatsu-onsen-h72077.jpg",
    "ゴールデンタイム高松 大浴場の写真",
    "ゴールデンタイム高松 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/72077/gallery.html",
    '楽天トラベル'
  ),
  "ファーストイン高松 大浴場": sourcePhoto(
    "takamatsu-onsen-h130100.jpg",
    "ファーストイン高松 大浴場の写真",
    "ファーストイン高松 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/130100/gallery.html",
    '楽天トラベル'
  ),
  "ホテルルートイン高松屋島 大浴場": sourcePhoto(
    "takamatsu-onsen-routeinn.jpg",
    "ホテルルートイン高松屋島 大浴場の写真",
    "ホテルルートイン高松屋島 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/167563/gallery.html",
    '楽天トラベル'
  ),
  "ホテル川六 エルステージ高松 大浴場": sourcePhoto(
    "takamatsu-onsen-h12614.jpg",
    "ホテル川六 エルステージ高松 大浴場の写真",
    "ホテル川六 エルステージ高松 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/12614/gallery.html",
    '楽天トラベル'
  ),
  "ホテルＮｏ．１高松 大浴場": sourcePhoto(
    "takamatsu-onsen-h18987.jpg",
    "ホテルＮｏ．１高松 大浴場の写真",
    "ホテルＮｏ．１高松 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/18987/gallery.html",
    '楽天トラベル'
  ),
  "四国高松温泉 ニューグランデみまつ 大浴場": sourcePhoto(
    "takamatsu-onsen-h9440.jpg",
    "四国高松温泉 ニューグランデみまつ 大浴場の写真",
    "四国高松温泉 ニューグランデみまつ 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/9440/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉 牛若の湯 スーパーホテル高松禁煙館 大浴場": sourcePhoto(
    "takamatsu-onsen-superhotel-40517.jpg",
    "天然温泉 牛若の湯 スーパーホテル高松禁煙館 大浴場の写真",
    "天然温泉 牛若の湯 スーパーホテル高松禁煙館 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/40517/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場": sourcePhoto(
    "takamatsu-onsen-dormy-167716.jpg",
    "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場の写真",
    "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/167716/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉 讃岐の湯 スーパーホテル高松・田町 大浴場": sourcePhoto(
    "takamatsu-onsen-superhotel-50215.jpg",
    "天然温泉 讃岐の湯 スーパーホテル高松・田町 大浴場の写真",
    "天然温泉 讃岐の湯 スーパーホテル高松・田町 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/50215/gallery.html",
    '楽天トラベル'
  ),
  "穴吹邸 大浴場": sourcePhoto(
    "takamatsu-onsen-h187641.jpg",
    "穴吹邸 大浴場の写真",
    "穴吹邸 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/187641/gallery.html",
    '楽天トラベル'
  ),
  "高松ホテルサキカ 大浴場": sourcePhoto(
    "takamatsu-onsen-h11289.jpg",
    "高松ホテルサキカ 大浴場の写真",
    "高松ホテルサキカ 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/11289/gallery.html",
    '楽天トラベル'
  ),
  "髙柳旅館 大浴場": sourcePhoto(
    "takamatsu-onsen-39641.jpg",
    "髙柳旅館 大浴場の写真",
    "髙柳旅館 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/196641/gallery.html",
    '楽天トラベル'
  ),
  "ＪＲクレメントイン高松 大浴場": sourcePhoto(
    "takamatsu-onsen-clement.jpg",
    "ＪＲクレメントイン高松 大浴場の写真",
    "ＪＲクレメントイン高松 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/167467/gallery.html",
    '楽天トラベル'
  ),
  "Ｓｅｔｏ家琴ノ葉 大浴場": sourcePhoto(
    "takamatsu-onsen-h197715.jpg",
    "Ｓｅｔｏ家琴ノ葉 大浴場の写真",
    "Ｓｅｔｏ家琴ノ葉 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/197715/gallery.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ 栗林山荘 大浴場": sourcePhoto(
    "takamatsu-onsen-h183975.jpg",
    "Ｔａｂｉｓｔ 栗林山荘 大浴場の写真",
    "Ｔａｂｉｓｔ 栗林山荘 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/183975/gallery.html",
    '楽天トラベル'
  ),

};

function sight(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string,
  lat: number | null,
  lon: number | null
): FacilityRow {
  return {
    id,
    jis: TAKAMATSU.jis,
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
    accessed: TAKAMATSU.sources.accessed
  };
}

/** Photo-only tourism rows. No frozen jsonl. Wikipedia / official coords. */
export const TAKAMATSU_FACILITIES: readonly FacilityRow[] = [
  sight('takamatsu-sight-01', '栗林公園', '香川県高松市栗林町一丁目20番16号', null, TAKAMATSU.sources.ritsurin, 34.330333, 134.044403),
  sight('takamatsu-sight-02', '高松城（玉藻公園）', '香川県高松市玉藻町2-1', '087-851-1521', TAKAMATSU.sources.tamamo, 34.350278, 134.051667),
  sight('takamatsu-sight-03', '屋島', '香川県高松市屋島東町', null, TAKAMATSU.sources.yashima, 34.3575, 134.1014),
  sight('takamatsu-sight-04', '屋島寺', '香川県高松市屋島東町1808', null, TAKAMATSU.sources.yashimaji, 34.3586, 134.1019),
  sight('takamatsu-sight-05', '女木島', '香川県高松市女木町', null, TAKAMATSU.sources.megijima, 34.4000, 134.0500),
  sight('takamatsu-sight-06', '四国村', '香川県高松市屋島中町91', null, TAKAMATSU.sources.shikokumura, 34.3486, 134.1000),
  sight('takamatsu-sight-07', '屋島ケーブルカー', '香川県高松市屋島東町', null, TAKAMATSU.sources.cable, 34.3550, 134.0980),
  sight('takamatsu-sight-08', 'イサム・ノグチ庭園美術館', '香川県高松市牟礼町牟礼3519', null, TAKAMATSU.sources.noguchi, 34.3420, 134.1230),
  sight('takamatsu-onsen-01', "あじ温泉 庵治観光ホテル 海のやどり 大浴場", "香川県高松市庵治町5494", "087-871-3141", "https://travel.rakuten.co.jp/HOTEL/10981/gallery.html", null, null),
  sight('takamatsu-onsen-02', "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場", "香川県高松市瓦町1-10-10", "087-832-5489", "https://travel.rakuten.co.jp/HOTEL/70853/gallery.html", null, null),
  sight('takamatsu-onsen-03', "ゴールデンタイム高松 大浴場", "香川県高松市瓦町2-1-7", null, "https://travel.rakuten.co.jp/HOTEL/72077/gallery.html", null, null),
  sight('takamatsu-onsen-04', "ファーストイン高松 大浴場", "香川県高松市鶴屋町2-3", "087-822-1919", "https://travel.rakuten.co.jp/HOTEL/130100/gallery.html", null, null),
  sight('takamatsu-onsen-05', "ホテルルートイン高松屋島 大浴場", "香川県高松市春日町1653-2", "050-5847-7445", "https://travel.rakuten.co.jp/HOTEL/167563/gallery.html", null, null),
  sight('takamatsu-onsen-06', "ホテル川六 エルステージ高松 大浴場", "香川県高松市百間町1-2", "087-821-5666", "https://travel.rakuten.co.jp/HOTEL/12614/gallery.html", null, null),
  sight('takamatsu-onsen-07', "ホテルＮｏ．１高松 大浴場", "香川県高松市観光通2-4-1", "087-812-2222", "https://travel.rakuten.co.jp/HOTEL/18987/gallery.html", null, null),
  sight('takamatsu-onsen-08', "四国高松温泉 ニューグランデみまつ 大浴場", "香川県高松市通町2-3", "087-851-1100", "https://travel.rakuten.co.jp/HOTEL/9440/gallery.html", null, null),
  sight('takamatsu-onsen-09', "天然温泉 牛若の湯 スーパーホテル高松禁煙館 大浴場", "香川県高松市観光通り1-4-12", null, "https://travel.rakuten.co.jp/HOTEL/40517/gallery.html", null, null),
  sight('takamatsu-onsen-10', "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場", "香川県高松市天神前1-3", "087-835-5489", "https://travel.rakuten.co.jp/HOTEL/167716/gallery.html", null, null),
  sight('takamatsu-onsen-11', "天然温泉 讃岐の湯 スーパーホテル高松・田町 大浴場", "香川県高松市田町1-1", "087-831-5590", "https://travel.rakuten.co.jp/HOTEL/50215/gallery.html", null, null),
  sight('takamatsu-onsen-12', "穴吹邸 大浴場", "香川県高松市城東町1-7-15", null, "https://travel.rakuten.co.jp/HOTEL/187641/gallery.html", null, null),
  sight('takamatsu-onsen-13', "高松ホテルサキカ 大浴場", "香川県高松市百間町6-9", "087-822-2111", "https://travel.rakuten.co.jp/HOTEL/11289/gallery.html", null, null),
  sight('takamatsu-onsen-14', "髙柳旅館 大浴場", "香川県高松市牟礼町牟礼3137-14", "087-845-1516", "https://travel.rakuten.co.jp/HOTEL/196641/gallery.html", null, null),
  sight('takamatsu-onsen-15', "ＪＲクレメントイン高松 大浴場", "香川県高松市浜ノ町1-3", "087-811-1200", "https://travel.rakuten.co.jp/HOTEL/167467/gallery.html", null, null),
  sight('takamatsu-onsen-16', "Ｓｅｔｏ家琴ノ葉 大浴場", "香川県高松市西内町12-15", "087-802-3386", "https://travel.rakuten.co.jp/HOTEL/197715/gallery.html", null, null),
  sight('takamatsu-onsen-17', "Ｔａｂｉｓｔ 栗林山荘 大浴場", "香川県高松市宮脇町2-31-27", "087-834-3000", "https://travel.rakuten.co.jp/HOTEL/183975/gallery.html", null, null),
];
