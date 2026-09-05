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
  return MIMA_HELPERS;
}
