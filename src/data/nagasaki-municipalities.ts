import type {Municipality} from './kagawa-municipalities';

/**
 * Nagasaki municipalities (長崎県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const NAGASAKI_MUNICIPALITIES: Municipality[] = [
  {jis: '42201', slug: 'nagasaki', nameJa: '長崎市', nameEn: 'Nagasaki', status: 'coming-soon'},
  {jis: '42202', slug: 'sasebo', nameJa: '佐世保市', nameEn: 'Sasebo', status: 'coming-soon'},
  {jis: '42203', slug: 'shimabara', nameJa: '島原市', nameEn: 'Shimabara', status: 'coming-soon'},
  {jis: '42204', slug: 'isahaya', nameJa: '諫早市', nameEn: 'Isahaya', status: 'coming-soon'},
  {jis: '42205', slug: 'omura', nameJa: '大村市', nameEn: 'Omura', status: 'coming-soon'},
  {jis: '42207', slug: 'hirado', nameJa: '平戸市', nameEn: 'Hirado', status: 'coming-soon'},
  {jis: '42208', slug: 'matsuura', nameJa: '松浦市', nameEn: 'Matsuura', status: 'coming-soon'},
  {jis: '42209', slug: 'tsushima', nameJa: '対馬市', nameEn: 'Tsushima', status: 'coming-soon'},
  {jis: '42210', slug: 'iki', nameJa: '壱岐市', nameEn: 'Iki', status: 'coming-soon'},
  {jis: '42211', slug: 'goto', nameJa: '五島市', nameEn: 'Goto', status: 'coming-soon'},
  {jis: '42212', slug: 'saikai', nameJa: '西海市', nameEn: 'Saikai', status: 'coming-soon'},
  {jis: '42213', slug: 'unzen', nameJa: '雲仙市', nameEn: 'Unzen', status: 'coming-soon'},
  {jis: '42214', slug: 'minamishimabara', nameJa: '南島原市', nameEn: 'Minamishimabara', status: 'coming-soon'},
  {jis: '42307', slug: 'nagayo', nameJa: '長与町', nameEn: 'Nagayo', status: 'coming-soon'},
  {jis: '42308', slug: 'togitsu', nameJa: '時津町', nameEn: 'Togitsu', status: 'coming-soon'},
  {jis: '42321', slug: 'higashisonogi', nameJa: '東彼杵町', nameEn: 'Higashisonogi', status: 'coming-soon'},
  {jis: '42322', slug: 'kawatana', nameJa: '川棚町', nameEn: 'Kawatana', status: 'coming-soon'},
  {jis: '42323', slug: 'hasami', nameJa: '波佐見町', nameEn: 'Hasami', status: 'coming-soon'},
  {jis: '42383', slug: 'ojika', nameJa: '小値賀町', nameEn: 'Ojika', status: 'coming-soon'},
  {jis: '42391', slug: 'saza', nameJa: '佐々町', nameEn: 'Saza', status: 'coming-soon'},
  {jis: '42411', slug: 'shinkamigoto', nameJa: '新上五島町', nameEn: 'Shinkamigoto', status: 'coming-soon'},
];

export const NAGASAKI_MUNICIPALITY_BY_SLUG = new Map(
  NAGASAKI_MUNICIPALITIES.map((m) => [m.slug, m])
);
