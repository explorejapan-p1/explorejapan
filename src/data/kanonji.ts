/**
 * Kanonji City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37205. Fourth Kagawa hub after Takamatsu + Kotohira + Marugame.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KANONJI = {
  nameJa: '観音寺市',
  nameEn: 'Kanonji City',
  reading: 'かんおんじし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'kanonji',
  jis: '37205',
  jlis: '372051',
  sameAs: 'https://www.city.kanonji.kagawa.jp/',
  hall: {
    postalCode: '768-8601',
    addressJa: '香川県観音寺市坂本町一丁目1番1号',
    addressEn: '1-1-1 Sakamoto-cho, Kanonji, Kagawa 768-8601, Japan',
    phone: '0875-23-3900'
  },
  sources: {
    home: 'https://www.city.kanonji.kagawa.jp/',
    hall: 'https://www.city.kanonji.kagawa.jp/',
    kotohiki: 'https://www.city.kanonji.kagawa.jp/soshiki/21/1467.html',
    zenigata: 'https://www.city.kanonji.kagawa.jp/soshiki/21/333.html',
    tabelogCity: 'https://tabelog.com/kagawa/C37205/rstLst/',
    routeInn: 'https://travel.rakuten.co.jp/HOTEL/197475/197475.html',
    grand: 'https://travel.rakuten.co.jp/HOTEL/5647/5647.html',
    kamenoi: 'https://travel.rakuten.co.jp/HOTEL/44292/44292.html',
    accessed: '2026-09-07'
  }
} as const;

export const KANONJI_EXPECTED_ROW_COUNT = 14;
export const KANONJI_EXPECTED_GEO_COUNT = 10;

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

/** Cover: 銭形砂絵 — strongest Kanonji landmark. */
export const KANONJI_PLACE_PHOTO = wikiPhoto(
  'kanonji-zenigata.jpg',
  'https://commons.wikimedia.org/wiki/File:Kotohiki_Park,_Zenigata_sunae_001.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  'Naokijp',
  'https://commons.wikimedia.org/wiki/User:Naokijp',
  '2019-05-03',
  '銭形砂絵「寛永通宝」ライトアップ（観音寺市）',
  'Zenigata Sunae coin sand drawing lit at night, Kanonji'
);

const TABELOG_37006622 = 'https://tabelog.com/kagawa/A3703/A370301/37006622/';
const TABELOG_37000152 = 'https://tabelog.com/kagawa/A3703/A370301/37000152/';
const TABELOG_37000148 = 'https://tabelog.com/kagawa/A3703/A370301/37000148/';
const TABELOG_37000510 = 'https://tabelog.com/kagawa/A3703/A370301/37000510/';
const TABELOG_37012136 = 'https://tabelog.com/kagawa/A3703/A370303/37012136/';
const TABELOG_37000603 = 'https://tabelog.com/kagawa/A3703/A370301/37000603/';
const TABELOG_37000119 = 'https://tabelog.com/kagawa/A3703/A370301/37000119/';
const TABELOG_37001099 = 'https://tabelog.com/kagawa/A3703/A370301/37001099/';
const TABELOG_37010828 = 'https://tabelog.com/kagawa/A3703/A370301/37010828/';
const TABELOG_37006102 = 'https://tabelog.com/kagawa/A3703/A370301/37006102/';
const TABELOG_37008963 = 'https://tabelog.com/kagawa/A3703/A370301/37008963/';
const TABELOG_37012030 = 'https://tabelog.com/kagawa/A3703/A370301/37012030/';
const TABELOG_37000632 = 'https://tabelog.com/kagawa/A3703/A370301/37000632/';
const TABELOG_37000841 = 'https://tabelog.com/kagawa/A3703/A370301/37000841/';

/** Exact travel/sight name_ja only. No Tokushima/Takamatsu/Kotohira/Marugame Files. */
export const KANONJI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '銭形砂絵': KANONJI_PLACE_PHOTO,
  '琴弾公園': wikiPhoto(
    'kanonji-kotohiki-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Kotohikikouen01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2017-04-14',
    '琴弾公園（観音寺市）',
    'Kotohiki Park, Kanonji'
  ),
  '有明浜': wikiPhoto(
    'kanonji-ariakehama.jpg',
    'https://commons.wikimedia.org/wiki/File:Ariakehama_20201129_2.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2020-11-29',
    '有明浜（観音寺市）',
    'Ariakehama beach, Kanonji'
  ),
  '神恵院': wikiPhoto(
    'kanonji-jinnein.jpg',
    'https://commons.wikimedia.org/wiki/File:Jinne-in,_Main_Hall_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-05-04',
    '神恵院本堂（観音寺市）',
    'Jinne-in main hall, Kanonji'
  ),
  '観音寺': wikiPhoto(
    'kanonji-kannonji.jpg',
    'https://commons.wikimedia.org/wiki/File:Shippozan_Kanonji_08.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-08-13',
    '七宝山観音寺（観音寺市）',
    'Shippozan Kannon-ji, Kanonji'
  ),
  '琴弾八幡宮': wikiPhoto(
    'kanonji-hachimangu.jpg',
    'https://commons.wikimedia.org/wiki/File:Kotohiki-hachiman-g%C5%AB,_Main_Sanctuary_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-05-04',
    '琴弾八幡宮本殿（観音寺市）',
    'Kotohiki Hachiman-gū main sanctuary, Kanonji'
  ),
  '高屋神社': wikiPhoto(
    'kanonji-takaya.jpg',
    "https://commons.wikimedia.org/wiki/File:Takaya-jinja_Kan'onji_Kagawa_-_2021_March_31_various_08.jpg",
    'CC BY 4.0',
    'https://creativecommons.org/licenses/by/4.0',
    'Nesnad',
    'https://commons.wikimedia.org/wiki/User:Nesnad',
    '2021-03-31',
    '高屋神社の石段と展望（観音寺市）',
    'Stone steps and view at Takaya Shrine, Kanonji'
  ),
  '豊稔池堰堤': wikiPhoto(
    'kanonji-honenike.jpg',
    "https://commons.wikimedia.org/wiki/File:H%C5%8Dnen'ike_Dam_from_front_2023-07-28_1226.jpg",
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Photos of Japan',
    'https://commons.wikimedia.org/wiki/User:Photos_of_Japan',
    '2023-07-28',
    '豊稔池堰堤（観音寺市）',
    'Hōnen-ike Dam, Kanonji'
  ),
  '伊吹島': wikiPhoto(
    'kanonji-ibukijima.jpg',
    'https://commons.wikimedia.org/wiki/File:Ibukzima_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2019-04-09',
    '伊吹島（観音寺市）',
    'Ibuki Island, Kanonji'
  ),
  '道の駅ことひき': wikiPhoto(
    'kanonji-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%81%93%E3%81%A8%E3%81%B2%E3%81%8D.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%81%93%E3%81%A8%E3%81%B2%E3%81%8D.jpg',
    '2010',
    '道の駅ことひき（観音寺市）',
    'Michinoeki Kotohiki, Kanonji'
  ),

  "グランプレミア瀬戸内 〜四国・香川のリゾートグランピング＆ヴィラ〜": sourcePhoto(
    "kanonji-stay-h184058.jpg",
    "グランプレミア瀬戸内 〜四国・香川のリゾートグランピング＆ヴィラ〜の客室写真",
    "\u30b0\u30e9\u30f3\u30d7\u30ec\u30df\u30a2\u702c\u6238\u5185 \u301c\u56db\u56fd\u30fb\u9999\u5ddd\u306e\u30ea\u30be\u30fc\u30c8\u30b0\u30e9\u30f3\u30d4\u30f3\u30b0\uff06\u30f4\u30a3\u30e9\u301c room photo",
    "https://travel.rakuten.co.jp/HOTEL/184058/184058.html",
    '楽天トラベル'
  ),
  "スマイルホテル観音寺（旧：ホテルシェトワ観音寺）": sourcePhoto(
    "kanonji-stay-h181149.jpg",
    "スマイルホテル観音寺（旧：ホテルシェトワ観音寺）の客室写真",
    "\u30b9\u30de\u30a4\u30eb\u30db\u30c6\u30eb\u89b3\u97f3\u5bfa\uff08\u65e7\uff1a\u30db\u30c6\u30eb\u30b7\u30a7\u30c8\u30ef\u89b3\u97f3\u5bfa\uff09 room photo",
    "https://travel.rakuten.co.jp/HOTEL/181149/181149.html",
    '楽天トラベル'
  ),
  "ハイパーイン観音寺駅前": sourcePhoto(
    "kanonji-stay-hyper.jpg",
    "ハイパーイン観音寺駅前の客室写真",
    "\u30cf\u30a4\u30d1\u30fc\u30a4\u30f3\u89b3\u97f3\u5bfa\u99c5\u524d room photo",
    "https://travel.rakuten.co.jp/HOTEL/187287/187287.html",
    '楽天トラベル'
  ),
  "ファミリーロッジ旅籠屋・讃岐観音寺店": sourcePhoto(
    "kanonji-stay-h144479.jpg",
    "ファミリーロッジ旅籠屋・讃岐観音寺店の客室写真",
    "\u30d5\u30a1\u30df\u30ea\u30fc\u30ed\u30c3\u30b8\u65c5\u7c60\u5c4b\u30fb\u8b83\u5c90\u89b3\u97f3\u5bfa\u5e97 room photo",
    "https://travel.rakuten.co.jp/HOTEL/144479/144479.html",
    '楽天トラベル'
  ),
  "ホテル サニーイン": sourcePhoto(
    "kanonji-stay-h14066.jpg",
    "ホテル サニーインの客室写真",
    "\u30db\u30c6\u30eb \u30b5\u30cb\u30fc\u30a4\u30f3 room photo",
    "https://travel.rakuten.co.jp/HOTEL/14066/14066.html",
    '楽天トラベル'
  ),
  "ホテルルートイン観音寺": sourcePhoto(
    "kanonji-stay-routeinn.jpg",
    "ホテルルートイン観音寺の客室写真",
    "\u30db\u30c6\u30eb\u30eb\u30fc\u30c8\u30a4\u30f3\u89b3\u97f3\u5bfa room photo",
    "https://travel.rakuten.co.jp/HOTEL/197475/197475.html",
    '楽天トラベル'
  ),
  "リブマックスリゾート観音寺": sourcePhoto(
    "kanonji-stay-livemax.jpg",
    "リブマックスリゾート観音寺の客室写真",
    "\u30ea\u30d6\u30de\u30c3\u30af\u30b9\u30ea\u30be\u30fc\u30c8\u89b3\u97f3\u5bfa room photo",
    "https://travel.rakuten.co.jp/HOTEL/199292/199292.html",
    '楽天トラベル'
  ),
  "天空ｖｉｌｌａ": sourcePhoto(
    "kanonji-stay-h197523.jpg",
    "天空ｖｉｌｌａの客室写真",
    "\u5929\u7a7a\uff56\uff49\uff4c\uff4c\uff41 room photo",
    "https://travel.rakuten.co.jp/HOTEL/197523/197523.html",
    '楽天トラベル'
  ),
  "観音寺グランドホテル": sourcePhoto(
    "kanonji-stay-grand.jpg",
    "観音寺グランドホテルの客室写真",
    "\u89b3\u97f3\u5bfa\u30b0\u30e9\u30f3\u30c9\u30db\u30c6\u30eb room photo",
    "https://travel.rakuten.co.jp/HOTEL/5647/5647.html",
    '楽天トラベル'
  ),
  "ＡＲＩＡＫＥ ｐａｌｍ ｔｒｅｅ ｈｏｕｓｅ （泊Ｒｕｔｔｏ）": sourcePhoto(
    "kanonji-stay-h188946.jpg",
    "ＡＲＩＡＫＥ ｐａｌｍ ｔｒｅｅ ｈｏｕｓｅ （泊Ｒｕｔｔｏ）の客室写真",
    "\uff21\uff32\uff29\uff21\uff2b\uff25 \uff50\uff41\uff4c\uff4d \uff54\uff52\uff45\uff45 \uff48\uff4f\uff55\uff53\uff45 \uff08\u6cca\uff32\uff55\uff54\uff54\uff4f\uff09 room photo",
    "https://travel.rakuten.co.jp/HOTEL/188946/188946.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ ＡＺ 香川観音寺店": sourcePhoto(
    "kanonji-stay-h196898.jpg",
    "ＨＯＴＥＬ ＡＺ 香川観音寺店の客室写真",
    "\uff28\uff2f\uff34\uff25\uff2c \uff21\uff3a \u9999\u5ddd\u89b3\u97f3\u5bfa\u5e97 room photo",
    "https://travel.rakuten.co.jp/HOTEL/196898/196898.html",
    '楽天トラベル'
  ),
  "Ｈｏｔｅｌ Ｏ． Ｓｅｔｏｕｃｈｉ 〜ホテルオーセトウチ〜 ｂｙ 琴弾廻廊": sourcePhoto(
    "kanonji-stay-h193441.jpg",
    "Ｈｏｔｅｌ Ｏ． Ｓｅｔｏｕｃｈｉ 〜ホテルオーセトウチ〜 ｂｙ 琴弾廻廊の客室写真",
    "\uff28\uff4f\uff54\uff45\uff4c \uff2f\uff0e \uff33\uff45\uff54\uff4f\uff55\uff43\uff48\uff49 \u301c\u30db\u30c6\u30eb\u30aa\u30fc\u30bb\u30c8\u30a6\u30c1\u301c \uff42\uff59 \u7434\u5f3e\u5efb\u5eca room photo",
    "https://travel.rakuten.co.jp/HOTEL/193441/193441.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ 本大ビジネスホテル 観音寺": sourcePhoto(
    "kanonji-stay-h57057.jpg",
    "Ｔａｂｉｓｔ 本大ビジネスホテル 観音寺の客室写真",
    "\uff34\uff41\uff42\uff49\uff53\uff54 \u672c\u5927\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb \u89b3\u97f3\u5bfa room photo",
    "https://travel.rakuten.co.jp/HOTEL/57057/57057.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ 琴弾荘": sourcePhoto(
    "kanonji-stay-h191785.jpg",
    "Ｔａｂｉｓｔ 琴弾荘の客室写真",
    "\uff34\uff41\uff42\uff49\uff53\uff54 \u7434\u5f3e\u8358 room photo",
    "https://travel.rakuten.co.jp/HOTEL/191785/191785.html",
    '楽天トラベル'
  ),
  "グランプレミア瀬戸内 〜四国・香川のリゾートグランピング＆ヴィラ〜 大浴場": sourcePhoto(
    "kanonji-onsen-h184058.jpg",
    "グランプレミア瀬戸内 〜四国・香川のリゾートグランピング＆ヴィラ〜 大浴場の写真",
    "\u30b0\u30e9\u30f3\u30d7\u30ec\u30df\u30a2\u702c\u6238\u5185 \u301c\u56db\u56fd\u30fb\u9999\u5ddd\u306e\u30ea\u30be\u30fc\u30c8\u30b0\u30e9\u30f3\u30d4\u30f3\u30b0\uff06\u30f4\u30a3\u30e9\u301c \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/184058/gallery.html",
    '楽天トラベル'
  ),
  "ホテルルートイン観音寺 大浴場": sourcePhoto(
    "kanonji-onsen-routeinn.jpg",
    "ホテルルートイン観音寺 大浴場の写真",
    "\u30db\u30c6\u30eb\u30eb\u30fc\u30c8\u30a4\u30f3\u89b3\u97f3\u5bfa \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/197475/gallery.html",
    '楽天トラベル'
  ),
  "リブマックスリゾート観音寺 大浴場": sourcePhoto(
    "kanonji-onsen-livemax.jpg",
    "リブマックスリゾート観音寺 大浴場の写真",
    "\u30ea\u30d6\u30de\u30c3\u30af\u30b9\u30ea\u30be\u30fc\u30c8\u89b3\u97f3\u5bfa \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/199292/gallery.html",
    '楽天トラベル'
  ),
  "Ｈｏｔｅｌ Ｏ． Ｓｅｔｏｕｃｈｉ 〜ホテルオーセトウチ〜 ｂｙ 琴弾廻廊 大浴場": sourcePhoto(
    "kanonji-onsen-h193441.jpg",
    "Ｈｏｔｅｌ Ｏ． Ｓｅｔｏｕｃｈｉ 〜ホテルオーセトウチ〜 ｂｙ 琴弾廻廊 大浴場の写真",
    "\uff28\uff4f\uff54\uff45\uff4c \uff2f\uff0e \uff33\uff45\uff54\uff4f\uff55\uff43\uff48\uff49 \u301c\u30db\u30c6\u30eb\u30aa\u30fc\u30bb\u30c8\u30a6\u30c1\u301c \uff42\uff59 \u7434\u5f3e\u5efb\u5eca \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/193441/gallery.html",
    '楽天トラベル'
  ),
  'カマ喜ri': sourcePhoto('kanonji-37006622-dish.jpg', 'カマ喜riの料理写真', 'カマ喜ri food photo', TABELOG_37006622, '食べログ'),
  '西端手打 上戸うどん': sourcePhoto('kanonji-37000152-dish.jpg', '西端手打 上戸うどんの料理写真', '西端手打 上戸うどん food photo', TABELOG_37000152, '食べログ'),
  '手打ちうどん つるや': sourcePhoto('kanonji-37000148-dish.jpg', '手打ちうどん つるやの料理写真', '手打ちうどん つるや food photo', TABELOG_37000148, '食べログ'),
  'かなくま餅': sourcePhoto('kanonji-37000510-dish.jpg', 'かなくま餅の料理写真', 'かなくま餅 food photo', TABELOG_37000510, '食べログ'),
  '讃岐麺処 山岡': sourcePhoto('kanonji-37012136-dish.jpg', '讃岐麺処 山岡の料理写真', '讃岐麺処 山岡 food photo', TABELOG_37012136, '食べログ'),
  '大喜多': sourcePhoto('kanonji-37000603-dish.jpg', '大喜多の料理写真', '大喜多 food photo', TABELOG_37000603, '食べログ'),
  '本場かなくま餅 福田': sourcePhoto('kanonji-37000119-dish.jpg', '本場かなくま餅 福田の料理写真', '本場かなくま餅 福田 food photo', TABELOG_37000119, '食べログ'),
  'IZAKAYA 時々 観音寺店': sourcePhoto('kanonji-37001099-dish.jpg', 'IZAKAYA 時々 観音寺店の料理写真', 'IZAKAYA 時々 観音寺店 food photo', TABELOG_37001099, '食べログ'),
  '伊吹いりこセンター': sourcePhoto('kanonji-37010828-dish.jpg', '伊吹いりこセンターの料理写真', '伊吹いりこセンター food photo', TABELOG_37010828, '食べログ'),
  'うまじ家 豊浜店': sourcePhoto('kanonji-37006102-dish.jpg', 'うまじ家 豊浜店の料理写真', 'うまじ家 豊浜店 food photo', TABELOG_37006102, '食べログ'),
  '麺紡': sourcePhoto('kanonji-37008963-dish.jpg', '麺紡の料理写真', '麺紡 food photo', TABELOG_37008963, '食べログ'),
  '中丸水産': sourcePhoto('kanonji-37012030-dish.jpg', '中丸水産の料理写真', '中丸水産 food photo', TABELOG_37012030, '食べログ'),
  '柳川 本店': sourcePhoto('kanonji-37000632-dish.jpg', '柳川 本店の料理写真', '柳川 本店 food photo', TABELOG_37000632, '食べログ'),
  '骨付鳥 味鶴': sourcePhoto('kanonji-37000841-dish.jpg', '骨付鳥 味鶴の料理写真', '骨付鳥 味鶴 food photo', TABELOG_37000841, '食べログ'),
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
    jis: KANONJI.jis,
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
    accessed: KANONJI.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const KANONJI_FACILITIES: readonly FacilityRow[] = [
  sight('kanonji-sight-01', '銭形砂絵', '香川県観音寺市有明町', '0875-23-3933', KANONJI.sources.zenigata, 34.13414, 133.64228),
  sight('kanonji-sight-02', '琴弾公園', '香川県観音寺市有明町', null, KANONJI.sources.kotohiki, 34.1365, 133.6455),
  sight('kanonji-sight-03', '有明浜', '香川県観音寺市有明町', null, KANONJI.sources.kotohiki, 34.1330, 133.6400),
  sight('kanonji-sight-04', '神恵院', '香川県観音寺市八幡町1-2-7', '0875-25-3861', 'https://www.city.kanonji.kagawa.jp/', 34.1352, 133.6475),
  sight('kanonji-sight-05', '観音寺', '香川県観音寺市八幡町1-2-7', '0875-25-3861', 'https://www.city.kanonji.kagawa.jp/', 34.1350, 133.6478),
  sight('kanonji-sight-06', '琴弾八幡宮', '香川県観音寺市八幡町1丁目', null, 'https://www.city.kanonji.kagawa.jp/', 34.1375, 133.6490),
  sight('kanonji-sight-07', '高屋神社', '香川県観音寺市高屋町', null, 'https://www.city.kanonji.kagawa.jp/', 34.1185, 133.6610),
  sight('kanonji-sight-08', '豊稔池堰堤', '香川県観音寺市大野原町田野々', null, 'https://www.city.kanonji.kagawa.jp/', 34.0955, 133.6418),
  sight('kanonji-sight-09', '伊吹島', '香川県観音寺市伊吹町', null, 'https://www.city.kanonji.kagawa.jp/', 34.1300, 133.5300),
  sight('kanonji-exp-01', '道の駅ことひき', '香川県観音寺市有明町', null, 'https://www.city.kanonji.kagawa.jp/', 34.1360, 133.6440),
  sight('kanonji-onsen-01', "グランプレミア瀬戸内 〜四国・香川のリゾートグランピング＆ヴィラ〜 大浴場", "香川県観音寺市有明町6-10", null, "https://travel.rakuten.co.jp/HOTEL/184058/gallery.html", null, null),
  sight('kanonji-onsen-02', "ホテルルートイン観音寺 大浴場", "香川県観音寺市南町4-3-46", null, "https://travel.rakuten.co.jp/HOTEL/197475/gallery.html", null, null),
  sight('kanonji-onsen-03', "リブマックスリゾート観音寺 大浴場", "香川県観音寺市池之尻町1101-4", "0875-27-6161", "https://travel.rakuten.co.jp/HOTEL/199292/gallery.html", null, null),
  sight('kanonji-onsen-04', "Ｈｏｔｅｌ Ｏ． Ｓｅｔｏｕｃｈｉ 〜ホテルオーセトウチ〜 ｂｙ 琴弾廻廊 大浴場", "香川県観音寺市有明町5-49", null, "https://travel.rakuten.co.jp/HOTEL/193441/gallery.html", null, null),
];
