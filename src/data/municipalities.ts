import {
  KAGAWA_MUNICIPALITIES,
  KAGAWA_MUNICIPALITY_BY_SLUG,
  type Municipality
} from './kagawa-municipalities';
import {
  KOCHI_MUNICIPALITIES,
  KOCHI_MUNICIPALITY_BY_SLUG
} from './kochi-municipalities';
import {
  EHIME_MUNICIPALITIES,
  EHIME_MUNICIPALITY_BY_SLUG
} from './ehime-municipalities';
import {
  TOKUSHIMA_MUNICIPALITIES,
  MUNICIPALITY_BY_SLUG as TOKUSHIMA_BY_SLUG
} from './tokushima-municipalities';
import type {PrefSlug} from './lookup-town';

export type {Municipality};

export function municipalitiesForPref(pref: string): Municipality[] {
  if (pref === 'tokushima') return TOKUSHIMA_MUNICIPALITIES;
  if (pref === 'kagawa') return KAGAWA_MUNICIPALITIES;
  if (pref === 'kochi') return KOCHI_MUNICIPALITIES;
  if (pref === 'ehime') return EHIME_MUNICIPALITIES;
  return [];
}

export function municipalityBySlug(
  pref: string,
  slug: string
): Municipality | undefined {
  if (pref === 'tokushima') return TOKUSHIMA_BY_SLUG.get(slug);
  if (pref === 'kagawa') return KAGAWA_MUNICIPALITY_BY_SLUG.get(slug);
  if (pref === 'kochi') return KOCHI_MUNICIPALITY_BY_SLUG.get(slug);
  if (pref === 'ehime') return EHIME_MUNICIPALITY_BY_SLUG.get(slug);
  return undefined;
}

export function prefHasMunicipalityLayer(pref: string): pref is PrefSlug {
  return pref === 'tokushima' || pref === 'kagawa' || pref === 'kochi' || pref === 'ehime';
}

export function allMunicipalityStaticParams(): {prefecture: string; municipality: string}[] {
  return [
    ...TOKUSHIMA_MUNICIPALITIES.map((m) => ({prefecture: 'tokushima', municipality: m.slug})),
    ...KAGAWA_MUNICIPALITIES.map((m) => ({prefecture: 'kagawa', municipality: m.slug})),
    ...KOCHI_MUNICIPALITIES.map((m) => ({prefecture: 'kochi', municipality: m.slug})),
    ...EHIME_MUNICIPALITIES.map((m) => ({prefecture: 'ehime', municipality: m.slug}))
  ];
}
