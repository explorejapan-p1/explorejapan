import type {Municipality} from './kagawa-municipalities';

/**
 * Fukuoka municipalities (福岡県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const FUKUOKA_MUNICIPALITIES: Municipality[] = [
  {jis: '40100', slug: 'kitakyushu', nameJa: '北九州市', nameEn: 'Kitakyushu', status: 'coming-soon'},
  {jis: '40130', slug: 'fukuoka', nameJa: '福岡市', nameEn: 'Fukuoka', status: 'coming-soon'},
  {jis: '40202', slug: 'omuta', nameJa: '大牟田市', nameEn: 'Omuta', status: 'coming-soon'},
  {jis: '40203', slug: 'kurume', nameJa: '久留米市', nameEn: 'Kurume', status: 'coming-soon'},
  {jis: '40204', slug: 'noogata', nameJa: '直方市', nameEn: 'Noogata', status: 'coming-soon'},
  {jis: '40205', slug: 'iizuka', nameJa: '飯塚市', nameEn: 'Iizuka', status: 'coming-soon'},
  {jis: '40206', slug: 'tagawa', nameJa: '田川市', nameEn: 'Tagawa', status: 'coming-soon'},
  {jis: '40207', slug: 'yanagawa', nameJa: '柳川市', nameEn: 'Yanagawa', status: 'coming-soon'},
  {jis: '40210', slug: 'yame', nameJa: '八女市', nameEn: 'Yame', status: 'coming-soon'},
  {jis: '40211', slug: 'chikugo', nameJa: '筑後市', nameEn: 'Chikugo', status: 'coming-soon'},
  {jis: '40212', slug: 'okawa', nameJa: '大川市', nameEn: 'Okawa', status: 'coming-soon'},
  {jis: '40213', slug: 'yukuhashi', nameJa: '行橋市', nameEn: 'Yukuhashi', status: 'coming-soon'},
  {jis: '40214', slug: 'buzen', nameJa: '豊前市', nameEn: 'Buzen', status: 'coming-soon'},
  {jis: '40215', slug: 'nakama', nameJa: '中間市', nameEn: 'Nakama', status: 'coming-soon'},
  {jis: '40216', slug: 'ogoori', nameJa: '小郡市', nameEn: 'Ogoori', status: 'coming-soon'},
  {jis: '40217', slug: 'chikushino', nameJa: '筑紫野市', nameEn: 'Chikushino', status: 'coming-soon'},
  {jis: '40218', slug: 'kasuga', nameJa: '春日市', nameEn: 'Kasuga', status: 'coming-soon'},
  {jis: '40219', slug: 'onojo', nameJa: '大野城市', nameEn: 'Onojo', status: 'coming-soon'},
  {jis: '40220', slug: 'munakata', nameJa: '宗像市', nameEn: 'Munakata', status: 'coming-soon'},
  {jis: '40221', slug: 'dazaifu', nameJa: '太宰府市', nameEn: 'Dazaifu', status: 'coming-soon'},
  {jis: '40223', slug: 'koga', nameJa: '古賀市', nameEn: 'Koga', status: 'coming-soon'},
  {jis: '40224', slug: 'fukutsu', nameJa: '福津市', nameEn: 'Fukutsu', status: 'coming-soon'},
  {jis: '40225', slug: 'ukiha', nameJa: 'うきは市', nameEn: 'Ukiha', status: 'coming-soon'},
  {jis: '40226', slug: 'miyawaka', nameJa: '宮若市', nameEn: 'Miyawaka', status: 'coming-soon'},
  {jis: '40227', slug: 'kama', nameJa: '嘉麻市', nameEn: 'Kama', status: 'coming-soon'},
  {jis: '40228', slug: 'asakura', nameJa: '朝倉市', nameEn: 'Asakura', status: 'coming-soon'},
  {jis: '40229', slug: 'miyama', nameJa: 'みやま市', nameEn: 'Miyama', status: 'coming-soon'},
  {jis: '40230', slug: 'itoshima', nameJa: '糸島市', nameEn: 'Itoshima', status: 'coming-soon'},
  {jis: '40231', slug: 'nakagawa', nameJa: '那珂川市', nameEn: 'Nakagawa', status: 'coming-soon'},
  {jis: '40341', slug: 'umi', nameJa: '宇美町', nameEn: 'Umi', status: 'coming-soon'},
  {jis: '40342', slug: 'sasaguri', nameJa: '篠栗町', nameEn: 'Sasaguri', status: 'coming-soon'},
  {jis: '40343', slug: 'shime', nameJa: '志免町', nameEn: 'Shime', status: 'coming-soon'},
  {jis: '40344', slug: 'sue', nameJa: '須恵町', nameEn: 'Sue', status: 'coming-soon'},
  {jis: '40345', slug: 'shinguu', nameJa: '新宮町', nameEn: 'Shinguu', status: 'coming-soon'},
  {jis: '40348', slug: 'hisayama', nameJa: '久山町', nameEn: 'Hisayama', status: 'coming-soon'},
  {jis: '40349', slug: 'kasuya', nameJa: '粕屋町', nameEn: 'Kasuya', status: 'coming-soon'},
  {jis: '40381', slug: 'ashiya', nameJa: '芦屋町', nameEn: 'Ashiya', status: 'coming-soon'},
  {jis: '40382', slug: 'mizumaki', nameJa: '水巻町', nameEn: 'Mizumaki', status: 'coming-soon'},
  {jis: '40383', slug: 'okagaki', nameJa: '岡垣町', nameEn: 'Okagaki', status: 'coming-soon'},
  {jis: '40384', slug: 'onga', nameJa: '遠賀町', nameEn: 'Onga', status: 'coming-soon'},
  {jis: '40401', slug: 'kotake', nameJa: '小竹町', nameEn: 'Kotake', status: 'coming-soon'},
  {jis: '40402', slug: 'kurate', nameJa: '鞍手町', nameEn: 'Kurate', status: 'coming-soon'},
  {jis: '40421', slug: 'keisen', nameJa: '桂川町', nameEn: 'Keisen', status: 'coming-soon'},
  {jis: '40447', slug: 'chikuzen', nameJa: '筑前町', nameEn: 'Chikuzen', status: 'coming-soon'},
  {jis: '40448', slug: 'toho', nameJa: '東峰村', nameEn: 'Toho', status: 'coming-soon'},
  {jis: '40503', slug: 'tachiarai', nameJa: '大刀洗町', nameEn: 'Tachiarai', status: 'coming-soon'},
  {jis: '40522', slug: 'oki', nameJa: '大木町', nameEn: 'Oki', status: 'coming-soon'},
  {jis: '40544', slug: 'hirokawa', nameJa: '広川町', nameEn: 'Hirokawa', status: 'coming-soon'},
  {jis: '40601', slug: 'kawara', nameJa: '香春町', nameEn: 'Kawara', status: 'coming-soon'},
  {jis: '40602', slug: 'soeda', nameJa: '添田町', nameEn: 'Soeda', status: 'coming-soon'},
  {jis: '40604', slug: 'itoda', nameJa: '糸田町', nameEn: 'Itoda', status: 'coming-soon'},
  {jis: '40605', slug: 'kawasaki', nameJa: '川崎町', nameEn: 'Kawasaki', status: 'coming-soon'},
  {jis: '40608', slug: 'oto', nameJa: '大任町', nameEn: 'Oto', status: 'coming-soon'},
  {jis: '40609', slug: 'aka', nameJa: '赤村', nameEn: 'Aka', status: 'coming-soon'},
  {jis: '40610', slug: 'fukuchi', nameJa: '福智町', nameEn: 'Fukuchi', status: 'coming-soon'},
  {jis: '40621', slug: 'kanda', nameJa: '苅田町', nameEn: 'Kanda', status: 'coming-soon'},
  {jis: '40625', slug: 'miyako', nameJa: 'みやこ町', nameEn: 'Miyako', status: 'coming-soon'},
  {jis: '40642', slug: 'yoshitomi', nameJa: '吉富町', nameEn: 'Yoshitomi', status: 'coming-soon'},
  {jis: '40646', slug: 'koge', nameJa: '上毛町', nameEn: 'Koge', status: 'coming-soon'},
  {jis: '40647', slug: 'chikujo', nameJa: '築上町', nameEn: 'Chikujo', status: 'coming-soon'},
];

export const FUKUOKA_MUNICIPALITY_BY_SLUG = new Map(
  FUKUOKA_MUNICIPALITIES.map((m) => [m.slug, m])
);
