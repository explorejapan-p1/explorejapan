import type {Municipality} from './kagawa-municipalities';

/**
 * Nara municipalities (奈良県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const NARA_MUNICIPALITIES: Municipality[] = [
  {jis: '29201', slug: 'nara', nameJa: '奈良市', nameEn: 'Nara', status: 'coming-soon'},
  {jis: '29202', slug: 'yamatotakada', nameJa: '大和高田市', nameEn: 'Yamatotakada', status: 'coming-soon'},
  {jis: '29203', slug: 'yamatokooriyama', nameJa: '大和郡山市', nameEn: 'Yamatokooriyama', status: 'coming-soon'},
  {jis: '29204', slug: 'tenri', nameJa: '天理市', nameEn: 'Tenri', status: 'coming-soon'},
  {jis: '29205', slug: 'kashihara', nameJa: '橿原市', nameEn: 'Kashihara', status: 'coming-soon'},
  {jis: '29206', slug: 'sakurai', nameJa: '桜井市', nameEn: 'Sakurai', status: 'coming-soon'},
  {jis: '29207', slug: 'gojo', nameJa: '五條市', nameEn: 'Gojo', status: 'coming-soon'},
  {jis: '29208', slug: 'gose', nameJa: '御所市', nameEn: 'Gose', status: 'coming-soon'},
  {jis: '29209', slug: 'ikoma', nameJa: '生駒市', nameEn: 'Ikoma', status: 'coming-soon'},
  {jis: '29210', slug: 'kashiba', nameJa: '香芝市', nameEn: 'Kashiba', status: 'coming-soon'},
  {jis: '29211', slug: 'katsuragi', nameJa: '葛城市', nameEn: 'Katsuragi', status: 'coming-soon'},
  {jis: '29212', slug: 'uda', nameJa: '宇陀市', nameEn: 'Uda', status: 'coming-soon'},
  {jis: '29322', slug: 'yamazoe', nameJa: '山添村', nameEn: 'Yamazoe', status: 'coming-soon'},
  {jis: '29342', slug: 'heguri', nameJa: '平群町', nameEn: 'Heguri', status: 'coming-soon'},
  {jis: '29343', slug: 'sango', nameJa: '三郷町', nameEn: 'Sango', status: 'coming-soon'},
  {jis: '29344', slug: 'ikaruga', nameJa: '斑鳩町', nameEn: 'Ikaruga', status: 'coming-soon'},
  {jis: '29345', slug: 'ando', nameJa: '安堵町', nameEn: 'Ando', status: 'coming-soon'},
  {jis: '29361', slug: 'kawanishi', nameJa: '川西町', nameEn: 'Kawanishi', status: 'coming-soon'},
  {jis: '29362', slug: 'miyake', nameJa: '三宅町', nameEn: 'Miyake', status: 'coming-soon'},
  {jis: '29363', slug: 'tawaramoto', nameJa: '田原本町', nameEn: 'Tawaramoto', status: 'coming-soon'},
  {jis: '29385', slug: 'soni', nameJa: '曽爾村', nameEn: 'Soni', status: 'coming-soon'},
  {jis: '29386', slug: 'mitsue', nameJa: '御杖村', nameEn: 'Mitsue', status: 'coming-soon'},
  {jis: '29401', slug: 'takatori', nameJa: '高取町', nameEn: 'Takatori', status: 'coming-soon'},
  {jis: '29402', slug: 'asuka', nameJa: '明日香村', nameEn: 'Asuka', status: 'coming-soon'},
  {jis: '29424', slug: 'kanmaki', nameJa: '上牧町', nameEn: 'Kanmaki', status: 'coming-soon'},
  {jis: '29425', slug: 'oji', nameJa: '王寺町', nameEn: 'Oji', status: 'coming-soon'},
  {jis: '29426', slug: 'koriyo', nameJa: '広陵町', nameEn: 'Koriyo', status: 'coming-soon'},
  {jis: '29427', slug: 'kawai', nameJa: '河合町', nameEn: 'Kawai', status: 'coming-soon'},
  {jis: '29441', slug: 'yoshino', nameJa: '吉野町', nameEn: 'Yoshino', status: 'coming-soon'},
  {jis: '29442', slug: 'oyodo', nameJa: '大淀町', nameEn: 'Oyodo', status: 'coming-soon'},
  {jis: '29443', slug: 'shimoichi', nameJa: '下市町', nameEn: 'Shimoichi', status: 'coming-soon'},
  {jis: '29444', slug: 'kurotaki', nameJa: '黒滝村', nameEn: 'Kurotaki', status: 'coming-soon'},
  {jis: '29446', slug: 'tenkawa', nameJa: '天川村', nameEn: 'Tenkawa', status: 'coming-soon'},
  {jis: '29447', slug: 'nosegawa', nameJa: '野迫川村', nameEn: 'Nosegawa', status: 'coming-soon'},
  {jis: '29449', slug: 'totsukawa', nameJa: '十津川村', nameEn: 'Totsukawa', status: 'coming-soon'},
  {jis: '29450', slug: 'shimokitayama', nameJa: '下北山村', nameEn: 'Shimokitayama', status: 'coming-soon'},
  {jis: '29451', slug: 'kamikitayama', nameJa: '上北山村', nameEn: 'Kamikitayama', status: 'coming-soon'},
  {jis: '29452', slug: 'kawakami', nameJa: '川上村', nameEn: 'Kawakami', status: 'coming-soon'},
  {jis: '29453', slug: 'higashiyoshino', nameJa: '東吉野村', nameEn: 'Higashiyoshino', status: 'coming-soon'},
];

export const NARA_MUNICIPALITY_BY_SLUG = new Map(
  NARA_MUNICIPALITIES.map((m) => [m.slug, m])
);
