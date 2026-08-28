/**
 * Tokushima City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-08-28). JIS 36201. Not 鳴門 / 三好 / 藍住.
 * Code name tokushima-city so it does not clash with prefecture slug tokushima.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TOKUSHIMA_CITY = {
  nameJa: '徳島市',
  nameEn: 'Tokushima',
  reading: 'とくしまし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'tokushima',
  jis: '36201',
  jlis: '362018',
  sameAs: 'https://www.city.tokushima.tokushima.jp/',
  hall: {
    postalCode: '770-8571',
    addressJa: '徳島県徳島市幸町2丁目5番地',
    addressEn: '2-5 Saiwai-cho, Tokushima, Tokushima 770-8571, Japan',
    phone: '088-621-5111'
  },
  sources: {
    home: 'https://www.city.tokushima.tokushima.jp/',
    hall: 'https://www.city.tokushima.tokushima.jp/shisei/shiyakusho/shiyakusho_about.html',
    hallMap: 'https://www.city.tokushima.tokushima.jp/shisei/shiyakusho/ka_ichiran/index.html',
    kanko: 'https://www.tokushima-kankou.or.jp/',
    bizan: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/bizan.html',
    boardWalk: 'https://www.city.tokushima.tokushima.jp/kankou/keikan/board_walk.html',
    awaodori: 'https://www.city.tokushima.tokushima.jp/shisetsu/bunka_art/awaodori_kaikan.html',
    castlePark: 'https://www.city.tokushima.tokushima.jp/shisetsu/park/chuo.html',
    tabelogCity: 'https://tabelog.com/tokushima/C36201/rstLst/',
    accessed: '2026-08-28'
  }
} as const;

export const TOKUSHIMA_CITY_EXPECTED_ROW_COUNT = 5;
export const TOKUSHIMA_CITY_EXPECTED_GEO_COUNT = 5;

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

/** Cover: File:Mount Bizan from Shimmachi River 20200607.jpg — 新町川から臨む眉山. Not 鳴門渦潮 / 大歩危 / かずら橋. */
export const TOKUSHIMA_CITY_PLACE_PHOTO = wikiPhoto(
  'bizan-shimmachi.jpg',
  'https://commons.wikimedia.org/wiki/File:Mount_Bizan_from_Shimmachi_River_20200607.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  '新幹線',
  'https://commons.wikimedia.org/wiki/User:%E6%96%B0%E5%B9%B9%E7%B7%9A',
  '2020-06-07',
  '新町川から臨む眉山（徳島市）',
  'Mount Bizan from the Shinmachi River, Tokushima'
);

const TABELOG_INOTANI = 'https://tabelog.com/tokushima/A3601/A360101/36000011/';
const TABELOG_TODAI = 'https://tabelog.com/tokushima/A3601/A360101/36000013/';
const TABELOG_IPPUKU = 'https://tabelog.com/tokushima/A3601/A360101/36000005/';
const TABELOG_YAMAKYO = 'https://tabelog.com/tokushima/A3601/A360101/36000632/';
const TABELOG_KANARIYA = 'https://tabelog.com/tokushima/A3601/A360101/36000816/';
const TABELOG_MENOH = 'https://tabelog.com/tokushima/A3601/A360101/36000076/';
const TABELOG_YOAKE = 'https://tabelog.com/tokushima/A3601/A360101/36004118/';

/** Exact travel/sight name_ja only. No 鳴門 / 三好 / 藍住 photos. */
export const TOKUSHIMA_CITY_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '眉山': TOKUSHIMA_CITY_PLACE_PHOTO,
  '徳島城跡': wikiPhoto(
    'tokushima-castle.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_castle03s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-07',
    '徳島城跡（徳島市徳島町城内）',
    'Tokushima Castle ruins, Tokushima-cho, Tokushima'
  ),
  '新町川水際公園・しんまちボードウォーク': wikiPhoto(
    'shinmachi-boardwalk.jpg',
    'https://commons.wikimedia.org/wiki/File:Shinmachi_boardwalk01s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-06',
    'しんまちボードウォーク（徳島市南内町）',
    'Shinmachi Boardwalk, Minamiuchi-cho, Tokushima'
  ),
  '阿波おどり会館': wikiPhoto(
    'awa-odori-kaikan.jpg',
    'https://commons.wikimedia.org/wiki/File:Awa_Odori_Hall_and_Mount_Bizan.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'そらみみ',
    'https://commons.wikimedia.org/wiki/User:Soramimi',
    '2016-05-04',
    '阿波おどり会館と眉山ロープウェイ（徳島市新町橋）',
    'Awa Odori Hall and Bizan Ropeway, Shinmachibashi, Tokushima'
  ),
  'あわぎん眉山ロープウエイ': wikiPhoto(
    'bizan-ropeway.jpg',
    'https://commons.wikimedia.org/wiki/File:071006_Bizan_Ropeway_Tokushima_Japan02bs9.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2007-10-06',
    'あわぎん眉山ロープウエイ（徳島市新町橋）',
    'Awagin Bizan Ropeway, Shinmachibashi, Tokushima'
  ),
  'いのたに 本店': sourcePhoto(
    'inotani-ramen.jpg',
    'いのたに 本店の徳島ラーメン（徳島市西大工町）',
    'Tokushima ramen at Inotani Honten, Nishi-Daiku-cho, Tokushima',
    TABELOG_INOTANI,
    '食べログ'
  ),
  'ラーメン東大 大道本店': sourcePhoto(
    'todai-ramen.jpg',
    'ラーメン東大 大道本店の徳島ラーメン（徳島市大道）',
    'Tokushima ramen at Ramen Todai Daido Honten, Daido, Tokushima',
    TABELOG_TODAI,
    '食べログ'
  ),
  '銀座一福 本店': sourcePhoto(
    'ginza-ippuku-ramen.jpg',
    '銀座一福 本店の中華そば（徳島市銀座）',
    'Chuka-soba at Ginza Ippuku Honten, Ginza, Tokushima',
    TABELOG_IPPUKU,
    '食べログ'
  ),
  '中華そば やまきょう': sourcePhoto(
    'yamakyo-ramen.jpg',
    '中華そば やまきょうの徳島ラーメン（徳島市北矢三町）',
    'Tokushima ramen at Chuka-soba Yamakyo, Kita-Yaso-cho, Tokushima',
    TABELOG_YAMAKYO,
    '食べログ'
  ),
  '可成家 本店': sourcePhoto(
    'kanariya-ramen.jpg',
    '可成家 本店の白系ラーメン（徳島市南庄町）',
    'White-style ramen at Kanariya Honten, Minamisho-cho, Tokushima',
    TABELOG_KANARIYA,
    '食べログ'
  ),
  '麺王 徳島駅前本店': sourcePhoto(
    'menoh-ramen.jpg',
    '麺王 徳島駅前本店の徳島ラーメン（徳島市寺島本町東）',
    'Tokushima ramen at Men-oh Tokushima Ekimae Honten, Terashima-honcho-higashi, Tokushima',
    TABELOG_MENOH,
    '食べログ'
  ),
  'よあけ 駅前店': sourcePhoto(
    'yoake-ramen.jpg',
    'よあけ 駅前店の支那そば（徳島市一番町）',
    'Shina-soba at Yoake Ekimae, Ichiban-cho, Tokushima',
    TABELOG_YOAKE,
    '食べログ'
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
    jis: TOKUSHIMA_CITY.jis,
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
    accessed: TOKUSHIMA_CITY.sources.accessed
  };
}

/** Photo-only tourism rows copied from city pages. No frozen jsonl. Wikipedia coords. */
export const TOKUSHIMA_CITY_FACILITIES: readonly FacilityRow[] = [
  sight(
    'tokushima-city-sight-01',
    '眉山',
    null,
    null,
    TOKUSHIMA_CITY.sources.bizan,
    34.06692592,
    134.53769878
  ),
  sight(
    'tokushima-city-sight-02',
    '徳島城跡',
    '徳島県徳島市徳島町城内1番外',
    null,
    TOKUSHIMA_CITY.sources.castlePark,
    34.07519167,
    134.555275
  ),
  sight(
    'tokushima-city-sight-03',
    '新町川水際公園・しんまちボードウォーク',
    '徳島県徳島市南内町',
    null,
    TOKUSHIMA_CITY.sources.boardWalk,
    34.07051389,
    134.54898889
  ),
  sight(
    'tokushima-city-sight-04',
    '阿波おどり会館',
    '徳島県徳島市新町橋2丁目20番地',
    null,
    TOKUSHIMA_CITY.sources.awaodori,
    34.07013889,
    134.54508333
  ),
  sight(
    'tokushima-city-sight-05',
    'あわぎん眉山ロープウエイ',
    '徳島県徳島市新町橋2丁目20番地',
    '088-652-3617',
    TOKUSHIMA_CITY.sources.bizan,
    34.07013889,
    134.54508333
  )
];
