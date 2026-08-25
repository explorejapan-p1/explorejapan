import {getTranslations, setRequestLocale} from 'next-intl/server';
import {JapanMap} from '@/components/JapanMap';
import {VideoSlot} from '@/components/VideoSlot';
import {routing, type AppLocale} from '@/i18n/routing';
import {hreflangMetadata} from '@/lib/seo';

type Props = {params: Promise<{locale: string}>};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const t = await getTranslations({locale: loc, namespace: 'home'});
  return {
    title: t('h1'),
    ...hreflangMetadata(loc)
  };
}

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <>
      <h1>{t('h1')}</h1>
      <p className="lede">{t('lede')}</p>
      <JapanMap locale={locale} />
      <VideoSlot locale={locale} />
    </>
  );
}
