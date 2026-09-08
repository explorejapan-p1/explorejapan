/**
 * Mihara Village sourced facts. Do not invent population.
 * Hall / JIS from village HP / JIS X 0402 / Wikipedia 三原村 (accessed 2026-09-08). JIS 39427. Thirty-second Kochi hub after …大月町 (佐川町・田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + yamabiko stay. Stay: 農家民宿 森本まる washitsu with stacked futons (official やまびこ stay page photo). Onsen: 0 (stay≠onsen). Shop/commerce honest 0. Dining honest 1 (thin).
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const MIHARA = {
  nameJa: '三原村',
  nameEn: 'Mihara',
  reading: 'みはらむら',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'mihara',
  jis: '39427',
  jlis: '394271',
  sameAs: 'https://www.vill.mihara.kochi.jp/',
  hall: {
    postalCode: '787-0892',
    addressJa: '高知県幡多郡三原村来栖野346',
    addressEn: '346 Kurusuno, Mihara Village, Hata District, Kochi 787-0892, Japan',
    phone: '0880-46-2111'
  },
  sources: {
    home: 'https://www.vill.mihara.kochi.jp/',
    hall: 'https://www.vill.mihara.kochi.jp/',
    kanko: 'https://www.vill.mihara.kochi.jp/kanko/',
    yamabikoStay: 'https://mihara-yamabiko.com/stay/',
    hoshigaoka: 'https://commons.wikimedia.org/wiki/File:%E9%AB%98%E7%9F%A5%E7%9C%8C%E4%B8%89%E5%8E%9F%E6%9D%91_%E6%98%9F%E3%83%B6%E4%B8%98%E5%85%AC%E5%9C%92.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39427/rstLst/',
    accessed: '2026-09-08'
  }
} as const;

export const MIHARA_EXPECTED_ROW_COUNT = 3;
export const MIHARA_EXPECTED_GEO_COUNT = 3;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Hoshigaoka Park. Hero title remains municipality name only. */
export const MIHARA_PLACE_PHOTO = wikiPhoto(
  'mihara-cover-hoshigaoka.jpg',
  'https://commons.wikimedia.org/wiki/File:%E9%AB%98%E7%9F%A5%E7%9C%8C%E4%B8%89%E5%8E%9F%E6%9D%91_%E6%98%9F%E3%83%B6%E4%B8%98%E5%85%AC%E5%9C%92.jpg',
  'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
  'Lumi iori', 'https://commons.wikimedia.org/wiki/User:Lumi_iori', '2019-06-15',
  '星ヶ丘公園', 'Hoshigaoka Park'
);

const TABELOG_39006162 = 'https://tabelog.com/kochi/A3904/A390403/39006162/';
const YAMABIKO_STAY = 'https://mihara-yamabiko.com/stay/';

export const MIHARA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '星ヶ丘公園': MIHARA_PLACE_PHOTO,
  '五社神社': wikiPhoto(
    'mihara-gosha.jpg',
    'https://commons.wikimedia.org/wiki/File:Gosha_shrine_mihara_village.jpg',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'Lumi iori', 'https://commons.wikimedia.org/wiki/User:Lumi_iori', '2019-06-15',
    '五社神社', 'Gosha Shrine'
  ),
  '三原村役場': wikiPhoto(
    'mihara-village-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Mihara_village_hall.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', 'https://commons.wikimedia.org/wiki/File:Mihara_village_hall.JPG', '2014-04-28',
    '三原村役場', 'Mihara Village Hall'
  ),
  '農家民宿 森本まる': sourcePhoto(
    'mihara-stay-morimotomaru.jpg',
    '農家民宿森本まるの和室（布団）客室写真',
    'Farmstay Morimoto Maru washitsu with futons',
    YAMABIKO_STAY,
    '三原村集落活動センターやまびこ'
  ),
  'やまびこカフェ': sourcePhoto(
    'mihara-39006162-dish.jpg',
    'やまびこカフェの料理写真',
    'Yamabiko Cafe food photo',
    TABELOG_39006162,
    '食べログ'
  ),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: MIHARA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '村公式・公式観光サイト掲載情報', accessed: MIHARA.sources.accessed};
}

export const MIHARA_FACILITIES: readonly FacilityRow[] = [
  sight('mihara-sight-01', '星ヶ丘公園', '高知県幡多郡三原村宮ノ川1271', '0880-46-2111', 'https://commons.wikimedia.org/wiki/File:%E9%AB%98%E7%9F%A5%E7%9C%8C%E4%B8%89%E5%8E%9F%E6%9D%91_%E6%98%9F%E3%83%B6%E4%B8%98%E5%85%AC%E5%9C%92.jpg', 32.9227824, 132.8416404),
  sight('mihara-sight-02', '五社神社', '高知県幡多郡三原村宮ノ川1009-1', null, 'https://commons.wikimedia.org/wiki/File:Gosha_shrine_mihara_village.jpg', 32.9222701, 132.8464644),
  sight('mihara-sight-03', '三原村役場', '高知県幡多郡三原村来栖野346', '0880-46-2111', 'https://commons.wikimedia.org/wiki/File:Mihara_village_hall.JPG', 32.90609, 132.84725)
];
