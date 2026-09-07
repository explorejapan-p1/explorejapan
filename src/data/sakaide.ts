/**
 * Sakaide City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-07). JIS 37203. Fifth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen (keys split).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SAKAIDE = {
  nameJa: '坂出市',
  nameEn: 'Sakaide City',
  reading: 'さかいでし',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'sakaide',
  jis: '37203',
  jlis: '372030',
  sameAs: 'https://www.city.sakaide.lg.jp/',
  hall: {
    postalCode: '762-8601',
    addressJa: '香川県坂出市室町二丁目3番5号',
    addressEn: '2-3-5 Muromachi, Sakaide, Kagawa 762-8601, Japan',
    phone: '0877-46-3111'
  },
  sources: {
    home: 'https://www.city.sakaide.lg.jp/',
    hall: 'https://www.city.sakaide.lg.jp/soshiki/zaimu/mapannai.html',
    seto: 'https://www.city.sakaide.lg.jp/soshiki/sangyoukankou/setoohashi.html',
    kankou: 'https://sakaide-kankou.com/',
    tabelogCity: 'https://tabelog.com/kagawa/C37203/rstLst/',
    routeInn: 'https://travel.rakuten.co.jp/HOTEL/70208/70208.html',
    grand: 'https://travel.rakuten.co.jp/HOTEL/15414/15414.html',
    plaza: 'https://travel.rakuten.co.jp/HOTEL/17901/17901.html',
    accessed: '2026-09-07'
  }
} as const;

export const SAKAIDE_EXPECTED_ROW_COUNT = 12;
export const SAKAIDE_EXPECTED_GEO_COUNT = 12;

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

/** Cover: 瀬戸大橋 twilight — strongest Sakaide landmark. */
export const SAKAIDE_PLACE_PHOTO = wikiPhoto(
  'sakaide-seto-bridge.jpg',
  'https://commons.wikimedia.org/wiki/File:瀬戸大橋（Seto_Ohashi）.jpg',
  'CC BY-SA 4.0',
  'https://creativecommons.org/licenses/by-sa/4.0',
  '＃矛川盾山',
  'https://commons.wikimedia.org/wiki/Special:Contributions/%E7%9F%9B%E5%B7%9D%E7%9B%BE%E5%B1%B1',
  '2018-07-14',
  '瀬戸大橋ライトアップ（坂出市）',
  'Great Seto Bridge lit at dusk, Sakaide'
);

const TABELOG_37000019 = 'https://tabelog.com/kagawa/A3702/A370201/37000019/';
const TABELOG_37000016 = 'https://tabelog.com/kagawa/A3702/A370201/37000016/';
const TABELOG_37000020 = 'https://tabelog.com/kagawa/A3702/A370201/37000020/';
const TABELOG_37005702 = 'https://tabelog.com/kagawa/A3702/A370201/37005702/';
const TABELOG_37001355 = 'https://tabelog.com/kagawa/A3702/A370201/37001355/';
const TABELOG_37005010 = 'https://tabelog.com/kagawa/A3702/A370201/37005010/';
const TABELOG_37008600 = 'https://tabelog.com/kagawa/A3702/A370201/37008600/';
const TABELOG_37012661 = 'https://tabelog.com/kagawa/A3702/A370201/37012661/';
const TABELOG_37001360 = 'https://tabelog.com/kagawa/A3702/A370201/37001360/';
const TABELOG_37000943 = 'https://tabelog.com/kagawa/A3702/A370201/37000943/';
const TABELOG_37000708 = 'https://tabelog.com/kagawa/A3702/A370201/37000708/';
const TABELOG_37000106 = 'https://tabelog.com/kagawa/A3702/A370201/37000106/';
const TABELOG_37000701 = 'https://tabelog.com/kagawa/A3702/A370201/37000701/';
const TABELOG_37002605 = 'https://tabelog.com/kagawa/A3702/A370201/37002605/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const SAKAIDE_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '瀬戸大橋': SAKAIDE_PLACE_PHOTO,
  '瀬戸大橋記念公園': wikiPhoto(
    'sakaide-kinen-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Great_Seto_Bridge_Memorial_Park01s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2007-05-04',
    '瀬戸大橋記念公園（坂出市）',
    'Seto Ohashi Memorial Park, Sakaide'
  ),
  '瀬戸大橋タワー': wikiPhoto(
    'sakaide-tower.jpg',
    'https://commons.wikimedia.org/wiki/File:Seto_Ohashi_Tower_01.JPG',
    'Public domain',
    'https://creativecommons.org/publicdomain/mark/1.0/',
    'Abasaa',
    'https://commons.wikimedia.org/wiki/User:%E3%81%82%E3%81%B0%E3%81%95%E3%83%BC',
    '2018-01-07',
    '瀬戸大橋タワー（坂出市）',
    'Seto Ohashi Tower, Sakaide'
  ),
  '東山魁夷せとうち美術館': wikiPhoto(
    'sakaide-higashiyama.jpg',
    'https://commons.wikimedia.org/wiki/File:せとうち美術館-1.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'やしまのお城',
    'https://commons.wikimedia.org/w/index.php?title=User:%E3%82%84%E3%81%97%E3%81%BE%E3%81%AE%E3%81%8A%E5%9F%8E&amp;action=edit&amp;redlink=1',
    '2019-07-12',
    '香川県立東山魁夷せとうち美術館（坂出市）',
    'Higashiyama Kaii Setouchi Art Museum, Sakaide'
  ),
  '与島': wikiPhoto(
    'sakaide-yoshima.jpg',
    'https://commons.wikimedia.org/wiki/File:Kita_Bisan-Seto_Bridge_viewed_from_Yoshima_PA_01.jpg',
    'CC BY 4.0',
    'https://creativecommons.org/licenses/by/4.0',
    'ノボホショコロトソ',
    'https://commons.wikimedia.org/w/index.php?title=User:%E3%83%8E%E3%83%9C%E3%83%9B%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%AD%E3%83%88%E3%82%BD&amp;action=edit&amp;redlink=1',
    '2026-07-17',
    '与島パーキングエリアから見た北備讃瀬戸大橋（坂出市）',
    'Kita Bisan-Seto Bridge from Yoshima PA, Sakaide'
  ),
  '鍋島灯台': wikiPhoto(
    'sakaide-nabeshima.jpg',
    'https://commons.wikimedia.org/wiki/File:Nabeshima_Lighthouse.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク',
    'https://commons.wikimedia.org/wiki/File%3ANabeshima_Lighthouse.JPG',
    '2015-04',
    '鍋島灯台（坂出市与島）',
    'Nabeshima Lighthouse, Yoshima, Sakaide'
  ),
  '飯野山': wikiPhoto(
    'sakaide-iino.jpg',
    'https://commons.wikimedia.org/wiki/File:Mount_Iino_Sanuki_Fuji.JPG',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'hyolee2',
    'https://commons.wikimedia.org/wiki/User:Hyolee2',
    '2023-06-17',
    '飯野山（讃岐富士・坂出市）',
    'Mount Iino (Sanuki Fuji), Sakaide'
  ),
  '白峯寺': wikiPhoto(
    'sakaide-shiromine.jpg',
    'https://commons.wikimedia.org/wiki/File:Sirominezi_11.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2018-11-26',
    '白峯寺（坂出市）',
    'Shiromine-ji, Sakaide'
  ),
  '沙弥島': wikiPhoto(
    'sakaide-shamijima.jpg',
    'https://commons.wikimedia.org/wiki/File:Bannosumidoricho_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0',
    'DVMG',
    'https://web.archive.org/web/20161028114556/http://www.panoramio.com/user/4084506?with_photo_id=97575574',
    '11 October',
    '沙弥島付近から望む瀬戸大橋（坂出市）',
    'Great Seto Bridge near Shamijima, Sakaide'
  ),
  '道の駅瀬戸大橋記念公園': wikiPhoto(
    'sakaide-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:Great_Seto_Bridge_Memorial_Park02s3872.jpg',
    'CC BY 2.5',
    'https://creativecommons.org/licenses/by/2.5',
    '663highland',
    'https://ja.wikipedia.org/wiki/user:663highland',
    '2007-05-04',
    '道の駅瀬戸大橋記念公園（坂出市）',
    'Michinoeki Seto-Ohashi Kinen-koen, Sakaide'
  ),
  'ホテルルートイン坂出北インター': sourcePhoto(
    'sakaide-stay-routeinn.jpg',
    'ホテルルートイン坂出北インターの客室写真',
    'Hotel Route Inn Sakaide Kita Inter room photo',
    'https://travel.rakuten.co.jp/HOTEL/70208/gallery.html',
    '楽天トラベル'
  ),
  '坂出グランドホテル': sourcePhoto(
    'sakaide-stay-grand.jpg',
    '坂出グランドホテルの客室写真',
    'Sakaide Grand Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/15414/gallery.html',
    '楽天トラベル'
  ),
  '坂出プラザホテル': sourcePhoto(
    'sakaide-stay-plaza.jpg',
    '坂出プラザホテルの客室写真',
    'Sakaide Plaza Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/17901/gallery.html',
    '楽天トラベル'
  ),
  'ホテルルートイン坂出北インター 大浴場': sourcePhoto(
    'sakaide-onsen-routeinn.jpg',
    'ホテルルートイン坂出北インターの大浴場写真',
    'Hotel Route Inn Sakaide Kita Inter bath photo',
    'https://travel.rakuten.co.jp/HOTEL/70208/gallery.html',
    '楽天トラベル'
  ),
  '坂出グランドホテル 大浴場': sourcePhoto(
    'sakaide-onsen-grand.jpg',
    '坂出グランドホテルの大浴場写真',
    'Sakaide Grand Hotel bath photo',
    'https://travel.rakuten.co.jp/HOTEL/15414/gallery.html',
    '楽天トラベル'
  ),
  '讃岐うどん がもう': sourcePhoto('sakaide-37000019-dish.jpg', '讃岐うどん がもうの料理写真', '讃岐うどん がもう food photo', TABELOG_37000019, '食べログ'),
  '日の出製麺所': sourcePhoto('sakaide-37000016-dish.jpg', '日の出製麺所の料理写真', '日の出製麺所 food photo', TABELOG_37000016, '食べログ'),
  '山下うどん': sourcePhoto('sakaide-37000020-dish.jpg', '山下うどんの料理写真', '山下うどん food photo', TABELOG_37000020, '食べログ'),
  'やなぎ屋 西大浜店': sourcePhoto('sakaide-37005702-dish.jpg', 'やなぎ屋 西大浜店の料理写真', 'やなぎ屋 西大浜店 food photo', TABELOG_37005702, '食べログ'),
  'とらや': sourcePhoto('sakaide-37001355-dish.jpg', 'とらやの料理写真', 'とらや food photo', TABELOG_37001355, '食べログ'),
  'まいどまいど': sourcePhoto('sakaide-37005010-dish.jpg', 'まいどまいどの料理写真', 'まいどまいど food photo', TABELOG_37005010, '食べログ'),
  'めんや七福 別邸': sourcePhoto('sakaide-37008600-dish.jpg', 'めんや七福 別邸の料理写真', 'めんや七福 別邸 food photo', TABELOG_37008600, '食べログ'),
  '手打ちうどん かまや': sourcePhoto('sakaide-37012661-dish.jpg', '手打ちうどん かまやの料理写真', '手打ちうどん かまや food photo', TABELOG_37012661, '食べログ'),
  'さぬきまるふじ': sourcePhoto('sakaide-37001360-dish.jpg', 'さぬきまるふじの料理写真', 'さぬきまるふじ food photo', TABELOG_37001360, '食べログ'),
  '饂飩 こむぎや': sourcePhoto('sakaide-37000943-dish.jpg', '饂飩 こむぎやの料理写真', '饂飩 こむぎや food photo', TABELOG_37000943, '食べログ'),
  '手打うどん 町川': sourcePhoto('sakaide-37000708-dish.jpg', '手打うどん 町川の料理写真', '手打うどん 町川 food photo', TABELOG_37000708, '食べログ'),
  'ウェリントン': sourcePhoto('sakaide-37000106-dish.jpg', 'ウェリントンの料理写真', 'ウェリントン food photo', TABELOG_37000106, '食べログ'),
  '清水屋': sourcePhoto('sakaide-37000701-dish.jpg', '清水屋の料理写真', '清水屋 food photo', TABELOG_37000701, '食べログ'),
  'ホクセイ': sourcePhoto('sakaide-37002605-dish.jpg', 'ホクセイの料理写真', 'ホクセイ food photo', TABELOG_37002605, '食べログ'),
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
    jis: SAKAIDE.jis,
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
    accessed: SAKAIDE.sources.accessed
  };
}

/** Photo-only tourism / onsen / experience rows. No frozen jsonl. */
export const SAKAIDE_FACILITIES: readonly FacilityRow[] = [
  sight('sakaide-sight-01', '瀬戸大橋', '香川県坂出市番の州緑町', null, SAKAIDE.sources.seto, 34.35267, 133.82603),
  sight('sakaide-sight-02', '瀬戸大橋記念公園', '香川県坂出市番の州緑町6-13', '0877-45-2344', SAKAIDE.sources.seto, 34.35267, 133.82603),
  sight('sakaide-sight-03', '瀬戸大橋タワー', '香川県坂出市番の州緑町', null, SAKAIDE.sources.seto, 34.35180, 133.82500),
  sight('sakaide-sight-04', '東山魁夷せとうち美術館', '香川県坂出市沙弥島南通224-13', '0877-44-1333', 'https://www.pref.kagawa.lg.jp/higashiyama/', 34.349383, 133.824189),
  sight('sakaide-sight-05', '与島', '香川県坂出市与島町587', '0877-43-0502', 'https://sakaide-kankou.com/spots/829/', 34.389167, 133.819444),
  sight('sakaide-sight-06', '鍋島灯台', '香川県坂出市与島町', null, 'https://sakaide-kankou.com/spots/829/', 34.382411, 133.823708),
  sight('sakaide-sight-07', '飯野山', '香川県坂出市川津町', null, SAKAIDE.sources.kankou, 34.29190, 133.83080),
  sight('sakaide-sight-08', '白峯寺', '香川県坂出市青海町263', '0877-47-0355', SAKAIDE.sources.kankou, 34.333528, 133.926764),
  sight('sakaide-sight-09', '沙弥島', '香川県坂出市沙弥島', '0877-45-1122', 'https://sakaide-kankou.com/spots/855/', 34.348611, 133.822222),
  sight('sakaide-exp-01', '道の駅瀬戸大橋記念公園', '香川県坂出市番の州緑町6-13', '0877-45-2344', SAKAIDE.sources.seto, 34.35267, 133.82603),
  sight('sakaide-onsen-01', 'ホテルルートイン坂出北インター 大浴場', '香川県坂出市西大浜北4-5-31', '0877-59-1110', 'https://travel.rakuten.co.jp/HOTEL/70208/gallery.html', 34.33750, 133.85520),
  sight('sakaide-onsen-02', '坂出グランドホテル 大浴場', '香川県坂出市西大浜北1-2-33', '0877-44-1000', 'https://travel.rakuten.co.jp/HOTEL/15414/gallery.html', 34.33580, 133.85150)
];
