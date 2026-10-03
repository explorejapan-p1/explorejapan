import type {Municipality} from './kagawa-municipalities';

/**
 * Toyama municipalities (富山県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const TOYAMA_MUNICIPALITIES: Municipality[] = [
  {jis: '16201', slug: 'toyama', nameJa: '富山市', nameEn: 'Toyama', status: 'coming-soon'},
  {jis: '16202', slug: 'takaoka', nameJa: '高岡市', nameEn: 'Takaoka', status: 'coming-soon'},
  {jis: '16204', slug: 'uozu', nameJa: '魚津市', nameEn: 'Uozu', status: 'coming-soon'},
  {jis: '16205', slug: 'himi', nameJa: '氷見市', nameEn: 'Himi', status: 'coming-soon'},
  {jis: '16206', slug: 'namerikawa', nameJa: '滑川市', nameEn: 'Namerikawa', status: 'coming-soon'},
  {jis: '16207', slug: 'kurobe', nameJa: '黒部市', nameEn: 'Kurobe', status: 'coming-soon'},
  {jis: '16208', slug: 'tonami', nameJa: '砺波市', nameEn: 'Tonami', status: 'coming-soon'},
  {jis: '16209', slug: 'oyabe', nameJa: '小矢部市', nameEn: 'Oyabe', status: 'coming-soon'},
  {jis: '16210', slug: 'nanto', nameJa: '南砺市', nameEn: 'Nanto', status: 'coming-soon'},
  {jis: '16211', slug: 'imizu', nameJa: '射水市', nameEn: 'Imizu', status: 'coming-soon'},
  {jis: '16321', slug: 'funahashi', nameJa: '舟橋村', nameEn: 'Funahashi', status: 'coming-soon'},
  {jis: '16322', slug: 'kamiichi', nameJa: '上市町', nameEn: 'Kamiichi', status: 'coming-soon'},
  {jis: '16323', slug: 'tateyama', nameJa: '立山町', nameEn: 'Tateyama', status: 'coming-soon'},
  {jis: '16342', slug: 'nyuzen', nameJa: '入善町', nameEn: 'Nyuzen', status: 'coming-soon'},
  {jis: '16343', slug: 'asahi', nameJa: '朝日町', nameEn: 'Asahi', status: 'coming-soon'},
];

export const TOYAMA_MUNICIPALITY_BY_SLUG = new Map(
  TOYAMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
