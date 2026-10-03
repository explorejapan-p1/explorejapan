import type {Municipality} from './kagawa-municipalities';

/**
 * Iwate municipalities (岩手県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const IWATE_MUNICIPALITIES: Municipality[] = [
  {jis: '03201', slug: 'morioka', nameJa: '盛岡市', nameEn: 'Morioka', status: 'coming-soon'},
  {jis: '03202', slug: 'miyako', nameJa: '宮古市', nameEn: 'Miyako', status: 'coming-soon'},
  {jis: '03203', slug: 'ofunato', nameJa: '大船渡市', nameEn: 'Ofunato', status: 'coming-soon'},
  {jis: '03205', slug: 'hanamaki', nameJa: '花巻市', nameEn: 'Hanamaki', status: 'coming-soon'},
  {jis: '03206', slug: 'kitakami', nameJa: '北上市', nameEn: 'Kitakami', status: 'coming-soon'},
  {jis: '03207', slug: 'kuji', nameJa: '久慈市', nameEn: 'Kuji', status: 'coming-soon'},
  {jis: '03208', slug: 'toono', nameJa: '遠野市', nameEn: 'Toono', status: 'coming-soon'},
  {jis: '03209', slug: 'ichinoseki', nameJa: '一関市', nameEn: 'Ichinoseki', status: 'coming-soon'},
  {jis: '03210', slug: 'rikuzentakata', nameJa: '陸前高田市', nameEn: 'Rikuzentakata', status: 'coming-soon'},
  {jis: '03211', slug: 'kamaishi', nameJa: '釜石市', nameEn: 'Kamaishi', status: 'coming-soon'},
  {jis: '03213', slug: 'ninohe', nameJa: '二戸市', nameEn: 'Ninohe', status: 'coming-soon'},
  {jis: '03214', slug: 'hachimantai', nameJa: '八幡平市', nameEn: 'Hachimantai', status: 'coming-soon'},
  {jis: '03215', slug: 'oshu', nameJa: '奥州市', nameEn: 'Oshu', status: 'coming-soon'},
  {jis: '03216', slug: 'takizawa', nameJa: '滝沢市', nameEn: 'Takizawa', status: 'coming-soon'},
  {jis: '03301', slug: 'shizukuishi', nameJa: '雫石町', nameEn: 'Shizukuishi', status: 'coming-soon'},
  {jis: '03302', slug: 'kuzumaki', nameJa: '葛巻町', nameEn: 'Kuzumaki', status: 'coming-soon'},
  {jis: '03303', slug: 'iwate', nameJa: '岩手町', nameEn: 'Iwate', status: 'coming-soon'},
  {jis: '03321', slug: 'shiwa', nameJa: '紫波町', nameEn: 'Shiwa', status: 'coming-soon'},
  {jis: '03322', slug: 'yahaba', nameJa: '矢巾町', nameEn: 'Yahaba', status: 'coming-soon'},
  {jis: '03366', slug: 'nishiwaga', nameJa: '西和賀町', nameEn: 'Nishiwaga', status: 'coming-soon'},
  {jis: '03381', slug: 'kanegasaki', nameJa: '金ケ崎町', nameEn: 'Kanegasaki', status: 'coming-soon'},
  {jis: '03402', slug: 'hiraizumi', nameJa: '平泉町', nameEn: 'Hiraizumi', status: 'coming-soon'},
  {jis: '03441', slug: 'sumita', nameJa: '住田町', nameEn: 'Sumita', status: 'coming-soon'},
  {jis: '03461', slug: 'otsuchi', nameJa: '大槌町', nameEn: 'Otsuchi', status: 'coming-soon'},
  {jis: '03482', slug: 'yamada', nameJa: '山田町', nameEn: 'Yamada', status: 'coming-soon'},
  {jis: '03483', slug: 'iwaizumi', nameJa: '岩泉町', nameEn: 'Iwaizumi', status: 'coming-soon'},
  {jis: '03484', slug: 'tanohata', nameJa: '田野畑村', nameEn: 'Tanohata', status: 'coming-soon'},
  {jis: '03485', slug: 'fudai', nameJa: '普代村', nameEn: 'Fudai', status: 'coming-soon'},
  {jis: '03501', slug: 'karumai', nameJa: '軽米町', nameEn: 'Karumai', status: 'coming-soon'},
  {jis: '03503', slug: 'noda', nameJa: '野田村', nameEn: 'Noda', status: 'coming-soon'},
  {jis: '03506', slug: 'kunohe', nameJa: '九戸村', nameEn: 'Kunohe', status: 'coming-soon'},
  {jis: '03507', slug: 'hirono', nameJa: '洋野町', nameEn: 'Hirono', status: 'coming-soon'},
  {jis: '03524', slug: 'ichinohe', nameJa: '一戸町', nameEn: 'Ichinohe', status: 'coming-soon'},
];

export const IWATE_MUNICIPALITY_BY_SLUG = new Map(
  IWATE_MUNICIPALITIES.map((m) => [m.slug, m])
);
