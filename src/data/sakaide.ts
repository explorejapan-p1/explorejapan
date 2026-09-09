/**
 * Sakaide City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37203. Fifth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SAKAIDE = {
  nameJa: '坂出市',
  nameEn: 'Sakaide City',
  reading: 'さかいでし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'sakaide',
  jis: '37203',
  jlis: '372030',
  sameAs: 'https://www.city.sakaide.lg.jp/',
  hall: {
    postalCode: '762-8601',
    addressJa: '香川県坂出市室町二丁目3番5号',
    addressEn: '2-3-5 Muromachi, Sakaide, Kagawa 762-8601, Japan',
    phone: '0877-46-3111'
  },
  sources: {
    home: 'https://www.city.sakaide.lg.jp/',
    hall: 'https://www.city.sakaide.lg.jp/soshiki/zaimu/mapannai.html',
    seto: 'https://www.city.sakaide.lg.jp/soshiki/sangyoukankou/setoohashi.html',
    kankou: 'https://sakaide-kankou.com/',
    tabelogCity: 'https://tabelog.com/kagawa/C37203/rstLst/',
    routeInn: 'https://travel.rakuten.co.jp/HOTEL/70208/70208.html',
    grand: 'https://travel.rakuten.co.jp/HOTEL/15414/15414.html',
    plaza: 'https://travel.rakuten.co.jp/HOTEL/17901/17901.html',
    accessed: '2026-09-07'
  }
} as const;

export const SAKAIDE_EXPECTED_ROW_COUNT = 18;
export const SAKAIDE_EXPECTED_GEO_COUNT = 10;

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

/** Cover: 瀬戸大橋 twilight — strongest Sakaide landmark. */
export const SAKAIDE_PLACE_PHOTO = wikiPhoto(
  'sakaide-seto-bridge.jpg',
  'https://commons.wikimedia.org/wiki/File:瀬戸大橋（Seto_Ohashi）.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  '＃矛川盾山',
  'https://commons.wikimedia.org/wiki/Special:Contributions/%E7%9F%9B%E5%B7%9D%E7%9B%BE%E5%B1%B1',
  '2018-07-14',
  '瀬戸大橋ライトアップ（坂出市）',
  'Great Seto Bridge lit at dusk, Sakaide'
);

const TABELOG_37000019 = 'https://tabelog.com/kagawa/A3702/A370201/37000019/';
const TABELOG_37000016 = 'https://tabelog.com/kagawa/A3702/A370201/37000016/';
const TABELOG_37000020 = 'https://tabelog.com/kagawa/A3702/A370201/37000020/';
const TABELOG_37005702 = 'https://tabelog.com/kagawa/A3702/A370201/37005702/';
const TABELOG_37001355 = 'https://tabelog.com/kagawa/A3702/A370201/37001355/';
const TABELOG_37005010 = 'https://tabelog.com/kagawa/A3702/A370201/37005010/';
const TABELOG_37008600 = 'https://tabelog.com/kagawa/A3702/A370201/37008600/';
const TABELOG_37012661 = 'https://tabelog.com/kagawa/A3702/A370201/37012661/';
const TABELOG_37001360 = 'https://tabelog.com/kagawa/A3702/A370201/37001360/';
const TABELOG_37000943 = 'https://tabelog.com/kagawa/A3702/A370201/37000943/';
const TABELOG_37000708 = 'https://tabelog.com/kagawa/A3702/A370201/37000708/';
const TABELOG_37000106 = 'https://tabelog.com/kagawa/A3702/A370201/37000106/';
const TABELOG_37000701 = 'https://tabelog.com/kagawa/A3702/A370201/37000701/';
const TABELOG_37002605 = 'https://tabelog.com/kagawa/A3702/A370201/37002605/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const SAKAIDE_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '瀬戸大橋': SAKAIDE_PLACE_PHOTO,
  '瀬戸大橋記念公園': wikiPhoto(
    'sakaide-kinen-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Great_Seto_Bridge_Memorial_Park01s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2007-05-04',
    '瀬戸大橋記念公園（坂出市）',
    'Seto Ohashi Memorial Park, Sakaide'
  ),
  '瀬戸大橋タワー': wikiPhoto(
    'sakaide-tower.jpg',
    'https://commons.wikimedia.org/wiki/File:Seto_Ohashi_Tower_01.JPG',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Abasaa',
    'https://commons.wikimedia.org/wiki/User:%E3%81%82%E3%81%B0%E3%81%95%E3%83%BC',
    '2018-01-07',
    '瀬戸大橋タワー（坂出市）',
    'Seto Ohashi Tower, Sakaide'
  ),
  '東山魁夷せとうち美術館': wikiPhoto(
    'sakaide-higashiyama.jpg',
    'https://commons.wikimedia.org/wiki/File:せとうち美術館-1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'やしまのお城',
    'https://commons.wikimedia.org/w/index.php?title=User:%E3%82%84%E3%81%97%E3%81%BE%E3%81%AE%E3%81%8A%E5%9F%8E&amp;action=edit&amp;redlink=1',
    '2019-07-12',
    '香川県立東山魁夷せとうち美術館（坂出市）',
    'Higashiyama Kaii Setouchi Art Museum, Sakaide'
  ),
  '与島': wikiPhoto(
    'sakaide-yoshima.jpg',
    'https://commons.wikimedia.org/wiki/File:Kita_Bisan-Seto_Bridge_viewed_from_Yoshima_PA_01.jpg',
    'CC BY 4.0',
    'https://creativecommons.org/licenses/by/4.0',
    'ノボホショコロトソ',
    'https://commons.wikimedia.org/w/index.php?title=User:%E3%83%8E%E3%83%9C%E3%83%9B%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%AD%E3%83%88%E3%82%BD&amp;action=edit&amp;redlink=1',
    '2026-07-17',
    '与島パーキングエリアから見た北備讃瀬戸大橋（坂出市）',
    'Kita Bisan-Seto Bridge from Yoshima PA, Sakaide'
  ),
  '鍋島灯台': wikiPhoto(
    'sakaide-nabeshima.jpg',
    'https://commons.wikimedia.org/wiki/File:Nabeshima_Lighthouse.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク',
    'https://commons.wikimedia.org/wiki/File%3ANabeshima_Lighthouse.JPG',
    '2015-04',
    '鍋島灯台（坂出市与島）',
    'Nabeshima Lighthouse, Yoshima, Sakaide'
  ),
  '飯野山': wikiPhoto(
    'sakaide-iino.jpg',
    'https://commons.wikimedia.org/wiki/File:Mount_Iino_Sanuki_Fuji.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'hyolee2',
    'https://commons.wikimedia.org/wiki/User:Hyolee2',
    '2023-06-17',
    '飯野山（讃岐富士・坂出市）',
    'Mount Iino (Sanuki Fuji), Sakaide'
  ),
  '白峯寺': wikiPhoto(
    'sakaide-shiromine.jpg',
    'https://commons.wikimedia.org/wiki/File:Sirominezi_11.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2018-11-26',
    '白峯寺（坂出市）',
    'Shiromine-ji, Sakaide'
  ),
  '沙弥島': wikiPhoto(
    'sakaide-shamijima.jpg',
    'https://commons.wikimedia.org/wiki/File:Bannosumidoricho_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0',
    'DVMG',
    'https://web.archive.org/web/20161028114556/http://www.panoramio.com/user/4084506?with_photo_id=97575574',
    '11 October',
    '沙弥島付近から望む瀬戸大橋（坂出市）',
    'Great Seto Bridge near Shamijima, Sakaide'
  ),
  '道の駅瀬戸大橋記念公園': wikiPhoto(
    'sakaide-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Great_Seto_Bridge_Memorial_Park02s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2007-05-04',
    '道の駅瀬戸大橋記念公園（坂出市）',
    'Michinoeki Seto-Ohashi Kinen-koen, Sakaide'
  ),
  "いろりの宿 木乃古 ＾": sourcePhoto(
    "sakaide-stay-h186296.jpg",
    "いろりの宿 木乃古 ＾の客室写真",
    "\u3044\u308d\u308a\u306e\u5bbf \u6728\u4e43\u53e4 \uff3e room photo",
    "https://travel.rakuten.co.jp/HOTEL/186296/186296.html",
    '楽天トラベル'
  ),
  "お遍路ハウス八十場／民泊": sourcePhoto(
    "sakaide-stay-h194429.jpg",
    "お遍路ハウス八十場／民泊の客室写真",
    "\u304a\u904d\u8def\u30cf\u30a6\u30b9\u516b\u5341\u5834\uff0f\u6c11\u6cca room photo",
    "https://travel.rakuten.co.jp/HOTEL/194429/194429.html",
    '楽天トラベル'
  ),
  "がもう家": sourcePhoto(
    "sakaide-stay-h192225.jpg",
    "がもう家の客室写真",
    "\u304c\u3082\u3046\u5bb6 room photo",
    "https://travel.rakuten.co.jp/HOTEL/192225/192225.html",
    '楽天トラベル'
  ),
  "ゲストハウス 坂出駅前館": sourcePhoto(
    "sakaide-stay-h196872.jpg",
    "ゲストハウス 坂出駅前館の客室写真",
    "\u30b2\u30b9\u30c8\u30cf\u30a6\u30b9 \u5742\u51fa\u99c5\u524d\u9928 room photo",
    "https://travel.rakuten.co.jp/HOTEL/196872/196872.html",
    '楽天トラベル'
  ),
  "ビジネスホテル美咲": sourcePhoto(
    "sakaide-stay-h53401.jpg",
    "ビジネスホテル美咲の客室写真",
    "\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb\u7f8e\u54b2 room photo",
    "https://travel.rakuten.co.jp/HOTEL/53401/53401.html",
    '楽天トラベル'
  ),
  "ホテル ニューセンチュリー坂出": sourcePhoto(
    "sakaide-stay-h19775.jpg",
    "ホテル ニューセンチュリー坂出の客室写真",
    "\u30db\u30c6\u30eb \u30cb\u30e5\u30fc\u30bb\u30f3\u30c1\u30e5\u30ea\u30fc\u5742\u51fa room photo",
    "https://travel.rakuten.co.jp/HOTEL/19775/19775.html",
    '楽天トラベル'
  ),
  "ホテルルートイン坂出北インター": sourcePhoto(
    "sakaide-stay-routeinn.jpg",
    "ホテルルートイン坂出北インターの客室写真",
    "\u30db\u30c6\u30eb\u30eb\u30fc\u30c8\u30a4\u30f3\u5742\u51fa\u5317\u30a4\u30f3\u30bf\u30fc room photo",
    "https://travel.rakuten.co.jp/HOTEL/70208/70208.html",
    '楽天トラベル'
  ),
  "リゾートホテル ＪＲ坂出駅から徒歩７分 ＾": sourcePhoto(
    "sakaide-stay-h190936.jpg",
    "リゾートホテル ＪＲ坂出駅から徒歩７分 ＾の客室写真",
    "\u30ea\u30be\u30fc\u30c8\u30db\u30c6\u30eb \uff2a\uff32\u5742\u51fa\u99c5\u304b\u3089\u5f92\u6b69\uff17\u5206 \uff3e room photo",
    "https://travel.rakuten.co.jp/HOTEL/190936/190936.html",
    '楽天トラベル'
  ),
  "休暇村 讃岐五色台": sourcePhoto(
    "sakaide-stay-h76780.jpg",
    "休暇村 讃岐五色台の客室写真",
    "\u4f11\u6687\u6751 \u8b83\u5c90\u4e94\u8272\u53f0 room photo",
    "https://travel.rakuten.co.jp/HOTEL/76780/76780.html",
    '楽天トラベル'
  ),
  "坂出グランドホテル": sourcePhoto(
    "sakaide-stay-grand.jpg",
    "坂出グランドホテルの客室写真",
    "\u5742\u51fa\u30b0\u30e9\u30f3\u30c9\u30db\u30c6\u30eb room photo",
    "https://travel.rakuten.co.jp/HOTEL/15414/15414.html",
    '楽天トラベル'
  ),
  "坂出プラザホテル": sourcePhoto(
    "sakaide-stay-plaza.jpg",
    "坂出プラザホテルの客室写真",
    "\u5742\u51fa\u30d7\u30e9\u30b6\u30db\u30c6\u30eb room photo",
    "https://travel.rakuten.co.jp/HOTEL/17901/17901.html",
    '楽天トラベル'
  ),
  "旅館 みき": sourcePhoto(
    "sakaide-stay-h107653.jpg",
    "旅館 みきの客室写真",
    "\u65c5\u9928 \u307f\u304d room photo",
    "https://travel.rakuten.co.jp/HOTEL/107653/107653.html",
    '楽天トラベル'
  ),
  "旅館 久米ひまわり荘": sourcePhoto(
    "sakaide-stay-h56170.jpg",
    "旅館 久米ひまわり荘の客室写真",
    "\u65c5\u9928 \u4e45\u7c73\u3072\u307e\u308f\u308a\u8358 room photo",
    "https://travel.rakuten.co.jp/HOTEL/56170/56170.html",
    '楽天トラベル'
  ),
  "旅館川久米": sourcePhoto(
    "sakaide-stay-h76783.jpg",
    "旅館川久米の客室写真",
    "\u65c5\u9928\u5ddd\u4e45\u7c73 room photo",
    "https://travel.rakuten.co.jp/HOTEL/76783/76783.html",
    '楽天トラベル'
  ),
  "湯元さぬき瀬戸大橋温泉 せとうちそう": sourcePhoto(
    "sakaide-stay-h8175.jpg",
    "湯元さぬき瀬戸大橋温泉 せとうちそうの客室写真",
    "\u6e6f\u5143\u3055\u306c\u304d\u702c\u6238\u5927\u6a4b\u6e29\u6cc9 \u305b\u3068\u3046\u3061\u305d\u3046 room photo",
    "https://travel.rakuten.co.jp/HOTEL/8175/8175.html",
    '楽天トラベル'
  ),
  "美咲旅館": sourcePhoto(
    "sakaide-stay-h53400.jpg",
    "美咲旅館の客室写真",
    "\u7f8e\u54b2\u65c5\u9928 room photo",
    "https://travel.rakuten.co.jp/HOTEL/53400/53400.html",
    '楽天トラベル'
  ),
  "ＢＡＹ ＭＡＲＩＮＡ ログハウス ＾": sourcePhoto(
    "sakaide-stay-h171129.jpg",
    "ＢＡＹ ＭＡＲＩＮＡ ログハウス ＾の客室写真",
    "\uff22\uff21\uff39 \uff2d\uff21\uff32\uff29\uff2e\uff21 \u30ed\u30b0\u30cf\u30a6\u30b9 \uff3e room photo",
    "https://travel.rakuten.co.jp/HOTEL/171129/171129.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ Ｒ９ Ｔｈｅ Ｙａｒｄ 坂出": sourcePhoto(
    "sakaide-stay-h193223.jpg",
    "ＨＯＴＥＬ Ｒ９ Ｔｈｅ Ｙａｒｄ 坂出の客室写真",
    "\uff28\uff2f\uff34\uff25\uff2c \uff32\uff19 \uff34\uff48\uff45 \uff39\uff41\uff52\uff44 \u5742\u51fa room photo",
    "https://travel.rakuten.co.jp/HOTEL/193223/193223.html",
    '楽天トラベル'
  ),
  "ＭＹＴＨ‐Ｓ【大人専用１８禁・ハピホテ提携】": sourcePhoto(
    "sakaide-stay-h163466.jpg",
    "ＭＹＴＨ‐Ｓ【大人専用１８禁・ハピホテ提携】の客室写真",
    "\uff2d\uff39\uff34\uff28\u2010\uff33\u3010\u5927\u4eba\u5c02\u7528\uff11\uff18\u7981\u30fb\u30cf\u30d4\u30db\u30c6\u63d0\u643a\u3011 room photo",
    "https://travel.rakuten.co.jp/HOTEL/163466/163466.html",
    '楽天トラベル'
  ),
  "ＭＹＴＨ－Ｊ【大人専用１８禁・ハピホテ提携】": sourcePhoto(
    "sakaide-stay-h163468.jpg",
    "ＭＹＴＨ－Ｊ【大人専用１８禁・ハピホテ提携】の客室写真",
    "\uff2d\uff39\uff34\uff28\uff0d\uff2a\u3010\u5927\u4eba\u5c02\u7528\uff11\uff18\u7981\u30fb\u30cf\u30d4\u30db\u30c6\u63d0\u643a\u3011 room photo",
    "https://travel.rakuten.co.jp/HOTEL/163468/163468.html",
    '楽天トラベル'
  ),
  "ＭＹＴＨ－Ｗ【大人専用１８禁・ハピホテ提携】": sourcePhoto(
    "sakaide-stay-h163467.jpg",
    "ＭＹＴＨ－Ｗ【大人専用１８禁・ハピホテ提携】の客室写真",
    "\uff2d\uff39\uff34\uff28\uff0d\uff37\u3010\u5927\u4eba\u5c02\u7528\uff11\uff18\u7981\u30fb\u30cf\u30d4\u30db\u30c6\u63d0\u643a\u3011 room photo",
    "https://travel.rakuten.co.jp/HOTEL/163467/163467.html",
    '楽天トラベル'
  ),
  "ビジネスホテル美咲 大浴場": sourcePhoto(
    "sakaide-onsen-h53401.jpg",
    "ビジネスホテル美咲 大浴場の写真",
    "\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb\u7f8e\u54b2 \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/53401/gallery.html",
    '楽天トラベル'
  ),
  "ホテルルートイン坂出北インター 大浴場": sourcePhoto(
    "sakaide-onsen-routeinn.jpg",
    "ホテルルートイン坂出北インター 大浴場の写真",
    "\u30db\u30c6\u30eb\u30eb\u30fc\u30c8\u30a4\u30f3\u5742\u51fa\u5317\u30a4\u30f3\u30bf\u30fc \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/70208/gallery.html",
    '楽天トラベル'
  ),
  "休暇村 讃岐五色台 大浴場": sourcePhoto(
    "sakaide-onsen-h76780.jpg",
    "休暇村 讃岐五色台 大浴場の写真",
    "\u4f11\u6687\u6751 \u8b83\u5c90\u4e94\u8272\u53f0 \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/76780/gallery.html",
    '楽天トラベル'
  ),
  "坂出グランドホテル 大浴場": sourcePhoto(
    "sakaide-onsen-grand.jpg",
    "坂出グランドホテル 大浴場の写真",
    "\u5742\u51fa\u30b0\u30e9\u30f3\u30c9\u30db\u30c6\u30eb \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/15414/gallery.html",
    '楽天トラベル'
  ),
  "旅館 久米ひまわり荘 大浴場": sourcePhoto(
    "sakaide-onsen-h56170.jpg",
    "旅館 久米ひまわり荘 大浴場の写真",
    "\u65c5\u9928 \u4e45\u7c73\u3072\u307e\u308f\u308a\u8358 \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/56170/gallery.html",
    '楽天トラベル'
  ),
  "旅館川久米 大浴場": sourcePhoto(
    "sakaide-onsen-h76783.jpg",
    "旅館川久米 大浴場の写真",
    "\u65c5\u9928\u5ddd\u4e45\u7c73 \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/76783/gallery.html",
    '楽天トラベル'
  ),
  "湯元さぬき瀬戸大橋温泉 せとうちそう 大浴場": sourcePhoto(
    "sakaide-onsen-h8175.jpg",
    "湯元さぬき瀬戸大橋温泉 せとうちそう 大浴場の写真",
    "\u6e6f\u5143\u3055\u306c\u304d\u702c\u6238\u5927\u6a4b\u6e29\u6cc9 \u305b\u3068\u3046\u3061\u305d\u3046 \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/8175/gallery.html",
    '楽天トラベル'
  ),
  "美咲旅館 大浴場": sourcePhoto(
    "sakaide-onsen-h53400.jpg",
    "美咲旅館 大浴場の写真",
    "\u7f8e\u54b2\u65c5\u9928 \u5927\u6d74\u5834 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/53400/gallery.html",
    '楽天トラベル'
  ),
  '讃岐うどん がもう': sourcePhoto('sakaide-37000019-dish.jpg', '讃岐うどん がもうの料理写真', '讃岐うどん がもう food photo', TABELOG_37000019, '食べログ'),
  '日の出製麺所': sourcePhoto('sakaide-37000016-dish.jpg', '日の出製麺所の料理写真', '日の出製麺所 food photo', TABELOG_37000016, '食べログ'),
  '山下うどん': sourcePhoto('sakaide-37000020-dish.jpg', '山下うどんの料理写真', '山下うどん food photo', TABELOG_37000020, '食べログ'),
  'やなぎ屋 西大浜店': sourcePhoto('sakaide-37005702-dish.jpg', 'やなぎ屋 西大浜店の料理写真', 'やなぎ屋 西大浜店 food photo', TABELOG_37005702, '食べログ'),
  'とらや': sourcePhoto('sakaide-37001355-dish.jpg', 'とらやの料理写真', 'とらや food photo', TABELOG_37001355, '食べログ'),
  'まいどまいど': sourcePhoto('sakaide-37005010-dish.jpg', 'まいどまいどの料理写真', 'まいどまいど food photo', TABELOG_37005010, '食べログ'),
  'めんや七福 別邸': sourcePhoto('sakaide-37008600-dish.jpg', 'めんや七福 別邸の料理写真', 'めんや七福 別邸 food photo', TABELOG_37008600, '食べログ'),
  '手打ちうどん かまや': sourcePhoto('sakaide-37012661-dish.jpg', '手打ちうどん かまやの料理写真', '手打ちうどん かまや food photo', TABELOG_37012661, '食べログ'),
  'さぬきまるふじ': sourcePhoto('sakaide-37001360-dish.jpg', 'さぬきまるふじの料理写真', 'さぬきまるふじ food photo', TABELOG_37001360, '食べログ'),
  '饂飩 こむぎや': sourcePhoto('sakaide-37000943-dish.jpg', '饂飩 こむぎやの料理写真', '饂飩 こむぎや food photo', TABELOG_37000943, '食べログ'),
  '手打うどん 町川': sourcePhoto('sakaide-37000708-dish.jpg', '手打うどん 町川の料理写真', '手打うどん 町川 food photo', TABELOG_37000708, '食べログ'),
  'ウェリントン': sourcePhoto('sakaide-37000106-dish.jpg', 'ウェリントンの料理写真', 'ウェリントン food photo', TABELOG_37000106, '食べログ'),
  '清水屋': sourcePhoto('sakaide-37000701-dish.jpg', '清水屋の料理写真', '清水屋 food photo', TABELOG_37000701, '食べログ'),
  'ホクセイ': sourcePhoto('sakaide-37002605-dish.jpg', 'ホクセイの料理写真', 'ホクセイ food photo', TABELOG_37002605, '食べログ'),
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
    jis: SAKAIDE.jis,
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
    accessed: SAKAIDE.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const SAKAIDE_FACILITIES: readonly FacilityRow[] = [
  sight('sakaide-sight-01', '瀬戸大橋', '香川県坂出市番の州緑町', null, SAKAIDE.sources.seto, 34.35267, 133.82603),
  sight('sakaide-sight-02', '瀬戸大橋記念公園', '香川県坂出市番の州緑町6-13', '0877-45-2344', SAKAIDE.sources.seto, 34.35267, 133.82603),
  sight('sakaide-sight-03', '瀬戸大橋タワー', '香川県坂出市番の州緑町', null, SAKAIDE.sources.seto, 34.35180, 133.82500),
  sight('sakaide-sight-04', '東山魁夷せとうち美術館', '香川県坂出市沙弥島南通224-13', '0877-44-1333', 'https://www.pref.kagawa.lg.jp/higashiyama/', 34.349383, 133.824189),
  sight('sakaide-sight-05', '与島', '香川県坂出市与島町587', '0877-43-0502', 'https://sakaide-kankou.com/spots/829/', 34.389167, 133.819444),
  sight('sakaide-sight-06', '鍋島灯台', '香川県坂出市与島町', null, 'https://sakaide-kankou.com/spots/829/', 34.382411, 133.823708),
  sight('sakaide-sight-07', '飯野山', '香川県坂出市川津町', null, SAKAIDE.sources.kankou, 34.29190, 133.83080),
  sight('sakaide-sight-08', '白峯寺', '香川県坂出市青海町263', '0877-47-0355', SAKAIDE.sources.kankou, 34.333528, 133.926764),
  sight('sakaide-sight-09', '沙弥島', '香川県坂出市沙弥島', '0877-45-1122', 'https://sakaide-kankou.com/spots/855/', 34.348611, 133.822222),
  sight('sakaide-exp-01', '道の駅瀬戸大橋記念公園', '香川県坂出市番の州緑町6-13', '0877-45-2344', SAKAIDE.sources.seto, 34.35267, 133.82603),
  sight('sakaide-onsen-01', "ビジネスホテル美咲 大浴場", "香川県坂出市西大浜北2-3-1", null, "https://travel.rakuten.co.jp/HOTEL/53401/gallery.html", null, null),
  sight('sakaide-onsen-02', "ホテルルートイン坂出北インター 大浴場", "香川県坂出市西大浜北4-5-31", null, "https://travel.rakuten.co.jp/HOTEL/70208/gallery.html", null, null),
  sight('sakaide-onsen-03', "休暇村 讃岐五色台 大浴場", "香川県坂出市大屋冨町3042", null, "https://travel.rakuten.co.jp/HOTEL/76780/gallery.html", null, null),
  sight('sakaide-onsen-04', "坂出グランドホテル 大浴場", "香川県坂出市西大浜北1-2-33", null, "https://travel.rakuten.co.jp/HOTEL/15414/gallery.html", null, null),
  sight('sakaide-onsen-05', "旅館 久米ひまわり荘 大浴場", "香川県坂出市西大浜南3-1-15", null, "https://travel.rakuten.co.jp/HOTEL/56170/gallery.html", null, null),
  sight('sakaide-onsen-06', "旅館川久米 大浴場", "香川県坂出市元町1丁目7-12", null, "https://travel.rakuten.co.jp/HOTEL/76783/gallery.html", null, null),
  sight('sakaide-onsen-07', "湯元さぬき瀬戸大橋温泉 せとうちそう 大浴場", "香川県坂出市常盤町2-1-20", null, "https://travel.rakuten.co.jp/HOTEL/8175/gallery.html", null, null),
  sight('sakaide-onsen-08', "美咲旅館 大浴場", "香川県坂出市西大浜北2-4-38", null, "https://travel.rakuten.co.jp/HOTEL/53400/gallery.html", null, null),
];
