import type {Municipality} from './kagawa-municipalities';

/**
 * Kagoshima municipalities (鹿児島県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const KAGOSHIMA_MUNICIPALITIES: Municipality[] = [
  {jis: '46201', slug: 'kagoshima', nameJa: '鹿児島市', nameEn: 'Kagoshima', status: 'coming-soon'},
  {jis: '46203', slug: 'kanoya', nameJa: '鹿屋市', nameEn: 'Kanoya', status: 'coming-soon'},
  {jis: '46204', slug: 'makurazaki', nameJa: '枕崎市', nameEn: 'Makurazaki', status: 'coming-soon'},
  {jis: '46206', slug: 'akune', nameJa: '阿久根市', nameEn: 'Akune', status: 'coming-soon'},
  {jis: '46208', slug: 'izumi', nameJa: '出水市', nameEn: 'Izumi', status: 'coming-soon'},
  {jis: '46210', slug: 'ibusuki', nameJa: '指宿市', nameEn: 'Ibusuki', status: 'coming-soon'},
  {jis: '46213', slug: 'nishinoomote', nameJa: '西之表市', nameEn: 'Nishinoomote', status: 'coming-soon'},
  {jis: '46214', slug: 'tarumizu', nameJa: '垂水市', nameEn: 'Tarumizu', status: 'coming-soon'},
  {jis: '46215', slug: 'satsumasendai', nameJa: '薩摩川内市', nameEn: 'Satsumasendai', status: 'coming-soon'},
  {jis: '46216', slug: 'hioki', nameJa: '日置市', nameEn: 'Hioki', status: 'coming-soon'},
  {jis: '46217', slug: 'soo', nameJa: '曽於市', nameEn: 'Soo', status: 'coming-soon'},
  {jis: '46218', slug: 'kirishima', nameJa: '霧島市', nameEn: 'Kirishima', status: 'coming-soon'},
  {jis: '46219', slug: 'ichikikushikino', nameJa: 'いちき串木野市', nameEn: 'Ichikikushikino', status: 'coming-soon'},
  {jis: '46220', slug: 'minamisatsuma', nameJa: '南さつま市', nameEn: 'Minamisatsuma', status: 'coming-soon'},
  {jis: '46221', slug: 'shibushi', nameJa: '志布志市', nameEn: 'Shibushi', status: 'coming-soon'},
  {jis: '46222', slug: 'amami', nameJa: '奄美市', nameEn: 'Amami', status: 'coming-soon'},
  {jis: '46223', slug: 'minamikyushu', nameJa: '南九州市', nameEn: 'Minamikyushu', status: 'coming-soon'},
  {jis: '46224', slug: 'isa', nameJa: '伊佐市', nameEn: 'Isa', status: 'coming-soon'},
  {jis: '46225', slug: 'aira', nameJa: '姶良市', nameEn: 'Aira', status: 'coming-soon'},
  {jis: '46303', slug: 'mishima', nameJa: '三島村', nameEn: 'Mishima', status: 'coming-soon'},
  {jis: '46304', slug: 'toshima', nameJa: '十島村', nameEn: 'Toshima', status: 'coming-soon'},
  {jis: '46392', slug: 'satsuma', nameJa: 'さつま町', nameEn: 'Satsuma', status: 'coming-soon'},
  {jis: '46404', slug: 'nagashima', nameJa: '長島町', nameEn: 'Nagashima', status: 'coming-soon'},
  {jis: '46452', slug: 'yuusui', nameJa: '湧水町', nameEn: 'Yuusui', status: 'coming-soon'},
  {jis: '46468', slug: 'osaki', nameJa: '大崎町', nameEn: 'Osaki', status: 'coming-soon'},
  {jis: '46482', slug: 'higashikushira', nameJa: '東串良町', nameEn: 'Higashikushira', status: 'coming-soon'},
  {jis: '46490', slug: 'kinko', nameJa: '錦江町', nameEn: 'Kinko', status: 'coming-soon'},
  {jis: '46491', slug: 'minamiosumi', nameJa: '南大隅町', nameEn: 'Minamiosumi', status: 'coming-soon'},
  {jis: '46492', slug: 'kimotsuki', nameJa: '肝付町', nameEn: 'Kimotsuki', status: 'coming-soon'},
  {jis: '46501', slug: 'nakatane', nameJa: '中種子町', nameEn: 'Nakatane', status: 'coming-soon'},
  {jis: '46502', slug: 'minamitane', nameJa: '南種子町', nameEn: 'Minamitane', status: 'coming-soon'},
  {jis: '46505', slug: 'yakushima', nameJa: '屋久島町', nameEn: 'Yakushima', status: 'coming-soon'},
  {jis: '46523', slug: 'yamato', nameJa: '大和村', nameEn: 'Yamato', status: 'coming-soon'},
  {jis: '46524', slug: 'uken', nameJa: '宇検村', nameEn: 'Uken', status: 'coming-soon'},
  {jis: '46525', slug: 'setouchi', nameJa: '瀬戸内町', nameEn: 'Setouchi', status: 'coming-soon'},
  {jis: '46527', slug: 'tatsugo', nameJa: '龍郷町', nameEn: 'Tatsugo', status: 'coming-soon'},
  {jis: '46529', slug: 'kikai', nameJa: '喜界町', nameEn: 'Kikai', status: 'coming-soon'},
  {jis: '46530', slug: 'tokunoshima', nameJa: '徳之島町', nameEn: 'Tokunoshima', status: 'coming-soon'},
  {jis: '46531', slug: 'amagi', nameJa: '天城町', nameEn: 'Amagi', status: 'coming-soon'},
  {jis: '46532', slug: 'isen', nameJa: '伊仙町', nameEn: 'Isen', status: 'coming-soon'},
  {jis: '46533', slug: 'wadomari', nameJa: '和泊町', nameEn: 'Wadomari', status: 'coming-soon'},
  {jis: '46534', slug: 'china', nameJa: '知名町', nameEn: 'China', status: 'coming-soon'},
  {jis: '46535', slug: 'yoron', nameJa: '与論町', nameEn: 'Yoron', status: 'coming-soon'},
];

export const KAGOSHIMA_MUNICIPALITY_BY_SLUG = new Map(
  KAGOSHIMA_MUNICIPALITIES.map((m) => [m.slug, m])
);
