import type {Metadata} from 'next';
import {MIMA_PLACE_PHOTO, SITE_URL, type MimaPlacePhoto} from '@/data/mima';
import type {AppLocale} from '@/i18n/routing';

export const SITE_NAME_JA = '日本全国市町村紹介';
export const SITE_NAME_EN = 'Japan Municipalities Guide';
export const BRAND_NAME_JA = '冒険日本';
export const BRAND_NAME_EN = 'BokenJapan';
export const ORG_NAME = '冒険日本';

export function siteOrigin(): string {
  return SITE_URL.replace(/\/+$/, '');
}

export function pagePath(locale: string, rest = ''): string {
  const suffix = rest ? `/${rest.replace(/^\/+|\/+$/g, '')}` : '';
  return `/${locale}${suffix}/`;
}

export function canonicalUrl(locale: string, rest = ''): string {
  return `${siteOrigin()}${pagePath(locale, rest)}`;
}

export function absoluteMediaUrl(src: string): string {
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const host = siteOrigin().replace(/\/explorejapan$/, '');
  return `${host}${src.startsWith('/') ? src : `/${src}`}`;
}

export function photoAbs(photo: MimaPlacePhoto): string {
  return absoluteMediaUrl(photo.src);
}

export function siteName(locale: AppLocale): string {
  return locale === 'en' ? SITE_NAME_EN : SITE_NAME_JA;
}

export function defaultHero(): MimaPlacePhoto {
  return MIMA_PLACE_PHOTO;
}

export type ShareOpts = {
  locale: AppLocale;
  rest?: string;
  title: string;
  description: string;
  image: MimaPlacePhoto;
  ogType?: 'website' | 'article';
  index?: boolean;
};

export function shareMetadata(opts: ShareOpts): Metadata {
  const loc = opts.locale;
  const rest = opts.rest ?? '';
  const canonical = canonicalUrl(loc, rest);
  const ja = canonicalUrl('ja', rest);
  const en = canonicalUrl('en', rest);
  const img = photoAbs(opts.image);
  const alt = loc === 'ja' ? opts.image.altJa : opts.image.altEn;
  const name = siteName(loc);
  const brand = loc === 'en' ? BRAND_NAME_EN : BRAND_NAME_JA;
  const index = opts.index !== false;
  return {
    title: opts.title,
    description: opts.description,
    robots: {index, follow: index},
    alternates: {
      canonical,
      languages: {
        ja,
        en,
        'x-default': ja
      }
    },
    openGraph: {
      type: opts.ogType ?? 'website',
      siteName: brand,
      locale: loc === 'en' ? 'en_US' : 'ja_JP',
      alternateLocale: loc === 'en' ? ['ja_JP'] : ['en_US'],
      title: opts.title,
      description: opts.description,
      url: canonical,
      images: [
        {
          url: img,
          alt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [img]
    }
  };
}

/** @deprecated use shareMetadata; kept for existing imports */
export function hreflangMetadata(
  locale: AppLocale,
  rest = '',
  index = true
): Pick<Metadata, 'alternates' | 'robots'> {
  const origin = siteOrigin();
  const ja = `${origin}${pagePath('ja', rest)}`;
  const en = `${origin}${pagePath('en', rest)}`;
  const self = locale === 'en' ? en : ja;
  return {
    robots: {index, follow: index},
    alternates: {
      canonical: self,
      languages: {
        ja,
        en,
        'x-default': ja
      }
    }
  };
}
