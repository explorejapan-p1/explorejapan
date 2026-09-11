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
    tairyujiRopeway: 'https://www.awanavi.jp/archives/spot/1896',
    nakagawa: 'https://www.city.anan.tokushima.jp/',
    akome: 'https://www.city.anan.tokushima.jp/',
    okayamaCastle: 'https://www.city.anan.tokushima.jp/',
    tabelogCity: 'https://tabelog.com/tokushima/C36204/rstLst/',
    accessed: '2026-09-09'
  }
} as const;

export const ANAN_EXPECTED_ROW_COUNT = 15;
export const ANAN_EXPECTED_GEO_COUNT = 7;

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
  '太龍寺ロープウェイ': wikiPhoto(
    'anan-tairyuji-ropeway.jpg',
    'https://commons.wikimedia.org/wiki/File:Tairyuji_Ropeway_08.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2010-04-17',
    '太龍寺ロープウェイ（阿南市）',
    'Tairyuji Ropeway, Anan'
  ),
  '那賀川': wikiPhoto(
    'anan-nakagawa.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%82%A3%E8%B3%80%E5%B7%9D%EF%BC%88%E5%BE%B3%E5%B3%B6%E7%9C%8C%E9%98%BF%E5%8D%97%E5%B8%82%EF%BC%89.JPG',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Jsqwfthbfs',
    'https://commons.wikimedia.org/wiki/File:%E9%82%A3%E8%B3%80%E5%B7%9D%EF%BC%88%E5%BE%B3%E5%B3%B6%E7%9C%8C%E9%98%BF%E5%8D%97%E5%B8%82%EF%BC%89.JPG',
    '2008-04-05',
    '那賀川（阿南市）',
    'Naka River, Anan'
  ),
  'あこめ海岸': wikiPhoto(
    'anan-akome-beach.jpg',
    'https://commons.wikimedia.org/wiki/File:Akome_beach_-%E3%81%82%E3%81%93%E3%82%81%E6%B5%B7%E5%B2%B8_-_panoramio.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'yano@mama.akari.ne.jp',
    'https://web.archive.org/web/20161029110233/http://www.panoramio.com/user/5198788',
    '2014-11-06',
    'あこめ海岸（阿南市）',
    'Akome Beach, Anan'
  ),
  '岡山城址': wikiPhoto(
    'anan-okayama-castle.jpg',
    'https://commons.wikimedia.org/wiki/File:Aratano-okayamajo-castle.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'AreaPhoto',
    'https://commons.wikimedia.org/wiki/User:AreaPhoto',
    '2022-04-30',
    '岡山城址（阿南市新野町）',
    'Okayama Castle site, Aratano, Anan'
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

  'スーパーホテル阿南・富岡': sourcePhoto(
    'anan-stay-01.jpg',
    'スーパーホテル阿南・富岡の客室写真',
    'Super Hotel Anan Tomioka room photo',
    'https://travel.rakuten.co.jp/HOTEL/172821/172821.html',
    '楽天トラベル'
  ),
  'スーパーホテル阿南・市役所前禁煙館': sourcePhoto(
    'anan-stay-02.jpg',
    'スーパーホテル阿南・市役所前禁煙館の客室写真',
    'Super Hotel Anan City Hall room photo',
    'https://travel.rakuten.co.jp/HOTEL/179159/179159.html',
    '楽天トラベル'
  ),
  'スマイルホテル阿南': sourcePhoto(
    'anan-stay-03.jpg',
    'スマイルホテル阿南の客室・外観写真',
    'Smile Hotel Anan room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/25307/25307.html',
    '楽天トラベル'
  ),
  'ホテルルートイン阿南': sourcePhoto(
    'anan-stay-04.jpg',
    'ホテルルートイン阿南の客室写真',
    'Hotel Route-Inn Anan room photo',
    'https://travel.rakuten.co.jp/HOTEL/164934/164934.html',
    '楽天トラベル'
  ),
  'ベイサイドホテル龍宮': sourcePhoto(
    'anan-stay-05.jpg',
    'ベイサイドホテル龍宮の客室写真',
    'Bayside Hotel Ryugu room photo',
    'https://travel.rakuten.co.jp/HOTEL/30081/30081.html',
    '楽天トラベル'
  ),
  'あなんステーションホテル': sourcePhoto(
    'anan-stay-06.jpg',
    'あなんステーションホテルの客室写真',
    'Anan Station Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/70924/70924.html',
    '楽天トラベル'
  ),
  '阿南第一ホテル': sourcePhoto(
    'anan-stay-07.jpg',
    '阿南第一ホテルの客室写真',
    'Anan Daiichi Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/5414/5414.html',
    '楽天トラベル'
  ),
  'ホテル 石松': sourcePhoto(
    'anan-stay-08.jpg',
    'ホテル石松の客室写真',
    'Hotel Ishimatsu room photo',
    'https://travel.rakuten.co.jp/HOTEL/3055/3055.html',
    '楽天トラベル'
  ),
  'ロイヤルガーデンホテル': sourcePhoto(
    'anan-stay-09.jpg',
    'ロイヤルガーデンホテルの客室写真',
    'Royal Garden Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/13939/13939.html',
    '楽天トラベル'
  ),
  'ビジネス・イン 一楽': sourcePhoto(
    'anan-stay-10.jpg',
    'ビジネス・イン一楽の客室写真',
    'Business Inn Ichiraku room photo',
    'https://travel.rakuten.co.jp/HOTEL/20672/20672.html',
    '楽天トラベル'
  ),
  '阿南プラザイン': sourcePhoto(
    'anan-stay-11.jpg',
    '阿南プラザインの客室写真',
    'Anan Plaza Inn room photo',
    'https://travel.rakuten.co.jp/HOTEL/68484/68484.html',
    '楽天トラベル'
  ),
  '椿自然園': sourcePhoto(
    'anan-stay-12.jpg',
    '椿自然園の客室写真',
    'Tsubaki Nature Park lodge room photo',
    'https://travel.rakuten.co.jp/HOTEL/13795/13795.html',
    '楽天トラベル'
  ),
  'あなんステーションホテルANNEX': sourcePhoto(
    'anan-stay-13.jpg',
    'あなんステーションホテルANNEXの客室写真',
    'Anan Station Hotel Annex room photo',
    'https://travel.rakuten.co.jp/HOTEL/5427/5427.html',
    '楽天トラベル'
  ),
  'スーパーホテル阿南・富岡 光まちの湯': sourcePhoto(
    'anan-onsen-hikarimachi.jpg',
    'スーパーホテル阿南・富岡の光まちの湯写真',
    'Super Hotel Anan Tomioka Hikarimachi-no-Yu bath photo',
    'https://travel.rakuten.co.jp/HOTEL/172821/172821.html',
    '楽天トラベル'
  ),
  'スーパーホテル阿南・市役所前禁煙館 太龍の湯': sourcePhoto(
    'anan-onsen-tairyu.jpg',
    'スーパーホテル阿南・市役所前禁煙館の太龍の湯写真',
    'Super Hotel Anan Tairyu-no-Yu bath photo',
    'https://travel.rakuten.co.jp/HOTEL/179159/179159.html',
    '楽天トラベル'
  ),
  'スマイルホテル阿南 大浴場': sourcePhoto(
    'anan-onsen-smile.jpg',
    'スマイルホテル阿南の大浴場写真',
    'Smile Hotel Anan large bath photo',
    'https://travel.rakuten.co.jp/HOTEL/25307/25307.html',
    '楽天トラベル'
  ),
  'ホテルルートイン阿南 大浴場': sourcePhoto(
    'anan-onsen-routeinn.jpg',
    'ホテルルートイン阿南の大浴場写真',
    'Hotel Route-Inn Anan large bath photo',
    'https://travel.rakuten.co.jp/HOTEL/164934/164934.html',
    '楽天トラベル'
  ),
  'スーパー銭湯・大和の郷 露天風呂': sourcePhoto(
    'anan-onsen-yamato.jpg',
    'スーパー銭湯・大和の郷の露天風呂写真',
    'Yamato-no-Sato outdoor bath photo',
    'https://travel.rakuten.co.jp/HOTEL/13939/13939.html',
    '楽天トラベル'
  ),
  'ビジネス・イン 一楽 展望大浴場': sourcePhoto(
    'anan-onsen-ichiraku.jpg',
    'ビジネス・イン一楽の展望大浴場写真',
    'Business Inn Ichiraku observatory bath photo',
    'https://travel.rakuten.co.jp/HOTEL/20672/20672.html',
    '楽天トラベル'
  ),
  '阿南プラザイン 大浴場': sourcePhoto(
    'anan-onsen-plaza.jpg',
    '阿南プラザインの大浴場写真',
    'Anan Plaza Inn large bath photo',
    'https://travel.rakuten.co.jp/HOTEL/68484/68484.html',
    '楽天トラベル'
  ),
  '椿自然園 展望風呂': sourcePhoto(
    'anan-onsen-tsubaki.jpg',
    '椿自然園の展望風呂写真',
    'Tsubaki Nature Park observatory bath photo',
    'https://travel.rakuten.co.jp/HOTEL/13795/13795.html',
    '楽天トラベル'
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
  ),
  sight(
    'anan-sight-04',
    '太龍寺ロープウェイ',
    '徳島県阿南市加茂町龍山',
    null,
    ANAN.sources.tairyujiRopeway,
    33.8805,
    134.525
  ),
  sight(
    'anan-sight-05',
    '那賀川',
    '徳島県阿南市那賀川町',
    null,
    ANAN.sources.nakagawa,
    33.95,
    134.65
  ),
  sight(
    'anan-sight-06',
    'あこめ海岸',
    '徳島県阿南市椿町',
    null,
    ANAN.sources.akome,
    33.82,
    134.72
  ),
  sight(
    'anan-sight-07',
    '岡山城址',
    '徳島県阿南市新野町入田',
    null,
    ANAN.sources.okayamaCastle,
    33.85,
    134.56
  ),
  {
    id: 'anan-extra-hikarimachi',
    jis: ANAN.jis,
    name_ja: 'スーパーホテル阿南・富岡 光まちの湯',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県阿南市学原町深田9-1',
    phone: '0884-22-9000',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/172821/172821.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/172821/172821.html',
    license: '市公式サイト掲載情報',
    accessed: ANAN.sources.accessed
  },
  {
    id: 'anan-extra-tairyu',
    jis: ANAN.jis,
    name_ja: 'スーパーホテル阿南・市役所前禁煙館 太龍の湯',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県阿南市富岡町トノ町51-9',
    phone: '0884-28-9002',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/179159/179159.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/179159/179159.html',
    license: '市公式サイト掲載情報',
    accessed: ANAN.sources.accessed
  },
  {
    id: 'anan-extra-smile-daiyoku',
    jis: ANAN.jis,
    name_ja: 'スマイルホテル阿南 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県阿南市富岡町滝の下42-4',
    phone: '0884-23-2222',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/25307/25307.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/25307/25307.html',
    license: '市公式サイト掲載情報',
    accessed: ANAN.sources.accessed
  },
  {
    id: 'anan-extra-routeinn-daiyoku',
    jis: ANAN.jis,
    name_ja: 'ホテルルートイン阿南 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県阿南市領家町火屋ヶ原142',
    phone: '050-5847-7340',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/164934/164934.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/164934/164934.html',
    license: '市公式サイト掲載情報',
    accessed: ANAN.sources.accessed
  },
  {
    id: 'anan-extra-yamato-roten',
    jis: ANAN.jis,
    name_ja: 'スーパー銭湯・大和の郷 露天風呂',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県阿南市富岡町あ王谷52-2',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/13939/13939.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/13939/13939.html',
    license: '市公式サイト掲載情報',
    accessed: ANAN.sources.accessed
  },
  {
    id: 'anan-extra-ichiraku-tenbo',
    jis: ANAN.jis,
    name_ja: 'ビジネス・イン 一楽 展望大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県阿南市津乃峰町東分115-1',
    phone: null,
    official_url: 'https://travel.rakuten.co.jp/HOTEL/20672/20672.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/20672/20672.html',
    license: '市公式サイト掲載情報',
    accessed: ANAN.sources.accessed
  },
  {
    id: 'anan-extra-plaza-daiyoku',
    jis: ANAN.jis,
    name_ja: '阿南プラザイン 大浴場',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県阿南市富岡町滝ノ下17-1',
    phone: '0884-28-6600',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/68484/68484.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/68484/68484.html',
    license: '市公式サイト掲載情報',
    accessed: ANAN.sources.accessed
  },
  {
    id: 'anan-extra-tsubaki-tenbo',
    jis: ANAN.jis,
    name_ja: '椿自然園 展望風呂',
    reading: null,
    category: 'tourism',
    lat: null,
    lon: null,
    address: '徳島県阿南市椿町瀬井45',
    phone: '0884-33-1127',
    official_url: 'https://travel.rakuten.co.jp/HOTEL/13795/13795.html',
    hours: null,
    source_url: 'https://travel.rakuten.co.jp/HOTEL/13795/13795.html',
    license: '市公式サイト掲載情報',
    accessed: ANAN.sources.accessed
  }
];
