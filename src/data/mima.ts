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

const TSURUGISAN_HUTTE_PHOTO = {
  src: '/explorejapan/media/tsurugisan-chojo-hutte-20060727.jpg',
  commons: 'https://commons.wikimedia.org/wiki/File:TSURUGISAN-CHOJO-HUTTE.JPG',
  license: 'CC BY 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  author: 'Bergmann',
  authorUrl: 'https://commons.wikimedia.org/wiki/User:Bergmann',
  taken: '2006-07-27',
  accessed: '2026-08-27',
  altJa: '剣山頂上ヒュッテ（美馬市）',
  altEn: 'Tsurugisan Chojo Hutte, Mima'
} as const satisfies MimaPlacePhoto;

const GOURMET_PAGE = 'https://mimakankou.or.jp/gourmet/';
const HOTEL_PAGE = 'https://mimakankou.or.jp/hoteltop/';

function bureauPhoto(
  file: string,
  taken: string,
  altJa: string,
  altEn: string,
  page: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons: page,
    license: '出典',
    licenseUrl: page,
    author: '美馬観光ビューロー',
    authorUrl: page,
    taken,
    accessed: '2026-08-27',
    altJa,
    altEn
  };
}


function cityPhoto(
  file: string,
  altJa: string,
  altEn: string,
  page: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons: page,
    license: '出典',
    licenseUrl: page,
    author: '美馬市',
    authorUrl: page,
    taken: '2026',
    accessed: '2026-08-27',
    altJa,
    altEn
  };
}


function wikiPhoto(
  file: string,
  commons: string,
  license: string,
  licenseUrl: string,
  author: string,
  authorUrl: string,
  taken: string,
  altJa: string,
  altEn: string
): MimaPlacePhoto {
  return {
    src: `/explorejapan/media/${file}`,
    commons,
    license,
    licenseUrl,
    author,
    authorUrl,
    taken,
    accessed: '2026-08-27',
    altJa,
    altEn
  };
}

export function isCommonsPhoto(photo: MimaPlacePhoto): boolean {
  return photo.commons.includes('wikimedia.org');
}

/** Exact pack/travel name_ja → verified Commons or bureau file. Placeholders stay if absent. */
export const MIMA_SIGHT_PHOTOS: Readonly<Record<string, MimaPlacePhoto>> = {
  'うだつの町並み': MIMA_PLACE_PHOTO,
  '吉田家住宅': YOSHIDA_PHOTO,
  '吉野川、藍、うだつ': YOSHINOGAWA_PHOTO,
  '名馬「池月」伝説': IKEZUKI_PHOTO,
  '三木家住宅': MIKI_PHOTO,
  '三木家住宅（みきけじゅうたく） 〔国指定重要文化財〕': MIKI_PHOTO,
  'ブルーヴィラあなぶき': bureauPhoto(
    'blue-villa-anabuki-dish.jpg',
    '2024',
    'ブルーヴィラあなぶき 阿波尾鶏の天丼（美馬市）',
    'Blue Villa Anabuki tendon set, Mima',
    GOURMET_PAGE
  ),
  '割烹旅館田岡': bureauPhoto(
    'kappo-ryokan-taoka-dish.jpg',
    '2024',
    '割烹旅館田岡 田岡御膳（美馬市）',
    'Kappo Ryokan Taoka celebratory meal, Mima',
    GOURMET_PAGE
  ),
  'うだつ emon 茶房': bureauPhoto(
    'udatsu-emon-sabo.jpg',
    '2020',
    'うだつ emon 茶房（美馬市）',
    'Udatsu emon sabo cafe, Mima',
    GOURMET_PAGE
  ),
  'Cafe角屋': bureauPhoto(
    'cafe-kadoya.jpg',
    '2022',
    'Cafe角屋（美馬市）',
    'Cafe Kadoya, Mima',
    GOURMET_PAGE
  ),
  '茶里庵(さりあん）': bureauPhoto(
    'sarian.jpg',
    '2020',
    '茶里庵(さりあん）（美馬市）',
    'Sarian restaurant, Mima',
    GOURMET_PAGE
  ),
  '二代目 天竜': bureauPhoto(
    'nidaime-tenryu.jpg',
    '2026',
    '二代目 天竜（美馬市）',
    'Nidaime Tenryu ramen, Mima',
    GOURMET_PAGE
  ),
  'プランタン': bureauPhoto(
    'plantan.jpg',
    '2021',
    'プランタン（美馬市）',
    'Plantan cafe, Mima',
    GOURMET_PAGE
  ),
  'PUNTA': bureauPhoto(
    'punta.jpg',
    '2021',
    'PUNTA（美馬市）',
    'PUNTA Italian restaurant, Mima',
    GOURMET_PAGE
  ),
  '四季料理 森友': bureauPhoto(
    'shiki-moritomo.jpg',
    '2021',
    '四季料理 森友（美馬市）',
    'Shiki ryori Moritomo, Mima',
    GOURMET_PAGE
  ),
  '皿そば楽庵': bureauPhoto(
    'sara-soba-raku-an.jpg',
    '2022',
    '皿そば楽庵（美馬市）',
    'Sara-soba Raku-an, Mima',
    GOURMET_PAGE
  ),
  '道の駅 藍蔵': bureauPhoto(
    'michi-no-eki-aizo.jpg',
    '2020',
    '道の駅 藍蔵（美馬市）',
    'Michi-no-eki Aizo, Mima',
    GOURMET_PAGE
  ),
  '和ぁさん家': bureauPhoto(
    'waasan-ya.jpg',
    '2024',
    '和ぁさん家（美馬市）',
    'Waasan-ya, Mima',
    GOURMET_PAGE
  ),
  'つるぎの湯 大桜': cityPhoto(
    'tsurugi-no-yu-bath.jpg',
    'つるぎの湯 大桜 浴室（美馬市木屋平）',
    'Tsurugi-no-yu Ozakura bath, Koyadaira, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4041.html'
  ),
  '美馬市伝統工芸体験館 美来工房': cityPhoto(
    'mirai-koubou-activity.jpg',
    '美馬市伝統工芸体験館 美来工房 和傘づくり（美馬市）',
    'Mirai Kobo traditional umbrella workshop, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11492.html'
  ),
  '剣山頂上ヒュッテ': TSURUGISAN_HUTTE_PHOTO,
  'ADLIV': bureauPhoto(
    'adliv.jpg',
    '2021',
    'ADLIV（美馬市脇町）',
    'ADLIV lodging, Wakimachi, Mima',
    HOTEL_PAGE
  ),
  'オートキャンプ場 四国三郎の郷': bureauPhoto(
    'shikoku-saburo-no-sato.jpg',
    '2020',
    'オートキャンプ場 四国三郎の郷（美馬市）',
    'Shikoku Saburo no Sato auto campground, Mima',
    HOTEL_PAGE
  ),
  '清月屋敷': bureauPhoto(
    'seigetsu-yashiki.jpg',
    '2021',
    '清月屋敷（美馬市穴吹町）',
    'Seigetsu Yashiki, Anabuki, Mima',
    HOTEL_PAGE
  ),
  'ビジネスホテル稲田苑': bureauPhoto(
    'business-hotel-inadaen.jpg',
    '2020',
    'ビジネスホテル稲田苑（美馬市脇町）',
    'Business Hotel Inadaen, Wakimachi, Mima',
    HOTEL_PAGE
  ),
  'ビジネスホテルマツカ': bureauPhoto(
    'business-hotel-matsuka.jpg',
    '2020',
    'ビジネスホテルマツカ（美馬市脇町）',
    'Business Hotel Matsuka, Wakimachi, Mima',
    HOTEL_PAGE
  ),
  'Paysage Moriguchi': bureauPhoto(
    'paysage-moriguchi.jpg',
    '2021',
    'Paysage Moriguchi（美馬市脇町）',
    'Paysage Moriguchi, Wakimachi, Mima',
    HOTEL_PAGE
  ),
  '樺太開拓の志士・岡本監輔': cityPhoto(
    'mima-kanko-11490.jpg',
    '樺太開拓の志士・岡本監輔（美馬市）',
    '樺太開拓の志士・岡本監輔, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11490.html'
  ),
  '三木家資料館': cityPhoto(
    'mima-kanko-11496.jpg',
    '三木家資料館（美馬市）',
    '三木家資料館, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11496.html'
  ),
  '美馬市観光交流センター': cityPhoto(
    'mima-kanko-11508.jpg',
    '美馬市観光交流センター（美馬市）',
    '美馬市観光交流センター, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11508.html'
  ),
  '美馬市観光交流センター（うだつの町並み）': cityPhoto(
    'mima-kanko-11508.jpg',
    '美馬市観光交流センター（うだつの町並み）（美馬市）',
    '美馬市観光交流センター（うだつの町並み）, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11508.html'
  ),
  '民俗資料館（休館中）': cityPhoto(
    'mima-kanko-11498.jpg',
    '民俗資料館（休館中）（美馬市）',
    '民俗資料館（休館中）, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11498.html'
  ),
  '天神ザクラ・世の中ザクラ': cityPhoto(
    'mima-kanko-11501.jpg',
    '天神ザクラ・世の中ザクラ（美馬市）',
    '天神ザクラ・世の中ザクラ, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11501.html'
  ),
  '白人神社': cityPhoto(
    'mima-kanko-11502.jpg',
    '白人神社（美馬市）',
    '白人神社, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11502.html'
  ),
  '三島古墳群': cityPhoto(
    'mima-kanko-11504.jpg',
    '三島古墳群（美馬市）',
    '三島古墳群, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11504.html'
  ),
  '本楽寺': wikiPhoto(
    'honrakuji-mima-20211006.jpg',
    'https://commons.wikimedia.org/wiki/File:Honrakuji.jpeg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2021-10-06',
    '本楽寺（美馬市穴吹町三島）',
    'Honrakuji temple, Anabuki Mishima, Mima'
  ),
  'デ・レイケの堰堤／デ・レイケ公園': wikiPhoto(
    'de-rijke-dam-mima-20080710.jpg',
    'https://commons.wikimedia.org/wiki/File:De_Rijke_Dam_in_Mima_City,_Tokushima,_Japan.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Mima City Hall',
    'https://www.city.mima.lg.jp/',
    '2008-07-10',
    'デ・レイケの堰堤（美馬市）',
    'De Rijke dam, Mima'
  ),
  '最明寺': wikiPhoto(
    'saimyo-temple-mima-20080730.jpg',
    'https://commons.wikimedia.org/wiki/File:Saimyō_Temple.JPG',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2008-07-30',
    '最明寺（美馬市）',
    'Saimyoji temple, Mima'
  ),
  'あんみつ館': cityPhoto(
    'mima-kanko-11512.jpg',
    'あんみつ館（美馬市）',
    'あんみつ館, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11512.html'
  ),
  '三味線もちつき': cityPhoto(
    'mima-kanko-11514.jpg',
    '三味線もちつき（美馬市）',
    '三味線もちつき, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11514.html'
  ),
  '寺町': cityPhoto(
    'mima-kanko-11519.jpg',
    '寺町（美馬市）',
    '寺町, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11519.html'
  ),
  '寺町 - 常念寺': cityPhoto(
    'mima-kanko-11520.jpg',
    '寺町 - 常念寺（美馬市）',
    '寺町 - 常念寺, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11520.html'
  ),
  '寺町 - 安楽寺': wikiPhoto(
    'anraku-ji-mima-20120827.jpg',
    'https://commons.wikimedia.org/wiki/File:Anraku_Tempel.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2012-08-27',
    '安楽寺（美馬市）',
    'Anrakuji temple, Mima'
  ),
  '寺町 - 願勝寺': wikiPhoto(
    'gansho-ji-mima-20080321.jpg',
    'https://commons.wikimedia.org/wiki/File:Gansho_Tempel_in_Mima.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2008-03-21',
    '願勝寺（美馬市寺町）',
    'Ganshoji temple, Mima'
  ),
  '寺町 - 西教寺': wikiPhoto(
    'saikyo-ji-mima.jpg',
    'https://commons.wikimedia.org/wiki/File:Saikyō_Tempel.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2012-08-27',
    '西教寺（美馬市）',
    'Saikyoji temple, Mima'
  ),
  '寺町 - 林照寺': wikiPhoto(
    'rinsho-ji-mima-20220107.jpg',
    'https://commons.wikimedia.org/wiki/File:林照寺.jpeg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Sorrysorry',
    'https://commons.wikimedia.org/wiki/User:Sorrysorry',
    '2022-01-07',
    '林照寺（美馬市美馬町）',
    'Rinshoji temple, Mima'
  ),
  '段の塚穴': cityPhoto(
    'mima-kanko-11525.jpg',
    '段の塚穴（美馬市）',
    '段の塚穴, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11525.html'
  ),
  '郡里廃寺跡': cityPhoto(
    'mima-kanko-11527.jpg',
    '郡里廃寺跡（美馬市）',
    '郡里廃寺跡, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11527.html'
  ),
  '青木家住宅': wikiPhoto(
    'aoki-residence-mima-20091202.jpg',
    'https://commons.wikimedia.org/wiki/File:Aoki_Residence,_Mima_Town,_Mima_City,_Tokushima.JPG',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'Brianmima',
    'https://commons.wikimedia.org/wiki/User:Brianmima',
    '2009-12-02',
    '青木家住宅（美馬市美馬町）',
    'Aoki Residence, Mima'
  ),
  '伊射奈美神社': cityPhoto(
    'mima-kanko-11531.jpg',
    '伊射奈美神社（美馬市）',
    '伊射奈美神社, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11531.html'
  ),
  '川井のエドヒガンザクラ': cityPhoto(
    'mima-kanko-11532.jpg',
    '川井のエドヒガンザクラ（美馬市）',
    '川井のエドヒガンザクラ, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11532.html'
  ),
  '脇町劇場': wikiPhoto(
    'wakimachi-gekijo-mima-20070210.jpg',
    'https://commons.wikimedia.org/wiki/File:Wakimachi_gekijou.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'Snap55',
    'https://commons.wikimedia.org/wiki/User:Snap55',
    '2007-02-10',
    '脇町劇場（徳島県美馬市）',
    'Wakimachi Theater, Mima'
  ),
  '美馬市穴吹川観光駐車場': cityPhoto(
    'mima-kanko-11539.jpg',
    '美馬市穴吹川観光駐車場（美馬市）',
    '美馬市穴吹川観光駐車場, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11539.html'
  ),
  '美村総合交流促進施設「美村BASE」': cityPhoto(
    'mima-kanko-1427600.jpg',
    '美村総合交流促進施設「美村BASE」（美馬市）',
    '美村総合交流促進施設「美村BASE」, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/1427600.html'
  ),
  '重清八幡神社': cityPhoto(
    'mima-kanko-1824550.jpg',
    '重清八幡神社（美馬市）',
    '重清八幡神社, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/1824550.html'
  ),
  '三頭神社': cityPhoto(
    'mima-kanko-1825569.jpg',
    '三頭神社（美馬市）',
    '三頭神社, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/1825569.html'
  ),
  '倭大國魂神社': cityPhoto(
    'mima-kanko-1825570.jpg',
    '倭大國魂神社（美馬市）',
    '倭大國魂神社, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/1825570.html'
  ),
  '剣山': cityPhoto(
    'mima-kanko-2759010.jpg',
    '剣山（美馬市）',
    '剣山, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/2759010.html'
  ),
  '旧長岡家住宅': wikiPhoto(
    'nagaoka-ke-jutaku-mima-20250828.jpg',
    'https://commons.wikimedia.org/wiki/File:Nagaokake_zyutaku_20250828_1.jpg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Araiyasushige',
    'https://commons.wikimedia.org/wiki/User:Araiyasushige',
    '2025-08-28',
    '旧長岡家住宅（美馬市）',
    'Old Nagaoka House, Mima'
  ),
  '吉野川': wikiPhoto(
    'yoshino-gawa-anabuki-bridge.jpg',
    'https://commons.wikimedia.org/wiki/File:Yoshino_River_and_Anabuki_Bridge_ac.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Asturio Cantabrio',
    'https://commons.wikimedia.org/wiki/User:Asturio_Cantabrio',
    '2022-08',
    '吉野川（美馬市）',
    'Yoshino River, Mima'
  ),
  '四国三郎の郷': cityPhoto(
    'mima-kanko-3983.jpg',
    '四国三郎の郷（美馬市）',
    '四国三郎の郷, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3983.html'
  ),
  '清流穴吹川': wikiPhoto(
    'anabuki-river-mima-20080403.jpg',
    'https://commons.wikimedia.org/wiki/File:Anabuki_River.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2008-04-03',
    '穴吹川（美馬市）',
    'Anabuki River, Mima'
  ),
  'ブルーベリー狩り': cityPhoto(
    'mima-kanko-3985.jpg',
    'ブルーベリー狩り（美馬市）',
    'ブルーベリー狩り, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3985.html'
  ),
  'ブルーベリー狩り - 穴吹／仕出原ブルーベリー観光農園': cityPhoto(
    'mima-kanko-3986.jpg',
    'ブルーベリー狩り - 穴吹／仕出原ブルーベリー観光農園（美馬市）',
    'ブルーベリー狩り - 穴吹／仕出原ブルーベリー観光農園, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3986.html'
  ),
  'ブルーベリー狩り - 脇町／ベリーベリーファームわきまち': cityPhoto(
    'mima-kanko-3987.jpg',
    'ブルーベリー狩り - 脇町／ベリーベリーファームわきまち（美馬市）',
    'ブルーベリー狩り - 脇町／ベリーベリーファームわきまち, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3987.html'
  ),
  'リバーサイドしでの家': cityPhoto(
    'mima-kanko-3989.jpg',
    'リバーサイドしでの家（美馬市）',
    'リバーサイドしでの家, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3989.html'
  ),
  '水辺の楽校中鳥川公園': cityPhoto(
    'mima-kanko-3991.jpg',
    '水辺の楽校中鳥川公園（美馬市）',
    '水辺の楽校中鳥川公園, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3991.html'
  ),
  'ボートレース鳴門 オラレ美馬': cityPhoto(
    'mima-kanko-3992.jpg',
    'ボートレース鳴門 オラレ美馬（美馬市）',
    'ボートレース鳴門 オラレ美馬, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3992.html'
  ),
  '美馬スカイスポーツ': cityPhoto(
    'mima-kanko-3993.jpg',
    '美馬スカイスポーツ（美馬市）',
    '美馬スカイスポーツ, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3993.html'
  ),
  '美馬モーターランド': cityPhoto(
    'mima-kanko-3994.jpg',
    '美馬モーターランド（美馬市）',
    '美馬モーターランド, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3994.html'
  ),
  '中尾山高原': cityPhoto(
    'mima-kanko-3995.jpg',
    '中尾山高原（美馬市）',
    '中尾山高原, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/3995.html'
  ),
  '交流会館「ブルーヴィラ穴吹」': BLUE_VILLA_PHOTO,
  '清流の郷 ブルーヴィラあなぶき': BLUE_VILLA_PHOTO,
  'コテージ清流の郷': wikiPhoto(
    'koteeji-seiryu-no-sato-20080911.jpg',
    'https://commons.wikimedia.org/wiki/File:Koteeji_Seiryū-no-sato.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2008-09-11',
    'コテージ清流の郷（美馬市）',
    'Seiryu-no-sato cottages, Mima'
  ),
  '市営 一の森ヒュッテ': cityPhoto(
    'mima-kanko-4042.jpg',
    '市営 一の森ヒュッテ（美馬市）',
    '市営 一の森ヒュッテ, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4042.html'
  ),
  '段の塚穴（だんのつかあな） 〔国指定史跡〕': cityPhoto(
    'mima-kanko-4043.jpg',
    '段の塚穴（だんのつかあな） 〔国指定史跡〕（美馬市）',
    '段の塚穴（だんのつかあな） 〔国指定史跡〕, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4043.html'
  ),
  '郡里廃寺跡（こおざとはいじあと） 〔国指定史跡〕': cityPhoto(
    'mima-kanko-4044.jpg',
    '郡里廃寺跡（こおざとはいじあと） 〔国指定史跡〕（美馬市）',
    '郡里廃寺跡（こおざとはいじあと） 〔国指定史跡〕, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4044.html'
  ),
  '木造毘沙門天立像（もくぞうびしゃもんてんりゅうぞう） 〔国指定重要文化財〕': cityPhoto(
    'mima-kanko-4045.jpg',
    '木造毘沙門天立像（もくぞうびしゃもんてんりゅうぞう） 〔国指定重要文化財〕（美馬市）',
    '木造毘沙門天立像（もくぞうびしゃもんてんりゅうぞう） 〔国指定重要文化財〕, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4045.html'
  ),
  '旧長岡家住宅（きゅうながおかけじゅうたく） 〔国指定重要文化財〕': wikiPhoto(
    'nagaoka-ke-jutaku-mima-20250828.jpg',
    'https://commons.wikimedia.org/wiki/File:Nagaokake_zyutaku_20250828_1.jpg',
    'CC0 1.0',
    'https://creativecommons.org/publicdomain/zero/1.0/',
    'Araiyasushige',
    'https://commons.wikimedia.org/wiki/User:Araiyasushige',
    '2025-08-28',
    '旧長岡家住宅（美馬市）',
    'Old Nagaoka House, Mima'
  ),
  '大谷川堰堤（おおたにがわえんてい） 〔国登録有形文化財〕': wikiPhoto(
    'de-rijke-dam-mima-20080710.jpg',
    'https://commons.wikimedia.org/wiki/File:De_Rijke_Dam_in_Mima_City,_Tokushima,_Japan.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Mima City Hall',
    'https://www.city.mima.lg.jp/',
    '2008-07-10',
    '大谷川堰堤（美馬市）',
    'Otani-gawa dam (De Rijke), Mima'
  ),
  '青木家住宅（あおきけじゅうたく） 〔国登録有形文化財〕': wikiPhoto(
    'aoki-residence-mima-20091202.jpg',
    'https://commons.wikimedia.org/wiki/File:Aoki_Residence,_Mima_Town,_Mima_City,_Tokushima.JPG',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'Brianmima',
    'https://commons.wikimedia.org/wiki/User:Brianmima',
    '2009-12-02',
    '青木家住宅（美馬市美馬町）',
    'Aoki Residence, Mima'
  ),
  '旅館たおか（りょかんたおか） 〔国登録有形文化財〕': TAOKA_PHOTO,
  '鎌村家住宅（かまむらけじゅうたく） 〔国登録有形文化財〕': cityPhoto(
    'mima-kanko-4052.jpg',
    '鎌村家住宅（かまむらけじゅうたく） 〔国登録有形文化財〕（美馬市）',
    '鎌村家住宅（かまむらけじゅうたく） 〔国登録有形文化財〕, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4052.html'
  ),
  '西教寺（さいきょうじ）〔国登録有形文化財〕': wikiPhoto(
    'saikyo-ji-mima.jpg',
    'https://commons.wikimedia.org/wiki/File:Saikyō_Tempel.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2012-08-27',
    '西教寺（美馬市）',
    'Saikyoji temple, Mima'
  ),
  '願勝寺（がんしょうじ） 〔国登録有形文化財〕': wikiPhoto(
    'gansho-ji-mima-20080321.jpg',
    'https://commons.wikimedia.org/wiki/File:Gansho_Tempel_in_Mima.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2008-03-21',
    '願勝寺（美馬市寺町）',
    'Ganshoji temple, Mima'
  ),
  '安楽寺（あんらくじ） 〔国登録有形文化財〕': wikiPhoto(
    'anraku-ji-mima-20120827.jpg',
    'https://commons.wikimedia.org/wiki/File:Anraku_Tempel.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2012-08-27',
    '安楽寺（美馬市）',
    'Anrakuji temple, Mima'
  ),
  '滝の宮経塚': cityPhoto(
    'mima-kanko-4056.jpg',
    '滝の宮経塚（美馬市）',
    '滝の宮経塚, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4056.html'
  ),
  '滝の宮経塚出土品': cityPhoto(
    'mima-kanko-4057.jpg',
    '滝の宮経塚出土品（美馬市）',
    '滝の宮経塚出土品, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4057.html'
  ),
  '野村八幡古墳': cityPhoto(
    'mima-kanko-4058.jpg',
    '野村八幡古墳（美馬市）',
    '野村八幡古墳, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4058.html'
  ),
  '願勝寺庭園': cityPhoto(
    'mima-kanko-4059.jpg',
    '願勝寺庭園（美馬市）',
    '願勝寺庭園, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4059.html'
  ),
  '別所の大クス': cityPhoto(
    'mima-kanko-4060.jpg',
    '別所の大クス（美馬市）',
    '別所の大クス, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4060.html'
  ),
  '川井のエドヒガン': cityPhoto(
    'mima-kanko-4061.jpg',
    '川井のエドヒガン（美馬市）',
    '川井のエドヒガン, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4061.html'
  ),
  '八幡の大杉': cityPhoto(
    'mima-kanko-4062.jpg',
    '八幡の大杉（美馬市）',
    '八幡の大杉, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4062.html'
  ),
  '内田のエドヒガン': cityPhoto(
    'mima-kanko-4063.jpg',
    '内田のエドヒガン（美馬市）',
    '内田のエドヒガン, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4063.html'
  ),
  '内田のヤマザクラ': cityPhoto(
    'mima-kanko-4064.jpg',
    '内田のヤマザクラ（美馬市）',
    '内田のヤマザクラ, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4064.html'
  ),
  '絹本著色聖衆来迎図': cityPhoto(
    'mima-kanko-4065.jpg',
    '絹本著色聖衆来迎図（美馬市）',
    '絹本著色聖衆来迎図, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4065.html'
  ),
  '地蔵来迎図': cityPhoto(
    'mima-kanko-4066.jpg',
    '地蔵来迎図（美馬市）',
    '地蔵来迎図, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4066.html'
  ),
  '木造阿弥陀如来坐像': cityPhoto(
    'mima-kanko-4067.jpg',
    '木造阿弥陀如来坐像（美馬市）',
    '木造阿弥陀如来坐像, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4067.html'
  ),
  '拝東古墳': cityPhoto(
    'mima-kanko-4068.jpg',
    '拝東古墳（美馬市）',
    '拝東古墳, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4068.html'
  ),
  '拝中古墳': cityPhoto(
    'mima-kanko-4069.jpg',
    '拝中古墳（美馬市）',
    '拝中古墳, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4069.html'
  ),
  '三島古墳群1号墳': cityPhoto(
    'mima-kanko-4071.jpg',
    '三島古墳群1号墳（美馬市）',
    '三島古墳群1号墳, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4071.html'
  ),
  '三島古墳群2号墳': cityPhoto(
    'mima-kanko-4072.jpg',
    '三島古墳群2号墳（美馬市）',
    '三島古墳群2号墳, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4072.html'
  ),
  '三島古墳群3号墳': cityPhoto(
    'mima-kanko-4073.jpg',
    '三島古墳群3号墳（美馬市）',
    '三島古墳群3号墳, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4073.html'
  ),
  '尾山古墳': cityPhoto(
    'mima-kanko-4074.jpg',
    '尾山古墳（美馬市）',
    '尾山古墳, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4074.html'
  ),
  '重清城跡': cityPhoto(
    'mima-kanko-4075.jpg',
    '重清城跡（美馬市）',
    '重清城跡, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4075.html'
  ),
  '稲田墓所': cityPhoto(
    'mima-kanko-4076.jpg',
    '稲田墓所（美馬市）',
    '稲田墓所, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4076.html'
  ),
  '石尾神社': cityPhoto(
    'mima-kanko-4078.jpg',
    '石尾神社（美馬市）',
    '石尾神社, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4078.html'
  ),
  '東林寺庭園': cityPhoto(
    'mima-kanko-4079.jpg',
    '東林寺庭園（美馬市）',
    '東林寺庭園, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4079.html'
  ),
  'カスミサンショウウオの生息地': cityPhoto(
    'mima-kanko-4080.jpg',
    'カスミサンショウウオの生息地（美馬市）',
    'カスミサンショウウオの生息地, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4080.html'
  ),
  '中山路のイチョウ': cityPhoto(
    'mima-kanko-4081.jpg',
    '中山路のイチョウ（美馬市）',
    '中山路のイチョウ, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4081.html'
  ),
  '荒川衝上': cityPhoto(
    'mima-kanko-4083.jpg',
    '荒川衝上（美馬市）',
    '荒川衝上, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4083.html'
  ),
  '東林寺山門': cityPhoto(
    'mima-kanko-4085.jpg',
    '東林寺山門（美馬市）',
    '東林寺山門, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4085.html'
  ),
  '貞真寺山門': cityPhoto(
    'mima-kanko-4086.jpg',
    '貞真寺山門（美馬市）',
    '貞真寺山門, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4086.html'
  ),
  '小星大師堂': cityPhoto(
    'mima-kanko-4087.jpg',
    '小星大師堂（美馬市）',
    '小星大師堂, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4087.html'
  ),
  '藤若家住宅': cityPhoto(
    'mima-kanko-4088.jpg',
    '藤若家住宅（美馬市）',
    '藤若家住宅, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4088.html'
  ),
  '脇城跡': cityPhoto(
    'mima-kanko-4094.jpg',
    '脇城跡（美馬市）',
    '脇城跡, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4094.html'
  ),

  '落久保の屋台': wikiPhoto(
    'ochikubo-yatai-wakimachi-20220726.jpg',
    'https://commons.wikimedia.org/wiki/File:Wakimati20220726_7.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
    'Dokudami',
    'https://commons.wikimedia.org/wiki/User:Dokudami',
    '2022-07-26',
    '落久保の屋台（美馬市脇町）',
    'Ochikubo festival float, Wakimachi, Mima'
  ),
  '将棋名人 小野五平': cityPhoto(
    'ono-gohei.jpg',
    '将棋名人 小野五平（美馬市）',
    'Shogi master Ono Gohei, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/385363.html'
  ),
  '八幡の大スギ': cityPhoto(
    'mima-kanko-4062.jpg',
    '八幡の大スギ（美馬市）',
    'Hachiman no osugi cedar, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4062.html'
  ),
  '貞眞寺山門': cityPhoto(
    'mima-kanko-4086.jpg',
    '貞眞寺山門（美馬市）',
    'Teishinji sanmon gate, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4086.html'
  ),
  '三島古墳群１号': cityPhoto(
    'mima-kanko-4071.jpg',
    '三島古墳群１号（美馬市）',
    'Mishima kofun group mound 1, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4071.html'
  ),
  '三島古墳群２号': cityPhoto(
    'mima-kanko-4072.jpg',
    '三島古墳群２号（美馬市）',
    'Mishima kofun group mound 2, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4072.html'
  ),
  '三島古墳群３号': cityPhoto(
    'mima-kanko-4073.jpg',
    '三島古墳群３号（美馬市）',
    'Mishima kofun group mound 3, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4073.html'
  ),
  '木造毘沙門天立像': cityPhoto(
    'mima-kanko-4045.jpg',
    '木造毘沙門天立像（美馬市）',
    'Wooden Bishamonten statue, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4045.html'
  ),
  '聖衆来迎図': cityPhoto(
    'mima-kanko-4065.jpg',
    '聖衆来迎図（美馬市）',
    'Shoju raigo painting, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4065.html'
  ),
  '三味線もちつき（北崎組）（井内組）（うだつ）': cityPhoto(
    'mima-kanko-11514.jpg',
    '三味線もちつき（美馬市）',
    'Shamisen mochi-tsuki, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/11514.html'
  ),
  '大谷川堰堤': wikiPhoto(
    'de-rijke-dam-mima-20080710.jpg',
    'https://commons.wikimedia.org/wiki/File:De_Rijke_Dam_in_Mima_City,_Tokushima,_Japan.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Mima City Hall',
    'https://www.city.mima.lg.jp/',
    '2008-07-10',
    '大谷川堰堤（美馬市）',
    'Otani-gawa dam (De Rijke), Mima'
  ),
  '青木家住宅主屋': wikiPhoto(
    'aoki-residence-mima-20091202.jpg',
    'https://commons.wikimedia.org/wiki/File:Aoki_Residence,_Mima_Town,_Mima_City,_Tokushima.JPG',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
    'Brianmima',
    'https://commons.wikimedia.org/wiki/User:Brianmima',
    '2009-12-02',
    '青木家住宅主屋（美馬市美馬町）',
    'Aoki Residence main house, Mima'
  ),
  '西教寺本堂': wikiPhoto(
    'saikyo-ji-mima.jpg',
    'https://commons.wikimedia.org/wiki/File:Saikyō_Tempel.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
    'Johan Hoenselaar',
    'https://commons.wikimedia.org/wiki/User:Johan_Hoenselaar',
    '2012-08-27',
    '西教寺本堂（美馬市）',
    'Saikyoji hondo, Mima'
  ),
  '旅館たおか主屋': TAOKA_PHOTO,

  '舞中島': cityPhoto(
    'mima-kanko-4095.jpg',
    '舞中島（美馬市）',
    '舞中島, Mima',
    'https://www.city.mima.lg.jp/kanko/map/list/4095.html'
  ),
  '道の駅藍ランドうだつ 藍蔵': bureauPhoto(
    'ailand-udatsu-aigura.jpg',
    '2021',
    '道の駅藍ランドうだつ 藍蔵（美馬市脇町）',
    'Ailand Udatsu Aigura souvenir shop, Wakimachi, Mima',
    'https://mimakankou.or.jp/udatsusyuhenzu/aigura/'
  ),
  '阿波踊り竹人形の里 時代屋': bureauPhoto(
    'jidaiya.jpg',
    '2020',
    '阿波踊り竹人形の里 時代屋（美馬市脇町）',
    'Jidaiya bamboo-doll shop, Wakimachi, Mima',
    'https://mimakankou.or.jp/udatsusyuhenzu/jidaiya/'
  ),
  '野崎呉服店': bureauPhoto(
    'nozaki-gofukuten.jpg',
    '2020',
    '野崎呉服店（美馬市脇町）',
    'Nozaki kimono shop, Wakimachi, Mima',
    'https://mimakankou.or.jp/udatsusyuhenzu/nozakigohukuten/'
  ),
  '西野商店こうじ部': bureauPhoto(
    'nishino-shouten-koji.jpg',
    '2022',
    '西野商店こうじ部（美馬市脇町）',
    'Nishino Shoten koji shop, Wakimachi, Mima',
    'https://mimakankou.or.jp/udatsusyuhenzu/nishinosyouten/'
  ),
  'うだつ上がる': bureauPhoto(
    'udatsu-agaru.jpg',
    '2022',
    'うだつ上がる（美馬市脇町）',
    'Udatsu Agaru shop complex, Wakimachi, Mima',
    'https://mimakankou.or.jp/udatsusyuhenzu/udatsuagaru/'
  ),
  '藍染工房': bureauPhoto(
    'aizome-koubou.jpg',
    '2022',
    '藍染工房（美馬市脇町）',
    'Aizome koubou indigo workshop shop, Wakimachi, Mima',
    'https://mimakankou.or.jp/udatsusyuhenzu/aizomekoubou/'
  ),
  '道の駅 みまの里': cityPhoto(
    'michi-no-eki-mima-no-sato.jpg',
    '道の駅 みまの里（美馬市美馬町）',
    'Michi-no-eki Mima no Sato, Mima-cho, Mima',
    'https://www.city.mima.lg.jp/gyosei/docs/30046.html'
  ),
  '正木酒店': bureauPhoto(
    'masaki-saketen.jpg',
    '2020',
    '正木酒店（美馬市脇町）',
    'Masaki saketen liquor shop, Wakimachi, Mima',
    'https://mimakankou.or.jp/udatsusyuhenzu/masakisaketen/'
  ),
  '小川鮮魚店': bureauPhoto(
    'ogawa-sengyoten.jpg',
    '2020',
    '小川鮮魚店（美馬市脇町）',
    'Ogawa sengyoten fish shop, Wakimachi, Mima',
    'https://mimakankou.or.jp/udatsusyuhenzu/ogawasengyoten/'
  )
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
