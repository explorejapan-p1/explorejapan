/**
 * Tsurugi Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-08-28) and the frozen pack (JIS 36468).
 */
import type {MimaPlacePhoto} from './mima';

export const TSURUGI = {
  nameJa: 'つるぎ町',
  nameEn: 'Tsurugi',
  reading: 'つるぎちょう',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'tsurugi',
  jis: '36468',
  jlis: '364681',
  sameAs: 'https://www.town.tokushima-tsurugi.lg.jp/',
  hall: {
    postalCode: '779-4195',
    addressJa: '徳島県美馬郡つるぎ町貞光字東浦1番地3',
    addressEn: '1-3 Higashiura, Sadamitsu, Tsurugi, Mima District, Tokushima 779-4195, Japan',
    phone: '0883-62-3111'
  },
  sources: {
    home: 'https://www.town.tokushima-tsurugi.lg.jp/',
    hall: 'https://www.town.tokushima-tsurugi.lg.jp/chosei/chosha/',
    stay: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3491.html',
    stayStay: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3458.html',
    play: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3457.html',
    nature: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3456.html',
    onsen: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3467.html',
    culture: 'https://www.town.tokushima-tsurugi.lg.jp/docs/3475.html',
    accessed: '2026-08-28'
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
    accessed: '2026-08-28',
    altJa,
    altEn
  };
}

function townPhoto(
  file: string,
  altJa: string,
  altEn: string,
  page: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons: page,
    license: '出典',
    licenseUrl: page,
    author: 'つるぎ町',
    authorUrl: page,
    taken: '2026',
    accessed: '2026-08-28',
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
    accessed: '2026-08-28',
    altJa,
    altEn
  };
}

export const TSURUGI_PLACE_PHOTO = wikiPhoto(
  'niso-udatsu-machinami.jpg',
  'https://commons.wikimedia.org/wiki/File:Niso-Udatsu-no-Machinami_ac_(1).jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Asturio Cantabrio',
  'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
  '2022-08',
  '二層うだつの町並み（つるぎ町貞光）',
  'Two-storey udatsu townscape, Sadamitsu, Tsurugi'
);

const ORIMOTOYA_PHOTO = wikiPhoto(
  'orimotoya.jpg',
  'https://commons.wikimedia.org/wiki/File:Orimotoya_ac.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Asturio Cantabrio',
  'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
  '2022-08',
  '織本屋（つるぎ町貞光）',
  'Orimotoya, Sadamitsu, Tsurugi'
);

const LA_FORET_PHOTO = wikiPhoto(
  'la-foret-tsurugi-san.jpg',
  'https://commons.wikimedia.org/wiki/File:登山基地となるラ・フォーレつるぎ山.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Koda6029',
  'https://commons.wikimedia.org/wiki/User:Koda6029',
  '2021-05-01',
  'ラ・フォーレつるぎ山（つるぎ町一宇）',
  'La Forêt Tsurugi-san, Ichiū, Tsurugi'
);

const TSURUGISAN_PHOTO = wikiPhoto(
  'mt-tsurugisan.jpg',
  'https://commons.wikimedia.org/wiki/File:Mt.Tsurugisan.jpg',
  'Public domain',
  'https://creativecommons.org/publicdomain/mark/1.0/',
  'As6673',
  'https://commons.wikimedia.org/wiki/User:As6673',
  '2009-10-18',
  '剣山（徳島県）',
  'Mount Tsurugi, Tokushima'
);

const YUYUKAN_REST = 'https://yuyukan.jp/restaurant/';
const TABELOG_FURUTA = 'https://tabelog.com/tokushima/A3603/A360302/36007977/';
const TABELOG_NOBU = 'https://tabelog.com/tokushima/A3603/A360302/36003271/';
const TABELOG_INDRA = 'https://tabelog.com/tokushima/A3603/A360302/36002665/';
const TABELOG_KANEKA = 'https://tabelog.com/tokushima/A3603/A360302/36000680/';
const NANDEYANEN_PAGE = 'https://r.goope.jp/nandeyanen/';
const OMAKASE_PAGE = 'https://r.goope.jp/omakase-kitchen/';

/** Exact pack/travel name_ja only. No 美馬 photos. */
export const TSURUGI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '二層うだつの町並み': TSURUGI_PLACE_PHOTO,
  '織本屋': ORIMOTOYA_PHOTO,
  'ラ・フォーレつるぎ山': LA_FORET_PHOTO,
  '剣山': TSURUGISAN_PHOTO,
  'つるぎの宿 岩戸': townPhoto(
    'tsurugi-no-yado-iwato.jpg',
    'つるぎの宿 岩戸（つるぎ町一宇）',
    'Tsurugi-no-yado Iwato, Ichiū, Tsurugi',
    'https://www.town.tokushima-tsurugi.lg.jp/docs/3491.html'
  ),
  '剣山木綿麻温泉（つるぎさんゆうまおんせん）': townPhoto(
    'tsurugisan-yuma-roten.jpg',
    '剣山木綿麻温泉の露天風呂（つるぎ町貞光）',
    'Tsurugisan Yuma Onsen outdoor bath, Sadamitsu, Tsurugi',
    'https://www.town.tokushima-tsurugi.lg.jp/docs/3467.html'
  ),
  '於安パーク': townPhoto(
    'oan-park.jpg',
    '於安パーク（つるぎ町半田）',
    'Oan Park, Handa, Tsurugi',
    'https://www.town.tokushima-tsurugi.lg.jp/docs/3457.html'
  ),
  '巨樹の里': townPhoto(
    'kyoju-no-sato-tochi.jpg',
    '巨樹の里・桑平のトチノキ（つるぎ町）',
    'Giant horse-chestnut in Kyoju-no-sato, Tsurugi',
    'https://www.town.tokushima-tsurugi.lg.jp/docs/3456.html'
  ),
  '桜づつみイルミネーション': townPhoto(
    'sakura-zutsumi-illumi.jpg',
    '桜づつみイルミネーション（つるぎ町貞光）',
    'Sakura-zutsumi illumination, Sadamitsu, Tsurugi',
    'https://www.town.tokushima-tsurugi.lg.jp/docs/3457.html'
  ),
  '道の駅 貞光ゆうゆう館': sourcePhoto(
    'sadamitsu-yuyukan-somen.jpg',
    '道の駅 貞光ゆうゆう館の半田手延べそうめん（つるぎ町貞光）',
    'Handa somen at Michi-no-eki Sadamitsu Yuyukan, Tsurugi',
    YUYUKAN_REST,
    '道の駅 貞光ゆうゆう館'
  ),
  'ふるた食堂': sourcePhoto(
    'furuta-shokudo.jpg',
    'ふるた食堂のうどん（つるぎ町半田）',
    'Udon noodles at Furuta Shokudo, Handa, Tsurugi',
    TABELOG_FURUTA,
    '食べログ'
  ),
  '純手打ちうどん のぶ': sourcePhoto(
    'udon-nobu.jpg',
    '純手打ちうどん のぶの肉うどん（つるぎ町貞光）',
    'Niku udon at Jun Teuchi Udon Nobu, Sadamitsu, Tsurugi',
    TABELOG_NOBU,
    '食べログ'
  ),
  'インドラ': sourcePhoto(
    'indra-curry.jpg',
    'インドラのカツカレー（つるぎ町貞光）',
    'Katsu curry at Indra, Sadamitsu, Tsurugi',
    TABELOG_INDRA,
    '食べログ'
  ),
  'めん処 かねか': sourcePhoto(
    'men-dokoro-kaneka.jpg',
    'めん処 かねかのざるうどん（つるぎ町貞光）',
    'Zaru udon at Men-dokoro Kaneka, Sadamitsu, Tsurugi',
    TABELOG_KANEKA,
    '食べログ'
  ),
  'おまかせキッチン': sourcePhoto(
    'omakase-kitchen.jpg',
    'おまかせキッチンの弁当（つるぎ町）',
    'Bento from Omakase Kitchen, Tsurugi',
    OMAKASE_PAGE,
    'おまかせキッチン'
  ),
  'お好み焼　なんでやねん': sourcePhoto(
    'nandeyanen-okonomiyaki.jpg',
    'お好み焼　なんでやねんのお好み焼（つるぎ町半田）',
    'Okonomiyaki at Nandeyanen, Handa, Tsurugi',
    NANDEYANEN_PAGE,
    'お好み焼　なんでやねん'
  )
};
