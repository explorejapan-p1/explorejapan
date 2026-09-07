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
  return MIMA_HELPERS;
}
