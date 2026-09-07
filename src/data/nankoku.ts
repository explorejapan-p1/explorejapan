/**
 * Nankoku City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-08). JIS 39204. Second Kochi hub after 高知市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Honest 0 onsen (business-hotel unit baths only) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const NANKOKU = {
  nameJa: '南国市',
  nameEn: 'Nankoku',
  reading: 'なんこくし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'nankoku',
  jis: '39204',
  jlis: '392049',
  sameAs: 'https://www.city.nankoku.lg.jp/',
  hall: {
    postalCode: '783-8501',
    addressJa: '高知県南国市大埇甲2301番地',
    addressEn: '2301 Osoe Ko, Nankoku City, Kochi 783-8501, Japan',
    phone: '088-863-2111'
  },
  sources: {
    home: 'https://www.city.nankoku.lg.jp/',
    hall: 'https://www.city.nankoku.lg.jp/life/life_dtl.php?hdnKey=3247',
    kankou: 'https://www.city.nankoku.lg.jp/',
    kokubunji: 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E5%9B%BD%E5%88%86%E5%AF%BA',
    tabelogCity: 'https://tabelog.com/kochi/C39204/rstLst/',
    southern: 'https://travel.rakuten.co.jp/HOTEL/1807/1807.html',
    accessed: '2026-09-08'
  }
} as const;

export const NANKOKU_EXPECTED_ROW_COUNT = 7;
export const NANKOKU_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Tosa Kokubun-ji Daishi-dō. */
export const NANKOKU_PLACE_PHOTO = wikiPhoto(
  'nankoku-kokubunji.jpg',
  'https://commons.wikimedia.org/wiki/File:Tosa_Kokubunji_05.JPG',
  'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
  'Reggaeman', '//commons.wikimedia.org/wiki/User:Reggaeman', '2009-06-06',
  '土佐国分寺大師堂', 'Daishi-dō at Tosa Kokubun-ji, Nankoku'
);

const TABELOG_39000043 = 'https://tabelog.com/kochi/A3901/A390102/39000043/';
const TABELOG_39006430 = 'https://tabelog.com/kochi/A3901/A390102/39006430/';
const TABELOG_39000612 = 'https://tabelog.com/kochi/A3901/A390102/39000612/';
const TABELOG_39000026 = 'https://tabelog.com/kochi/A3901/A390106/39000026/';
const TABELOG_39006329 = 'https://tabelog.com/kochi/A3901/A390102/39006329/';
const TABELOG_39005681 = 'https://tabelog.com/kochi/A3901/A390102/39005681/';
const TABELOG_39002230 = 'https://tabelog.com/kochi/A3901/A390102/39002230/';
const TABELOG_39000543 = 'https://tabelog.com/kochi/A3901/A390102/39000543/';
const TABELOG_39005182 = 'https://tabelog.com/kochi/A3901/A390102/39005182/';
const TABELOG_39007477 = 'https://tabelog.com/kochi/A3901/A390101/39007477/';
const TABELOG_39001776 = 'https://tabelog.com/kochi/A3901/A390102/39001776/';
const TABELOG_39005709 = 'https://tabelog.com/kochi/A3901/A390102/39005709/';
const TABELOG_39007976 = 'https://tabelog.com/kochi/A3901/A390102/39007976/';
const TABELOG_39008285 = 'https://tabelog.com/kochi/A3901/A390102/39008285/';
const TABELOG_39000530 = 'https://tabelog.com/kochi/A3901/A390102/39000530/';
const TABELOG_39003026 = 'https://tabelog.com/kochi/A3901/A390102/39003026/';

export const NANKOKU_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '土佐国分寺': NANKOKU_PLACE_PHOTO,
  '岡豊城': wikiPhoto(
    'nankoku-oko.jpg',
    'https://commons.wikimedia.org/wiki/File:Oko_Castle_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', '//commons.wikimedia.org/wiki/User:Reggaeman', '2009-06-06',
    '岡豊城跡', 'Okō Castle ruins, Nankoku'
  ),
  '高知県立歴史民俗資料館': wikiPhoto(
    'nankoku-rekimin.jpg',
    'https://commons.wikimedia.org/wiki/File:Kochi_Prefectural_Museum_of_History_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', '//commons.wikimedia.org/wiki/User:Reggaeman', '2009-06-06',
    '高知県立歴史民俗資料館', 'Kochi Prefectural Museum of History'
  ),
  '高知龍馬空港': wikiPhoto(
    'nankoku-airport.jpg',
    'https://commons.wikimedia.org/wiki/File:Kochi_20190906192527_(49844457557).jpg',
    'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0',
    'inunami', 'https://www.flickr.com/people/94693136@N05', '2019-09-06',
    '高知龍馬空港', 'Kochi Ryoma Airport, Nankoku'
  ),
  '前浜掩体群': wikiPhoto(
    'nankoku-entai.jpg',
    'https://commons.wikimedia.org/wiki/File:Maehama_Entaigun,_gaikan-1.jpg',
    'CC0', 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', '//commons.wikimedia.org/wiki/User:Saigen_Jiro', '2020-12-19',
    '前浜掩体群', 'Maehama aircraft bunkers, Nankoku'
  ),
  '後免駅': wikiPhoto(
    'nankoku-gomen.jpg',
    'https://commons.wikimedia.org/wiki/File:Nankoku_Gomen_Station_1.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '京浜にけ', 'https://commons.wikimedia.org/wiki/File:Nankoku Gomen Station 1.JPG', '2007-11-21',
    '後免駅', 'Gomen Station, Nankoku'
  ),
  '道の駅南国 風良里': wikiPhoto(
    'nankoku-furari.jpg',
    'https://commons.wikimedia.org/wiki/File:道の駅南国_風良里_Nankoku_Furari_(Drive-in)_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'iloverjoa', 'https://web.archive.org/web/20161101193958/http://www.panoramio.com/user/4453381?with_photo_id=124901350', '',
    '道の駅南国 風良里', 'Michinoeki Nankoku Furari'
  ),
  'サザンシティホテル': sourcePhoto(
    'nankoku-stay-southern.jpg',
    'サザンシティホテルの客室写真',
    'Southern City Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/1807/1807.html',
    '楽天トラベル'
  ),
  'かいだ屋': sourcePhoto('nankoku-39000043-dish.jpg', 'かいだ屋の料理写真', 'かいだ屋 food photo', TABELOG_39000043, '食べログ'),
  '多国籍食堂 錆と煤': sourcePhoto('nankoku-39006430-dish.jpg', '多国籍食堂 錆と煤の料理写真', '多国籍食堂 錆と煤 food photo', TABELOG_39006430, '食べログ'),
  'うなぎ処福': sourcePhoto('nankoku-39000612-dish.jpg', 'うなぎ処福の料理写真', 'うなぎ処福 food photo', TABELOG_39000612, '食べログ'),
  '司 高知空港店': sourcePhoto('nankoku-39000026-dish.jpg', '司 高知空港店の料理写真', '司 高知空港店 food photo', TABELOG_39000026, '食べログ'),
  'うちんくの食卓': sourcePhoto('nankoku-39006329-dish.jpg', 'うちんくの食卓の料理写真', 'うちんくの食卓 food photo', TABELOG_39006329, '食べログ'),
  '農園レストラン トリトン': sourcePhoto('nankoku-39005681-dish.jpg', '農園レストラン トリトンの料理写真', '農園レストラン トリトン food photo', TABELOG_39005681, '食べログ'),
  '國丸 南国店': sourcePhoto('nankoku-39002230-dish.jpg', '國丸 南国店の料理写真', '國丸 南国店 food photo', TABELOG_39002230, '食べログ'),
  '景福宮': sourcePhoto('nankoku-39000543-dish.jpg', '景福宮の料理写真', '景福宮 food photo', TABELOG_39000543, '食べログ'),
  '鳥心 とりやき食堂': sourcePhoto('nankoku-39005182-dish.jpg', '鳥心 とりやき食堂の料理写真', '鳥心 とりやき食堂 food photo', TABELOG_39005182, '食べログ'),
  '鰻料理 むなぎん': sourcePhoto('nankoku-39007477-dish.jpg', '鰻料理 むなぎんの料理写真', '鰻料理 むなぎん food photo', TABELOG_39007477, '食べログ'),
  'カフェレスト風良里': sourcePhoto('nankoku-39001776-dish.jpg', 'カフェレスト風良里の料理写真', 'カフェレスト風良里 food photo', TABELOG_39001776, '食べログ'),
  '三代目安兵衛 南国店': sourcePhoto('nankoku-39005709-dish.jpg', '三代目安兵衛 南国店の料理写真', '三代目安兵衛 南国店 food photo', TABELOG_39005709, '食べログ'),
  'ICHIBA': sourcePhoto('nankoku-39007976-dish.jpg', 'ICHIBAの料理写真', 'ICHIBA food photo', TABELOG_39007976, '食べログ'),
  'ボラレ': sourcePhoto('nankoku-39008285-dish.jpg', 'ボラレの料理写真', 'ボラレ food photo', TABELOG_39008285, '食べログ'),
  'モンシェルトントン': sourcePhoto('nankoku-39000530-dish.jpg', 'モンシェルトントンの料理写真', 'モンシェルトントン food photo', TABELOG_39000530, '食べログ'),
  'レストランエリエール': sourcePhoto('nankoku-39003026-dish.jpg', 'レストランエリエールの料理写真', 'レストランエリエール food photo', TABELOG_39003026, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: NANKOKU.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: NANKOKU.sources.accessed};
}

export const NANKOKU_FACILITIES: readonly FacilityRow[] = [
  sight('nankoku-sight-01', '土佐国分寺', '高知県南国市国分546', null, 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E5%9B%BD%E5%88%86%E5%AF%BA', 33.59869444, 133.64041667),
  sight('nankoku-sight-02', '岡豊城', '高知県南国市岡豊町八幡1099-1', null, 'https://ja.wikipedia.org/wiki/%E5%B2%A1%E8%B1%8A%E5%9F%8E', 33.59496111, 133.62249167),
  sight('nankoku-sight-03', '高知県立歴史民俗資料館', '高知県南国市岡豊町八幡1099-1', null, 'https://ja.wikipedia.org/wiki/%E9%AB%98%E7%9F%A5%E7%9C%8C%E7%AB%8B%E6%AD%B4%E5%8F%B2%E6%B0%91%E4%BF%97%E8%B3%87%E6%96%99%E9%A4%A8', 33.59608333, 133.6235),
  sight('nankoku-sight-04', '高知龍馬空港', '高知県南国市久枝乙581', null, 'https://ja.wikipedia.org/wiki/%E9%AB%98%E7%9F%A5%E7%A9%BA%E6%B8%AF', 33.54611111, 133.66944444),
  sight('nankoku-sight-05', '前浜掩体群', '高知県南国市前浜', null, 'https://ja.wikipedia.org/wiki/%E5%89%8D%E6%B5%9C%E6%8E%A9%E4%BD%93%E7%BE%A4', 33.53986389, 133.66159722),
  sight('nankoku-sight-06', '後免駅', '高知県南国市駅前町1-1', null, 'https://ja.wikipedia.org/wiki/%E5%BE%8C%E5%85%8D%E9%A7%85', 33.57921111, 133.64536667),
  sight('nankoku-experience-01', '道の駅南国 風良里', '高知県南国市左右山102-1', null, 'https://ja.wikipedia.org/wiki/%E9%81%93%E3%81%AE%E9%A7%85%E5%8D%97%E5%9B%BD%E9%A2%A8%E8%89%AF%E9%87%8C', 33.61103, 133.64194)
];
