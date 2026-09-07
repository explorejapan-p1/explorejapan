/**
 * Miki Town sourced facts. Do not invent population.
 * Hall / JIS from town HP (accessed 2026-09-07). JIS 37341. Fourteenth Kagawa hub after Takamatsu + Kotohira + Marugame + Kanonji + Sakaide + Naoshima + Shodoshima + Zentsuji + Mitoyo + Utazu + Tonosho + Sanuki + Higashikagawa.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay (AZ room). Honest 0 onsen (unit bath only) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MIKI = {
  nameJa: '三木町',
  nameEn: 'Miki',
  reading: 'みきちょう',
  prefectureJa: '香川県',
  prefectureEn: 'Kagawa',
  prefectureSlug: 'kagawa',
  slug: 'miki',
  jis: '37341',
  jlis: '373414',
  sameAs: 'https://www.town.miki.lg.jp/',
  hall: {
    postalCode: '761-0692',
    addressJa: '香川県木田郡三木町大字氷上310番地',
    addressEn: '310 Hyokami, Miki, Kita District, Kagawa 761-0692, Japan',
    phone: '087-891-3300'
  },
  sources: {
    home: 'https://www.town.miki.lg.jp/',
    hall: 'https://www.town.miki.lg.jp/',
    kankou: 'https://www.town.miki.lg.jp/',
    jodoji: 'https://ja.wikipedia.org/wiki/%E6%B5%84%E5%9C%9F%E5%AF%BA_(%E9%A6%99%E5%B7%9D%E7%9C%8C%E4%B8%89%E6%9C%A8%E7%94%BA)',
    tabelogCity: 'https://tabelog.com/kagawa/C37341/rstLst/',
    az: 'https://travel.rakuten.co.jp/HOTEL/197767/197767.html',
    accessed: '2026-09-07'
  }
} as const;

export const MIKI_EXPECTED_ROW_COUNT = 9;
export const MIKI_EXPECTED_GEO_COUNT = 9;

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

/** Cover: Jodo-ji Fudo — strongest attributable Miki landmark. */
export const MIKI_PLACE_PHOTO = wikiPhoto(
  'miki-jodoji.jpg',
  'https://commons.wikimedia.org/wiki/File:Zyoudozi%C9%A4.jpg',
  'CC BY-SA 3.0',
  'https://creativecommons.org/licenses/by-sa/3.0',
  'Dokudami',
  'https://commons.wikimedia.org/wiki/User:Dokudami',
  '2014-04-29',
  '浄土寺の不動明王像（香川県三木町）',
  'Jodo-ji Fudo statue, Miki, Kagawa'
);

const TABELOG_37010311 = 'https://tabelog.com/kagawa/A3701/A370102/37010311/';
const TABELOG_37002866 = 'https://tabelog.com/kagawa/A3701/A370102/37013715/';
const TABELOG_37013715 = 'https://tabelog.com/kagawa/A3701/A370102/37001524/';
const TABELOG_37001524 = 'https://tabelog.com/kagawa/A3701/A370102/37003487/';
const TABELOG_37003487 = 'https://tabelog.com/kagawa/A3701/A370102/37004392/';
const TABELOG_37012152 = 'https://tabelog.com/kagawa/A3701/A370102/37011038/';
const TABELOG_37003215 = 'https://tabelog.com/kagawa/A3701/A370102/37002196/';
const TABELOG_37002196 = 'https://tabelog.com/kagawa/A3701/A370102/37010788/';
const TABELOG_37005643 = 'https://tabelog.com/kagawa/A3701/A370102/37006076/';
const TABELOG_37012235 = 'https://tabelog.com/kagawa/A3701/A370102/37011701/';
const TABELOG_37011701 = 'https://tabelog.com/kagawa/A3701/A370101/37013184/';
const TABELOG_37004457 = 'https://tabelog.com/kagawa/A3701/A370102/37004584/';
const TABELOG_37004584 = 'https://tabelog.com/kagawa/A3701/A370102/37007553/';
const TABELOG_37010984 = 'https://tabelog.com/kagawa/A3701/A370102/37003826/';
const TABELOG_37003826 = 'https://tabelog.com/kagawa/A3701/A370102/37005441/';
const TABELOG_37005441 = 'https://tabelog.com/kagawa/A3701/A370102/37001523/';

/** Exact travel/sight name_ja only. No Tokushima/other-Kagawa Files. */
export const MIKI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '浄土寺': MIKI_PLACE_PHOTO,
  '虹の滝（男滝）': wikiPhoto(
    'miki-kounotaki-odaki.jpg',
    'https://commons.wikimedia.org/wiki/File:Miki_kounotaki_odaki.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Aikaleido',
    'https://commons.wikimedia.org/wiki/User:Aikaleido',
    '2016-07-27',
    '虹の滝・男滝（三木町小蓑）',
    'Odaki fall at Rainbow Falls (Kounotaki), Miki'
  ),
  '虹の滝（雌滝）': wikiPhoto(
    'miki-kounotaki-medaki.jpg',
    'https://commons.wikimedia.org/wiki/File:Miki_kounotaki_medaki.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Aikaleido',
    'https://commons.wikimedia.org/wiki/User:Aikaleido',
    '2016-07-27',
    '虹の滝・雌滝（三木町小蓑）',
    'Medaki fall at Rainbow Falls (Kounotaki), Miki'
  ),
  '公渕森林公園': wikiPhoto(
    'miki-kinbuchi.jpg',
    'https://commons.wikimedia.org/wiki/File:Kinbuchi_forest_park_EastGate.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Aikaleido',
    'https://commons.wikimedia.org/wiki/User:Aikaleido',
    '2014-11-30',
    '公渕森林公園の東門（三木町）',
    'Kinbuchi Forest Park east gate, Miki'
  ),
  '白山神社': wikiPhoto(
    'miki-shirayama-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:Shirayama_Shrine.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Psjk2106',
    'https://commons.wikimedia.org/wiki/User:Psjk2106',
    '2023-03-01',
    '白山神社（三木町白山）',
    'Shirayama Shrine, Miki'
  ),
  '男井間池': wikiPhoto(
    'miki-oimaike.jpg',
    'https://commons.wikimedia.org/wiki/File:%E7%94%B7%E4%BA%95%E9%96%93%E6%B1%A0%EF%BC%88%E3%81%8A%E3%81%84%E3%81%BE%E3%81%84%E3%81%91%EF%BC%89_-_panoramio.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Karasuma-Oike',
    'https://commons.wikimedia.org/wiki/File:%E7%94%B7%E4%BA%95%E9%96%93%E6%B1%A0%EF%BC%88%E3%81%8A%E3%81%84%E3%81%BE%E3%81%84%E3%81%91%EF%BC%89_-_panoramio.jpg',
    '2008-02-10',
    '男井間池（三木町池戸）',
    'Oimaike pond, Miki'
  ),
  '池戸八幡神社': wikiPhoto(
    'miki-ikedo-hachiman.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%B1%A0%E6%88%B8%E5%85%AB%E5%B9%A1%E7%A5%9E%E7%A4%BE_-_panoramio.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Karasuma-Oike',
    'https://commons.wikimedia.org/wiki/File:%E6%B1%A0%E6%88%B8%E5%85%AB%E5%B9%A1%E7%A5%9E%E7%A4%BE_-_panoramio.jpg',
    '2008-05-04',
    '池戸八幡神社（三木町）',
    'Ikedo Hachiman Shrine, Miki'
  ),
  '白山': wikiPhoto(
    'miki-mt-shirayama.jpg',
    'https://commons.wikimedia.org/wiki/File:Mt_shirayama_North_side_at_SanukiMiki.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0',
    'Aikaleido',
    'https://commons.wikimedia.org/wiki/User:Aikaleido',
    '2016-07-26',
    '白山（三木富士）北側（三木町）',
    'Mount Shirayama (Miki Fuji) from the north'
  ),
  'トレスタ白山アイスアリーナ': wikiPhoto(
    'miki-tresta.jpg',
    'https://commons.wikimedia.org/wiki/File:Tresta_Shirayama_Ice_Arena2.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0',
    'Sunport1216',
    'https://commons.wikimedia.org/wiki/User:Sunport1216',
    '2011-11-05',
    'トレスタ白山アイスアリーナ（三木町）',
    'Tresta Shirayama Ice Arena, Miki'
  ),
  'ＨＯＴＥＬ　ＡＺ　香川三木店': sourcePhoto(
    'miki-stay-az.jpg',
    'ＨＯＴＥＬ　ＡＺ　香川三木店の客室写真',
    'HOTEL AZ Kagawa Miki room photo',
    'https://travel.rakuten.co.jp/HOTEL/197767/gallery.html',
    '楽天トラベル'
  ),
  '三木酒場 にのころ': sourcePhoto('miki-37010311-dish.jpg', '三木酒場 にのころの料理写真', '三木酒場 にのころ food photo', TABELOG_37010311, '食べログ'),
  '絆': sourcePhoto('miki-37002866-dish.jpg', '絆の料理写真', '絆 food photo', TABELOG_37002866, '食べログ'),
  '味泉': sourcePhoto('miki-37013715-dish.jpg', '味泉の料理写真', '味泉 food photo', TABELOG_37013715, '食べログ'),
  '三嶋屋': sourcePhoto('miki-37001524-dish.jpg', '三嶋屋の料理写真', '三嶋屋 food photo', TABELOG_37001524, '食べログ'),
  'レストランオリーブ': sourcePhoto('miki-37003487-dish.jpg', 'レストランオリーブの料理写真', 'レストランオリーブ food photo', TABELOG_37003487, '食べログ'),
  'さぬき親鳥中華そば かしわの木': sourcePhoto('miki-37012152-dish.jpg', 'さぬき親鳥中華そば かしわの木の料理写真', 'さぬき親鳥中華そば かしわの木 food photo', TABELOG_37012152, '食べログ'),
  'すし富': sourcePhoto('miki-37003215-dish.jpg', 'すし富の料理写真', 'すし富 food photo', TABELOG_37003215, '食べログ'),
  'カキ焼き白山': sourcePhoto('miki-37002196-dish.jpg', 'カキ焼き白山の料理写真', 'カキ焼き白山 food photo', TABELOG_37002196, '食べログ'),
  'ラーメン庵 福一本陣': sourcePhoto('miki-37005643-dish.jpg', 'ラーメン庵 福一本陣の料理写真', 'ラーメン庵 福一本陣 food photo', TABELOG_37005643, '食べログ'),
  '三木マルシェ': sourcePhoto('miki-37012235-dish.jpg', '三木マルシェの料理写真', '三木マルシェ food photo', TABELOG_37012235, '食べログ'),
  'R': sourcePhoto('miki-37011701-dish.jpg', 'Rの料理写真', 'R food photo', TABELOG_37011701, '食べログ'),
  '焼肉五苑 三木店': sourcePhoto('miki-37004457-dish.jpg', '焼肉五苑 三木店の料理写真', '焼肉五苑 三木店 food photo', TABELOG_37004457, '食べログ'),
  '丸幸': sourcePhoto('miki-37004584-dish.jpg', '丸幸の料理写真', '丸幸 food photo', TABELOG_37004584, '食べログ'),
  'らん': sourcePhoto('miki-37010984-dish.jpg', 'らんの料理写真', 'らん food photo', TABELOG_37010984, '食べログ'),
  '元祖かっしゃ焼 三木店': sourcePhoto('miki-37003826-dish.jpg', '元祖かっしゃ焼 三木店の料理写真', '元祖かっしゃ焼 三木店 food photo', TABELOG_37003826, '食べログ'),
  'みき': sourcePhoto('miki-37005441-dish.jpg', 'みきの料理写真', 'みき food photo', TABELOG_37005441, '食べログ'),
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
    jis: MIKI.jis,
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
    license: '町公式・公式観光サイト掲載情報',
    accessed: MIKI.sources.accessed
  };
}

/** Photo-only tourism / experience rows. No frozen jsonl. Onsen honest 0. */
export const MIKI_FACILITIES: readonly FacilityRow[] = [
  sight('miki-sight-01', '浄土寺', '香川県木田郡三木町井戸429', null, 'https://ja.wikipedia.org/wiki/%E6%B5%84%E5%9C%9F%E5%AF%BA_(%E9%A6%99%E5%B7%9D%E7%9C%8C%E4%B8%89%E6%9C%A8%E7%94%BA)', 34.2507105, 134.1554873),
  sight('miki-sight-02', '虹の滝（男滝）', '香川県木田郡三木町小蓑', null, 'https://www.town.miki.lg.jp/', 34.1810564, 134.1172126),
  sight('miki-sight-03', '虹の滝（雌滝）', '香川県木田郡三木町小蓑', null, 'https://www.town.miki.lg.jp/', 34.1812, 134.1174),
  sight('miki-sight-04', '公渕森林公園', '香川県木田郡三木町', null, 'https://www.town.miki.lg.jp/', 34.241306, 134.104414),
  sight('miki-sight-05', '白山神社', '香川県木田郡三木町白山', null, 'https://ja.wikipedia.org/wiki/%E7%99%BD%E5%B1%B1%E7%A5%9E%E7%A4%BE_(%E4%B8%89%E6%9C%A8%E7%94%BA)', 34.26866667, 134.15027778),
  sight('miki-sight-06', '男井間池', '香川県木田郡三木町池戸', null, 'https://www.town.miki.lg.jp/', 34.2892048, 134.1300523),
  sight('miki-sight-07', '池戸八幡神社', '香川県木田郡三木町池戸1383-2', null, 'https://www.town.miki.lg.jp/', 34.2870374, 134.1246904),
  sight('miki-sight-08', '白山', '香川県木田郡三木町', null, 'https://www.town.miki.lg.jp/', 34.2666958, 134.1507862),
  sight('miki-experience-01', 'トレスタ白山アイスアリーナ', '香川県木田郡三木町下高岡972-30', null, 'https://www.town.miki.lg.jp/', 34.269308, 134.148333)
];
