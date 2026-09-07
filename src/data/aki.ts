/**
 * Aki City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-08). JIS 39203. Sixth Kochi hub after 高知市・南国市・香南市・香美市・いの町.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Honest 0 onsen (no attributable 大浴場 photo keys; stay uses room still ≠ onsen) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const AKI = {
  nameJa: '安芸市',
  nameEn: 'Aki',
  reading: 'あきし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'aki',
  jis: '39203',
  jlis: '392031',
  sameAs: 'https://www.city.aki.kochi.jp/',
  hall: {
    postalCode: '784-8501',
    addressJa: '高知県安芸市土居82番地1',
    addressEn: '82-1 Doi, Aki City, Kochi 784-8501, Japan',
    phone: '0887-34-1111'
  },
  sources: {
    home: 'https://www.city.aki.kochi.jp/',
    hall: 'https://www.city.aki.kochi.jp/life/dtl.php?hdnKey=12',
    kankou: 'https://www.akikanko.or.jp/',
    noradokei: 'https://www.city.aki.kochi.jp/life/dtl.php?hdnKey=42',
    iokido: 'https://ja.wikipedia.org/wiki/%E4%BC%8A%E5%B0%BE%E6%9C%A8%E6%B4%9E',
    castle: 'https://ja.wikipedia.org/wiki/%E5%AE%89%E8%8A%B8%E5%9F%8E',
    tabelogCity: 'https://tabelog.com/kochi/C39203/rstLst/',
    tamai: 'https://travel.rakuten.co.jp/HOTEL/20497/20497.html',
    accessed: '2026-09-08'
  }
} as const;

export const AKI_EXPECTED_ROW_COUNT = 7;
export const AKI_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Noradokei (field clock), Aki symbol. */
export const AKI_PLACE_PHOTO = wikiPhoto(
  'aki-noradokei.jpg',
  'https://commons.wikimedia.org/wiki/File:Noradokei_02.JPG',
  'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
  'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-05-31',
  '野良時計（安芸市）', 'Noradokei (field clock), Aki'
);

const TABELOG_39008213 = 'https://tabelog.com/kochi/A3902/A390201/39008213/';
const TABELOG_39001774 = 'https://tabelog.com/kochi/A3902/A390201/39001774/';
const TABELOG_39003750 = 'https://tabelog.com/kochi/A3902/A390201/39003750/';
const TABELOG_39006854 = 'https://tabelog.com/kochi/A3902/A390201/39006854/';
const TABELOG_39005925 = 'https://tabelog.com/kochi/A3902/A390201/39005925/';
const TABELOG_39000622 = 'https://tabelog.com/kochi/A3902/A390201/39000622/';
const TABELOG_39006647 = 'https://tabelog.com/kochi/A3902/A390201/39006647/';
const TABELOG_39003793 = 'https://tabelog.com/kochi/A3902/A390201/39003793/';
const TABELOG_39001390 = 'https://tabelog.com/kochi/A3902/A390201/39001390/';
const TABELOG_39007802 = 'https://tabelog.com/kochi/A3902/A390201/39007802/';
const TABELOG_39007226 = 'https://tabelog.com/kochi/A3902/A390201/39007226/';
const TABELOG_39000032 = 'https://tabelog.com/kochi/A3902/A390201/39000032/';
const TABELOG_39004670 = 'https://tabelog.com/kochi/A3902/A390201/39004670/';
const TABELOG_39006534 = 'https://tabelog.com/kochi/A3902/A390201/39006534/';
const TABELOG_39008627 = 'https://tabelog.com/kochi/A3902/A390201/39008627/';
const TABELOG_39002081 = 'https://tabelog.com/kochi/A3902/A390201/39002081/';

export const AKI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '野良時計': AKI_PLACE_PHOTO,
  '安芸城跡': wikiPhoto(
    'aki-castle.jpg',
    'https://commons.wikimedia.org/wiki/File:Aki_Castle,_gaikan.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2020-12-18',
    '安芸城跡', 'Aki Castle ruins'
  ),
  '伊尾木洞': wikiPhoto(
    'aki-iokido.jpg',
    'https://commons.wikimedia.org/wiki/File:Iokido_Cave-1.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2020-12-18',
    '伊尾木洞', 'Iokido Cave, Aki'
  ),
  '岩崎弥太郎生家': wikiPhoto(
    'aki-iwasaki.jpg',
    'https://commons.wikimedia.org/wiki/File:Iwasaki_Yataro_birthplace_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2010-05-01',
    '岩崎弥太郎生家', 'Iwasaki Yataro birthplace, Aki'
  ),
  '安芸駅': wikiPhoto(
    'aki-station.jpg',
    'https://commons.wikimedia.org/wiki/File:Aki_Station,_terminal.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2016-07-17',
    '土佐くろしお鉄道安芸駅', 'Tosa Kuroshio Railway Aki Station'
  ),
  '安芸市立歴史民俗資料館': wikiPhoto(
    'aki-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:Aki_Castle_12.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-05-31',
    '安芸市立歴史民俗資料館', 'Aki City Museum of History and Folklore'
  ),
  '安芸市書道美術館': wikiPhoto(
    'aki-calligraphy.jpg',
    'https://commons.wikimedia.org/wiki/File:Aki_Castle_13.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2009-05-31',
    '安芸市書道美術館', 'Aki City Calligraphy Art Museum'
  ),
  'ホテルＴＡＭＡＩ': sourcePhoto(
    'aki-stay-tamai.jpg',
    'ホテルＴＡＭＡＩの客室写真',
    'Hotel TAMAI room photo',
    'https://travel.rakuten.co.jp/HOTEL/20497/20497.html',
    '楽天トラベル'
  ),
  '食酒家 KITENA': sourcePhoto('aki-39008213-dish.jpg', '食酒家 KITENAの料理写真', '食酒家 KITENA food photo', TABELOG_39008213, '食べログ'),
  'アップル': sourcePhoto('aki-39001774-dish.jpg', 'アップルの料理写真', 'アップル food photo', TABELOG_39001774, '食べログ'),
  '百人一酒': sourcePhoto('aki-39003750-dish.jpg', '百人一酒の料理写真', '百人一酒 food photo', TABELOG_39003750, '食べログ'),
  'メリーガーデンカフェ': sourcePhoto('aki-39006854-dish.jpg', 'メリーガーデンカフェの料理写真', 'メリーガーデンカフェ food photo', TABELOG_39006854, '食べログ'),
  '寺尾鮮魚店': sourcePhoto('aki-39005925-dish.jpg', '寺尾鮮魚店の料理写真', '寺尾鮮魚店 food photo', TABELOG_39005925, '食べログ'),
  'シェヌー': sourcePhoto('aki-39000622-dish.jpg', 'シェヌーの料理写真', 'シェヌー food photo', TABELOG_39000622, '食べログ'),
  '晴食堂': sourcePhoto('aki-39006647-dish.jpg', '晴食堂の料理写真', '晴食堂 food photo', TABELOG_39006647, '食べログ'),
  '横田ベーカリーナポリ': sourcePhoto('aki-39003793-dish.jpg', '横田ベーカリーナポリの料理写真', '横田ベーカリーナポリ food photo', TABELOG_39003793, '食べログ'),
  'ジャスト': sourcePhoto('aki-39001390-dish.jpg', 'ジャストの料理写真', 'ジャスト food photo', TABELOG_39001390, '食べログ'),
  'わじき屋 分店': sourcePhoto('aki-39007802-dish.jpg', 'わじき屋 分店の料理写真', 'わじき屋 分店 food photo', TABELOG_39007802, '食べログ'),
  'カフェ ハラーノ': sourcePhoto('aki-39007226-dish.jpg', 'カフェ ハラーノの料理写真', 'カフェ ハラーノ food photo', TABELOG_39007226, '食べログ'),
  '国虎屋': sourcePhoto('aki-39000032-dish.jpg', '国虎屋の料理写真', '国虎屋 food photo', TABELOG_39000032, '食べログ'),
  '浜幸 安芸店': sourcePhoto('aki-39004670-dish.jpg', '浜幸 安芸店の料理写真', '浜幸 安芸店 food photo', TABELOG_39004670, '食べログ'),
  '居酒屋 夜行虎': sourcePhoto('aki-39006534-dish.jpg', '居酒屋 夜行虎の料理写真', '居酒屋 夜行虎 food photo', TABELOG_39006534, '食べログ'),
  '一音灯': sourcePhoto('aki-39008627-dish.jpg', '一音灯の料理写真', '一音灯 food photo', TABELOG_39008627, '食べログ'),
  'りすぼん': sourcePhoto('aki-39002081-dish.jpg', 'りすぼんの料理写真', 'りすぼん food photo', TABELOG_39002081, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: AKI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: AKI.sources.accessed};
}

export const AKI_FACILITIES: readonly FacilityRow[] = [
  sight('aki-sight-01', '野良時計', '高知県安芸市土居638-4', null, 'https://www.city.aki.kochi.jp/life/dtl.php?hdnKey=42', 33.51575, 133.91147222),
  sight('aki-sight-02', '安芸城跡', '高知県安芸市土居', null, 'https://ja.wikipedia.org/wiki/%E5%AE%89%E8%8A%B8%E5%9F%8E', 33.51947222, 133.9125),
  sight('aki-sight-03', '伊尾木洞', '高知県安芸市伊尾木117', null, 'https://ja.wikipedia.org/wiki/%E4%BC%8A%E5%B0%BE%E6%9C%A8%E6%B4%9E', 33.49147222, 133.93383333),
  sight('aki-sight-04', '岩崎弥太郎生家', '高知県安芸市黒鳥', null, 'https://commons.wikimedia.org/wiki/File:Iwasaki_Yataro_birthplace_01.JPG', 33.5258151, 133.8998009),
  sight('aki-sight-05', '安芸駅', '高知県安芸市矢ノ丸', null, 'https://ja.wikipedia.org/wiki/%E5%AE%89%E8%8A%B8%E9%A7%85', 33.50445833, 133.90649722),
  sight('aki-sight-06', '安芸市立歴史民俗資料館', '高知県安芸市土居', null, 'https://commons.wikimedia.org/wiki/Category:Aki_City_Museum_of_History_and_Folklore', 33.5192065, 133.9132474),
  sight('aki-experience-01', '安芸市書道美術館', '高知県安芸市土居', null, 'https://commons.wikimedia.org/wiki/Category:Aki_Calligraphy_Art_Museum', 33.519476, 133.912514)
];
