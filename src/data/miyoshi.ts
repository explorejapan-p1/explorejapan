/**
 * Miyoshi City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-08-28) and the frozen pack (JIS 36208).
 * Do not mix 東みよし町 (36489).
 */
import type {MimaPlacePhoto} from './mima';

export const MIYOSHI = {
  nameJa: '三好市',
  nameEn: 'Miyoshi',
  reading: 'みよしし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'miyoshi',
  jis: '36208',
  jlis: '362085',
  sameAs: 'https://www.miyoshi.i-tokushima.jp/',
  hall: {
    postalCode: '778-8501',
    addressJa: '徳島県三好市池田町サラダ1610番地1',
    addressEn: '1610-1 Sarada, Ikeda-cho, Miyoshi, Tokushima 778-8501, Japan',
    phone: '0883-72-7600'
  },
  sources: {
    home: 'https://www.miyoshi.i-tokushima.jp/',
    hall: 'https://www.miyoshi.i-tokushima.jp/docs/4534140.html',
    chosha: 'https://www.miyoshi.i-tokushima.jp/shisei/chosha/',
    kanko: 'https://miyoshi-tourism.jp/',
    stay: 'https://miyoshi-tourism.jp/spot/?spot_classification=lodging',
    gourmet: 'https://miyoshi-tourism.jp/spot/?spot_classification=gourmet',
    onsen: 'https://miyoshi-tourism.jp/spot/?spot_classification=hot-spring',
    accessed: '2026-08-28'
  }
} as const;

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
    accessed: '2026-08-28',
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
    accessed: '2026-08-28',
    altJa,
    altEn
  };
}

/** Cover: File:Oboke and Koboke Valley 03.jpg — 大歩危・小歩危, Miyoshi city. Not かずら橋. */
export const MIYOSHI_PLACE_PHOTO = wikiPhoto(
  'oboke-koboke.jpg',
  'https://commons.wikimedia.org/wiki/File:Oboke_and_Koboke_Valley_03.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0/',
  'Motokoka',
  'https://commons.wikimedia.org/wiki/User:Motokoka',
  '2010-09-25',
  '大歩危・小歩危（三好市山城町）',
  'Oboke and Koboke Valleys, Yamashiro-cho, Miyoshi'
);

const TOUR_TSUKUSHI = 'https://miyoshi-tourism.jp/spot/25215/';
const TOUR_YACHIYO = 'https://miyoshi-tourism.jp/spot/839/';
const TOUR_IYA_HASHI = 'https://miyoshi-tourism.jp/spot/820/';
const TOUR_IKOI = 'https://miyoshi-tourism.jp/spot/808/';
const TOUR_YANAMOTO = 'https://miyoshi-tourism.jp/spot/788/';
const TOUR_NICHINICHI = 'https://miyoshi-tourism.jp/spot/6046/';
const TOUR_AJIICHI = 'https://miyoshi-tourism.jp/spot/862/';
const TOUR_MEN_AWA = 'https://miyoshi-tourism.jp/spot/3861/';
const IYA_ONSEN_ROTEN = 'https://www.iyaonsen.co.jp/onsen/roten/';
const MANNAKA_HOTEL = 'https://mannaka.co.jp/hotel';
const TOUGENKYO = 'https://www.tougenkyo-iya.jp/';

/** Exact pack/travel name_ja only. No 美馬 / つるぎ / 吉野川 photos. No 東みよし町 Files. */
export const MIYOSHI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '大歩危小歩危': MIYOSHI_PLACE_PHOTO,
  'うだつの町並み・阿波池田うだつの家たばこ資料館': wikiPhoto(
    'awa-ikeda-udatsu-house.jpg',
    'https://commons.wikimedia.org/wiki/File:Awa-Ikeda_Udatsu_House_omoya_ac_(1).jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2023-03',
    '阿波池田うだつの家・たばこ資料館（三好市池田町）',
    'Awa-Ikeda Udatsu House, Ikeda-cho, Miyoshi'
  ),
  '落合集落・落合集落展望所': wikiPhoto(
    'ochiai-village.jpg',
    'https://commons.wikimedia.org/wiki/File:Higashi-Iya_Ochiai_201303-1.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'At by At',
    'https://commons.wikimedia.org/wiki/User:At_by_At',
    '2013-03-30',
    '東祖谷落合集落（三好市）',
    'Higashi-Iya Ochiai village, Miyoshi'
  ),
  '祖谷渓・小便小僧・ひの字渓谷': wikiPhoto(
    'iya-shoben-kozo.jpg',
    'https://commons.wikimedia.org/wiki/File:%E7%A5%96%E8%B0%B7%E6%B8%93%E3%81%AE%E5%B0%8F%E4%BE%BF%E5%B0%8F%E5%83%A7_01_20200802.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Shizuha',
    'https://commons.wikimedia.org/wiki/User:Shizuha',
    '2020-08-03',
    '祖谷渓の小便小僧（三好市）',
    'Peeing Boy statue, Iya Valley, Miyoshi'
  ),
  '大歩危峡まんなか/大歩危峡観光遊覧船': wikiPhoto(
    'oboke-pleasure-boat.jpg',
    'https://commons.wikimedia.org/wiki/File:Oboke_gorge_pleasure_boat_2106_August_13.B.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'さかおり',
    'https://commons.wikimedia.org/wiki/User:%E3%81%95%E3%81%8B%E3%81%8A%E3%82%8A',
    '2016-08-19',
    '大歩危遊覧船（三好市）',
    'Oboke gorge pleasure boat, Miyoshi'
  ),
  '箸蔵寺': wikiPhoto(
    'hashikuraji.jpg',
    'https://commons.wikimedia.org/wiki/File:Hashikuraji_11.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-12-06',
    '箸蔵寺の本堂（三好市池田町）',
    'Hashikura-ji main hall, Ikeda-cho, Miyoshi'
  ),
  '池田へそっ湖大橋': wikiPhoto(
    'ikeda-hesokko-ohashi.jpg',
    'https://commons.wikimedia.org/wiki/File:Ikedahesokkooohasi_20230708_1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Araiyasushige',
    'https://commons.wikimedia.org/wiki/User:Araiyasushige',
    '2023-07-08',
    '池田へそっ湖大橋（三好市池田町）',
    'Ikeda Hesokko Bridge, Ikeda-cho, Miyoshi'
  ),
  '琵琶の滝': wikiPhoto(
    'biwa-no-taki.jpg',
    'https://commons.wikimedia.org/wiki/File:150503_Biwa_Falls_Iya_Valley_Miyoshi_Tokushima_pref_Japan01s3.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5/',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2015-05-03',
    '琵琶の滝（三好市祖谷）',
    'Biwa Falls, Iya Valley, Miyoshi'
  ),
  '奥祖谷二重かずら橋': wikiPhoto(
    'okuiya-double-kazurabashi.jpg',
    'https://commons.wikimedia.org/wiki/File:Tokushima_Miyoshi_Okuiya_Double_Kazurabashi_5.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    '京浜にけ',
    'https://ja.wikipedia.org/wiki/User:%E4%BA%AC%E6%B5%9C%E3%81%AB%E3%81%91',
    '2010-10-04',
    '奥祖谷二重かずら橋 女橋（三好市）',
    'Okuiya double kazura bridge, Miyoshi'
  ),
  '祖谷のかずら橋': wikiPhoto(
    'iya-kazurabashi.jpg',
    'https://commons.wikimedia.org/wiki/File:Iya_Kazurabashi-3.jpg',
    'CC BY 2.0',
    'https://creativecommons.org/licenses/by/2.0/',
    'ume-y',
    'https://www.flickr.com/photos/29989965@N00/',
    '2011-05-04',
    '祖谷のかずら橋（三好市西祖谷山村）',
    'Iya Kazura Bridge, Nishi-Iya, Miyoshi'
  ),
  '峡谷の湯宿 大歩危峡まんなか': sourcePhoto(
    'mannaka-room.jpg',
    '峡谷の湯宿 大歩危峡まんなかの客室（三好市山城町）',
    'Guest room at Oboke-kyo Mannaka, Yamashiro-cho, Miyoshi',
    MANNAKA_HOTEL,
    '峡谷の湯宿 大歩危峡まんなか'
  ),
  '桃源郷祖谷の山里 茅葺き民家ステイ': sourcePhoto(
    'tougenkyo-house.jpg',
    '桃源郷祖谷の山里の民家内観（三好市東祖谷）',
    'Interior of a Tougenkyo Iya thatched house, Higashi-Iya, Miyoshi',
    TOUGENKYO,
    '桃源郷祖谷の山里'
  ),
  '和の宿 ホテル祖谷温泉': sourcePhoto(
    'iya-onsen-roten.jpg',
    '和の宿 ホテル祖谷温泉の露天風呂（三好市池田町）',
    'Outdoor bath at Hotel Iya Onsen, Ikeda-cho, Miyoshi',
    IYA_ONSEN_ROTEN,
    '和の宿 ホテル祖谷温泉'
  ),
  '湯元新祖谷温泉 ホテルかずら橋': wikiPhoto(
    'shiniya-roten.jpg',
    'https://commons.wikimedia.org/wiki/File:Shiniya_hot_spring.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'ブルーノ・プラス',
    'https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AB%E3%83%BC%E3%83%8E%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B9',
    '2023-04',
    '新祖谷温泉の露天風呂（三好市西祖谷山村）',
    'Outdoor bath at Shin-Iya Onsen, Nishi-Iya, Miyoshi'
  ),
  'お好み焼きつくし': sourcePhoto(
    'okonomiyaki-tsukushi.jpg',
    'お好み焼きつくしのお好み焼き（三好市池田町）',
    'Okonomiyaki at Tsukushi, Ikeda-cho, Miyoshi',
    TOUR_TSUKUSHI,
    '三好市観光協会'
  ),
  '味の老舗八千代': sourcePhoto(
    'yachiyo-ramen.jpg',
    '味の老舗八千代の中華そば（三好市池田町）',
    'Chuka-soba at Yachiyo, Ikeda-cho, Miyoshi',
    TOUR_YACHIYO,
    '三好市観光協会'
  ),
  'そば処祖谷橋': sourcePhoto(
    'iya-hashi-soba.jpg',
    'そば処祖谷橋の祖谷そば（三好市山城町）',
    'Iya soba at Sobadokoro Iyabashi, Yamashiro-cho, Miyoshi',
    TOUR_IYA_HASHI,
    '三好市観光協会'
  ),
  'いこい食堂': sourcePhoto(
    'ikoi-dekomawashi.jpg',
    'いこい食堂のでこまわし（三好市西祖谷山村）',
    'Dekomawashi at Ikoi Shokudo, Nishi-Iya, Miyoshi',
    TOUR_IKOI,
    '三好市観光協会'
  ),
  '御食事処やなもと': sourcePhoto(
    'yanamoto-soba.jpg',
    '御食事処やなもとのそば（三好市東祖谷）',
    'Soba at Shokujidokoro Yanamoto, Higashi-Iya, Miyoshi',
    TOUR_YANAMOTO,
    '三好市観光協会'
  ),
  'にちにち珈琲店': sourcePhoto(
    'nichinichi-coffee.jpg',
    'にちにち珈琲店のアイスコーヒー（三好市三野町）',
    'Iced coffee at Nichi-nichi Coffee, Mino-cho, Miyoshi',
    TOUR_NICHINICHI,
    '三好市観光協会'
  ),
  '味一阿讃': sourcePhoto(
    'ajiichi-teishoku.jpg',
    '味一阿讃の定食（三好市池田町）',
    'Set meal at Ajiichi Asan, Ikeda-cho, Miyoshi',
    TOUR_AJIICHI,
    '三好市観光協会'
  ),
  'めん処阿波': sourcePhoto(
    'men-awa-soba.jpg',
    'めん処阿波のそば定食（三好市池田町）',
    'Soba set at Mendokoro Awa, Ikeda-cho, Miyoshi',
    TOUR_MEN_AWA,
    '三好市観光協会'
  )
};
