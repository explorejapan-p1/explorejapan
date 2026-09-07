import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {MimaFacilityLookup} from '@/components/MimaFacilityLookup';
import {MIMA, MIMA_PLACE_PHOTO} from '@/data/mima';
import {facilityGapBoard, officialGeoRows} from '@/data/mima-facilities';
import {townHelpers} from '@/data/lookup-helpers';
import {lookupTown} from '@/data/town-lookup';
import {TSURUGI, TSURUGI_PLACE_PHOTO} from '@/data/tsurugi';
import {YOSHINOGAWA, YOSHINOGAWA_PLACE_PHOTO} from '@/data/yoshinogawa';
import {MIYOSHI, MIYOSHI_PLACE_PHOTO} from '@/data/miyoshi';
import {AWA, AWA_PLACE_PHOTO} from '@/data/awa';
import {HIGASHIMIYOSHI, HIGASHIMIYOSHI_PLACE_PHOTO} from '@/data/higashimiyoshi';
import {KITAJIMA, KITAJIMA_PLACE_PHOTO} from '@/data/kitajima';
import {MATSUSHIGE, MATSUSHIGE_PLACE_PHOTO} from '@/data/matsushige';
import {ISHII, ISHII_PLACE_PHOTO} from '@/data/ishii';
import {ITANO, ITANO_PLACE_PHOTO} from '@/data/itano';
import {KAMIITA, KAMIITA_PLACE_PHOTO} from '@/data/kamiita';
import {KAMIYAMA, KAMIYAMA_PLACE_PHOTO} from '@/data/kamiyama';
import {KATSUURA, KATSUURA_PLACE_PHOTO} from '@/data/katsuura';
import {KAMIKATSU, KAMIKATSU_PLACE_PHOTO} from '@/data/kamikatsu';
import {SANAGOCHI, SANAGOCHI_PLACE_PHOTO} from '@/data/sanagochi';
import {NAKA, NAKA_PLACE_PHOTO} from '@/data/naka';
import {MINAMI, MINAMI_PLACE_PHOTO} from '@/data/minami';
import {KAIYO, KAIYO_PLACE_PHOTO} from '@/data/kaiyo';
import {AIZUMI, AIZUMI_PLACE_PHOTO} from '@/data/aizumi';
import {KOMATSUSHIMA, KOMATSUSHIMA_PLACE_PHOTO} from '@/data/komatsushima';
import {ANAN, ANAN_PLACE_PHOTO} from '@/data/anan';
import {MUGI, MUGI_PLACE_PHOTO} from '@/data/mugi';
import {NARUTO, NARUTO_PLACE_PHOTO} from '@/data/naruto';
import {TOKUSHIMA_CITY, TOKUSHIMA_CITY_PLACE_PHOTO} from '@/data/tokushima-city';
import {PREFECTURE_BY_SLUG} from '@/data/prefectures';
import {
  MUNICIPALITY_BY_SLUG,
  TOKUSHIMA_MUNICIPALITIES
} from '@/data/tokushima-municipalities';
import {KAGAWA_MUNICIPALITIES} from '@/data/kagawa-municipalities';
import {
  allMunicipalityStaticParams,
  municipalityBySlug,
  prefHasMunicipalityLayer
} from '@/data/municipalities';
import {TAKAMATSU, TAKAMATSU_PLACE_PHOTO} from '@/data/takamatsu';
import {KOTOHIRA, KOTOHIRA_PLACE_PHOTO} from '@/data/kotohira';
import {MARUGAME, MARUGAME_PLACE_PHOTO} from '@/data/marugame';
import {KANONJI, KANONJI_PLACE_PHOTO} from '@/data/kanonji';
import {SAKAIDE, SAKAIDE_PLACE_PHOTO} from '@/data/sakaide'
import {NAOSHIMA, NAOSHIMA_PLACE_PHOTO} from '@/data/naoshima';
import {SHODOSHIMA, SHODOSHIMA_PLACE_PHOTO} from '@/data/shodoshima';
import {ZENTSUJI, ZENTSUJI_PLACE_PHOTO} from '@/data/zentsuji';
import {MITOYO, MITOYO_PLACE_PHOTO} from '@/data/mitoyo';
import {UTAZU, UTAZU_PLACE_PHOTO} from '@/data/utazu';
import {TONOSHO, TONOSHO_PLACE_PHOTO} from '@/data/tonosho';
import {SANUKI, SANUKI_PLACE_PHOTO} from '@/data/sanuki';
import {HIGASHIKAGAWA, HIGASHIKAGAWA_PLACE_PHOTO} from '@/data/higashikagawa';
import {MIKI, MIKI_PLACE_PHOTO} from '@/data/miki';
import {AYAGAWA, AYAGAWA_PLACE_PHOTO} from '@/data/ayagawa';
import {TADOTSU, TADOTSU_PLACE_PHOTO} from '@/data/tadotsu';
import {MANNO, MANNO_PLACE_PHOTO} from '@/data/manno';
import {KOCHI, KOCHI_PLACE_PHOTO} from '@/data/kochi';
import {NANKOKU, NANKOKU_PLACE_PHOTO} from '@/data/nankoku';
import {KONAN, KONAN_PLACE_PHOTO} from '@/data/konan';
import {KAMI, KAMI_PLACE_PHOTO} from '@/data/kami';
import {INO, INO_PLACE_PHOTO} from '@/data/ino';
import {AKI, AKI_PLACE_PHOTO} from '@/data/aki';
import {MUROTO, MUROTO_PLACE_PHOTO} from '@/data/muroto';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';
import {projectMimaOfficialMap} from '@/lib/geo';
import {JsonLd} from '@/components/JsonLd';
import {mimaGraph, tsurugiGraph, yoshinogawaGraph, miyoshiGraph, tokushimaCityGraph, awaGraph, higashimiyoshiGraph, kitajimaGraph, narutoGraph, matsushigeGraph, ishiiGraph, itanoGraph, kamiitaGraph, kamiyamaGraph, katsuuraGraph, kamikatsuGraph, sanagochiGraph, nakaGraph, minamiGraph, kaiyoGraph, aizumiGraph, mugiGraph, komatsushimaGraph, ananGraph, takamatsuGraph, kotohiraGraph, marugameGraph, kanonjiGraph, sakaideGraph, naoshimaGraph, shodoshimaGraph, zentsujiGraph, mitoyoGraph, utazuGraph, tonoshoGraph, sanukiGraph, higashikagawaGraph, mikiGraph, ayagawaGraph, tadotsuGraph, mannoGraph, kochiGraph, nankokuGraph, konanGraph, kamiGraph, inoGraph, akiGraph, murotoGraph} from '@/lib/jsonld';
import {shareMetadata} from '@/lib/seo';

type Props = {
  params: Promise<{locale: string; prefecture: string; municipality: string}>;
};

export function generateStaticParams() {
  return allMunicipalityStaticParams();
}

export async function generateMetadata({params}: Props) {
  const {locale, prefecture, municipality} = await params;
  if (!prefHasMunicipalityLayer(prefecture)) return {};
  const muni = municipalityBySlug(prefecture, municipality);
  if (!muni) return {};
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const live = muni.status === 'ready';
  const enTitle =
    /\b(City|Town|Village)$/.test(muni.nameEn)
      ? muni.nameEn
      : muni.nameJa.endsWith('市')
        ? `${muni.nameEn} City`
        : muni.nameJa.endsWith('町')
          ? `${muni.nameEn} Town`
          : muni.nameJa.endsWith('村')
            ? `${muni.nameEn} Village`
            : muni.nameEn;
  const title = loc === 'ja' ? muni.nameJa : live ? enTitle : muni.nameEn;
  const image =
    muni.slug === 'tsurugi'
      ? TSURUGI_PLACE_PHOTO
      : muni.slug === 'yoshinogawa'
        ? YOSHINOGAWA_PLACE_PHOTO
        : muni.slug === 'miyoshi'
          ? MIYOSHI_PLACE_PHOTO
          : muni.slug === 'tokushima'
            ? TOKUSHIMA_CITY_PLACE_PHOTO
            : muni.slug === 'awa'
              ? AWA_PLACE_PHOTO
              : muni.slug === 'higashimiyoshi'
                ? HIGASHIMIYOSHI_PLACE_PHOTO
                : muni.slug === 'kitajima'
                  ? KITAJIMA_PLACE_PHOTO
                  : muni.slug === 'naruto'
                    ? NARUTO_PLACE_PHOTO
                    : muni.slug === 'matsushige'
                      ? MATSUSHIGE_PLACE_PHOTO
                      : muni.slug === 'ishii'
                        ? ISHII_PLACE_PHOTO
                        : muni.slug === 'itano'
                          ? ITANO_PLACE_PHOTO
                          : muni.slug === 'kamiita'
                            ? KAMIITA_PLACE_PHOTO
                            : muni.slug === 'kamiyama'
                              ? KAMIYAMA_PLACE_PHOTO
                              : muni.slug === 'katsuura'
                                ? KATSUURA_PLACE_PHOTO
                                : muni.slug === 'kamikatsu'
                                  ? KAMIKATSU_PLACE_PHOTO
                                  : muni.slug === 'sanagochi'
                                    ? SANAGOCHI_PLACE_PHOTO
                                    : muni.slug === 'naka'
                                      ? NAKA_PLACE_PHOTO
                                      : muni.slug === 'minami'
                                        ? MINAMI_PLACE_PHOTO
                                      : muni.slug === 'kaiyo'
                                        ? KAIYO_PLACE_PHOTO
                                        : muni.slug === 'mugi'
                                          ? MUGI_PLACE_PHOTO
                                          : muni.slug === 'aizumi'
                                            ? AIZUMI_PLACE_PHOTO
                                            : muni.slug === 'komatsushima'
                                              ? KOMATSUSHIMA_PLACE_PHOTO
                                              : muni.slug === 'anan'
                                                ? ANAN_PLACE_PHOTO
                                                : muni.slug === 'takamatsu'
                                                  ? TAKAMATSU_PLACE_PHOTO
                                                  : muni.slug === 'kotohira'
                                                    ? KOTOHIRA_PLACE_PHOTO
                                                  : muni.slug === 'marugame'
                                                    ? MARUGAME_PLACE_PHOTO
                                                  : muni.slug === 'kanonji'
                                                    ? KANONJI_PLACE_PHOTO
                                                  : muni.slug === 'sakaide'
                                                    ? SAKAIDE_PLACE_PHOTO
                                                  : muni.slug === 'naoshima'
                                                    ? NAOSHIMA_PLACE_PHOTO
                                                  : muni.slug === 'shodoshima'
                                                    ? SHODOSHIMA_PLACE_PHOTO
                                                  : muni.slug === 'zentsuji'
                                                    ? ZENTSUJI_PLACE_PHOTO
                                                  : muni.slug === 'mitoyo'
                                                    ? MITOYO_PLACE_PHOTO
                                                  : muni.slug === 'utazu'
                                                    ? UTAZU_PLACE_PHOTO
                                                  : muni.slug === 'tonosho'
                                                    ? TONOSHO_PLACE_PHOTO
                                                  : muni.slug === 'sanuki'
                                                    ? SANUKI_PLACE_PHOTO
                                                    : muni.slug === 'higashikagawa'
                                                      ? HIGASHIKAGAWA_PLACE_PHOTO
                                                    : muni.slug === 'miki'
                                                      ? MIKI_PLACE_PHOTO
                                                    : muni.slug === 'ayagawa'
                                                      ? AYAGAWA_PLACE_PHOTO
                                                    : muni.slug === 'tadotsu'
                                                      ? TADOTSU_PLACE_PHOTO
                                                    : muni.slug === 'manno'
                                                      ? MANNO_PLACE_PHOTO
                                                    : muni.slug === 'kochi'
                                                      ? KOCHI_PLACE_PHOTO
                                                    : muni.slug === 'nankoku'
                                                      ? NANKOKU_PLACE_PHOTO
                                                    : muni.slug === 'konan'
                                                      ? KONAN_PLACE_PHOTO
                                                    : muni.slug === 'kami'
                                                      ? KAMI_PLACE_PHOTO
                                                    : muni.slug === 'ino'
                                                      ? INO_PLACE_PHOTO
                                                    : muni.slug === 'aki'
                                                      ? AKI_PLACE_PHOTO
                                                    : muni.slug === 'muroto'
                                                      ? MUROTO_PLACE_PHOTO
                                                  : MIMA_PLACE_PHOTO;
  const description = live
    ? muni.slug === 'tsurugi'
      ? loc === 'ja'
        ? 'つるぎ町。二層うだつの町並み、剣山、宿。'
        : 'Tsurugi Town, Tokushima — two-storey udatsu townscape, Mount Tsurugi, stays.'
      : muni.slug === 'yoshinogawa'
        ? loc === 'ja'
          ? '吉野川市。川島城、藤井寺、鴨島の宿。'
          : 'Yoshinogawa City, Tokushima — Kawashima Castle, Fujii-dera, Kamojima stays.'
        : muni.slug === 'miyoshi'
          ? loc === 'ja'
            ? '三好市。大歩危・小歩危、祖谷、宿。'
            : 'Miyoshi City, Tokushima — Oboke and Koboke, Iya Valley, stays.'
          : muni.slug === 'tokushima'
            ? loc === 'ja'
              ? '徳島市。眉山、徳島城跡、しんまち、食。'
              : 'Tokushima City — Mount Bizan, Tokushima Castle ruins, Shinmachi, food.'
            : muni.slug === 'awa'
              ? loc === 'ja'
                ? '阿波市。阿波の土柱、切幡寺、食。'
                : 'Awa City, Tokushima — Awa-no-Dochū, Kirihata-ji, food.'
              : muni.slug === 'higashimiyoshi'
                ? loc === 'ja'
                  ? '東みよし町。加茂の大クス、美濃田の淵、食。'
                  : 'Higashimiyoshi Town, Tokushima — Kamo-no-Ōkusu, Minoda-no-fuchi, food.'
                : muni.slug === 'kitajima'
                  ? loc === 'ja'
                    ? '北島町。北島チューリップ公園、食。'
                    : 'Kitajima Town, Tokushima — Kitajima Tulip Park, food.'
                  : muni.slug === 'naruto'
                    ? loc === 'ja'
                      ? '鳴門市。渦潮、渦の道。'
                      : 'Naruto City, Tokushima — whirlpools and Uzunomichi.'
                    : muni.slug === 'matsushige'
                      ? loc === 'ja'
                        ? '松茂町。月見ヶ丘海水浴場、徳島空港。'
                        : 'Matsushige Town, Tokushima — Tsukimigaoka beach, Tokushima Airport.'
                      : muni.slug === 'ishii'
                        ? loc === 'ja'
                          ? '石井町。吉野川第十堰、食。'
                          : 'Ishii Town, Tokushima — Yoshino River Daiju Weir, food.'
                        : muni.slug === 'itano'
                          ? loc === 'ja'
                            ? '板野町。あすたむらんど徳島、金泉寺・大日寺・地蔵寺、食。'
                            : 'Itano Town, Tokushima — Asutamu Land, Shikoku temples 3–5, food.'
                          : muni.slug === 'kamiita'
                            ? loc === 'ja'
                              ? '上板町。安楽寺・大山寺、技の館、食。'
                              : 'Kamiita Town, Tokushima — Anraku-ji, Taisan-ji, Waza-no-yakata, food.'
                            : muni.slug === 'kamiyama'
                              ? loc === 'ja'
                                ? '神山町。焼山寺、雨乞の滝、食。'
                                : 'Kamiyama Town, Tokushima — Shōsan-ji, Amagoi Falls, food.'
                              : muni.slug === 'katsuura'
                                ? loc === 'ja'
                                  ? '勝浦町。鶴林寺、星の岩屋、食。'
                                  : 'Katsuura Town, Tokushima — Kakurin-ji, Hoshi-no-iwaya, food.'
                                : muni.slug === 'kamikatsu'
                                  ? loc === 'ja'
                                    ? '上勝町。樫原の棚田、ゼロ・ウェイスト、食。'
                                    : 'Kamikatsu Town, Tokushima — Kashihara terraces, zero waste, food.'
                                : muni.slug === 'sanagochi'
                                  ? loc === 'ja'
                                    ? '佐那河内村。大川原高原、嵯峨峡、食。'
                                    : 'Sanagochi Village, Tokushima — Okawara Highlands, Saga Gorge, food.'
                                  : muni.slug === 'naka'
                                    ? loc === 'ja'
                                      ? '那賀町。高の瀬峡、道の駅、食。'
                                      : 'Naka Town, Tokushima — Kōnosekyō gorge, roadside stations, food.'
                                    : muni.slug === 'minami'
                                      ? loc === 'ja'
                                        ? '美波町。薬王寺、日和佐、食。'
                                        : 'Minami Town, Tokushima — Yakuo-ji, Hiwasa, food.'
                                    : muni.slug === 'kaiyo'
                                      ? loc === 'ja'
                                        ? '海陽町。漁火の森公園、道の駅宍喰温泉、食。'
                                        : 'Kaiyo Town, Tokushima — Isarino-mori Park, Michi-no-Eki Shishikui Onsen, food.'
                                    : muni.slug === 'mugi'
                                      ? loc === 'ja'
                                        ? '牟岐町。モラスコむぎ、出羽島、食。'
                                        : 'Mugi Town, Tokushima — Morasco Mugi, Deba Island, food.'
                                    : muni.slug === 'aizumi'
                                      ? loc === 'ja'
                                        ? '藍住町。藍の館、バラ園、食。'
                                        : 'Aizumi Town, Tokushima — Ai-no-Yakata, rose garden, food.'
                                    : muni.slug === 'komatsushima'
                                      ? loc === 'ja'
                                        ? '小松島市。大手海岸、立江寺・恩山寺。'
                                        : 'Komatsushima City, Tokushima — Ōte Beach, Tatsue-ji and Onzan-ji.'
                                    : muni.slug === 'anan'
                                      ? loc === 'ja'
                                        ? '阿南市。蒲生田岬、太龍寺・平等寺、食。'
                                        : 'Anan City, Tokushima — Cape Kamoda, Tairyū-ji and Byōdō-ji, food.'
                                    : muni.slug === 'takamatsu'
                                      ? loc === 'ja'
                                        ? '高松市。栗林公園、玉藻公園、屋島、食。'
                                        : 'Takamatsu City, Kagawa — Ritsurin Garden, Tamamo Park, Yashima, food.'
                                    : muni.slug === 'kotohira'
                                      ? loc === 'ja'
                                        ? '琴平町。金刀比羅宮、旧金毘羅大芝居、温泉、食。'
                                        : 'Kotohira Town, Kagawa — Kotohira-gū, Kanamaruza, onsen, food.'
                                    : muni.slug === 'marugame'
                                      ? loc === 'ja'
                                        ? '丸亀市。丸亀城、中津万象園、うちわ、食。'
                                        : 'Marugame City, Kagawa — Marugame Castle, Banshō-en, uchiwa, food.'
                                    : muni.slug === 'kanonji'
                                      ? loc === 'ja'
                                        ? '観音寺市。銭形砂絵、琴弾公園、高屋神社、食。'
                                        : 'Kanonji City, Kagawa — Zenigata Sunae, Kotohiki Park, Takaya Shrine, food.'
                                    : muni.slug === 'sakaide'
                                      ? loc === 'ja'
                                        ? '坂出市。瀬戸大橋、記念公園、与島、食。'
                                        : 'Sakaide City, Kagawa — Great Seto Bridge, Memorial Park, Yoshima, food.'
                                    : muni.slug === 'naoshima'
                                      ? loc === 'ja'
                                        ? '直島町。南瓜、地中美術館、ベネッセ、宮浦港。'
                                        : 'Naoshima Town, Kagawa — Yellow Pumpkin, Chichu, Benesse, Miyanoura.'
                                    : muni.slug === 'shodoshima'
                                      ? loc === 'ja'
                                        ? '小豆島町。オリーブ公園、寒霞渓、二十四の瞳映画村、食。'
                                        : 'Shodoshima Town, Kagawa — Olive Park, Kankakei, Twenty-Four Eyes, food.'
                                    : muni.slug === 'zentsuji'
                                      ? loc === 'ja'
                                        ? '善通寺市。総本山善通寺、曼荼羅寺、出釈迦寺、甲山寺、食。'
                                        : 'Zentsuji City, Kagawa — Zentsū-ji, Mandara-ji, Shusshaka-ji, Kōyama-ji, food.'
                                    : muni.slug === 'mitoyo'
                                      ? loc === 'ja'
                                        ? '三豊市。父母ヶ浜、紫雲出山、本山寺、弥谷寺、食。'
                                        : 'Mitoyo City, Kagawa — Chichibugahama, Mount Shiude, Motoyama-ji, Iyadani-ji, food.'
                                    : muni.slug === 'utazu'
                                      ? loc === 'ja'
                                        ? '宇多津町。ゴールドタワー、四国水族館、臨海公園、食。'
                                        : 'Utazu Town, Kagawa — Gold Tower, Shikoku Aquarium, seaside park, food.'
                                    : muni.slug === 'tonosho'
                                      ? loc === 'ja'
                                        ? '土庄町。エンジェルロード、銚子渓、迷路のまち、食。'
                                        : 'Tonosho Town, Kagawa — Angel Road, Choshikei, maze town, food.'
                                    : muni.slug === 'sanuki'
                                      ? loc === 'ja'
                                        ? 'さぬき市。志度寺、長尾寺、津田の松原、食。'
                                        : 'Sanuki City, Kagawa — Shido-ji, Nagao-ji, Tsuda pine grove, food.'
                                    : muni.slug === 'higashikagawa'
                                      ? loc === 'ja'
                                        ? '東かがわ市。引田城跡、引田のまち並み、白鳥神社、食。'
                                        : 'Higashikagawa City, Kagawa — Hiketa Castle, Hiketa townscape, Shiratori Shrine, food.'
                                    : muni.slug === 'miki'
                                      ? loc === 'ja'
                                        ? '三木町。浄土寺、虹の滝、白山神社、食。'
                                        : 'Miki Town, Kagawa — Jodo-ji, Rainbow Falls, Shirayama Shrine, food.'
                                    : muni.slug === 'ayagawa'
                                      ? loc === 'ja'
                                        ? '綾川町。滝宮天満宮、高鉢山、道の駅滝宮、食。'
                                        : 'Ayagawa Town, Kagawa — Takinomiya Tenmangu, Mount Takahachi, Michinoeki Takinomiya, food.'
                                      : muni.slug === 'tadotsu'
                                        ? loc === 'ja'
                                          ? '多度津町。海岸寺、桃陵公園、多度津港、食。'
                                          : 'Tadotsu Town, Kagawa — Kaiganji, Toryo Park, Tadotsu Port, food.'
                                      : muni.slug === 'manno'
                                        ? loc === 'ja'
                                          ? 'まんのう町。国営讃岐まんのう公園、満濃池、道の駅ことなみ、食。'
                                          : 'Manno Town, Kagawa — Sanuki Manno Park, Mannoike, Michinoeki Kotonami, food.'
                                      : muni.slug === 'kochi'
                                        ? loc === 'ja'
                                          ? '高知市。高知城、桂浜、ひろめ市場、日曜市、食。'
                                          : 'Kochi City — Kochi Castle, Katsurahama, Hirome Market, Sunday Market, food.'
                                      : muni.slug === 'nankoku'
                                        ? loc === 'ja'
                                          ? '南国市。土佐国分寺、岡豊城、高知龍馬空港、食。'
                                          : 'Nankoku City — Tosa Kokubun-ji, Okō Castle, Kochi Ryoma Airport, food.'
                                      : muni.slug === 'konan'
                                        ? loc === 'ja'
                                          ? '香南市。絵金蔵、のいち動物公園、道の駅やす、食。'
                                          : 'Konan City — Ekingura, Noichi Zoo, Michinoeki Yasu, food.'
                                      : muni.slug === 'kami'
                                        ? loc === 'ja'
                                          ? '香美市。やなせたかし記念館、龍河洞、道の駅美良布、食。'
                                          : 'Kami City — Yanase Takashi Memorial Hall, Ryugado Cave, Michinoeki Birafu, food.'
                                      : muni.slug === 'ino'
                                        ? loc === 'ja'
                                          ? 'いの町。にこ淵、紙の博物館、道の駅土佐和紙工芸村、食。'
                                          : 'Ino Town — Nikobuchi, Paper Museum, Michinoeki Tosa Washi, food.'
                                      : muni.slug === 'aki'
                                        ? loc === 'ja'
                                          ? '安芸市。野良時計、安芸城跡、伊尾木洞、食。'
                                          : 'Aki City — Noradokei, Aki Castle ruins, Iokido Cave, food.'
                                      : muni.slug === 'muroto'
                                        ? loc === 'ja'
                                          ? '室戸市。室戸岬、室戸岬灯台、むろと廃校水族館、食。'
                                          : 'Muroto City — Cape Muroto, lighthouse, schoolhouse aquarium, food.'
          : loc === 'ja'
            ? '四国のまほろば 美馬市。うだつの町並み、食、宿。'
            : 'Mima City, Tokushima — Udatsu townscape, food, and stays.'
    : loc === 'ja'
      ? 'この市町村のページは準備中です。'
      : 'This municipality page is coming soon.';
  return shareMetadata({
    locale: loc,
    rest: `${prefecture}/${muni.slug}`,
    title,
    description,
    image,
    index: live
  });
}

export default async function MunicipalityPage({params}: Props) {
  const {locale, prefecture, municipality} = await params;
  if (!prefHasMunicipalityLayer(prefecture)) notFound();
  const muni = municipalityBySlug(prefecture, municipality);
  if (!muni) notFound();
  setRequestLocale(locale);
  const pref = PREFECTURE_BY_SLUG.get(prefecture)!;
  const isJa = locale === 'ja';

  if (muni.status !== 'ready') {
    return (
      <>
        <nav className="crumbs">
          <Link href="/">{isJa ? '全国' : 'Japan'}</Link>
          <span> / </span>
          <Link href={`/${prefecture}`}>{isJa ? pref.nameJa : pref.nameEn}</Link>
          <span> / </span>
          <span>{isJa ? muni.nameJa : muni.nameEn}</span>
        </nav>
        <h1>{isJa ? muni.nameJa : muni.nameEn}</h1>
        <div className="coming">
          <p>
            {isJa
              ? 'この市町村のページは準備中です。現在本文があるのは徳島市・鳴門市・小松島市・阿南市・美馬市・つるぎ町・吉野川市・三好市・阿波市・東みよし町・北島町・松茂町・石井町・板野町・上板町・神山町・勝浦町・上勝町・佐那河内村・那賀町・牟岐町・美波町・海陽町・藍住町です。'
              : 'This municipality page is coming soon. Tokushima City, Naruto City, Komatsushima City, Anan City, Mima City, Tsurugi Town, Yoshinogawa City, Miyoshi City, Awa City, Higashimiyoshi Town, Kitajima Town, Matsushige Town, Ishii Town, Itano Town, Kamiita Town, Kamiyama Town, Katsuura Town, Kamikatsu Town, Sanagochi Village, Naka Town, Mugi Town, Minami Town, Kaiyo Town, and Aizumi Town have full listings in v0.'}
          </p>
          <p>
            <Link href="/tokushima/tokushima">{isJa ? '徳島市へ' : 'Go to Tokushima City'}</Link>
            {' · '}
            <Link href="/tokushima/mima">{isJa ? '美馬市へ' : 'Go to Mima City'}</Link>
            {' · '}
            <Link href="/tokushima/tsurugi">{isJa ? 'つるぎ町へ' : 'Go to Tsurugi Town'}</Link>
            {' · '}
            <Link href="/tokushima/yoshinogawa">{isJa ? '吉野川市へ' : 'Go to Yoshinogawa City'}</Link>
            {' · '}
            <Link href="/tokushima/miyoshi">{isJa ? '三好市へ' : 'Go to Miyoshi City'}</Link>
            {' · '}
            <Link href="/tokushima/awa">{isJa ? '阿波市へ' : 'Go to Awa City'}</Link>
            {' · '}
            <Link href="/tokushima/higashimiyoshi">{isJa ? '東みよし町へ' : 'Go to Higashimiyoshi Town'}</Link>
            {' · '}
            <Link href="/tokushima/kitajima">{isJa ? '北島町へ' : 'Go to Kitajima Town'}</Link>
            {' · '}
            <Link href="/tokushima/naruto">{isJa ? '鳴門市へ' : 'Go to Naruto City'}</Link>
            {' · '}
            <Link href="/tokushima/matsushige">{isJa ? '松茂町へ' : 'Go to Matsushige Town'}</Link>
            {' · '}
            <Link href="/tokushima/ishii">{isJa ? '石井町へ' : 'Go to Ishii Town'}</Link>
            {' · '}
            <Link href="/tokushima/itano">{isJa ? '板野町へ' : 'Go to Itano Town'}</Link>
            {' · '}
            <Link href="/tokushima/kamiita">{isJa ? '上板町へ' : 'Go to Kamiita Town'}</Link>
            {' · '}
            <Link href="/tokushima/kamiyama">{isJa ? '神山町へ' : 'Go to Kamiyama Town'}</Link>
            {' · '}
            <Link href="/tokushima/katsuura">{isJa ? '勝浦町へ' : 'Go to Katsuura Town'}</Link>
            {' · '}
            <Link href="/tokushima/kamikatsu">{isJa ? '上勝町へ' : 'Go to Kamikatsu Town'}</Link>
            {' · '}
            <Link href="/tokushima/sanagochi">{isJa ? '佐那河内村へ' : 'Go to Sanagochi Village'}</Link>
            {' · '}
            <Link href="/tokushima/naka">{isJa ? '那賀町へ' : 'Go to Naka Town'}</Link>
            {' · '}
            <Link href="/tokushima/mugi">{isJa ? '牟岐町へ' : 'Go to Mugi Town'}</Link>
            {' · '}
            <Link href="/tokushima/minami">{isJa ? '美波町へ' : 'Go to Minami Town'}</Link>
            {' · '}
            <Link href="/tokushima/kaiyo">{isJa ? '海陽町へ' : 'Go to Kaiyo Town'}</Link>
            {' · '}
            <Link href="/tokushima/aizumi">{isJa ? '藍住町へ' : 'Go to Aizumi Town'}</Link>
            {' · '}
            <Link href="/tokushima/komatsushima">{isJa ? '小松島市へ' : 'Go to Komatsushima City'}</Link>
            {' · '}
            <Link href="/tokushima/anan">{isJa ? '阿南市へ' : 'Go to Anan City'}</Link>
          </p>
        </div>
      </>
    );
  }

  const town = lookupTown(muni.slug);
  if (!town) notFound();
  const p = MIMA.population;
  const packRows = town.rows;
  const gaps = facilityGapBoard(packRows);
  const officialXy = officialGeoRows(packRows);
  if (officialXy.length !== town.expectedGeo) {
    throw new Error(`official xy ${officialXy.length} != ${town.expectedGeo}`);
  }
  if (packRows.length !== town.expectedRows) {
    throw new Error(`pack rows ${packRows.length} != ${town.expectedRows}`);
  }
  const officialMap = projectMimaOfficialMap(officialXy, town.jis);

  // Static export cannot SSR query strings. First HTML paint = 宿泊.
  // MimaFacilityLookup reads c/q/id from window.location.search after mount.
  const filter = townHelpers(town.slug).resolveFilter(undefined, '');
  const engaged = true;
  const tMuni = await getTranslations('muni');
  const graphLocale = (locale === 'en' ? 'en' : 'ja') as AppLocale;

  return (
    <>
      <JsonLd data={town.slug === 'tokushima' ? tokushimaCityGraph(graphLocale) : town.slug === 'tsurugi' ? tsurugiGraph(graphLocale) : town.slug === 'yoshinogawa' ? yoshinogawaGraph(graphLocale) : town.slug === 'miyoshi' ? miyoshiGraph(graphLocale) : town.slug === 'awa' ? awaGraph(graphLocale) : town.slug === 'higashimiyoshi' ? higashimiyoshiGraph(graphLocale) : town.slug === 'kitajima' ? kitajimaGraph(graphLocale) : town.slug === 'naruto' ? narutoGraph(graphLocale) : town.slug === 'matsushige' ? matsushigeGraph(graphLocale) : town.slug === 'ishii' ? ishiiGraph(graphLocale) : town.slug === 'itano' ? itanoGraph(graphLocale) : town.slug === 'kamiita' ? kamiitaGraph(graphLocale) : town.slug === 'kamiyama' ? kamiyamaGraph(graphLocale) : town.slug === 'katsuura' ? katsuuraGraph(graphLocale) : town.slug === 'kamikatsu' ? kamikatsuGraph(graphLocale) : town.slug === 'sanagochi' ? sanagochiGraph(graphLocale) : town.slug === 'naka' ? nakaGraph(graphLocale) : town.slug === 'minami' ? minamiGraph(graphLocale) : town.slug === 'kaiyo' ? kaiyoGraph(graphLocale) : town.slug === 'mugi' ? mugiGraph(graphLocale) : town.slug === 'aizumi' ? aizumiGraph(graphLocale) : town.slug === 'komatsushima' ? komatsushimaGraph(graphLocale) : town.slug === 'anan' ? ananGraph(graphLocale) : town.slug === 'takamatsu' ? takamatsuGraph(graphLocale) : town.slug === 'kotohira' ? kotohiraGraph(graphLocale) : town.slug === 'marugame' ? marugameGraph(graphLocale) : town.slug === 'kanonji' ? kanonjiGraph(graphLocale) : town.slug === 'sakaide' ? sakaideGraph(graphLocale) : town.slug === 'naoshima' ? naoshimaGraph(graphLocale) : town.slug === 'shodoshima' ? shodoshimaGraph(graphLocale) : town.slug === 'zentsuji' ? zentsujiGraph(graphLocale) : town.slug === 'mitoyo' ? mitoyoGraph(graphLocale) : town.slug === 'utazu' ? utazuGraph(graphLocale) : town.slug === 'tonosho' ? tonoshoGraph(graphLocale) : town.slug === 'sanuki' ? sanukiGraph(graphLocale) : town.slug === 'higashikagawa' ? higashikagawaGraph(graphLocale) : town.slug === 'miki' ? mikiGraph(graphLocale) : town.slug === 'ayagawa' ? ayagawaGraph(graphLocale) : town.slug === 'tadotsu' ? tadotsuGraph(graphLocale) : town.slug === 'manno' ? mannoGraph(graphLocale) : town.slug === 'kochi' ? kochiGraph(graphLocale) : town.slug === 'nankoku' ? nankokuGraph(graphLocale) : town.slug === 'konan' ? konanGraph(graphLocale) : town.slug === 'kami' ? kamiGraph(graphLocale) : town.slug === 'ino' ? inoGraph(graphLocale) : town.slug === 'aki' ? akiGraph(graphLocale) : town.slug === 'muroto' ? murotoGraph(graphLocale) : mimaGraph(graphLocale)} />
      <MimaFacilityLookup
        locale={locale}
        town={town}
        gaps={gaps}
        map={officialMap}
        rows={packRows}
        filter={filter}
        query=""
        engaged={engaged}
        openId={null}
      />

      {town.slug === 'tokushima' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {TOKUSHIMA_CITY.nameJa} / {TOKUSHIMA_CITY.nameEn}（{TOKUSHIMA_CITY.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? TOKUSHIMA_CITY.prefectureJa : TOKUSHIMA_CITY.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{TOKUSHIMA_CITY.jis}</strong>
              {isJa ? '（鳴門市 36202 ではない）' : ' (not Naruto City 36202)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{TOKUSHIMA_CITY.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{TOKUSHIMA_CITY.hall.postalCode} {isJa ? TOKUSHIMA_CITY.hall.addressJa : TOKUSHIMA_CITY.hall.addressEn}
              <br />
              {TOKUSHIMA_CITY.hall.phone} · <a href={TOKUSHIMA_CITY.sameAs}>sameAs {TOKUSHIMA_CITY.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={TOKUSHIMA_CITY.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={TOKUSHIMA_CITY.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={TOKUSHIMA_CITY.sources.kanko}>{isJa ? '観光案内' : 'Tourism guide'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${TOKUSHIMA_CITY.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${TOKUSHIMA_CITY.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'awa' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {AWA.nameJa} / {AWA.nameEn}（{AWA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? AWA.prefectureJa : AWA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{AWA.jis}</strong>
              {isJa ? '（三好市 36208・東みよし町 36489 ではない）' : ' (not Miyoshi 36208 / Higashimiyoshi 36489)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{AWA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{AWA.hall.postalCode} {isJa ? AWA.hall.addressJa : AWA.hall.addressEn}
              <br />
              {AWA.hall.phone} · <a href={AWA.sameAs}>sameAs {AWA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={AWA.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={AWA.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={AWA.sources.kanko}>{isJa ? '観光案内' : 'Tourism guide'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${AWA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${AWA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'miyoshi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MIYOSHI.nameJa} / {MIYOSHI.nameEn}（{MIYOSHI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? MIYOSHI.prefectureJa : MIYOSHI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MIYOSHI.jis}</strong>
              {isJa ? '（東みよし町 36489 ではない）' : ' (not Higashimiyoshi Town 36489)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MIYOSHI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{MIYOSHI.hall.postalCode} {isJa ? MIYOSHI.hall.addressJa : MIYOSHI.hall.addressEn}
              <br />
              {MIYOSHI.hall.phone} · <a href={MIYOSHI.sameAs}>sameAs {MIYOSHI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={MIYOSHI.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MIYOSHI.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={MIYOSHI.sources.kanko}>{isJa ? '観光案内' : 'Tourism guide'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MIYOSHI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${MIYOSHI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>
      ) : town.slug === 'yoshinogawa' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {YOSHINOGAWA.nameJa} / {YOSHINOGAWA.nameEn}（{YOSHINOGAWA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? YOSHINOGAWA.prefectureJa : YOSHINOGAWA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{YOSHINOGAWA.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{YOSHINOGAWA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{YOSHINOGAWA.hall.postalCode} {isJa ? YOSHINOGAWA.hall.addressJa : YOSHINOGAWA.hall.addressEn}
              <br />
              {YOSHINOGAWA.hall.phone} · <a href={YOSHINOGAWA.sameAs}>sameAs {YOSHINOGAWA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={YOSHINOGAWA.sources.hall}>{isJa ? '連絡先一覧' : 'Contact list'}</a>
        {' · '}
        <a href={YOSHINOGAWA.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${YOSHINOGAWA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${YOSHINOGAWA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>
      
      ) : town.slug === 'higashimiyoshi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {HIGASHIMIYOSHI.nameJa} / {HIGASHIMIYOSHI.nameEn}（{HIGASHIMIYOSHI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? HIGASHIMIYOSHI.prefectureJa : HIGASHIMIYOSHI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{HIGASHIMIYOSHI.jis}</strong>
              {isJa ? '（三好市 36208 ではない）' : ' (not Miyoshi City 36208)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{HIGASHIMIYOSHI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{HIGASHIMIYOSHI.hall.postalCode} {isJa ? HIGASHIMIYOSHI.hall.addressJa : HIGASHIMIYOSHI.hall.addressEn}
              <br />
              {HIGASHIMIYOSHI.hall.phone} · <a href={HIGASHIMIYOSHI.sameAs}>sameAs {HIGASHIMIYOSHI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={HIGASHIMIYOSHI.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={HIGASHIMIYOSHI.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${HIGASHIMIYOSHI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${HIGASHIMIYOSHI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>



      ) : town.slug === 'naruto' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {NARUTO.nameJa} / {NARUTO.nameEn}（{NARUTO.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? NARUTO.prefectureJa : NARUTO.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{NARUTO.jis}</strong>
              {isJa ? '（徳島市 36201・北島 36402・松茂 36401 ではない）' : ' (not Tokushima 36201 / Kitajima 36402 / Matsushige 36401)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{NARUTO.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{NARUTO.hall.postalCode} {isJa ? NARUTO.hall.addressJa : NARUTO.hall.addressEn}
              <br />
              {NARUTO.hall.phone} · <a href={NARUTO.sameAs}>sameAs {NARUTO.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={NARUTO.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={NARUTO.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${NARUTO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${NARUTO.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      
      ) : town.slug === 'ishii' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {ISHII.nameJa} / {ISHII.nameEn}（{ISHII.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? ISHII.prefectureJa : ISHII.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{ISHII.jis}</strong>
              {isJa ? '（松茂 36401・北島 36402・藍住 36403 ではない）' : ' (not Matsushige 36401 / Kitajima 36402 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{ISHII.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{ISHII.hall.postalCode} {isJa ? ISHII.hall.addressJa : ISHII.hall.addressEn}
              <br />
              {ISHII.hall.phone} · <a href={ISHII.sameAs}>sameAs {ISHII.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={ISHII.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={ISHII.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${ISHII.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${ISHII.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>


) : town.slug === 'itano' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {ITANO.nameJa} / {ITANO.nameEn}（{ITANO.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? ITANO.prefectureJa : ITANO.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{ITANO.jis}</strong>
              {isJa ? '（松茂 36401・北島 36402・藍住 36403・石井 36341 ではない）' : ' (not Matsushige 36401 / Kitajima 36402 / Aizumi 36403 / Ishii 36341)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{ITANO.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{ITANO.hall.postalCode} {isJa ? ITANO.hall.addressJa : ITANO.hall.addressEn}
              <br />
              {ITANO.hall.phone} · <a href={ITANO.sameAs}>sameAs {ITANO.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={ITANO.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={ITANO.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${ITANO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${ITANO.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>


) : town.slug === 'kamiita' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KAMIITA.nameJa} / {KAMIITA.nameEn}（{KAMIITA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KAMIITA.prefectureJa : KAMIITA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KAMIITA.jis}</strong>
              {isJa ? '（松茂 36401・北島 36402・藍住 36403・板野 36404・石井 36341 ではない）' : ' (not Matsushige 36401 / Kitajima 36402 / Aizumi 36403 / Itano 36404 / Ishii 36341)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KAMIITA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KAMIITA.hall.postalCode} {isJa ? KAMIITA.hall.addressJa : KAMIITA.hall.addressEn}
              <br />
              {KAMIITA.hall.phone} · <a href={KAMIITA.sameAs}>sameAs {KAMIITA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KAMIITA.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={KAMIITA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KAMIITA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KAMIITA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>



) : town.slug === 'kamiyama' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KAMIYAMA.nameJa} / {KAMIYAMA.nameEn}（{KAMIYAMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KAMIYAMA.prefectureJa : KAMIYAMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KAMIYAMA.jis}</strong>
              {isJa ? '（石井 36341・上板 36405・板野 36404・藍住 36403 ではない）' : ' (not Ishii 36341 / Kamiita 36405 / Itano 36404 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KAMIYAMA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KAMIYAMA.hall.postalCode} {isJa ? KAMIYAMA.hall.addressJa : KAMIYAMA.hall.addressEn}
              <br />
              {KAMIYAMA.hall.phone} · <a href={KAMIYAMA.sameAs}>sameAs {KAMIYAMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KAMIYAMA.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={KAMIYAMA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KAMIYAMA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KAMIYAMA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>


) : town.slug === 'katsuura' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KATSUURA.nameJa} / {KATSUURA.nameEn}（{KATSUURA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KATSUURA.prefectureJa : KATSUURA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KATSUURA.jis}</strong>
              {isJa ? '（神山 36342・上板 36405・板野 36404・藍住 36403 ではない）' : ' (not Kamiyama 36342 / Kamiita 36405 / Itano 36404 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KATSUURA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KATSUURA.hall.postalCode} {isJa ? KATSUURA.hall.addressJa : KATSUURA.hall.addressEn}
              <br />
              {KATSUURA.hall.phone} · <a href={KATSUURA.sameAs}>sameAs {KATSUURA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KATSUURA.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={KATSUURA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KATSUURA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KATSUURA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>



) : town.slug === 'kamikatsu' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KAMIKATSU.nameJa} / {KAMIKATSU.nameEn}（{KAMIKATSU.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KAMIKATSU.prefectureJa : KAMIKATSU.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KAMIKATSU.jis}</strong>
              {isJa ? '（勝浦 36301・神山 36342・藍住 36403 ではない）' : ' (not Katsuura 36301 / Kamiyama 36342 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KAMIKATSU.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KAMIKATSU.hall.postalCode} {isJa ? KAMIKATSU.hall.addressJa : KAMIKATSU.hall.addressEn}
              <br />
              {KAMIKATSU.hall.phone} · <a href={KAMIKATSU.sameAs}>sameAs {KAMIKATSU.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KAMIKATSU.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={KAMIKATSU.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={KAMIKATSU.sources.kanko}>{isJa ? '観光サイト' : 'Tourism site'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KAMIKATSU.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KAMIKATSU.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

) : town.slug === 'sanagochi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '村の資料' : 'Village facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {SANAGOCHI.nameJa} / {SANAGOCHI.nameEn}（{SANAGOCHI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? SANAGOCHI.prefectureJa : SANAGOCHI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{SANAGOCHI.jis}</strong>
              {isJa ? '（上勝 36302・勝浦 36301・藍住 36403 ではない）' : ' (not Kamikatsu 36302 / Katsuura 36301 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{SANAGOCHI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '村役場' : 'Village hall'}</th>
            <td>
              〒{SANAGOCHI.hall.postalCode} {isJa ? SANAGOCHI.hall.addressJa : SANAGOCHI.hall.addressEn}
              <br />
              {SANAGOCHI.hall.phone} · <a href={SANAGOCHI.sameAs}>sameAs {SANAGOCHI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={SANAGOCHI.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={SANAGOCHI.sources.home}>{isJa ? '村ホームページ' : 'Village homepage'}</a>
        {' · '}
        <a href={SANAGOCHI.sources.kanko}>{isJa ? '観光サイト' : 'Tourism site'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${SANAGOCHI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${SANAGOCHI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>



) : town.slug === 'naka' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {NAKA.nameJa} / {NAKA.nameEn}（{NAKA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? NAKA.prefectureJa : NAKA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{NAKA.jis}</strong>
              {isJa ? '（佐那河内 36321・上勝 36302・藍住 36403 ではない）' : ' (not Sanagochi 36321 / Kamikatsu 36302 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{NAKA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{NAKA.hall.postalCode} {isJa ? NAKA.hall.addressJa : NAKA.hall.addressEn}
              <br />
              {NAKA.hall.phone} · <a href={NAKA.sameAs}>sameAs {NAKA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={NAKA.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={NAKA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={NAKA.sources.kanko}>{isJa ? '観光サイト' : 'Tourism site'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${NAKA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${NAKA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>


) : town.slug === 'minami' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MINAMI.nameJa} / {MINAMI.nameEn}（{MINAMI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? MINAMI.prefectureJa : MINAMI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MINAMI.jis}</strong>
              {isJa ? '（佐那河内 36321・上勝 36302・藍住 36403 ではない）' : ' (not Sanagochi 36321 / Kamikatsu 36302 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MINAMI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{MINAMI.hall.postalCode} {isJa ? MINAMI.hall.addressJa : MINAMI.hall.addressEn}
              <br />
              {MINAMI.hall.phone} · <a href={MINAMI.sameAs}>sameAs {MINAMI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={MINAMI.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={MINAMI.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={MINAMI.sources.kanko}>{isJa ? '観光サイト' : 'Tourism site'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MINAMI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${MINAMI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>




) : town.slug === 'kaiyo' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr><th>{isJa ? '公式名' : 'Official name'}</th><td>{KAIYO.nameJa} / {KAIYO.nameEn}（{KAIYO.reading}）</td></tr>
          <tr><th>{isJa ? '都道府県' : 'Prefecture'}</th><td><Link href="/tokushima">{isJa ? KAIYO.prefectureJa : KAIYO.prefectureEn}</Link></td></tr>
          <tr><th>JIS / N03_007</th><td><strong>{KAIYO.jis}</strong>{isJa ? '（牟岐 36383・美波 36387・那賀 36368 ではない）' : ' (not Mugi 36383 / Minami 36387 / Naka 36368)'}</td></tr>
          <tr><th>J-LIS</th><td>{KAIYO.jlis}</td></tr>
          <tr><th>{isJa ? '町役場' : 'Town hall'}</th><td>〒{KAIYO.hall.postalCode} {isJa ? KAIYO.hall.addressJa : KAIYO.hall.addressEn}<br />{KAIYO.hall.phone} · <a href={KAIYO.sameAs}>sameAs {KAIYO.sameAs}</a></td></tr>
        </tbody>
      </table>
      <p>
        <a href={KAIYO.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={KAIYO.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={KAIYO.sources.kanko}>{isJa ? '観光サイト' : 'Tourism site'}</a>
      </p>
      <p className="note">{isJa ? `数字のアクセス日は ${KAIYO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。` : `Figures accessed ${KAIYO.sources.accessed}. Population is unpublished (universes are not mixed).`}</p>
      </details>



) : town.slug === 'mugi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>{MUGI.nameJa} / {MUGI.nameEn}（{MUGI.reading}）</td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td><Link href="/tokushima">{isJa ? MUGI.prefectureJa : MUGI.prefectureEn}</Link></td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MUGI.jis}</strong>
              {isJa ? '（那賀 36368・美波 36387・海陽 36388 ではない）' : ' (not Naka 36368 / Minami 36387 / Kaiyo 36388)'}
            </td>
          </tr>
          <tr><th>J-LIS</th><td>{MUGI.jlis}</td></tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{MUGI.hall.postalCode} {isJa ? MUGI.hall.addressJa : MUGI.hall.addressEn}
              <br />
              {MUGI.hall.phone} · <a href={MUGI.sameAs}>sameAs {MUGI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={MUGI.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={MUGI.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={MUGI.sources.kanko}>{isJa ? '観光サイト' : 'Tourism site'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MUGI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${MUGI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>


) : town.slug === 'aizumi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {AIZUMI.nameJa} / {AIZUMI.nameEn}（{AIZUMI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? AIZUMI.prefectureJa : AIZUMI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{AIZUMI.jis}</strong>
              {isJa ? '（松茂 36401・北島 36402・板野 36404 ではない）' : ' (not Matsushige 36401 / Kitajima 36402 / Itano 36404)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{AIZUMI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{AIZUMI.hall.postalCode} {isJa ? AIZUMI.hall.addressJa : AIZUMI.hall.addressEn}
              <br />
              {AIZUMI.hall.phone} · <a href={AIZUMI.sameAs}>sameAs {AIZUMI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={AIZUMI.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={AIZUMI.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={AIZUMI.sources.kanko}>{isJa ? '観光サイト' : 'Tourism site'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${AIZUMI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${AIZUMI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'komatsushima' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KOMATSUSHIMA.nameJa} / {KOMATSUSHIMA.nameEn}（{KOMATSUSHIMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KOMATSUSHIMA.prefectureJa : KOMATSUSHIMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KOMATSUSHIMA.jis}</strong>
              {isJa ? '（鳴門 36202・徳島市 36201・阿南 36204 ではない）' : ' (not Naruto 36202 / Tokushima 36201 / Anan 36204)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KOMATSUSHIMA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{KOMATSUSHIMA.hall.postalCode} {isJa ? KOMATSUSHIMA.hall.addressJa : KOMATSUSHIMA.hall.addressEn}
              <br />
              {KOMATSUSHIMA.hall.phone} · <a href={KOMATSUSHIMA.sameAs}>sameAs {KOMATSUSHIMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KOMATSUSHIMA.sources.hall}>{isJa ? '市役所への行き方' : 'Hall directions'}</a>
        {' · '}
        <a href={KOMATSUSHIMA.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KOMATSUSHIMA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KOMATSUSHIMA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>





      ) : town.slug === 'anan' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {ANAN.nameJa} / {ANAN.nameEn}（{ANAN.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? ANAN.prefectureJa : ANAN.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{ANAN.jis}</strong>
              {isJa ? '（小松島 36203・鳴門 36202・徳島市 36201 ではない）' : ' (not Komatsushima 36203 / Naruto 36202 / Tokushima 36201)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{ANAN.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{ANAN.hall.postalCode} {isJa ? ANAN.hall.addressJa : ANAN.hall.addressEn}
              <br />
              {ANAN.hall.phone} · <a href={ANAN.sameAs}>sameAs {ANAN.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={ANAN.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={ANAN.sources.kanko}>{isJa ? '観光・文化' : 'Tourism & culture'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${ANAN.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${ANAN.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>



) : town.slug === 'matsushige' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MATSUSHIGE.nameJa} / {MATSUSHIGE.nameEn}（{MATSUSHIGE.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? MATSUSHIGE.prefectureJa : MATSUSHIGE.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MATSUSHIGE.jis}</strong>
              {isJa ? '（北島 36402・藍住 36403 ではない）' : ' (not Kitajima 36402 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MATSUSHIGE.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{MATSUSHIGE.hall.postalCode} {isJa ? MATSUSHIGE.hall.addressJa : MATSUSHIGE.hall.addressEn}
              <br />
              {MATSUSHIGE.hall.phone} · <a href={MATSUSHIGE.sameAs}>sameAs {MATSUSHIGE.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={MATSUSHIGE.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MATSUSHIGE.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MATSUSHIGE.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${MATSUSHIGE.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'kitajima' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KITAJIMA.nameJa} / {KITAJIMA.nameEn}（{KITAJIMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KITAJIMA.prefectureJa : KITAJIMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KITAJIMA.jis}</strong>
              {isJa ? '（松茂 36401・藍住 36403 ではない）' : ' (not Matsushige 36401 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KITAJIMA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KITAJIMA.hall.postalCode} {isJa ? KITAJIMA.hall.addressJa : KITAJIMA.hall.addressEn}
              <br />
              {KITAJIMA.hall.phone} · <a href={KITAJIMA.sameAs}>sameAs {KITAJIMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KITAJIMA.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={KITAJIMA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KITAJIMA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KITAJIMA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'tsurugi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {TSURUGI.nameJa} / {TSURUGI.nameEn}（{TSURUGI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? TSURUGI.prefectureJa : TSURUGI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{TSURUGI.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{TSURUGI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{TSURUGI.hall.postalCode} {isJa ? TSURUGI.hall.addressJa : TSURUGI.hall.addressEn}
              <br />
              {TSURUGI.hall.phone} · <a href={TSURUGI.sameAs}>sameAs {TSURUGI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={TSURUGI.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={TSURUGI.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${TSURUGI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${TSURUGI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>
      ) : town.slug === 'takamatsu' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {TAKAMATSU.nameJa} / {TAKAMATSU.nameEn}（{TAKAMATSU.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? TAKAMATSU.prefectureJa : TAKAMATSU.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{TAKAMATSU.jis}</strong>
              {isJa ? '（香川県県庁所在地）' : ' (Kagawa prefectural capital)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{TAKAMATSU.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{TAKAMATSU.hall.postalCode} {isJa ? TAKAMATSU.hall.addressJa : TAKAMATSU.hall.addressEn}
              <br />
              {TAKAMATSU.hall.phone} · <a href={TAKAMATSU.sameAs}>sameAs {TAKAMATSU.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={TAKAMATSU.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={TAKAMATSU.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={TAKAMATSU.sources.kanko}>{isJa ? '観光案内' : 'Tourism guide'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${TAKAMATSU.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県最初のLIVEハブ。`
          : `Figures accessed ${TAKAMATSU.sources.accessed}. Population is unpublished (universes are not mixed). First LIVE Kagawa hub.`}
      </p>
      </details>
      ) : town.slug === 'kotohira' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KOTOHIRA.nameJa} / {KOTOHIRA.nameEn}（{KOTOHIRA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? KOTOHIRA.prefectureJa : KOTOHIRA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KOTOHIRA.jis}</strong>
              {isJa ? '（仲多度郡）' : ' (Nakatado District)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KOTOHIRA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KOTOHIRA.hall.postalCode} {isJa ? KOTOHIRA.hall.addressJa : KOTOHIRA.hall.addressEn}
              <br />
              {KOTOHIRA.hall.phone} · <a href={KOTOHIRA.sameAs}>sameAs {KOTOHIRA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KOTOHIRA.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={KOTOHIRA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={KOTOHIRA.sources.kanko}>{isJa ? '観光案内' : 'Tourism guide'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KOTOHIRA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県2つ目のLIVEハブ。`
          : `Figures accessed ${KOTOHIRA.sources.accessed}. Population is unpublished (universes are not mixed). Second LIVE Kagawa hub.`}
      </p>
      </details>
      ) : town.slug === 'marugame' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MARUGAME.nameJa} / {MARUGAME.nameEn}（{MARUGAME.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? MARUGAME.prefectureJa : MARUGAME.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MARUGAME.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MARUGAME.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{MARUGAME.hall.postalCode} {isJa ? MARUGAME.hall.addressJa : MARUGAME.hall.addressEn}
              <br />
              {MARUGAME.hall.phone} · <a href={MARUGAME.sameAs}>sameAs {MARUGAME.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={MARUGAME.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MARUGAME.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={MARUGAME.sources.castle}>{isJa ? '丸亀城' : 'Marugame Castle'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MARUGAME.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県3つ目のLIVEハブ。`
          : `Figures accessed ${MARUGAME.sources.accessed}. Population is unpublished (universes are not mixed). Third LIVE Kagawa hub.`}
      </p>
      </details>
      ) : town.slug === 'kanonji' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KANONJI.nameJa} / {KANONJI.nameEn}（{KANONJI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? KANONJI.prefectureJa : KANONJI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KANONJI.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KANONJI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{KANONJI.hall.postalCode} {isJa ? KANONJI.hall.addressJa : KANONJI.hall.addressEn}
              <br />
              {KANONJI.hall.phone} · <a href={KANONJI.sameAs}>sameAs {KANONJI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KANONJI.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={KANONJI.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={KANONJI.sources.zenigata}>{isJa ? '銭形砂絵' : 'Zenigata Sunae'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KANONJI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県4つ目のLIVEハブ。`
          : `Figures accessed ${KANONJI.sources.accessed}. Population is unpublished (universes are not mixed). Fourth LIVE Kagawa hub.`}
      </p>
      </details>
      ) : town.slug === 'sakaide' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {SAKAIDE.nameJa} / {SAKAIDE.nameEn}（{SAKAIDE.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? SAKAIDE.prefectureJa : SAKAIDE.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{SAKAIDE.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{SAKAIDE.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{SAKAIDE.hall.postalCode} {isJa ? SAKAIDE.hall.addressJa : SAKAIDE.hall.addressEn}
              <br />
              {SAKAIDE.hall.phone} · <a href={SAKAIDE.sameAs}>sameAs {SAKAIDE.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={SAKAIDE.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={SAKAIDE.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={SAKAIDE.sources.seto}>{isJa ? '瀬戸大橋' : 'Seto Ohashi'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${SAKAIDE.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県5つ目のLIVEハブ。`
          : `Figures accessed ${SAKAIDE.sources.accessed}. Population is unpublished (universes are not mixed). Fifth LIVE Kagawa hub.`}
      </p>
      </details>
      ) : town.slug === 'naoshima' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {NAOSHIMA.nameJa} / {NAOSHIMA.nameEn}（{NAOSHIMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? NAOSHIMA.prefectureJa : NAOSHIMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{NAOSHIMA.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{NAOSHIMA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{NAOSHIMA.hall.postalCode} {isJa ? NAOSHIMA.hall.addressJa : NAOSHIMA.hall.addressEn}
              <br />
              {NAOSHIMA.hall.phone} · <a href={NAOSHIMA.sameAs}>sameAs {NAOSHIMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={NAOSHIMA.sources.hall}>{isJa ? '役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={NAOSHIMA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={NAOSHIMA.sources.benesse}>{isJa ? 'Benesse' : 'Benesse Art Site'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${NAOSHIMA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県6つ目のLIVEハブ。`
          : `Figures accessed ${NAOSHIMA.sources.accessed}. Population is unpublished (universes are not mixed). Sixth LIVE Kagawa hub.`}
      </p>
      </details>
      ) : town.slug === 'shodoshima' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {SHODOSHIMA.nameJa} / {SHODOSHIMA.nameEn}（{SHODOSHIMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? SHODOSHIMA.prefectureJa : SHODOSHIMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{SHODOSHIMA.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{SHODOSHIMA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{SHODOSHIMA.hall.postalCode} {isJa ? SHODOSHIMA.hall.addressJa : SHODOSHIMA.hall.addressEn}
              <br />
              {SHODOSHIMA.hall.phone} · <a href={SHODOSHIMA.sameAs}>sameAs {SHODOSHIMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={SHODOSHIMA.sources.hall}>{isJa ? '役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={SHODOSHIMA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={SHODOSHIMA.sources.olive}>{isJa ? 'オリーブ公園' : 'Olive Park'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${SHODOSHIMA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県7つ目のLIVEハブ。`
          : `Figures accessed ${SHODOSHIMA.sources.accessed}. Population is unpublished (universes are not mixed). Seventh LIVE Kagawa hub.`}
      </p>
      </details>
      ) : town.slug === 'zentsuji' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {ZENTSUJI.nameJa} / {ZENTSUJI.nameEn}（{ZENTSUJI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? ZENTSUJI.prefectureJa : ZENTSUJI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{ZENTSUJI.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{ZENTSUJI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{ZENTSUJI.hall.postalCode} {isJa ? ZENTSUJI.hall.addressJa : ZENTSUJI.hall.addressEn}
              <br />
              {ZENTSUJI.hall.phone} · <a href={ZENTSUJI.sameAs}>sameAs {ZENTSUJI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={ZENTSUJI.sources.hall}>{isJa ? '市役所案内' : 'Hall guide'}</a>
        {' · '}
        <a href={ZENTSUJI.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={ZENTSUJI.sources.zentsuji}>{isJa ? '総本山善通寺' : 'Zentsū-ji'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${ZENTSUJI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県8つ目のLIVEハブ。`
          : `Figures accessed ${ZENTSUJI.sources.accessed}. Population is unpublished (universes are not mixed). Eighth LIVE Kagawa hub.`}
      </p>
      </details>

      ) : town.slug === 'mitoyo' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MITOYO.nameJa} / {MITOYO.nameEn}（{MITOYO.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? MITOYO.prefectureJa : MITOYO.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MITOYO.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MITOYO.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{MITOYO.hall.postalCode} {isJa ? MITOYO.hall.addressJa : MITOYO.hall.addressEn}
              <br />
              {MITOYO.hall.phone} · <a href={MITOYO.sameAs}>sameAs {MITOYO.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={MITOYO.sources.hall}>{isJa ? '市役所案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MITOYO.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={MITOYO.sources.chichibu}>{isJa ? '父母ヶ浜' : 'Chichibugahama'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MITOYO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県9つ目のLIVEハブ。`
          : `Figures accessed ${MITOYO.sources.accessed}. Population is unpublished (universes are not mixed). Ninth LIVE Kagawa hub.`}
      </p>
      </details>


      ) : town.slug === 'utazu' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {UTAZU.nameJa} / {UTAZU.nameEn}（{UTAZU.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? UTAZU.prefectureJa : UTAZU.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{UTAZU.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{UTAZU.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{UTAZU.hall.postalCode} {isJa ? UTAZU.hall.addressJa : UTAZU.hall.addressEn}
              <br />
              {UTAZU.hall.phone} · <a href={UTAZU.sameAs}>sameAs {UTAZU.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={UTAZU.sources.hall}>{isJa ? '町役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={UTAZU.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={UTAZU.sources.goldTower}>{isJa ? 'ゴールドタワー' : 'Gold Tower'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${UTAZU.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県10つ目のLIVEハブ。`
          : `Figures accessed ${UTAZU.sources.accessed}. Population is unpublished (universes are not mixed). Tenth LIVE Kagawa hub.`}
      </p>
      </details>


      ) : town.slug === 'tonosho' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {TONOSHO.nameJa} / {TONOSHO.nameEn}（{TONOSHO.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? TONOSHO.prefectureJa : TONOSHO.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{TONOSHO.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{TONOSHO.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{TONOSHO.hall.postalCode} {isJa ? TONOSHO.hall.addressJa : TONOSHO.hall.addressEn}
              <br />
              {TONOSHO.hall.phone} · <a href={TONOSHO.sameAs}>sameAs {TONOSHO.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        <a href={TONOSHO.sources.hall}>{isJa ? '町役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={TONOSHO.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={TONOSHO.sources.angel}>{isJa ? 'エンジェルロード' : 'Angel Road'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${TONOSHO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県11つ目のLIVEハブ。`
          : `Figures accessed ${TONOSHO.sources.accessed}. Population is unpublished (universes are not mixed). Eleventh LIVE Kagawa hub.`}
      </p>
      </details>


      ) : town.slug === 'sanuki' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {SANUKI.nameJa} / {SANUKI.nameEn}（{SANUKI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? SANUKI.prefectureJa : SANUKI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{SANUKI.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{SANUKI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{SANUKI.hall.postalCode} {isJa ? SANUKI.hall.addressJa : SANUKI.hall.addressEn}
              <br />
              {SANUKI.hall.phone} · <a href={SANUKI.sameAs}>sameAs {SANUKI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        <a href={SANUKI.sources.hall}>{isJa ? '市役所案内' : 'Hall guide'}</a>
        {' · '}
        <a href={SANUKI.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${SANUKI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県12つ目のLIVEハブ。`
          : `Figures accessed ${SANUKI.sources.accessed}. Population is unpublished (universes are not mixed). Twelfth LIVE Kagawa hub.`}
      </p>
      </details>
      ) : town.slug === 'higashikagawa' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {HIGASHIKAGAWA.nameJa} / {HIGASHIKAGAWA.nameEn}（{HIGASHIKAGAWA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? HIGASHIKAGAWA.prefectureJa : HIGASHIKAGAWA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{HIGASHIKAGAWA.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{HIGASHIKAGAWA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{HIGASHIKAGAWA.hall.postalCode} {isJa ? HIGASHIKAGAWA.hall.addressJa : HIGASHIKAGAWA.hall.addressEn}
              <br />
              {HIGASHIKAGAWA.hall.phone} · <a href={HIGASHIKAGAWA.sameAs}>sameAs {HIGASHIKAGAWA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        <a href={HIGASHIKAGAWA.sources.hall}>{isJa ? '市役所案内' : 'Hall guide'}</a>
        {' · '}
        <a href={HIGASHIKAGAWA.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={HIGASHIKAGAWA.sources.hiketa}>{isJa ? '引田城跡' : 'Hiketa Castle'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${HIGASHIKAGAWA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県13つ目のLIVEハブ。`
          : `Figures accessed ${HIGASHIKAGAWA.sources.accessed}. Population is unpublished (universes are not mixed). Thirteenth LIVE Kagawa hub.`}
      </p>
      </details>

      ) : town.slug === 'miki' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MIKI.nameJa} / {MIKI.nameEn}（{MIKI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? MIKI.prefectureJa : MIKI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MIKI.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MIKI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{MIKI.hall.postalCode} {isJa ? MIKI.hall.addressJa : MIKI.hall.addressEn}
              <br />
              {MIKI.hall.phone} · <a href={MIKI.sameAs}>sameAs {MIKI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        <a href={MIKI.sources.hall}>{isJa ? '町役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MIKI.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={MIKI.sources.jodoji}>{isJa ? '浄土寺' : 'Jodo-ji'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MIKI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県14つ目のLIVEハブ。`
          : `Figures accessed ${MIKI.sources.accessed}. Population is unpublished (universes are not mixed). Fourteenth LIVE Kagawa hub.`}
      </p>
      </details>

      ) : town.slug === 'ayagawa' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {AYAGAWA.nameJa} / {AYAGAWA.nameEn}（{AYAGAWA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? AYAGAWA.prefectureJa : AYAGAWA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{AYAGAWA.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{AYAGAWA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{AYAGAWA.hall.postalCode} {isJa ? AYAGAWA.hall.addressJa : AYAGAWA.hall.addressEn}
              <br />
              {AYAGAWA.hall.phone} · <a href={AYAGAWA.sameAs}>sameAs {AYAGAWA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        <a href={AYAGAWA.sources.hall}>{isJa ? '町役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={AYAGAWA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={AYAGAWA.sources.tenmangu}>{isJa ? '滝宮天満宮' : 'Takinomiya Tenmangu'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${AYAGAWA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県15つ目のLIVEハブ。`
          : `Figures accessed ${AYAGAWA.sources.accessed}. Population is unpublished (universes are not mixed). Fifteenth LIVE Kagawa hub.`}
      </p>
      </details>
) : town.slug === 'tadotsu' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {TADOTSU.nameJa} / {TADOTSU.nameEn}（{TADOTSU.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? TADOTSU.prefectureJa : TADOTSU.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{TADOTSU.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{TADOTSU.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{TADOTSU.hall.postalCode} {isJa ? TADOTSU.hall.addressJa : TADOTSU.hall.addressEn}
              <br />
              {TADOTSU.hall.phone} · <a href={TADOTSU.sameAs}>sameAs {TADOTSU.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        <a href={TADOTSU.sources.hall}>{isJa ? '町役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={TADOTSU.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={TADOTSU.sources.kaiganji}>{isJa ? '海岸寺' : 'Kaiganji'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${TADOTSU.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県16つ目のLIVEハブ。`
          : `Figures accessed ${TADOTSU.sources.accessed}. Population is unpublished (universes are not mixed). Sixteenth LIVE Kagawa hub.`}
      </p>
      </details>
) : town.slug === 'manno' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MANNO.nameJa} / {MANNO.nameEn}（{MANNO.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/kagawa">{isJa ? MANNO.prefectureJa : MANNO.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MANNO.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MANNO.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{MANNO.hall.postalCode} {isJa ? MANNO.hall.addressJa : MANNO.hall.addressEn}
              <br />
              {MANNO.hall.phone} · <a href={MANNO.sameAs}>sameAs {MANNO.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        <a href={MANNO.sources.hall}>{isJa ? '町役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MANNO.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={MANNO.sources.park}>{isJa ? '国営讃岐まんのう公園' : 'Sanuki Manno Park'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MANNO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。香川県17つ目のLIVEハブ。`
          : `Figures accessed ${MANNO.sources.accessed}. Population is unpublished (universes are not mixed). Seventeenth LIVE Kagawa hub.`}
      </p>
      </details>


) : town.slug === 'kochi' ? (
        <details className="facts-fold">
          <summary>{isJa ? '高知市の基礎情報' : 'Kochi City facts'}</summary>
          <table className="facts">
            <tbody>
              <tr>
                <th scope="row">{isJa ? '名称' : 'Name'}</th>
                <td>
              {KOCHI.nameJa} / {KOCHI.nameEn}（{KOCHI.reading}）
                </td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '都道府県' : 'Prefecture'}</th>
                <td>
              <Link href="/kochi">{isJa ? KOCHI.prefectureJa : KOCHI.prefectureEn}</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">JIS</th>
                <td>
              <strong>{KOCHI.jis}</strong>
                </td>
              </tr>
              <tr>
                <th scope="row">JLIS</th>
            <td>{KOCHI.jlis}</td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '市役所' : 'City hall'}</th>
                <td>
              〒{KOCHI.hall.postalCode} {isJa ? KOCHI.hall.addressJa : KOCHI.hall.addressEn}
              {' · '}
              {KOCHI.hall.phone} · <a href={KOCHI.sameAs}>sameAs {KOCHI.sameAs}</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="facts-links">
        <a href={KOCHI.sources.hall}>{isJa ? '市役所案内' : 'Hall guide'}</a>
        {' · '}
        <a href={KOCHI.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={KOCHI.sources.castle}>{isJa ? '高知城' : 'Kochi Castle'}</a>
          </p>
          <p className="facts-note">
            {isJa
          ? `数字のアクセス日は ${KOCHI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。高知県1つ目のLIVEハブ。`
          : `Figures accessed ${KOCHI.sources.accessed}. Population is unpublished (universes are not mixed). First LIVE Kochi hub.`}
          </p>
        </details>





) : town.slug === 'ino' ? (
        <details className="facts-fold">
          <summary>{isJa ? 'いの町の基礎情報' : 'Ino Town facts'}</summary>
          <table className="facts">
            <tbody>
              <tr>
                <th scope="row">{isJa ? '名称' : 'Name'}</th>
                <td>
              {INO.nameJa} / {INO.nameEn}（{INO.reading}）
                </td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '都道府県' : 'Prefecture'}</th>
                <td>
              <Link href="/kochi">{isJa ? INO.prefectureJa : INO.prefectureEn}</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">JIS</th>
                <td>
              <strong>{INO.jis}</strong>
                </td>
              </tr>
              <tr>
                <th scope="row">JLIS</th>
            <td>{INO.jlis}</td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '役場' : 'Town hall'}</th>
                <td>
              〒{INO.hall.postalCode} {isJa ? INO.hall.addressJa : INO.hall.addressEn}
              {' · '}
              {INO.hall.phone} · <a href={INO.sameAs}>sameAs {INO.sameAs}</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="facts-links">
        <a href={INO.sources.hall}>{isJa ? '役場案内' : 'Hall guide'}</a>
        {' · '}
        <a href={INO.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
        {' · '}
        <a href={INO.sources.nikobuchi}>{isJa ? 'にこ淵' : 'Nikobuchi'}</a>
          </p>
          <p className="facts-note">
            {isJa
          ? `数字のアクセス日は ${INO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。高知県5つ目のLIVEハブ。`
          : `Figures accessed ${INO.sources.accessed}. Population is unpublished (universes are not mixed). Fifth LIVE Kochi hub.`}
          </p>
        </details>



) : town.slug === 'kami' ? (
        <details className="facts-fold">
          <summary>{isJa ? '香美市の基礎情報' : 'Kami City facts'}</summary>
          <table className="facts">
            <tbody>
              <tr>
                <th scope="row">{isJa ? '名称' : 'Name'}</th>
                <td>
              {KAMI.nameJa} / {KAMI.nameEn}（{KAMI.reading}）
                </td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '都道府県' : 'Prefecture'}</th>
                <td>
              <Link href="/kochi">{isJa ? KAMI.prefectureJa : KAMI.prefectureEn}</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">JIS</th>
                <td>
              <strong>{KAMI.jis}</strong>
                </td>
              </tr>
              <tr>
                <th scope="row">JLIS</th>
            <td>{KAMI.jlis}</td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '市役所' : 'City hall'}</th>
                <td>
              〒{KAMI.hall.postalCode} {isJa ? KAMI.hall.addressJa : KAMI.hall.addressEn}
              {' · '}
              {KAMI.hall.phone} · <a href={KAMI.sameAs}>sameAs {KAMI.sameAs}</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="facts-links">
        <a href={KAMI.sources.hall}>{isJa ? '市役所案内' : 'Hall guide'}</a>
        {' · '}
        <a href={KAMI.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={KAMI.sources.anpanman}>{isJa ? 'やなせたかし記念館' : 'Yanase Takashi Memorial Hall'}</a>
          </p>
          <p className="facts-note">
            {isJa
          ? `数字のアクセス日は ${KAMI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。高知県4つ目のLIVEハブ。`
          : `Figures accessed ${KAMI.sources.accessed}. Population is unpublished (universes are not mixed). Fourth LIVE Kochi hub.`}
          </p>
        </details>


) : town.slug === 'konan' ? (
        <details className="facts-fold">
          <summary>{isJa ? '香南市の基礎情報' : 'Konan City facts'}</summary>
          <table className="facts">
            <tbody>
              <tr>
                <th scope="row">{isJa ? '名称' : 'Name'}</th>
                <td>
              {KONAN.nameJa} / {KONAN.nameEn}（{KONAN.reading}）
                </td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '都道府県' : 'Prefecture'}</th>
                <td>
              <Link href="/kochi">{isJa ? KONAN.prefectureJa : KONAN.prefectureEn}</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">JIS</th>
                <td>
              <strong>{KONAN.jis}</strong>
                </td>
              </tr>
              <tr>
                <th scope="row">JLIS</th>
            <td>{KONAN.jlis}</td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '市役所' : 'City hall'}</th>
                <td>
              〒{KONAN.hall.postalCode} {isJa ? KONAN.hall.addressJa : KONAN.hall.addressEn}
              {' · '}
              {KONAN.hall.phone} · <a href={KONAN.sameAs}>sameAs {KONAN.sameAs}</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="facts-links">
        <a href={KONAN.sources.hall}>{isJa ? '市役所案内' : 'Hall guide'}</a>
        {' · '}
        <a href={KONAN.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={KONAN.sources.ekingura}>{isJa ? '絵金蔵' : 'Ekingura'}</a>
          </p>
          <p className="facts-note">
            {isJa
          ? `数字のアクセス日は ${KONAN.sources.accessed}。人口は未掲載（出典ページを混ぜません）。高知県3つ目のLIVEハブ。`
          : `Figures accessed ${KONAN.sources.accessed}. Population is unpublished (universes are not mixed). Third LIVE Kochi hub.`}
          </p>
        </details>


) : town.slug === 'nankoku' ? (
        <details className="facts-fold">
          <summary>{isJa ? '南国市の基礎情報' : 'Nankoku City facts'}</summary>
          <table className="facts">
            <tbody>
              <tr>
                <th scope="row">{isJa ? '名称' : 'Name'}</th>
                <td>
              {NANKOKU.nameJa} / {NANKOKU.nameEn}（{NANKOKU.reading}）
                </td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '都道府県' : 'Prefecture'}</th>
                <td>
              <Link href="/kochi">{isJa ? NANKOKU.prefectureJa : NANKOKU.prefectureEn}</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">JIS</th>
                <td>
              <strong>{NANKOKU.jis}</strong>
                </td>
              </tr>
              <tr>
                <th scope="row">JLIS</th>
            <td>{NANKOKU.jlis}</td>
              </tr>
              <tr>
                <th scope="row">{isJa ? '市役所' : 'City hall'}</th>
                <td>
              〒{NANKOKU.hall.postalCode} {isJa ? NANKOKU.hall.addressJa : NANKOKU.hall.addressEn}
              {' · '}
              {NANKOKU.hall.phone} · <a href={NANKOKU.sameAs}>sameAs {NANKOKU.sameAs}</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="facts-links">
        <a href={NANKOKU.sources.hall}>{isJa ? '市役所案内' : 'Hall guide'}</a>
        {' · '}
        <a href={NANKOKU.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={NANKOKU.sources.kokubunji}>{isJa ? '土佐国分寺' : 'Tosa Kokubun-ji'}</a>
          </p>
          <p className="facts-note">
            {isJa
          ? `数字のアクセス日は ${NANKOKU.sources.accessed}。人口は未掲載（出典ページを混ぜません）。高知県2つ目のLIVEハブ。`
          : `Figures accessed ${NANKOKU.sources.accessed}. Population is unpublished (universes are not mixed). Second LIVE Kochi hub.`}
          </p>
        </details>


      ) : (
      <details className="facts-fold">
        <summary>{tMuni('factsFold')}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MIMA.nameJa} / {MIMA.nameEn}（{MIMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? MIMA.prefectureJa : MIMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MIMA.jis}</strong>
              {isJa
                ? '（阿波市 36206 ではない）'
                : ' (not Awa City 36206)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>
              {MIMA.jlis}{' '}
              <a href={MIMA.sources.jlis}>{isJa ? '徳島県内市町村コード' : 'Tokushima J-LIS table'}</a>
            </td>
          </tr>
          <tr>
            <th>{isJa ? '面積' : 'Area'}</th>
            <td>
              {MIMA.areaKm2} km²（{isJa ? '国土地理院 面積調 令和7年4月1日' : 'GSI area survey, 1 Apr 2025'}）{' '}
              <a href={MIMA.sources.gsiArea}>GSI</a>
            </td>
          </tr>
          <tr>
            <th>{isJa ? '合併' : 'Merger'}</th>
            <td>
              {isJa
                ? `${MIMA.merger.eraJa}、${MIMA.merger.formerJa}が新設合併`
                : `${MIMA.merger.date}, new city from ${MIMA.merger.formerEn}`}
            </td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{MIMA.hall.postalCode} {isJa ? MIMA.hall.addressJa : MIMA.hall.addressEn}
              <br />
              {MIMA.hall.phone} · <a href={MIMA.sameAs}>sameAs {MIMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{isJa ? '人口（定義を混ぜない）' : 'Population (do not mix universes)'}</h2>
      <p className="note">
        {isJa
          ? '住民基本台帳・国勢調査・パンフレットは定義と時点が違います。世帯数も混ぜません。'
          : 'Register, census, and pamphlet figures use different definitions and dates. Household counts are not mixed.'}
      </p>
      <table className="facts">
        <thead>
          <tr>
            <th>{isJa ? 'スナップショット' : 'Snapshot'}</th>
            <th>{isJa ? '人口' : 'Population'}</th>
            <th>{isJa ? '世帯' : 'Households'}</th>
            <th>{isJa ? '時点' : 'As of'}</th>
            <th>{isJa ? '出典' : 'Source'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{isJa ? p.juki.labelJa : p.juki.labelEn}</td>
            <td>{p.juki.value.toLocaleString('ja-JP')}</td>
            <td>{p.juki.households.toLocaleString('ja-JP')}</td>
            <td>
              {p.juki.asOf}（{p.juki.asOfJa}）
            </td>
            <td>
              <a href={p.juki.url}>{isJa ? '市の人口・世帯数' : 'City register page'}</a>
            </td>
          </tr>
          <tr>
            <td>{isJa ? p.census2025.labelJa : p.census2025.labelEn}</td>
            <td>{p.census2025.value.toLocaleString('ja-JP')}</td>
            <td>{p.census2025.households.toLocaleString('ja-JP')}</td>
            <td>
              {p.census2025.asOf}（{p.census2025.asOfJa}）
            </td>
            <td>
              <a href={p.census2025.url}>e-Stat</a>
            </td>
          </tr>
          <tr>
            <td>{isJa ? p.pamphlet.labelJa : p.pamphlet.labelEn}</td>
            <td>{p.pamphlet.value.toLocaleString('ja-JP')}</td>
            <td>{isJa ? '未掲載' : 'Not in the open data'}</td>
            <td>
              {p.pamphlet.asOf}（{p.pamphlet.asOfJa}）
            </td>
            <td>
              <a href={p.pamphlet.url}>{isJa ? '移住ガイドブック PDF' : 'Guidebook PDF'}</a>
            </td>
          </tr>
          <tr>
            <td>{isJa ? p.census2020.labelJa : p.census2020.labelEn}</td>
            <td>{p.census2020.value.toLocaleString('ja-JP')}</td>
            <td>{isJa ? '未掲載' : 'Not in the open data'}</td>
            <td>
              {p.census2020.asOf}（{p.census2020.asOfJa}）
            </td>
            <td>
              <a href={p.census2020.url}>e-Stat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        {isJa
          ? `世帯数は台帳 ${p.juki.households.toLocaleString('ja-JP')} と国勢調査速報 ${p.census2025.households.toLocaleString('ja-JP')} を別掲。数字のアクセス日は ${MIMA.sources.accessed}。`
          : `Households: register ${p.juki.households.toLocaleString('en-US')} vs census preliminary ${p.census2025.households.toLocaleString('en-US')}. Figures accessed ${MIMA.sources.accessed}.`}
      </p>

      <h2>{isJa ? '市役所' : 'City hall'}</h2>
      <p>
        <a href={MIMA.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MIMA.sources.overview}>{isJa ? '市の概要' : 'City overview'}</a>
        {' · '}
        <a href={MIMA.sources.shisei}>{isJa ? '市勢要覧 2025' : 'Statistical pamphlet 2025'}</a>
      </p>
      </details>
      )}

    </>
  );
}
