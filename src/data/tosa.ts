/**
 * Tosa City sourced facts. Do not invent population.
 * Hall / JIS from city Wikipedia / city HP facts (accessed 2026-09-08). JIS 39205. Eighth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市.
 * No frozen pack — photo-only tourism + Tabelog dining + Commons stay/onsen. Stay uses Commons 離れ interior (Rakuten HOTEL/84592 mediaInfo absent); onsen uses attributable 大浴場露天風呂 Commons (stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const TOSA = {
  nameJa: '土佐市',
  nameEn: 'Tosa',
  reading: 'とさし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'tosa',
  jis: '39205',
  jlis: '392057',
  sameAs: 'https://www.city.tosa.lg.jp/',
  hall: {
    postalCode: '781-1192',
    addressJa: '高知県土佐市高岡町甲2017番地1',
    addressEn: '2017-1 Kō, Takaoka-cho, Tosa City, Kochi 781-1192, Japan',
    phone: '088-852-1111'
  },
  sources: {
    home: 'https://www.city.tosa.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E5%B8%82',
    kankou: 'https://tosacity-kankou.com/',
    niyodoBridge: 'https://ja.wikipedia.org/wiki/%E4%BB%81%E6%B7%80%E5%B7%9D%E6%B2%B3%E5%8F%A3%E5%A4%A7%E6%A9%8B',
    kiyotakiji: 'https://ja.wikipedia.org/wiki/%E6%B8%85%E7%80%A7%E5%AF%BA_(%E5%9C%9F%E4%BD%90%E5%B8%82)',
    shoryuji: 'https://ja.wikipedia.org/wiki/%E9%9D%92%E9%BE%8D%E5%AF%BA_(%E5%9C%9F%E4%BD%90%E5%B8%82)',
    tabelogCity: 'https://tabelog.com/kochi/C39205/rstLst/',
    sanyoso: 'https://travel.rakuten.co.jp/HOTEL/84592/84592.html',
    accessed: '2026-09-08'
  }
} as const;

export const TOSA_EXPECTED_ROW_COUNT = 8;
export const TOSA_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Niyodo River estuary bridge. */
export const TOSA_PLACE_PHOTO = wikiPhoto(
  'tosa-cover-niyodo-bridge.jpg',
  'https://commons.wikimedia.org/wiki/File:%E4%BB%81%E6%B7%80%E5%B7%9D%E6%B2%B3%E5%8F%A3%E5%A4%A7%E6%A9%8B.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  '谷本 一郎', 'https://commons.wikimedia.org/wiki/File:%E4%BB%81%E6%B7%80%E5%B7%9D%E6%B2%B3%E5%8F%A3%E5%A4%A7%E6%A9%8B.jpg', '2017-09-06',
  '仁淀川河口大橋', 'Niyodo River estuary bridge'
);

const TABELOG_39006832 = 'https://tabelog.com/kochi/A3903/A390301/39006832/';
const TABELOG_39006861 = 'https://tabelog.com/kochi/A3903/A390301/39006861/';
const TABELOG_39008902 = 'https://tabelog.com/kochi/A3903/A390302/39008902/';
const TABELOG_39008343 = 'https://tabelog.com/kochi/A3903/A390301/39008343/';
const TABELOG_39007208 = 'https://tabelog.com/kochi/A3903/A390301/39007208/';
const TABELOG_39003710 = 'https://tabelog.com/kochi/A3903/A390301/39003710/';
const TABELOG_39006093 = 'https://tabelog.com/kochi/A3903/A390301/39006093/';
const TABELOG_39006597 = 'https://tabelog.com/kochi/A3903/A390301/39006597/';
const TABELOG_39005557 = 'https://tabelog.com/kochi/A3903/A390301/39005557/';
const TABELOG_39007950 = 'https://tabelog.com/kochi/A3903/A390301/39007950/';
const TABELOG_39005310 = 'https://tabelog.com/kochi/A3903/A390301/39005310/';
const TABELOG_39003690 = 'https://tabelog.com/kochi/A3903/A390301/39003690/';
const TABELOG_39007113 = 'https://tabelog.com/kochi/A3903/A390302/39007113/';
const TABELOG_39006809 = 'https://tabelog.com/kochi/A3903/A390301/39006809/';
const TABELOG_39000589 = 'https://tabelog.com/kochi/A3903/A390301/39000589/';
const TABELOG_39007674 = 'https://tabelog.com/kochi/A3903/A390301/39007674/';

export const TOSA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '仁淀川河口大橋': TOSA_PLACE_PHOTO,
  '清瀧寺': wikiPhoto(
    'tosa-kiyotakiji.jpg',
    'https://commons.wikimedia.org/wiki/File:Kiyotakiji20220329_1.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2022-03-29',
    '清瀧寺', 'Kiyotaki-ji (Seiryū-ji), Tosa'
  ),
  '青龍寺': wikiPhoto(
    'tosa-shoryuji.jpg',
    'https://commons.wikimedia.org/wiki/File:Syouryuji_20230530_1.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2023-05-30',
    '青龍寺', 'Shōryū-ji, Tosa'
  ),
  '宇佐漁港': wikiPhoto(
    'tosa-usa-port.jpg',
    'https://commons.wikimedia.org/wiki/File:Usa_port_20240709_1.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Araiyasushige', 'https://commons.wikimedia.org/wiki/User:Araiyasushige', '2024-07-09',
    '宇佐漁港', 'Usa fishing port, Tosa'
  ),
  '蟹ヶ池': wikiPhoto(
    'tosa-kanigaike.jpg',
    'https://commons.wikimedia.org/wiki/File:Kanigaike_pond.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'As6022014', 'https://commons.wikimedia.org/wiki/User:As6022014', '2011-07-19',
    '蟹ヶ池', 'Kanigaike pond, Tosa'
  ),
  '新居緑地公園': wikiPhoto(
    'tosa-nii-park.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%B1%85%E7%B7%91%E5%9C%B0%E5%85%AC%E5%9C%92.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '谷本 一郎', 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%B1%85%E7%B7%91%E5%9C%B0%E5%85%AC%E5%9C%92.jpg', '2018-06-24',
    '新居緑地公園', 'Nii Ryokuchi Park, Tosa'
  ),
  '新居地区観光交流施設南風': wikiPhoto(
    'tosa-maze.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%B1%85%E5%9C%B0%E5%8C%BA%E8%A6%B3%E5%85%89%E4%BA%A4%E6%B5%81%E6%96%BD%E8%A8%AD%E5%8D%97%E9%A2%A8.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '谷本 一郎', 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%B1%85%E5%9C%B0%E5%8C%BA%E8%A6%B3%E5%85%89%E4%BA%A4%E6%B5%81%E6%96%BD%E8%A8%AD%E5%8D%97%E9%A2%A8.jpg', '2018-02-18',
    '新居地区観光交流施設南風', 'Nii tourism exchange facility Maze, Tosa'
  ),
  '土佐龍温泉 三陽荘': wikiPhoto(
    'tosa-stay-sanyoso.jpg',
    'https://commons.wikimedia.org/wiki/File:Sanyoso_2345.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Tosajin', 'https://commons.wikimedia.org/wiki/User:Tosajin', '2022-02-20',
    '土佐龍温泉 三陽荘の離れ', 'Tosaryu Onsen Sanyo-so annex lodging, Tosa'
  ),
  '土佐龍温泉 三陽荘 大浴場': wikiPhoto(
    'tosa-onsen-sanyoso.jpg',
    'https://commons.wikimedia.org/wiki/File:Onsensanyoso.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Tosajin', 'https://commons.wikimedia.org/wiki/User:Tosajin', '2022-02-20',
    '土佐龍温泉 三陽荘の大浴場露天風呂', 'Tosaryu Onsen Sanyo-so outdoor bath, Tosa'
  ),
  '焼肉義塾': sourcePhoto('tosa-39006832-dish.jpg', '焼肉義塾の料理写真', '焼肉義塾 food photo', TABELOG_39006832, '食べログ'),
  'ビー＆エム サーフ＆カフェ': sourcePhoto('tosa-39006861-dish.jpg', 'ビー＆エム サーフ＆カフェの料理写真', 'ビー＆エム サーフ＆カフェ food photo', TABELOG_39006861, '食べログ'),
  '高見のたこ焼き 高岡店': sourcePhoto('tosa-39008902-dish.jpg', '高見のたこ焼き 高岡店の料理写真', '高見のたこ焼き 高岡店 food photo', TABELOG_39008902, '食べログ'),
  '鍋焼きラーメン 悟空': sourcePhoto('tosa-39008343-dish.jpg', '鍋焼きラーメン 悟空の料理写真', '鍋焼きラーメン 悟空 food photo', TABELOG_39008343, '食べログ'),
  '台湾料理 吉源': sourcePhoto('tosa-39007208-dish.jpg', '台湾料理 吉源の料理写真', '台湾料理 吉源 food photo', TABELOG_39007208, '食べログ'),
  'お好焼き やまさき': sourcePhoto('tosa-39003710-dish.jpg', 'お好焼き やまさきの料理写真', 'お好焼き やまさき food photo', TABELOG_39003710, '食べログ'),
  '海町食堂ヒナサク': sourcePhoto('tosa-39006093-dish.jpg', '海町食堂ヒナサクの料理写真', '海町食堂ヒナサク food photo', TABELOG_39006093, '食べログ'),
  'めん六や 高知土佐店': sourcePhoto('tosa-39006597-dish.jpg', 'めん六や 高知土佐店の料理写真', 'めん六や 高知土佐店 food photo', TABELOG_39006597, '食べログ'),
  'ドライブイン ストップ': sourcePhoto('tosa-39005557-dish.jpg', 'ドライブイン ストップの料理写真', 'ドライブイン ストップ food photo', TABELOG_39005557, '食べログ'),
  '貝鮮浜焼きバイキング あみ浜食堂': sourcePhoto('tosa-39007950-dish.jpg', '貝鮮浜焼きバイキング あみ浜食堂の料理写真', '貝鮮浜焼きバイキング あみ浜食堂 food photo', TABELOG_39007950, '食べログ'),
  'のしや本家': sourcePhoto('tosa-39005310-dish.jpg', 'のしや本家の料理写真', 'のしや本家 food photo', TABELOG_39005310, '食べログ'),
  '割烹 玉杯': sourcePhoto('tosa-39003690-dish.jpg', '割烹 玉杯の料理写真', '割烹 玉杯 food photo', TABELOG_39003690, '食べログ'),
  '居酒屋 へんしも': sourcePhoto('tosa-39007113-dish.jpg', '居酒屋 へんしもの料理写真', '居酒屋 へんしも food photo', TABELOG_39007113, '食べログ'),
  'お好み焼彦兵衛': sourcePhoto('tosa-39006809-dish.jpg', 'お好み焼彦兵衛の料理写真', 'お好み焼彦兵衛 food photo', TABELOG_39006809, '食べログ'),
  '萩の茶屋': sourcePhoto('tosa-39000589-dish.jpg', '萩の茶屋の料理写真', '萩の茶屋 food photo', TABELOG_39000589, '食べログ'),
  '異喰間 広': sourcePhoto('tosa-39007674-dish.jpg', '異喰間 広の料理写真', '異喰間 広 food photo', TABELOG_39007674, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: TOSA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: TOSA.sources.accessed};
}

export const TOSA_FACILITIES: readonly FacilityRow[] = [
  sight('tosa-sight-01', '仁淀川河口大橋', '高知県土佐市宇佐町宇佐', null, 'https://ja.wikipedia.org/wiki/%E4%BB%81%E6%B7%80%E5%B7%9D%E6%B2%B3%E5%8F%A3%E5%A4%A7%E6%A9%8B', 33.46, 133.47888889),
  sight('tosa-sight-02', '清瀧寺', '高知県土佐市高岡町丁568-1', null, 'https://ja.wikipedia.org/wiki/%E6%B8%85%E7%80%A7%E5%AF%BA_(%E5%9C%9F%E4%BD%90%E5%B8%82)', 33.5125, 133.4095),
  sight('tosa-sight-03', '青龍寺', '高知県土佐市宇佐町竜', null, 'https://ja.wikipedia.org/wiki/%E9%9D%92%E9%BE%8D%E5%AF%BA_(%E5%9C%9F%E4%BD%90%E5%B8%82)', 33.426, 133.45080556),
  sight('tosa-sight-04', '宇佐漁港', '高知県土佐市宇佐町宇佐', null, 'https://commons.wikimedia.org/wiki/File:Usa_port_20240709_1.jpg', 33.4503922, 133.4515076),
  sight('tosa-sight-05', '蟹ヶ池', '高知県土佐市宇佐町竜', null, 'https://commons.wikimedia.org/wiki/File:Kanigaike_pond.jpg', 33.4281709, 133.453648),
  sight('tosa-sight-06', '新居緑地公園', '高知県土佐市新居', null, 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%B1%85%E7%B7%91%E5%9C%B0%E5%85%AC%E5%9C%92.jpg', 33.4586048, 133.4757264),
  sight('tosa-experience-01', '新居地区観光交流施設南風', '高知県土佐市新居', null, 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%B1%85%E5%9C%B0%E5%8C%BA%E8%A6%B3%E5%85%89%E4%BA%A4%E6%B5%81%E6%96%BD%E8%A8%AD%E5%8D%97%E9%A2%A8.jpg', 33.4589539, 133.477457),
  sight('tosa-onsen-01', '土佐龍温泉 三陽荘 大浴場', '高知県土佐市宇佐町竜504-1', '088-856-0001', 'https://commons.wikimedia.org/wiki/File:Onsensanyoso.jpg', 33.4275, 133.4515)
];
