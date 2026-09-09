/**
 * Kami City sourced facts. Do not invent population.
 * Hall / JIS from city HP (accessed 2026-09-08). JIS 39212. Fourth Kochi hub after 高知市・南国市・香南市.
 * No frozen pack — photo-only tourism + Tabelog dining + TG610 Rakuten stay densify. Honest 0 onsen (no attributable 大浴場 photo keys; stay uses room still ≠ onsen) / shop / commerce.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const KAMI = {
  nameJa: '香美市',
  nameEn: 'Kami',
  reading: 'かみし',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'kami',
  jis: '39212',
  jlis: '392127',
  sameAs: 'https://www.city.kami.lg.jp/',
  hall: {
    postalCode: '782-8501',
    addressJa: '高知県香美市土佐山田町宝町1丁目2番1号',
    addressEn: '1-2-1 Takaracho, Tosayamada-cho, Kami City, Kochi 782-8501, Japan',
    phone: '0887-53-3111'
  },
  sources: {
    home: 'https://www.city.kami.lg.jp/',
    hall: 'https://www.city.kami.lg.jp/soshiki/3/cityoffice.html',
    kankou: 'https://www.city.kami.lg.jp/',
    anpanman: 'https://ja.wikipedia.org/wiki/%E9%A6%99%E7%BE%8E%E5%B8%82%E7%AB%8B%E3%82%84%E3%81%AA%E3%81%9B%E3%81%9F%E3%81%8B%E3%81%97%E8%A8%98%E5%BF%B5%E9%A4%A8',
    ryugado: 'https://ja.wikipedia.org/wiki/%E9%BE%8D%E6%B2%B3%E6%B4%9E',
    tabelogCity: 'https://tabelog.com/kochi/C39212/rstLst/',
    sixthdiary: 'https://travel.rakuten.co.jp/HOTEL/172327/172327.html',
    accessed: '2026-09-08'
  }
} as const;

export const KAMI_EXPECTED_ROW_COUNT = 7;
export const KAMI_EXPECTED_GEO_COUNT = 7;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Yanase Takashi Memorial Hall / Anpanman Museum. */
export const KAMI_PLACE_PHOTO = wikiPhoto(
  'kami-anpanman.jpg',
  'https://commons.wikimedia.org/wiki/File:Anpanman_Museum,Kami-city,Japan.jpg',
  'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
  'katorisi', 'https://commons.wikimedia.org/wiki/File:Anpanman_Museum,Kami-city,Japan.jpg', '2010-09-06',
  '香美市立やなせたかし記念館（アンパンマンミュージアム）', 'Yanase Takashi Memorial Hall (Anpanman Museum), Kami'
);

const TABELOG_39008143 = 'https://tabelog.com/kochi/A3901/A390105/39008143/';
const TABELOG_39007373 = 'https://tabelog.com/kochi/A3901/A390105/39007373/';
const TABELOG_39000067 = 'https://tabelog.com/kochi/A3901/A390105/39000067/';
const TABELOG_39006096 = 'https://tabelog.com/kochi/A3901/A390105/39006096/';
const TABELOG_39004843 = 'https://tabelog.com/kochi/A3901/A390105/39004843/';
const TABELOG_39003705 = 'https://tabelog.com/kochi/A3901/A390105/39003705/';
const TABELOG_39007309 = 'https://tabelog.com/kochi/A3901/A390105/39007309/';
const TABELOG_39002879 = 'https://tabelog.com/kochi/A3901/A390105/39002879/';
const TABELOG_39000084 = 'https://tabelog.com/kochi/A3901/A390105/39000084/';
const TABELOG_39000443 = 'https://tabelog.com/kochi/A3901/A390105/39000443/';
const TABELOG_39003676 = 'https://tabelog.com/kochi/A3901/A390105/39003676/';
const TABELOG_39000099 = 'https://tabelog.com/kochi/A3901/A390105/39000099/';
const TABELOG_39007377 = 'https://tabelog.com/kochi/A3901/A390105/39007377/';
const TABELOG_39006769 = 'https://tabelog.com/kochi/A3901/A390105/39006769/';
const TABELOG_39002901 = 'https://tabelog.com/kochi/A3901/A390105/39002901/';
const TABELOG_39004104 = 'https://tabelog.com/kochi/A3901/A390105/39004104/';

export const KAMI_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '香美市立やなせたかし記念館': KAMI_PLACE_PHOTO,
  '龍河洞': wikiPhoto(
    'kami-ryugado.jpg',
    'https://commons.wikimedia.org/wiki/File:Ryuga-do,_entrance.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2020-12-05',
    '龍河洞入り口', 'Ryugado Cave entrance, Kami'
  ),
  '土佐山田駅': wikiPhoto(
    'kami-tosayamada-sta.jpg',
    'https://commons.wikimedia.org/wiki/File:Tosa-Yamada_Station,_ekisha.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2018-02-18',
    '土佐山田駅', 'Tosa-Yamada Station, Kami'
  ),
  '大川上美良布神社': wikiPhoto(
    'kami-birafu-jinja.jpg',
    'https://commons.wikimedia.org/wiki/File:Okawakami_Birafu-jinja,_haiden-1.jpg',
    'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    'Saigen Jiro', 'https://commons.wikimedia.org/wiki/User:Saigen_Jiro', '2020-12-05',
    '大川上美良布神社拝殿', 'Okawakami Birafu Shrine haiden, Kami'
  ),
  'べふ峡': wikiPhoto(
    'kami-befukyo.jpg',
    'https://commons.wikimedia.org/wiki/File:%E3%81%B9%E3%81%B5%E5%B3%A1_-_panoramio_(1).jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://web.archive.org/web/20161102021416/http://www.panoramio.com/user/1770756?with_photo_id=117849525', '2014',
    'べふ峡', 'Befukyo Gorge, Kami'
  ),
  '繁藤駅': wikiPhoto(
    'kami-shigeto-sta.jpg',
    'https://commons.wikimedia.org/wiki/File:Shigeto_Station_20110906.jpg',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/',
    'Rsa', 'https://commons.wikimedia.org/w/index.php?title=User:Rsa&amp;action=edit&amp;redlink=1', '2011-09-06',
    '繁藤駅', 'Shigeto Station, Kami'
  ),
  '道の駅美良布': wikiPhoto(
    'kami-michinoeki-birafu.jpg',
    'https://commons.wikimedia.org/wiki/File:Kami_Kochi_Michinoeki_Birafu_1.JPG',
    'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0',
    '京浜にけ', 'https://ja.wikipedia.org/wiki/User:%E4%BA%AC%E6%B5%9C%E3%81%AB%E3%81%91', '2011-08-27',
    '道の駅美良布', 'Michinoeki Birafu, Kami'
  ),
  'ザ・シックスダイアリーかほくホテルアンドリゾート': sourcePhoto(
    'kami-stay-sixthdiary.jpg',
    'ザ・シックスダイアリーかほくホテルアンドリゾートの客室写真',
    'ザ・シックスダイアリーかほくホテルアンドリゾート room photo',
    'https://travel.rakuten.co.jp/HOTEL/172327/172327.html',
    '楽天トラベル'
  ),
  '物部川のほとりの温泉宿　夢の温泉': sourcePhoto(
    'kami-stay-yumenoyu.jpg',
    '物部川のほとりの温泉宿　夢の温泉の客室写真',
    '物部川のほとりの温泉宿　夢の温泉 room photo',
    'https://travel.rakuten.co.jp/HOTEL/13467/13467.html',
    '楽天トラベル'
  ),
  '癒しの湯宿　龍河温泉': sourcePhoto(
    'kami-stay-ryuga.jpg',
    '癒しの湯宿　龍河温泉の客室写真',
    '癒しの湯宿　龍河温泉 room photo',
    'https://travel.rakuten.co.jp/HOTEL/13810/13810.html',
    '楽天トラベル'
  ),
  'ほっと平山': sourcePhoto(
    'kami-stay-hottohira.jpg',
    'ほっと平山の客室写真',
    'ほっと平山 room photo',
    'https://travel.rakuten.co.jp/HOTEL/153431/153431.html',
    '楽天トラベル'
  ),
  '湖畔遊': sourcePhoto(
    'kami-stay-kohanyu.jpg',
    '湖畔遊の客室写真',
    '湖畔遊 room photo',
    'https://travel.rakuten.co.jp/HOTEL/173097/173097.html',
    '楽天トラベル'
  ),
  'ａｈａｃｃｏ　びらふ': sourcePhoto(
    'kami-stay-ahacco.jpg',
    'ａｈａｃｃｏ　びらふの客室写真',
    'ａｈａｃｃｏ　びらふ room photo',
    'https://travel.rakuten.co.jp/HOTEL/194298/194298.html',
    '楽天トラベル'
  ),
  'TOSACO TAP STAND': sourcePhoto('kami-39008143-dish.jpg', 'TOSACO TAP STANDの料理写真', 'TOSACO TAP STAND food photo', TABELOG_39008143, '食べログ'),
  '手打ち蕎麦 石州': sourcePhoto('kami-39007373-dish.jpg', '手打ち蕎麦 石州の料理写真', '手打ち蕎麦 石州 food photo', TABELOG_39007373, '食べログ'),
  'さかえ': sourcePhoto('kami-39000067-dish.jpg', 'さかえの料理写真', 'さかえ food photo', TABELOG_39000067, '食べログ'),
  'ラフディップ': sourcePhoto('kami-39006096-dish.jpg', 'ラフディップの料理写真', 'ラフディップ food photo', TABELOG_39006096, '食べログ'),
  '韮生の里 美良布直販店': sourcePhoto('kami-39004843-dish.jpg', '韮生の里 美良布直販店の料理写真', '韮生の里 美良布直販店 food photo', TABELOG_39004843, '食べログ'),
  'まるしん': sourcePhoto('kami-39003705-dish.jpg', 'まるしんの料理写真', 'まるしん food photo', TABELOG_39003705, '食べログ'),
  'いのなかのかわず': sourcePhoto('kami-39007309-dish.jpg', 'いのなかのかわずの料理写真', 'いのなかのかわず food photo', TABELOG_39007309, '食べログ'),
  '大門': sourcePhoto('kami-39002879-dish.jpg', '大門の料理写真', '大門 food photo', TABELOG_39002879, '食べログ'),
  '龍河温泉': sourcePhoto('kami-39000084-dish.jpg', '龍河温泉の料理写真', '龍河温泉 food photo', TABELOG_39000084, '食べログ'),
  'BAKE SHOP ヒジリ': sourcePhoto('kami-39000443-dish.jpg', 'BAKE SHOP ヒジリの料理写真', 'BAKE SHOP ヒジリ food photo', TABELOG_39000443, '食べログ'),
  '平家の茶屋': sourcePhoto('kami-39003676-dish.jpg', '平家の茶屋の料理写真', '平家の茶屋 food photo', TABELOG_39003676, '食べログ'),
  'マリソル': sourcePhoto('kami-39000099-dish.jpg', 'マリソルの料理写真', 'マリソル food photo', TABELOG_39000099, '食べログ'),
  'キッチン 韮生の里': sourcePhoto('kami-39007377-dish.jpg', 'キッチン 韮生の里の料理写真', 'キッチン 韮生の里 food photo', TABELOG_39007377, '食べログ'),
  'ロイヤルニボシコーヒースタンド': sourcePhoto('kami-39006769-dish.jpg', 'ロイヤルニボシコーヒースタンドの料理写真', 'ロイヤルニボシコーヒースタンド food photo', TABELOG_39006769, '食べログ'),
  'リトルガーデン庭園喫茶': sourcePhoto('kami-39002901-dish.jpg', 'リトルガーデン庭園喫茶の料理写真', 'リトルガーデン庭園喫茶 food photo', TABELOG_39002901, '食べログ'),
  '三谷ミート': sourcePhoto('kami-39004104-dish.jpg', '三谷ミートの料理写真', '三谷ミート food photo', TABELOG_39004104, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: KAMI.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: KAMI.sources.accessed};
}

export const KAMI_FACILITIES: readonly FacilityRow[] = [
  sight('kami-sight-01', '香美市立やなせたかし記念館', '高知県香美市香北町美良布1224番地2', null, 'https://ja.wikipedia.org/wiki/%E9%A6%99%E7%BE%8E%E5%B8%82%E7%AB%8B%E3%82%84%E3%81%AA%E3%81%9B%E3%81%9F%E3%81%8B%E3%81%97%E8%A8%98%E5%BF%B5%E9%A4%A8', 33.64769444, 133.78375),
  sight('kami-sight-02', '龍河洞', '高知県香美市土佐山田町逆川1424', '0887-53-2144', 'https://ja.wikipedia.org/wiki/%E9%BE%8D%E6%B2%B3%E6%B4%9E', 33.60316389, 133.74517778),
  sight('kami-sight-03', '土佐山田駅', '高知県香美市土佐山田町東本町1丁目', null, 'https://ja.wikipedia.org/wiki/%E5%9C%9F%E4%BD%90%E5%B1%B1%E7%94%B0%E9%A7%85', 33.60713333, 133.68504722),
  sight('kami-sight-04', '大川上美良布神社', '高知県香美市香北町韮生野243', null, 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%B7%9D%E4%B8%8A%E7%BE%8E%E8%89%AF%E5%B8%83%E7%A5%9E%E7%A4%BE', 33.65, 133.78361111),
  sight('kami-sight-05', 'べふ峡', '高知県香美市物部町別府', null, 'https://www.city.kami.lg.jp/map/befukyo.html', 33.773186, 134.030229),
  sight('kami-sight-06', '繁藤駅', '高知県香美市土佐山田町繁藤', null, 'https://ja.wikipedia.org/wiki/%E7%B9%81%E8%97%A4%E9%A7%85', 33.68038056, 133.69007222),
  sight('kami-experience-01', '道の駅美良布', '高知県香美市香北町美良布1219-1', null, 'https://ja.wikipedia.org/wiki/%E9%81%93%E3%81%AE%E9%A7%85%E7%BE%8E%E8%89%AF%E5%B8%83', 33.64811, 133.78253)
];
