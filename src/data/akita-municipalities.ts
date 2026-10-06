import type {Municipality} from './kagawa-municipalities';

/**
 * Akita municipalities (秋田県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const AKITA_MUNICIPALITIES: Municipality[] = [
  {jis: '05201', slug: 'akita', nameJa: '秋田市', nameEn: 'Akita', status: 'coming-soon'},
  {jis: '05202', slug: 'noshiro', nameJa: '能代市', nameEn: 'Noshiro', status: 'coming-soon'},
  {jis: '05203', slug: 'yokote', nameJa: '横手市', nameEn: 'Yokote', status: 'coming-soon'},
  {jis: '05204', slug: 'odate', nameJa: '大館市', nameEn: 'Odate', status: 'coming-soon'},
  {jis: '05206', slug: 'oga', nameJa: '男鹿市', nameEn: 'Oga', status: 'coming-soon'},
  {jis: '05207', slug: 'yuzawa', nameJa: '湯沢市', nameEn: 'Yuzawa', status: 'coming-soon'},
  {jis: '05209', slug: 'kazuno', nameJa: '鹿角市', nameEn: 'Kazuno', status: 'coming-soon'},
  {jis: '05210', slug: 'yurihonjo', nameJa: '由利本荘市', nameEn: 'Yurihonjo', status: 'coming-soon'},
  {jis: '05211', slug: 'katagami', nameJa: '潟上市', nameEn: 'Katagami', status: 'coming-soon'},
  {jis: '05212', slug: 'daisen', nameJa: '大仙市', nameEn: 'Daisen', status: 'coming-soon'},
  {jis: '05213', slug: 'kitaakita', nameJa: '北秋田市', nameEn: 'Kitaakita', status: 'coming-soon'},
  {jis: '05214', slug: 'nikaho', nameJa: 'にかほ市', nameEn: 'Nikaho', status: 'coming-soon'},
  {jis: '05215', slug: 'senboku', nameJa: '仙北市', nameEn: 'Senboku', status: 'coming-soon'},
  {jis: '05303', slug: 'kosaka', nameJa: '小坂町', nameEn: 'Kosaka', status: 'coming-soon'},
  {jis: '05327', slug: 'kamikoani', nameJa: '上小阿仁村', nameEn: 'Kamikoani', status: 'coming-soon'},
  {jis: '05346', slug: 'fujisato', nameJa: '藤里町', nameEn: 'Fujisato', status: 'coming-soon'},
  {jis: '05348', slug: 'mitane', nameJa: '三種町', nameEn: 'Mitane', status: 'coming-soon'},
  {jis: '05349', slug: 'happo', nameJa: '八峰町', nameEn: 'Happo', status: 'coming-soon'},
  {jis: '05361', slug: 'gojome', nameJa: '五城目町', nameEn: 'Gojome', status: 'coming-soon'},
  {jis: '05363', slug: 'hachirogata', nameJa: '八郎潟町', nameEn: 'Hachirogata', status: 'coming-soon'},
  {jis: '05366', slug: 'ikawa', nameJa: '井川町', nameEn: 'Ikawa', status: 'coming-soon'},
  {jis: '05368', slug: 'ogata', nameJa: '大潟村', nameEn: 'Ogata', status: 'coming-soon'},
  {jis: '05434', slug: 'misato', nameJa: '美郷町', nameEn: 'Misato', status: 'coming-soon'},
  {jis: '05463', slug: 'ugo', nameJa: '羽後町', nameEn: 'Ugo', status: 'coming-soon'},
  {jis: '05464', slug: 'higashinaruse', nameJa: '東成瀬村', nameEn: 'Higashinaruse', status: 'coming-soon'},
];

export const AKITA_MUNICIPALITY_BY_SLUG = new Map(
  AKITA_MUNICIPALITIES.map((m) => [m.slug, m])
);
