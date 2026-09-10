import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {TokushimaMap} from '@/components/TokushimaMap';
import {MIMA_PLACE_PHOTO, BASE_PATH, type MimaPlacePhoto} from '@/data/mima';
import {TSURUGI_PLACE_PHOTO} from '@/data/tsurugi';
import {YOSHINOGAWA_PLACE_PHOTO} from '@/data/yoshinogawa';
import {MIYOSHI_PLACE_PHOTO} from '@/data/miyoshi';
import {AWA_PLACE_PHOTO} from '@/data/awa';
import {HIGASHIMIYOSHI_PLACE_PHOTO} from '@/data/higashimiyoshi';
import {KITAJIMA_PLACE_PHOTO} from '@/data/kitajima';
import {MATSUSHIGE_PLACE_PHOTO} from '@/data/matsushige';
import {ISHII_PLACE_PHOTO} from '@/data/ishii';
import {ITANO_PLACE_PHOTO} from '@/data/itano';
import {KAMIITA_PLACE_PHOTO} from '@/data/kamiita';
import {NARUTO_PLACE_PHOTO} from '@/data/naruto';
import {KOMATSUSHIMA_PLACE_PHOTO} from '@/data/komatsushima';
import {ANAN_PLACE_PHOTO} from '@/data/anan';
import {TAKAMATSU_PLACE_PHOTO} from '@/data/takamatsu';
import {KOTOHIRA_PLACE_PHOTO} from '@/data/kotohira';
import {MARUGAME_PLACE_PHOTO} from '@/data/marugame';
import {KANONJI_PLACE_PHOTO} from '@/data/kanonji';
import {SAKAIDE_PLACE_PHOTO} from '@/data/sakaide'
import {NAOSHIMA_PLACE_PHOTO} from '@/data/naoshima';
import {SHODOSHIMA_PLACE_PHOTO} from '@/data/shodoshima';
import {ZENTSUJI_PLACE_PHOTO} from '@/data/zentsuji';
import {MITOYO_PLACE_PHOTO} from '@/data/mitoyo';
import {UTAZU_PLACE_PHOTO} from '@/data/utazu';
import {TONOSHO_PLACE_PHOTO} from '@/data/tonosho';
import {SANUKI_PLACE_PHOTO} from '@/data/sanuki';
import {HIGASHIKAGAWA_PLACE_PHOTO} from '@/data/higashikagawa';
import {MIKI_PLACE_PHOTO} from '@/data/miki';
import {AYAGAWA_PLACE_PHOTO} from '@/data/ayagawa';
import {TADOTSU_PLACE_PHOTO} from '@/data/tadotsu';
import {MANNO_PLACE_PHOTO} from '@/data/manno';
import {KOCHI_PLACE_PHOTO} from '@/data/kochi';
import {NANKOKU_PLACE_PHOTO} from '@/data/nankoku';
import {KONAN_PLACE_PHOTO} from '@/data/konan';
import {KAMI_PLACE_PHOTO} from '@/data/kami';
import {INO_PLACE_PHOTO} from '@/data/ino';
import {AKI_PLACE_PHOTO} from '@/data/aki';
import {MUROTO_PLACE_PHOTO} from '@/data/muroto';
import {TOSA_PLACE_PHOTO} from '@/data/tosa';
import {SUSAKI_PLACE_PHOTO} from '@/data/susaki';
import {SHIMANTO_PLACE_PHOTO} from '@/data/shimanto';
import {TOSASHIMIZU_PLACE_PHOTO} from '@/data/tosashimizu';
import {SUKUMO_PLACE_PHOTO} from '@/data/sukumo';
import {KUROSHIO_PLACE_PHOTO} from '@/data/kuroshio';
import {TOYO_PLACE_PHOTO} from '@/data/toyo';
import {NAHARI_PLACE_PHOTO} from '@/data/nahari';
import {YASUDA_PLACE_PHOTO} from '@/data/yasuda';
import {GEISEI_PLACE_PHOTO} from '@/data/geisei';
import {KITAGAWA_PLACE_PHOTO} from '@/data/kitagawa';
import {UMAJI_PLACE_PHOTO} from '@/data/umaji';
import {MOTOYAMA_PLACE_PHOTO} from '@/data/motoyama';
import {OTOYO_PLACE_PHOTO} from '@/data/otoyo';
import {TOSACHO_PLACE_PHOTO} from '@/data/tosacho';
import {OKAWA_PLACE_PHOTO} from '@/data/okawa';
import {NIYODOGAWA_PLACE_PHOTO} from '@/data/niyodogawa';
import {NAKATOSA_PLACE_PHOTO} from '@/data/nakatosa';
import {OCHI_PLACE_PHOTO} from '@/data/ochi';
import {YUSUHARA_PLACE_PHOTO} from '@/data/yusuhara';
import {HIDAKA_PLACE_PHOTO} from '@/data/hidaka';
import {TSUNO_PLACE_PHOTO} from '@/data/tsuno';
import {SHIMANTOCHO_PLACE_PHOTO} from '@/data/shimantocho';
import {OTSUKI_PLACE_PHOTO} from '@/data/otsuki';
import {MIHARA_PLACE_PHOTO} from '@/data/mihara';
import {MATSUYAMA_PLACE_PHOTO} from '@/data/matsuyama';
import {IMABARI_PLACE_PHOTO} from '@/data/imabari';
import {UWAJIMA_PLACE_PHOTO} from '@/data/uwajima';
import {YAWATAHAMA_PLACE_PHOTO} from '@/data/yawatahama';
import {NIIHAMA_PLACE_PHOTO} from '@/data/niihama';
import {SAIJO_PLACE_PHOTO} from '@/data/saijo';
import {OZU_PLACE_PHOTO} from '@/data/ozu';
import {IYO_PLACE_PHOTO} from '@/data/iyo';
import {SHIKOKUCHUO_PLACE_PHOTO} from '@/data/shikokuchuo';
import {SEIYO_PLACE_PHOTO} from '@/data/seiyo';
import {TOON_PLACE_PHOTO} from '@/data/toon';
import {KAMIJIMA_PLACE_PHOTO} from '@/data/kamijima';
import {KUMAKOGEN_PLACE_PHOTO} from '@/data/kumakogen';
import {MASAKI_PLACE_PHOTO} from '@/data/masaki';
import {TOBE_PLACE_PHOTO} from '@/data/tobe';
import {UCHIKO_PLACE_PHOTO} from '@/data/uchiko';
import {IKATA_PLACE_PHOTO} from '@/data/ikata';
import {MATSUNO_PLACE_PHOTO} from '@/data/matsuno';
import {KIHOKU_PLACE_PHOTO} from '@/data/kihoku';
import {AINAN_PLACE_PHOTO} from '@/data/ainan';
import {HIROSHIMA_PLACE_PHOTO} from '@/data/hiroshima';
import {KURE_PLACE_PHOTO} from '@/data/kure';
import {TAKEHARA_PLACE_PHOTO} from '@/data/takehara';
import {NAKA_PLACE_PHOTO} from '@/data/naka';
import {MUGI_PLACE_PHOTO} from '@/data/mugi';
import {MINAMI_PLACE_PHOTO} from '@/data/minami';
import {KAIYO_PLACE_PHOTO} from '@/data/kaiyo';
import {AIZUMI_PLACE_PHOTO} from '@/data/aizumi';
import {KATSUURA_PLACE_PHOTO} from '@/data/katsuura';
import {KAMIKATSU_PLACE_PHOTO} from '@/data/kamikatsu';
import {SANAGOCHI_PLACE_PHOTO} from '@/data/sanagochi';
import {KAMIYAMA_PLACE_PHOTO} from '@/data/kamiyama';
import {KAGAWA_MUNICIPALITIES} from '@/data/kagawa-municipalities';
import {KOCHI_MUNICIPALITIES} from '@/data/kochi-municipalities';
import {EHIME_MUNICIPALITIES} from '@/data/ehime-municipalities';
import {HIROSHIMA_MUNICIPALITIES} from '@/data/hiroshima-municipalities';
import {TOKUSHIMA_CITY_PLACE_PHOTO} from '@/data/tokushima-city';
import {PREFECTURES, PREFECTURE_BY_SLUG} from '@/data/prefectures';
import {TOKUSHIMA_MUNICIPALITIES} from '@/data/tokushima-municipalities';
import {Link} from '@/i18n/navigation';
import {type AppLocale} from '@/i18n/routing';
import {JsonLd} from '@/components/JsonLd';
import {prefectureGraph} from '@/lib/jsonld';
import {shareMetadata} from '@/lib/seo';


/** Pref-card covers: every ready slug must map here (else falls to Mima wakimachi). TG614-615. */
const MUNI_CARD_PHOTO: Record<string, MimaPlacePhoto> = {
  mima: MIMA_PLACE_PHOTO,
  tokushima: TOKUSHIMA_CITY_PLACE_PHOTO,
  tsurugi: TSURUGI_PLACE_PHOTO,
  yoshinogawa: YOSHINOGAWA_PLACE_PHOTO,
  miyoshi: MIYOSHI_PLACE_PHOTO,
  awa: AWA_PLACE_PHOTO,
  higashimiyoshi: HIGASHIMIYOSHI_PLACE_PHOTO,
  kitajima: KITAJIMA_PLACE_PHOTO,
  naruto: NARUTO_PLACE_PHOTO,
  matsushige: MATSUSHIGE_PLACE_PHOTO,
  ishii: ISHII_PLACE_PHOTO,
  itano: ITANO_PLACE_PHOTO,
  kamiita: KAMIITA_PLACE_PHOTO,
  komatsushima: KOMATSUSHIMA_PLACE_PHOTO,
  anan: ANAN_PLACE_PHOTO,
  katsuura: KATSUURA_PLACE_PHOTO,
  kamikatsu: KAMIKATSU_PLACE_PHOTO,
  sanagochi: SANAGOCHI_PLACE_PHOTO,
  kamiyama: KAMIYAMA_PLACE_PHOTO,
  naka: NAKA_PLACE_PHOTO,
  mugi: MUGI_PLACE_PHOTO,
  minami: MINAMI_PLACE_PHOTO,
  kaiyo: KAIYO_PLACE_PHOTO,
  aizumi: AIZUMI_PLACE_PHOTO,
  takamatsu: TAKAMATSU_PLACE_PHOTO,
  kotohira: KOTOHIRA_PLACE_PHOTO,
  marugame: MARUGAME_PLACE_PHOTO,
  kanonji: KANONJI_PLACE_PHOTO,
  sakaide: SAKAIDE_PLACE_PHOTO,
  naoshima: NAOSHIMA_PLACE_PHOTO,
  shodoshima: SHODOSHIMA_PLACE_PHOTO,
  zentsuji: ZENTSUJI_PLACE_PHOTO,
  mitoyo: MITOYO_PLACE_PHOTO,
  utazu: UTAZU_PLACE_PHOTO,
  tonosho: TONOSHO_PLACE_PHOTO,
  sanuki: SANUKI_PLACE_PHOTO,
  higashikagawa: HIGASHIKAGAWA_PLACE_PHOTO,
  miki: MIKI_PLACE_PHOTO,
  ayagawa: AYAGAWA_PLACE_PHOTO,
  tadotsu: TADOTSU_PLACE_PHOTO,
  manno: MANNO_PLACE_PHOTO,
  kochi: KOCHI_PLACE_PHOTO,
  nankoku: NANKOKU_PLACE_PHOTO,
  konan: KONAN_PLACE_PHOTO,
  kami: KAMI_PLACE_PHOTO,
  ino: INO_PLACE_PHOTO,
  aki: AKI_PLACE_PHOTO,
  muroto: MUROTO_PLACE_PHOTO,
  tosa: TOSA_PLACE_PHOTO,
  susaki: SUSAKI_PLACE_PHOTO,
  shimanto: SHIMANTO_PLACE_PHOTO,
  tosashimizu: TOSASHIMIZU_PLACE_PHOTO,
  sukumo: SUKUMO_PLACE_PHOTO,
  kuroshio: KUROSHIO_PLACE_PHOTO,
  toyo: TOYO_PLACE_PHOTO,
  nahari: NAHARI_PLACE_PHOTO,
  yasuda: YASUDA_PLACE_PHOTO,
  geisei: GEISEI_PLACE_PHOTO,
  kitagawa: KITAGAWA_PLACE_PHOTO,
  umaji: UMAJI_PLACE_PHOTO,
  motoyama: MOTOYAMA_PLACE_PHOTO,
  otoyo: OTOYO_PLACE_PHOTO,
  tosacho: TOSACHO_PLACE_PHOTO,
  okawa: OKAWA_PLACE_PHOTO,
  niyodogawa: NIYODOGAWA_PLACE_PHOTO,
  nakatosa: NAKATOSA_PLACE_PHOTO,
  ochi: OCHI_PLACE_PHOTO,
  yusuhara: YUSUHARA_PLACE_PHOTO,
  hidaka: HIDAKA_PLACE_PHOTO,
  tsuno: TSUNO_PLACE_PHOTO,
  shimantocho: SHIMANTOCHO_PLACE_PHOTO,
  otsuki: OTSUKI_PLACE_PHOTO,
  mihara: MIHARA_PLACE_PHOTO,
  matsuyama: MATSUYAMA_PLACE_PHOTO,
  imabari: IMABARI_PLACE_PHOTO,
  uwajima: UWAJIMA_PLACE_PHOTO,
  yawatahama: YAWATAHAMA_PLACE_PHOTO,
  niihama: NIIHAMA_PLACE_PHOTO,
  saijo: SAIJO_PLACE_PHOTO,
  ozu: OZU_PLACE_PHOTO,
  iyo: IYO_PLACE_PHOTO,
  shikokuchuo: SHIKOKUCHUO_PLACE_PHOTO,
  seiyo: SEIYO_PLACE_PHOTO,
  toon: TOON_PLACE_PHOTO,
  kamijima: KAMIJIMA_PLACE_PHOTO,
  kumakogen: KUMAKOGEN_PLACE_PHOTO,
  masaki: MASAKI_PLACE_PHOTO,
  tobe: TOBE_PLACE_PHOTO,
  uchiko: UCHIKO_PLACE_PHOTO,
  ikata: IKATA_PLACE_PHOTO,
  matsuno: MATSUNO_PLACE_PHOTO,
  kihoku: KIHOKU_PLACE_PHOTO,
  ainan: AINAN_PLACE_PHOTO,
  hiroshima: HIROSHIMA_PLACE_PHOTO,
  kure: KURE_PLACE_PHOTO,
  takehara: TAKEHARA_PLACE_PHOTO,
};

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
  const live = pref.slug === 'tokushima' || pref.slug === 'kagawa' || pref.slug === 'kochi' || pref.slug === 'ehime' || pref.slug === 'hiroshima';
  return shareMetadata({
    locale: loc,
    rest: pref.slug,
    title: name,
    description: pref.slug === 'tokushima'
      ? loc === 'ja'
        ? '徳島県の市町村案内。'
        : 'Municipalities in Tokushima.'
      : pref.slug === 'kagawa'
        ? loc === 'ja'
          ? '香川県の市町村案内。'
          : 'Municipalities in Kagawa.'
        : pref.slug === 'kochi'
          ? loc === 'ja'
            ? '高知県の市町村案内。'
            : 'Municipalities in Kochi.'
        : pref.slug === 'ehime'
          ? loc === 'ja'
            ? '愛媛県の市町村案内。'
            : 'Municipalities in Ehime.'
        : pref.slug === 'hiroshima'
          ? loc === 'ja'
            ? '広島県の市町村案内。'
            : 'Municipalities in Hiroshima.'
        : loc === 'ja'
          ? 'この県の市町村ページは準備中です。'
          : 'This prefecture layer is not wired yet.',
    image: pref.slug === 'hiroshima' ? HIROSHIMA_PLACE_PHOTO : pref.slug === 'ehime' ? MATSUYAMA_PLACE_PHOTO : pref.slug === 'kochi' ? KOCHI_PLACE_PHOTO : pref.slug === 'kagawa' ? TAKAMATSU_PLACE_PHOTO : MIMA_PLACE_PHOTO,
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
      {pref.slug === 'tokushima' || pref.slug === 'kagawa' || pref.slug === 'kochi' || pref.slug === 'ehime' || pref.slug === 'hiroshima' ? (
        <>
          <ul className="muni-cards">
            {(pref.slug === 'tokushima' ? TOKUSHIMA_MUNICIPALITIES : pref.slug === 'kagawa' ? KAGAWA_MUNICIPALITIES : pref.slug === 'ehime' ? EHIME_MUNICIPALITIES : pref.slug === 'hiroshima' ? HIROSHIMA_MUNICIPALITIES : KOCHI_MUNICIPALITIES).map((m) => {
              const live = m.status === 'ready';
              const photo: MimaPlacePhoto =
                MUNI_CARD_PHOTO[m.slug] ?? MIMA_PLACE_PHOTO;
              const href = `${BASE_PATH}/${locale}/${pref.slug}/${m.slug}/`;
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
                    <Link href={`/${pref.slug}/${m.slug}`}>
                      <span className="muni-card-name">{isJa ? m.nameJa : m.nameEn}</span>
                      <span className="muted">{isJa ? '準備中' : 'Coming soon'}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          {pref.slug === 'tokushima' ? <TokushimaMap locale={locale} /> : null}
        </>
      ) : (
        <div className="coming coming-photo">
          <p>{t('rolling')}</p>
          <p>
            <Link href="/tokushima">{isJa ? '公開中の県（徳島）へ' : 'Open prefecture: Tokushima'}</Link>
            {' · '}
            <Link href="/kagawa">{isJa ? '香川' : 'Kagawa'}</Link>
            {' · '}
            <Link href="/ehime">{isJa ? '愛媛' : 'Ehime'}</Link>
            {' · '}
            <Link href="/kochi">{isJa ? '高知' : 'Kochi'}</Link>
            {' · '}
            <Link href="/hiroshima">{isJa ? '広島' : 'Hiroshima'}</Link>
            {' · '}
            <Link href="/">{t('back')}</Link>
          </p>
        </div>
      )}
    </div>
  );
}
