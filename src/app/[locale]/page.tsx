import {getTranslations, setRequestLocale} from 'next-intl/server';
import {JapanMap} from '@/components/JapanMap';
import {BASE_PATH, MIMA, MIMA_PLACE_PHOTO} from '@/data/mima';
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
  const isJa = locale === 'ja';
  const cityHref = `${BASE_PATH}/${locale}/${MIMA.prefectureSlug}/${MIMA.slug}/`;

  return (
    <div className="home-stage" data-home="">
      <h1 className="sr-only">{t('h1')}</h1>
      <div className="home-split">
        <a className="home-featured" href={cityHref}>
          <img
            src={MIMA_PLACE_PHOTO.src}
            alt={isJa ? MIMA_PLACE_PHOTO.altJa : MIMA_PLACE_PHOTO.altEn}
            width={1600}
            height={1067}
          />
          <span className="home-featured-copy">
            <span className="home-featured-kicker">
              {isJa ? MIMA.prefectureJa : MIMA.prefectureEn}
            </span>
            <span className="home-featured-name">{isJa ? MIMA.nameJa : MIMA.nameEn}</span>
            <span className="home-featured-cite">
              {isJa
                ? `出典 ${MIMA_PLACE_PHOTO.altJa} · ${MIMA_PLACE_PHOTO.author} · ${MIMA_PLACE_PHOTO.license}`
                : `Source ${MIMA_PLACE_PHOTO.altEn} · ${MIMA_PLACE_PHOTO.author} · ${MIMA_PLACE_PHOTO.license}`}
            </span>
          </span>
        </a>
        <JapanMap locale={locale} overlay={t('line')} />
      </div>
    </div>
  );
}
