import {notFound} from 'next/navigation';
import {JsonLd} from '@/components/JsonLd';
import {MIMA} from '@/data/mima';
import {prefSlugForReady} from '@/data/lookup-town';
import {isReadySlug, lookupTown} from '@/data/town-lookup';
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
        prefecture: prefSlugForReady(row.slug),
        municipality: row.slug,
        place: row.id
      });
    }
  }
  return out;
}

export async function generateMetadata({params}: Props) {
  const {locale, prefecture, municipality, place} = await params;
  if (!isReadySlug(municipality) || prefecture !== prefSlugForReady(municipality)) return {};
  const listing = listingById(place, municipality);
  if (!listing || !listing.photo) return {};
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const town = lookupTown(municipality);
  const townJa = town?.nameJa ?? '美馬市';
  const townEn = town?.nameEn ?? 'Mima City';
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
  if (!isReadySlug(municipality) || prefecture !== prefSlugForReady(municipality)) notFound();
  const listing = listingById(place, municipality);
  if (!listing || !listing.photo) notFound();
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const isJa = loc === 'ja';
  const pref = PREFECTURE_BY_SLUG.get(prefecture)!;
  const photo = listing.photo;
  const townMeta = lookupTown(municipality);
  const townNameJa = townMeta?.nameJa ?? MIMA.nameJa;
  const townNameEn = townMeta?.nameEn ?? MIMA.nameEn;
  const dest =
    listing.officialUrl && listing.officialUrl.trim() !== ''
      ? listing.officialUrl
      : listing.sourceUrl;
  return (
    <>
      <JsonLd data={placeGraph(listing, loc)} />
      <nav className="crumbs">
        <Link href="/">{isJa ? '全国' : 'Japan'}</Link>
        <span> / </span>
        <Link href={`/${prefecture}`}>{isJa ? pref.nameJa : pref.nameEn}</Link>
        <span> / </span>
        <Link href={`/${prefecture}/${municipality}`}>{isJa ? townNameJa : townNameEn}</Link>
        <span> / </span>
        <span>{listing.nameJa}</span>
      </nav>
      <article className="place-page">
        <a
          href={dest}
          className="facility-card-link place-photo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-photo">
            <img
              src={photo.src}
              alt={isJa ? photo.altJa : photo.altEn}
              width={1200}
              height={800}
            />
          </div>
          <h1>{listing.nameJa}</h1>
        </a>
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
        <p className="place-card-meta">{listing.accessed}</p>
      </article>
    </>
  );
}
