import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {TokushimaMap} from '@/components/TokushimaMap';
import {MIMA, MIMA_PLACE_PHOTO, BASE_PATH} from '@/data/mima';
import {TSURUGI_PLACE_PHOTO} from '@/data/tsurugi';
import {YOSHINOGAWA_PLACE_PHOTO} from '@/data/yoshinogawa';
import {PREFECTURES, PREFECTURE_BY_SLUG} from '@/data/prefectures';
import {TOKUSHIMA_MUNICIPALITIES} from '@/data/tokushima-municipalities';
import {Link} from '@/i18n/navigation';
import {type AppLocale} from '@/i18n/routing';
import {JsonLd} from '@/components/JsonLd';
import {prefectureGraph} from '@/lib/jsonld';
import {shareMetadata} from '@/lib/seo';

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
  const live = pref.slug === 'tokushima';
  return shareMetadata({
    locale: loc,
    rest: pref.slug,
    title: name,
    description: live
      ? loc === 'ja'
        ? '徳島県の市町村。美馬市とつるぎ町と吉野川市。'
        : 'Municipalities in Tokushima. Listings: Mima City, Tsurugi Town, and Yoshinogawa City.'
      : loc === 'ja'
        ? 'この県の市町村ページは準備中です。'
        : 'This prefecture layer is not wired yet.',
    image: MIMA_PLACE_PHOTO,
    index: live
  });
}

export default async function PrefecturePage({params}: Props) {
  const {locale, prefecture} = await params;
  const pref = PREFECTURE_BY_SLUG.get(prefecture);
  if (!pref) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('pref');
  const isJa = locale === 'ja';
  const name = isJa ? pref.nameJa : pref.nameEn;
  const mimaHref = `${BASE_PATH}/${locale}/${MIMA.prefectureSlug}/${MIMA.slug}/`;

  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  return (
    <div className="pref-stage">
      <JsonLd data={prefectureGraph(loc, pref.slug, name)} />
      <nav className="crumbs">
        <Link href="/">{isJa ? '全国' : 'Japan'}</Link>
        <span aria-hidden="true"> / </span>
        <span>{name}</span>
      </nav>
      <h1>{name}</h1>
      {pref.slug === 'tokushima' ? (
        <>
          <ul className="muni-cards">
            {TOKUSHIMA_MUNICIPALITIES.map((m) => {
              const live = m.status === 'ready';
              const photo =
                m.slug === 'tsurugi'
                  ? TSURUGI_PLACE_PHOTO
                  : m.slug === 'yoshinogawa'
                    ? YOSHINOGAWA_PLACE_PHOTO
                    : MIMA_PLACE_PHOTO;
              const href = `${BASE_PATH}/${locale}/tokushima/${m.slug}/`;
              return (
                <li key={m.slug} className={live ? 'muni-card is-live' : 'muni-card is-hold'}>
                  {live ? (
                    <a href={href}>
                      <img
                        src={photo.src}
                        alt={isJa ? photo.altJa : photo.altEn}
                        width={800}
                        height={533}
                      />
                      <span className="muni-card-name">{isJa ? m.nameJa : m.nameEn}</span>
                    </a>
                  ) : (
                    <Link href={`/tokushima/${m.slug}`}>
                      <span className="muni-card-name">{isJa ? m.nameJa : m.nameEn}</span>
                      <span className="muted">{isJa ? '準備中' : 'Coming soon'}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <TokushimaMap locale={locale} />
        </>
      ) : (
        <div className="coming coming-photo">
          <p>{t('rolling')}</p>
          <p>
            <a className="home-featured-mini" href={mimaHref}>
              <img
                src={MIMA_PLACE_PHOTO.src}
                alt={isJa ? MIMA_PLACE_PHOTO.altJa : MIMA_PLACE_PHOTO.altEn}
                width={640}
                height={426}
              />
              <span>{isJa ? '美馬市を見る' : 'See Mima'}</span>
            </a>
          </p>
          <p>
            <Link href="/tokushima">{isJa ? '徳島県へ' : 'Go to Tokushima'}</Link>
            {' · '}
            <Link href="/">{t('back')}</Link>
          </p>
        </div>
      )}
    </div>
  );
}
