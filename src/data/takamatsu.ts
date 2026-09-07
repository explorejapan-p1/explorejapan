/**
 * Takamatsu City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37201. First Kagawa hub.
 * No frozen pack — photo-only tourism + Tabelog dining like anan/tokushima-city.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TAKAMATSU = {
  nameJa: '高松市',
  nameEn: 'Takamatsu City',
  reading: 'たかまつし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'takamatsu',
  jis: '37201',
  jlis: '372013',
  sameAs: 'https://www.city.takamatsu.kagawa.jp/',
  hall: {
    postalCode: '760-8571',
    addressJa: '香川県高松市番町一丁目8番15号',
    addressEn: '1-8-15 Bancho, Takamatsu, Kagawa 760-8571, Japan',
    phone: '087-839-2011'
  },
  sources: {
    home: 'https://www.city.takamatsu.kagawa.jp/',
    hall: 'https://www.city.takamatsu.kagawa.jp/',
    kanko: 'https://www.my-kagawa.jp/',
    ritsurin: 'https://www.city.takamatsu.kagawa.jp/kurashi/kosodate/bunka/bunkazai/shiteibunkazai/meisho/ritsurin.html',
    tamamo: 'https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/shisetsu/park/tamamo/index.html',
    yashima: 'https://www.my-kagawa.jp/point',
    yashimaji: 'https://www.my-kagawa.jp/point',
    megijima: 'https://www.my-kagawa.jp/point',
    shikokumura: 'https://www.my-kagawa.jp/point',
    cable: 'https://www.my-kagawa.jp/point',
    noguchi: 'https://www.my-kagawa.jp/point',
    tabelogCity: 'https://tabelog.com/kagawa/C37201/rstLst/',
    accessed: '2026-09-07'
  }
} as const;

export const TAKAMATSU_EXPECTED_ROW_COUNT = 8;
export const TAKAMATSU_EXPECTED_GEO_COUNT = 8;

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
    accessed: '2026-09-07',
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
    accessed: '2026-09-07',
    altJa,
    altEn
  };
}

/** Cover: 栗林公園 観月橋 — strongest Takamatsu landmark. Not Tokushima. */
export const TAKAMATSU_PLACE_PHOTO = wikiPhoto(
  'takamatsu-ritsurin-kangetsu.jpg',
  'https://commons.wikimedia.org/wiki/File:Ritsurin_garden_kangetsu_bridge.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  'ブルーノ・プラス',
  'https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AB%E3%83%BC%E3%83%8E%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B9',
  '2023-04',
  '栗林公園・観月橋（特別名勝・高松市）',
  'Kangetsu Bridge at Ritsurin Garden, Special Place of Scenic Beauty, Takamatsu'
);

const TABELOG_37008167 = "https://tabelog.com/kagawa/A3701/A370101/37008167/";
const TABELOG_37006820 = "https://tabelog.com/kagawa/A3701/A370101/37006820/";
const TABELOG_37000760 = "https://tabelog.com/kagawa/A3701/A370101/37000760/";
const TABELOG_37000358 = "https://tabelog.com/kagawa/A3701/A370101/37000358/";
const TABELOG_37000049 = "https://tabelog.com/kagawa/A3701/A370101/37000049/";
const TABELOG_37000242 = "https://tabelog.com/kagawa/A3701/A370101/37000242/";
const TABELOG_37000026 = "https://tabelog.com/kagawa/A3701/A370101/37000026/";
const TABELOG_37001209 = "https://tabelog.com/kagawa/A3701/A370101/37001209/";
const TABELOG_37000874 = "https://tabelog.com/kagawa/A3701/A370101/37000874/";
const TABELOG_37000048 = "https://tabelog.com/kagawa/A3701/A370101/37000048/";
const TABELOG_37000040 = "https://tabelog.com/kagawa/A3701/A370101/37000040/";
const TABELOG_37000134 = "https://tabelog.com/kagawa/A3701/A370101/37000134/";
const TABELOG_37005339 = "https://tabelog.com/kagawa/A3701/A370101/37005339/";
const TABELOG_37000768 = "https://tabelog.com/kagawa/A3701/A370101/37000768/";

/** Exact travel/sight name_ja only. No Tokushima Files. */
export const TAKAMATSU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '栗林公園': TAKAMATSU_PLACE_PHOTO,
  '掬月亭': wikiPhoto(
    'takamatsu-ritsurin-kikugetsu.jpg',
    'https://commons.wikimedia.org/wiki/File:Ritsurin_garden_kikugetsutei.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'ブルーノ・プラス',
    'https://commons.wikimedia.org/wiki/User:%E3%83%96%E3%83%AB%E3%83%BC%E3%83%8E%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B9',
    '2023-04',
    '栗林公園・掬月亭（高松市）',
    'Kikugetsu-tei tea house, Ritsurin Garden, Takamatsu'
  ),
  '高松城（玉藻公園）': wikiPhoto(
    'takamatsu-castle-sanuki.jpg',
    'https://commons.wikimedia.org/wiki/File:Takamatsu_Castle_(Sanuki)_20170609-2.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Suicasmo',
    'https://commons.wikimedia.org/wiki/User:Suicasmo',
    '2017-06-09',
    '高松城・玉藻公園（高松市）',
    'Takamatsu Castle (Tamamo Park), Takamatsu'
  ),
  '屋島': wikiPhoto(
    'takamatsu-yashima.jpg',
    'https://commons.wikimedia.org/wiki/File:Takamatsu_Yashima_M3671.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Wikipedia',
    'https://commons.wikimedia.org/wiki/File:Takamatsu_Yashima_M3671.jpg',
    '2007',
    '屋島（高松市）',
    'Yashima plateau, Takamatsu'
  ),
  '屋島寺': wikiPhoto(
    'takamatsu-yashimaji.jpg',
    'https://commons.wikimedia.org/wiki/File:Yashimaji_01.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2009-05-04',
    '屋島寺（四国八十八箇所第八十四番・高松市）',
    'Yashima-ji, Shikoku pilgrimage temple 84, Takamatsu'
  ),
  '女木島': wikiPhoto(
    'takamatsu-megijima.jpg',
    'https://commons.wikimedia.org/wiki/File:Megijima-Top.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Petr Vodička',
    'https://commons.wikimedia.org/wiki/User:PetrVod',
    '2013',
    '女木島（高松市）',
    'Megijima island, Takamatsu'
  ),
  '四国村': wikiPhoto(
    'takamatsu-shikokumura.jpg',
    'https://commons.wikimedia.org/wiki/File:Shikokumura29s3200.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://commons.wikimedia.org/wiki/User:663highland',
    '2008',
    '四国村（高松市）',
    'Shikoku Mura open-air museum, Takamatsu'
  ),
  '屋島ケーブルカー': wikiPhoto(
    'takamatsu-yashima-cable.jpg',
    'https://commons.wikimedia.org/wiki/File:Yashima_cable_car_2.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Muyo',
    'https://commons.wikimedia.org/wiki/User:Muyo',
    '1997-12-29',
    '屋島ケーブルカー（高松市）',
    'Yashima cable car, Takamatsu'
  ),
  'イサム・ノグチ庭園美術館': wikiPhoto(
    'takamatsu-noguchi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%82%A4%E3%82%B5%E3%83%A0%E3%83%8E%E3%82%B0%E3%83%81%E5%BA%AD%E5%9C%92%E5%A4%96%E8%A6%B3.jpg',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'osami',
    'https://commons.wikimedia.org/wiki/File:%E3%82%A4%E3%82%B5%E3%83%A0%E3%83%8E%E3%82%B0%E3%83%81%E5%BA%AD%E5%9C%92%E5%A4%96%E8%A6%B3.jpg',
    '2007',
    'イサム・ノグチ庭園美術館（高松市）',
    'Isamu Noguchi Garden Museum, Takamatsu'
  ),

  "両忘": sourcePhoto(
    "takamatsu-37008167-dish.jpg",
    "両忘の料理写真",
    "両忘 food photo",
    TABELOG_37008167,
    '食べログ'
  ),
  "ふる里うどん": sourcePhoto(
    "takamatsu-37006820-dish.jpg",
    "ふる里うどんの料理写真",
    "ふる里うどん food photo",
    TABELOG_37006820,
    '食べログ'
  ),
  "寿司 中川": sourcePhoto(
    "takamatsu-37000760-dish.jpg",
    "寿司 中川の料理写真",
    "寿司 中川 food photo",
    TABELOG_37000760,
    '食べログ'
  ),
  "鮨舳": sourcePhoto(
    "takamatsu-37000358-dish.jpg",
    "鮨舳の料理写真",
    "鮨舳 food photo",
    TABELOG_37000358,
    '食べログ'
  ),
  "手打うどん はりや": sourcePhoto(
    "takamatsu-37000049-dish.jpg",
    "手打うどん はりやの料理写真",
    "手打うどん はりや food photo",
    TABELOG_37000049,
    '食べログ'
  ),
  "手打十段 うどんバカ一代": sourcePhoto(
    "takamatsu-37000242-dish.jpg",
    "手打十段 うどんバカ一代の料理写真",
    "手打十段 うどんバカ一代 food photo",
    TABELOG_37000242,
    '食べログ'
  ),
  "うどん さか枝": sourcePhoto(
    "takamatsu-37000026-dish.jpg",
    "うどん さか枝の料理写真",
    "うどん さか枝 food photo",
    TABELOG_37000026,
    '食べログ'
  ),
  "うどん 一福": sourcePhoto(
    "takamatsu-37001209-dish.jpg",
    "うどん 一福の料理写真",
    "うどん 一福 food photo",
    TABELOG_37001209,
    '食べログ'
  ),
  "手打うどん 麦蔵": sourcePhoto(
    "takamatsu-37000874-dish.jpg",
    "手打うどん 麦蔵の料理写真",
    "手打うどん 麦蔵 food photo",
    TABELOG_37000874,
    '食べログ'
  ),
  "讃岐うどん 上原屋本店": sourcePhoto(
    "takamatsu-37000048-dish.jpg",
    "讃岐うどん 上原屋本店の料理写真",
    "讃岐うどん 上原屋本店 food photo",
    TABELOG_37000048,
    '食べログ'
  ),
  "中西うどん": sourcePhoto(
    "takamatsu-37000040-dish.jpg",
    "中西うどんの料理写真",
    "中西うどん food photo",
    TABELOG_37000040,
    '食べログ'
  ),
  "本格手打 もり家": sourcePhoto(
    "takamatsu-37000134-dish.jpg",
    "本格手打 もり家の料理写真",
    "本格手打 もり家 food photo",
    TABELOG_37000134,
    '食べログ'
  ),
  "宮武うどん": sourcePhoto(
    "takamatsu-37005339-dish.jpg",
    "宮武うどんの料理写真",
    "宮武うどん food photo",
    TABELOG_37005339,
    '食べログ'
  ),
  "れんげ料理店": sourcePhoto(
    "takamatsu-37000768-dish.jpg",
    "れんげ料理店の料理写真",
    "れんげ料理店 food photo",
    TABELOG_37000768,
    '食べログ'
  ),

  'ＪＲホテルクレメント高松': sourcePhoto(
    'takamatsu-stay-clement.jpg',
    'ＪＲホテルクレメント高松の客室・外観写真',
    'JR Hotel Clement Takamatsu room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/14862/14862.html',
    '楽天トラベル'
  ),
  '高松センチュリーホテル': sourcePhoto(
    'takamatsu-stay-century.jpg',
    '高松センチュリーホテルの客室・外観写真',
    'Takamatsu Century Hotel room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/7593/7593.html',
    '楽天トラベル'
  ),
  'エクストールイン高松': sourcePhoto(
    'takamatsu-stay-extol.jpg',
    'エクストールイン高松の客室・外観写真',
    'Extol Inn Takamatsu room or exterior photo',
    'https://travel.rakuten.co.jp/HOTEL/172251/172251.html',
    '楽天トラベル'
  ),
  'コンフォートホテル高松': sourcePhoto(
    'takamatsu-stay-comfort.jpg',
    'コンフォートホテル高松の客室・外観写真',
    'Comfort Hotel Takamatsu room or exterior photo',
    'https://www.choice-hotels.jp/hotel/takamatsu/',
    '公式サイト'
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
    jis: TAKAMATSU.jis,
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
    accessed: TAKAMATSU.sources.accessed
  };
}

/** Photo-only tourism rows. No frozen jsonl. Wikipedia / official coords. */
export const TAKAMATSU_FACILITIES: readonly FacilityRow[] = [
  sight('takamatsu-sight-01', '栗林公園', '香川県高松市栗林町一丁目20番16号', null, TAKAMATSU.sources.ritsurin, 34.330333, 134.044403),
  sight('takamatsu-sight-02', '高松城（玉藻公園）', '香川県高松市玉藻町2-1', '087-851-1521', TAKAMATSU.sources.tamamo, 34.350278, 134.051667),
  sight('takamatsu-sight-03', '屋島', '香川県高松市屋島東町', null, TAKAMATSU.sources.yashima, 34.3575, 134.1014),
  sight('takamatsu-sight-04', '屋島寺', '香川県高松市屋島東町1808', null, TAKAMATSU.sources.yashimaji, 34.3586, 134.1019),
  sight('takamatsu-sight-05', '女木島', '香川県高松市女木町', null, TAKAMATSU.sources.megijima, 34.4000, 134.0500),
  sight('takamatsu-sight-06', '四国村', '香川県高松市屋島中町91', null, TAKAMATSU.sources.shikokumura, 34.3486, 134.1000),
  sight('takamatsu-sight-07', '屋島ケーブルカー', '香川県高松市屋島東町', null, TAKAMATSU.sources.cable, 34.3550, 134.0980),
  sight('takamatsu-sight-08', 'イサム・ノグチ庭園美術館', '香川県高松市牟礼町牟礼3519', null, TAKAMATSU.sources.noguchi, 34.3420, 134.1230)
];
