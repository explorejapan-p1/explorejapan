import type {Municipality} from './kagawa-municipalities';

/**
 * Saga municipalities (佐賀県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const SAGA_MUNICIPALITIES: Municipality[] = [
  {jis: '41201', slug: 'saga', nameJa: '佐賀市', nameEn: 'Saga', status: 'coming-soon'},
  {jis: '41202', slug: 'karatsu', nameJa: '唐津市', nameEn: 'Karatsu', status: 'coming-soon'},
  {jis: '41203', slug: 'tosu', nameJa: '鳥栖市', nameEn: 'Tosu', status: 'coming-soon'},
  {jis: '41204', slug: 'taku', nameJa: '多久市', nameEn: 'Taku', status: 'coming-soon'},
  {jis: '41205', slug: 'imari', nameJa: '伊万里市', nameEn: 'Imari', status: 'coming-soon'},
  {jis: '41206', slug: 'takeo', nameJa: '武雄市', nameEn: 'Takeo', status: 'coming-soon'},
  {jis: '41207', slug: 'kashima', nameJa: '鹿島市', nameEn: 'Kashima', status: 'coming-soon'},
  {jis: '41208', slug: 'ogi', nameJa: '小城市', nameEn: 'Ogi', status: 'coming-soon'},
  {jis: '41209', slug: 'ureshino', nameJa: '嬉野市', nameEn: 'Ureshino', status: 'coming-soon'},
  {jis: '41210', slug: 'kanzaki', nameJa: '神埼市', nameEn: 'Kanzaki', status: 'coming-soon'},
  {jis: '41327', slug: 'yoshinogari', nameJa: '吉野ヶ里町', nameEn: 'Yoshinogari', status: 'coming-soon'},
  {jis: '41341', slug: 'kiyama', nameJa: '基山町', nameEn: 'Kiyama', status: 'coming-soon'},
  {jis: '41345', slug: 'kamimine', nameJa: '上峰町', nameEn: 'Kamimine', status: 'coming-soon'},
  {jis: '41346', slug: 'miyaki', nameJa: 'みやき町', nameEn: 'Miyaki', status: 'coming-soon'},
  {jis: '41387', slug: 'genkai', nameJa: '玄海町', nameEn: 'Genkai', status: 'coming-soon'},
  {jis: '41401', slug: 'arita', nameJa: '有田町', nameEn: 'Arita', status: 'coming-soon'},
  {jis: '41423', slug: 'omachi', nameJa: '大町町', nameEn: 'Omachi', status: 'coming-soon'},
  {jis: '41424', slug: 'kohoku', nameJa: '江北町', nameEn: 'Kohoku', status: 'coming-soon'},
  {jis: '41425', slug: 'shiroishi', nameJa: '白石町', nameEn: 'Shiroishi', status: 'coming-soon'},
  {jis: '41441', slug: 'tara', nameJa: '太良町', nameEn: 'Tara', status: 'coming-soon'},
];

export const SAGA_MUNICIPALITY_BY_SLUG = new Map(
  SAGA_MUNICIPALITIES.map((m) => [m.slug, m])
);
