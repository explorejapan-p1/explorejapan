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
  if (slug === 'tokushima') return TOKUSHIMA_CITY.nameJa;
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
  if (slug === 'tokushima') return TOKUSHIMA_CITY.nameEn;
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
            name: isJa ? MIMA.prefectureJa : MIMA.prefectureEn,
            item: canonicalUrl(locale, 'tokushima')
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? localityJa(listing.slug) : localityEn(listing.slug),
            item: canonicalUrl(locale, `tokushima/${listing.slug}`)
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
