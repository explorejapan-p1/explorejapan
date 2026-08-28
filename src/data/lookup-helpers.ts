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

export function townHelpers(slug: ReadySlug): LookupHelpers {
  return slug === 'tsurugi' ? TSURUGI_HELPERS : MIMA_HELPERS;
}
