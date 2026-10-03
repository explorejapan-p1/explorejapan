import type {Municipality} from './kagawa-municipalities';

/**
 * Miyagi municipalities (宮城県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const MIYAGI_MUNICIPALITIES: Municipality[] = [
  {jis: '04100', slug: 'sendai', nameJa: '仙台市', nameEn: 'Sendai', status: 'coming-soon'},
  {jis: '04202', slug: 'ishinomaki', nameJa: '石巻市', nameEn: 'Ishinomaki', status: 'coming-soon'},
  {jis: '04203', slug: 'shiogama', nameJa: '塩竈市', nameEn: 'Shiogama', status: 'coming-soon'},
  {jis: '04205', slug: 'kesennuma', nameJa: '気仙沼市', nameEn: 'Kesennuma', status: 'coming-soon'},
  {jis: '04206', slug: 'shiroishi', nameJa: '白石市', nameEn: 'Shiroishi', status: 'coming-soon'},
  {jis: '04207', slug: 'natori', nameJa: '名取市', nameEn: 'Natori', status: 'coming-soon'},
  {jis: '04208', slug: 'kakuda', nameJa: '角田市', nameEn: 'Kakuda', status: 'coming-soon'},
  {jis: '04209', slug: 'tagajo', nameJa: '多賀城市', nameEn: 'Tagajo', status: 'coming-soon'},
  {jis: '04211', slug: 'iwanuma', nameJa: '岩沼市', nameEn: 'Iwanuma', status: 'coming-soon'},
  {jis: '04212', slug: 'tome', nameJa: '登米市', nameEn: 'Tome', status: 'coming-soon'},
  {jis: '04213', slug: 'kurihara', nameJa: '栗原市', nameEn: 'Kurihara', status: 'coming-soon'},
  {jis: '04214', slug: 'higashimatsushima', nameJa: '東松島市', nameEn: 'Higashimatsushima', status: 'coming-soon'},
  {jis: '04215', slug: 'osaki', nameJa: '大崎市', nameEn: 'Osaki', status: 'coming-soon'},
  {jis: '04216', slug: 'tomiya', nameJa: '富谷市', nameEn: 'Tomiya', status: 'coming-soon'},
  {jis: '04301', slug: 'zao', nameJa: '蔵王町', nameEn: 'Zao', status: 'coming-soon'},
  {jis: '04302', slug: 'shichikashuku', nameJa: '七ヶ宿町', nameEn: 'Shichikashuku', status: 'coming-soon'},
  {jis: '04321', slug: 'ogawara', nameJa: '大河原町', nameEn: 'Ogawara', status: 'coming-soon'},
  {jis: '04322', slug: 'murata', nameJa: '村田町', nameEn: 'Murata', status: 'coming-soon'},
  {jis: '04323', slug: 'shibata', nameJa: '柴田町', nameEn: 'Shibata', status: 'coming-soon'},
  {jis: '04324', slug: 'kawasaki', nameJa: '川崎町', nameEn: 'Kawasaki', status: 'coming-soon'},
  {jis: '04341', slug: 'marumori', nameJa: '丸森町', nameEn: 'Marumori', status: 'coming-soon'},
  {jis: '04361', slug: 'watari', nameJa: '亘理町', nameEn: 'Watari', status: 'coming-soon'},
  {jis: '04362', slug: 'yamamoto', nameJa: '山元町', nameEn: 'Yamamoto', status: 'coming-soon'},
  {jis: '04401', slug: 'matsushima', nameJa: '松島町', nameEn: 'Matsushima', status: 'coming-soon'},
  {jis: '04404', slug: 'shichigahama', nameJa: '七ヶ浜町', nameEn: 'Shichigahama', status: 'coming-soon'},
  {jis: '04406', slug: 'rifu', nameJa: '利府町', nameEn: 'Rifu', status: 'coming-soon'},
  {jis: '04421', slug: 'taiwa', nameJa: '大和町', nameEn: 'Taiwa', status: 'coming-soon'},
  {jis: '04422', slug: 'osato', nameJa: '大郷町', nameEn: 'Osato', status: 'coming-soon'},
  {jis: '04424', slug: 'ohira', nameJa: '大衡村', nameEn: 'Ohira', status: 'coming-soon'},
  {jis: '04444', slug: 'shikama', nameJa: '色麻町', nameEn: 'Shikama', status: 'coming-soon'},
  {jis: '04445', slug: 'kami', nameJa: '加美町', nameEn: 'Kami', status: 'coming-soon'},
  {jis: '04501', slug: 'wakuya', nameJa: '涌谷町', nameEn: 'Wakuya', status: 'coming-soon'},
  {jis: '04505', slug: 'misato', nameJa: '美里町', nameEn: 'Misato', status: 'coming-soon'},
  {jis: '04581', slug: 'onagawa', nameJa: '女川町', nameEn: 'Onagawa', status: 'coming-soon'},
  {jis: '04606', slug: 'minamisanriku', nameJa: '南三陸町', nameEn: 'Minamisanriku', status: 'coming-soon'},
];

export const MIYAGI_MUNICIPALITY_BY_SLUG = new Map(
  MIYAGI_MUNICIPALITIES.map((m) => [m.slug, m])
);
