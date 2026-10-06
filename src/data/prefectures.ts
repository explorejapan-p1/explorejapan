export type Prefecture = {
  jis: string;
  slug: string;
  nameJa: string;
  nameEn: string;
};

/** JIS X 0401 two-digit codes. Slugs are Hepburn, lowercase, no -ken. */
export const PREFECTURES: Prefecture[] = [
  {jis: '01', slug: 'hokkaido', nameJa: '北海道', nameEn: 'Hokkaido'},
  {jis: '02', slug: 'aomori', nameJa: '青森県', nameEn: 'Aomori'},
  {jis: '03', slug: 'iwate', nameJa: '岩手県', nameEn: 'Iwate'},
  {jis: '04', slug: 'miyagi', nameJa: '宮城県', nameEn: 'Miyagi'},
  {jis: '05', slug: 'akita', nameJa: '秋田県', nameEn: 'Akita'},
  {jis: '06', slug: 'yamagata', nameJa: '山形県', nameEn: 'Yamagata'},
  {jis: '07', slug: 'fukushima', nameJa: '福島県', nameEn: 'Fukushima'},
  {jis: '08', slug: 'ibaraki', nameJa: '茨城県', nameEn: 'Ibaraki'},
  {jis: '09', slug: 'tochigi', nameJa: '栃木県', nameEn: 'Tochigi'},
  {jis: '10', slug: 'gunma', nameJa: '群馬県', nameEn: 'Gunma'},
  {jis: '11', slug: 'saitama', nameJa: '埼玉県', nameEn: 'Saitama'},
  {jis: '12', slug: 'chiba', nameJa: '千葉県', nameEn: 'Chiba'},
  {jis: '13', slug: 'tokyo', nameJa: '東京都', nameEn: 'Tokyo'},
  {jis: '14', slug: 'kanagawa', nameJa: '神奈川県', nameEn: 'Kanagawa'},
  {jis: '15', slug: 'niigata', nameJa: '新潟県', nameEn: 'Niigata'},
  {jis: '16', slug: 'toyama', nameJa: '富山県', nameEn: 'Toyama'},
  {jis: '17', slug: 'ishikawa', nameJa: '石川県', nameEn: 'Ishikawa'},
  {jis: '18', slug: 'fukui', nameJa: '福井県', nameEn: 'Fukui'},
  {jis: '19', slug: 'yamanashi', nameJa: '山梨県', nameEn: 'Yamanashi'},
  {jis: '20', slug: 'nagano', nameJa: '長野県', nameEn: 'Nagano'},
  {jis: '21', slug: 'gifu', nameJa: '岐阜県', nameEn: 'Gifu'},
  {jis: '22', slug: 'shizuoka', nameJa: '静岡県', nameEn: 'Shizuoka'},
  {jis: '23', slug: 'aichi', nameJa: '愛知県', nameEn: 'Aichi'},
  {jis: '24', slug: 'mie', nameJa: '三重県', nameEn: 'Mie'},
  {jis: '25', slug: 'shiga', nameJa: '滋賀県', nameEn: 'Shiga'},
  {jis: '26', slug: 'kyoto', nameJa: '京都府', nameEn: 'Kyoto'},
  {jis: '27', slug: 'osaka', nameJa: '大阪府', nameEn: 'Osaka'},
  {jis: '28', slug: 'hyogo', nameJa: '兵庫県', nameEn: 'Hyogo'},
  {jis: '29', slug: 'nara', nameJa: '奈良県', nameEn: 'Nara'},
  {jis: '30', slug: 'wakayama', nameJa: '和歌山県', nameEn: 'Wakayama'},
  {jis: '31', slug: 'tottori', nameJa: '鳥取県', nameEn: 'Tottori'},
  {jis: '32', slug: 'shimane', nameJa: '島根県', nameEn: 'Shimane'},
  {jis: '33', slug: 'okayama', nameJa: '岡山県', nameEn: 'Okayama'},
  {jis: '34', slug: 'hiroshima', nameJa: '広島県', nameEn: 'Hiroshima'},
  {jis: '35', slug: 'yamaguchi', nameJa: '山口県', nameEn: 'Yamaguchi'},
  {jis: '36', slug: 'tokushima', nameJa: '徳島県', nameEn: 'Tokushima'},
  {jis: '37', slug: 'kagawa', nameJa: '香川県', nameEn: 'Kagawa'},
  {jis: '38', slug: 'ehime', nameJa: '愛媛県', nameEn: 'Ehime'},
  {jis: '39', slug: 'kochi', nameJa: '高知県', nameEn: 'Kochi'},
  {jis: '40', slug: 'fukuoka', nameJa: '福岡県', nameEn: 'Fukuoka'},
  {jis: '41', slug: 'saga', nameJa: '佐賀県', nameEn: 'Saga'},
  {jis: '42', slug: 'nagasaki', nameJa: '長崎県', nameEn: 'Nagasaki'},
  {jis: '43', slug: 'kumamoto', nameJa: '熊本県', nameEn: 'Kumamoto'},
  {jis: '44', slug: 'oita', nameJa: '大分県', nameEn: 'Oita'},
  {jis: '45', slug: 'miyazaki', nameJa: '宮崎県', nameEn: 'Miyazaki'},
  {jis: '46', slug: 'kagoshima', nameJa: '鹿児島県', nameEn: 'Kagoshima'},
  {jis: '47', slug: 'okinawa', nameJa: '沖縄県', nameEn: 'Okinawa'}
];

export const PREFECTURE_BY_SLUG = new Map(PREFECTURES.map((p) => [p.slug, p]));
export const PREFECTURE_BY_JIS = new Map(PREFECTURES.map((p) => [p.jis, p]));

export function isPrefectureSlug(slug: string): boolean {
  return PREFECTURE_BY_SLUG.has(slug);
}
