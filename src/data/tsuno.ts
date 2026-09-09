/**
 * Tsuno Town sourced facts. Do not invent population.
 * Hall / JIS from town HP / JIS X 0402 / Wikipedia 津野町 (accessed 2026-09-08). JIS 39411. Twenty-ninth Kochi hub after …梼原町・日高村 (佐川町・田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay + Commons sights. Stay: 星ふるヴィレッジTENGU. Dining densify TG610. Onsen: 0 (stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TSUNO = {
  nameJa: '津野町',
  nameEn: 'Tsuno',
  reading: 'つのちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'tsuno',
  jis: '39411',
  jlis: '394114',
  sameAs: 'https://town.kochi-tsuno.lg.jp/',
  hall: {
    postalCode: '785-0201',
    addressJa: '高知県高岡郡津野町永野225番地1',
    addressEn: '225-1 Nagano, Tsuno Town, Takaoka District, Kochi 785-0201, Japan',
    phone: '0889-55-2311'
  },
  sources: {
    home: 'https://town.kochi-tsuno.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E6%B4%A5%E9%87%8E%E7%94%BA',
    karst: 'https://commons.wikimedia.org/wiki/File:Sikokukarusuto_20250724_2.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39411/rstLst/',
    tengu: 'https://travel.rakuten.co.jp/HOTEL/129993/129993.html',
    accessed: '2026-09-09'
  }
} as const;

export const TSUNO_EXPECTED_ROW_COUNT = 7;
export const TSUNO_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
}

/** Cover: Shikoku Karst. Hero title remains municipality name only. */
export const TSUNO_PLACE_PHOTO = wikiPhoto(
  'tsuno-cover-karst.jpg',
  'https://commons.wikimedia.org/wiki/File:Sikokukarusuto_20250724_2.jpg',
  'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
  'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2025-07-24',
  '四国カルスト', 'Shikoku Karst'
);

const TABELOG_39004821 = 'https://tabelog.com/kochi/A3903/A390303/39004821/';
const TABELOG_39005006 = 'https://tabelog.com/kochi/A3903/A390303/39005006/';
const TABELOG_39004508 = 'https://tabelog.com/kochi/A3903/A390303/39004508/';
const RAKUTEN_129993 = 'https://travel.rakuten.co.jp/HOTEL/129993/129993.html';
const TABELOG_39005801 = 'https://tabelog.com/kochi/A3903/A390303/39005801/';
const TABELOG_39009141 = 'https://tabelog.com/kochi/A3903/A390303/39009141/';
const TABELOG_39002986 = 'https://tabelog.com/kochi/A3903/A390303/39002986/';
const TABELOG_39006722 = 'https://tabelog.com/kochi/A3903/A390303/39006722/';
const TABELOG_39006947 = 'https://tabelog.com/kochi/A3903/A390303/39006947/';
const COMMONS_IRAZUYAMA = 'https://commons.wikimedia.org/wiki/File:Mt.Irazuyama.jpg';
const COMMONS_MORINOSUBAKO = 'https://commons.wikimedia.org/wiki/File:%E8%BE%B2%E6%9D%91%E4%BA%A4%E6%B5%81%E6%96%BD%E8%A8%AD%E3%80%8C%E6%A3%AE%E3%81%AE%E5%B7%A3%E7%AE%B1%E3%80%8D.jpg';


export const TSUNO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '四国カルスト': TSUNO_PLACE_PHOTO,
  '風の里公園': wikiPhoto(
    'tsuno-kazenosato.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%A2%A8%E3%81%AE%E9%87%8C%E5%85%AC%E5%9C%92_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E9%A2%A8%E3%81%AE%E9%87%8C%E5%85%AC%E5%9C%92_-_panoramio.jpg', '2014-10-18',
    '風の里公園', 'Kaze-no-Sato Park'
  ),
  '四万十川源流之碑': wikiPhoto(
    'tsuno-genryu.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B7%9D%E6%BA%90%E6%B5%81%E3%81%AE%E7%A2%91.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Asset utilitist', 'https://commons.wikimedia.org/wiki/User:Asset_utilitist', '2026-05-23',
    '四万十川源流之碑', 'Shimanto River source monument'
  ),
  '有宮神社': wikiPhoto(
    'tsuno-arimiya.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%B4%A5%E9%87%8E%E7%94%BA_%E6%9C%89%E5%AE%AE%E7%A5%9E%E7%A4%BE.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '前田大我', 'https://commons.wikimedia.org/wiki/User:%E5%89%8D%E7%94%B0%E5%A4%A7%E6%88%91', '2022-08-05',
    '有宮神社', 'Arimiya Shrine'
  ),
  '道の駅布施ヶ坂': wikiPhoto(
    'tsuno-fusegasaka.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E5%B8%83%E6%96%BD%E3%83%B6%E5%9D%82_-_panoramio.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Yobito KAYANUMA', 'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E5%B8%83%E6%96%BD%E3%83%B6%E5%9D%82_-_panoramio.jpg', '2009-03-08',
    '道の駅布施ヶ坂', 'Michinoeki Fusegasaka'
  ),
  '星ふるヴィレッジTENGU': sourcePhoto(
    'tsuno-stay-twin.jpg',
    '星ふるヴィレッジTENGUのツインルーム客室写真',
    'Hoshifuru Village TENGU twin-room photo',
    RAKUTEN_129993,
    '楽天トラベル'
  ),
  '自由軒 葉山店': sourcePhoto('tsuno-39004821-dish.jpg', '自由軒 葉山店の料理写真', 'Jiyuken Hayama food photo', TABELOG_39004821, '食べログ'),
  '山賊茶屋': sourcePhoto('tsuno-39005006-dish.jpg', '山賊茶屋の料理写真', 'Sanzoku Chaya food photo', TABELOG_39005006, '食べログ'),
  'いまはし': sourcePhoto('tsuno-39004508-dish.jpg', 'いまはしの料理写真', 'Imahashi food photo', TABELOG_39004508, '食べログ'),
  '夕晩屋': sourcePhoto('tsuno-39005801-dish.jpg', '夕晩屋の料理写真', 'Yubanya food photo', TABELOG_39005801, '食べログ'),
  '吉村虎太郎邸': sourcePhoto('tsuno-39009141-dish.jpg', '吉村虎太郎邸の料理写真', 'Yoshimura Torataro Residence food photo', TABELOG_39009141, '食べログ'),
  '風車の駅': sourcePhoto('tsuno-39002986-dish.jpg', '風車の駅の料理写真', 'Kazaguruma-no-Eki food photo', TABELOG_39002986, '食べログ'),
  '豚太郎 東津野店': sourcePhoto('tsuno-39006722-dish.jpg', '豚太郎 東津野店の料理写真', 'Butataro Higashi-Tsuno food photo', TABELOG_39006722, '食べログ'),
  'いろは食堂': sourcePhoto('tsuno-39006947-dish.jpg', 'いろは食堂の料理写真', 'Iroha Shokudo food photo', TABELOG_39006947, '食べログ'),
  '不入山': wikiPhoto(
    'tsuno-irazuyama.jpg',
    COMMONS_IRAZUYAMA,
    'Public domain', 'https://creativecommons.org/publicdomain/mark/1.0/',
    'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2010-07-28',
    '不入山', 'Mount Irazu'
  ),
  '森の巣箱': wikiPhoto(
    'tsuno-morinosubako.jpg',
    COMMONS_MORINOSUBAKO,
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '前田大我', 'https://commons.wikimedia.org/wiki/User:%E5%89%8D%E7%94%B0%E5%A4%A7%E6%88%91', '2022-08-05',
    '農村交流施設「森の巣箱」', 'Rural exchange facility Mori-no-Subako'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: TSUNO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: TSUNO.sources.accessed};
}

export const TSUNO_FACILITIES: readonly FacilityRow[] = [
  sight('tsuno-sight-01', '四国カルスト', '高知県高岡郡津野町', null, 'https://commons.wikimedia.org/wiki/File:Sikokukarusuto_20250724_2.jpg', 33.4764745, 133.0020298),
  sight('tsuno-sight-02', '風の里公園', '高知県高岡郡津野町', null, 'https://commons.wikimedia.org/wiki/File:%E9%A2%A8%E3%81%AE%E9%87%8C%E5%85%AC%E5%9C%92_-_panoramio.jpg', 33.45929444, 133.14520833),
  sight('tsuno-sight-03', '四万十川源流之碑', '高知県高岡郡津野町', null, 'https://commons.wikimedia.org/wiki/File:%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B7%9D%E6%BA%90%E6%B5%81%E3%81%AE%E7%A2%91.jpg', 33.4414352, 133.0723001),
  sight('tsuno-sight-04', '有宮神社', '高知県高岡郡津野町', null, 'https://commons.wikimedia.org/wiki/File:%E6%B4%A5%E9%87%8E%E7%94%BA_%E6%9C%89%E5%AE%AE%E7%A5%9E%E7%A4%BE.jpg', 33.4081804, 133.1864549),
  sight('tsuno-sight-05', '道の駅布施ヶ坂', '高知県高岡郡津野町船戸654-1', null, 'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E5%B8%83%E6%96%BD%E3%83%B6%E5%9D%82_-_panoramio.jpg', 33.42595, 133.100367),
  sight('tsuno-sight-06', '不入山', '高知県高岡郡津野町', null, COMMONS_IRAZUYAMA, 33.476944, 133.004444),
  sight('tsuno-sight-07', '森の巣箱', '高知県高岡郡津野町貝ノ川床鍋392-2', '0889-40-1703', COMMONS_MORINOSUBAKO, 33.4071570, 133.1917896)
];
