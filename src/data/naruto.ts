/**
 * Naruto City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-05). JIS 36202. Not 徳島市 / 北島 / 松茂 / 藍住.
 * No frozen pack — photo-only tourism + Tabelog dining like tokushima-city.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const NARUTO = {
  nameJa: '鳴門市',
  nameEn: 'Naruto City',
  reading: 'なるとし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'naruto',
  jis: '36202',
  jlis: '362026',
  sameAs: 'https://www.city.naruto.tokushima.jp/',
  hall: {
    postalCode: '772-8501',
    addressJa: '徳島県鳴門市撫養町南浜字東浜170番地',
    addressEn: '170 Higashi-hama, Minamihama, Muya-cho, Naruto, Tokushima 772-8501, Japan',
    phone: '088-684-1111'
  },
  sources: {
    home: 'https://www.city.naruto.tokushima.jp/',
    hall: 'https://www.city.naruto.tokushima.jp/docs/2025090900052/',
    kanko: 'https://www.city.naruto.tokushima.jp/category/bunya/kanko/',
    tourism: 'https://naruto-tourism.jp/',
    uzushio: 'https://uzushio-guruguru.com/',
    uzunomichi: 'https://www.uzunomichi.jp/',
    doitsukan: 'https://doitsukan.com/',
    otsuka: 'https://o-museum.or.jp/',
    ryozenji: 'https://www.awanavi.jp/spot/1000210/',
    tabelogCity: 'https://tabelog.com/tokushima/C36202/rstLst/',
    accessed: '2026-09-05'
  }
} as const;

export const NARUTO_EXPECTED_ROW_COUNT = 5;
export const NARUTO_EXPECTED_GEO_COUNT = 5;

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

/** Cover: File:Naruto Whirlpools from the Uzunomichi.jpg — 鳴門の渦潮（渦の道から）. Not Bizan / Oboke / 土柱 / Kitajima tulips. */
export const NARUTO_PLACE_PHOTO = wikiPhoto(
  'naruto-whirlpools-uzunomichi.jpg',
  'https://commons.wikimedia.org/wiki/File:Naruto_Whirlpools_from_the_Uzunomichi.jpg',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0',
  'Kounosu',
  'https://commons.wikimedia.org/wiki/User:Kounosu',
  '2010-08-11',
  '渦の道から見た鳴門の渦潮（鳴門市）',
  'Naruto whirlpools from Uzunomichi, Naruto City'
);

const TABELOG_36001450 = 'https://tabelog.com/tokushima/A3601/A360102/36001450/';
const TABELOG_36000168 = 'https://tabelog.com/tokushima/A3601/A360102/36000168/';
const TABELOG_36000021 = 'https://tabelog.com/tokushima/A3601/A360102/36000021/';
const TABELOG_36000726 = 'https://tabelog.com/tokushima/A3601/A360102/36000726/';
const TABELOG_36005434 = 'https://tabelog.com/tokushima/A3601/A360102/36005434/';
const TABELOG_36002902 = 'https://tabelog.com/tokushima/A3601/A360102/36002902/';
const TABELOG_36003031 = 'https://tabelog.com/tokushima/A3601/A360102/36003031/';
const TABELOG_36004377 = 'https://tabelog.com/tokushima/A3601/A360102/36004377/';
const TABELOG_36000020 = 'https://tabelog.com/tokushima/A3601/A360102/36000020/';
const TABELOG_36000075 = 'https://tabelog.com/tokushima/A3601/A360102/36000075/';
const TABELOG_36005139 = 'https://tabelog.com/tokushima/A3601/A360102/36005139/';
const TABELOG_36000894 = 'https://tabelog.com/tokushima/A3601/A360102/36000894/';
const TABELOG_36003543 = 'https://tabelog.com/tokushima/A3601/A360102/36003543/';
const TABELOG_36000070 = 'https://tabelog.com/tokushima/A3601/A360102/36000070/';

/** Exact travel/sight name_ja only. No 徳島市 / 北島 / 松茂 / 藍住 photos. */
export const NARUTO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '鳴門の渦潮': NARUTO_PLACE_PHOTO,
  '大鳴門橋遊歩道 渦の道': wikiPhoto(
    'naruto-whirlpools-uzunomichi.jpg',
    'https://commons.wikimedia.org/wiki/File:Naruto_Whirlpools_from_the_Uzunomichi.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Kounosu',
    'https://commons.wikimedia.org/wiki/User:Kounosu',
    '2010-08-11',
    '大鳴門橋遊歩道 渦の道から見た鳴門海峡（鳴門市）',
    'Naruto Strait from Uzunomichi walkway, Naruto City'
  ),
  '大鳴門橋': wikiPhoto(
    'naruto-onaruto-bridge.jpg',
    'https://commons.wikimedia.org/wiki/File:Naruto_bridge,_Awaji.jpg',
    'CC BY-SA 2.0',
    'https://creativecommons.org/licenses/by-sa/2.0',
    'Takato Marui from Osaka, Japan',
    'https://commons.wikimedia.org/wiki/File:Naruto_bridge,_Awaji.jpg',
    '2007-02-05',
    '大鳴門橋（鳴門市）',
    'Ōnaruto Bridge, Naruto City'
  ),
  '鳴門市ドイツ館': wikiPhoto(
    'naruto-doitsukan.jpg',
    'https://commons.wikimedia.org/wiki/File:140712_Naruto_German_House_Naruto_Tokushima_pref_Japan02s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2014-07-12',
    '鳴門市ドイツ館（鳴門市大麻町）',
    'Naruto German House, Oasa-cho, Naruto'
  ),
  '霊山寺': wikiPhoto(
    'naruto-ryozenji.jpg',
    'https://commons.wikimedia.org/wiki/File:140712_Ryozenji_Naruto_Tokushima_pref_Japan03s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2014-07-12',
    '霊山寺（四国八十八箇所第一番札所・鳴門市）',
    'Ryōzen-ji, Shikoku pilgrimage temple 1, Naruto'
  ),
  'すし勝': sourcePhoto(
    'naruto-36001450-dish.jpg',
    'すし勝の料理写真',
    'すし勝 food photo',
    TABELOG_36001450,
    '食べログ'
  ),
  '日本料理 永代': sourcePhoto(
    'naruto-36000168-dish.jpg',
    '日本料理 永代の料理写真',
    '日本料理 永代 food photo',
    TABELOG_36000168,
    '食べログ'
  ),
  '活魚料理 びんび家': sourcePhoto(
    'naruto-36000021-dish.jpg',
    '活魚料理 びんび家の料理写真',
    '活魚料理 びんび家 food photo',
    TABELOG_36000021,
    '食べログ'
  ),
  '中国料理 翆陽': sourcePhoto(
    'naruto-36000726-dish.jpg',
    '中国料理 翆陽の料理写真',
    '中国料理 翆陽 food photo',
    TABELOG_36000726,
    '食べログ'
  ),
  'うなぎ処　岡': sourcePhoto(
    'naruto-36005434-dish.jpg',
    'うなぎ処　岡の料理写真',
    'うなぎ処　岡 food photo',
    TABELOG_36005434,
    '食べログ'
  ),
  '一匠': sourcePhoto(
    'naruto-36002902-dish.jpg',
    '一匠の料理写真',
    '一匠 food photo',
    TABELOG_36002902,
    '食べログ'
  ),
  'ボナキュー': sourcePhoto(
    'naruto-36003031-dish.jpg',
    'ボナキューの料理写真',
    'ボナキュー food photo',
    TABELOG_36003031,
    '食べログ'
  ),
  '初海': sourcePhoto(
    'naruto-36004377-dish.jpg',
    '初海の料理写真',
    '初海 food photo',
    TABELOG_36004377,
    '食べログ'
  ),
  'あらし': sourcePhoto(
    'naruto-36000020-dish.jpg',
    'あらしの料理写真',
    'あらし food photo',
    TABELOG_36000020,
    '食べログ'
  ),
  'いのたに 鳴門店': sourcePhoto(
    'naruto-36000075-dish.jpg',
    'いのたに 鳴門店の料理写真',
    'いのたに 鳴門店 food photo',
    TABELOG_36000075,
    '食べログ'
  ),
  'フォーシーズン': sourcePhoto(
    'naruto-36005139-dish.jpg',
    'フォーシーズンの料理写真',
    'フォーシーズン food photo',
    TABELOG_36005139,
    '食べログ'
  ),
  '舩本うどん': sourcePhoto(
    'naruto-36000894-dish.jpg',
    '舩本うどんの料理写真',
    '舩本うどん food photo',
    TABELOG_36000894,
    '食べログ'
  ),
  'カフェ・ド・ジヴェルニー': sourcePhoto(
    'naruto-36003543-dish.jpg',
    'カフェ・ド・ジヴェルニーの料理写真',
    'カフェ・ド・ジヴェルニー food photo',
    TABELOG_36003543,
    '食べログ'
  ),
  'リストランテ フィッシュボーン': sourcePhoto(
    'naruto-36000070-dish.jpg',
    'リストランテ フィッシュボーンの料理写真',
    'リストランテ フィッシュボーン food photo',
    TABELOG_36000070,
    '食べログ'
  ),
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
    jis: NARUTO.jis,
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
    accessed: NARUTO.sources.accessed
  };
}

/** Photo-only tourism rows. No frozen jsonl. Wikipedia coords. */
export const NARUTO_FACILITIES: readonly FacilityRow[] = [
  sight(
    'naruto-sight-01',
    '鳴門の渦潮',
    '徳島県鳴門市鳴門町土佐泊浦',
    null,
    NARUTO.sources.uzushio,
    34.23833333,
    134.65138889
  ),
  sight(
    'naruto-sight-02',
    '大鳴門橋遊歩道 渦の道',
    '徳島県鳴門市鳴門町土佐泊浦字福池65（鳴門公園内）',
    '088-683-6262',
    NARUTO.sources.uzunomichi,
    34.23783333,
    134.64788889
  ),
  sight(
    'naruto-sight-03',
    '大鳴門橋',
    '徳島県鳴門市鳴門町土佐泊浦',
    null,
    NARUTO.sources.uzunomichi,
    34.23916667,
    134.65191389
  ),
  sight(
    'naruto-sight-04',
    '鳴門市ドイツ館',
    '徳島県鳴門市大麻町桧字東山田55-2',
    '088-689-0099',
    NARUTO.sources.doitsukan,
    34.16472222,
    134.49908333
  ),
  sight(
    'naruto-sight-05',
    '霊山寺',
    '徳島県鳴門市大麻町板東字西山田',
    null,
    NARUTO.sources.ryozenji,
    34.15980278,
    134.50259167
  )
];
