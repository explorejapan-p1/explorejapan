import {MIMA, MIMA_PLACE_PHOTO} from '@/data/mima';
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
import {MUGI, MUGI_PLACE_PHOTO} from '@/data/mugi';
import {MINAMI, MINAMI_PLACE_PHOTO} from '@/data/minami';
import {AIZUMI, AIZUMI_PLACE_PHOTO} from '@/data/aizumi';
import {KOMATSUSHIMA, KOMATSUSHIMA_PLACE_PHOTO} from '@/data/komatsushima';
import {ANAN, ANAN_PLACE_PHOTO} from '@/data/anan';
import {TAKAMATSU, TAKAMATSU_PLACE_PHOTO} from '@/data/takamatsu';
import {KOTOHIRA, KOTOHIRA_PLACE_PHOTO} from '@/data/kotohira';
import {MARUGAME, MARUGAME_PLACE_PHOTO} from '@/data/marugame';
import {KANONJI, KANONJI_PLACE_PHOTO} from '@/data/kanonji';
import {SAKAIDE, SAKAIDE_PLACE_PHOTO} from '@/data/sakaide';
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
import {TOSA, TOSA_PLACE_PHOTO} from '@/data/tosa';
import {SUSAKI, SUSAKI_PLACE_PHOTO} from '@/data/susaki';
import {SHIMANTO, SHIMANTO_PLACE_PHOTO} from '@/data/shimanto';
import {TOSASHIMIZU, TOSASHIMIZU_PLACE_PHOTO} from '@/data/tosashimizu';
import {SUKUMO, SUKUMO_PLACE_PHOTO} from '@/data/sukumo';
import {KUROSHIO, KUROSHIO_PLACE_PHOTO} from '@/data/kuroshio';
import {TOYO, TOYO_PLACE_PHOTO} from '@/data/toyo';
import {NAHARI, NAHARI_PLACE_PHOTO} from '@/data/nahari';
import {YASUDA, YASUDA_PLACE_PHOTO} from '@/data/yasuda';
import {GEISEI, GEISEI_PLACE_PHOTO} from '@/data/geisei';
import {KITAGAWA, KITAGAWA_PLACE_PHOTO} from '@/data/kitagawa';
import {UMAJI, UMAJI_PLACE_PHOTO} from '@/data/umaji';
import {MOTOYAMA, MOTOYAMA_PLACE_PHOTO} from '@/data/motoyama';
import {OTOYO, OTOYO_PLACE_PHOTO} from '@/data/otoyo';
import {TOSACHO, TOSACHO_PLACE_PHOTO} from '@/data/tosacho';
import {OKAWA, OKAWA_PLACE_PHOTO} from '@/data/okawa';
import {prefSlugForReady} from '@/data/lookup-town';
import {KAIYO, KAIYO_PLACE_PHOTO} from '@/data/kaiyo';
import {NARUTO, NARUTO_PLACE_PHOTO} from '@/data/naruto';
import {TOKUSHIMA_CITY, TOKUSHIMA_CITY_PLACE_PHOTO} from '@/data/tokushima-city';
import {TOKUSHIMA_MUNICIPALITIES} from '@/data/tokushima-municipalities';
import type {AppLocale} from '@/i18n/routing';
import {
  featuredListings,
  listingRest,
  schemaType,
  type PublicListing
} from '@/lib/listings';
import {BRAND_LOCKUP_SRC} from '@/lib/brand';
import {
  ORG_NAME,
  ORG_NAME_JA,
  absoluteMediaUrl,
  canonicalUrl,
  photoAbs,
  siteName,
  siteOrigin
} from '@/lib/seo';

function org() {
  return {
    '@type': 'Organization',
    '@id': `${siteOrigin()}/#org`,
    name: ORG_NAME,
    alternateName: ORG_NAME_JA,
    url: `${siteOrigin()}/`,
    logo: {
      '@type': 'ImageObject',
      url: absoluteMediaUrl(BRAND_LOCKUP_SRC),
      contentUrl: absoluteMediaUrl(BRAND_LOCKUP_SRC)
    }
  };
}

function postal(
  address: string | null,
  locale: AppLocale,
  localityJa: string = MIMA.nameJa,
  localityEn: string = MIMA.nameEn
) {
  if (!address) return undefined;
  return {
    '@type': 'PostalAddress',
    streetAddress: address,
    addressLocality: locale === 'ja' ? localityJa : localityEn,
    addressRegion: locale === 'ja' ? MIMA.prefectureJa : MIMA.prefectureEn,
    addressCountry: 'JP'
  };
}

function geo(lat: number | null, lon: number | null) {
  if (lat === null || lon === null) return undefined;
  return {
    '@type': 'GeoCoordinates',
    latitude: lat,
    longitude: lon
  };
}


function localityJa(slug: string): string {
  if (slug === 'tsurugi') return TSURUGI.nameJa;
  if (slug === 'yoshinogawa') return YOSHINOGAWA.nameJa;
  if (slug === 'miyoshi') return MIYOSHI.nameJa;
  if (slug === 'awa') return AWA.nameJa;
  if (slug === 'higashimiyoshi') return HIGASHIMIYOSHI.nameJa;
  if (slug === 'kitajima') return KITAJIMA.nameJa;
  if (slug === 'naruto') return NARUTO.nameJa;
  if (slug === 'matsushige') return MATSUSHIGE.nameJa;
  if (slug === 'ishii') return ISHII.nameJa;
  if (slug === 'itano') return ITANO.nameJa;
  if (slug === 'kamiita') return KAMIITA.nameJa;
  if (slug === 'kamiyama') return KAMIYAMA.nameJa;
  if (slug === 'katsuura') return KATSUURA.nameJa;
  if (slug === 'kamikatsu') return KAMIKATSU.nameJa;
  if (slug === 'sanagochi') return SANAGOCHI.nameJa;
  if (slug === 'naka') return NAKA.nameJa;
  if (slug === 'mugi') return MUGI.nameJa;
  if (slug === 'minami') return MINAMI.nameJa;
  if (slug === 'aizumi') return AIZUMI.nameJa;
  if (slug === 'komatsushima') return KOMATSUSHIMA.nameJa;
  if (slug === 'kaiyo') return KAIYO.nameJa;
  if (slug === 'tokushima') return TOKUSHIMA_CITY.nameJa;
  if (slug === 'anan') return ANAN.nameJa;
  if (slug === 'takamatsu') return TAKAMATSU.nameJa;
  if (slug === 'kotohira') return KOTOHIRA.nameJa;
  if (slug === 'marugame') return MARUGAME.nameJa;
  if (slug === 'kanonji') return KANONJI.nameJa;
  if (slug === 'sakaide') return SAKAIDE.nameJa;
  if (slug === 'naoshima') return NAOSHIMA.nameJa;
  if (slug === 'shodoshima') return SHODOSHIMA.nameJa;
  if (slug === 'zentsuji') return ZENTSUJI.nameJa;
  if (slug === 'mitoyo') return MITOYO.nameJa;
  if (slug === 'utazu') return UTAZU.nameJa;
  if (slug === 'tonosho') return TONOSHO.nameJa;
  if (slug === 'sanuki') return SANUKI.nameJa;
  if (slug === 'higashikagawa') return HIGASHIKAGAWA.nameJa;
  if (slug === 'miki') return MIKI.nameJa;
  if (slug === 'ayagawa') return AYAGAWA.nameJa;
  if (slug === 'tadotsu') return TADOTSU.nameJa;
  if (slug === 'manno') return MANNO.nameJa;
  if (slug === 'kochi') return KOCHI.nameJa;
  if (slug === 'nankoku') return NANKOKU.nameJa;
  if (slug === 'konan') return KONAN.nameJa;
  if (slug === 'kami') return KAMI.nameJa;
  if (slug === 'ino') return INO.nameJa;
  if (slug === 'aki') return AKI.nameJa;
  if (slug === 'muroto') return MUROTO.nameJa;
  if (slug === 'tosa') return TOSA.nameJa;
  if (slug === 'susaki') return SUSAKI.nameJa;
  if (slug === 'shimanto') return SHIMANTO.nameJa;
  if (slug === 'tosashimizu') return TOSASHIMIZU.nameJa;
  if (slug === 'sukumo') return SUKUMO.nameJa;
  if (slug === 'kuroshio') return KUROSHIO.nameJa;
  if (slug === 'toyo') return TOYO.nameJa;
  if (slug === 'nahari') return NAHARI.nameJa;
  if (slug === 'yasuda') return YASUDA.nameJa;
  if (slug === 'geisei') return GEISEI.nameJa;
  return MIMA.nameJa;
}

function localityEn(slug: string): string {
  if (slug === 'tsurugi') return TSURUGI.nameEn;
  if (slug === 'yoshinogawa') return YOSHINOGAWA.nameEn;
  if (slug === 'miyoshi') return MIYOSHI.nameEn;
  if (slug === 'awa') return AWA.nameEn;
  if (slug === 'higashimiyoshi') return HIGASHIMIYOSHI.nameEn;
  if (slug === 'kitajima') return KITAJIMA.nameEn;
  if (slug === 'naruto') return NARUTO.nameEn;
  if (slug === 'matsushige') return MATSUSHIGE.nameEn;
  if (slug === 'ishii') return ISHII.nameEn;
  if (slug === 'itano') return ITANO.nameEn;
  if (slug === 'kamiita') return KAMIITA.nameEn;
  if (slug === 'kamiyama') return KAMIYAMA.nameEn;
  if (slug === 'katsuura') return KATSUURA.nameEn;
  if (slug === 'kamikatsu') return KAMIKATSU.nameEn;
  if (slug === 'sanagochi') return SANAGOCHI.nameEn;
  if (slug === 'naka') return NAKA.nameEn;
  if (slug === 'mugi') return MUGI.nameEn;
  if (slug === 'minami') return MINAMI.nameEn;
  if (slug === 'aizumi') return AIZUMI.nameEn;
  if (slug === 'komatsushima') return KOMATSUSHIMA.nameEn;
  if (slug === 'kaiyo') return KAIYO.nameEn;
  if (slug === 'tokushima') return TOKUSHIMA_CITY.nameEn;
  if (slug === 'anan') return ANAN.nameEn;
  if (slug === 'takamatsu') return TAKAMATSU.nameEn;
  if (slug === 'kotohira') return KOTOHIRA.nameEn;
  if (slug === 'marugame') return MARUGAME.nameEn;
  if (slug === 'kanonji') return KANONJI.nameEn;
  if (slug === 'sakaide') return SAKAIDE.nameEn;
  if (slug === 'naoshima') return NAOSHIMA.nameEn;
  if (slug === 'shodoshima') return SHODOSHIMA.nameEn;
  if (slug === 'zentsuji') return ZENTSUJI.nameEn;
  if (slug === 'mitoyo') return MITOYO.nameEn;
  if (slug === 'utazu') return UTAZU.nameEn;
  if (slug === 'tonosho') return TONOSHO.nameEn;
  if (slug === 'sanuki') return SANUKI.nameEn;
  if (slug === 'higashikagawa') return HIGASHIKAGAWA.nameEn;
  if (slug === 'miki') return MIKI.nameEn;
  if (slug === 'ayagawa') return AYAGAWA.nameEn;
  if (slug === 'tadotsu') return TADOTSU.nameEn;
  if (slug === 'manno') return MANNO.nameEn;
  if (slug === 'kochi') return KOCHI.nameEn;
  if (slug === 'nankoku') return NANKOKU.nameEn;
  if (slug === 'konan') return KONAN.nameEn;
  if (slug === 'kami') return KAMI.nameEn;
  if (slug === 'ino') return INO.nameEn;
  if (slug === 'aki') return AKI.nameEn;
  if (slug === 'muroto') return MUROTO.nameEn;
  if (slug === 'tosa') return TOSA.nameEn;
  if (slug === 'susaki') return SUSAKI.nameEn;
  if (slug === 'shimanto') return SHIMANTO.nameEn;
  if (slug === 'tosashimizu') return TOSASHIMIZU.nameEn;
  if (slug === 'sukumo') return SUKUMO.nameEn;
  if (slug === 'kuroshio') return KUROSHIO.nameEn;
  if (slug === 'toyo') return TOYO.nameEn;
  if (slug === 'nahari') return NAHARI.nameEn;
  if (slug === 'yasuda') return YASUDA.nameEn;
  if (slug === 'geisei') return GEISEI.nameEn;
  return MIMA.nameEn;
}

function compact(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null && value !== '') out[key] = value;
  }
  return out;
}

export function listingNode(listing: PublicListing, locale: AppLocale) {
  const url = canonicalUrl(locale, listingRest(listing.id, listing.slug));
  const type = schemaType(listing.kind, listing.nameJa);
  const sameAs = [listing.officialUrl, listing.sourceUrl].filter(
    (value, index, arr): value is string =>
      Boolean(value) && arr.indexOf(value) === index
  );
  return compact({
    '@type': type,
    '@id': `${url}#place`,
    name: listing.nameJa,
    url,
    image: listing.photo ? photoAbs(listing.photo) : undefined,
    address: postal(listing.address, locale, localityJa(listing.slug), localityEn(listing.slug)),
    telephone: listing.phone ?? undefined,
    openingHours: listing.hours ?? undefined,
    geo: geo(listing.lat, listing.lon),
    sameAs: sameAs.length ? sameAs : undefined,
    amenityFeature:
      listing.kind === 'onsen'
        ? {
            '@type': 'LocationFeatureSpecification',
            name: locale === 'ja' ? '温泉' : 'hot spring',
            value: true
          }
        : undefined
  });
}

export function homeGraph(locale: AppLocale) {
  const url = canonicalUrl(locale);
  const name = siteName(locale);
  const search = canonicalUrl(locale, 'tokushima/mima');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      org(),
      {
        '@type': 'WebSite',
        '@id': `${siteOrigin()}/#website`,
        name,
        url: `${siteOrigin()}/`,
        inLanguage: locale,
        publisher: {'@id': `${siteOrigin()}/#org`},
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${search}?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name,
        inLanguage: locale,
        isPartOf: {'@id': `${siteOrigin()}/#website`}
      }
    ]
  };
}

export function prefectureGraph(locale: AppLocale, slug: string, name: string) {
  const url = canonicalUrl(locale, slug);
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const ready =
    slug === 'tokushima'
      ? TOKUSHIMA_MUNICIPALITIES.filter((m) => m.status === 'ready')
      : [];
  const graph: Record<string, unknown>[] = [
    {
      '@type': ['CollectionPage', 'AdministrativeArea'],
      '@id': `${url}#place`,
      name,
      url,
      containedInPlace: {
        '@type': 'Country',
        name: isJa ? '日本' : 'Japan'
      }
    },
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name,
      inLanguage: locale,
      isPartOf: {'@id': `${origin}/#website`}
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: isJa ? '全国' : 'Japan',
          item: canonicalUrl(locale)
        },
        {
          '@type': 'ListItem',
          position: 2,
          name,
          item: url
        }
      ]
    }
  ];
  if (ready.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#ready-municipalities`,
      name: isJa ? '掲載中の市町村' : 'Ready municipalities',
      numberOfItems: ready.length,
      itemListElement: ready.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: isJa ? m.nameJa : m.nameEn,
        url: canonicalUrl(locale, `tokushima/${m.slug}`)
      }))
    });
  }
  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

export function mimaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/mima');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings();
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['City', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MIMA.nameJa : MIMA.nameEn,
        alternateName: isJa ? MIMA.nameEn : MIMA.nameJa,
        identifier: MIMA.jis,
        url,
        image: photoAbs(MIMA_PLACE_PHOTO),
        sameAs: [MIMA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '穴吹町穴吹字九反地5番地'
            : '5 Kutanchi, Anabuki, Anabuki-cho',
          addressLocality: isJa ? MIMA.nameJa : MIMA.nameEn,
          addressRegion: isJa ? MIMA.prefectureJa : MIMA.prefectureEn,
          postalCode: MIMA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MIMA.prefectureJa : MIMA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MIMA.nameJa : MIMA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? MIMA.prefectureJa : MIMA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? MIMA.nameJa : MIMA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '美馬市の案内' : 'Places in Mima',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function tsurugiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/tsurugi');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('tsurugi');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TSURUGI.nameJa : TSURUGI.nameEn,
        alternateName: isJa ? TSURUGI.nameEn : TSURUGI.nameJa,
        identifier: TSURUGI.jis,
        url,
        image: photoAbs(TSURUGI_PLACE_PHOTO),
        sameAs: [TSURUGI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '貞光字東浦1番地3'
            : '1-3 Higashiura, Sadamitsu',
          addressLocality: isJa ? TSURUGI.nameJa : TSURUGI.nameEn,
          addressRegion: isJa ? TSURUGI.prefectureJa : TSURUGI.prefectureEn,
          postalCode: TSURUGI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TSURUGI.prefectureJa : TSURUGI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TSURUGI.nameJa : TSURUGI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? TSURUGI.prefectureJa : TSURUGI.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? TSURUGI.nameJa : TSURUGI.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? 'つるぎ町の案内' : 'Places in Tsurugi',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function yoshinogawaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/yoshinogawa');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('yoshinogawa');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['City', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? YOSHINOGAWA.nameJa : YOSHINOGAWA.nameEn,
        alternateName: isJa ? YOSHINOGAWA.nameEn : YOSHINOGAWA.nameJa,
        identifier: YOSHINOGAWA.jis,
        url,
        image: photoAbs(YOSHINOGAWA_PLACE_PHOTO),
        sameAs: [YOSHINOGAWA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '鴨島町鴨島115番地1'
            : '115-1 Kamojima, Kamojima-cho',
          addressLocality: isJa ? YOSHINOGAWA.nameJa : YOSHINOGAWA.nameEn,
          addressRegion: isJa ? YOSHINOGAWA.prefectureJa : YOSHINOGAWA.prefectureEn,
          postalCode: YOSHINOGAWA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? YOSHINOGAWA.prefectureJa : YOSHINOGAWA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? YOSHINOGAWA.nameJa : YOSHINOGAWA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? YOSHINOGAWA.prefectureJa : YOSHINOGAWA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? YOSHINOGAWA.nameJa : YOSHINOGAWA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '吉野川市の案内' : 'Places in Yoshinogawa',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function miyoshiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/miyoshi');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('miyoshi');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['City', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MIYOSHI.nameJa : MIYOSHI.nameEn,
        alternateName: isJa ? MIYOSHI.nameEn : MIYOSHI.nameJa,
        identifier: MIYOSHI.jis,
        url,
        image: photoAbs(MIYOSHI_PLACE_PHOTO),
        sameAs: [MIYOSHI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '池田町サラダ1610番地1'
            : '1610-1 Sarada, Ikeda-cho',
          addressLocality: isJa ? MIYOSHI.nameJa : MIYOSHI.nameEn,
          addressRegion: isJa ? MIYOSHI.prefectureJa : MIYOSHI.prefectureEn,
          postalCode: MIYOSHI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MIYOSHI.prefectureJa : MIYOSHI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MIYOSHI.nameJa : MIYOSHI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? MIYOSHI.prefectureJa : MIYOSHI.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? MIYOSHI.nameJa : MIYOSHI.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '三好市の案内' : 'Places in Miyoshi',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}



export function awaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/awa');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('awa');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['City', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? AWA.nameJa : AWA.nameEn,
        alternateName: isJa ? AWA.nameEn : AWA.nameJa,
        identifier: AWA.jis,
        url,
        image: photoAbs(AWA_PLACE_PHOTO),
        sameAs: [AWA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '市場町切幡字古田201番地1'
            : '201-1 Furuta, Kirihata, Ichiba-cho',
          addressLocality: isJa ? AWA.nameJa : AWA.nameEn,
          addressRegion: isJa ? AWA.prefectureJa : AWA.prefectureEn,
          postalCode: AWA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? AWA.prefectureJa : AWA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? AWA.nameJa : AWA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? AWA.prefectureJa : AWA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? AWA.nameJa : AWA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '阿波市の案内' : 'Places in Awa',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}



export function higashimiyoshiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/higashimiyoshi');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('higashimiyoshi');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? HIGASHIMIYOSHI.nameJa : HIGASHIMIYOSHI.nameEn,
        alternateName: isJa ? HIGASHIMIYOSHI.nameEn : HIGASHIMIYOSHI.nameJa,
        identifier: HIGASHIMIYOSHI.jis,
        url,
        image: photoAbs(HIGASHIMIYOSHI_PLACE_PHOTO),
        sameAs: [HIGASHIMIYOSHI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '加茂3360番地'
            : '3360 Kamo',
          addressLocality: isJa ? HIGASHIMIYOSHI.nameJa : HIGASHIMIYOSHI.nameEn,
          addressRegion: isJa ? HIGASHIMIYOSHI.prefectureJa : HIGASHIMIYOSHI.prefectureEn,
          postalCode: HIGASHIMIYOSHI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? HIGASHIMIYOSHI.prefectureJa : HIGASHIMIYOSHI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? HIGASHIMIYOSHI.nameJa : HIGASHIMIYOSHI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? HIGASHIMIYOSHI.prefectureJa : HIGASHIMIYOSHI.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? HIGASHIMIYOSHI.nameJa : HIGASHIMIYOSHI.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '東みよし町の案内' : 'Places in Higashimiyoshi',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}



export function matsushigeGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/matsushige');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('matsushige');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MATSUSHIGE.nameJa : MATSUSHIGE.nameEn,
        alternateName: isJa ? MATSUSHIGE.nameEn : MATSUSHIGE.nameJa,
        identifier: MATSUSHIGE.jis,
        url,
        image: photoAbs(MATSUSHIGE_PLACE_PHOTO),
        sameAs: [MATSUSHIGE.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '広島字東裏30番地'
            : '30 Higashiura, Hiroshima',
          addressLocality: isJa ? MATSUSHIGE.nameJa : MATSUSHIGE.nameEn,
          addressRegion: isJa ? MATSUSHIGE.prefectureJa : MATSUSHIGE.prefectureEn,
          postalCode: MATSUSHIGE.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MATSUSHIGE.prefectureJa : MATSUSHIGE.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MATSUSHIGE.nameJa : MATSUSHIGE.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? MATSUSHIGE.prefectureJa : MATSUSHIGE.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? MATSUSHIGE.nameJa : MATSUSHIGE.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '松茂町の案内' : 'Places in Matsushige Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function ishiiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/ishii');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('ishii');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? ISHII.nameJa : ISHII.nameEn,
        alternateName: isJa ? ISHII.nameEn : ISHII.nameJa,
        identifier: ISHII.jis,
        url,
        image: photoAbs(ISHII_PLACE_PHOTO),
        sameAs: [ISHII.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '高川原字高川原121-1'
            : '121-1 Takagawara, Takagawara',
          addressLocality: isJa ? ISHII.nameJa : ISHII.nameEn,
          addressRegion: isJa ? ISHII.prefectureJa : ISHII.prefectureEn,
          postalCode: ISHII.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? ISHII.prefectureJa : ISHII.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? ISHII.nameJa : ISHII.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? ISHII.prefectureJa : ISHII.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? ISHII.nameJa : ISHII.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '石井町の案内' : 'Places in Ishii Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function itanoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/itano');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('itano');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? ITANO.nameJa : ITANO.nameEn,
        alternateName: isJa ? ITANO.nameEn : ITANO.nameJa,
        identifier: ITANO.jis,
        url,
        image: photoAbs(ITANO_PLACE_PHOTO),
        sameAs: [ITANO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '吹田字町南22-2'
            : '22-2 Minami, Suita',
          addressLocality: isJa ? ITANO.nameJa : ITANO.nameEn,
          addressRegion: isJa ? ITANO.prefectureJa : ITANO.prefectureEn,
          postalCode: ITANO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? ITANO.prefectureJa : ITANO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? ITANO.nameJa : ITANO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? ITANO.prefectureJa : ITANO.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? ITANO.nameJa : ITANO.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '板野町の案内' : 'Places in Itano Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}



export function kamiitaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/kamiita');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kamiita');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KAMIITA.nameJa : KAMIITA.nameEn,
        alternateName: isJa ? KAMIITA.nameEn : KAMIITA.nameJa,
        identifier: KAMIITA.jis,
        url,
        image: photoAbs(KAMIITA_PLACE_PHOTO),
        sameAs: [KAMIITA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '七條字経塚42'
            : '42 Kyozuka, Shichijo',
          addressLocality: isJa ? KAMIITA.nameJa : KAMIITA.nameEn,
          addressRegion: isJa ? KAMIITA.prefectureJa : KAMIITA.prefectureEn,
          postalCode: KAMIITA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KAMIITA.prefectureJa : KAMIITA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KAMIITA.nameJa : KAMIITA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? KAMIITA.prefectureJa : KAMIITA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? KAMIITA.nameJa : KAMIITA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '上板町の案内' : 'Places in Kamiita Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}



export function katsuuraGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/katsuura');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('katsuura');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KATSUURA.nameJa : KATSUURA.nameEn,
        alternateName: isJa ? KATSUURA.nameEn : KATSUURA.nameJa,
        identifier: KATSUURA.jis,
        url,
        image: photoAbs(KATSUURA_PLACE_PHOTO),
        sameAs: [KATSUURA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '大字久国字久保田3'
            : '3 Kubota, Hisakuni',
          addressLocality: isJa ? KATSUURA.nameJa : KATSUURA.nameEn,
          addressRegion: isJa ? KATSUURA.prefectureJa : KATSUURA.prefectureEn,
          postalCode: KATSUURA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KATSUURA.prefectureJa : KATSUURA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KATSUURA.nameJa : KATSUURA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? KATSUURA.prefectureJa : KATSUURA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? KATSUURA.nameJa : KATSUURA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '勝浦町の案内' : 'Places in Katsuura Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function kamikatsuGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/kamikatsu');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kamikatsu');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KAMIKATSU.nameJa : KAMIKATSU.nameEn,
        alternateName: isJa ? KAMIKATSU.nameEn : KAMIKATSU.nameJa,
        identifier: KAMIKATSU.jis,
        url,
        image: photoAbs(KAMIKATSU_PLACE_PHOTO),
        sameAs: [KAMIKATSU.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '大字福原字下横峯3-1'
            : '3-1 Shimoyokominé, Fukuhara',
          addressLocality: isJa ? KAMIKATSU.nameJa : KAMIKATSU.nameEn,
          addressRegion: isJa ? KAMIKATSU.prefectureJa : KAMIKATSU.prefectureEn,
          postalCode: KAMIKATSU.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KAMIKATSU.prefectureJa : KAMIKATSU.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KAMIKATSU.nameJa : KAMIKATSU.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? KAMIKATSU.prefectureJa : KAMIKATSU.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? KAMIKATSU.nameJa : KAMIKATSU.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '上勝町の案内' : 'Places in Kamikatsu Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function sanagochiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/sanagochi');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('sanagochi');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? SANAGOCHI.nameJa : SANAGOCHI.nameEn,
        alternateName: isJa ? SANAGOCHI.nameEn : SANAGOCHI.nameJa,
        identifier: SANAGOCHI.jis,
        url,
        image: photoAbs(SANAGOCHI_PLACE_PHOTO),
        sameAs: [SANAGOCHI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '下字西ノハナ31番地'
            : '31 Nishinohana, Shimo',
          addressLocality: isJa ? SANAGOCHI.nameJa : SANAGOCHI.nameEn,
          addressRegion: isJa ? SANAGOCHI.prefectureJa : SANAGOCHI.prefectureEn,
          postalCode: SANAGOCHI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? SANAGOCHI.prefectureJa : SANAGOCHI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? SANAGOCHI.nameJa : SANAGOCHI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? SANAGOCHI.prefectureJa : SANAGOCHI.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? SANAGOCHI.nameJa : SANAGOCHI.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '佐那河内村の案内' : 'Places in Sanagochi Village',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function nakaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/naka');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('naka');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? NAKA.nameJa : NAKA.nameEn,
        alternateName: isJa ? NAKA.nameEn : NAKA.nameJa,
        identifier: NAKA.jis,
        url,
        image: photoAbs(NAKA_PLACE_PHOTO),
        sameAs: [NAKA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '和食郷字南川104番地1'
            : '104-1 Minamigawa, Wajikigo',
          addressLocality: isJa ? NAKA.nameJa : NAKA.nameEn,
          addressRegion: isJa ? NAKA.prefectureJa : NAKA.prefectureEn,
          postalCode: NAKA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? NAKA.prefectureJa : NAKA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? NAKA.nameJa : NAKA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? NAKA.prefectureJa : NAKA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? NAKA.nameJa : NAKA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '那賀町の案内' : 'Places in Naka Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function minamiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/minami');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('minami');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MINAMI.nameJa : MINAMI.nameEn,
        alternateName: isJa ? MINAMI.nameEn : MINAMI.nameJa,
        identifier: MINAMI.jis,
        url,
        image: photoAbs(MINAMI_PLACE_PHOTO),
        sameAs: [MINAMI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '奥河内字本村18-1'
            : '18-1 Honmura, Okukawachi',
          addressLocality: isJa ? MINAMI.nameJa : MINAMI.nameEn,
          addressRegion: isJa ? MINAMI.prefectureJa : MINAMI.prefectureEn,
          postalCode: MINAMI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MINAMI.prefectureJa : MINAMI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MINAMI.nameJa : MINAMI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? MINAMI.prefectureJa : MINAMI.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? MINAMI.nameJa : MINAMI.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '美波町の案内' : 'Places in Minami Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function kaiyoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/kaiyo');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kaiyo');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KAIYO.nameJa : KAIYO.nameEn,
        alternateName: isJa ? KAIYO.nameEn : KAIYO.nameJa,
        identifier: KAIYO.jis,
        url,
        image: photoAbs(KAIYO_PLACE_PHOTO),
        sameAs: [KAIYO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '大里字上中須128' : '128 Kaminakasu, Osato',
          addressLocality: isJa ? KAIYO.nameJa : KAIYO.nameEn,
          addressRegion: isJa ? KAIYO.prefectureJa : KAIYO.prefectureEn,
          postalCode: KAIYO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KAIYO.prefectureJa : KAIYO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KAIYO.nameJa : KAIYO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KAIYO.prefectureJa : KAIYO.prefectureEn, item: canonicalUrl(locale, 'tokushima')},
          {'@type': 'ListItem', position: 3, name: isJa ? KAIYO.nameJa : KAIYO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '海陽町の案内' : 'Places in Kaiyo Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function kamiyamaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/kamiyama');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kamiyama');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KAMIYAMA.nameJa : KAMIYAMA.nameEn,
        alternateName: isJa ? KAMIYAMA.nameEn : KAMIYAMA.nameJa,
        identifier: KAMIYAMA.jis,
        url,
        image: photoAbs(KAMIYAMA_PLACE_PHOTO),
        sameAs: [KAMIYAMA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '神領字本野間100'
            : '100 Motonoma, Jinryo',
          addressLocality: isJa ? KAMIYAMA.nameJa : KAMIYAMA.nameEn,
          addressRegion: isJa ? KAMIYAMA.prefectureJa : KAMIYAMA.prefectureEn,
          postalCode: KAMIYAMA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KAMIYAMA.prefectureJa : KAMIYAMA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KAMIYAMA.nameJa : KAMIYAMA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? KAMIYAMA.prefectureJa : KAMIYAMA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? KAMIYAMA.nameJa : KAMIYAMA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '神山町の案内' : 'Places in Kamiyama Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}



export function kitajimaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/kitajima');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kitajima');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KITAJIMA.nameJa : KITAJIMA.nameEn,
        alternateName: isJa ? KITAJIMA.nameEn : KITAJIMA.nameJa,
        identifier: KITAJIMA.jis,
        url,
        image: photoAbs(KITAJIMA_PLACE_PHOTO),
        sameAs: [KITAJIMA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '中村字上地23-1'
            : '23-1 Kamiichi, Nakamura',
          addressLocality: isJa ? KITAJIMA.nameJa : KITAJIMA.nameEn,
          addressRegion: isJa ? KITAJIMA.prefectureJa : KITAJIMA.prefectureEn,
          postalCode: KITAJIMA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KITAJIMA.prefectureJa : KITAJIMA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KITAJIMA.nameJa : KITAJIMA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? KITAJIMA.prefectureJa : KITAJIMA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? KITAJIMA.nameJa : KITAJIMA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '北島町の案内' : 'Places in Kitajima Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function narutoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/naruto');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('naruto');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['City', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? NARUTO.nameJa : NARUTO.nameEn,
        alternateName: isJa ? NARUTO.nameEn : NARUTO.nameJa,
        identifier: NARUTO.jis,
        url,
        image: photoAbs(NARUTO_PLACE_PHOTO),
        sameAs: [NARUTO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '撫養町南浜字東浜170番地'
            : '170 Higashihama, Minamihama, Muya-cho',
          addressLocality: isJa ? NARUTO.nameJa : NARUTO.nameEn,
          addressRegion: isJa ? NARUTO.prefectureJa : NARUTO.prefectureEn,
          postalCode: NARUTO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? NARUTO.prefectureJa : NARUTO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? NARUTO.nameJa : NARUTO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? NARUTO.prefectureJa : NARUTO.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? NARUTO.nameJa : NARUTO.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '鳴門市の案内' : 'Places in Naruto City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function tokushimaCityGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/tokushima');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('tokushima');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['City', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TOKUSHIMA_CITY.nameJa : TOKUSHIMA_CITY.nameEn,
        alternateName: isJa ? TOKUSHIMA_CITY.nameEn : TOKUSHIMA_CITY.nameJa,
        identifier: TOKUSHIMA_CITY.jis,
        url,
        image: photoAbs(TOKUSHIMA_CITY_PLACE_PHOTO),
        sameAs: [TOKUSHIMA_CITY.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '幸町2丁目5番地'
            : '2-5 Saiwai-cho',
          addressLocality: isJa ? TOKUSHIMA_CITY.nameJa : TOKUSHIMA_CITY.nameEn,
          addressRegion: isJa ? TOKUSHIMA_CITY.prefectureJa : TOKUSHIMA_CITY.prefectureEn,
          postalCode: TOKUSHIMA_CITY.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TOKUSHIMA_CITY.prefectureJa : TOKUSHIMA_CITY.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TOKUSHIMA_CITY.nameJa : TOKUSHIMA_CITY.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? TOKUSHIMA_CITY.prefectureJa : TOKUSHIMA_CITY.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? TOKUSHIMA_CITY.nameJa : TOKUSHIMA_CITY.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '徳島市の案内' : 'Places in Tokushima City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function placeGraph(listing: PublicListing, locale: AppLocale) {
  const url = canonicalUrl(locale, listingRest(listing.id, listing.slug));
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      listingNode(listing, locale),
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: listing.nameJa,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: canonicalUrl(locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa
              ? (prefSlugForReady(listing.slug) === 'kagawa' ? TAKAMATSU.prefectureJa : MIMA.prefectureJa)
              : (prefSlugForReady(listing.slug) === 'kagawa' ? TAKAMATSU.prefectureEn : MIMA.prefectureEn),
            item: canonicalUrl(locale, prefSlugForReady(listing.slug))
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? localityJa(listing.slug) : localityEn(listing.slug),
            item: canonicalUrl(
              locale,
              `${prefSlugForReady(listing.slug)}/${listing.slug}`
            )
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: listing.nameJa,
            item: url
          }
        ]
      }
    ]
  };
}

export function aizumiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/aizumi');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('aizumi');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? AIZUMI.nameJa : AIZUMI.nameEn,
        alternateName: isJa ? AIZUMI.nameEn : AIZUMI.nameJa,
        identifier: AIZUMI.jis,
        url,
        image: photoAbs(AIZUMI_PLACE_PHOTO),
        sameAs: [AIZUMI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '奥野字矢上前52-1' : '52-1 Yagami-mae, Okuno',
          addressLocality: isJa ? AIZUMI.nameJa : AIZUMI.nameEn,
          addressRegion: isJa ? AIZUMI.prefectureJa : AIZUMI.prefectureEn,
          postalCode: AIZUMI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? AIZUMI.prefectureJa : AIZUMI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? AIZUMI.nameJa : AIZUMI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? AIZUMI.prefectureJa : AIZUMI.prefectureEn, item: canonicalUrl(locale, 'tokushima')},
          {'@type': 'ListItem', position: 3, name: isJa ? AIZUMI.nameJa : AIZUMI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '藍住町の案内' : 'Places in Aizumi Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function komatsushimaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/komatsushima');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('komatsushima');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['City', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KOMATSUSHIMA.nameJa : KOMATSUSHIMA.nameEn,
        alternateName: isJa ? KOMATSUSHIMA.nameEn : KOMATSUSHIMA.nameJa,
        identifier: KOMATSUSHIMA.jis,
        url,
        image: photoAbs(KOMATSUSHIMA_PLACE_PHOTO),
        sameAs: [KOMATSUSHIMA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '横須町1番1号' : '1-1 Yokosu-cho',
          addressLocality: isJa ? KOMATSUSHIMA.nameJa : KOMATSUSHIMA.nameEn,
          addressRegion: isJa ? KOMATSUSHIMA.prefectureJa : KOMATSUSHIMA.prefectureEn,
          postalCode: KOMATSUSHIMA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KOMATSUSHIMA.prefectureJa : KOMATSUSHIMA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KOMATSUSHIMA.nameJa : KOMATSUSHIMA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KOMATSUSHIMA.prefectureJa : KOMATSUSHIMA.prefectureEn, item: canonicalUrl(locale, 'tokushima')},
          {'@type': 'ListItem', position: 3, name: isJa ? KOMATSUSHIMA.nameJa : KOMATSUSHIMA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '小松島市の案内' : 'Places in Komatsushima City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function mugiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/mugi');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('mugi');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MUGI.nameJa : MUGI.nameEn,
        alternateName: isJa ? MUGI.nameEn : MUGI.nameJa,
        identifier: MUGI.jis,
        url,
        image: photoAbs(MUGI_PLACE_PHOTO),
        sameAs: [MUGI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '中村字本村7-4' : '7-4 Honmura, Nakamura',
          addressLocality: isJa ? MUGI.nameJa : MUGI.nameEn,
          addressRegion: isJa ? MUGI.prefectureJa : MUGI.prefectureEn,
          postalCode: MUGI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MUGI.prefectureJa : MUGI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MUGI.nameJa : MUGI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? MUGI.prefectureJa : MUGI.prefectureEn, item: canonicalUrl(locale, 'tokushima')},
          {'@type': 'ListItem', position: 3, name: isJa ? MUGI.nameJa : MUGI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '牟岐町の案内' : 'Places in Mugi Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function ananGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'tokushima/anan');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('anan');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? ANAN.nameJa : ANAN.nameEn,
        alternateName: isJa ? ANAN.nameEn : ANAN.nameJa,
        identifier: ANAN.jis,
        url,
        image: photoAbs(ANAN_PLACE_PHOTO),
        sameAs: [ANAN.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '富岡町トノ町12番地3' : '12-3 Tonochō, Tomioka-cho',
          addressLocality: isJa ? ANAN.nameJa : ANAN.nameEn,
          addressRegion: isJa ? ANAN.prefectureJa : ANAN.prefectureEn,
          postalCode: ANAN.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? ANAN.prefectureJa : ANAN.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? ANAN.nameJa : ANAN.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? ANAN.prefectureJa : ANAN.prefectureEn, item: canonicalUrl(locale, 'tokushima')},
          {'@type': 'ListItem', position: 3, name: isJa ? ANAN.nameJa : ANAN.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '阿南市の案内' : 'Places in Anan City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function takamatsuGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/takamatsu');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('takamatsu');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TAKAMATSU.nameJa : TAKAMATSU.nameEn,
        alternateName: isJa ? TAKAMATSU.nameEn : TAKAMATSU.nameJa,
        identifier: TAKAMATSU.jis,
        url,
        image: photoAbs(TAKAMATSU_PLACE_PHOTO),
        sameAs: [TAKAMATSU.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '番町一丁目8番15号' : '1-8-15 Bancho',
          addressLocality: isJa ? TAKAMATSU.nameJa : TAKAMATSU.nameEn,
          addressRegion: isJa ? TAKAMATSU.prefectureJa : TAKAMATSU.prefectureEn,
          postalCode: TAKAMATSU.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TAKAMATSU.prefectureJa : TAKAMATSU.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TAKAMATSU.nameJa : TAKAMATSU.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? TAKAMATSU.prefectureJa : TAKAMATSU.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? TAKAMATSU.nameJa : TAKAMATSU.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '高松市の案内' : 'Places in Takamatsu City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function kotohiraGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/kotohira');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kotohira');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KOTOHIRA.nameJa : KOTOHIRA.nameEn,
        alternateName: isJa ? KOTOHIRA.nameEn : KOTOHIRA.nameJa,
        identifier: KOTOHIRA.jis,
        url,
        image: photoAbs(KOTOHIRA_PLACE_PHOTO),
        sameAs: [KOTOHIRA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '榎井817番地10' : '817-10 Enai',
          addressLocality: isJa ? KOTOHIRA.nameJa : KOTOHIRA.nameEn,
          addressRegion: isJa ? KOTOHIRA.prefectureJa : KOTOHIRA.prefectureEn,
          postalCode: KOTOHIRA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KOTOHIRA.prefectureJa : KOTOHIRA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KOTOHIRA.nameJa : KOTOHIRA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KOTOHIRA.prefectureJa : KOTOHIRA.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? KOTOHIRA.nameJa : KOTOHIRA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '琴平町の案内' : 'Places in Kotohira Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function marugameGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/marugame');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('marugame');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MARUGAME.nameJa : MARUGAME.nameEn,
        alternateName: isJa ? MARUGAME.nameEn : MARUGAME.nameJa,
        identifier: MARUGAME.jis,
        url,
        image: photoAbs(MARUGAME_PLACE_PHOTO),
        sameAs: [MARUGAME.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '大手町二丁目4番21号' : '2-4-21 Otemachi',
          addressLocality: isJa ? MARUGAME.nameJa : MARUGAME.nameEn,
          addressRegion: isJa ? MARUGAME.prefectureJa : MARUGAME.prefectureEn,
          postalCode: MARUGAME.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MARUGAME.prefectureJa : MARUGAME.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MARUGAME.nameJa : MARUGAME.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? MARUGAME.prefectureJa : MARUGAME.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? MARUGAME.nameJa : MARUGAME.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '丸亀市の案内' : 'Places in Marugame City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function kanonjiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/kanonji');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kanonji');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KANONJI.nameJa : KANONJI.nameEn,
        alternateName: isJa ? KANONJI.nameEn : KANONJI.nameJa,
        identifier: KANONJI.jis,
        url,
        image: photoAbs(KANONJI_PLACE_PHOTO),
        sameAs: [KANONJI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '大手町二丁目4番21号' : '2-4-21 Otemachi',
          addressLocality: isJa ? KANONJI.nameJa : KANONJI.nameEn,
          addressRegion: isJa ? KANONJI.prefectureJa : KANONJI.prefectureEn,
          postalCode: KANONJI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KANONJI.prefectureJa : KANONJI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KANONJI.nameJa : KANONJI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KANONJI.prefectureJa : KANONJI.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? KANONJI.nameJa : KANONJI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '丸亀市の案内' : 'Places in Marugame City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function sakaideGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/sakaide');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('sakaide');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? SAKAIDE.nameJa : SAKAIDE.nameEn,
        alternateName: isJa ? SAKAIDE.nameEn : SAKAIDE.nameJa,
        identifier: SAKAIDE.jis,
        url,
        image: photoAbs(SAKAIDE_PLACE_PHOTO),
        sameAs: [SAKAIDE.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '室町二丁目3番5号' : '2-3-5 Muromachi',
          addressLocality: isJa ? SAKAIDE.nameJa : SAKAIDE.nameEn,
          addressRegion: isJa ? SAKAIDE.prefectureJa : SAKAIDE.prefectureEn,
          postalCode: SAKAIDE.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? SAKAIDE.prefectureJa : SAKAIDE.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? SAKAIDE.nameJa : SAKAIDE.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? SAKAIDE.prefectureJa : SAKAIDE.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? SAKAIDE.nameJa : SAKAIDE.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '坂出市の案内' : 'Places in Sakaide City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function naoshimaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/naoshima');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('naoshima');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? NAOSHIMA.nameJa : NAOSHIMA.nameEn,
        alternateName: isJa ? NAOSHIMA.nameEn : NAOSHIMA.nameJa,
        identifier: NAOSHIMA.jis,
        url,
        image: photoAbs(NAOSHIMA_PLACE_PHOTO),
        sameAs: [NAOSHIMA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '室町二丁目3番5号' : '2-3-5 Muromachi',
          addressLocality: isJa ? NAOSHIMA.nameJa : NAOSHIMA.nameEn,
          addressRegion: isJa ? NAOSHIMA.prefectureJa : NAOSHIMA.prefectureEn,
          postalCode: NAOSHIMA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? NAOSHIMA.prefectureJa : NAOSHIMA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? NAOSHIMA.nameJa : NAOSHIMA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? NAOSHIMA.prefectureJa : NAOSHIMA.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? NAOSHIMA.nameJa : NAOSHIMA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '直島町の案内' : 'Places in Naoshima Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function shodoshimaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/shodoshima');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('shodoshima');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? SHODOSHIMA.nameJa : SHODOSHIMA.nameEn,
        alternateName: isJa ? SHODOSHIMA.nameEn : SHODOSHIMA.nameJa,
        identifier: SHODOSHIMA.jis,
        url,
        image: photoAbs(SHODOSHIMA_PLACE_PHOTO),
        sameAs: [SHODOSHIMA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '片城甲44番地95' : 'Katashiro Ko 44-95',
          addressLocality: isJa ? SHODOSHIMA.nameJa : SHODOSHIMA.nameEn,
          addressRegion: isJa ? SHODOSHIMA.prefectureJa : SHODOSHIMA.prefectureEn,
          postalCode: SHODOSHIMA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? SHODOSHIMA.prefectureJa : SHODOSHIMA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? SHODOSHIMA.nameJa : SHODOSHIMA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? SHODOSHIMA.prefectureJa : SHODOSHIMA.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? SHODOSHIMA.nameJa : SHODOSHIMA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '小豆島町の案内' : 'Places in Shodoshima Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function zentsujiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/zentsuji');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('zentsuji');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? ZENTSUJI.nameJa : ZENTSUJI.nameEn,
        alternateName: isJa ? ZENTSUJI.nameEn : ZENTSUJI.nameJa,
        identifier: ZENTSUJI.jis,
        url,
        image: photoAbs(ZENTSUJI_PLACE_PHOTO),
        sameAs: [ZENTSUJI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '文京町二丁目1番1号' : '2-1-1 Bunkyo-cho',
          addressLocality: isJa ? ZENTSUJI.nameJa : ZENTSUJI.nameEn,
          addressRegion: isJa ? ZENTSUJI.prefectureJa : ZENTSUJI.prefectureEn,
          postalCode: ZENTSUJI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? ZENTSUJI.prefectureJa : ZENTSUJI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? ZENTSUJI.nameJa : ZENTSUJI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? ZENTSUJI.prefectureJa : ZENTSUJI.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? ZENTSUJI.nameJa : ZENTSUJI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '善通寺市の案内' : 'Places in Zentsuji',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function mitoyoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/mitoyo');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('mitoyo');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MITOYO.nameJa : MITOYO.nameEn,
        alternateName: isJa ? MITOYO.nameEn : MITOYO.nameJa,
        identifier: MITOYO.jis,
        url,
        image: photoAbs(MITOYO_PLACE_PHOTO),
        sameAs: [MITOYO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '高瀬町下勝間2373番地1' : '2373-1 Shimokatsuma, Takase-cho',
          addressLocality: isJa ? MITOYO.nameJa : MITOYO.nameEn,
          addressRegion: isJa ? MITOYO.prefectureJa : MITOYO.prefectureEn,
          postalCode: MITOYO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MITOYO.prefectureJa : MITOYO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MITOYO.nameJa : MITOYO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? MITOYO.prefectureJa : MITOYO.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? MITOYO.nameJa : MITOYO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '三豊市の案内' : 'Places in Mitoyo',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function utazuGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/utazu');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('utazu');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? UTAZU.nameJa : UTAZU.nameEn,
        alternateName: isJa ? UTAZU.nameEn : UTAZU.nameJa,
        identifier: UTAZU.jis,
        url,
        image: photoAbs(UTAZU_PLACE_PHOTO),
        sameAs: [UTAZU.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '1881番地' : '1881',
          addressLocality: isJa ? UTAZU.nameJa : UTAZU.nameEn,
          addressRegion: isJa ? UTAZU.prefectureJa : UTAZU.prefectureEn,
          postalCode: UTAZU.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? UTAZU.prefectureJa : UTAZU.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? UTAZU.nameJa : UTAZU.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? UTAZU.prefectureJa : UTAZU.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? UTAZU.nameJa : UTAZU.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '宇多津町の案内' : 'Places in Utazu',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function tonoshoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/tonosho');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('tonosho');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TONOSHO.nameJa : TONOSHO.nameEn,
        alternateName: isJa ? TONOSHO.nameEn : TONOSHO.nameJa,
        identifier: TONOSHO.jis,
        url,
        image: photoAbs(TONOSHO_PLACE_PHOTO),
        sameAs: [TONOSHO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '淵崎甲1400番地2' : 'Fuchizaki Ko 1400-2',
          addressLocality: isJa ? TONOSHO.nameJa : TONOSHO.nameEn,
          addressRegion: isJa ? TONOSHO.prefectureJa : TONOSHO.prefectureEn,
          postalCode: TONOSHO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TONOSHO.prefectureJa : TONOSHO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TONOSHO.nameJa : TONOSHO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? TONOSHO.prefectureJa : TONOSHO.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? TONOSHO.nameJa : TONOSHO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '土庄町の案内' : 'Places in Tonosho',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function sanukiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/sanuki');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('sanuki');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? SANUKI.nameJa : SANUKI.nameEn,
        alternateName: isJa ? SANUKI.nameEn : SANUKI.nameJa,
        identifier: SANUKI.jis,
        url,
        image: photoAbs(SANUKI_PLACE_PHOTO),
        sameAs: [SANUKI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '志度5385番地8' : '5385-8 Shido',
          addressLocality: isJa ? SANUKI.nameJa : SANUKI.nameEn,
          addressRegion: isJa ? SANUKI.prefectureJa : SANUKI.prefectureEn,
          postalCode: SANUKI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? SANUKI.prefectureJa : SANUKI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? SANUKI.nameJa : SANUKI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? SANUKI.prefectureJa : SANUKI.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? SANUKI.nameJa : SANUKI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? 'さぬき市の案内' : 'Places in Sanuki',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function higashikagawaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/higashikagawa');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('higashikagawa');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? HIGASHIKAGAWA.nameJa : HIGASHIKAGAWA.nameEn,
        alternateName: isJa ? HIGASHIKAGAWA.nameEn : HIGASHIKAGAWA.nameJa,
        identifier: HIGASHIKAGAWA.jis,
        url,
        image: photoAbs(HIGASHIKAGAWA_PLACE_PHOTO),
        sameAs: [HIGASHIKAGAWA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '湊1847番地1' : '1847-1 Minato',
          addressLocality: isJa ? HIGASHIKAGAWA.nameJa : HIGASHIKAGAWA.nameEn,
          addressRegion: isJa ? HIGASHIKAGAWA.prefectureJa : HIGASHIKAGAWA.prefectureEn,
          postalCode: HIGASHIKAGAWA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? HIGASHIKAGAWA.prefectureJa : HIGASHIKAGAWA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? HIGASHIKAGAWA.nameJa : HIGASHIKAGAWA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? HIGASHIKAGAWA.prefectureJa : HIGASHIKAGAWA.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? HIGASHIKAGAWA.nameJa : HIGASHIKAGAWA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '三木町の案内' : 'Places in Miki',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function mikiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/miki');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('miki');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MIKI.nameJa : MIKI.nameEn,
        alternateName: isJa ? MIKI.nameEn : MIKI.nameJa,
        identifier: MIKI.jis,
        url,
        image: photoAbs(MIKI_PLACE_PHOTO),
        sameAs: [MIKI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '大字氷上310番地' : '310 Hyokami',
          addressLocality: isJa ? MIKI.nameJa : MIKI.nameEn,
          addressRegion: isJa ? MIKI.prefectureJa : MIKI.prefectureEn,
          postalCode: MIKI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MIKI.prefectureJa : MIKI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MIKI.nameJa : MIKI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? MIKI.prefectureJa : MIKI.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? MIKI.nameJa : MIKI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '三木町の案内' : 'Places in Miki',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function ayagawaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/ayagawa');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('ayagawa');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? AYAGAWA.nameJa : AYAGAWA.nameEn,
        alternateName: isJa ? AYAGAWA.nameEn : AYAGAWA.nameJa,
        identifier: AYAGAWA.jis,
        url,
        image: photoAbs(AYAGAWA_PLACE_PHOTO),
        sameAs: [AYAGAWA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '滝宮299番地' : '299 Takinomiya',
          addressLocality: isJa ? AYAGAWA.nameJa : AYAGAWA.nameEn,
          addressRegion: isJa ? AYAGAWA.prefectureJa : AYAGAWA.prefectureEn,
          postalCode: AYAGAWA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? AYAGAWA.prefectureJa : AYAGAWA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? AYAGAWA.nameJa : AYAGAWA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? AYAGAWA.prefectureJa : AYAGAWA.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? AYAGAWA.nameJa : AYAGAWA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '綾川町の案内' : 'Places in Ayagawa',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function tadotsuGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/tadotsu');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('tadotsu');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TADOTSU.nameJa : TADOTSU.nameEn,
        alternateName: isJa ? TADOTSU.nameEn : TADOTSU.nameJa,
        identifier: TADOTSU.jis,
        url,
        image: photoAbs(TADOTSU_PLACE_PHOTO),
        sameAs: [TADOTSU.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '栄町三丁目3番95号' : '3-3-95 Sakae-cho',
          addressLocality: isJa ? TADOTSU.nameJa : TADOTSU.nameEn,
          addressRegion: isJa ? TADOTSU.prefectureJa : TADOTSU.prefectureEn,
          postalCode: TADOTSU.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TADOTSU.prefectureJa : TADOTSU.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TADOTSU.nameJa : TADOTSU.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? TADOTSU.prefectureJa : TADOTSU.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? TADOTSU.nameJa : TADOTSU.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '多度津町の案内' : 'Places in Tadotsu',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function mannoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kagawa/manno');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('manno');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MANNO.nameJa : MANNO.nameEn,
        alternateName: isJa ? MANNO.nameEn : MANNO.nameJa,
        identifier: MANNO.jis,
        url,
        image: photoAbs(MANNO_PLACE_PHOTO),
        sameAs: [MANNO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '吉野下430' : '430 Yoshinoshimo',
          addressLocality: isJa ? MANNO.nameJa : MANNO.nameEn,
          addressRegion: isJa ? MANNO.prefectureJa : MANNO.prefectureEn,
          postalCode: MANNO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MANNO.prefectureJa : MANNO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MANNO.nameJa : MANNO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? MANNO.prefectureJa : MANNO.prefectureEn, item: canonicalUrl(locale, 'kagawa')},
          {'@type': 'ListItem', position: 3, name: isJa ? MANNO.nameJa : MANNO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? 'まんのう町の案内' : 'Places in Manno',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function kochiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/kochi');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kochi');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KOCHI.nameJa : KOCHI.nameEn,
        alternateName: isJa ? KOCHI.nameEn : KOCHI.nameJa,
        identifier: KOCHI.jis,
        url,
        image: photoAbs(KOCHI_PLACE_PHOTO),
        sameAs: [KOCHI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '本町5丁目1-45' : '1-45 Honmachi 5-chome',
          addressLocality: isJa ? KOCHI.nameJa : KOCHI.nameEn,
          addressRegion: isJa ? KOCHI.prefectureJa : KOCHI.prefectureEn,
          postalCode: KOCHI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KOCHI.prefectureJa : KOCHI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KOCHI.nameJa : KOCHI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KOCHI.prefectureJa : KOCHI.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? KOCHI.nameJa : KOCHI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '高知市の案内' : 'Places in Kochi City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function nankokuGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/nankoku');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('nankoku');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? NANKOKU.nameJa : NANKOKU.nameEn,
        alternateName: isJa ? NANKOKU.nameEn : NANKOKU.nameJa,
        identifier: NANKOKU.jis,
        url,
        image: photoAbs(NANKOKU_PLACE_PHOTO),
        sameAs: [NANKOKU.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '大埇甲2301番地' : '2301 Osoe Ko',
          addressLocality: isJa ? NANKOKU.nameJa : NANKOKU.nameEn,
          addressRegion: isJa ? NANKOKU.prefectureJa : NANKOKU.prefectureEn,
          postalCode: NANKOKU.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? NANKOKU.prefectureJa : NANKOKU.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? NANKOKU.nameJa : NANKOKU.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? NANKOKU.prefectureJa : NANKOKU.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? NANKOKU.nameJa : NANKOKU.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '南国市の案内' : 'Places in Nankoku City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function konanGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/konan');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('konan');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KONAN.nameJa : KONAN.nameEn,
        alternateName: isJa ? KONAN.nameEn : KONAN.nameJa,
        identifier: KONAN.jis,
        url,
        image: photoAbs(KONAN_PLACE_PHOTO),
        sameAs: [KONAN.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '野市町西野2706番地' : '2706 Nishino, Noichi-cho',
          addressLocality: isJa ? KONAN.nameJa : KONAN.nameEn,
          addressRegion: isJa ? KONAN.prefectureJa : KONAN.prefectureEn,
          postalCode: KONAN.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KONAN.prefectureJa : KONAN.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KONAN.nameJa : KONAN.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KONAN.prefectureJa : KONAN.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? KONAN.nameJa : KONAN.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '香南市の案内' : 'Places in Konan City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function kamiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/kami');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kami');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KAMI.nameJa : KAMI.nameEn,
        alternateName: isJa ? KAMI.nameEn : KAMI.nameJa,
        identifier: KAMI.jis,
        url,
        image: photoAbs(KAMI_PLACE_PHOTO),
        sameAs: [KAMI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '土佐山田町宝町1丁目2番1号' : '1-2-1 Takaracho, Tosayamada-cho',
          addressLocality: isJa ? KAMI.nameJa : KAMI.nameEn,
          addressRegion: isJa ? KAMI.prefectureJa : KAMI.prefectureEn,
          postalCode: KAMI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KAMI.prefectureJa : KAMI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KAMI.nameJa : KAMI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KAMI.prefectureJa : KAMI.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? KAMI.nameJa : KAMI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '香美市の案内' : 'Places in Kami City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function inoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/ino');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('ino');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? INO.nameJa : INO.nameEn,
        alternateName: isJa ? INO.nameEn : INO.nameJa,
        identifier: INO.jis,
        url,
        image: photoAbs(INO_PLACE_PHOTO),
        sameAs: [INO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '1700番地1' : '1700-1',
          addressLocality: isJa ? INO.nameJa : INO.nameEn,
          addressRegion: isJa ? INO.prefectureJa : INO.prefectureEn,
          postalCode: INO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? INO.prefectureJa : INO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? INO.nameJa : INO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? INO.prefectureJa : INO.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? INO.nameJa : INO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? 'いの町の案内' : 'Places in Ino Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function akiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/aki');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('aki');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? AKI.nameJa : AKI.nameEn,
        alternateName: isJa ? AKI.nameEn : AKI.nameJa,
        identifier: AKI.jis,
        url,
        image: photoAbs(AKI_PLACE_PHOTO),
        sameAs: [AKI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '土居82番地1' : '82-1 Doi',
          addressLocality: isJa ? AKI.nameJa : AKI.nameEn,
          addressRegion: isJa ? AKI.prefectureJa : AKI.prefectureEn,
          postalCode: AKI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? AKI.prefectureJa : AKI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? AKI.nameJa : AKI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? AKI.prefectureJa : AKI.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? AKI.nameJa : AKI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '安芸市の案内' : 'Places in Aki City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function tosaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/tosa');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('tosa');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TOSA.nameJa : TOSA.nameEn,
        alternateName: isJa ? TOSA.nameEn : TOSA.nameJa,
        identifier: TOSA.jis,
        url,
        image: photoAbs(TOSA_PLACE_PHOTO),
        sameAs: [TOSA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '高岡町甲2017番地1' : '2017-1 Kō, Takaoka-cho',
          addressLocality: isJa ? TOSA.nameJa : TOSA.nameEn,
          addressRegion: isJa ? TOSA.prefectureJa : TOSA.prefectureEn,
          postalCode: TOSA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TOSA.prefectureJa : TOSA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TOSA.nameJa : TOSA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? TOSA.prefectureJa : TOSA.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? TOSA.nameJa : TOSA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '土佐市の案内' : 'Places in Tosa City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function susakiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/susaki');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('susaki');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? SUSAKI.nameJa : SUSAKI.nameEn,
        alternateName: isJa ? SUSAKI.nameEn : SUSAKI.nameJa,
        identifier: SUSAKI.jis,
        url,
        image: photoAbs(SUSAKI_PLACE_PHOTO),
        sameAs: [SUSAKI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '山手町1番7号' : '1-7 Yamate-cho',
          addressLocality: isJa ? SUSAKI.nameJa : SUSAKI.nameEn,
          addressRegion: isJa ? SUSAKI.prefectureJa : SUSAKI.prefectureEn,
          postalCode: SUSAKI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? SUSAKI.prefectureJa : SUSAKI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? SUSAKI.nameJa : SUSAKI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? SUSAKI.prefectureJa : SUSAKI.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? SUSAKI.nameJa : SUSAKI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '須崎市の案内' : 'Places in Susaki City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function tosashimizuGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/tosashimizu');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('tosashimizu');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TOSASHIMIZU.nameJa : TOSASHIMIZU.nameEn,
        alternateName: isJa ? TOSASHIMIZU.nameEn : TOSASHIMIZU.nameJa,
        identifier: TOSASHIMIZU.jis,
        url,
        image: photoAbs(TOSASHIMIZU_PLACE_PHOTO),
        sameAs: [TOSASHIMIZU.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '天神町11番2号' : '11-2 Tenjin-cho',
          addressLocality: isJa ? TOSASHIMIZU.nameJa : TOSASHIMIZU.nameEn,
          addressRegion: isJa ? TOSASHIMIZU.prefectureJa : TOSASHIMIZU.prefectureEn,
          postalCode: TOSASHIMIZU.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TOSASHIMIZU.prefectureJa : TOSASHIMIZU.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TOSASHIMIZU.nameJa : TOSASHIMIZU.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? TOSASHIMIZU.prefectureJa : TOSASHIMIZU.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? TOSASHIMIZU.nameJa : TOSASHIMIZU.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '土佐清水市の案内' : 'Places in Tosashimizu City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function sukumoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/sukumo');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('sukumo');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? SUKUMO.nameJa : SUKUMO.nameEn,
        alternateName: isJa ? SUKUMO.nameEn : SUKUMO.nameJa,
        identifier: SUKUMO.jis,
        url,
        image: photoAbs(SUKUMO_PLACE_PHOTO),
        sameAs: [SUKUMO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '希望ヶ丘1番地' : '1 Kibogaoka',
          addressLocality: isJa ? SUKUMO.nameJa : SUKUMO.nameEn,
          addressRegion: isJa ? SUKUMO.prefectureJa : SUKUMO.prefectureEn,
          postalCode: SUKUMO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? SUKUMO.prefectureJa : SUKUMO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? SUKUMO.nameJa : SUKUMO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? SUKUMO.prefectureJa : SUKUMO.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? SUKUMO.nameJa : SUKUMO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '宿毛市の案内' : 'Places in Sukumo City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function toyoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/toyo');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('toyo');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TOYO.nameJa : TOYO.nameEn,
        alternateName: isJa ? TOYO.nameEn : TOYO.nameJa,
        identifier: TOYO.jis,
        url,
        image: photoAbs(TOYO_PLACE_PHOTO),
        sameAs: [TOYO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '大字生見758番地3' : '758-3 Ikumi',
          addressLocality: isJa ? TOYO.nameJa : TOYO.nameEn,
          addressRegion: isJa ? TOYO.prefectureJa : TOYO.prefectureEn,
          postalCode: TOYO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TOYO.prefectureJa : TOYO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TOYO.nameJa : TOYO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? TOYO.prefectureJa : TOYO.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? TOYO.nameJa : TOYO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '東洋町の案内' : 'Places in Toyo Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}



export function geiseiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/geisei');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('geisei');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? GEISEI.nameJa : GEISEI.nameEn,
        alternateName: isJa ? GEISEI.nameEn : GEISEI.nameJa,
        identifier: GEISEI.jis,
        url,
        image: photoAbs(GEISEI_PLACE_PHOTO),
        sameAs: [GEISEI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '和食甲1262番地' : '1262 Wajiki-ko',
          addressLocality: isJa ? GEISEI.nameJa : GEISEI.nameEn,
          addressRegion: isJa ? GEISEI.prefectureJa : GEISEI.prefectureEn,
          postalCode: GEISEI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? GEISEI.prefectureJa : GEISEI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? GEISEI.nameJa : GEISEI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? GEISEI.prefectureJa : GEISEI.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? GEISEI.nameJa : GEISEI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '芸西村の案内' : 'Places in Geisei Village',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function kitagawaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/kitagawa');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kitagawa');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KITAGAWA.nameJa : KITAGAWA.nameEn,
        alternateName: isJa ? KITAGAWA.nameEn : KITAGAWA.nameJa,
        identifier: KITAGAWA.jis,
        url,
        image: photoAbs(KITAGAWA_PLACE_PHOTO),
        sameAs: [KITAGAWA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '野友甲1530番地' : '1530 Notomo-ko',
          addressLocality: isJa ? KITAGAWA.nameJa : KITAGAWA.nameEn,
          addressRegion: isJa ? KITAGAWA.prefectureJa : KITAGAWA.prefectureEn,
          postalCode: KITAGAWA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KITAGAWA.prefectureJa : KITAGAWA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KITAGAWA.nameJa : KITAGAWA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KITAGAWA.prefectureJa : KITAGAWA.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? KITAGAWA.nameJa : KITAGAWA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '北川村の案内' : 'Places in Kitagawa Village',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function umajiGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/umaji');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('umaji');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? UMAJI.nameJa : UMAJI.nameEn,
        alternateName: isJa ? UMAJI.nameEn : UMAJI.nameJa,
        identifier: UMAJI.jis,
        url,
        image: photoAbs(UMAJI_PLACE_PHOTO),
        sameAs: [UMAJI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '大字馬路443番地' : '443 Umaji',
          addressLocality: isJa ? UMAJI.nameJa : UMAJI.nameEn,
          addressRegion: isJa ? UMAJI.prefectureJa : UMAJI.prefectureEn,
          postalCode: UMAJI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? UMAJI.prefectureJa : UMAJI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? UMAJI.nameJa : UMAJI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? UMAJI.prefectureJa : UMAJI.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? UMAJI.nameJa : UMAJI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '馬路村の案内' : 'Places in Umaji Village',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function motoyamaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/motoyama');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('motoyama');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MOTOYAMA.nameJa : MOTOYAMA.nameEn,
        alternateName: isJa ? MOTOYAMA.nameEn : MOTOYAMA.nameJa,
        identifier: MOTOYAMA.jis,
        url,
        image: photoAbs(MOTOYAMA_PLACE_PHOTO),
        sameAs: [MOTOYAMA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '本山636番地' : '636 Motoyama',
          addressLocality: isJa ? MOTOYAMA.nameJa : MOTOYAMA.nameEn,
          addressRegion: isJa ? MOTOYAMA.prefectureJa : MOTOYAMA.prefectureEn,
          postalCode: MOTOYAMA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MOTOYAMA.prefectureJa : MOTOYAMA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MOTOYAMA.nameJa : MOTOYAMA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? MOTOYAMA.prefectureJa : MOTOYAMA.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? MOTOYAMA.nameJa : MOTOYAMA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '本山町の案内' : 'Places in Motoyama Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function otoyoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/otoyo');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('otoyo');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? OTOYO.nameJa : OTOYO.nameEn,
        alternateName: isJa ? OTOYO.nameEn : OTOYO.nameJa,
        identifier: OTOYO.jis,
        url,
        image: photoAbs(OTOYO_PLACE_PHOTO),
        sameAs: [OTOYO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '津家1626番地' : '1626 Tsuge',
          addressLocality: isJa ? OTOYO.nameJa : OTOYO.nameEn,
          addressRegion: isJa ? OTOYO.prefectureJa : OTOYO.prefectureEn,
          postalCode: OTOYO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? OTOYO.prefectureJa : OTOYO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? OTOYO.nameJa : OTOYO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? OTOYO.prefectureJa : OTOYO.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? OTOYO.nameJa : OTOYO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '大豊町の案内' : 'Places in Otoyo Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}




export function okawaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/okawa');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('okawa');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? OKAWA.nameJa : OKAWA.nameEn,
        alternateName: isJa ? OKAWA.nameEn : OKAWA.nameJa,
        identifier: OKAWA.jis,
        url,
        image: photoAbs(OKAWA_PLACE_PHOTO),
        sameAs: [OKAWA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '小松27-1' : '27-1 Komatsu',
          addressLocality: isJa ? OKAWA.nameJa : OKAWA.nameEn,
          addressRegion: isJa ? OKAWA.prefectureJa : OKAWA.prefectureEn,
          postalCode: OKAWA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? OKAWA.prefectureJa : OKAWA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? OKAWA.nameJa : OKAWA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? OKAWA.prefectureJa : OKAWA.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? OKAWA.nameJa : OKAWA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '大川村の案内' : 'Places in Okawa Village',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function tosachoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/tosacho');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('tosacho');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? TOSACHO.nameJa : TOSACHO.nameEn,
        alternateName: isJa ? TOSACHO.nameEn : TOSACHO.nameJa,
        identifier: TOSACHO.jis,
        url,
        image: photoAbs(TOSACHO_PLACE_PHOTO),
        sameAs: [TOSACHO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '土居194番地' : '194 Doi',
          addressLocality: isJa ? TOSACHO.nameJa : TOSACHO.nameEn,
          addressRegion: isJa ? TOSACHO.prefectureJa : TOSACHO.prefectureEn,
          postalCode: TOSACHO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? TOSACHO.prefectureJa : TOSACHO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? TOSACHO.nameJa : TOSACHO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? TOSACHO.prefectureJa : TOSACHO.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? TOSACHO.nameJa : TOSACHO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '土佐町の案内' : 'Places in Tosa Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function yasudaGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/yasuda');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('yasuda');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? YASUDA.nameJa : YASUDA.nameEn,
        alternateName: isJa ? YASUDA.nameEn : YASUDA.nameJa,
        identifier: YASUDA.jis,
        url,
        image: photoAbs(YASUDA_PLACE_PHOTO),
        sameAs: [YASUDA.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '大字安田1850番地' : '1850 Yasuda',
          addressLocality: isJa ? YASUDA.nameJa : YASUDA.nameEn,
          addressRegion: isJa ? YASUDA.prefectureJa : YASUDA.prefectureEn,
          postalCode: YASUDA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? YASUDA.prefectureJa : YASUDA.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? YASUDA.nameJa : YASUDA.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? YASUDA.prefectureJa : YASUDA.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? YASUDA.nameJa : YASUDA.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '安田町の案内' : 'Places in Yasuda Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function nahariGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/nahari');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('nahari');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? NAHARI.nameJa : NAHARI.nameEn,
        alternateName: isJa ? NAHARI.nameEn : NAHARI.nameJa,
        identifier: NAHARI.jis,
        url,
        image: photoAbs(NAHARI_PLACE_PHOTO),
        sameAs: [NAHARI.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '乙1659番地1' : '1659-1 Otsu',
          addressLocality: isJa ? NAHARI.nameJa : NAHARI.nameEn,
          addressRegion: isJa ? NAHARI.prefectureJa : NAHARI.prefectureEn,
          postalCode: NAHARI.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? NAHARI.prefectureJa : NAHARI.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? NAHARI.nameJa : NAHARI.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? NAHARI.prefectureJa : NAHARI.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? NAHARI.nameJa : NAHARI.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '奈半利町の案内' : 'Places in Nahari Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function kuroshioGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/kuroshio');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('kuroshio');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? KUROSHIO.nameJa : KUROSHIO.nameEn,
        alternateName: isJa ? KUROSHIO.nameEn : KUROSHIO.nameJa,
        identifier: KUROSHIO.jis,
        url,
        image: photoAbs(KUROSHIO_PLACE_PHOTO),
        sameAs: [KUROSHIO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '入野5893番地' : '5893 Irino',
          addressLocality: isJa ? KUROSHIO.nameJa : KUROSHIO.nameEn,
          addressRegion: isJa ? KUROSHIO.prefectureJa : KUROSHIO.prefectureEn,
          postalCode: KUROSHIO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? KUROSHIO.prefectureJa : KUROSHIO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? KUROSHIO.nameJa : KUROSHIO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? KUROSHIO.prefectureJa : KUROSHIO.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? KUROSHIO.nameJa : KUROSHIO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '黒潮町の案内' : 'Places in Kuroshio Town',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}

export function shimantoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/shimanto');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('shimanto');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? SHIMANTO.nameJa : SHIMANTO.nameEn,
        alternateName: isJa ? SHIMANTO.nameEn : SHIMANTO.nameJa,
        identifier: SHIMANTO.jis,
        url,
        image: photoAbs(SHIMANTO_PLACE_PHOTO),
        sameAs: [SHIMANTO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '中村大橋通四丁目10番地' : '4-10 Nakamura-ohashidori',
          addressLocality: isJa ? SHIMANTO.nameJa : SHIMANTO.nameEn,
          addressRegion: isJa ? SHIMANTO.prefectureJa : SHIMANTO.prefectureEn,
          postalCode: SHIMANTO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? SHIMANTO.prefectureJa : SHIMANTO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? SHIMANTO.nameJa : SHIMANTO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? SHIMANTO.prefectureJa : SHIMANTO.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? SHIMANTO.nameJa : SHIMANTO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '四万十市の案内' : 'Places in Shimanto City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}


export function murotoGraph(locale: AppLocale) {
  const url = canonicalUrl(locale, 'kochi/muroto');
  const origin = siteOrigin();
  const isJa = locale === 'ja';
  const featured = featuredListings('muroto');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdministrativeArea', 'TouristDestination'],
        '@id': `${url}#place`,
        name: isJa ? MUROTO.nameJa : MUROTO.nameEn,
        alternateName: isJa ? MUROTO.nameEn : MUROTO.nameJa,
        identifier: MUROTO.jis,
        url,
        image: photoAbs(MUROTO_PLACE_PHOTO),
        sameAs: [MUROTO.sameAs],
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa ? '浮津25番地1' : '25-1 Ukitsu',
          addressLocality: isJa ? MUROTO.nameJa : MUROTO.nameEn,
          addressRegion: isJa ? MUROTO.prefectureJa : MUROTO.prefectureEn,
          postalCode: MUROTO.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? MUROTO.prefectureJa : MUROTO.prefectureEn
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: isJa ? MUROTO.nameJa : MUROTO.nameEn,
        inLanguage: locale,
        isPartOf: {'@id': `${origin}/#website`}
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: isJa ? '全国' : 'Japan', item: canonicalUrl(locale)},
          {'@type': 'ListItem', position: 2, name: isJa ? MUROTO.prefectureJa : MUROTO.prefectureEn, item: canonicalUrl(locale, 'kochi')},
          {'@type': 'ListItem', position: 3, name: isJa ? MUROTO.nameJa : MUROTO.nameEn, item: url}
        ]
      },
      {
        '@type': 'ItemList',
        name: isJa ? '室戸市の案内' : 'Places in Muroto City',
        numberOfItems: featured.length,
        itemListElement: featured.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: listingNode(row, locale)
        }))
      }
    ]
  };
}
