import type {Municipality} from './kagawa-municipalities';

/**
 * Aichi municipalities (愛知県).
 * JIS X 0402 five-digit codes from the Ministry of Internal Affairs
 * 「都道府県コード及び市区町村コード」令和6年1月1日更新, sheet R6.1.1現在の団体.
 * https://www.soumu.go.jp/denshijiti/code.html
 * https://www.soumu.go.jp/main_content/000925835.xlsx
 * English names are Modified Hepburn of the official kana on that sheet
 * (the sheet has no English column). The administrative suffix is removed.
 * Every row is coming-soon: this list is not a facility page.
 */
export const AICHI_MUNICIPALITIES: Municipality[] = [
  {jis: '23100', slug: 'nagoya', nameJa: '名古屋市', nameEn: 'Nagoya', status: 'coming-soon'},
  {jis: '23201', slug: 'toyohashi', nameJa: '豊橋市', nameEn: 'Toyohashi', status: 'coming-soon'},
  {jis: '23202', slug: 'okazaki', nameJa: '岡崎市', nameEn: 'Okazaki', status: 'coming-soon'},
  {jis: '23203', slug: 'ichinomiya', nameJa: '一宮市', nameEn: 'Ichinomiya', status: 'coming-soon'},
  {jis: '23204', slug: 'seto', nameJa: '瀬戸市', nameEn: 'Seto', status: 'coming-soon'},
  {jis: '23205', slug: 'handa', nameJa: '半田市', nameEn: 'Handa', status: 'coming-soon'},
  {jis: '23206', slug: 'kasugai', nameJa: '春日井市', nameEn: 'Kasugai', status: 'coming-soon'},
  {jis: '23207', slug: 'toyokawa', nameJa: '豊川市', nameEn: 'Toyokawa', status: 'coming-soon'},
  {jis: '23208', slug: 'tsushima', nameJa: '津島市', nameEn: 'Tsushima', status: 'coming-soon'},
  {jis: '23209', slug: 'hekinan', nameJa: '碧南市', nameEn: 'Hekinan', status: 'coming-soon'},
  {jis: '23210', slug: 'kariya', nameJa: '刈谷市', nameEn: 'Kariya', status: 'coming-soon'},
  {jis: '23211', slug: 'toyota', nameJa: '豊田市', nameEn: 'Toyota', status: 'coming-soon'},
  {jis: '23212', slug: 'anjo', nameJa: '安城市', nameEn: 'Anjo', status: 'coming-soon'},
  {jis: '23213', slug: 'nishio', nameJa: '西尾市', nameEn: 'Nishio', status: 'coming-soon'},
  {jis: '23214', slug: 'gamagoori', nameJa: '蒲郡市', nameEn: 'Gamagoori', status: 'coming-soon'},
  {jis: '23215', slug: 'inuyama', nameJa: '犬山市', nameEn: 'Inuyama', status: 'coming-soon'},
  {jis: '23216', slug: 'tokoname', nameJa: '常滑市', nameEn: 'Tokoname', status: 'coming-soon'},
  {jis: '23217', slug: 'konan', nameJa: '江南市', nameEn: 'Konan', status: 'coming-soon'},
  {jis: '23219', slug: 'komaki', nameJa: '小牧市', nameEn: 'Komaki', status: 'coming-soon'},
  {jis: '23220', slug: 'inazawa', nameJa: '稲沢市', nameEn: 'Inazawa', status: 'coming-soon'},
  {jis: '23221', slug: 'shinshiro', nameJa: '新城市', nameEn: 'Shinshiro', status: 'coming-soon'},
  {jis: '23222', slug: 'tokai', nameJa: '東海市', nameEn: 'Tokai', status: 'coming-soon'},
  {jis: '23223', slug: 'obu', nameJa: '大府市', nameEn: 'Obu', status: 'coming-soon'},
  {jis: '23224', slug: 'chita', nameJa: '知多市', nameEn: 'Chita', status: 'coming-soon'},
  {jis: '23225', slug: 'chiryu', nameJa: '知立市', nameEn: 'Chiryu', status: 'coming-soon'},
  {jis: '23226', slug: 'owariasahi', nameJa: '尾張旭市', nameEn: 'Owariasahi', status: 'coming-soon'},
  {jis: '23227', slug: 'takahama', nameJa: '高浜市', nameEn: 'Takahama', status: 'coming-soon'},
  {jis: '23228', slug: 'iwakura', nameJa: '岩倉市', nameEn: 'Iwakura', status: 'coming-soon'},
  {jis: '23229', slug: 'toyoake', nameJa: '豊明市', nameEn: 'Toyoake', status: 'coming-soon'},
  {jis: '23230', slug: 'nisshin', nameJa: '日進市', nameEn: 'Nisshin', status: 'coming-soon'},
  {jis: '23231', slug: 'tahara', nameJa: '田原市', nameEn: 'Tahara', status: 'coming-soon'},
  {jis: '23232', slug: 'aisai', nameJa: '愛西市', nameEn: 'Aisai', status: 'coming-soon'},
  {jis: '23233', slug: 'kiyosu', nameJa: '清須市', nameEn: 'Kiyosu', status: 'coming-soon'},
  {jis: '23234', slug: 'kitanagoya', nameJa: '北名古屋市', nameEn: 'Kitanagoya', status: 'coming-soon'},
  {jis: '23235', slug: 'yatomi', nameJa: '弥富市', nameEn: 'Yatomi', status: 'coming-soon'},
  {jis: '23236', slug: 'miyoshi', nameJa: 'みよし市', nameEn: 'Miyoshi', status: 'coming-soon'},
  {jis: '23237', slug: 'ama', nameJa: 'あま市', nameEn: 'Ama', status: 'coming-soon'},
  {jis: '23238', slug: 'nagakute', nameJa: '長久手市', nameEn: 'Nagakute', status: 'coming-soon'},
  {jis: '23302', slug: 'togo', nameJa: '東郷町', nameEn: 'Togo', status: 'coming-soon'},
  {jis: '23342', slug: 'toyoyama', nameJa: '豊山町', nameEn: 'Toyoyama', status: 'coming-soon'},
  {jis: '23361', slug: 'oguchi', nameJa: '大口町', nameEn: 'Oguchi', status: 'coming-soon'},
  {jis: '23362', slug: 'fuso', nameJa: '扶桑町', nameEn: 'Fuso', status: 'coming-soon'},
  {jis: '23424', slug: 'oharu', nameJa: '大治町', nameEn: 'Oharu', status: 'coming-soon'},
  {jis: '23425', slug: 'kanie', nameJa: '蟹江町', nameEn: 'Kanie', status: 'coming-soon'},
  {jis: '23427', slug: 'tobishima', nameJa: '飛島村', nameEn: 'Tobishima', status: 'coming-soon'},
  {jis: '23441', slug: 'agui', nameJa: '阿久比町', nameEn: 'Agui', status: 'coming-soon'},
  {jis: '23442', slug: 'higashiura', nameJa: '東浦町', nameEn: 'Higashiura', status: 'coming-soon'},
  {jis: '23445', slug: 'minamichita', nameJa: '南知多町', nameEn: 'Minamichita', status: 'coming-soon'},
  {jis: '23446', slug: 'mihama', nameJa: '美浜町', nameEn: 'Mihama', status: 'coming-soon'},
  {jis: '23447', slug: 'taketoyo', nameJa: '武豊町', nameEn: 'Taketoyo', status: 'coming-soon'},
  {jis: '23501', slug: 'kota', nameJa: '幸田町', nameEn: 'Kota', status: 'coming-soon'},
  {jis: '23561', slug: 'shitara', nameJa: '設楽町', nameEn: 'Shitara', status: 'coming-soon'},
  {jis: '23562', slug: 'toei', nameJa: '東栄町', nameEn: 'Toei', status: 'coming-soon'},
  {jis: '23563', slug: 'toyone', nameJa: '豊根村', nameEn: 'Toyone', status: 'coming-soon'},
];

export const AICHI_MUNICIPALITY_BY_SLUG = new Map(
  AICHI_MUNICIPALITIES.map((m) => [m.slug, m])
);
