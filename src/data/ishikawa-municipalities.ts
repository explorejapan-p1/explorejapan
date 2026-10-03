import type {Municipality} from './kagawa-municipalities';

/**
 * Ishikawa municipalities (石川県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const ISHIKAWA_MUNICIPALITIES: Municipality[] = [
  {jis: '17201', slug: 'kanazawa', nameJa: '金沢市', nameEn: 'Kanazawa', status: 'coming-soon'},
  {jis: '17202', slug: 'nanao', nameJa: '七尾市', nameEn: 'Nanao', status: 'coming-soon'},
  {jis: '17203', slug: 'komatsu', nameJa: '小松市', nameEn: 'Komatsu', status: 'coming-soon'},
  {jis: '17204', slug: 'wajima', nameJa: '輪島市', nameEn: 'Wajima', status: 'coming-soon'},
  {jis: '17205', slug: 'suzu', nameJa: '珠洲市', nameEn: 'Suzu', status: 'coming-soon'},
  {jis: '17206', slug: 'kaga', nameJa: '加賀市', nameEn: 'Kaga', status: 'coming-soon'},
  {jis: '17207', slug: 'hakui', nameJa: '羽咋市', nameEn: 'Hakui', status: 'coming-soon'},
  {jis: '17209', slug: 'kahoku', nameJa: 'かほく市', nameEn: 'Kahoku', status: 'coming-soon'},
  {jis: '17210', slug: 'hakusan', nameJa: '白山市', nameEn: 'Hakusan', status: 'coming-soon'},
  {jis: '17211', slug: 'nomi', nameJa: '能美市', nameEn: 'Nomi', status: 'coming-soon'},
  {jis: '17212', slug: 'nonoichi', nameJa: '野々市市', nameEn: 'Nonoichi', status: 'coming-soon'},
  {jis: '17324', slug: 'kawakita', nameJa: '川北町', nameEn: 'Kawakita', status: 'coming-soon'},
  {jis: '17361', slug: 'tsubata', nameJa: '津幡町', nameEn: 'Tsubata', status: 'coming-soon'},
  {jis: '17365', slug: 'uchinada', nameJa: '内灘町', nameEn: 'Uchinada', status: 'coming-soon'},
  {jis: '17384', slug: 'shika', nameJa: '志賀町', nameEn: 'Shika', status: 'coming-soon'},
  {jis: '17386', slug: 'hodatsushimizu', nameJa: '宝達志水町', nameEn: 'Hodatsushimizu', status: 'coming-soon'},
  {jis: '17407', slug: 'nakanoto', nameJa: '中能登町', nameEn: 'Nakanoto', status: 'coming-soon'},
  {jis: '17461', slug: 'anamizu', nameJa: '穴水町', nameEn: 'Anamizu', status: 'coming-soon'},
  {jis: '17463', slug: 'noto', nameJa: '能登町', nameEn: 'Noto', status: 'coming-soon'},
];

export const ISHIKAWA_MUNICIPALITY_BY_SLUG = new Map(
  ISHIKAWA_MUNICIPALITIES.map((m) => [m.slug, m])
);
