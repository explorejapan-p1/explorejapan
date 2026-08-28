import {notFound} from 'next/navigation';
import {JsonLd} from '@/components/JsonLd';
import {MIMA} from '@/data/mima';
import {TSURUGI} from '@/data/tsurugi';
import {YOSHINOGAWA} from '@/data/yoshinogawa';
import {isReadySlug} from '@/data/town-lookup';
import {PREFECTURE_BY_SLUG} from '@/data/prefectures';
import {Link} from '@/i18n/navigation';
import {routing, type AppLocale} from '@/i18n/routing';
import {placeGraph} from '@/lib/jsonld';
import {liveListings, listingById, listingRest} from '@/lib/listings';
import {shareMetadata} from '@/lib/seo';

type Props = {
  params: Promise<{locale: string; prefecture: string; municipality: string; place: string}>;
};

export function generateStaticParams() {
  const places = liveListings();
  const out: {locale: string; prefecture: string; municipality: string; place: string}[] = [];
  for (const locale of routing.locales) {
    for (const row of places) {
      out.push({
        locale,
        prefecture: 'tokushima',
        municipality: row.slug,
        place: row.id
      });
    }
  }
  return out;
}

export async function generateMetadata({params}: Props) {
  const {locale, prefecture, municipality, place} = await params;
  if (prefecture !== 'tokushima' || !isReadySlug(municipality)) return {};
  const listing = listingById(place, municipality);
  if (!listing || !listing.photo) return {};
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const townJa =
    municipality === 'tsurugi'
      ? 'つるぎ町'
      : municipality === 'yoshinogawa'
        ? '吉野川市'
        : '美馬市';
  const townEn =
    municipality === 'tsurugi'
      ? 'Tsurugi Town'
      : municipality === 'yoshinogawa'
        ? 'Yoshinogawa City'
        : 'Mima City';
  const description =
    loc === 'ja'
      ? `${listing.nameJa}（${townJa}）。出典のある案内のみ。`
      : `${listing.nameJa} in ${townEn}. Sourced listing only.`;
  return shareMetadata({
    locale: loc,
    rest: listingRest(listing.id, listing.slug),
    title: listing.nameJa,
    description,
    image: listing.photo,
    ogType: 'article',
    index: true
  });
}

export default async function PlacePage({params}: Props) {
  const {locale, prefecture, municipality, place} = await params;
  if (prefecture !== 'tokushima' || !isReadySlug(municipality)) notFound();
  const listing = listingById(place, municipality);
  if (!listing || !listing.photo) notFound();
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const isJa = loc === 'ja';
  const pref = PREFECTURE_BY_SLUG.get('tokushima')!;
  const photo = listing.photo;
  const townNameJa =
    municipality === 'tsurugi'
      ? TSURUGI.nameJa
      : municipality === 'yoshinogawa'
        ? YOSHINOGAWA.nameJa
        : MIMA.nameJa;
  const townNameEn =
    municipality === 'tsurugi'
      ? TSURUGI.nameEn
      : municipality === 'yoshinogawa'
        ? YOSHINOGAWA.nameEn
        : MIMA.nameEn;
  return (
    <>
      <JsonLd data={placeGraph(listing, loc)} />
      <nav className="crumbs">
        <Link href="/">{isJa ? '全国' : 'Japan'}</Link>
        <span> / </span>
        <Link href="/tokushima">{isJa ? pref.nameJa : pref.nameEn}</Link>
        <span> / </span>
        <Link href={`/tokushima/${municipality}`}>{isJa ? townNameJa : townNameEn}</Link>
        <span> / </span>
        <span>{listing.nameJa}</span>
      </nav>
      <article className="place-page">
        <div className="card-photo">
          <img
            src={photo.src}
            alt={isJa ? photo.altJa : photo.altEn}
            width={1200}
            height={800}
          />
          <span className="card-photo-cite">
            {photo.author} / {photo.license}
          </span>
        </div>
        <h1>{listing.nameJa}</h1>
        <p className="card-score">{isJa ? '未評価' : 'Unrated'}</p>
        {listing.address ? (
          <p className="attr-row">
            <span className="attr-label">{isJa ? '住所' : 'Address'}</span>
            <span>{listing.address}</span>
          </p>
        ) : null}
        {listing.phone ? (
          <p className="attr-row">
            <span className="attr-label">{isJa ? '電話' : 'Phone'}</span>
            <span>{listing.phone}</span>
          </p>
        ) : null}
        {listing.hours ? (
          <p className="attr-row">
            <span className="attr-label">{isJa ? '時間' : 'Hours'}</span>
            <span>{listing.hours}</span>
          </p>
        ) : null}
        <p className="place-card-meta">
          <a href={listing.sourceUrl}>{isJa ? '出典' : 'Source'}</a>
          {' · '}
          {listing.accessed}
        </p>
      </article>
    </>
  );
}
