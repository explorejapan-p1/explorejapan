/**
 * Komatsushima City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 36203. Not 鳴門 / 徳島市 / 阿南 / 藍住.
 * No frozen pack — photo-only tourism like naruto.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KOMATSUSHIMA = {
  nameJa: '小松島市',
  nameEn: 'Komatsushima City',
  reading: 'こまつしまし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'komatsushima',
  jis: '36203',
  jlis: '362031',
  sameAs: 'https://www.city.komatsushima.lg.jp/',
  hall: {
    postalCode: '773-8501',
    addressJa: '徳島県小松島市横須町1番1号',
    addressEn: '1-1 Yokosu-cho, Komatsushima, Tokushima 773-8501, Japan',
    phone: '0885-32-2111'
  },
  sources: {
    home: 'https://www.city.komatsushima.lg.jp/',
    hall: 'https://www.city.komatsushima.lg.jp/docs/2617.html',
    kanko: 'https://www.city.komatsushima.lg.jp/kanko/kanko/',
    navi: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/',
    reijo: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/reijo/',
    tatsueji: 'https://www.awanavi.jp/spot/1000219/',
    onzanji: 'https://www.awanavi.jp/archives/spot/2804',
    kincho: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/spots/5157.html',
    stationPark: 'https://www.city.komatsushima.lg.jp/komatsushima-navi/',
    tabelogCity: 'https://tabelog.com/tokushima/C36203/rstLst/',
    accessed: '2026-09-07'
  }
} as const;

export const KOMATSUSHIMA_EXPECTED_ROW_COUNT = 5;
export const KOMATSUSHIMA_EXPECTED_GEO_COUNT = 5;

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

/** Cover: File:Ote beach 2010-8-14 No,2.JPG — 大手海岸（和田島）. Not 鳴門大手 / Omiko (徳島市). */
export const KOMATSUSHIMA_PLACE_PHOTO = wikiPhoto(
  'komatsushima-ote-beach.jpg',
  'https://commons.wikimedia.org/wiki/File:Ote_beach_2010-8-14_No,2.JPG',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0',
  'Mti',
  'https://commons.wikimedia.org/wiki/User:Mti',
  '2010-08-14',
  '大手海岸（小松島市和田島町）',
  'Ōte Beach, Wadajima, Komatsushima City'
);

/** Exact travel/sight name_ja only. No 鳴門 / 徳島市 / 阿南 / 藍住 Files. */
export const KOMATSUSHIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '大手海岸': KOMATSUSHIMA_PLACE_PHOTO,
  '立江寺': wikiPhoto(
    'komatsushima-tatsueji.jpg',
    'https://commons.wikimedia.org/wiki/File:Tatsue-ji,_Main_Gate_and_Two_story_pagoda_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-07-15',
    '立江寺の山門と多宝塔（四国八十八箇所第十九番・小松島市）',
    'Tatsue-ji main gate and pagoda, Shikoku pilgrimage temple 19, Komatsushima'
  ),
  '恩山寺': wikiPhoto(
    'komatsushima-onzanji.jpg',
    'https://commons.wikimedia.org/wiki/File:Onzanji_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-05-04',
    '恩山寺の山門（四国八十八箇所第十八番・小松島市）',
    'Onzan-ji temple gate, Shikoku pilgrimage temple 18, Komatsushima'
  ),
  '金長神社': wikiPhoto(
    'komatsushima-kincho-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:Kincho_Jinja_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2010-04-17',
    '金長神社の鳥居（小松島市中田町）',
    'Kincho Shrine torii, Nakata-cho, Komatsushima'
  ),
  '小松島ステーションパーク': wikiPhoto(
    'komatsushima-station-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Komatsushima_Station_Park_in_2014-4-4_No,1.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Mti',
    'https://commons.wikimedia.org/wiki/User:Mti',
    '2014-04-04',
    '小松島ステーションパーク（小松島市）',
    'Komatsushima Station Park, Komatsushima City'
  )
};

function sight(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string,
  lat: number,
  lon: number
): FacilityRow {
  return {
    id,
    jis: KOMATSUSHIMA.jis,
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
    accessed: KOMATSUSHIMA.sources.accessed
  };
}

/** Photo-only tourism rows. No frozen jsonl. Wikipedia / sourced coords. */
export const KOMATSUSHIMA_FACILITIES: readonly FacilityRow[] = [
  sight(
    'komatsushima-sight-01',
    '大手海岸',
    '徳島県小松島市和田島町',
    null,
    KOMATSUSHIMA.sources.navi,
    34.005,
    134.607
  ),
  sight(
    'komatsushima-sight-02',
    '立江寺',
    '徳島県小松島市立江町字若松13',
    '0885-37-1019',
    KOMATSUSHIMA.sources.tatsueji,
    33.96786111,
    134.60580556
  ),
  sight(
    'komatsushima-sight-03',
    '恩山寺',
    '徳島県小松島市田野町字恩山寺谷40',
    '0885-33-1218',
    KOMATSUSHIMA.sources.onzanji,
    33.986,
    134.57825
  ),
  sight(
    'komatsushima-sight-04',
    '金長神社',
    '徳島県小松島市中田町字脇谷',
    '0885-32-3809',
    KOMATSUSHIMA.sources.kincho,
    34.017,
    134.58666667
  ),
  sight(
    'komatsushima-sight-05',
    '小松島ステーションパーク',
    '徳島県小松島市小松島町',
    null,
    KOMATSUSHIMA.sources.stationPark,
    34.01086389,
    134.58689444
  )
];
