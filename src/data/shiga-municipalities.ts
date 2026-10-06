import type {Municipality} from './kagawa-municipalities';

/**
 * Shiga municipalities (滋賀県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const SHIGA_MUNICIPALITIES: Municipality[] = [
  {jis: '25201', slug: 'otsu', nameJa: '大津市', nameEn: 'Otsu', status: 'coming-soon'},
  {jis: '25202', slug: 'hikone', nameJa: '彦根市', nameEn: 'Hikone', status: 'coming-soon'},
  {jis: '25203', slug: 'nagahama', nameJa: '長浜市', nameEn: 'Nagahama', status: 'coming-soon'},
  {jis: '25204', slug: 'omihachiman', nameJa: '近江八幡市', nameEn: 'Omihachiman', status: 'coming-soon'},
  {jis: '25206', slug: 'kusatsu', nameJa: '草津市', nameEn: 'Kusatsu', status: 'coming-soon'},
  {jis: '25207', slug: 'moriyama', nameJa: '守山市', nameEn: 'Moriyama', status: 'coming-soon'},
  {jis: '25208', slug: 'ritto', nameJa: '栗東市', nameEn: 'Ritto', status: 'coming-soon'},
  {jis: '25209', slug: 'koka', nameJa: '甲賀市', nameEn: 'Koka', status: 'coming-soon'},
  {jis: '25210', slug: 'yasu', nameJa: '野洲市', nameEn: 'Yasu', status: 'coming-soon'},
  {jis: '25211', slug: 'konan', nameJa: '湖南市', nameEn: 'Konan', status: 'coming-soon'},
  {jis: '25212', slug: 'takashima', nameJa: '高島市', nameEn: 'Takashima', status: 'coming-soon'},
  {jis: '25213', slug: 'higashiomi', nameJa: '東近江市', nameEn: 'Higashiomi', status: 'coming-soon'},
  {jis: '25214', slug: 'maibara', nameJa: '米原市', nameEn: 'Maibara', status: 'coming-soon'},
  {jis: '25383', slug: 'hino', nameJa: '日野町', nameEn: 'Hino', status: 'coming-soon'},
  {jis: '25384', slug: 'riyuuo', nameJa: '竜王町', nameEn: 'Riyuuo', status: 'coming-soon'},
  {jis: '25425', slug: 'aisho', nameJa: '愛荘町', nameEn: 'Aisho', status: 'coming-soon'},
  {jis: '25441', slug: 'toyosato', nameJa: '豊郷町', nameEn: 'Toyosato', status: 'coming-soon'},
  {jis: '25442', slug: 'kora', nameJa: '甲良町', nameEn: 'Kora', status: 'coming-soon'},
  {jis: '25443', slug: 'taga', nameJa: '多賀町', nameEn: 'Taga', status: 'coming-soon'},
];

export const SHIGA_MUNICIPALITY_BY_SLUG = new Map(
  SHIGA_MUNICIPALITIES.map((m) => [m.slug, m])
);
