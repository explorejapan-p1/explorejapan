/**
 * Higashikagawa City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37207. Thirteenth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide + Naoshima + Shodoshima + Zentsuji + Mitoyo + Utazu + Tonosho + Sanuki.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const HIGASHIKAGAWA = {
  nameJa: '東かがわ市',
  nameEn: 'Higashikagawa',
  reading: 'ひがしかがわし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'higashikagawa',
  jis: '37207',
  jlis: '372072',
  sameAs: 'https://www.higashikagawa.jp/',
  hall: {
    postalCode: '769-2792',
    addressJa: '香川県東かがわ市湊1847番地1',
    addressEn: '1847-1 Minato, Higashikagawa, Kagawa 769-2792, Japan',
    phone: '0879-26-1214'
  },
  sources: {
    home: 'https://www.higashikagawa.jp/',
    hall: 'https://www.higashikagawa.jp/shiseijoho/shiyakusho_madoguchiannai/1898.html',
    kankou: 'https://higashikagawa.net/',
    hiketa: 'https://higashikagawa.net/sightseeing/hiketajo',
    tabelogCity: 'https://tabelog.com/kagawa/C37207/rstLst/',
    vessel: 'https://travel.rakuten.co.jp/HOTEL/140768/140768.html',
    az: 'https://travel.rakuten.co.jp/HOTEL/158467/158467.html',
    accessed: '2026-09-07'
  }
} as const;

export const HIGASHIKAGAWA_EXPECTED_ROW_COUNT = 8;
export const HIGASHIKAGAWA_EXPECTED_GEO_COUNT = 8;

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

/** Cover: Hiketa Castle — strongest attributable landmark. */
export const HIGASHIKAGAWA_PLACE_PHOTO = wikiPhoto(
  'higashikagawa-hiketa-castle.jpg',
  'https://commons.wikimedia.org/wiki/File%3AHiketa-Castle.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  'HikaruKinkakuji',
  'https://commons.wikimedia.org/wiki/User:HikaruKinkakuji',
  '2020-02-02',
  '引田城跡の石垣（東かがわ市）',
  'Hiketa Castle stone walls, Higashikagawa'
);

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const HIGASHIKAGAWA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '引田城跡': HIGASHIKAGAWA_PLACE_PHOTO,
  '引田のまち並み': wikiPhoto(
    'higashikagawa-hiketa-town.jpg',
    'https://commons.wikimedia.org/wiki/File%3AHiketa_town_view.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2010-09-24',
    '引田のまち並み（東かがわ市）',
    'Hiketa historic townscape, Higashikagawa'
  ),
  '引田港': wikiPhoto(
    'higashikagawa-hiketa-port.jpg',
    'https://commons.wikimedia.org/wiki/File%3APort_of_Hiketa.jpg',
    'CC0',
    'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
    '岩佐 栄三',
    'https://commons.wikimedia.org/wiki/User:%E5%B2%A9%E4%BD%90_%E6%A0%84%E4%B8%89',
    '2017-12-24',
    '引田港（東かがわ市）',
    'Port of Hiketa, Higashikagawa'
  ),
  '白鳥神社': wikiPhoto(
    'higashikagawa-shirotori-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File%3ASirotorizinzya02.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2014-10-11',
    '白鳥神社（東かがわ市）',
    'Shirotori Shrine, Higashikagawa'
  ),
  '釈王寺': wikiPhoto(
    'higashikagawa-shakuoji.jpg',
    'https://commons.wikimedia.org/wiki/File%3AShakuoji_01.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman',
    'https://commons.wikimedia.org/wiki/User:Reggaeman',
    '2011-10-02',
    '釈王寺（東かがわ市）',
    'Shakuo-ji Temple, Higashikagawa'
  ),
  '與田寺': wikiPhoto(
    'higashikagawa-yodaji.jpg',
    'https://commons.wikimedia.org/wiki/File%3AYodaji02s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2007-10-28',
    '與田寺（東かがわ市）',
    'Yoda-ji Temple, Higashikagawa'
  ),
  '讃州井筒屋敷': wikiPhoto(
    'higashikagawa-izutsu.jpg',
    'https://commons.wikimedia.org/wiki/File%3ASanshu_Izutsu_Yahsiki_ac_%281%29.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2022',
    '讃州井筒屋敷（東かがわ市引田）',
    'Sanshu Izutsu Yashiki, Hiketa, Higashikagawa'
  ),
  '瀬戸内リゾート　ベッセルおおち': sourcePhoto(
    'higashikagawa-stay-vessel.jpg',
    '瀬戸内リゾート　ベッセルおおちの和室写真',
    'Setouchi Resort Vessel Oochi Japanese-style room photo',
    'https://travel.rakuten.co.jp/HOTEL/140768/gallery.html',
    '楽天トラベル'
  ),
  'ＨＯＴＥＬ　ＡＺ　香川東かがわ店': sourcePhoto(
    'higashikagawa-stay-az.jpg',
    'ＨＯＴＥＬ　ＡＺ　香川東かがわ店のツインルーム写真',
    'HOTEL AZ Kagawa Higashikagawa twin room photo',
    'https://travel.rakuten.co.jp/HOTEL/158467/gallery.html',
    '楽天トラベル'
  ),
  '瀬戸内リゾート　ベッセルおおち 大浴場': sourcePhoto(
    'higashikagawa-onsen-vessel.jpg',
    '瀬戸内リゾート　ベッセルおおち大浴場の露天風呂写真',
    'Setouchi Resort Vessel Oochi large bath open-air photo',
    'https://travel.rakuten.co.jp/HOTEL/140768/gallery.html',
    '楽天トラベル'
  ),
  '魚源': sourcePhoto(
    'higashikagawa-37010244-dish.jpg',
    '魚源の料理写真',
    '魚源 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37010244/',
    '食べログ'
  ),
  '味道源': sourcePhoto(
    'higashikagawa-37002993-dish.jpg',
    '味道源の料理写真',
    '味道源 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37002993/',
    '食べログ'
  ),
  'やきどり': sourcePhoto(
    'higashikagawa-37003820-dish.jpg',
    'やきどりの料理写真',
    'やきどり dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37003820/',
    '食べログ'
  ),
  '大衆酒場 ばろん': sourcePhoto(
    'higashikagawa-37014584-dish.jpg',
    '大衆酒場 ばろんの料理写真',
    '大衆酒場 ばろん dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37014584/',
    '食べログ'
  ),
  '福味 三本松店': sourcePhoto(
    'higashikagawa-37008155-dish.jpg',
    '福味 三本松店の料理写真',
    '福味 三本松店 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37008155/',
    '食べログ'
  ),
  'かめびし茶屋': sourcePhoto(
    'higashikagawa-37000291-dish.jpg',
    'かめびし茶屋の料理写真',
    'かめびし茶屋 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37000291/',
    '食べログ'
  ),
  'UNWASTED': sourcePhoto(
    'higashikagawa-37012056-dish.jpg',
    'UNWASTEDの料理写真',
    'UNWASTED dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37012056/',
    '食べログ'
  ),
  '五名ふるさとの家': sourcePhoto(
    'higashikagawa-37010810-dish.jpg',
    '五名ふるさとの家の料理写真',
    '五名ふるさとの家 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37010810/',
    '食べログ'
  ),
  '吾割安': sourcePhoto(
    'higashikagawa-37001928-dish.jpg',
    '吾割安の料理写真',
    '吾割安 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37001928/',
    '食べログ'
  ),
  '居酒屋冨': sourcePhoto(
    'higashikagawa-37004102-dish.jpg',
    '居酒屋冨の料理写真',
    '居酒屋冨 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37004102/',
    '食べログ'
  ),
  '元匠 東かがわ店': sourcePhoto(
    'higashikagawa-37004937-dish.jpg',
    '元匠 東かがわ店の料理写真',
    '元匠 東かがわ店 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37004937/',
    '食べログ'
  ),
  'ヌーベルポスト': sourcePhoto(
    'higashikagawa-37014280-dish.jpg',
    'ヌーベルポストの料理写真',
    'ヌーベルポスト dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37014280/',
    '食べログ'
  ),
  'まるいち': sourcePhoto(
    'higashikagawa-37003807-dish.jpg',
    'まるいちの料理写真',
    'まるいち dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37003807/',
    '食べログ'
  ),
  'ごはんや　醤': sourcePhoto(
    'higashikagawa-37002023-dish.jpg',
    'ごはんや　醤の料理写真',
    'ごはんや　醤 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37002023/',
    '食べログ'
  ),
  '食堂 おおや': sourcePhoto(
    'higashikagawa-37014337-dish.jpg',
    '食堂 おおやの料理写真',
    '食堂 おおや dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37014337/',
    '食べログ'
  ),
  '三吉丸水産': sourcePhoto(
    'higashikagawa-37012155-dish.jpg',
    '三吉丸水産の料理写真',
    '三吉丸水産 dish photo',
    'https://tabelog.com/kagawa/A3704/A370402/37012155/',
    '食べログ'
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
    jis: HIGASHIKAGAWA.jis,
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
    license: '市公式・公式観光サイト掲載情報',
    accessed: HIGASHIKAGAWA.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const HIGASHIKAGAWA_FACILITIES: readonly FacilityRow[] = [
  sight('higashikagawa-sight-01', '引田城跡', '香川県東かがわ市引田', '0879-26-1238', 'https://higashikagawa.net/sightseeing/hiketajo', 34.23326111, 134.40918611),
  sight('higashikagawa-sight-02', '引田のまち並み', '香川県東かがわ市引田', null, 'https://higashikagawa.net/course/course-876', 34.2244055, 134.4020096),
  sight('higashikagawa-sight-03', '引田港', '香川県東かがわ市引田', null, 'https://higashikagawa.net/', 34.2337013, 134.4083489),
  sight('higashikagawa-sight-04', '白鳥神社', '香川県東かがわ市湊', null, 'https://higashikagawa.net/', 34.2460431, 134.3637491),
  sight('higashikagawa-sight-05', '釈王寺', '香川県東かがわ市', null, 'https://higashikagawa.net/', 34.26061111, 134.31038889),
  sight('higashikagawa-sight-06', '與田寺', '香川県東かがわ市西村', null, 'https://higashikagawa.net/', 34.2419325, 134.3210854),
  sight('higashikagawa-experience-01', '讃州井筒屋敷', '香川県東かがわ市引田2163', null, 'https://higashikagawa.net/', 34.2276376, 134.4034141),
  sight('higashikagawa-onsen-01', '瀬戸内リゾート　ベッセルおおち 大浴場', '香川県東かがわ市馬篠1200', '0879-26-1126', 'https://travel.rakuten.co.jp/HOTEL/140768/gallery.html', 34.2745301, 134.2979011)
];
