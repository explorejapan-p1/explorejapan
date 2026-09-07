/**
 * Shimanto City sourced facts. Do not invent population.
 * Hall / JIS from city Wikipedia / city HP facts (accessed 2026-09-08). JIS 39210. Tenth Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市.
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay/onsen. Stay uses Royal Hotel room still; onsen uses attributable 4F bath still (stay≠onsen). Shop/commerce honest 0.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const SHIMANTO = {
  nameJa: '四万十市',
  nameEn: 'Shimanto',
  reading: 'しまんとし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'shimanto',
  jis: '39210',
  jlis: '392103',
  sameAs: 'https://www.city.shimanto.lg.jp/',
  hall: {
    postalCode: '787-8501',
    addressJa: '高知県四万十市中村大橋通四丁目10番地',
    addressEn: '4-10 Nakamura-ohashidori, Shimanto City, Kochi 787-8501, Japan',
    phone: '0880-34-1111'
  },
  sources: {
    home: 'https://www.city.shimanto.lg.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B8%82',
    kankou: 'https://www.city.shimanto.lg.jp/',
    bridge: 'https://commons.wikimedia.org/wiki/File:Shimanto_River_Bridge(26676794871).jpg',
    ichijo: 'https://ja.wikipedia.org/wiki/%E4%B8%80%E6%A2%9D%E7%A5%9E%E7%A4%BE',
    fuba: 'https://ja.wikipedia.org/wiki/%E4%B8%8D%E7%A0%B4%E5%85%AB%E5%B9%A1%E5%AE%AE',
    tabelogCity: 'https://tabelog.com/kochi/C39210/rstLst/',
    royal: 'https://travel.rakuten.co.jp/HOTEL/9419/9419.html',
    accessed: '2026-09-08'
  }
} as const;

export const SHIMANTO_EXPECTED_ROW_COUNT = 8;
export const SHIMANTO_EXPECTED_GEO_COUNT = 8;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Shimanto River Bridge (赤鉄橋). */
export const SHIMANTO_PLACE_PHOTO = wikiPhoto(
  'shimanto-cover-bridge.jpg',
  'https://commons.wikimedia.org/wiki/File:Shimanto_River_Bridge(26676794871).jpg',
  'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0',
  'Kuruman', 'https://www.flickr.com/photos/kuruman/', '2015-08-31',
  '四万十川橋（赤鉄橋）', 'Shimanto River Bridge (Aka-tetsubashi), Shimanto'
);

const TABELOG_39008593 = 'https://tabelog.com/kochi/A3904/A390401/39008593/';
const TABELOG_39008370 = 'https://tabelog.com/kochi/A3904/A390401/39008370/';
const TABELOG_39008777 = 'https://tabelog.com/kochi/A3904/A390401/39008777/';
const TABELOG_39003313 = 'https://tabelog.com/kochi/A3904/A390401/39003313/';
const TABELOG_39004964 = 'https://tabelog.com/kochi/A3904/A390401/39004964/';
const TABELOG_39007106 = 'https://tabelog.com/kochi/A3904/A390401/39007106/';
const TABELOG_39008604 = 'https://tabelog.com/kochi/A3904/A390401/39008604/';
const TABELOG_39001533 = 'https://tabelog.com/kochi/A3904/A390401/39001533/';
const TABELOG_39003615 = 'https://tabelog.com/kochi/A3904/A390401/39003615/';
const TABELOG_39007289 = 'https://tabelog.com/kochi/A3904/A390401/39007289/';
const TABELOG_39004991 = 'https://tabelog.com/kochi/A3904/A390401/39004991/';
const TABELOG_39006812 = 'https://tabelog.com/kochi/A3904/A390401/39006812/';
const TABELOG_39004965 = 'https://tabelog.com/kochi/A3904/A390401/39004965/';
const TABELOG_39004171 = 'https://tabelog.com/kochi/A3904/A390401/39004171/';
const TABELOG_39002145 = 'https://tabelog.com/kochi/A3904/A390401/39002145/';
const TABELOG_39003528 = 'https://tabelog.com/kochi/A3904/A390401/39003528/';

export const SHIMANTO_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '四万十川橋': SHIMANTO_PLACE_PHOTO,
  '岩間沈下橋': wikiPhoto(
    'shimanto-iwama-chinkabashi.jpg',
    'https://commons.wikimedia.org/wiki/File:Shimanto_iwama_chinkabashi.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '四万十人', 'https://commons.wikimedia.org/wiki/File:Shimanto_iwama_chinkabashi.jpg', '2009-05-03',
    '岩間沈下橋', 'Iwama chinkabashi, Shimanto'
  ),
  '佐田沈下橋': wikiPhoto(
    'shimanto-sada-chinkabashi.jpg',
    'https://commons.wikimedia.org/wiki/File:Shimanto_sada_chinkabashi.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '四万十人', 'https://commons.wikimedia.org/wiki/File:Shimanto_sada_chinkabashi.jpg', '2009-05-05',
    '佐田沈下橋', 'Sada chinkabashi, Shimanto'
  ),
  '一條神社': wikiPhoto(
    'shimanto-ichijo-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:Ichijo-jinja,_shaden.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2018-02-17',
    '一條神社', 'Ichijo-jinja, Shimanto'
  ),
  '不破八幡宮': wikiPhoto(
    'shimanto-fuba-hachimangu.jpg',
    'https://commons.wikimedia.org/wiki/File:Fuba_Hachimangu_01.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Reggaeman', 'https://commons.wikimedia.org/wiki/User:Reggaeman', '2010-07-10',
    '不破八幡宮', 'Fuba Hachimangu, Shimanto'
  ),
  'トンボ自然公園': wikiPhoto(
    'shimanto-tombo-park.jpg',
    'https://commons.wikimedia.org/wiki/File:Tombo_Shizen_Koen_20090802_01.jpg',
    'Public domain', 'https://commons.wikimedia.org/wiki/File:Tombo_Shizen_Koen_20090802_01.jpg',
    'Navian', 'https://commons.wikimedia.org/wiki/User:Navian', '2009-08-02',
    'トンボ自然公園', 'Tombo Nature Park, Shimanto'
  ),
  '道の駅よって西土佐': wikiPhoto(
    'shimanto-yotte-nishitosa.jpg',
    'https://commons.wikimedia.org/wiki/File:Yotte-nishitosa_NS.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Aikaleido', 'https://commons.wikimedia.org/wiki/File:Yotte-nishitosa_NS.jpg', '2017-03-28',
    '道の駅よって西土佐', 'Michinoeki Yotte Nishitosa, Shimanto'
  ),
  '新ロイヤルホテル四万十': sourcePhoto(
    'shimanto-stay-royal.jpg',
    '新ロイヤルホテル四万十の客室写真',
    'New Royal Hotel Shimanto room photo',
    'https://travel.rakuten.co.jp/HOTEL/9419/9419.html',
    '楽天トラベル'
  ),
  '新ロイヤルホテル四万十 大浴場': sourcePhoto(
    'shimanto-onsen-royal.jpg',
    '新ロイヤルホテル四万十の大浴場写真',
    'New Royal Hotel Shimanto bath photo',
    'https://travel.rakuten.co.jp/HOTEL/9419/9419.html',
    '楽天トラベル'
  ),
  '居酒屋 かねき': sourcePhoto('shimanto-39008593-dish.jpg', '居酒屋 かねきの料理写真', '居酒屋 かねき food photo', TABELOG_39008593, '食べログ'),
  'ほうばい': sourcePhoto('shimanto-39008370-dish.jpg', 'ほうばいの料理写真', 'ほうばい food photo', TABELOG_39008370, '食べログ'),
  '居酒屋誠道': sourcePhoto('shimanto-39008777-dish.jpg', '居酒屋誠道の料理写真', '居酒屋誠道 food photo', TABELOG_39008777, '食べログ'),
  '四万十屋': sourcePhoto('shimanto-39003313-dish.jpg', '四万十屋の料理写真', '四万十屋 food photo', TABELOG_39003313, '食べログ'),
  'カテコテ': sourcePhoto('shimanto-39004964-dish.jpg', 'カテコテの料理写真', 'カテコテ food photo', TABELOG_39004964, '食べログ'),
  '季節料理 たにぐち': sourcePhoto('shimanto-39007106-dish.jpg', '季節料理 たにぐちの料理写真', '季節料理 たにぐち food photo', TABELOG_39007106, '食べログ'),
  'お食事処 さたけ': sourcePhoto('shimanto-39008604-dish.jpg', 'お食事処 さたけの料理写真', 'お食事処 さたけ food photo', TABELOG_39008604, '食べログ'),
  'ラーメンハウス': sourcePhoto('shimanto-39001533-dish.jpg', 'ラーメンハウスの料理写真', 'ラーメンハウス food photo', TABELOG_39001533, '食べログ'),
  '居酒屋 なかひら': sourcePhoto('shimanto-39003615-dish.jpg', '居酒屋 なかひらの料理写真', '居酒屋 なかひら food photo', TABELOG_39003615, '食べログ'),
  '人情酒場いわちゃん': sourcePhoto('shimanto-39007289-dish.jpg', '人情酒場いわちゃんの料理写真', '人情酒場いわちゃん food photo', TABELOG_39007289, '食べログ'),
  '居酒屋 ちきちん': sourcePhoto('shimanto-39004991-dish.jpg', '居酒屋 ちきちんの料理写真', '居酒屋 ちきちん food photo', TABELOG_39004991, '食べログ'),
  '昭和ブギウギ食堂 のらくろ': sourcePhoto('shimanto-39006812-dish.jpg', '昭和ブギウギ食堂 のらくろの料理写真', '昭和ブギウギ食堂 のらくろ food photo', TABELOG_39006812, '食べログ'),
  'いちもん家': sourcePhoto('shimanto-39004965-dish.jpg', 'いちもん家の料理写真', 'いちもん家 food photo', TABELOG_39004965, '食べログ'),
  '小鉄': sourcePhoto('shimanto-39004171-dish.jpg', '小鉄の料理写真', '小鉄 food photo', TABELOG_39004171, '食べログ'),
  '西土佐食堂': sourcePhoto('shimanto-39002145-dish.jpg', '西土佐食堂の料理写真', '西土佐食堂 food photo', TABELOG_39002145, '食べログ'),
  'ちきん館 本店': sourcePhoto('shimanto-39003528-dish.jpg', 'ちきん館 本店の料理写真', 'ちきん館 本店 food photo', TABELOG_39003528, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: SHIMANTO.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: SHIMANTO.sources.accessed};
}

export const SHIMANTO_FACILITIES: readonly FacilityRow[] = [
  sight('shimanto-sight-01', '四万十川橋', '高知県四万十市中村大橋通', null, 'https://commons.wikimedia.org/wiki/File:Shimanto_River_Bridge(26676794871).jpg', 32.9895977, 132.9269416),
  sight('shimanto-sight-02', '岩間沈下橋', '高知県四万十市西土佐岩間', null, 'https://commons.wikimedia.org/wiki/File:Shimanto_iwama_chinkabashi.jpg', 33.1283938, 132.8173430),
  sight('shimanto-sight-03', '佐田沈下橋', '高知県四万十市佐田', null, 'https://commons.wikimedia.org/wiki/File:Shimanto_sada_chinkabashi.jpg', 33.0153555, 132.8852907),
  sight('shimanto-sight-04', '一條神社', '高知県四万十市中村本町1-3', null, 'https://ja.wikipedia.org/wiki/%E4%B8%80%E6%A2%9D%E7%A5%9E%E7%A4%BE', 32.9936139, 132.9342167),
  sight('shimanto-sight-05', '不破八幡宮', '高知県四万十市不破1392', null, 'https://ja.wikipedia.org/wiki/%E4%B8%8D%E7%A0%B4%E5%85%AB%E5%B9%A1%E5%AE%AE', 32.9807889, 132.9374306),
  sight('shimanto-sight-06', 'トンボ自然公園', '高知県四万十市具同', null, 'https://commons.wikimedia.org/wiki/File:Tombo_Shizen_Koen_20090802_01.jpg', 32.98996667, 132.91595),
  sight('shimanto-experience-01', '道の駅よって西土佐', '高知県四万十市西土佐江川崎2410-3', null, 'https://commons.wikimedia.org/wiki/File:Yotte-nishitosa_NS.jpg', 33.1731635, 132.7890667),
  sight('shimanto-onsen-01', '新ロイヤルホテル四万十 大浴場', '高知県四万十市中村小姓町26', '0880-35-1000', 'https://travel.rakuten.co.jp/HOTEL/9419/9419.html', 32.9939513, 132.9323858)
];
