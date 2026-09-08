/**
 * Shimanto Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 / Wikipedia 四万十町 (accessed 2026-09-08). JIS 39412. Thirtieth Kochi hub after …日高村・津野町 (佐川町・田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: ファミリーロッジ旅籠屋・四万十店 ツインルーム (gallery mediaInfo「ツインルーム」「幅1.5m以上のクイーンサイズのベッドが2台」cat 00000001). Onsen: 0 (stay≠onsen). Shop/commerce honest 0. Dining honest 3.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SHIMANTOCHO = {
  nameJa: '四万十町',
  nameEn: 'Shimanto Town',
  reading: 'しまんとちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'shimantocho',
  jis: '39412',
  jlis: '394122',
  sameAs: 'https://www.town.shimanto.lg.jp/',
  hall: {
    postalCode: '786-8501',
    addressJa: '高知県高岡郡四万十町琴平町16番17号',
    addressEn: '16-17 Kotohira-cho, Shimanto Town, Takaoka District, Kochi 786-8501, Japan',
    phone: '0880-22-3111'
  },
  sources: {
    home: 'https://www.town.shimanto.lg.jp/',
    hall: 'https://www.town.shimanto.lg.jp/yakuba/',
    itchibaw: 'https://commons.wikimedia.org/wiki/File:%E4%B8%80%E6%96%97%E4%BF%B5%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39412/rstLst/',
    hatagoya: 'https://travel.rakuten.co.jp/HOTEL/167315/167315.html',
    accessed: '2026-09-08'
  }
} as const;

export const SHIMANTOCHO_EXPECTED_ROW_COUNT = 5;
export const SHIMANTOCHO_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Itchibaw Chinka Bridge. Hero title remains municipality name only. */
export const SHIMANTOCHO_PLACE_PHOTO = wikiPhoto(
  'shimantocho-cover-itchibaw.jpg',
  'https://commons.wikimedia.org/wiki/File:%E4%B8%80%E6%96%97%E4%BF%B5%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg',
  'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
  'sk01', 'https://commons.wikimedia.org/wiki/File:%E4%B8%80%E6%96%97%E4%BF%B5%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg', '2014-10-18',
  '一斗俵沈下橋', 'Itchibaw Chinka Bridge'
);

const TABELOG_39004802 = 'https://tabelog.com/kochi/A3904/A390402/39004802/';
const TABELOG_39007371 = 'https://tabelog.com/kochi/A3904/A390402/39007371/';
const TABELOG_39005618 = 'https://tabelog.com/kochi/A3904/A390402/39005618/';
const RAKUTEN_167315 = 'https://travel.rakuten.co.jp/HOTEL/167315/167315.html';

export const SHIMANTOCHO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '一斗俵沈下橋': SHIMANTOCHO_PLACE_PHOTO,
  '岩本寺': wikiPhoto(
    'shimantocho-iwamotoji.jpg',
    'https://commons.wikimedia.org/wiki/File:Iwamotoji_12.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2021-12-28',
    '岩本寺本堂', 'Iwamoto-ji main hall'
  ),
  '海洋堂ホビー館四万十': wikiPhoto(
    'shimantocho-kaiyodo.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%B5%B7%E6%B4%8B%E5%A0%82%E3%83%9B%E3%83%93%E3%83%BC%E9%A4%A8_-_panoramio_(1).jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E6%B5%B7%E6%B4%8B%E5%A0%82%E3%83%9B%E3%83%93%E3%83%BC%E9%A4%A8_-_panoramio_(1).jpg', '2013-03-17',
    '海洋堂ホビー館四万十', 'Kaiyodo Hobbykan Shimanto'
  ),
  '窪川駅': wikiPhoto(
    'shimantocho-kubokawa.jpg',
    'https://commons.wikimedia.org/wiki/File:Kubokawa_Station-2018-02.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Gohachiyasu1214', 'https://commons.wikimedia.org/wiki/User:Gohachiyasu1214', '2018-10-17',
    '窪川駅', 'Kubokawa Station'
  ),
  '道の駅四万十大正': wikiPhoto(
    'shimantocho-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Roadside_Station_Shimanto_Taisho.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2010-07-28',
    '道の駅四万十大正', 'Michinoeki Shimanto Taisho'
  ),
  'ファミリーロッジ旅籠屋・四万十店': sourcePhoto(
    'shimantocho-stay-twin.jpg',
    'ファミリーロッジ旅籠屋・四万十店のツインルーム客室写真',
    'Family Lodge Hatagoya Shimanto twin-room photo',
    RAKUTEN_167315,
    '楽天トラベル'
  ),
  'Pizzeria Lo-co': sourcePhoto('shimantocho-39004802-dish.jpg', 'Pizzeria Lo-coの料理写真', 'Pizzeria Lo-co food photo', TABELOG_39004802, '食べログ'),
  'コバコ': sourcePhoto('shimantocho-39007371-dish.jpg', 'コバコの料理写真', 'Kobako food photo', TABELOG_39007371, '食べログ'),
  'ボルゲリ': sourcePhoto('shimantocho-39005618-dish.jpg', 'ボルゲリの料理写真', 'Bolgeri food photo', TABELOG_39005618, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: SHIMANTOCHO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: SHIMANTOCHO.sources.accessed};
}

export const SHIMANTOCHO_FACILITIES: readonly FacilityRow[] = [
  sight('shimantocho-sight-01', '一斗俵沈下橋', '高知県高岡郡四万十町一斗俵', null, 'https://commons.wikimedia.org/wiki/File:%E4%B8%80%E6%96%97%E4%BF%B5%E6%B2%88%E4%B8%8B%E6%A9%8B_-_panoramio.jpg', 33.28442, 133.1098),
  sight('shimantocho-sight-02', '岩本寺', '高知県高岡郡四万十町茂串町3-13', null, 'https://commons.wikimedia.org/wiki/File:Iwamotoji_12.jpg', 33.20797222, 133.13461111),
  sight('shimantocho-sight-03', '海洋堂ホビー館四万十', '高知県高岡郡四万十町打井川145-1', null, 'https://commons.wikimedia.org/wiki/File:%E6%B5%B7%E6%B4%8B%E5%A0%82%E3%83%9B%E3%83%93%E3%83%BC%E9%A4%A8_-_panoramio_(1).jpg', 33.15275, 133.04505556),
  sight('shimantocho-sight-04', '窪川駅', '高知県高岡郡四万十町琴平町', null, 'https://commons.wikimedia.org/wiki/File:Kubokawa_Station-2018-02.jpg', 33.21242222, 133.13717778),
  sight('shimantocho-sight-05', '道の駅四万十大正', '高知県高岡郡四万十町大正16-3', null, 'https://commons.wikimedia.org/wiki/File:Roadside_Station_Shimanto_Taisho.jpg', 33.18275, 132.97131)
];
