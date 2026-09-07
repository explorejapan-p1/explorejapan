import {
  KAGAWA_MUNICIPALITIES,
  KAGAWA_MUNICIPALITY_BY_SLUG,
  type Municipality
} from './kagawa-municipalities';
import {
  TOKUSHIMA_MUNICIPALITIES,
  MUNICIPALITY_BY_SLUG as TOKUSHIMA_BY_SLUG
} from './tokushima-municipalities';
import type {PrefSlug} from './lookup-town';

export type {Municipality};

export function municipalitiesForPref(pref: string): Municipality[] {
  if (pref === 'tokushima') return TOKUSHIMA_MUNICIPALITIES;
  if (pref === 'kagawa') return KAGAWA_MUNICIPALITIES;
  return [];
}

export function municipalityBySlug(
  pref: string,
  slug: string
): Municipality | undefined {
  if (pref === 'tokushima') return TOKUSHIMA_BY_SLUG.get(slug);
  if (pref === 'kagawa') return KAGAWA_MUNICIPALITY_BY_SLUG.get(slug);
  return undefined;
}

export function prefHasMunicipalityLayer(pref: string): pref is PrefSlug {
  return pref === 'tokushima' || pref === 'kagawa';
}

export function allMunicipalityStaticParams(): {prefecture: string; municipality: string}[] {
  return [
    ...TOKUSHIMA_MUNICIPALITIES.map((m) => ({prefecture: 'tokushima', municipality: m.slug})),
    ...KAGAWA_MUNICIPALITIES.map((m) => ({prefecture: 'kagawa', municipality: m.slug}))
  ];
}
