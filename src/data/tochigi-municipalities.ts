import type {Municipality} from './kagawa-municipalities';

/**
 * Tochigi municipalities (栃木県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const TOCHIGI_MUNICIPALITIES: Municipality[] = [
  {jis: '09201', slug: 'utsunomiya', nameJa: '宇都宮市', nameEn: 'Utsunomiya', status: 'coming-soon'},
  {jis: '09202', slug: 'ashikaga', nameJa: '足利市', nameEn: 'Ashikaga', status: 'coming-soon'},
  {jis: '09203', slug: 'tochigi', nameJa: '栃木市', nameEn: 'Tochigi', status: 'coming-soon'},
  {jis: '09204', slug: 'sano', nameJa: '佐野市', nameEn: 'Sano', status: 'coming-soon'},
  {jis: '09205', slug: 'kanuma', nameJa: '鹿沼市', nameEn: 'Kanuma', status: 'coming-soon'},
  {jis: '09206', slug: 'nikko', nameJa: '日光市', nameEn: 'Nikko', status: 'coming-soon'},
  {jis: '09208', slug: 'oyama', nameJa: '小山市', nameEn: 'Oyama', status: 'coming-soon'},
  {jis: '09209', slug: 'mooka', nameJa: '真岡市', nameEn: 'Mooka', status: 'coming-soon'},
  {jis: '09210', slug: 'otawara', nameJa: '大田原市', nameEn: 'Otawara', status: 'coming-soon'},
  {jis: '09211', slug: 'yaita', nameJa: '矢板市', nameEn: 'Yaita', status: 'coming-soon'},
  {jis: '09213', slug: 'nasushiobara', nameJa: '那須塩原市', nameEn: 'Nasushiobara', status: 'coming-soon'},
  {jis: '09214', slug: 'sakura', nameJa: 'さくら市', nameEn: 'Sakura', status: 'coming-soon'},
  {jis: '09215', slug: 'nasukarasuyama', nameJa: '那須烏山市', nameEn: 'Nasukarasuyama', status: 'coming-soon'},
  {jis: '09216', slug: 'shimotsuke', nameJa: '下野市', nameEn: 'Shimotsuke', status: 'coming-soon'},
  {jis: '09301', slug: 'kaminokawa', nameJa: '上三川町', nameEn: 'Kaminokawa', status: 'coming-soon'},
  {jis: '09342', slug: 'mashiko', nameJa: '益子町', nameEn: 'Mashiko', status: 'coming-soon'},
  {jis: '09343', slug: 'motegi', nameJa: '茂木町', nameEn: 'Motegi', status: 'coming-soon'},
  {jis: '09344', slug: 'ichikai', nameJa: '市貝町', nameEn: 'Ichikai', status: 'coming-soon'},
  {jis: '09345', slug: 'haga', nameJa: '芳賀町', nameEn: 'Haga', status: 'coming-soon'},
  {jis: '09361', slug: 'mibu', nameJa: '壬生町', nameEn: 'Mibu', status: 'coming-soon'},
  {jis: '09364', slug: 'nogi', nameJa: '野木町', nameEn: 'Nogi', status: 'coming-soon'},
  {jis: '09384', slug: 'shioya', nameJa: '塩谷町', nameEn: 'Shioya', status: 'coming-soon'},
  {jis: '09386', slug: 'takanezawa', nameJa: '高根沢町', nameEn: 'Takanezawa', status: 'coming-soon'},
  {jis: '09407', slug: 'nasu', nameJa: '那須町', nameEn: 'Nasu', status: 'coming-soon'},
  {jis: '09411', slug: 'nakagawa', nameJa: '那珂川町', nameEn: 'Nakagawa', status: 'coming-soon'},
];

export const TOCHIGI_MUNICIPALITY_BY_SLUG = new Map(
  TOCHIGI_MUNICIPALITIES.map((m) => [m.slug, m])
);
