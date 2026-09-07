/**
 * Kuroshio Town sourced facts. Do not invent population.
 * Hall / JIS from town Wikipedia / town HP facts (accessed 2026-09-08). JIS 39428. Thirteenth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: ネスト・ウエストガーデン土佐 スタンダードツイン. Onsen: 0 (no attributable bath mediaInfo key; stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KUROSHIO = {
  nameJa: '黒潮町',
  nameEn: 'Kuroshio',
  reading: 'くろしおちょう',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'kuroshio',
  jis: '39428',
  jlis: '394289',
  sameAs: 'https://www.town.kuroshio.lg.jp/',
  hall: {
    postalCode: '789-1992',
    addressJa: '高知県幡多郡黒潮町入野5893番地',
    addressEn: '5893 Irino, Kuroshio Town, Hata District, Kochi 789-1992, Japan',
    phone: '0880-43-2111'
  },
  sources: {
    home: 'https://www.town.kuroshio.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E9%BB%92%E6%BD%AE%E7%94%BA',
    kankou: 'https://www.town.kuroshio.lg.jp/',
    matsubara: 'https://commons.wikimedia.org/wiki/File:Irino_no_Matsubara,_enkei.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39428/rstLst/',
    nest: 'https://travel.rakuten.co.jp/HOTEL/75381/75381.html',
    accessed: '2026-09-08'
  }
} as const;

export const KUROSHIO_EXPECTED_ROW_COUNT = 6;
export const KUROSHIO_EXPECTED_GEO_COUNT = 6;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Irino Matsubara. */
export const KUROSHIO_PLACE_PHOTO = wikiPhoto(
  'kuroshio-cover-matsubara.jpg',
  'https://commons.wikimedia.org/wiki/File:Irino_no_Matsubara,_enkei.jpg',
  'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
  'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2018-02-17',
  '入野松原', 'Irino Matsubara, Kuroshio'
);

const TABELOG_39008616 = 'https://tabelog.com/kochi/A3904/A390402/39008616/';
const TABELOG_39005069 = 'https://tabelog.com/kochi/A3904/A390402/39005069/';
const TABELOG_39008427 = 'https://tabelog.com/kochi/A3904/A390402/39008427/';
const TABELOG_39000079 = 'https://tabelog.com/kochi/A3904/A390402/39000079/';
const TABELOG_39006275 = 'https://tabelog.com/kochi/A3904/A390402/39006275/';
const TABELOG_39008428 = 'https://tabelog.com/kochi/A3904/A390402/39008428/';
const TABELOG_39000954 = 'https://tabelog.com/kochi/A3904/A390402/39000954/';
const TABELOG_39008631 = 'https://tabelog.com/kochi/A3904/A390402/39008631/';
const TABELOG_39001364 = 'https://tabelog.com/kochi/A3904/A390402/39001364/';
const TABELOG_39009035 = 'https://tabelog.com/kochi/A3904/A390402/39009035/';
const TABELOG_39005878 = 'https://tabelog.com/kochi/A3904/A390402/39005878/';
const TABELOG_39008665 = 'https://tabelog.com/kochi/A3904/A390402/39008665/';
const TABELOG_39002146 = 'https://tabelog.com/kochi/A3904/A390402/39002146/';
const TABELOG_39005250 = 'https://tabelog.com/kochi/A3904/A390402/39005250/';
const TABELOG_39004888 = 'https://tabelog.com/kochi/A3904/A390402/39004888/';
const TABELOG_39001986 = 'https://tabelog.com/kochi/A3904/A390402/39001986/';

export const KUROSHIO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '入野松原': KUROSHIO_PLACE_PHOTO,
  '入野海岸': wikiPhoto(
    'kuroshio-cover-irino.jpg',
    'https://commons.wikimedia.org/wiki/File:Irino_kaigan20220628_1.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2022-06-28',
    '入野海岸', 'Irino Coast, Kuroshio'
  ),
  '砂浜美術館': wikiPhoto(
    'kuroshio-tshirt-art.jpg',
    'https://commons.wikimedia.org/wiki/File:T-Shirts-art,_Kuroshio.JPG',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2010-07-28',
    '砂浜美術館', 'Seaside Gallery (T-shirt Art), Kuroshio'
  ),
  '加茂神社': wikiPhoto(
    'kuroshio-kamo-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:Kamo-jinja_(Kuroshio),_torii.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2018-02-17',
    '加茂神社', 'Kamo Shrine, Kuroshio'
  ),
  '土佐西南大規模公園': wikiPhoto(
    'kuroshio-seinan-park.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E8%A5%BF%E5%8D%97%E5%A4%A7%E8%A6%8F%E6%A8%A1%E5%85%AC%E5%9C%92.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E8%A5%BF%E5%8D%97%E5%A4%A7%E8%A6%8F%E6%A8%A1%E5%85%AC%E5%9C%92.jpg', '2011',
    '土佐西南大規模公園', 'Tosa Seinan Large Park, Kuroshio'
  ),
  '佐賀地区': wikiPhoto(
    'kuroshio-saga.jpg',
    'https://commons.wikimedia.org/wiki/File:Sagatiku20220628_2.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2022-06-28',
    '佐賀地区', 'Saga district, Kuroshio'
  ),
  'ネスト・ウエストガーデン土佐': sourcePhoto(
    'kuroshio-stay-nest.jpg',
    'ネスト・ウエストガーデン土佐の客室写真',
    'Nest West Garden Tosa room photo',
    'https://travel.rakuten.co.jp/HOTEL/75381/75381.html',
    '楽天トラベル'
  ),
  '農園': sourcePhoto('kuroshio-39008616-dish.jpg', '農園の料理写真', '農園 food photo', TABELOG_39008616, '食べログ'),
  '居酒屋ぽこぺん': sourcePhoto('kuroshio-39005069-dish.jpg', '居酒屋ぽこぺんの料理写真', '居酒屋ぽこぺん food photo', TABELOG_39005069, '食べログ'),
  'いろりや': sourcePhoto('kuroshio-39008427-dish.jpg', 'いろりやの料理写真', 'いろりや food photo', TABELOG_39008427, '食べログ'),
  '甘味処 和や': sourcePhoto('kuroshio-39000079-dish.jpg', '甘味処 和やの料理写真', '甘味処 和や food photo', TABELOG_39000079, '食べログ'),
  'むうん': sourcePhoto('kuroshio-39006275-dish.jpg', 'むうんの料理写真', 'むうん food photo', TABELOG_39006275, '食べログ'),
  '庄寿庵': sourcePhoto('kuroshio-39008428-dish.jpg', '庄寿庵の料理写真', '庄寿庵 food photo', TABELOG_39008428, '食べログ'),
  '黒潮一番館': sourcePhoto('kuroshio-39000954-dish.jpg', '黒潮一番館の料理写真', '黒潮一番館 food photo', TABELOG_39000954, '食べログ'),
  'Sea56': sourcePhoto('kuroshio-39008631-dish.jpg', 'Sea56の料理写真', 'Sea56 food photo', TABELOG_39008631, '食べログ'),
  'お好み焼き 田中': sourcePhoto('kuroshio-39001364-dish.jpg', 'お好み焼き 田中の料理写真', 'お好み焼き 田中 food photo', TABELOG_39001364, '食べログ'),
  '焼き鳥イマジョウ商店': sourcePhoto('kuroshio-39009035-dish.jpg', '焼き鳥イマジョウ商店の料理写真', '焼き鳥イマジョウ商店 food photo', TABELOG_39009035, '食べログ'),
  '居酒屋 真味': sourcePhoto('kuroshio-39005878-dish.jpg', '居酒屋 真味の料理写真', '居酒屋 真味 food photo', TABELOG_39005878, '食べログ'),
  '道の駅 ビオスおおがた ひなたや食堂': sourcePhoto('kuroshio-39008665-dish.jpg', '道の駅 ビオスおおがた ひなたや食堂の料理写真', '道の駅 ビオスおおがた ひなたや食堂 food photo', TABELOG_39008665, '食べログ'),
  '道の駅 なぶら土佐佐賀': sourcePhoto('kuroshio-39002146-dish.jpg', '道の駅 なぶら土佐佐賀の料理写真', '道の駅 なぶら土佐佐賀 food photo', TABELOG_39002146, '食べログ'),
  '飲み処 ゆうゆう': sourcePhoto('kuroshio-39005250-dish.jpg', '飲み処 ゆうゆうの料理写真', '飲み処 ゆうゆう food photo', TABELOG_39005250, '食べログ'),
  '鬼守家': sourcePhoto('kuroshio-39004888-dish.jpg', '鬼守家の料理写真', '鬼守家 food photo', TABELOG_39004888, '食べログ'),
  'お好み焼き まるや': sourcePhoto('kuroshio-39001986-dish.jpg', 'お好み焼き まるやの料理写真', 'お好み焼き まるや food photo', TABELOG_39001986, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: KUROSHIO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: KUROSHIO.sources.accessed};
}

export const KUROSHIO_FACILITIES: readonly FacilityRow[] = [
  sight('kuroshio-sight-01', '入野松原', '高知県幡多郡黒潮町入野', null, 'https://commons.wikimedia.org/wiki/File:Irino_no_Matsubara,_enkei.jpg', 33.0211038, 133.0163034),
  sight('kuroshio-sight-02', '入野海岸', '高知県幡多郡黒潮町入野', null, 'https://commons.wikimedia.org/wiki/File:Irino_kaigan20220628_1.jpg', 33.0211038, 133.0163034),
  sight('kuroshio-sight-03', '砂浜美術館', '高知県幡多郡黒潮町入野', null, 'https://commons.wikimedia.org/wiki/File:T-Shirts-art,_Kuroshio.JPG', 33.026476, 133.02083),
  sight('kuroshio-sight-04', '加茂神社', '高知県幡多郡黒潮町入野', null, 'https://commons.wikimedia.org/wiki/File:Kamo-jinja_(Kuroshio),_torii.jpg', 33.0211038, 133.0163034),
  sight('kuroshio-sight-05', '佐賀地区', '高知県幡多郡黒潮町佐賀', null, 'https://commons.wikimedia.org/wiki/File:Sagatiku20220628_2.jpg', 33.0779891, 133.1002848),
  sight('kuroshio-experience-01', '土佐西南大規模公園', '高知県幡多郡黒潮町', null, 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E8%A5%BF%E5%8D%97%E5%A4%A7%E8%A6%8F%E6%A8%A1%E5%85%AC%E5%9C%92.jpg', 33.0230370, 133.0149492)
];
