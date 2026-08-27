/**
 * Mima City sourced facts. Every numeric claim is dated and cited.
 * Do not mix register, pamphlet, and census universes.
 * Compiled from /workspace/p1/mima-city-factpack.md (accessed 2026-08-25).
 */

export const MIMA = {
  nameJa: '美馬市',
  nameEn: 'Mima City',
  reading: 'みまし',
  prefectureJa: '徳島県',
  prefectureEn: 'Tokushima',
  prefectureSlug: 'tokushima',
  slug: 'mima',
  jis: '36207',
  jlis: '362077',
  sameAs: 'https://www.city.mima.lg.jp/',
  catchphrase: '四国のまほろば 美馬市',
  areaKm2: 367.14,
  hall: {
    postalCode: '777-8577',
    addressJa: '徳島県美馬市穴吹町穴吹字九反地5番地',
    addressEn: '5 Kutanchi, Anabuki, Anabuki-cho, Mima, Tokushima 777-8577, Japan',
    phone: '0883-52-1212'
  },
  merger: {
    date: '2005-03-01',
    eraJa: '平成17年3月1日',
    formerJa: '脇町・美馬町・穴吹町・木屋平村',
    formerEn: 'Waki-cho, Mima-cho, Anabuki-cho, and Koyadaira-son'
  },
  population: {
    juki: {
      value: 25313,
      households: 12318,
      asOf: '2026-07-01',
      asOfJa: '令和8年7月1日',
      labelJa: '住民基本台帳（市発表）',
      labelEn: 'Basic resident register (city)',
      url: 'https://www.city.mima.lg.jp/gyosei/docs/mimashizinkousetai.html'
    },
    census2025: {
      value: 25519,
      households: 10863,
      asOf: '2025-10-01',
      asOfJa: '令和7年10月1日',
      labelJa: '令和7年国勢調査 人口速報集計',
      labelEn: '2025 census preliminary count',
      url: 'https://www.e-stat.go.jp/stat-search/files?stat_infid=000040454825&tclass1=000001232201&tclass2=000001232202&toukei=00200521&tstat=000001230925'
    },
    pamphlet: {
      value: 26045,
      asOf: '2025-04-01',
      asOfJa: '令和7年4月1日',
      labelJa: '美馬・移住ガイドブック（令和7年6月版）',
      labelEn: 'Mima migration guidebook (June 2025 edition)',
      url: 'https://www.city.mima.lg.jp/fs/2/9/1/5/0/4/_/____________7______.pdf'
    },
    census2020: {
      value: 28055,
      asOf: '2020-10-01',
      asOfJa: '令和2年10月1日',
      labelJa: '令和2年国勢調査',
      labelEn: '2020 census',
      url: 'https://www.e-stat.go.jp/stat-search/files?stat_infid=000040454825&tclass1=000001232201&tclass2=000001232202&toukei=00200521&tstat=000001230925'
    }
  },
  sources: {
    overview: 'https://www.city.mima.lg.jp/gyosei/docs/shinogaiyou.html',
    hall: 'https://www.city.mima.lg.jp/gyosei/docs/23796.html',
    shisei: 'https://www.city.mima.lg.jp/gyosei/docs/2312163.html',
    gsiArea: 'https://www.gsi.go.jp/KOKUJYOHO/MENCHO/backnumber/GSI-menseki20250401.pdf',
    jlis: 'https://www.j-lis.go.jp/spd/code-address/shikoku/cms_15714186.html',
    accessed: '2026-08-25'
  }
} as const;


export type MimaPlacePhoto = {
  src: string;
  commons: string;
  license: string;
  licenseUrl: string;
  author: string;
  authorUrl: string;
  taken: string;
  accessed: string;
  altJa: string;
  altEn: string;
};

export const MIMA_PLACE_PHOTO = {
  src: '/explorejapan/media/wakimachi-minami-machi-20250828.jpg',
  commons: 'https://commons.wikimedia.org/wiki/File:Wakimati_minamimati_20250828_2.jpg',
  license: 'CC0 1.0',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  author: 'Araiyasushige',
  authorUrl: 'https://commons.wikimedia.org/wiki/User:Araiyasushige',
  taken: '2025-08-28',
  accessed: '2026-08-26',
  altJa: '脇町南町（うだつの町並み）',
  altEn: 'Wakimachi Minami-machi (Udatsu townscape)'
} as const satisfies MimaPlacePhoto;

const YOSHIDA_PHOTO = {
  src: '/explorejapan/media/yoshida-ke-jutaku-20121212.jpg',
  commons: 'https://commons.wikimedia.org/wiki/File:吉田家住宅.jpg',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  author: 'バリーさん',
  authorUrl: 'https://commons.wikimedia.org/wiki/User:バリーさん',
  taken: '2012-12-12',
  accessed: '2026-08-27',
  altJa: '吉田家住宅（美馬市脇町）',
  altEn: 'Yoshida House, Wakimachi, Mima'
} as const satisfies MimaPlacePhoto;

const YOSHINOGAWA_PHOTO = {
  src: '/explorejapan/media/yoshinogawa-anabuki-mima-20080226.jpg',
  commons:
    'https://commons.wikimedia.org/wiki/File:Rivieren_de_Yoshino_en_Anabuki_in_Mima,_Tokushima,_Japan.jpg',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  author: 'Mima City Hall',
  authorUrl: 'https://www.city.mima.lg.jp/',
  taken: '2008-02-26',
  accessed: '2026-08-27',
  altJa: '吉野川と穴吹川（美馬市）',
  altEn: 'Yoshino and Anabuki rivers in Mima'
} as const satisfies MimaPlacePhoto;


const IKEZUKI_PHOTO = {
  src: '/explorejapan/media/ikezuki-park-mima-20091129.jpg',
  commons:
    'https://commons.wikimedia.org/wiki/File:Ikezuki_Park,_Mima_Town,_Mima_City,_Tokushima,_Japan.JPG',
  license: 'CC BY 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  author: 'Brianmima',
  authorUrl: 'https://commons.wikimedia.org/wiki/User:Brianmima',
  taken: '2009-11-29',
  accessed: '2026-08-27',
  altJa: '池月公園（美馬市美馬町）',
  altEn: 'Ikezuki Park, Mima Town, Mima'
} as const satisfies MimaPlacePhoto;

const MIKI_PHOTO = {
  src: '/explorejapan/media/miki-ke-jutaku-koyadaira-20091207.jpg',
  commons: 'https://commons.wikimedia.org/wiki/File:Miki_Residence,_Mima_City,_Koyadaira.JPG',
  license: 'CC BY 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  author: 'Brianmima',
  authorUrl: 'https://commons.wikimedia.org/wiki/User:Brianmima',
  taken: '2009-12-07',
  accessed: '2026-08-27',
  altJa: '三木家住宅（美馬市木屋平）',
  altEn: 'Miki Residence, Koyadaira, Mima'
} as const satisfies MimaPlacePhoto;

const BLUE_VILLA_PHOTO = {
  src: '/explorejapan/media/blue-villa-anabuki-20210725.jpg',
  commons: 'https://commons.wikimedia.org/wiki/File:Blue_Villa_Anabuki.jpeg',
  license: 'CC0 1.0',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  author: 'Sorrysorry',
  authorUrl: 'https://commons.wikimedia.org/wiki/User:Sorrysorry',
  taken: '2021-07-25',
  accessed: '2026-08-27',
  altJa: 'ブルーヴィラあなぶき（美馬市穴吹町口山）',
  altEn: 'Blue Villa Anabuki, Kuchiyama, Anabuki, Mima'
} as const satisfies MimaPlacePhoto;

const TAOKA_PHOTO = {
  src: '/explorejapan/media/kappo-ryokan-taoka-202208.jpg',
  commons: 'https://commons.wikimedia.org/wiki/File:Kappo_Ryokan_Taoka_ac_(1).jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  author: 'Asturio Cantabrio',
  authorUrl: 'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
  taken: '2022-08',
  accessed: '2026-08-27',
  altJa: '割烹旅館田岡（美馬市脇町）',
  altEn: 'Kappo Ryokan Taoka, Wakimachi, Mima'
} as const satisfies MimaPlacePhoto;

const TSURUGI_YU_PHOTO = {
  src: '/explorejapan/media/tsurugi-no-yu-ozakura-20091207.jpg',
  commons:
    'https://commons.wikimedia.org/wiki/File:Tsurugi_no_yu_(onsen),_Mima_City,_Koyadaira.JPG',
  license: 'CC BY 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  author: 'Brianmima',
  authorUrl: 'https://commons.wikimedia.org/wiki/User:Brianmima',
  taken: '2009-12-07',
  accessed: '2026-08-27',
  altJa: 'つるぎの湯 大桜（美馬市木屋平）',
  altEn: 'Tsurugi-no-yu Ozakura onsen, Koyadaira, Mima'
} as const satisfies MimaPlacePhoto;
/** Exact pack name_ja → verified Commons/official file. Placeholders stay if absent. */
export const MIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  'うだつの町並み': MIMA_PLACE_PHOTO,
  '吉田家住宅': YOSHIDA_PHOTO,
  '吉野川、藍、うだつ': YOSHINOGAWA_PHOTO,
  '名馬「池月」伝説': IKEZUKI_PHOTO,
  '三木家住宅': MIKI_PHOTO,
  '三木家住宅（みきけじゅうたく） 〔国指定重要文化財〕': MIKI_PHOTO,
  'ブルーヴィラあなぶき': BLUE_VILLA_PHOTO,
  '割烹旅館田岡': TAOKA_PHOTO,
  'つるぎの湯 大桜': TSURUGI_YU_PHOTO,
};

export const N03_CITATION = {
  productJa:
    '「国土数値情報（行政区域データ）」（国土交通省）を加工して作成',
  productEn:
    'Prepared by processing National Land Numerical Information (Administrative Zones) of the Ministry of Land, Infrastructure, Transport and Tourism',
  url: 'https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2026.html',
  vintage: 'N03-20260101',
  license: 'CC BY 4.0',
  gsiNote:
    '測量法に基づく国土地理院長承認（複製）R 7JHf 351。二次利用には国土地理院への申請が必要な場合があります。'
} as const;

export const BASE_PATH = '/explorejapan';
export const SITE_URL = process.env.SITE_URL ?? 'https://explorejapan-p1.github.io/explorejapan';
