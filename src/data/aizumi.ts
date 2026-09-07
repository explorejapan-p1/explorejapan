/**
 * Aizumi Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07) and the frozen pack (JIS 36403).
 * Do not mix 板野 / 上板 / 北島 / 松茂 / 石井 / 那賀 / 牟岐 / 美波 / 海陽 / 鳴門 / 徳島市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const AIZUMI = {
  nameJa: '藍住町',
  nameEn: 'Aizumi Town',
  reading: 'あいずみちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'aizumi',
  jis: '36403',
  jlis: '364037',
  sameAs: 'https://www.town.aizumi.lg.jp/',
  hall: {
    postalCode: '771-1292',
    addressJa: '徳島県板野郡藍住町奥野字矢上前52-1',
    addressEn: '52-1 Yagami-mae, Okuno, Aizumi, Itano District, Tokushima 771-1292, Japan',
    phone: '088-637-3111'
  },
  sources: {
    home: 'https://www.town.aizumi.lg.jp/',
    hall: 'https://www.town.aizumi.lg.jp/',
    kanko: 'https://www.town.aizumi.lg.jp/docs/2014012100052/',
    accessed: '2026-09-07'
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

/** Cover: File:正法寺川公園.jpeg — famous scenic (bridge). Not 板野 / 北島. */
export const AIZUMI_PLACE_PHOTO = wikiPhoto(
  'shoboji-gawa-park-aizumi.jpg',
  'https://commons.wikimedia.org/wiki/File:%E6%AD%A3%E6%B3%95%E5%AF%BA%E5%B7%9D%E5%85%AC%E5%9C%92.jpeg',
  'CC0',
  'https://creativecommons.org/publicdomain/zero/1.0/',
  'Sorrysorry',
  'https://commons.wikimedia.org/wiki/User:Sorrysorry',
  '2022-07-01',
  '正法寺川公園（藍住町）',
  'Shōbōji River Park, Aizumi Town'
);

const TABELOG_36005889 = "https://tabelog.com/tokushima/A3603/A360303/36005889/";
const TABELOG_36000414 = "https://tabelog.com/tokushima/A3603/A360303/36000414/";
const TABELOG_36008594 = "https://tabelog.com/tokushima/A3603/A360303/36008594/";
const TABELOG_36009180 = "https://tabelog.com/tokushima/A3603/A360303/36009180/";
const TABELOG_36008638 = "https://tabelog.com/tokushima/A3603/A360303/36008638/";
const TABELOG_36005380 = "https://tabelog.com/tokushima/A3603/A360303/36005380/";
const TABELOG_36000041 = "https://tabelog.com/tokushima/A3603/A360303/36000041/";
const TABELOG_36002839 = "https://tabelog.com/tokushima/A3603/A360303/36002839/";
const TABELOG_36008892 = "https://tabelog.com/tokushima/A3603/A360303/36008892/";
const TABELOG_36008303 = "https://tabelog.com/tokushima/A3603/A360303/36008303/";
const TABELOG_36005704 = "https://tabelog.com/tokushima/A3603/A360303/36005704/";
const TABELOG_36003626 = "https://tabelog.com/tokushima/A3603/A360303/36003626/";
const TABELOG_36008990 = "https://tabelog.com/tokushima/A3603/A360303/36008990/";
const TABELOG_36008972 = "https://tabelog.com/tokushima/A3603/A360303/36008972/";
const TABELOG_36008663 = "https://tabelog.com/tokushima/A3603/A360303/36008663/";
const TABELOG_36007843 = "https://tabelog.com/tokushima/A3603/A360303/36007843/";

/** Exact pack/travel name_ja only. Place-named Commons for tourism; Tabelog FOOD for dining. */
export const AIZUMI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '歴史館「藍の館」': wikiPhoto(
    'aizumi-ai-no-yakata.jpg',
    'https://commons.wikimedia.org/wiki/File:Aizumi_Ai_no_Yakata.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Tamago915',
    'https://commons.wikimedia.org/wiki/User:Tamago915',
    '2007-05-04',
    '歴史館「藍の館」（藍住町）',
    'Aizumi Town History Museum Ai-no-Yakata'
  ),
  '正法寺川公園': AIZUMI_PLACE_PHOTO,
  'バラ園': wikiPhoto(
    'aizumi-baraen.jpg',
    'https://commons.wikimedia.org/wiki/File:Aizumicho_Baraen.jpeg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2019-05-05',
    '藍住町バラ園',
    'Aizumi Town Rose Garden'
  ),
  '史跡公園': wikiPhoto(
    'shozui-jo-aizumi.jpg',
    'https://commons.wikimedia.org/wiki/File:Shozuijo14.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'ブレイズマン',
    'https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AC%E3%82%A4%E3%82%BA%E3%83%9E%E3%83%B3',
    '2010-02-23',
    '勝瑞城館跡・池庭跡（史跡公園・藍住町）',
    'Shozui Castle site pond garden, Aizumi Town'
  ),
  '勝瑞城館跡': wikiPhoto(
    'shozui-jo-aizumi.jpg',
    'https://commons.wikimedia.org/wiki/File:Shozuijo14.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'ブレイズマン',
    'https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AC%E3%82%A4%E3%82%BA%E3%83%9E%E3%83%B3',
    '2010-02-23',
    '勝瑞城館跡（藍住町）',
    'Shozui Castle ruins, Aizumi Town'
  ),
  '東中富桜づつみ公園': wikiPhoto(
    'higashinakatomi-sakuradutsumi-aizumi.jpg',
    'https://commons.wikimedia.org/wiki/File:Higasinakatomi-Sakuradutumi-Park.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-03-27',
    '東中富桜づつみ公園（藍住町）',
    'Higashinakatomi Sakuradutsumi Park, Aizumi Town'
  ),
  '東中富親水公園': wikiPhoto(
    'higashinakatomi-shinsui-aizumi.jpg',
    'https://commons.wikimedia.org/wiki/File:Higasinakatomi-Park.jpeg',
    'CC0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-03-27',
    '東中富親水公園（藍住町）',
    'Higashinakatomi Waterside Park, Aizumi Town'
  ),

  "牛骨らぁめん 牛若": sourcePhoto(
    "aizumi-36005889-dish.jpg",
    "牛骨らぁめん 牛若の料理写真",
    "牛骨らぁめん 牛若 food photo",
    TABELOG_36005889,
    '食べログ'
  ),
  "やきとりの扇屋 徳島藍住店": sourcePhoto(
    "aizumi-36000414-dish.jpg",
    "やきとりの扇屋 徳島藍住店の料理写真",
    "やきとりの扇屋 徳島藍住店 food photo",
    TABELOG_36000414,
    '食べログ'
  ),
  "徳島らぁ麺 堂の浦 藍住店": sourcePhoto(
    "aizumi-36008594-dish.jpg",
    "徳島らぁ麺 堂の浦 藍住店の料理写真",
    "徳島らぁ麺 堂の浦 藍住店 food photo",
    TABELOG_36008594,
    '食べログ'
  ),
  "松のや 藍住店": sourcePhoto(
    "aizumi-36009180-dish.jpg",
    "松のや 藍住店の料理写真",
    "松のや 藍住店 food photo",
    TABELOG_36009180,
    '食べログ'
  ),
  "阿波焼肉 牛藍": sourcePhoto(
    "aizumi-36008638-dish.jpg",
    "阿波焼肉 牛藍の料理写真",
    "阿波焼肉 牛藍 food photo",
    TABELOG_36008638,
    '食べログ'
  ),
  "赤から 徳島藍住店": sourcePhoto(
    "aizumi-36005380-dish.jpg",
    "赤から 徳島藍住店の料理写真",
    "赤から 徳島藍住店 food photo",
    TABELOG_36005380,
    '食べログ'
  ),
  "みのり": sourcePhoto(
    "aizumi-36000041-dish.jpg",
    "みのりの料理写真",
    "みのり food photo",
    TABELOG_36000041,
    '食べログ'
  ),
  "竹とんぼ": sourcePhoto(
    "aizumi-36002839-dish.jpg",
    "竹とんぼの料理写真",
    "竹とんぼ food photo",
    TABELOG_36002839,
    '食べログ'
  ),
  "炭火焼 雅": sourcePhoto(
    "aizumi-36008892-dish.jpg",
    "炭火焼 雅の料理写真",
    "炭火焼 雅 food photo",
    TABELOG_36008892,
    '食べログ'
  ),
  "TABEGORO BENTO": sourcePhoto(
    "aizumi-36008303-dish.jpg",
    "TABEGORO BENTOの料理写真",
    "TABEGORO BENTO food photo",
    TABELOG_36008303,
    '食べログ'
  ),
  "リュスティック": sourcePhoto(
    "aizumi-36005704-dish.jpg",
    "リュスティックの料理写真",
    "リュスティック food photo",
    TABELOG_36005704,
    '食べログ'
  ),
  "萬坊食楽喜酒": sourcePhoto(
    "aizumi-36003626-dish.jpg",
    "萬坊食楽喜酒の料理写真",
    "萬坊食楽喜酒 food photo",
    TABELOG_36003626,
    '食べログ'
  ),
  "ろくキッチン": sourcePhoto(
    "aizumi-36008990-dish.jpg",
    "ろくキッチンの料理写真",
    "ろくキッチン food photo",
    TABELOG_36008990,
    '食べログ'
  ),
  "SIScone": sourcePhoto(
    "aizumi-36008972-dish.jpg",
    "SISconeの料理写真",
    "SIScone food photo",
    TABELOG_36008972,
    '食べログ'
  ),
  "銀座コージーコーナー ゆめタウン徳島店": sourcePhoto(
    "aizumi-36008663-dish.jpg",
    "銀座コージーコーナー ゆめタウン徳島店の料理写真",
    "銀座コージーコーナー ゆめタウン徳島店 food photo",
    TABELOG_36008663,
    '食べログ'
  ),
  "日本料理 季季": sourcePhoto(
    "aizumi-36007843-dish.jpg",
    "日本料理 季季の料理写真",
    "日本料理 季季 food photo",
    TABELOG_36007843,
    '食べログ'
  ),
  '宿はグッドリッチ 藍住': sourcePhoto(
    'aizumi-stay-01.jpg',
    '宿はグッドリッチ 藍住の客室・外観写真',
    'Yado wa Goodrich Aizumi room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/180561/180561.html',
    '楽天トラベル'
  ),

};
