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

/** Exact pack/travel name_ja only. No 美馬 photos. */
export const TSURUGI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '二層うだつの町並み': TSURUGI_PLACE_PHOTO,
  '織本屋': ORIMOTOYA_PHOTO,
  'ラ・フォーレつるぎ山': LA_FORET_PHOTO,
  '剣山': TSURUGISAN_PHOTO
};
