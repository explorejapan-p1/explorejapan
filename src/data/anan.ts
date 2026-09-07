/**
 * Anan City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 36204. Not 小松島 / 鳴門 / 徳島市 / 藍住.
 * No frozen pack — photo-only tourism + Tabelog dining like naruto.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const ANAN = {
  nameJa: '阿南市',
  nameEn: 'Anan City',
  reading: 'あなんし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'anan',
  jis: '36204',
  jlis: '362042',
  sameAs: 'https://www.city.anan.tokushima.jp/',
  hall: {
    postalCode: '774-8501',
    addressJa: '徳島県阿南市富岡町トノ町12番地3',
    addressEn: '12-3 Tonochō, Tomioka-cho, Anan, Tokushima 774-8501, Japan',
    phone: '0884-22-1111'
  },
  sources: {
    home: 'https://www.city.anan.tokushima.jp/',
    hall: 'https://www.city.anan.tokushima.jp/',
    kanko: 'https://www.city.anan.tokushima.jp/category/bunya/kankobunka/',
    kamoda: 'https://www.city.anan.tokushima.jp/docs/2010112900035/',
    tairyuji: 'https://www.awanavi.jp/archives/spot/1896',
    byodoji: 'https://www.awanavi.jp/archives/spot/2802',
    tabelogCity: 'https://tabelog.com/tokushima/C36204/rstLst/',
    accessed: '2026-09-07'
  }
} as const;

export const ANAN_EXPECTED_ROW_COUNT = 3;
export const ANAN_EXPECTED_GEO_COUNT = 3;

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

/** Cover: File:Kamodamisaki Lighthouse.jpg — 蒲生田岬灯台. Not 小松島大手 / 鳴門 / 徳島市. */
export const ANAN_PLACE_PHOTO = wikiPhoto(
  'anan-kamodamisaki.jpg',
  'https://commons.wikimedia.org/wiki/File:Kamodamisaki_Lighthouse.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  '切干大根',
  'https://commons.wikimedia.org/wiki/User:%E5%88%87%E5%B9%B2%E5%A4%A7%E6%A0%B9',
  '2018-09-11',
  '蒲生田岬灯台（四国最東端・阿南市椿町）',
  'Kamoda Cape Lighthouse, easternmost tip of Shikoku, Anan City'
);

const TABELOG_36007104 = "https://tabelog.com/tokushima/A3602/A360201/36007104/";
const TABELOG_36003856 = "https://tabelog.com/tokushima/A3602/A360201/36003856/";
const TABELOG_36005595 = "https://tabelog.com/tokushima/A3602/A360201/36005595/";
const TABELOG_36000366 = "https://tabelog.com/tokushima/A3602/A360201/36000366/";
const TABELOG_36000844 = "https://tabelog.com/tokushima/A3602/A360201/36000844/";
const TABELOG_36000810 = "https://tabelog.com/tokushima/A3602/A360201/36000810/";
const TABELOG_36008635 = "https://tabelog.com/tokushima/A3602/A360201/36008635/";
const TABELOG_36002393 = "https://tabelog.com/tokushima/A3602/A360201/36002393/";
const TABELOG_36004420 = "https://tabelog.com/tokushima/A3602/A360201/36004420/";
const TABELOG_36008714 = "https://tabelog.com/tokushima/A3602/A360201/36008714/";
const TABELOG_36000843 = "https://tabelog.com/tokushima/A3602/A360201/36000843/";
const TABELOG_36001328 = "https://tabelog.com/tokushima/A3602/A360201/36001328/";
const TABELOG_36005381 = "https://tabelog.com/tokushima/A3602/A360201/36005381/";
const TABELOG_36005630 = "https://tabelog.com/tokushima/A3602/A360201/36005630/";
const TABELOG_36006424 = "https://tabelog.com/tokushima/A3602/A360201/36006424/";
const TABELOG_36000888 = "https://tabelog.com/tokushima/A3602/A360201/36000888/";

/** Exact travel/sight name_ja only. No 小松島 / 鳴門 / 徳島市 / 藍住 / 那賀 Files. */
export const ANAN_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '蒲生田岬': ANAN_PLACE_PHOTO,
  '太龍寺': wikiPhoto(
    'anan-tairyuji.jpg',
    'https://commons.wikimedia.org/wiki/File:Tairyuji_06.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-05-09',
    '太龍寺への石段（四国八十八箇所第二十一番・阿南市）',
    'Stone stairs to Tairyū-ji, Shikoku pilgrimage temple 21, Anan'
  ),
  '平等寺': wikiPhoto(
    'anan-byodoji-view.jpg',
    'https://commons.wikimedia.org/wiki/File:Byodo-ji,_View_from_the_Main_Hall_01.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Naokijp',
    'https://commons.wikimedia.org/wiki/User:Naokijp',
    '2019-07-15',
    '平等寺本堂前からの眺め（四国八十八箇所第二十二番・阿南市）',
    'View from Byōdō-ji main hall, Shikoku pilgrimage temple 22, Anan'
  ),
  "Loup": sourcePhoto(
    "anan-36007104-dish.jpg",
    "Loupの料理写真",
    "Loup food photo",
    TABELOG_36007104,
    '食べログ'
  ),
  "神龍": sourcePhoto(
    "anan-36003856-dish.jpg",
    "神龍の料理写真",
    "神龍 food photo",
    TABELOG_36003856,
    '食べログ'
  ),
  "魚まさ": sourcePhoto(
    "anan-36005595-dish.jpg",
    "魚まさの料理写真",
    "魚まさ food photo",
    TABELOG_36005595,
    '食べログ'
  ),
  "ウト・ウーク": sourcePhoto(
    "anan-36000366-dish.jpg",
    "ウト・ウークの料理写真",
    "ウト・ウーク food photo",
    TABELOG_36000366,
    '食べログ'
  ),
  "大菩薩峠": sourcePhoto(
    "anan-36000844-dish.jpg",
    "大菩薩峠の料理写真",
    "大菩薩峠 food photo",
    TABELOG_36000844,
    '食べログ'
  ),
  "中華そば HIRO": sourcePhoto(
    "anan-36000810-dish.jpg",
    "中華そば HIROの料理写真",
    "中華そば HIRO food photo",
    TABELOG_36000810,
    '食べログ'
  ),
  "おさかなひぐち": sourcePhoto(
    "anan-36008635-dish.jpg",
    "おさかなひぐちの料理写真",
    "おさかなひぐち food photo",
    TABELOG_36008635,
    '食べログ'
  ),
  "酒樂亭": sourcePhoto(
    "anan-36002393-dish.jpg",
    "酒樂亭の料理写真",
    "酒樂亭 food photo",
    TABELOG_36002393,
    '食べログ'
  ),
  "天徳": sourcePhoto(
    "anan-36004420-dish.jpg",
    "天徳の料理写真",
    "天徳 food photo",
    TABELOG_36004420,
    '食べログ'
  ),
  "溶岩焼きステーキ&ハンバーグ 崋山": sourcePhoto(
    "anan-36008714-dish.jpg",
    "溶岩焼きステーキ&ハンバーグ 崋山の料理写真",
    "溶岩焼きステーキ&ハンバーグ 崋山 food photo",
    TABELOG_36008714,
    '食べログ'
  ),
  "王味": sourcePhoto(
    "anan-36000843-dish.jpg",
    "王味の料理写真",
    "王味 food photo",
    TABELOG_36000843,
    '食べログ'
  ),
  "そば工房ＨＩＲＯ": sourcePhoto(
    "anan-36001328-dish.jpg",
    "そば工房ＨＩＲＯの料理写真",
    "そば工房ＨＩＲＯ food photo",
    TABELOG_36001328,
    '食べログ'
  ),
  "かまたまーる": sourcePhoto(
    "anan-36005381-dish.jpg",
    "かまたまーるの料理写真",
    "かまたまーる food photo",
    TABELOG_36005381,
    '食べログ'
  ),
  "茉莉花": sourcePhoto(
    "anan-36005630-dish.jpg",
    "茉莉花の料理写真",
    "茉莉花 food photo",
    TABELOG_36005630,
    '食べログ'
  ),
  "居酒屋食堂 とりあえず…やましげ": sourcePhoto(
    "anan-36006424-dish.jpg",
    "居酒屋食堂 とりあえず…やましげの料理写真",
    "居酒屋食堂 とりあえず…やましげ food photo",
    TABELOG_36006424,
    '食べログ'
  ),
  "焼肉・中華そば も": sourcePhoto(
    "anan-36000888-dish.jpg",
    "焼肉・中華そば もの料理写真",
    "焼肉・中華そば も food photo",
    TABELOG_36000888,
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
    jis: ANAN.jis,
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
    accessed: ANAN.sources.accessed
  };
}

/** Photo-only tourism rows. No frozen jsonl. Wikipedia coords. */
export const ANAN_FACILITIES: readonly FacilityRow[] = [
  sight(
    'anan-sight-01',
    '蒲生田岬',
    '徳島県阿南市椿町蒲生田',
    null,
    ANAN.sources.kamoda,
    33.83475,
    134.75030556
  ),
  sight(
    'anan-sight-02',
    '太龍寺',
    '徳島県阿南市加茂町龍山2',
    null,
    ANAN.sources.tairyuji,
    33.88252778,
    134.52188889
  ),
  sight(
    'anan-sight-03',
    '平等寺',
    '徳島県阿南市新野町',
    null,
    ANAN.sources.byodoji,
    33.85183333,
    134.58277778
  )
];
