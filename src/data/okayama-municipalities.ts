export type MunicipalityStatus = 'ready' | 'coming-soon';

export type Municipality = {
  jis: string;
  slug: string;
  nameJa: string;
  nameEn: string;
  status: MunicipalityStatus;
};

/**
 * Okayama 市区町村. Codes are N03_007 / JIS X 0402 (5-digit).
 * Okayama City LIVE hub first; other cities/towns/villages coming-soon.
 * Slugs avoid ReadySlug collisions with other prefs.
 */
export const OKAYAMA_MUNICIPALITIES: Municipality[] = [
  {jis: '33100', slug: 'okayama', nameJa: '岡山市', nameEn: 'Okayama', status: 'ready'},
  {jis: '33202', slug: 'kurashiki', nameJa: '倉敷市', nameEn: 'Kurashiki', status: 'coming-soon'},
  {jis: '33203', slug: 'tsuyama', nameJa: '津山市', nameEn: 'Tsuyama', status: 'coming-soon'},
  {jis: '33204', slug: 'tamano', nameJa: '玉野市', nameEn: 'Tamano', status: 'coming-soon'},
  {jis: '33205', slug: 'kasaoka', nameJa: '笠岡市', nameEn: 'Kasaoka', status: 'coming-soon'},
  {jis: '33207', slug: 'ibara', nameJa: '井原市', nameEn: 'Ibara', status: 'coming-soon'},
  {jis: '33208', slug: 'soja', nameJa: '総社市', nameEn: 'Soja', status: 'coming-soon'},
  {jis: '33209', slug: 'takahashi', nameJa: '高梁市', nameEn: 'Takahashi', status: 'coming-soon'},
  {jis: '33210', slug: 'niimi', nameJa: '新見市', nameEn: 'Niimi', status: 'coming-soon'},
  {jis: '33211', slug: 'bizen', nameJa: '備前市', nameEn: 'Bizen', status: 'coming-soon'},
  {jis: '33212', slug: 'setouchi', nameJa: '瀬戸内市', nameEn: 'Setouchi', status: 'coming-soon'},
  {jis: '33213', slug: 'akaiwa', nameJa: '赤磐市', nameEn: 'Akaiwa', status: 'coming-soon'},
  {jis: '33214', slug: 'maniwa', nameJa: '真庭市', nameEn: 'Maniwa', status: 'coming-soon'},
  {jis: '33215', slug: 'mimasaka', nameJa: '美作市', nameEn: 'Mimasaka', status: 'coming-soon'},
  {jis: '33216', slug: 'asakuchi', nameJa: '浅口市', nameEn: 'Asakuchi', status: 'coming-soon'},
  {jis: '33346', slug: 'wake', nameJa: '和気町', nameEn: 'Wake', status: 'coming-soon'},
  {jis: '33423', slug: 'hayashima', nameJa: '早島町', nameEn: 'Hayashima', status: 'coming-soon'},
  {jis: '33445', slug: 'satosho', nameJa: '里庄町', nameEn: 'Satosho', status: 'coming-soon'},
  {jis: '33461', slug: 'yakage', nameJa: '矢掛町', nameEn: 'Yakage', status: 'coming-soon'},
  {jis: '33586', slug: 'shinjo', nameJa: '新庄村', nameEn: 'Shinjo', status: 'coming-soon'},
  {jis: '33606', slug: 'kagamino', nameJa: '鏡野町', nameEn: 'Kagamino', status: 'coming-soon'},
  {jis: '33622', slug: 'shoo', nameJa: '勝央町', nameEn: 'Shoo', status: 'coming-soon'},
  {jis: '33623', slug: 'nagi', nameJa: '奈義町', nameEn: 'Nagi', status: 'coming-soon'},
  {jis: '33643', slug: 'nishiawakura', nameJa: '西粟倉村', nameEn: 'Nishiawakura', status: 'coming-soon'},
  {jis: '33663', slug: 'kumenan', nameJa: '久米南町', nameEn: 'Kumenan', status: 'coming-soon'},
  {jis: '33666', slug: 'misaki', nameJa: '美咲町', nameEn: 'Misaki', status: 'coming-soon'},
  {jis: '33681', slug: 'kibichuo', nameJa: '吉備中央町', nameEn: 'Kibichuo', status: 'coming-soon'}
];

export const OKAYAMA_CITY_JIS = '33100';

export const OKAYAMA_MUNICIPALITY_BY_SLUG = new Map(
  OKAYAMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
export const OKAYAMA_MUNICIPALITY_BY_JIS = new Map(
  OKAYAMA_MUNICIPALITIES.map((m) => [m.jis, m])
);
