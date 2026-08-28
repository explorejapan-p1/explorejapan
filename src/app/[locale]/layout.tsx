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
      default: isJa ? '冒険日本' : 'BokenJapan',
      template: isJa ? '%s · 冒険日本' : '%s · BokenJapan'
    },
    description: isJa
      ? '徳島県美馬市から始める、日本の市町村案内。冒険日本 / BokenJapan。'
      : 'A Japan municipalities guide, starting with Mima City, Tokushima. BokenJapan / 冒険日本.',
    icons: {
      icon: [{url: '/favicon.ico'}, {url: '/favicon-32.png', sizes: '32x32', type: 'image/png'}],
      apple: [{url: '/apple-touch-icon.png', sizes: '180x180'}]
    },
    ...hreflangMetadata(locale === 'en' ? 'en' : 'ja'),
    robots: {
      index: true,
      follow: true
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
