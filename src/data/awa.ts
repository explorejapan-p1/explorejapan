/**
 * Awa City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-05) and the frozen pack (JIS 36206).
 * Do not mix 東みよし町 (36489) or 徳島市 / 三好市 Files.
 */
import type {MimaPlacePhoto} from './mima';

export const AWA = {
  nameJa: '阿波市',
  nameEn: 'Awa',
  reading: 'あわし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'awa',
  jis: '36206',
  jlis: '362069',
  sameAs: 'https://www.city.awa.lg.jp/',
  hall: {
    postalCode: '771-1695',
    addressJa: '徳島県阿波市市場町切幡字古田201番地1',
    addressEn: '201-1 Furuta, Kirihata, Ichiba-cho, Awa, Tokushima 771-1695, Japan',
    phone: '0883-36-8700'
  },
  sources: {
    home: 'https://www.city.awa.lg.jp/',
    hall: 'https://www.city.awa.lg.jp/docs/2014032600037/',
    kanko: 'https://www.city.awa.lg.jp/category/bunya/kanko/',
    accessed: '2026-09-05'
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
    accessed: '2026-09-05',
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
    accessed: '2026-09-05',
    altJa,
    altEn
  };
}

/** Cover: File:Awa no dotyuu 20220822 1.jpg — 阿波の土柱, Awa City. Not Bizan / Oboke. */
export const AWA_PLACE_PHOTO = wikiPhoto(
  'awa-no-dochu.jpg',
  'https://commons.wikimedia.org/wiki/File:Awa_no_dotyuu_20220822_1.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Araiyasushige',
  'https://commons.wikimedia.org/wiki/User:Araiyasushige',
  '2022-08-22',
  '阿波の土柱（阿波市）',
  'Awa-no-Dochū earth pillars, Awa City'
);

const TABELOG_YOMOSUGARA = 'https://tabelog.com/tokushima/A3603/A360301/36008944/';
const TABELOG_EI = 'https://tabelog.com/tokushima/A3603/A360301/36002270/';
const TABELOG_TORIYOSHI = 'https://tabelog.com/tokushima/A3603/A360301/36001133/';
const TABELOG_TATEISHI = 'https://tabelog.com/tokushima/A3603/A360301/36003425/';
const TABELOG_TOKI = 'https://tabelog.com/tokushima/A3603/A360301/36002731/';
const TABELOG_SHANOMORI = 'https://tabelog.com/tokushima/A3603/A360301/36004926/';
const TABELOG_HANAUTA = 'https://tabelog.com/tokushima/A3603/A360301/36001287/';
const TABELOG_TENKICHI = 'https://tabelog.com/tokushima/A3603/A360301/36001601/';

/** Exact pack/travel name_ja only. No 美馬 / つるぎ / 吉野川 / 三好 / 徳島市 photos. */
export const AWA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '阿波の土柱': AWA_PLACE_PHOTO,
  '阿波の土柱 国の天然記念物': wikiPhoto(
    'awa-dochu-dokudami.jpg',
    'https://commons.wikimedia.org/wiki/File:Dotyu20220820_1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-08-20',
    '阿波の土柱（阿波市・国の天然記念物）',
    'Awa-no-Dochū national natural monument, Awa'
  ),
  '切幡寺大塔': wikiPhoto(
    'kirihata-ji-pagoda.jpg',
    'https://commons.wikimedia.org/wiki/File:Kirihata-ji,_Two-storied_Pagoda_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-06-04',
    '切幡寺 多宝塔（阿波市市場町）',
    'Kirihata-ji pagoda, Ichiba-cho, Awa'
  ),
  '第10番札所 切幡寺': wikiPhoto(
    'kirihata-ji-hondo.jpg',
    'https://commons.wikimedia.org/wiki/File:Kirihata-ji,_Main_Hall_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-06-04',
    '切幡寺 本堂（阿波市市場町）',
    'Kirihata-ji main hall, Ichiba-cho, Awa'
  ),
  '熊谷寺仁王門': wikiPhoto(
    'kumadani-ji-niomon.jpg',
    'https://commons.wikimedia.org/wiki/File:Kumataniji_02.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-04-18',
    '熊谷寺 山門の仁王（阿波市土成町）',
    'Kumadani-ji Niō gate figure, Donari-cho, Awa'
  ),
  '第8番札所 熊谷寺': wikiPhoto(
    'kumadani-ji-hondo.jpg',
    'https://commons.wikimedia.org/wiki/File:Kumadani-ji,_Main_Hall_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-06-04',
    '熊谷寺 本堂（阿波市土成町）',
    'Kumadani-ji main hall, Donari-cho, Awa'
  ),
  '第7番札所 十楽寺': wikiPhoto(
    'juraku-ji-chozuya.jpg',
    'https://commons.wikimedia.org/wiki/File:J%C5%ABraku-ji,_Chozuya_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-05-05',
    '十楽寺 手水舎（阿波市土成町）',
    'Jūraku-ji temizuya, Donari-cho, Awa'
  ),
  '第9番札所 法輪寺': wikiPhoto(
    'horin-ji-hondo.jpg',
    'https://commons.wikimedia.org/wiki/File:H%C5%8Drin-ji,_Main_Hall_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-06-04',
    '法輪寺 本堂（阿波市土成町）',
    'Hōrin-ji main hall, Donari-cho, Awa'
  ),
  'Cafe ヨモスガラ': sourcePhoto(
    'cafe-yomosugara-hamburg.jpg',
    'Cafe ヨモスガラの料理写真',
    'Cafe Yomosugara food photo',
    TABELOG_YOMOSUGARA,
    '食べログ'
  ),
  '英': sourcePhoto(
    'ei-dish.jpg',
    '英の料理写真',
    'Ei food photo',
    TABELOG_EI,
    '食べログ'
  ),
  '焼鳥鳥吉': sourcePhoto(
    'yakitori-toriyoshi-dish.jpg',
    '焼鳥鳥吉の料理写真',
    'Yakitori Toriyoshi food photo',
    TABELOG_TORIYOSHI,
    '食べログ'
  ),
  'タテイシ': sourcePhoto(
    'tateishi-dish.jpg',
    'タテイシの料理写真',
    'Tateishi food photo',
    TABELOG_TATEISHI,
    '食べログ'
  ),
  'とき': sourcePhoto(
    'toki-dish.jpg',
    'ときの料理写真',
    'Toki food photo',
    TABELOG_TOKI,
    '食べログ'
  ),
  '御所 社乃森': sourcePhoto(
    'gosho-shanomori-dish.jpg',
    '御所 社乃森の料理写真',
    'Gosho Shanomori food photo',
    TABELOG_SHANOMORI,
    '食べログ'
  ),
  '花詩': sourcePhoto(
    'hanauta-dish.jpg',
    '花詩の料理写真',
    'Hanauta food photo',
    TABELOG_HANAUTA,
    '食べログ'
  ),
  '天吉うどん 阿波店': sourcePhoto(
    'tenkichi-udon-dish.jpg',
    '天吉うどん 阿波店の料理写真',
    'Tenkichi Udon Awa shop food photo',
    TABELOG_TENKICHI,
    '食べログ'
  )
};
