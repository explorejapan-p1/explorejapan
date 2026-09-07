/**
 * Kochi City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-08). JIS 39201. First Kochi hub (高知市).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Honest 0 onsen (business-hotel unit baths only) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KOCHI = {
  nameJa: '高知市',
  nameEn: 'Kochi',
  reading: 'こうちし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'kochi',
  jis: '39201',
  jlis: '392014',
  sameAs: 'https://www.city.kochi.kochi.jp/',
  hall: {
    postalCode: '780-8571',
    addressJa: '高知県高知市本町5丁目1-45',
    addressEn: '1-45 Honmachi 5-chome, Kochi City, Kochi 780-8571, Japan',
    phone: '088-822-8111'
  },
  sources: {
    home: 'https://www.city.kochi.kochi.jp/',
    hall: 'https://www.city.kochi.kochi.jp/',
    kankou: 'https://www.city.kochi.kochi.jp/',
    castle: 'https://ja.wikipedia.org/wiki/%E9%AB%98%E7%9F%A5%E5%9F%8E',
    tabelogCity: 'https://tabelog.com/kochi/C39201/rstLst/',
    pacific: 'https://travel.rakuten.co.jp/HOTEL/8584/8584.html',
    accessed: '2026-09-08'
  }
} as const;

export const KOCHI_EXPECTED_ROW_COUNT = 9;
export const KOCHI_EXPECTED_GEO_COUNT = 9;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Kochi Castle tenshu. */
export const KOCHI_PLACE_PHOTO = wikiPhoto(
  'kochi-castle.jpg',
  'https://commons.wikimedia.org/wiki/File:Kochi_Castle08s3872.jpg',
  'CC BY 2.5', 'https://creativecommons.org/licenses/by/2.5',
  '663highland', 'https://ja.wikipedia.org/wiki/user:663highland', '2008-02-28',
  '高知城天守', 'Kochi Castle keep, Kochi City'
);

const TABELOG_39004068 = 'https://tabelog.com/kochi/A3901/A390101/39004068/';
const TABELOG_39007487 = 'https://tabelog.com/kochi/A3901/A390101/39007487/';
const TABELOG_39007924 = 'https://tabelog.com/kochi/A3901/A390101/39007924/';
const TABELOG_39000703 = 'https://tabelog.com/kochi/A3901/A390101/39000703/';
const TABELOG_39007166 = 'https://tabelog.com/kochi/A3901/A390101/39007166/';
const TABELOG_39000346 = 'https://tabelog.com/kochi/A3901/A390101/39000346/';
const TABELOG_39005612 = 'https://tabelog.com/kochi/A3901/A390101/39005612/';
const TABELOG_39001250 = 'https://tabelog.com/kochi/A3901/A390101/39001250/';
const TABELOG_39000063 = 'https://tabelog.com/kochi/A3901/A390101/39000063/';
const TABELOG_39000116 = 'https://tabelog.com/kochi/A3901/A390101/39000116/';
const TABELOG_39000409 = 'https://tabelog.com/kochi/A3901/A390101/39000409/';
const TABELOG_39000019 = 'https://tabelog.com/kochi/A3901/A390101/39000019/';
const TABELOG_39000134 = 'https://tabelog.com/kochi/A3901/A390101/39000134/';
const TABELOG_39001888 = 'https://tabelog.com/kochi/A3901/A390101/39001888/';
const TABELOG_39003723 = 'https://tabelog.com/kochi/A3901/A390101/39003723/';
const TABELOG_39001021 = 'https://tabelog.com/kochi/A3901/A390101/39001021/';

export const KOCHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '高知城': KOCHI_PLACE_PHOTO,
  '桂浜': wikiPhoto(
    'kochi-katsurahama.jpg',
    'https://commons.wikimedia.org/wiki/File:Kochi_Katsurahama_Daytime_1.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '京浜にけ', 'https://commons.wikimedia.org/wiki/File:Kochi_Katsurahama_Daytime_1.JPG', '2010-08-31',
    '桂浜（高知市）', 'Katsurahama beach, Kochi'
  ),
  '坂本龍馬像': wikiPhoto(
    'kochi-ryoma.jpg',
    'https://commons.wikimedia.org/wiki/File:Statue_of_Sakamoto_Ryoma_in_Katsurahama_02.jpg',
    'CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0',
    'ノボホショコロトソ', 'https://commons.wikimedia.org/wiki/User:%E3%83%8E%E3%83%9C%E3%83%9B%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%AD%E3%83%88%E3%82%BD', '2024-12-27',
    '桂浜の坂本龍馬像', 'Statue of Sakamoto Ryoma at Katsurahama'
  ),
  '日曜市': wikiPhoto(
    'kochi-nichiyoichi.jpg',
    'https://commons.wikimedia.org/wiki/File:Nichiyoichi.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '無料画像・フリー画さんより引用掲載', 'https://commons.wikimedia.org/wiki/File:Nichiyoichi.jpg', '2009-12-06',
    '高知の日曜市', 'Kochi Sunday Market'
  ),
  'わんぱーくこうちアニマルランド': wikiPhoto(
    'kochi-wanpark.jpg',
    'https://commons.wikimedia.org/wiki/File:Main_gate_of_Wan-Park_in_Kochi_Prefecuture.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'CurrenChan', 'https://commons.wikimedia.org/wiki/User:CurrenChan', '2022-08-16',
    'わんぱーくこうちアニマルランド正門', 'Wanpark Kochi Animal Land main gate'
  ),
  '五台山': wikiPhoto(
    'kochi-godaisan.jpg',
    'https://commons.wikimedia.org/wiki/File:200104_Mt_Godai_Kochi_Japan01s3.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '663highland', 'https://ja.wikipedia.org/wiki/user:663highland', '2020-01-04',
    '五台山（高知市）', 'Mount Godai, Kochi'
  ),
  '高知県立牧野植物園': wikiPhoto(
    'kochi-makino.jpg',
    'https://commons.wikimedia.org/wiki/File:200104_Kochi_Prefectural_Makino_Botanical_Garden01s5.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '663highland', 'https://ja.wikipedia.org/wiki/user:663highland', '2020-01-04',
    '高知県立牧野植物園', 'Kochi Prefectural Makino Botanical Garden'
  ),
  '竹林寺': wikiPhoto(
    'kochi-chikurinji.jpg',
    'https://commons.wikimedia.org/wiki/File:Bukkokuzan_Chikurin-ji_Temple_20210812_02.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
    '先従隗始', 'https://commons.wikimedia.org/wiki/User:%E5%85%88%E5%BE%93%E9%9A%97%E5%A7%8B', '2021-08-12',
    '竹林寺（五台山）', 'Chikurin-ji Temple on Mount Godai'
  ),
  'ひろめ市場': wikiPhoto(
    'kochi-hirome.jpg',
    'https://commons.wikimedia.org/wiki/File:Hirome-Ichiba,Kochi-city,Japan.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'katorisi', 'https://commons.wikimedia.org/wiki/User:Katorisi', '2010-09-06',
    'ひろめ市場', 'Hirome Market, Kochi'
  ),
  '高知パシフィックホテル': sourcePhoto(
    'kochi-stay-pacific.jpg',
    '高知パシフィックホテルの客室写真',
    'Kochi Pacific Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/8584/8584.html',
    '楽天トラベル'
  ),
  'ラ・プリマ・ヴォルタ': sourcePhoto('kochi-39004068-dish.jpg', 'ラ・プリマ・ヴォルタの料理写真', 'ラ・プリマ・ヴォルタ food photo', TABELOG_39004068, '食べログ'),
  '将人': sourcePhoto('kochi-39007487-dish.jpg', '将人の料理写真', '将人 food photo', TABELOG_39007487, '食べログ'),
  'IHARA': sourcePhoto('kochi-39007924-dish.jpg', 'IHARAの料理写真', 'IHARA food photo', TABELOG_39007924, '食べログ'),
  'どんこ': sourcePhoto('kochi-39000703-dish.jpg', 'どんこの料理写真', 'どんこ food photo', TABELOG_39000703, '食べログ'),
  'アンナータ': sourcePhoto('kochi-39007166-dish.jpg', 'アンナータの料理写真', 'アンナータ food photo', TABELOG_39007166, '食べログ'),
  'コックドール': sourcePhoto('kochi-39000346-dish.jpg', 'コックドールの料理写真', 'コックドール food photo', TABELOG_39000346, '食べログ'),
  'うますし': sourcePhoto('kochi-39005612-dish.jpg', 'うますしの料理写真', 'うますし food photo', TABELOG_39005612, '食べログ'),
  'ゆう喜屋': sourcePhoto('kochi-39001250-dish.jpg', 'ゆう喜屋の料理写真', 'ゆう喜屋 food photo', TABELOG_39001250, '食べログ'),
  '黒尊': sourcePhoto('kochi-39000063-dish.jpg', '黒尊の料理写真', '黒尊 food photo', TABELOG_39000063, '食べログ'),
  '座屋': sourcePhoto('kochi-39000116-dish.jpg', '座屋の料理写真', '座屋 food photo', TABELOG_39000116, '食べログ'),
  'かね春': sourcePhoto('kochi-39000409-dish.jpg', 'かね春の料理写真', 'かね春 food photo', TABELOG_39000409, '食べログ'),
  '屋台安兵衛': sourcePhoto('kochi-39000019-dish.jpg', '屋台安兵衛の料理写真', '屋台安兵衛 food photo', TABELOG_39000019, '食べログ'),
  'いまどき安兵衛': sourcePhoto('kochi-39000134-dish.jpg', 'いまどき安兵衛の料理写真', 'いまどき安兵衛 food photo', TABELOG_39000134, '食べログ'),
  'かもん亭': sourcePhoto('kochi-39001888-dish.jpg', 'かもん亭の料理写真', 'かもん亭 food photo', TABELOG_39001888, '食べログ'),
  '土佐あかうしとワイン プティ・ヴェール': sourcePhoto('kochi-39003723-dish.jpg', '土佐あかうしとワイン プティ・ヴェールの料理写真', '土佐あかうしとワイン プティ・ヴェール food photo', TABELOG_39003723, '食べログ'),
  'すごろく': sourcePhoto('kochi-39001021-dish.jpg', 'すごろくの料理写真', 'すごろく food photo', TABELOG_39001021, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: KOCHI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: KOCHI.sources.accessed};
}

export const KOCHI_FACILITIES: readonly FacilityRow[] = [
  sight('kochi-sight-01', '高知城', '高知県高知市丸ノ内1-2-1', null, 'https://ja.wikipedia.org/wiki/%E9%AB%98%E7%9F%A5%E5%9F%8E', 33.561111111111, 133.53138888889),
  sight('kochi-sight-02', '桂浜', '高知県高知市浦戸', null, 'https://ja.wikipedia.org/wiki/%E6%A1%82%E6%B5%9C', 33.49549722, 133.57383611),
  sight('kochi-sight-03', '坂本龍馬像', '高知県高知市浦戸', null, 'https://ja.wikipedia.org/wiki/%E6%A1%82%E6%B5%9C', 33.4985909, 133.5754760),
  sight('kochi-sight-04', '日曜市', '高知県高知市追手筋', null, 'https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9B%9C%E5%B8%82', 33.5616552, 133.5382444),
  sight('kochi-sight-05', 'わんぱーくこうちアニマルランド', '高知県高知市桟橋通6丁目9-1', null, 'https://www.city.kochi.kochi.jp/', 33.542181, 133.557014),
  sight('kochi-sight-06', '五台山', '高知県高知市五台山', null, 'https://ja.wikipedia.org/wiki/%E4%BA%94%E5%8F%B0%E5%B1%B1_(%E9%AB%98%E7%9F%A5%E5%B8%82)', 33.54666667, 133.57388889),
  sight('kochi-sight-07', '高知県立牧野植物園', '高知県高知市五台山4200-6', null, 'https://ja.wikipedia.org/wiki/%E9%AB%98%E7%9F%A5%E7%9C%8C%E7%AB%8B%E7%89%A7%E9%87%8E%E6%A4%8D%E7%89%A9%E5%9C%92', 33.54666667, 133.57777778),
  sight('kochi-sight-08', '竹林寺', '高知県高知市五台山3577', null, 'https://ja.wikipedia.org/wiki/%E7%AB%B9%E6%9E%97%E5%AF%BA_(%E9%AB%98%E7%9F%A5%E5%B8%82)', 33.54661111, 133.57747222),
  sight('kochi-experience-01', 'ひろめ市場', '高知県高知市帯屋町2-3-1', null, 'https://ja.wikipedia.org/wiki/%E5%B9%B3%E6%88%90%E6%B5%AA%E6%BC%AB%E5%95%86%E5%BA%97%E8%A1%97%E3%81%B2%E3%82%8D%E3%82%81%E5%B8%82%E5%A0%B4', 33.560555555556, 133.53583333333)
];
