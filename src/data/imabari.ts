/**
 * Imabari City sourced facts. Do not invent population.
 * Hall / JIS from city HP profile footer + Wikipedia 今治市 (accessed 2026-09-09). JIS 38202. Second Ehime hub after 松山市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Experience: 0. Shop/commerce honest 0.
 * IG @tititoko_ehime used as research pointer only; all pills multi-source confirmed (Commons / Tabelog / Rakuten / city).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const IMABARI = {
  nameJa: '今治市',
  nameEn: 'Imabari',
  reading: 'いまばりし',
  prefectureJa: '愛媛県',
  prefectureEn: 'Ehime',
  prefectureSlug: 'ehime',
  slug: 'imabari',
  jis: '38202',
  jlis: '382027',
  sameAs: 'https://www.city.imabari.ehime.jp/',
  hall: {
    postalCode: '794-8511',
    addressJa: '愛媛県今治市別宮町1丁目4番地1',
    addressEn: '1-4-1 Bekku-cho, Imabari City, Ehime 794-8511, Japan',
    phone: '0898-32-5200'
  },
  sources: {
    home: 'https://www.city.imabari.ehime.jp/',
    hall: 'https://www.city.imabari.ehime.jp/profile/',
    kanko: 'https://www.city.imabari.ehime.jp/kanko/',
    castle: 'https://ja.wikipedia.org/wiki/%E4%BB%8A%E6%B2%BB%E5%9F%8E',
    tabelogCity: 'https://tabelog.com/ehime/C38202/rstLst/',
    kikusui: 'https://travel.rakuten.co.jp/HOTEL/10758/10758.html',
    accessed: '2026-09-09'
  }
} as const;

export const IMABARI_EXPECTED_ROW_COUNT = 27;
export const IMABARI_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Imabari Castle. Hero title remains municipality name only. */
export const IMABARI_PLACE_PHOTO = wikiPhoto(
  'imabari-castle.jpg',
  'https://commons.wikimedia.org/wiki/File:Imabari_Castle.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  'Fred Cherrygarden', 'https://commons.wikimedia.org/wiki/User:Fred_Cherrygarden', '2025-07-11',
  '今治城', 'Imabari Castle'
);

const TABELOG_38012923 = 'https://tabelog.com/ehime/A3802/A380201/38012923/';
const TABELOG_38012159 = 'https://tabelog.com/ehime/A3802/A380201/38012159/';
const TABELOG_38005558 = 'https://tabelog.com/ehime/A3802/A380201/38005558/';
const TABELOG_38000094 = 'https://tabelog.com/ehime/A3802/A380201/38000094/';
const TABELOG_38011685 = 'https://tabelog.com/ehime/A3802/A380201/38011685/';
const TABELOG_38014785 = 'https://tabelog.com/ehime/A3802/A380201/38014785/';
const TABELOG_38011929 = 'https://tabelog.com/ehime/A3802/A380201/38011929/';
const TABELOG_38010461 = 'https://tabelog.com/ehime/A3802/A380201/38010461/';
const TABELOG_38001952 = 'https://tabelog.com/ehime/A3802/A380201/38001952/';
const TABELOG_38000001 = 'https://tabelog.com/ehime/A3802/A380201/38000001/';
const TABELOG_38016736 = 'https://tabelog.com/ehime/A3802/A380201/38016736/';
const TABELOG_38001393 = 'https://tabelog.com/ehime/A3802/A380201/38001393/';
const TABELOG_38002151 = 'https://tabelog.com/ehime/A3802/A380201/38002151/';
const TABELOG_38016271 = 'https://tabelog.com/ehime/A3802/A380201/38016271/';
const TABELOG_38016483 = 'https://tabelog.com/ehime/A3802/A380201/38016483/';
const TABELOG_38008524 = 'https://tabelog.com/ehime/A3802/A380201/38008524/';

export const IMABARI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '今治城': IMABARI_PLACE_PHOTO,
  '来島海峡大橋': wikiPhoto(
    'imabari-kurushima.jpg',
    'https://commons.wikimedia.org/wiki/File:Kurushima-Kaikyo-Bridge.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'shidax', 'https://commons.wikimedia.org/wiki/User:Shidax', '2007-04-19',
    '来島海峡大橋', 'Kurushima-Kaikyo Bridge'
  ),
  'タオル美術館ICHIHIRO': wikiPhoto(
    'imabari-towel-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:%E4%BB%8A%E6%B2%BB%E6%AF%9B%E5%B7%BE%E7%BE%8E%E8%A1%93%E9%A4%A8_Imabari_Towel_Museum_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'lienyuan lee', 'https://commons.wikimedia.org/wiki/User:Lienyuan_Lee', '2014-10-18',
    'タオル美術館ICHIHIRO', 'Imabari Towel Museum ICHIHIRO'
  ),
  '大山祇神社': wikiPhoto(
    'imabari-oyamazumi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%B1%B1%E7%A5%87%E7%A5%9E%E7%A4%BE_Oyamazumi_Shrine_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    '伊部リコ', 'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%B1%B1%E7%A5%87%E7%A5%9E%E7%A4%BE_Oyamazumi_Shrine_-_panoramio.jpg', '2007-06-02',
    '大山祇神社', 'Oyamazumi Shrine'
  ),
  '亀老山': wikiPhoto(
    'imabari-kirozan.jpg',
    'https://commons.wikimedia.org/wiki/File:Kirousan_20240521_1.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2024-05-21',
    '亀老山', 'Mount Kiro (Kirozan)'
  ),
  '魚菜燻吟 あき山': sourcePhoto('imabari-38012923-dish.jpg', '魚菜燻吟 あき山の料理写真', '魚菜燻吟 あき山 food photo', TABELOG_38012923, '食べログ'),
  '炭火焼鳥とりっこ 今治店': sourcePhoto('imabari-38012159-dish.jpg', '炭火焼鳥とりっこ 今治店の料理写真', '炭火焼鳥とりっこ 今治店 food photo', TABELOG_38012159, '食べログ'),
  '焼肉高麗': sourcePhoto('imabari-38005558-dish.jpg', '焼肉高麗の料理写真', '焼肉高麗 food photo', TABELOG_38005558, '食べログ'),
  '焼肉 大栄': sourcePhoto('imabari-38000094-dish.jpg', '焼肉 大栄の料理写真', '焼肉 大栄 food photo', TABELOG_38000094, '食べログ'),
  '精肉問屋直営焼肉店 やきにくの蔵 今治店': sourcePhoto('imabari-38011685-dish.jpg', '精肉問屋直営焼肉店 やきにくの蔵 今治店の料理写真', '精肉問屋直営焼肉店 やきにくの蔵 今治店 food photo', TABELOG_38011685, '食べログ'),
  'BISTRO Paysan': sourcePhoto('imabari-38014785-dish.jpg', 'BISTRO Paysanの料理写真', 'BISTRO Paysan food photo', TABELOG_38014785, '食べログ'),
  'アブリヤ 阿部商店': sourcePhoto('imabari-38011929-dish.jpg', 'アブリヤ 阿部商店の料理写真', 'アブリヤ 阿部商店 food photo', TABELOG_38011929, '食べログ'),
  '来島海鮮酒Bar ANCHOR': sourcePhoto('imabari-38010461-dish.jpg', '来島海鮮酒Bar ANCHORの料理写真', '来島海鮮酒Bar ANCHOR food photo', TABELOG_38010461, '食べログ'),
  'やきとり 山鳥': sourcePhoto('imabari-38001952-dish.jpg', 'やきとり 山鳥の料理写真', 'やきとり 山鳥 food photo', TABELOG_38001952, '食べログ'),
  '八勝亭オリエント 今治店': sourcePhoto('imabari-38000001-dish.jpg', '八勝亭オリエント 今治店の料理写真', '八勝亭オリエント 今治店 food photo', TABELOG_38000001, '食べログ'),
  'おでん屋 ふみ': sourcePhoto('imabari-38016736-dish.jpg', 'おでん屋 ふみの料理写真', 'おでん屋 ふみ food photo', TABELOG_38016736, '食べログ'),
  '千年の宴 今治東口駅前店': sourcePhoto('imabari-38001393-dish.jpg', '千年の宴 今治東口駅前店の料理写真', '千年の宴 今治東口駅前店 food photo', TABELOG_38001393, '食べログ'),
  '森見光洲園': sourcePhoto('imabari-38002151-dish.jpg', '森見光洲園の料理写真', '森見光洲園 food photo', TABELOG_38002151, '食べログ'),
  'ICHIE': sourcePhoto('imabari-38016271-dish.jpg', 'ICHIEの料理写真', 'ICHIE food photo', TABELOG_38016271, '食べログ'),
  '丸起 松本店': sourcePhoto('imabari-38016483-dish.jpg', '丸起 松本店の料理写真', '丸起 松本店 food photo', TABELOG_38016483, '食べログ'),
  'オーベルジュ': sourcePhoto('imabari-38008524-dish.jpg', 'オーベルジュの料理写真', 'オーベルジュ food photo', TABELOG_38008524, '食べログ'),
  "今治国際ホテル": sourcePhoto(
    "imabari-stay-kokusai.jpg",
    "今治国際ホテルの客室写真",
    "今治国際ホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/1036/1036.html",
    '楽天トラベル'
  ),
  "今治アーバンホテル": sourcePhoto(
    "imabari-stay-h1624.jpg",
    "今治アーバンホテルの客室写真",
    "今治アーバンホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/1624/1624.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ カドヤ別荘": sourcePhoto(
    "imabari-stay-h4738.jpg",
    "Ｔａｂｉｓｔ カドヤ別荘の客室写真",
    "Ｔａｂｉｓｔ カドヤ別荘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/4738/4738.html",
    '楽天トラベル'
  ),
  "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿": sourcePhoto(
    "imabari-stay-h7249.jpg",
    "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿の客室写真",
    "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿 room photo",
    "https://travel.rakuten.co.jp/HOTEL/7249/7249.html",
    '楽天トラベル'
  ),
  "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ）": sourcePhoto(
    "imabari-stay-h9047.jpg",
    "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ）の客室写真",
    "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/9047/9047.html",
    '楽天トラベル'
  ),
  "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ）": sourcePhoto(
    "imabari-stay-kikusui.jpg",
    "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ）の客室写真",
    "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ） room photo",
    "https://travel.rakuten.co.jp/HOTEL/10758/10758.html",
    '楽天トラベル'
  ),
  "ホテル七福": sourcePhoto(
    "imabari-stay-h12613.jpg",
    "ホテル七福の客室写真",
    "ホテル七福 room photo",
    "https://travel.rakuten.co.jp/HOTEL/12613/12613.html",
    '楽天トラベル'
  ),
  "今治プラザホテル": sourcePhoto(
    "imabari-stay-h13722.jpg",
    "今治プラザホテルの客室写真",
    "今治プラザホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/13722/13722.html",
    '楽天トラベル'
  ),
  "鈍川温泉 美賀登（みかど）": sourcePhoto(
    "imabari-stay-h13961.jpg",
    "鈍川温泉 美賀登（みかど）の客室写真",
    "鈍川温泉 美賀登（みかど） room photo",
    "https://travel.rakuten.co.jp/HOTEL/13961/13961.html",
    '楽天トラベル'
  ),
  "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉ": sourcePhoto(
    "imabari-stay-h18384.jpg",
    "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉの客室写真",
    "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉ room photo",
    "https://travel.rakuten.co.jp/HOTEL/18384/18384.html",
    '楽天トラベル'
  ),
  "米長旅館": sourcePhoto(
    "imabari-stay-ryokan.jpg",
    "米長旅館の客室写真",
    "米長旅館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/28080/28080.html",
    '楽天トラベル'
  ),
  "大潮荘": sourcePhoto(
    "imabari-stay-h69341.jpg",
    "大潮荘の客室写真",
    "大潮荘 room photo",
    "https://travel.rakuten.co.jp/HOTEL/69341/69341.html",
    '楽天トラベル'
  ),
  "ビジネス旅館 笑福": sourcePhoto(
    "imabari-stay-ryokan-2.jpg",
    "ビジネス旅館 笑福の客室写真",
    "ビジネス旅館 笑福 room photo",
    "https://travel.rakuten.co.jp/HOTEL/84931/84931.html",
    '楽天トラベル'
  ),
  "門田旅館": sourcePhoto(
    "imabari-stay-ryokan-3.jpg",
    "門田旅館の客室写真",
    "門田旅館 room photo",
    "https://travel.rakuten.co.jp/HOTEL/141390/141390.html",
    '楽天トラベル'
  ),
  "ゲストハウスオレンジの風 ＾": sourcePhoto(
    "imabari-stay-guesthouse.jpg",
    "ゲストハウスオレンジの風 ＾の客室写真",
    "ゲストハウスオレンジの風 ＾ room photo",
    "https://travel.rakuten.co.jp/HOTEL/169574/169574.html",
    '楽天トラベル'
  ),
  "結乃屋ＭＩＴＳＵＢＡＣＨＩ": sourcePhoto(
    "imabari-stay-h178305.jpg",
    "結乃屋ＭＩＴＳＵＢＡＣＨＩの客室写真",
    "結乃屋ＭＩＴＳＵＢＡＣＨＩ room photo",
    "https://travel.rakuten.co.jp/HOTEL/178305/178305.html",
    '楽天トラベル'
  ),
  "サウナ＆スパ・ホテル 喜助の宿 今治駅前店": sourcePhoto(
    "imabari-stay-h179035.jpg",
    "サウナ＆スパ・ホテル 喜助の宿 今治駅前店の客室写真",
    "サウナ＆スパ・ホテル 喜助の宿 今治駅前店 room photo",
    "https://travel.rakuten.co.jp/HOTEL/179035/179035.html",
    '楽天トラベル'
  ),
  "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク）": sourcePhoto(
    "imabari-stay-h180620.jpg",
    "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク）の客室写真",
    "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク） room photo",
    "https://travel.rakuten.co.jp/HOTEL/180620/180620.html",
    '楽天トラベル'
  ),
  "天然温泉 海道の湯 スーパーホテル今治": sourcePhoto(
    "imabari-stay-superhotel.jpg",
    "天然温泉 海道の湯 スーパーホテル今治の客室写真",
    "天然温泉 海道の湯 スーパーホテル今治 room photo",
    "https://travel.rakuten.co.jp/HOTEL/182375/182375.html",
    '楽天トラベル'
  ),
  "ＪＲクレメントイン今治": sourcePhoto(
    "imabari-stay-clement.jpg",
    "ＪＲクレメントイン今治の客室写真",
    "ＪＲクレメントイン今治 room photo",
    "https://travel.rakuten.co.jp/HOTEL/182564/182564.html",
    '楽天トラベル'
  ),
  "今治大成ホテル": sourcePhoto(
    "imabari-stay-h189285.jpg",
    "今治大成ホテルの客室写真",
    "今治大成ホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/189285/189285.html",
    '楽天トラベル'
  ),
  "レアレアリゾートヴィラかもいけ／民泊": sourcePhoto(
    "imabari-stay-h190149.jpg",
    "レアレアリゾートヴィラかもいけ／民泊の客室写真",
    "レアレアリゾートヴィラかもいけ／民泊 room photo",
    "https://travel.rakuten.co.jp/HOTEL/190149/190149.html",
    '楽天トラベル'
  ),
  "しまなみプライムホテル今治": sourcePhoto(
    "imabari-stay-h191553.jpg",
    "しまなみプライムホテル今治の客室写真",
    "しまなみプライムホテル今治 room photo",
    "https://travel.rakuten.co.jp/HOTEL/191553/191553.html",
    '楽天トラベル'
  ),
  "天然温泉「旅人の湯」ホテルルートイン今治": sourcePhoto(
    "imabari-stay-routeinn.jpg",
    "天然温泉「旅人の湯」ホテルルートイン今治の客室写真",
    "天然温泉「旅人の湯」ホテルルートイン今治 room photo",
    "https://travel.rakuten.co.jp/HOTEL/191656/191656.html",
    '楽天トラベル'
  ),
  "今治ステーションホテル": sourcePhoto(
    "imabari-stay-h191781.jpg",
    "今治ステーションホテルの客室写真",
    "今治ステーションホテル room photo",
    "https://travel.rakuten.co.jp/HOTEL/191781/191781.html",
    '楽天トラベル'
  ),
  "海宿千年松": sourcePhoto(
    "imabari-stay-h196522.jpg",
    "海宿千年松の客室写真",
    "海宿千年松 room photo",
    "https://travel.rakuten.co.jp/HOTEL/196522/196522.html",
    '楽天トラベル'
  ),
  "ＨＯＴＥＬ ＳＴＡＹ＋": sourcePhoto(
    "imabari-stay-h198931.jpg",
    "ＨＯＴＥＬ ＳＴＡＹ＋の客室写真",
    "ＨＯＴＥＬ ＳＴＡＹ＋ room photo",
    "https://travel.rakuten.co.jp/HOTEL/198931/198931.html",
    '楽天トラベル'
  ),
  "今治国際ホテル 今治温泉": sourcePhoto(
    "imabari-onsen-kokusai.jpg",
    "今治国際ホテル 今治温泉の写真",
    "今治国際ホテル 今治温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/1036/gallery.html",
    '楽天トラベル'
  ),
  "Ｔａｂｉｓｔ カドヤ別荘 美肌温泉": sourcePhoto(
    "imabari-onsen-h4738.jpg",
    "Ｔａｂｉｓｔ カドヤ別荘 美肌温泉の写真",
    "Ｔａｂｉｓｔ カドヤ別荘 美肌温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/4738/gallery.html",
    '楽天トラベル'
  ),
  "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿 大浴場": sourcePhoto(
    "imabari-onsen-h7249.jpg",
    "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿 大浴場の写真",
    "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/7249/gallery.html",
    '楽天トラベル'
  ),
  "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ） 大浴場": sourcePhoto(
    "imabari-onsen-h9047.jpg",
    "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ） 大浴場の写真",
    "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/9047/gallery.html",
    '楽天トラベル'
  ),
  "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ） 貸切風呂": sourcePhoto(
    "imabari-onsen-h10758.jpg",
    "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ） 貸切風呂の写真",
    "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ） 貸切風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/10758/gallery.html",
    '楽天トラベル'
  ),
  "ホテル七福 展望風呂": sourcePhoto(
    "imabari-onsen-h12613.jpg",
    "ホテル七福 展望風呂の写真",
    "ホテル七福 展望風呂 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/12613/gallery.html",
    '楽天トラベル'
  ),
  "鈍川温泉 美賀登（みかど） 大浴場": sourcePhoto(
    "imabari-onsen-h13961.jpg",
    "鈍川温泉 美賀登（みかど） 大浴場の写真",
    "鈍川温泉 美賀登（みかど） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/13961/gallery.html",
    '楽天トラベル'
  ),
  "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉ 大浴場": sourcePhoto(
    "imabari-onsen-h18384.jpg",
    "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉ 大浴場の写真",
    "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉ 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/18384/gallery.html",
    '楽天トラベル'
  ),
  "米長旅館 大浴場": sourcePhoto(
    "imabari-onsen-ryokan.jpg",
    "米長旅館 大浴場の写真",
    "米長旅館 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/28080/gallery.html",
    '楽天トラベル'
  ),
  "大潮荘 大浴場": sourcePhoto(
    "imabari-onsen-h69341.jpg",
    "大潮荘 大浴場の写真",
    "大潮荘 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/69341/gallery.html",
    '楽天トラベル'
  ),
  "ビジネス旅館 笑福 大浴場": sourcePhoto(
    "imabari-onsen-ryokan-2.jpg",
    "ビジネス旅館 笑福 大浴場の写真",
    "ビジネス旅館 笑福 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/84931/gallery.html",
    '楽天トラベル'
  ),
  "鈍川温泉 皆楽荘 温泉": sourcePhoto(
    "imabari-onsen-h108759.jpg",
    "鈍川温泉 皆楽荘 温泉の写真",
    "鈍川温泉 皆楽荘 温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/108759/gallery.html",
    '楽天トラベル'
  ),
  "門田旅館 鈍川温泉": sourcePhoto(
    "imabari-onsen-ryokan-3.jpg",
    "門田旅館 鈍川温泉の写真",
    "門田旅館 鈍川温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/141390/gallery.html",
    '楽天トラベル'
  ),
  "結乃屋ＭＩＴＳＵＢＡＣＨＩ 大浴場": sourcePhoto(
    "imabari-onsen-h178305.jpg",
    "結乃屋ＭＩＴＳＵＢＡＣＨＩ 大浴場の写真",
    "結乃屋ＭＩＴＳＵＢＡＣＨＩ 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/178305/gallery.html",
    '楽天トラベル'
  ),
  "サウナ＆スパ・ホテル 喜助の宿 今治駅前店 大浴場": sourcePhoto(
    "imabari-onsen-h179035.jpg",
    "サウナ＆スパ・ホテル 喜助の宿 今治駅前店 大浴場の写真",
    "サウナ＆スパ・ホテル 喜助の宿 今治駅前店 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/179035/gallery.html",
    '楽天トラベル'
  ),
  "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク） 大浴場": sourcePhoto(
    "imabari-onsen-h180620.jpg",
    "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク） 大浴場の写真",
    "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク） 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/180620/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉 海道の湯 スーパーホテル今治 今治の名湯": sourcePhoto(
    "imabari-onsen-superhotel.jpg",
    "天然温泉 海道の湯 スーパーホテル今治 今治の名湯の写真",
    "天然温泉 海道の湯 スーパーホテル今治 今治の名湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/182375/gallery.html",
    '楽天トラベル'
  ),
  "ＪＲクレメントイン今治 喜助の湯": sourcePhoto(
    "imabari-onsen-clement.jpg",
    "ＪＲクレメントイン今治 喜助の湯の写真",
    "ＪＲクレメントイン今治 喜助の湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/182564/gallery.html",
    '楽天トラベル'
  ),
  "しまなみプライムホテル今治 大浴場": sourcePhoto(
    "imabari-onsen-h191553.jpg",
    "しまなみプライムホテル今治 大浴場の写真",
    "しまなみプライムホテル今治 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/191553/gallery.html",
    '楽天トラベル'
  ),
  "天然温泉「旅人の湯」ホテルルートイン今治 大浴場": sourcePhoto(
    "imabari-onsen-routeinn.jpg",
    "天然温泉「旅人の湯」ホテルルートイン今治 大浴場の写真",
    "天然温泉「旅人の湯」ホテルルートイン今治 大浴場 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/191656/gallery.html",
    '楽天トラベル'
  ),
  "今治ステーションホテル 人工温泉": sourcePhoto(
    "imabari-onsen-h191781.jpg",
    "今治ステーションホテル 人工温泉の写真",
    "今治ステーションホテル 人工温泉 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/191781/gallery.html",
    '楽天トラベル'
  ),
  "海宿千年松 満天の湯": sourcePhoto(
    "imabari-onsen-h196522.jpg",
    "海宿千年松 満天の湯の写真",
    "海宿千年松 満天の湯 bath photo",
    "https://travel.rakuten.co.jp/HOTEL/196522/gallery.html",
    '楽天トラベル'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number | null, lon: number | null): FacilityRow {
  return {id, jis: IMABARI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: IMABARI.sources.accessed};
}

export const IMABARI_FACILITIES: readonly FacilityRow[] = [
  sight('imabari-sight-01', '今治城', '愛媛県今治市通町3', null, 'https://ja.wikipedia.org/wiki/%E4%BB%8A%E6%B2%BB%E5%9F%8E', 34.0633, 133.0068),
  sight('imabari-sight-02', '来島海峡大橋', '愛媛県今治市', null, 'https://ja.wikipedia.org/wiki/%E6%9D%A5%E5%B3%B6%E6%B5%B7%E5%B3%A1%E5%A4%A7%E6%A9%8B', 34.12055556, 132.9975),
  sight('imabari-sight-03', 'タオル美術館ICHIHIRO', '愛媛県今治市朝倉上甲2930番地', null, 'https://ja.wikipedia.org/wiki/%E3%82%BF%E3%82%AA%E3%83%AB%E7%BE%8E%E8%A1%93%E9%A4%A8ICHIHIRO', 33.9696759, 133.0330906),
  sight('imabari-sight-04', '大山祇神社', '愛媛県今治市大三島町宮浦3327番地', null, 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%B1%B1%E7%A5%87%E7%A5%9E%E7%A4%BE', 34.24788889, 133.00580556),
  sight('imabari-sight-05', '亀老山', '愛媛県今治市吉海町', null, 'https://ja.wikipedia.org/wiki/%E4%BA%80%E8%80%81%E5%B1%B1', 34.12027778, 133.03361111),
  sight('imabari-onsen-01', "今治国際ホテル 今治温泉", "愛媛県今治市旭町2-3-4", null, "https://travel.rakuten.co.jp/HOTEL/1036/gallery.html", null, null),
  sight('imabari-onsen-02', "Ｔａｂｉｓｔ カドヤ別荘 美肌温泉", "愛媛県今治市玉川町鈍川甲280", null, "https://travel.rakuten.co.jp/HOTEL/4738/gallery.html", null, null),
  sight('imabari-onsen-03', "湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿 大浴場", "愛媛県今治市湯ノ浦30番地", null, "https://travel.rakuten.co.jp/HOTEL/7249/gallery.html", null, null),
  sight('imabari-onsen-04', "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ） 大浴場", "愛媛県今治市北宝来町1-5-9", null, "https://travel.rakuten.co.jp/HOTEL/9047/gallery.html", null, null),
  sight('imabari-onsen-05', "ホテル菊水今治（Ｈｏｔｅｌ Ｋｉｋｕｓｕｉ Ｉｍａｂａｒｉ） 貸切風呂", "愛媛県今治市中浜町1-2-5", null, "https://travel.rakuten.co.jp/HOTEL/10758/gallery.html", null, null),
  sight('imabari-onsen-06', "ホテル七福 展望風呂", "愛媛県今治市片原町2-1-21", null, "https://travel.rakuten.co.jp/HOTEL/12613/gallery.html", null, null),
  sight('imabari-onsen-07', "鈍川温泉 美賀登（みかど） 大浴場", "愛媛県今治市玉川町鈍川庚773-1", null, "https://travel.rakuten.co.jp/HOTEL/13961/gallery.html", null, null),
  sight('imabari-onsen-08', "ＣＯＺＹ ＨＯＴＥＬ ＮＵＫＵＩ ｓｈｉｍａｎａｍｉ 大浴場", "愛媛県今治市中寺239-1", null, "https://travel.rakuten.co.jp/HOTEL/18384/gallery.html", null, null),
  sight('imabari-onsen-09', "米長旅館 大浴場", "愛媛県今治市常盤町1-1-4", null, "https://travel.rakuten.co.jp/HOTEL/28080/gallery.html", null, null),
  sight('imabari-onsen-10', "大潮荘 大浴場", "愛媛県今治市小浦町2-5-1", null, "https://travel.rakuten.co.jp/HOTEL/69341/gallery.html", null, null),
  sight('imabari-onsen-11', "ビジネス旅館 笑福 大浴場", "愛媛県今治市風早町2-1-16", null, "https://travel.rakuten.co.jp/HOTEL/84931/gallery.html", null, null),
  sight('imabari-onsen-12', "鈍川温泉 皆楽荘 温泉", "愛媛県今治市玉川町鈍川甲283", null, "https://travel.rakuten.co.jp/HOTEL/108759/gallery.html", null, null),
  sight('imabari-onsen-13', "門田旅館 鈍川温泉", "愛媛県今治市玉川町鈍川庚772-5", null, "https://travel.rakuten.co.jp/HOTEL/141390/gallery.html", null, null),
  sight('imabari-onsen-14', "結乃屋ＭＩＴＳＵＢＡＣＨＩ 大浴場", "愛媛県今治市吉海町南浦825-1", null, "https://travel.rakuten.co.jp/HOTEL/178305/gallery.html", null, null),
  sight('imabari-onsen-15', "サウナ＆スパ・ホテル 喜助の宿 今治駅前店 大浴場", "愛媛県今治市中日吉町1-2-30", null, "https://travel.rakuten.co.jp/HOTEL/179035/gallery.html", null, null),
  sight('imabari-onsen-16', "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク） 大浴場", "愛媛県今治市馬島1006", null, "https://travel.rakuten.co.jp/HOTEL/180620/gallery.html", null, null),
  sight('imabari-onsen-17', "天然温泉 海道の湯 スーパーホテル今治 今治の名湯", "愛媛県今治市松本町4-6-10", null, "https://travel.rakuten.co.jp/HOTEL/182375/gallery.html", null, null),
  sight('imabari-onsen-18', "ＪＲクレメントイン今治 喜助の湯", "愛媛県今治市北宝来町2丁目甲773-9", null, "https://travel.rakuten.co.jp/HOTEL/182564/gallery.html", null, null),
  sight('imabari-onsen-19', "しまなみプライムホテル今治 大浴場", "愛媛県今治市常盤町4-6-10", null, "https://travel.rakuten.co.jp/HOTEL/191553/gallery.html", null, null),
  sight('imabari-onsen-20', "天然温泉「旅人の湯」ホテルルートイン今治 大浴場", "愛媛県今治市馬越町3-3-15", null, "https://travel.rakuten.co.jp/HOTEL/191656/gallery.html", null, null),
  sight('imabari-onsen-21', "今治ステーションホテル 人工温泉", "愛媛県今治市北宝来町2-2-23", null, "https://travel.rakuten.co.jp/HOTEL/191781/gallery.html", null, null),
  sight('imabari-onsen-22', "海宿千年松 満天の湯", "愛媛県今治市吉海町名駒25", null, "https://travel.rakuten.co.jp/HOTEL/196522/gallery.html", null, null),
];
