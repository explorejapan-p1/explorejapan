/**
 * Matsuyama City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-08). JIS 38201. First Ehime hub (松山市).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Onsen: 道後温泉本館 (Commons). Experience: 坊っちゃん列車.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MATSUYAMA = {
  nameJa: '松山市',
  nameEn: 'Matsuyama',
  reading: 'まつやまし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'matsuyama',
  jis: '38201',
  jlis: '382019',
  sameAs: 'https://www.city.matsuyama.ehime.jp/',
  hall: {
    postalCode: '790-8571',
    addressJa: '愛媛県松山市二番町四丁目7番地2',
    addressEn: '7-2 Nibancho 4-chome, Matsuyama City, Ehime 790-8571, Japan',
    phone: '089-948-6688'
  },
  sources: {
    home: 'https://www.city.matsuyama.ehime.jp/',
    hall: 'https://www.city.matsuyama.ehime.jp/shisetsu/shinos/annai.html',
    kankou: 'https://matsuyama-sightseeing.com/',
    castle: 'https://ja.wikipedia.org/wiki/%E6%9D%BE%E5%B1%B1%E5%9F%8E_(%E4%BC%8A%E4%BA%88)',
    tabelogCity: 'https://tabelog.com/ehime/C38201/rstLst/',
    candeo: 'https://travel.rakuten.co.jp/HOTEL/148952/148952.html',
    accessed: '2026-09-09'
  }
} as const;

export const MATSUYAMA_EXPECTED_ROW_COUNT = 32;
export const MATSUYAMA_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Matsuyama Castle honmaru sakura. */
export const MATSUYAMA_PLACE_PHOTO = wikiPhoto(
  'matsuyama-castle.jpg',
  'https://commons.wikimedia.org/wiki/File:Matsuyama_castle_(Iyo)2.JPG',
  'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
  'Shiro4873', 'https://commons.wikimedia.org/wiki/User:Shiro4873', '2007-04-08',
  '松山城本丸の桜', 'Matsuyama Castle main bailey with cherry blossoms'
);

const TABELOG_38002524 = 'https://tabelog.com/ehime/A3801/A380101/38002524/';
const TABELOG_38010409 = 'https://tabelog.com/ehime/A3801/A380101/38010409/';
const TABELOG_38013243 = 'https://tabelog.com/ehime/A3801/A380101/38013243/';
const TABELOG_38009262 = 'https://tabelog.com/ehime/A3801/A380101/38009262/';
const TABELOG_38004254 = 'https://tabelog.com/ehime/A3801/A380101/38004254/';
const TABELOG_38013098 = 'https://tabelog.com/ehime/A3801/A380101/38013098/';
const TABELOG_38015208 = 'https://tabelog.com/ehime/A3801/A380101/38015208/';
const TABELOG_38012016 = 'https://tabelog.com/ehime/A3801/A380101/38012016/';
const TABELOG_38000637 = 'https://tabelog.com/ehime/A3801/A380101/38000637/';
const TABELOG_38001214 = 'https://tabelog.com/ehime/A3801/A380101/38001214/';
const TABELOG_38000161 = 'https://tabelog.com/ehime/A3801/A380101/38000161/';
const TABELOG_38000348 = 'https://tabelog.com/ehime/A3801/A380101/38000348/';
const TABELOG_38000678 = 'https://tabelog.com/ehime/A3801/A380101/38000678/';
const TABELOG_38005974 = 'https://tabelog.com/ehime/A3801/A380101/38005974/';
const TABELOG_38000037 = 'https://tabelog.com/ehime/A3801/A380101/38000037/';
const TABELOG_38000209 = 'https://tabelog.com/ehime/A3801/A380101/38000209/';

export const MATSUYAMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '松山城': MATSUYAMA_PLACE_PHOTO,
  '道後温泉本館': wikiPhoto(
    'matsuyama-dogo-honkan.jpg',
    'https://commons.wikimedia.org/wiki/File:Dogo_Hot_Spring2(Matsuyama_City).JPG',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'Jyo81', 'https://commons.wikimedia.org/wiki/User:Jyo81', '2008-09-12',
    '道後温泉本館', 'Dogo Onsen Honkan, Matsuyama'
  ),
  '石手寺': wikiPhoto(
    'matsuyama-ishiteji.jpg',
    'https://commons.wikimedia.org/wiki/File:Ishite-ji(Temple)_Matsuyama_City.JPG',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'Jyo81', 'https://commons.wikimedia.org/wiki/User:Jyo81', '2009',
    '石手寺', 'Ishite-ji Temple, Matsuyama'
  ),
  '坊っちゃん列車': wikiPhoto(
    'matsuyama-botchan.jpg',
    'https://commons.wikimedia.org/wiki/File:Botchan_Train_001.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Brakeet', 'https://commons.wikimedia.org/wiki/User:Brakeet', '2012',
    '坊っちゃん列車', 'Botchan Train, Matsuyama'
  ),
  '伊佐爾波神社': wikiPhoto(
    'matsuyama-isaniwa.jpg',
    'https://commons.wikimedia.org/wiki/File:Isaniwa_Shrine_roumon.jpg',
    'Public domain', 'https://commons.wikimedia.org/wiki/File:Isaniwa_Shrine_roumon.jpg',
    'Urashimataro', 'https://commons.wikimedia.org/wiki/User:Urashimataro', '2010',
    '伊佐爾波神社楼門', 'Isaniwa Shrine tower gate'
  ),
  '坂の上の雲ミュージアム': wikiPhoto(
    'matsuyama-sakanoue.jpg',
    'https://commons.wikimedia.org/wiki/File:Saka-no-ue-no-kumo_Museum.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Tamago915', 'https://commons.wikimedia.org/wiki/User:Tamago915', '2007',
    '坂の上の雲ミュージアム', 'Saka-no-ue-no-kumo Museum'
  ),
  '湯築城跡': wikiPhoto(
    'matsuyama-yuzuki.jpg',
    'https://commons.wikimedia.org/wiki/File:Yuzuki_Castle_Ruins2(Matsuyama_City).JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Jyo81', 'https://commons.wikimedia.org/wiki/User:Jyo81', '2008',
    '湯築城跡（道後公園）', 'Yuzuki Castle ruins in Dogo Park'
  ),
  '松山総合公園': wikiPhoto(
    'matsuyama-central-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Matsuyama_Central_Park1(Matsuyama_City).JPG',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'Jyo81', 'https://commons.wikimedia.org/wiki/User:Jyo81', '2009',
    '松山総合公園', 'Matsuyama Comprehensive Park'
  ),
  'くるますし': sourcePhoto('matsuyama-38002524-dish.jpg', 'くるますしの料理写真', 'くるますし food photo', TABELOG_38002524, '食べログ'),
  '鮨 いの': sourcePhoto('matsuyama-38010409-dish.jpg', '鮨 いのの料理写真', '鮨 いの food photo', TABELOG_38010409, '食べログ'),
  '道後 海舟': sourcePhoto('matsuyama-38013243-dish.jpg', '道後 海舟の料理写真', '道後 海舟 food photo', TABELOG_38013243, '食べログ'),
  '名前のないイタリア料理店': sourcePhoto('matsuyama-38009262-dish.jpg', '名前のないイタリア料理店の料理写真', '名前のないイタリア料理店 food photo', TABELOG_38009262, '食べログ'),
  '馳走屋河の': sourcePhoto('matsuyama-38004254-dish.jpg', '馳走屋河のの料理写真', '馳走屋河の food photo', TABELOG_38004254, '食べログ'),
  '鮨かわなか': sourcePhoto('matsuyama-38013098-dish.jpg', '鮨かわなかの料理写真', '鮨かわなか food photo', TABELOG_38013098, '食べログ'),
  'Scino': sourcePhoto('matsuyama-38015208-dish.jpg', 'Scinoの料理写真', 'Scino food photo', TABELOG_38015208, '食べログ'),
  '洋食屋 Shii': sourcePhoto('matsuyama-38012016-dish.jpg', '洋食屋 Shiiの料理写真', '洋食屋 Shii food photo', TABELOG_38012016, '食べログ'),
  '味暦 正生': sourcePhoto('matsuyama-38000637-dish.jpg', '味暦 正生の料理写真', '味暦 正生 food photo', TABELOG_38000637, '食べログ'),
  '炭心': sourcePhoto('matsuyama-38001214-dish.jpg', '炭心の料理写真', '炭心 food photo', TABELOG_38001214, '食べログ'),
  '上海点心 豫園': sourcePhoto('matsuyama-38000161-dish.jpg', '上海点心 豫園の料理写真', '上海点心 豫園 food photo', TABELOG_38000161, '食べログ'),
  '鍋焼うどん アサヒ': sourcePhoto('matsuyama-38000348-dish.jpg', '鍋焼うどん アサヒの料理写真', '鍋焼うどん アサヒ food photo', TABELOG_38000348, '食べログ'),
  'ラ・セーラ': sourcePhoto('matsuyama-38000678-dish.jpg', 'ラ・セーラの料理写真', 'ラ・セーラ food photo', TABELOG_38000678, '食べログ'),
  'さかな工房　丸万': sourcePhoto('matsuyama-38005974-dish.jpg', 'さかな工房　丸万の料理写真', 'さかな工房　丸万 food photo', TABELOG_38005974, '食べログ'),
  'ことり': sourcePhoto('matsuyama-38000037-dish.jpg', 'ことりの料理写真', 'ことり food photo', TABELOG_38000037, '食べログ'),
  '霧の森菓子工房 松山店': sourcePhoto('matsuyama-38000209-dish.jpg', '霧の森菓子工房 松山店の料理写真', '霧の森菓子工房 松山店 food photo', TABELOG_38000209, '食べログ'),
"道後温泉 道後グランドホテル": sourcePhoto(
    "matsuyama-stay-dogo-grand.jpg",
    "道後温泉 道後グランドホテルの客室写真",
    "道後温泉 道後グランドホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/6001/6001.html",
    '楽天トラベル'
  ),
  "ホテルマイステイズ松山": sourcePhoto(
    "matsuyama-stay-mystays.jpg",
    "ホテルマイステイズ松山の客室写真",
    "ホテルマイステイズ松山 room photo",
    "https://travel.rakuten.co.jp/HOTEL/6276/6276.html",
    '楽天トラベル'
  ),
  "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜": sourcePhoto(
    "matsuyama-stay-h8384.jpg",
    "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜の客室写真",
    "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜 room photo",
    "https://travel.rakuten.co.jp/HOTEL/8384/8384.html",
    '楽天トラベル'
  ),
  "道後温泉 道後舘": sourcePhoto(
    "matsuyama-stay-h10788.jpg",
    "道後温泉 道後舘の客室写真",
    "道後温泉 道後舘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/10788/10788.html",
    '楽天トラベル'
  ),
  "チェックイン松山": sourcePhoto(
    "matsuyama-stay-h11211.jpg",
    "チェックイン松山の客室写真",
    "チェックイン松山 room photo",
    "https://travel.rakuten.co.jp/HOTEL/11211/11211.html",
    '楽天トラベル'
  ),
  "道後温泉 ふなや": sourcePhoto(
    "matsuyama-stay-funaya.jpg",
    "道後温泉 ふなやの客室写真",
    "道後温泉 ふなや room photo",
    "https://travel.rakuten.co.jp/HOTEL/11332/11332.html",
    '楽天トラベル'
  ),
  "道後温泉 大和屋本店": sourcePhoto(
    "matsuyama-stay-yamatoya.jpg",
    "道後温泉 大和屋本店の客室写真",
    "道後温泉 大和屋本店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/13429/13429.html",
    '楽天トラベル'
  ),
  "道後温泉 ホテル椿館": sourcePhoto(
    "matsuyama-stay-tsubaki.jpg",
    "道後温泉 ホテル椿館の客室写真",
    "道後温泉 ホテル椿館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/13653/13653.html",
    '楽天トラベル'
  ),
  "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯―": sourcePhoto(
    "matsuyama-stay-h15420.jpg",
    "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯―の客室写真",
    "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯― room photo",
    "https://travel.rakuten.co.jp/HOTEL/15420/15420.html",
    '楽天トラベル'
  ),
  "道後温泉 花ゆづき": sourcePhoto(
    "matsuyama-stay-h16719.jpg",
    "道後温泉 花ゆづきの客室写真",
    "道後温泉 花ゆづき room photo",
    "https://travel.rakuten.co.jp/HOTEL/16719/16719.html",
    '楽天トラベル'
  ),
  "道後温泉 茶玻瑠": sourcePhoto(
    "matsuyama-stay-h17668.jpg",
    "道後温泉 茶玻瑠の客室写真",
    "道後温泉 茶玻瑠 room photo",
    "https://travel.rakuten.co.jp/HOTEL/17668/17668.html",
    '楽天トラベル'
  ),
  "天然温泉 松山ニューグランドホテル": sourcePhoto(
    "matsuyama-stay-h19414.jpg",
    "天然温泉 松山ニューグランドホテルの客室写真",
    "天然温泉 松山ニューグランドホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/19414/19414.html",
    '楽天トラベル'
  ),
  "道後温泉 オールドイングランド 道後山の手ホテル": sourcePhoto(
    "matsuyama-stay-h20469.jpg",
    "道後温泉 オールドイングランド 道後山の手ホテルの客室写真",
    "道後温泉 オールドイングランド 道後山の手ホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/20469/20469.html",
    '楽天トラベル'
  ),
  "奥道後 壱湯の守（いちゆのもり）": sourcePhoto(
    "matsuyama-stay-h27716.jpg",
    "奥道後 壱湯の守（いちゆのもり）の客室写真",
    "奥道後 壱湯の守（いちゆのもり） room photo",
    "https://travel.rakuten.co.jp/HOTEL/27716/27716.html",
    '楽天トラベル'
  ),
  "ホテルＮｏ．１松山": sourcePhoto(
    "matsuyama-stay-no1.jpg",
    "ホテルＮｏ．１松山の客室写真",
    "ホテルＮｏ．１松山 room photo",
    "https://travel.rakuten.co.jp/HOTEL/43995/43995.html",
    '楽天トラベル'
  ),
  "東道後のそらともり": sourcePhoto(
    "matsuyama-stay-h80639.jpg",
    "東道後のそらともりの客室写真",
    "東道後のそらともり room photo",
    "https://travel.rakuten.co.jp/HOTEL/80639/80639.html",
    '楽天トラベル'
  ),
  "ホテル道後やや": sourcePhoto(
    "matsuyama-stay-h108156.jpg",
    "ホテル道後ややの客室写真",
    "ホテル道後やや room photo",
    "https://travel.rakuten.co.jp/HOTEL/108156/108156.html",
    '楽天トラベル'
  ),
  "たかのこのホテル": sourcePhoto(
    "matsuyama-stay-h140784.jpg",
    "たかのこのホテルの客室写真",
    "たかのこのホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/140784/140784.html",
    '楽天トラベル'
  ),
  "大江戸温泉物語 道後": sourcePhoto(
    "matsuyama-stay-h147473.jpg",
    "大江戸温泉物語 道後の客室写真",
    "大江戸温泉物語 道後 room photo",
    "https://travel.rakuten.co.jp/HOTEL/147473/147473.html",
    '楽天トラベル'
  ),
  "ネストホテル松山": sourcePhoto(
    "matsuyama-stay-h147840.jpg",
    "ネストホテル松山の客室写真",
    "ネストホテル松山 room photo",
    "https://travel.rakuten.co.jp/HOTEL/147840/147840.html",
    '楽天トラベル'
  ),
  "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道": sourcePhoto(
    "matsuyama-stay-candeo.jpg",
    "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道の客室写真",
    "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道 room photo",
    "https://travel.rakuten.co.jp/HOTEL/148952/148952.html",
    '楽天トラベル'
  ),
  "ダイワロイネットホテル松山": sourcePhoto(
    "matsuyama-stay-daiwa.jpg",
    "ダイワロイネットホテル松山の客室写真",
    "ダイワロイネットホテル松山 room photo",
    "https://travel.rakuten.co.jp/HOTEL/151213/151213.html",
    '楽天トラベル'
  ),
  "リブマックスリゾート奥道後": sourcePhoto(
    "matsuyama-stay-h158312.jpg",
    "リブマックスリゾート奥道後の客室写真",
    "リブマックスリゾート奥道後 room photo",
    "https://travel.rakuten.co.jp/HOTEL/158312/158312.html",
    '楽天トラベル'
  ),
  "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ）": sourcePhoto(
    "matsuyama-stay-dormy.jpg",
    "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ）の客室写真",
    "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/165105/165105.html",
    '楽天トラベル'
  ),
  "道後温泉 八千代": sourcePhoto(
    "matsuyama-stay-h166206.jpg",
    "道後温泉 八千代の客室写真",
    "道後温泉 八千代 room photo",
    "https://travel.rakuten.co.jp/HOTEL/166206/166206.html",
    '楽天トラベル'
  ),
  "道後温泉 ホテル古湧園 遥": sourcePhoto(
    "matsuyama-stay-h176808.jpg",
    "道後温泉 ホテル古湧園 遥の客室写真",
    "道後温泉 ホテル古湧園 遥 room photo",
    "https://travel.rakuten.co.jp/HOTEL/176808/176808.html",
    '楽天トラベル'
  ),
  "道後ｈａｋｕｒｏ": sourcePhoto(
    "matsuyama-stay-h179083.jpg",
    "道後ｈａｋｕｒｏの客室写真",
    "道後ｈａｋｕｒｏ room photo",
    "https://travel.rakuten.co.jp/HOTEL/179083/179083.html",
    '楽天トラベル'
  ),
  "コンフォートホテル松山": sourcePhoto(
    "matsuyama-stay-comfort.jpg",
    "コンフォートホテル松山の客室写真",
    "コンフォートホテル松山 room photo",
    "https://travel.rakuten.co.jp/HOTEL/180563/180563.html",
    '楽天トラベル'
  ),
  "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）": sourcePhoto(
    "matsuyama-stay-h183045.jpg",
    "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）の客室写真",
    "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接） room photo",
    "https://travel.rakuten.co.jp/HOTEL/183045/183045.html",
    '楽天トラベル'
  ),
  "日和ホテル松山": sourcePhoto(
    "matsuyama-stay-h198319.jpg",
    "日和ホテル松山の客室写真",
    "日和ホテル松山 room photo",
    "https://travel.rakuten.co.jp/HOTEL/198319/198319.html",
    '楽天トラベル'
  ),
  "アパホテル〈松山市駅前〉（２０２６年７月ＯＰＥＮ）": sourcePhoto(
    "matsuyama-stay-apa.jpg",
    "アパホテル〈松山市駅前〉（２０２６年７月ＯＰＥＮ）の客室写真",
    "アパホテル〈松山市駅前〉（２０２６年７月ＯＰＥＮ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/199177/199177.html",
    '楽天トラベル'
  ),
  "道後温泉 道後グランドホテル 大浴場": sourcePhoto(
    "matsuyama-onsen-dogo-grand.jpg",
    "道後温泉 道後グランドホテル 大浴場の写真",
    "道後温泉 道後グランドホテル 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/6001/gallery.html",
    '楽天トラベル'
  ),
  "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜 ゆのね": sourcePhoto(
    "matsuyama-onsen-h8384.jpg",
    "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜 ゆのねの写真",
    "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜 ゆのね bath photo",
    "https://travel.rakuten.co.jp/HOTEL/8384/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 道後舘 大浴場": sourcePhoto(
    "matsuyama-onsen-h10788.jpg",
    "道後温泉 道後舘 大浴場の写真",
    "道後温泉 道後舘 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/10788/gallery.html",
    '楽天トラベル'
  ),
  "チェックイン松山 大浴場": sourcePhoto(
    "matsuyama-onsen-h11211.jpg",
    "チェックイン松山 大浴場の写真",
    "チェックイン松山 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/11211/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 ふなや 大浴場": sourcePhoto(
    "matsuyama-onsen-funaya.jpg",
    "道後温泉 ふなや 大浴場の写真",
    "道後温泉 ふなや 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/11332/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 大和屋本店 露天風呂": sourcePhoto(
    "matsuyama-onsen-yamatoya.jpg",
    "道後温泉 大和屋本店 露天風呂の写真",
    "道後温泉 大和屋本店 露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/13429/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 ホテル椿館 露天風呂": sourcePhoto(
    "matsuyama-onsen-tsubaki.jpg",
    "道後温泉 ホテル椿館 露天風呂の写真",
    "道後温泉 ホテル椿館 露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/13653/gallery.html",
    '楽天トラベル'
  ),
  "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯― 露天風呂": sourcePhoto(
    "matsuyama-onsen-h15420.jpg",
    "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯― 露天風呂の写真",
    "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯― 露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/15420/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 花ゆづき 天望露天風呂": sourcePhoto(
    "matsuyama-onsen-h16719.jpg",
    "道後温泉 花ゆづき 天望露天風呂の写真",
    "道後温泉 花ゆづき 天望露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/16719/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 茶玻瑠 露天風呂": sourcePhoto(
    "matsuyama-onsen-h17668.jpg",
    "道後温泉 茶玻瑠 露天風呂の写真",
    "道後温泉 茶玻瑠 露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/17668/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉 松山ニューグランドホテル 大浴場": sourcePhoto(
    "matsuyama-onsen-h19414.jpg",
    "天然温泉 松山ニューグランドホテル 大浴場の写真",
    "天然温泉 松山ニューグランドホテル 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/19414/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 オールドイングランド 道後山の手ホテル 大浴場": sourcePhoto(
    "matsuyama-onsen-h20469.jpg",
    "道後温泉 オールドイングランド 道後山の手ホテル 大浴場の写真",
    "道後温泉 オールドイングランド 道後山の手ホテル 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/20469/gallery.html",
    '楽天トラベル'
  ),
  "奥道後 壱湯の守（いちゆのもり） 岩湯": sourcePhoto(
    "matsuyama-onsen-h27716.jpg",
    "奥道後 壱湯の守（いちゆのもり） 岩湯の写真",
    "奥道後 壱湯の守（いちゆのもり） 岩湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/27716/gallery.html",
    '楽天トラベル'
  ),
  "ホテルＮｏ．１松山 大浴場": sourcePhoto(
    "matsuyama-onsen-no1.jpg",
    "ホテルＮｏ．１松山 大浴場の写真",
    "ホテルＮｏ．１松山 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/43995/gallery.html",
    '楽天トラベル'
  ),
  "東道後のそらともり 大浴場": sourcePhoto(
    "matsuyama-onsen-h80639.jpg",
    "東道後のそらともり 大浴場の写真",
    "東道後のそらともり 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/80639/gallery.html",
    '楽天トラベル'
  ),
  "たかのこのホテル 露天風呂": sourcePhoto(
    "matsuyama-onsen-h140784.jpg",
    "たかのこのホテル 露天風呂の写真",
    "たかのこのホテル 露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/140784/gallery.html",
    '楽天トラベル'
  ),
  "大江戸温泉物語 道後 露天風呂": sourcePhoto(
    "matsuyama-onsen-h147473.jpg",
    "大江戸温泉物語 道後 露天風呂の写真",
    "大江戸温泉物語 道後 露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/147473/gallery.html",
    '楽天トラベル'
  ),
  "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道 露天風呂": sourcePhoto(
    "matsuyama-onsen-candeo.jpg",
    "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道 露天風呂の写真",
    "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道 露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/148952/gallery.html",
    '楽天トラベル'
  ),
  "リブマックスリゾート奥道後 大浴場": sourcePhoto(
    "matsuyama-onsen-h158312.jpg",
    "リブマックスリゾート奥道後 大浴場の写真",
    "リブマックスリゾート奥道後 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/158312/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場": sourcePhoto(
    "matsuyama-onsen-dormy.jpg",
    "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場の写真",
    "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/165105/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 八千代 大浴場": sourcePhoto(
    "matsuyama-onsen-h166206.jpg",
    "道後温泉 八千代 大浴場の写真",
    "道後温泉 八千代 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/166206/gallery.html",
    '楽天トラベル'
  ),
  "道後温泉 ホテル古湧園 遥 露天風呂": sourcePhoto(
    "matsuyama-onsen-h176808.jpg",
    "道後温泉 ホテル古湧園 遥 露天風呂の写真",
    "道後温泉 ホテル古湧園 遥 露天風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/176808/gallery.html",
    '楽天トラベル'
  ),
  "道後ｈａｋｕｒｏ 大浴場": sourcePhoto(
    "matsuyama-onsen-h179083.jpg",
    "道後ｈａｋｕｒｏ 大浴場の写真",
    "道後ｈａｋｕｒｏ 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/179083/gallery.html",
    '楽天トラベル'
  ),
  "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接） 大浴場": sourcePhoto(
    "matsuyama-onsen-h183045.jpg",
    "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接） 大浴場の写真",
    "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/183045/gallery.html",
    '楽天トラベル'
  ),
};


function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: MATSUYAMA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: MATSUYAMA.sources.accessed};
}

export const MATSUYAMA_FACILITIES: readonly FacilityRow[] = [
  sight('matsuyama-sight-01', '松山城', '愛媛県松山市丸之内', null, 'https://ja.wikipedia.org/wiki/%E6%9D%BE%E5%B1%B1%E5%9F%8E_(%E4%BC%8A%E4%BA%88)', 33.845539, 132.765722),
  sight('matsuyama-sight-02', '石手寺', '愛媛県松山市石手2丁目9-21', null, 'https://ja.wikipedia.org/wiki/%E7%9F%B3%E6%89%8B%E5%AF%BA', 33.84786111, 132.79647222),
  sight('matsuyama-sight-03', '伊佐爾波神社', '愛媛県松山市桜谷町173', null, 'https://ja.wikipedia.org/wiki/%E4%BC%8A%E4%BD%90%E7%88%BE%E6%B3%A2%E7%A5%9E%E7%A4%BE', 33.85069444, 132.78869444),
  sight('matsuyama-sight-04', '坂の上の雲ミュージアム', '愛媛県松山市一番町3丁目20', null, 'https://ja.wikipedia.org/wiki/%E5%9D%82%E3%81%AE%E4%B8%8A%E3%81%AE%E9%9B%B2%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0', 33.84177111, 132.76920806),
  sight('matsuyama-sight-05', '湯築城跡', '愛媛県松山市道後公園', null, 'https://ja.wikipedia.org/wiki/%E6%B9%AF%E7%AF%89%E5%9F%8E', 33.84810833, 132.78674167),
  sight('matsuyama-sight-06', '松山総合公園', '愛媛県松山市西野町', null, 'https://ja.wikipedia.org/wiki/%E6%9D%BE%E5%B1%B1%E7%B7%8F%E5%90%88%E5%85%AC%E5%9C%92', 33.84449444, 132.74108333),
  sight('matsuyama-onsen-01', '道後温泉本館', '愛媛県松山市道後湯之町5-6', '089-921-5141', 'https://ja.wikipedia.org/wiki/%E9%81%93%E5%BE%8C%E6%B8%A9%E6%B3%89%E6%9C%AC%E9%A4%A8', 33.85205556, 132.78638889),
  sight('matsuyama-experience-01', '坊っちゃん列車', '愛媛県松山市道後温泉駅周辺', null, 'https://ja.wikipedia.org/wiki/%E5%9D%8A%E3%81%A3%E3%81%A1%E3%82%83%E3%82%93%E5%88%97%E8%BB%8A', 33.85041667, 132.785),
sight('matsuyama-onsen-extra-01', "道後温泉 道後グランドホテル 大浴場", "愛媛県松山市道後湯之町16-21", null, "https://travel.rakuten.co.jp/HOTEL/6001/gallery.html", null, null),
  sight('matsuyama-onsen-extra-02', "道後プリンスホテル〜旬華趣湯 あったらいいな、が湧く湯宿〜 ゆのね", "愛媛県松山市道後姫塚100", null, "https://travel.rakuten.co.jp/HOTEL/8384/gallery.html", null, null),
  sight('matsuyama-onsen-extra-03', "道後温泉 道後舘 大浴場", "愛媛県松山市道後多幸町7-26", null, "https://travel.rakuten.co.jp/HOTEL/10788/gallery.html", null, null),
  sight('matsuyama-onsen-extra-04', "チェックイン松山 大浴場", "愛媛県松山市三番町2-7-3", null, "https://travel.rakuten.co.jp/HOTEL/11211/gallery.html", null, null),
  sight('matsuyama-onsen-extra-05', "道後温泉 ふなや 大浴場", "愛媛県松山市道後湯之町1-33", null, "https://travel.rakuten.co.jp/HOTEL/11332/gallery.html", null, null),
  sight('matsuyama-onsen-extra-06', "道後温泉 大和屋本店 露天風呂", "愛媛県松山市道後湯之町20-8", null, "https://travel.rakuten.co.jp/HOTEL/13429/gallery.html", null, null),
  sight('matsuyama-onsen-extra-07', "道後温泉 ホテル椿館 露天風呂", "愛媛県松山市道後鷺谷町5-32", null, "https://travel.rakuten.co.jp/HOTEL/13653/gallery.html", null, null),
  sight('matsuyama-onsen-extra-08', "ホテル泰平 松山城下の天然温泉「橄欖の湯」―奥道後温泉引き湯― 露天風呂", "愛媛県松山市平和通3-1-15", null, "https://travel.rakuten.co.jp/HOTEL/15420/gallery.html", null, null),
  sight('matsuyama-onsen-extra-09', "道後温泉 花ゆづき 天望露天風呂", "愛媛県松山市道後湯月町4-16", null, "https://travel.rakuten.co.jp/HOTEL/16719/gallery.html", null, null),
  sight('matsuyama-onsen-extra-10', "道後温泉 茶玻瑠 露天風呂", "愛媛県松山市道後湯月町4-4", null, "https://travel.rakuten.co.jp/HOTEL/17668/gallery.html", null, null),
  sight('matsuyama-onsen-extra-11', "天然温泉 松山ニューグランドホテル 大浴場", "愛媛県松山市二番町３丁目４－１０", null, "https://travel.rakuten.co.jp/HOTEL/19414/gallery.html", null, null),
  sight('matsuyama-onsen-extra-12', "道後温泉 オールドイングランド 道後山の手ホテル 大浴場", "愛媛県松山市道後鷺谷町1-13", null, "https://travel.rakuten.co.jp/HOTEL/20469/gallery.html", null, null),
  sight('matsuyama-onsen-extra-13', "奥道後 壱湯の守（いちゆのもり） 岩湯", "愛媛県松山市末町267", null, "https://travel.rakuten.co.jp/HOTEL/27716/gallery.html", null, null),
  sight('matsuyama-onsen-extra-14', "ホテルＮｏ．１松山 大浴場", "愛媛県松山市千舟町2-7-3", null, "https://travel.rakuten.co.jp/HOTEL/43995/gallery.html", null, null),
  sight('matsuyama-onsen-extra-15', "東道後のそらともり 大浴場", "愛媛県松山市南久米町3-1", null, "https://travel.rakuten.co.jp/HOTEL/80639/gallery.html", null, null),
  sight('matsuyama-onsen-extra-16', "たかのこのホテル 露天風呂", "愛媛県松山市鷹子町737-2", null, "https://travel.rakuten.co.jp/HOTEL/140784/gallery.html", null, null),
  sight('matsuyama-onsen-extra-17', "大江戸温泉物語 道後 露天風呂", "愛媛県松山市道後姫塚112-1", null, "https://travel.rakuten.co.jp/HOTEL/147473/gallery.html", null, null),
  sight('matsuyama-onsen-extra-18', "ＣＡＮＤＥＯ ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道 露天風呂", "愛媛県松山市大街道2-5-12", null, "https://travel.rakuten.co.jp/HOTEL/148952/gallery.html", null, null),
  sight('matsuyama-onsen-extra-19', "リブマックスリゾート奥道後 大浴場", "愛媛県松山市末町300-1", null, "https://travel.rakuten.co.jp/HOTEL/158312/gallery.html", null, null),
  sight('matsuyama-onsen-extra-20', "天然温泉 石手の湯 ドーミーイン松山（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場", "愛媛県松山市大街道2-6-5", null, "https://travel.rakuten.co.jp/HOTEL/165105/gallery.html", null, null),
  sight('matsuyama-onsen-extra-21', "道後温泉 八千代 大浴場", "愛媛県松山市道後多幸町6-34", null, "https://travel.rakuten.co.jp/HOTEL/166206/gallery.html", null, null),
  sight('matsuyama-onsen-extra-22', "道後温泉 ホテル古湧園 遥 露天風呂", "愛媛県松山市道後鷺谷町1-1", null, "https://travel.rakuten.co.jp/HOTEL/176808/gallery.html", null, null),
  sight('matsuyama-onsen-extra-23', "道後ｈａｋｕｒｏ 大浴場", "愛媛県松山市道後鷺谷町3-1", null, "https://travel.rakuten.co.jp/HOTEL/179083/gallery.html", null, null),
  sight('matsuyama-onsen-extra-24', "レフ松山市駅 ｂｙ ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接） 大浴場", "愛媛県松山市湊町5-2-2", null, "https://travel.rakuten.co.jp/HOTEL/183045/gallery.html", null, null),
];
