import {MIMA, MIMA_PLACE_PHOTO} from '@/data/mima';
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

function postal(address: string | null, locale: AppLocale) {
  if (!address) return undefined;
  return {
    '@type': 'PostalAddress',
    streetAddress: address,
    addressLocality: locale === 'ja' ? MIMA.nameJa : MIMA.nameEn,
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

function compact(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null && value !== '') out[key] = value;
  }
  return out;
}

export function listingNode(listing: PublicListing, locale: AppLocale) {
  const url = canonicalUrl(locale, listingRest(listing.id));
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
    address: postal(listing.address, locale),
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
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['CollectionPage', 'AdministrativeArea'],
        '@id': `${url}#place`,
        name,
        url,
        containedInPlace: {
          '@type': 'Country',
          name: locale === 'ja' ? '日本' : 'Japan'
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
            name: locale === 'ja' ? '全国' : 'Japan',
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
    ]
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

export function placeGraph(listing: PublicListing, locale: AppLocale) {
  const url = canonicalUrl(locale, listingRest(listing.id));
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
            name: isJa ? MIMA.nameJa : MIMA.nameEn,
            item: canonicalUrl(locale, 'tokushima/mima')
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
