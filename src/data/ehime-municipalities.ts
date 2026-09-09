export type MunicipalityStatus = 'ready' | 'coming-soon';

export type Municipality = {
  jis: string;
  slug: string;
  nameJa: string;
  nameEn: string;
  status: MunicipalityStatus;
};

/**
 * Ehime 市区町村. Codes are N03_007 / JIS X 0402 (5-digit).
 * Matsuyama/Imabari/Uwajima LIVE hubs (+ remaining municipalities coming-soon).
 */
export const EHIME_MUNICIPALITIES: Municipality[] = [
  {jis: '38201', slug: 'matsuyama', nameJa: '松山市', nameEn: 'Matsuyama', status: 'ready'},
  {jis: '38202', slug: 'imabari', nameJa: '今治市', nameEn: 'Imabari', status: 'ready'},
  {jis: '38203', slug: 'uwajima', nameJa: '宇和島市', nameEn: 'Uwajima', status: 'ready'},
  {jis: '38204', slug: 'yawatahama', nameJa: '八幡浜市', nameEn: 'Yawatahama', status: 'ready'},
  {jis: '38205', slug: 'niihama', nameJa: '新居浜市', nameEn: 'Niihama', status: 'coming-soon'},
  {jis: '38206', slug: 'saijo', nameJa: '西条市', nameEn: 'Saijo', status: 'coming-soon'},
  {jis: '38207', slug: 'ozu', nameJa: '大洲市', nameEn: 'Ozu', status: 'coming-soon'},
  {jis: '38210', slug: 'iyo', nameJa: '伊予市', nameEn: 'Iyo', status: 'coming-soon'},
  {jis: '38213', slug: 'shikokuchuo', nameJa: '四国中央市', nameEn: 'Shikokuchuo', status: 'coming-soon'},
  {jis: '38214', slug: 'seiyo', nameJa: '西予市', nameEn: 'Seiyo', status: 'coming-soon'},
  {jis: '38215', slug: 'toon', nameJa: '東温市', nameEn: 'Toon', status: 'coming-soon'},
  {jis: '38356', slug: 'kamijima', nameJa: '上島町', nameEn: 'Kamijima', status: 'coming-soon'},
  {jis: '38386', slug: 'kumakogen', nameJa: '久万高原町', nameEn: 'Kumakogen', status: 'coming-soon'},
  {jis: '38401', slug: 'masaki', nameJa: '松前町', nameEn: 'Masaki', status: 'coming-soon'},
  {jis: '38402', slug: 'tobe', nameJa: '砥部町', nameEn: 'Tobe', status: 'coming-soon'},
  {jis: '38422', slug: 'uchiko', nameJa: '内子町', nameEn: 'Uchiko', status: 'coming-soon'},
  {jis: '38442', slug: 'ikata', nameJa: '伊方町', nameEn: 'Ikata', status: 'coming-soon'},
  {jis: '38484', slug: 'matsuno', nameJa: '松野町', nameEn: 'Matsuno', status: 'coming-soon'},
  {jis: '38488', slug: 'kihoku', nameJa: '鬼北町', nameEn: 'Kihoku', status: 'coming-soon'},
  {jis: '38506', slug: 'ainan', nameJa: '愛南町', nameEn: 'Ainan', status: 'coming-soon'}
];

export const MATSUYAMA_JIS = '38201';

export const EHIME_MUNICIPALITY_BY_SLUG = new Map(
  EHIME_MUNICIPALITIES.map((m) => [m.slug, m])
);
export const EHIME_MUNICIPALITY_BY_JIS = new Map(
  EHIME_MUNICIPALITIES.map((m) => [m.jis, m])
);
