import type {Municipality} from './kagawa-municipalities';

/**
 * Tokyo municipalities (東京都).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const TOKYO_MUNICIPALITIES: Municipality[] = [
  {jis: '13101', slug: 'chiyoda', nameJa: '千代田区', nameEn: 'Chiyoda', status: 'coming-soon'},
  {jis: '13102', slug: 'chuo', nameJa: '中央区', nameEn: 'Chuo', status: 'coming-soon'},
  {jis: '13103', slug: 'minato', nameJa: '港区', nameEn: 'Minato', status: 'coming-soon'},
  {jis: '13104', slug: 'shinjuku', nameJa: '新宿区', nameEn: 'Shinjuku', status: 'coming-soon'},
  {jis: '13105', slug: 'bunkyo', nameJa: '文京区', nameEn: 'Bunkyo', status: 'coming-soon'},
  {jis: '13106', slug: 'taito', nameJa: '台東区', nameEn: 'Taito', status: 'coming-soon'},
  {jis: '13107', slug: 'sumida', nameJa: '墨田区', nameEn: 'Sumida', status: 'coming-soon'},
  {jis: '13108', slug: 'koto', nameJa: '江東区', nameEn: 'Koto', status: 'coming-soon'},
  {jis: '13109', slug: 'shinagawa', nameJa: '品川区', nameEn: 'Shinagawa', status: 'coming-soon'},
  {jis: '13110', slug: 'meguro', nameJa: '目黒区', nameEn: 'Meguro', status: 'coming-soon'},
  {jis: '13111', slug: 'ota', nameJa: '大田区', nameEn: 'Ota', status: 'coming-soon'},
  {jis: '13112', slug: 'setagaya', nameJa: '世田谷区', nameEn: 'Setagaya', status: 'coming-soon'},
  {jis: '13113', slug: 'shibuya', nameJa: '渋谷区', nameEn: 'Shibuya', status: 'coming-soon'},
  {jis: '13114', slug: 'nakano', nameJa: '中野区', nameEn: 'Nakano', status: 'coming-soon'},
  {jis: '13115', slug: 'suginami', nameJa: '杉並区', nameEn: 'Suginami', status: 'coming-soon'},
  {jis: '13116', slug: 'toshima', nameJa: '豊島区', nameEn: 'Toshima', status: 'coming-soon'},
  {jis: '13117', slug: 'kita', nameJa: '北区', nameEn: 'Kita', status: 'coming-soon'},
  {jis: '13118', slug: 'arakawa', nameJa: '荒川区', nameEn: 'Arakawa', status: 'coming-soon'},
  {jis: '13119', slug: 'itabashi', nameJa: '板橋区', nameEn: 'Itabashi', status: 'coming-soon'},
  {jis: '13120', slug: 'nerima', nameJa: '練馬区', nameEn: 'Nerima', status: 'coming-soon'},
  {jis: '13121', slug: 'adachi', nameJa: '足立区', nameEn: 'Adachi', status: 'coming-soon'},
  {jis: '13122', slug: 'katsushika', nameJa: '葛飾区', nameEn: 'Katsushika', status: 'coming-soon'},
  {jis: '13123', slug: 'edogawa', nameJa: '江戸川区', nameEn: 'Edogawa', status: 'coming-soon'},
  {jis: '13201', slug: 'hachioji', nameJa: '八王子市', nameEn: 'Hachioji', status: 'coming-soon'},
  {jis: '13202', slug: 'tachikawa', nameJa: '立川市', nameEn: 'Tachikawa', status: 'coming-soon'},
  {jis: '13203', slug: 'musashino', nameJa: '武蔵野市', nameEn: 'Musashino', status: 'coming-soon'},
  {jis: '13204', slug: 'mitaka', nameJa: '三鷹市', nameEn: 'Mitaka', status: 'coming-soon'},
  {jis: '13205', slug: 'ome', nameJa: '青梅市', nameEn: 'Ome', status: 'coming-soon'},
  {jis: '13206', slug: 'fuchu', nameJa: '府中市', nameEn: 'Fuchu', status: 'coming-soon'},
  {jis: '13207', slug: 'akishima', nameJa: '昭島市', nameEn: 'Akishima', status: 'coming-soon'},
  {jis: '13208', slug: 'chofu', nameJa: '調布市', nameEn: 'Chofu', status: 'coming-soon'},
  {jis: '13209', slug: 'machida', nameJa: '町田市', nameEn: 'Machida', status: 'coming-soon'},
  {jis: '13210', slug: 'koganei', nameJa: '小金井市', nameEn: 'Koganei', status: 'coming-soon'},
  {jis: '13211', slug: 'kodaira', nameJa: '小平市', nameEn: 'Kodaira', status: 'coming-soon'},
  {jis: '13212', slug: 'hino', nameJa: '日野市', nameEn: 'Hino', status: 'coming-soon'},
  {jis: '13213', slug: 'higashimurayama', nameJa: '東村山市', nameEn: 'Higashimurayama', status: 'coming-soon'},
  {jis: '13214', slug: 'kokubunji', nameJa: '国分寺市', nameEn: 'Kokubunji', status: 'coming-soon'},
  {jis: '13215', slug: 'kunitachi', nameJa: '国立市', nameEn: 'Kunitachi', status: 'coming-soon'},
  {jis: '13218', slug: 'fussa', nameJa: '福生市', nameEn: 'Fussa', status: 'coming-soon'},
  {jis: '13219', slug: 'komae', nameJa: '狛江市', nameEn: 'Komae', status: 'coming-soon'},
  {jis: '13220', slug: 'higashiyamato', nameJa: '東大和市', nameEn: 'Higashiyamato', status: 'coming-soon'},
  {jis: '13221', slug: 'kiyose', nameJa: '清瀬市', nameEn: 'Kiyose', status: 'coming-soon'},
  {jis: '13222', slug: 'higashikurume', nameJa: '東久留米市', nameEn: 'Higashikurume', status: 'coming-soon'},
  {jis: '13223', slug: 'musashimurayama', nameJa: '武蔵村山市', nameEn: 'Musashimurayama', status: 'coming-soon'},
  {jis: '13224', slug: 'tama', nameJa: '多摩市', nameEn: 'Tama', status: 'coming-soon'},
  {jis: '13225', slug: 'inagi', nameJa: '稲城市', nameEn: 'Inagi', status: 'coming-soon'},
  {jis: '13227', slug: 'hamura', nameJa: '羽村市', nameEn: 'Hamura', status: 'coming-soon'},
  {jis: '13228', slug: 'akiruno', nameJa: 'あきる野市', nameEn: 'Akiruno', status: 'coming-soon'},
  {jis: '13229', slug: 'nishitokyo', nameJa: '西東京市', nameEn: 'Nishitokyo', status: 'coming-soon'},
  {jis: '13303', slug: 'mizuho', nameJa: '瑞穂町', nameEn: 'Mizuho', status: 'coming-soon'},
  {jis: '13305', slug: 'hinode', nameJa: '日の出町', nameEn: 'Hinode', status: 'coming-soon'},
  {jis: '13307', slug: 'hinohara', nameJa: '檜原村', nameEn: 'Hinohara', status: 'coming-soon'},
  {jis: '13308', slug: 'okutama', nameJa: '奥多摩町', nameEn: 'Okutama', status: 'coming-soon'},
  {jis: '13361', slug: 'oshima', nameJa: '大島町', nameEn: 'Oshima', status: 'coming-soon'},
  {jis: '13362', slug: 'toshimason', nameJa: '利島村', nameEn: 'Toshimason', status: 'coming-soon'},
  {jis: '13363', slug: 'niijima', nameJa: '新島村', nameEn: 'Niijima', status: 'coming-soon'},
  {jis: '13364', slug: 'kozushima', nameJa: '神津島村', nameEn: 'Kozushima', status: 'coming-soon'},
  {jis: '13381', slug: 'miyake', nameJa: '三宅村', nameEn: 'Miyake', status: 'coming-soon'},
  {jis: '13382', slug: 'mikurajima', nameJa: '御蔵島村', nameEn: 'Mikurajima', status: 'coming-soon'},
  {jis: '13401', slug: 'hachijo', nameJa: '八丈町', nameEn: 'Hachijo', status: 'coming-soon'},
  {jis: '13402', slug: 'aogashima', nameJa: '青ヶ島村', nameEn: 'Aogashima', status: 'coming-soon'},
  {jis: '13421', slug: 'ogasawara', nameJa: '小笠原村', nameEn: 'Ogasawara', status: 'coming-soon'},
];

export const TOKYO_MUNICIPALITY_BY_SLUG = new Map(
  TOKYO_MUNICIPALITIES.map((m) => [m.slug, m])
);
