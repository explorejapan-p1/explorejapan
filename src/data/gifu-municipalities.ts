import type {Municipality} from './kagawa-municipalities';

/**
 * Gifu municipalities (岐阜県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const GIFU_MUNICIPALITIES: Municipality[] = [
  {jis: '21201', slug: 'gifu', nameJa: '岐阜市', nameEn: 'Gifu', status: 'coming-soon'},
  {jis: '21202', slug: 'ogaki', nameJa: '大垣市', nameEn: 'Ogaki', status: 'coming-soon'},
  {jis: '21203', slug: 'takayama', nameJa: '高山市', nameEn: 'Takayama', status: 'coming-soon'},
  {jis: '21204', slug: 'tajimi', nameJa: '多治見市', nameEn: 'Tajimi', status: 'coming-soon'},
  {jis: '21205', slug: 'seki', nameJa: '関市', nameEn: 'Seki', status: 'coming-soon'},
  {jis: '21206', slug: 'nakatsugawa', nameJa: '中津川市', nameEn: 'Nakatsugawa', status: 'coming-soon'},
  {jis: '21207', slug: 'mino', nameJa: '美濃市', nameEn: 'Mino', status: 'coming-soon'},
  {jis: '21208', slug: 'mizunami', nameJa: '瑞浪市', nameEn: 'Mizunami', status: 'coming-soon'},
  {jis: '21209', slug: 'hashima', nameJa: '羽島市', nameEn: 'Hashima', status: 'coming-soon'},
  {jis: '21210', slug: 'ena', nameJa: '恵那市', nameEn: 'Ena', status: 'coming-soon'},
  {jis: '21211', slug: 'minokamo', nameJa: '美濃加茂市', nameEn: 'Minokamo', status: 'coming-soon'},
  {jis: '21212', slug: 'toki', nameJa: '土岐市', nameEn: 'Toki', status: 'coming-soon'},
  {jis: '21213', slug: 'kakamigahara', nameJa: '各務原市', nameEn: 'Kakamigahara', status: 'coming-soon'},
  {jis: '21214', slug: 'kani', nameJa: '可児市', nameEn: 'Kani', status: 'coming-soon'},
  {jis: '21215', slug: 'yamagata', nameJa: '山県市', nameEn: 'Yamagata', status: 'coming-soon'},
  {jis: '21216', slug: 'mizuho', nameJa: '瑞穂市', nameEn: 'Mizuho', status: 'coming-soon'},
  {jis: '21217', slug: 'hida', nameJa: '飛騨市', nameEn: 'Hida', status: 'coming-soon'},
  {jis: '21218', slug: 'motosu', nameJa: '本巣市', nameEn: 'Motosu', status: 'coming-soon'},
  {jis: '21219', slug: 'gujo', nameJa: '郡上市', nameEn: 'Gujo', status: 'coming-soon'},
  {jis: '21220', slug: 'gero', nameJa: '下呂市', nameEn: 'Gero', status: 'coming-soon'},
  {jis: '21221', slug: 'kaizu', nameJa: '海津市', nameEn: 'Kaizu', status: 'coming-soon'},
  {jis: '21302', slug: 'ginan', nameJa: '岐南町', nameEn: 'Ginan', status: 'coming-soon'},
  {jis: '21303', slug: 'kasamatsu', nameJa: '笠松町', nameEn: 'Kasamatsu', status: 'coming-soon'},
  {jis: '21341', slug: 'yoro', nameJa: '養老町', nameEn: 'Yoro', status: 'coming-soon'},
  {jis: '21361', slug: 'tarui', nameJa: '垂井町', nameEn: 'Tarui', status: 'coming-soon'},
  {jis: '21362', slug: 'sekigahara', nameJa: '関ケ原町', nameEn: 'Sekigahara', status: 'coming-soon'},
  {jis: '21381', slug: 'godo', nameJa: '神戸町', nameEn: 'Godo', status: 'coming-soon'},
  {jis: '21382', slug: 'wanouchi', nameJa: '輪之内町', nameEn: 'Wanouchi', status: 'coming-soon'},
  {jis: '21383', slug: 'anpachi', nameJa: '安八町', nameEn: 'Anpachi', status: 'coming-soon'},
  {jis: '21401', slug: 'ibigawa', nameJa: '揖斐川町', nameEn: 'Ibigawa', status: 'coming-soon'},
  {jis: '21403', slug: 'ono', nameJa: '大野町', nameEn: 'Ono', status: 'coming-soon'},
  {jis: '21404', slug: 'ikeda', nameJa: '池田町', nameEn: 'Ikeda', status: 'coming-soon'},
  {jis: '21421', slug: 'kitagata', nameJa: '北方町', nameEn: 'Kitagata', status: 'coming-soon'},
  {jis: '21501', slug: 'sakahogi', nameJa: '坂祝町', nameEn: 'Sakahogi', status: 'coming-soon'},
  {jis: '21502', slug: 'tomika', nameJa: '富加町', nameEn: 'Tomika', status: 'coming-soon'},
  {jis: '21503', slug: 'kawabe', nameJa: '川辺町', nameEn: 'Kawabe', status: 'coming-soon'},
  {jis: '21504', slug: 'hichiso', nameJa: '七宗町', nameEn: 'Hichiso', status: 'coming-soon'},
  {jis: '21505', slug: 'yaotsu', nameJa: '八百津町', nameEn: 'Yaotsu', status: 'coming-soon'},
  {jis: '21506', slug: 'shirakawa', nameJa: '白川町', nameEn: 'Shirakawa', status: 'coming-soon'},
  {jis: '21507', slug: 'higashishirakawa', nameJa: '東白川村', nameEn: 'Higashishirakawa', status: 'coming-soon'},
  {jis: '21521', slug: 'mitake', nameJa: '御嵩町', nameEn: 'Mitake', status: 'coming-soon'},
  {jis: '21604', slug: 'shirakawason', nameJa: '白川村', nameEn: 'Shirakawason', status: 'coming-soon'},
];

export const GIFU_MUNICIPALITY_BY_SLUG = new Map(
  GIFU_MUNICIPALITIES.map((m) => [m.slug, m])
);
