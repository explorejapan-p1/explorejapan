import type {Municipality} from './kagawa-municipalities';

/**
 * Shimane municipalities (島根県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const SHIMANE_MUNICIPALITIES: Municipality[] = [
  {jis: '32201', slug: 'matsue', nameJa: '松江市', nameEn: 'Matsue', status: 'coming-soon'},
  {jis: '32202', slug: 'hamada', nameJa: '浜田市', nameEn: 'Hamada', status: 'coming-soon'},
  {jis: '32203', slug: 'izumo', nameJa: '出雲市', nameEn: 'Izumo', status: 'coming-soon'},
  {jis: '32204', slug: 'masuda', nameJa: '益田市', nameEn: 'Masuda', status: 'coming-soon'},
  {jis: '32205', slug: 'oda', nameJa: '大田市', nameEn: 'Oda', status: 'coming-soon'},
  {jis: '32206', slug: 'yasugi', nameJa: '安来市', nameEn: 'Yasugi', status: 'coming-soon'},
  {jis: '32207', slug: 'gotsu', nameJa: '江津市', nameEn: 'Gotsu', status: 'coming-soon'},
  {jis: '32209', slug: 'unnan', nameJa: '雲南市', nameEn: 'Unnan', status: 'coming-soon'},
  {jis: '32343', slug: 'okuizumo', nameJa: '奥出雲町', nameEn: 'Okuizumo', status: 'coming-soon'},
  {jis: '32386', slug: 'iinan', nameJa: '飯南町', nameEn: 'Iinan', status: 'coming-soon'},
  {jis: '32441', slug: 'kawamoto', nameJa: '川本町', nameEn: 'Kawamoto', status: 'coming-soon'},
  {jis: '32448', slug: 'misato', nameJa: '美郷町', nameEn: 'Misato', status: 'coming-soon'},
  {jis: '32449', slug: 'onan', nameJa: '邑南町', nameEn: 'Onan', status: 'coming-soon'},
  {jis: '32501', slug: 'tsuwano', nameJa: '津和野町', nameEn: 'Tsuwano', status: 'coming-soon'},
  {jis: '32505', slug: 'yoshika', nameJa: '吉賀町', nameEn: 'Yoshika', status: 'coming-soon'},
  {jis: '32525', slug: 'ama', nameJa: '海士町', nameEn: 'Ama', status: 'coming-soon'},
  {jis: '32526', slug: 'nishinoshima', nameJa: '西ノ島町', nameEn: 'Nishinoshima', status: 'coming-soon'},
  {jis: '32527', slug: 'chibu', nameJa: '知夫村', nameEn: 'Chibu', status: 'coming-soon'},
  {jis: '32528', slug: 'okinoshima', nameJa: '隠岐の島町', nameEn: 'Okinoshima', status: 'coming-soon'},
];

export const SHIMANE_MUNICIPALITY_BY_SLUG = new Map(
  SHIMANE_MUNICIPALITIES.map((m) => [m.slug, m])
);
