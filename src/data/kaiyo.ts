/**
 * Kaiyo Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07) and the frozen pack (JIS 36388).
 * Do not mix 牟岐 / 美波 / 那賀 / 佐那河内 / 上勝 / 勝浦 / 神山 / 上板 / 板野 / 石井 / 藍住 / 松茂 / 北島 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const KAIYO = {
  nameJa: '海陽町',
  nameEn: 'Kaiyo Town',
  reading: 'かいようちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'kaiyo',
  jis: '36388',
  jlis: '363880',
  sameAs: 'https://www.town.kaiyo.lg.jp/',
  hall: {
    postalCode: '775-0295',
    addressJa: '徳島県海部郡海陽町大里字上中須128',
    addressEn: '128 Kaminakasu, Osato, Kaiyo, Kaifu District, Tokushima 775-0295, Japan',
    phone: '0884-73-1234'
  },
  sources: {
    home: 'https://www.town.kaiyo.lg.jp/',
    hall: 'https://www.town.kaiyo.lg.jp/docs/2011041300637/',
    kanko: 'https://www.town.kaiyo.lg.jp/docs/2024082800028/',
    accessed: '2026-09-09'
  }
} as const;

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

/** Cover: File:漁火の森公園_遊歩道より_-_panoramio.jpg — 漁火の森公園. Not 牟岐 / 美波 / 那賀. */
export const KAIYO_PLACE_PHOTO = wikiPhoto(
  'isarinomori-kaiyo.jpg',
  'https://commons.wikimedia.org/wiki/File:%E6%BC%81%E7%81%AB%E3%81%AE%E6%A3%AE%E5%85%AC%E5%9C%92_%E9%81%8A%E6%AD%A9%E9%81%93%E3%82%88%E3%82%8A_-_panoramio.jpg',
  'CC BY 3.0',
  'https://creativecommons.org/licenses/by/3.0/',
  'akiakane',
  'https://www.panoramio.com/user/2285547',
  '2011-12-27',
  '漁火の森公園の遊歩道より（海陽町）',
  'Isarino-mori Park walkway view, Kaiyo Town'
);

const TABELOG_36004755 = 'https://tabelog.com/tokushima/A3602/A360204/36004755/';
const TABELOG_36000074 = 'https://tabelog.com/tokushima/A3602/A360204/36000074/';
const TABELOG_36004397 = 'https://tabelog.com/tokushima/A3602/A360204/36004397/';
const TABELOG_36000079 = 'https://tabelog.com/tokushima/A3602/A360204/36000079/';
const TABELOG_36000988 = 'https://tabelog.com/tokushima/A3602/A360204/36000988/';
const TABELOG_36003999 = 'https://tabelog.com/tokushima/A3602/A360204/36003999/';
const TABELOG_36000571 = 'https://tabelog.com/tokushima/A3602/A360204/36000571/';
const TABELOG_36007333 = 'https://tabelog.com/tokushima/A3602/A360204/36007333/';
const TABELOG_36006408 = 'https://tabelog.com/tokushima/A3602/A360204/36006408/';
const TABELOG_36002916 = 'https://tabelog.com/tokushima/A3602/A360204/36002916/';
const TABELOG_36007487 = 'https://tabelog.com/tokushima/A3602/A360204/36007487/';
const TABELOG_36003554 = 'https://tabelog.com/tokushima/A3602/A360204/36003554/';
const TABELOG_36007603 = 'https://tabelog.com/tokushima/A3602/A360204/36007603/';
const TABELOG_36000769 = 'https://tabelog.com/tokushima/A3602/A360204/36000769/';
const TABELOG_36003487 = 'https://tabelog.com/tokushima/A3602/A360204/36003487/';
const TABELOG_36007003 = 'https://tabelog.com/tokushima/A3602/A360204/36007003/';
const TABELOG_36000986 = 'https://tabelog.com/tokushima/A3602/A360204/36000986/';
const TABELOG_36000609 = 'https://tabelog.com/tokushima/A3602/A360204/36000609/';
const TABELOG_36004753 = 'https://tabelog.com/tokushima/A3602/A360204/36004753/';

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const KAIYO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '海陽町漁火の森公園施設': KAIYO_PLACE_PHOTO,
  '阿波海南文化村': wikiPhoto(
    'awakainan-bunkamura-kaiyo.jpg',
    'https://commons.wikimedia.org/wiki/File:Awakainan-bunkamura-bunkamura-20250823.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Rsa',
    'https://commons.wikimedia.org/wiki/User:Rsa',
    '2025-08-23',
    '阿波海南文化村（海陽町）',
    'Awa-Kainan Cultural Village, Kaiyo Town'
  ),
  '宍喰浦の化石漣痕': wikiPhoto(
    'shishikui-kasekirenkon-kaiyo.jpg',
    'https://commons.wikimedia.org/wiki/File:Sisikui-kasekirenkon.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2017-08-09',
    '宍喰浦の化石漣痕（海陽町）',
    'Fossil ripple marks at Shishikui-ura, Kaiyo Town'
  ),
  '海陽町宍喰観光ターミナル（道の駅宍喰温泉）': wikiPhoto(
    'michinoeki-shishikui-kaiyo.jpg',
    'https://commons.wikimedia.org/wiki/File:R55%E9%81%93%E3%81%AE%E9%A7%85%E5%AE%8D%E5%96%B0%E6%B8%A9%E6%B3%89.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami',
    'https://commons.wikimedia.org/wiki/File:R55%E9%81%93%E3%81%AE%E9%A7%85%E5%AE%8D%E5%96%B0%E6%B8%A9%E6%B3%89.jpg',
    '2010',
    '道の駅宍喰温泉（海陽町）',
    'Michinoeki Shishikui Onsen, Kaiyo Town'
  ),
  '轟九十九滝': wikiPhoto(
    'kaiyo-todoroki-falls.jpg',
    'https://commons.wikimedia.org/wiki/File:Todoroki_Watefalls_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-05-09',
    '轟九十九滝（海陽町）',
    'Todoroki 99 Waterfalls, Kaiyo Town'
  ),
  '海陽町海洋自然博物館マリンジャム': wikiPhoto(
    'kaiyo-marine-jam.jpg',
    'https://commons.wikimedia.org/wiki/File:Marine_jam_outeior.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    '運動会プロテインパワー',
    'https://commons.wikimedia.org/wiki/File:Marine_jam_outeior.jpg',
    '2023-08',
    '海陽町海洋自然博物館マリンジャム外観（海陽町）',
    'Kaiyo Marine Nature Museum Marine Jam exterior'
  ),
  '大砂海岸': wikiPhoto(
    'kaiyo-oosuna-beach.jpg',
    'https://commons.wikimedia.org/wiki/File:Oosuna_beach_-_%E5%A4%A7%E7%A0%82%E6%B5%B7%E5%B2%B8_-_panoramio.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'yano@mama.akari.ne.jp',
    'https://web.archive.org/web/20161029110233/http://www.panoramio.com/user/5198788',
    '2011-08-11',
    '大砂海岸（海陽町）',
    'Oosuna Beach, Kaiyo Town'
  ),
  "味政": sourcePhoto(
    'kaiyo-36004755-dish.jpg',
    "味政の料理写真",
    "味政 food photo",
    TABELOG_36004755,
    '食べログ'
  ),
  "ひこうせん": sourcePhoto(
    'kaiyo-36000074-dish.jpg',
    "ひこうせんの料理写真",
    "ひこうせん food photo",
    TABELOG_36000074,
    '食べログ'
  ),
  "ホテルリビエラししくい レストランベガ": sourcePhoto(
    'kaiyo-36004397-dish.jpg',
    "ホテルリビエラししくい レストランベガの料理写真",
    "ホテルリビエラししくい レストランベガ food photo",
    TABELOG_36004397,
    '食べログ'
  ),
  "のなみ": sourcePhoto(
    'kaiyo-36000079-dish.jpg',
    "のなみの料理写真",
    "のなみ food photo",
    TABELOG_36000079,
    '食べログ'
  ),
  "カピタン": sourcePhoto(
    'kaiyo-36000988-dish.jpg',
    "カピタンの料理写真",
    "カピタン food photo",
    TABELOG_36000988,
    '食べログ'
  ),
  "笑舌": sourcePhoto(
    'kaiyo-36003999-dish.jpg',
    "笑舌の料理写真",
    "笑舌 food photo",
    TABELOG_36003999,
    '食べログ'
  ),
  "ももや食堂": sourcePhoto(
    'kaiyo-36000571-dish.jpg',
    "ももや食堂の料理写真",
    "ももや食堂 food photo",
    TABELOG_36000571,
    '食べログ'
  ),
  "遊遊NASA": sourcePhoto(
    'kaiyo-36007333-dish.jpg',
    "遊遊NASAの料理写真",
    "遊遊NASA food photo",
    TABELOG_36007333,
    '食べログ'
  ),
  "道の駅 宍喰温泉": sourcePhoto(
    'kaiyo-36006408-dish.jpg',
    "道の駅 宍喰温泉の料理写真",
    "道の駅 宍喰温泉 food photo",
    TABELOG_36006408,
    '食べログ'
  ),
  "海賊の家": sourcePhoto(
    'kaiyo-36002916-dish.jpg',
    "海賊の家の料理写真",
    "海賊の家 food photo",
    TABELOG_36002916,
    '食べログ'
  ),
  "パン デ パパ": sourcePhoto(
    'kaiyo-36007487-dish.jpg',
    "パン デ パパの料理写真",
    "パン デ パパ food photo",
    TABELOG_36007487,
    '食べログ'
  ),
  "豚皇  那佐店": sourcePhoto(
    'kaiyo-36003554-dish.jpg',
    "豚皇  那佐店の料理写真",
    "豚皇  那佐店 food photo",
    TABELOG_36003554,
    '食べログ'
  ),
  "ホウライドウ ピアカイフ店": sourcePhoto(
    'kaiyo-36007603-dish.jpg',
    "ホウライドウ ピアカイフ店の料理写真",
    "ホウライドウ ピアカイフ店 food photo",
    TABELOG_36007603,
    '食べログ'
  ),
  "さばせ大福": sourcePhoto(
    'kaiyo-36000769-dish.jpg',
    "さばせ大福の料理写真",
    "さばせ大福 food photo",
    TABELOG_36000769,
    '食べログ'
  ),
  "Le Perle": sourcePhoto(
    'kaiyo-36003487-dish.jpg',
    "Le Perleの料理写真",
    "Le Perle food photo",
    TABELOG_36003487,
    '食べログ'
  ),
  "レックス カフェ": sourcePhoto(
    'kaiyo-36007003-dish.jpg',
    "レックス カフェの料理写真",
    "レックス カフェ food photo",
    TABELOG_36007003,
    '食べログ'
  ),
  "陽錦楼": sourcePhoto(
    'kaiyo-36000986-dish.jpg',
    "陽錦楼の料理写真",
    "陽錦楼 food photo",
    TABELOG_36000986,
    '食べログ'
  ),
  "バハティ": sourcePhoto(
    'kaiyo-36000609-dish.jpg',
    "バハティの料理写真",
    "バハティ food photo",
    TABELOG_36000609,
    '食べログ'
  ),
  "宝来堂": sourcePhoto(
    'kaiyo-36004753-dish.jpg',
    "宝来堂の料理写真",
    "宝来堂 food photo",
    TABELOG_36004753,
    '食べログ'
  ),
  '宍喰温泉 ホテルリビエラししくい': sourcePhoto(
    'kaiyo-stay-01.jpg',
    '宍喰温泉 ホテルリビエラししくいの客室写真',
    'Hotel Riviera Shishikui room photo',
    'https://travel.rakuten.co.jp/HOTEL/8721/8721.html',
    '楽天トラベル'
  ),
  'ふれあいの宿 遊遊NASA': sourcePhoto(
    'kaiyo-stay-02.jpg',
    'ふれあいの宿 遊遊NASAの客室写真',
    'Yuyu NASA room photo',
    'https://travel.rakuten.co.jp/HOTEL/128443/128443.html',
    '楽天トラベル'
  ),
  'ホテルかいふ & 4stone': sourcePhoto(
    'kaiyo-stay-03.jpg',
    'ホテルかいふ & 4stoneの客室写真',
    'Hotel Kaifu & 4stone room photo',
    'https://travel.rakuten.co.jp/HOTEL/193362/193362.html',
    '楽天トラベル'
  ),
  'ペンション ししくい': sourcePhoto(
    'kaiyo-stay-04.jpg',
    'ペンション ししくいの客室写真',
    'Pension Shishikui room photo',
    'https://travel.rakuten.co.jp/HOTEL/20625/20625.html',
    '楽天トラベル'
  ),
  'はるる亭': sourcePhoto(
    'kaiyo-stay-05.jpg',
    'はるる亭の客室写真',
    'Haruru-tei room photo',
    'https://travel.rakuten.co.jp/HOTEL/179334/179334.html',
    '楽天トラベル'
  ),
  '民宿大砂': sourcePhoto(
    'kaiyo-stay-06.jpg',
    '民宿大砂の客室写真',
    'Minshuku Osuna room photo',
    'https://travel.rakuten.co.jp/HOTEL/144988/144988.html',
    '楽天トラベル'
  ),
  '星降る別邸WANASA': sourcePhoto(
    'kaiyo-stay-07.jpg',
    '星降る別邸WANASAの客室写真',
    'Hoshifuru Bettei WANASA room photo',
    'https://travel.rakuten.co.jp/HOTEL/191825/191825.html',
    '楽天トラベル'
  ),
  'ドッグランピングSUIYA': sourcePhoto(
    'kaiyo-stay-08.jpg',
    'ドッグランピングSUIYAの客室写真',
    'Dog Glamping SUIYA room photo',
    'https://travel.rakuten.co.jp/HOTEL/199057/199057.html',
    '楽天トラベル'
  ),
  'PRIVATE STAY HANARE': sourcePhoto(
    'kaiyo-stay-09.jpg',
    'PRIVATE STAY HANAREの客室写真',
    'PRIVATE STAY HANARE room photo',
    'https://travel.rakuten.co.jp/HOTEL/199806/199806.html',
    '楽天トラベル'
  ),
  'ゲストハウス ふくちゃん': sourcePhoto(
    'kaiyo-stay-10.jpg',
    'ゲストハウス ふくちゃんの客室写真',
    'Guest House Fukuchan room photo',
    'https://travel.rakuten.co.jp/HOTEL/178487/178487.html',
    '楽天トラベル'
  ),
  '宍喰温泉 ホテルリビエラししくい 展望大浴場': sourcePhoto(
    'kaiyo-onsen-riviera.jpg',
    '宍喰温泉 ホテルリビエラししくいの展望大浴場写真',
    'Hotel Riviera Shishikui observatory bath photo',
    'https://travel.rakuten.co.jp/HOTEL/8721/8721.html',
    '楽天トラベル'
  ),
  'ふれあいの宿 遊遊NASA なさ地呂温泉': sourcePhoto(
    'kaiyo-onsen-yuyu.jpg',
    'ふれあいの宿 遊遊NASAのなさ地呂温泉写真',
    'Yuyu NASA Nasa-jiro onsen bath photo',
    'https://travel.rakuten.co.jp/HOTEL/128443/128443.html',
    '楽天トラベル'
  ),
  'はるる亭 温泉': sourcePhoto(
    'kaiyo-onsen-haruru.jpg',
    'はるる亭の温泉写真',
    'Haruru-tei onsen bath photo',
    'https://travel.rakuten.co.jp/HOTEL/179334/179334.html',
    '楽天トラベル'
  ),

};
