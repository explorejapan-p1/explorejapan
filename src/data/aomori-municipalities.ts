import type {Municipality} from './kagawa-municipalities';

/**
 * Aomori municipalities (青森県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const AOMORI_MUNICIPALITIES: Municipality[] = [
  {jis: '02201', slug: 'aomori', nameJa: '青森市', nameEn: 'Aomori', status: 'coming-soon'},
  {jis: '02202', slug: 'hirosaki', nameJa: '弘前市', nameEn: 'Hirosaki', status: 'coming-soon'},
  {jis: '02203', slug: 'hachinohe', nameJa: '八戸市', nameEn: 'Hachinohe', status: 'coming-soon'},
  {jis: '02204', slug: 'kuroishi', nameJa: '黒石市', nameEn: 'Kuroishi', status: 'coming-soon'},
  {jis: '02205', slug: 'goshogawara', nameJa: '五所川原市', nameEn: 'Goshogawara', status: 'coming-soon'},
  {jis: '02206', slug: 'towada', nameJa: '十和田市', nameEn: 'Towada', status: 'coming-soon'},
  {jis: '02207', slug: 'misawa', nameJa: '三沢市', nameEn: 'Misawa', status: 'coming-soon'},
  {jis: '02208', slug: 'mutsu', nameJa: 'むつ市', nameEn: 'Mutsu', status: 'coming-soon'},
  {jis: '02209', slug: 'tsugaru', nameJa: 'つがる市', nameEn: 'Tsugaru', status: 'coming-soon'},
  {jis: '02210', slug: 'hirakawa', nameJa: '平川市', nameEn: 'Hirakawa', status: 'coming-soon'},
  {jis: '02301', slug: 'hiranai', nameJa: '平内町', nameEn: 'Hiranai', status: 'coming-soon'},
  {jis: '02303', slug: 'imabetsu', nameJa: '今別町', nameEn: 'Imabetsu', status: 'coming-soon'},
  {jis: '02304', slug: 'yomogita', nameJa: '蓬田村', nameEn: 'Yomogita', status: 'coming-soon'},
  {jis: '02307', slug: 'sotogahama', nameJa: '外ヶ浜町', nameEn: 'Sotogahama', status: 'coming-soon'},
  {jis: '02321', slug: 'ajigasawa', nameJa: '鰺ヶ沢町', nameEn: 'Ajigasawa', status: 'coming-soon'},
  {jis: '02323', slug: 'fukaura', nameJa: '深浦町', nameEn: 'Fukaura', status: 'coming-soon'},
  {jis: '02343', slug: 'nishimeya', nameJa: '西目屋村', nameEn: 'Nishimeya', status: 'coming-soon'},
  {jis: '02361', slug: 'fujisaki', nameJa: '藤崎町', nameEn: 'Fujisaki', status: 'coming-soon'},
  {jis: '02362', slug: 'owani', nameJa: '大鰐町', nameEn: 'Owani', status: 'coming-soon'},
  {jis: '02367', slug: 'inakadate', nameJa: '田舎館村', nameEn: 'Inakadate', status: 'coming-soon'},
  {jis: '02381', slug: 'itayanagi', nameJa: '板柳町', nameEn: 'Itayanagi', status: 'coming-soon'},
  {jis: '02384', slug: 'tsuruta', nameJa: '鶴田町', nameEn: 'Tsuruta', status: 'coming-soon'},
  {jis: '02387', slug: 'nakadomari', nameJa: '中泊町', nameEn: 'Nakadomari', status: 'coming-soon'},
  {jis: '02401', slug: 'noheji', nameJa: '野辺地町', nameEn: 'Noheji', status: 'coming-soon'},
  {jis: '02402', slug: 'shichinohe', nameJa: '七戸町', nameEn: 'Shichinohe', status: 'coming-soon'},
  {jis: '02405', slug: 'rokunohe', nameJa: '六戸町', nameEn: 'Rokunohe', status: 'coming-soon'},
  {jis: '02406', slug: 'yokohama', nameJa: '横浜町', nameEn: 'Yokohama', status: 'coming-soon'},
  {jis: '02408', slug: 'tohoku', nameJa: '東北町', nameEn: 'Tohoku', status: 'coming-soon'},
  {jis: '02411', slug: 'rokkasho', nameJa: '六ヶ所村', nameEn: 'Rokkasho', status: 'coming-soon'},
  {jis: '02412', slug: 'oirase', nameJa: 'おいらせ町', nameEn: 'Oirase', status: 'coming-soon'},
  {jis: '02423', slug: 'oma', nameJa: '大間町', nameEn: 'Oma', status: 'coming-soon'},
  {jis: '02424', slug: 'higashidoori', nameJa: '東通村', nameEn: 'Higashidoori', status: 'coming-soon'},
  {jis: '02425', slug: 'kazamaura', nameJa: '風間浦村', nameEn: 'Kazamaura', status: 'coming-soon'},
  {jis: '02426', slug: 'sai', nameJa: '佐井村', nameEn: 'Sai', status: 'coming-soon'},
  {jis: '02441', slug: 'sannohe', nameJa: '三戸町', nameEn: 'Sannohe', status: 'coming-soon'},
  {jis: '02442', slug: 'gonohe', nameJa: '五戸町', nameEn: 'Gonohe', status: 'coming-soon'},
  {jis: '02443', slug: 'takko', nameJa: '田子町', nameEn: 'Takko', status: 'coming-soon'},
  {jis: '02445', slug: 'nanbu', nameJa: '南部町', nameEn: 'Nanbu', status: 'coming-soon'},
  {jis: '02446', slug: 'hashikami', nameJa: '階上町', nameEn: 'Hashikami', status: 'coming-soon'},
  {jis: '02450', slug: 'shingo', nameJa: '新郷村', nameEn: 'Shingo', status: 'coming-soon'},
];

export const AOMORI_MUNICIPALITY_BY_SLUG = new Map(
  AOMORI_MUNICIPALITIES.map((m) => [m.slug, m])
);
