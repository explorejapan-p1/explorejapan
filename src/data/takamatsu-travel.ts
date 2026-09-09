/**
 * Takamatsu City travel layer. No frozen pack.
 * Dining from 食べログ 高松市 (C37201) public shop pages. FOOD dish photos required.
 * Stay from 楽天トラベル / 公式 share room-exterior images (出典). Rank strongest first.
 * Onsen / shopping / commerce: honest 0. Experience densified when attributable.
 * Do not invent. Do not copy Tokushima TRAVEL_* rows or photos.
 */
import {LOOKUP_CATEGORIES, type FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {TAKAMATSU, TAKAMATSU_SIGHT_PHOTOS} from './takamatsu';
import {
  INFRA_CATEGORIES,
  SIGHTS_CATEGORIES,
  type FilterId,
  type TravelRow
} from './mima-travel';

export const TAKAMATSU_TRAVEL_ACCESSED = '2026-09-09' as const;

export const TAKAMATSU_TRAVEL_SOURCES = {
  home: 'https://www.city.takamatsu.kagawa.jp/',
  hall: 'https://www.city.takamatsu.kagawa.jp/',
  kanko: 'https://www.my-kagawa.jp/',
  tabelogCity: 'https://tabelog.com/kagawa/C37201/rstLst/',
  stayNavi: 'https://www.navitime.co.jp/category/0608002/37201/',
  rakutenTravel: 'https://travel.rakuten.co.jp/'
} as const;

export const TAKAMATSU_ONSEN_PACK_NAMES = ["あじ温泉 庵治観光ホテル 海のやどり 大浴場", "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場", "ゴールデンタイム高松 大浴場", "ファーストイン高松 大浴場", "ホテルルートイン高松屋島 大浴場", "ホテル川六 エルステージ高松 大浴場", "ホテルＮｏ．１高松 大浴場", "四国高松温泉 ニューグランデみまつ 大浴場", "天然温泉 牛若の湯 スーパーホテル高松禁煙館 大浴場", "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ） 大浴場", "天然温泉 讃岐の湯 スーパーホテル高松・田町 大浴場", "穴吹邸 大浴場", "高松ホテルサキカ 大浴場", "髙柳旅館 大浴場", "ＪＲクレメントイン高松 大浴場", "Ｓｅｔｏ家琴ノ葉 大浴場", "Ｔａｂｉｓｔ 栗林山荘 大浴場"] as const;
export const TAKAMATSU_ONSEN_PACK_SET: ReadonlySet<string> = new Set(TAKAMATSU_ONSEN_PACK_NAMES);
export const TAKAMATSU_EXPERIENCE_PACK_NAMES = ['屋島ケーブルカー', '四国村', 'イサム・ノグチ庭園美術館'] as const;
export const TAKAMATSU_EXPERIENCE_PACK_SET: ReadonlySet<string> = new Set(TAKAMATSU_EXPERIENCE_PACK_NAMES);
export const TAKAMATSU_STAY_PACK_NAMES = [] as const;
export const TAKAMATSU_STAY_PACK_SET: ReadonlySet<string> = new Set(TAKAMATSU_STAY_PACK_NAMES);
export const TAKAMATSU_SHOPPING_PACK_NAMES = [] as const;
export const TAKAMATSU_SHOPPING_PACK_SET: ReadonlySet<string> = new Set(TAKAMATSU_SHOPPING_PACK_NAMES);

export const TAKAMATSU_SIGHT_PINS = [
  '栗林公園',
  '高松城（玉藻公園）',
  '屋島',
  '屋島寺',
  '女木島'
] as const;

function stay(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'stay',
    address,
    phone,
    source_url,
    accessed: TAKAMATSU_TRAVEL_ACCESSED
  };
}

/** Ranked strongest Instagram-style room/exterior 出典 first. */
export const TAKAMATSU_TRAVEL_STAY: readonly TravelRow[] = [
  stay('takamatsu-stay-001', "【あさひハウス】 ＾", "香川県高松市藤塚町三-2-13", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/175031/175031.html"),
  stay('takamatsu-stay-002', "あじ温泉 庵治観光ホテル 海のやどり", "香川県高松市庵治町5494", "087-871-3141", "https://travel.rakuten.co.jp/HOTEL/10981/10981.html"),
  stay('takamatsu-stay-003', "かえる ゲストハウス （ＫＡＥＲＵ ＧＵＥＳＴ ＨＯＵＳＥ）", "香川県高松市御厩町1616-1", "090-1009-7735", "https://travel.rakuten.co.jp/HOTEL/167851/167851.html"),
  stay('takamatsu-stay-004', "ささや旅館", "香川県高松市屋島中町168-2", "087-841-9533", "https://travel.rakuten.co.jp/HOTEL/15205/15205.html"),
  stay('takamatsu-stay-005', "さぬきの湯 ドーミーイン高松（ドーミーイン・御宿野乃 ホテルズグループ）", "香川県高松市瓦町1-10-10", "087-832-5489", "https://travel.rakuten.co.jp/HOTEL/70853/70853.html"),
  stay('takamatsu-stay-006', "アパホテル〈高松瓦町〉", "香川県高松市福田町13-16", "087-823-2323", "https://travel.rakuten.co.jp/HOTEL/19840/19840.html"),
  stay('takamatsu-stay-007', "エクストールイン高松", "香川県高松市古馬場町10-1", "087-813-2666", "https://travel.rakuten.co.jp/HOTEL/172251/172251.html"),
  stay('takamatsu-stay-008', "エクストールイン高松中央インター", "香川県高松市林町2571-2", "087-815-1000", "https://travel.rakuten.co.jp/HOTEL/196181/196181.html"),
  stay('takamatsu-stay-009', "グランドベース高松", "香川県高松市内町6-9", "050-1794-1635", "https://travel.rakuten.co.jp/HOTEL/179320/179320.html"),
  stay('takamatsu-stay-010', "グレースコートホテル高松", "香川県高松市塩上町2-4-22", null, "https://travel.rakuten.co.jp/HOTEL/18845/18845.html"),
  stay('takamatsu-stay-011', "ゲストハウス ルミエール田町／民泊", "香川県高松市田町7-14ルミエール田町", "050-5444-6620", "https://travel.rakuten.co.jp/HOTEL/185580/185580.html"),
  stay('takamatsu-stay-012', "ゲストハウス屋島 ＾", "香川県高松市高松町1933-1ゲストハウス屋島", "090-3989-5834", "https://travel.rakuten.co.jp/HOTEL/171507/171507.html"),
  stay('takamatsu-stay-013', "ゲストハウス扇 ＾", "香川県高松市扇町1-16-8ＧｕｅｓｔＨｏｕｓｅＯｕｇｉ", "080-3920-2295", "https://travel.rakuten.co.jp/HOTEL/185970/185970.html"),
  stay('takamatsu-stay-014', "ゲストハウス瀬戸音十庵", "香川県高松市庵治町5983-1", "087-880-5403", "https://travel.rakuten.co.jp/HOTEL/166185/166185.html"),
  stay('takamatsu-stay-015', "ゲストハウス若葉屋", "香川県高松市観光町603-1", null, "https://travel.rakuten.co.jp/HOTEL/153572/153572.html"),
  stay('takamatsu-stay-016', "ゲストハウスｋｏｉ鯉", "香川県高松市香町1-10-2", "03-6231-0330", "https://travel.rakuten.co.jp/HOTEL/184692/184692.html"),
  stay('takamatsu-stay-017', "コンフォートホテル高松", "香川県高松市中新町2-10", "087-861-8411", "https://travel.rakuten.co.jp/HOTEL/183297/183297.html"),
  stay('takamatsu-stay-018', "ゴールデンタイム高松", "香川県高松市瓦町2-1-7", null, "https://travel.rakuten.co.jp/HOTEL/72077/72077.html"),
  stay('takamatsu-stay-019', "ダイワロイネットホテル高松", "香川県高松市丸亀町8-23", "087-811-7855", "https://travel.rakuten.co.jp/HOTEL/136268/136268.html"),
  stay('takamatsu-stay-020', "トラディッショナル アパートメント", "香川県高松市塩上町1-3-7", "06-8070-849", "https://travel.rakuten.co.jp/HOTEL/151192/151192.html"),
  stay('takamatsu-stay-021', "ハイパーイン高松駅前", "香川県高松市西の丸町10-17", "087-826-0818", "https://travel.rakuten.co.jp/HOTEL/167674/167674.html"),
  stay('takamatsu-stay-022', "ビジネスホテル イーストパーク栗林", "香川県高松市栗林町1-14-3", null, "https://travel.rakuten.co.jp/HOTEL/775/775.html"),
  stay('takamatsu-stay-023', "ビジネスホテル シャトーエスト高松", "香川県高松市城東町2-2-7", null, "https://travel.rakuten.co.jp/HOTEL/9489/9489.html"),
  stay('takamatsu-stay-024', "ビジネスホテル プリンス", "香川県高松市木太町2505番地2", "087-861-9565", "https://travel.rakuten.co.jp/HOTEL/16312/16312.html"),
  stay('takamatsu-stay-025', "ビジネスホテル ルピナス", "香川県高松市西の丸町6-16", "087-821-0558", "https://travel.rakuten.co.jp/HOTEL/25824/25824.html"),
  stay('takamatsu-stay-026', "ビジネスホテル東宝イン高松", "香川県高松市城東町1-5-18", null, "https://travel.rakuten.co.jp/HOTEL/13609/13609.html"),
  stay('takamatsu-stay-027', "ビジネスホテル清恵", "香川県高松市西の丸町5-8", "087-851-4713", "https://travel.rakuten.co.jp/HOTEL/28071/28071.html"),
  stay('takamatsu-stay-028', "ファミリーロッジ旅籠屋・高松店", "香川県高松市田村町1265-1", "087-867-8858", "https://travel.rakuten.co.jp/HOTEL/134764/134764.html"),
  stay('takamatsu-stay-029', "ファーストイン高松", "香川県高松市鶴屋町2-3", "087-822-1919", "https://travel.rakuten.co.jp/HOTEL/130100/130100.html"),
  stay('takamatsu-stay-030', "ホテル パークサイド高松", "香川県高松市栗林町1-3-1", null, "https://travel.rakuten.co.jp/HOTEL/37424/37424.html"),
  stay('takamatsu-stay-031', "ホテル パールガーデン", "香川県高松市福岡町2-2-1", null, "https://travel.rakuten.co.jp/HOTEL/84770/84770.html"),
  stay('takamatsu-stay-032', "ホテル ＷｅＢａｓｅ高松", "香川県高松市瓦町1-2-3", null, "https://travel.rakuten.co.jp/HOTEL/168533/168533.html"),
  stay('takamatsu-stay-033', "ホテルたいよう農園 屋島", "香川県高松市屋島西町1909-3", "088-655-5151", "https://travel.rakuten.co.jp/HOTEL/197287/197287.html"),
  stay('takamatsu-stay-034', "ホテルエリアワン高松シティ（ホテルエリアワングループ）", "香川県高松市内町2-20", null, "https://travel.rakuten.co.jp/HOTEL/183326/183326.html"),
  stay('takamatsu-stay-035', "ホテルエリアワン高松（ホテルエリアワングループ）", "香川県高松市西の丸町2-23", null, "https://travel.rakuten.co.jp/HOTEL/70661/70661.html"),
  stay('takamatsu-stay-036', "ホテルサンシャイン高松", "香川県高松市藤塚町3-17-15", null, "https://travel.rakuten.co.jp/HOTEL/776/776.html"),
  stay('takamatsu-stay-037', "ホテルパレス高松 〜ＰＡＬＡＣＥ ＴＡＫＡＭＡＴＳＵ〜", "香川県高松市西内町2-7", null, "https://travel.rakuten.co.jp/HOTEL/777/777.html"),
  stay('takamatsu-stay-038', "ホテルマリンパレスさぬき", "香川県高松市福岡町2-3-4", "087-851-6677", "https://travel.rakuten.co.jp/HOTEL/25826/25826.html"),
  stay('takamatsu-stay-039', "ホテルリブマックス高松駅前", "香川県高松市錦町1-8-9", "087-811-8860", "https://travel.rakuten.co.jp/HOTEL/182568/182568.html"),
  stay('takamatsu-stay-040', "ホテルルートイン高松屋島", "香川県高松市春日町1653-2", "050-5847-7445", "https://travel.rakuten.co.jp/HOTEL/167563/167563.html"),
  stay('takamatsu-stay-041', "ホテル夢 常盤店【大人専用１８禁・ハピホテ提携】", "香川県高松市常磐町2-10-17", "087-831-8231", "https://travel.rakuten.co.jp/HOTEL/163281/163281.html"),
  stay('takamatsu-stay-042', "ホテル川六 エルステージ高松", "香川県高松市百間町1-2", "087-821-5666", "https://travel.rakuten.co.jp/HOTEL/12614/12614.html"),
  stay('takamatsu-stay-043', "ホテル望海荘", "香川県高松市屋島東町1784-15屋島山上", null, "https://travel.rakuten.co.jp/HOTEL/9264/9264.html"),
  stay('takamatsu-stay-044', "ホテル福屋", "香川県高松市古新町5-8", null, "https://travel.rakuten.co.jp/HOTEL/14763/14763.html"),
  stay('takamatsu-stay-045', "ホテル高松ヒルズ 瓦町駅前（ＢＢＨホテルグループ）", "香川県高松市瓦町1-8-3", "050-1807-2012", "https://travel.rakuten.co.jp/HOTEL/52530/52530.html"),
  stay('takamatsu-stay-046', "ホテルＮｏ．１高松", "香川県高松市観光通2-4-1", "087-812-2222", "https://travel.rakuten.co.jp/HOTEL/18987/18987.html"),
  stay('takamatsu-stay-047', "メゾン太田／民泊", "香川県高松市太田上町643-1メゾン太田Ａ棟Ｂ棟", null, "https://travel.rakuten.co.jp/HOTEL/170139/170139.html"),
  stay('takamatsu-stay-048', "リーガホテルゼスト高松", "香川県高松市古新町9-1", "087-822-3555", "https://travel.rakuten.co.jp/HOTEL/8869/8869.html"),
  stay('takamatsu-stay-049', "ロイヤルパークホテル高松", "香川県高松市瓦町1-3-11", "087-823-2222", "https://travel.rakuten.co.jp/HOTEL/9486/9486.html"),
  stay('takamatsu-stay-050', "一棟貸し 女木島オーテの宿 瀬戸内芸術祭 ＾", "香川県高松市女木町2女木島オーテの宿", "090-5279-7960", "https://travel.rakuten.co.jp/HOTEL/194348/194348.html"),
  stay('takamatsu-stay-051', "一棟貸し 島ゑ空", "香川県高松市北浜町12-21", "080-4035-4500", "https://travel.rakuten.co.jp/HOTEL/202106/202106.html"),
  stay('takamatsu-stay-052', "万喜屋", "香川県高松市西の丸町1-4", "087-822-3366", "https://travel.rakuten.co.jp/HOTEL/151451/151451.html"),
  stay('takamatsu-stay-053', "商店街ＨＯＴＥＬＳ", "香川県高松市常磐町1-6-16村尾ビル3Ｆ、4Ｆ", null, "https://travel.rakuten.co.jp/HOTEL/181190/181190.html"),
  stay('takamatsu-stay-054', "商店街ＨＯＴＥＬＳ ＥＩＴＡ", "香川県高松市丸亀町6-2丸亀町ビル3階", null, "https://travel.rakuten.co.jp/HOTEL/181191/181191.html"),
  stay('takamatsu-stay-055', "四国高松温泉 ニューグランデみまつ", "香川県高松市通町2-3", "087-851-1100", "https://travel.rakuten.co.jp/HOTEL/9440/9440.html"),
  stay('takamatsu-stay-056', "天然温泉 牛若の湯 スーパーホテル高松禁煙館", "香川県高松市観光通り1-4-12", null, "https://travel.rakuten.co.jp/HOTEL/40517/40517.html"),
  stay('takamatsu-stay-057', "天然温泉 玉藻の湯 ドーミーイン高松中央公園前（ドーミーイン・御宿野乃 ホテルズグループ）", "香川県高松市天神前1-3", "087-835-5489", "https://travel.rakuten.co.jp/HOTEL/167716/167716.html"),
  stay('takamatsu-stay-058', "天然温泉 讃岐の湯 スーパーホテル高松・田町", "香川県高松市田町1-1", "087-831-5590", "https://travel.rakuten.co.jp/HOTEL/50215/50215.html"),
  stay('takamatsu-stay-059', "屋島の宿 桃太郎", "香川県高松市屋島東町1821", "087-841-9464", "https://travel.rakuten.co.jp/HOTEL/18988/18988.html"),
  stay('takamatsu-stay-060', "旅館 さくら", "香川県高松市常磐町1-5-12", "080-3925-3772", "https://travel.rakuten.co.jp/HOTEL/199473/199473.html"),
  stay('takamatsu-stay-061', "旅館 やすらぎ", "香川県高松市片原町2-6（101）", "080-3925-3772", "https://travel.rakuten.co.jp/HOTEL/193263/193263.html"),
  stay('takamatsu-stay-062', "日和庵／民泊", "香川県高松市昭和町2-318-9日和庵", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/170275/170275.html"),
  stay('takamatsu-stay-063', "東横ＩＮＮ高松兵庫町", "香川県高松市兵庫町3-1", "087-821-1045", "https://travel.rakuten.co.jp/HOTEL/108319/108319.html"),
  stay('takamatsu-stay-064', "東横ＩＮＮ高松駅前", "香川県高松市錦町1-1-6", "087-811-7345", "https://travel.rakuten.co.jp/HOTEL/193287/193287.html"),
  stay('takamatsu-stay-065', "民宿 やまちゃん／民泊", "香川県高松市香西北町51-5民宿やまちゃん", "080-7837-4378", "https://travel.rakuten.co.jp/HOTEL/195039/195039.html"),
  stay('takamatsu-stay-066', "浜町小院 ＾", "香川県高松市浜ノ町5-12ＨａｍａｃｈｏＳｉｙｏｕｉｎ", "090-2821-3864", "https://travel.rakuten.co.jp/HOTEL/171360/171360.html"),
  stay('takamatsu-stay-067', "瀬戸内満月荘", "香川県高松市常磐町2-2-1グレートサクセスビル2Ｆ・3Ｆ", "087-802-6660", "https://travel.rakuten.co.jp/HOTEL/176556/176556.html"),
  stay('takamatsu-stay-068', "瀬戸風月 ＾", "香川県高松市室新町1069-5ＳｅｔｏＦｕｇｅｔｓｕ", "087-813-7738", "https://travel.rakuten.co.jp/HOTEL/171816/171816.html"),
  stay('takamatsu-stay-069', "牟礼ぐらし宿／民泊", "香川県高松市牟礼町牟礼3119-1牟礼ぐらしＲｏｏｍ１Ｂ棟", "090-6881-6458", "https://travel.rakuten.co.jp/HOTEL/200020/200020.html"),
  stay('takamatsu-stay-070', "瓦町ドミトリー", "香川県高松市塩上町1-4-16", "090-8979-9981", "https://travel.rakuten.co.jp/HOTEL/160690/160690.html"),
  stay('takamatsu-stay-071', "瓦町駅・ｈｏｍｅ１０１室 ＾", "香川県高松市瓦町2-4-3瓦町駅ｈｏｍｅ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185154/185154.html"),
  stay('takamatsu-stay-072', "瓦町駅・ｈｏｍｅ２０１室 ＾", "香川県高松市瓦町2-4-3瓦町駅・ｈｏｍｅ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185200/185200.html"),
  stay('takamatsu-stay-073', "瓦町駅・ｈｏｍｅ４０１号室 ＾", "香川県高松市瓦町2-4-3瓦町駅・ｈｏｍｅ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185197/185197.html"),
  stay('takamatsu-stay-074', "瓦町駅．ｈｏｍｅ ３０１号室 ＾", "香川県高松市瓦町2-4-3瓦町駅・ｈｏｍｅ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185201/185201.html"),
  stay('takamatsu-stay-075', "福宿 ＦＵＫＵＩＮＮ ３０２号室 ＾", "香川県高松市福田町8-6ＦＵＫＵＩＮＮ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185592/185592.html"),
  stay('takamatsu-stay-076', "福宿ＦＵＫＵＩＮＮ ２０１号室 ＾", "香川県高松市福田町8-6福宿ＦＵＫＵＩＮＮ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185616/185616.html"),
  stay('takamatsu-stay-077', "福宿ＦＵＫＵＩＮＮ１０１号室 ＾", "香川県高松市福田町8-6福宿ＦＵＫＵＩＮＮ", null, "https://travel.rakuten.co.jp/HOTEL/185618/185618.html"),
  stay('takamatsu-stay-078', "福宿ＦＵＫＵＩＮＮ１０２号室 ＾", "香川県高松市福田町8-6福宿ＦＵＫＵＩＮＮ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185619/185619.html"),
  stay('takamatsu-stay-079', "福宿ＦＵＫＵＩＮＮ２０２号室 ＾", "香川県高松市福田町8-6福宿ＦＵＫＵＩＮＮ", null, "https://travel.rakuten.co.jp/HOTEL/185593/185593.html"),
  stay('takamatsu-stay-080', "福宿ＦＵＫＵＩＮＮ２０３号室 ＾", "香川県高松市福田町8-6福宿ＦＵＫＵＩＮＮ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185594/185594.html"),
  stay('takamatsu-stay-081', "福宿ＦＵＫＵＩＮＮ３０１号室 ＾", "香川県高松市福田町8-6福宿ＦＵＫＵＩＮＮ", "080-3926-2627", "https://travel.rakuten.co.jp/HOTEL/185617/185617.html"),
  stay('takamatsu-stay-082', "穴吹邸", "香川県高松市城東町1-7-15", null, "https://travel.rakuten.co.jp/HOTEL/187641/187641.html"),
  stay('takamatsu-stay-083', "紺屋町ゲストハウス 久々", "香川県高松市紺屋町3-13", "070-9009-9981", "https://travel.rakuten.co.jp/HOTEL/168733/168733.html"),
  stay('takamatsu-stay-084', "貸切ワン泊 Ｌａ′Ｍｕｌｅ（ラミュール）", "香川県高松市牟礼町牟礼2384-2", "087-813-5314", "https://travel.rakuten.co.jp/HOTEL/198313/198313.html"),
  stay('takamatsu-stay-085', "遊び家ふるたか ＾", "香川県高松市高松町2035-1ＡＳＯＢＩＹＡＦＵＲＵＴＡＫＡ", "090-1171-3862", "https://travel.rakuten.co.jp/HOTEL/190192/190192.html"),
  stay('takamatsu-stay-086', "雀 ＳｕＺｕｍｅ", "香川県高松市天神前4-2", "03-6231-0330", "https://travel.rakuten.co.jp/HOTEL/188774/188774.html"),
  stay('takamatsu-stay-087', "高松の宿 花園や", "香川県高松市花園町1-9-6", null, "https://travel.rakuten.co.jp/HOTEL/181977/181977.html"),
  stay('takamatsu-stay-088', "高松ゲストハウスあかね", "香川県高松市茜町１７－２１", null, "https://travel.rakuten.co.jp/HOTEL/160804/160804.html"),
  stay('takamatsu-stay-089', "高松ゲストハウスＢＪステーション", "香川県高松市西の丸町1-22", null, "https://travel.rakuten.co.jp/HOTEL/153459/153459.html"),
  stay('takamatsu-stay-090', "高松シティホテル", "香川県高松市亀井町8-13", "050-5213-4754", "https://travel.rakuten.co.jp/HOTEL/5681/5681.html"),
  stay('takamatsu-stay-091', "高松センチュリーホテル", "香川県高松市錦町1-4-19", "050-5799-9180", "https://travel.rakuten.co.jp/HOTEL/7593/7593.html"),
  stay('takamatsu-stay-092', "高松パークホテル", "香川県高松市福田町11-1", "087-823-1111", "https://travel.rakuten.co.jp/HOTEL/4837/4837.html"),
  stay('takamatsu-stay-093', "高松ホテルサキカ", "香川県高松市百間町6-9", "087-822-2111", "https://travel.rakuten.co.jp/HOTEL/11289/11289.html"),
  stay('takamatsu-stay-094', "高松国際ホテル", "香川県高松市木太町4区2191-1", "087-831-1511", "https://travel.rakuten.co.jp/HOTEL/13730/13730.html"),
  stay('takamatsu-stay-095', "髙松の宿 かめおか屋", "香川県高松市亀岡町２－２０堀屋ビル", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/197624/197624.html"),
  stay('takamatsu-stay-096', "髙柳旅館", "香川県高松市牟礼町牟礼3137-14", "087-845-1516", "https://travel.rakuten.co.jp/HOTEL/196641/196641.html"),
  stay('takamatsu-stay-097', "２Ｆ", "香川県高松市牟礼町牟礼2758-14", "090-9770-1391", "https://travel.rakuten.co.jp/HOTEL/196350/196350.html"),
  stay('takamatsu-stay-098', "７７７ Ｔａｋａｍａｔｓｕ Ｇｕｅｓｔ Ｈｏｕｓｅ", "香川県高松市通町1-5", "087-880-8594", "https://travel.rakuten.co.jp/HOTEL/176717/176717.html"),
  stay('takamatsu-stay-099', "ＡＬＰＨＡＢＥＤ ＩＮＮ 高松駅前", "香川県高松市西内町2-6", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/172707/172707.html"),
  stay('takamatsu-stay-100', "ＡＰＡＲＴＭＥＮＴ ＨＯＴＥＬ 高松裏路地", "香川県高松市古馬場町8-62", "080-7287-2929", "https://travel.rakuten.co.jp/HOTEL/198638/198638.html"),
  stay('takamatsu-stay-101', "Ａｌｐｈａｂｅｄ サンポート高松", "香川県高松市浜ノ町4-3ノースポイントハイツ", null, "https://travel.rakuten.co.jp/HOTEL/167741/167741.html"),
  stay('takamatsu-stay-102', "Ａｌｐｈａｂｅｄ 高松ステーション", "香川県高松市西の丸町7-10リバティ池本301", null, "https://travel.rakuten.co.jp/HOTEL/176880/176880.html"),
  stay('takamatsu-stay-103', "Ａｌｐｈａｂｅｄ 高松レインボー通り", "香川県高松市松縄町1023-22スカール松縄", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/177930/177930.html"),
  stay('takamatsu-stay-104', "Ａｌｐｈａｂｅｄ 高松丸亀町", "香川県高松市百間町9-13", null, "https://travel.rakuten.co.jp/HOTEL/173003/173003.html"),
  stay('takamatsu-stay-105', "Ａｌｐｈａｂｅｄ 高松兵庫町", "香川県高松市兵庫町11-6カーニープレイス高松兵庫町ビル", null, "https://travel.rakuten.co.jp/HOTEL/168304/168304.html"),
  stay('takamatsu-stay-106', "Ａｌｐｈａｂｅｄ 高松北浜ＥＡＳＴ", "香川県高松市城東町2-2-11津山マンション", null, "https://travel.rakuten.co.jp/HOTEL/168252/168252.html"),
  stay('takamatsu-stay-107', "Ａｌｐｈａｂｅｄ 高松古新町", "香川県高松市古新町2-1アルファレガロ古新町", null, "https://travel.rakuten.co.jp/HOTEL/165983/165983.html"),
  stay('takamatsu-stay-108', "Ａｌｐｈａｂｅｄ 高松屋島", "香川県高松市高松町3013-2サンクトーム屋島204", null, "https://travel.rakuten.co.jp/HOTEL/176878/176878.html"),
  stay('takamatsu-stay-109', "Ａｌｐｈａｂｅｄ 高松瓦町ＩＩ", "香川県高松市常磐町2-5-10コリドールノール", null, "https://travel.rakuten.co.jp/HOTEL/176879/176879.html"),
  stay('takamatsu-stay-110', "Ａｌｐｈａｂｅｄ 高松美術館通り", "香川県高松市磨屋町1-7森ビル", null, "https://travel.rakuten.co.jp/HOTEL/177931/177931.html"),
  stay('takamatsu-stay-111', "Ａｌｐｈａｂｅｄ Ｖｉｌｌａ和歌／民泊", "香川県高松市屋島西町2480-12ＡｌｐｈａｂｅｄＶｉｌｌａ和歌", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/190402/190402.html"),
  stay('takamatsu-stay-112', "Ａｌｐｈａｂｅｄ高松中央公園", "香川県高松市亀井町10-1", null, "https://travel.rakuten.co.jp/HOTEL/179814/179814.html"),
  stay('takamatsu-stay-113', "Ａｌｐｈａｂｅｄ高松瓦町", "香川県高松市常磐町2-5-11コリドールシュッド501号", null, "https://travel.rakuten.co.jp/HOTEL/167817/167817.html"),
  stay('takamatsu-stay-114', "Ａｌｐｈａｂｅｄ高松瓦町イースト", "香川県高松市松島町1-12-11コリドールバリ", null, "https://travel.rakuten.co.jp/HOTEL/168781/168781.html"),
  stay('takamatsu-stay-115', "Ａｌｐｈａｂｅｄ高松瓦町ウエスト", "香川県高松市常磐町2-8-2コリドールウエスト", null, "https://travel.rakuten.co.jp/HOTEL/168779/168779.html"),
  stay('takamatsu-stay-116', "Ａｌｐｈａｂｅｄ高松香西駅前", "香川県高松市鶴市町2022-1シティラック高松Ａ", null, "https://travel.rakuten.co.jp/HOTEL/172090/172090.html"),
  stay('takamatsu-stay-117', "Ａｒｔ Ｓｅｔｏｕｃｈｉ Ｔｒｉｅｎｎａｌｅ Ｈｏｔｅｌ", "香川県高松市西の丸町12-15ＮｅｘｔＩｎｔｅｒｎａｔｉｏｎａｌＢｌｄｇ", "087-813-3817", "https://travel.rakuten.co.jp/HOTEL/178924/178924.html"),
  stay('takamatsu-stay-118', "Ｃｌａｓｓｙ仏生山／民泊", "香川県高松市仏生山町甲510-6Ｃｌａｓｓｙ仏生山", "06-6751-8888", "https://travel.rakuten.co.jp/HOTEL/189467/189467.html"),
  stay('takamatsu-stay-119', "Ｃｏｍｍｏｎｓ Ｌｏｄｇｅ ＨＩＫＡＲＩ", "香川県高松市丸亀町5-8", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/197697/197697.html"),
  stay('takamatsu-stay-120', "Ｄａｎｎｏｕｒａ Ｒｅｓｏｒｔ Ｖｉｌｌａ／民泊", "香川県高松市屋島東町263-3", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/195738/195738.html"),
  stay('takamatsu-stay-121', "Ｇｕｅｓｔ Ｈｏｕｓｅ Ａｊｉ ｎａｋａｎｉｗａ／民泊", "香川県高松市庵治町5503-3ＧｕｅｓｔＨｏｕｓｅＡｊｉｎａｋａｎｉｗａ", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/190705/190705.html"),
  stay('takamatsu-stay-122', "ＨＯＴＥＬ ＲＡＨ", "香川県高松市丸の内11-17", "087-884-6660", "https://travel.rakuten.co.jp/HOTEL/202440/202440.html"),
  stay('takamatsu-stay-123', "ＨＯＴＥＬ ＳＷＥＥＴＷＡＴＥＲ", "香川県高松市木太町2460-8", "087-837-1177", "https://travel.rakuten.co.jp/HOTEL/196876/196876.html"),
  stay('takamatsu-stay-124', "Ｈａｂｉ ａｐａｒｔｍｅｎｔ ＾", "香川県高松市城東町1-6-11102号", "080-5614-7117", "https://travel.rakuten.co.jp/HOTEL/195532/195532.html"),
  stay('takamatsu-stay-125', "Ｈｏｓｔｅｌ ＪＡＱ ｔａｋａｍａｔｓｕ", "香川県高松市中野町28-18", "087-813-4075", "https://travel.rakuten.co.jp/HOTEL/192023/192023.html"),
  stay('takamatsu-stay-126', "ＩＮＡＲＩ ゲストハウス栗林 ＾", "香川県高松市中野町22－2ＩＮＡＲＩ", "090-2786-3342", "https://travel.rakuten.co.jp/HOTEL/176248/176248.html"),
  stay('takamatsu-stay-127', "ＪＲクレメントイン高松", "香川県高松市浜ノ町1-3", "087-811-1200", "https://travel.rakuten.co.jp/HOTEL/167467/167467.html"),
  stay('takamatsu-stay-128', "ＪＲクレメントイン高松兵庫町（２０２６年７月１日リニューアルオープン）", "香川県高松市兵庫町9-9", "087-802-5922", "https://travel.rakuten.co.jp/HOTEL/198876/198876.html"),
  stay('takamatsu-stay-129', "ＪＲホテルクレメント高松", "香川県高松市浜ノ町1-1", "087-811-1111", "https://travel.rakuten.co.jp/HOTEL/14862/14862.html"),
  stay('takamatsu-stay-130', "Ｊａｓｍｉｎ Ｔ１８號 ＾", "香川県高松市本町2-18ＪａｓｍｉｎＴ18號", "080-5626-7134", "https://travel.rakuten.co.jp/HOTEL/190907/190907.html"),
  stay('takamatsu-stay-131', "Ｊａｓｍｉｎ錦町Ｉ ＾", "香川県高松市錦町1-7-21階Ｊａｓｍｉｎ錦町壱Ｉ", "080-5626-7134", "https://travel.rakuten.co.jp/HOTEL/194403/194403.html"),
  stay('takamatsu-stay-132', "Ｊａｓｍｉｎ錦町ＩＩ ＾", "香川県高松市錦町1-7-22階Ｊａｓｍｉｎ錦町弐ＩＩ", "080-5626-7134", "https://travel.rakuten.co.jp/HOTEL/194407/194407.html"),
  stay('takamatsu-stay-133', "Ｊａｓｍｉｎ錦町ＩＩＩ ＾", "香川県高松市錦町1-7-23階Ｊａｓｍｉｎ錦町参ＩＩＩ", "080-5626-7134", "https://travel.rakuten.co.jp/HOTEL/194408/194408.html"),
  stay('takamatsu-stay-134', "Ｊａｓｍｉｎ錦町ＩＶ ＾", "香川県高松市錦町1-7-24階Ｊａｓｍｉｎ錦町ＩＶ", "080-5626-7134", "https://travel.rakuten.co.jp/HOTEL/194409/194409.html"),
  stay('takamatsu-stay-135', "Ｊａｓｍｉｎ錦町Ｖ ＾", "香川県高松市錦町1-7-25階，6階Ｊａｓｍｉｎ錦町Ｖ", "080-5626-7134", "https://travel.rakuten.co.jp/HOTEL/194410/194410.html"),
  stay('takamatsu-stay-136', "Ｋ’ｓホテル", "香川県高松市兵庫町3-12", "090-2893-6535", "https://travel.rakuten.co.jp/HOTEL/177485/177485.html"),
  stay('takamatsu-stay-137', "Ｋ＇ｓホテル栗林公園北", "香川県高松市中野町9-2", "090-2893-6535", "https://travel.rakuten.co.jp/HOTEL/202181/202181.html"),
  stay('takamatsu-stay-138', "ＫＡＮＥＭＩＴＳＵ ＣＡＰＩＴＡＬ ＨＯＴＥＬ", "香川県高松市中野町23-1", "087-831-3330", "https://travel.rakuten.co.jp/HOTEL/183281/183281.html"),
  stay('takamatsu-stay-139', "ＫＯＫＯ ＨＯＴＥＬ 高松", "香川県高松市瓦町2丁目2-3", "087-861-0017", "https://travel.rakuten.co.jp/HOTEL/181859/181859.html"),
  stay('takamatsu-stay-140', "ＫＵＫＵ Ｐｅｔ Ｌｏｄｇｅ", "香川県高松市紺屋町3-17", "070-9009-9981", "https://travel.rakuten.co.jp/HOTEL/197974/197974.html"),
  stay('takamatsu-stay-141', "ＭＫ７５７ Ｂ－ＳＴＡＹ高松Ｇｏｌｄ Ｓｈｉｐ／民泊", "香川県高松市瀬戸内町7-6", "080-3592-6689", "https://travel.rakuten.co.jp/HOTEL/200566/200566.html"),
  stay('takamatsu-stay-142', "Ｍｉｎｅｙａｍａ Ｇｒｅｅｎ Ｖｉｌｌａ／民泊", "香川県高松市鶴市町御殿1451-25ＭｉｎｅｙａｍａＧｒｅｅｎＶｉｌｌａ", "087-810-1155", "https://travel.rakuten.co.jp/HOTEL/190499/190499.html"),
  stay('takamatsu-stay-143', "ＰａｌｍＶｉｌｌａ〜最大１０名！テラスでＢＢＱ☆車４台可☆／民泊", "香川県高松市勅使町1201-7ＰａｌｍＶｉｌｌａ", "03-0527-440", "https://travel.rakuten.co.jp/HOTEL/185506/185506.html"),
  stay('takamatsu-stay-144', "ＳＵＮＮＹ ＤＡＹ ＨＯＳＴＥＬ", "香川県高松市丸の内9-13", "087-826-3210", "https://travel.rakuten.co.jp/HOTEL/165595/165595.html"),
  stay('takamatsu-stay-145', "Ｓｅｔｏ家琴ノ葉", "香川県高松市西内町12-15", "087-802-3386", "https://travel.rakuten.co.jp/HOTEL/197715/197715.html"),
  stay('takamatsu-stay-146', "Ｓｅｔｏ家高松駅前", "香川県高松市錦町1-2-8横山ビル", "087-802-3386", "https://travel.rakuten.co.jp/HOTEL/197760/197760.html"),
  stay('takamatsu-stay-147', "Ｓｅｔｏ家ＳＡＵＮＡ 兵庫町", "香川県高松市兵庫町6-6不二ビル3階", "087-802-3386", "https://travel.rakuten.co.jp/HOTEL/199013/199013.html"),
  stay('takamatsu-stay-148', "Ｓｅｔｏｌｉｖｅ 別邸 ｂｙ ４Ｓ ＳＴＡＹ", "香川県高松市西の丸町11-10", "070-1361-1649", "https://travel.rakuten.co.jp/HOTEL/198788/198788.html"),
  stay('takamatsu-stay-149', "ＴＥＮ ｔｏ ＳＥＮ ゲストハウス高松", "香川県高松市田町1-11-2階", "080-6294-3898", "https://travel.rakuten.co.jp/HOTEL/160667/160667.html"),
  stay('takamatsu-stay-150', "ＴＲＡＶＥＬ＆ＢＯＯＫ ＨＯＴＥＬ ＨＵＬＡＴＯＮ ＣＡＢＩＮ ＴＡＫＡＭＡＴＳＵ", "香川県高松市塩上町2-5-243階", null, "https://travel.rakuten.co.jp/HOTEL/168423/168423.html"),
  stay('takamatsu-stay-151', "Ｔａｂｉｓｔ シティホテルパティオ", "香川県高松市御坊町8-8", "087-823-2320", "https://travel.rakuten.co.jp/HOTEL/139873/139873.html"),
  stay('takamatsu-stay-152', "Ｔａｂｉｓｔ ニュー月光園", "香川県高松市西の丸町12-9", "087-822-0953", "https://travel.rakuten.co.jp/HOTEL/40694/40694.html"),
  stay('takamatsu-stay-153', "Ｔａｂｉｓｔ ビジネスホテル ジャパン 高松 香川", "香川県高松市古馬場町1-4", "087-851-8689", "https://travel.rakuten.co.jp/HOTEL/41130/41130.html"),
  stay('takamatsu-stay-154', "Ｔａｂｉｓｔ ビジネスホテル丸登美 高松 香川", "香川県高松市通町6-12", "087-851-2971", "https://travel.rakuten.co.jp/HOTEL/108660/108660.html"),
  stay('takamatsu-stay-155', "Ｔａｂｉｓｔ ビジネスホテル瓦町", "香川県高松市瓦町2-12-7", "087-897-7222", "https://travel.rakuten.co.jp/HOTEL/197426/197426.html"),
  stay('takamatsu-stay-156', "Ｔａｂｉｓｔ ホテル吉泊", "香川県高松市常磐町2-6-36", "087-823-2601", "https://travel.rakuten.co.jp/HOTEL/192739/192739.html"),
  stay('takamatsu-stay-157', "Ｔａｂｉｓｔ 栗林山荘", "香川県高松市宮脇町2-31-27", "087-834-3000", "https://travel.rakuten.co.jp/HOTEL/183975/183975.html"),
  stay('takamatsu-stay-158', "Ｔａｂｉｓｔ 高松パールホテル", "香川県高松市西の丸町2-19", "087-822-3382", "https://travel.rakuten.co.jp/HOTEL/54500/54500.html"),
  stay('takamatsu-stay-159', "ＹＵＺＵＫＩ", "香川県高松市瓦町2-2-13新瓦町ビル4F･6F", "087-805-9736", "https://travel.rakuten.co.jp/HOTEL/172790/172790.html"),
  stay('takamatsu-stay-160', "ａｔｉｃ Ｇｕｅｓｔｈｏｕｓｅ", "香川県高松市瓦町1-11-14階", "087-000-0000", "https://travel.rakuten.co.jp/HOTEL/199028/199028.html"),
  stay('takamatsu-stay-161', "ｆａｖ 高松", "香川県高松市塩上町2-4-20", "087-802-5775", "https://travel.rakuten.co.jp/HOTEL/181189/181189.html"),
  stay('takamatsu-stay-162', "ｋｏｉｋｏｉ天神町 ＾", "香川県高松市天神前4-2ｋｏｉ鯉（ｍｉｎｉ）401", "03-6231-0330", "https://travel.rakuten.co.jp/HOTEL/189811/189811.html"),
];

function dining(
  id: string,
  name_ja: string,
  address: string | null,
  phone: string | null,
  source_url: string
): TravelRow {
  return {
    id,
    name_ja,
    category: 'dining',
    address,
    phone,
    source_url,
    accessed: TAKAMATSU_TRAVEL_ACCESSED
  };
}

export const TAKAMATSU_TRAVEL_DINING: readonly TravelRow[] = [
  dining(
    'takamatsu-dining-01',
    "両忘",
    "香川県高松市今新町6-21Ｆ",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37008167/"
  ),
  dining(
    'takamatsu-dining-02',
    "ふる里うどん",
    "香川県高松市川島東町523-4",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37006820/"
  ),
  dining(
    'takamatsu-dining-03',
    "寿司 中川",
    "香川県高松市御坊町10-7",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000760/"
  ),
  dining(
    'takamatsu-dining-04',
    "鮨舳",
    "香川県高松市瓦町2-8-17",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000358/"
  ),
  dining(
    'takamatsu-dining-05',
    "手打うどん はりや",
    "香川県高松市郷東町587-174",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000049/"
  ),
  dining(
    'takamatsu-dining-06',
    "手打十段 うどんバカ一代",
    "香川県高松市多賀町1-6-7",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000242/"
  ),
  dining(
    'takamatsu-dining-07',
    "うどん さか枝",
    "香川県高松市番町5-2-23",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000026/"
  ),
  dining(
    'takamatsu-dining-08',
    "うどん 一福",
    "香川県高松市国分寺町新居169-1",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37001209/"
  ),
  dining(
    'takamatsu-dining-09',
    "手打うどん 麦蔵",
    "香川県高松市福岡町1-482-5",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000874/"
  ),
  dining(
    'takamatsu-dining-10',
    "讃岐うどん 上原屋本店",
    "香川県高松市栗林町1-18-8",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000048/"
  ),
  dining(
    'takamatsu-dining-11',
    "中西うどん",
    "香川県高松市鹿角町899-3",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000040/"
  ),
  dining(
    'takamatsu-dining-12',
    "本格手打 もり家",
    "香川県高松市香川町川内原1575-1",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000134/"
  ),
  dining(
    'takamatsu-dining-13',
    "宮武うどん",
    "香川県高松市円座町340",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37005339/"
  ),
  dining(
    'takamatsu-dining-14',
    "れんげ料理店",
    "香川県高松市田町1-11ISIビル1F",
    null,
    "https://tabelog.com/kagawa/A3701/A370101/37000768/"
  ),
];

export const TAKAMATSU_DINING_NAME_SET: ReadonlySet<string> = new Set(
  TAKAMATSU_TRAVEL_DINING.map((row) => row.name_ja)
);

export const TAKAMATSU_TRAVEL_SHOPPING: readonly TravelRow[] = [];
export const TAKAMATSU_TRAVEL_COMMERCE: readonly TravelRow[] = [];

export const TAKAMATSU_TRAVEL_ALL: readonly TravelRow[] = [
  ...TAKAMATSU_TRAVEL_DINING,
  ...TAKAMATSU_TRAVEL_STAY,
  ...TAKAMATSU_TRAVEL_SHOPPING,
  ...TAKAMATSU_TRAVEL_COMMERCE
];

const INFRA_SET: ReadonlySet<string> = new Set(INFRA_CATEGORIES);
const SIGHTS_SET: ReadonlySet<string> = new Set(SIGHTS_CATEGORIES);

function isPackCategory(value: string | undefined): value is FacilityCategory {
  return LOOKUP_CATEGORIES.some((cat) => cat === value);
}

function isInfraCategory(value: string): boolean {
  return INFRA_SET.has(value);
}

function isSightsCategory(value: string): boolean {
  return SIGHTS_SET.has(value);
}

export function isTakamatsuOnsenPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAKAMATSU_ONSEN_PACK_SET.has(row.name_ja);
}

export function isTakamatsuExperiencePackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAKAMATSU_EXPERIENCE_PACK_SET.has(row.name_ja);
}

export function isTakamatsuStayPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTakamatsuShoppingPackRow(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export function isTakamatsuDiningPackRow(row: {category: string; name_ja: string}): boolean {
  if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
  return TAKAMATSU_DINING_NAME_SET.has(row.name_ja);
}

export function takamatsuSightPhoto(nameJa: string): MimaPlacePhoto | null {
  return TAKAMATSU_SIGHT_PHOTOS[nameJa] ?? null;
}

type Rankable = {
  id: string;
  name_ja: string;
  category: string;
  lat: number | null;
  lon: number | null;
};

export function rankTakamatsuSeeRows<T extends Rankable>(rows: readonly T[]): T[] {
  const sights = rows.filter(
    (row) =>
      isSightsCategory(row.category) &&
      !isTakamatsuOnsenPackRow(row) &&
      !isTakamatsuExperiencePackRow(row) &&
      !isTakamatsuStayPackRow(row) &&
      !isTakamatsuDiningPackRow(row)
  );
  const used = new Set<string>();
  const usedNames = new Set<string>();
  const pinned: T[] = [];
  for (const pin of TAKAMATSU_SIGHT_PINS) {
    const hit = sights.find((row) => row.name_ja === pin);
    if (!hit) continue;
    pinned.push(hit);
    used.add(hit.id);
    usedNames.add(hit.name_ja);
  }
  const restTourism: T[] = [];
  const restCultural: T[] = [];
  for (const row of sights) {
    if (used.has(row.id)) continue;
    if (usedNames.has(row.name_ja)) continue;
    used.add(row.id);
    usedNames.add(row.name_ja);
    if (row.category === 'tourism') restTourism.push(row);
    else restCultural.push(row);
  }
  return [...pinned, ...restTourism, ...restCultural];
}

export function takamatsuSourcedHook(
  row: {name_ja: string; address: string | null; category: string; phone?: string | null},
  locale: string
): string {
  const addr = row.address && row.address.trim() !== '' ? row.address : '';
  if (addr) return addr;
  if (row.category === 'dining') {
    return locale === 'ja' ? '高松市 飲食案内' : 'Takamatsu City dining list';
  }
  if (row.category === 'stay') {
    return locale === 'ja' ? '高松市 宿泊案内' : 'Takamatsu City lodging list';
  }
  if (row.category === 'tourism') {
    return locale === 'ja' ? '市の観光案内' : 'City tourism pages';
  }
  if (row.category === 'cultural_property') {
    return locale === 'ja' ? '文化財（オープンデータ）' : 'Cultural property (open data)';
  }
  return '';
}

export function takamatsuTopChipForRow(row: {category: string; name_ja: string}): FilterId {
  if (isTakamatsuOnsenPackRow(row)) return 'onsen';
  if (isTakamatsuExperiencePackRow(row)) return 'experience';
  if (isTakamatsuStayPackRow(row)) return 'stay';
  if (row.category === 'stay') return 'stay';
  if (row.category === 'dining') return 'dining';
  if (isTakamatsuDiningPackRow(row)) return 'dining';
  if (isSightsCategory(row.category)) return 'sights';
  if (isInfraCategory(row.category)) return 'sights';
  return row.category as FilterId;
}

export function takamatsuPackRowMatchesFilter(
  category: FacilityCategory,
  filter: FilterId,
  nameJa = ''
): boolean {
  const row = {category, name_ja: nameJa};
  if (filter === 'all') return true;
  if (filter === 'sights') {
    return (
      isSightsCategory(category) &&
      !isTakamatsuOnsenPackRow(row) &&
      !isTakamatsuExperiencePackRow(row) &&
      !isTakamatsuStayPackRow(row) &&
      !isTakamatsuDiningPackRow(row)
    );
  }
  if (filter === 'infra') return isInfraCategory(category);
  if (filter === 'onsen') return isTakamatsuOnsenPackRow(row);
  if (filter === 'experience') return isTakamatsuExperiencePackRow(row);
  if (filter === 'stay') return isTakamatsuStayPackRow(row);
  if (filter === 'dining' || filter === 'shopping' || filter === 'commerce') return false;
  return category === filter;
}

export function resolveTakamatsuFilter(c: string | undefined, q: string): FilterId {
  if (
    c === 'sights' ||
    c === 'stay' ||
    c === 'dining' ||
    c === 'onsen' ||
    c === 'experience' ||
    c === 'shopping' ||
    c === 'commerce'
  ) {
    return c;
  }
  if (c === 'all') return 'all';
  if (c === 'tourism' || c === 'cultural_property') return 'sights';
  if (c === 'infra') return 'sights';
  if (c !== undefined && isInfraCategory(c)) return 'sights';
  if (isPackCategory(c)) return c;
  if (q.trim() !== '') return 'all';
  return 'stay';
}

export const TAKAMATSU_HALL = TAKAMATSU.hall;
