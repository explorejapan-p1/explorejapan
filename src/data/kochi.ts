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
    accessed: '2026-09-09'
  }
} as const;

export const KOCHI_EXPECTED_ROW_COUNT = 9;
export const KOCHI_EXPECTED_GEO_COUNT = 9;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
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
  '高知パシフィックホテル': sourcePhoto(
    'kochi-stay-pacific.jpg',
    '高知パシフィックホテルの客室写真',
    '高知パシフィックホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/8584/8584.html',
    '楽天トラベル'
  ),
  'アパホテル〈高知〉': sourcePhoto(
    'kochi-stay-apa.jpg',
    'アパホテル〈高知〉の客室写真',
    'アパホテル〈高知〉 room photo',
    'https://travel.rakuten.co.jp/HOTEL/10808/10808.html',
    '楽天トラベル'
  ),
  'ウェルカムホテル高知': sourcePhoto(
    'kochi-stay-welcome.jpg',
    'ウェルカムホテル高知の客室写真',
    'ウェルカムホテル高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/111254/111254.html',
    '楽天トラベル'
  ),
  'オリエントホテル高知': sourcePhoto(
    'kochi-stay-orient.jpg',
    'オリエントホテル高知の客室写真',
    'オリエントホテル高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/9484/9484.html',
    '楽天トラベル'
  ),
  'コンフォートホテル高知': sourcePhoto(
    'kochi-stay-comfort.jpg',
    'コンフォートホテル高知の客室写真',
    'コンフォートホテル高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/167682/167682.html',
    '楽天トラベル'
  ),
  'サウスブリーズホテル　高知海月': sourcePhoto(
    'kochi-stay-southbreeze.jpg',
    'サウスブリーズホテル　高知海月の客室写真',
    'サウスブリーズホテル　高知海月 room photo',
    'https://travel.rakuten.co.jp/HOTEL/8682/8682.html',
    '楽天トラベル'
  ),
  'スーパーホテル高知': sourcePhoto(
    'kochi-stay-superhotel.jpg',
    'スーパーホテル高知の客室写真',
    'スーパーホテル高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/40671/40671.html',
    '楽天トラベル'
  ),
  'セブンデイズホテル': sourcePhoto(
    'kochi-stay-sevendays.jpg',
    'セブンデイズホテルの客室写真',
    'セブンデイズホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/54658/54658.html',
    '楽天トラベル'
  ),
  'セブンデイズホテルプラス': sourcePhoto(
    'kochi-stay-sevendays-plus.jpg',
    'セブンデイズホテルプラスの客室写真',
    'セブンデイズホテルプラス room photo',
    'https://travel.rakuten.co.jp/HOTEL/54659/54659.html',
    '楽天トラベル'
  ),
  'ツーリストイン高知': sourcePhoto(
    'kochi-stay-touristinn.jpg',
    'ツーリストイン高知の客室写真',
    'ツーリストイン高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/40847/40847.html',
    '楽天トラベル'
  ),
  'ドーミーイン高知': sourcePhoto(
    'kochi-stay-dormy.jpg',
    'ドーミーイン高知の客室写真',
    'ドーミーイン高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/165939/165939.html',
    '楽天トラベル'
  ),
  'ブライトパークホテル': sourcePhoto(
    'kochi-stay-brightpark.jpg',
    'ブライトパークホテルの客室写真',
    'ブライトパークホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/5660/5660.html',
    '楽天トラベル'
  ),
  'プチホテル高知': sourcePhoto(
    'kochi-stay-petit.jpg',
    'プチホテル高知の客室写真',
    'プチホテル高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/16491/16491.html',
    '楽天トラベル'
  ),
  'ホテル　ファースト': sourcePhoto(
    'kochi-stay-first.jpg',
    'ホテル　ファーストの客室写真',
    'ホテル　ファースト room photo',
    'https://travel.rakuten.co.jp/HOTEL/18183/18183.html',
    '楽天トラベル'
  ),
  'ホテル　港屋': sourcePhoto(
    'kochi-stay-minatoya.jpg',
    'ホテル　港屋の客室写真',
    'ホテル　港屋 room photo',
    'https://travel.rakuten.co.jp/HOTEL/1516/1516.html',
    '楽天トラベル'
  ),
  'ホテルアベスト高知': sourcePhoto(
    'kochi-stay-abest.jpg',
    'ホテルアベスト高知の客室写真',
    'ホテルアベスト高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/1553/1553.html',
    '楽天トラベル'
  ),
  'ホテルエリアワン高知': sourcePhoto(
    'kochi-stay-areaone.jpg',
    'ホテルエリアワン高知の客室写真',
    'ホテルエリアワン高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/153328/153328.html',
    '楽天トラベル'
  ),
  'ホテルベストプライス高知': sourcePhoto(
    'kochi-stay-bestprice.jpg',
    'ホテルベストプライス高知の客室写真',
    'ホテルベストプライス高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/182859/182859.html',
    '楽天トラベル'
  ),
  'ホテル土佐路・たかす': sourcePhoto(
    'kochi-stay-tosaji.jpg',
    'ホテル土佐路・たかすの客室写真',
    'ホテル土佐路・たかす room photo',
    'https://travel.rakuten.co.jp/HOTEL/43847/43847.html',
    '楽天トラベル'
  ),
  'ホテルＮｏ．１高知': sourcePhoto(
    'kochi-stay-no1.jpg',
    'ホテルＮｏ．１高知の客室写真',
    'ホテルＮｏ．１高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/16704/16704.html',
    '楽天トラベル'
  ),
  'リッチモンドホテル高知': sourcePhoto(
    'kochi-stay-richmond.jpg',
    'リッチモンドホテル高知の客室写真',
    'リッチモンドホテル高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/67907/67907.html',
    '楽天トラベル'
  ),
  'リバーサイドホテル松栄': sourcePhoto(
    'kochi-stay-matsue.jpg',
    'リバーサイドホテル松栄の客室写真',
    'リバーサイドホテル松栄 room photo',
    'https://travel.rakuten.co.jp/HOTEL/4866/4866.html',
    '楽天トラベル'
  ),
  '三翠園': sourcePhoto(
    'kochi-stay-sansuien.jpg',
    '三翠園の客室写真',
    '三翠園 room photo',
    'https://travel.rakuten.co.jp/HOTEL/17777/17777.html',
    '楽天トラベル'
  ),
  '土佐御苑': sourcePhoto(
    'kochi-stay-tosagyoen.jpg',
    '土佐御苑の客室写真',
    '土佐御苑 room photo',
    'https://travel.rakuten.co.jp/HOTEL/10680/10680.html',
    '楽天トラベル'
  ),
  '城西館': sourcePhoto(
    'kochi-stay-joseikan.jpg',
    '城西館の客室写真',
    '城西館 room photo',
    'https://travel.rakuten.co.jp/HOTEL/8075/8075.html',
    '楽天トラベル'
  ),
  '天然温泉　はるのの湯': sourcePhoto(
    'kochi-stay-haruno.jpg',
    '天然温泉　はるのの湯の客室写真',
    '天然温泉　はるのの湯 room photo',
    'https://travel.rakuten.co.jp/HOTEL/106082/106082.html',
    '楽天トラベル'
  ),
  '西鉄イン高知　はりまや橋': sourcePhoto(
    'kochi-stay-nishitetsu.jpg',
    '西鉄イン高知　はりまや橋の客室写真',
    '西鉄イン高知　はりまや橋 room photo',
    'https://travel.rakuten.co.jp/HOTEL/70876/70876.html',
    '楽天トラベル'
  ),
  '高知サンライズホテル': sourcePhoto(
    'kochi-stay-sunrise.jpg',
    '高知サンライズホテルの客室写真',
    '高知サンライズホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/5362/5362.html',
    '楽天トラベル'
  ),
  '高知ホテル': sourcePhoto(
    'kochi-stay-kochihotel.jpg',
    '高知ホテルの客室写真',
    '高知ホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/10771/10771.html',
    '楽天トラベル'
  ),
  'ＡＮＡクラウンプラザホテル高知': sourcePhoto(
    'kochi-stay-ana-crown.jpg',
    'ＡＮＡクラウンプラザホテル高知の客室写真',
    'ＡＮＡクラウンプラザホテル高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/1436/1436.html',
    '楽天トラベル'
  ),
  'ＪＲクレメントイン高知': sourcePhoto(
    'kochi-stay-clement.jpg',
    'ＪＲクレメントイン高知の客室写真',
    'ＪＲクレメントイン高知 room photo',
    'https://travel.rakuten.co.jp/HOTEL/181087/181087.html',
    '楽天トラベル'
  ),

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
