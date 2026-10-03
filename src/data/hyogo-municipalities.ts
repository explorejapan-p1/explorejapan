import type {Municipality} from './kagawa-municipalities';

/**
 * Hyogo municipalities (兵庫県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const HYOGO_MUNICIPALITIES: Municipality[] = [
  {jis: '28100', slug: 'kobe', nameJa: '神戸市', nameEn: 'Kobe', status: 'coming-soon'},
  {jis: '28201', slug: 'himeji', nameJa: '姫路市', nameEn: 'Himeji', status: 'coming-soon'},
  {jis: '28202', slug: 'amagasaki', nameJa: '尼崎市', nameEn: 'Amagasaki', status: 'coming-soon'},
  {jis: '28203', slug: 'akashi', nameJa: '明石市', nameEn: 'Akashi', status: 'coming-soon'},
  {jis: '28204', slug: 'nishinomiya', nameJa: '西宮市', nameEn: 'Nishinomiya', status: 'coming-soon'},
  {jis: '28205', slug: 'sumoto', nameJa: '洲本市', nameEn: 'Sumoto', status: 'coming-soon'},
  {jis: '28206', slug: 'ashiya', nameJa: '芦屋市', nameEn: 'Ashiya', status: 'coming-soon'},
  {jis: '28207', slug: 'itami', nameJa: '伊丹市', nameEn: 'Itami', status: 'coming-soon'},
  {jis: '28208', slug: 'aioi', nameJa: '相生市', nameEn: 'Aioi', status: 'coming-soon'},
  {jis: '28209', slug: 'toyooka', nameJa: '豊岡市', nameEn: 'Toyooka', status: 'coming-soon'},
  {jis: '28210', slug: 'kakogawa', nameJa: '加古川市', nameEn: 'Kakogawa', status: 'coming-soon'},
  {jis: '28212', slug: 'ako', nameJa: '赤穂市', nameEn: 'Ako', status: 'coming-soon'},
  {jis: '28213', slug: 'nishiwaki', nameJa: '西脇市', nameEn: 'Nishiwaki', status: 'coming-soon'},
  {jis: '28214', slug: 'takarazuka', nameJa: '宝塚市', nameEn: 'Takarazuka', status: 'coming-soon'},
  {jis: '28215', slug: 'miki', nameJa: '三木市', nameEn: 'Miki', status: 'coming-soon'},
  {jis: '28216', slug: 'takasago', nameJa: '高砂市', nameEn: 'Takasago', status: 'coming-soon'},
  {jis: '28217', slug: 'kawanishi', nameJa: '川西市', nameEn: 'Kawanishi', status: 'coming-soon'},
  {jis: '28218', slug: 'ono', nameJa: '小野市', nameEn: 'Ono', status: 'coming-soon'},
  {jis: '28219', slug: 'sanda', nameJa: '三田市', nameEn: 'Sanda', status: 'coming-soon'},
  {jis: '28220', slug: 'kasai', nameJa: '加西市', nameEn: 'Kasai', status: 'coming-soon'},
  {jis: '28221', slug: 'tanbasasayama', nameJa: '丹波篠山市', nameEn: 'Tanbasasayama', status: 'coming-soon'},
  {jis: '28222', slug: 'yabu', nameJa: '養父市', nameEn: 'Yabu', status: 'coming-soon'},
  {jis: '28223', slug: 'tanba', nameJa: '丹波市', nameEn: 'Tanba', status: 'coming-soon'},
  {jis: '28224', slug: 'minamiawaji', nameJa: '南あわじ市', nameEn: 'Minamiawaji', status: 'coming-soon'},
  {jis: '28225', slug: 'asago', nameJa: '朝来市', nameEn: 'Asago', status: 'coming-soon'},
  {jis: '28226', slug: 'awaji', nameJa: '淡路市', nameEn: 'Awaji', status: 'coming-soon'},
  {jis: '28227', slug: 'shiso', nameJa: '宍粟市', nameEn: 'Shiso', status: 'coming-soon'},
  {jis: '28228', slug: 'kato', nameJa: '加東市', nameEn: 'Kato', status: 'coming-soon'},
  {jis: '28229', slug: 'tatsuno', nameJa: 'たつの市', nameEn: 'Tatsuno', status: 'coming-soon'},
  {jis: '28301', slug: 'inagawa', nameJa: '猪名川町', nameEn: 'Inagawa', status: 'coming-soon'},
  {jis: '28365', slug: 'taka', nameJa: '多可町', nameEn: 'Taka', status: 'coming-soon'},
  {jis: '28381', slug: 'inami', nameJa: '稲美町', nameEn: 'Inami', status: 'coming-soon'},
  {jis: '28382', slug: 'harima', nameJa: '播磨町', nameEn: 'Harima', status: 'coming-soon'},
  {jis: '28442', slug: 'ichikawa', nameJa: '市川町', nameEn: 'Ichikawa', status: 'coming-soon'},
  {jis: '28443', slug: 'fukusaki', nameJa: '福崎町', nameEn: 'Fukusaki', status: 'coming-soon'},
  {jis: '28446', slug: 'kamikawa', nameJa: '神河町', nameEn: 'Kamikawa', status: 'coming-soon'},
  {jis: '28464', slug: 'taishi', nameJa: '太子町', nameEn: 'Taishi', status: 'coming-soon'},
  {jis: '28481', slug: 'kamigoori', nameJa: '上郡町', nameEn: 'Kamigoori', status: 'coming-soon'},
  {jis: '28501', slug: 'sayo', nameJa: '佐用町', nameEn: 'Sayo', status: 'coming-soon'},
  {jis: '28585', slug: 'kami', nameJa: '香美町', nameEn: 'Kami', status: 'coming-soon'},
  {jis: '28586', slug: 'shinonsen', nameJa: '新温泉町', nameEn: 'Shinonsen', status: 'coming-soon'},
];

export const HYOGO_MUNICIPALITY_BY_SLUG = new Map(
  HYOGO_MUNICIPALITIES.map((m) => [m.slug, m])
);
