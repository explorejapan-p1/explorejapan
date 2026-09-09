/**
 * Naoshima Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07). JIS 37364. Sixth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const NAOSHIMA = {
  nameJa: '直島町',
  nameEn: 'Naoshima Town',
  reading: 'なおしまちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'naoshima',
  jis: '37364',
  jlis: '373645',
  sameAs: 'https://www.town.naoshima.lg.jp/',
  hall: {
    postalCode: '761-3110',
    addressJa: '香川県香川郡直島町1122-1',
    addressEn: '1122-1 Naoshima-cho, Kagawa-gun, Kagawa 761-3110, Japan',
    phone: '087-892-2222'
  },
  sources: {
    home: 'https://www.town.naoshima.lg.jp/',
    hall: 'https://www.town.naoshima.lg.jp/about/shisetsu/townhall.html',
    kankou: 'https://naoshima.net/',
    benesse: 'https://benesse-artsite.jp/',
    tabelogCity: 'https://tabelog.com/kagawa/C37364/rstLst/',
    benesseStay: 'https://travel.rakuten.co.jp/HOTEL/107793/107793.html',
    tsutsuji: 'https://travel.rakuten.co.jp/HOTEL/111253/111253.html',
    accessed: '2026-09-07'
  }
} as const;

export const NAOSHIMA_EXPECTED_ROW_COUNT = 11;
export const NAOSHIMA_EXPECTED_GEO_COUNT = 10;

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

/** Cover: Yayoi Kusama Yellow Pumpkin — strongest Naoshima landmark. */
export const NAOSHIMA_PLACE_PHOTO = wikiPhoto(
  'naoshima-yellow-pumpkin.jpg',
  'https://commons.wikimedia.org/wiki/File:Yellow_Pumpkin_Monument.jpg',
  'CC BY 4.0',
  'https://creativecommons.org/licenses/by/4.0',
  'ブルーノ・プラハ',
  'https://commons.wikimedia.org/wiki/Special:Contributions/%E3%83%96%E3%83%AB%E3%83%BC%E3%83%8E%E3%83%BB%E3%83%97%E3%83%A9%E3%83%8F',
  '2025-12',
  '草間彌生「南瓜」（ベネッセアートサイト直島）',
  'Yayoi Kusama Yellow Pumpkin, Benesse Art Site Naoshima'
);

const TABELOG_37000602 = 'https://tabelog.com/kagawa/A3701/A370103/37000602/';
const TABELOG_37001630 = 'https://tabelog.com/kagawa/A3701/A370103/37001630/';
const TABELOG_37012730 = 'https://tabelog.com/kagawa/A3701/A370103/37012730/';
const TABELOG_37005337 = 'https://tabelog.com/kagawa/A3701/A370103/37005337/';
const TABELOG_37013834 = 'https://tabelog.com/kagawa/A3701/A370103/37013834/';
const TABELOG_37005671 = 'https://tabelog.com/kagawa/A3701/A370103/37005671/';
const TABELOG_37014503 = 'https://tabelog.com/kagawa/A3701/A370103/37014503/';
const TABELOG_37010090 = 'https://tabelog.com/kagawa/A3701/A370103/37010090/';
const TABELOG_37006497 = 'https://tabelog.com/kagawa/A3701/A370103/37006497/';
const TABELOG_37014452 = 'https://tabelog.com/kagawa/A3701/A370103/37014452/';
const TABELOG_37012671 = 'https://tabelog.com/kagawa/A3701/A370103/37012671/';
const TABELOG_37012672 = 'https://tabelog.com/kagawa/A3701/A370103/37012672/';
const TABELOG_37014320 = 'https://tabelog.com/kagawa/A3701/A370103/37014320/';
const TABELOG_37006494 = 'https://tabelog.com/kagawa/A3701/A370103/37006494/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const NAOSHIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '草間彌生「南瓜」': NAOSHIMA_PLACE_PHOTO,
  '宮浦港': wikiPhoto(
    'naoshima-miyanoura.jpg',
    'https://commons.wikimedia.org/wiki/File:Miyanoura_Port_2025.JPG',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0',
    'Fotointheworld',
    'https://commons.wikimedia.org/wiki/User:Fotointheworld',
    '2025',
    '宮浦港（直島町）',
    'Miyanoura Port, Naoshima'
  ),
  '地中美術館': wikiPhoto(
    'naoshima-chichu.jpg',
    'https://commons.wikimedia.org/wiki/File:150505_Chichu_Art_Museum_Naoshima_Island_Kagawa_pref_Japan01s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2015-05-05',
    '地中美術館（直島町）',
    'Chichu Art Museum, Naoshima'
  ),
  'ベネッセハウス ミュージアム': wikiPhoto(
    'naoshima-benesse.jpg',
    'https://commons.wikimedia.org/wiki/File:Benesse_Art_Museum.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Renate Hano',
    'https://commons.wikimedia.org/wiki/File:Benesse_Art_Museum.jpg',
    '2023-05-30',
    'ベネッセハウス ミュージアム（直島町）',
    'Benesse House Museum, Naoshima'
  ),
  '李禹煥美術館': wikiPhoto(
    'naoshima-lee-ufan.jpg',
    'https://commons.wikimedia.org/wiki/File:Lee_Ufan_Museum_(7049599907).jpg',
    'CC BY-SA 2.0',
    'https://creativecommons.org/licenses/by-sa/2.0',
    'KimonBerlin',
    'https://www.flickr.com/people/81943113@N00',
    '2011-11-25',
    '李禹煥美術館（直島町）',
    'Lee Ufan Museum, Naoshima'
  ),
  '直島パヴィリオン': wikiPhoto(
    'naoshima-pavilion.jpg',
    'https://commons.wikimedia.org/wiki/File:Naoshima_Pavilion_2.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Bea Phi',
    'https://commons.wikimedia.org/wiki/User:Phibeatrice',
    '2025',
    '直島パヴィリオン（宮浦・直島町）',
    'Naoshima Pavilion, Miyanoura'
  ),
  '家プロジェクト 護王神社': wikiPhoto(
    'naoshima-goo-shrine.jpg',
    'https://commons.wikimedia.org/wiki/File:Hiroshi_Sugimoto_-_Art_House_Project_%22Go%27o_Shrine%22_(26479004430).jpg',
    'CC BY-SA 2.0',
    'https://creativecommons.org/licenses/by-sa/2.0',
    'KimonBerlin',
    'https://www.flickr.com/people/81943113@N00',
    '2016-03-30',
    '家プロジェクト 護王神社（直島町）',
    'Art House Project Go\'o Shrine, Naoshima'
  ),
  '琴弾地海水浴場': wikiPhoto(
    'naoshima-ebisu.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%81%B5%E7%BE%8E%E9%A0%88%E7%A5%9E%E7%A4%BE%E9%B3%A5%E5%B1%85_%E7%90%B4%E5%BC%BE%E5%9C%B0%E6%B5%B7%E6%B0%B4%E6%B5%B4%E5%A0%B4_%E7%9B%B4%E5%B3%B6_Jul_13,_2011.jpg',
    'CC BY-SA 2.0',
    'https://creativecommons.org/licenses/by-sa/2.0',
    'tablexxnx',
    'https://commons.wikimedia.org/wiki/File:%E6%81%B5%E7%BE%8E%E9%A0%88%E7%A5%9E%E7%A4%BE%E9%B3%A5%E5%B1%85_%E7%90%B4%E5%BC%BE%E5%9C%B0%E6%B5%B7%E6%B0%B4%E6%B5%B4%E5%A0%B4_%E7%9B%B4%E5%B3%B6_Jul_13,_2011.jpg',
    '2011-07-13',
    '琴弾地海水浴場・恵美須神社鳥居（直島町）',
    'Kotakiji Beach / Ebisu shrine torii, Naoshima'
  ),
  'ANDO MUSEUM': wikiPhoto(
    'naoshima-ando.jpg',
    'https://commons.wikimedia.org/wiki/File:Inside_of_the_Ando_Museum.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Bea Phi',
    'https://commons.wikimedia.org/wiki/User:Phibeatrice',
    '2025-09-04',
    'ANDO MUSEUM（直島町）',
    'ANDO MUSEUM, Naoshima'
  ),
  '直島銭湯「I♥湯」': wikiPhoto(
    'naoshima-bath.jpg',
    'https://commons.wikimedia.org/wiki/File:Naoshima_Bath_I%E2%99%A5%E6%B9%AF_%E7%9B%B4%E5%B3%B6%E9%8A%AD%E6%B9%AF_PC193562.JPG',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    '松岡明芳',
    'https://commons.wikimedia.org/wiki/User:%E6%9D%BE%E5%B2%A1%E6%98%8E%E8%8A%B3',
    '2010-12-19',
    '直島銭湯「I♥湯」（直島町）',
    'Naoshima Bath I♥湯, Naoshima'
  ),
  "はなみずき": sourcePhoto(
    "naoshima-stay-h177776.jpg",
    "はなみずきの客室写真",
    "\u306f\u306a\u307f\u305a\u304d room photo",
    "https://travel.rakuten.co.jp/HOTEL/177776/177776.html",
    '楽天トラベル'
  ),
  "ほっこり民宿 清ｓａｙａ": sourcePhoto(
    "naoshima-stay-h151329.jpg",
    "ほっこり民宿 清ｓａｙａの客室写真",
    "\u307b\u3063\u3053\u308a\u6c11\u5bbf \u6e05\uff53\uff41\uff59\uff41 room photo",
    "https://travel.rakuten.co.jp/HOTEL/151329/151329.html",
    '楽天トラベル'
  ),
  "やどセブンビーチ ＾": sourcePhoto(
    "naoshima-stay-h169438.jpg",
    "やどセブンビーチ ＾の客室写真",
    "\u3084\u3069\u30bb\u30d6\u30f3\u30d3\u30fc\u30c1 \uff3e room photo",
    "https://travel.rakuten.co.jp/HOTEL/169438/169438.html",
    '楽天トラベル'
  ),
  "よこんぼ２ ペットと泊まれる宿 ＾": sourcePhoto(
    "naoshima-stay-h186554.jpg",
    "よこんぼ２ ペットと泊まれる宿 ＾の客室写真",
    "\u3088\u3053\u3093\u307c\uff12 \u30da\u30c3\u30c8\u3068\u6cca\u307e\u308c\u308b\u5bbf \uff3e room photo",
    "https://travel.rakuten.co.jp/HOTEL/186554/186554.html",
    '楽天トラベル'
  ),
  "クイントハウス直島": sourcePhoto(
    "naoshima-stay-h184653.jpg",
    "クイントハウス直島の客室写真",
    "\u30af\u30a4\u30f3\u30c8\u30cf\u30a6\u30b9\u76f4\u5cf6 room photo",
    "https://travel.rakuten.co.jp/HOTEL/184653/184653.html",
    '楽天トラベル'
  ),
  "ゲストハウス 島宿あいすなお": sourcePhoto(
    "naoshima-stay-h151331.jpg",
    "ゲストハウス 島宿あいすなおの客室写真",
    "\u30b2\u30b9\u30c8\u30cf\u30a6\u30b9 \u5cf6\u5bbf\u3042\u3044\u3059\u306a\u304a room photo",
    "https://travel.rakuten.co.jp/HOTEL/151331/151331.html",
    '楽天トラベル'
  ),
  "ゲストハウス ＰＬＥＮＯ ＾": sourcePhoto(
    "naoshima-stay-h185909.jpg",
    "ゲストハウス ＰＬＥＮＯ ＾の客室写真",
    "\u30b2\u30b9\u30c8\u30cf\u30a6\u30b9 \uff30\uff2c\uff25\uff2e\uff2f \uff3e room photo",
    "https://travel.rakuten.co.jp/HOTEL/185909/185909.html",
    '楽天トラベル'
  ),
  "ベネッセハウス": sourcePhoto(
    "naoshima-stay-benesse.jpg",
    "ベネッセハウスの客室写真",
    "\u30d9\u30cd\u30c3\u30bb\u30cf\u30a6\u30b9 room photo",
    "https://travel.rakuten.co.jp/HOTEL/107793/107793.html",
    '楽天トラベル'
  ),
  "マローラおばさんの家（やどセブンビーチ別館） ＾": sourcePhoto(
    "naoshima-stay-h169439.jpg",
    "マローラおばさんの家（やどセブンビーチ別館） ＾の客室写真",
    "\u30de\u30ed\u30fc\u30e9\u304a\u3070\u3055\u3093\u306e\u5bb6\uff08\u3084\u3069\u30bb\u30d6\u30f3\u30d3\u30fc\u30c1\u5225\u9928\uff09 \uff3e room photo",
    "https://travel.rakuten.co.jp/HOTEL/169439/169439.html",
    '楽天トラベル'
  ),
  "民宿 おやじの海": sourcePhoto(
    "naoshima-stay-h109394.jpg",
    "民宿 おやじの海の客室写真",
    "\u6c11\u5bbf \u304a\u3084\u3058\u306e\u6d77 room photo",
    "https://travel.rakuten.co.jp/HOTEL/109394/109394.html",
    '楽天トラベル'
  ),
  "民宿 西村屋": sourcePhoto(
    "naoshima-stay-h168636.jpg",
    "民宿 西村屋の客室写真",
    "\u6c11\u5bbf \u897f\u6751\u5c4b room photo",
    "https://travel.rakuten.co.jp/HOTEL/168636/168636.html",
    '楽天トラベル'
  ),
  "民宿シーズン": sourcePhoto(
    "naoshima-stay-h153636.jpg",
    "民宿シーズンの客室写真",
    "\u6c11\u5bbf\u30b7\u30fc\u30ba\u30f3 room photo",
    "https://travel.rakuten.co.jp/HOTEL/153636/153636.html",
    '楽天トラベル'
  ),
  "民宿竹の家": sourcePhoto(
    "naoshima-stay-h151145.jpg",
    "民宿竹の家の客室写真",
    "\u6c11\u5bbf\u7af9\u306e\u5bb6 room photo",
    "https://travel.rakuten.co.jp/HOTEL/151145/151145.html",
    '楽天トラベル'
  ),
  "直島 海辺の宿 波へい": sourcePhoto(
    "naoshima-stay-h153635.jpg",
    "直島 海辺の宿 波へいの客室写真",
    "\u76f4\u5cf6 \u6d77\u8fba\u306e\u5bbf \u6ce2\u3078\u3044 room photo",
    "https://travel.rakuten.co.jp/HOTEL/153635/153635.html",
    '楽天トラベル'
  ),
  "直島ふるさと海の家 つつじ荘": sourcePhoto(
    "naoshima-stay-tsutsuji.jpg",
    "直島ふるさと海の家 つつじ荘の客室写真",
    "\u76f4\u5cf6\u3075\u308b\u3055\u3068\u6d77\u306e\u5bb6 \u3064\u3064\u3058\u8358 room photo",
    "https://travel.rakuten.co.jp/HOTEL/111253/111253.html",
    '楽天トラベル'
  ),
  "直島宿泊所めん宿 浦 ＾": sourcePhoto(
    "naoshima-stay-h185498.jpg",
    "直島宿泊所めん宿 浦 ＾の客室写真",
    "\u76f4\u5cf6\u5bbf\u6cca\u6240\u3081\u3093\u5bbf \u6d66 \uff3e room photo",
    "https://travel.rakuten.co.jp/HOTEL/185498/185498.html",
    '楽天トラベル'
  ),
  "Ｅｐｉｓｏｄｅ１": sourcePhoto(
    "naoshima-stay-h141197.jpg",
    "Ｅｐｉｓｏｄｅ１の客室写真",
    "\uff25\uff50\uff49\uff53\uff4f\uff44\uff45\uff11 room photo",
    "https://travel.rakuten.co.jp/HOTEL/141197/141197.html",
    '楽天トラベル'
  ),
  "ＧＵＥＳＴＨＯＵＳＥ ＢａｍｂｏｏＶｉｌｌａｇｅ": sourcePhoto(
    "naoshima-stay-h160872.jpg",
    "ＧＵＥＳＴＨＯＵＳＥ ＢａｍｂｏｏＶｉｌｌａｇｅの客室写真",
    "\uff27\uff35\uff25\uff33\uff34\uff28\uff2f\uff35\uff33\uff25 \uff22\uff41\uff4d\uff42\uff4f\uff4f\uff36\uff49\uff4c\uff4c\uff41\uff47\uff45 room photo",
    "https://travel.rakuten.co.jp/HOTEL/160872/160872.html",
    '楽天トラベル'
  ),
  "ＧｕｅｓｔＨｏｕｓｅ海っ子": sourcePhoto(
    "naoshima-stay-h151328.jpg",
    "ＧｕｅｓｔＨｏｕｓｅ海っ子の客室写真",
    "\uff27\uff55\uff45\uff53\uff54\uff28\uff4f\uff55\uff53\uff45\u6d77\u3063\u5b50 room photo",
    "https://travel.rakuten.co.jp/HOTEL/151328/151328.html",
    '楽天トラベル'
  ),
  "Ｌａ Ｃｕｒａｃｉｏｎ（ラ・クラシオン）": sourcePhoto(
    "naoshima-stay-h158374.jpg",
    "Ｌａ Ｃｕｒａｃｉｏｎ（ラ・クラシオン）の客室写真",
    "\uff2c\uff41 \uff23\uff55\uff52\uff41\uff43\uff49\uff4f\uff4e\uff08\u30e9\u30fb\u30af\u30e9\u30b7\u30aa\u30f3\uff09 room photo",
    "https://travel.rakuten.co.jp/HOTEL/158374/158374.html",
    '楽天トラベル'
  ),
  "ＭＹ ＬＯＤＧＥ ｎａｏｓｈｉｍａ": sourcePhoto(
    "naoshima-stay-h179899.jpg",
    "ＭＹ ＬＯＤＧＥ ｎａｏｓｈｉｍａの客室写真",
    "\uff2d\uff39 \uff2c\uff2f\uff24\uff27\uff25 \uff4e\uff41\uff4f\uff53\uff48\uff49\uff4d\uff41 room photo",
    "https://travel.rakuten.co.jp/HOTEL/179899/179899.html",
    '楽天トラベル'
  ),
  "ＳＰＡＲＫＹ’ｓ Ｈｏｕｓｅ": sourcePhoto(
    "naoshima-stay-h167287.jpg",
    "ＳＰＡＲＫＹ’ｓ Ｈｏｕｓｅの客室写真",
    "\uff33\uff30\uff21\uff32\uff2b\uff39\u2019\uff53 \uff28\uff4f\uff55\uff53\uff45 room photo",
    "https://travel.rakuten.co.jp/HOTEL/167287/167287.html",
    '楽天トラベル'
  ),
  "Ｙｅｌｌｏｗ Ｈｏｕｓｅ": sourcePhoto(
    "naoshima-stay-h188473.jpg",
    "Ｙｅｌｌｏｗ Ｈｏｕｓｅの客室写真",
    "\uff39\uff45\uff4c\uff4c\uff4f\uff57 \uff28\uff4f\uff55\uff53\uff45 room photo",
    "https://travel.rakuten.co.jp/HOTEL/188473/188473.html",
    '楽天トラベル'
  ),
  "ｋｏｋｏｃｈｉ": sourcePhoto(
    "naoshima-stay-h178219.jpg",
    "ｋｏｋｏｃｈｉの客室写真",
    "\uff4b\uff4f\uff4b\uff4f\uff43\uff48\uff49 room photo",
    "https://travel.rakuten.co.jp/HOTEL/178219/178219.html",
    '楽天トラベル'
  ),
  "直島ふるさと海の家 つつじ荘 貸切風呂": sourcePhoto(
    "naoshima-onsen-tsutsuji.jpg",
    "直島ふるさと海の家 つつじ荘 貸切風呂の写真",
    "\u76f4\u5cf6\u3075\u308b\u3055\u3068\u6d77\u306e\u5bb6 \u3064\u3064\u3058\u8358 \u8cb8\u5207\u98a8\u5442 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/111253/gallery.html",
    '楽天トラベル'
  ),
  '地中カフェ': sourcePhoto('naoshima-37000602-dish.jpg', '地中カフェの料理写真', 'Chichu Cafe food photo', TABELOG_37000602, '食べログ'),
  'カフェ おうぎや': sourcePhoto('naoshima-37001630-dish.jpg', 'カフェ おうぎやの料理写真', 'Cafe Ougiya food photo', TABELOG_37001630, '食べログ'),
  '直島パスタ REGALO': sourcePhoto('naoshima-37012730-dish.jpg', '直島パスタ REGALOの料理写真', 'Naoshima Pasta REGALO food photo', TABELOG_37012730, '食べログ'),
  'マイマイ': sourcePhoto('naoshima-37005337-dish.jpg', 'マイマイの料理写真', 'Maimai food photo', TABELOG_37005337, '食べログ'),
  'EAT LOCAL 直島食堂': sourcePhoto('naoshima-37013834-dish.jpg', 'EAT LOCAL 直島食堂の料理写真', 'EAT LOCAL Naoshima Shokudo food photo', TABELOG_37013834, '食べログ'),
  'カフェサロン 中奥': sourcePhoto('naoshima-37005671-dish.jpg', 'カフェサロン 中奥の料理写真', 'Cafe Salon Nakaoku food photo', TABELOG_37005671, '食べログ'),
  'Sarrasin': sourcePhoto('naoshima-37014503-dish.jpg', 'Sarrasinの料理写真', 'Sarrasin food photo', TABELOG_37014503, '食べログ'),
  'ミカヅキショウテン': sourcePhoto('naoshima-37010090-dish.jpg', 'ミカヅキショウテンの料理写真', 'Mikazuki Shoten food photo', TABELOG_37010090, '食べログ'),
  'UMI NO STAND つつじ荘': sourcePhoto('naoshima-37006497-dish.jpg', 'UMI NO STAND つつじ荘の料理写真', 'UMI NO STAND Tsutsuji-so food photo', TABELOG_37006497, '食べログ'),
  '&CAFE': sourcePhoto('naoshima-37014452-dish.jpg', '&CAFEの料理写真', '&CAFE food photo', TABELOG_37014452, '食べログ'),
  'よもぎ亭': sourcePhoto('naoshima-37012671-dish.jpg', 'よもぎ亭の料理写真', 'Yomogi-tei food photo', TABELOG_37012671, '食べログ'),
  'おかしとコーヒー': sourcePhoto('naoshima-37012672-dish.jpg', 'おかしとコーヒーの料理写真', 'Okashi to Coffee food photo', TABELOG_37012672, '食べログ'),
  '古小路': sourcePhoto('naoshima-37014320-dish.jpg', '古小路の料理写真', 'Furukouji food photo', TABELOG_37014320, '食べログ'),
  '海の見えるお食事処 なごみ': sourcePhoto('naoshima-37006494-dish.jpg', '海の見えるお食事処 なごみの料理写真', 'Nagomi food photo', TABELOG_37006494, '食べログ'),
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
    jis: NAOSHIMA.jis,
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
    license: '町公式・公式観光サイト掲載情報',
    accessed: NAOSHIMA.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const NAOSHIMA_FACILITIES: readonly FacilityRow[] = [
  sight('naoshima-sight-01', '草間彌生「南瓜」', '香川県香川郡直島町琴弾地', null, 'https://benesse-artsite.jp/art/pumpkin.html', 34.4478, 133.9995),
  sight('naoshima-sight-02', '宮浦港', '香川県香川郡直島町宮浦', null, 'https://naoshima.net/', 34.4597, 133.9806),
  sight('naoshima-sight-03', '地中美術館', '香川県香川郡直島町3449-1', '087-892-3755', 'https://benesse-artsite.jp/art/chichu.html', 34.4444, 133.9972),
  sight('naoshima-sight-04', 'ベネッセハウス ミュージアム', '香川県香川郡直島町琴弾地', '087-892-3223', 'https://benesse-artsite.jp/art/benessehouse-museum.html', 34.4483, 133.9994),
  sight('naoshima-sight-05', '李禹煥美術館', '香川県香川郡直島町字倉浦', null, 'https://benesse-artsite.jp/art/lee-ufan.html', 34.4458, 133.9978),
  sight('naoshima-sight-06', '直島パヴィリオン', '香川県香川郡直島町宮浦', null, 'https://naoshima.net/', 34.4585, 133.9810),
  sight('naoshima-sight-07', '家プロジェクト 護王神社', '香川県香川郡直島町本村', null, 'https://benesse-artsite.jp/art/art-house-project.html', 34.4547, 133.9950),
  sight('naoshima-sight-08', '琴弾地海水浴場', '香川県香川郡直島町琴弾地', null, 'https://naoshima.net/', 34.4490, 134.0000),
  sight('naoshima-sight-09', 'ANDO MUSEUM', '香川県香川郡直島町本村', null, 'https://benesse-artsite.jp/art/ando-museum.html', 34.4540, 133.9955),
  sight('naoshima-exp-01', '直島銭湯「I♥湯」', '香川県香川郡直島町2252-2', null, 'https://benesse-artsite.jp/art/naoshima-bath.html', 34.4565, 133.9935),
  sight('naoshima-onsen-01', "直島ふるさと海の家 つつじ荘 貸切風呂", "香川県香川郡直島町352-1", null, "https://travel.rakuten.co.jp/HOTEL/111253/gallery.html", null, null),
];
