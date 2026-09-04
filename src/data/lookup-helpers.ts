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

export function townHelpers(slug: ReadySlug): LookupHelpers {
  if (slug === 'tsurugi') return TSURUGI_HELPERS;
  if (slug === 'yoshinogawa') return YOSHINOGAWA_HELPERS;
  if (slug === 'miyoshi') return MIYOSHI_HELPERS;
  if (slug === 'tokushima') return TOKUSHIMA_CITY_HELPERS;
  if (slug === 'awa') return AWA_HELPERS;
  if (slug === 'higashimiyoshi') return HIGASHIMIYOSHI_HELPERS;
  return MIMA_HELPERS;
}
