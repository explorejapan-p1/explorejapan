export type MunicipalityStatus = 'ready' | 'coming-soon';

export type Municipality = {
  jis: string;
  slug: string;
  nameJa: string;
  nameEn: string;
  status: MunicipalityStatus;
};

/**
 * Kochi 市区町村. Codes are N03_007 / JIS X 0402 (5-digit).
 * Kochi City 39201 + Nankoku 39204 + Konan 39211 + Kami 39212 + Ino 39386 + Aki 39203 + Muroto 39202 + Tosa 39205 + Susaki 39206 + Shimanto 39210 + Tosashimizu 39209 + Sukumo 39208 + Kuroshio 39428 + Toyo 39301 + Nahari 39302 + Yasuda 39304 + Geisei 39307 + Kitagawa 39305 + Umaji 39306 + Motoyama 39341 + Otoyo 39344 + Tosacho 39363 LIVE hubs (+ remaining municipalities coming-soon).
 */
export const KOCHI_MUNICIPALITIES: Municipality[] = [
  {jis: '39201', slug: 'kochi', nameJa: '高知市', nameEn: 'Kochi', status: 'ready'},
  {jis: '39202', slug: 'muroto', nameJa: '室戸市', nameEn: 'Muroto', status: 'ready'},
  {jis: '39203', slug: 'aki', nameJa: '安芸市', nameEn: 'Aki', status: 'ready'},
  {jis: '39204', slug: 'nankoku', nameJa: '南国市', nameEn: 'Nankoku', status: 'ready'},
  {jis: '39205', slug: 'tosa', nameJa: '土佐市', nameEn: 'Tosa', status: 'ready'},
  {jis: '39206', slug: 'susaki', nameJa: '須崎市', nameEn: 'Susaki', status: 'ready'},
  {jis: '39208', slug: 'sukumo', nameJa: '宿毛市', nameEn: 'Sukumo', status: 'ready'},
  {jis: '39209', slug: 'tosashimizu', nameJa: '土佐清水市', nameEn: 'Tosashimizu', status: 'ready'},
  {jis: '39210', slug: 'shimanto', nameJa: '四万十市', nameEn: 'Shimanto', status: 'ready'},
  {jis: '39211', slug: 'konan', nameJa: '香南市', nameEn: 'Konan', status: 'ready'},
  {jis: '39212', slug: 'kami', nameJa: '香美市', nameEn: 'Kami', status: 'ready'},
  {jis: '39301', slug: 'toyo', nameJa: '東洋町', nameEn: 'Toyo', status: 'ready'},
  {jis: '39302', slug: 'nahari', nameJa: '奈半利町', nameEn: 'Nahari', status: 'ready'},
  {jis: '39303', slug: 'tano', nameJa: '田野町', nameEn: 'Tano', status: 'coming-soon'},
  {jis: '39304', slug: 'yasuda', nameJa: '安田町', nameEn: 'Yasuda', status: 'ready'},
  {jis: '39305', slug: 'kitagawa', nameJa: '北川村', nameEn: 'Kitagawa', status: 'ready'},
  {jis: '39306', slug: 'umaji', nameJa: '馬路村', nameEn: 'Umaji', status: 'ready'},
  {jis: '39307', slug: 'geisei', nameJa: '芸西村', nameEn: 'Geisei', status: 'ready'},
  {jis: '39341', slug: 'motoyama', nameJa: '本山町', nameEn: 'Motoyama', status: 'ready'},
  {jis: '39344', slug: 'otoyo', nameJa: '大豊町', nameEn: 'Otoyo', status: 'ready'},
  {jis: '39363', slug: 'tosacho', nameJa: '土佐町', nameEn: 'Tosa Town', status: 'ready'},
  {jis: '39364', slug: 'okawa', nameJa: '大川村', nameEn: 'Okawa', status: 'coming-soon'},
  {jis: '39386', slug: 'ino', nameJa: 'いの町', nameEn: 'Ino', status: 'ready'},
  {jis: '39387', slug: 'niyodogawa', nameJa: '仁淀川町', nameEn: 'Niyodogawa', status: 'coming-soon'},
  {jis: '39401', slug: 'nakatosa', nameJa: '中土佐町', nameEn: 'Nakatosa', status: 'coming-soon'},
  {jis: '39402', slug: 'sakawa', nameJa: '佐川町', nameEn: 'Sakawa', status: 'coming-soon'},
  {jis: '39403', slug: 'ochi', nameJa: '越知町', nameEn: 'Ochi', status: 'coming-soon'},
  {jis: '39405', slug: 'yusuhara', nameJa: '梼原町', nameEn: 'Yusuhara', status: 'coming-soon'},
  {jis: '39410', slug: 'hidaka', nameJa: '日高村', nameEn: 'Hidaka', status: 'coming-soon'},
  {jis: '39411', slug: 'tsuno', nameJa: '津野町', nameEn: 'Tsuno', status: 'coming-soon'},
  {jis: '39412', slug: 'shimantocho', nameJa: '四万十町', nameEn: 'Shimanto Town', status: 'coming-soon'},
  {jis: '39424', slug: 'otsuki', nameJa: '大月町', nameEn: 'Otsuki', status: 'coming-soon'},
  {jis: '39427', slug: 'mihara', nameJa: '三原村', nameEn: 'Mihara', status: 'coming-soon'},
  {jis: '39428', slug: 'kuroshio', nameJa: '黒潮町', nameEn: 'Kuroshio', status: 'ready'}
];

export const KOCHI_JIS = '39201';

export const KOCHI_MUNICIPALITY_BY_SLUG = new Map(
  KOCHI_MUNICIPALITIES.map((m) => [m.slug, m])
);
export const KOCHI_MUNICIPALITY_BY_JIS = new Map(
  KOCHI_MUNICIPALITIES.map((m) => [m.jis, m])
);
