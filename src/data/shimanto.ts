/**
 * Shimanto City sourced facts. Do not invent population.
 * Hall / JIS from city Wikipedia / city HP facts (accessed 2026-09-08). JIS 39210.
 * TG607 full-category densify: realign Tabelog C39210 dining to live ID↔name + raise dish-photo set;
 * onsen bath stills (stay≠onsen); Commons sights densify. Shop/commerce honest 0. Stay 16 kept.
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
    kankou: 'https://www.shimanto-kankou.com/',
    bridge: 'https://commons.wikimedia.org/wiki/File:Shimanto_River_Bridge(26676794871).jpg',
    ichijo: 'https://ja.wikipedia.org/wiki/%E4%B8%80%E6%A2%9D%E7%A5%9E%E7%A4%BE',
    fuba: 'https://ja.wikipedia.org/wiki/%E4%B8%8D%E7%A0%B4%E5%85%AB%E5%B9%A1%E5%AE%AE',
    tabelogCity: 'https://tabelog.com/kochi/C39210/rstLst/',
    royal: 'https://travel.rakuten.co.jp/HOTEL/9419/9419.html',
    accessed: '2026-09-09'
  }
} as const;

export const SHIMANTO_EXPECTED_ROW_COUNT = 25;
export const SHIMANTO_EXPECTED_GEO_COUNT = 25;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-09', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-09', altJa, altEn};
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
const TABELOG_39007106 = 'https://tabelog.com/kochi/A3904/A390401/39007106/';
const TABELOG_39001533 = 'https://tabelog.com/kochi/A3904/A390401/39001533/';
const TABELOG_39003615 = 'https://tabelog.com/kochi/A3904/A390401/39003615/';
const TABELOG_39007289 = 'https://tabelog.com/kochi/A3904/A390401/39007289/';
const TABELOG_39004991 = 'https://tabelog.com/kochi/A3904/A390401/39004991/';
const TABELOG_39006812 = 'https://tabelog.com/kochi/A3904/A390401/39006812/';
const TABELOG_39004171 = 'https://tabelog.com/kochi/A3904/A390401/39004171/';
const TABELOG_39002145 = 'https://tabelog.com/kochi/A3904/A390401/39002145/';
const TABELOG_39003528 = 'https://tabelog.com/kochi/A3904/A390401/39003528/';
const TABELOG_39008953 = 'https://tabelog.com/kochi/A3904/A390401/39008953/';
const TABELOG_39000359 = 'https://tabelog.com/kochi/A3904/A390401/39000359/';
const TABELOG_39000593 = 'https://tabelog.com/kochi/A3904/A390401/39000593/';
const TABELOG_39008722 = 'https://tabelog.com/kochi/A3904/A390401/39008722/';
const TABELOG_39008211 = 'https://tabelog.com/kochi/A3904/A390401/39008211/';
const TABELOG_39004033 = 'https://tabelog.com/kochi/A3904/A390401/39004033/';
const TABELOG_39006090 = 'https://tabelog.com/kochi/A3904/A390401/39006090/';
const TABELOG_39001203 = 'https://tabelog.com/kochi/A3904/A390401/39001203/';
const TABELOG_39001229 = 'https://tabelog.com/kochi/A3904/A390401/39001229/';
const TABELOG_39002702 = 'https://tabelog.com/kochi/A3904/A390401/39002702/';
const TABELOG_39005549 = 'https://tabelog.com/kochi/A3904/A390401/39005549/';
const TABELOG_39000934 = 'https://tabelog.com/kochi/A3904/A390401/39000934/';
const TABELOG_39001005 = 'https://tabelog.com/kochi/A3904/A390401/39001005/';
const TABELOG_39002877 = 'https://tabelog.com/kochi/A3904/A390401/39002877/';
const TABELOG_39003871 = 'https://tabelog.com/kochi/A3904/A390401/39003871/';
const TABELOG_39003314 = 'https://tabelog.com/kochi/A3904/A390401/39003314/';
const TABELOG_39006109 = 'https://tabelog.com/kochi/A3904/A390401/39006109/';
const TABELOG_39007367 = 'https://tabelog.com/kochi/A3904/A390401/39007367/';
const TABELOG_39008591 = 'https://tabelog.com/kochi/A3904/A390401/39008591/';
const TABELOG_39004918 = 'https://tabelog.com/kochi/A3904/A390401/39004918/';

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
  'ホテルサンリバー四万十': sourcePhoto(
    'shimanto-stay-sunriver.jpg',
    'ホテルサンリバー四万十の客室写真',
    'Hotel Sunriver Shimanto room photo',
    'https://travel.rakuten.co.jp/HOTEL/165910/165910.html',
    '楽天トラベル'
  ),
  '中村プリンスホテル': sourcePhoto(
    'shimanto-stay-prince.jpg',
    '中村プリンスホテルの客室写真',
    'Nakamura Prince Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/8989/8989.html',
    '楽天トラベル'
  ),
  'ホテルクラウンヒルズ中村': sourcePhoto(
    'shimanto-stay-crownhills.jpg',
    'ホテルクラウンヒルズ中村の客室写真',
    'Hotel Crown Hills Nakamura room photo',
    'https://travel.rakuten.co.jp/HOTEL/70893/70893.html',
    '楽天トラベル'
  ),
  '中村第一ホテル': sourcePhoto(
    'shimanto-stay-daiichi.jpg',
    '中村第一ホテルの客室写真',
    'Nakamura Daiichi Hotel room photo',
    'https://travel.rakuten.co.jp/HOTEL/11023/11023.html',
    '楽天トラベル'
  ),
  'ホテルココモ': sourcePhoto(
    'shimanto-stay-cocomo.jpg',
    'ホテルココモの客室写真',
    'Hotel Cocomo room photo',
    'https://travel.rakuten.co.jp/HOTEL/184394/184394.html',
    '楽天トラベル'
  ),
  '四万十の宿': sourcePhoto(
    'shimanto-stay-shimantonoyado.jpg',
    '四万十の宿の客室写真',
    'Shimanto no Yado room photo',
    'https://travel.rakuten.co.jp/HOTEL/16245/16245.html',
    '楽天トラベル'
  ),
  'なごみ宿 安住庵': sourcePhoto(
    'shimanto-stay-anjuann.jpg',
    'なごみ宿 安住庵の客室写真',
    'Nagomi-yado Anjuann room photo',
    'https://travel.rakuten.co.jp/HOTEL/10838/10838.html',
    '楽天トラベル'
  ),
  '山みず木': sourcePhoto(
    'shimanto-stay-yamamizuki.jpg',
    '山みず木の客室写真',
    'Yamamizuki room photo',
    'https://travel.rakuten.co.jp/HOTEL/146135/146135.html',
    '楽天トラベル'
  ),
  '四万十りばーさいど': sourcePhoto(
    'shimanto-stay-riversaide.jpg',
    '四万十りばーさいどの客室写真',
    'Shimanto Riverside room photo',
    'https://travel.rakuten.co.jp/HOTEL/44089/44089.html',
    '楽天トラベル'
  ),
  '四万十川の隠れコテージ おりや': sourcePhoto(
    'shimanto-stay-oriya.jpg',
    '四万十川の隠れコテージ おりやの客室写真',
    'Oriya cottage room photo',
    'https://travel.rakuten.co.jp/HOTEL/164466/164466.html',
    '楽天トラベル'
  ),
  '古民家宿 寝つきいいキツネ': sourcePhoto(
    'shimanto-stay-kitsune.jpg',
    '古民家宿 寝つきいいキツネの客室写真',
    'Netsukii Kitsune room photo',
    'https://travel.rakuten.co.jp/HOTEL/170072/170072.html',
    '楽天トラベル'
  ),
  '貸切宿ほとり': sourcePhoto(
    'shimanto-stay-hotori.jpg',
    '貸切宿ほとりの客室写真',
    'Hotori rental stay room photo',
    'https://travel.rakuten.co.jp/HOTEL/188758/188758.html',
    '楽天トラベル'
  ),
  'さんいんどう': sourcePhoto(
    'shimanto-stay-saindo.jpg',
    'さんいんどうの客室写真',
    'Saindo room photo',
    'https://travel.rakuten.co.jp/HOTEL/192726/192726.html',
    '楽天トラベル'
  ),
  '民宿 鈴': sourcePhoto(
    'shimanto-stay-suzu.jpg',
    '民宿 鈴の客室写真',
    'Minshuku Suzu room photo',
    'https://travel.rakuten.co.jp/HOTEL/19883/19883.html',
    '楽天トラベル'
  ),
  '民宿 こばん': sourcePhoto(
    'shimanto-stay-koban.jpg',
    '民宿 こばんの客室写真',
    'Minshuku Koban room photo',
    'https://travel.rakuten.co.jp/HOTEL/147866/147866.html',
    '楽天トラベル'
  ),
  '新ロイヤルホテル四万十 大浴場': sourcePhoto(
    'shimanto-onsen-royal.jpg',
    '新ロイヤルホテル四万十 大浴場の写真',
    '新ロイヤルホテル四万十 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/9419/9419.html',
    '楽天トラベル'
  ),
  'ホテルココモ 大浴場': sourcePhoto(
    'shimanto-onsen-cocomo.jpg',
    'ホテルココモ 大浴場の写真',
    'ホテルココモ 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/184394/184394.html',
    '楽天トラベル'
  ),
  'なごみ宿 安住庵 露天風呂': sourcePhoto(
    'shimanto-onsen-anjuann.jpg',
    'なごみ宿 安住庵 露天風呂の写真',
    'なごみ宿 安住庵 露天風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/10838/10838.html',
    '楽天トラベル'
  ),
  '山みず木 露天風呂': sourcePhoto(
    'shimanto-onsen-yamamizuki.jpg',
    '山みず木 露天風呂の写真',
    '山みず木 露天風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/146135/146135.html',
    '楽天トラベル'
  ),
  '四万十の宿 大浴場': sourcePhoto(
    'shimanto-onsen-shimantonoyado.jpg',
    '四万十の宿 大浴場の写真',
    '四万十の宿 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/16245/16245.html',
    '楽天トラベル'
  ),
  'ホテルクラウンヒルズ中村 大浴場': sourcePhoto(
    'shimanto-onsen-crownhills.jpg',
    'ホテルクラウンヒルズ中村 大浴場の写真',
    'ホテルクラウンヒルズ中村 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/70893/70893.html',
    '楽天トラベル'
  ),
  '四万十りばーさいど 外風呂': sourcePhoto(
    'shimanto-onsen-riversaide.jpg',
    '四万十りばーさいど 外風呂の写真',
    '四万十りばーさいど 外風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/44089/44089.html',
    '楽天トラベル'
  ),
  'さんいんどう 五右衛門風呂': sourcePhoto(
    'shimanto-onsen-saindo.jpg',
    'さんいんどう 五右衛門風呂の写真',
    'さんいんどう 五右衛門風呂 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/192726/192726.html',
    '楽天トラベル'
  ),
  'ホテル星羅四万十 大浴場': sourcePhoto(
    'shimanto-onsen-seira.jpg',
    'ホテル星羅四万十 大浴場の写真',
    'ホテル星羅四万十 大浴場 bath photo',
    'https://travel.rakuten.co.jp/HOTEL/70733/70733.html',
    '楽天トラベル'
  ),
  '長生沈下橋': wikiPhoto(
    'shimanto-nagaosei-chinkabashi.jpg',
    'https://commons.wikimedia.org/wiki/File:Chosei_submerged_bridge.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'ブルーノ・プラス', 'https://commons.wikimedia.org/wiki/File:Chosei_submerged_bridge.jpg', '2020-12',
    '長生沈下橋', '長生沈下橋, Shimanto'
  ),
  '古津賀神社': wikiPhoto(
    'shimanto-kotsuka-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:Kotsuka-jinja%2C_shaden.jpg',
    'CC0', 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/File:Kotsuka-jinja%2C_shaden.jpg', '2018-02-17',
    '古津賀神社', '古津賀神社, Shimanto'
  ),
  '中村城跡': wikiPhoto(
    'shimanto-nakamura-castle.jpg',
    'https://commons.wikimedia.org/wiki/File:Nakamurajou01.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Satoshin', 'https://commons.wikimedia.org/wiki/File:Nakamurajou01.jpg', '2003-03-21',
    '中村城跡', '中村城跡, Shimanto'
  ),
  '四万十市立郷土資料館': wikiPhoto(
    'shimanto-city-museum.jpg',
    'https://commons.wikimedia.org/wiki/File:Shimanto_History_Museum_1.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '京浜にけ', 'https://commons.wikimedia.org/wiki/File:Shimanto_History_Museum_1.JPG', '2010-04-25',
    '四万十市立郷土資料館', '四万十市立郷土資料館, Shimanto'
  ),
  '真静寺': wikiPhoto(
    'shimanto-shinjoji.jpg',
    'https://commons.wikimedia.org/wiki/File:Shinjo-ji_%28Shimanto%29_-_Bell.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    '運動会プロテインパワー', 'https://commons.wikimedia.org/wiki/File:Shinjo-ji_%28Shimanto%29_-_Bell.jpg', '2022-12',
    '真静寺', '真静寺, Shimanto'
  ),
  '太平寺': wikiPhoto(
    'shimanto-taiheiji.jpg',
    'https://commons.wikimedia.org/wiki/File:Taiheiji.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Yaseminkurr', 'https://commons.wikimedia.org/wiki/File:Taiheiji.JPG', '2015-06-01',
    '太平寺', '太平寺, Shimanto'
  ),
  '四万十川桜づつみ公園': wikiPhoto(
    'shimanto-sakurazutsumi.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B7%9D%E6%A1%9C%E3%81%A5%E3%81%A4%E3%81%BF%E5%85%AC%E5%9C%92_-_panoramio.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    'Yobito KAYANUMA', 'https://commons.wikimedia.org/wiki/File:%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B7%9D%E6%A1%9C%E3%81%A5%E3%81%A4%E3%81%BF%E5%85%AC%E5%9C%92_-_panoramio.jpg', 'Taken on 1',
    '四万十川桜づつみ公園', '四万十川桜づつみ公園, Shimanto'
  ),
  '土佐西南大規模公園': wikiPhoto(
    'shimanto-tosa-seinan-park.jpg',
    'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E8%A5%BF%E5%8D%97%E5%A4%A7%E8%A6%8F%E6%A8%A1%E5%85%AC%E5%9C%92.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E8%A5%BF%E5%8D%97%E5%A4%A7%E8%A6%8F%E6%A8%A1%E5%85%AC%E5%9C%92.jpg', '2015-10-03',
    '土佐西南大規模公園', '土佐西南大規模公園, Shimanto'
  ),
  '石見寺': wikiPhoto(
    'shimanto-ishimiji.jpg',
    'https://commons.wikimedia.org/wiki/File:Isimizi01.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Dokudami', 'https://commons.wikimedia.org/wiki/File:Isimizi01.jpg', '2014-07-19',
    '石見寺', '石見寺, Shimanto'
  ),
  '居酒屋 かねき': sourcePhoto('shimanto-39008593-dish.jpg', '居酒屋 かねきの料理写真', '居酒屋 かねき food photo', TABELOG_39008593, '食べログ'),
  '65 ナムリマ': sourcePhoto('shimanto-39008370-dish.jpg', '65 ナムリマの料理写真', '65 ナムリマ food photo', TABELOG_39008370, '食べログ'),
  'ほうばい': sourcePhoto('shimanto-39008777-dish.jpg', 'ほうばいの料理写真', 'ほうばい food photo', TABELOG_39008777, '食べログ'),
  '居酒屋誠道': sourcePhoto('shimanto-39003313-dish.jpg', '居酒屋誠道の料理写真', '居酒屋誠道 food photo', TABELOG_39003313, '食べログ'),
  'カテコテ': sourcePhoto('shimanto-39007106-dish.jpg', 'カテコテの料理写真', 'カテコテ food photo', TABELOG_39007106, '食べログ'),
  'よろこび': sourcePhoto('shimanto-39001533-dish.jpg', 'よろこびの料理写真', 'よろこび food photo', TABELOG_39001533, '食べログ'),
  'パティスリー fuu': sourcePhoto('shimanto-39003615-dish.jpg', 'パティスリー fuuの料理写真', 'パティスリー fuu food photo', TABELOG_39003615, '食べログ'),
  'cafe n2': sourcePhoto('shimanto-39007289-dish.jpg', 'cafe n2の料理写真', 'cafe n2 food photo', TABELOG_39007289, '食べログ'),
  '山貴': sourcePhoto('shimanto-39004991-dish.jpg', '山貴の料理写真', '山貴 food photo', TABELOG_39004991, '食べログ'),
  '居酒屋 ちきちん': sourcePhoto('shimanto-39006812-dish.jpg', '居酒屋 ちきちんの料理写真', '居酒屋 ちきちん food photo', TABELOG_39006812, '食べログ'),
  'いちもん家': sourcePhoto('shimanto-39004171-dish.jpg', 'いちもん家の料理写真', 'いちもん家 food photo', TABELOG_39004171, '食べログ'),
  '小鉄': sourcePhoto('shimanto-39002145-dish.jpg', '小鉄の料理写真', '小鉄 food photo', TABELOG_39002145, '食べログ'),
  '山川海': sourcePhoto('shimanto-39003528-dish.jpg', '山川海の料理写真', '山川海 food photo', TABELOG_39003528, '食べログ'),
  '宵の灯': sourcePhoto('shimanto-39008953-dish.jpg', '宵の灯の料理写真', '宵の灯 food photo', TABELOG_39008953, '食べログ'),
  '四万十屋': sourcePhoto('shimanto-39000359-dish.jpg', '四万十屋の料理写真', '四万十屋 food photo', TABELOG_39000359, '食べログ'),
  'しなとら 中村店': sourcePhoto('shimanto-39000593-dish.jpg', 'しなとら 中村店の料理写真', 'しなとら 中村店 food photo', TABELOG_39000593, '食べログ'),
  'SHADE TREE COFFEE': sourcePhoto('shimanto-39008722-dish.jpg', 'SHADE TREE COFFEEの料理写真', 'SHADE TREE COFFEE food photo', TABELOG_39008722, '食べログ'),
  '居酒屋 森もと屋': sourcePhoto('shimanto-39008211-dish.jpg', '居酒屋 森もと屋の料理写真', '居酒屋 森もと屋 food photo', TABELOG_39008211, '食べログ'),
  '和菓子処おおいし': sourcePhoto('shimanto-39004033-dish.jpg', '和菓子処おおいしの料理写真', '和菓子処おおいし food photo', TABELOG_39004033, '食べログ'),
  'まんま・みや': sourcePhoto('shimanto-39006090-dish.jpg', 'まんま・みやの料理写真', 'まんま・みや food photo', TABELOG_39006090, '食べログ'),
  '居酒屋 喜八': sourcePhoto('shimanto-39001203-dish.jpg', '居酒屋 喜八の料理写真', '居酒屋 喜八 food photo', TABELOG_39001203, '食べログ'),
  '大虎': sourcePhoto('shimanto-39001229-dish.jpg', '大虎の料理写真', '大虎 food photo', TABELOG_39001229, '食べログ'),
  '葵': sourcePhoto('shimanto-39002702-dish.jpg', '葵の料理写真', '葵 food photo', TABELOG_39002702, '食べログ'),
  'ラーメンハウス': sourcePhoto('shimanto-39005549-dish.jpg', 'ラーメンハウスの料理写真', 'ラーメンハウス food photo', TABELOG_39005549, '食べログ'),
  'さぬきやうどん': sourcePhoto('shimanto-39000934-dish.jpg', 'さぬきやうどんの料理写真', 'さぬきやうどん food photo', TABELOG_39000934, '食べログ'),
  '常連': sourcePhoto('shimanto-39001005-dish.jpg', '常連の料理写真', '常連 food photo', TABELOG_39001005, '食べログ'),
  'まる牛': sourcePhoto('shimanto-39002877-dish.jpg', 'まる牛の料理写真', 'まる牛 food photo', TABELOG_39002877, '食べログ'),
  '屋形舟四万十料理　なっとく': sourcePhoto('shimanto-39003871-dish.jpg', '屋形舟四万十料理　なっとくの料理写真', '屋形舟四万十料理　なっとく food photo', TABELOG_39003871, '食べログ'),
  '旬味居酒屋ますだや': sourcePhoto('shimanto-39003314-dish.jpg', '旬味居酒屋ますだやの料理写真', '旬味居酒屋ますだや food photo', TABELOG_39003314, '食べログ'),
  '昭和ブギウギ食堂 のらくろ': sourcePhoto('shimanto-39006109-dish.jpg', '昭和ブギウギ食堂 のらくろの料理写真', '昭和ブギウギ食堂 のらくろ food photo', TABELOG_39006109, '食べログ'),
  '焼肉たかみ': sourcePhoto('shimanto-39007367-dish.jpg', '焼肉たかみの料理写真', '焼肉たかみ food photo', TABELOG_39007367, '食べログ'),
  '居酒屋カフェ びそあ': sourcePhoto('shimanto-39008591-dish.jpg', '居酒屋カフェ びそあの料理写真', '居酒屋カフェ びそあ food photo', TABELOG_39008591, '食べログ'),
  'ちきん館 本店': sourcePhoto('shimanto-39004918-dish.jpg', 'ちきん館 本店の料理写真', 'ちきん館 本店 food photo', TABELOG_39004918, '食べログ'),
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
  sight('shimanto-sight-07', '長生沈下橋', '高知県四万十市西土佐長生', null, 'https://commons.wikimedia.org/wiki/Category:Nagao_Chinka_Bridge', 33.194556, 132.791139),
  sight('shimanto-sight-08', '古津賀神社', '高知県四万十市古津賀1843', null, 'https://commons.wikimedia.org/wiki/File:Kotsuka-jinja,_shaden.jpg', 32.992085, 132.963531),
  sight('shimanto-sight-09', '中村城跡', '高知県四万十市中村為松町', null, 'https://ja.wikipedia.org/wiki/%E4%B8%AD%E6%9D%91%E5%9F%8E_(%E5%9C%9F%E4%BD%90%E5%9B%BD)', 32.9969361, 132.9293417),
  sight('shimanto-sight-10', '四万十市立郷土資料館', '高知県四万十市中村為松町', null, 'https://commons.wikimedia.org/wiki/File:Shimanto_History_Museum_1.JPG', 32.9969402, 132.930622),
  sight('shimanto-sight-11', '真静寺', '高知県四万十市有岡1245', null, 'https://ja.wikipedia.org/wiki/%E7%9C%9F%E9%9D%99%E5%AF%BA', 32.96375, 132.828972),
  sight('shimanto-sight-12', '太平寺', '高知県四万十市右山元町1-4-27', null, 'https://commons.wikimedia.org/wiki/File:Taiheiji.JPG', 32.985374, 132.939545),
  sight('shimanto-sight-13', '四万十川桜づつみ公園', '高知県四万十市入田', null, 'https://commons.wikimedia.org/wiki/File:%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B7%9D%E6%A1%9C%E3%81%A5%E3%81%A4%E3%81%BF%E5%85%AC%E5%9C%92_-_panoramio.jpg', 33.002467, 132.904017),
  sight('shimanto-sight-14', '土佐西南大規模公園', '高知県四万十市下田', null, 'https://commons.wikimedia.org/wiki/File:%E5%9C%9F%E4%BD%90%E8%A5%BF%E5%8D%97%E5%A4%A7%E8%A6%8F%E6%A8%A1%E5%85%AC%E5%9C%92.jpg', 32.94426, 132.989731),
  sight('shimanto-sight-15', '石見寺', '高知県四万十市安並4288', null, 'https://ja.wikipedia.org/wiki/%E7%9F%B3%E8%A6%8B%E5%AF%BA_(%E5%9B%9B%E4%B8%87%E5%8D%81%E5%B8%82)', 33.004972, 132.942861),
  sight('shimanto-experience-01', '道の駅よって西土佐', '高知県四万十市西土佐江川崎2410-3', null, 'https://commons.wikimedia.org/wiki/File:Yotte-nishitosa_NS.jpg', 33.1731635, 132.7890667),
  sight('shimanto-onsen-01', '新ロイヤルホテル四万十 大浴場', '高知県四万十市中村小姓町26', '0880-35-1000', 'https://travel.rakuten.co.jp/HOTEL/9419/9419.html', 32.9939513, 132.9323858),
  sight('shimanto-onsen-02', 'ホテルココモ 大浴場', '高知県四万十市右山366', '0880-34-9331', 'https://travel.rakuten.co.jp/HOTEL/184394/184394.html', 32.981644, 132.946106),
  sight('shimanto-onsen-03', 'なごみ宿 安住庵 露天風呂', '高知県四万十市中村1815', '0880-35-3184', 'https://travel.rakuten.co.jp/HOTEL/10838/10838.html', 32.996052, 132.928329),
  sight('shimanto-onsen-04', '山みず木 露天風呂', '高知県四万十市名鹿431-10', '0880-31-9160', 'https://travel.rakuten.co.jp/HOTEL/146135/146135.html', 32.923397, 132.991028),
  sight('shimanto-onsen-05', '四万十の宿 大浴場', '高知県四万十市下田3370', '0880-33-1600', 'https://travel.rakuten.co.jp/HOTEL/16245/16245.html', 32.94426, 132.989731),
  sight('shimanto-onsen-06', 'ホテルクラウンヒルズ中村 大浴場', '高知県四万十市右山383-6', '050-1807-2974', 'https://travel.rakuten.co.jp/HOTEL/70893/70893.html', 32.981079, 132.944626),
  sight('shimanto-onsen-07', '四万十りばーさいど 外風呂', '高知県四万十市佐田38-1', '0880-34-1518', 'https://travel.rakuten.co.jp/HOTEL/44089/44089.html', 33.010723, 132.891022),
  sight('shimanto-onsen-08', 'さんいんどう 五右衛門風呂', '高知県四万十市荒川1290', '090-5768-3188', 'https://travel.rakuten.co.jp/HOTEL/192726/192726.html', 32.98711, 132.861847),
  sight('shimanto-onsen-09', 'ホテル星羅四万十 大浴場', '高知県四万十市西土佐用井1100', null, 'https://travel.rakuten.co.jp/HOTEL/70733/70733.html', 33.168884, 132.805145),
];
