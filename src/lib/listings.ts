import type {FacilityRow} from '@/data/facility-schema';
import {type MimaPlacePhoto} from '@/data/mima';
import {
  isExperiencePackRow,
  isOnsenPackRow,
  isSightsCategory,
  rankSeeRows,
  sightPhoto,
  type TravelKind,
  type TravelRow
} from '@/data/mima-travel';
import type {ReadySlug} from '@/data/lookup-town';
import {prefSlugForReady} from '@/data/lookup-town';
import {lookupTown} from '@/data/town-lookup';
import {
  isTsurugiOnsenPackRow,
  isTsurugiStayPackRow,
  rankTsurugiSeeRows,
  tsurugiSightPhoto,
  isTsurugiExperiencePackRow,
} from '@/data/tsurugi-travel';
import {
  isYoshinogawaOnsenPackRow,
  isYoshinogawaStayPackRow,
  rankYoshinogawaSeeRows,
  yoshinogawaSightPhoto,
  isYoshinogawaExperiencePackRow,
} from '@/data/yoshinogawa-travel';

import {
  isMiyoshiOnsenPackRow,
  isMiyoshiStayPackRow,
  rankMiyoshiSeeRows,
  miyoshiSightPhoto,
  isMiyoshiExperiencePackRow
} from '@/data/miyoshi-travel';

import {
  isTokushimaCityOnsenPackRow,
  isTokushimaCityStayPackRow,
  rankTokushimaCitySeeRows,
  tokushimaCitySightPhoto,
  isTokushimaCityExperiencePackRow
} from '@/data/tokushima-city-travel';

import {
  isAwaOnsenPackRow,
  isAwaStayPackRow,
  rankAwaSeeRows,
  awaSightPhoto
} from '@/data/awa-travel';

import {
  isHigashimiyoshiOnsenPackRow,
  isHigashimiyoshiStayPackRow,
  rankHigashimiyoshiSeeRows,
  higashimiyoshiSightPhoto,
  isHigashimiyoshiExperiencePackRow,
} from '@/data/higashimiyoshi-travel';

import {
  isKitajimaOnsenPackRow,
  isKitajimaStayPackRow,
  rankKitajimaSeeRows,
  kitajimaSightPhoto,
  isKitajimaExperiencePackRow,
} from '@/data/kitajima-travel';

import {
  isIshiiOnsenPackRow,
  isIshiiStayPackRow,
  rankIshiiSeeRows,
  ishiiSightPhoto
} from '@/data/ishii-travel';

import {
  isItanoOnsenPackRow,
  isItanoStayPackRow,
  isItanoShoppingPackRow,
  rankItanoSeeRows,
  itanoSightPhoto
} from '@/data/itano-travel';
import {
  isKamiitaOnsenPackRow,
  isKamiitaStayPackRow,
  isKamiitaShoppingPackRow,
  rankKamiitaSeeRows,
  kamiitaSightPhoto,
  isKamiitaExperiencePackRow,
} from '@/data/kamiita-travel';
import {
  isKamiyamaOnsenPackRow,
  isKamiyamaStayPackRow,
  isKamiyamaShoppingPackRow,
  rankKamiyamaSeeRows,
  kamiyamaSightPhoto,
  KAMIYAMA_DINING_NAME_SET,
  isKamiyamaExperiencePackRow,
} from '@/data/kamiyama-travel';

import {
  isKatsuuraOnsenPackRow,
  isKatsuuraStayPackRow,
  isKatsuuraShoppingPackRow,
  rankKatsuuraSeeRows,
  katsuuraSightPhoto,
  KATSUURA_DINING_NAME_SET,
  isKatsuuraExperiencePackRow,
} from '@/data/katsuura-travel';
import {
  isKamikatsuOnsenPackRow,
  isKamikatsuShoppingPackRow,
  isKamikatsuStayPackRow,
  KAMIKATSU_DINING_NAME_SET,
  kamikatsuSightPhoto,
  rankKamikatsuSeeRows,
  isKamikatsuExperiencePackRow,
} from '@/data/kamikatsu-travel';
import {
  isSanagochiOnsenPackRow,
  isSanagochiShoppingPackRow,
  isSanagochiStayPackRow,
  rankSanagochiSeeRows,
  SANAGOCHI_DINING_NAME_SET,
  sanagochiSightPhoto
} from '@/data/sanagochi-travel';
import {
  isNakaOnsenPackRow,
  isNakaStayPackRow,
  isNakaShoppingPackRow,
  NAKA_DINING_NAME_SET,
  nakaSightPhoto,
  rankNakaSeeRows
} from '@/data/naka-travel';

import {
  MUGI_DINING_NAME_SET,
  isMugiOnsenPackRow,
  isMugiExperiencePackRow,
  isMugiShoppingPackRow,
  isMugiStayPackRow,
  rankMugiSeeRows,
  mugiSightPhoto
} from '@/data/mugi-travel';

import {
  isMinamiOnsenPackRow,
  isMinamiStayPackRow,
  isMinamiShoppingPackRow,
  MINAMI_DINING_NAME_SET,
  minamiSightPhoto,
  rankMinamiSeeRows,
  isMinamiExperiencePackRow
} from '@/data/minami-travel';

import {
  AIZUMI_DINING_NAME_SET,
  isAizumiOnsenPackRow,
  isAizumiShoppingPackRow,
  isAizumiStayPackRow,
  rankAizumiSeeRows,
  aizumiSightPhoto,
  isAizumiExperiencePackRow
} from '@/data/aizumi-travel';

import {
  isKomatsushimaOnsenPackRow,
  isKomatsushimaStayPackRow,
  rankKomatsushimaSeeRows,
  KOMATSUSHIMA_DINING_NAME_SET,
  komatsushimaSightPhoto,
  isKomatsushimaExperiencePackRow
} from '@/data/komatsushima-travel';
import {
  ANAN_DINING_NAME_SET,
  isAnanOnsenPackRow,
  isAnanStayPackRow,
  rankAnanSeeRows,
  ananSightPhoto,
  isAnanExperiencePackRow
} from '@/data/anan-travel';
import {
  isTakamatsuOnsenPackRow,
  isTakamatsuStayPackRow,
  isTakamatsuExperiencePackRow,
  rankTakamatsuSeeRows,
  takamatsuSightPhoto,
  TAKAMATSU_DINING_NAME_SET
} from '@/data/takamatsu-travel';
import {
  isKotohiraOnsenPackRow,
  isKotohiraExperiencePackRow,
  isKotohiraStayPackRow,
  kotohiraSightPhoto,
  rankKotohiraSeeRows,
  KOTOHIRA_DINING_NAME_SET
} from '@/data/kotohira-travel';
import {
  isMarugameOnsenPackRow,
  isMarugameExperiencePackRow,
  isMarugameStayPackRow,
  marugameSightPhoto,
  rankMarugameSeeRows,
  MARUGAME_DINING_NAME_SET
} from '@/data/marugame-travel';
import {
  isKanonjiOnsenPackRow,
  isKanonjiExperiencePackRow,
  isKanonjiStayPackRow,
  kanonjiSightPhoto,
  rankKanonjiSeeRows,
  KANONJI_DINING_NAME_SET
} from '@/data/kanonji-travel';
import {
  isSakaideOnsenPackRow,
  isSakaideExperiencePackRow,
  isSakaideStayPackRow,
  sakaideSightPhoto,
  rankSakaideSeeRows,
  SAKAIDE_DINING_NAME_SET
} from '@/data/sakaide-travel';
import {
  isNaoshimaOnsenPackRow,
  isNaoshimaExperiencePackRow,
  isNaoshimaStayPackRow,
  naoshimaSightPhoto,
  rankNaoshimaSeeRows,
  NAOSHIMA_DINING_NAME_SET
} from '@/data/naoshima-travel';
import {
  isShodoshimaOnsenPackRow,
  isShodoshimaExperiencePackRow,
  isShodoshimaStayPackRow,
  shodoshimaSightPhoto,
  rankShodoshimaSeeRows,
  SHODOSHIMA_DINING_NAME_SET
} from '@/data/shodoshima-travel';
import {
  zentsujiSightPhoto,
  ZENTSUJI_DINING_NAME_SET,
  isZentsujiOnsenPackRow,
  isZentsujiExperiencePackRow,
  isZentsujiStayPackRow,
  rankZentsujiSeeRows
} from '@/data/zentsuji-travel';
import {
  isMitoyoOnsenPackRow,
  isMitoyoExperiencePackRow,
  isMitoyoStayPackRow,
  rankMitoyoSeeRows,
  mitoyoSightPhoto,
  MITOYO_DINING_NAME_SET
} from '@/data/mitoyo-travel';
import {
  utazuSightPhoto,
  isUtazuOnsenPackRow,
  isUtazuExperiencePackRow,
  isUtazuStayPackRow,
  rankUtazuSeeRows,
  UTAZU_DINING_NAME_SET
} from '@/data/utazu-travel';
import {
  isTonoshoOnsenPackRow,
  isTonoshoExperiencePackRow,
  isTonoshoStayPackRow,
  tonoshoSightPhoto,
  rankTonoshoSeeRows,
  TONOSHO_DINING_NAME_SET
} from '@/data/tonosho-travel';
import {
  isSanukiOnsenPackRow,
  isSanukiExperiencePackRow,
  isSanukiStayPackRow,
  sanukiSightPhoto,
  rankSanukiSeeRows,
  SANUKI_DINING_NAME_SET
} from '@/data/sanuki-travel';
import {
  HIGASHIKAGAWA_DINING_NAME_SET,
  higashikagawaSightPhoto,
  isHigashikagawaExperiencePackRow,
  isHigashikagawaOnsenPackRow,
  isHigashikagawaStayPackRow,
  rankHigashikagawaSeeRows
} from '@/data/higashikagawa-travel';
import {
  MIKI_DINING_NAME_SET,
  mikiSightPhoto,
  isMikiExperiencePackRow,
  isMikiOnsenPackRow,
  isMikiStayPackRow,
  rankMikiSeeRows
} from '@/data/miki-travel';
import {
  AYAGAWA_DINING_NAME_SET,
  ayagawaSightPhoto,
  isAyagawaExperiencePackRow,
  isAyagawaOnsenPackRow,
  isAyagawaStayPackRow,
  rankAyagawaSeeRows
} from '@/data/ayagawa-travel';
import {
  TADOTSU_DINING_NAME_SET,
  tadotsuSightPhoto,
  isTadotsuOnsenPackRow,
  isTadotsuExperiencePackRow,
  isTadotsuStayPackRow,
  rankTadotsuSeeRows
} from '@/data/tadotsu-travel';
import {
  MANNO_DINING_NAME_SET,
  mannoSightPhoto,
  isMannoOnsenPackRow,
  isMannoExperiencePackRow,
  isMannoStayPackRow,
  rankMannoSeeRows
} from '@/data/manno-travel';
import {
  KOCHI_DINING_NAME_SET,
  kochiSightPhoto,
  isKochiOnsenPackRow,
  isKochiExperiencePackRow,
  isKochiStayPackRow,
  rankKochiSeeRows
} from '@/data/kochi-travel';
import {
  NANKOKU_DINING_NAME_SET,
  nankokuSightPhoto,
  isNankokuOnsenPackRow,
  isNankokuExperiencePackRow,
  isNankokuStayPackRow,
  rankNankokuSeeRows
} from '@/data/nankoku-travel';
import {
  KONAN_DINING_NAME_SET,
  konanSightPhoto,
  isKonanOnsenPackRow,
  isKonanExperiencePackRow,
  isKonanStayPackRow,
  rankKonanSeeRows
} from '@/data/konan-travel';
import {
  KAMI_DINING_NAME_SET,
  kamiSightPhoto,
  isKamiOnsenPackRow,
  isKamiExperiencePackRow,
  isKamiStayPackRow,
  rankKamiSeeRows
} from '@/data/kami-travel';
import {
  INO_DINING_NAME_SET,
  inoSightPhoto,
  isInoOnsenPackRow,
  isInoExperiencePackRow,
  isInoStayPackRow,
  rankInoSeeRows
} from '@/data/ino-travel';
import {
  AKI_DINING_NAME_SET,
  akiSightPhoto,
  isAkiOnsenPackRow,
  isAkiExperiencePackRow,
  isAkiStayPackRow,
  rankAkiSeeRows
} from '@/data/aki-travel';
import {
  MUROTO_DINING_NAME_SET,
  murotoSightPhoto,
  isMurotoOnsenPackRow,
  isMurotoExperiencePackRow,
  isMurotoStayPackRow,
  rankMurotoSeeRows
} from '@/data/muroto-travel';
import {
  TOSA_DINING_NAME_SET,
  tosaSightPhoto,
  isTosaOnsenPackRow,
  isTosaExperiencePackRow,
  isTosaStayPackRow,
  rankTosaSeeRows
} from '@/data/tosa-travel';
import {
  SUSAKI_DINING_NAME_SET,
  susakiSightPhoto,
  isSusakiOnsenPackRow,
  isSusakiExperiencePackRow,
  isSusakiStayPackRow,
  rankSusakiSeeRows
} from '@/data/susaki-travel';
import {
  SHIMANTO_DINING_NAME_SET,
  shimantoSightPhoto,
  isShimantoOnsenPackRow,
  isShimantoExperiencePackRow,
  isShimantoStayPackRow,
  rankShimantoSeeRows
} from '@/data/shimanto-travel';
import {
  TOSASHIMIZU_DINING_NAME_SET,
  tosashimizuSightPhoto,
  isTosashimizuOnsenPackRow,
  isTosashimizuExperiencePackRow,
  isTosashimizuStayPackRow,
  rankTosashimizuSeeRows
} from '@/data/tosashimizu-travel';
import {
  sukumoSightPhoto,
  isSukumoOnsenPackRow,
  isSukumoExperiencePackRow,
  isSukumoStayPackRow,
  isSukumoDiningPackRow,
  SUKUMO_DINING_NAME_SET,
  rankSukumoSeeRows
} from '@/data/sukumo-travel';
import {
  kuroshioSightPhoto,
  isKuroshioOnsenPackRow,
  isKuroshioExperiencePackRow,
  isKuroshioStayPackRow,
  isKuroshioDiningPackRow,
  KUROSHIO_DINING_NAME_SET,
  rankKuroshioSeeRows
} from '@/data/kuroshio-travel';
import {
  toyoSightPhoto,
  isToyoOnsenPackRow,
  isToyoExperiencePackRow,
  isToyoStayPackRow,
  isToyoDiningPackRow,
  TOYO_DINING_NAME_SET,
  rankToyoSeeRows
} from '@/data/toyo-travel';
import {
  isNahariOnsenPackRow,
  isNahariExperiencePackRow,
  isNahariStayPackRow,
  rankNahariSeeRows,
  nahariSightPhoto,
  NAHARI_DINING_NAME_SET
} from '@/data/nahari-travel';
import {
  isYasudaOnsenPackRow,
  isYasudaExperiencePackRow,
  isYasudaStayPackRow,
  rankYasudaSeeRows,
  yasudaSightPhoto,
  YASUDA_DINING_NAME_SET
} from '@/data/yasuda-travel';
import {
  isGeiseiOnsenPackRow,
  isGeiseiExperiencePackRow,
  isGeiseiStayPackRow,
  rankGeiseiSeeRows,
  geiseiSightPhoto,
  GEISEI_DINING_NAME_SET
} from '@/data/geisei-travel';
import {
  isKitagawaOnsenPackRow,
  isKitagawaExperiencePackRow,
  isKitagawaStayPackRow,
  rankKitagawaSeeRows,
  kitagawaSightPhoto,
  KITAGAWA_DINING_NAME_SET
} from '@/data/kitagawa-travel';
import {
  isUmajiOnsenPackRow,
  isUmajiExperiencePackRow,
  isUmajiStayPackRow,
  rankUmajiSeeRows,
  umajiSightPhoto,
  UMAJI_DINING_NAME_SET
} from '@/data/umaji-travel';
import {
  isMotoyamaOnsenPackRow,
  isMotoyamaExperiencePackRow,
  isMotoyamaStayPackRow,
  rankMotoyamaSeeRows,
  motoyamaSightPhoto,
  MOTOYAMA_DINING_NAME_SET
} from '@/data/motoyama-travel';
import {
  OTOYO_DINING_NAME_SET,
  isOtoyoOnsenPackRow,
  isOtoyoExperiencePackRow,
  isOtoyoStayPackRow,
  otoyoSightPhoto,
  rankOtoyoSeeRows
} from '@/data/otoyo-travel';
import {
  TOSACHO_DINING_NAME_SET,
  isTosachoOnsenPackRow,
  isTosachoExperiencePackRow,
  isTosachoStayPackRow,
  tosachoSightPhoto,
  rankTosachoSeeRows
} from '@/data/tosacho-travel';
import {
  isOkawaOnsenPackRow,
  isOkawaExperiencePackRow,
  isOkawaStayPackRow,
  OKAWA_DINING_NAME_SET,
  okawaSightPhoto,
  rankOkawaSeeRows
} from '@/data/okawa-travel';
import {
  isNiyodogawaOnsenPackRow,
  isNiyodogawaExperiencePackRow,
  isNiyodogawaStayPackRow,
  NIYODOGAWA_DINING_NAME_SET,
  niyodogawaSightPhoto,
  rankNiyodogawaSeeRows
} from '@/data/niyodogawa-travel';
import {
  isNakatosaOnsenPackRow,
  isNakatosaExperiencePackRow,
  isNakatosaStayPackRow,
  NAKATOSA_DINING_NAME_SET,
  nakatosaSightPhoto,
  rankNakatosaSeeRows
} from '@/data/nakatosa-travel';
import {
  isOchiOnsenPackRow,
  isOchiExperiencePackRow,
  isOchiStayPackRow,
  OCHI_DINING_NAME_SET,
  ochiSightPhoto,
  rankOchiSeeRows
} from '@/data/ochi-travel';
import {
  isYusuharaOnsenPackRow,
  isYusuharaExperiencePackRow,
  isYusuharaStayPackRow,
  YUSUHARA_DINING_NAME_SET,
  yusuharaSightPhoto,
  rankYusuharaSeeRows
} from '@/data/yusuhara-travel';
import {
  isHidakaOnsenPackRow,
  isHidakaExperiencePackRow,
  isHidakaStayPackRow,
  HIDAKA_DINING_NAME_SET,
  hidakaSightPhoto,
  rankHidakaSeeRows
} from '@/data/hidaka-travel';
import {
  isTsunoOnsenPackRow,
  isTsunoExperiencePackRow,
  isTsunoStayPackRow,
  TSUNO_DINING_NAME_SET,
  tsunoSightPhoto,
  rankTsunoSeeRows
} from '@/data/tsuno-travel';
import {
  isShimantochoOnsenPackRow,
  isShimantochoExperiencePackRow,
  isShimantochoStayPackRow,
  SHIMANTOCHO_DINING_NAME_SET,
  shimantochoSightPhoto,
  rankShimantochoSeeRows
} from '@/data/shimantocho-travel';
import {
  isOtsukiOnsenPackRow,
  isOtsukiExperiencePackRow,
  isOtsukiStayPackRow,
  OTSUKI_DINING_NAME_SET,
  otsukiSightPhoto,
  rankOtsukiSeeRows
} from '@/data/otsuki-travel';
import {
  MIHARA_DINING_NAME_SET,
  miharaSightPhoto,
  rankMiharaSeeRows,
  isMiharaOnsenPackRow,
  isMiharaExperiencePackRow,
  isMiharaStayPackRow
} from '@/data/mihara-travel';
import {
  MATSUYAMA_DINING_NAME_SET,
  matsuyamaSightPhoto,
  rankMatsuyamaSeeRows,
  isMatsuyamaOnsenPackRow,
  isMatsuyamaExperiencePackRow,
  isMatsuyamaStayPackRow
} from '@/data/matsuyama-travel';
import {
  IMABARI_DINING_NAME_SET,
  imabariSightPhoto,
  rankImabariSeeRows,
  isImabariOnsenPackRow,
  isImabariExperiencePackRow,
  isImabariStayPackRow
} from '@/data/imabari-travel';
import {
  UWAJIMA_DINING_NAME_SET,
  uwajimaSightPhoto,
  rankUwajimaSeeRows,
  isUwajimaOnsenPackRow,
  isUwajimaExperiencePackRow,
  isUwajimaStayPackRow
} from '@/data/uwajima-travel';
import {
  YAWATAHAMA_DINING_NAME_SET,
  yawatahamaSightPhoto,
  isYawatahamaOnsenPackRow,
  isYawatahamaExperiencePackRow,
  isYawatahamaStayPackRow,
  isYawatahamaDiningPackRow,
  rankYawatahamaSeeRows,
} from '@/data/yawatahama-travel';
import {
  NIIHAMA_DINING_NAME_SET,
  niihamaSightPhoto,
  isNiihamaOnsenPackRow,
  isNiihamaExperiencePackRow,
  isNiihamaStayPackRow,
  isNiihamaDiningPackRow,
  rankNiihamaSeeRows,
} from '@/data/niihama-travel';
import {
  saijoSightPhoto,
  isSaijoOnsenPackRow,
  isSaijoExperiencePackRow,
  isSaijoStayPackRow,
  rankSaijoSeeRows,
  SAIJO_DINING_NAME_SET
} from '@/data/saijo-travel';
import {
  OZU_DINING_NAME_SET,
  isOzuOnsenPackRow,
  isOzuExperiencePackRow,
  isOzuStayPackRow,
  ozuSightPhoto,
  rankOzuSeeRows,
} from '@/data/ozu-travel';
import {
  IYO_DINING_NAME_SET,
  isIyoOnsenPackRow,
  isIyoExperiencePackRow,
  isIyoStayPackRow,
  iyoSightPhoto,
  rankIyoSeeRows,
} from '@/data/iyo-travel';
import {
  SHIKOKUCHUO_DINING_NAME_SET,
  isShikokuchuoOnsenPackRow,
  isShikokuchuoExperiencePackRow,
  isShikokuchuoStayPackRow,
  shikokuchuoSightPhoto,
  rankShikokuchuoSeeRows,
} from '@/data/shikokuchuo-travel';
import {
  SEIYO_DINING_NAME_SET,
  isSeiyoOnsenPackRow,
  isSeiyoExperiencePackRow,
  isSeiyoStayPackRow,
  seiyoSightPhoto,
  rankSeiyoSeeRows,
} from '@/data/seiyo-travel';
import {
  TOON_DINING_NAME_SET,
  isToonOnsenPackRow,
  isToonExperiencePackRow,
  isToonStayPackRow,
  toonSightPhoto,
  rankToonSeeRows,
} from '@/data/toon-travel';
import {
  KAMIJIMA_DINING_NAME_SET,
  isKamijimaOnsenPackRow,
  isKamijimaExperiencePackRow,
  isKamijimaStayPackRow,
  kamijimaSightPhoto,
  rankKamijimaSeeRows
} from '@/data/kamijima-travel';
import {
  KUMAKOGEN_DINING_NAME_SET,
  isKumakogenOnsenPackRow,
  isKumakogenExperiencePackRow,
  isKumakogenStayPackRow,
  kumakogenSightPhoto,
  rankKumakogenSeeRows
} from '@/data/kumakogen-travel';
import {
  MASAKI_DINING_NAME_SET,
  isMasakiOnsenPackRow,
  isMasakiExperiencePackRow,
  isMasakiStayPackRow,
  masakiSightPhoto,
  rankMasakiSeeRows
} from '@/data/masaki-travel';
import {
  isTobeOnsenPackRow,
  isTobeExperiencePackRow,
  isTobeStayPackRow,
  rankTobeSeeRows,
  tobeSightPhoto,
  TOBE_DINING_NAME_SET
} from '@/data/tobe-travel';
import {
  isUchikoOnsenPackRow,
  isUchikoExperiencePackRow,
  isUchikoStayPackRow,
  rankUchikoSeeRows,
  uchikoSightPhoto,
  UCHIKO_DINING_NAME_SET
} from '@/data/uchiko-travel';
import {
  isIkataExperiencePackRow,
  isIkataOnsenPackRow,
  isIkataStayPackRow,
  rankIkataSeeRows,
  ikataSightPhoto,
  IKATA_DINING_NAME_SET
} from '@/data/ikata-travel';
import {
  isMatsunoOnsenPackRow,
  isMatsunoExperiencePackRow,
  isMatsunoStayPackRow,
  rankMatsunoSeeRows,
  matsunoSightPhoto,
  MATSUNO_DINING_NAME_SET
} from '@/data/matsuno-travel';
import {
  isKihokuOnsenPackRow,
  isKihokuExperiencePackRow,
  isKihokuStayPackRow,
  rankKihokuSeeRows,
  kihokuSightPhoto,
  KIHOKU_DINING_NAME_SET
} from '@/data/kihoku-travel';
import {
  isAinanOnsenPackRow,
  isAinanExperiencePackRow,
  isAinanStayPackRow,
  rankAinanSeeRows,
  ainanSightPhoto,
  AINAN_DINING_NAME_SET
} from '@/data/ainan-travel';
import {
  isHiroshimaOnsenPackRow,
  isHiroshimaExperiencePackRow,
  isHiroshimaStayPackRow,
  rankHiroshimaSeeRows,
  hiroshimaSightPhoto,
  HIROSHIMA_DINING_NAME_SET
} from '@/data/hiroshima-travel';
import {
  isKureOnsenPackRow,
  isKureExperiencePackRow,
  isKureStayPackRow,
  rankKureSeeRows,
  kureSightPhoto,
  KURE_DINING_NAME_SET
} from '@/data/kure-travel';
import {
  isTakeharaOnsenPackRow,
  isTakeharaExperiencePackRow,
  isTakeharaStayPackRow,
  rankTakeharaSeeRows,
  takeharaSightPhoto,
  TAKEHARA_DINING_NAME_SET
} from '@/data/takehara-travel';
import {
  isMiharashiOnsenPackRow,
  isMiharashiExperiencePackRow,
  isMiharashiStayPackRow,
  rankMiharashiSeeRows,
  miharashiSightPhoto,
  MIHARASHI_DINING_NAME_SET
} from '@/data/miharashi-travel';







import {
  isKaiyoOnsenPackRow,
  isKaiyoStayPackRow,
  isKaiyoShoppingPackRow,
  KAIYO_DINING_NAME_SET,
  kaiyoSightPhoto,
  rankKaiyoSeeRows,
  isKaiyoExperiencePackRow
} from '@/data/kaiyo-travel';



import {
  isMatsushigeOnsenPackRow,
  isMatsushigeStayPackRow,
  rankMatsushigeSeeRows,
  matsushigeSightPhoto,
  isMatsushigeExperiencePackRow
} from '@/data/matsushige-travel';

import {
  isNarutoOnsenPackRow,
  isNarutoStayPackRow,
  rankNarutoSeeRows,
  narutoSightPhoto,
  isNarutoExperiencePackRow
} from '@/data/naruto-travel';


export type ListingKind = TravelKind | 'onsen' | 'experience' | 'sights';

export type PublicListing = {
  id: string;
  nameJa: string;
  kind: ListingKind;
  address: string | null;
  phone: string | null;
  hours: string | null;
  lat: number | null;
  lon: number | null;
  sourceUrl: string;
  officialUrl: string | null;
  accessed: string;
  photo: MimaPlacePhoto | null;
  slug: ReadySlug;
};

function packDedupeKey(row: FacilityRow): string {
  if (row.lat !== null && row.lon !== null) {
    return `${row.name_ja}|${row.lat}|${row.lon}`;
  }
  return `${row.name_ja}|${row.source_url}`;
}

function fromTravel(row: TravelRow, slug: ReadySlug, photo: MimaPlacePhoto | null): PublicListing {
  return {
    id: row.id,
    nameJa: row.name_ja,
    kind: row.category,
    address: row.address,
    phone: row.phone,
    hours: null,
    lat: null,
    lon: null,
    sourceUrl: row.source_url,
    officialUrl: row.source_url,
    accessed: row.accessed,
    photo,
    slug
  };
}

function fromPack(
  row: FacilityRow,
  slug: ReadySlug,
  kind: ListingKind,
  photo: MimaPlacePhoto | null
): PublicListing {
  return {
    id: row.id,
    nameJa: row.name_ja,
    kind,
    address: row.address,
    phone: row.phone,
    hours: row.hours,
    lat: row.lat,
    lon: row.lon,
    sourceUrl: row.source_url,
    officialUrl: row.official_url,
    accessed: row.accessed,
    photo,
    slug
  };
}

function mimaListings(): PublicListing[] {
  const town = lookupTown('mima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'mima', sightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (!isOnsenPackRow(row) && !isExperiencePackRow(row) && !isSightsCategory(row.category)) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSeeRows(pack);
  const onsen = pack.filter(isOnsenPackRow);
  const experience = pack.filter(isExperiencePackRow);
  for (const row of [...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isOnsenPackRow(row)
      ? 'onsen'
      : isExperiencePackRow(row)
        ? 'experience'
        : 'sights';
    out.push(fromPack(row, 'mima', kind, sightPhoto(row.name_ja)));
  }
  return out;
}

function tsurugiListings(): PublicListing[] {
  const town = lookupTown('tsurugi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tsurugi', tsurugiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isTsurugiOnsenPackRow(row) &&
      !isTsurugiExperiencePackRow(row) &&
      !isTsurugiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTsurugiSeeRows(pack);
  const experience = pack.filter(isTsurugiExperiencePackRow);
  const onsen = pack.filter(isTsurugiOnsenPackRow);
  const stay = pack.filter(isTsurugiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTsurugiOnsenPackRow(row)
      ? 'onsen'
      : isTsurugiExperiencePackRow(row)
        ? 'experience'
        : isTsurugiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'tsurugi', kind, tsurugiSightPhoto(row.name_ja)));
  }
  return out;
}


function yoshinogawaListings(): PublicListing[] {
  const town = lookupTown('yoshinogawa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'yoshinogawa', yoshinogawaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isYoshinogawaOnsenPackRow(row) &&
      !isYoshinogawaExperiencePackRow(row) &&
      !isYoshinogawaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankYoshinogawaSeeRows(pack);
  const experience = pack.filter(isYoshinogawaExperiencePackRow);
  const onsen = pack.filter(isYoshinogawaOnsenPackRow);
  const stay = pack.filter(isYoshinogawaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isYoshinogawaOnsenPackRow(row)
      ? 'onsen'
      : isYoshinogawaExperiencePackRow(row)
        ? 'experience'
        : isYoshinogawaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'yoshinogawa', kind, yoshinogawaSightPhoto(row.name_ja)));
  }
  return out;
}


function miyoshiListings(): PublicListing[] {
  const town = lookupTown('miyoshi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'miyoshi', miyoshiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isMiyoshiOnsenPackRow(row) &&
      !isMiyoshiExperiencePackRow(row) &&
      !isMiyoshiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMiyoshiSeeRows(pack);
  const onsen = pack.filter(isMiyoshiOnsenPackRow);
  const experience = pack.filter(isMiyoshiExperiencePackRow);
  const stay = pack.filter(isMiyoshiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMiyoshiOnsenPackRow(row)
      ? 'onsen'
      : isMiyoshiExperiencePackRow(row)
        ? 'experience'
        : isMiyoshiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'miyoshi', kind, miyoshiSightPhoto(row.name_ja)));
  }
  return out;
}



function awaListings(): PublicListing[] {
  const town = lookupTown('awa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'awa', awaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isAwaOnsenPackRow(row) &&
      !isAwaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAwaSeeRows(pack);
  const onsen = pack.filter(isAwaOnsenPackRow);
  const stay = pack.filter(isAwaStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isAwaOnsenPackRow(row)
      ? 'onsen'
      : isAwaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'awa', kind, awaSightPhoto(row.name_ja)));
  }
  return out;
}


function higashimiyoshiListings(): PublicListing[] {
  const town = lookupTown('higashimiyoshi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'higashimiyoshi', higashimiyoshiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isHigashimiyoshiOnsenPackRow(row) &&
      !isHigashimiyoshiExperiencePackRow(row) &&
      !isHigashimiyoshiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankHigashimiyoshiSeeRows(pack);
  const experience = pack.filter(isHigashimiyoshiExperiencePackRow);
  const onsen = pack.filter(isHigashimiyoshiOnsenPackRow);
  const stay = pack.filter(isHigashimiyoshiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isHigashimiyoshiOnsenPackRow(row)
      ? 'onsen'
      : isHigashimiyoshiExperiencePackRow(row)
        ? 'experience'
        : isHigashimiyoshiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'higashimiyoshi', kind, higashimiyoshiSightPhoto(row.name_ja)));
  }
  return out;
}



function matsushigeListings(): PublicListing[] {
  const town = lookupTown('matsushige')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'matsushige', matsushigeSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isMatsushigeOnsenPackRow(row) &&
      !isMatsushigeExperiencePackRow(row) &&
      !isMatsushigeStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMatsushigeSeeRows(pack);
  const onsen = pack.filter(isMatsushigeOnsenPackRow);
  const experience = pack.filter(isMatsushigeExperiencePackRow);
  const stay = pack.filter(isMatsushigeStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMatsushigeOnsenPackRow(row)
      ? 'onsen'
      : isMatsushigeExperiencePackRow(row)
        ? 'experience'
        : isMatsushigeStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'matsushige', kind, matsushigeSightPhoto(row.name_ja)));
  }
  return out;
}

function kitajimaListings(): PublicListing[] {
  const town = lookupTown('kitajima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kitajima', kitajimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isKitajimaOnsenPackRow(row) &&
      !isKitajimaExperiencePackRow(row) &&
      !isKitajimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKitajimaSeeRows(pack);
  const experience = pack.filter(isKitajimaExperiencePackRow);
  const onsen = pack.filter(isKitajimaOnsenPackRow);
  const stay = pack.filter(isKitajimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKitajimaOnsenPackRow(row)
      ? 'onsen'
      : isKitajimaExperiencePackRow(row)
        ? 'experience'
        : isKitajimaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'kitajima', kind, kitajimaSightPhoto(row.name_ja)));
  }
  return out;
}

function tokushimaCityListings(): PublicListing[] {
  const town = lookupTown('tokushima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tokushima', tokushimaCitySightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isTokushimaCityOnsenPackRow(row) &&
      !isTokushimaCityExperiencePackRow(row) &&
      !isTokushimaCityStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTokushimaCitySeeRows(pack);
  const onsen = pack.filter(isTokushimaCityOnsenPackRow);
  const experience = pack.filter(isTokushimaCityExperiencePackRow);
  const stay = pack.filter(isTokushimaCityStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTokushimaCityOnsenPackRow(row)
      ? 'onsen'
      : isTokushimaCityExperiencePackRow(row)
        ? 'experience'
        : isTokushimaCityStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tokushima', kind, tokushimaCitySightPhoto(row.name_ja)));
  }
  return out;
}


function narutoListings(): PublicListing[] {
  const town = lookupTown('naruto')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'naruto', narutoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isNarutoOnsenPackRow(row) &&
      !isNarutoExperiencePackRow(row) &&
      !isNarutoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNarutoSeeRows(pack);
  const onsen = pack.filter(isNarutoOnsenPackRow);
  const experience = pack.filter(isNarutoExperiencePackRow);
  const stay = pack.filter(isNarutoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNarutoOnsenPackRow(row)
      ? 'onsen'
      : isNarutoExperiencePackRow(row)
        ? 'experience'
        : isNarutoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'naruto', kind, narutoSightPhoto(row.name_ja)));
  }
  return out;
}


function ishiiListings(): PublicListing[] {
  const town = lookupTown('ishii')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'ishii', ishiiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isIshiiOnsenPackRow(row) &&
      !isIshiiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankIshiiSeeRows(pack);
  const onsen = pack.filter(isIshiiOnsenPackRow);
  const stay = pack.filter(isIshiiStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isIshiiOnsenPackRow(row)
      ? 'onsen'
      : isIshiiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'ishii', kind, ishiiSightPhoto(row.name_ja)));
  }
  return out;
}


function itanoListings(): PublicListing[] {
  const town = lookupTown('itano')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'itano', itanoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isItanoOnsenPackRow(row) &&
      !isItanoStayPackRow(row) &&
      !isItanoShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankItanoSeeRows(pack);
  const onsen = pack.filter(isItanoOnsenPackRow);
  const stay = pack.filter(isItanoStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isItanoOnsenPackRow(row)
      ? 'onsen'
      : isItanoStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'itano', kind, itanoSightPhoto(row.name_ja)));
  }
  return out;
}


function kamiitaListings(): PublicListing[] {
  const town = lookupTown('kamiita')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kamiita', kamiitaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (
      !isKamiitaOnsenPackRow(row) &&
      !isKamiitaExperiencePackRow(row) &&
      !isKamiitaStayPackRow(row) &&
      !isKamiitaShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKamiitaSeeRows(pack);
  const experience = pack.filter(isKamiitaExperiencePackRow);
  const onsen = pack.filter(isKamiitaOnsenPackRow);
  const stay = pack.filter(isKamiitaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKamiitaOnsenPackRow(row)
      ? 'onsen'
      : isKamiitaExperiencePackRow(row)
        ? 'experience'
        : isKamiitaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'kamiita', kind, kamiitaSightPhoto(row.name_ja)));
  }
  return out;
}


function kamiyamaListings(): PublicListing[] {
  const town = lookupTown('kamiyama')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kamiyama', kamiyamaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KAMIYAMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKamiyamaOnsenPackRow(row) &&
      !isKamiyamaExperiencePackRow(row) &&
      !isKamiyamaStayPackRow(row) &&
      !isKamiyamaShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKamiyamaSeeRows(pack);
  const experience = pack.filter(isKamiyamaExperiencePackRow);
  const onsen = pack.filter(isKamiyamaOnsenPackRow);
  const stay = pack.filter(isKamiyamaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKamiyamaOnsenPackRow(row)
      ? 'onsen'
      : isKamiyamaExperiencePackRow(row)
        ? 'experience'
        : isKamiyamaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'kamiyama', kind, kamiyamaSightPhoto(row.name_ja)));
  }
  return out;
}


function katsuuraListings(): PublicListing[] {
  const town = lookupTown('katsuura')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'katsuura', katsuuraSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KATSUURA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKatsuuraOnsenPackRow(row) &&
      !isKatsuuraExperiencePackRow(row) &&
      !isKatsuuraStayPackRow(row) &&
      !isKatsuuraShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKatsuuraSeeRows(pack);
  const experience = pack.filter(isKatsuuraExperiencePackRow);
  const onsen = pack.filter(isKatsuuraOnsenPackRow);
  const stay = pack.filter(isKatsuuraStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKatsuuraOnsenPackRow(row)
      ? 'onsen'
      : isKatsuuraExperiencePackRow(row)
        ? 'experience'
        : isKatsuuraStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'katsuura', kind, katsuuraSightPhoto(row.name_ja)));
  }
  return out;
}


function kamikatsuListings(): PublicListing[] {
  const town = lookupTown('kamikatsu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kamikatsu', kamikatsuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KAMIKATSU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKamikatsuOnsenPackRow(row) &&
      !isKamikatsuExperiencePackRow(row) &&
      !isKamikatsuStayPackRow(row) &&
      !isKamikatsuShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKamikatsuSeeRows(pack);
  const experience = pack.filter(isKamikatsuExperiencePackRow);
  const onsen = pack.filter(isKamikatsuOnsenPackRow);
  const stay = pack.filter(isKamikatsuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKamikatsuOnsenPackRow(row)
      ? 'onsen'
      : isKamikatsuExperiencePackRow(row)
        ? 'experience'
        : isKamikatsuStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'kamikatsu', kind, kamikatsuSightPhoto(row.name_ja)));
  }
  return out;
}

function sanagochiListings(): PublicListing[] {
  const town = lookupTown('sanagochi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'sanagochi', sanagochiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SANAGOCHI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSanagochiOnsenPackRow(row) &&
      !isSanagochiStayPackRow(row) &&
      !isSanagochiShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSanagochiSeeRows(pack);
  const onsen = pack.filter(isSanagochiOnsenPackRow);
  const stay = pack.filter(isSanagochiStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isSanagochiOnsenPackRow(row)
      ? 'onsen'
      : isSanagochiStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'sanagochi', kind, sanagochiSightPhoto(row.name_ja)));
  }
  return out;
}


function nakaListings(): PublicListing[] {
  const town = lookupTown('naka')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'naka', nakaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NAKA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNakaOnsenPackRow(row) &&
      !isNakaStayPackRow(row) &&
      !isNakaShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNakaSeeRows(pack);
  const onsen = pack.filter(isNakaOnsenPackRow);
  const stay = pack.filter(isNakaStayPackRow);
  for (const row of [...stay, ...onsen, ...ranked]) {
    const kind: ListingKind = isNakaOnsenPackRow(row)
      ? 'onsen'
      : isNakaStayPackRow(row)
        ? 'stay'
        : 'sights';
    out.push(fromPack(row, 'naka', kind, nakaSightPhoto(row.name_ja)));
  }
  return out;
}


function minamiListings(): PublicListing[] {
  const town = lookupTown('minami')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'minami', minamiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MINAMI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMinamiOnsenPackRow(row) &&
      !isMinamiExperiencePackRow(row) &&
      !isMinamiStayPackRow(row) &&
      !isMinamiShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMinamiSeeRows(pack);
  const onsen = pack.filter(isMinamiOnsenPackRow);
  const experience = pack.filter(isMinamiExperiencePackRow);
  const stay = pack.filter(isMinamiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMinamiOnsenPackRow(row)
      ? 'onsen'
      : isMinamiExperiencePackRow(row)
        ? 'experience'
        : isMinamiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'minami', kind, minamiSightPhoto(row.name_ja)));
  }
  return out;
}





function kaiyoListings(): PublicListing[] {
  const town = lookupTown('kaiyo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kaiyo', kaiyoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KAIYO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKaiyoOnsenPackRow(row) &&
      !isKaiyoExperiencePackRow(row) &&
      !isKaiyoStayPackRow(row) &&
      !isKaiyoShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKaiyoSeeRows(pack);
  const onsen = pack.filter(isKaiyoOnsenPackRow);
  const experience = pack.filter(isKaiyoExperiencePackRow);
  const stay = pack.filter(isKaiyoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKaiyoOnsenPackRow(row)
      ? 'onsen'
      : isKaiyoExperiencePackRow(row)
        ? 'experience'
        : isKaiyoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kaiyo', kind, kaiyoSightPhoto(row.name_ja)));
  }
  return out;
}


function aizumiListings(): PublicListing[] {
  const town = lookupTown('aizumi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'aizumi', aizumiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (AIZUMI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isAizumiOnsenPackRow(row) &&
      !isAizumiExperiencePackRow(row) &&
      !isAizumiStayPackRow(row) &&
      !isAizumiShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAizumiSeeRows(pack);
  const onsen = pack.filter(isAizumiOnsenPackRow);
  const experience = pack.filter(isAizumiExperiencePackRow);
  const stay = pack.filter(isAizumiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isAizumiOnsenPackRow(row)
      ? 'onsen'
      : isAizumiExperiencePackRow(row)
        ? 'experience'
        : isAizumiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'aizumi', kind, aizumiSightPhoto(row.name_ja)));
  }
  return out;
}


function mugiListings(): PublicListing[] {
  const town = lookupTown('mugi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'mugi', mugiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MUGI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMugiOnsenPackRow(row) &&
      !isMugiExperiencePackRow(row) &&
      !isMugiStayPackRow(row) &&
      !isMugiShoppingPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMugiSeeRows(pack);
  const onsen = pack.filter(isMugiOnsenPackRow);
  const experience = pack.filter(isMugiExperiencePackRow);
  const stay = pack.filter(isMugiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMugiOnsenPackRow(row)
      ? 'onsen'
      : isMugiExperiencePackRow(row)
        ? 'experience'
        : isMugiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'mugi', kind, mugiSightPhoto(row.name_ja)));
  }
  return out;
}


function komatsushimaListings(): PublicListing[] {
  const town = lookupTown('komatsushima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'komatsushima', komatsushimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KOMATSUSHIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKomatsushimaOnsenPackRow(row) &&
      !isKomatsushimaExperiencePackRow(row) &&
      !isKomatsushimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKomatsushimaSeeRows(pack);
  const onsen = pack.filter(isKomatsushimaOnsenPackRow);
  const experience = pack.filter(isKomatsushimaExperiencePackRow);
  const stay = pack.filter(isKomatsushimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKomatsushimaOnsenPackRow(row)
      ? 'onsen'
      : isKomatsushimaExperiencePackRow(row)
        ? 'experience'
        : isKomatsushimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'komatsushima', kind, komatsushimaSightPhoto(row.name_ja)));
  }
  return out;
}


function ananListings(): PublicListing[] {
  const town = lookupTown('anan')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'anan', ananSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (ANAN_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isAnanOnsenPackRow(row) &&
      !isAnanExperiencePackRow(row) &&
      !isAnanStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAnanSeeRows(pack);
  const onsen = pack.filter(isAnanOnsenPackRow);
  const experience = pack.filter(isAnanExperiencePackRow);
  const stay = pack.filter(isAnanStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isAnanOnsenPackRow(row)
      ? 'onsen'
      : isAnanExperiencePackRow(row)
        ? 'experience'
        : isAnanStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'anan', kind, ananSightPhoto(row.name_ja)));
  }
  return out;
}


function takamatsuListings(): PublicListing[] {
  const town = lookupTown('takamatsu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'takamatsu', takamatsuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TAKAMATSU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTakamatsuOnsenPackRow(row) &&
      !isTakamatsuExperiencePackRow(row) &&
      !isTakamatsuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTakamatsuSeeRows(pack);
  const onsen = pack.filter(isTakamatsuOnsenPackRow);
  const experience = pack.filter(isTakamatsuExperiencePackRow);
  const stay = pack.filter(isTakamatsuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTakamatsuOnsenPackRow(row)
      ? 'onsen'
      : isTakamatsuExperiencePackRow(row)
        ? 'experience'
        : isTakamatsuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'takamatsu', kind, takamatsuSightPhoto(row.name_ja)));
  }
  return out;
}


function kotohiraListings(): PublicListing[] {
  const town = lookupTown('kotohira')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kotohira', kotohiraSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KOTOHIRA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKotohiraOnsenPackRow(row) &&
      !isKotohiraExperiencePackRow(row) &&
      !isKotohiraStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKotohiraSeeRows(pack);
  const onsen = pack.filter(isKotohiraOnsenPackRow);
  const experience = pack.filter(isKotohiraExperiencePackRow);
  const stay = pack.filter(isKotohiraStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKotohiraOnsenPackRow(row)
      ? 'onsen'
      : isKotohiraExperiencePackRow(row)
        ? 'experience'
        : isKotohiraStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kotohira', kind, kotohiraSightPhoto(row.name_ja)));
  }
  return out;
}

function marugameListings(): PublicListing[] {
  const town = lookupTown('marugame')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'marugame', marugameSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MARUGAME_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMarugameOnsenPackRow(row) &&
      !isMarugameExperiencePackRow(row) &&
      !isMarugameStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMarugameSeeRows(pack);
  const onsen = pack.filter(isMarugameOnsenPackRow);
  const experience = pack.filter(isMarugameExperiencePackRow);
  const stay = pack.filter(isMarugameStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMarugameOnsenPackRow(row)
      ? 'onsen'
      : isMarugameExperiencePackRow(row)
        ? 'experience'
        : isMarugameStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'marugame', kind, marugameSightPhoto(row.name_ja)));
  }
  return out;
}




function kanonjiListings(): PublicListing[] {
  const town = lookupTown('kanonji')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kanonji', kanonjiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KANONJI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKanonjiOnsenPackRow(row) &&
      !isKanonjiExperiencePackRow(row) &&
      !isKanonjiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKanonjiSeeRows(pack);
  const onsen = pack.filter(isKanonjiOnsenPackRow);
  const experience = pack.filter(isKanonjiExperiencePackRow);
  const stay = pack.filter(isKanonjiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKanonjiOnsenPackRow(row)
      ? 'onsen'
      : isKanonjiExperiencePackRow(row)
        ? 'experience'
        : isKanonjiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kanonji', kind, kanonjiSightPhoto(row.name_ja)));
  }
  return out;
}



function sakaideListings(): PublicListing[] {
  const town = lookupTown('sakaide')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'sakaide', sakaideSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SAKAIDE_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSakaideOnsenPackRow(row) &&
      !isSakaideExperiencePackRow(row) &&
      !isSakaideStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSakaideSeeRows(pack);
  const onsen = pack.filter(isSakaideOnsenPackRow);
  const experience = pack.filter(isSakaideExperiencePackRow);
  const stay = pack.filter(isSakaideStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isSakaideOnsenPackRow(row)
      ? 'onsen'
      : isSakaideExperiencePackRow(row)
        ? 'experience'
        : isSakaideStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'sakaide', kind, sakaideSightPhoto(row.name_ja)));
  }
  return out;
}

function naoshimaListings(): PublicListing[] {
  const town = lookupTown('naoshima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'naoshima', naoshimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NAOSHIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNaoshimaOnsenPackRow(row) &&
      !isNaoshimaExperiencePackRow(row) &&
      !isNaoshimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNaoshimaSeeRows(pack);
  const onsen = pack.filter(isNaoshimaOnsenPackRow);
  const experience = pack.filter(isNaoshimaExperiencePackRow);
  const stay = pack.filter(isNaoshimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNaoshimaOnsenPackRow(row)
      ? 'onsen'
      : isNaoshimaExperiencePackRow(row)
        ? 'experience'
        : isNaoshimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'naoshima', kind, naoshimaSightPhoto(row.name_ja)));
  }
  return out;
}

function shodoshimaListings(): PublicListing[] {
  const town = lookupTown('shodoshima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'shodoshima', shodoshimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SHODOSHIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isShodoshimaOnsenPackRow(row) &&
      !isShodoshimaExperiencePackRow(row) &&
      !isShodoshimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankShodoshimaSeeRows(pack);
  const onsen = pack.filter(isShodoshimaOnsenPackRow);
  const experience = pack.filter(isShodoshimaExperiencePackRow);
  const stay = pack.filter(isShodoshimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isShodoshimaOnsenPackRow(row)
      ? 'onsen'
      : isShodoshimaExperiencePackRow(row)
        ? 'experience'
        : isShodoshimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'shodoshima', kind, shodoshimaSightPhoto(row.name_ja)));
  }
  return out;
}

function zentsujiListings(): PublicListing[] {
  const town = lookupTown('zentsuji')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'zentsuji', zentsujiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (ZENTSUJI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isZentsujiOnsenPackRow(row) &&
      !isZentsujiExperiencePackRow(row) &&
      !isZentsujiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankZentsujiSeeRows(pack);
  const onsen = pack.filter(isZentsujiOnsenPackRow);
  const experience = pack.filter(isZentsujiExperiencePackRow);
  const stay = pack.filter(isZentsujiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isZentsujiOnsenPackRow(row)
      ? 'onsen'
      : isZentsujiExperiencePackRow(row)
        ? 'experience'
        : isZentsujiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'zentsuji', kind, zentsujiSightPhoto(row.name_ja)));
  }
  return out;
}




function mitoyoListings(): PublicListing[] {
  const town = lookupTown('mitoyo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'mitoyo', mitoyoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MITOYO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMitoyoOnsenPackRow(row) &&
      !isMitoyoExperiencePackRow(row) &&
      !isMitoyoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMitoyoSeeRows(pack);
  const onsen = pack.filter(isMitoyoOnsenPackRow);
  const experience = pack.filter(isMitoyoExperiencePackRow);
  const stay = pack.filter(isMitoyoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMitoyoOnsenPackRow(row)
      ? 'onsen'
      : isMitoyoExperiencePackRow(row)
        ? 'experience'
        : isMitoyoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'mitoyo', kind, mitoyoSightPhoto(row.name_ja)));
  }
  return out;
}




function higashikagawaListings(): PublicListing[] {
  const town = lookupTown('higashikagawa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'higashikagawa', higashikagawaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (HIGASHIKAGAWA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isHigashikagawaOnsenPackRow(row) &&
      !isHigashikagawaExperiencePackRow(row) &&
      !isHigashikagawaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankHigashikagawaSeeRows(pack);
  const onsen = pack.filter(isHigashikagawaOnsenPackRow);
  const experience = pack.filter(isHigashikagawaExperiencePackRow);
  const stay = pack.filter(isHigashikagawaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isHigashikagawaOnsenPackRow(row)
      ? 'onsen'
      : isHigashikagawaExperiencePackRow(row)
        ? 'experience'
        : isHigashikagawaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'higashikagawa', kind, higashikagawaSightPhoto(row.name_ja)));
  }
  return out;
}

function sanukiListings(): PublicListing[] {
  const town = lookupTown('sanuki')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'sanuki', sanukiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SANUKI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSanukiOnsenPackRow(row) &&
      !isSanukiExperiencePackRow(row) &&
      !isSanukiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSanukiSeeRows(pack);
  const onsen = pack.filter(isSanukiOnsenPackRow);
  const experience = pack.filter(isSanukiExperiencePackRow);
  const stay = pack.filter(isSanukiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isSanukiOnsenPackRow(row)
      ? 'onsen'
      : isSanukiExperiencePackRow(row)
        ? 'experience'
        : isSanukiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'sanuki', kind, sanukiSightPhoto(row.name_ja)));
  }
  return out;
}

function tonoshoListings(): PublicListing[] {
  const town = lookupTown('tonosho')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tonosho', tonoshoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TONOSHO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTonoshoOnsenPackRow(row) &&
      !isTonoshoExperiencePackRow(row) &&
      !isTonoshoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTonoshoSeeRows(pack);
  const onsen = pack.filter(isTonoshoOnsenPackRow);
  const experience = pack.filter(isTonoshoExperiencePackRow);
  const stay = pack.filter(isTonoshoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTonoshoOnsenPackRow(row)
      ? 'onsen'
      : isTonoshoExperiencePackRow(row)
        ? 'experience'
        : isTonoshoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tonosho', kind, tonoshoSightPhoto(row.name_ja)));
  }
  return out;
}

function utazuListings(): PublicListing[] {
  const town = lookupTown('utazu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'utazu', utazuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (UTAZU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isUtazuOnsenPackRow(row) &&
      !isUtazuExperiencePackRow(row) &&
      !isUtazuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankUtazuSeeRows(pack);
  const onsen = pack.filter(isUtazuOnsenPackRow);
  const experience = pack.filter(isUtazuExperiencePackRow);
  const stay = pack.filter(isUtazuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isUtazuOnsenPackRow(row)
      ? 'onsen'
      : isUtazuExperiencePackRow(row)
        ? 'experience'
        : isUtazuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'utazu', kind, utazuSightPhoto(row.name_ja)));
  }
  return out;
}



function mikiListings(): PublicListing[] {
  const town = lookupTown('miki')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'miki', mikiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MIKI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMikiOnsenPackRow(row) &&
      !isMikiExperiencePackRow(row) &&
      !isMikiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMikiSeeRows(pack);
  const onsen = pack.filter(isMikiOnsenPackRow);
  const experience = pack.filter(isMikiExperiencePackRow);
  const stay = pack.filter(isMikiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMikiOnsenPackRow(row)
      ? 'onsen'
      : isMikiExperiencePackRow(row)
        ? 'experience'
        : isMikiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'miki', kind, mikiSightPhoto(row.name_ja)));
  }
  return out;
}


function ayagawaListings(): PublicListing[] {
  const town = lookupTown('ayagawa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'ayagawa', ayagawaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (AYAGAWA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isAyagawaOnsenPackRow(row) &&
      !isAyagawaExperiencePackRow(row) &&
      !isAyagawaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAyagawaSeeRows(pack);
  const onsen = pack.filter(isAyagawaOnsenPackRow);
  const experience = pack.filter(isAyagawaExperiencePackRow);
  const stay = pack.filter(isAyagawaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isAyagawaOnsenPackRow(row)
      ? 'onsen'
      : isAyagawaExperiencePackRow(row)
        ? 'experience'
        : isAyagawaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'ayagawa', kind, ayagawaSightPhoto(row.name_ja)));
  }
  return out;
}

function tadotsuListings(): PublicListing[] {
  const town = lookupTown('tadotsu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tadotsu', tadotsuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TADOTSU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTadotsuOnsenPackRow(row) &&
      !isTadotsuExperiencePackRow(row) &&
      !isTadotsuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTadotsuSeeRows(pack);
  const onsen = pack.filter(isTadotsuOnsenPackRow);
  const experience = pack.filter(isTadotsuExperiencePackRow);
  const stay = pack.filter(isTadotsuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTadotsuOnsenPackRow(row)
      ? 'onsen'
      : isTadotsuExperiencePackRow(row)
        ? 'experience'
        : isTadotsuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tadotsu', kind, tadotsuSightPhoto(row.name_ja)));
  }
  return out;
}

function mannoListings(): PublicListing[] {
  const town = lookupTown('manno')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'manno', mannoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MANNO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMannoOnsenPackRow(row) &&
      !isMannoExperiencePackRow(row) &&
      !isMannoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMannoSeeRows(pack);
  const onsen = pack.filter(isMannoOnsenPackRow);
  const experience = pack.filter(isMannoExperiencePackRow);
  const stay = pack.filter(isMannoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMannoOnsenPackRow(row)
      ? 'onsen'
      : isMannoExperiencePackRow(row)
        ? 'experience'
        : isMannoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'manno', kind, mannoSightPhoto(row.name_ja)));
  }
  return out;
}












function tosashimizuListings(): PublicListing[] {
  const town = lookupTown('tosashimizu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tosashimizu', tosashimizuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TOSASHIMIZU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTosashimizuOnsenPackRow(row) &&
      !isTosashimizuExperiencePackRow(row) &&
      !isTosashimizuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTosashimizuSeeRows(pack);
  const onsen = pack.filter(isTosashimizuOnsenPackRow);
  const experience = pack.filter(isTosashimizuExperiencePackRow);
  const stay = pack.filter(isTosashimizuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTosashimizuOnsenPackRow(row)
      ? 'onsen'
      : isTosashimizuExperiencePackRow(row)
        ? 'experience'
        : isTosashimizuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tosashimizu', kind, tosashimizuSightPhoto(row.name_ja)));
  }
  return out;
}

function sukumoListings(): PublicListing[] {
  const town = lookupTown('sukumo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'sukumo', sukumoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SUKUMO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSukumoOnsenPackRow(row) &&
      !isSukumoExperiencePackRow(row) &&
      !isSukumoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSukumoSeeRows(pack);
  const onsen = pack.filter(isSukumoOnsenPackRow);
  const experience = pack.filter(isSukumoExperiencePackRow);
  const stay = pack.filter(isSukumoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isSukumoOnsenPackRow(row)
      ? 'onsen'
      : isSukumoExperiencePackRow(row)
        ? 'experience'
        : isSukumoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'sukumo', kind, sukumoSightPhoto(row.name_ja)));
  }
  return out;
}





function geiseiListings(): PublicListing[] {
  const town = lookupTown('geisei')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'geisei', geiseiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (GEISEI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isGeiseiOnsenPackRow(row) &&
      !isGeiseiExperiencePackRow(row) &&
      !isGeiseiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankGeiseiSeeRows(pack);
  const onsen = pack.filter(isGeiseiOnsenPackRow);
  const experience = pack.filter(isGeiseiExperiencePackRow);
  const stay = pack.filter(isGeiseiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isGeiseiOnsenPackRow(row)
      ? 'onsen'
      : isGeiseiExperiencePackRow(row)
        ? 'experience'
        : isGeiseiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'geisei', kind, geiseiSightPhoto(row.name_ja)));
  }
  return out;
}


function kitagawaListings(): PublicListing[] {
  const town = lookupTown('kitagawa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kitagawa', kitagawaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KITAGAWA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKitagawaOnsenPackRow(row) &&
      !isKitagawaExperiencePackRow(row) &&
      !isKitagawaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKitagawaSeeRows(pack);
  const onsen = pack.filter(isKitagawaOnsenPackRow);
  const experience = pack.filter(isKitagawaExperiencePackRow);
  const stay = pack.filter(isKitagawaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKitagawaOnsenPackRow(row)
      ? 'onsen'
      : isKitagawaExperiencePackRow(row)
        ? 'experience'
        : isKitagawaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kitagawa', kind, kitagawaSightPhoto(row.name_ja)));
  }
  return out;
}

function motoyamaListings(): PublicListing[] {
  const town = lookupTown('motoyama')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'motoyama', motoyamaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MOTOYAMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMotoyamaOnsenPackRow(row) &&
      !isMotoyamaExperiencePackRow(row) &&
      !isMotoyamaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMotoyamaSeeRows(pack);
  const onsen = pack.filter(isMotoyamaOnsenPackRow);
  const experience = pack.filter(isMotoyamaExperiencePackRow);
  const stay = pack.filter(isMotoyamaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMotoyamaOnsenPackRow(row)
      ? 'onsen'
      : isMotoyamaExperiencePackRow(row)
        ? 'experience'
        : isMotoyamaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'motoyama', kind, motoyamaSightPhoto(row.name_ja)));
  }
  return out;
}

function otoyoListings(): PublicListing[] {
  const town = lookupTown('otoyo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'otoyo', otoyoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (OTOYO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isOtoyoOnsenPackRow(row) &&
      !isOtoyoExperiencePackRow(row) &&
      !isOtoyoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankOtoyoSeeRows(pack);
  const onsen = pack.filter(isOtoyoOnsenPackRow);
  const experience = pack.filter(isOtoyoExperiencePackRow);
  const stay = pack.filter(isOtoyoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isOtoyoOnsenPackRow(row)
      ? 'onsen'
      : isOtoyoExperiencePackRow(row)
        ? 'experience'
        : isOtoyoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'otoyo', kind, otoyoSightPhoto(row.name_ja)));
  }
  return out;
}


function tosachoListings(): PublicListing[] {
  const town = lookupTown('tosacho')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tosacho', tosachoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TOSACHO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTosachoOnsenPackRow(row) &&
      !isTosachoExperiencePackRow(row) &&
      !isTosachoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTosachoSeeRows(pack);
  const onsen = pack.filter(isTosachoOnsenPackRow);
  const experience = pack.filter(isTosachoExperiencePackRow);
  const stay = pack.filter(isTosachoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTosachoOnsenPackRow(row)
      ? 'onsen'
      : isTosachoExperiencePackRow(row)
        ? 'experience'
        : isTosachoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tosacho', kind, tosachoSightPhoto(row.name_ja)));
  }
  return out;
}


function okawaListings(): PublicListing[] {
  const town = lookupTown('okawa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'okawa', okawaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (OKAWA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isOkawaOnsenPackRow(row) &&
      !isOkawaExperiencePackRow(row) &&
      !isOkawaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankOkawaSeeRows(pack);
  const onsen = pack.filter(isOkawaOnsenPackRow);
  const experience = pack.filter(isOkawaExperiencePackRow);
  const stay = pack.filter(isOkawaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isOkawaOnsenPackRow(row)
      ? 'onsen'
      : isOkawaExperiencePackRow(row)
        ? 'experience'
        : isOkawaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'okawa', kind, okawaSightPhoto(row.name_ja)));
  }
  return out;
}


function niyodogawaListings(): PublicListing[] {
  const town = lookupTown('niyodogawa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'niyodogawa', niyodogawaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NIYODOGAWA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNiyodogawaOnsenPackRow(row) &&
      !isNiyodogawaExperiencePackRow(row) &&
      !isNiyodogawaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNiyodogawaSeeRows(pack);
  const onsen = pack.filter(isNiyodogawaOnsenPackRow);
  const experience = pack.filter(isNiyodogawaExperiencePackRow);
  const stay = pack.filter(isNiyodogawaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNiyodogawaOnsenPackRow(row)
      ? 'onsen'
      : isNiyodogawaExperiencePackRow(row)
        ? 'experience'
        : isNiyodogawaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'niyodogawa', kind, niyodogawaSightPhoto(row.name_ja)));
  }
  return out;
}


function ochiListings(): PublicListing[] {
  const town = lookupTown('ochi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'ochi', ochiSightPhoto(row.name_ja))
  );
  const pack = town.rows.filter((row) => {
    if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
    if (OCHI_DINING_NAME_SET.has(row.name_ja)) return false;
    return (
      !isOchiOnsenPackRow(row) &&
      !isOchiExperiencePackRow(row) &&
      !isOchiStayPackRow(row) &&
      Boolean(ochiSightPhoto(row.name_ja))
    );
  });
  const ranked = rankOchiSeeRows(pack);
  const onsen = pack.filter(isOchiOnsenPackRow);
  const experience = pack.filter(isOchiExperiencePackRow);
  const stay = pack.filter(isOchiStayPackRow);
  for (const row of [...onsen, ...experience, ...stay, ...ranked]) {
    const kind: ListingKind = isOchiOnsenPackRow(row)
      ? 'onsen'
      : isOchiExperiencePackRow(row)
        ? 'experience'
        : isOchiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'ochi', kind, ochiSightPhoto(row.name_ja)));
  }
  return out;
}

function yusuharaListings(): PublicListing[] {
  const town = lookupTown('yusuhara')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'yusuhara', yusuharaSightPhoto(row.name_ja))
  );
  const pack = town.rows.filter((row) => {
    if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
    if (YUSUHARA_DINING_NAME_SET.has(row.name_ja)) return false;
    return (
      !isYusuharaOnsenPackRow(row) &&
      !isYusuharaExperiencePackRow(row) &&
      !isYusuharaStayPackRow(row) &&
      Boolean(yusuharaSightPhoto(row.name_ja))
    );
  });
  const ranked = rankYusuharaSeeRows(pack);
  const onsen = pack.filter(isYusuharaOnsenPackRow);
  const experience = pack.filter(isYusuharaExperiencePackRow);
  const stay = pack.filter(isYusuharaStayPackRow);
  for (const row of [...onsen, ...experience, ...stay, ...ranked]) {
    const kind: ListingKind = isYusuharaOnsenPackRow(row)
      ? 'onsen'
      : isYusuharaExperiencePackRow(row)
        ? 'experience'
        : isYusuharaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'yusuhara', kind, yusuharaSightPhoto(row.name_ja)));
  }
  return out;
}

function hidakaListings(): PublicListing[] {
  const town = lookupTown('hidaka')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'hidaka', hidakaSightPhoto(row.name_ja))
  );
  const pack = town.rows.filter((row) => {
    if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
    if (HIDAKA_DINING_NAME_SET.has(row.name_ja)) return false;
    return (
      !isHidakaOnsenPackRow(row) &&
      !isHidakaExperiencePackRow(row) &&
      !isHidakaStayPackRow(row) &&
      Boolean(hidakaSightPhoto(row.name_ja))
    );
  });
  const ranked = rankHidakaSeeRows(pack);
  const onsen = pack.filter(isHidakaOnsenPackRow);
  const experience = pack.filter(isHidakaExperiencePackRow);
  const stay = pack.filter(isHidakaStayPackRow);
  for (const row of [...onsen, ...experience, ...stay, ...ranked]) {
    const kind: ListingKind = isHidakaOnsenPackRow(row)
      ? 'onsen'
      : isHidakaExperiencePackRow(row)
        ? 'experience'
        : isHidakaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'hidaka', kind, hidakaSightPhoto(row.name_ja)));
  }
  return out;
}




function miharaListings(): PublicListing[] {
  const town = lookupTown('mihara')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'mihara', miharaSightPhoto(row.name_ja))
  );
  const pack = town.rows.filter((row) => {
    if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
    if (MIHARA_DINING_NAME_SET.has(row.name_ja)) return false;
    return (
      !isMiharaOnsenPackRow(row) &&
      !isMiharaExperiencePackRow(row) &&
      !isMiharaStayPackRow(row) &&
      Boolean(miharaSightPhoto(row.name_ja))
    );
  });
  const ranked = rankMiharaSeeRows(pack);
  const onsen = pack.filter(isMiharaOnsenPackRow);
  const experience = pack.filter(isMiharaExperiencePackRow);
  const stay = pack.filter(isMiharaStayPackRow);
  for (const row of [...onsen, ...experience, ...stay, ...ranked]) {
    const kind: ListingKind = isMiharaOnsenPackRow(row)
      ? 'onsen'
      : isMiharaExperiencePackRow(row)
        ? 'experience'
        : isMiharaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'mihara', kind, miharaSightPhoto(row.name_ja)));
  }
  return out;
}

function otsukiListings(): PublicListing[] {
  const town = lookupTown('otsuki')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'otsuki', otsukiSightPhoto(row.name_ja))
  );
  const pack = town.rows.filter((row) => {
    if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
    if (OTSUKI_DINING_NAME_SET.has(row.name_ja)) return false;
    return (
      !isOtsukiOnsenPackRow(row) &&
      !isOtsukiExperiencePackRow(row) &&
      !isOtsukiStayPackRow(row) &&
      Boolean(otsukiSightPhoto(row.name_ja))
    );
  });
  const ranked = rankOtsukiSeeRows(pack);
  const onsen = pack.filter(isOtsukiOnsenPackRow);
  const experience = pack.filter(isOtsukiExperiencePackRow);
  const stay = pack.filter(isOtsukiStayPackRow);
  for (const row of [...onsen, ...experience, ...stay, ...ranked]) {
    const kind: ListingKind = isOtsukiOnsenPackRow(row)
      ? 'onsen'
      : isOtsukiExperiencePackRow(row)
        ? 'experience'
        : isOtsukiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'otsuki', kind, otsukiSightPhoto(row.name_ja)));
  }
  return out;
}

function shimantochoListings(): PublicListing[] {
  const town = lookupTown('shimantocho')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'shimantocho', shimantochoSightPhoto(row.name_ja))
  );
  const pack = town.rows.filter((row) => {
    if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
    if (SHIMANTOCHO_DINING_NAME_SET.has(row.name_ja)) return false;
    return (
      !isShimantochoOnsenPackRow(row) &&
      !isShimantochoExperiencePackRow(row) &&
      !isShimantochoStayPackRow(row) &&
      Boolean(shimantochoSightPhoto(row.name_ja))
    );
  });
  const ranked = rankShimantochoSeeRows(pack);
  const onsen = pack.filter(isShimantochoOnsenPackRow);
  const experience = pack.filter(isShimantochoExperiencePackRow);
  const stay = pack.filter(isShimantochoStayPackRow);
  for (const row of [...onsen, ...experience, ...stay, ...ranked]) {
    const kind: ListingKind = isShimantochoOnsenPackRow(row)
      ? 'onsen'
      : isShimantochoExperiencePackRow(row)
        ? 'experience'
        : isShimantochoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'shimantocho', kind, shimantochoSightPhoto(row.name_ja)));
  }
  return out;
}

function tsunoListings(): PublicListing[] {
  const town = lookupTown('tsuno')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tsuno', tsunoSightPhoto(row.name_ja))
  );
  const pack = town.rows.filter((row) => {
    if (row.category !== 'tourism' && row.category !== 'cultural_property') return false;
    if (TSUNO_DINING_NAME_SET.has(row.name_ja)) return false;
    return (
      !isTsunoOnsenPackRow(row) &&
      !isTsunoExperiencePackRow(row) &&
      !isTsunoStayPackRow(row) &&
      Boolean(tsunoSightPhoto(row.name_ja))
    );
  });
  const ranked = rankTsunoSeeRows(pack);
  const onsen = pack.filter(isTsunoOnsenPackRow);
  const experience = pack.filter(isTsunoExperiencePackRow);
  const stay = pack.filter(isTsunoStayPackRow);
  for (const row of [...onsen, ...experience, ...stay, ...ranked]) {
    const kind: ListingKind = isTsunoOnsenPackRow(row)
      ? 'onsen'
      : isTsunoExperiencePackRow(row)
        ? 'experience'
        : isTsunoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tsuno', kind, tsunoSightPhoto(row.name_ja)));
  }
  return out;
}




function nakatosaListings(): PublicListing[] {
  const town = lookupTown('nakatosa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'nakatosa', nakatosaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NAKATOSA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNakatosaOnsenPackRow(row) &&
      !isNakatosaExperiencePackRow(row) &&
      !isNakatosaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNakatosaSeeRows(pack);
  const onsen = pack.filter(isNakatosaOnsenPackRow);
  const experience = pack.filter(isNakatosaExperiencePackRow);
  const stay = pack.filter(isNakatosaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNakatosaOnsenPackRow(row)
      ? 'onsen'
      : isNakatosaExperiencePackRow(row)
        ? 'experience'
        : isNakatosaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'nakatosa', kind, nakatosaSightPhoto(row.name_ja)));
  }
  return out;
}





function umajiListings(): PublicListing[] {
  const town = lookupTown('umaji')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'umaji', umajiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (UMAJI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isUmajiOnsenPackRow(row) &&
      !isUmajiExperiencePackRow(row) &&
      !isUmajiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankUmajiSeeRows(pack);
  const onsen = pack.filter(isUmajiOnsenPackRow);
  const experience = pack.filter(isUmajiExperiencePackRow);
  const stay = pack.filter(isUmajiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isUmajiOnsenPackRow(row)
      ? 'onsen'
      : isUmajiExperiencePackRow(row)
        ? 'experience'
        : isUmajiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'umaji', kind, umajiSightPhoto(row.name_ja)));
  }
  return out;
}

function yasudaListings(): PublicListing[] {
  const town = lookupTown('yasuda')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'yasuda', yasudaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (YASUDA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isYasudaOnsenPackRow(row) &&
      !isYasudaExperiencePackRow(row) &&
      !isYasudaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankYasudaSeeRows(pack);
  const onsen = pack.filter(isYasudaOnsenPackRow);
  const experience = pack.filter(isYasudaExperiencePackRow);
  const stay = pack.filter(isYasudaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isYasudaOnsenPackRow(row)
      ? 'onsen'
      : isYasudaExperiencePackRow(row)
        ? 'experience'
        : isYasudaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'yasuda', kind, yasudaSightPhoto(row.name_ja)));
  }
  return out;
}

function nahariListings(): PublicListing[] {
  const town = lookupTown('nahari')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'nahari', nahariSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NAHARI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNahariOnsenPackRow(row) &&
      !isNahariExperiencePackRow(row) &&
      !isNahariStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNahariSeeRows(pack);
  const onsen = pack.filter(isNahariOnsenPackRow);
  const experience = pack.filter(isNahariExperiencePackRow);
  const stay = pack.filter(isNahariStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNahariOnsenPackRow(row)
      ? 'onsen'
      : isNahariExperiencePackRow(row)
        ? 'experience'
        : isNahariStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'nahari', kind, nahariSightPhoto(row.name_ja)));
  }
  return out;
}

function toyoListings(): PublicListing[] {
  const town = lookupTown('toyo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'toyo', toyoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TOYO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isToyoOnsenPackRow(row) &&
      !isToyoExperiencePackRow(row) &&
      !isToyoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankToyoSeeRows(pack);
  const onsen = pack.filter(isToyoOnsenPackRow);
  const experience = pack.filter(isToyoExperiencePackRow);
  const stay = pack.filter(isToyoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isToyoOnsenPackRow(row)
      ? 'onsen'
      : isToyoExperiencePackRow(row)
        ? 'experience'
        : isToyoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'toyo', kind, toyoSightPhoto(row.name_ja)));
  }
  return out;
}

function kuroshioListings(): PublicListing[] {
  const town = lookupTown('kuroshio')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kuroshio', kuroshioSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KUROSHIO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKuroshioOnsenPackRow(row) &&
      !isKuroshioExperiencePackRow(row) &&
      !isKuroshioStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKuroshioSeeRows(pack);
  const onsen = pack.filter(isKuroshioOnsenPackRow);
  const experience = pack.filter(isKuroshioExperiencePackRow);
  const stay = pack.filter(isKuroshioStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKuroshioOnsenPackRow(row)
      ? 'onsen'
      : isKuroshioExperiencePackRow(row)
        ? 'experience'
        : isKuroshioStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kuroshio', kind, kuroshioSightPhoto(row.name_ja)));
  }
  return out;
}

function shimantoListings(): PublicListing[] {
  const town = lookupTown('shimanto')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'shimanto', shimantoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SHIMANTO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isShimantoOnsenPackRow(row) &&
      !isShimantoExperiencePackRow(row) &&
      !isShimantoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankShimantoSeeRows(pack);
  const onsen = pack.filter(isShimantoOnsenPackRow);
  const experience = pack.filter(isShimantoExperiencePackRow);
  const stay = pack.filter(isShimantoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isShimantoOnsenPackRow(row)
      ? 'onsen'
      : isShimantoExperiencePackRow(row)
        ? 'experience'
        : isShimantoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'shimanto', kind, shimantoSightPhoto(row.name_ja)));
  }
  return out;
}

function susakiListings(): PublicListing[] {
  const town = lookupTown('susaki')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'susaki', susakiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SUSAKI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSusakiOnsenPackRow(row) &&
      !isSusakiExperiencePackRow(row) &&
      !isSusakiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSusakiSeeRows(pack);
  const onsen = pack.filter(isSusakiOnsenPackRow);
  const experience = pack.filter(isSusakiExperiencePackRow);
  const stay = pack.filter(isSusakiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isSusakiOnsenPackRow(row)
      ? 'onsen'
      : isSusakiExperiencePackRow(row)
        ? 'experience'
        : isSusakiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'susaki', kind, susakiSightPhoto(row.name_ja)));
  }
  return out;
}

function tosaListings(): PublicListing[] {
  const town = lookupTown('tosa')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tosa', tosaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TOSA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTosaOnsenPackRow(row) &&
      !isTosaExperiencePackRow(row) &&
      !isTosaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTosaSeeRows(pack);
  const onsen = pack.filter(isTosaOnsenPackRow);
  const experience = pack.filter(isTosaExperiencePackRow);
  const stay = pack.filter(isTosaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTosaOnsenPackRow(row)
      ? 'onsen'
      : isTosaExperiencePackRow(row)
        ? 'experience'
        : isTosaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tosa', kind, tosaSightPhoto(row.name_ja)));
  }
  return out;
}

function murotoListings(): PublicListing[] {
  const town = lookupTown('muroto')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'muroto', murotoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MUROTO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMurotoOnsenPackRow(row) &&
      !isMurotoExperiencePackRow(row) &&
      !isMurotoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMurotoSeeRows(pack);
  const onsen = pack.filter(isMurotoOnsenPackRow);
  const experience = pack.filter(isMurotoExperiencePackRow);
  const stay = pack.filter(isMurotoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMurotoOnsenPackRow(row)
      ? 'onsen'
      : isMurotoExperiencePackRow(row)
        ? 'experience'
        : isMurotoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'muroto', kind, murotoSightPhoto(row.name_ja)));
  }
  return out;
}

function akiListings(): PublicListing[] {
  const town = lookupTown('aki')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'aki', akiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (AKI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isAkiOnsenPackRow(row) &&
      !isAkiExperiencePackRow(row) &&
      !isAkiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAkiSeeRows(pack);
  const onsen = pack.filter(isAkiOnsenPackRow);
  const experience = pack.filter(isAkiExperiencePackRow);
  const stay = pack.filter(isAkiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isAkiOnsenPackRow(row)
      ? 'onsen'
      : isAkiExperiencePackRow(row)
        ? 'experience'
        : isAkiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'aki', kind, akiSightPhoto(row.name_ja)));
  }
  return out;
}

function inoListings(): PublicListing[] {
  const town = lookupTown('ino')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'ino', inoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (INO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isInoOnsenPackRow(row) &&
      !isInoExperiencePackRow(row) &&
      !isInoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankInoSeeRows(pack);
  const onsen = pack.filter(isInoOnsenPackRow);
  const experience = pack.filter(isInoExperiencePackRow);
  const stay = pack.filter(isInoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isInoOnsenPackRow(row)
      ? 'onsen'
      : isInoExperiencePackRow(row)
        ? 'experience'
        : isInoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'ino', kind, inoSightPhoto(row.name_ja)));
  }
  return out;
}

function kamiListings(): PublicListing[] {
  const town = lookupTown('kami')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kami', kamiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KAMI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKamiOnsenPackRow(row) &&
      !isKamiExperiencePackRow(row) &&
      !isKamiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKamiSeeRows(pack);
  const onsen = pack.filter(isKamiOnsenPackRow);
  const experience = pack.filter(isKamiExperiencePackRow);
  const stay = pack.filter(isKamiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKamiOnsenPackRow(row)
      ? 'onsen'
      : isKamiExperiencePackRow(row)
        ? 'experience'
        : isKamiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kami', kind, kamiSightPhoto(row.name_ja)));
  }
  return out;
}

function konanListings(): PublicListing[] {
  const town = lookupTown('konan')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'konan', konanSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KONAN_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKonanOnsenPackRow(row) &&
      !isKonanExperiencePackRow(row) &&
      !isKonanStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKonanSeeRows(pack);
  const onsen = pack.filter(isKonanOnsenPackRow);
  const experience = pack.filter(isKonanExperiencePackRow);
  const stay = pack.filter(isKonanStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKonanOnsenPackRow(row)
      ? 'onsen'
      : isKonanExperiencePackRow(row)
        ? 'experience'
        : isKonanStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'konan', kind, konanSightPhoto(row.name_ja)));
  }
  return out;
}

function nankokuListings(): PublicListing[] {
  const town = lookupTown('nankoku')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'nankoku', nankokuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NANKOKU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNankokuOnsenPackRow(row) &&
      !isNankokuExperiencePackRow(row) &&
      !isNankokuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNankokuSeeRows(pack);
  const onsen = pack.filter(isNankokuOnsenPackRow);
  const experience = pack.filter(isNankokuExperiencePackRow);
  const stay = pack.filter(isNankokuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNankokuOnsenPackRow(row)
      ? 'onsen'
      : isNankokuExperiencePackRow(row)
        ? 'experience'
        : isNankokuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'nankoku', kind, nankokuSightPhoto(row.name_ja)));
  }
  return out;
}

function kochiListings(): PublicListing[] {
  const town = lookupTown('kochi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kochi', kochiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KOCHI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKochiOnsenPackRow(row) &&
      !isKochiExperiencePackRow(row) &&
      !isKochiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKochiSeeRows(pack);
  const onsen = pack.filter(isKochiOnsenPackRow);
  const experience = pack.filter(isKochiExperiencePackRow);
  const stay = pack.filter(isKochiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKochiOnsenPackRow(row)
      ? 'onsen'
      : isKochiExperiencePackRow(row)
        ? 'experience'
        : isKochiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kochi', kind, kochiSightPhoto(row.name_ja)));
  }
  return out;
}




function uwajimaListings(): PublicListing[] {
  const town = lookupTown('uwajima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'uwajima', uwajimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (UWAJIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isUwajimaOnsenPackRow(row) &&
      !isUwajimaExperiencePackRow(row) &&
      !isUwajimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankUwajimaSeeRows(pack);
  const onsen = pack.filter(isUwajimaOnsenPackRow);
  const experience = pack.filter(isUwajimaExperiencePackRow);
  const stay = pack.filter(isUwajimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isUwajimaOnsenPackRow(row)
      ? 'onsen'
      : isUwajimaExperiencePackRow(row)
        ? 'experience'
        : isUwajimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'uwajima', kind, uwajimaSightPhoto(row.name_ja)));
  }
  return out;
}






function seiyoListings(): PublicListing[] {
  const town = lookupTown('seiyo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'seiyo', seiyoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SEIYO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSeiyoOnsenPackRow(row) &&
      !isSeiyoExperiencePackRow(row) &&
      !isSeiyoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSeiyoSeeRows(pack);
  const onsen = pack.filter(isSeiyoOnsenPackRow);
  const experience = pack.filter(isSeiyoExperiencePackRow);
  const stay = pack.filter(isSeiyoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isSeiyoOnsenPackRow(row)
      ? 'onsen'
      : isSeiyoExperiencePackRow(row)
        ? 'experience'
        : isSeiyoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'seiyo', kind, seiyoSightPhoto(row.name_ja)));
  }
  return out;
}



function kumakogenListings(): PublicListing[] {
  const town = lookupTown('kumakogen')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kumakogen', kumakogenSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KUMAKOGEN_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKumakogenOnsenPackRow(row) &&
      !isKumakogenExperiencePackRow(row) &&
      !isKumakogenStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKumakogenSeeRows(pack);
  const onsen = pack.filter(isKumakogenOnsenPackRow);
  const experience = pack.filter(isKumakogenExperiencePackRow);
  const stay = pack.filter(isKumakogenStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKumakogenOnsenPackRow(row)
      ? 'onsen'
      : isKumakogenExperiencePackRow(row)
        ? 'experience'
        : isKumakogenStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kumakogen', kind, kumakogenSightPhoto(row.name_ja)));
  }
  return out;
}


function masakiListings(): PublicListing[] {
  const town = lookupTown('masaki')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'masaki', masakiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MASAKI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMasakiOnsenPackRow(row) &&
      !isMasakiExperiencePackRow(row) &&
      !isMasakiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMasakiSeeRows(pack);
  const onsen = pack.filter(isMasakiOnsenPackRow);
  const experience = pack.filter(isMasakiExperiencePackRow);
  const stay = pack.filter(isMasakiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMasakiOnsenPackRow(row)
      ? 'onsen'
      : isMasakiExperiencePackRow(row)
        ? 'experience'
        : isMasakiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'masaki', kind, masakiSightPhoto(row.name_ja)));
  }
  return out;
}






function kihokuListings(): PublicListing[] {
  const town = lookupTown('kihoku')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kihoku', kihokuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KIHOKU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKihokuOnsenPackRow(row) &&
      !isKihokuExperiencePackRow(row) &&
      !isKihokuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKihokuSeeRows(pack);
  const onsen = pack.filter(isKihokuOnsenPackRow);
  const experience = pack.filter(isKihokuExperiencePackRow);
  const stay = pack.filter(isKihokuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKihokuOnsenPackRow(row)
      ? 'onsen'
      : isKihokuExperiencePackRow(row)
        ? 'experience'
        : isKihokuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kihoku', kind, kihokuSightPhoto(row.name_ja)));
  }
  return out;
}

function ainanListings(): PublicListing[] {
  const town = lookupTown('ainan')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'ainan', ainanSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (AINAN_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isAinanOnsenPackRow(row) &&
      !isAinanExperiencePackRow(row) &&
      !isAinanStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankAinanSeeRows(pack);
  const onsen = pack.filter(isAinanOnsenPackRow);
  const experience = pack.filter(isAinanExperiencePackRow);
  const stay = pack.filter(isAinanStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isAinanOnsenPackRow(row)
      ? 'onsen'
      : isAinanExperiencePackRow(row)
        ? 'experience'
        : isAinanStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'ainan', kind, ainanSightPhoto(row.name_ja)));
  }
  return out;
}

function hiroshimaListings(): PublicListing[] {
  const town = lookupTown('hiroshima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'hiroshima', hiroshimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (HIROSHIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isHiroshimaOnsenPackRow(row) &&
      !isHiroshimaExperiencePackRow(row) &&
      !isHiroshimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankHiroshimaSeeRows(pack);
  const onsen = pack.filter(isHiroshimaOnsenPackRow);
  const experience = pack.filter(isHiroshimaExperiencePackRow);
  const stay = pack.filter(isHiroshimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isHiroshimaOnsenPackRow(row)
      ? 'onsen'
      : isHiroshimaExperiencePackRow(row)
        ? 'experience'
        : isHiroshimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'hiroshima', kind, hiroshimaSightPhoto(row.name_ja)));
  }
  return out;
}

function kureListings(): PublicListing[] {
  const town = lookupTown('kure')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kure', kureSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KURE_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKureOnsenPackRow(row) &&
      !isKureExperiencePackRow(row) &&
      !isKureStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKureSeeRows(pack);
  const onsen = pack.filter(isKureOnsenPackRow);
  const experience = pack.filter(isKureExperiencePackRow);
  const stay = pack.filter(isKureStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKureOnsenPackRow(row)
      ? 'onsen'
      : isKureExperiencePackRow(row)
        ? 'experience'
        : isKureStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kure', kind, kureSightPhoto(row.name_ja)));
  }
  return out;
}



function miharashiListings(): PublicListing[] {
  const town = lookupTown('miharashi')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'miharashi', miharashiSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MIHARASHI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMiharashiOnsenPackRow(row) &&
      !isMiharashiExperiencePackRow(row) &&
      !isMiharashiStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMiharashiSeeRows(pack);
  const onsen = pack.filter(isMiharashiOnsenPackRow);
  const experience = pack.filter(isMiharashiExperiencePackRow);
  const stay = pack.filter(isMiharashiStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMiharashiOnsenPackRow(row)
      ? 'onsen'
      : isMiharashiExperiencePackRow(row)
        ? 'experience'
        : isMiharashiStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'miharashi', kind, miharashiSightPhoto(row.name_ja)));
  }
  return out;
}

function takeharaListings(): PublicListing[] {
  const town = lookupTown('takehara')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'takehara', takeharaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TAKEHARA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTakeharaOnsenPackRow(row) &&
      !isTakeharaExperiencePackRow(row) &&
      !isTakeharaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTakeharaSeeRows(pack);
  const onsen = pack.filter(isTakeharaOnsenPackRow);
  const experience = pack.filter(isTakeharaExperiencePackRow);
  const stay = pack.filter(isTakeharaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTakeharaOnsenPackRow(row)
      ? 'onsen'
      : isTakeharaExperiencePackRow(row)
        ? 'experience'
        : isTakeharaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'takehara', kind, takeharaSightPhoto(row.name_ja)));
  }
  return out;
}

function matsunoListings(): PublicListing[] {
  const town = lookupTown('matsuno')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'matsuno', matsunoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MATSUNO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMatsunoOnsenPackRow(row) &&
      !isMatsunoExperiencePackRow(row) &&
      !isMatsunoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMatsunoSeeRows(pack);
  const onsen = pack.filter(isMatsunoOnsenPackRow);
  const experience = pack.filter(isMatsunoExperiencePackRow);
  const stay = pack.filter(isMatsunoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMatsunoOnsenPackRow(row)
      ? 'onsen'
      : isMatsunoExperiencePackRow(row)
        ? 'experience'
        : isMatsunoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'matsuno', kind, matsunoSightPhoto(row.name_ja)));
  }
  return out;
}

function ikataListings(): PublicListing[] {
  const town = lookupTown('ikata')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'ikata', ikataSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (IKATA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isIkataOnsenPackRow(row) &&
      !isIkataExperiencePackRow(row) &&
      !isIkataStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankIkataSeeRows(pack);
  const onsen = pack.filter(isIkataOnsenPackRow);
  const experience = pack.filter(isIkataExperiencePackRow);
  const stay = pack.filter(isIkataStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isIkataOnsenPackRow(row)
      ? 'onsen'
      : isIkataExperiencePackRow(row)
        ? 'experience'
        : isIkataStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'ikata', kind, ikataSightPhoto(row.name_ja)));
  }
  return out;
}

function uchikoListings(): PublicListing[] {
  const town = lookupTown('uchiko')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'uchiko', uchikoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (UCHIKO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isUchikoOnsenPackRow(row) &&
      !isUchikoExperiencePackRow(row) &&
      !isUchikoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankUchikoSeeRows(pack);
  const onsen = pack.filter(isUchikoOnsenPackRow);
  const experience = pack.filter(isUchikoExperiencePackRow);
  const stay = pack.filter(isUchikoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isUchikoOnsenPackRow(row)
      ? 'onsen'
      : isUchikoExperiencePackRow(row)
        ? 'experience'
        : isUchikoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'uchiko', kind, uchikoSightPhoto(row.name_ja)));
  }
  return out;
}

function tobeListings(): PublicListing[] {
  const town = lookupTown('tobe')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'tobe', tobeSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TOBE_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isTobeOnsenPackRow(row) &&
      !isTobeExperiencePackRow(row) &&
      !isTobeStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankTobeSeeRows(pack);
  const onsen = pack.filter(isTobeOnsenPackRow);
  const experience = pack.filter(isTobeExperiencePackRow);
  const stay = pack.filter(isTobeStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isTobeOnsenPackRow(row)
      ? 'onsen'
      : isTobeExperiencePackRow(row)
        ? 'experience'
        : isTobeStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'tobe', kind, tobeSightPhoto(row.name_ja)));
  }
  return out;
}


function kamijimaListings(): PublicListing[] {
  const town = lookupTown('kamijima')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'kamijima', kamijimaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (KAMIJIMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isKamijimaOnsenPackRow(row) &&
      !isKamijimaExperiencePackRow(row) &&
      !isKamijimaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankKamijimaSeeRows(pack);
  const onsen = pack.filter(isKamijimaOnsenPackRow);
  const experience = pack.filter(isKamijimaExperiencePackRow);
  const stay = pack.filter(isKamijimaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isKamijimaOnsenPackRow(row)
      ? 'onsen'
      : isKamijimaExperiencePackRow(row)
        ? 'experience'
        : isKamijimaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'kamijima', kind, kamijimaSightPhoto(row.name_ja)));
  }
  return out;
}

function toonListings(): PublicListing[] {
  const town = lookupTown('toon')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'toon', toonSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (TOON_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isToonOnsenPackRow(row) &&
      !isToonExperiencePackRow(row) &&
      !isToonStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankToonSeeRows(pack);
  const onsen = pack.filter(isToonOnsenPackRow);
  const experience = pack.filter(isToonExperiencePackRow);
  const stay = pack.filter(isToonStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isToonOnsenPackRow(row)
      ? 'onsen'
      : isToonExperiencePackRow(row)
        ? 'experience'
        : isToonStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'toon', kind, toonSightPhoto(row.name_ja)));
  }
  return out;
}


function shikokuchuoListings(): PublicListing[] {
  const town = lookupTown('shikokuchuo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'shikokuchuo', shikokuchuoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SHIKOKUCHUO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isShikokuchuoOnsenPackRow(row) &&
      !isShikokuchuoExperiencePackRow(row) &&
      !isShikokuchuoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankShikokuchuoSeeRows(pack);
  const onsen = pack.filter(isShikokuchuoOnsenPackRow);
  const experience = pack.filter(isShikokuchuoExperiencePackRow);
  const stay = pack.filter(isShikokuchuoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isShikokuchuoOnsenPackRow(row)
      ? 'onsen'
      : isShikokuchuoExperiencePackRow(row)
        ? 'experience'
        : isShikokuchuoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'shikokuchuo', kind, shikokuchuoSightPhoto(row.name_ja)));
  }
  return out;
}

function iyoListings(): PublicListing[] {
  const town = lookupTown('iyo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'iyo', iyoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (IYO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isIyoOnsenPackRow(row) &&
      !isIyoExperiencePackRow(row) &&
      !isIyoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankIyoSeeRows(pack);
  const onsen = pack.filter(isIyoOnsenPackRow);
  const experience = pack.filter(isIyoExperiencePackRow);
  const stay = pack.filter(isIyoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isIyoOnsenPackRow(row)
      ? 'onsen'
      : isIyoExperiencePackRow(row)
        ? 'experience'
        : isIyoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'iyo', kind, iyoSightPhoto(row.name_ja)));
  }
  return out;
}

function ozuListings(): PublicListing[] {
  const town = lookupTown('ozu')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'ozu', ozuSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (OZU_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isOzuOnsenPackRow(row) &&
      !isOzuExperiencePackRow(row) &&
      !isOzuStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankOzuSeeRows(pack);
  const onsen = pack.filter(isOzuOnsenPackRow);
  const experience = pack.filter(isOzuExperiencePackRow);
  const stay = pack.filter(isOzuStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isOzuOnsenPackRow(row)
      ? 'onsen'
      : isOzuExperiencePackRow(row)
        ? 'experience'
        : isOzuStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'ozu', kind, ozuSightPhoto(row.name_ja)));
  }
  return out;
}

function saijoListings(): PublicListing[] {
  const town = lookupTown('saijo')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'saijo', saijoSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (SAIJO_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isSaijoOnsenPackRow(row) &&
      !isSaijoExperiencePackRow(row) &&
      !isSaijoStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankSaijoSeeRows(pack);
  const onsen = pack.filter(isSaijoOnsenPackRow);
  const experience = pack.filter(isSaijoExperiencePackRow);
  const stay = pack.filter(isSaijoStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isSaijoOnsenPackRow(row)
      ? 'onsen'
      : isSaijoExperiencePackRow(row)
        ? 'experience'
        : isSaijoStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'saijo', kind, saijoSightPhoto(row.name_ja)));
  }
  return out;
}

function niihamaListings(): PublicListing[] {
  const town = lookupTown('niihama')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'niihama', niihamaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (NIIHAMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isNiihamaOnsenPackRow(row) &&
      !isNiihamaExperiencePackRow(row) &&
      !isNiihamaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankNiihamaSeeRows(pack);
  const onsen = pack.filter(isNiihamaOnsenPackRow);
  const experience = pack.filter(isNiihamaExperiencePackRow);
  const stay = pack.filter(isNiihamaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isNiihamaOnsenPackRow(row)
      ? 'onsen'
      : isNiihamaExperiencePackRow(row)
        ? 'experience'
        : isNiihamaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'niihama', kind, niihamaSightPhoto(row.name_ja)));
  }
  return out;
}

function yawatahamaListings(): PublicListing[] {
  const town = lookupTown('yawatahama')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'yawatahama', yawatahamaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (YAWATAHAMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isYawatahamaOnsenPackRow(row) &&
      !isYawatahamaExperiencePackRow(row) &&
      !isYawatahamaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankYawatahamaSeeRows(pack);
  const onsen = pack.filter(isYawatahamaOnsenPackRow);
  const experience = pack.filter(isYawatahamaExperiencePackRow);
  const stay = pack.filter(isYawatahamaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isYawatahamaOnsenPackRow(row)
      ? 'onsen'
      : isYawatahamaExperiencePackRow(row)
        ? 'experience'
        : isYawatahamaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'yawatahama', kind, yawatahamaSightPhoto(row.name_ja)));
  }
  return out;
}

function imabariListings(): PublicListing[] {
  const town = lookupTown('imabari')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'imabari', imabariSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (IMABARI_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isImabariOnsenPackRow(row) &&
      !isImabariExperiencePackRow(row) &&
      !isImabariStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankImabariSeeRows(pack);
  const onsen = pack.filter(isImabariOnsenPackRow);
  const experience = pack.filter(isImabariExperiencePackRow);
  const stay = pack.filter(isImabariStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isImabariOnsenPackRow(row)
      ? 'onsen'
      : isImabariExperiencePackRow(row)
        ? 'experience'
        : isImabariStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'imabari', kind, imabariSightPhoto(row.name_ja)));
  }
  return out;
}

function matsuyamaListings(): PublicListing[] {
  const town = lookupTown('matsuyama')!;
  const out: PublicListing[] = town.travelAll.map((row) =>
    fromTravel(row, 'matsuyama', matsuyamaSightPhoto(row.name_ja))
  );
  const seen = new Set<string>();
  const pack: FacilityRow[] = [];
  for (const row of town.rows) {
    if (MATSUYAMA_DINING_NAME_SET.has(row.name_ja)) continue;
    if (
      !isMatsuyamaOnsenPackRow(row) &&
      !isMatsuyamaExperiencePackRow(row) &&
      !isMatsuyamaStayPackRow(row) &&
      !isSightsCategory(row.category)
    ) {
      continue;
    }
    const key = packDedupeKey(row);
    if (seen.has(key)) continue;
    seen.add(key);
    pack.push(row);
  }
  const ranked = rankMatsuyamaSeeRows(pack);
  const onsen = pack.filter(isMatsuyamaOnsenPackRow);
  const experience = pack.filter(isMatsuyamaExperiencePackRow);
  const stay = pack.filter(isMatsuyamaStayPackRow);
  for (const row of [...stay, ...onsen, ...experience, ...ranked]) {
    const kind: ListingKind = isMatsuyamaOnsenPackRow(row)
      ? 'onsen'
      : isMatsuyamaExperiencePackRow(row)
        ? 'experience'
        : isMatsuyamaStayPackRow(row)
          ? 'stay'
          : 'sights';
    out.push(fromPack(row, 'matsuyama', kind, matsuyamaSightPhoto(row.name_ja)));
  }
  return out;
}

const CACHE: Record<ReadySlug, PublicListing[]> = {
  mima: mimaListings(),
  tsurugi: tsurugiListings(),
  yoshinogawa: yoshinogawaListings(),
  miyoshi: miyoshiListings(),
  tokushima: tokushimaCityListings(),
  awa: awaListings(),
  higashimiyoshi: higashimiyoshiListings(),
  kitajima: kitajimaListings(),
  naruto: narutoListings(),
  matsushige: matsushigeListings(),
  ishii: ishiiListings(),
  itano: itanoListings(),
  kamiita: kamiitaListings(),
  kamiyama: kamiyamaListings(),
  katsuura: katsuuraListings(),
  kamikatsu: kamikatsuListings(),
  sanagochi: sanagochiListings(),
  naka: nakaListings(),
  mugi: mugiListings(),
  minami: minamiListings(),
  aizumi: aizumiListings(),
  kaiyo: kaiyoListings(),
  komatsushima: komatsushimaListings(),
  anan: ananListings(),
  takamatsu: takamatsuListings(),
  kotohira: kotohiraListings(),
  marugame: marugameListings(),
  kanonji: kanonjiListings(),
  sakaide: sakaideListings(),
  naoshima: naoshimaListings(),
  shodoshima: shodoshimaListings(),
  zentsuji: zentsujiListings(),
  mitoyo: mitoyoListings(),
  utazu: utazuListings(),
  tonosho: tonoshoListings(),
  sanuki: sanukiListings(),
  higashikagawa: higashikagawaListings(),
  miki: mikiListings(),
  ayagawa: ayagawaListings(),
  tadotsu: tadotsuListings(),
  manno: mannoListings(),
  kochi: kochiListings(),
  nankoku: nankokuListings(),
  konan: konanListings(),
  kami: kamiListings(),
  ino: inoListings(),
  aki: akiListings(),
  muroto: murotoListings(),
  tosa: tosaListings(),
  susaki: susakiListings(),
  shimanto: shimantoListings(),
  tosashimizu: tosashimizuListings(),
  sukumo: sukumoListings(),
  kuroshio: kuroshioListings(),
  toyo: toyoListings(),
  nahari: nahariListings(),
  yasuda: yasudaListings(),
  geisei: geiseiListings(),
  kitagawa: kitagawaListings(),
  umaji: umajiListings(),
  motoyama: motoyamaListings(),
  otoyo: otoyoListings(),
  tosacho: tosachoListings(),
  okawa: okawaListings(),
  niyodogawa: niyodogawaListings(),
  nakatosa: nakatosaListings(),
  ochi: ochiListings(),
  yusuhara: yusuharaListings(),
  hidaka: hidakaListings(),
  tsuno: tsunoListings(),
  shimantocho: shimantochoListings(),
  otsuki: otsukiListings(),
  mihara: miharaListings(),
  matsuyama: matsuyamaListings(),
  imabari: imabariListings(),
  uwajima: uwajimaListings(),
  yawatahama: yawatahamaListings(),
  niihama: niihamaListings(),
  saijo: saijoListings(),
  ozu: ozuListings(),
  iyo: iyoListings(),
  shikokuchuo: shikokuchuoListings(),
  seiyo: seiyoListings(),
  toon: toonListings(),
  kamijima: kamijimaListings(),
  kumakogen: kumakogenListings(),
  masaki: masakiListings(),
  tobe: tobeListings(),
  uchiko: uchikoListings(),
  ikata: ikataListings(),
  matsuno: matsunoListings(),
  kihoku: kihokuListings(),
  ainan: ainanListings(),
  hiroshima: hiroshimaListings(),
  kure: kureListings(),
  takehara: takeharaListings(),
  miharashi: miharashiListings()
};

export function publicListings(slug: ReadySlug = 'mima'): PublicListing[] {
  return CACHE[slug];
}

export function allPublicListings(): PublicListing[] {
  return [...CACHE.mima, ...CACHE.tsurugi, ...CACHE.yoshinogawa, ...CACHE.miyoshi, ...CACHE.tokushima, ...CACHE.awa, ...CACHE.higashimiyoshi, ...CACHE.kitajima, ...CACHE.naruto, ...CACHE.matsushige, ...CACHE.ishii, ...CACHE.itano, ...CACHE.kamiita, ...CACHE.kamiyama, ...CACHE.katsuura, ...CACHE.kamikatsu, ...CACHE.sanagochi, ...CACHE.naka, ...CACHE.mugi, ...CACHE.minami, ...CACHE.aizumi, ...CACHE.kaiyo, ...CACHE.komatsushima, ...CACHE.anan, ...CACHE.takamatsu, ...CACHE.kotohira, ...CACHE.marugame, ...CACHE.kanonji, ...CACHE.sakaide, ...CACHE.naoshima, ...CACHE.shodoshima, ...CACHE.zentsuji, ...CACHE.mitoyo, ...CACHE.utazu, ...CACHE.tonosho, ...CACHE.sanuki, ...CACHE.higashikagawa, ...CACHE.miki, ...CACHE.ayagawa, ...CACHE.tadotsu, ...CACHE.manno, ...CACHE.kochi, ...CACHE.nankoku, ...CACHE.konan, ...CACHE.kami, ...CACHE.ino, ...CACHE.aki, ...CACHE.muroto, ...CACHE.tosa, ...CACHE.susaki, ...CACHE.shimanto, ...CACHE.tosashimizu, ...CACHE.sukumo, ...CACHE.kuroshio, ...CACHE.toyo, ...CACHE.nahari, ...CACHE.yasuda, ...CACHE.geisei, ...CACHE.kitagawa, ...CACHE.umaji, ...CACHE.motoyama, ...CACHE.otoyo, ...CACHE.tosacho, ...CACHE.okawa, ...CACHE.niyodogawa, ...CACHE.nakatosa, ...CACHE.ochi, ...CACHE.yusuhara, ...CACHE.hidaka, ...CACHE.tsuno, ...CACHE.shimantocho, ...CACHE.otsuki, ...CACHE.mihara, ...CACHE.matsuyama, ...CACHE.imabari, ...CACHE.uwajima, ...CACHE.yawatahama, ...CACHE.niihama, ...CACHE.saijo, ...CACHE.ozu, ...CACHE.iyo, ...CACHE.shikokuchuo, ...CACHE.seiyo, ...CACHE.toon, ...CACHE.kamijima, ...CACHE.kumakogen, ...CACHE.masaki, ...CACHE.tobe, ...CACHE.uchiko, ...CACHE.ikata, ...CACHE.matsuno, ...CACHE.kihoku, ...CACHE.ainan, ...CACHE.hiroshima, ...CACHE.kure, ...CACHE.takehara, ...CACHE.miharashi];
}

export function liveListings(slug?: ReadySlug): PublicListing[] {
  const rows = slug ? publicListings(slug) : allPublicListings();
  return rows.filter((row) => row.photo !== null);
}

export function listingById(id: string, slug?: ReadySlug): PublicListing | undefined {
  const rows = slug ? publicListings(slug) : allPublicListings();
  return rows.find((row) => row.id === id);
}

export function listingRest(id: string, slug: ReadySlug = 'mima'): string {
  const pref = prefSlugForReady(slug);
  return `${pref}/${slug}/p/${id}`;
}

export function schemaType(kind: ListingKind, nameJa: string): string {
  if (kind === 'dining') return 'Restaurant';
  if (kind === 'stay') {
    return nameJa.includes('ホテル') ? 'Hotel' : 'LodgingBusiness';
  }
  if (kind === 'shopping') return 'Store';
  if (kind === 'commerce') return 'LocalBusiness';
  return 'TouristAttraction';
}

export function featuredListings(slug: ReadySlug = 'mima'): PublicListing[] {
  const all = liveListings(slug);
  const pinKinds: ListingKind[] = [
    'stay',
    'dining',
    'onsen',
    'experience',
    'shopping',
    'commerce'
  ];
  const pinned = pinKinds.flatMap((kind) => all.filter((row) => row.kind === kind));
  const sights = all.filter((row) => row.kind === 'sights').slice(0, 10);
  const seen = new Set<string>();
  const out: PublicListing[] = [];
  for (const row of [...pinned, ...sights]) {
    if (seen.has(row.id)) continue;
    seen.add(row.id);
    out.push(row);
  }
  return out;
}
