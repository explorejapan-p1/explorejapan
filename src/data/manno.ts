/**
 * Manno Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-08). JIS 37406. Seventeenth Kagawa hub after … + Tadotsu.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split) + Commons experience.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MANNO = {
  nameJa: 'まんのう町',
  nameEn: 'Manno',
  reading: 'まんのうちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'manno',
  jis: '37406',
  jlis: '374061',
  sameAs: 'https://www.town.manno.lg.jp/',
  hall: {
    postalCode: '766-8503',
    addressJa: '香川県仲多度郡まんのう町吉野下430',
    addressEn: '430 Yoshinoshimo, Manno, Nakatado District, Kagawa 766-8503, Japan',
    phone: '0877-73-0100'
  },
  sources: {
    home: 'https://www.town.manno.lg.jp/',
    hall: 'https://www.town.manno.lg.jp/',
    kankou: 'https://www.town.manno.lg.jp/',
    park: 'https://ja.wikipedia.org/wiki/%E5%9B%BD%E5%96%B6%E8%B3%9B%E5%B2%90%E3%81%BE%E3%82%93%E3%81%AE%E3%81%86%E5%85%AC%E5%9C%92',
    tabelogCity: 'https://tabelog.com/kagawa/C37406/rstLst/',
    asan: 'https://travel.rakuten.co.jp/HOTEL/161204/161204.html',
    accessed: '2026-09-08'
  }
} as const;

export const MANNO_EXPECTED_ROW_COUNT = 8;
export const MANNO_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Sanuki Manno National Park. */
export const MANNO_PLACE_PHOTO = wikiPhoto(
  'manno-park.jpg',
  'https://commons.wikimedia.org/wiki/File:Sanuki-mannou-park.JPG',
  'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
  '本人', 'https://commons.wikimedia.org/wiki/User:%E6%9C%AC%E4%BA%BA', '2010-01-09',
  '国営讃岐まんのう公園', 'Sanuki Manno National Park, Manno, Kagawa'
);

const TABELOG_37010908 = 'https://tabelog.com/kagawa/A3703/A370302/37010908/';
const TABELOG_37003306 = 'https://tabelog.com/kagawa/A3703/A370302/37003306/';
const TABELOG_37000691 = 'https://tabelog.com/kagawa/A3703/A370302/37000691/';
const TABELOG_37014659 = 'https://tabelog.com/kagawa/A3703/A370302/37014659/';
const TABELOG_37013145 = 'https://tabelog.com/kagawa/A3703/A370302/37013145/';
const TABELOG_37014593 = 'https://tabelog.com/kagawa/A3703/A370302/37014593/';
const TABELOG_37011906 = 'https://tabelog.com/kagawa/A3703/A370302/37011906/';
const TABELOG_37004698 = 'https://tabelog.com/kagawa/A3703/A370302/37004698/';
const TABELOG_37009276 = 'https://tabelog.com/kagawa/A3703/A370302/37009276/';
const TABELOG_37001878 = 'https://tabelog.com/kagawa/A3703/A370302/37001878/';
const TABELOG_37000005 = 'https://tabelog.com/kagawa/A3703/A370302/37000005/';
const TABELOG_37002376 = 'https://tabelog.com/kagawa/A3703/A370302/37002376/';
const TABELOG_37010082 = 'https://tabelog.com/kagawa/A3703/A370302/37010082/';
const TABELOG_37002784 = 'https://tabelog.com/kagawa/A3703/A370302/37002784/';
const TABELOG_37008164 = 'https://tabelog.com/kagawa/A3703/A370302/37008164/';
const TABELOG_37002022 = 'https://tabelog.com/kagawa/A3703/A370302/37002022/';

export const MANNO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '国営讃岐まんのう公園': MANNO_PLACE_PHOTO,
  '満濃池': wikiPhoto(
    'manno-ike.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%BA%80%E6%BF%83%E6%B1%A0201602.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami', 'https://commons.wikimedia.org/wiki/User:Osami', '2016-02',
    '満濃池（まんのう町）', 'Mannoike reservoir, Manno'
  ),
  'まんのう天文台': wikiPhoto(
    'manno-tenmondai.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%BE%E3%82%93%E3%81%AE%E3%81%86%E5%A4%A9%E6%96%87%E5%8F%B0.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami', 'https://commons.wikimedia.org/wiki/User:Osami', '2015-09-26',
    'まんのう天文台', 'Manno Observatory'
  ),
  'ひまわりの里': wikiPhoto(
    'manno-himawari.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%B2%E3%81%BE%E3%82%8F%E3%82%8A%E3%81%AE%E9%87%8C%E3%81%BE%E3%82%93%E3%81%AE%E3%81%86.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Pikawan', 'https://commons.wikimedia.org/wiki/User:Pikawan', '2014-07-21',
    'ひまわりの里まんのう', 'Himawari-no-sato sunflower field, Manno'
  ),
  'かりんの丘公園': wikiPhoto(
    'manno-karin.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%8B%E3%82%8A%E3%82%93%E3%81%AE%E4%B8%98%E5%85%AC%E5%9C%92150519.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami', 'https://commons.wikimedia.org/wiki/User:Osami', '2015-05-19',
    'かりんの丘公園', 'Karin-no-oka Park, Manno'
  ),
  '小橋の滝': wikiPhoto(
    'manno-kobashi-taki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E6%A9%8B%E3%81%AE%E6%BF%9F_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'ball banban', 'https://commons.wikimedia.org/wiki/User:Ball_banban', '2011-05-23',
    '小橋の滝（まんのう町）', 'Kobashi Falls, Manno'
  ),
  '道の駅ことなみ': wikiPhoto(
    'manno-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Michinoeki-kotonami.JPG',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    '本人作成', 'https://commons.wikimedia.org/wiki/User:%E6%9C%AC%E4%BA%BA%E4%BD%9C%E6%88%90', '2008-06-07',
    '道の駅ことなみ', 'Michinoeki Kotonami, Manno'
  ),
  '湯山荘　阿讃琴南': sourcePhoto(
    'manno-stay-asan.jpg',
    '湯山荘　阿讃琴南の客室写真',
    'Yuyamaso Asan Kotonami room photo',
    'https://travel.rakuten.co.jp/HOTEL/161204/161204.html',
    '楽天トラベル'
  ),
  '清流庵': sourcePhoto(
    'manno-stay-seiryuan.jpg',
    '清流庵の客室写真',
    '清流庵 room photo',
    'https://travel.rakuten.co.jp/HOTEL/183456/183456.html',
    '楽天トラベル'
  ),
  'ＭＹＴＨ－Ｙ【大人専用１８禁・ハピホテ提携】': sourcePhoto(
    'manno-stay-myth.jpg',
    'ＭＹＴＨ－Ｙ【大人専用１８禁・ハピホテ提携】の客室写真',
    'ＭＹＴＨ－Ｙ【大人専用１８禁・ハピホテ提携】 room photo',
    'https://travel.rakuten.co.jp/HOTEL/163465/163465.html',
    '楽天トラベル'
  ),
  '湯山荘　阿讃琴南 大浴場': sourcePhoto(
    'manno-onsen-asan.jpg',
    '湯山荘　阿讃琴南の大浴場写真',
    'Yuyamaso Asan Kotonami bath photo',
    'https://travel.rakuten.co.jp/HOTEL/161204/gallery.html',
    '楽天トラベル'
  ),
  'グリーンパークまんのう': sourcePhoto('manno-37010908-dish.jpg', 'グリーンパークまんのうの料理写真', 'グリーンパークまんのう food photo', TABELOG_37010908, '食べログ'),
  'ハニル': sourcePhoto('manno-37003306-dish.jpg', 'ハニルの料理写真', 'ハニル food photo', TABELOG_37003306, '食べログ'),
  '山神うどん': sourcePhoto('manno-37000691-dish.jpg', '山神うどんの料理写真', '山神うどん food photo', TABELOG_37000691, '食べログ'),
  'かがわ': sourcePhoto('manno-37014659-dish.jpg', 'かがわの料理写真', 'かがわ food photo', TABELOG_37014659, '食べログ'),
  '宮崎地鶏 寿': sourcePhoto('manno-37013145-dish.jpg', '宮崎地鶏 寿の料理写真', '宮崎地鶏 寿 food photo', TABELOG_37013145, '食べログ'),
  'sevenplace 糀処': sourcePhoto('manno-37014593-dish.jpg', 'sevenplace 糀処の料理写真', 'sevenplace 糀処 food photo', TABELOG_37014593, '食べログ'),
  'フルーツサンド専門店 Yemonya': sourcePhoto('manno-37011906-dish.jpg', 'フルーツサンド専門店 Yemonyaの料理写真', 'フルーツサンド専門店 Yemonya food photo', TABELOG_37011906, '食べログ'),
  'そば処　おいで家': sourcePhoto('manno-37004698-dish.jpg', 'そば処　おいで家の料理写真', 'そば処　おいで家 food photo', TABELOG_37004698, '食べログ'),
  '旬菜旬魚 いえもんや': sourcePhoto('manno-37009276-dish.jpg', '旬菜旬魚 いえもんやの料理写真', '旬菜旬魚 いえもんや food photo', TABELOG_37009276, '食べログ'),
  '食彩茶屋華凛': sourcePhoto('manno-37001878-dish.jpg', '食彩茶屋華凛の料理写真', '食彩茶屋華凛 food photo', TABELOG_37001878, '食べログ'),
  '長田うどん': sourcePhoto('manno-37000005-dish.jpg', '長田うどんの料理写真', '長田うどん food photo', TABELOG_37000005, '食べログ'),
  '岡田うどん': sourcePhoto('manno-37002376-dish.jpg', '岡田うどんの料理写真', '岡田うどん food photo', TABELOG_37002376, '食べログ'),
  '山よし 佐文店': sourcePhoto('manno-37010082-dish.jpg', '山よし 佐文店の料理写真', '山よし 佐文店 food photo', TABELOG_37010082, '食べログ'),
  'うまか房の食卓': sourcePhoto('manno-37002784-dish.jpg', 'うまか房の食卓の料理写真', 'うまか房の食卓 food photo', TABELOG_37002784, '食べログ'),
  'ホット ショップ タカノ': sourcePhoto('manno-37008164-dish.jpg', 'ホット ショップ タカノの料理写真', 'ホット ショップ タカノ food photo', TABELOG_37008164, '食べログ'),
  'おらん家': sourcePhoto('manno-37002022-dish.jpg', 'おらん家の料理写真', 'おらん家 food photo', TABELOG_37002022, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: MANNO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: MANNO.sources.accessed};
}

export const MANNO_FACILITIES: readonly FacilityRow[] = [
  sight('manno-sight-01', '国営讃岐まんのう公園', '香川県仲多度郡まんのう町吉野', null, 'https://ja.wikipedia.org/wiki/%E5%9B%BD%E5%96%B6%E8%B3%9B%E5%B2%90%E3%81%BE%E3%82%93%E3%81%AE%E3%81%86%E5%85%AC%E5%9C%92', 34.16687778, 133.87983056),
  sight('manno-sight-02', '満濃池', '香川県仲多度郡まんのう町', null, 'https://ja.wikipedia.org/wiki/%E6%BA%80%E6%BF%83%E6%B1%A0', 34.16305556, 133.87222222),
  sight('manno-sight-03', 'まんのう天文台', '香川県仲多度郡まんのう町吉野', null, 'https://www.town.manno.lg.jp/', 34.1675, 133.8812),
  sight('manno-sight-04', 'ひまわりの里', '香川県仲多度郡まんのう町', null, 'https://www.town.manno.lg.jp/', 34.153537, 133.844677),
  sight('manno-sight-05', 'かりんの丘公園', '香川県仲多度郡まんのう町', null, 'https://www.town.manno.lg.jp/', 34.17339722, 133.87175556),
  sight('manno-sight-06', '小橋の滝', '香川県仲多度郡まんのう町', null, 'https://www.town.manno.lg.jp/', 34.092331, 133.978958),
  sight('manno-experience-01', '道の駅ことなみ', '香川県仲多度郡まんのう町七箇', null, 'https://www.town.manno.lg.jp/', 34.095, 134.0078),
  sight('manno-onsen-01', '湯山荘　阿讃琴南 大浴場', '香川県仲多度郡まんのう町勝浦１', null, 'https://travel.rakuten.co.jp/HOTEL/161204/gallery.html', 34.097628, 134.0032681)
];
