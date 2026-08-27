import type {Metadata} from 'next';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {inter, notoSansJp} from '@/app/fonts';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {FirstPartyTrafficLog} from '@/components/FirstPartyTrafficLog';
import {SiteChrome} from '@/components/SiteChrome';
import {SITE_URL} from '@/data/mima';
import {routing} from '@/i18n/routing';
import {hreflangMetadata} from '@/lib/seo';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const isJa = locale === 'ja';
  return {
    metadataBase: new URL(SITE_URL.replace(/\/+$/, '') + '/'),
    title: {
      default: isJa ? '日本の農村ディレクトリ' : 'Rural Japan Directory',
      template: isJa ? '%s · 日本の農村ディレクトリ' : '%s · Rural Japan Directory'
    },
    description: isJa
      ? '未公開の農村ディレクトリ。第1号は徳島県美馬市。'
      : 'Unpublished rural Japan directory. First listing: Mima City, Tokushima.',
    ...hreflangMetadata(locale === 'en' ? 'en' : 'ja'),
    robots: {
      index: false,
      follow: false,
      nocache: true
    }
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${notoSansJp.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <FirstPartyTrafficLog />
          <SiteChrome locale={locale}>{children}</SiteChrome>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
