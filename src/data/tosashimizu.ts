/**
 * Tosashimizu City sourced facts. Do not invent population.
 * Hall / JIS from city Wikipedia / city HP facts (accessed 2026-09-08). JIS 39209. Eleventh Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Stay uses TheMana Village room still; onsen uses attributable 露天風呂 still (stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TOSASHIMIZU = {
  nameJa: '土佐清水市',
  nameEn: 'Tosashimizu',
  reading: 'とさしみずし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'tosashimizu',
  jis: '39209',
  jlis: '392090',
  sameAs: 'https://www.city.tosashimizu.lg.jp/',
  hall: {
    postalCode: '787-0392',
    addressJa: '高知県土佐清水市天神町11番2号',
    addressEn: '11-2 Tenjin-cho, Tosashimizu City, Kochi 787-0392, Japan',
    phone: '0880-82-1111'
  },
  sources: {
    home: 'https://www.city.tosashimizu.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E6%B8%85%E6%B0%B4%E5%B8%82',
    kankou: 'https://www.city.tosashimizu.lg.jp/',
    ashizuri: 'https://commons.wikimedia.org/wiki/File:Ashizuri_Cape_01.JPG',
    kongofukuji: 'https://ja.wikipedia.org/wiki/%E9%87%91%E5%89%9B%E7%A6%8F%E5%AF%BA',
    tabelogCity: 'https://tabelog.com/kochi/C39209/rstLst/',
    mana: 'https://travel.rakuten.co.jp/HOTEL/74616/74616.html',
    accessed: '2026-09-08'
  }
} as const;

export const TOSASHIMIZU_EXPECTED_ROW_COUNT = 8;
export const TOSASHIMIZU_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Cape Ashizuri. */
export const TOSASHIMIZU_PLACE_PHOTO = wikiPhoto(
  'tosashimizu-cover-ashizuri.jpg',
  'https://commons.wikimedia.org/wiki/File:Ashizuri_Cape_01.JPG',
  'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
  'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-06-27',
  '足摺岬', 'Cape Ashizuri, Tosashimizu'
);

const TABELOG_39007932 = 'https://tabelog.com/kochi/A3904/A390404/39007932/';
const TABELOG_39004766 = 'https://tabelog.com/kochi/A3904/A390404/39004766/';
const TABELOG_39007154 = 'https://tabelog.com/kochi/A3904/A390404/39007154/';
const TABELOG_39006203 = 'https://tabelog.com/kochi/A3904/A390404/39006203/';
const TABELOG_39005642 = 'https://tabelog.com/kochi/A3904/A390404/39005642/';
const TABELOG_39004894 = 'https://tabelog.com/kochi/A3904/A390404/39004894/';
const TABELOG_39008511 = 'https://tabelog.com/kochi/A3904/A390404/39008511/';
const TABELOG_39004878 = 'https://tabelog.com/kochi/A3904/A390404/39004878/';
const TABELOG_39004396 = 'https://tabelog.com/kochi/A3904/A390404/39004396/';
const TABELOG_39008523 = 'https://tabelog.com/kochi/A3904/A390404/39008523/';
const TABELOG_39005034 = 'https://tabelog.com/kochi/A3904/A390404/39005034/';
const TABELOG_39008517 = 'https://tabelog.com/kochi/A3904/A390404/39008517/';
const TABELOG_39004863 = 'https://tabelog.com/kochi/A3904/A390404/39004863/';
const TABELOG_39007396 = 'https://tabelog.com/kochi/A3904/A390404/39007396/';
const TABELOG_39005631 = 'https://tabelog.com/kochi/A3904/A390404/39005631/';
const TABELOG_39009084 = 'https://tabelog.com/kochi/A3904/A390404/39009084/';

export const TOSASHIMIZU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '足摺岬': TOSASHIMIZU_PLACE_PHOTO,
  '足摺岬灯台': wikiPhoto(
    'tosashimizu-lighthouse.jpg',
    'https://commons.wikimedia.org/wiki/File:Ashizurimisaki_lighthouse_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-11-21',
    '足摺岬灯台', 'Ashizuri-misaki Lighthouse, Tosashimizu'
  ),
  '金剛福寺': wikiPhoto(
    'tosashimizu-kongofukuji.jpg',
    'https://commons.wikimedia.org/wiki/File:Kongofukuji_15.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2010-05-08',
    '金剛福寺', 'Kongōfuku-ji, Tosashimizu'
  ),
  '竜串': wikiPhoto(
    'tosashimizu-tatsukushi.jpg',
    'https://commons.wikimedia.org/wiki/File:Tatsukushi_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-06-27',
    '竜串', 'Tatsukushi coast, Tosashimizu'
  ),
  '白山洞門': wikiPhoto(
    'tosashimizu-hakusan-domon.jpg',
    'https://commons.wikimedia.org/wiki/File:Hakusan_Domon_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2010-12-23',
    '白山洞門', 'Hakusan Domon, Tosashimizu'
  ),
  '大岐の浜': wikiPhoto(
    'tosashimizu-ooki-beach.jpg',
    'https://commons.wikimedia.org/wiki/File:Ookinohama20220628_1.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2022-06-28',
    '大岐の浜', 'Ooki Beach, Tosashimizu'
  ),
  'ジョン万次郎資料館': wikiPhoto(
    'tosashimizu-manjiro.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%82%B8%E3%83%A7%E3%83%B3%E4%B8%87%E6%AC%A1%E9%83%8E%E8%B3%87%E6%96%99%E9%A4%A8_Sep_6,_2019.jpg',
    'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0',
    'inunami', 'https://commons.wikimedia.org/wiki/File:%E3%82%B8%E3%83%A7%E3%83%B3%E4%B8%87%E6%AC%A1%E9%83%8E%E8%B3%87%E6%96%99%E9%A4%A8_Sep_6,_2019.jpg', '2019-09-06',
    'ジョン万次郎資料館', 'John Manjiro Museum, Tosashimizu'
  ),
  'ＴｈｅＭａｎａ　Ｖｉｌｌａｇｅ': sourcePhoto(
    'tosashimizu-stay-mana.jpg',
    'ＴｈｅＭａｎａ　Ｖｉｌｌａｇｅの客室写真',
    'TheMana Village room photo',
    'https://travel.rakuten.co.jp/HOTEL/74616/74616.html',
    '楽天トラベル'
  ),
  'ＴｈｅＭａｎａ　Ｖｉｌｌａｇｅ 露天風呂': sourcePhoto(
    'tosashimizu-onsen-mana.jpg',
    'ＴｈｅＭａｎａ　Ｖｉｌｌａｇｅの露天風呂写真',
    'TheMana Village outdoor bath photo',
    'https://travel.rakuten.co.jp/HOTEL/74616/74616.html',
    '楽天トラベル'
  ),
  'あしずり温泉郷　足摺国際ホテル': sourcePhoto(
    'tosashimizu-stay-kokusai.jpg',
    'あしずり温泉郷　足摺国際ホテルの客室写真',
    'あしずり温泉郷　足摺国際ホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/8329/8329.html',
    '楽天トラベル'
  ),
  'あしずり温泉郷　足摺サニーサイドホテル': sourcePhoto(
    'tosashimizu-stay-sunnyside.jpg',
    'あしずり温泉郷　足摺サニーサイドホテルの客室写真',
    'あしずり温泉郷　足摺サニーサイドホテル room photo',
    'https://travel.rakuten.co.jp/HOTEL/14660/14660.html',
    '楽天トラベル'
  ),
  'アシズリテルメ': sourcePhoto(
    'tosashimizu-stay-terme.jpg',
    'アシズリテルメの客室写真',
    'アシズリテルメ room photo',
    'https://travel.rakuten.co.jp/HOTEL/193166/193166.html',
    '楽天トラベル'
  ),
  'あしずり温泉郷　ホテル足摺園': sourcePhoto(
    'tosashimizu-stay-ashizurien.jpg',
    'あしずり温泉郷　ホテル足摺園の客室写真',
    'あしずり温泉郷　ホテル足摺園 room photo',
    'https://travel.rakuten.co.jp/HOTEL/12632/12632.html',
    '楽天トラベル'
  ),
  '民宿　冠': sourcePhoto(
    'tosashimizu-stay-kanmuri.jpg',
    '民宿　冠の客室写真',
    '民宿　冠 room photo',
    'https://travel.rakuten.co.jp/HOTEL/164914/164914.html',
    '楽天トラベル'
  ),
  '足摺岬　民宿　福田家': sourcePhoto(
    'tosashimizu-stay-fukudaya.jpg',
    '足摺岬　民宿　福田家の客室写真',
    '足摺岬　民宿　福田家 room photo',
    'https://travel.rakuten.co.jp/HOTEL/29205/29205.html',
    '楽天トラベル'
  ),
  'ＯＵＣＨＩ　ＨＯＴＥＬ　日々': sourcePhoto(
    'tosashimizu-stay-ouchi.jpg',
    'ＯＵＣＨＩ　ＨＯＴＥＬ　日々の客室写真',
    'ＯＵＣＨＩ　ＨＯＴＥＬ　日々 room photo',
    'https://travel.rakuten.co.jp/HOTEL/165052/165052.html',
    '楽天トラベル'
  ),
  'ゲストハウス大岐ビーチ': sourcePhoto(
    'tosashimizu-stay-oki.jpg',
    'ゲストハウス大岐ビーチの客室写真',
    'ゲストハウス大岐ビーチ room photo',
    'https://travel.rakuten.co.jp/HOTEL/158794/158794.html',
    '楽天トラベル'
  ),
  'スノーピーク土佐清水キャンプフィールド': sourcePhoto(
    'tosashimizu-stay-snowpeak.jpg',
    'スノーピーク土佐清水キャンプフィールドの客室写真',
    'スノーピーク土佐清水キャンプフィールド room photo',
    'https://travel.rakuten.co.jp/HOTEL/188424/188424.html',
    '楽天トラベル'
  ),
  'Azzurrissimo': sourcePhoto('tosashimizu-39007932-dish.jpg', 'Azzurrissimoの料理写真', 'Azzurrissimo food photo', TABELOG_39007932, '食べログ'),
  '満鮨': sourcePhoto('tosashimizu-39004766-dish.jpg', '満鮨の料理写真', '満鮨 food photo', TABELOG_39004766, '食べログ'),
  'てっぱん たなべ': sourcePhoto('tosashimizu-39007154-dish.jpg', 'てっぱん たなべの料理写真', 'てっぱん たなべ food photo', TABELOG_39007154, '食べログ'),
  'おか柳': sourcePhoto('tosashimizu-39006203-dish.jpg', 'おか柳の料理写真', 'おか柳 food photo', TABELOG_39006203, '食べログ'),
  '足摺グランドレスト': sourcePhoto('tosashimizu-39005642-dish.jpg', '足摺グランドレストの料理写真', '足摺グランドレスト food photo', TABELOG_39005642, '食べログ'),
  '鮮魚 一八': sourcePhoto('tosashimizu-39004894-dish.jpg', '鮮魚 一八の料理写真', '鮮魚 一八 food photo', TABELOG_39004894, '食べログ'),
  '福田家': sourcePhoto('tosashimizu-39008511-dish.jpg', '福田家の料理写真', '福田家 food photo', TABELOG_39008511, '食べログ'),
  '北京': sourcePhoto('tosashimizu-39004878-dish.jpg', '北京の料理写真', '北京 food photo', TABELOG_39004878, '食べログ'),
  '焼肉ぷるこぎ 土佐清水店': sourcePhoto('tosashimizu-39004396-dish.jpg', '焼肉ぷるこぎ 土佐清水店の料理写真', '焼肉ぷるこぎ 土佐清水店 food photo', TABELOG_39004396, '食べログ'),
  'ほうばい': sourcePhoto('tosashimizu-39008523-dish.jpg', 'ほうばいの料理写真', 'ほうばい food photo', TABELOG_39008523, '食べログ'),
  'ヤマアのお椀': sourcePhoto('tosashimizu-39005034-dish.jpg', 'ヤマアのお椀の料理写真', 'ヤマアのお椀 food photo', TABELOG_39005034, '食べログ'),
  '居酒屋 道楽亭': sourcePhoto('tosashimizu-39008517-dish.jpg', '居酒屋 道楽亭の料理写真', '居酒屋 道楽亭 food photo', TABELOG_39008517, '食べログ'),
  'りきゅう家': sourcePhoto('tosashimizu-39004863-dish.jpg', 'りきゅう家の料理写真', 'りきゅう家 food photo', TABELOG_39004863, '食べログ'),
  '高知県立 足摺海洋館 サトウミ': sourcePhoto('tosashimizu-39007396-dish.jpg', '高知県立 足摺海洋館 サトウミの料理写真', '高知県立 足摺海洋館 サトウミ food photo', TABELOG_39007396, '食べログ'),
  '和ダイニング ふかみ': sourcePhoto('tosashimizu-39005631-dish.jpg', '和ダイニング ふかみの料理写真', '和ダイニング ふかみ food photo', TABELOG_39005631, '食べログ'),
  '朝ごはん屋': sourcePhoto('tosashimizu-39009084-dish.jpg', '朝ごはん屋の料理写真', '朝ごはん屋 food photo', TABELOG_39009084, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: TOSASHIMIZU.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: TOSASHIMIZU.sources.accessed};
}

export const TOSASHIMIZU_FACILITIES: readonly FacilityRow[] = [
  sight('tosashimizu-sight-01', '足摺岬', '高知県土佐清水市足摺岬', null, 'https://commons.wikimedia.org/wiki/File:Ashizuri_Cape_01.JPG', 32.7341694, 133.0069685),
  sight('tosashimizu-sight-02', '足摺岬灯台', '高知県土佐清水市足摺岬', null, 'https://commons.wikimedia.org/wiki/File:Ashizurimisaki_lighthouse_01.JPG', 32.7240332, 133.0202873),
  sight('tosashimizu-sight-03', '金剛福寺', '高知県土佐清水市足摺岬214-1', null, 'https://ja.wikipedia.org/wiki/%E9%87%91%E5%89%9B%E7%A6%8F%E5%AF%BA', 32.7257405, 133.0184468),
  sight('tosashimizu-sight-04', '竜串', '高知県土佐清水市竜串', null, 'https://commons.wikimedia.org/wiki/File:Tatsukushi_01.JPG', 32.7895581, 132.8657205),
  sight('tosashimizu-sight-05', '白山洞門', '高知県土佐清水市足摺岬', null, 'https://commons.wikimedia.org/wiki/File:Hakusan_Domon_01.JPG', 32.7234497, 133.0138600),
  sight('tosashimizu-sight-06', '大岐の浜', '高知県土佐清水市大岐', null, 'https://commons.wikimedia.org/wiki/File:Ookinohama20220628_1.jpg', 32.8266595, 132.9552410),
  sight('tosashimizu-experience-01', 'ジョン万次郎資料館', '高知県土佐清水市養老', null, 'https://commons.wikimedia.org/wiki/File:%E3%82%B8%E3%83%A7%E3%83%B3%E4%B8%87%E6%AC%A1%E9%83%8E%E8%B3%87%E6%96%99%E9%A4%A8_Sep_6,_2019.jpg', 32.7813927, 132.9327159),
  sight('tosashimizu-onsen-01', 'ＴｈｅＭａｎａ　Ｖｉｌｌａｇｅ 露天風呂', '高知県土佐清水市足摺岬783', '0880-88-1111', 'https://travel.rakuten.co.jp/HOTEL/74616/74616.html', 32.7284570, 133.0100828)
];
