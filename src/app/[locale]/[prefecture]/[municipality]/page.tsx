import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {MimaFacilityLookup} from '@/components/MimaFacilityLookup';
import {MIMA, MIMA_PLACE_PHOTO} from '@/data/mima';
import {facilityGapBoard, officialGeoRows} from '@/data/mima-facilities';
import {townHelpers} from '@/data/lookup-helpers';
import {lookupTown} from '@/data/town-lookup';
import {TSURUGI, TSURUGI_PLACE_PHOTO} from '@/data/tsurugi';
import {YOSHINOGAWA, YOSHINOGAWA_PLACE_PHOTO} from '@/data/yoshinogawa';
import {MIYOSHI, MIYOSHI_PLACE_PHOTO} from '@/data/miyoshi';
import {AWA, AWA_PLACE_PHOTO} from '@/data/awa';
import {HIGASHIMIYOSHI, HIGASHIMIYOSHI_PLACE_PHOTO} from '@/data/higashimiyoshi';
import {KITAJIMA, KITAJIMA_PLACE_PHOTO} from '@/data/kitajima';
import {MATSUSHIGE, MATSUSHIGE_PLACE_PHOTO} from '@/data/matsushige';
import {ISHII, ISHII_PLACE_PHOTO} from '@/data/ishii';
import {ITANO, ITANO_PLACE_PHOTO} from '@/data/itano';
import {KAMIITA, KAMIITA_PLACE_PHOTO} from '@/data/kamiita';
import {KAMIYAMA, KAMIYAMA_PLACE_PHOTO} from '@/data/kamiyama';
import {NARUTO, NARUTO_PLACE_PHOTO} from '@/data/naruto';
import {TOKUSHIMA_CITY, TOKUSHIMA_CITY_PLACE_PHOTO} from '@/data/tokushima-city';
import {PREFECTURE_BY_SLUG} from '@/data/prefectures';
import {
  MUNICIPALITY_BY_SLUG,
  TOKUSHIMA_MUNICIPALITIES
} from '@/data/tokushima-municipalities';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';
import {projectMimaOfficialMap} from '@/lib/geo';
import {JsonLd} from '@/components/JsonLd';
import {mimaGraph, tsurugiGraph, yoshinogawaGraph, miyoshiGraph, tokushimaCityGraph, awaGraph, higashimiyoshiGraph, kitajimaGraph, narutoGraph, matsushigeGraph, ishiiGraph, itanoGraph, kamiitaGraph, kamiyamaGraph} from '@/lib/jsonld';
import {shareMetadata} from '@/lib/seo';

type Props = {
  params: Promise<{locale: string; prefecture: string; municipality: string}>;
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
  const live = muni.status === 'ready';
  const enTitle =
    /\b(City|Town|Village)$/.test(muni.nameEn)
      ? muni.nameEn
      : muni.nameJa.endsWith('市')
        ? `${muni.nameEn} City`
        : muni.nameJa.endsWith('町')
          ? `${muni.nameEn} Town`
          : muni.nameJa.endsWith('村')
            ? `${muni.nameEn} Village`
            : muni.nameEn;
  const title = loc === 'ja' ? muni.nameJa : live ? enTitle : muni.nameEn;
  const image =
    muni.slug === 'tsurugi'
      ? TSURUGI_PLACE_PHOTO
      : muni.slug === 'yoshinogawa'
        ? YOSHINOGAWA_PLACE_PHOTO
        : muni.slug === 'miyoshi'
          ? MIYOSHI_PLACE_PHOTO
          : muni.slug === 'tokushima'
            ? TOKUSHIMA_CITY_PLACE_PHOTO
            : muni.slug === 'awa'
              ? AWA_PLACE_PHOTO
              : muni.slug === 'higashimiyoshi'
                ? HIGASHIMIYOSHI_PLACE_PHOTO
                : muni.slug === 'kitajima'
                  ? KITAJIMA_PLACE_PHOTO
                  : muni.slug === 'naruto'
                    ? NARUTO_PLACE_PHOTO
                    : muni.slug === 'matsushige'
                      ? MATSUSHIGE_PLACE_PHOTO
                      : muni.slug === 'ishii'
                        ? ISHII_PLACE_PHOTO
                        : muni.slug === 'itano'
                          ? ITANO_PLACE_PHOTO
                          : muni.slug === 'kamiita'
                            ? KAMIITA_PLACE_PHOTO
                            : muni.slug === 'kamiyama'
                              ? KAMIYAMA_PLACE_PHOTO
                            : MIMA_PLACE_PHOTO;
  const description = live
    ? muni.slug === 'tsurugi'
      ? loc === 'ja'
        ? 'つるぎ町。二層うだつの町並み、剣山、宿。'
        : 'Tsurugi Town, Tokushima — two-storey udatsu townscape, Mount Tsurugi, stays.'
      : muni.slug === 'yoshinogawa'
        ? loc === 'ja'
          ? '吉野川市。川島城、藤井寺、鴨島の宿。'
          : 'Yoshinogawa City, Tokushima — Kawashima Castle, Fujii-dera, Kamojima stays.'
        : muni.slug === 'miyoshi'
          ? loc === 'ja'
            ? '三好市。大歩危・小歩危、祖谷、宿。'
            : 'Miyoshi City, Tokushima — Oboke and Koboke, Iya Valley, stays.'
          : muni.slug === 'tokushima'
            ? loc === 'ja'
              ? '徳島市。眉山、徳島城跡、しんまち、食。'
              : 'Tokushima City — Mount Bizan, Tokushima Castle ruins, Shinmachi, food.'
            : muni.slug === 'awa'
              ? loc === 'ja'
                ? '阿波市。阿波の土柱、切幡寺、食。'
                : 'Awa City, Tokushima — Awa-no-Dochū, Kirihata-ji, food.'
              : muni.slug === 'higashimiyoshi'
                ? loc === 'ja'
                  ? '東みよし町。加茂の大クス、美濃田の淵、食。'
                  : 'Higashimiyoshi Town, Tokushima — Kamo-no-Ōkusu, Minoda-no-fuchi, food.'
                : muni.slug === 'kitajima'
                  ? loc === 'ja'
                    ? '北島町。北島チューリップ公園、食。'
                    : 'Kitajima Town, Tokushima — Kitajima Tulip Park, food.'
                  : muni.slug === 'naruto'
                    ? loc === 'ja'
                      ? '鳴門市。渦潮、渦の道。'
                      : 'Naruto City, Tokushima — whirlpools and Uzunomichi.'
                    : muni.slug === 'matsushige'
                      ? loc === 'ja'
                        ? '松茂町。月見ヶ丘海水浴場、徳島空港。'
                        : 'Matsushige Town, Tokushima — Tsukimigaoka beach, Tokushima Airport.'
                      : muni.slug === 'ishii'
                        ? loc === 'ja'
                          ? '石井町。吉野川第十堰、食。'
                          : 'Ishii Town, Tokushima — Yoshino River Daiju Weir, food.'
                        : muni.slug === 'itano'
                          ? loc === 'ja'
                            ? '板野町。あすたむらんど徳島、金泉寺・大日寺・地蔵寺、食。'
                            : 'Itano Town, Tokushima — Asutamu Land, Shikoku temples 3–5, food.'
                          : muni.slug === 'kamiita'
                            ? loc === 'ja'
                              ? '上板町。安楽寺・大山寺、技の館、食。'
                              : 'Kamiita Town, Tokushima — Anraku-ji, Taisan-ji, Waza-no-yakata, food.'
                            : muni.slug === 'kamiyama'
                              ? loc === 'ja'
                                ? '神山町。焼山寺、雨乞の滝、食。'
                                : 'Kamiyama Town, Tokushima — Shōsan-ji, Amagoi Falls, food.'
          : loc === 'ja'
            ? '四国のまほろば 美馬市。うだつの町並み、食、宿。'
            : 'Mima City, Tokushima — Udatsu townscape, food, and stays.'
    : loc === 'ja'
      ? 'この市町村のページは準備中です。'
      : 'This municipality page is coming soon.';
  return shareMetadata({
    locale: loc,
    rest: `tokushima/${muni.slug}`,
    title,
    description,
    image,
    index: live
  });
}

export default async function MunicipalityPage({params}: Props) {
  const {locale, prefecture, municipality} = await params;
  if (prefecture !== 'tokushima') notFound();
  const muni = MUNICIPALITY_BY_SLUG.get(municipality);
  if (!muni) notFound();
  setRequestLocale(locale);
  const pref = PREFECTURE_BY_SLUG.get('tokushima')!;
  const isJa = locale === 'ja';

  if (muni.status !== 'ready') {
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
              ? 'この市町村のページは準備中です。現在本文があるのは徳島市・鳴門市・美馬市・つるぎ町・吉野川市・三好市・阿波市・東みよし町・北島町・松茂町・石井町・板野町・上板町・神山町です。'
              : 'This municipality page is coming soon. Tokushima City, Naruto City, Mima City, Tsurugi Town, Yoshinogawa City, Miyoshi City, Awa City, Higashimiyoshi Town, Kitajima Town, Matsushige Town, Ishii Town, Itano Town, Kamiita Town, and Kamiyama Town have full listings in v0.'}
          </p>
          <p>
            <Link href="/tokushima/tokushima">{isJa ? '徳島市へ' : 'Go to Tokushima City'}</Link>
            {' · '}
            <Link href="/tokushima/mima">{isJa ? '美馬市へ' : 'Go to Mima City'}</Link>
            {' · '}
            <Link href="/tokushima/tsurugi">{isJa ? 'つるぎ町へ' : 'Go to Tsurugi Town'}</Link>
            {' · '}
            <Link href="/tokushima/yoshinogawa">{isJa ? '吉野川市へ' : 'Go to Yoshinogawa City'}</Link>
            {' · '}
            <Link href="/tokushima/miyoshi">{isJa ? '三好市へ' : 'Go to Miyoshi City'}</Link>
            {' · '}
            <Link href="/tokushima/awa">{isJa ? '阿波市へ' : 'Go to Awa City'}</Link>
            {' · '}
            <Link href="/tokushima/higashimiyoshi">{isJa ? '東みよし町へ' : 'Go to Higashimiyoshi Town'}</Link>
            {' · '}
            <Link href="/tokushima/kitajima">{isJa ? '北島町へ' : 'Go to Kitajima Town'}</Link>
            {' · '}
            <Link href="/tokushima/naruto">{isJa ? '鳴門市へ' : 'Go to Naruto City'}</Link>
            {' · '}
            <Link href="/tokushima/matsushige">{isJa ? '松茂町へ' : 'Go to Matsushige Town'}</Link>
            {' · '}
            <Link href="/tokushima/ishii">{isJa ? '石井町へ' : 'Go to Ishii Town'}</Link>
            {' · '}
            <Link href="/tokushima/itano">{isJa ? '板野町へ' : 'Go to Itano Town'}</Link>
            {' · '}
            <Link href="/tokushima/kamiita">{isJa ? '上板町へ' : 'Go to Kamiita Town'}</Link>
            {' · '}
            <Link href="/tokushima/kamiyama">{isJa ? '神山町へ' : 'Go to Kamiyama Town'}</Link>
          </p>
        </div>
      </>
    );
  }

  const town = lookupTown(muni.slug);
  if (!town) notFound();
  const p = MIMA.population;
  const packRows = town.rows;
  const gaps = facilityGapBoard(packRows);
  const officialXy = officialGeoRows(packRows);
  if (officialXy.length !== town.expectedGeo) {
    throw new Error(`official xy ${officialXy.length} != ${town.expectedGeo}`);
  }
  if (packRows.length !== town.expectedRows) {
    throw new Error(`pack rows ${packRows.length} != ${town.expectedRows}`);
  }
  const officialMap = projectMimaOfficialMap(officialXy, town.jis);

  // Static export cannot SSR query strings. First HTML paint = 宿泊.
  // MimaFacilityLookup reads c/q/id from window.location.search after mount.
  const filter = townHelpers(town.slug).resolveFilter(undefined, '');
  const engaged = true;
  const tMuni = await getTranslations('muni');
  const graphLocale = (locale === 'en' ? 'en' : 'ja') as AppLocale;

  return (
    <>
      <JsonLd data={town.slug === 'tokushima' ? tokushimaCityGraph(graphLocale) : town.slug === 'tsurugi' ? tsurugiGraph(graphLocale) : town.slug === 'yoshinogawa' ? yoshinogawaGraph(graphLocale) : town.slug === 'miyoshi' ? miyoshiGraph(graphLocale) : town.slug === 'awa' ? awaGraph(graphLocale) : town.slug === 'higashimiyoshi' ? higashimiyoshiGraph(graphLocale) : town.slug === 'kitajima' ? kitajimaGraph(graphLocale) : town.slug === 'naruto' ? narutoGraph(graphLocale) : town.slug === 'matsushige' ? matsushigeGraph(graphLocale) : town.slug === 'ishii' ? ishiiGraph(graphLocale) : town.slug === 'itano' ? itanoGraph(graphLocale) : town.slug === 'kamiita' ? kamiitaGraph(graphLocale) : town.slug === 'kamiyama' ? kamiyamaGraph(graphLocale) : mimaGraph(graphLocale)} />
      <nav className="crumbs">
        <Link href="/">{isJa ? '全国' : 'Japan'}</Link>
        <span> / </span>
        <Link href="/tokushima">{isJa ? pref.nameJa : pref.nameEn}</Link>
        <span> / </span>
        <span>{isJa ? town.nameJa : town.nameEn}</span>
      </nav>
      <MimaFacilityLookup
        locale={locale}
        town={town}
        gaps={gaps}
        map={officialMap}
        rows={packRows}
        filter={filter}
        query=""
        engaged={engaged}
        openId={null}
      />

      {town.slug === 'tokushima' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {TOKUSHIMA_CITY.nameJa} / {TOKUSHIMA_CITY.nameEn}（{TOKUSHIMA_CITY.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? TOKUSHIMA_CITY.prefectureJa : TOKUSHIMA_CITY.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{TOKUSHIMA_CITY.jis}</strong>
              {isJa ? '（鳴門市 36202 ではない）' : ' (not Naruto City 36202)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{TOKUSHIMA_CITY.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{TOKUSHIMA_CITY.hall.postalCode} {isJa ? TOKUSHIMA_CITY.hall.addressJa : TOKUSHIMA_CITY.hall.addressEn}
              <br />
              {TOKUSHIMA_CITY.hall.phone} · <a href={TOKUSHIMA_CITY.sameAs}>sameAs {TOKUSHIMA_CITY.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={TOKUSHIMA_CITY.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={TOKUSHIMA_CITY.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={TOKUSHIMA_CITY.sources.kanko}>{isJa ? '観光案内' : 'Tourism guide'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${TOKUSHIMA_CITY.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${TOKUSHIMA_CITY.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'awa' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {AWA.nameJa} / {AWA.nameEn}（{AWA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? AWA.prefectureJa : AWA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{AWA.jis}</strong>
              {isJa ? '（三好市 36208・東みよし町 36489 ではない）' : ' (not Miyoshi 36208 / Higashimiyoshi 36489)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{AWA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{AWA.hall.postalCode} {isJa ? AWA.hall.addressJa : AWA.hall.addressEn}
              <br />
              {AWA.hall.phone} · <a href={AWA.sameAs}>sameAs {AWA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={AWA.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={AWA.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={AWA.sources.kanko}>{isJa ? '観光案内' : 'Tourism guide'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${AWA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${AWA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'miyoshi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MIYOSHI.nameJa} / {MIYOSHI.nameEn}（{MIYOSHI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? MIYOSHI.prefectureJa : MIYOSHI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MIYOSHI.jis}</strong>
              {isJa ? '（東みよし町 36489 ではない）' : ' (not Higashimiyoshi Town 36489)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MIYOSHI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{MIYOSHI.hall.postalCode} {isJa ? MIYOSHI.hall.addressJa : MIYOSHI.hall.addressEn}
              <br />
              {MIYOSHI.hall.phone} · <a href={MIYOSHI.sameAs}>sameAs {MIYOSHI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={MIYOSHI.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MIYOSHI.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
        {' · '}
        <a href={MIYOSHI.sources.kanko}>{isJa ? '観光案内' : 'Tourism guide'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MIYOSHI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${MIYOSHI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>
      ) : town.slug === 'yoshinogawa' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {YOSHINOGAWA.nameJa} / {YOSHINOGAWA.nameEn}（{YOSHINOGAWA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? YOSHINOGAWA.prefectureJa : YOSHINOGAWA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{YOSHINOGAWA.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{YOSHINOGAWA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{YOSHINOGAWA.hall.postalCode} {isJa ? YOSHINOGAWA.hall.addressJa : YOSHINOGAWA.hall.addressEn}
              <br />
              {YOSHINOGAWA.hall.phone} · <a href={YOSHINOGAWA.sameAs}>sameAs {YOSHINOGAWA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={YOSHINOGAWA.sources.hall}>{isJa ? '連絡先一覧' : 'Contact list'}</a>
        {' · '}
        <a href={YOSHINOGAWA.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${YOSHINOGAWA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${YOSHINOGAWA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>
      
      ) : town.slug === 'higashimiyoshi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {HIGASHIMIYOSHI.nameJa} / {HIGASHIMIYOSHI.nameEn}（{HIGASHIMIYOSHI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? HIGASHIMIYOSHI.prefectureJa : HIGASHIMIYOSHI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{HIGASHIMIYOSHI.jis}</strong>
              {isJa ? '（三好市 36208 ではない）' : ' (not Miyoshi City 36208)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{HIGASHIMIYOSHI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{HIGASHIMIYOSHI.hall.postalCode} {isJa ? HIGASHIMIYOSHI.hall.addressJa : HIGASHIMIYOSHI.hall.addressEn}
              <br />
              {HIGASHIMIYOSHI.hall.phone} · <a href={HIGASHIMIYOSHI.sameAs}>sameAs {HIGASHIMIYOSHI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={HIGASHIMIYOSHI.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={HIGASHIMIYOSHI.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${HIGASHIMIYOSHI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${HIGASHIMIYOSHI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>



      ) : town.slug === 'naruto' ? (
      <details className="facts-fold">
        <summary>{isJa ? '市の資料' : 'City facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {NARUTO.nameJa} / {NARUTO.nameEn}（{NARUTO.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? NARUTO.prefectureJa : NARUTO.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{NARUTO.jis}</strong>
              {isJa ? '（徳島市 36201・北島 36402・松茂 36401 ではない）' : ' (not Tokushima 36201 / Kitajima 36402 / Matsushige 36401)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{NARUTO.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '市役所' : 'City hall'}</th>
            <td>
              〒{NARUTO.hall.postalCode} {isJa ? NARUTO.hall.addressJa : NARUTO.hall.addressEn}
              <br />
              {NARUTO.hall.phone} · <a href={NARUTO.sameAs}>sameAs {NARUTO.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={NARUTO.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={NARUTO.sources.home}>{isJa ? '市ホームページ' : 'City homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${NARUTO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${NARUTO.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      
      ) : town.slug === 'ishii' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {ISHII.nameJa} / {ISHII.nameEn}（{ISHII.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? ISHII.prefectureJa : ISHII.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{ISHII.jis}</strong>
              {isJa ? '（松茂 36401・北島 36402・藍住 36403 ではない）' : ' (not Matsushige 36401 / Kitajima 36402 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{ISHII.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{ISHII.hall.postalCode} {isJa ? ISHII.hall.addressJa : ISHII.hall.addressEn}
              <br />
              {ISHII.hall.phone} · <a href={ISHII.sameAs}>sameAs {ISHII.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={ISHII.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={ISHII.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${ISHII.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${ISHII.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>


) : town.slug === 'itano' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {ITANO.nameJa} / {ITANO.nameEn}（{ITANO.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? ITANO.prefectureJa : ITANO.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{ITANO.jis}</strong>
              {isJa ? '（松茂 36401・北島 36402・藍住 36403・石井 36341 ではない）' : ' (not Matsushige 36401 / Kitajima 36402 / Aizumi 36403 / Ishii 36341)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{ITANO.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{ITANO.hall.postalCode} {isJa ? ITANO.hall.addressJa : ITANO.hall.addressEn}
              <br />
              {ITANO.hall.phone} · <a href={ITANO.sameAs}>sameAs {ITANO.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={ITANO.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={ITANO.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${ITANO.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${ITANO.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>


) : town.slug === 'kamiita' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KAMIITA.nameJa} / {KAMIITA.nameEn}（{KAMIITA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KAMIITA.prefectureJa : KAMIITA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KAMIITA.jis}</strong>
              {isJa ? '（松茂 36401・北島 36402・藍住 36403・板野 36404・石井 36341 ではない）' : ' (not Matsushige 36401 / Kitajima 36402 / Aizumi 36403 / Itano 36404 / Ishii 36341)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KAMIITA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KAMIITA.hall.postalCode} {isJa ? KAMIITA.hall.addressJa : KAMIITA.hall.addressEn}
              <br />
              {KAMIITA.hall.phone} · <a href={KAMIITA.sameAs}>sameAs {KAMIITA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KAMIITA.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={KAMIITA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KAMIITA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KAMIITA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>



) : town.slug === 'kamiyama' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KAMIYAMA.nameJa} / {KAMIYAMA.nameEn}（{KAMIYAMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KAMIYAMA.prefectureJa : KAMIYAMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KAMIYAMA.jis}</strong>
              {isJa ? '（石井 36341・上板 36405・板野 36404・藍住 36403 ではない）' : ' (not Ishii 36341 / Kamiita 36405 / Itano 36404 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KAMIYAMA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KAMIYAMA.hall.postalCode} {isJa ? KAMIYAMA.hall.addressJa : KAMIYAMA.hall.addressEn}
              <br />
              {KAMIYAMA.hall.phone} · <a href={KAMIYAMA.sameAs}>sameAs {KAMIYAMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KAMIYAMA.sources.hall}>{isJa ? 'お問い合わせ' : 'Contact'}</a>
        {' · '}
        <a href={KAMIYAMA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KAMIYAMA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KAMIYAMA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

) : town.slug === 'matsushige' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {MATSUSHIGE.nameJa} / {MATSUSHIGE.nameEn}（{MATSUSHIGE.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? MATSUSHIGE.prefectureJa : MATSUSHIGE.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{MATSUSHIGE.jis}</strong>
              {isJa ? '（北島 36402・藍住 36403 ではない）' : ' (not Kitajima 36402 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{MATSUSHIGE.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{MATSUSHIGE.hall.postalCode} {isJa ? MATSUSHIGE.hall.addressJa : MATSUSHIGE.hall.addressEn}
              <br />
              {MATSUSHIGE.hall.phone} · <a href={MATSUSHIGE.sameAs}>sameAs {MATSUSHIGE.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={MATSUSHIGE.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={MATSUSHIGE.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${MATSUSHIGE.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${MATSUSHIGE.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'kitajima' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {KITAJIMA.nameJa} / {KITAJIMA.nameEn}（{KITAJIMA.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? KITAJIMA.prefectureJa : KITAJIMA.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{KITAJIMA.jis}</strong>
              {isJa ? '（松茂 36401・藍住 36403 ではない）' : ' (not Matsushige 36401 / Aizumi 36403)'}
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{KITAJIMA.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{KITAJIMA.hall.postalCode} {isJa ? KITAJIMA.hall.addressJa : KITAJIMA.hall.addressEn}
              <br />
              {KITAJIMA.hall.phone} · <a href={KITAJIMA.sameAs}>sameAs {KITAJIMA.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={KITAJIMA.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={KITAJIMA.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${KITAJIMA.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${KITAJIMA.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>

      ) : town.slug === 'tsurugi' ? (
      <details className="facts-fold">
        <summary>{isJa ? '町の資料' : 'Town facts'}</summary>
      <table className="facts">
        <tbody>
          <tr>
            <th>{isJa ? '公式名' : 'Official name'}</th>
            <td>
              {TSURUGI.nameJa} / {TSURUGI.nameEn}（{TSURUGI.reading}）
            </td>
          </tr>
          <tr>
            <th>{isJa ? '都道府県' : 'Prefecture'}</th>
            <td>
              <Link href="/tokushima">{isJa ? TSURUGI.prefectureJa : TSURUGI.prefectureEn}</Link>
            </td>
          </tr>
          <tr>
            <th>JIS / N03_007</th>
            <td>
              <strong>{TSURUGI.jis}</strong>
            </td>
          </tr>
          <tr>
            <th>J-LIS</th>
            <td>{TSURUGI.jlis}</td>
          </tr>
          <tr>
            <th>{isJa ? '町役場' : 'Town hall'}</th>
            <td>
              〒{TSURUGI.hall.postalCode} {isJa ? TSURUGI.hall.addressJa : TSURUGI.hall.addressEn}
              <br />
              {TSURUGI.hall.phone} · <a href={TSURUGI.sameAs}>sameAs {TSURUGI.sameAs}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={TSURUGI.sources.hall}>{isJa ? '庁舎案内' : 'Hall guide'}</a>
        {' · '}
        <a href={TSURUGI.sources.home}>{isJa ? '町ホームページ' : 'Town homepage'}</a>
      </p>
      <p className="note">
        {isJa
          ? `数字のアクセス日は ${TSURUGI.sources.accessed}。人口は未掲載（出典ページを混ぜません）。`
          : `Figures accessed ${TSURUGI.sources.accessed}. Population is unpublished (universes are not mixed).`}
      </p>
      </details>
      ) : (
      <details className="facts-fold">
        <summary>{tMuni('factsFold')}</summary>
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
      </details>
      )}

    </>
  );
}
