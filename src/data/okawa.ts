/**
 * Okawa Village sourced facts. Do not invent population.
 * Hall / JIS from village HP / JIS X 0402 (accessed 2026-09-08). JIS 39364. Twenty-third Kochi hub after 高知市・南国市・香南市・香美市・いの町・安芸市・室戸市・土佐市・須崎市・四万十市・土佐清水市・宿毛市・黒潮町・東洋町・奈半利町・安田町・芸西村・北川村・馬路村・本山町・大豊町・土佐町 (田野町 deferred: no attributable stay room still).
 * No frozen pack — photo-only tourism + Tabelog dining + Rakuten stay. Stay: 自然王国 白滝の里 教室タイプ LARGE (noplan-k1 → mediaInfo「教室」cat 00000001). Onsen: 0 (stay≠onsen). Shop/commerce honest 0. Dining honest thin 1.
 */
import type {FacilityRow} from './facility-schema';
import type {MimaPlacePhoto} from './mima';

export const OKAWA = {
  nameJa: '大川村',
  nameEn: 'Okawa',
  reading: 'おおかわむら',
  prefectureJa: '高知県',
  prefectureEn: 'Kochi',
  prefectureSlug: 'kochi',
  slug: 'okawa',
  jis: '39364',
  jlis: '393640',
  sameAs: 'https://www.vill.okawa.kochi.jp/',
  hall: {
    postalCode: '781-3703',
    addressJa: '高知県土佐郡大川村小松27-1',
    addressEn: '27-1 Komatsu, Okawa Village, Tosa District, Kochi 781-3703, Japan',
    phone: '0887-84-2211'
  },
  sources: {
    home: 'https://www.vill.okawa.kochi.jp/',
    hall: 'https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%B7%9D%E6%9D%91',
    kankou: 'https://www.vill.okawa.kochi.jp/life/dtl.php?hdnKey=1216',
    kogane: 'https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E9%87%91%E6%BB%9D_-_panoramio.jpg',
    tabelogCity: 'https://tabelog.com/kochi/C39364/rstLst/',
    shirataki: 'https://travel.rakuten.co.jp/HOTEL/16467/16467.html',
    accessed: '2026-09-08'
  }
} as const;

export const OKAWA_EXPECTED_ROW_COUNT = 5;
export const OKAWA_EXPECTED_GEO_COUNT = 5;

function wikiPhoto(
  file: string, commons: string, license: string, licenseUrl: string,
  author: string, authorUrl: string, taken: string, altJa: string, altEn: string
): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons, license, licenseUrl, author, authorUrl, taken, accessed:'2026-09-08', altJa, altEn};
}
function sourcePhoto(file: string, altJa: string, altEn: string, page: string, author: string): MimaPlacePhoto {
  return {src:`/explorejapan/media/${file}`, commons:page, license:'出典', licenseUrl:page, author, authorUrl:page, taken:'2026', accessed:'2026-09-08', altJa, altEn};
}

/** Cover: Kogane Falls. Hero title remains municipality name only. */
export const OKAWA_PLACE_PHOTO = wikiPhoto(
  'okawa-cover-kogane.jpg',
  'https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E9%87%91%E6%BB%9D_-_panoramio.jpg',
  'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
  'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E9%87%91%E6%BB%9D_-_panoramio.jpg', '2014-04-06',
  '小金滝', 'Kogane Falls'
);

const TABELOG_39006661 = 'https://tabelog.com/kochi/A3901/A390104/39006661/';
const RAKUTEN_16467 = 'https://travel.rakuten.co.jp/HOTEL/16467/16467.html';

export const OKAWA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  '小金滝': OKAWA_PLACE_PHOTO,
  '大川村役場': wikiPhoto(
    'okawa-town-hall.jpg',
    'https://commons.wikimedia.org/wiki/File:Okawa_village_hall.JPG',
    'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0',
    'アラツク', 'https://commons.wikimedia.org/wiki/User:%E3%82%A2%E3%83%A9%E3%83%84%E3%82%AF', '2014-04-28',
    '大川村役場', 'Okawa Village Hall'
  ),
  '村のえき': wikiPhoto(
    'okawa-mura-no-eki.jpg',
    'https://commons.wikimedia.org/wiki/File:%E6%9D%91%E3%81%AE%E3%81%88%E3%81%8D_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E6%9D%91%E3%81%AE%E3%81%88%E3%81%8D_-_panoramio.jpg', '2014-04-06',
    '村のえき', 'Mura-no-eki (Yui-no-sato)'
  ),
  '翁の滝': wikiPhoto(
    'okawa-okina-falls.jpg',
    'https://commons.wikimedia.org/wiki/File:%E7%BF%81%E3%81%AE%E6%BB%9D_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'ball banban', 'https://commons.wikimedia.org/wiki/File:%E7%BF%81%E3%81%AE%E6%BB%9D_-_panoramio.jpg', '2010-05-23',
    '翁の滝', 'Okina Falls'
  ),
  '自然王国白滝の里': wikiPhoto(
    'okawa-shirataki-camp.jpg',
    'https://commons.wikimedia.org/wiki/File:%E8%87%AA%E7%84%B6%E7%8E%8B%E5%9B%BD_%E7%99%BD%E6%BB%9D%E3%81%AE%E9%87%8C%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4_-_panoramio.jpg',
    'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0',
    'r18 INO (PACHIMO)', 'https://commons.wikimedia.org/wiki/File:%E8%87%AA%E7%84%B6%E7%8E%8B%E5%9B%BD_%E7%99%BD%E6%BB%9D%E3%81%AE%E9%87%8C%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4_-_panoramio.jpg', '2014-04-06',
    '自然王国白滝の里', 'Shirataki-no-Sato Nature Kingdom'
  ),
  '自然王国 白滝の里': sourcePhoto(
    'okawa-stay-shirataki.jpg',
    '自然王国白滝の里の教室タイプ客室写真',
    'Shirataki-no-Sato classroom-type guest-room photo',
    RAKUTEN_16467,
    '楽天トラベル'
  ),
  '結いの里': sourcePhoto('okawa-39006661-dish.jpg', '結いの里の料理写真', 'Yui-no-sato food photo', TABELOG_39006661, '食べログ'),
};

function sight(id: string, name_ja: string, address: string | null, phone: string | null, source_url: string, lat: number, lon: number): FacilityRow {
  return {id, jis: OKAWA.jis, name_ja, reading: null, category: 'tourism', lat, lon, address, phone, official_url: source_url, hours: null, source_url, license: '市公式・公式観光サイト掲載情報', accessed: OKAWA.sources.accessed};
}

export const OKAWA_FACILITIES: readonly FacilityRow[] = [
  sight('okawa-sight-01', '小金滝', '高知県土佐郡大川村川崎・高野', null, 'https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E9%87%91%E6%BB%9D_-_panoramio.jpg', 33.789689, 133.422472),
  sight('okawa-sight-02', '大川村役場', '高知県土佐郡大川村小松27-1', '0887-84-2211', 'https://commons.wikimedia.org/wiki/File:Okawa_village_hall.JPG', 33.7839842, 133.4666395),
  sight('okawa-sight-03', '村のえき', '高知県土佐郡大川村船戸239', '0887-84-2233', 'https://commons.wikimedia.org/wiki/File:%E6%9D%91%E3%81%AE%E3%81%88%E3%81%8D_-_panoramio.jpg', 33.782264, 133.474597),
  sight('okawa-sight-04', '翁の滝', '高知県土佐郡大川村朝谷', null, 'https://commons.wikimedia.org/wiki/File:%E7%BF%81%E3%81%AE%E6%BB%9D_-_panoramio.jpg', 33.81752, 133.440135),
  sight('okawa-sight-05', '自然王国白滝の里', '高知県土佐郡大川村朝谷26', '0887-84-2201', 'https://commons.wikimedia.org/wiki/File:%E8%87%AA%E7%84%B6%E7%8E%8B%E5%9B%BD_%E7%99%BD%E6%BB%9D%E3%81%AE%E9%87%8C%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4_-_panoramio.jpg', 33.818783, 133.463839)
];
