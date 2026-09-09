/**
 * Geisei Village sourced facts. Do not invent population.
 * Hall / JIS from village HP / JIS X 0402 (accessed 2026-09-08). JIS 39307. Seventeenth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: 芸西村の家 和室8畳. Dining includes SEA HOUSE pasta dish (TG610 reclass from sight-only). Onsen: 0 (大浴場≠温泉). Experience: 0. Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const GEISEI = {
  nameJa: '芸西村',
  nameEn: 'Geisei',
  reading: 'げいせいむら',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'geisei',
  jis: '39307',
  jlis: '393070',
  sameAs: 'https://www.vill.geisei.kochi.jp/',
  hall: {
    postalCode: '781-5792',
    addressJa: '高知県安芸郡芸西村和食甲1262番地',
    addressEn: '1262 Wajiki-ko, Geisei Village, Aki District, Kochi 781-5792, Japan',
    phone: '0887-33-2111'
  },
  sources: {
    home: 'https://www.vill.geisei.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E8%8A%B8%E8%A5%BF%E6%9D%91',
    kankou: 'https://www.vill.geisei.kochi.jp/',
    kotogahama: 'https://commons.wikimedia.org/wiki/File:Kotogahama.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39307/rstLst/',
    muraNoIe: 'https://travel.rakuten.co.jp/HOTEL/197184/197184.html',
    accessed: '2026-09-09'
  }
} as const;

export const GEISEI_EXPECTED_ROW_COUNT = 4;
export const GEISEI_EXPECTED_GEO_COUNT = 4;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Kotogahama Beach. Hero title remains municipality name only. */
export const GEISEI_PLACE_PHOTO = wikiPhoto(
  'geisei-cover-kotogahama.jpg',
  'https://commons.wikimedia.org/wiki/File:Kotogahama.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  'Lumi iori', 'https://commons.wikimedia.org/wiki/User:Lumi_iori', '2019-11-04',
  '琴ヶ浜', 'Kotogahama Beach, Geisei'
);

const TABELOG_39002820 = 'https://tabelog.com/kochi/A3901/A390106/39002820/';
const TABELOG_39005910 = 'https://tabelog.com/kochi/A3901/A390106/39005910/';
const TABELOG_39002685 = 'https://tabelog.com/kochi/A3901/A390106/39002685/';
const TABELOG_39004235 = 'https://tabelog.com/kochi/A3901/A390106/39004235/';

export const GEISEI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '琴ヶ浜': GEISEI_PLACE_PHOTO,
  'SEA HOUSE': sourcePhoto(
    'geisei-39004235-dish.jpg',
    'SEA HOUSEのシーフードパスタ料理写真',
    'SEA HOUSE seafood pasta dish photo',
    TABELOG_39004235,
    '食べログ'
  ),
  '和食駅': wikiPhoto(
    'geisei-wajiki-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Wajiki_station_02.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian', 'https://commons.wikimedia.org/wiki/User:Navian', '2010-05-16',
    '和食駅', 'Wajiki Station'
  ),
  '西分駅': wikiPhoto(
    'geisei-nishibun-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Nishibun_station_02.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'Navian', 'https://commons.wikimedia.org/wiki/User:Navian', '2010-05-16',
    '西分駅', 'Nishibun Station'
  ),
  '芸西村役場': wikiPhoto(
    'geisei-village-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Geisei_village_hall.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', 'https://commons.wikimedia.org/wiki/User:%E3%82%A2%E3%83%A9%E3%83%84%E3%82%AF', '2014-04-27',
    '芸西村役場', 'Geisei Village Hall'
  ),
  '芸西村の家': sourcePhoto(
    'geisei-stay-mura-no-ie.jpg',
    '芸西村の家の和室写真',
    'Geisei Village House Japanese-room photo',
    'https://travel.rakuten.co.jp/HOTEL/197184/197184.html',
    '楽天トラベル'
  ),
  '活魚レストラン 藤 芸西店': sourcePhoto('geisei-39002820-dish.jpg', '活魚レストラン 藤 芸西店の料理写真', 'Katsugyo Restaurant Fuji Geisei food photo', TABELOG_39002820, '食べログ'),
  'Kochi黒潮カントリークラブ': sourcePhoto('geisei-39005910-dish.jpg', 'Kochi黒潮カントリークラブの料理写真', 'Kochi Kuroshio Country Club food photo', TABELOG_39005910, '食べログ'),
  'レストランサザンクロス': sourcePhoto('geisei-39002685-dish.jpg', 'レストランサザンクロスの料理写真', 'Restaurant Southern Cross food photo', TABELOG_39002685, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: GEISEI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: GEISEI.sources.accessed};
}

export const GEISEI_FACILITIES: readonly FacilityRow[] = [
  sight('geisei-sight-01', '琴ヶ浜', '高知県安芸郡芸西村', null, 'https://commons.wikimedia.org/wiki/File:Kotogahama.jpg', 33.5172372, 133.8039501),
  sight('geisei-sight-03', '和食駅', '高知県安芸郡芸西村和食', null, 'https://commons.wikimedia.org/wiki/File:Wajiki_station_02.jpg', 33.5178986, 133.8092126),
  sight('geisei-sight-04', '西分駅', '高知県安芸郡芸西村西分', null, 'https://commons.wikimedia.org/wiki/File:Nishibun_station_02.jpg', 33.5177184, 133.7903020),
  sight('geisei-sight-05', '芸西村役場', '高知県安芸郡芸西村和食甲1262番地', '0887-33-2111', 'https://commons.wikimedia.org/wiki/File:Geisei_village_hall.JPG', 33.5269437, 133.8088572)
];
