import type {Metadata} from 'next';
import {SITE_URL} from '@/data/mima';
import type {AppLocale} from '@/i18n/routing';

export function pagePath(locale: string, rest = ''): string {
  const suffix = rest ? `/${rest.replace(/^\/+/, '')}` : '';
  return `/${locale}${suffix}`;
}

export function hreflangMetadata(locale: AppLocale, rest = ''): Pick<Metadata, 'alternates' | 'robots'> {
  const ja = `${SITE_URL}${pagePath('ja', rest)}`;
  const en = `${SITE_URL}${pagePath('en', rest)}`;
  const self = locale === 'en' ? en : ja;
  return {
    robots: {index: false, follow: false, nocache: true},
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
