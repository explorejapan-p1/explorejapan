/**
 * Otsuki Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 / Wikipedia 大月町 (accessed 2026-09-08). JIS 39424. Thirty-first Kochi hub after …津野町・四万十町 (佐川町・田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: ベルリーフ大月 ツインルーム② (gallery mediaInfo fileName「ツインルーム②」cat 00000001). Onsen: 0 (stay≠onsen — in-room bath not onsen pack). Dining densify TG610. Onsen: 0 (stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const OTSUKI = {
  nameJa: '大月町',
  nameEn: 'Otsuki',
  reading: 'おおつきちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'otsuki',
  jis: '39424',
  jlis: '394243',
  sameAs: 'https://www.town.otsuki.kochi.jp/',
  hall: {
    postalCode: '788-0302',
    addressJa: '高知県幡多郡大月町弘見2230番地',
    addressEn: '2230 Hiromi, Otsuki Town, Hata District, Kochi 788-0302, Japan',
    phone: '0880-73-1111'
  },
  sources: {
    home: 'https://www.town.otsuki.kochi.jp/',
    hall: 'https://www.town.otsuki.kochi.jp/index2.php',
    kashiwajima: 'https://commons.wikimedia.org/wiki/File:Kashiwajima_(Otsuki),_zenkei-1.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39424/rstLst/',
    belleaf: 'https://travel.rakuten.co.jp/HOTEL/201933/201933.html',
    accessed: '2026-09-09'
  }
} as const;

export const OTSUKI_EXPECTED_ROW_COUNT = 6;
export const OTSUKI_EXPECTED_GEO_COUNT = 6;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Kashiwajima. Hero title remains municipality name only. */
export const OTSUKI_PLACE_PHOTO = wikiPhoto(
  'otsuki-cover-kashiwajima.jpg',
  'https://commons.wikimedia.org/wiki/File:Kashiwajima_(Otsuki),_zenkei-1.jpg',
  'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
  'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2020-12-28',
  '柏島全景', 'Kashiwajima overview'
);

const TABELOG_39003905 = 'https://tabelog.com/kochi/A3904/A390404/39003905/';
const TABELOG_39005685 = 'https://tabelog.com/kochi/A3904/A390404/39005685/';
const TABELOG_39009012 = 'https://tabelog.com/kochi/A3904/A390404/39009012/';
const TABELOG_39004919 = 'https://tabelog.com/kochi/A3904/A390404/39004919/';
const TABELOG_39007917 = 'https://tabelog.com/kochi/A3904/A390404/39007917/';
const RAKUTEN_201933 = 'https://travel.rakuten.co.jp/HOTEL/201933/201933.html';
const COMMONS_RYUGAHAMA = 'https://commons.wikimedia.org/wiki/File:Ryugahama_Campgrounds_(%E7%AB%9C%E3%83%B6%E6%B5%9C%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4).JPG';

export const OTSUKI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '柏島': OTSUKI_PLACE_PHOTO,
  '柏島石堤': wikiPhoto(
    'otsuki-sekitei.jpg',
    'https://commons.wikimedia.org/wiki/File:Kashiwajima_(Otsuki),_sekitei.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2020-12-28',
    '柏島石堤', 'Kashiwajima stone embankment'
  ),
  '柏島観光情報発信センター': wikiPhoto(
    'otsuki-tic.jpg',
    'https://commons.wikimedia.org/wiki/File:Kashiwajima_Tourist_Information_Center.jpg',
    'CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0',
    'ブルーノ・プラス', 'https://commons.wikimedia.org/wiki/File:Kashiwajima_Tourist_Information_Center.jpg', '2019-06',
    '柏島観光情報発信センター', 'Kashiwajima Tourist Information Center'
  ),
  '大堂展望台': wikiPhoto(
    'otsuki-odo.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%A0%82%E5%B1%95%E6%9C%9B%E5%8F%B0%E3%81%8B%E3%82%89_-_panoramio_(1).jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%A0%82%E5%B1%95%E6%9C%9B%E5%8F%B0%E3%81%8B%E3%82%89_-_panoramio_(1).jpg', '2015-05-05',
    '大堂展望台からの眺め', 'View from Odo observatory'
  ),
  '道の駅大月': wikiPhoto(
    'otsuki-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Roadside_Station_Otsuki.jpg',
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2010-07-28',
    '道の駅大月', 'Michinoeki Otsuki'
  ),
  'ベルリーフ大月': sourcePhoto(
    'otsuki-stay-twin.jpg',
    'ベルリーフ大月のツインルーム客室写真',
    'Belleaf Otsuki twin-room photo',
    RAKUTEN_201933,
    '楽天トラベル'
  ),
  '魚ごころ': sourcePhoto('otsuki-39003905-dish.jpg', '魚ごころの料理写真', 'Uogokoro food photo', TABELOG_39003905, '食べログ'),
  'お好みきみ': sourcePhoto('otsuki-39005685-dish.jpg', 'お好みきみの料理写真', 'Okonomi Kimi food photo', TABELOG_39005685, '食べログ'),
  '谷鮮魚食堂': sourcePhoto('otsuki-39009012-dish.jpg', '谷鮮魚食堂の料理写真', 'Tani Sengyo Shokudo food photo', TABELOG_39009012, '食べログ'),
  'なぎさ': sourcePhoto('otsuki-39004919-dish.jpg', 'なぎさの料理写真', 'Nagisa food photo', TABELOG_39004919, '食べログ'),
  '土佐 力豚屋': sourcePhoto('otsuki-39007917-dish.jpg', '土佐 力豚屋の料理写真', 'Tosa Rikiton-ya food photo', TABELOG_39007917, '食べログ'),
  '竜ヶ浜キャンプ場': wikiPhoto(
    'otsuki-ryugahama.jpg',
    COMMONS_RYUGAHAMA,
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'FC dc desu', 'https://commons.wikimedia.org/wiki/File:Ryugahama_Campgrounds_(%E7%AB%9C%E3%83%B6%E6%B5%9C%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4).JPG', '2013-08-20',
    '竜ヶ浜キャンプ場', 'Ryugahama Campground'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: OTSUKI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '町公式・公式観光サイト掲載情報', accessed: OTSUKI.sources.accessed};
}

export const OTSUKI_FACILITIES: readonly FacilityRow[] = [
  sight('otsuki-sight-01', '柏島', '高知県幡多郡大月町柏島', null, 'https://commons.wikimedia.org/wiki/File:Kashiwajima_(Otsuki),_zenkei-1.jpg', 32.76936111, 132.62144444),
  sight('otsuki-sight-02', '柏島石堤', '高知県幡多郡大月町柏島', null, 'https://commons.wikimedia.org/wiki/File:Kashiwajima_(Otsuki),_sekitei.jpg', 32.76936111, 132.62144444),
  sight('otsuki-sight-03', '柏島観光情報発信センター', '高知県幡多郡大月町柏島', null, 'https://commons.wikimedia.org/wiki/File:Kashiwajima_Tourist_Information_Center.jpg', 32.76936111, 132.62144444),
  sight('otsuki-sight-04', '大堂展望台', '高知県幡多郡大月町', null, 'https://commons.wikimedia.org/wiki/File:%E5%A4%A7%E5%A0%82%E5%B1%95%E6%9C%9B%E5%8F%B0%E3%81%8B%E3%82%89_-_panoramio_(1).jpg', 32.772232, 132.643807),
  sight('otsuki-sight-05', '道の駅大月', '高知県幡多郡大月町弘見2610', null, 'https://commons.wikimedia.org/wiki/File:Roadside_Station_Otsuki.jpg', 32.82878, 132.70939),
  sight('otsuki-sight-06', '竜ヶ浜キャンプ場', '高知県幡多郡大月町柏島1001-1', '0880-76-0607', COMMONS_RYUGAHAMA, 32.768414, 132.641459)
];
