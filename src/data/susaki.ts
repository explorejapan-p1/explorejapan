/**
 * Susaki City sourced facts. Do not invent population.
 * Hall / JIS from city Wikipedia / city HP facts (accessed 2026-09-08). JIS 39206. Ninth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市.
 * No frozen pack — photo-only tourism + Tabelog dining + TG610 Rakuten stay densify. Honest 0 onsen (stay uses room still ≠ onsen) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SUSAKI = {
  nameJa: '須崎市',
  nameEn: 'Susaki',
  reading: 'すさきし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'susaki',
  jis: '39206',
  jlis: '392065',
  sameAs: 'https://www.city.susaki.lg.jp/',
  hall: {
    postalCode: '785-8601',
    addressJa: '高知県須崎市山手町1番7号',
    addressEn: '1-7 Yamate-cho, Susaki City, Kochi 785-8601, Japan',
    phone: '0889-42-2311'
  },
  sources: {
    home: 'https://www.city.susaki.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E9%A0%88%E5%B4%8E%E5%B8%82',
    kankou: 'https://www.city.susaki.lg.jp/',
    yokonami: 'https://commons.wikimedia.org/wiki/File:Yokonami_Nature_Park_Coastline_(52004285222).jpg',
    daizenji: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%96%84%E5%AF%BA_(%E9%A0%88%E5%B4%8E%E5%B8%82)',
    otonashi: 'https://ja.wikipedia.org/wiki/%E9%B3%B4%E7%84%A1%E7%A5%9E%E7%A4%BE',
    tabelogCity: 'https://tabelog.com/kochi/C39206/rstLst/',
    az: 'https://travel.rakuten.co.jp/HOTEL/196115/196115.html',
    accessed: '2026-09-08'
  }
} as const;

export const SUSAKI_EXPECTED_ROW_COUNT = 7;
export const SUSAKI_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Yokonami Nature Park coastline (横浪黒潮ライン area). */
export const SUSAKI_PLACE_PHOTO = wikiPhoto(
  'susaki-cover-yokonami.jpg',
  'https://commons.wikimedia.org/wiki/File:Yokonami_Nature_Park_Coastline_(52004285222).jpg',
  'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0',
  'Raita Futo', 'https://www.flickr.com/people/128275472@N07', '2020-09-22',
  '横浪自然公園の海岸', 'Yokonami Nature Park coastline, Susaki'
);

const TABELOG_39000124 = 'https://tabelog.com/kochi/A3903/A390301/39000124/';
const TABELOG_39006239 = 'https://tabelog.com/kochi/A3903/A390301/39006239/';
const TABELOG_39004035 = 'https://tabelog.com/kochi/A3903/A390301/39004035/';
const TABELOG_39008988 = 'https://tabelog.com/kochi/A3903/A390301/39008988/';
const TABELOG_39003852 = 'https://tabelog.com/kochi/A3903/A390301/39003852/';
const TABELOG_39004039 = 'https://tabelog.com/kochi/A3903/A390301/39004039/';
const TABELOG_39003246 = 'https://tabelog.com/kochi/A3903/A390301/39003246/';
const TABELOG_39001246 = 'https://tabelog.com/kochi/A3903/A390301/39001246/';
const TABELOG_39008999 = 'https://tabelog.com/kochi/A3903/A390301/39008999/';
const TABELOG_39002102 = 'https://tabelog.com/kochi/A3903/A390301/39002102/';
const TABELOG_39002182 = 'https://tabelog.com/kochi/A3903/A390301/39002182/';
const TABELOG_39001819 = 'https://tabelog.com/kochi/A3903/A390301/39001819/';
const TABELOG_39006414 = 'https://tabelog.com/kochi/A3903/A390301/39006414/';
const TABELOG_39007064 = 'https://tabelog.com/kochi/A3903/A390301/39007064/';
const TABELOG_39008120 = 'https://tabelog.com/kochi/A3903/A390301/39008120/';
const TABELOG_39002416 = 'https://tabelog.com/kochi/A3903/A390301/39002416/';

export const SUSAKI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '横浪黒潮ライン': SUSAKI_PLACE_PHOTO,
  '大善寺': wikiPhoto(
    'susaki-daizenji.jpg',
    'https://commons.wikimedia.org/wiki/File:Daizenzi_01.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/User:Dokudami', '2019-11-01',
    '大善寺', 'Daizen-ji, Susaki'
  ),
  '鳴無神社': wikiPhoto(
    'susaki-otonashi.jpg',
    'https://commons.wikimedia.org/wiki/File:Otonashi_jinja_06.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2010-12-23',
    '鳴無神社', 'Otonashi-jinja, Susaki'
  ),
  '須賀神社': wikiPhoto(
    'susaki-suga-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%A0%88%E8%B3%80%E7%A5%9E%E7%A4%BE%EF%BC%88%E9%A0%88%E5%B4%8E%E5%B8%82%EF%BC%89.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E9%A0%88%E8%B3%80%E7%A5%9E%E7%A4%BE%EF%BC%88%E9%A0%88%E5%B4%8E%E5%B8%82%EF%BC%89.jpg', '2015-02-19',
    '須賀神社', 'Suga-jinja, Susaki'
  ),
  '野見湾': wikiPhoto(
    'susaki-nomi-bay.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%87%8E%E8%A6%8B%E6%B9%BE.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E9%87%8E%E8%A6%8B%E6%B9%BE.jpg', '2015-02-19',
    '野見湾', 'Nomi Bay, Susaki'
  ),
  '桑田山雪割り桜': wikiPhoto(
    'susaki-kuwadayama-sakura.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%A1%91%E7%94%B0%E5%B1%B1%E9%9B%AA%E5%89%B2%E3%82%8A%E6%A1%9C.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Localguides_tosa', 'https://commons.wikimedia.org/wiki/File:%E6%A1%91%E7%94%B0%E5%B1%B1%E9%9B%AA%E5%89%B2%E3%82%8A%E6%A1%9C.jpg', '2019-02-25',
    '桑田山雪割り桜', 'Kuwadayama snow-break cherry blossoms, Susaki'
  ),
  '道の駅かわうその里すさき': wikiPhoto(
    'susaki-michinoeki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%81%8B%E3%82%8F%E3%81%86%E3%81%9D%E3%81%AE%E9%87%8C%E3%81%99%E3%81%95%E3%81%8D.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'On-neko', 'https://commons.wikimedia.org/wiki/File:%E9%81%93%E3%81%AE%E9%A7%85%E3%81%8B%E3%82%8F%E3%81%86%E3%81%9D%E3%81%AE%E9%87%8C%E3%81%99%E3%81%95%E3%81%8D.JPG', '2010-05-09',
    '道の駅かわうその里すさき', 'Michinoeki Kawauso-no-Sato Susaki'
  ),
  'ＨＯＴＥＬ　ＡＺ　高知須崎店': sourcePhoto(
    'susaki-stay-az.jpg',
    'ＨＯＴＥＬ　ＡＺ　高知須崎店の客室写真',
    'HOTEL AZ Kochi Susaki room photo',
    'https://travel.rakuten.co.jp/HOTEL/196115/196115.html',
    '楽天トラベル'
  ),
  'Ｈｏｔｅｌ　バンダガ': sourcePhoto(
    'susaki-stay-bandaga.jpg',
    'Ｈｏｔｅｌ　バンダガの客室写真',
    'Ｈｏｔｅｌ　バンダガ room photo',
    'https://travel.rakuten.co.jp/HOTEL/40828/40828.html',
    '楽天トラベル'
  ),
  '千年の美湯　そうだ山温泉　和　ＹＡＷＡＲＡＧＩ': sourcePhoto(
    'susaki-stay-yawaragi.jpg',
    '千年の美湯　そうだ山温泉　和　ＹＡＷＡＲＡＧＩの客室写真',
    'そうだ山温泉 和 YAWARAGI room photo',
    'https://travel.rakuten.co.jp/HOTEL/145003/145003.html',
    '楽天トラベル'
  ),
  '民宿なずな': sourcePhoto(
    'susaki-stay-nazuna.jpg',
    '民宿なずなの客室写真',
    '民宿なずな room photo',
    'https://travel.rakuten.co.jp/HOTEL/193579/193579.html',
    '楽天トラベル'
  ),
  'ゲストハウスサンテ': sourcePhoto(
    'susaki-stay-sante.jpg',
    'ゲストハウスサンテの客室写真',
    'ゲストハウスサンテ room photo',
    'https://travel.rakuten.co.jp/HOTEL/197376/197376.html',
    '楽天トラベル'
  ),
  'だるま': sourcePhoto('susaki-39000124-dish.jpg', 'だるまの料理写真', 'だるま food photo', TABELOG_39000124, '食べログ'),
  'レストラン とれた亭': sourcePhoto('susaki-39006239-dish.jpg', 'レストラン とれた亭の料理写真', 'レストラン とれた亭 food photo', TABELOG_39006239, '食べログ'),
  'たけうち': sourcePhoto('susaki-39004035-dish.jpg', 'たけうちの料理写真', 'たけうち food photo', TABELOG_39004035, '食べログ'),
  'ばさら 離れ屋': sourcePhoto('susaki-39008988-dish.jpg', 'ばさら 離れ屋の料理写真', 'ばさら 離れ屋 food photo', TABELOG_39008988, '食べログ'),
  '喫茶 安和の里': sourcePhoto('susaki-39003852-dish.jpg', '喫茶 安和の里の料理写真', '喫茶 安和の里 food photo', TABELOG_39003852, '食べログ'),
  'シプラインディアンレストラン': sourcePhoto('susaki-39004039-dish.jpg', 'シプラインディアンレストランの料理写真', 'シプラインディアンレストラン food photo', TABELOG_39004039, '食べログ'),
  '鳥よし': sourcePhoto('susaki-39003246-dish.jpg', '鳥よしの料理写真', '鳥よし food photo', TABELOG_39003246, '食べログ'),
  '鈴': sourcePhoto('susaki-39001246-dish.jpg', '鈴の料理写真', '鈴 food photo', TABELOG_39001246, '食べログ'),
  'AZcafe -Shidaka- 高知須崎店': sourcePhoto('susaki-39008999-dish.jpg', 'AZcafe -Shidaka- 高知須崎店の料理写真', 'AZcafe -Shidaka- 高知須崎店 food photo', TABELOG_39008999, '食べログ'),
  '喜楽': sourcePhoto('susaki-39002102-dish.jpg', '喜楽の料理写真', '喜楽 food photo', TABELOG_39002102, '食べログ'),
  '土居義': sourcePhoto('susaki-39002182-dish.jpg', '土居義の料理写真', '土居義 food photo', TABELOG_39002182, '食べログ'),
  'ピエロ珈琲専科': sourcePhoto('susaki-39001819-dish.jpg', 'ピエロ珈琲専科の料理写真', 'ピエロ珈琲専科 food photo', TABELOG_39001819, '食べログ'),
  '回転寿司いちばん船': sourcePhoto('susaki-39006414-dish.jpg', '回転寿司いちばん船の料理写真', '回転寿司いちばん船 food photo', TABELOG_39006414, '食べログ'),
  'イタリア料理 レガーロ': sourcePhoto('susaki-39007064-dish.jpg', 'イタリア料理 レガーロの料理写真', 'イタリア料理 レガーロ food photo', TABELOG_39007064, '食べログ'),
  '須崎大漁堂': sourcePhoto('susaki-39008120-dish.jpg', '須崎大漁堂の料理写真', '須崎大漁堂 food photo', TABELOG_39008120, '食べログ'),
  '舞夢喫茶店': sourcePhoto('susaki-39002416-dish.jpg', '舞夢喫茶店の料理写真', '舞夢喫茶店 food photo', TABELOG_39002416, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: SUSAKI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: SUSAKI.sources.accessed};
}

export const SUSAKI_FACILITIES: readonly FacilityRow[] = [
  sight('susaki-sight-01', '横浪黒潮ライン', '高知県須崎市浦ノ内', null, 'https://commons.wikimedia.org/wiki/File:Yokonami_Nature_Park_Coastline_(52004285222).jpg', 33.406438, 133.39443),
  sight('susaki-sight-02', '大善寺', '高知県須崎市西町1-2-1', null, 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%96%84%E5%AF%BA_(%E9%A0%88%E5%B4%8E%E5%B8%82)', 33.38825, 133.28141667),
  sight('susaki-sight-03', '鳴無神社', '高知県須崎市浦ノ内東分字鳴無3579', null, 'https://ja.wikipedia.org/wiki/%E9%B3%B4%E7%84%A1%E7%A5%9E%E7%A4%BE', 33.41430556, 133.36878889),
  sight('susaki-sight-04', '須賀神社', '高知県須崎市大谷', null, 'https://commons.wikimedia.org/wiki/File:%E9%A0%88%E8%B3%80%E7%A5%9E%E7%A4%BE%EF%BC%88%E9%A0%88%E5%B4%8E%E5%B8%82%EF%BC%89.jpg', 33.385928, 133.318458),
  sight('susaki-sight-05', '野見湾', '高知県須崎市野見', null, 'https://commons.wikimedia.org/wiki/File:%E9%87%8E%E8%A6%8B%E6%B9%BE.jpg', 33.373533, 133.324414),
  sight('susaki-sight-06', '桑田山雪割り桜', '高知県須崎市桑田山', null, 'https://commons.wikimedia.org/wiki/File:%E6%A1%91%E7%94%B0%E5%B1%B1%E9%9B%AA%E5%89%B2%E3%82%8A%E6%A1%9C.jpg', 33.434121, 133.279898),
  sight('susaki-experience-01', '道の駅かわうその里すさき', '高知県須崎市下分甲263-3', null, 'https://ja.wikipedia.org/wiki/%E9%81%93%E3%81%AE%E9%A7%85%E3%81%8B%E3%82%8F%E3%81%86%E3%81%9D%E3%81%AE%E9%87%8C%E3%81%99%E3%81%95%E3%81%8D', 33.38764, 133.27469)
];
