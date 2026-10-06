import {getTranslations, setRequestLocale} from 'next-intl/server';
import {JsonLd} from '@/components/JsonLd';
import {MIMA_PLACE_PHOTO, withBase} from '@/data/mima';
import {KURASHIKI_PLACE_PHOTO} from '@/data/kurashiki';
import {MATSUYAMA_PLACE_PHOTO} from '@/data/matsuyama';
import {NARUTO_PLACE_PHOTO} from '@/data/naruto';
import {TAKAMATSU_PLACE_PHOTO} from '@/data/takamatsu';
import {municipalitiesForPref} from '@/data/municipalities';
import {PREFECTURES} from '@/data/prefectures';
import {routing, type AppLocale} from '@/i18n/routing';
import {homeGraph} from '@/lib/jsonld';
import {BRAND_OG_PHOTO, shareMetadata} from '@/lib/seo';

type Props = {params: Promise<{locale: string}>};

type Photo = {
  src: string;
  altJa: string;
  altEn: string;
  license: string;
  commons: string;
};

type Muni = {slug: string; nameJa: string; nameEn: string; status: string};

const OKAYAMA_READY = new Set(['okayama', 'kurashiki', 'tsuyama', 'tamano']);
const KOCHI_HOLD = new Set(['sakawa', 'tano']);

const PREF_GROUPS: {id: string; nameJa: string; nameEn: string; list: readonly Muni[]}[] =
  PREFECTURES.filter((p) => municipalitiesForPref(p.slug).length > 0).map((p) => ({
    id: p.slug,
    nameJa: p.nameJa,
    nameEn: p.nameEn,
    list: municipalitiesForPref(p.slug)
  }));

function readyMunicipalities(pref: string, list: readonly Muni[]): Muni[] {
  return list.filter((m) => {
    if (m.status !== 'ready') return false;
    if (pref === 'kochi' && KOCHI_HOLD.has(m.slug)) return false;
    if (pref === 'okayama' && !OKAYAMA_READY.has(m.slug)) return false;
    return true;
  });
}

const FEATURE = {
  photo: KURASHIKI_PLACE_PHOTO as Photo,
  pref: 'okayama',
  slug: 'kurashiki',
  nameJa: '倉敷市',
  nameEn: 'Kurashiki',
  placeJa: '倉敷美観地区',
  placeEn: 'Kurashiki Bikan historical quarter'
};

const ROWS: {
  photo: Photo;
  pref: string;
  slug: string;
  titleJa: string;
  titleEn: string;
  bodyJa: string;
  bodyEn: string;
  linkJa: string;
  linkEn: string;
}[] = [
  {
    photo: MIMA_PLACE_PHOTO,
    pref: 'tokushima',
    slug: 'mima',
    titleJa: '脇町南町',
    titleEn: 'Wakimachi Minami-machi',
    bodyJa: 'うだつの町並み。美馬市のページにある写真です。',
    bodyEn: 'The udatsu townscape. This photograph is the one on the Mima page.',
    linkJa: '美馬市',
    linkEn: 'Mima'
  },
  {
    photo: TAKAMATSU_PLACE_PHOTO,
    pref: 'kagawa',
    slug: 'takamatsu',
    titleJa: '栗林公園',
    titleEn: 'Ritsurin Garden',
    bodyJa: '観月橋。高松市のページにある写真です。',
    bodyEn: 'Kangetsu Bridge. This photograph is the one on the Takamatsu page.',
    linkJa: '高松市',
    linkEn: 'Takamatsu'
  },
  {
    photo: MATSUYAMA_PLACE_PHOTO,
    pref: 'ehime',
    slug: 'matsuyama',
    titleJa: '松山城',
    titleEn: 'Matsuyama Castle',
    bodyJa: '本丸の桜。松山市のページにある写真です。',
    bodyEn: 'The main bailey in cherry blossom. This photograph is the one on the Matsuyama page.',
    linkJa: '松山市',
    linkEn: 'Matsuyama'
  },
  {
    photo: NARUTO_PLACE_PHOTO,
    pref: 'tokushima',
    slug: 'naruto',
    titleJa: '鳴門の渦潮',
    titleEn: 'Naruto whirlpools',
    bodyJa: '渦の道からの写真。鳴門市のページにあるものです。',
    bodyEn: 'From Uzunomichi. This photograph is the one on the Naruto page.',
    linkJa: '鳴門市',
    linkEn: 'Naruto'
  }
];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const t = await getTranslations({locale: loc, namespace: 'home'});
  return shareMetadata({
    locale: loc,
    title: t('h1'),
    description: t('explain'),
    image: BRAND_OG_PHOTO,
    index: true
  });
}

function muniHref(locale: string, pref: string, slug: string) {
  return withBase(`/${locale}/${pref}/${slug}/`);
}

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const isJa = locale === 'ja';
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const featureHref = muniHref(locale, FEATURE.pref, FEATURE.slug);

  return (
    <div className="door-page">
      <JsonLd data={homeGraph(loc)} />
      <header className="door-intro">
        <h1>{t('h1')}</h1>
        <p className="door-lede">{t('lede')}</p>
      </header>

      <section className="door-feature" aria-label={isJa ? FEATURE.placeJa : FEATURE.placeEn}>
        <div className="door-frame">
          <a className="door-frame-link" href={featureHref}>
            <img
              src={FEATURE.photo.src}
              alt={isJa ? FEATURE.photo.altJa : FEATURE.photo.altEn}
              width={1600}
              height={1067}
            />
            <span className="door-pill">
              <span>{isJa ? FEATURE.nameJa : FEATURE.nameEn}</span>
              <span className="door-pill-go">{t('open')}</span>
            </span>
          </a>
        </div>
        <p className="door-cite">
          <a href={FEATURE.photo.commons}>
            {isJa ? FEATURE.photo.altJa : FEATURE.photo.altEn}
            {' · '}
            {FEATURE.photo.license}
          </a>
        </p>
      </section>

      <p className="door-explain">{t('explain')}</p>

      <div className="door-rows">
        {ROWS.map((row, i) => {
          const href = muniHref(locale, row.pref, row.slug);
          const flip = i % 2 === 1;
          return (
            <article className={flip ? 'door-row is-flip' : 'door-row'} key={row.slug}>
              <a className="door-row-fig" href={href}>
                <img
                  src={row.photo.src}
                  alt={isJa ? row.photo.altJa : row.photo.altEn}
                  width={1200}
                  height={800}
                />
              </a>
              <div className="door-row-copy">
                <h2>{isJa ? row.titleJa : row.titleEn}</h2>
                <p>{isJa ? row.bodyJa : row.bodyEn}</p>
                <a className="door-more" href={href}>
                  {isJa ? row.linkJa : row.linkEn}
                </a>
                <p className="door-cite">
                  <a href={row.photo.commons}>
                    {isJa ? row.photo.altJa : row.photo.altEn}
                    {' · '}
                    {row.photo.license}
                  </a>
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <section className="door-directory" id="directory" aria-labelledby="directory-heading">
        <h2 id="directory-heading">{t('directory')}</h2>
        {PREF_GROUPS.map((group) => {
          const towns = readyMunicipalities(group.id, group.list);
          return (
            <div className="door-pref" id={group.id} key={group.id}>
              <h3>
                <a href={withBase(`/${locale}/${group.id}/`)}>{isJa ? group.nameJa : group.nameEn}</a>
              </h3>
              {towns.length ? (
                <ul className="door-links">
                  {towns.map((m) => (
                    <li key={m.slug}>
                      <a href={muniHref(locale, group.id, m.slug)}>{isJa ? m.nameJa : m.nameEn}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="door-pref-hold">
                  <a href={withBase(`/${locale}/${group.id}/`)}>
                    {isJa ? '市町村一覧（準備中）' : 'Municipality list (coming soon)'}
                  </a>
                </p>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
