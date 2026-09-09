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
  '箸蔵山ロープウェイ株式会社': wikiPhoto(
    'miyoshi-hashikura-ropeway.jpg',
    'https://commons.wikimedia.org/wiki/File:Hasikuraropeway_04.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2018-11-29',
    '箸蔵山ロープウェイ（三好市）',
    'Hashikurasan Ropeway, Miyoshi'
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
    'miyoshi-stay-01.jpg',
    '峡谷の湯宿 大歩危峡まんなかの客室写真',
    '峡谷の湯宿 大歩危峡まんなか room photo',
    'https://travel.rakuten.co.jp/HOTEL/53066/53066.html',
    '楽天トラベル'
  ),
  '桃源郷祖谷の山里 茅葺き民家ステイ': sourcePhoto(
    'miyoshi-stay-02.jpg',
    '桃源郷祖谷の山里 茅葺き民家ステイの客室写真',
    '桃源郷祖谷の山里 茅葺き民家ステイ room photo',
    'https://travel.rakuten.co.jp/HOTEL/148902/148902.html',
    '楽天トラベル'
  ),
  'ホテル サボテンアパートメント': sourcePhoto(
    'miyoshi-stay-03.jpg',
    'ホテル サボテンアパートメントの客室写真',
    'ホテル サボテンアパートメント room photo',
    'https://travel.rakuten.co.jp/HOTEL/165553/165553.html',
    '楽天トラベル'
  ),
  '阿波池田駅前ホテルイレブン': sourcePhoto(
    'miyoshi-stay-04.jpg',
    '阿波池田駅前ホテルイレブンの客室写真',
    '阿波池田駅前ホテルイレブン room photo',
    'https://travel.rakuten.co.jp/HOTEL/158338/158338.html',
    '楽天トラベル'
  ),
  'hostel大黒屋': sourcePhoto(
    'miyoshi-stay-05.jpg',
    'hostel大黒屋の客室写真',
    'hostel大黒屋 room photo',
    'https://travel.rakuten.co.jp/HOTEL/199086/199086.html',
    '楽天トラベル'
  ),
  'hostel 大黒屋': sourcePhoto(
    'miyoshi-stay-05.jpg',
    'hostel 大黒屋の客室写真',
    'hostel 大黒屋 room photo',
    'https://travel.rakuten.co.jp/HOTEL/199086/199086.html',
    '楽天トラベル'
  ),
  '和の宿 ホテル祖谷温泉': sourcePhoto(
    'miyoshi-stay-06.jpg',
    '和の宿 ホテル祖谷温泉の客室写真',
    '和の宿 ホテル祖谷温泉 room photo',
    'https://travel.rakuten.co.jp/HOTEL/13663/13663.html',
    '楽天トラベル'
  ),
  '白地温泉 小西旅館': sourcePhoto(
    'miyoshi-stay-07.jpg',
    '白地温泉 小西旅館の客室写真',
    '白地温泉 小西旅館 room photo',
    'https://travel.rakuten.co.jp/HOTEL/14619/14619.html',
    '楽天トラベル'
  ),
  '白地温泉小西旅館': sourcePhoto(
    'miyoshi-stay-07.jpg',
    '白地温泉小西旅館の客室写真',
    '白地温泉小西旅館 room photo',
    'https://travel.rakuten.co.jp/HOTEL/14619/14619.html',
    '楽天トラベル'
  ),
  '民宿 白地荘': sourcePhoto(
    'miyoshi-stay-08.jpg',
    '民宿 白地荘の客室写真',
    '民宿 白地荘 room photo',
    'https://travel.rakuten.co.jp/HOTEL/17989/17989.html',
    '楽天トラベル'
  ),
  '湯元新祖谷温泉 ホテルかずら橋': sourcePhoto(
    'miyoshi-stay-09.jpg',
    '湯元新祖谷温泉 ホテルかずら橋の客室写真',
    '湯元新祖谷温泉 ホテルかずら橋 room photo',
    'https://travel.rakuten.co.jp/HOTEL/20228/20228.html',
    '楽天トラベル'
  ),
  'ふくや旅館': sourcePhoto(
    'miyoshi-stay-10.jpg',
    'ふくや旅館の客室写真',
    'ふくや旅館 room photo',
    'https://travel.rakuten.co.jp/HOTEL/50194/50194.html',
    '楽天トラベル'
  ),
  '祖谷渓温泉 ホテル秘境の湯': sourcePhoto(
    'miyoshi-stay-11.jpg',
    '祖谷渓温泉 ホテル秘境の湯の客室写真',
    '祖谷渓温泉 ホテル秘境の湯 room photo',
    'https://travel.rakuten.co.jp/HOTEL/52860/52860.html',
    '楽天トラベル'
  ),
  '大歩危温泉 サンリバー大歩危': sourcePhoto(
    'miyoshi-stay-12.jpg',
    '大歩危温泉 サンリバー大歩危の客室写真',
    '大歩危温泉 サンリバー大歩危 room photo',
    'https://travel.rakuten.co.jp/HOTEL/54677/54677.html',
    '楽天トラベル'
  ),
  '渓谷の隠れ宿 祖谷美人': sourcePhoto(
    'miyoshi-stay-13.jpg',
    '渓谷の隠れ宿 祖谷美人の客室写真',
    '渓谷の隠れ宿 祖谷美人 room photo',
    'https://travel.rakuten.co.jp/HOTEL/56704/56704.html',
    '楽天トラベル'
  ),
  '祖谷の宿 かずらや': sourcePhoto(
    'miyoshi-stay-14.jpg',
    '祖谷の宿 かずらやの客室写真',
    '祖谷の宿 かずらや room photo',
    'https://travel.rakuten.co.jp/HOTEL/67957/67957.html',
    '楽天トラベル'
  ),
  '寿し六旅館': sourcePhoto(
    'miyoshi-stay-15.jpg',
    '寿し六旅館の客室写真',
    '寿し六旅館 room photo',
    'https://travel.rakuten.co.jp/HOTEL/129667/129667.html',
    '楽天トラベル'
  ),
  '祖谷観光旅館': sourcePhoto(
    'miyoshi-stay-16.jpg',
    '祖谷観光旅館の客室写真',
    '祖谷観光旅館 room photo',
    'https://travel.rakuten.co.jp/HOTEL/142344/142344.html',
    '楽天トラベル'
  ),
  '祖谷の里 民宿お山荘': sourcePhoto(
    'miyoshi-stay-17.jpg',
    '祖谷の里 民宿お山荘の客室写真',
    '祖谷の里 民宿お山荘 room photo',
    'https://travel.rakuten.co.jp/HOTEL/142530/142530.html',
    '楽天トラベル'
  ),
  '農家民宿 歩危農園': sourcePhoto(
    'miyoshi-stay-18.jpg',
    '農家民宿 歩危農園の客室写真',
    '農家民宿 歩危農園 room photo',
    'https://travel.rakuten.co.jp/HOTEL/142570/142570.html',
    '楽天トラベル'
  ),
  '勇楼 旅館': sourcePhoto(
    'miyoshi-stay-19.jpg',
    '勇楼 旅館の客室写真',
    '勇楼 旅館 room photo',
    'https://travel.rakuten.co.jp/HOTEL/143371/143371.html',
    '楽天トラベル'
  ),
  '勇楼旅館': sourcePhoto(
    'miyoshi-stay-19.jpg',
    '勇楼旅館の客室写真',
    '勇楼旅館 room photo',
    'https://travel.rakuten.co.jp/HOTEL/143371/143371.html',
    '楽天トラベル'
  ),
  '楽校の宿あるせ': sourcePhoto(
    'miyoshi-stay-21.jpg',
    '楽校の宿あるせの客室写真',
    '楽校の宿あるせ room photo',
    'https://travel.rakuten.co.jp/HOTEL/153416/153416.html',
    '楽天トラベル'
  ),
  '古民家宿 4S STAY 阿波池田駅前': sourcePhoto(
    'miyoshi-stay-22.jpg',
    '古民家宿 4S STAY 阿波池田駅前の客室写真',
    '古民家宿 4S STAY 阿波池田駅前 room photo',
    'https://travel.rakuten.co.jp/HOTEL/171859/171859.html',
    '楽天トラベル'
  ),
  '本町旅宿 4S STAY 阿波池田 本町通り': sourcePhoto(
    'miyoshi-stay-23.jpg',
    '本町旅宿 4S STAY 阿波池田 本町通りの客室写真',
    '本町旅宿 4S STAY 阿波池田 本町通り room photo',
    'https://travel.rakuten.co.jp/HOTEL/180706/180706.html',
    '楽天トラベル'
  ),
  'ビジネスホテル阿波池田 いれぶん2': sourcePhoto(
    'miyoshi-stay-24.jpg',
    'ビジネスホテル阿波池田 いれぶん2の客室写真',
    'ビジネスホテル阿波池田 いれぶん2 room photo',
    'https://travel.rakuten.co.jp/HOTEL/189166/189166.html',
    '楽天トラベル'
  ),
  '彩り旅宿 4S STAY 池田温泉横': sourcePhoto(
    'miyoshi-stay-25.jpg',
    '彩り旅宿 4S STAY 池田温泉横の客室写真',
    '彩り旅宿 4S STAY 池田温泉横 room photo',
    'https://travel.rakuten.co.jp/HOTEL/191760/191760.html',
    '楽天トラベル'
  ),
  'Ｇｕｅｓｔｈｏｕｓｅ ＫＡＺＵＲＡＢＡＳＨＩ': sourcePhoto(
    'miyoshi-stay-26.jpg',
    'Ｇｕｅｓｔｈｏｕｓｅ ＫＡＺＵＲＡＢＡＳＨＩの客室写真',
    'Ｇｕｅｓｔｈｏｕｓｅ ＫＡＺＵＲＡＢＡＳＨＩ room photo',
    'https://travel.rakuten.co.jp/HOTEL/192586/192586.html',
    '楽天トラベル'
  ),
  'もみじ': sourcePhoto(
    'miyoshi-stay-momiji.jpg',
    'もみじの客室写真',
    'もみじ room photo',
    'https://travel.rakuten.co.jp/HOTEL/199175/199175.html',
    '楽天トラベル'
  ),
  'STAY ISHIWAKI': sourcePhoto(
    'miyoshi-stay-ishiwaki.jpg',
    'STAY ISHIWAKIの客室・外観写真',
    'STAY ISHIWAKI room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/197816/197816.html',
    '楽天トラベル'
  ),
  '和の宿 ホテル祖谷温泉 絹泡夢想の湯': sourcePhoto(
    'miyoshi-onsen-iyaonsen.jpg',
    '和の宿 ホテル祖谷温泉 絹泡夢想の湯の浴場写真',
    '和の宿 ホテル祖谷温泉 絹泡夢想の湯 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/13663/13663.html',
    '楽天トラベル'
  ),
  '白地温泉 小西旅館 展望風呂': sourcePhoto(
    'miyoshi-onsen-konishi.jpg',
    '白地温泉 小西旅館 展望風呂の浴場写真',
    '白地温泉 小西旅館 展望風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/14619/14619.html',
    '楽天トラベル'
  ),
  '民宿 白地荘 大浴場': sourcePhoto(
    'miyoshi-onsen-shirajiso.jpg',
    '民宿 白地荘 大浴場の浴場写真',
    '民宿 白地荘 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/17989/17989.html',
    '楽天トラベル'
  ),
  '湯元新祖谷温泉 ホテルかずら橋 露天風呂': sourcePhoto(
    'miyoshi-onsen-kazurabashi.jpg',
    '湯元新祖谷温泉 ホテルかずら橋 露天風呂の浴場写真',
    '湯元新祖谷温泉 ホテルかずら橋 露天風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/20228/20228.html',
    '楽天トラベル'
  ),
  '祖谷渓温泉 ホテル秘境の湯 大浴場': sourcePhoto(
    'miyoshi-onsen-hikyo.jpg',
    '祖谷渓温泉 ホテル秘境の湯 大浴場の浴場写真',
    '祖谷渓温泉 ホテル秘境の湯 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/52860/52860.html',
    '楽天トラベル'
  ),
  '峡谷の湯宿 大歩危峡まんなか 露天風呂': sourcePhoto(
    'miyoshi-onsen-mannaka.jpg',
    '峡谷の湯宿 大歩危峡まんなか 露天風呂の浴場写真',
    '峡谷の湯宿 大歩危峡まんなか 露天風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/53066/53066.html',
    '楽天トラベル'
  ),
  '大歩危温泉 サンリバー大歩危 大浴場': sourcePhoto(
    'miyoshi-onsen-sunriver.jpg',
    '大歩危温泉 サンリバー大歩危 大浴場の浴場写真',
    '大歩危温泉 サンリバー大歩危 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/54677/54677.html',
    '楽天トラベル'
  ),
  '渓谷の隠れ宿 祖谷美人 露天風呂': sourcePhoto(
    'miyoshi-onsen-iyabijin.jpg',
    '渓谷の隠れ宿 祖谷美人 露天風呂の浴場写真',
    '渓谷の隠れ宿 祖谷美人 露天風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/56704/56704.html',
    '楽天トラベル'
  ),
  '祖谷の宿 かずらや 露天風呂': sourcePhoto(
    'miyoshi-onsen-kazuraya.jpg',
    '祖谷の宿 かずらや 露天風呂の浴場写真',
    '祖谷の宿 かずらや 露天風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/67957/67957.html',
    '楽天トラベル'
  ),
  '寿し六旅館 貸切風呂': sourcePhoto(
    'miyoshi-onsen-sushi6.jpg',
    '寿し六旅館 貸切風呂の浴場写真',
    '寿し六旅館 貸切風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/129667/129667.html',
    '楽天トラベル'
  ),
  '祖谷観光旅館 大浴場': sourcePhoto(
    'miyoshi-onsen-iyakanko.jpg',
    '祖谷観光旅館 大浴場の浴場写真',
    '祖谷観光旅館 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/142344/142344.html',
    '楽天トラベル'
  ),
  '祖谷の里 民宿お山荘 大浴場': sourcePhoto(
    'miyoshi-onsen-oyamaso.jpg',
    '祖谷の里 民宿お山荘 大浴場の浴場写真',
    '祖谷の里 民宿お山荘 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/142530/142530.html',
    '楽天トラベル'
  ),
  '本町旅宿 4S STAY 阿波池田 本町通り 大浴場': sourcePhoto(
    'miyoshi-onsen-4s-honmachi.jpg',
    '本町旅宿 4S STAY 阿波池田 本町通り 大浴場の浴場写真',
    '本町旅宿 4S STAY 阿波池田 本町通り 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/180706/180706.html',
    '楽天トラベル'
  ),
  'Ｇｕｅｓｔｈｏｕｓｅ ＫＡＺＵＲＡＢＡＳＨＩ 大浴場': sourcePhoto(
    'miyoshi-onsen-gh-kazura.jpg',
    'Ｇｕｅｓｔｈｏｕｓｅ ＫＡＺＵＲＡＢＡＳＨＩ 大浴場の浴場写真',
    'Ｇｕｅｓｔｈｏｕｓｅ ＫＡＺＵＲＡＢＡＳＨＩ 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/192586/192586.html',
    '楽天トラベル'
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
  ),
  '池田屋': sourcePhoto(
    'miyoshi-36002427-dish.jpg',
    '池田屋の料理写真',
    '池田屋 food photo',
    'https://tabelog.com/tokushima/A3604/A360401/36002427/',
    '食べログ'
  ),
  'Cafe&Bar YAMAYA': sourcePhoto(
    'miyoshi-36007856-dish.jpg',
    'Cafe&Bar YAMAYAの料理写真',
    'Cafe&Bar YAMAYA food photo',
    'https://tabelog.com/tokushima/A3604/A360401/36007856/',
    '食べログ'
  ),
  'Ｂａｒ ｇ': sourcePhoto(
    'miyoshi-36003562-dish.jpg',
    'Ｂａｒ ｇの料理写真',
    'Ｂａｒ ｇ food photo',
    'https://tabelog.com/tokushima/A3604/A360401/36003562/',
    '食べログ'
  ),
  '珈琲館おおぼけ': sourcePhoto(
    'miyoshi-36002868-dish.jpg',
    '珈琲館おおぼけの料理写真',
    '珈琲館おおぼけ food photo',
    'https://tabelog.com/tokushima/A3604/A360401/36002868/',
    '食べログ'
  ),
  '安宅屋本店 総本店': sourcePhoto(
    'miyoshi-36003875-dish.jpg',
    '安宅屋本店 総本店の料理写真',
    '安宅屋本店 総本店 food photo',
    'https://tabelog.com/tokushima/A3604/A360401/36003875/',
    '食べログ'
  ),

};
