export type MunicipalityStatus = 'ready' | 'coming-soon';

export type Municipality = {
  jis: string;
  slug: string;
  nameJa: string;
  nameEn: string;
  status: MunicipalityStatus;
};

/**
 * Hiroshima 市区町村. Codes are N03_007 / JIS X 0402 (5-digit).
 * Hiroshima City LIVE hub (first Hiroshima prefecture hub).
 * Coming-soon slugs avoid ReadySlug collisions (miharashi / miyoshishi).
 */
export const HIROSHIMA_MUNICIPALITIES: Municipality[] = [
  {jis: '34100', slug: 'hiroshima', nameJa: '広島市', nameEn: 'Hiroshima', status: 'ready'},
  {jis: '34202', slug: 'kure', nameJa: '呉市', nameEn: 'Kure', status: 'coming-soon'},
  {jis: '34203', slug: 'takehara', nameJa: '竹原市', nameEn: 'Takehara', status: 'coming-soon'},
  {jis: '34204', slug: 'miharashi', nameJa: '三原市', nameEn: 'Mihara', status: 'coming-soon'},
  {jis: '34205', slug: 'onomichi', nameJa: '尾道市', nameEn: 'Onomichi', status: 'coming-soon'},
  {jis: '34207', slug: 'fukuyama', nameJa: '福山市', nameEn: 'Fukuyama', status: 'coming-soon'},
  {jis: '34208', slug: 'fuchu', nameJa: '府中市', nameEn: 'Fuchu', status: 'coming-soon'},
  {jis: '34209', slug: 'miyoshishi', nameJa: '三次市', nameEn: 'Miyoshi', status: 'coming-soon'},
  {jis: '34210', slug: 'shobara', nameJa: '庄原市', nameEn: 'Shobara', status: 'coming-soon'},
  {jis: '34211', slug: 'otake', nameJa: '大竹市', nameEn: 'Otake', status: 'coming-soon'},
  {jis: '34212', slug: 'higashihiroshima', nameJa: '東広島市', nameEn: 'Higashihiroshima', status: 'coming-soon'},
  {jis: '34213', slug: 'hatsukaichi', nameJa: '廿日市市', nameEn: 'Hatsukaichi', status: 'coming-soon'},
  {jis: '34214', slug: 'akitakata', nameJa: '安芸高田市', nameEn: 'Akitakata', status: 'coming-soon'},
  {jis: '34215', slug: 'etajima', nameJa: '江田島市', nameEn: 'Etajima', status: 'coming-soon'},
  {jis: '34302', slug: 'fuchucho', nameJa: '府中町', nameEn: 'Fuchu Town', status: 'coming-soon'},
  {jis: '34304', slug: 'kaita', nameJa: '海田町', nameEn: 'Kaita', status: 'coming-soon'},
  {jis: '34307', slug: 'kumano', nameJa: '熊野町', nameEn: 'Kumano', status: 'coming-soon'},
  {jis: '34309', slug: 'saka', nameJa: '坂町', nameEn: 'Saka', status: 'coming-soon'},
  {jis: '34368', slug: 'akiota', nameJa: '安芸太田町', nameEn: 'Akiota', status: 'coming-soon'},
  {jis: '34369', slug: 'kitahiroshima', nameJa: '北広島町', nameEn: 'Kitahiroshima', status: 'coming-soon'},
  {jis: '34431', slug: 'osakikamijima', nameJa: '大崎上島町', nameEn: 'Osakikamijima', status: 'coming-soon'},
  {jis: '34462', slug: 'sera', nameJa: '世羅町', nameEn: 'Sera', status: 'coming-soon'},
  {jis: '34545', slug: 'jinseikogen', nameJa: '神石高原町', nameEn: 'Jinseikogen', status: 'coming-soon'}
];

export const HIROSHIMA_CITY_JIS = '34100';

export const HIROSHIMA_MUNICIPALITY_BY_SLUG = new Map(
  HIROSHIMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
export const HIROSHIMA_MUNICIPALITY_BY_JIS = new Map(
  HIROSHIMA_MUNICIPALITIES.map((m) => [m.jis, m])
);
