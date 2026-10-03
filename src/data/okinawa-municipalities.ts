import type {Municipality} from './kagawa-municipalities';

/**
 * Okinawa municipalities (沖縄県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const OKINAWA_MUNICIPALITIES: Municipality[] = [
  {jis: '47201', slug: 'naha', nameJa: '那覇市', nameEn: 'Naha', status: 'coming-soon'},
  {jis: '47205', slug: 'ginowan', nameJa: '宜野湾市', nameEn: 'Ginowan', status: 'coming-soon'},
  {jis: '47207', slug: 'ishigaki', nameJa: '石垣市', nameEn: 'Ishigaki', status: 'coming-soon'},
  {jis: '47208', slug: 'urasoe', nameJa: '浦添市', nameEn: 'Urasoe', status: 'coming-soon'},
  {jis: '47209', slug: 'nago', nameJa: '名護市', nameEn: 'Nago', status: 'coming-soon'},
  {jis: '47210', slug: 'itoman', nameJa: '糸満市', nameEn: 'Itoman', status: 'coming-soon'},
  {jis: '47211', slug: 'okinawa', nameJa: '沖縄市', nameEn: 'Okinawa', status: 'coming-soon'},
  {jis: '47212', slug: 'tomigusuku', nameJa: '豊見城市', nameEn: 'Tomigusuku', status: 'coming-soon'},
  {jis: '47213', slug: 'uruma', nameJa: 'うるま市', nameEn: 'Uruma', status: 'coming-soon'},
  {jis: '47214', slug: 'miyakojima', nameJa: '宮古島市', nameEn: 'Miyakojima', status: 'coming-soon'},
  {jis: '47215', slug: 'nanjo', nameJa: '南城市', nameEn: 'Nanjo', status: 'coming-soon'},
  {jis: '47301', slug: 'kunigami', nameJa: '国頭村', nameEn: 'Kunigami', status: 'coming-soon'},
  {jis: '47302', slug: 'ogimi', nameJa: '大宜味村', nameEn: 'Ogimi', status: 'coming-soon'},
  {jis: '47303', slug: 'higashi', nameJa: '東村', nameEn: 'Higashi', status: 'coming-soon'},
  {jis: '47306', slug: 'nakijin', nameJa: '今帰仁村', nameEn: 'Nakijin', status: 'coming-soon'},
  {jis: '47308', slug: 'motobu', nameJa: '本部町', nameEn: 'Motobu', status: 'coming-soon'},
  {jis: '47311', slug: 'onna', nameJa: '恩納村', nameEn: 'Onna', status: 'coming-soon'},
  {jis: '47313', slug: 'ginoza', nameJa: '宜野座村', nameEn: 'Ginoza', status: 'coming-soon'},
  {jis: '47314', slug: 'kin', nameJa: '金武町', nameEn: 'Kin', status: 'coming-soon'},
  {jis: '47315', slug: 'ie', nameJa: '伊江村', nameEn: 'Ie', status: 'coming-soon'},
  {jis: '47324', slug: 'yomitan', nameJa: '読谷村', nameEn: 'Yomitan', status: 'coming-soon'},
  {jis: '47325', slug: 'kadena', nameJa: '嘉手納町', nameEn: 'Kadena', status: 'coming-soon'},
  {jis: '47326', slug: 'chiyatan', nameJa: '北谷町', nameEn: 'Chiyatan', status: 'coming-soon'},
  {jis: '47327', slug: 'kitanakagusuku', nameJa: '北中城村', nameEn: 'Kitanakagusuku', status: 'coming-soon'},
  {jis: '47328', slug: 'nakagusuku', nameJa: '中城村', nameEn: 'Nakagusuku', status: 'coming-soon'},
  {jis: '47329', slug: 'nishihara', nameJa: '西原町', nameEn: 'Nishihara', status: 'coming-soon'},
  {jis: '47348', slug: 'yonabaru', nameJa: '与那原町', nameEn: 'Yonabaru', status: 'coming-soon'},
  {jis: '47350', slug: 'haebaru', nameJa: '南風原町', nameEn: 'Haebaru', status: 'coming-soon'},
  {jis: '47353', slug: 'tokashiki', nameJa: '渡嘉敷村', nameEn: 'Tokashiki', status: 'coming-soon'},
  {jis: '47354', slug: 'zamami', nameJa: '座間味村', nameEn: 'Zamami', status: 'coming-soon'},
  {jis: '47355', slug: 'aguni', nameJa: '粟国村', nameEn: 'Aguni', status: 'coming-soon'},
  {jis: '47356', slug: 'tonaki', nameJa: '渡名喜村', nameEn: 'Tonaki', status: 'coming-soon'},
  {jis: '47357', slug: 'minamidaito', nameJa: '南大東村', nameEn: 'Minamidaito', status: 'coming-soon'},
  {jis: '47358', slug: 'kitadaito', nameJa: '北大東村', nameEn: 'Kitadaito', status: 'coming-soon'},
  {jis: '47359', slug: 'iheya', nameJa: '伊平屋村', nameEn: 'Iheya', status: 'coming-soon'},
  {jis: '47360', slug: 'izena', nameJa: '伊是名村', nameEn: 'Izena', status: 'coming-soon'},
  {jis: '47361', slug: 'kumejima', nameJa: '久米島町', nameEn: 'Kumejima', status: 'coming-soon'},
  {jis: '47362', slug: 'yaese', nameJa: '八重瀬町', nameEn: 'Yaese', status: 'coming-soon'},
  {jis: '47375', slug: 'tarama', nameJa: '多良間村', nameEn: 'Tarama', status: 'coming-soon'},
  {jis: '47381', slug: 'taketomi', nameJa: '竹富町', nameEn: 'Taketomi', status: 'coming-soon'},
  {jis: '47382', slug: 'yonaguni', nameJa: '与那国町', nameEn: 'Yonaguni', status: 'coming-soon'},
];

export const OKINAWA_MUNICIPALITY_BY_SLUG = new Map(
  OKINAWA_MUNICIPALITIES.map((m) => [m.slug, m])
);
