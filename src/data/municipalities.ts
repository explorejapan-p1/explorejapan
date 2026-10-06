import type {Municipality} from './kagawa-municipalities';
import {HOKKAIDO_MUNICIPALITIES, HOKKAIDO_MUNICIPALITY_BY_SLUG} from './hokkaido-municipalities';
import {AOMORI_MUNICIPALITIES, AOMORI_MUNICIPALITY_BY_SLUG} from './aomori-municipalities';
import {IWATE_MUNICIPALITIES, IWATE_MUNICIPALITY_BY_SLUG} from './iwate-municipalities';
import {MIYAGI_MUNICIPALITIES, MIYAGI_MUNICIPALITY_BY_SLUG} from './miyagi-municipalities';
import {AKITA_MUNICIPALITIES, AKITA_MUNICIPALITY_BY_SLUG} from './akita-municipalities';
import {YAMAGATA_MUNICIPALITIES, YAMAGATA_MUNICIPALITY_BY_SLUG} from './yamagata-municipalities';
import {FUKUSHIMA_MUNICIPALITIES, FUKUSHIMA_MUNICIPALITY_BY_SLUG} from './fukushima-municipalities';
import {IBARAKI_MUNICIPALITIES, IBARAKI_MUNICIPALITY_BY_SLUG} from './ibaraki-municipalities';
import {TOCHIGI_MUNICIPALITIES, TOCHIGI_MUNICIPALITY_BY_SLUG} from './tochigi-municipalities';
import {GUNMA_MUNICIPALITIES, GUNMA_MUNICIPALITY_BY_SLUG} from './gunma-municipalities';
import {SAITAMA_MUNICIPALITIES, SAITAMA_MUNICIPALITY_BY_SLUG} from './saitama-municipalities';
import {CHIBA_MUNICIPALITIES, CHIBA_MUNICIPALITY_BY_SLUG} from './chiba-municipalities';
import {TOKYO_MUNICIPALITIES, TOKYO_MUNICIPALITY_BY_SLUG} from './tokyo-municipalities';
import {KANAGAWA_MUNICIPALITIES, KANAGAWA_MUNICIPALITY_BY_SLUG} from './kanagawa-municipalities';
import {NIIGATA_MUNICIPALITIES, NIIGATA_MUNICIPALITY_BY_SLUG} from './niigata-municipalities';
import {TOYAMA_MUNICIPALITIES, TOYAMA_MUNICIPALITY_BY_SLUG} from './toyama-municipalities';
import {ISHIKAWA_MUNICIPALITIES, ISHIKAWA_MUNICIPALITY_BY_SLUG} from './ishikawa-municipalities';
import {FUKUI_MUNICIPALITIES, FUKUI_MUNICIPALITY_BY_SLUG} from './fukui-municipalities';
import {YAMANASHI_MUNICIPALITIES, YAMANASHI_MUNICIPALITY_BY_SLUG} from './yamanashi-municipalities';
import {NAGANO_MUNICIPALITIES, NAGANO_MUNICIPALITY_BY_SLUG} from './nagano-municipalities';
import {GIFU_MUNICIPALITIES, GIFU_MUNICIPALITY_BY_SLUG} from './gifu-municipalities';
import {SHIZUOKA_MUNICIPALITIES, SHIZUOKA_MUNICIPALITY_BY_SLUG} from './shizuoka-municipalities';
import {AICHI_MUNICIPALITIES, AICHI_MUNICIPALITY_BY_SLUG} from './aichi-municipalities';
import {MIE_MUNICIPALITIES, MIE_MUNICIPALITY_BY_SLUG} from './mie-municipalities';
import {SHIGA_MUNICIPALITIES, SHIGA_MUNICIPALITY_BY_SLUG} from './shiga-municipalities';
import {KYOTO_MUNICIPALITIES, KYOTO_MUNICIPALITY_BY_SLUG} from './kyoto-municipalities';
import {OSAKA_MUNICIPALITIES, OSAKA_MUNICIPALITY_BY_SLUG} from './osaka-municipalities';
import {HYOGO_MUNICIPALITIES, HYOGO_MUNICIPALITY_BY_SLUG} from './hyogo-municipalities';
import {NARA_MUNICIPALITIES, NARA_MUNICIPALITY_BY_SLUG} from './nara-municipalities';
import {WAKAYAMA_MUNICIPALITIES, WAKAYAMA_MUNICIPALITY_BY_SLUG} from './wakayama-municipalities';
import {TOTTORI_MUNICIPALITIES, TOTTORI_MUNICIPALITY_BY_SLUG} from './tottori-municipalities';
import {SHIMANE_MUNICIPALITIES, SHIMANE_MUNICIPALITY_BY_SLUG} from './shimane-municipalities';
import {OKAYAMA_MUNICIPALITIES, OKAYAMA_MUNICIPALITY_BY_SLUG} from './okayama-municipalities';
import {HIROSHIMA_MUNICIPALITIES, HIROSHIMA_MUNICIPALITY_BY_SLUG} from './hiroshima-municipalities';
import {YAMAGUCHI_MUNICIPALITIES, YAMAGUCHI_MUNICIPALITY_BY_SLUG} from './yamaguchi-municipalities';
import {TOKUSHIMA_MUNICIPALITIES, MUNICIPALITY_BY_SLUG as TOKUSHIMA_BY_SLUG} from './tokushima-municipalities';
import {KAGAWA_MUNICIPALITIES, KAGAWA_MUNICIPALITY_BY_SLUG} from './kagawa-municipalities';
import {EHIME_MUNICIPALITIES, EHIME_MUNICIPALITY_BY_SLUG} from './ehime-municipalities';
import {KOCHI_MUNICIPALITIES, KOCHI_MUNICIPALITY_BY_SLUG} from './kochi-municipalities';
import {FUKUOKA_MUNICIPALITIES, FUKUOKA_MUNICIPALITY_BY_SLUG} from './fukuoka-municipalities';
import {SAGA_MUNICIPALITIES, SAGA_MUNICIPALITY_BY_SLUG} from './saga-municipalities';
import {NAGASAKI_MUNICIPALITIES, NAGASAKI_MUNICIPALITY_BY_SLUG} from './nagasaki-municipalities';
import {KUMAMOTO_MUNICIPALITIES, KUMAMOTO_MUNICIPALITY_BY_SLUG} from './kumamoto-municipalities';
import {OITA_MUNICIPALITIES, OITA_MUNICIPALITY_BY_SLUG} from './oita-municipalities';
import {MIYAZAKI_MUNICIPALITIES, MIYAZAKI_MUNICIPALITY_BY_SLUG} from './miyazaki-municipalities';
import {KAGOSHIMA_MUNICIPALITIES, KAGOSHIMA_MUNICIPALITY_BY_SLUG} from './kagoshima-municipalities';
import {OKINAWA_MUNICIPALITIES, OKINAWA_MUNICIPALITY_BY_SLUG} from './okinawa-municipalities';

export type {Municipality};

const LISTS: Record<string, readonly Municipality[]> = {
  hokkaido: HOKKAIDO_MUNICIPALITIES,
  aomori: AOMORI_MUNICIPALITIES,
  iwate: IWATE_MUNICIPALITIES,
  miyagi: MIYAGI_MUNICIPALITIES,
  akita: AKITA_MUNICIPALITIES,
  yamagata: YAMAGATA_MUNICIPALITIES,
  fukushima: FUKUSHIMA_MUNICIPALITIES,
  ibaraki: IBARAKI_MUNICIPALITIES,
  tochigi: TOCHIGI_MUNICIPALITIES,
  gunma: GUNMA_MUNICIPALITIES,
  saitama: SAITAMA_MUNICIPALITIES,
  chiba: CHIBA_MUNICIPALITIES,
  tokyo: TOKYO_MUNICIPALITIES,
  kanagawa: KANAGAWA_MUNICIPALITIES,
  niigata: NIIGATA_MUNICIPALITIES,
  toyama: TOYAMA_MUNICIPALITIES,
  ishikawa: ISHIKAWA_MUNICIPALITIES,
  fukui: FUKUI_MUNICIPALITIES,
  yamanashi: YAMANASHI_MUNICIPALITIES,
  nagano: NAGANO_MUNICIPALITIES,
  gifu: GIFU_MUNICIPALITIES,
  shizuoka: SHIZUOKA_MUNICIPALITIES,
  aichi: AICHI_MUNICIPALITIES,
  mie: MIE_MUNICIPALITIES,
  shiga: SHIGA_MUNICIPALITIES,
  kyoto: KYOTO_MUNICIPALITIES,
  osaka: OSAKA_MUNICIPALITIES,
  hyogo: HYOGO_MUNICIPALITIES,
  nara: NARA_MUNICIPALITIES,
  wakayama: WAKAYAMA_MUNICIPALITIES,
  tottori: TOTTORI_MUNICIPALITIES,
  shimane: SHIMANE_MUNICIPALITIES,
  okayama: OKAYAMA_MUNICIPALITIES,
  hiroshima: HIROSHIMA_MUNICIPALITIES,
  yamaguchi: YAMAGUCHI_MUNICIPALITIES,
  tokushima: TOKUSHIMA_MUNICIPALITIES,
  kagawa: KAGAWA_MUNICIPALITIES,
  ehime: EHIME_MUNICIPALITIES,
  kochi: KOCHI_MUNICIPALITIES,
  fukuoka: FUKUOKA_MUNICIPALITIES,
  saga: SAGA_MUNICIPALITIES,
  nagasaki: NAGASAKI_MUNICIPALITIES,
  kumamoto: KUMAMOTO_MUNICIPALITIES,
  oita: OITA_MUNICIPALITIES,
  miyazaki: MIYAZAKI_MUNICIPALITIES,
  kagoshima: KAGOSHIMA_MUNICIPALITIES,
  okinawa: OKINAWA_MUNICIPALITIES,
};

const BY_SLUG: Record<string, ReadonlyMap<string, Municipality>> = {
  hokkaido: HOKKAIDO_MUNICIPALITY_BY_SLUG,
  aomori: AOMORI_MUNICIPALITY_BY_SLUG,
  iwate: IWATE_MUNICIPALITY_BY_SLUG,
  miyagi: MIYAGI_MUNICIPALITY_BY_SLUG,
  akita: AKITA_MUNICIPALITY_BY_SLUG,
  yamagata: YAMAGATA_MUNICIPALITY_BY_SLUG,
  fukushima: FUKUSHIMA_MUNICIPALITY_BY_SLUG,
  ibaraki: IBARAKI_MUNICIPALITY_BY_SLUG,
  tochigi: TOCHIGI_MUNICIPALITY_BY_SLUG,
  gunma: GUNMA_MUNICIPALITY_BY_SLUG,
  saitama: SAITAMA_MUNICIPALITY_BY_SLUG,
  chiba: CHIBA_MUNICIPALITY_BY_SLUG,
  tokyo: TOKYO_MUNICIPALITY_BY_SLUG,
  kanagawa: KANAGAWA_MUNICIPALITY_BY_SLUG,
  niigata: NIIGATA_MUNICIPALITY_BY_SLUG,
  toyama: TOYAMA_MUNICIPALITY_BY_SLUG,
  ishikawa: ISHIKAWA_MUNICIPALITY_BY_SLUG,
  fukui: FUKUI_MUNICIPALITY_BY_SLUG,
  yamanashi: YAMANASHI_MUNICIPALITY_BY_SLUG,
  nagano: NAGANO_MUNICIPALITY_BY_SLUG,
  gifu: GIFU_MUNICIPALITY_BY_SLUG,
  shizuoka: SHIZUOKA_MUNICIPALITY_BY_SLUG,
  aichi: AICHI_MUNICIPALITY_BY_SLUG,
  mie: MIE_MUNICIPALITY_BY_SLUG,
  shiga: SHIGA_MUNICIPALITY_BY_SLUG,
  kyoto: KYOTO_MUNICIPALITY_BY_SLUG,
  osaka: OSAKA_MUNICIPALITY_BY_SLUG,
  hyogo: HYOGO_MUNICIPALITY_BY_SLUG,
  nara: NARA_MUNICIPALITY_BY_SLUG,
  wakayama: WAKAYAMA_MUNICIPALITY_BY_SLUG,
  tottori: TOTTORI_MUNICIPALITY_BY_SLUG,
  shimane: SHIMANE_MUNICIPALITY_BY_SLUG,
  okayama: OKAYAMA_MUNICIPALITY_BY_SLUG,
  hiroshima: HIROSHIMA_MUNICIPALITY_BY_SLUG,
  yamaguchi: YAMAGUCHI_MUNICIPALITY_BY_SLUG,
  tokushima: TOKUSHIMA_BY_SLUG,
  kagawa: KAGAWA_MUNICIPALITY_BY_SLUG,
  ehime: EHIME_MUNICIPALITY_BY_SLUG,
  kochi: KOCHI_MUNICIPALITY_BY_SLUG,
  fukuoka: FUKUOKA_MUNICIPALITY_BY_SLUG,
  saga: SAGA_MUNICIPALITY_BY_SLUG,
  nagasaki: NAGASAKI_MUNICIPALITY_BY_SLUG,
  kumamoto: KUMAMOTO_MUNICIPALITY_BY_SLUG,
  oita: OITA_MUNICIPALITY_BY_SLUG,
  miyazaki: MIYAZAKI_MUNICIPALITY_BY_SLUG,
  kagoshima: KAGOSHIMA_MUNICIPALITY_BY_SLUG,
  okinawa: OKINAWA_MUNICIPALITY_BY_SLUG,
};

export function municipalitiesForPref(pref: string): Municipality[] {
  return [...(LISTS[pref] ?? [])];
}

export function municipalityBySlug(
  pref: string,
  slug: string
): Municipality | undefined {
  return BY_SLUG[pref]?.get(slug);
}

export function prefHasMunicipalityLayer(pref: string): boolean {
  return (LISTS[pref]?.length ?? 0) > 0;
}

export function allMunicipalityStaticParams(): {prefecture: string; municipality: string}[] {
  const out: {prefecture: string; municipality: string}[] = [];
  for (const [prefecture, list] of Object.entries(LISTS)) {
    for (const m of list) out.push({prefecture, municipality: m.slug});
  }
  return out;
}
