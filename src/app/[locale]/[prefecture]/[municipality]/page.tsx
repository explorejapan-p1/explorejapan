import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {MimaFacilityLookup} from '@/components/MimaFacilityLookup';
import {
  EXPECTED_GEO_COUNT,
  EXPECTED_ROW_COUNT,
  LOOKUP_CATEGORIES,
  type FacilityCategory,
  type FacilityRow
} from '@/data/facility-schema';
import {MIMA, SITE_URL} from '@/data/mima';
import {MIMA_FACILITIES, facilityGapBoard, officialGeoRows, officialPackRows} from '@/data/mima-facilities';
import {PREFECTURE_BY_SLUG} from '@/data/prefectures';
import {
  MUNICIPALITY_BY_SLUG,
  TOKUSHIMA_MUNICIPALITIES
} from '@/data/tokushima-municipalities';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';
import {projectMimaOfficialMap} from '@/lib/geo';
import {hreflangMetadata, pagePath} from '@/lib/seo';

type Props = {
  params: Promise<{locale: string; prefecture: string; municipality: string}>;
  searchParams: Promise<{c?: string; q?: string; id?: string}>;
};

export function generateStaticParams() {
  return TOKUSHIMA_MUNICIPALITIES.map((m) => ({
    prefecture: 'tokushima',
    municipality: m.slug
  }));
}

export async function generateMetadata({params}: Props) {
  const {locale, prefecture, municipality} = await params;
  const muni = MUNICIPALITY_BY_SLUG.get(municipality);
  if (prefecture !== 'tokushima' || !muni) return {};
  const loc = (locale === 'en' ? 'en' : 'ja') as AppLocale;
  const title = loc === 'ja' ? muni.nameJa : `${muni.nameEn}${muni.slug === 'mima' ? ' City' : ''}`;
  return {
    title,
    ...hreflangMetadata(loc, `tokushima/${muni.slug}`)
  };
}

function packPlace(row: FacilityRow) {
  const item: {
    '@type': 'Place';
    name: string;
    url?: string;
    address?: string;
    geo?: {
      '@type': 'GeoCoordinates';
      latitude: number;
      longitude: number;
    };
  } = {
    '@type': 'Place',
    name: row.name_ja
  };
  if (row.official_url) {
    item.url = row.official_url;
  }
  if (row.address) {
    item.address = row.address;
  }
  if (row.lat !== null && row.lon !== null) {
    item.geo = {
      '@type': 'GeoCoordinates',
      latitude: row.lat,
      longitude: row.lon
    };
  }
  return item;
}

function JsonLd({locale}: {locale: string}) {
  const isJa = locale === 'ja';
  const url = `${SITE_URL}${pagePath(locale, 'tokushima/mima')}`;
  const packUrl = `${SITE_URL}/api/mima/facilities`;
  const officialRows = officialPackRows();
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Place', 'City'],
        name: isJa ? MIMA.nameJa : MIMA.nameEn,
        alternateName: isJa ? MIMA.nameEn : MIMA.nameJa,
        identifier: [MIMA.jis, MIMA.jlis],
        sameAs: MIMA.sameAs,
        url,
        hasMap: url,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 34.053,
          longitude: 134.044
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: isJa
            ? '穴吹町穴吹字九反地5番地'
            : '5 Kutanchi, Anabuki, Anabuki-cho',
          addressLocality: isJa ? MIMA.nameJa : MIMA.nameEn,
          addressRegion: isJa ? '徳島県' : 'Tokushima',
          postalCode: MIMA.hall.postalCode,
          addressCountry: 'JP'
        },
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: isJa ? '徳島県' : 'Tokushima Prefecture'
        }
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        inLanguage: locale,
        name: isJa ? MIMA.nameJa : MIMA.nameEn,
        isPartOf: {name: isJa ? '日本の農村ディレクトリ' : 'Rural Japan Directory'},
        relatedLink: packUrl
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isJa ? '全国' : 'Japan',
            item: `${SITE_URL}${pagePath(locale)}`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isJa ? '徳島県' : 'Tokushima',
            item: `${SITE_URL}${pagePath(locale, 'tokushima')}`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isJa ? MIMA.nameJa : MIMA.nameEn,
            item: url
          }
        ]
      },
      {
        '@type': 'ItemList',
        numberOfItems: EXPECTED_ROW_COUNT,
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'fullPack',
          url: packUrl
        },
        itemListElement: officialRows.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: packPlace(row)
        }))
      },
      {
        '@type': 'DataDownload',
        name: isJa ? '美馬市施設パック（全515件）' : 'Mima City facilities pack (all 515 rows)',
        contentUrl: packUrl,
        encodingFormat: 'application/json',
        description: isJa
          ? '公式座標がある61件のみHTMLに載せる。全件はAPIから取得。'
          : 'HTML inlines the 61 official-xy rows only. Full pack is this API.'
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
  );
}

export default async function MunicipalityPage({params, searchParams}: Props) {
  const {locale, prefecture, municipality} = await params;
  const resolvedSearch = await searchParams;
  if (prefecture !== 'tokushima') notFound();
  const muni = MUNICIPALITY_BY_SLUG.get(municipality);
  if (!muni) notFound();
  setRequestLocale(locale);
  const pref = PREFECTURE_BY_SLUG.get('tokushima')!;
  const isJa = locale === 'ja';

  if (muni.slug !== 'mima') {
    return (
      <>
        <nav className="crumbs">
          <Link href="/">{isJa ? '全国' : 'Japan'}</Link>
          <span> / </span>
          <Link href="/tokushima">{isJa ? pref.nameJa : pref.nameEn}</Link>
          <span> / </span>
          <span>{isJa ? muni.nameJa : muni.nameEn}</span>
        </nav>
        <h1>{isJa ? muni.nameJa : muni.nameEn}</h1>
        <div className="coming">
          <p>
            {isJa
              ? 'この市町村のページは準備中です。現在本文があるのは美馬市だけです。'
              : 'This municipality page is coming soon. Only Mima City has a full listing in v0.'}
          </p>
          <p>
            <Link href="/tokushima/mima">{isJa ? '美馬市へ' : 'Go to Mima City'}</Link>
          </p>
        </div>
      </>
    );
  }

  const p = MIMA.population;
  const gaps = facilityGapBoard();
  const officialXy = officialGeoRows();
  if (officialXy.length !== EXPECTED_GEO_COUNT) {
    throw new Error(`official xy ${officialXy.length} != ${EXPECTED_GEO_COUNT}`);
  }
  const officialMap = projectMimaOfficialMap(officialXy);
  const packRows = MIMA_FACILITIES;
  if (packRows.length !== EXPECTED_ROW_COUNT) {
    throw new Error(`pack rows ${packRows.length} != ${EXPECTED_ROW_COUNT}`);
  }

  const c = resolvedSearch.c;
  const q = (resolvedSearch.q ?? '').trim();
  const openId = resolvedSearch.id ?? null;
  const filter: 'all' | FacilityCategory = LOOKUP_CATEGORIES.includes(c as FacilityCategory)
    ? (c as FacilityCategory)
    : 'all';
  const engaged = (c !== undefined && c !== '') || q !== '';

  return (
    <>
      <JsonLd locale={locale} />
      <nav className="crumbs">
        <Link href="/">{isJa ? '全国' : 'Japan'}</Link>
        <span> / </span>
        <Link href="/tokushima">{isJa ? pref.nameJa : pref.nameEn}</Link>
        <span> / </span>
        <span>{isJa ? MIMA.nameJa : MIMA.nameEn}</span>
      </nav>
      <MimaFacilityLookup
        locale={locale}
        gaps={gaps}
        map={officialMap}
        rows={packRows}
        filter={filter}
        query={q}
        engaged={engaged}
        openId={openId}
      />

      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MIMA.nameJa} / {MIMA.nameEn}（{MIMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? MIMA.prefectureJa : MIMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MIMA.jis}</strong>
              {isJa
                ? '（阿波市 36206 ではない）'
                : ' (not Awa City 36206)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>
              {MIMA.jlis}{' '}
              <a href={MIMA.sources.jlis}>{isJa ? '徳島県内市町村コード' : 'Tokushima J-LIS table'}</a>
            </td>
          </tr>
          <tr>
            <th>{isJa ? '面積' : 'Area'}</th>
            <td>
              {MIMA.areaKm2} km²（{isJa ? '国土地理院 面積調 令和7年4月1日' : 'GSI area survey, 1 Apr 2025'}）{' '}
              <a href={MIMA.sources.gsiArea}>GSI</a>
            </td>
          </tr>
          <tr>
            <th>{isJa ? '合併' : 'Merger'}</th>
            <td>
              {isJa
                ? `${MIMA.merger.eraJa}、${MIMA.merger.formerJa}が新設合併`
                : `${MIMA.merger.date}, new city from ${MIMA.merger.formerEn}`}
            </td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{MIMA.hall.postalCode} {isJa ? MIMA.hall.addressJa : MIMA.hall.addressEn}
              <br />
              {MIMA.hall.phone} · <a href={MIMA.sameAs}>sameAs {MIMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>{isJa ? '人口（定義を混ぜない）' : 'Population (do not mix universes)'}</h2>
      <p className="note">
        {isJa
          ? '住民基本台帳・国勢調査・パンフレットは定義と時点が違います。世帯数も混ぜません。'
          : 'Register, census, and pamphlet figures use different definitions and dates. Household counts are not mixed.'}
      </p>
      <table className="facts">
        <thead>
          <tr>
            <th>{isJa ? 'スナップショット' : 'Snapshot'}</th>
            <th>{isJa ? '人口' : 'Population'}</th>
            <th>{isJa ? '世帯' : 'Households'}</th>
            <th>{isJa ? '時点' : 'As of'}</th>
            <th>{isJa ? '出典' : 'Source'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{isJa ? p.juki.labelJa : p.juki.labelEn}</td>
            <td>{p.juki.value.toLocaleString('ja-JP')}</td>
            <td>{p.juki.households.toLocaleString('ja-JP')}</td>
            <td>
              {p.juki.asOf}（{p.juki.asOfJa}）
            </td>
            <td>
              <a href={p.juki.url}>{isJa ? '市の人口・世帯数' : 'City register page'}</a>
            </td>
          </tr>
          <tr>
            <td>{isJa ? p.census2025.labelJa : p.census2025.labelEn}</td>
            <td>{p.census2025.value.toLocaleString('ja-JP')}</td>
            <td>{p.census2025.households.toLocaleString('ja-JP')}</td>
            <td>
              {p.census2025.asOf}（{p.census2025.asOfJa}）
            </td>
            <td>
              <a href={p.census2025.url}>e-Stat</a>
            </td>
          </tr>
          <tr>
            <td>{isJa ? p.pamphlet.labelJa : p.pamphlet.labelEn}</td>
            <td>{p.pamphlet.value.toLocaleString('ja-JP')}</td>
            <td>{isJa ? '未掲載' : 'Not in the open data'}</td>
            <td>
              {p.pamphlet.asOf}（{p.pamphlet.asOfJa}）
            </td>
            <td>
              <a href={p.pamphlet.url}>{isJa ? '移住ガイドブック PDF' : 'Guidebook PDF'}</a>
            </td>
          </tr>
          <tr>
            <td>{isJa ? p.census2020.labelJa : p.census2020.labelEn}</td>
            <td>{p.census2020.value.toLocaleString('ja-JP')}</td>
            <td>{isJa ? '未掲載' : 'Not in the open data'}</td>
            <td>
              {p.census2020.asOf}（{p.census2020.asOfJa}）
            </td>
            <td>
              <a href={p.census2020.url}>e-Stat</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="note">
        {isJa
          ? `世帯数は台帳 ${p.juki.households.toLocaleString('ja-JP')} と国勢調査速報 ${p.census2025.households.toLocaleString('ja-JP')} を別掲。数字のアクセス日は ${MIMA.sources.accessed}。`
          : `Households: register ${p.juki.households.toLocaleString('en-US')} vs census preliminary ${p.census2025.households.toLocaleString('en-US')}. Figures accessed ${MIMA.sources.accessed}.`}
      </p>

      <h2>{isJa ? '市役所' : 'City hall'}</h2>
      <p>
        <a href={MIMA.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MIMA.sources.overview}>{isJa ? '市の概要' : 'City overview'}</a>
        {' · '}
        <a href={MIMA.sources.shisei}>{isJa ? '市勢要覧 2025' : 'Statistical pamphlet 2025'}</a>
      </p>

    </>
  );
}
