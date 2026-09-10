import type {FacilityCategory} from './facility-schema';
import type {MimaPlacePhoto} from './mima';
import {
  isExperiencePackRow,
  isOnsenPackRow,
  packRowMatchesFilter,
  rankSeeRows,
  resolveMimaFilter,
  sightPhoto,
  sourcedHook,
  topChipForRow,
  type FilterId
} from './mima-travel';
import type {Rankable, ReadySlug} from './lookup-town';
import {
  isTsurugiExperiencePackRow,
  isTsurugiOnsenPackRow,
  isTsurugiStayPackRow,
  rankTsurugiSeeRows,
  resolveTsurugiFilter,
  tsurugiPackRowMatchesFilter,
  tsurugiSightPhoto,
  tsurugiSourcedHook,
  tsurugiTopChipForRow
} from './tsurugi-travel';
import {
  isYoshinogawaExperiencePackRow,
  isYoshinogawaOnsenPackRow,
  isYoshinogawaStayPackRow,
  rankYoshinogawaSeeRows,
  resolveYoshinogawaFilter,
  yoshinogawaPackRowMatchesFilter,
  yoshinogawaSightPhoto,
  yoshinogawaSourcedHook,
  yoshinogawaTopChipForRow
} from './yoshinogawa-travel';

import {
  isMiyoshiExperiencePackRow,
  isMiyoshiOnsenPackRow,
  isMiyoshiStayPackRow,
  miyoshiPackRowMatchesFilter,
  miyoshiSightPhoto,
  miyoshiSourcedHook,
  miyoshiTopChipForRow,
  rankMiyoshiSeeRows,
  resolveMiyoshiFilter
} from './miyoshi-travel';


import {
  isAwaExperiencePackRow,
  isAwaOnsenPackRow,
  isAwaStayPackRow,
  awaPackRowMatchesFilter,
  awaSightPhoto,
  awaSourcedHook,
  awaTopChipForRow,
  rankAwaSeeRows,
  resolveAwaFilter
} from './awa-travel';

import {
  isTokushimaCityExperiencePackRow,
  isTokushimaCityOnsenPackRow,
  isTokushimaCityStayPackRow,
  tokushimaCityPackRowMatchesFilter,
  tokushimaCitySightPhoto,
  tokushimaCitySourcedHook,
  tokushimaCityTopChipForRow,
  rankTokushimaCitySeeRows,
  resolveTokushimaCityFilter
} from './tokushima-city-travel';

import {
  isHigashimiyoshiExperiencePackRow,
  isHigashimiyoshiOnsenPackRow,
  isHigashimiyoshiStayPackRow,
  higashimiyoshiPackRowMatchesFilter,
  higashimiyoshiSightPhoto,
  higashimiyoshiSourcedHook,
  higashimiyoshiTopChipForRow,
  rankHigashimiyoshiSeeRows,
  resolveHigashimiyoshiFilter
} from './higashimiyoshi-travel';

import {
  isKitajimaExperiencePackRow,
  isKitajimaOnsenPackRow,
  isKitajimaStayPackRow,
  kitajimaPackRowMatchesFilter,
  kitajimaSightPhoto,
  kitajimaSourcedHook,
  kitajimaTopChipForRow,
  rankKitajimaSeeRows,
  resolveKitajimaFilter
} from './kitajima-travel';

import {
  isIshiiExperiencePackRow,
  isIshiiOnsenPackRow,
  isIshiiStayPackRow,
  ishiiPackRowMatchesFilter,
  ishiiSightPhoto,
  ishiiSourcedHook,
  ishiiTopChipForRow,
  rankIshiiSeeRows,
  resolveIshiiFilter
} from './ishii-travel';

import {
  isItanoExperiencePackRow,
  isItanoOnsenPackRow,
  isItanoStayPackRow,
  itanoPackRowMatchesFilter,
  itanoSightPhoto,
  itanoSourcedHook,
  itanoTopChipForRow,
  rankItanoSeeRows,
  resolveItanoFilter
} from './itano-travel';

import {
  isKamiitaExperiencePackRow,
  isKamiitaOnsenPackRow,
  isKamiitaStayPackRow,
  kamiitaPackRowMatchesFilter,
  kamiitaSightPhoto,
  kamiitaSourcedHook,
  kamiitaTopChipForRow,
  rankKamiitaSeeRows,
  resolveKamiitaFilter
} from './kamiita-travel';

import {
  isKamiyamaExperiencePackRow,
  isKamiyamaOnsenPackRow,
  isKamiyamaStayPackRow,
  kamiyamaPackRowMatchesFilter,
  kamiyamaSightPhoto,
  kamiyamaSourcedHook,
  kamiyamaTopChipForRow,
  rankKamiyamaSeeRows,
  resolveKamiyamaFilter
} from './kamiyama-travel';

import {
  isKatsuuraExperiencePackRow,
  isKatsuuraOnsenPackRow,
  isKatsuuraStayPackRow,
  katsuuraPackRowMatchesFilter,
  katsuuraSightPhoto,
  katsuuraSourcedHook,
  katsuuraTopChipForRow,
  rankKatsuuraSeeRows,
  resolveKatsuuraFilter
} from './katsuura-travel';
import {
  isKamikatsuExperiencePackRow,
  isKamikatsuOnsenPackRow,
  isKamikatsuShoppingPackRow,
  isKamikatsuStayPackRow,
  kamikatsuPackRowMatchesFilter,
  kamikatsuSightPhoto,
  kamikatsuSourcedHook,
  kamikatsuTopChipForRow,
  rankKamikatsuSeeRows,
  resolveKamikatsuFilter
} from './kamikatsu-travel';
import {
  isSanagochiExperiencePackRow,
  isSanagochiOnsenPackRow,
  isSanagochiShoppingPackRow,
  isSanagochiStayPackRow,
  resolveSanagochiFilter,
  sanagochiPackRowMatchesFilter,
  rankSanagochiSeeRows,
  sanagochiSightPhoto,
  sanagochiSourcedHook,
  sanagochiTopChipForRow
} from './sanagochi-travel';
import {
  isNakaExperiencePackRow,
  isNakaOnsenPackRow,
  isNakaStayPackRow,
  nakaPackRowMatchesFilter,
  nakaSightPhoto,
  nakaSourcedHook,
  nakaTopChipForRow,
  rankNakaSeeRows,
  resolveNakaFilter
} from './naka-travel';

import {
  isMugiExperiencePackRow,
  isMugiOnsenPackRow,
  isMugiStayPackRow,
  mugiPackRowMatchesFilter,
  mugiSightPhoto,
  mugiSourcedHook,
  mugiTopChipForRow,
  rankMugiSeeRows,
  resolveMugiFilter
} from './mugi-travel';

import {
  isMinamiExperiencePackRow,
  isMinamiOnsenPackRow,
  isMinamiStayPackRow,
  minamiPackRowMatchesFilter,
  minamiSightPhoto,
  minamiSourcedHook,
  minamiTopChipForRow,
  rankMinamiSeeRows,
  resolveMinamiFilter
} from './minami-travel';

import {
  isAizumiExperiencePackRow,
  isAizumiOnsenPackRow,
  isAizumiStayPackRow,
  aizumiPackRowMatchesFilter,
  aizumiSightPhoto,
  aizumiSourcedHook,
  aizumiTopChipForRow,
  rankAizumiSeeRows,
  resolveAizumiFilter
} from './aizumi-travel';

import {
  isKomatsushimaExperiencePackRow,
  isKomatsushimaOnsenPackRow,
  isKomatsushimaStayPackRow,
  komatsushimaPackRowMatchesFilter,
  komatsushimaSightPhoto,
  komatsushimaSourcedHook,
  komatsushimaTopChipForRow,
  rankKomatsushimaSeeRows,
  resolveKomatsushimaFilter
} from './komatsushima-travel';
import {
  isAnanExperiencePackRow,
  isAnanOnsenPackRow,
  isAnanStayPackRow,
  ananPackRowMatchesFilter,
  ananSightPhoto,
  ananSourcedHook,
  ananTopChipForRow,
  rankAnanSeeRows,
  resolveAnanFilter
} from './anan-travel';
import {
  isTakamatsuOnsenPackRow,
  isTakamatsuExperiencePackRow,
  isTakamatsuStayPackRow,
  takamatsuPackRowMatchesFilter,
  takamatsuSightPhoto,
  takamatsuSourcedHook,
  takamatsuTopChipForRow,
  rankTakamatsuSeeRows,
  resolveTakamatsuFilter
} from './takamatsu-travel';
import {
  isKotohiraOnsenPackRow,
  isKotohiraExperiencePackRow,
  isKotohiraStayPackRow,
  kotohiraPackRowMatchesFilter,
  kotohiraSightPhoto,
  kotohiraSourcedHook,
  kotohiraTopChipForRow,
  rankKotohiraSeeRows,
  resolveKotohiraFilter
} from './kotohira-travel';
import {
  isMarugameOnsenPackRow,
  isMarugameExperiencePackRow,
  isMarugameStayPackRow,
  marugamePackRowMatchesFilter,
  marugameSightPhoto,
  marugameSourcedHook,
  marugameTopChipForRow,
  rankMarugameSeeRows,
  resolveMarugameFilter
} from './marugame-travel';
import {
  isKanonjiOnsenPackRow,
  isKanonjiExperiencePackRow,
  isKanonjiStayPackRow,
  kanonjiPackRowMatchesFilter,
  kanonjiSightPhoto,
  kanonjiSourcedHook,
  kanonjiTopChipForRow,
  rankKanonjiSeeRows,
  resolveKanonjiFilter
} from './kanonji-travel';
import {
  isSakaideOnsenPackRow,
  isSakaideExperiencePackRow,
  isSakaideStayPackRow,
  sakaidePackRowMatchesFilter,
  sakaideSightPhoto,
  sakaideSourcedHook,
  sakaideTopChipForRow,
  rankSakaideSeeRows,
  resolveSakaideFilter
} from './sakaide-travel';
import {
  isNaoshimaOnsenPackRow,
  isNaoshimaExperiencePackRow,
  isNaoshimaStayPackRow,
  naoshimaPackRowMatchesFilter,
  naoshimaSightPhoto,
  naoshimaSourcedHook,
  naoshimaTopChipForRow,
  rankNaoshimaSeeRows,
  resolveNaoshimaFilter
} from './naoshima-travel';
import {
  isShodoshimaOnsenPackRow,
  isShodoshimaExperiencePackRow,
  isShodoshimaStayPackRow,
  shodoshimaPackRowMatchesFilter,
  shodoshimaSightPhoto,
  shodoshimaSourcedHook,
  shodoshimaTopChipForRow,
  rankShodoshimaSeeRows,
  resolveShodoshimaFilter
} from './shodoshima-travel';
import {
  isZentsujiOnsenPackRow,
  isZentsujiExperiencePackRow,
  isZentsujiStayPackRow,
  rankZentsujiSeeRows,
  resolveZentsujiFilter,
  zentsujiPackRowMatchesFilter,
  zentsujiSightPhoto,
  zentsujiSourcedHook,
  zentsujiTopChipForRow
} from './zentsuji-travel';
import {
  isMitoyoOnsenPackRow,
  isMitoyoExperiencePackRow,
  isMitoyoStayPackRow,
  rankMitoyoSeeRows,
  resolveMitoyoFilter,
  mitoyoPackRowMatchesFilter,
  mitoyoSightPhoto,
  mitoyoSourcedHook,
  mitoyoTopChipForRow
} from './mitoyo-travel';
import {
  isUtazuOnsenPackRow,
  isUtazuExperiencePackRow,
  isUtazuStayPackRow,
  rankUtazuSeeRows,
  resolveUtazuFilter,
  utazuPackRowMatchesFilter,
  utazuSightPhoto,
  utazuSourcedHook,
  utazuTopChipForRow
} from './utazu-travel';
import {
  isTonoshoOnsenPackRow,
  isTonoshoExperiencePackRow,
  isTonoshoStayPackRow,
  tonoshoPackRowMatchesFilter,
  rankTonoshoSeeRows,
  tonoshoSightPhoto,
  tonoshoSourcedHook,
  tonoshoTopChipForRow,
  resolveTonoshoFilter
} from './tonosho-travel';
import {
  isSanukiOnsenPackRow,
  isSanukiExperiencePackRow,
  isSanukiStayPackRow,
  sanukiPackRowMatchesFilter,
  rankSanukiSeeRows,
  sanukiSightPhoto,
  sanukiSourcedHook,
  sanukiTopChipForRow,
  resolveSanukiFilter
} from './sanuki-travel';
import {
  higashikagawaPackRowMatchesFilter,
  higashikagawaSightPhoto,
  higashikagawaSourcedHook,
  higashikagawaTopChipForRow,
  isHigashikagawaExperiencePackRow,
  isHigashikagawaOnsenPackRow,
  isHigashikagawaStayPackRow,
  rankHigashikagawaSeeRows,
  resolveHigashikagawaFilter
} from './higashikagawa-travel';
import {
  isMikiExperiencePackRow,
  isMikiOnsenPackRow,
  isMikiStayPackRow,
  mikiPackRowMatchesFilter,
  mikiSightPhoto,
  mikiSourcedHook,
  mikiTopChipForRow,
  rankMikiSeeRows,
  resolveMikiFilter
} from './miki-travel';
import {
  isAyagawaExperiencePackRow,
  isAyagawaOnsenPackRow,
  isAyagawaStayPackRow,
  ayagawaPackRowMatchesFilter,
  ayagawaSightPhoto,
  ayagawaSourcedHook,
  ayagawaTopChipForRow,
  rankAyagawaSeeRows,
  resolveAyagawaFilter
} from './ayagawa-travel';
import {
  tadotsuPackRowMatchesFilter,
  tadotsuSightPhoto,
  tadotsuSourcedHook,
  tadotsuTopChipForRow,
  resolveTadotsuFilter,
  rankTadotsuSeeRows,
  isTadotsuOnsenPackRow,
  isTadotsuExperiencePackRow,
  isTadotsuStayPackRow
} from './tadotsu-travel';
import {
  mannoPackRowMatchesFilter,
  mannoSightPhoto,
  mannoSourcedHook,
  mannoTopChipForRow,
  resolveMannoFilter,
  rankMannoSeeRows,
  isMannoOnsenPackRow,
  isMannoExperiencePackRow,
  isMannoStayPackRow
} from './manno-travel';
import {
  isKochiOnsenPackRow,
  isKochiExperiencePackRow,
  isKochiStayPackRow,
  kochiPackRowMatchesFilter,
  kochiSightPhoto,
  kochiSourcedHook,
  kochiTopChipForRow,
  rankKochiSeeRows,
  resolveKochiFilter
} from './kochi-travel';
import {
  isNankokuOnsenPackRow,
  isNankokuExperiencePackRow,
  isNankokuStayPackRow,
  nankokuPackRowMatchesFilter,
  nankokuSightPhoto,
  nankokuSourcedHook,
  nankokuTopChipForRow,
  rankNankokuSeeRows,
  resolveNankokuFilter
} from './nankoku-travel';
import {
  isKonanOnsenPackRow,
  isKonanExperiencePackRow,
  isKonanStayPackRow,
  konanPackRowMatchesFilter,
  konanSightPhoto,
  konanSourcedHook,
  konanTopChipForRow,
  rankKonanSeeRows,
  resolveKonanFilter
} from './konan-travel';

import {
  isKamiExperiencePackRow,
  isKamiOnsenPackRow,
  isKamiStayPackRow,
  kamiPackRowMatchesFilter,
  kamiSightPhoto,
  kamiSourcedHook,
  kamiTopChipForRow,
  rankKamiSeeRows,
  resolveKamiFilter
} from './kami-travel';

import {
  isInoExperiencePackRow,
  isInoOnsenPackRow,
  isInoStayPackRow,
  inoPackRowMatchesFilter,
  inoSightPhoto,
  inoSourcedHook,
  inoTopChipForRow,
  rankInoSeeRows,
  resolveInoFilter
} from './ino-travel';
import {
  akiPackRowMatchesFilter,
  akiSightPhoto,
  akiSourcedHook,
  akiTopChipForRow,
  isAkiExperiencePackRow,
  isAkiOnsenPackRow,
  isAkiStayPackRow,
  rankAkiSeeRows,
  resolveAkiFilter
} from './aki-travel';
import {
  murotoPackRowMatchesFilter,
  murotoSightPhoto,
  murotoSourcedHook,
  murotoTopChipForRow,
  isMurotoExperiencePackRow,
  isMurotoOnsenPackRow,
  isMurotoStayPackRow,
  rankMurotoSeeRows,
  resolveMurotoFilter
} from './muroto-travel';
import {
  tosaPackRowMatchesFilter,
  tosaSightPhoto,
  tosaSourcedHook,
  tosaTopChipForRow,
  isTosaOnsenPackRow,
  isTosaExperiencePackRow,
  isTosaStayPackRow,
  rankTosaSeeRows,
  resolveTosaFilter
} from './tosa-travel';
import {
  isSusakiExperiencePackRow,
  isSusakiOnsenPackRow,
  isSusakiStayPackRow,
  rankSusakiSeeRows,
  resolveSusakiFilter,
  susakiPackRowMatchesFilter,
  susakiSightPhoto,
  susakiSourcedHook,
  susakiTopChipForRow
} from './susaki-travel';
import {
  isShimantoOnsenPackRow,
  isShimantoExperiencePackRow,
  isShimantoStayPackRow,
  rankShimantoSeeRows,
  resolveShimantoFilter,
  shimantoPackRowMatchesFilter,
  shimantoSightPhoto,
  shimantoSourcedHook,
  shimantoTopChipForRow
} from './shimanto-travel';
import {
  isTosashimizuOnsenPackRow,
  isTosashimizuExperiencePackRow,
  isTosashimizuStayPackRow,
  rankTosashimizuSeeRows,
  resolveTosashimizuFilter,
  tosashimizuPackRowMatchesFilter,
  tosashimizuSightPhoto,
  tosashimizuSourcedHook,
  tosashimizuTopChipForRow
} from './tosashimizu-travel';
import {
  isSukumoExperiencePackRow,
  isSukumoOnsenPackRow,
  isSukumoStayPackRow,
  rankSukumoSeeRows,
  resolveSukumoFilter,
  sukumoPackRowMatchesFilter,
  sukumoSightPhoto,
  sukumoSourcedHook,
  sukumoTopChipForRow
} from './sukumo-travel';
import {
  isKuroshioExperiencePackRow,
  isKuroshioOnsenPackRow,
  isKuroshioStayPackRow,
  rankKuroshioSeeRows,
  resolveKuroshioFilter,
  kuroshioPackRowMatchesFilter,
  kuroshioSightPhoto,
  kuroshioSourcedHook,
  kuroshioTopChipForRow
} from './kuroshio-travel';
import {
  isToyoExperiencePackRow,
  isToyoOnsenPackRow,
  isToyoStayPackRow,
  rankToyoSeeRows,
  resolveToyoFilter,
  toyoPackRowMatchesFilter,
  toyoSightPhoto,
  toyoSourcedHook,
  toyoTopChipForRow
} from './toyo-travel';
import {
  isNahariOnsenPackRow,
  isNahariExperiencePackRow,
  isNahariStayPackRow,
  rankNahariSeeRows,
  resolveNahariFilter,
  nahariPackRowMatchesFilter,
  nahariSightPhoto,
  nahariSourcedHook,
  nahariTopChipForRow
} from './nahari-travel';
import {
  isYasudaOnsenPackRow,
  isYasudaExperiencePackRow,
  isYasudaStayPackRow,
  rankYasudaSeeRows,
  resolveYasudaFilter,
  yasudaPackRowMatchesFilter,
  yasudaSightPhoto,
  yasudaSourcedHook,
  yasudaTopChipForRow
} from './yasuda-travel';
import {
  isGeiseiOnsenPackRow,
  isGeiseiExperiencePackRow,
  isGeiseiStayPackRow,
  rankGeiseiSeeRows,
  resolveGeiseiFilter,
  geiseiPackRowMatchesFilter,
  geiseiSightPhoto,
  geiseiSourcedHook,
  geiseiTopChipForRow
} from './geisei-travel';
import {
  isKitagawaOnsenPackRow,
  isKitagawaExperiencePackRow,
  isKitagawaStayPackRow,
  kitagawaPackRowMatchesFilter,
  rankKitagawaSeeRows,
  kitagawaSightPhoto,
  kitagawaSourcedHook,
  kitagawaTopChipForRow,
  resolveKitagawaFilter
} from './kitagawa-travel';
import {
  isUmajiOnsenPackRow,
  isUmajiExperiencePackRow,
  isUmajiStayPackRow,
  umajiPackRowMatchesFilter,
  rankUmajiSeeRows,
  umajiSightPhoto,
  umajiSourcedHook,
  umajiTopChipForRow,
  resolveUmajiFilter
} from './umaji-travel';
import {
  isMotoyamaOnsenPackRow,
  isMotoyamaExperiencePackRow,
  isMotoyamaStayPackRow,
  motoyamaPackRowMatchesFilter,
  rankMotoyamaSeeRows,
  motoyamaSightPhoto,
  motoyamaSourcedHook,
  motoyamaTopChipForRow,
  resolveMotoyamaFilter
} from './motoyama-travel';
import {
  isOtoyoOnsenPackRow,
  isOtoyoExperiencePackRow,
  isOtoyoStayPackRow,
  otoyoPackRowMatchesFilter,
  rankOtoyoSeeRows,
  otoyoSightPhoto,
  otoyoSourcedHook,
  otoyoTopChipForRow,
  resolveOtoyoFilter
} from './otoyo-travel';
import {
  isTosachoOnsenPackRow,
  isTosachoExperiencePackRow,
  isTosachoStayPackRow,
  tosachoPackRowMatchesFilter,
  rankTosachoSeeRows,
  tosachoSightPhoto,
  tosachoSourcedHook,
  tosachoTopChipForRow,
  resolveTosachoFilter
} from './tosacho-travel';
import {
  isOkawaOnsenPackRow,
  isOkawaExperiencePackRow,
  isOkawaStayPackRow,
  okawaPackRowMatchesFilter,
  rankOkawaSeeRows,
  okawaSightPhoto,
  okawaSourcedHook,
  okawaTopChipForRow,
  resolveOkawaFilter
} from './okawa-travel';
import {
  isNiyodogawaOnsenPackRow,
  isNiyodogawaExperiencePackRow,
  isNiyodogawaStayPackRow,
  niyodogawaPackRowMatchesFilter,
  rankNiyodogawaSeeRows,
  niyodogawaSightPhoto,
  niyodogawaSourcedHook,
  niyodogawaTopChipForRow,
  resolveNiyodogawaFilter
} from './niyodogawa-travel';
import {
  isNakatosaDiningPackRow,
  isNakatosaExperiencePackRow,
  isNakatosaOnsenPackRow,
  isNakatosaShoppingPackRow,
  isNakatosaStayPackRow,
  nakatosaPackRowMatchesFilter,
  rankNakatosaSeeRows,
  nakatosaSightPhoto,
  nakatosaSourcedHook,
  nakatosaTopChipForRow,
  resolveNakatosaFilter
} from './nakatosa-travel';
import {
  isOchiDiningPackRow,
  isOchiExperiencePackRow,
  isOchiOnsenPackRow,
  isOchiShoppingPackRow,
  isOchiStayPackRow,
  ochiPackRowMatchesFilter,
  rankOchiSeeRows,
  ochiSightPhoto,
  ochiSourcedHook,
  ochiTopChipForRow,
  resolveOchiFilter
} from './ochi-travel';
import {
  isYusuharaDiningPackRow,
  isYusuharaExperiencePackRow,
  isYusuharaOnsenPackRow,
  isYusuharaShoppingPackRow,
  isYusuharaStayPackRow,
  yusuharaPackRowMatchesFilter,
  rankYusuharaSeeRows,
  yusuharaSightPhoto,
  yusuharaSourcedHook,
  yusuharaTopChipForRow,
  resolveYusuharaFilter
} from './yusuhara-travel';
import {
  isHidakaDiningPackRow,
  isHidakaExperiencePackRow,
  isHidakaOnsenPackRow,
  isHidakaShoppingPackRow,
  isHidakaStayPackRow,
  hidakaPackRowMatchesFilter,
  rankHidakaSeeRows,
  hidakaSightPhoto,
  hidakaSourcedHook,
  hidakaTopChipForRow,
  resolveHidakaFilter
} from './hidaka-travel';
import {
  isTsunoDiningPackRow,
  isTsunoExperiencePackRow,
  isTsunoOnsenPackRow,
  isTsunoShoppingPackRow,
  isTsunoStayPackRow,
  tsunoPackRowMatchesFilter,
  rankTsunoSeeRows,
  tsunoSightPhoto,
  tsunoSourcedHook,
  tsunoTopChipForRow,
  resolveTsunoFilter
} from './tsuno-travel';
import {
  isShimantochoDiningPackRow,
  isShimantochoExperiencePackRow,
  isShimantochoOnsenPackRow,
  isShimantochoShoppingPackRow,
  isShimantochoStayPackRow,
  shimantochoPackRowMatchesFilter,
  rankShimantochoSeeRows,
  shimantochoSightPhoto,
  shimantochoSourcedHook,
  shimantochoTopChipForRow,
  resolveShimantochoFilter
} from './shimantocho-travel';
import {
  isOtsukiDiningPackRow,
  isOtsukiExperiencePackRow,
  isOtsukiOnsenPackRow,
  isOtsukiShoppingPackRow,
  isOtsukiStayPackRow,
  otsukiPackRowMatchesFilter,
  rankOtsukiSeeRows,
  otsukiSightPhoto,
  otsukiSourcedHook,
  otsukiTopChipForRow,
  resolveOtsukiFilter
} from './otsuki-travel';
import {
  isMiharaExperiencePackRow,
  isMiharaOnsenPackRow,
  isMiharaStayPackRow,
  miharaPackRowMatchesFilter,
  rankMiharaSeeRows,
  miharaSightPhoto,
  miharaSourcedHook,
  miharaTopChipForRow,
  resolveMiharaFilter
} from './mihara-travel';
import {
  isMatsuyamaExperiencePackRow,
  isMatsuyamaOnsenPackRow,
  isMatsuyamaStayPackRow,
  matsuyamaPackRowMatchesFilter,
  rankMatsuyamaSeeRows,
  matsuyamaSightPhoto,
  matsuyamaSourcedHook,
  matsuyamaTopChipForRow,
  resolveMatsuyamaFilter
} from './matsuyama-travel';

import {
  isImabariExperiencePackRow,
  isImabariOnsenPackRow,
  isImabariStayPackRow,
  imabariPackRowMatchesFilter,
  imabariSightPhoto,
  imabariSourcedHook,
  imabariTopChipForRow,
  rankImabariSeeRows,
  resolveImabariFilter
} from './imabari-travel';
import {
  isUwajimaExperiencePackRow,
  isUwajimaOnsenPackRow,
  isUwajimaStayPackRow,
  uwajimaPackRowMatchesFilter,
  rankUwajimaSeeRows,
  uwajimaSightPhoto,
  uwajimaSourcedHook,
  uwajimaTopChipForRow,
  resolveUwajimaFilter
} from './uwajima-travel';
import {
  isYawatahamaDiningPackRow,
  isYawatahamaExperiencePackRow,
  isYawatahamaOnsenPackRow,
  isYawatahamaShoppingPackRow,
  isYawatahamaStayPackRow,
  yawatahamaPackRowMatchesFilter,
  rankYawatahamaSeeRows,
  yawatahamaSightPhoto,
  yawatahamaSourcedHook,
  yawatahamaTopChipForRow,
  resolveYawatahamaFilter,
} from './yawatahama-travel';
import {
  isNiihamaOnsenPackRow,
  isNiihamaExperiencePackRow,
  isNiihamaStayPackRow,
  niihamaPackRowMatchesFilter,
  rankNiihamaSeeRows,
  niihamaSightPhoto,
  niihamaSourcedHook,
  niihamaTopChipForRow,
  resolveNiihamaFilter
} from './niihama-travel';
import {
  isSaijoOnsenPackRow,
  isSaijoExperiencePackRow,
  isSaijoStayPackRow,
  rankSaijoSeeRows,
  saijoPackRowMatchesFilter,
  resolveSaijoFilter,
  saijoSightPhoto,
  saijoSourcedHook,
  saijoTopChipForRow,
} from './saijo-travel';
import {
  isOzuOnsenPackRow,
  isOzuExperiencePackRow,
  isOzuStayPackRow,
  ozuPackRowMatchesFilter,
  rankOzuSeeRows,
  ozuSightPhoto,
  ozuSourcedHook,
  ozuTopChipForRow,
  resolveOzuFilter,
} from './ozu-travel';
import {
  isIyoOnsenPackRow,
  isIyoExperiencePackRow,
  isIyoStayPackRow,
  iyoPackRowMatchesFilter,
  rankIyoSeeRows,
  iyoSightPhoto,
  iyoSourcedHook,
  iyoTopChipForRow,
  resolveIyoFilter,
} from './iyo-travel';
import {
  isShikokuchuoOnsenPackRow,
  isShikokuchuoExperiencePackRow,
  isShikokuchuoStayPackRow,
  shikokuchuoPackRowMatchesFilter,
  rankShikokuchuoSeeRows,
  shikokuchuoSightPhoto,
  shikokuchuoSourcedHook,
  shikokuchuoTopChipForRow,
  resolveShikokuchuoFilter,
} from './shikokuchuo-travel';
import {
  isSeiyoOnsenPackRow,
  isSeiyoExperiencePackRow,
  isSeiyoStayPackRow,
  seiyoPackRowMatchesFilter,
  rankSeiyoSeeRows,
  seiyoSightPhoto,
  seiyoSourcedHook,
  seiyoTopChipForRow,
  resolveSeiyoFilter,
} from './seiyo-travel';
import {
  isToonOnsenPackRow,
  isToonExperiencePackRow,
  isToonStayPackRow,
  toonPackRowMatchesFilter,
  rankToonSeeRows,
  toonSightPhoto,
  toonSourcedHook,
  toonTopChipForRow,
  resolveToonFilter,
} from './toon-travel';
import {
  isKamijimaOnsenPackRow,
  isKamijimaExperiencePackRow,
  isKamijimaStayPackRow,
  kamijimaPackRowMatchesFilter,
  rankKamijimaSeeRows,
  kamijimaSightPhoto,
  kamijimaSourcedHook,
  kamijimaTopChipForRow,
  resolveKamijimaFilter
} from './kamijima-travel';
import {
  isKumakogenOnsenPackRow,
  isKumakogenExperiencePackRow,
  isKumakogenStayPackRow,
  kumakogenPackRowMatchesFilter,
  rankKumakogenSeeRows,
  kumakogenSightPhoto,
  kumakogenSourcedHook,
  kumakogenTopChipForRow,
  resolveKumakogenFilter,
} from './kumakogen-travel';
import {
  isMasakiOnsenPackRow,
  isMasakiExperiencePackRow,
  isMasakiStayPackRow,
  masakiPackRowMatchesFilter,
  rankMasakiSeeRows,
  masakiSightPhoto,
  masakiSourcedHook,
  masakiTopChipForRow,
  resolveMasakiFilter
} from './masaki-travel';
import {
  isTobeOnsenPackRow,
  isTobeExperiencePackRow,
  isTobeStayPackRow,
  tobePackRowMatchesFilter,
  rankTobeSeeRows,
  tobeSightPhoto,
  tobeSourcedHook,
  tobeTopChipForRow,
  resolveTobeFilter
} from './tobe-travel';
import {
  isUchikoOnsenPackRow,
  isUchikoExperiencePackRow,
  isUchikoStayPackRow,
  uchikoPackRowMatchesFilter,
  rankUchikoSeeRows,
  uchikoSightPhoto,
  uchikoSourcedHook,
  uchikoTopChipForRow,
  resolveUchikoFilter
} from './uchiko-travel';

import {
  isIkataExperiencePackRow,
  isIkataOnsenPackRow,
  isIkataStayPackRow,
  ikataPackRowMatchesFilter,
  ikataSightPhoto,
  ikataSourcedHook,
  ikataTopChipForRow,
  rankIkataSeeRows,
  resolveIkataFilter
} from './ikata-travel';

import {
  isMatsunoExperiencePackRow,
  isMatsunoOnsenPackRow,
  isMatsunoStayPackRow,
  matsunoPackRowMatchesFilter,
  matsunoSightPhoto,
  matsunoSourcedHook,
  matsunoTopChipForRow,
  rankMatsunoSeeRows,
  resolveMatsunoFilter
} from './matsuno-travel';
import {
  isKihokuExperiencePackRow,
  isKihokuOnsenPackRow,
  isKihokuStayPackRow,
  kihokuPackRowMatchesFilter,
  kihokuSightPhoto,
  kihokuSourcedHook,
  kihokuTopChipForRow,
  rankKihokuSeeRows,
  resolveKihokuFilter
} from './kihoku-travel';
import {
  isAinanOnsenPackRow,
  isAinanExperiencePackRow,
  isAinanStayPackRow,
  ainanPackRowMatchesFilter,
  rankAinanSeeRows,
  ainanSightPhoto,
  ainanSourcedHook,
  ainanTopChipForRow,
  resolveAinanFilter
} from './ainan-travel';
import {
  isHiroshimaOnsenPackRow,
  isHiroshimaExperiencePackRow,
  isHiroshimaStayPackRow,
  hiroshimaPackRowMatchesFilter,
  rankHiroshimaSeeRows,
  hiroshimaSightPhoto,
  hiroshimaSourcedHook,
  hiroshimaTopChipForRow,
  resolveHiroshimaFilter
} from './hiroshima-travel';
import {
  isKureOnsenPackRow,
  isKureExperiencePackRow,
  isKureStayPackRow,
  kurePackRowMatchesFilter,
  rankKureSeeRows,
  kureSightPhoto,
  kureSourcedHook,
  kureTopChipForRow,
  resolveKureFilter
} from './kure-travel';
import {
  isTakeharaOnsenPackRow,
  isTakeharaExperiencePackRow,
  isTakeharaStayPackRow,
  takeharaPackRowMatchesFilter,
  rankTakeharaSeeRows,
  takeharaSightPhoto,
  takeharaSourcedHook,
  takeharaTopChipForRow,
  resolveTakeharaFilter
} from './takehara-travel';
import {
  isMiharashiOnsenPackRow,
  isMiharashiExperiencePackRow,
  isMiharashiStayPackRow,
  miharashiPackRowMatchesFilter,
  rankMiharashiSeeRows,
  miharashiSightPhoto,
  miharashiSourcedHook,
  miharashiTopChipForRow,
  resolveMiharashiFilter
} from './miharashi-travel';
import {
  isOnomichiOnsenPackRow,
  isOnomichiExperiencePackRow,
  isOnomichiStayPackRow,
  onomichiPackRowMatchesFilter,
  rankOnomichiSeeRows,
  onomichiSightPhoto,
  onomichiSourcedHook,
  onomichiTopChipForRow,
  resolveOnomichiFilter
} from './onomichi-travel';
import {
  isFukuyamaOnsenPackRow,
  isFukuyamaExperiencePackRow,
  isFukuyamaStayPackRow,
  fukuyamaPackRowMatchesFilter,
  rankFukuyamaSeeRows,
  fukuyamaSightPhoto,
  fukuyamaSourcedHook,
  fukuyamaTopChipForRow,
  resolveFukuyamaFilter
} from './fukuyama-travel';
import {
  isFuchuOnsenPackRow,
  isFuchuExperiencePackRow,
  isFuchuStayPackRow,
  fuchuPackRowMatchesFilter,
  rankFuchuSeeRows,
  fuchuSightPhoto,
  fuchuSourcedHook,
  fuchuTopChipForRow,
  resolveFuchuFilter
} from './fuchu-travel';
import {
  miyoshishiPackRowMatchesFilter,
  isMiyoshishiOnsenPackRow,
  isMiyoshishiExperiencePackRow,
  isMiyoshishiStayPackRow,
  miyoshishiSightPhoto,
  miyoshishiSourcedHook,
  miyoshishiTopChipForRow,
  rankMiyoshishiSeeRows,
  resolveMiyoshishiFilter
} from './miyoshishi-travel';

import {
  shobaraPackRowMatchesFilter,
  isShobaraOnsenPackRow,
  isShobaraExperiencePackRow,
  isShobaraStayPackRow,
  shobaraSightPhoto,
  shobaraSourcedHook,
  shobaraTopChipForRow,
  rankShobaraSeeRows,
  resolveShobaraFilter
} from './shobara-travel';

import {
  otakePackRowMatchesFilter,
  isOtakeOnsenPackRow,
  isOtakeExperiencePackRow,
  isOtakeStayPackRow,
  otakeSightPhoto,
  otakeSourcedHook,
  otakeTopChipForRow,
  rankOtakeSeeRows,
  resolveOtakeFilter
} from './otake-travel';

import {
  higashihiroshimaPackRowMatchesFilter,
  isHigashihiroshimaOnsenPackRow,
  isHigashihiroshimaExperiencePackRow,
  isHigashihiroshimaStayPackRow,
  higashihiroshimaSightPhoto,
  higashihiroshimaSourcedHook,
  higashihiroshimaTopChipForRow,
  rankHigashihiroshimaSeeRows,
  resolveHigashihiroshimaFilter
} from './higashihiroshima-travel';

import {
  hatsukaichiPackRowMatchesFilter,
  isHatsukaichiOnsenPackRow,
  isHatsukaichiExperiencePackRow,
  isHatsukaichiStayPackRow,
  hatsukaichiSightPhoto,
  hatsukaichiSourcedHook,
  hatsukaichiTopChipForRow,
  rankHatsukaichiSeeRows,
  resolveHatsukaichiFilter
} from './hatsukaichi-travel';

import {
  isAkitakataExperiencePackRow,
  isAkitakataOnsenPackRow,
  isAkitakataStayPackRow,
  akitakataPackRowMatchesFilter,
  akitakataSightPhoto,
  akitakataSourcedHook,
  akitakataTopChipForRow,
  rankAkitakataSeeRows,
  resolveAkitakataFilter
} from './akitakata-travel';

import {
  isEtajimaExperiencePackRow,
  isEtajimaOnsenPackRow,
  isEtajimaStayPackRow,
  etajimaPackRowMatchesFilter,
  etajimaSightPhoto,
  etajimaSourcedHook,
  etajimaTopChipForRow,
  rankEtajimaSeeRows,
  resolveEtajimaFilter
} from './etajima-travel';
import {
  isFuchuchoExperiencePackRow,
  isFuchuchoOnsenPackRow,
  isFuchuchoStayPackRow,
  fuchuchoPackRowMatchesFilter,
  fuchuchoSightPhoto,
  fuchuchoSourcedHook,
  fuchuchoTopChipForRow,
  rankFuchuchoSeeRows,
  resolveFuchuchoFilter
} from './fuchucho-travel';

import {
  isKaitaExperiencePackRow,
  isKaitaOnsenPackRow,
  isKaitaStayPackRow,
  kaitaPackRowMatchesFilter,
  kaitaSightPhoto,
  kaitaSourcedHook,
  kaitaTopChipForRow,
  rankKaitaSeeRows,
  resolveKaitaFilter
} from './kaita-travel';

import {
  isKumanoExperiencePackRow,
  isKumanoOnsenPackRow,
  isKumanoStayPackRow,
  kumanoPackRowMatchesFilter,
  kumanoSightPhoto,
  kumanoSourcedHook,
  kumanoTopChipForRow,
  rankKumanoSeeRows,
  resolveKumanoFilter
} from './kumano-travel';
import {
  isSakaExperiencePackRow,
  isSakaOnsenPackRow,
  isSakaStayPackRow,
  sakaPackRowMatchesFilter,
  rankSakaSeeRows,
  sakaSightPhoto,
  sakaSourcedHook,
  sakaTopChipForRow,
  resolveSakaFilter
} from './saka-travel';















import {
  isKaiyoExperiencePackRow,
  isKaiyoOnsenPackRow,
  isKaiyoStayPackRow,
  kaiyoPackRowMatchesFilter,
  kaiyoSightPhoto,
  kaiyoSourcedHook,
  kaiyoTopChipForRow,
  rankKaiyoSeeRows,
  resolveKaiyoFilter
} from './kaiyo-travel';



import {
  isMatsushigeExperiencePackRow,
  isMatsushigeOnsenPackRow,
  isMatsushigeStayPackRow,
  matsushigePackRowMatchesFilter,
  matsushigeSightPhoto,
  matsushigeSourcedHook,
  matsushigeTopChipForRow,
  rankMatsushigeSeeRows,
  resolveMatsushigeFilter
} from './matsushige-travel';

import {
  isNarutoExperiencePackRow,
  isNarutoOnsenPackRow,
  isNarutoStayPackRow,
  narutoPackRowMatchesFilter,
  narutoSightPhoto,
  narutoSourcedHook,
  narutoTopChipForRow,
  rankNarutoSeeRows,
  resolveNarutoFilter
} from './naruto-travel';



function neverStay(_row: {category: string; name_ja: string}): boolean {
  return false;
}

export type LookupHelpers = {
  isOnsenPackRow: (row: {category: string; name_ja: string}) => boolean;
  isExperiencePackRow: (row: {category: string; name_ja: string}) => boolean;
  isStayPackRow: (row: {category: string; name_ja: string}) => boolean;
  packRowMatchesFilter: (
    category: FacilityCategory,
    filter: FilterId,
    nameJa?: string
  ) => boolean;
  rankSeeRows: <T extends Rankable>(rows: readonly T[]) => T[];
  sightPhoto: (nameJa: string) => MimaPlacePhoto | null;
  sourcedHook: (
    row: {name_ja: string; address: string | null; category: string},
    locale: string
  ) => string;
  topChipForRow: (row: {category: string; name_ja: string}) => FilterId;
  resolveFilter: (c: string | undefined, q: string) => FilterId;
};

const MIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow,
  isExperiencePackRow,
  isStayPackRow: neverStay,
  packRowMatchesFilter,
  rankSeeRows,
  sightPhoto,
  sourcedHook,
  topChipForRow,
  resolveFilter: resolveMimaFilter
};

const TSURUGI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTsurugiOnsenPackRow,
  isExperiencePackRow: isTsurugiExperiencePackRow,
  isStayPackRow: isTsurugiStayPackRow,
  packRowMatchesFilter: tsurugiPackRowMatchesFilter,
  rankSeeRows: rankTsurugiSeeRows,
  sightPhoto: tsurugiSightPhoto,
  sourcedHook: tsurugiSourcedHook,
  topChipForRow: tsurugiTopChipForRow,
  resolveFilter: resolveTsurugiFilter
};

const YOSHINOGAWA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isYoshinogawaOnsenPackRow,
  isExperiencePackRow: isYoshinogawaExperiencePackRow,
  isStayPackRow: isYoshinogawaStayPackRow,
  packRowMatchesFilter: yoshinogawaPackRowMatchesFilter,
  rankSeeRows: rankYoshinogawaSeeRows,
  sightPhoto: yoshinogawaSightPhoto,
  sourcedHook: yoshinogawaSourcedHook,
  topChipForRow: yoshinogawaTopChipForRow,
  resolveFilter: resolveYoshinogawaFilter
};


const MIYOSHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMiyoshiOnsenPackRow,
  isExperiencePackRow: isMiyoshiExperiencePackRow,
  isStayPackRow: isMiyoshiStayPackRow,
  packRowMatchesFilter: miyoshiPackRowMatchesFilter,
  rankSeeRows: rankMiyoshiSeeRows,
  sightPhoto: miyoshiSightPhoto,
  sourcedHook: miyoshiSourcedHook,
  topChipForRow: miyoshiTopChipForRow,
  resolveFilter: resolveMiyoshiFilter
};


const TOKUSHIMA_CITY_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTokushimaCityOnsenPackRow,
  isExperiencePackRow: isTokushimaCityExperiencePackRow,
  isStayPackRow: isTokushimaCityStayPackRow,
  packRowMatchesFilter: tokushimaCityPackRowMatchesFilter,
  rankSeeRows: rankTokushimaCitySeeRows,
  sightPhoto: tokushimaCitySightPhoto,
  sourcedHook: tokushimaCitySourcedHook,
  topChipForRow: tokushimaCityTopChipForRow,
  resolveFilter: resolveTokushimaCityFilter
};

const AWA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isAwaOnsenPackRow,
  isExperiencePackRow: isAwaExperiencePackRow,
  isStayPackRow: isAwaStayPackRow,
  packRowMatchesFilter: awaPackRowMatchesFilter,
  rankSeeRows: rankAwaSeeRows,
  sightPhoto: awaSightPhoto,
  sourcedHook: awaSourcedHook,
  topChipForRow: awaTopChipForRow,
  resolveFilter: resolveAwaFilter
};



const HIGASHIMIYOSHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isHigashimiyoshiOnsenPackRow,
  isExperiencePackRow: isHigashimiyoshiExperiencePackRow,
  isStayPackRow: isHigashimiyoshiStayPackRow,
  packRowMatchesFilter: higashimiyoshiPackRowMatchesFilter,
  rankSeeRows: rankHigashimiyoshiSeeRows,
  sightPhoto: higashimiyoshiSightPhoto,
  sourcedHook: higashimiyoshiSourcedHook,
  topChipForRow: higashimiyoshiTopChipForRow,
  resolveFilter: resolveHigashimiyoshiFilter
};


const MATSUSHIGE_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMatsushigeOnsenPackRow,
  isExperiencePackRow: isMatsushigeExperiencePackRow,
  isStayPackRow: isMatsushigeStayPackRow,
  packRowMatchesFilter: matsushigePackRowMatchesFilter,
  rankSeeRows: rankMatsushigeSeeRows,
  sightPhoto: matsushigeSightPhoto,
  sourcedHook: matsushigeSourcedHook,
  topChipForRow: matsushigeTopChipForRow,
  resolveFilter: resolveMatsushigeFilter
};

const KITAJIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKitajimaOnsenPackRow,
  isExperiencePackRow: isKitajimaExperiencePackRow,
  isStayPackRow: isKitajimaStayPackRow,
  packRowMatchesFilter: kitajimaPackRowMatchesFilter,
  rankSeeRows: rankKitajimaSeeRows,
  sightPhoto: kitajimaSightPhoto,
  sourcedHook: kitajimaSourcedHook,
  topChipForRow: kitajimaTopChipForRow,
  resolveFilter: resolveKitajimaFilter
};


const NARUTO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isNarutoOnsenPackRow,
  isExperiencePackRow: isNarutoExperiencePackRow,
  isStayPackRow: isNarutoStayPackRow,
  packRowMatchesFilter: narutoPackRowMatchesFilter,
  rankSeeRows: rankNarutoSeeRows,
  sightPhoto: narutoSightPhoto,
  sourcedHook: narutoSourcedHook,
  topChipForRow: narutoTopChipForRow,
  resolveFilter: resolveNarutoFilter
};


const ISHII_HELPERS: LookupHelpers = {
  isOnsenPackRow: isIshiiOnsenPackRow,
  isExperiencePackRow: isIshiiExperiencePackRow,
  isStayPackRow: isIshiiStayPackRow,
  packRowMatchesFilter: ishiiPackRowMatchesFilter,
  rankSeeRows: rankIshiiSeeRows,
  sightPhoto: ishiiSightPhoto,
  sourcedHook: ishiiSourcedHook,
  topChipForRow: ishiiTopChipForRow,
  resolveFilter: resolveIshiiFilter
};


const ITANO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isItanoOnsenPackRow,
  isExperiencePackRow: isItanoExperiencePackRow,
  isStayPackRow: isItanoStayPackRow,
  packRowMatchesFilter: itanoPackRowMatchesFilter,
  rankSeeRows: rankItanoSeeRows,
  sightPhoto: itanoSightPhoto,
  sourcedHook: itanoSourcedHook,
  topChipForRow: itanoTopChipForRow,
  resolveFilter: resolveItanoFilter
};

const KAMIITA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKamiitaOnsenPackRow,
  isExperiencePackRow: isKamiitaExperiencePackRow,
  isStayPackRow: isKamiitaStayPackRow,
  packRowMatchesFilter: kamiitaPackRowMatchesFilter,
  rankSeeRows: rankKamiitaSeeRows,
  sightPhoto: kamiitaSightPhoto,
  sourcedHook: kamiitaSourcedHook,
  topChipForRow: kamiitaTopChipForRow,
  resolveFilter: resolveKamiitaFilter
};



const KATSUURA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKatsuuraOnsenPackRow,
  isExperiencePackRow: isKatsuuraExperiencePackRow,
  isStayPackRow: isKatsuuraStayPackRow,
  packRowMatchesFilter: katsuuraPackRowMatchesFilter,
  rankSeeRows: rankKatsuuraSeeRows,
  sightPhoto: katsuuraSightPhoto,
  sourcedHook: katsuuraSourcedHook,
  topChipForRow: katsuuraTopChipForRow,
  resolveFilter: resolveKatsuuraFilter
};

const KAMIYAMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKamiyamaOnsenPackRow,
  isExperiencePackRow: isKamiyamaExperiencePackRow,
  isStayPackRow: isKamiyamaStayPackRow,
  packRowMatchesFilter: kamiyamaPackRowMatchesFilter,
  rankSeeRows: rankKamiyamaSeeRows,
  sightPhoto: kamiyamaSightPhoto,
  sourcedHook: kamiyamaSourcedHook,
  topChipForRow: kamiyamaTopChipForRow,
  resolveFilter: resolveKamiyamaFilter
};


const KAMIKATSU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKamikatsuOnsenPackRow,
  isExperiencePackRow: isKamikatsuExperiencePackRow,
  isStayPackRow: isKamikatsuStayPackRow,
  packRowMatchesFilter: kamikatsuPackRowMatchesFilter,
  rankSeeRows: rankKamikatsuSeeRows,
  sightPhoto: kamikatsuSightPhoto,
  sourcedHook: kamikatsuSourcedHook,
  topChipForRow: kamikatsuTopChipForRow,
  resolveFilter: resolveKamikatsuFilter
};


const SANAGOCHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isSanagochiOnsenPackRow,
  isExperiencePackRow: isSanagochiExperiencePackRow,
  isStayPackRow: isSanagochiStayPackRow,
  packRowMatchesFilter: sanagochiPackRowMatchesFilter,
  rankSeeRows: rankSanagochiSeeRows,
  sightPhoto: sanagochiSightPhoto,
  sourcedHook: sanagochiSourcedHook,
  topChipForRow: sanagochiTopChipForRow,
  resolveFilter: resolveSanagochiFilter
};

const NAKA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isNakaOnsenPackRow,
  isExperiencePackRow: isNakaExperiencePackRow,
  isStayPackRow: isNakaStayPackRow,
  packRowMatchesFilter: nakaPackRowMatchesFilter,
  rankSeeRows: rankNakaSeeRows,
  sightPhoto: nakaSightPhoto,
  sourcedHook: nakaSourcedHook,
  topChipForRow: nakaTopChipForRow,
  resolveFilter: resolveNakaFilter
};

const MINAMI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMinamiOnsenPackRow,
  isExperiencePackRow: isMinamiExperiencePackRow,
  isStayPackRow: isMinamiStayPackRow,
  packRowMatchesFilter: minamiPackRowMatchesFilter,
  rankSeeRows: rankMinamiSeeRows,
  sightPhoto: minamiSightPhoto,
  sourcedHook: minamiSourcedHook,
  topChipForRow: minamiTopChipForRow,
  resolveFilter: resolveMinamiFilter
};



const KAIYO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKaiyoOnsenPackRow,
  isExperiencePackRow: isKaiyoExperiencePackRow,
  isStayPackRow: isKaiyoStayPackRow,
  packRowMatchesFilter: kaiyoPackRowMatchesFilter,
  rankSeeRows: rankKaiyoSeeRows,
  sightPhoto: kaiyoSightPhoto,
  sourcedHook: kaiyoSourcedHook,
  topChipForRow: kaiyoTopChipForRow,
  resolveFilter: resolveKaiyoFilter
};


const AIZUMI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isAizumiOnsenPackRow,
  isExperiencePackRow: isAizumiExperiencePackRow,
  isStayPackRow: isAizumiStayPackRow,
  packRowMatchesFilter: aizumiPackRowMatchesFilter,
  rankSeeRows: rankAizumiSeeRows,
  sightPhoto: aizumiSightPhoto,
  sourcedHook: aizumiSourcedHook,
  topChipForRow: aizumiTopChipForRow,
  resolveFilter: resolveAizumiFilter
};


const MUGI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMugiOnsenPackRow,
  isExperiencePackRow: isMugiExperiencePackRow,
  isStayPackRow: isMugiStayPackRow,
  packRowMatchesFilter: mugiPackRowMatchesFilter,
  rankSeeRows: rankMugiSeeRows,
  sightPhoto: mugiSightPhoto,
  sourcedHook: mugiSourcedHook,
  topChipForRow: mugiTopChipForRow,
  resolveFilter: resolveMugiFilter
};


const KOMATSUSHIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKomatsushimaOnsenPackRow,
  isExperiencePackRow: isKomatsushimaExperiencePackRow,
  isStayPackRow: isKomatsushimaStayPackRow,
  packRowMatchesFilter: komatsushimaPackRowMatchesFilter,
  rankSeeRows: rankKomatsushimaSeeRows,
  sightPhoto: komatsushimaSightPhoto,
  sourcedHook: komatsushimaSourcedHook,
  topChipForRow: komatsushimaTopChipForRow,
  resolveFilter: resolveKomatsushimaFilter
};


const ANAN_HELPERS: LookupHelpers = {
  isOnsenPackRow: isAnanOnsenPackRow,
  isExperiencePackRow: isAnanExperiencePackRow,
  isStayPackRow: isAnanStayPackRow,
  packRowMatchesFilter: ananPackRowMatchesFilter,
  rankSeeRows: rankAnanSeeRows,
  sightPhoto: ananSightPhoto,
  sourcedHook: ananSourcedHook,
  topChipForRow: ananTopChipForRow,
  resolveFilter: resolveAnanFilter
};


const TAKAMATSU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTakamatsuOnsenPackRow,
  isExperiencePackRow: isTakamatsuExperiencePackRow,
  isStayPackRow: isTakamatsuStayPackRow,
  packRowMatchesFilter: takamatsuPackRowMatchesFilter,
  rankSeeRows: rankTakamatsuSeeRows,
  sightPhoto: takamatsuSightPhoto,
  sourcedHook: takamatsuSourcedHook,
  topChipForRow: takamatsuTopChipForRow,
  resolveFilter: resolveTakamatsuFilter
};


const KOTOHIRA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKotohiraOnsenPackRow,
  isExperiencePackRow: isKotohiraExperiencePackRow,
  isStayPackRow: isKotohiraStayPackRow,
  packRowMatchesFilter: kotohiraPackRowMatchesFilter,
  rankSeeRows: rankKotohiraSeeRows,
  sightPhoto: kotohiraSightPhoto,
  sourcedHook: kotohiraSourcedHook,
  topChipForRow: kotohiraTopChipForRow,
  resolveFilter: resolveKotohiraFilter
};

const MARUGAME_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMarugameOnsenPackRow,
  isExperiencePackRow: isMarugameExperiencePackRow,
  isStayPackRow: isMarugameStayPackRow,
  packRowMatchesFilter: marugamePackRowMatchesFilter,
  rankSeeRows: rankMarugameSeeRows,
  sightPhoto: marugameSightPhoto,
  sourcedHook: marugameSourcedHook,
  topChipForRow: marugameTopChipForRow,
  resolveFilter: resolveMarugameFilter
};

const KANONJI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKanonjiOnsenPackRow,
  isExperiencePackRow: isKanonjiExperiencePackRow,
  isStayPackRow: isKanonjiStayPackRow,
  packRowMatchesFilter: kanonjiPackRowMatchesFilter,
  rankSeeRows: rankKanonjiSeeRows,
  sightPhoto: kanonjiSightPhoto,
  sourcedHook: kanonjiSourcedHook,
  topChipForRow: kanonjiTopChipForRow,
  resolveFilter: resolveKanonjiFilter
};



const SAKAIDE_HELPERS: LookupHelpers = {
  isOnsenPackRow: isSakaideOnsenPackRow,
  isExperiencePackRow: isSakaideExperiencePackRow,
  isStayPackRow: isSakaideStayPackRow,
  packRowMatchesFilter: sakaidePackRowMatchesFilter,
  rankSeeRows: rankSakaideSeeRows,
  sightPhoto: sakaideSightPhoto,
  sourcedHook: sakaideSourcedHook,
  topChipForRow: sakaideTopChipForRow,
  resolveFilter: resolveSakaideFilter
};
const NAOSHIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isNaoshimaOnsenPackRow,
  isExperiencePackRow: isNaoshimaExperiencePackRow,
  isStayPackRow: isNaoshimaStayPackRow,
  packRowMatchesFilter: naoshimaPackRowMatchesFilter,
  rankSeeRows: rankNaoshimaSeeRows,
  sightPhoto: naoshimaSightPhoto,
  sourcedHook: naoshimaSourcedHook,
  topChipForRow: naoshimaTopChipForRow,
  resolveFilter: resolveNaoshimaFilter
};



const SHODOSHIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isShodoshimaOnsenPackRow,
  isExperiencePackRow: isShodoshimaExperiencePackRow,
  isStayPackRow: isShodoshimaStayPackRow,
  packRowMatchesFilter: shodoshimaPackRowMatchesFilter,
  rankSeeRows: rankShodoshimaSeeRows,
  sightPhoto: shodoshimaSightPhoto,
  sourcedHook: shodoshimaSourcedHook,
  topChipForRow: shodoshimaTopChipForRow,
  resolveFilter: resolveShodoshimaFilter
};

const ZENTSUJI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isZentsujiOnsenPackRow,
  isExperiencePackRow: isZentsujiExperiencePackRow,
  isStayPackRow: isZentsujiStayPackRow,
  packRowMatchesFilter: zentsujiPackRowMatchesFilter,
  rankSeeRows: rankZentsujiSeeRows,
  sightPhoto: zentsujiSightPhoto,
  sourcedHook: zentsujiSourcedHook,
  topChipForRow: zentsujiTopChipForRow,
  resolveFilter: resolveZentsujiFilter
};

const MITOYO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMitoyoOnsenPackRow,
  isExperiencePackRow: isMitoyoExperiencePackRow,
  isStayPackRow: isMitoyoStayPackRow,
  packRowMatchesFilter: mitoyoPackRowMatchesFilter,
  rankSeeRows: rankMitoyoSeeRows,
  sightPhoto: mitoyoSightPhoto,
  sourcedHook: mitoyoSourcedHook,
  topChipForRow: mitoyoTopChipForRow,
  resolveFilter: resolveMitoyoFilter
};

const UTAZU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isUtazuOnsenPackRow,
  isExperiencePackRow: isUtazuExperiencePackRow,
  isStayPackRow: isUtazuStayPackRow,
  packRowMatchesFilter: utazuPackRowMatchesFilter,
  rankSeeRows: rankUtazuSeeRows,
  sightPhoto: utazuSightPhoto,
  sourcedHook: utazuSourcedHook,
  topChipForRow: utazuTopChipForRow,
  resolveFilter: resolveUtazuFilter
};

const TONOSHO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTonoshoOnsenPackRow,
  isExperiencePackRow: isTonoshoExperiencePackRow,
  isStayPackRow: isTonoshoStayPackRow,
  packRowMatchesFilter: tonoshoPackRowMatchesFilter,
  rankSeeRows: rankTonoshoSeeRows,
  sightPhoto: tonoshoSightPhoto,
  sourcedHook: tonoshoSourcedHook,
  topChipForRow: tonoshoTopChipForRow,
  resolveFilter: resolveTonoshoFilter
};

const HIGASHIKAGAWA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isHigashikagawaOnsenPackRow,
  isExperiencePackRow: isHigashikagawaExperiencePackRow,
  isStayPackRow: isHigashikagawaStayPackRow,
  packRowMatchesFilter: higashikagawaPackRowMatchesFilter,
  rankSeeRows: rankHigashikagawaSeeRows,
  sightPhoto: higashikagawaSightPhoto,
  sourcedHook: higashikagawaSourcedHook,
  topChipForRow: higashikagawaTopChipForRow,
  resolveFilter: resolveHigashikagawaFilter
};

const MIKI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMikiOnsenPackRow,
  isExperiencePackRow: isMikiExperiencePackRow,
  isStayPackRow: isMikiStayPackRow,
  packRowMatchesFilter: mikiPackRowMatchesFilter,
  rankSeeRows: rankMikiSeeRows,
  sightPhoto: mikiSightPhoto,
  sourcedHook: mikiSourcedHook,
  topChipForRow: mikiTopChipForRow,
  resolveFilter: resolveMikiFilter
};

const AYAGAWA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isAyagawaOnsenPackRow,
  isExperiencePackRow: isAyagawaExperiencePackRow,
  isStayPackRow: isAyagawaStayPackRow,
  packRowMatchesFilter: ayagawaPackRowMatchesFilter,
  rankSeeRows: rankAyagawaSeeRows,
  sightPhoto: ayagawaSightPhoto,
  sourcedHook: ayagawaSourcedHook,
  topChipForRow: ayagawaTopChipForRow,
  resolveFilter: resolveAyagawaFilter
};

const TADOTSU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTadotsuOnsenPackRow,
  isExperiencePackRow: isTadotsuExperiencePackRow,
  isStayPackRow: isTadotsuStayPackRow,
  packRowMatchesFilter: tadotsuPackRowMatchesFilter,
  rankSeeRows: rankTadotsuSeeRows,
  sightPhoto: tadotsuSightPhoto,
  sourcedHook: tadotsuSourcedHook,
  topChipForRow: tadotsuTopChipForRow,
  resolveFilter: resolveTadotsuFilter
};

const MANNO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMannoOnsenPackRow,
  isExperiencePackRow: isMannoExperiencePackRow,
  isStayPackRow: isMannoStayPackRow,
  packRowMatchesFilter: mannoPackRowMatchesFilter,
  rankSeeRows: rankMannoSeeRows,
  sightPhoto: mannoSightPhoto,
  sourcedHook: mannoSourcedHook,
  topChipForRow: mannoTopChipForRow,
  resolveFilter: resolveMannoFilter
};











const TOSASHIMIZU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTosashimizuOnsenPackRow,
  isExperiencePackRow: isTosashimizuExperiencePackRow,
  isStayPackRow: isTosashimizuStayPackRow,
  packRowMatchesFilter: tosashimizuPackRowMatchesFilter,
  rankSeeRows: rankTosashimizuSeeRows,
  sightPhoto: tosashimizuSightPhoto,
  sourcedHook: tosashimizuSourcedHook,
  topChipForRow: tosashimizuTopChipForRow,
  resolveFilter: resolveTosashimizuFilter
};

const SUKUMO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isSukumoOnsenPackRow,
  isExperiencePackRow: isSukumoExperiencePackRow,
  isStayPackRow: isSukumoStayPackRow,
  packRowMatchesFilter: sukumoPackRowMatchesFilter,
  rankSeeRows: rankSukumoSeeRows,
  sightPhoto: sukumoSightPhoto,
  sourcedHook: sukumoSourcedHook,
  topChipForRow: sukumoTopChipForRow,
  resolveFilter: resolveSukumoFilter
};




const GEISEI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isGeiseiOnsenPackRow,
  isExperiencePackRow: isGeiseiExperiencePackRow,
  isStayPackRow: isGeiseiStayPackRow,
  packRowMatchesFilter: geiseiPackRowMatchesFilter,
  rankSeeRows: rankGeiseiSeeRows,
  sightPhoto: geiseiSightPhoto,
  sourcedHook: geiseiSourcedHook,
  topChipForRow: geiseiTopChipForRow,
  resolveFilter: resolveGeiseiFilter
};


const KITAGAWA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKitagawaOnsenPackRow,
  isExperiencePackRow: isKitagawaExperiencePackRow,
  isStayPackRow: isKitagawaStayPackRow,
  packRowMatchesFilter: kitagawaPackRowMatchesFilter,
  rankSeeRows: rankKitagawaSeeRows,
  sightPhoto: kitagawaSightPhoto,
  sourcedHook: kitagawaSourcedHook,
  topChipForRow: kitagawaTopChipForRow,
  resolveFilter: resolveKitagawaFilter
};

const UMAJI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isUmajiOnsenPackRow,
  isExperiencePackRow: isUmajiExperiencePackRow,
  isStayPackRow: isUmajiStayPackRow,
  packRowMatchesFilter: umajiPackRowMatchesFilter,
  rankSeeRows: rankUmajiSeeRows,
  sightPhoto: umajiSightPhoto,
  sourcedHook: umajiSourcedHook,
  topChipForRow: umajiTopChipForRow,
  resolveFilter: resolveUmajiFilter
};

const MOTOYAMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMotoyamaOnsenPackRow,
  isExperiencePackRow: isMotoyamaExperiencePackRow,
  isStayPackRow: isMotoyamaStayPackRow,
  packRowMatchesFilter: motoyamaPackRowMatchesFilter,
  rankSeeRows: rankMotoyamaSeeRows,
  sightPhoto: motoyamaSightPhoto,
  sourcedHook: motoyamaSourcedHook,
  topChipForRow: motoyamaTopChipForRow,
  resolveFilter: resolveMotoyamaFilter
};

const OTOYO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isOtoyoOnsenPackRow,
  isExperiencePackRow: isOtoyoExperiencePackRow,
  isStayPackRow: isOtoyoStayPackRow,
  packRowMatchesFilter: otoyoPackRowMatchesFilter,
  rankSeeRows: rankOtoyoSeeRows,
  sightPhoto: otoyoSightPhoto,
  sourcedHook: otoyoSourcedHook,
  topChipForRow: otoyoTopChipForRow,
  resolveFilter: resolveOtoyoFilter
};

const TOSACHO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTosachoOnsenPackRow,
  isExperiencePackRow: isTosachoExperiencePackRow,
  isStayPackRow: isTosachoStayPackRow,
  packRowMatchesFilter: tosachoPackRowMatchesFilter,
  rankSeeRows: rankTosachoSeeRows,
  sightPhoto: tosachoSightPhoto,
  sourcedHook: tosachoSourcedHook,
  topChipForRow: tosachoTopChipForRow,
  resolveFilter: resolveTosachoFilter
};

const OKAWA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isOkawaOnsenPackRow,
  isExperiencePackRow: isOkawaExperiencePackRow,
  isStayPackRow: isOkawaStayPackRow,
  packRowMatchesFilter: okawaPackRowMatchesFilter,
  rankSeeRows: rankOkawaSeeRows,
  sightPhoto: okawaSightPhoto,
  sourcedHook: okawaSourcedHook,
  topChipForRow: okawaTopChipForRow,
  resolveFilter: resolveOkawaFilter
};

const NIYODOGAWA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isNiyodogawaOnsenPackRow,
  isExperiencePackRow: isNiyodogawaExperiencePackRow,
  isStayPackRow: isNiyodogawaStayPackRow,
  packRowMatchesFilter: niyodogawaPackRowMatchesFilter,
  rankSeeRows: rankNiyodogawaSeeRows,
  sightPhoto: niyodogawaSightPhoto,
  sourcedHook: niyodogawaSourcedHook,
  topChipForRow: niyodogawaTopChipForRow,
  resolveFilter: resolveNiyodogawaFilter
};

const OCHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isOchiOnsenPackRow,
  isExperiencePackRow: isOchiExperiencePackRow,
  isStayPackRow: isOchiStayPackRow,
  packRowMatchesFilter: ochiPackRowMatchesFilter,
  rankSeeRows: rankOchiSeeRows,
  sightPhoto: ochiSightPhoto,
  sourcedHook: ochiSourcedHook,
  topChipForRow: ochiTopChipForRow,
  resolveFilter: resolveOchiFilter
};

const YUSUHARA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isYusuharaOnsenPackRow,
  isExperiencePackRow: isYusuharaExperiencePackRow,
  isStayPackRow: isYusuharaStayPackRow,
  packRowMatchesFilter: yusuharaPackRowMatchesFilter,
  rankSeeRows: rankYusuharaSeeRows,
  sightPhoto: yusuharaSightPhoto,
  sourcedHook: yusuharaSourcedHook,
  topChipForRow: yusuharaTopChipForRow,
  resolveFilter: resolveYusuharaFilter
};

const HIDAKA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isHidakaOnsenPackRow,
  isExperiencePackRow: isHidakaExperiencePackRow,
  isStayPackRow: isHidakaStayPackRow,
  packRowMatchesFilter: hidakaPackRowMatchesFilter,
  rankSeeRows: rankHidakaSeeRows,
  sightPhoto: hidakaSightPhoto,
  sourcedHook: hidakaSourcedHook,
  topChipForRow: hidakaTopChipForRow,
  resolveFilter: resolveHidakaFilter
};

const TSUNO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTsunoOnsenPackRow,
  isExperiencePackRow: isTsunoExperiencePackRow,
  isStayPackRow: isTsunoStayPackRow,
  packRowMatchesFilter: tsunoPackRowMatchesFilter,
  rankSeeRows: rankTsunoSeeRows,
  sightPhoto: tsunoSightPhoto,
  sourcedHook: tsunoSourcedHook,
  topChipForRow: tsunoTopChipForRow,
  resolveFilter: resolveTsunoFilter
};

const SHIMANTOCHO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isShimantochoOnsenPackRow,
  isExperiencePackRow: isShimantochoExperiencePackRow,
  isStayPackRow: isShimantochoStayPackRow,
  packRowMatchesFilter: shimantochoPackRowMatchesFilter,
  rankSeeRows: rankShimantochoSeeRows,
  sightPhoto: shimantochoSightPhoto,
  sourcedHook: shimantochoSourcedHook,
  topChipForRow: shimantochoTopChipForRow,
  resolveFilter: resolveShimantochoFilter
};


const MIHARA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMiharaOnsenPackRow,
  isExperiencePackRow: isMiharaExperiencePackRow,
  isStayPackRow: isMiharaStayPackRow,
  packRowMatchesFilter: miharaPackRowMatchesFilter,
  rankSeeRows: rankMiharaSeeRows,
  sightPhoto: miharaSightPhoto,
  sourcedHook: miharaSourcedHook,
  topChipForRow: miharaTopChipForRow,
  resolveFilter: resolveMiharaFilter
};









const SEIYO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isSeiyoOnsenPackRow,
  isExperiencePackRow: isSeiyoExperiencePackRow,
  isStayPackRow: isSeiyoStayPackRow,
  packRowMatchesFilter: seiyoPackRowMatchesFilter,
  rankSeeRows: rankSeiyoSeeRows,
  sightPhoto: seiyoSightPhoto,
  sourcedHook: seiyoSourcedHook,
  topChipForRow: seiyoTopChipForRow,
  resolveFilter: resolveSeiyoFilter
};


const KAMIJIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKamijimaOnsenPackRow,
  isExperiencePackRow: isKamijimaExperiencePackRow,
  isStayPackRow: isKamijimaStayPackRow,
  packRowMatchesFilter: kamijimaPackRowMatchesFilter,
  rankSeeRows: rankKamijimaSeeRows,
  sightPhoto: kamijimaSightPhoto,
  sourcedHook: kamijimaSourcedHook,
  topChipForRow: kamijimaTopChipForRow,
  resolveFilter: resolveKamijimaFilter
};

const KUMAKOGEN_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKumakogenOnsenPackRow,
  isExperiencePackRow: isKumakogenExperiencePackRow,
  isStayPackRow: isKumakogenStayPackRow,
  packRowMatchesFilter: kumakogenPackRowMatchesFilter,
  rankSeeRows: rankKumakogenSeeRows,
  sightPhoto: kumakogenSightPhoto,
  sourcedHook: kumakogenSourcedHook,
  topChipForRow: kumakogenTopChipForRow,
  resolveFilter: resolveKumakogenFilter
};

const MASAKI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMasakiOnsenPackRow,
  isExperiencePackRow: isMasakiExperiencePackRow,
  isStayPackRow: isMasakiStayPackRow,
  packRowMatchesFilter: masakiPackRowMatchesFilter,
  rankSeeRows: rankMasakiSeeRows,
  sightPhoto: masakiSightPhoto,
  sourcedHook: masakiSourcedHook,
  topChipForRow: masakiTopChipForRow,
  resolveFilter: resolveMasakiFilter
};


const UCHIKO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isUchikoOnsenPackRow,
  isExperiencePackRow: isUchikoExperiencePackRow,
  isStayPackRow: isUchikoStayPackRow,
  packRowMatchesFilter: uchikoPackRowMatchesFilter,
  rankSeeRows: rankUchikoSeeRows,
  sightPhoto: uchikoSightPhoto,
  sourcedHook: uchikoSourcedHook,
  topChipForRow: uchikoTopChipForRow,
  resolveFilter: resolveUchikoFilter
};


const MATSUNO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMatsunoOnsenPackRow,
  isExperiencePackRow: isMatsunoExperiencePackRow,
  isStayPackRow: isMatsunoStayPackRow,
  packRowMatchesFilter: matsunoPackRowMatchesFilter,
  rankSeeRows: rankMatsunoSeeRows,
  sightPhoto: matsunoSightPhoto,
  sourcedHook: matsunoSourcedHook,
  topChipForRow: matsunoTopChipForRow,
  resolveFilter: resolveMatsunoFilter
};


const AINAN_HELPERS: LookupHelpers = {
  isOnsenPackRow: isAinanOnsenPackRow,
  isExperiencePackRow: isAinanExperiencePackRow,
  isStayPackRow: isAinanStayPackRow,
  packRowMatchesFilter: ainanPackRowMatchesFilter,
  rankSeeRows: rankAinanSeeRows,
  sightPhoto: ainanSightPhoto,
  sourcedHook: ainanSourcedHook,
  topChipForRow: ainanTopChipForRow,
  resolveFilter: resolveAinanFilter
};

const HIROSHIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isHiroshimaOnsenPackRow,
  isExperiencePackRow: isHiroshimaExperiencePackRow,
  isStayPackRow: isHiroshimaStayPackRow,
  packRowMatchesFilter: hiroshimaPackRowMatchesFilter,
  rankSeeRows: rankHiroshimaSeeRows,
  sightPhoto: hiroshimaSightPhoto,
  sourcedHook: hiroshimaSourcedHook,
  topChipForRow: hiroshimaTopChipForRow,
  resolveFilter: resolveHiroshimaFilter
};

const KURE_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKureOnsenPackRow,
  isExperiencePackRow: isKureExperiencePackRow,
  isStayPackRow: isKureStayPackRow,
  packRowMatchesFilter: kurePackRowMatchesFilter,
  rankSeeRows: rankKureSeeRows,
  sightPhoto: kureSightPhoto,
  sourcedHook: kureSourcedHook,
  topChipForRow: kureTopChipForRow,
  resolveFilter: resolveKureFilter
};

const TAKEHARA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTakeharaOnsenPackRow,
  isExperiencePackRow: isTakeharaExperiencePackRow,
  isStayPackRow: isTakeharaStayPackRow,
  packRowMatchesFilter: takeharaPackRowMatchesFilter,
  rankSeeRows: rankTakeharaSeeRows,
  sightPhoto: takeharaSightPhoto,
  sourcedHook: takeharaSourcedHook,
  topChipForRow: takeharaTopChipForRow,
  resolveFilter: resolveTakeharaFilter
};


const ONOMICHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isOnomichiOnsenPackRow,
  isExperiencePackRow: isOnomichiExperiencePackRow,
  isStayPackRow: isOnomichiStayPackRow,
  packRowMatchesFilter: onomichiPackRowMatchesFilter,
  rankSeeRows: rankOnomichiSeeRows,
  sightPhoto: onomichiSightPhoto,
  sourcedHook: onomichiSourcedHook,
  topChipForRow: onomichiTopChipForRow,
  resolveFilter: resolveOnomichiFilter
};



const MIYOSHISHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMiyoshishiOnsenPackRow,
  isExperiencePackRow: isMiyoshishiExperiencePackRow,
  isStayPackRow: isMiyoshishiStayPackRow,
  packRowMatchesFilter: miyoshishiPackRowMatchesFilter,
  rankSeeRows: rankMiyoshishiSeeRows,
  sightPhoto: miyoshishiSightPhoto,
  sourcedHook: miyoshishiSourcedHook,
  topChipForRow: miyoshishiTopChipForRow,
  resolveFilter: resolveMiyoshishiFilter
};


const SHOBARA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isShobaraOnsenPackRow,
  isExperiencePackRow: isShobaraExperiencePackRow,
  isStayPackRow: isShobaraStayPackRow,
  packRowMatchesFilter: shobaraPackRowMatchesFilter,
  rankSeeRows: rankShobaraSeeRows,
  sightPhoto: shobaraSightPhoto,
  sourcedHook: shobaraSourcedHook,
  topChipForRow: shobaraTopChipForRow,
  resolveFilter: resolveShobaraFilter
};


const OTAKE_HELPERS: LookupHelpers = {
  isOnsenPackRow: isOtakeOnsenPackRow,
  isExperiencePackRow: isOtakeExperiencePackRow,
  isStayPackRow: isOtakeStayPackRow,
  packRowMatchesFilter: otakePackRowMatchesFilter,
  rankSeeRows: rankOtakeSeeRows,
  sightPhoto: otakeSightPhoto,
  sourcedHook: otakeSourcedHook,
  topChipForRow: otakeTopChipForRow,
  resolveFilter: resolveOtakeFilter
};


const HIGASHIHIROSHIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isHigashihiroshimaOnsenPackRow,
  isExperiencePackRow: isHigashihiroshimaExperiencePackRow,
  isStayPackRow: isHigashihiroshimaStayPackRow,
  packRowMatchesFilter: higashihiroshimaPackRowMatchesFilter,
  rankSeeRows: rankHigashihiroshimaSeeRows,
  sightPhoto: higashihiroshimaSightPhoto,
  sourcedHook: higashihiroshimaSourcedHook,
  topChipForRow: higashihiroshimaTopChipForRow,
  resolveFilter: resolveHigashihiroshimaFilter
};








const SAKA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isSakaOnsenPackRow,
  isExperiencePackRow: isSakaExperiencePackRow,
  isStayPackRow: isSakaStayPackRow,
  packRowMatchesFilter: sakaPackRowMatchesFilter,
  rankSeeRows: rankSakaSeeRows,
  sightPhoto: sakaSightPhoto,
  sourcedHook: sakaSourcedHook,
  topChipForRow: sakaTopChipForRow,
  resolveFilter: resolveSakaFilter
};

const KUMANO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKumanoOnsenPackRow,
  isExperiencePackRow: isKumanoExperiencePackRow,
  isStayPackRow: isKumanoStayPackRow,
  packRowMatchesFilter: kumanoPackRowMatchesFilter,
  rankSeeRows: rankKumanoSeeRows,
  sightPhoto: kumanoSightPhoto,
  sourcedHook: kumanoSourcedHook,
  topChipForRow: kumanoTopChipForRow,
  resolveFilter: resolveKumanoFilter
};

const KAITA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKaitaOnsenPackRow,
  isExperiencePackRow: isKaitaExperiencePackRow,
  isStayPackRow: isKaitaStayPackRow,
  packRowMatchesFilter: kaitaPackRowMatchesFilter,
  rankSeeRows: rankKaitaSeeRows,
  sightPhoto: kaitaSightPhoto,
  sourcedHook: kaitaSourcedHook,
  topChipForRow: kaitaTopChipForRow,
  resolveFilter: resolveKaitaFilter
};

const FUCHUCHO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isFuchuchoOnsenPackRow,
  isExperiencePackRow: isFuchuchoExperiencePackRow,
  isStayPackRow: isFuchuchoStayPackRow,
  packRowMatchesFilter: fuchuchoPackRowMatchesFilter,
  rankSeeRows: rankFuchuchoSeeRows,
  sightPhoto: fuchuchoSightPhoto,
  sourcedHook: fuchuchoSourcedHook,
  topChipForRow: fuchuchoTopChipForRow,
  resolveFilter: resolveFuchuchoFilter
};

const ETAJIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isEtajimaOnsenPackRow,
  isExperiencePackRow: isEtajimaExperiencePackRow,
  isStayPackRow: isEtajimaStayPackRow,
  packRowMatchesFilter: etajimaPackRowMatchesFilter,
  rankSeeRows: rankEtajimaSeeRows,
  sightPhoto: etajimaSightPhoto,
  sourcedHook: etajimaSourcedHook,
  topChipForRow: etajimaTopChipForRow,
  resolveFilter: resolveEtajimaFilter
};

const AKITAKATA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isAkitakataOnsenPackRow,
  isExperiencePackRow: isAkitakataExperiencePackRow,
  isStayPackRow: isAkitakataStayPackRow,
  packRowMatchesFilter: akitakataPackRowMatchesFilter,
  rankSeeRows: rankAkitakataSeeRows,
  sightPhoto: akitakataSightPhoto,
  sourcedHook: akitakataSourcedHook,
  topChipForRow: akitakataTopChipForRow,
  resolveFilter: resolveAkitakataFilter
};

const HATSUKAICHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isHatsukaichiOnsenPackRow,
  isExperiencePackRow: isHatsukaichiExperiencePackRow,
  isStayPackRow: isHatsukaichiStayPackRow,
  packRowMatchesFilter: hatsukaichiPackRowMatchesFilter,
  rankSeeRows: rankHatsukaichiSeeRows,
  sightPhoto: hatsukaichiSightPhoto,
  sourcedHook: hatsukaichiSourcedHook,
  topChipForRow: hatsukaichiTopChipForRow,
  resolveFilter: resolveHatsukaichiFilter
};





const FUCHU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isFuchuOnsenPackRow,
  isExperiencePackRow: isFuchuExperiencePackRow,
  isStayPackRow: isFuchuStayPackRow,
  packRowMatchesFilter: fuchuPackRowMatchesFilter,
  rankSeeRows: rankFuchuSeeRows,
  sightPhoto: fuchuSightPhoto,
  sourcedHook: fuchuSourcedHook,
  topChipForRow: fuchuTopChipForRow,
  resolveFilter: resolveFuchuFilter
};

const FUKUYAMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isFukuyamaOnsenPackRow,
  isExperiencePackRow: isFukuyamaExperiencePackRow,
  isStayPackRow: isFukuyamaStayPackRow,
  packRowMatchesFilter: fukuyamaPackRowMatchesFilter,
  rankSeeRows: rankFukuyamaSeeRows,
  sightPhoto: fukuyamaSightPhoto,
  sourcedHook: fukuyamaSourcedHook,
  topChipForRow: fukuyamaTopChipForRow,
  resolveFilter: resolveFukuyamaFilter
};

const MIHARASHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMiharashiOnsenPackRow,
  isExperiencePackRow: isMiharashiExperiencePackRow,
  isStayPackRow: isMiharashiStayPackRow,
  packRowMatchesFilter: miharashiPackRowMatchesFilter,
  rankSeeRows: rankMiharashiSeeRows,
  sightPhoto: miharashiSightPhoto,
  sourcedHook: miharashiSourcedHook,
  topChipForRow: miharashiTopChipForRow,
  resolveFilter: resolveMiharashiFilter
};

const KIHOKU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKihokuOnsenPackRow,
  isExperiencePackRow: isKihokuExperiencePackRow,
  isStayPackRow: isKihokuStayPackRow,
  packRowMatchesFilter: kihokuPackRowMatchesFilter,
  rankSeeRows: rankKihokuSeeRows,
  sightPhoto: kihokuSightPhoto,
  sourcedHook: kihokuSourcedHook,
  topChipForRow: kihokuTopChipForRow,
  resolveFilter: resolveKihokuFilter
};

const IKATA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isIkataOnsenPackRow,
  isExperiencePackRow: isIkataExperiencePackRow,
  isStayPackRow: isIkataStayPackRow,
  packRowMatchesFilter: ikataPackRowMatchesFilter,
  rankSeeRows: rankIkataSeeRows,
  sightPhoto: ikataSightPhoto,
  sourcedHook: ikataSourcedHook,
  topChipForRow: ikataTopChipForRow,
  resolveFilter: resolveIkataFilter
};

const TOBE_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTobeOnsenPackRow,
  isExperiencePackRow: isTobeExperiencePackRow,
  isStayPackRow: isTobeStayPackRow,
  packRowMatchesFilter: tobePackRowMatchesFilter,
  rankSeeRows: rankTobeSeeRows,
  sightPhoto: tobeSightPhoto,
  sourcedHook: tobeSourcedHook,
  topChipForRow: tobeTopChipForRow,
  resolveFilter: resolveTobeFilter
};

const TOON_HELPERS: LookupHelpers = {
  isOnsenPackRow: isToonOnsenPackRow,
  isExperiencePackRow: isToonExperiencePackRow,
  isStayPackRow: isToonStayPackRow,
  packRowMatchesFilter: toonPackRowMatchesFilter,
  rankSeeRows: rankToonSeeRows,
  sightPhoto: toonSightPhoto,
  sourcedHook: toonSourcedHook,
  topChipForRow: toonTopChipForRow,
  resolveFilter: resolveToonFilter
};

const SHIKOKUCHUO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isShikokuchuoOnsenPackRow,
  isExperiencePackRow: isShikokuchuoExperiencePackRow,
  isStayPackRow: isShikokuchuoStayPackRow,
  packRowMatchesFilter: shikokuchuoPackRowMatchesFilter,
  rankSeeRows: rankShikokuchuoSeeRows,
  sightPhoto: shikokuchuoSightPhoto,
  sourcedHook: shikokuchuoSourcedHook,
  topChipForRow: shikokuchuoTopChipForRow,
  resolveFilter: resolveShikokuchuoFilter
};

const IYO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isIyoOnsenPackRow,
  isExperiencePackRow: isIyoExperiencePackRow,
  isStayPackRow: isIyoStayPackRow,
  packRowMatchesFilter: iyoPackRowMatchesFilter,
  rankSeeRows: rankIyoSeeRows,
  sightPhoto: iyoSightPhoto,
  sourcedHook: iyoSourcedHook,
  topChipForRow: iyoTopChipForRow,
  resolveFilter: resolveIyoFilter
};

const OZU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isOzuOnsenPackRow,
  isExperiencePackRow: isOzuExperiencePackRow,
  isStayPackRow: isOzuStayPackRow,
  packRowMatchesFilter: ozuPackRowMatchesFilter,
  rankSeeRows: rankOzuSeeRows,
  sightPhoto: ozuSightPhoto,
  sourcedHook: ozuSourcedHook,
  topChipForRow: ozuTopChipForRow,
  resolveFilter: resolveOzuFilter
};

const SAIJO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isSaijoOnsenPackRow,
  isExperiencePackRow: isSaijoExperiencePackRow,
  isStayPackRow: isSaijoStayPackRow,
  packRowMatchesFilter: saijoPackRowMatchesFilter,
  rankSeeRows: rankSaijoSeeRows,
  sightPhoto: saijoSightPhoto,
  sourcedHook: saijoSourcedHook,
  topChipForRow: saijoTopChipForRow,
  resolveFilter: resolveSaijoFilter
};

const NIIHAMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isNiihamaOnsenPackRow,
  isExperiencePackRow: isNiihamaExperiencePackRow,
  isStayPackRow: isNiihamaStayPackRow,
  packRowMatchesFilter: niihamaPackRowMatchesFilter,
  rankSeeRows: rankNiihamaSeeRows,
  sightPhoto: niihamaSightPhoto,
  sourcedHook: niihamaSourcedHook,
  topChipForRow: niihamaTopChipForRow,
  resolveFilter: resolveNiihamaFilter
};

const YAWATAHAMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isYawatahamaOnsenPackRow,
  isExperiencePackRow: isYawatahamaExperiencePackRow,
  isStayPackRow: isYawatahamaStayPackRow,
  packRowMatchesFilter: yawatahamaPackRowMatchesFilter,
  rankSeeRows: rankYawatahamaSeeRows,
  sightPhoto: yawatahamaSightPhoto,
  sourcedHook: yawatahamaSourcedHook,
  topChipForRow: yawatahamaTopChipForRow,
  resolveFilter: resolveYawatahamaFilter
};

const UWAJIMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isUwajimaOnsenPackRow,
  isExperiencePackRow: isUwajimaExperiencePackRow,
  isStayPackRow: isUwajimaStayPackRow,
  packRowMatchesFilter: uwajimaPackRowMatchesFilter,
  rankSeeRows: rankUwajimaSeeRows,
  sightPhoto: uwajimaSightPhoto,
  sourcedHook: uwajimaSourcedHook,
  topChipForRow: uwajimaTopChipForRow,
  resolveFilter: resolveUwajimaFilter
};

const IMABARI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isImabariOnsenPackRow,
  isExperiencePackRow: isImabariExperiencePackRow,
  isStayPackRow: isImabariStayPackRow,
  packRowMatchesFilter: imabariPackRowMatchesFilter,
  rankSeeRows: rankImabariSeeRows,
  sightPhoto: imabariSightPhoto,
  sourcedHook: imabariSourcedHook,
  topChipForRow: imabariTopChipForRow,
  resolveFilter: resolveImabariFilter
};

const MATSUYAMA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMatsuyamaOnsenPackRow,
  isExperiencePackRow: isMatsuyamaExperiencePackRow,
  isStayPackRow: isMatsuyamaStayPackRow,
  packRowMatchesFilter: matsuyamaPackRowMatchesFilter,
  rankSeeRows: rankMatsuyamaSeeRows,
  sightPhoto: matsuyamaSightPhoto,
  sourcedHook: matsuyamaSourcedHook,
  topChipForRow: matsuyamaTopChipForRow,
  resolveFilter: resolveMatsuyamaFilter
};

const OTSUKI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isOtsukiOnsenPackRow,
  isExperiencePackRow: isOtsukiExperiencePackRow,
  isStayPackRow: isOtsukiStayPackRow,
  packRowMatchesFilter: otsukiPackRowMatchesFilter,
  rankSeeRows: rankOtsukiSeeRows,
  sightPhoto: otsukiSightPhoto,
  sourcedHook: otsukiSourcedHook,
  topChipForRow: otsukiTopChipForRow,
  resolveFilter: resolveOtsukiFilter
};


const NAKATOSA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isNakatosaOnsenPackRow,
  isExperiencePackRow: isNakatosaExperiencePackRow,
  isStayPackRow: isNakatosaStayPackRow,
  packRowMatchesFilter: nakatosaPackRowMatchesFilter,
  rankSeeRows: rankNakatosaSeeRows,
  sightPhoto: nakatosaSightPhoto,
  sourcedHook: nakatosaSourcedHook,
  topChipForRow: nakatosaTopChipForRow,
  resolveFilter: resolveNakatosaFilter
};




const YASUDA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isYasudaOnsenPackRow,
  isExperiencePackRow: isYasudaExperiencePackRow,
  isStayPackRow: isYasudaStayPackRow,
  packRowMatchesFilter: yasudaPackRowMatchesFilter,
  rankSeeRows: rankYasudaSeeRows,
  sightPhoto: yasudaSightPhoto,
  sourcedHook: yasudaSourcedHook,
  topChipForRow: yasudaTopChipForRow,
  resolveFilter: resolveYasudaFilter
};

const NAHARI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isNahariOnsenPackRow,
  isExperiencePackRow: isNahariExperiencePackRow,
  isStayPackRow: isNahariStayPackRow,
  packRowMatchesFilter: nahariPackRowMatchesFilter,
  rankSeeRows: rankNahariSeeRows,
  sightPhoto: nahariSightPhoto,
  sourcedHook: nahariSourcedHook,
  topChipForRow: nahariTopChipForRow,
  resolveFilter: resolveNahariFilter
};

const TOYO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isToyoOnsenPackRow,
  isExperiencePackRow: isToyoExperiencePackRow,
  isStayPackRow: isToyoStayPackRow,
  packRowMatchesFilter: toyoPackRowMatchesFilter,
  rankSeeRows: rankToyoSeeRows,
  sightPhoto: toyoSightPhoto,
  sourcedHook: toyoSourcedHook,
  topChipForRow: toyoTopChipForRow,
  resolveFilter: resolveToyoFilter
};

const KUROSHIO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKuroshioOnsenPackRow,
  isExperiencePackRow: isKuroshioExperiencePackRow,
  isStayPackRow: isKuroshioStayPackRow,
  packRowMatchesFilter: kuroshioPackRowMatchesFilter,
  rankSeeRows: rankKuroshioSeeRows,
  sightPhoto: kuroshioSightPhoto,
  sourcedHook: kuroshioSourcedHook,
  topChipForRow: kuroshioTopChipForRow,
  resolveFilter: resolveKuroshioFilter
};

const SHIMANTO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isShimantoOnsenPackRow,
  isExperiencePackRow: isShimantoExperiencePackRow,
  isStayPackRow: isShimantoStayPackRow,
  packRowMatchesFilter: shimantoPackRowMatchesFilter,
  rankSeeRows: rankShimantoSeeRows,
  sightPhoto: shimantoSightPhoto,
  sourcedHook: shimantoSourcedHook,
  topChipForRow: shimantoTopChipForRow,
  resolveFilter: resolveShimantoFilter
};

const SUSAKI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isSusakiOnsenPackRow,
  isExperiencePackRow: isSusakiExperiencePackRow,
  isStayPackRow: isSusakiStayPackRow,
  packRowMatchesFilter: susakiPackRowMatchesFilter,
  rankSeeRows: rankSusakiSeeRows,
  sightPhoto: susakiSightPhoto,
  sourcedHook: susakiSourcedHook,
  topChipForRow: susakiTopChipForRow,
  resolveFilter: resolveSusakiFilter
};

const TOSA_HELPERS: LookupHelpers = {
  isOnsenPackRow: isTosaOnsenPackRow,
  isExperiencePackRow: isTosaExperiencePackRow,
  isStayPackRow: isTosaStayPackRow,
  packRowMatchesFilter: tosaPackRowMatchesFilter,
  rankSeeRows: rankTosaSeeRows,
  sightPhoto: tosaSightPhoto,
  sourcedHook: tosaSourcedHook,
  topChipForRow: tosaTopChipForRow,
  resolveFilter: resolveTosaFilter
};

const MUROTO_HELPERS: LookupHelpers = {
  isOnsenPackRow: isMurotoOnsenPackRow,
  isExperiencePackRow: isMurotoExperiencePackRow,
  isStayPackRow: isMurotoStayPackRow,
  packRowMatchesFilter: murotoPackRowMatchesFilter,
  rankSeeRows: rankMurotoSeeRows,
  sightPhoto: murotoSightPhoto,
  sourcedHook: murotoSourcedHook,
  topChipForRow: murotoTopChipForRow,
  resolveFilter: resolveMurotoFilter
};

const AKI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isAkiOnsenPackRow,
  isExperiencePackRow: isAkiExperiencePackRow,
  isStayPackRow: isAkiStayPackRow,
  packRowMatchesFilter: akiPackRowMatchesFilter,
  rankSeeRows: rankAkiSeeRows,
  sightPhoto: akiSightPhoto,
  sourcedHook: akiSourcedHook,
  topChipForRow: akiTopChipForRow,
  resolveFilter: resolveAkiFilter
};

const INO_HELPERS: LookupHelpers = {
  resolveFilter: resolveInoFilter,
  rankSeeRows: rankInoSeeRows,
  packRowMatchesFilter: inoPackRowMatchesFilter,
  isOnsenPackRow: isInoOnsenPackRow,
  isExperiencePackRow: isInoExperiencePackRow,
  isStayPackRow: isInoStayPackRow,
  sightPhoto: inoSightPhoto,
  sourcedHook: inoSourcedHook,
  topChipForRow: inoTopChipForRow
};

const KAMI_HELPERS: LookupHelpers = {
  resolveFilter: resolveKamiFilter,
  rankSeeRows: rankKamiSeeRows,
  packRowMatchesFilter: kamiPackRowMatchesFilter,
  isOnsenPackRow: isKamiOnsenPackRow,
  isExperiencePackRow: isKamiExperiencePackRow,
  isStayPackRow: isKamiStayPackRow,
  sightPhoto: kamiSightPhoto,
  sourcedHook: kamiSourcedHook,
  topChipForRow: kamiTopChipForRow
};

const KONAN_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKonanOnsenPackRow,
  isExperiencePackRow: isKonanExperiencePackRow,
  isStayPackRow: isKonanStayPackRow,
  packRowMatchesFilter: konanPackRowMatchesFilter,
  rankSeeRows: rankKonanSeeRows,
  sightPhoto: konanSightPhoto,
  sourcedHook: konanSourcedHook,
  topChipForRow: konanTopChipForRow,
  resolveFilter: resolveKonanFilter
};

const NANKOKU_HELPERS: LookupHelpers = {
  isOnsenPackRow: isNankokuOnsenPackRow,
  isExperiencePackRow: isNankokuExperiencePackRow,
  isStayPackRow: isNankokuStayPackRow,
  packRowMatchesFilter: nankokuPackRowMatchesFilter,
  rankSeeRows: rankNankokuSeeRows,
  sightPhoto: nankokuSightPhoto,
  sourcedHook: nankokuSourcedHook,
  topChipForRow: nankokuTopChipForRow,
  resolveFilter: resolveNankokuFilter
};

const KOCHI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isKochiOnsenPackRow,
  isExperiencePackRow: isKochiExperiencePackRow,
  isStayPackRow: isKochiStayPackRow,
  packRowMatchesFilter: kochiPackRowMatchesFilter,
  rankSeeRows: rankKochiSeeRows,
  sightPhoto: kochiSightPhoto,
  sourcedHook: kochiSourcedHook,
  topChipForRow: kochiTopChipForRow,
  resolveFilter: resolveKochiFilter
};






const SANUKI_HELPERS: LookupHelpers = {
  isOnsenPackRow: isSanukiOnsenPackRow,
  isExperiencePackRow: isSanukiExperiencePackRow,
  isStayPackRow: isSanukiStayPackRow,
  packRowMatchesFilter: sanukiPackRowMatchesFilter,
  rankSeeRows: rankSanukiSeeRows,
  sightPhoto: sanukiSightPhoto,
  sourcedHook: sanukiSourcedHook,
  topChipForRow: sanukiTopChipForRow,
  resolveFilter: resolveSanukiFilter
};

export function townHelpers(slug: ReadySlug): LookupHelpers {

  if (slug === 'tsurugi') return TSURUGI_HELPERS;
  if (slug === 'yoshinogawa') return YOSHINOGAWA_HELPERS;
  if (slug === 'miyoshi') return MIYOSHI_HELPERS;
  if (slug === 'tokushima') return TOKUSHIMA_CITY_HELPERS;
  if (slug === 'awa') return AWA_HELPERS;
  if (slug === 'higashimiyoshi') return HIGASHIMIYOSHI_HELPERS;
  if (slug === 'kitajima') return KITAJIMA_HELPERS;
  if (slug === 'naruto') return NARUTO_HELPERS;
  if (slug === 'matsushige') return MATSUSHIGE_HELPERS;
  if (slug === 'ishii') return ISHII_HELPERS;
  if (slug === 'itano') return ITANO_HELPERS;
  if (slug === 'kamiita') return KAMIITA_HELPERS;
  if (slug === 'kamiyama') return KAMIYAMA_HELPERS;
  if (slug === 'katsuura') return KATSUURA_HELPERS;
  if (slug === 'kamikatsu') return KAMIKATSU_HELPERS;
  if (slug === 'sanagochi') return SANAGOCHI_HELPERS;
  if (slug === 'naka') return NAKA_HELPERS;
  if (slug === 'mugi') return MUGI_HELPERS;
  if (slug === 'minami') return MINAMI_HELPERS;
  if (slug === 'kaiyo') return KAIYO_HELPERS;
  if (slug === 'aizumi') return AIZUMI_HELPERS;
  if (slug === 'komatsushima') return KOMATSUSHIMA_HELPERS;
  if (slug === 'anan') return ANAN_HELPERS;
  if (slug === 'takamatsu') return TAKAMATSU_HELPERS;
  if (slug === 'kotohira') return KOTOHIRA_HELPERS;
  if (slug === 'marugame') return MARUGAME_HELPERS;
  if (slug === 'kanonji') return KANONJI_HELPERS;
  if (slug === 'sakaide') return SAKAIDE_HELPERS;
  if (slug === 'naoshima') return NAOSHIMA_HELPERS;
  if (slug === 'shodoshima') return SHODOSHIMA_HELPERS;
  if (slug === 'zentsuji') return ZENTSUJI_HELPERS;
  if (slug === 'mitoyo') return MITOYO_HELPERS;
  if (slug === 'utazu') return UTAZU_HELPERS;
  if (slug === 'tonosho') return TONOSHO_HELPERS;
  if (slug === 'sanuki') return SANUKI_HELPERS;
  if (slug === 'higashikagawa') return HIGASHIKAGAWA_HELPERS;
  if (slug === 'miki') return MIKI_HELPERS;
  if (slug === 'ayagawa') return AYAGAWA_HELPERS;
  if (slug === 'tadotsu') return TADOTSU_HELPERS;
  if (slug === 'manno') return MANNO_HELPERS;
  if (slug === 'kochi') return KOCHI_HELPERS;
  if (slug === 'nankoku') return NANKOKU_HELPERS;
  if (slug === 'konan') return KONAN_HELPERS;
  if (slug === 'kami') return KAMI_HELPERS;
  if (slug === 'ino') return INO_HELPERS;
  if (slug === 'aki') return AKI_HELPERS;
  if (slug === 'muroto') return MUROTO_HELPERS;
  if (slug === 'tosa') return TOSA_HELPERS;
  if (slug === 'susaki') return SUSAKI_HELPERS;
  if (slug === 'shimanto') return SHIMANTO_HELPERS;
  if (slug === 'tosashimizu') return TOSASHIMIZU_HELPERS;
  if (slug === 'sukumo') return SUKUMO_HELPERS;
  if (slug === 'kuroshio') return KUROSHIO_HELPERS;
  if (slug === 'toyo') return TOYO_HELPERS;
  if (slug === 'nahari') return NAHARI_HELPERS;
  if (slug === 'yasuda') return YASUDA_HELPERS;
  if (slug === 'geisei') return GEISEI_HELPERS;
  if (slug === 'kitagawa') return KITAGAWA_HELPERS;
  if (slug === 'umaji') return UMAJI_HELPERS;
  if (slug === 'motoyama') return MOTOYAMA_HELPERS;
  if (slug === 'otoyo') return OTOYO_HELPERS;
  if (slug === 'tosacho') return TOSACHO_HELPERS;
  if (slug === 'okawa') return OKAWA_HELPERS;
  if (slug === 'niyodogawa') return NIYODOGAWA_HELPERS;
  if (slug === 'nakatosa') return NAKATOSA_HELPERS;
  if (slug === 'ochi') return OCHI_HELPERS;
  if (slug === 'yusuhara') return YUSUHARA_HELPERS;
  if (slug === 'hidaka') return HIDAKA_HELPERS;
  if (slug === 'tsuno') return TSUNO_HELPERS;
  if (slug === 'shimantocho') return SHIMANTOCHO_HELPERS;
  if (slug === 'otsuki') return OTSUKI_HELPERS;
  if (slug === 'mihara') return MIHARA_HELPERS;
  if (slug === 'matsuyama') return MATSUYAMA_HELPERS;
  if (slug === 'imabari') return IMABARI_HELPERS;
  if (slug === 'uwajima') return UWAJIMA_HELPERS;
  if (slug === 'yawatahama') return YAWATAHAMA_HELPERS;
  if (slug === 'niihama') return NIIHAMA_HELPERS;
  if (slug === 'saijo') return SAIJO_HELPERS;
  if (slug === 'ozu') return OZU_HELPERS;
  if (slug === 'iyo') return IYO_HELPERS;
  if (slug === 'shikokuchuo') return SHIKOKUCHUO_HELPERS;
  if (slug === 'seiyo') return SEIYO_HELPERS;
  if (slug === 'toon') return TOON_HELPERS;
  if (slug === 'kamijima') return KAMIJIMA_HELPERS;
  if (slug === 'kumakogen') return KUMAKOGEN_HELPERS;
  if (slug === 'masaki') return MASAKI_HELPERS;
  if (slug === 'tobe') return TOBE_HELPERS;
  if (slug === 'uchiko') return UCHIKO_HELPERS;
  if (slug === 'ikata') return IKATA_HELPERS;
  if (slug === 'matsuno') return MATSUNO_HELPERS;
  if (slug === 'kihoku') return KIHOKU_HELPERS;
  if (slug === 'ainan') return AINAN_HELPERS;
  if (slug === 'hiroshima') return HIROSHIMA_HELPERS;
  if (slug === 'kure') return KURE_HELPERS;
  if (slug === 'takehara') return TAKEHARA_HELPERS;
  if (slug === 'miharashi') return MIHARASHI_HELPERS;
  if (slug === 'onomichi') return ONOMICHI_HELPERS;
  if (slug === 'fukuyama') return FUKUYAMA_HELPERS;
  if (slug === 'fuchu') return FUCHU_HELPERS;
  if (slug === 'miyoshishi') return MIYOSHISHI_HELPERS;
  if (slug === 'shobara') return SHOBARA_HELPERS;
  if (slug === 'otake') return OTAKE_HELPERS;
  if (slug === 'higashihiroshima') return HIGASHIHIROSHIMA_HELPERS;
  if (slug === 'akitakata') return AKITAKATA_HELPERS;
  if (slug === 'hatsukaichi') return HATSUKAICHI_HELPERS;
  if (slug === 'etajima') return ETAJIMA_HELPERS;
  if (slug === 'fuchucho') return FUCHUCHO_HELPERS;
  if (slug === 'kaita') return KAITA_HELPERS;
  if (slug === 'kumano') return KUMANO_HELPERS;
  if (slug === 'saka') return SAKA_HELPERS;
  return MIMA_HELPERS;
}
