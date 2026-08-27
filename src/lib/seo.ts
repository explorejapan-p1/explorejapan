import type {Metadata} from 'next';
import {SITE_URL} from '@/data/mima';
import type {AppLocale} from '@/i18n/routing';

function siteOrigin(): string {
  return SITE_URL.replace(/\/+$/, '');
}

export function pagePath(locale: string, rest = ''): string {
  const suffix = rest ? `/${rest.replace(/^\/+|\/+$/g, '')}` : '';
  return `/${locale}${suffix}/`;
}

export function hreflangMetadata(locale: AppLocale, rest = ''): Pick<Metadata, 'alternates' | 'robots'> {
  const origin = siteOrigin();
  const ja = `${origin}${pagePath('ja', rest)}`;
  const en = `${origin}${pagePath('en', rest)}`;
  const self = locale === 'en' ? en : ja;
  return {
    robots: {index: true, follow: true},
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
