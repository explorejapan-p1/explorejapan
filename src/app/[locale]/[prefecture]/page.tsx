import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {TokushimaMap} from '@/components/TokushimaMap';
import {PREFECTURES, PREFECTURE_BY_SLUG} from '@/data/prefectures';
import {Link} from '@/i18n/navigation';
import {routing, type AppLocale} from '@/i18n/routing';
import {hreflangMetadata} from '@/lib/seo';

type Props = {params: Promise<{locale: string; prefecture: string}>};

export function generateStaticParams() {
  return PREFECTURES.map((p) => ({prefecture: p.slug}));
}

export async function generateMetadata({params}: Props) {
  const {locale, prefecture} = await params;
  const pref = PREFECTURE_BY_SLUG.get(prefecture);
  if (!pref) return {};
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const name = loc === 'ja' ? pref.nameJa : pref.nameEn;
  return {
    title: name,
    ...hreflangMetadata(loc, pref.slug)
  };
}

export default async function PrefecturePage({params}: Props) {
  const {locale, prefecture} = await params;
  const pref = PREFECTURE_BY_SLUG.get(prefecture);
  if (!pref) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('pref');
  const isJa = locale === 'ja';
  const name = isJa ? pref.nameJa : pref.nameEn;

  return (
    <>
      <nav className="crumbs">
        <Link href="/">{isJa ? '全国' : 'Japan'}</Link>
        <span aria-hidden="true"> / </span>
        <span>{name}</span>
      </nav>
      <h1>{name}</h1>
      {pref.slug === 'tokushima' ? (
        <>
          <p className="lede">
            {isJa
              ? '徳島県の市町村。v0 で本文があるのは美馬市（JIS 36207）だけです。'
              : 'Tokushima municipalities. In v0 only Mima City (JIS 36207) has a full page.'}
          </p>
          <TokushimaMap locale={locale} />
        </>
      ) : (
        <div className="coming">
          <p>{t('rolling')}</p>
          <p>
            <Link href="/tokushima">{isJa ? '徳島県へ' : 'Go to Tokushima'}</Link>
            {' · '}
            <Link href="/">{t('back')}</Link>
          </p>
        </div>
      )}
    </>
  );
}
