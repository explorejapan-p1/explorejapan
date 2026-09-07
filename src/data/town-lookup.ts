import {
  EXPECTED_GEO_COUNT,
  EXPECTED_ROW_COUNT,
  TSURUGI_EXPECTED_GEO_COUNT,
  TSURUGI_EXPECTED_ROW_COUNT,
  YOSHINOGAWA_EXPECTED_GEO_COUNT,
  YOSHINOGAWA_EXPECTED_ROW_COUNT,
  MIYOSHI_EXPECTED_GEO_COUNT,
  MIYOSHI_EXPECTED_ROW_COUNT,
  AWA_EXPECTED_GEO_COUNT,
  AWA_EXPECTED_ROW_COUNT,
  HIGASHIMIYOSHI_EXPECTED_GEO_COUNT,
  HIGASHIMIYOSHI_EXPECTED_ROW_COUNT,
  KITAJIMA_EXPECTED_GEO_COUNT,
  KITAJIMA_EXPECTED_ROW_COUNT,
  MATSUSHIGE_EXPECTED_GEO_COUNT,
  MATSUSHIGE_EXPECTED_ROW_COUNT,
  ISHII_EXPECTED_GEO_COUNT,
  ISHII_EXPECTED_ROW_COUNT,
  ITANO_EXPECTED_GEO_COUNT,
  ITANO_EXPECTED_ROW_COUNT,
  KAMIITA_EXPECTED_GEO_COUNT,
  KAMIITA_EXPECTED_ROW_COUNT,
  KAMIYAMA_EXPECTED_GEO_COUNT,
  KAMIYAMA_EXPECTED_ROW_COUNT,
  KATSUURA_EXPECTED_GEO_COUNT,
  KATSUURA_EXPECTED_ROW_COUNT,
  KAMIKATSU_EXPECTED_GEO_COUNT,
  KAMIKATSU_EXPECTED_ROW_COUNT,
  SANAGOCHI_EXPECTED_GEO_COUNT,
  SANAGOCHI_EXPECTED_ROW_COUNT,
  NAKA_EXPECTED_GEO_COUNT,
  NAKA_EXPECTED_ROW_COUNT,
  MINAMI_EXPECTED_GEO_COUNT,
  MINAMI_EXPECTED_ROW_COUNT
,
  KAIYO_EXPECTED_GEO_COUNT
,
  KAIYO_EXPECTED_ROW_COUNT,
  AIZUMI_EXPECTED_GEO_COUNT,
  AIZUMI_EXPECTED_ROW_COUNT,
  MUGI_EXPECTED_GEO_COUNT,
  MUGI_EXPECTED_ROW_COUNT
} from './facility-schema';
import {MIMA, MIMA_PLACE_PHOTO} from './mima';
import {MIMA_FACILITIES} from './mima-facilities';
import {
  TRAVEL_ACCESSED,
  TRAVEL_ALL,
  TRAVEL_COMMERCE,
  TRAVEL_DINING,
  TRAVEL_SHOPPING,
  TRAVEL_SOURCES,
  TRAVEL_STAY
} from './mima-travel';
import {isReadySlug, type LookupTown, type ReadySlug} from './lookup-town';
import {TSURUGI, TSURUGI_PLACE_PHOTO} from './tsurugi';
import {TSURUGI_FACILITIES} from './tsurugi-facilities';
import {
  TSURUGI_TRAVEL_ACCESSED,
  TSURUGI_TRAVEL_ALL,
  TSURUGI_TRAVEL_COMMERCE,
  TSURUGI_TRAVEL_DINING,
  TSURUGI_TRAVEL_SHOPPING,
  TSURUGI_TRAVEL_SOURCES,
  TSURUGI_TRAVEL_STAY
} from './tsurugi-travel';
import {YOSHINOGAWA, YOSHINOGAWA_PLACE_PHOTO} from './yoshinogawa';
import {YOSHINOGAWA_FACILITIES} from './yoshinogawa-facilities';
import {
  YOSHINOGAWA_TRAVEL_ACCESSED,
  YOSHINOGAWA_TRAVEL_ALL,
  YOSHINOGAWA_TRAVEL_COMMERCE,
  YOSHINOGAWA_TRAVEL_DINING,
  YOSHINOGAWA_TRAVEL_SHOPPING,
  YOSHINOGAWA_TRAVEL_SOURCES,
  YOSHINOGAWA_TRAVEL_STAY
} from './yoshinogawa-travel';

import {MIYOSHI, MIYOSHI_PLACE_PHOTO} from './miyoshi';
import {MIYOSHI_FACILITIES} from './miyoshi-facilities';
import {
  MIYOSHI_TRAVEL_ACCESSED,
  MIYOSHI_TRAVEL_ALL,
  MIYOSHI_TRAVEL_COMMERCE,
  MIYOSHI_TRAVEL_DINING,
  MIYOSHI_TRAVEL_SHOPPING,
  MIYOSHI_TRAVEL_SOURCES,
  MIYOSHI_TRAVEL_STAY
} from './miyoshi-travel';

import {
  TOKUSHIMA_CITY,
  TOKUSHIMA_CITY_PLACE_PHOTO,
  TOKUSHIMA_CITY_FACILITIES,
  TOKUSHIMA_CITY_EXPECTED_GEO_COUNT,
  TOKUSHIMA_CITY_EXPECTED_ROW_COUNT
} from './tokushima-city';

import {AWA, AWA_PLACE_PHOTO} from './awa';
import {AWA_FACILITIES} from './awa-facilities';
import {
  AWA_TRAVEL_ACCESSED,
  AWA_TRAVEL_ALL,
  AWA_TRAVEL_COMMERCE,
  AWA_TRAVEL_DINING,
  AWA_TRAVEL_SHOPPING,
  AWA_TRAVEL_SOURCES,
  AWA_TRAVEL_STAY
} from './awa-travel';


import {HIGASHIMIYOSHI, HIGASHIMIYOSHI_PLACE_PHOTO} from './higashimiyoshi';
import {HIGASHIMIYOSHI_FACILITIES} from './higashimiyoshi-facilities';
import {
  HIGASHIMIYOSHI_TRAVEL_ACCESSED,
  HIGASHIMIYOSHI_TRAVEL_SOURCES,
  HIGASHIMIYOSHI_TRAVEL_ALL,
  HIGASHIMIYOSHI_TRAVEL_COMMERCE,
  HIGASHIMIYOSHI_TRAVEL_DINING,
  HIGASHIMIYOSHI_TRAVEL_SHOPPING,
  HIGASHIMIYOSHI_TRAVEL_STAY
} from './higashimiyoshi-travel';


import {MATSUSHIGE, MATSUSHIGE_PLACE_PHOTO} from './matsushige';
import {MATSUSHIGE_FACILITIES} from './matsushige-facilities';
import {
  MATSUSHIGE_TRAVEL_ACCESSED,
  MATSUSHIGE_TRAVEL_SOURCES,
  MATSUSHIGE_TRAVEL_ALL,
  MATSUSHIGE_TRAVEL_COMMERCE,
  MATSUSHIGE_TRAVEL_DINING,
  MATSUSHIGE_TRAVEL_SHOPPING,
  MATSUSHIGE_TRAVEL_STAY
} from './matsushige-travel';


import {ISHII, ISHII_PLACE_PHOTO} from './ishii';
import {ISHII_FACILITIES} from './ishii-facilities';
import {
  ISHII_TRAVEL_ACCESSED,
  ISHII_TRAVEL_SOURCES,
  ISHII_TRAVEL_ALL,
  ISHII_TRAVEL_COMMERCE,
  ISHII_TRAVEL_DINING,
  ISHII_TRAVEL_SHOPPING,
  ISHII_TRAVEL_STAY
} from './ishii-travel';


import {ITANO, ITANO_PLACE_PHOTO} from './itano';
import {ITANO_FACILITIES} from './itano-facilities';
import {
  ITANO_TRAVEL_ACCESSED,
  ITANO_TRAVEL_ALL,
  ITANO_TRAVEL_COMMERCE,
  ITANO_TRAVEL_DINING,
  ITANO_TRAVEL_SHOPPING,
  ITANO_TRAVEL_SOURCES,
  ITANO_TRAVEL_STAY
} from './itano-travel';

import {KAMIITA, KAMIITA_PLACE_PHOTO} from './kamiita';
import {KAMIITA_FACILITIES} from './kamiita-facilities';
import {
  KAMIITA_TRAVEL_ACCESSED,
  KAMIITA_TRAVEL_ALL,
  KAMIITA_TRAVEL_COMMERCE,
  KAMIITA_TRAVEL_DINING,
  KAMIITA_TRAVEL_SHOPPING,
  KAMIITA_TRAVEL_SOURCES,
  KAMIITA_TRAVEL_STAY
} from './kamiita-travel';

import {KAMIYAMA, KAMIYAMA_PLACE_PHOTO} from './kamiyama';
import {KAMIYAMA_FACILITIES} from './kamiyama-facilities';
import {
  KAMIYAMA_TRAVEL_ACCESSED,
  KAMIYAMA_TRAVEL_ALL,
  KAMIYAMA_TRAVEL_COMMERCE,
  KAMIYAMA_TRAVEL_DINING,
  KAMIYAMA_TRAVEL_SHOPPING,
  KAMIYAMA_TRAVEL_SOURCES,
  KAMIYAMA_TRAVEL_STAY
} from './kamiyama-travel';

import {KATSUURA, KATSUURA_PLACE_PHOTO} from './katsuura';
import {KATSUURA_FACILITIES} from './katsuura-facilities';
import {
  KATSUURA_TRAVEL_ACCESSED,
  KATSUURA_TRAVEL_ALL,
  KATSUURA_TRAVEL_COMMERCE,
  KATSUURA_TRAVEL_DINING,
  KATSUURA_TRAVEL_SHOPPING,
  KATSUURA_TRAVEL_SOURCES,
  KATSUURA_TRAVEL_STAY
} from './katsuura-travel';

import {KAMIKATSU, KAMIKATSU_PLACE_PHOTO} from './kamikatsu';
import {KAMIKATSU_FACILITIES} from './kamikatsu-facilities';
import {
  KAMIKATSU_TRAVEL_ACCESSED,
  KAMIKATSU_TRAVEL_ALL,
  KAMIKATSU_TRAVEL_COMMERCE,
  KAMIKATSU_TRAVEL_DINING,
  KAMIKATSU_TRAVEL_SHOPPING,
  KAMIKATSU_TRAVEL_SOURCES,
  KAMIKATSU_TRAVEL_STAY
} from './kamikatsu-travel';


import {SANAGOCHI, SANAGOCHI_PLACE_PHOTO} from './sanagochi';
import {NAKA, NAKA_PLACE_PHOTO} from './naka';
import {MINAMI, MINAMI_PLACE_PHOTO} from './minami';
import {KAIYO, KAIYO_PLACE_PHOTO} from './kaiyo';
import {SANAGOCHI_FACILITIES} from './sanagochi-facilities';
import {NAKA_FACILITIES} from './naka-facilities';
import {MINAMI_FACILITIES} from './minami-facilities';
import {KAIYO_FACILITIES} from './kaiyo-facilities';
import {
  SANAGOCHI_TRAVEL_ACCESSED,
  SANAGOCHI_TRAVEL_ALL,
  SANAGOCHI_TRAVEL_COMMERCE,
  SANAGOCHI_TRAVEL_DINING,
  SANAGOCHI_TRAVEL_SHOPPING,
  SANAGOCHI_TRAVEL_SOURCES,
  SANAGOCHI_TRAVEL_STAY
} from './sanagochi-travel';
import {
  NAKA_TRAVEL_DINING,
  NAKA_TRAVEL_STAY,
  NAKA_TRAVEL_SHOPPING,
  NAKA_TRAVEL_COMMERCE,
  NAKA_TRAVEL_ALL
} from './naka-travel';

import {MUGI, MUGI_PLACE_PHOTO} from './mugi';
import {MUGI_FACILITIES} from './mugi-facilities';
import {
  MUGI_TRAVEL_ACCESSED,
  MUGI_TRAVEL_ALL,
  MUGI_TRAVEL_COMMERCE,
  MUGI_TRAVEL_DINING,
  MUGI_TRAVEL_SHOPPING,
  MUGI_TRAVEL_SOURCES,
  MUGI_TRAVEL_STAY
} from './mugi-travel';

import {
  MINAMI_TRAVEL_ACCESSED,
  MINAMI_TRAVEL_SOURCES,
  MINAMI_TRAVEL_DINING,
  MINAMI_TRAVEL_STAY,
  MINAMI_TRAVEL_SHOPPING,
  MINAMI_TRAVEL_COMMERCE,
  MINAMI_TRAVEL_ALL
} from './minami-travel';

import {AIZUMI, AIZUMI_PLACE_PHOTO} from './aizumi';
import {AIZUMI_FACILITIES} from './aizumi-facilities';
import {
  AIZUMI_TRAVEL_ACCESSED,
  AIZUMI_TRAVEL_ALL,
  AIZUMI_TRAVEL_COMMERCE,
  AIZUMI_TRAVEL_DINING,
  AIZUMI_TRAVEL_SHOPPING,
  AIZUMI_TRAVEL_SOURCES,
  AIZUMI_TRAVEL_STAY
} from './aizumi-travel';

import {KOMATSUSHIMA, KOMATSUSHIMA_PLACE_PHOTO, KOMATSUSHIMA_FACILITIES, KOMATSUSHIMA_EXPECTED_GEO_COUNT, KOMATSUSHIMA_EXPECTED_ROW_COUNT} from './komatsushima';
import {
  KOMATSUSHIMA_TRAVEL_ACCESSED,
  KOMATSUSHIMA_TRAVEL_ALL,
  KOMATSUSHIMA_TRAVEL_COMMERCE,
  KOMATSUSHIMA_TRAVEL_DINING,
  KOMATSUSHIMA_TRAVEL_SHOPPING,
  KOMATSUSHIMA_TRAVEL_SOURCES,
  KOMATSUSHIMA_TRAVEL_STAY
} from './komatsushima-travel';
import {ANAN, ANAN_PLACE_PHOTO, ANAN_FACILITIES, ANAN_EXPECTED_GEO_COUNT, ANAN_EXPECTED_ROW_COUNT} from './anan';
import {
  ANAN_TRAVEL_ACCESSED,
  ANAN_TRAVEL_ALL,
  ANAN_TRAVEL_COMMERCE,
  ANAN_TRAVEL_DINING,
  ANAN_TRAVEL_SHOPPING,
  ANAN_TRAVEL_SOURCES,
  ANAN_TRAVEL_STAY
} from './anan-travel';

import {TAKAMATSU, TAKAMATSU_PLACE_PHOTO, TAKAMATSU_FACILITIES, TAKAMATSU_EXPECTED_GEO_COUNT, TAKAMATSU_EXPECTED_ROW_COUNT} from './takamatsu';
import {KOTOHIRA, KOTOHIRA_PLACE_PHOTO, KOTOHIRA_FACILITIES, KOTOHIRA_EXPECTED_GEO_COUNT, KOTOHIRA_EXPECTED_ROW_COUNT} from './kotohira';
import {MARUGAME, MARUGAME_PLACE_PHOTO, MARUGAME_FACILITIES, MARUGAME_EXPECTED_GEO_COUNT, MARUGAME_EXPECTED_ROW_COUNT} from './marugame';
import {KANONJI, KANONJI_PLACE_PHOTO, KANONJI_FACILITIES, KANONJI_EXPECTED_GEO_COUNT, KANONJI_EXPECTED_ROW_COUNT} from './kanonji';
import {SAKAIDE, SAKAIDE_PLACE_PHOTO, SAKAIDE_FACILITIES, SAKAIDE_EXPECTED_GEO_COUNT, SAKAIDE_EXPECTED_ROW_COUNT} from './sakaide';
import {NAOSHIMA, NAOSHIMA_PLACE_PHOTO, NAOSHIMA_FACILITIES, NAOSHIMA_EXPECTED_GEO_COUNT, NAOSHIMA_EXPECTED_ROW_COUNT} from './naoshima';
import {SHODOSHIMA, SHODOSHIMA_PLACE_PHOTO, SHODOSHIMA_FACILITIES, SHODOSHIMA_EXPECTED_GEO_COUNT, SHODOSHIMA_EXPECTED_ROW_COUNT} from './shodoshima';
import {ZENTSUJI, ZENTSUJI_PLACE_PHOTO, ZENTSUJI_FACILITIES, ZENTSUJI_EXPECTED_GEO_COUNT, ZENTSUJI_EXPECTED_ROW_COUNT} from './zentsuji';
import {MITOYO, MITOYO_PLACE_PHOTO, MITOYO_FACILITIES, MITOYO_EXPECTED_GEO_COUNT, MITOYO_EXPECTED_ROW_COUNT} from './mitoyo';
import {UTAZU, UTAZU_PLACE_PHOTO, UTAZU_FACILITIES, UTAZU_EXPECTED_GEO_COUNT, UTAZU_EXPECTED_ROW_COUNT} from './utazu';
import {TONOSHO, TONOSHO_PLACE_PHOTO, TONOSHO_FACILITIES, TONOSHO_EXPECTED_GEO_COUNT, TONOSHO_EXPECTED_ROW_COUNT} from './tonosho';
import {SANUKI, SANUKI_PLACE_PHOTO, SANUKI_FACILITIES, SANUKI_EXPECTED_GEO_COUNT, SANUKI_EXPECTED_ROW_COUNT} from './sanuki';
import {HIGASHIKAGAWA, HIGASHIKAGAWA_PLACE_PHOTO, HIGASHIKAGAWA_FACILITIES, HIGASHIKAGAWA_EXPECTED_GEO_COUNT, HIGASHIKAGAWA_EXPECTED_ROW_COUNT} from './higashikagawa';
import {MIKI, MIKI_PLACE_PHOTO, MIKI_FACILITIES, MIKI_EXPECTED_GEO_COUNT, MIKI_EXPECTED_ROW_COUNT} from './miki';
import {AYAGAWA, AYAGAWA_PLACE_PHOTO, AYAGAWA_FACILITIES, AYAGAWA_EXPECTED_GEO_COUNT, AYAGAWA_EXPECTED_ROW_COUNT} from './ayagawa';
import {TADOTSU, TADOTSU_PLACE_PHOTO, TADOTSU_FACILITIES, TADOTSU_EXPECTED_GEO_COUNT, TADOTSU_EXPECTED_ROW_COUNT} from './tadotsu';
import {MANNO, MANNO_PLACE_PHOTO, MANNO_FACILITIES, MANNO_EXPECTED_GEO_COUNT, MANNO_EXPECTED_ROW_COUNT} from './manno';
import {KOCHI, KOCHI_PLACE_PHOTO, KOCHI_FACILITIES, KOCHI_EXPECTED_GEO_COUNT, KOCHI_EXPECTED_ROW_COUNT} from './kochi';
import {NANKOKU, NANKOKU_PLACE_PHOTO, NANKOKU_FACILITIES, NANKOKU_EXPECTED_GEO_COUNT, NANKOKU_EXPECTED_ROW_COUNT} from './nankoku';
import {KONAN, KONAN_PLACE_PHOTO, KONAN_FACILITIES, KONAN_EXPECTED_GEO_COUNT, KONAN_EXPECTED_ROW_COUNT} from './konan';
import {KAMI, KAMI_PLACE_PHOTO, KAMI_FACILITIES, KAMI_EXPECTED_GEO_COUNT, KAMI_EXPECTED_ROW_COUNT} from './kami';
import {INO, INO_PLACE_PHOTO, INO_FACILITIES, INO_EXPECTED_GEO_COUNT, INO_EXPECTED_ROW_COUNT} from './ino';
import {AKI, AKI_PLACE_PHOTO, AKI_FACILITIES, AKI_EXPECTED_GEO_COUNT, AKI_EXPECTED_ROW_COUNT} from './aki';
import {MUROTO, MUROTO_PLACE_PHOTO, MUROTO_FACILITIES, MUROTO_EXPECTED_GEO_COUNT, MUROTO_EXPECTED_ROW_COUNT} from './muroto';
import {TOSA, TOSA_PLACE_PHOTO, TOSA_FACILITIES, TOSA_EXPECTED_GEO_COUNT, TOSA_EXPECTED_ROW_COUNT} from './tosa';
import {SUSAKI, SUSAKI_PLACE_PHOTO, SUSAKI_FACILITIES, SUSAKI_EXPECTED_GEO_COUNT, SUSAKI_EXPECTED_ROW_COUNT} from './susaki';
import {SHIMANTO, SHIMANTO_PLACE_PHOTO, SHIMANTO_FACILITIES, SHIMANTO_EXPECTED_GEO_COUNT, SHIMANTO_EXPECTED_ROW_COUNT} from './shimanto';
import {TOSASHIMIZU, TOSASHIMIZU_PLACE_PHOTO, TOSASHIMIZU_FACILITIES, TOSASHIMIZU_EXPECTED_GEO_COUNT, TOSASHIMIZU_EXPECTED_ROW_COUNT} from './tosashimizu';
import {SUKUMO, SUKUMO_PLACE_PHOTO, SUKUMO_FACILITIES, SUKUMO_EXPECTED_GEO_COUNT, SUKUMO_EXPECTED_ROW_COUNT} from './sukumo';
import {KUROSHIO, KUROSHIO_PLACE_PHOTO, KUROSHIO_FACILITIES, KUROSHIO_EXPECTED_GEO_COUNT, KUROSHIO_EXPECTED_ROW_COUNT} from './kuroshio';
import {TOYO, TOYO_PLACE_PHOTO, TOYO_FACILITIES, TOYO_EXPECTED_GEO_COUNT, TOYO_EXPECTED_ROW_COUNT} from './toyo';
import {NAHARI, NAHARI_PLACE_PHOTO, NAHARI_FACILITIES, NAHARI_EXPECTED_GEO_COUNT, NAHARI_EXPECTED_ROW_COUNT} from './nahari';
import {YASUDA, YASUDA_PLACE_PHOTO, YASUDA_FACILITIES, YASUDA_EXPECTED_GEO_COUNT, YASUDA_EXPECTED_ROW_COUNT} from './yasuda';
import {GEISEI, GEISEI_PLACE_PHOTO, GEISEI_FACILITIES, GEISEI_EXPECTED_GEO_COUNT, GEISEI_EXPECTED_ROW_COUNT} from './geisei';
import {KITAGAWA, KITAGAWA_PLACE_PHOTO, KITAGAWA_FACILITIES, KITAGAWA_EXPECTED_GEO_COUNT, KITAGAWA_EXPECTED_ROW_COUNT} from './kitagawa';
import {UMAJI, UMAJI_PLACE_PHOTO, UMAJI_FACILITIES, UMAJI_EXPECTED_GEO_COUNT, UMAJI_EXPECTED_ROW_COUNT} from './umaji';
import {MOTOYAMA, MOTOYAMA_PLACE_PHOTO, MOTOYAMA_FACILITIES, MOTOYAMA_EXPECTED_GEO_COUNT, MOTOYAMA_EXPECTED_ROW_COUNT} from './motoyama';
import {OTOYO, OTOYO_PLACE_PHOTO, OTOYO_FACILITIES, OTOYO_EXPECTED_GEO_COUNT, OTOYO_EXPECTED_ROW_COUNT} from './otoyo';
import {TOSACHO, TOSACHO_PLACE_PHOTO, TOSACHO_FACILITIES, TOSACHO_EXPECTED_GEO_COUNT, TOSACHO_EXPECTED_ROW_COUNT} from './tosacho';
import {OKAWA, OKAWA_PLACE_PHOTO, OKAWA_FACILITIES, OKAWA_EXPECTED_GEO_COUNT, OKAWA_EXPECTED_ROW_COUNT} from './okawa';
import {NIYODOGAWA, NIYODOGAWA_PLACE_PHOTO, NIYODOGAWA_FACILITIES, NIYODOGAWA_EXPECTED_GEO_COUNT, NIYODOGAWA_EXPECTED_ROW_COUNT} from './niyodogawa';
import {NAKATOSA, NAKATOSA_PLACE_PHOTO, NAKATOSA_FACILITIES, NAKATOSA_EXPECTED_GEO_COUNT, NAKATOSA_EXPECTED_ROW_COUNT} from './nakatosa';
import {
  TAKAMATSU_TRAVEL_ACCESSED,
  TAKAMATSU_TRAVEL_ALL,
  TAKAMATSU_TRAVEL_COMMERCE,
  TAKAMATSU_TRAVEL_DINING,
  TAKAMATSU_TRAVEL_SHOPPING,
  TAKAMATSU_TRAVEL_SOURCES,
  TAKAMATSU_TRAVEL_STAY
} from './takamatsu-travel';
import {
  KOTOHIRA_TRAVEL_DINING,
  KOTOHIRA_TRAVEL_STAY,
  KOTOHIRA_TRAVEL_SHOPPING,
  KOTOHIRA_TRAVEL_COMMERCE,
  KOTOHIRA_TRAVEL_ALL,
  KOTOHIRA_TRAVEL_ACCESSED,
  KOTOHIRA_TRAVEL_SOURCES
} from './kotohira-travel';
import {
  MARUGAME_TRAVEL_DINING,
  MARUGAME_TRAVEL_STAY,
  MARUGAME_TRAVEL_SHOPPING,
  MARUGAME_TRAVEL_COMMERCE,
  MARUGAME_TRAVEL_ALL,
  MARUGAME_TRAVEL_ACCESSED,
  MARUGAME_TRAVEL_SOURCES
} from './marugame-travel';
import {
  KANONJI_TRAVEL_DINING,
  KANONJI_TRAVEL_STAY,
  KANONJI_TRAVEL_SHOPPING,
  KANONJI_TRAVEL_COMMERCE,
  KANONJI_TRAVEL_ALL,
  KANONJI_TRAVEL_ACCESSED,
  KANONJI_TRAVEL_SOURCES
} from './kanonji-travel';

import {
  SAKAIDE_TRAVEL_DINING,
  SAKAIDE_TRAVEL_STAY,
  SAKAIDE_TRAVEL_SHOPPING,
  SAKAIDE_TRAVEL_COMMERCE,
  SAKAIDE_TRAVEL_ALL,
  SAKAIDE_TRAVEL_ACCESSED,
  SAKAIDE_TRAVEL_SOURCES
} from './sakaide-travel';
import {
  NAOSHIMA_TRAVEL_DINING,
  NAOSHIMA_TRAVEL_STAY,
  NAOSHIMA_TRAVEL_SHOPPING,
  NAOSHIMA_TRAVEL_COMMERCE,
  NAOSHIMA_TRAVEL_ALL,
  NAOSHIMA_TRAVEL_ACCESSED,
  NAOSHIMA_TRAVEL_SOURCES
} from './naoshima-travel';
import {
  SHODOSHIMA_TRAVEL_DINING,
  SHODOSHIMA_TRAVEL_STAY,
  SHODOSHIMA_TRAVEL_SHOPPING,
  SHODOSHIMA_TRAVEL_COMMERCE,
  SHODOSHIMA_TRAVEL_ALL,
  SHODOSHIMA_TRAVEL_ACCESSED,
  SHODOSHIMA_TRAVEL_SOURCES
} from './shodoshima-travel';
import {
  ZENTSUJI_TRAVEL_DINING,
  ZENTSUJI_TRAVEL_STAY,
  ZENTSUJI_TRAVEL_SHOPPING,
  ZENTSUJI_TRAVEL_COMMERCE,
  ZENTSUJI_TRAVEL_ALL,
  ZENTSUJI_TRAVEL_ACCESSED,
  ZENTSUJI_TRAVEL_SOURCES
} from './zentsuji-travel';
import {
  MITOYO_TRAVEL_DINING,
  MITOYO_TRAVEL_STAY,
  MITOYO_TRAVEL_SHOPPING,
  MITOYO_TRAVEL_COMMERCE,
  MITOYO_TRAVEL_ALL,
  MITOYO_TRAVEL_ACCESSED,
  MITOYO_TRAVEL_SOURCES
} from './mitoyo-travel';
import {
  UTAZU_TRAVEL_DINING,
  UTAZU_TRAVEL_STAY,
  UTAZU_TRAVEL_SHOPPING,
  UTAZU_TRAVEL_COMMERCE,
  UTAZU_TRAVEL_ALL,
  UTAZU_TRAVEL_ACCESSED,
  UTAZU_TRAVEL_SOURCES
} from './utazu-travel';
import {
  TONOSHO_TRAVEL_DINING,
  TONOSHO_TRAVEL_STAY,
  TONOSHO_TRAVEL_SHOPPING,
  TONOSHO_TRAVEL_COMMERCE,
  TONOSHO_TRAVEL_ALL,
  TONOSHO_TRAVEL_ACCESSED,
  TONOSHO_TRAVEL_SOURCES
} from './tonosho-travel';
import {
  SANUKI_TRAVEL_DINING,
  SANUKI_TRAVEL_STAY,
  SANUKI_TRAVEL_SHOPPING,
  SANUKI_TRAVEL_COMMERCE,
  SANUKI_TRAVEL_ALL,
  SANUKI_TRAVEL_ACCESSED,
  SANUKI_TRAVEL_SOURCES
} from './sanuki-travel';
import {
  HIGASHIKAGAWA_TRAVEL_ALL,
  HIGASHIKAGAWA_TRAVEL_DINING,
  HIGASHIKAGAWA_TRAVEL_STAY,
  HIGASHIKAGAWA_TRAVEL_SHOPPING,
  HIGASHIKAGAWA_TRAVEL_COMMERCE,
  HIGASHIKAGAWA_TRAVEL_ACCESSED,
  HIGASHIKAGAWA_ONSEN_PACK_NAMES,
  HIGASHIKAGAWA_EXPERIENCE_PACK_NAMES,
  HIGASHIKAGAWA_STAY_PACK_NAMES,
  HIGASHIKAGAWA_SHOPPING_PACK_NAMES,
  HIGASHIKAGAWA_SIGHT_PINS,
  higashikagawaSightPhoto,
  higashikagawaSourcedHook,
  higashikagawaTopChipForRow,
  higashikagawaPackRowMatchesFilter,
  rankHigashikagawaSeeRows,
  isHigashikagawaOnsenPackRow,
  isHigashikagawaExperiencePackRow,
  isHigashikagawaStayPackRow,
  isHigashikagawaShoppingPackRow,
  isHigashikagawaDiningPackRow,
  HIGASHIKAGAWA_DINING_NAME_SET
} from './higashikagawa-travel';
import {
  MIKI_TRAVEL_DINING,
  MIKI_TRAVEL_STAY,
  MIKI_TRAVEL_SHOPPING,
  MIKI_TRAVEL_COMMERCE,
  MIKI_TRAVEL_ALL,
  mikiSightPhoto,
  mikiSourcedHook,
  mikiTopChipForRow,
  mikiPackRowMatchesFilter,
  resolveMikiFilter,
  rankMikiSeeRows
} from './miki-travel';
import {
  AYAGAWA_TRAVEL_DINING,
  AYAGAWA_TRAVEL_STAY,
  AYAGAWA_TRAVEL_SHOPPING,
  AYAGAWA_TRAVEL_COMMERCE,
  AYAGAWA_TRAVEL_ALL,
  ayagawaSightPhoto,
  ayagawaSourcedHook,
  ayagawaTopChipForRow,
  ayagawaPackRowMatchesFilter,
  resolveAyagawaFilter,
  rankAyagawaSeeRows
} from './ayagawa-travel';
import {
  TADOTSU_TRAVEL_DINING,
  TADOTSU_TRAVEL_STAY,
  TADOTSU_TRAVEL_SHOPPING,
  TADOTSU_TRAVEL_COMMERCE,
  TADOTSU_TRAVEL_ALL,
  tadotsuSightPhoto,
  tadotsuSourcedHook,
  tadotsuTopChipForRow,
  tadotsuPackRowMatchesFilter,
  resolveTadotsuFilter,
  rankTadotsuSeeRows
} from './tadotsu-travel';
import {
  MANNO_TRAVEL_DINING,
  MANNO_TRAVEL_STAY,
  MANNO_TRAVEL_SHOPPING,
  MANNO_TRAVEL_COMMERCE,
  MANNO_TRAVEL_ALL,
  mannoSightPhoto,
  mannoSourcedHook,
  mannoTopChipForRow,
  mannoPackRowMatchesFilter,
  resolveMannoFilter,
  rankMannoSeeRows
} from './manno-travel';
import {
  KOCHI_TRAVEL_DINING,
  KOCHI_TRAVEL_STAY,
  KOCHI_TRAVEL_SHOPPING,
  KOCHI_TRAVEL_COMMERCE,
  KOCHI_TRAVEL_ALL,
  kochiSightPhoto,
  kochiSourcedHook,
  kochiTopChipForRow,
  kochiPackRowMatchesFilter,
  resolveKochiFilter,
  rankKochiSeeRows
} from './kochi-travel';
import {
  NANKOKU_TRAVEL_DINING,
  NANKOKU_TRAVEL_STAY,
  NANKOKU_TRAVEL_SHOPPING,
  NANKOKU_TRAVEL_COMMERCE,
  NANKOKU_TRAVEL_ALL,
  nankokuSightPhoto,
  nankokuSourcedHook,
  nankokuTopChipForRow,
  nankokuPackRowMatchesFilter,
  resolveNankokuFilter,
  rankNankokuSeeRows
} from './nankoku-travel';
import {
  KONAN_TRAVEL_DINING,
  KONAN_TRAVEL_STAY,
  KONAN_TRAVEL_SHOPPING,
  KONAN_TRAVEL_COMMERCE,
  KONAN_TRAVEL_ALL,
} from './konan-travel';
import {
  KAMI_TRAVEL_DINING,
  KAMI_TRAVEL_STAY,
  KAMI_TRAVEL_SHOPPING,
  KAMI_TRAVEL_COMMERCE,
  KAMI_TRAVEL_ALL,
} from './kami-travel';
import {
  INO_TRAVEL_DINING,
  INO_TRAVEL_STAY,
  INO_TRAVEL_SHOPPING,
  INO_TRAVEL_COMMERCE,
  INO_TRAVEL_ALL,
} from './ino-travel';
import {
  AKI_TRAVEL_DINING,
  AKI_TRAVEL_STAY,
  AKI_TRAVEL_SHOPPING,
  AKI_TRAVEL_COMMERCE,
  AKI_TRAVEL_ALL,
} from './aki-travel';
import {
  MUROTO_TRAVEL_DINING,
  MUROTO_TRAVEL_STAY,
  MUROTO_TRAVEL_SHOPPING,
  MUROTO_TRAVEL_COMMERCE,
  MUROTO_TRAVEL_ALL,
} from './muroto-travel';
import {
  TOSA_TRAVEL_DINING,
  TOSA_TRAVEL_STAY,
  TOSA_TRAVEL_SHOPPING,
  TOSA_TRAVEL_COMMERCE,
  TOSA_TRAVEL_ALL,
} from './tosa-travel';
import {
  SUSAKI_TRAVEL_DINING,
  SUSAKI_TRAVEL_STAY,
  SUSAKI_TRAVEL_SHOPPING,
  SUSAKI_TRAVEL_COMMERCE,
  SUSAKI_TRAVEL_ALL,
} from './susaki-travel';
import {
  SHIMANTO_TRAVEL_DINING,
  SHIMANTO_TRAVEL_STAY,
  SHIMANTO_TRAVEL_SHOPPING,
  SHIMANTO_TRAVEL_COMMERCE,
  SHIMANTO_TRAVEL_ALL,
} from './shimanto-travel';
import {
  TOSASHIMIZU_TRAVEL_DINING,
  TOSASHIMIZU_TRAVEL_STAY,
  TOSASHIMIZU_TRAVEL_SHOPPING,
  TOSASHIMIZU_TRAVEL_COMMERCE,
  TOSASHIMIZU_TRAVEL_ALL,
} from './tosashimizu-travel';
import {
  SUKUMO_TRAVEL_DINING,
  SUKUMO_TRAVEL_STAY,
  SUKUMO_TRAVEL_SHOPPING,
  SUKUMO_TRAVEL_COMMERCE,
  SUKUMO_TRAVEL_ALL
} from './sukumo-travel';
import {
  KUROSHIO_TRAVEL_DINING,
  KUROSHIO_TRAVEL_STAY,
  KUROSHIO_TRAVEL_SHOPPING,
  KUROSHIO_TRAVEL_COMMERCE,
  KUROSHIO_TRAVEL_ALL
} from './kuroshio-travel';
import {
  TOYO_TRAVEL_DINING,
  TOYO_TRAVEL_STAY,
  TOYO_TRAVEL_SHOPPING,
  TOYO_TRAVEL_COMMERCE,
  TOYO_TRAVEL_ALL
} from './toyo-travel';
import {
  NAHARI_TRAVEL_DINING,
  NAHARI_TRAVEL_STAY,
  NAHARI_TRAVEL_SHOPPING,
  NAHARI_TRAVEL_COMMERCE,
  NAHARI_TRAVEL_ALL
} from './nahari-travel';
import {
  YASUDA_TRAVEL_DINING,
  YASUDA_TRAVEL_STAY,
  YASUDA_TRAVEL_SHOPPING,
  YASUDA_TRAVEL_COMMERCE,
  YASUDA_TRAVEL_ALL
} from './yasuda-travel';
import {
  GEISEI_TRAVEL_DINING,
  GEISEI_TRAVEL_STAY,
  GEISEI_TRAVEL_SHOPPING,
  GEISEI_TRAVEL_COMMERCE,
  GEISEI_TRAVEL_ALL
} from './geisei-travel';
import {
  KITAGAWA_TRAVEL_DINING,
  KITAGAWA_TRAVEL_STAY,
  KITAGAWA_TRAVEL_SHOPPING,
  KITAGAWA_TRAVEL_COMMERCE,
  KITAGAWA_TRAVEL_ALL
} from './kitagawa-travel';
import {
  UMAJI_TRAVEL_DINING,
  UMAJI_TRAVEL_STAY,
  UMAJI_TRAVEL_SHOPPING,
  UMAJI_TRAVEL_COMMERCE,
  UMAJI_TRAVEL_ALL
} from './umaji-travel';
import {
  MOTOYAMA_TRAVEL_DINING,
  MOTOYAMA_TRAVEL_STAY,
  MOTOYAMA_TRAVEL_SHOPPING,
  MOTOYAMA_TRAVEL_COMMERCE,
  MOTOYAMA_TRAVEL_ALL
} from './motoyama-travel';
import {
  OTOYO_TRAVEL_DINING,
  OTOYO_TRAVEL_STAY,
  OTOYO_TRAVEL_SHOPPING,
  OTOYO_TRAVEL_COMMERCE,
  OTOYO_TRAVEL_ALL
} from './otoyo-travel';
import {
  TOSACHO_TRAVEL_DINING,
  TOSACHO_TRAVEL_STAY,
  TOSACHO_TRAVEL_SHOPPING,
  TOSACHO_TRAVEL_COMMERCE,
  TOSACHO_TRAVEL_ALL
} from './tosacho-travel';
import {
  OKAWA_TRAVEL_DINING,
  OKAWA_TRAVEL_STAY,
  OKAWA_TRAVEL_SHOPPING,
  OKAWA_TRAVEL_COMMERCE,
  OKAWA_TRAVEL_ALL
} from './okawa-travel';
import {
  NIYODOGAWA_TRAVEL_DINING,
  NIYODOGAWA_TRAVEL_STAY,
  NIYODOGAWA_TRAVEL_SHOPPING,
  NIYODOGAWA_TRAVEL_COMMERCE,
  NIYODOGAWA_TRAVEL_ALL
} from './niyodogawa-travel';
import {
  NAKATOSA_TRAVEL_DINING,
  NAKATOSA_TRAVEL_STAY,
  NAKATOSA_TRAVEL_SHOPPING,
  NAKATOSA_TRAVEL_COMMERCE,
  NAKATOSA_TRAVEL_ALL
} from './nakatosa-travel';





import {
  KAIYO_TRAVEL_DINING,
  KAIYO_TRAVEL_STAY,
  KAIYO_TRAVEL_SHOPPING,
  KAIYO_TRAVEL_COMMERCE,
  KAIYO_TRAVEL_ALL,
  KAIYO_TRAVEL_ACCESSED,
  KAIYO_TRAVEL_SOURCES
} from './kaiyo-travel';





import {KITAJIMA, KITAJIMA_PLACE_PHOTO} from './kitajima';
import {KITAJIMA_FACILITIES} from './kitajima-facilities';
import {
  KITAJIMA_TRAVEL_ACCESSED,
  KITAJIMA_TRAVEL_SOURCES,
  KITAJIMA_TRAVEL_ALL,
  KITAJIMA_TRAVEL_COMMERCE,
  KITAJIMA_TRAVEL_DINING,
  KITAJIMA_TRAVEL_SHOPPING,
  KITAJIMA_TRAVEL_STAY
} from './kitajima-travel';


import {NARUTO, NARUTO_PLACE_PHOTO, NARUTO_FACILITIES, NARUTO_EXPECTED_GEO_COUNT, NARUTO_EXPECTED_ROW_COUNT} from './naruto';
import {
  NARUTO_TRAVEL_ACCESSED,
  NARUTO_TRAVEL_ALL,
  NARUTO_TRAVEL_COMMERCE,
  NARUTO_TRAVEL_DINING,
  NARUTO_TRAVEL_SHOPPING,
  NARUTO_TRAVEL_SOURCES,
  NARUTO_TRAVEL_STAY
} from './naruto-travel';

import {
  TOKUSHIMA_CITY_TRAVEL_ACCESSED,
  TOKUSHIMA_CITY_TRAVEL_ALL,
  TOKUSHIMA_CITY_TRAVEL_COMMERCE,
  TOKUSHIMA_CITY_TRAVEL_DINING,
  TOKUSHIMA_CITY_TRAVEL_SHOPPING,
  TOKUSHIMA_CITY_TRAVEL_SOURCES,
  TOKUSHIMA_CITY_TRAVEL_STAY
} from './tokushima-city-travel';

export type {LookupTown, ReadySlug} from './lookup-town';
export {isReadySlug} from './lookup-town';

export const MIMA_LOOKUP: LookupTown = {
  slug: 'mima',
  prefectureSlug: 'tokushima',
  jis: MIMA.jis,
  nameJa: MIMA.nameJa,
  nameEn: MIMA.nameEn,
  heroPhoto: MIMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は脇町南町（うだつの町並み）。Araiyasushige、2025-08-28、CC0 1.0。',
  photoCiteEn:
    'Photo: Wakimachi Minami-machi (Udatsu townscape). Araiyasushige, 28 Aug 2025, CC0 1.0.',
  rows: MIMA_FACILITIES,
  expectedGeo: EXPECTED_GEO_COUNT,
  expectedRows: EXPECTED_ROW_COUNT,
  travelDining: TRAVEL_DINING,
  travelStay: TRAVEL_STAY,
  travelShopping: TRAVEL_SHOPPING,
  travelCommerce: TRAVEL_COMMERCE,
  travelAll: TRAVEL_ALL,
  coverageJa:
    '美馬市（JIS 36207）515件。観光116、文化財110、介護80、AED 72、避難所45、緊急避難場所40、医療機関23、保育16、公衆無線LAN 9、公共施設4。GTFSの停留所は0件（未掲載）。',
  coverageEn:
    'Mima City (JIS 36207), 515 rows. Tourism 116, cultural property 110, care 80, AED 72, shelters 45, emergency sites 40, hospitals 23, childcare 16, public Wi-Fi 9, public facilities 4. GTFS stops: 0, unpublished.',
  mapLabelJa: '美馬市の公式座標61件',
  mapLabelEn: '61 official coordinates in Mima City',
  mapCitePackJa: '点は凍結パックの公式座標61件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 61 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「市公式サイト掲載情報」は市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A city-site listing is a fact from city.mima.lg.jp, not under that license.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const TSURUGI_LOOKUP: LookupTown = {
  slug: 'tsurugi',
  prefectureSlug: 'tokushima',
  jis: TSURUGI.jis,
  nameJa: TSURUGI.nameJa,
  nameEn: TSURUGI.nameEn,
  heroPhoto: TSURUGI_PLACE_PHOTO,
  photoCiteJa:
    '写真は二層うだつの町並み。Asturio Cantabrio、2022-08、CC BY-SA 4.0。',
  photoCiteEn:
    'Photo: two-storey udatsu townscape. Asturio Cantabrio, Aug 2022, CC BY-SA 4.0.',
  rows: TSURUGI_FACILITIES,
  expectedGeo: TSURUGI_EXPECTED_GEO_COUNT,
  expectedRows: TSURUGI_EXPECTED_ROW_COUNT,
  travelDining: TSURUGI_TRAVEL_DINING,
  travelStay: TSURUGI_TRAVEL_STAY,
  travelShopping: TSURUGI_TRAVEL_SHOPPING,
  travelCommerce: TSURUGI_TRAVEL_COMMERCE,
  travelAll: TSURUGI_TRAVEL_ALL,
  coverageJa:
    'つるぎ町（JIS 36468）宿泊2・飲食13・温泉1・観光6（出典写真がある施設のみ）＋オープンデータパック。体験・買物・商業0。',
  coverageEn:
    'Tsurugi Town (JIS 36468), 2 stay + 13 dining + 1 onsen + 6 tourism with sourced photos, plus open-data pack. Experience, shopping, commerce: 0.',
  mapLabelJa: 'つるぎ町の公式座標171件',
  mapLabelEn: '171 official coordinates in Tsurugi Town',
  mapCitePackJa: '点は凍結パックの公式座標171件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 171 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.tokushima-tsurugi.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const YOSHINOGAWA_LOOKUP: LookupTown = {
  slug: 'yoshinogawa',
  prefectureSlug: 'tokushima',
  jis: YOSHINOGAWA.jis,
  nameJa: YOSHINOGAWA.nameJa,
  nameEn: YOSHINOGAWA.nameEn,
  heroPhoto: YOSHINOGAWA_PLACE_PHOTO,
  photoCiteJa:
    '写真は川島城。Dokudami、2022-05-27、CC BY-SA 4.0。',
  photoCiteEn:
    'Photo: Kawashima Castle. Dokudami, 27 May 2022, CC BY-SA 4.0.',
  rows: YOSHINOGAWA_FACILITIES,
  expectedGeo: YOSHINOGAWA_EXPECTED_GEO_COUNT,
  expectedRows: YOSHINOGAWA_EXPECTED_ROW_COUNT,
  travelDining: YOSHINOGAWA_TRAVEL_DINING,
  travelStay: YOSHINOGAWA_TRAVEL_STAY,
  travelShopping: YOSHINOGAWA_TRAVEL_SHOPPING,
  travelCommerce: YOSHINOGAWA_TRAVEL_COMMERCE,
  travelAll: YOSHINOGAWA_TRAVEL_ALL,
  coverageJa:
    '吉野川市（JIS 36205）宿泊1・飲食13・温泉2・観光17（出典写真がある施設のみ）＋オープンデータパック。体験・買物・商業0。',
  coverageEn:
    'Yoshinogawa City (JIS 36205), 1 stay + 13 dining + 2 onsen + 17 tourism with sourced photos, plus open-data pack. Experience, shopping, commerce: 0.',
  mapLabelJa: '吉野川市の公式座標29件',
  mapLabelEn: '29 official coordinates in Yoshinogawa City',
  mapCitePackJa: '点は凍結パックの公式座標29件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 29 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「市公式サイト掲載情報」は市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A city-site listing is a fact from city.yoshinogawa.lg.jp, not under that license.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const MIYOSHI_LOOKUP: LookupTown = {
  slug: 'miyoshi',
  prefectureSlug: 'tokushima',
  jis: MIYOSHI.jis,
  nameJa: MIYOSHI.nameJa,
  nameEn: MIYOSHI.nameEn,
  heroPhoto: MIYOSHI_PLACE_PHOTO,
  photoCiteJa:
    '写真は大歩危・小歩危。Motokoka、2010-09-25、CC BY-SA 4.0。File:Oboke and Koboke Valley 03.jpg。',
  photoCiteEn:
    'Photo: Oboke and Koboke Valleys. Motokoka, 25 Sep 2010, CC BY-SA 4.0. File:Oboke and Koboke Valley 03.jpg.',
  rows: MIYOSHI_FACILITIES,
  expectedGeo: MIYOSHI_EXPECTED_GEO_COUNT,
  expectedRows: MIYOSHI_EXPECTED_ROW_COUNT,
  travelDining: MIYOSHI_TRAVEL_DINING,
  travelStay: MIYOSHI_TRAVEL_STAY,
  travelShopping: MIYOSHI_TRAVEL_SHOPPING,
  travelCommerce: MIYOSHI_TRAVEL_COMMERCE,
  travelAll: MIYOSHI_TRAVEL_ALL,
  coverageJa:
    '三好市（JIS 36208）宿泊2・飲食13・温泉2・観光10（出典写真がある施設のみ）＋オープンデータパック。体験・買物・商業0。',
  coverageEn:
    'Miyoshi City (JIS 36208), 2 stay + 13 dining + 2 onsen + 10 tourism with sourced photos, plus open-data pack. Experience, shopping, commerce: 0.',
  mapLabelJa: '三好市の公式座標636件',
  mapLabelEn: '636 official coordinates in Miyoshi City',
  mapCitePackJa: '点は凍結パックの公式座標636件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 636 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「市公式サイト掲載情報」は市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A city-site listing is a fact from miyoshi.i-tokushima.jp, not under that license.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const TOKUSHIMA_CITY_LOOKUP: LookupTown = {
  slug: 'tokushima',
  prefectureSlug: 'tokushima',
  jis: TOKUSHIMA_CITY.jis,
  nameJa: TOKUSHIMA_CITY.nameJa,
  nameEn: TOKUSHIMA_CITY.nameEn,
  heroPhoto: TOKUSHIMA_CITY_PLACE_PHOTO,
  photoCiteJa:
    '写真は新町川から臨む眉山。新幹線、2020-06-07、CC BY-SA 4.0。File:Mount Bizan from Shimmachi River 20200607.jpg。',
  photoCiteEn:
    'Photo: Mount Bizan from the Shinmachi River. 新幹線, 7 Jun 2020, CC BY-SA 4.0. File:Mount Bizan from Shimmachi River 20200607.jpg.',
  rows: TOKUSHIMA_CITY_FACILITIES,
  expectedGeo: TOKUSHIMA_CITY_EXPECTED_GEO_COUNT,
  expectedRows: TOKUSHIMA_CITY_EXPECTED_ROW_COUNT,
  travelDining: TOKUSHIMA_CITY_TRAVEL_DINING,
  travelStay: TOKUSHIMA_CITY_TRAVEL_STAY,
  travelShopping: TOKUSHIMA_CITY_TRAVEL_SHOPPING,
  travelCommerce: TOKUSHIMA_CITY_TRAVEL_COMMERCE,
  travelAll: TOKUSHIMA_CITY_TRAVEL_ALL,
  coverageJa:
    '徳島市（JIS 36201）観光7・宿泊35・飲食55・温泉1・体験5・買物4・商業2（出典写真がある施設のみ）。オープンデータ凍結パックは未掲載。AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。そごう閉店済みのためアミコ系で商業掲載。Perfectではない。',
  coverageEn:
    'Tokushima City (JIS 36201), 7 tourism + 35 stay + 55 dining + 1 onsen + 5 experience + 4 shopping + 2 commerce with sourced photos. No frozen open-data pack. AED/hospitals/care/shelters/cultural/GTFS: 0. Sogo closed — Amico mall/commerce used. Not perfect.',
  mapLabelJa: '徳島市の出典座標13件',
  mapLabelEn: '13 sourced coordinates in Tokushima City',
  mapCitePackJa: '点は市ページ掲載施設のWikipedia座標ほか13件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 13 sourced coordinates for city-page facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.tokushima.tokushima.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const AWA_LOOKUP: LookupTown = {
  slug: 'awa',
  prefectureSlug: 'tokushima',
  jis: AWA.jis,
  nameJa: AWA.nameJa,
  nameEn: AWA.nameEn,
  heroPhoto: AWA_PLACE_PHOTO,
  photoCiteJa:
    '写真は阿波の土柱。Araiyasushige、2022-08-22、CC BY-SA 4.0。File:Awa no dotyuu 20220822 1.jpg。',
  photoCiteEn:
    'Photo: Awa-no-Dochū earth pillars. Araiyasushige, 22 Aug 2022, CC BY-SA 4.0. File:Awa no dotyuu 20220822 1.jpg.',
  rows: AWA_FACILITIES,
  expectedGeo: AWA_EXPECTED_GEO_COUNT,
  expectedRows: AWA_EXPECTED_ROW_COUNT,
  travelDining: AWA_TRAVEL_DINING,
  travelStay: AWA_TRAVEL_STAY,
  travelShopping: AWA_TRAVEL_SHOPPING,
  travelCommerce: AWA_TRAVEL_COMMERCE,
  travelAll: AWA_TRAVEL_ALL,
  coverageJa:
    '阿波市（JIS 36206）宿泊0・飲食14・観光8（出典写真がある施設のみ）＋オープンデータパック。温泉・体験・買物・商業0。',
  coverageEn:
    'Awa City (JIS 36206), 0 stay + 14 dining + 8 tourism with sourced photos, plus open-data pack. Onsen, experience, shopping, commerce: 0.',
  mapLabelJa: '阿波市の公式座標171件',
  mapLabelEn: '171 official coordinates in Awa City',
  mapCitePackJa: '点は凍結パックの公式座標171件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 171 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「市公式サイト掲載情報」は市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A city-site listing is a fact from city.awa.lg.jp, not under that license.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};



export const HIGASHIMIYOSHI_LOOKUP: LookupTown = {
  slug: 'higashimiyoshi',
  prefectureSlug: 'tokushima',
  jis: HIGASHIMIYOSHI.jis,
  nameJa: HIGASHIMIYOSHI.nameJa,
  nameEn: HIGASHIMIYOSHI.nameEn,
  heroPhoto: HIGASHIMIYOSHI_PLACE_PHOTO,
  photoCiteJa:
    '写真は加茂の大クス。Saigen Jiro、2019-04-28、CC0。File:Kamo-no-Okusu-1.jpg。',
  photoCiteEn:
    'Photo: Kamo-no-Ōkusu camphor tree. Saigen Jiro, 28 Apr 2019, CC0. File:Kamo-no-Okusu-1.jpg.',
  rows: HIGASHIMIYOSHI_FACILITIES,
  expectedGeo: HIGASHIMIYOSHI_EXPECTED_GEO_COUNT,
  expectedRows: HIGASHIMIYOSHI_EXPECTED_ROW_COUNT,
  travelDining: HIGASHIMIYOSHI_TRAVEL_DINING,
  travelStay: HIGASHIMIYOSHI_TRAVEL_STAY,
  travelShopping: HIGASHIMIYOSHI_TRAVEL_SHOPPING,
  travelCommerce: HIGASHIMIYOSHI_TRAVEL_COMMERCE,
  travelAll: HIGASHIMIYOSHI_TRAVEL_ALL,
  coverageJa:
    '東みよし町（JIS 36489）285件。文化財109、GTFS停留所63、公共施設36、緊急避難場所16、医療機関15、避難所13、介護11、観光10、保育9、Wi-Fi 3。AEDは0件（未掲載）。',
  coverageEn:
    'Higashimiyoshi Town (JIS 36489), 285 rows. Cultural property 109, GTFS stops 63, public facilities 36, emergency sites 16, hospitals 15, shelters 13, care 11, tourism 10, childcare 9, Wi-Fi 3. AED: 0, unpublished.',
  mapLabelJa: '東みよし町の公式座標72件',
  mapLabelEn: '72 official coordinates in Higashimiyoshi Town',
  mapCitePackJa: '点は凍結パックの公式座標72件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 72 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.higashimiyoshi.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};



export const NARUTO_LOOKUP: LookupTown = {
  slug: 'naruto',
  prefectureSlug: 'tokushima',
  jis: NARUTO.jis,
  nameJa: NARUTO.nameJa,
  nameEn: NARUTO.nameEn,
  heroPhoto: NARUTO_PLACE_PHOTO,
  photoCiteJa:
    '写真は渦の道から見た鳴門の渦潮。Kounosu、2010-08-11、CC BY-SA 3.0。File:Naruto Whirlpools from the Uzunomichi.jpg。',
  photoCiteEn:
    'Photo: Naruto whirlpools from Uzunomichi. Kounosu, 11 Aug 2010, CC BY-SA 3.0. File:Naruto Whirlpools from the Uzunomichi.jpg.',
  rows: NARUTO_FACILITIES,
  expectedGeo: NARUTO_EXPECTED_GEO_COUNT,
  expectedRows: NARUTO_EXPECTED_ROW_COUNT,
  travelDining: NARUTO_TRAVEL_DINING,
  travelStay: NARUTO_TRAVEL_STAY,
  travelShopping: NARUTO_TRAVEL_SHOPPING,
  travelCommerce: NARUTO_TRAVEL_COMMERCE,
  travelAll: NARUTO_TRAVEL_ALL,
  coverageJa:
    '鳴門市（JIS 36202）観光5・宿泊13・飲食14（出典写真がある施設のみ）。オープンデータ凍結パックは未掲載。温泉・体験・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。',
  coverageEn:
    'Naruto City (JIS 36202), 5 tourism + 13 stay + 14 dining with sourced photos. No frozen open-data pack. Onsen, experience, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished.',
  mapLabelJa: '鳴門市の出典座標1件',
  mapLabelEn: '1 sourced coordinate in Naruto City',
  mapCitePackJa: '点は市・観光ページ掲載施設のWikipedia座標1件（accessed 2026-09-05）。',
  mapCitePackEn: 'Points: 1 Wikipedia coordinate for a city/tourism-page facility (accessed 2026-09-05).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.naruto.tokushima.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const MATSUSHIGE_LOOKUP: LookupTown = {
  slug: 'matsushige',
  prefectureSlug: 'tokushima',
  jis: MATSUSHIGE.jis,
  nameJa: MATSUSHIGE.nameJa,
  nameEn: MATSUSHIGE.nameEn,
  heroPhoto: MATSUSHIGE_PLACE_PHOTO,
  photoCiteJa:
    '写真は月見ヶ丘海浜公園。Tamago915、2008-10-13、CC BY-SA 3.0。File:Tsukimigaoka-Kaihin-Koen.jpg。',
  photoCiteEn:
    'Photo: Tsukimigaoka Kaihin Koen. Tamago915, 13 Oct 2008, CC BY-SA 3.0. File:Tsukimigaoka-Kaihin-Koen.jpg.',
  rows: MATSUSHIGE_FACILITIES,
  expectedGeo: MATSUSHIGE_EXPECTED_GEO_COUNT,
  expectedRows: MATSUSHIGE_EXPECTED_ROW_COUNT,
  travelDining: MATSUSHIGE_TRAVEL_DINING,
  travelStay: MATSUSHIGE_TRAVEL_STAY,
  travelShopping: MATSUSHIGE_TRAVEL_SHOPPING,
  travelCommerce: MATSUSHIGE_TRAVEL_COMMERCE,
  travelAll: MATSUSHIGE_TRAVEL_ALL,
  coverageJa:
    '松茂町（JIS 36401）宿泊7・飲食14・観光4（出典写真がある施設のみ）＋オープンデータパック216件。温泉・体験・買物・商業0。AED・医療機関・Wi-Fiは0件（未掲載）。',
  coverageEn:
    'Matsushige Town (JIS 36401), 7 stay + 14 dining + 4 tourism with sourced photos, plus open-data pack 216 rows. Onsen, experience, shopping, commerce: 0. AED, hospitals, Wi-Fi: 0, unpublished.',
  mapLabelJa: '松茂町の公式座標106件',
  mapLabelEn: '106 official coordinates in Matsushige Town',
  mapCitePackJa: '点は凍結パックの公式座標106件（accessed 2026-08-27）。',
  mapCitePackEn: 'Points: 106 official coordinates from the frozen pack (accessed 2026-08-27).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.matsushige.tokushima.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

export const KITAJIMA_LOOKUP: LookupTown = {
  slug: 'kitajima',
  prefectureSlug: 'tokushima',
  jis: KITAJIMA.jis,
  nameJa: KITAJIMA.nameJa,
  nameEn: KITAJIMA.nameEn,
  heroPhoto: KITAJIMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は北島チューリップ公園。タクドラの金太郎、2009-04-08、CC BY 2.1 JP。File:Kitajima Tulip Park 01.jpg。',
  photoCiteEn:
    'Photo: Kitajima Tulip Park. タクドラの金太郎, 8 Apr 2009, CC BY 2.1 JP. File:Kitajima Tulip Park 01.jpg.',
  rows: KITAJIMA_FACILITIES,
  expectedGeo: KITAJIMA_EXPECTED_GEO_COUNT,
  expectedRows: KITAJIMA_EXPECTED_ROW_COUNT,
  travelDining: KITAJIMA_TRAVEL_DINING,
  travelStay: KITAJIMA_TRAVEL_STAY,
  travelShopping: KITAJIMA_TRAVEL_SHOPPING,
  travelCommerce: KITAJIMA_TRAVEL_COMMERCE,
  travelAll: KITAJIMA_TRAVEL_ALL,
  coverageJa:
    '北島町（JIS 36402）宿泊0（町内に市場性のある客室写真なし）・飲食14・観光5（出典写真）・商業1＋オープンデータパック209件+Commons EXTRA3。温泉・体験・買物0。',
  coverageEn:
    'Kitajima Town (JIS 36402), stay 0 (no marketable in-town lodging photo) + 14 dining + 5 tourism with sourced photos + 1 commerce + open-data pack 209 + Commons EXTRA 3. Onsen/experience/shopping 0.',
  mapLabelJa: '北島町の公式座標119件',
  mapLabelEn: '119 official coordinates in Kitajima Town',
  mapCitePackJa: '点は凍結パック+Commons EXTRAの公式座標119件（accessed 2026-08-27）。',
  mapCitePackEn: 'Points: 116 official coordinates from the frozen pack (accessed 2026-08-27).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.kitajima.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const ISHII_LOOKUP: LookupTown = {
  slug: 'ishii',
  prefectureSlug: 'tokushima',
  jis: ISHII.jis,
  nameJa: ISHII.nameJa,
  nameEn: ISHII.nameEn,
  heroPhoto: ISHII_PLACE_PHOTO,
  photoCiteJa:
    '写真は吉野川第十堰。Tamago915、2005-05-03、CC BY-SA 4.0。File:Yoshinogawa Daijuzeki.jpg。',
  photoCiteEn:
    'Photo: Yoshino River Daiju Weir. Tamago915, 3 May 2005, CC BY-SA 4.0. File:Yoshinogawa Daijuzeki.jpg.',
  rows: ISHII_FACILITIES,
  expectedGeo: ISHII_EXPECTED_GEO_COUNT,
  expectedRows: ISHII_EXPECTED_ROW_COUNT,
  travelDining: ISHII_TRAVEL_DINING,
  travelStay: ISHII_TRAVEL_STAY,
  travelShopping: ISHII_TRAVEL_SHOPPING,
  travelCommerce: ISHII_TRAVEL_COMMERCE,
  travelAll: ISHII_TRAVEL_ALL,
  coverageJa:
    '石井町（JIS 36341）179件。緊急避難場所45、文化財34、AED 26、公共施設23、避難所20、保育20、観光9、介護2。医療機関・Wi-Fi・GTFSは0件（未掲載）。',
  coverageEn:
    'Ishii Town (JIS 36341), 179 rows. Emergency sites 45, cultural property 34, AED 26, public facilities 23, shelters 20, childcare 20, tourism 9, care 2. Hospitals, Wi-Fi, GTFS: 0, unpublished.',
  mapLabelJa: '石井町の公式座標88件',
  mapLabelEn: '88 official coordinates in Ishii Town',
  mapCitePackJa: '点は凍結パックの公式座標88件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 88 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.ishii.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const ITANO_LOOKUP: LookupTown = {
  slug: 'itano',
  prefectureSlug: 'tokushima',
  jis: ITANO.jis,
  nameJa: ITANO.nameJa,
  nameEn: ITANO.nameEn,
  heroPhoto: ITANO_PLACE_PHOTO,
  photoCiteJa:
    '写真はあすたむらんど徳島。Sorrysorry、2007-01-06、Public Domain。File:ASUTAMULAND TOKUSHIMA.JPG。',
  photoCiteEn:
    'Photo: Asutamu Land Tokushima. Sorrysorry, 6 Jan 2007, Public Domain. File:ASUTAMULAND TOKUSHIMA.JPG.',
  rows: ITANO_FACILITIES,
  expectedGeo: ITANO_EXPECTED_GEO_COUNT,
  expectedRows: ITANO_EXPECTED_ROW_COUNT,
  travelDining: ITANO_TRAVEL_DINING,
  travelStay: ITANO_TRAVEL_STAY,
  travelShopping: ITANO_TRAVEL_SHOPPING,
  travelCommerce: ITANO_TRAVEL_COMMERCE,
  travelAll: ITANO_TRAVEL_ALL,
  coverageJa:
    '板野町（JIS 36404）187件（pack186+Commons EXTRA1）。文化財45、避難所43、緊急避難場所42、AED 27、公共施設11、保育9、観光9、介護1。医療機関・Wi-Fi・GTFSは0件（未掲載）。',
  coverageEn:
    'Itano Town (JIS 36404), 187 rows (pack186+Commons EXTRA1). Cultural property 45, shelters 43, emergency sites 42, AED 27, public facilities 11, childcare 9, tourism 9, care 1. Hospitals, Wi-Fi, GTFS: 0, unpublished.',
  mapLabelJa: '板野町の公式座標10件',
  mapLabelEn: '10 official coordinates in Itano Town',
  mapCitePackJa: '点は凍結パック+Commons EXTRAの公式座標10件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 9 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.itano.tokushima.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const KAMIITA_LOOKUP: LookupTown = {
  slug: 'kamiita',
  prefectureSlug: 'tokushima',
  jis: KAMIITA.jis,
  nameJa: KAMIITA.nameJa,
  nameEn: KAMIITA.nameEn,
  heroPhoto: KAMIITA_PLACE_PHOTO,
  photoCiteJa:
    '写真は安楽寺（四国霊場第六番）。Dokudami、2019-11-19、CC BY-SA 4.0。File:Anrakuji_20191119_01.jpg。',
  photoCiteEn:
    'Photo: Anraku-ji (Shikoku pilgrimage temple 6). Dokudami, 19 Nov 2019, CC BY-SA 4.0. File:Anrakuji_20191119_01.jpg.',
  rows: KAMIITA_FACILITIES,
  expectedGeo: KAMIITA_EXPECTED_GEO_COUNT,
  expectedRows: KAMIITA_EXPECTED_ROW_COUNT,
  travelDining: KAMIITA_TRAVEL_DINING,
  travelStay: KAMIITA_TRAVEL_STAY,
  travelShopping: KAMIITA_TRAVEL_SHOPPING,
  travelCommerce: KAMIITA_TRAVEL_COMMERCE,
  travelAll: KAMIITA_TRAVEL_ALL,
  coverageJa:
    '上板町（JIS 36405）97件。AED 30、文化財14、緊急避難場所13、避難所10、公共施設10、保育10、観光9、介護1。医療機関・Wi-Fi・GTFSは0件（未掲載）。',
  coverageEn:
    'Kamiita Town (JIS 36405), 97 rows. AED 30, cultural property 14, emergency sites 13, shelters 10, public facilities 10, childcare 10, tourism 9, care 1. Hospitals, Wi-Fi, GTFS: 0, unpublished.',
  mapLabelJa: '上板町の公式座標34件',
  mapLabelEn: '34 official coordinates in Kamiita Town',
  mapCitePackJa: '点は凍結パックの公式座標34件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 34 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from townkamiita.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};



export const KAMIYAMA_LOOKUP: LookupTown = {
  slug: 'kamiyama',
  prefectureSlug: 'tokushima',
  jis: KAMIYAMA.jis,
  nameJa: KAMIYAMA.nameJa,
  nameEn: KAMIYAMA.nameEn,
  heroPhoto: KAMIYAMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は焼山寺（四国霊場第十二番）。Reggaeman、2009-05-04、CC BY-SA 3.0。File:Shozanji_01.JPG。',
  photoCiteEn:
    'Photo: Shōsan-ji (Shikoku pilgrimage temple 12). Reggaeman, 4 May 2009, CC BY-SA 3.0. File:Shozanji_01.JPG.',
  rows: KAMIYAMA_FACILITIES,
  expectedGeo: KAMIYAMA_EXPECTED_GEO_COUNT,
  expectedRows: KAMIYAMA_EXPECTED_ROW_COUNT,
  travelDining: KAMIYAMA_TRAVEL_DINING,
  travelStay: KAMIYAMA_TRAVEL_STAY,
  travelShopping: KAMIYAMA_TRAVEL_SHOPPING,
  travelCommerce: KAMIYAMA_TRAVEL_COMMERCE,
  travelAll: KAMIYAMA_TRAVEL_ALL,
  coverageJa:
    '神山町（JIS 36342）221件。文化財75、観光55、緊急避難場所28、避難所24、公共施設18、介護8、保育7、病院6。AED・Wi-Fi・GTFSは0件（未掲載）。公式座標0件。',
  coverageEn:
    'Kamiyama Town (JIS 36342), 221 rows. Cultural property 75, tourism 55, emergency sites 28, shelters 24, public facilities 18, care 8, childcare 7, hospitals 6. AED, Wi-Fi, GTFS: 0, unpublished. Official coordinates: 0.',
  mapLabelJa: '神山町の公式座標0件',
  mapLabelEn: '0 official coordinates in Kamiyama Town',
  mapCitePackJa: '点は凍結パックの公式座標0件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 0 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.kamiyama.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const KATSUURA_LOOKUP: LookupTown = {
  slug: 'katsuura',
  prefectureSlug: 'tokushima',
  jis: KATSUURA.jis,
  nameJa: KATSUURA.nameJa,
  nameEn: KATSUURA.nameEn,
  heroPhoto: KATSUURA_PLACE_PHOTO,
  photoCiteJa:
    '写真は鶴林寺（四国霊場第二十番）。Mti、2011-07-04、CC BY-SA 3.0。File:Kakurin_temple_entrance.jpg。',
  photoCiteEn:
    'Photo: Kakurin-ji (Shikoku pilgrimage temple 20). Mti, 4 July 2011, CC BY-SA 3.0. File:Kakurin_temple_entrance.jpg.',
  rows: KATSUURA_FACILITIES,
  expectedGeo: KATSUURA_EXPECTED_GEO_COUNT,
  expectedRows: KATSUURA_EXPECTED_ROW_COUNT,
  travelDining: KATSUURA_TRAVEL_DINING,
  travelStay: KATSUURA_TRAVEL_STAY,
  travelShopping: KATSUURA_TRAVEL_SHOPPING,
  travelCommerce: KATSUURA_TRAVEL_COMMERCE,
  travelAll: KATSUURA_TRAVEL_ALL,
  coverageJa:
    '勝浦町（JIS 36301）77件。観光38、文化財21、AED 13、保育3、公共施設1、病院1。介護・避難所・緊急避難場所・Wi-Fi・GTFSは0件（未掲載）。公式座標1件。',
  coverageEn:
    'Katsuura Town (JIS 36301), 77 rows. Tourism 38, cultural property 21, AED 13, childcare 3, public facility 1, hospital 1. Care, shelter, emergency sites, Wi-Fi, GTFS: 0, unpublished. Official coordinates: 1.',
  mapLabelJa: '勝浦町の公式座標1件',
  mapLabelEn: '1 official coordinate in Katsuura Town',
  mapCitePackJa: '点は凍結パックの公式座標1件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 1 official coordinate from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.katsuura.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const KAMIKATSU_LOOKUP: LookupTown = {
  slug: 'kamikatsu',
  prefectureSlug: 'tokushima',
  jis: KAMIKATSU.jis,
  nameJa: KAMIKATSU.nameJa,
  nameEn: KAMIKATSU.nameEn,
  heroPhoto: KAMIKATSU_PLACE_PHOTO,
  photoCiteJa:
    '写真は樫原の棚田（重要文化的景観）。Indiana jo、2016-04-29、CC BY-SA 4.0。File:樫原の棚田.JPG。',
  photoCiteEn:
    'Photo: Kashihara rice terraces (Important Cultural Landscape). Indiana jo, 29 April 2016, CC BY-SA 4.0. File:樫原の棚田.JPG.',
  rows: KAMIKATSU_FACILITIES,
  expectedGeo: KAMIKATSU_EXPECTED_GEO_COUNT,
  expectedRows: KAMIKATSU_EXPECTED_ROW_COUNT,
  travelDining: KAMIKATSU_TRAVEL_DINING,
  travelStay: KAMIKATSU_TRAVEL_STAY,
  travelShopping: KAMIKATSU_TRAVEL_SHOPPING,
  travelCommerce: KAMIKATSU_TRAVEL_COMMERCE,
  travelAll: KAMIKATSU_TRAVEL_ALL,
  coverageJa:
    '上勝町（JIS 36302）157件。観光62、GTFS停留所64、避難所9、介護7、緊急避難場所5、文化財3、保育3、公共施設2、病院2。AED・Wi-Fiは0件（未掲載）。公式座標74件。',
  coverageEn:
    'Kamikatsu Town (JIS 36302), 157 rows. Tourism 62, GTFS stops 64, shelter 9, care 7, emergency sites 5, cultural property 3, childcare 3, public facility 2, hospital 2. AED, Wi-Fi: 0, unpublished. Official coordinates: 74.',
  mapLabelJa: '上勝町の公式座標74件',
  mapLabelEn: '74 official coordinates in Kamikatsu Town',
  mapCitePackJa: '点は凍結パックの公式座標74件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 74 official coordinates from the frozen pack (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町・観光ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from kamikatsu.jp / tourism-kamikatsu.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};



export const SANAGOCHI_LOOKUP: LookupTown = {
  slug: 'sanagochi',
  prefectureSlug: 'tokushima',
  jis: SANAGOCHI.jis,
  nameJa: SANAGOCHI.nameJa,
  nameEn: SANAGOCHI.nameEn,
  heroPhoto: SANAGOCHI_PLACE_PHOTO,
  photoCiteJa:
    '写真は大川原高原。akiakane、2011-11-05、CC BY 3.0。File:大川原高原_-_panoramio.jpg。',
  photoCiteEn:
    'Photo: Okawara Highlands. akiakane, 5 November 2011, CC BY 3.0. File:大川原高原_-_panoramio.jpg.',
  rows: SANAGOCHI_FACILITIES,
  expectedGeo: SANAGOCHI_EXPECTED_GEO_COUNT,
  expectedRows: SANAGOCHI_EXPECTED_ROW_COUNT,
  travelDining: SANAGOCHI_TRAVEL_DINING,
  travelStay: SANAGOCHI_TRAVEL_STAY,
  travelShopping: SANAGOCHI_TRAVEL_SHOPPING,
  travelCommerce: SANAGOCHI_TRAVEL_COMMERCE,
  travelAll: SANAGOCHI_TRAVEL_ALL,
  coverageJa:
    '佐那河内村（JIS 36321）69件（pack67+Commons EXTRA2）。緊急避難場所19、AED15、避難所13、文化財6、観光6、Wi-Fi4、保育3、公共施設1、病院1、介護1。GTFS停留所は0件（未掲載）。公式座標19件。',
  coverageEn:
    'Sanagochi Village (JIS 36321), 69 rows (pack67+Commons EXTRA2). Emergency sites 19, AED 15, shelter 13, cultural property 6, tourism 6, Wi-Fi 4, childcare 3, public facility 1, hospital 1, care 1. GTFS stops: 0, unpublished. Official coordinates: 19.',
  mapLabelJa: '佐那河内村の公式座標19件',
  mapLabelEn: '19 official coordinates in Sanagochi Village',
  mapCitePackJa: '点は凍結パック+Commons EXTRAの公式座標19件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 19 official coordinates from frozen pack + Commons EXTRA (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「村公式サイト掲載情報」は村・観光ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A village-site listing is a fact from vill.sanagochi.lg.jp, not under that license.',
  licenseSiteJa: '村公式サイト掲載情報',
  licenseSiteEn: 'Village-site listing'
};



export const NAKA_LOOKUP: LookupTown = {
  slug: 'naka',
  prefectureSlug: 'tokushima',
  jis: NAKA.jis,
  nameJa: NAKA.nameJa,
  nameEn: NAKA.nameEn,
  heroPhoto: NAKA_PLACE_PHOTO,
  photoCiteJa:
    '写真は高の瀬峡。akiakane、2011、CC BY 3.0。File:高の瀬峡_-_panoramio_-_akiakane.jpg。',
  photoCiteEn:
    'Photo: Kōnosekyō gorge. akiakane, 2011, CC BY 3.0. File:高の瀬峡_-_panoramio_-_akiakane.jpg.',
  rows: NAKA_FACILITIES,
  expectedGeo: NAKA_EXPECTED_GEO_COUNT,
  expectedRows: NAKA_EXPECTED_ROW_COUNT,
  travelDining: NAKA_TRAVEL_DINING,
  travelStay: NAKA_TRAVEL_STAY,
  travelShopping: NAKA_TRAVEL_SHOPPING,
  travelCommerce: NAKA_TRAVEL_COMMERCE,
  travelAll: NAKA_TRAVEL_ALL,
  coverageJa:
    '那賀町（JIS 36368）357件（pack356+Commons EXTRA1）。GTFS停留所99、避難所66、公共施設62、AED46、緊急避難場所29、文化財19、観光12、病院9、介護9、保育6。Wi-Fiは0件（未掲載）。公式座標111件。',
  coverageEn:
    'Naka Town (JIS 36368), 357 rows (pack356+Commons EXTRA1). GTFS stops 99, shelter 66, public facility 62, AED 46, emergency sites 29, cultural property 19, tourism 12, hospital 9, care 9, childcare 6. Wi-Fi: 0, unpublished. Official coordinates: 111.',
  mapLabelJa: '那賀町の公式座標111件',
  mapLabelEn: '111 official coordinates in Naka Town',
  mapCitePackJa: '点は凍結パック+Commons EXTRAの公式座標111件（accessed 2026-08-25）。',
  mapCitePackEn: 'Points: 111 official coordinates from frozen pack + Commons EXTRA (accessed 2026-08-25).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町・観光ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.tokushima-naka.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};



export const MINAMI_LOOKUP: LookupTown = {
  slug: 'minami',
  prefectureSlug: 'tokushima',
  jis: MINAMI.jis,
  nameJa: MINAMI.nameJa,
  nameEn: MINAMI.nameEn,
  heroPhoto: MINAMI_PLACE_PHOTO,
  photoCiteJa:
    '写真は薬王寺瑜祇塔。Naokijp、2019-07-15、CC BY-SA 4.0。File:Yakuo-ji,_Yugi_Tower_01.jpg。',
  photoCiteEn:
    'Photo: Yugi Tower at Yakuo-ji. Naokijp, 15 July 2019, CC BY-SA 4.0. File:Yakuo-ji,_Yugi_Tower_01.jpg.',
  rows: MINAMI_FACILITIES,
  expectedGeo: MINAMI_EXPECTED_GEO_COUNT,
  expectedRows: MINAMI_EXPECTED_ROW_COUNT,
  travelDining: MINAMI_TRAVEL_DINING,
  travelStay: MINAMI_TRAVEL_STAY,
  travelShopping: MINAMI_TRAVEL_SHOPPING,
  travelCommerce: MINAMI_TRAVEL_COMMERCE,
  travelAll: MINAMI_TRAVEL_ALL,
  coverageJa:
    '美波町（JIS 36387）宿泊5・飲食42・観光5・買物1（出典写真がある施設のみ）＋オープンデータパック。温泉・体験・商業0。',
  coverageEn:
    'Minami Town (JIS 36387), 5 stay + 42 dining + 5 tourism + 1 shopping with sourced photos, plus open-data pack. Onsen, experience, commerce: 0.',
  mapLabelJa: '美波町の公式座標212件',
  mapLabelEn: '212 official coordinates in Minami Town',
  mapCitePackJa: '点は凍結パックの公式座標212件（accessed 2026-08-27）。',
  mapCitePackEn: 'Points: 212 official coordinates from the frozen pack (accessed 2026-08-27).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町・観光ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.minami.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};




export const KAIYO_LOOKUP: LookupTown = {
  slug: 'kaiyo',
  prefectureSlug: 'tokushima',
  jis: KAIYO.jis,
  nameJa: KAIYO.nameJa,
  nameEn: KAIYO.nameEn,
  heroPhoto: KAIYO_PLACE_PHOTO,
  photoCiteJa: '写真は漁火の森公園。akiakane、2011-12-27、CC BY 3.0。File:漁火の森公園_遊歩道より_-_panoramio.jpg。',
  photoCiteEn: 'Photo: Isarino-mori Park. akiakane, 27 Dec 2011, CC BY 3.0. File:漁火の森公園_遊歩道より_-_panoramio.jpg.',
  rows: KAIYO_FACILITIES,
  expectedGeo: KAIYO_EXPECTED_GEO_COUNT,
  expectedRows: KAIYO_EXPECTED_ROW_COUNT,
  travelDining: KAIYO_TRAVEL_DINING,
  travelStay: KAIYO_TRAVEL_STAY,
  travelShopping: KAIYO_TRAVEL_SHOPPING,
  travelCommerce: KAIYO_TRAVEL_COMMERCE,
  travelAll: KAIYO_TRAVEL_ALL,
  coverageJa:
    '海陽町（JIS 36388）宿泊10・飲食19・観光3・買物1（出典写真がある施設のみ）＋オープンデータパック。温泉・体験・商業0。',
  coverageEn:
    'Kaiyo Town (JIS 36388), 10 stay + 19 dining + 3 tourism + 1 shopping with sourced photos, plus open-data pack. Onsen, experience, commerce: 0.',
  mapLabelJa: '海陽町の公式座標154件',
  mapLabelEn: '154 official coordinates in Kaiyo Town',
  mapCitePackJa: '点は凍結パックの公式座標154件（accessed 2026-08-27）。',
  mapCitePackEn: 'Points: 154 official coordinates from the frozen pack (accessed 2026-08-27).',
  licenseNoteJa: '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町・観光ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.kaiyo.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const AIZUMI_LOOKUP: LookupTown = {
  slug: 'aizumi',
  prefectureSlug: 'tokushima',
  jis: AIZUMI.jis,
  nameJa: AIZUMI.nameJa,
  nameEn: AIZUMI.nameEn,
  heroPhoto: AIZUMI_PLACE_PHOTO,
  photoCiteJa:
    '写真は正法寺川公園。Sorrysorry、2022-07-01、CC0。File:正法寺川公園.jpeg。',
  photoCiteEn:
    'Photo: Shōbōji River Park. Sorrysorry, 1 Jul 2022, CC0. File:正法寺川公園.jpeg.',
  rows: AIZUMI_FACILITIES,
  expectedGeo: AIZUMI_EXPECTED_GEO_COUNT,
  expectedRows: AIZUMI_EXPECTED_ROW_COUNT,
  travelDining: AIZUMI_TRAVEL_DINING,
  travelStay: AIZUMI_TRAVEL_STAY,
  travelShopping: AIZUMI_TRAVEL_SHOPPING,
  travelCommerce: AIZUMI_TRAVEL_COMMERCE,
  travelAll: AIZUMI_TRAVEL_ALL,
  coverageJa:
    '藍住町（JIS 36403）宿泊1・飲食16・観光7（出典写真がある施設のみ）＋オープンデータパック225件。温泉・体験・買物・商業0。AED・Wi-Fi・GTFS停留所は0件（未掲載）。',
  coverageEn:
    'Aizumi Town (JIS 36403), 1 stay + 16 dining + 7 tourism with sourced photos, plus open-data pack 225 rows. Onsen, experience, shopping, commerce: 0. AED / Wi-Fi / GTFS stops: 0, unpublished.',
  mapLabelJa: '藍住町の公式座標36件',
  mapLabelEn: '36 official coordinates in Aizumi Town',
  mapCitePackJa: '点は凍結パックの公式座標36件（accessed 2026-08-27）。',
  mapCitePackEn: 'Points: 36 official coordinates from the frozen pack (accessed 2026-08-27).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町・観光ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.aizumi.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const MUGI_LOOKUP: LookupTown = {
  slug: 'mugi',
  prefectureSlug: 'tokushima',
  jis: MUGI.jis,
  nameJa: MUGI.nameJa,
  nameEn: MUGI.nameEn,
  heroPhoto: MUGI_PLACE_PHOTO,
  photoCiteJa:
    '写真はモラスコむぎ。ブレイズマン、2022-05-24、CC BY-SA 4.0。File:Morasukomugi20220524_1.jpg。',
  photoCiteEn:
    'Photo: Morasco Mugi. Blazeman, 24 May 2022, CC BY-SA 4.0. File:Morasukomugi20220524_1.jpg.',
  rows: MUGI_FACILITIES,
  expectedGeo: MUGI_EXPECTED_GEO_COUNT,
  expectedRows: MUGI_EXPECTED_ROW_COUNT,
  travelDining: MUGI_TRAVEL_DINING,
  travelStay: MUGI_TRAVEL_STAY,
  travelShopping: MUGI_TRAVEL_SHOPPING,
  travelCommerce: MUGI_TRAVEL_COMMERCE,
  travelAll: MUGI_TRAVEL_ALL,
  coverageJa:
    '牟岐町（JIS 36383）宿泊2・飲食19・観光3（出典写真がある施設のみ）＋オープンデータパック。温泉・体験・買物・商業0。',
  coverageEn:
    'Mugi Town (JIS 36383), 2 stay + 19 dining + 3 tourism with sourced photos, plus open-data pack. Onsen, experience, shopping, commerce: 0.',
  mapLabelJa: '牟岐町の公式座標122件',
  mapLabelEn: '122 official coordinates in Mugi Town',
  mapCitePackJa: '点は凍結パックの公式座標122件（accessed 2026-08-27）。',
  mapCitePackEn: 'Points: 122 official coordinates from the frozen pack (accessed 2026-08-27).',
  licenseNoteJa:
    '行のライセンスは二つ。CC BY 4.0 は徳島県 Our Open Data の利用規約。「町公式サイト掲載情報」は町・観光ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Licenses split by row. CC BY 4.0 follows Tokushima Our Open Data. A town-site listing is a fact from town.tokushima-mugi.lg.jp, not under that license.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const KOMATSUSHIMA_LOOKUP: LookupTown = {
  slug: 'komatsushima',
  prefectureSlug: 'tokushima',
  jis: KOMATSUSHIMA.jis,
  nameJa: KOMATSUSHIMA.nameJa,
  nameEn: KOMATSUSHIMA.nameEn,
  heroPhoto: KOMATSUSHIMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は小松島市和田島町の大手海岸。Mti、2010-08-14、CC BY-SA 3.0。File:Ote beach 2010-8-14 No,2.JPG。',
  photoCiteEn:
    'Photo: Ōte Beach, Wadajima, Komatsushima. Mti, 14 Aug 2010, CC BY-SA 3.0. File:Ote beach 2010-8-14 No,2.JPG.',
  rows: KOMATSUSHIMA_FACILITIES,
  expectedGeo: KOMATSUSHIMA_EXPECTED_GEO_COUNT,
  expectedRows: KOMATSUSHIMA_EXPECTED_ROW_COUNT,
  travelDining: KOMATSUSHIMA_TRAVEL_DINING,
  travelStay: KOMATSUSHIMA_TRAVEL_STAY,
  travelShopping: KOMATSUSHIMA_TRAVEL_SHOPPING,
  travelCommerce: KOMATSUSHIMA_TRAVEL_COMMERCE,
  travelAll: KOMATSUSHIMA_TRAVEL_ALL,
  coverageJa:
    '小松島市（JIS 36203）観光5・宿泊3・飲食25（出典写真がある施設のみ）。オープンデータ凍結パックは未掲載。温泉・体験・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。',
  coverageEn:
    'Komatsushima City (JIS 36203), 5 tourism + 3 stay + 25 dining with sourced photos. No frozen open-data pack. Onsen, experience, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished.',
  mapLabelJa: '小松島市の出典座標4件',
  mapLabelEn: '4 sourced coordinates in Komatsushima City',
  mapCitePackJa: '点は市・観光ページ掲載施設のWikipedia等出典座標4件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 4 sourced coordinates for city/tourism-page facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.komatsushima.lg.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const ANAN_LOOKUP: LookupTown = {
  slug: 'anan',
  prefectureSlug: 'tokushima',
  jis: ANAN.jis,
  nameJa: ANAN.nameJa,
  nameEn: ANAN.nameEn,
  heroPhoto: ANAN_PLACE_PHOTO,
  photoCiteJa:
    '写真は蒲生田岬灯台。切干大根、2018-09-11、CC BY-SA 4.0。File:Kamodamisaki Lighthouse.jpg。',
  photoCiteEn:
    'Photo: Kamoda Cape Lighthouse. Kiriboshi-daikon, 11 Sep 2018, CC BY-SA 4.0. File:Kamodamisaki Lighthouse.jpg.',
  rows: ANAN_FACILITIES,
  expectedGeo: ANAN_EXPECTED_GEO_COUNT,
  expectedRows: ANAN_EXPECTED_ROW_COUNT,
  travelDining: ANAN_TRAVEL_DINING,
  travelStay: ANAN_TRAVEL_STAY,
  travelShopping: ANAN_TRAVEL_SHOPPING,
  travelCommerce: ANAN_TRAVEL_COMMERCE,
  travelAll: ANAN_TRAVEL_ALL,
  coverageJa:
    '阿南市（JIS 36204）観光3・宿泊7・飲食16（出典写真がある施設のみ）。オープンデータ凍結パックは未掲載。温泉・体験・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。',
  coverageEn:
    'Anan City (JIS 36204), 3 tourism + 7 stay + 16 dining with sourced photos. No frozen open-data pack. Onsen, experience, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished.',
  mapLabelJa: '阿南市の出典座標3件',
  mapLabelEn: '3 sourced coordinates in Anan City',
  mapCitePackJa: '点は市・観光ページ掲載施設のWikipedia座標3件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 3 Wikipedia coordinates for city/tourism-page facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.anan.tokushima.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};



export const TAKAMATSU_LOOKUP: LookupTown = {
  slug: 'takamatsu',
  prefectureSlug: 'kagawa',
  jis: TAKAMATSU.jis,
  nameJa: TAKAMATSU.nameJa,
  nameEn: TAKAMATSU.nameEn,
  heroPhoto: TAKAMATSU_PLACE_PHOTO,
  photoCiteJa:
    '写真は栗林公園・観月橋。ブルーノ・プラス、2023-04、CC BY-SA 4.0。File:Ritsurin garden kangetsu bridge.jpg。',
  photoCiteEn:
    'Photo: Kangetsu Bridge at Ritsurin Garden. Bruno Plus, Apr 2023, CC BY-SA 4.0. File:Ritsurin garden kangetsu bridge.jpg.',
  rows: TAKAMATSU_FACILITIES,
  expectedGeo: TAKAMATSU_EXPECTED_GEO_COUNT,
  expectedRows: TAKAMATSU_EXPECTED_ROW_COUNT,
  travelDining: TAKAMATSU_TRAVEL_DINING,
  travelStay: TAKAMATSU_TRAVEL_STAY,
  travelShopping: TAKAMATSU_TRAVEL_SHOPPING,
  travelCommerce: TAKAMATSU_TRAVEL_COMMERCE,
  travelAll: TAKAMATSU_TRAVEL_ALL,
  coverageJa:
    '高松市（JIS 37201）観光5・宿泊4・飲食14・体験3（出典写真がある施設のみ）。オープンデータ凍結パックは未掲載。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。香川県最初のLIVEハブ。',
  coverageEn:
    'Takamatsu City (JIS 37201), 5 tourism + 4 stay + 14 dining + 3 experience with sourced photos. No frozen open-data pack. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. First LIVE Kagawa hub.',
  mapLabelJa: '高松市の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Takamatsu City',
  mapCitePackJa: '点は市・観光ページ掲載施設のWikipedia等出典座標8件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for city/tourism-page facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.takamatsu.kagawa.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};



export const KOTOHIRA_LOOKUP: LookupTown = {
  slug: 'kotohira',
  prefectureSlug: 'kagawa',
  jis: KOTOHIRA.jis,
  nameJa: KOTOHIRA.nameJa,
  nameEn: KOTOHIRA.nameEn,
  heroPhoto: KOTOHIRA_PLACE_PHOTO,
  photoCiteJa:
    '写真は金刀比羅宮。Raita Futo、2020-09-19、CC BY 2.0。File:Kotohira-gu (52005367223).jpg。',
  photoCiteEn:
    'Photo: Kotohira-gū. Raita Futo, 19 Sep 2020, CC BY 2.0. File:Kotohira-gu (52005367223).jpg.',
  rows: KOTOHIRA_FACILITIES,
  expectedGeo: KOTOHIRA_EXPECTED_GEO_COUNT,
  expectedRows: KOTOHIRA_EXPECTED_ROW_COUNT,
  travelDining: KOTOHIRA_TRAVEL_DINING,
  travelStay: KOTOHIRA_TRAVEL_STAY,
  travelShopping: KOTOHIRA_TRAVEL_SHOPPING,
  travelCommerce: KOTOHIRA_TRAVEL_COMMERCE,
  travelAll: KOTOHIRA_TRAVEL_ALL,
  coverageJa:
    '琴平町（JIS 37403）観光5・宿泊2・飲食12・温泉2・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。オープンデータ凍結パックは未掲載。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。香川県2つ目のLIVEハブ。',
  coverageEn:
    'Kotohira Town (JIS 37403), 5 tourism + 2 stay + 12 dining + 2 onsen + 1 experience with sourced photos (onsen uses distinct bath keys, not stay room frames). No frozen open-data pack. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. Second LIVE Kagawa hub.',
  mapLabelJa: '琴平町の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Kotohira Town',
  mapCitePackJa: '点は町・神社・公式ページ掲載施設のWikipedia等出典座標8件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for town/shrine/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは町公式サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are town-site listings, facts from town.kotohira.kagawa.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const MARUGAME_LOOKUP: LookupTown = {
  slug: 'marugame',
  prefectureSlug: 'kagawa',
  jis: MARUGAME.jis,
  nameJa: MARUGAME.nameJa,
  nameEn: MARUGAME.nameEn,
  heroPhoto: MARUGAME_PLACE_PHOTO,
  photoCiteJa:
    '写真は丸亀城天守。Naokijp、CC BY-SA 4.0。File:Marugame Castle, Tenshu 002.jpg。',
  photoCiteEn:
    'Photo: Marugame Castle keep. Naokijp, CC BY-SA 4.0. File:Marugame Castle, Tenshu 002.jpg.',
  rows: MARUGAME_FACILITIES,
  expectedGeo: MARUGAME_EXPECTED_GEO_COUNT,
  expectedRows: MARUGAME_EXPECTED_ROW_COUNT,
  travelDining: MARUGAME_TRAVEL_DINING,
  travelStay: MARUGAME_TRAVEL_STAY,
  travelShopping: MARUGAME_TRAVEL_SHOPPING,
  travelCommerce: MARUGAME_TRAVEL_COMMERCE,
  travelAll: MARUGAME_TRAVEL_ALL,
  coverageJa:
    '丸亀市（JIS 37202）観光6・宿泊2・飲食14・温泉2・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。オープンデータ凍結パックは未掲載。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。香川県3つ目のLIVEハブ。',
  coverageEn:
    'Marugame City (JIS 37202), 6 tourism + 2 stay + 14 dining + 2 onsen + 1 experience with sourced photos (onsen uses distinct bath keys). No frozen open-data pack. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. Third LIVE Kagawa hub.',
  mapLabelJa: '丸亀市の出典座標9件',
  mapLabelEn: '9 sourced coordinates in Marugame City',
  mapCitePackJa: '点は市・城・公式ページ掲載施設のWikipedia等出典座標9件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 9 sourced coordinates for city/castle/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.marugame.lg.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};




export const KANONJI_LOOKUP: LookupTown = {
  slug: 'kanonji',
  prefectureSlug: 'kagawa',
  jis: KANONJI.jis,
  nameJa: KANONJI.nameJa,
  nameEn: KANONJI.nameEn,
  heroPhoto: KANONJI_PLACE_PHOTO,
  photoCiteJa:
    '写真は銭形砂絵「寛永通宝」ライトアップ。Naokijp、CC BY-SA 4.0。File:Kotohiki Park, Zenigata sunae 001.jpg。',
  photoCiteEn:
    'Photo: Zenigata Sunae lit at night. Naokijp, CC BY-SA 4.0. File:Kotohiki Park, Zenigata sunae 001.jpg.',
  rows: KANONJI_FACILITIES,
  expectedGeo: KANONJI_EXPECTED_GEO_COUNT,
  expectedRows: KANONJI_EXPECTED_ROW_COUNT,
  travelDining: KANONJI_TRAVEL_DINING,
  travelStay: KANONJI_TRAVEL_STAY,
  travelShopping: KANONJI_TRAVEL_SHOPPING,
  travelCommerce: KANONJI_TRAVEL_COMMERCE,
  travelAll: KANONJI_TRAVEL_ALL,
  coverageJa:
    '観音寺市（JIS 37205）観光9・宿泊2・飲食14・温泉2・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。オープンデータ凍結パックは未掲載。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。香川県4つ目のLIVEハブ。',
  coverageEn:
    'Kanonji City (JIS 37205), 9 tourism + 2 stay + 14 dining + 2 onsen + 1 experience with sourced photos (onsen uses distinct bath keys). No frozen open-data pack. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. Fourth LIVE Kagawa hub.',
  mapLabelJa: '観音寺市の出典座標12件',
  mapLabelEn: '12 sourced coordinates in Kanonji City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標12件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 12 sourced coordinates for city/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.kanonji.kagawa.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};



export const SAKAIDE_LOOKUP: LookupTown = {
  slug: 'sakaide',
  prefectureSlug: 'kagawa',
  jis: SAKAIDE.jis,
  nameJa: SAKAIDE.nameJa,
  nameEn: SAKAIDE.nameEn,
  heroPhoto: SAKAIDE_PLACE_PHOTO,
  photoCiteJa:
    '写真は瀬戸大橋ライトアップ。＃矛川盾山、CC BY-SA 4.0。File:瀬戸大橋（Seto Ohashi）.jpg。',
  photoCiteEn:
    'Photo: Great Seto Bridge lit at dusk. ＃矛川盾山, CC BY-SA 4.0. File:瀬戸大橋（Seto Ohashi）.jpg.',
  rows: SAKAIDE_FACILITIES,
  expectedGeo: SAKAIDE_EXPECTED_GEO_COUNT,
  expectedRows: SAKAIDE_EXPECTED_ROW_COUNT,
  travelDining: SAKAIDE_TRAVEL_DINING,
  travelStay: SAKAIDE_TRAVEL_STAY,
  travelShopping: SAKAIDE_TRAVEL_SHOPPING,
  travelCommerce: SAKAIDE_TRAVEL_COMMERCE,
  travelAll: SAKAIDE_TRAVEL_ALL,
  coverageJa:
    '坂出市（JIS 37203）観光9・宿泊3・飲食14・温泉2・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。オープンデータ凍結パックは未掲載。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。香川県5つ目のLIVEハブ。',
  coverageEn:
    'Sakaide City (JIS 37203), 9 tourism + 3 stay + 14 dining + 2 onsen + 1 experience with sourced photos (onsen uses distinct bath keys). No frozen open-data pack. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. Fifth LIVE Kagawa hub.',
  mapLabelJa: '坂出市の出典座標12件',
  mapLabelEn: '12 sourced coordinates in Sakaide City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標12件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 12 sourced coordinates for city/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.sakaide.lg.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};



export const NAOSHIMA_LOOKUP: LookupTown = {
  slug: 'naoshima',
  prefectureSlug: 'kagawa',
  jis: NAOSHIMA.jis,
  nameJa: NAOSHIMA.nameJa,
  nameEn: NAOSHIMA.nameEn,
  heroPhoto: NAOSHIMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は草間彌生「南瓜」。ブルーノ・プラハ、CC BY 4.0。File:Yellow Pumpkin Monument.jpg。',
  photoCiteEn:
    'Photo: Yayoi Kusama Yellow Pumpkin. Bruno Praha, CC BY 4.0. File:Yellow Pumpkin Monument.jpg.',
  rows: NAOSHIMA_FACILITIES,
  expectedGeo: NAOSHIMA_EXPECTED_GEO_COUNT,
  expectedRows: NAOSHIMA_EXPECTED_ROW_COUNT,
  travelDining: NAOSHIMA_TRAVEL_DINING,
  travelStay: NAOSHIMA_TRAVEL_STAY,
  travelShopping: NAOSHIMA_TRAVEL_SHOPPING,
  travelCommerce: NAOSHIMA_TRAVEL_COMMERCE,
  travelAll: NAOSHIMA_TRAVEL_ALL,
  coverageJa:
    '直島町（JIS 37364）観光9・宿泊2・飲食14・温泉1・体験1（出典写真がある施設のみ。温泉は貸切風呂キーで客室と分離）。オープンデータ凍結パックは未掲載。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。香川県6つ目のLIVEハブ。',
  coverageEn:
    'Naoshima Town (JIS 37364), 9 tourism + 2 stay + 14 dining + 1 onsen + 1 experience with sourced photos (onsen uses distinct bath key). No frozen open-data pack. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. Sixth LIVE Kagawa hub.',
  mapLabelJa: '直島町の出典座標11件',
  mapLabelEn: '11 sourced coordinates in Naoshima Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia等出典座標11件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 11 sourced coordinates for town/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are town-site listings, facts from town.naoshima.lg.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const SHODOSHIMA_LOOKUP: LookupTown = {
  slug: 'shodoshima',
  prefectureSlug: 'kagawa',
  jis: SHODOSHIMA.jis,
  nameJa: SHODOSHIMA.nameJa,
  nameEn: SHODOSHIMA.nameEn,
  heroPhoto: SHODOSHIMA_PLACE_PHOTO,
  photoCiteJa:
    '写真は道の駅 小豆島オリーブ公園のギリシャ風車。663highland、CC BY 2.5。File:Shodoshima Olive Park Shodo Island Japan21bs3.jpg。',
  photoCiteEn:
    'Photo: Greek windmill at Shodoshima Olive Park. 663highland, CC BY 2.5. File:Shodoshima Olive Park Shodo Island Japan21bs3.jpg.',
  rows: SHODOSHIMA_FACILITIES,
  expectedGeo: SHODOSHIMA_EXPECTED_GEO_COUNT,
  expectedRows: SHODOSHIMA_EXPECTED_ROW_COUNT,
  travelDining: SHODOSHIMA_TRAVEL_DINING,
  travelStay: SHODOSHIMA_TRAVEL_STAY,
  travelShopping: SHODOSHIMA_TRAVEL_SHOPPING,
  travelCommerce: SHODOSHIMA_TRAVEL_COMMERCE,
  travelAll: SHODOSHIMA_TRAVEL_ALL,
  coverageJa:
    '小豆島町（JIS 37324）観光6・宿泊2・飲食16・温泉2・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。土庄町のエンジェルロード・銚子渓等は含めない。オープンデータ凍結パックは未掲載。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。香川県7つ目のLIVEハブ。',
  coverageEn:
    'Shodoshima Town (JIS 37324), 6 tourism + 2 stay + 16 dining + 2 onsen + 1 experience with sourced photos (onsen uses distinct bath keys). Tonosho-only landmarks excluded. No frozen open-data pack. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. Seventh LIVE Kagawa hub.',
  mapLabelJa: '小豆島町の出典座標9件',
  mapLabelEn: '9 sourced coordinates in Shodoshima Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia等出典座標9件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 9 sourced coordinates for town/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are town-site listings, facts from town.shodoshima.lg.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};





export const SANUKI_LOOKUP: LookupTown = {
  slug: 'sanuki',
  prefectureSlug: 'kagawa',
  jis: SANUKI.jis,
  nameJa: SANUKI.nameJa,
  nameEn: SANUKI.nameEn,
  heroPhoto: SANUKI_PLACE_PHOTO,
  photoCiteJa:
    '写真は志度寺。Bakkai、CC BY-SA 3.0。File:Shido-ji temple.jpg。',
  photoCiteEn:
    'Photo: Shido-ji. Bakkai, CC BY-SA 3.0. File:Shido-ji temple.jpg.',
  rows: SANUKI_FACILITIES,
  expectedGeo: SANUKI_EXPECTED_GEO_COUNT,
  expectedRows: SANUKI_EXPECTED_ROW_COUNT,
  travelDining: SANUKI_TRAVEL_DINING,
  travelStay: SANUKI_TRAVEL_STAY,
  travelShopping: SANUKI_TRAVEL_SHOPPING,
  travelCommerce: SANUKI_TRAVEL_COMMERCE,
  travelAll: SANUKI_TRAVEL_ALL,
  coverageJa:
    'さぬき市（JIS 37206）観光6・宿泊2・飲食16・温泉1・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。香川県12つ目のLIVEハブ。',
  coverageEn:
    'Sanuki (JIS 37206), 6 tourism + 2 stay + 16 dining + 1 onsen + 1 experience with sourced photos (onsen uses distinct bath key). Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Twelfth LIVE Kagawa hub.',
  mapLabelJa: 'さぬき市の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Sanuki',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標8件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for city/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.sanuki.lg.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const HIGASHIKAGAWA_LOOKUP: LookupTown = {
  slug: 'higashikagawa',
  prefectureSlug: 'kagawa',
  jis: HIGASHIKAGAWA.jis,
  nameJa: HIGASHIKAGAWA.nameJa,
  nameEn: HIGASHIKAGAWA.nameEn,
  heroPhoto: HIGASHIKAGAWA_PLACE_PHOTO,
  photoCiteJa:
    '写真は引田城跡。HikaruKinkakuji、CC BY-SA 4.0。File:Hiketa-Castle.jpg。',
  photoCiteEn:
    'Photo: Hiketa Castle ruins. HikaruKinkakuji, CC BY-SA 4.0. File:Hiketa-Castle.jpg.',
  rows: HIGASHIKAGAWA_FACILITIES,
  expectedGeo: HIGASHIKAGAWA_EXPECTED_GEO_COUNT,
  expectedRows: HIGASHIKAGAWA_EXPECTED_ROW_COUNT,
  travelDining: HIGASHIKAGAWA_TRAVEL_DINING,
  travelStay: HIGASHIKAGAWA_TRAVEL_STAY,
  travelShopping: HIGASHIKAGAWA_TRAVEL_SHOPPING,
  travelCommerce: HIGASHIKAGAWA_TRAVEL_COMMERCE,
  travelAll: HIGASHIKAGAWA_TRAVEL_ALL,
  coverageJa:
    '東かがわ市（JIS 37207）観光6・宿泊2・飲食16・温泉1・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。香川県13つ目のLIVEハブ。',
  coverageEn:
    'Higashikagawa (JIS 37207), 6 tourism + 2 stay + 16 dining + 1 onsen + 1 experience with sourced photos (onsen uses distinct bath key). Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Thirteenth LIVE Kagawa hub.',
  mapLabelJa: '東かがわ市の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Higashikagawa',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標8件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for city/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from higashikagawa.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const MIKI_LOOKUP: LookupTown = {
  slug: 'miki',
  prefectureSlug: 'kagawa',
  jis: MIKI.jis,
  nameJa: MIKI.nameJa,
  nameEn: MIKI.nameEn,
  heroPhoto: MIKI_PLACE_PHOTO,
  photoCiteJa:
    '写真は浄土寺の不動明王像。Dokudami、CC BY-SA 3.0。File:Zyoudoziɤ.jpg。',
  photoCiteEn:
    'Photo: Jodo-ji Fudo statue. Dokudami, CC BY-SA 3.0. File:Zyoudoziɤ.jpg.',
  rows: MIKI_FACILITIES,
  expectedGeo: MIKI_EXPECTED_GEO_COUNT,
  expectedRows: MIKI_EXPECTED_ROW_COUNT,
  travelDining: MIKI_TRAVEL_DINING,
  travelStay: MIKI_TRAVEL_STAY,
  travelShopping: MIKI_TRAVEL_SHOPPING,
  travelCommerce: MIKI_TRAVEL_COMMERCE,
  travelAll: MIKI_TRAVEL_ALL,
  coverageJa:
    '三木町（JIS 37341）観光8・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載。AZはユニットバスのみのため温泉0）。オープンデータ凍結パックは未掲載。香川県14つ目のLIVEハブ。',
  coverageEn:
    'Miki (JIS 37341), 8 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished (AZ unit bath only → onsen 0). No frozen open-data pack. Fourteenth LIVE Kagawa hub.',
  mapLabelJa: '三木町の出典座標9件',
  mapLabelEn: '9 sourced coordinates in Miki',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia等出典座標9件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 9 sourced coordinates for town/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are town-site listings, facts from town.miki.lg.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

export const AYAGAWA_LOOKUP: LookupTown = {
  slug: 'ayagawa',
  prefectureSlug: 'kagawa',
  jis: AYAGAWA.jis,
  nameJa: AYAGAWA.nameJa,
  nameEn: AYAGAWA.nameEn,
  heroPhoto: AYAGAWA_PLACE_PHOTO,
  photoCiteJa: '写真は滝宮天満宮。Bakkai、CC BY 3.0。File:Takinomiya tenmangu.jpg。',
  photoCiteEn: 'Photo: Takinomiya Tenmangu. Bakkai, CC BY 3.0. File:Takinomiya tenmangu.jpg.',
  rows: AYAGAWA_FACILITIES,
  expectedGeo: AYAGAWA_EXPECTED_GEO_COUNT,
  expectedRows: AYAGAWA_EXPECTED_ROW_COUNT,
  travelDining: AYAGAWA_TRAVEL_DINING,
  travelStay: AYAGAWA_TRAVEL_STAY,
  travelShopping: AYAGAWA_TRAVEL_SHOPPING,
  travelCommerce: AYAGAWA_TRAVEL_COMMERCE,
  travelAll: AYAGAWA_TRAVEL_ALL,
  coverageJa: '綾川町（JIS 37387）観光6・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業は0件（未掲載）。オープンデータ凍結パックは未掲載。香川県15つ目のLIVEハブ。',
  coverageEn: 'Ayagawa (JIS 37387), 6 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce: 0. No frozen open-data pack. Fifteenth LIVE Kagawa hub.',
  mapLabelJa: '綾川町の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Ayagawa',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia等出典座標7件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for town/official facilities (accessed 2026-09-07).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.ayagawa.lg.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

export const TADOTSU_LOOKUP: LookupTown = {
  slug: 'tadotsu',
  prefectureSlug: 'kagawa',
  jis: TADOTSU.jis,
  nameJa: TADOTSU.nameJa,
  nameEn: TADOTSU.nameEn,
  heroPhoto: TADOTSU_PLACE_PHOTO,
  photoCiteJa: '写真は海岸寺。Dokudami、CC BY-SA 4.0。File:Kaiganji20220414 1.jpg。',
  photoCiteEn: 'Photo: Kaiganji. Dokudami, CC BY-SA 4.0. File:Kaiganji20220414 1.jpg.',
  rows: TADOTSU_FACILITIES,
  expectedGeo: TADOTSU_EXPECTED_GEO_COUNT,
  expectedRows: TADOTSU_EXPECTED_ROW_COUNT,
  travelDining: TADOTSU_TRAVEL_DINING,
  travelStay: TADOTSU_TRAVEL_STAY,
  travelShopping: TADOTSU_TRAVEL_SHOPPING,
  travelCommerce: TADOTSU_TRAVEL_COMMERCE,
  travelAll: TADOTSU_TRAVEL_ALL,
  coverageJa: '多度津町（JIS 37404）観光3・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業は0件（未掲載）。オープンデータ凍結パックは未掲載。香川県16つ目のLIVEハブ。',
  coverageEn: 'Tadotsu (JIS 37404), 3 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce: 0. No frozen open-data pack. Sixteenth LIVE Kagawa hub.',
  mapLabelJa: '多度津町の出典座標4件',
  mapLabelEn: '4 sourced coordinates in Tadotsu',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia等出典座標4件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 4 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.tadotsu.lg.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

export const MANNO_LOOKUP: LookupTown = {
  slug: 'manno',
  prefectureSlug: 'kagawa',
  jis: MANNO.jis,
  nameJa: MANNO.nameJa,
  nameEn: MANNO.nameEn,
  heroPhoto: MANNO_PLACE_PHOTO,
  photoCiteJa: '写真は国営讃岐まんのう公園。本人、Public domain。File:Sanuki-mannou-park.JPG。',
  photoCiteEn: 'Photo: Sanuki Manno National Park. Public domain. File:Sanuki-mannou-park.JPG.',
  rows: MANNO_FACILITIES,
  expectedGeo: MANNO_EXPECTED_GEO_COUNT,
  expectedRows: MANNO_EXPECTED_ROW_COUNT,
  travelDining: MANNO_TRAVEL_DINING,
  travelStay: MANNO_TRAVEL_STAY,
  travelShopping: MANNO_TRAVEL_SHOPPING,
  travelCommerce: MANNO_TRAVEL_COMMERCE,
  travelAll: MANNO_TRAVEL_ALL,
  coverageJa: 'まんのう町（JIS 37406）観光6・宿泊1・飲食16・温泉1・体験1（出典写真がある施設のみ）。買物・商業は0件（未掲載）。オープンデータ凍結パックは未掲載。香川県17つ目のLIVEハブ。',
  coverageEn: 'Manno (JIS 37406), 6 tourism + 1 stay + 16 dining + 1 onsen + 1 experience with sourced photos. Shopping, commerce: 0. No frozen open-data pack. Seventeenth LIVE Kagawa hub.',
  mapLabelJa: 'まんのう町の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Manno',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia等出典座標8件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.manno.lg.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};





export const INO_LOOKUP: LookupTown = {
  slug: 'ino',
  prefectureSlug: 'kochi',
  jis: INO.jis,
  nameJa: INO.nameJa,
  nameEn: INO.nameEn,
  heroPhoto: INO_PLACE_PHOTO,
  photoCiteJa: '写真はにこ淵（仁淀ブルー）。かるちる、CC0。File:Niko_Buchi_deep_water_No.1.jpg。',
  photoCiteEn: 'Photo: Nikobuchi (Niyodo Blue). かるちる, CC0. File:Niko_Buchi_deep_water_No.1.jpg.',
  rows: INO_FACILITIES,
  expectedGeo: INO_EXPECTED_GEO_COUNT,
  expectedRows: INO_EXPECTED_ROW_COUNT,
  travelDining: INO_TRAVEL_DINING,
  travelStay: INO_TRAVEL_STAY,
  travelShopping: INO_TRAVEL_SHOPPING,
  travelCommerce: INO_TRAVEL_COMMERCE,
  travelAll: INO_TRAVEL_ALL,
  coverageJa:
    'いの町（JIS 39386）観光6・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載。客室写真の宿のみで大浴場出典キー無しのため温泉0）。オープンデータ凍結パックは未掲載。高知県5つ目のLIVEハブ。',
  coverageEn:
    'Ino Town (JIS 39386), 6 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished (room-still stay only → onsen 0). No frozen open-data pack. Fifth LIVE Kochi hub.',
  mapLabelJa: 'いの町の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Ino Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons等出典座標7件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are town-site listings, facts from town.ino.kochi.jp / inofan.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const AKI_LOOKUP: LookupTown = {
  slug: 'aki',
  prefectureSlug: 'kochi',
  jis: AKI.jis,
  nameJa: AKI.nameJa,
  nameEn: AKI.nameEn,
  heroPhoto: AKI_PLACE_PHOTO,
  photoCiteJa: '写真は野良時計。Reggaeman、2009-05-31、CC BY-SA 3.0。File:Noradokei_02.JPG。',
  photoCiteEn: 'Photo: Noradokei. Reggaeman, 31 May 2009, CC BY-SA 3.0. File:Noradokei_02.JPG.',
  rows: AKI_FACILITIES,
  expectedGeo: AKI_EXPECTED_GEO_COUNT,
  expectedRows: AKI_EXPECTED_ROW_COUNT,
  travelDining: AKI_TRAVEL_DINING,
  travelStay: AKI_TRAVEL_STAY,
  travelShopping: AKI_TRAVEL_SHOPPING,
  travelCommerce: AKI_TRAVEL_COMMERCE,
  travelAll: AKI_TRAVEL_ALL,
  coverageJa:
    '安芸市（JIS 39203）観光6・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載。客室写真の宿のみで大浴場出典キー無しのため温泉0）。オープンデータ凍結パックは未掲載。高知県6つ目のLIVEハブ。',
  coverageEn:
    'Aki City (JIS 39203), 6 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished (room-still stay only → onsen 0). No frozen open-data pack. Sixth LIVE Kochi hub.',
  mapLabelJa: '安芸市の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Aki City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia/Commons等出典座標7件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.aki.kochi.jp / akikanko.or.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};




export const TOSA_LOOKUP: LookupTown = {
  slug: 'tosa',
  prefectureSlug: 'kochi',
  jis: TOSA.jis,
  nameJa: TOSA.nameJa,
  nameEn: TOSA.nameEn,
  heroPhoto: TOSA_PLACE_PHOTO,
  photoCiteJa: '写真は仁淀川河口大橋。谷本 一郎、2017-09-06、CC BY-SA 4.0。File:仁淀川河口大橋.jpg。',
  photoCiteEn: 'Photo: Niyodo River estuary bridge. Ichiro Tanimoto, 6 Sep 2017, CC BY-SA 4.0. File:仁淀川河口大橋.jpg.',
  rows: TOSA_FACILITIES,
  expectedGeo: TOSA_EXPECTED_GEO_COUNT,
  expectedRows: TOSA_EXPECTED_ROW_COUNT,
  travelDining: TOSA_TRAVEL_DINING,
  travelStay: TOSA_TRAVEL_STAY,
  travelShopping: TOSA_TRAVEL_SHOPPING,
  travelCommerce: TOSA_TRAVEL_COMMERCE,
  travelAll: TOSA_TRAVEL_ALL,
  coverageJa:
    '土佐市（JIS 39205）観光6・宿泊1・飲食16・温泉1・体験1（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県8つ目のLIVEハブ。',
  coverageEn:
    'Tosa City (JIS 39205), 6 tourism + 1 stay + 16 dining + 1 onsen + 1 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Eighth LIVE Kochi hub.',
  mapLabelJa: '土佐市の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Tosa City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia/Commons等出典座標8件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.tosa.lg.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const SUSAKI_LOOKUP: LookupTown = {
  slug: 'susaki',
  prefectureSlug: 'kochi',
  jis: SUSAKI.jis,
  nameJa: SUSAKI.nameJa,
  nameEn: SUSAKI.nameEn,
  heroPhoto: SUSAKI_PLACE_PHOTO,
  photoCiteJa: '写真は横浪自然公園の海岸（横浪黒潮ライン）。Raita Futo、2020-09-22、CC BY 2.0。File:Yokonami_Nature_Park_Coastline_(52004285222).jpg。',
  photoCiteEn: 'Photo: Yokonami Nature Park coastline. Raita Futo, 22 Sep 2020, CC BY 2.0. File:Yokonami_Nature_Park_Coastline_(52004285222).jpg.',
  rows: SUSAKI_FACILITIES,
  expectedGeo: SUSAKI_EXPECTED_GEO_COUNT,
  expectedRows: SUSAKI_EXPECTED_ROW_COUNT,
  travelDining: SUSAKI_TRAVEL_DINING,
  travelStay: SUSAKI_TRAVEL_STAY,
  travelShopping: SUSAKI_TRAVEL_SHOPPING,
  travelCommerce: SUSAKI_TRAVEL_COMMERCE,
  travelAll: SUSAKI_TRAVEL_ALL,
  coverageJa:
    '須崎市（JIS 39206）観光6・宿泊1・飲食16・温泉0・体験1（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県9つ目のLIVEハブ。',
  coverageEn:
    'Susaki City (JIS 39206), 6 tourism + 1 stay + 16 dining + 0 onsen + 1 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Ninth LIVE Kochi hub.',
  mapLabelJa: '須崎市の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Susaki City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia/Commons等出典座標7件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.susaki.lg.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};



export const TOSASHIMIZU_LOOKUP: LookupTown = {
  slug: 'tosashimizu',
  prefectureSlug: 'kochi',
  jis: TOSASHIMIZU.jis,
  nameJa: TOSASHIMIZU.nameJa,
  nameEn: TOSASHIMIZU.nameEn,
  heroPhoto: TOSASHIMIZU_PLACE_PHOTO,
  photoCiteJa: '写真は足摺岬。Reggaeman、2009-06-27、CC BY-SA 3.0。File:Ashizuri_Cape_01.JPG。',
  photoCiteEn: 'Photo: Cape Ashizuri. Reggaeman, 27 Jun 2009, CC BY-SA 3.0. File:Ashizuri_Cape_01.JPG.',
  rows: TOSASHIMIZU_FACILITIES,
  expectedGeo: TOSASHIMIZU_EXPECTED_GEO_COUNT,
  expectedRows: TOSASHIMIZU_EXPECTED_ROW_COUNT,
  travelDining: TOSASHIMIZU_TRAVEL_DINING,
  travelStay: TOSASHIMIZU_TRAVEL_STAY,
  travelShopping: TOSASHIMIZU_TRAVEL_SHOPPING,
  travelCommerce: TOSASHIMIZU_TRAVEL_COMMERCE,
  travelAll: TOSASHIMIZU_TRAVEL_ALL,
  coverageJa:
    '土佐清水市（JIS 39209）観光6・宿泊1・飲食16・温泉1・体験1（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県11つ目のLIVEハブ。',
  coverageEn:
    'Tosashimizu City (JIS 39209), 6 tourism + 1 stay + 16 dining + 1 onsen + 1 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Eleventh LIVE Kochi hub.',
  mapLabelJa: '土佐清水市の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Tosashimizu City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia/Commons等出典座標8件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are city-site listings, facts from city.tosashimizu.lg.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const SUKUMO_LOOKUP: LookupTown = {
  slug: 'sukumo',
  prefectureSlug: 'kochi',
  jis: SUKUMO.jis,
  nameJa: SUKUMO.nameJa,
  nameEn: SUKUMO.nameEn,
  heroPhoto: SUKUMO_PLACE_PHOTO,
  photoCiteJa: '写真は宿毛湾。inunami、2019-09-06、CC BY 2.0。File:Sukumo_Bay_-_Sep_6,_2019.jpg。',
  photoCiteEn: 'Photo: Sukumo Bay. inunami, 6 Sep 2019, CC BY 2.0. File:Sukumo_Bay_-_Sep_6,_2019.jpg.',
  rows: SUKUMO_FACILITIES,
  expectedGeo: SUKUMO_EXPECTED_GEO_COUNT,
  expectedRows: SUKUMO_EXPECTED_ROW_COUNT,
  travelDining: SUKUMO_TRAVEL_DINING,
  travelStay: SUKUMO_TRAVEL_STAY,
  travelShopping: SUKUMO_TRAVEL_SHOPPING,
  travelCommerce: SUKUMO_TRAVEL_COMMERCE,
  travelAll: SUKUMO_TRAVEL_ALL,
  coverageJa:
    '宿毛市（JIS 39208）観光6・宿泊1・飲食16・温泉1・体験1（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県12つ目のLIVEハブ。',
  coverageEn:
    'Sukumo City (JIS 39208), 6 tourism + 1 stay + 16 dining + 1 onsen + 1 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Twelfth LIVE Kochi hub.',
  mapLabelJa: '宿毛市の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Sukumo City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia/Commons等出典座標8件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are city-site listings, facts from city.sukumo.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};



export const KUROSHIO_LOOKUP: LookupTown = {
  slug: 'kuroshio',
  prefectureSlug: 'kochi',
  jis: KUROSHIO.jis,
  nameJa: KUROSHIO.nameJa,
  nameEn: KUROSHIO.nameEn,
  heroPhoto: KUROSHIO_PLACE_PHOTO,
  photoCiteJa: '写真は入野松原。Saigen Jiro、2018-02-17、CC0。File:Irino_no_Matsubara,_enkei.jpg。',
  photoCiteEn: 'Photo: Irino Matsubara. Saigen Jiro, 17 Feb 2018, CC0. File:Irino_no_Matsubara,_enkei.jpg.',
  rows: KUROSHIO_FACILITIES,
  expectedGeo: KUROSHIO_EXPECTED_GEO_COUNT,
  expectedRows: KUROSHIO_EXPECTED_ROW_COUNT,
  travelDining: KUROSHIO_TRAVEL_DINING,
  travelStay: KUROSHIO_TRAVEL_STAY,
  travelShopping: KUROSHIO_TRAVEL_SHOPPING,
  travelCommerce: KUROSHIO_TRAVEL_COMMERCE,
  travelAll: KUROSHIO_TRAVEL_ALL,
  coverageJa:
    '黒潮町（JIS 39428）観光5・宿泊1・飲食16・温泉0・体験1（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県13つ目のLIVEハブ。',
  coverageEn:
    'Kuroshio Town (JIS 39428), 5 tourism + 1 stay + 16 dining + 0 onsen + 1 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Thirteenth LIVE Kochi hub.',
  mapLabelJa: '黒潮町の出典座標6件',
  mapLabelEn: '6 sourced coordinates in Kuroshio Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons等出典座標6件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 6 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.kuroshio.lg.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const TOYO_LOOKUP: LookupTown = {
  slug: 'toyo',
  prefectureSlug: 'kochi',
  jis: TOYO.jis,
  nameJa: TOYO.nameJa,
  nameEn: TOYO.nameEn,
  heroPhoto: TOYO_PLACE_PHOTO,
  photoCiteJa: '写真は白浜海水浴場。Araiyasushige、2024-05-14、CC0。File:Sirahama_20240514_1.jpg。',
  photoCiteEn: 'Photo: Shirahama Beach. Araiyasushige, 14 May 2024, CC0. File:Sirahama_20240514_1.jpg.',
  rows: TOYO_FACILITIES,
  expectedGeo: TOYO_EXPECTED_GEO_COUNT,
  expectedRows: TOYO_EXPECTED_ROW_COUNT,
  travelDining: TOYO_TRAVEL_DINING,
  travelStay: TOYO_TRAVEL_STAY,
  travelShopping: TOYO_TRAVEL_SHOPPING,
  travelCommerce: TOYO_TRAVEL_COMMERCE,
  travelAll: TOYO_TRAVEL_ALL,
  coverageJa:
    '東洋町（JIS 39301）観光5・宿泊1・飲食7・温泉0・体験1（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県14つ目のLIVEハブ。',
  coverageEn:
    'Toyo Town (JIS 39301), 5 tourism + 1 stay + 7 dining + 0 onsen + 1 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Fourteenth LIVE Kochi hub.',
  mapLabelJa: '東洋町の出典座標6件',
  mapLabelEn: '6 sourced coordinates in Toyo Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons等出典座標6件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 6 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.toyo.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const YASUDA_LOOKUP: LookupTown = {
  slug: 'yasuda',
  prefectureSlug: 'kochi',
  jis: YASUDA.jis,
  nameJa: YASUDA.nameJa,
  nameEn: YASUDA.nameEn,
  heroPhoto: YASUDA_PLACE_PHOTO,
  photoCiteJa: '写真は島石ピクニック広場。panoramio、2015-11-09、CC BY 3.0。File:島石ピクニック広場_-_panoramio.jpg。',
  photoCiteEn: 'Photo: Shimaishi Picnic Ground. panoramio, 9 Nov 2015, CC BY 3.0. File:島石ピクニック広場_-_panoramio.jpg.',
  rows: YASUDA_FACILITIES,
  expectedGeo: YASUDA_EXPECTED_GEO_COUNT,
  expectedRows: YASUDA_EXPECTED_ROW_COUNT,
  travelDining: YASUDA_TRAVEL_DINING,
  travelStay: YASUDA_TRAVEL_STAY,
  travelShopping: YASUDA_TRAVEL_SHOPPING,
  travelCommerce: YASUDA_TRAVEL_COMMERCE,
  travelAll: YASUDA_TRAVEL_ALL,
  coverageJa:
    '安田町（JIS 39304）観光5・宿泊1・飲食6・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県16つ目のLIVEハブ。',
  coverageEn:
    'Yasuda Town (JIS 39304), 5 tourism + 1 stay + 6 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Sixteenth LIVE Kochi hub.',
  mapLabelJa: '安田町の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Yasuda Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.yasuda.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const GEISEI_LOOKUP: LookupTown = {
  slug: 'geisei',
  prefectureSlug: 'kochi',
  jis: GEISEI.jis,
  nameJa: GEISEI.nameJa,
  nameEn: GEISEI.nameEn,
  heroPhoto: GEISEI_PLACE_PHOTO,
  photoCiteJa: '写真は琴ヶ浜。Lumi iori、2019-11-04、CC BY-SA 4.0。File:Kotogahama.jpg。',
  photoCiteEn: 'Photo: Kotogahama Beach. Lumi iori, 4 Nov 2019, CC BY-SA 4.0. File:Kotogahama.jpg.',
  rows: GEISEI_FACILITIES,
  expectedGeo: GEISEI_EXPECTED_GEO_COUNT,
  expectedRows: GEISEI_EXPECTED_ROW_COUNT,
  travelDining: GEISEI_TRAVEL_DINING,
  travelStay: GEISEI_TRAVEL_STAY,
  travelShopping: GEISEI_TRAVEL_SHOPPING,
  travelCommerce: GEISEI_TRAVEL_COMMERCE,
  travelAll: GEISEI_TRAVEL_ALL,
  coverageJa:
    '芸西村（JIS 39307）観光5・宿泊1・飲食3・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県17つ目のLIVEハブ。',
  coverageEn:
    'Geisei Village (JIS 39307), 5 tourism + 1 stay + 3 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Seventeenth LIVE Kochi hub.',
  mapLabelJa: '芸西村の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Geisei Village',
  mapCitePackJa: '点は村・公式ページ掲載施設のWikipedia/Commons等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for village/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは村公式・公式観光サイト掲載情報。村ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are village-site listings, facts from vill.geisei.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '村公式サイト掲載情報',
  licenseSiteEn: 'Village-site listing'
};


export const KITAGAWA_LOOKUP: LookupTown = {
  slug: 'kitagawa',
  prefectureSlug: 'kochi',
  jis: KITAGAWA.jis,
  nameJa: KITAGAWA.nameJa,
  nameEn: KITAGAWA.nameEn,
  heroPhoto: KITAGAWA_PLACE_PHOTO,
  photoCiteJa: '写真は北川村モネの庭マルモッタンの水の庭。Earthboud1960、2016-07-20、CC BY-SA 4.0。File:Monet-Marumottan-mizu02.jpg。',
  photoCiteEn: 'Photo: Monet\'s Garden Marmottan water garden. Earthboud1960, 20 Jul 2016, CC BY-SA 4.0. File:Monet-Marumottan-mizu02.jpg.',
  rows: KITAGAWA_FACILITIES,
  expectedGeo: KITAGAWA_EXPECTED_GEO_COUNT,
  expectedRows: KITAGAWA_EXPECTED_ROW_COUNT,
  travelDining: KITAGAWA_TRAVEL_DINING,
  travelStay: KITAGAWA_TRAVEL_STAY,
  travelShopping: KITAGAWA_TRAVEL_SHOPPING,
  travelCommerce: KITAGAWA_TRAVEL_COMMERCE,
  travelAll: KITAGAWA_TRAVEL_ALL,
  coverageJa:
    '北川村（JIS 39305）観光5・宿泊1・飲食3・温泉1・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県18つ目のLIVEハブ。',
  coverageEn:
    'Kitagawa Village (JIS 39305), 5 tourism + 1 stay + 3 dining + 1 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Eighteenth LIVE Kochi hub.',
  mapLabelJa: '北川村の出典座標6件',
  mapLabelEn: '6 sourced coordinates in Kitagawa Village',
  mapCitePackJa: '点は村・公式ページ掲載施設のWikipedia/Commons/楽天等出典座標6件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 6 sourced coordinates for village/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは村公式・公式観光サイト掲載情報。村ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are village-site listings, facts from kitagawamura.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '村公式サイト掲載情報',
  licenseSiteEn: 'Village-site listing'
};

export const UMAJI_LOOKUP: LookupTown = {
  slug: 'umaji',
  prefectureSlug: 'kochi',
  jis: UMAJI.jis,
  nameJa: UMAJI.nameJa,
  nameEn: UMAJI.nameEn,
  heroPhoto: UMAJI_PLACE_PHOTO,
  photoCiteJa: '写真は馬路村水力インクライン。ブルーノ・プラス、2022-03、CC BY-SA 4.0。File:Umaji Incline1.jpg。',
  photoCiteEn: 'Photo: Umaji hydraulic incline. Bruno Plus, Mar 2022, CC BY-SA 4.0. File:Umaji Incline1.jpg.',
  rows: UMAJI_FACILITIES,
  expectedGeo: UMAJI_EXPECTED_GEO_COUNT,
  expectedRows: UMAJI_EXPECTED_ROW_COUNT,
  travelDining: UMAJI_TRAVEL_DINING,
  travelStay: UMAJI_TRAVEL_STAY,
  travelShopping: UMAJI_TRAVEL_SHOPPING,
  travelCommerce: UMAJI_TRAVEL_COMMERCE,
  travelAll: UMAJI_TRAVEL_ALL,
  coverageJa:
    '馬路村（JIS 39306）観光5・宿泊1・飲食2・温泉1・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県19つ目のLIVEハブ。',
  coverageEn:
    'Umaji Village (JIS 39306), 5 tourism + 1 stay + 2 dining + 1 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Nineteenth LIVE Kochi hub.',
  mapLabelJa: '馬路村の出典座標6件',
  mapLabelEn: '6 sourced coordinates in Umaji Village',
  mapCitePackJa: '点は村・公式ページ掲載施設のWikipedia/Commons/楽天等出典座標6件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 6 sourced coordinates for village/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは村公式・公式観光サイト掲載情報。村ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are village-site listings, facts from vill.umaji.lg.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '村公式サイト掲載情報',
  licenseSiteEn: 'Village-site listing'
};


export const MOTOYAMA_LOOKUP: LookupTown = {
  slug: 'motoyama',
  prefectureSlug: 'kochi',
  jis: MOTOYAMA.jis,
  nameJa: MOTOYAMA.nameJa,
  nameEn: MOTOYAMA.nameEn,
  heroPhoto: MOTOYAMA_PLACE_PHOTO,
  photoCiteJa: '写真は旧本山大橋。r18 INO (PACHIMO)、2016-04-28、CC BY 3.0。File:旧本山大橋.jpg。',
  photoCiteEn: 'Photo: Former Motoyama Bridge. r18 INO (PACHIMO), 2016-04-28, CC BY 3.0. File:旧本山大橋.jpg.',
  rows: MOTOYAMA_FACILITIES,
  expectedGeo: MOTOYAMA_EXPECTED_GEO_COUNT,
  expectedRows: MOTOYAMA_EXPECTED_ROW_COUNT,
  travelDining: MOTOYAMA_TRAVEL_DINING,
  travelStay: MOTOYAMA_TRAVEL_STAY,
  travelShopping: MOTOYAMA_TRAVEL_SHOPPING,
  travelCommerce: MOTOYAMA_TRAVEL_COMMERCE,
  travelAll: MOTOYAMA_TRAVEL_ALL,
  coverageJa:
    '本山町（JIS 39341）観光5・宿泊1・飲食3・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県20つ目のLIVEハブ。',
  coverageEn:
    'Motoyama Town (JIS 39341), 5 tourism + 1 stay + 3 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Twentieth LIVE Kochi hub.',
  mapLabelJa: '本山町の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Motoyama Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons/楽天等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.motoyama.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};



export const OTOYO_LOOKUP: LookupTown = {
  slug: 'otoyo',
  prefectureSlug: 'kochi',
  jis: OTOYO.jis,
  nameJa: OTOYO.nameJa,
  nameEn: OTOYO.nameEn,
  heroPhoto: OTOYO_PLACE_PHOTO,
  photoCiteJa: '写真は豊楽寺。Reggaeman、2009-06-06、CC BY-SA 3.0。File:Burakuji_01.JPG。',
  photoCiteEn: 'Photo: Buraku-ji. Reggaeman, 2009-06-06, CC BY-SA 3.0. File:Burakuji_01.JPG.',
  rows: OTOYO_FACILITIES,
  expectedGeo: OTOYO_EXPECTED_GEO_COUNT,
  expectedRows: OTOYO_EXPECTED_ROW_COUNT,
  travelDining: OTOYO_TRAVEL_DINING,
  travelStay: OTOYO_TRAVEL_STAY,
  travelShopping: OTOYO_TRAVEL_SHOPPING,
  travelCommerce: OTOYO_TRAVEL_COMMERCE,
  travelAll: OTOYO_TRAVEL_ALL,
  coverageJa:
    '大豊町（JIS 39344）観光5・宿泊1・飲食3・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県21つ目のLIVEハブ。',
  coverageEn:
    'Otoyo Town (JIS 39344), 5 tourism + 1 stay + 3 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Twenty-first LIVE Kochi hub.',
  mapLabelJa: '大豊町の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Otoyo Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons/楽天等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.otoyo.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};



export const TOSACHO_LOOKUP: LookupTown = {
  slug: 'tosacho',
  prefectureSlug: 'kochi',
  jis: TOSACHO.jis,
  nameJa: TOSACHO.nameJa,
  nameEn: TOSACHO.nameEn,
  heroPhoto: TOSACHO_PLACE_PHOTO,
  photoCiteJa: '写真は道の駅土佐さめうら。As6022014、2011-10-10、Public domain。File:Roadside_Station_Tosa_Sameura.jpg。',
  photoCiteEn: 'Photo: Roadside Station Tosa Sameura. As6022014, 2011-10-10, Public domain. File:Roadside_Station_Tosa_Sameura.jpg.',
  rows: TOSACHO_FACILITIES,
  expectedGeo: TOSACHO_EXPECTED_GEO_COUNT,
  expectedRows: TOSACHO_EXPECTED_ROW_COUNT,
  travelDining: TOSACHO_TRAVEL_DINING,
  travelStay: TOSACHO_TRAVEL_STAY,
  travelShopping: TOSACHO_TRAVEL_SHOPPING,
  travelCommerce: TOSACHO_TRAVEL_COMMERCE,
  travelAll: TOSACHO_TRAVEL_ALL,
  coverageJa:
    '土佐町（JIS 39363）観光5・宿泊1・飲食3・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県22つ目のLIVEハブ。',
  coverageEn:
    'Tosa Town (JIS 39363), 5 tourism + 1 stay + 3 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Twenty-second LIVE Kochi hub.',
  mapLabelJa: '土佐町の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Tosa Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons/楽天等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.tosa.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const NAHARI_LOOKUP: LookupTown = {
  slug: 'nahari',
  prefectureSlug: 'kochi',
  jis: NAHARI.jis,
  nameJa: NAHARI.nameJa,
  nameEn: NAHARI.nameEn,
  heroPhoto: NAHARI_PLACE_PHOTO,
  photoCiteJa: '写真は奈半利中央公園。運動会プロテインパワー、2023-08、CC BY-SA 4.0。File:Nahari_central_park_202308.jpg。',
  photoCiteEn: 'Photo: Nahari Central Park. Undokai Protein Power, Aug 2023, CC BY-SA 4.0. File:Nahari_central_park_202308.jpg.',
  rows: NAHARI_FACILITIES,
  expectedGeo: NAHARI_EXPECTED_GEO_COUNT,
  expectedRows: NAHARI_EXPECTED_ROW_COUNT,
  travelDining: NAHARI_TRAVEL_DINING,
  travelStay: NAHARI_TRAVEL_STAY,
  travelShopping: NAHARI_TRAVEL_SHOPPING,
  travelCommerce: NAHARI_TRAVEL_COMMERCE,
  travelAll: NAHARI_TRAVEL_ALL,
  coverageJa:
    '奈半利町（JIS 39302）観光5・宿泊1・飲食5・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県15つ目のLIVEハブ。',
  coverageEn:
    'Nahari Town (JIS 39302), 5 tourism + 1 stay + 5 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Fifteenth LIVE Kochi hub.',
  mapLabelJa: '奈半利町の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Nahari Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.nahari.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};


export const SHIMANTO_LOOKUP: LookupTown = {
  slug: 'shimanto',
  prefectureSlug: 'kochi',
  jis: SHIMANTO.jis,
  nameJa: SHIMANTO.nameJa,
  nameEn: SHIMANTO.nameEn,
  heroPhoto: SHIMANTO_PLACE_PHOTO,
  photoCiteJa: '写真は四万十川橋（赤鉄橋）。Kuruman、2015-08-31、CC BY 2.0。File:Shimanto_River_Bridge(26676794871).jpg。',
  photoCiteEn: 'Photo: Shimanto River Bridge (Aka-tetsubashi). Kuruman, 31 Aug 2015, CC BY 2.0. File:Shimanto_River_Bridge(26676794871).jpg.',
  rows: SHIMANTO_FACILITIES,
  expectedGeo: SHIMANTO_EXPECTED_GEO_COUNT,
  expectedRows: SHIMANTO_EXPECTED_ROW_COUNT,
  travelDining: SHIMANTO_TRAVEL_DINING,
  travelStay: SHIMANTO_TRAVEL_STAY,
  travelShopping: SHIMANTO_TRAVEL_SHOPPING,
  travelCommerce: SHIMANTO_TRAVEL_COMMERCE,
  travelAll: SHIMANTO_TRAVEL_ALL,
  coverageJa:
    '四万十市（JIS 39210）観光6・宿泊1・飲食16・温泉1・体験1（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県10つ目のLIVEハブ。',
  coverageEn:
    'Shimanto City (JIS 39210), 6 tourism + 1 stay + 16 dining + 1 onsen + 1 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Tenth LIVE Kochi hub.',
  mapLabelJa: '四万十市の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Shimanto City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia/Commons等出典座標8件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.shimanto.lg.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const MUROTO_LOOKUP: LookupTown = {
  slug: 'muroto',
  prefectureSlug: 'kochi',
  jis: MUROTO.jis,
  nameJa: MUROTO.nameJa,
  nameEn: MUROTO.nameEn,
  heroPhoto: MUROTO_PLACE_PHOTO,
  photoCiteJa: '写真は室戸岬。Motokoka、2010-09-26、CC BY-SA 4.0。File:Cape_Muroto,_Muroto_city_02.jpg。',
  photoCiteEn: 'Photo: Cape Muroto. Motokoka, 26 Sep 2010, CC BY-SA 4.0. File:Cape_Muroto,_Muroto_city_02.jpg.',
  rows: MUROTO_FACILITIES,
  expectedGeo: MUROTO_EXPECTED_GEO_COUNT,
  expectedRows: MUROTO_EXPECTED_ROW_COUNT,
  travelDining: MUROTO_TRAVEL_DINING,
  travelStay: MUROTO_TRAVEL_STAY,
  travelShopping: MUROTO_TRAVEL_SHOPPING,
  travelCommerce: MUROTO_TRAVEL_COMMERCE,
  travelAll: MUROTO_TRAVEL_ALL,
  coverageJa:
    '室戸市（JIS 39202）観光6・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載。客室写真の宿のみで大浴場出典キー無しのため温泉0）。オープンデータ凍結パックは未掲載。高知県7つ目のLIVEハブ。',
  coverageEn:
    'Muroto City (JIS 39202), 6 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished (room-still stay only → onsen 0). No frozen open-data pack. Seventh LIVE Kochi hub.',
  mapLabelJa: '室戸市の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Muroto City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia/Commons等出典座標7件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.muroto.kochi.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const KAMI_LOOKUP: LookupTown = {
  slug: 'kami',
  prefectureSlug: 'kochi',
  jis: KAMI.jis,
  nameJa: KAMI.nameJa,
  nameEn: KAMI.nameEn,
  heroPhoto: KAMI_PLACE_PHOTO,
  photoCiteJa: '写真はやなせたかし記念館（アンパンマンミュージアム）。katorisi、CC BY-SA 3.0。File:Anpanman_Museum,Kami-city,Japan.jpg。',
  photoCiteEn: 'Photo: Yanase Takashi Memorial Hall (Anpanman Museum). katorisi, CC BY-SA 3.0. File:Anpanman_Museum,Kami-city,Japan.jpg.',
  rows: KAMI_FACILITIES,
  expectedGeo: KAMI_EXPECTED_GEO_COUNT,
  expectedRows: KAMI_EXPECTED_ROW_COUNT,
  travelDining: KAMI_TRAVEL_DINING,
  travelStay: KAMI_TRAVEL_STAY,
  travelShopping: KAMI_TRAVEL_SHOPPING,
  travelCommerce: KAMI_TRAVEL_COMMERCE,
  travelAll: KAMI_TRAVEL_ALL,
  coverageJa:
    '香美市（JIS 39212）観光6・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載。客室写真の宿のみで大浴場出典キー無しのため温泉0）。オープンデータ凍結パックは未掲載。高知県4つ目のLIVEハブ。',
  coverageEn:
    'Kami City (JIS 39212), 6 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished (room-still stay only → onsen 0). No frozen open-data pack. Fourth LIVE Kochi hub.',
  mapLabelJa: '香美市の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Kami City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia/Commons等出典座標7件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.kami.lg.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const KONAN_LOOKUP: LookupTown = {
  slug: 'konan',
  prefectureSlug: 'kochi',
  jis: KONAN.jis,
  nameJa: KONAN.nameJa,
  nameEn: KONAN.nameEn,
  heroPhoto: KONAN_PLACE_PHOTO,
  photoCiteJa: '写真は絵金蔵。京浜にけ、CC BY-SA 3.0。File:Kochi_Konan_Ekingura_1.jpg。',
  photoCiteEn: 'Photo: Ekingura. 京浜にけ, CC BY-SA 3.0. File:Kochi_Konan_Ekingura_1.jpg.',
  rows: KONAN_FACILITIES,
  expectedGeo: KONAN_EXPECTED_GEO_COUNT,
  expectedRows: KONAN_EXPECTED_ROW_COUNT,
  travelDining: KONAN_TRAVEL_DINING,
  travelStay: KONAN_TRAVEL_STAY,
  travelShopping: KONAN_TRAVEL_SHOPPING,
  travelCommerce: KONAN_TRAVEL_COMMERCE,
  travelAll: KONAN_TRAVEL_ALL,
  coverageJa:
    '香南市（JIS 39211）観光6・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載。ユニットバスのみのため温泉0）。オープンデータ凍結パックは未掲載。高知県3つ目のLIVEハブ。',
  coverageEn:
    'Konan City (JIS 39211), 6 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished (unit baths only → onsen 0). No frozen open-data pack. Third LIVE Kochi hub.',
  mapLabelJa: '香南市の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Konan City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標7件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.kochi-konan.lg.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const NANKOKU_LOOKUP: LookupTown = {
  slug: 'nankoku',
  prefectureSlug: 'kochi',
  jis: NANKOKU.jis,
  nameJa: NANKOKU.nameJa,
  nameEn: NANKOKU.nameEn,
  heroPhoto: NANKOKU_PLACE_PHOTO,
  photoCiteJa: '写真は土佐国分寺大師堂。Reggaeman、CC BY-SA 3.0。File:Tosa_Kokubunji_05.JPG。',
  photoCiteEn: 'Photo: Daishi-dō at Tosa Kokubun-ji. Reggaeman, CC BY-SA 3.0. File:Tosa_Kokubunji_05.JPG.',
  rows: NANKOKU_FACILITIES,
  expectedGeo: NANKOKU_EXPECTED_GEO_COUNT,
  expectedRows: NANKOKU_EXPECTED_ROW_COUNT,
  travelDining: NANKOKU_TRAVEL_DINING,
  travelStay: NANKOKU_TRAVEL_STAY,
  travelShopping: NANKOKU_TRAVEL_SHOPPING,
  travelCommerce: NANKOKU_TRAVEL_COMMERCE,
  travelAll: NANKOKU_TRAVEL_ALL,
  coverageJa:
    '南国市（JIS 39204）観光6・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載。ビジネスホテル浴室のみのため温泉0）。オープンデータ凍結パックは未掲載。高知県2つ目のLIVEハブ。',
  coverageEn:
    'Nankoku City (JIS 39204), 6 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished (business-hotel baths only → onsen 0). No frozen open-data pack. Second LIVE Kochi hub.',
  mapLabelJa: '南国市の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Nankoku City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標7件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.nankoku.lg.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const KOCHI_LOOKUP: LookupTown = {
  slug: 'kochi',
  prefectureSlug: 'kochi',
  jis: KOCHI.jis,
  nameJa: KOCHI.nameJa,
  nameEn: KOCHI.nameEn,
  heroPhoto: KOCHI_PLACE_PHOTO,
  photoCiteJa: '写真は高知城天守。663highland、CC BY 2.5。File:Kochi_Castle08s3872.jpg。',
  photoCiteEn: 'Photo: Kochi Castle keep. 663highland, CC BY 2.5. File:Kochi_Castle08s3872.jpg.',
  rows: KOCHI_FACILITIES,
  expectedGeo: KOCHI_EXPECTED_GEO_COUNT,
  expectedRows: KOCHI_EXPECTED_ROW_COUNT,
  travelDining: KOCHI_TRAVEL_DINING,
  travelStay: KOCHI_TRAVEL_STAY,
  travelShopping: KOCHI_TRAVEL_SHOPPING,
  travelCommerce: KOCHI_TRAVEL_COMMERCE,
  travelAll: KOCHI_TRAVEL_ALL,
  coverageJa:
    '高知市（JIS 39201）観光8・宿泊1・飲食16・体験1（出典写真がある施設のみ）。温泉・買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載。ビジネスホテル浴室のみのため温泉0）。オープンデータ凍結パックは未掲載。高知県1つ目のLIVEハブ。',
  coverageEn:
    'Kochi City (JIS 39201), 8 tourism + 1 stay + 16 dining + 1 experience with sourced photos. Onsen, shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished (business-hotel baths only → onsen 0). No frozen open-data pack. First LIVE Kochi hub.',
  mapLabelJa: '高知市の出典座標9件',
  mapLabelEn: '9 sourced coordinates in Kochi City',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標9件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 9 sourced coordinates for city/official facilities (accessed 2026-09-08).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.kochi.kochi.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};






export const TONOSHO_LOOKUP: LookupTown = {
  slug: 'tonosho',
  prefectureSlug: 'kagawa',
  jis: TONOSHO.jis,
  nameJa: TONOSHO.nameJa,
  nameEn: TONOSHO.nameEn,
  heroPhoto: TONOSHO_PLACE_PHOTO,
  photoCiteJa:
    '写真はエンジェルロード。663highland、CC BY 2.5。File:Angel Road Shodo Island Japan01s3.jpg。',
  photoCiteEn:
    'Photo: Angel Road. 663highland, CC BY 2.5. File:Angel Road Shodo Island Japan01s3.jpg.',
  rows: TONOSHO_FACILITIES,
  expectedGeo: TONOSHO_EXPECTED_GEO_COUNT,
  expectedRows: TONOSHO_EXPECTED_ROW_COUNT,
  travelDining: TONOSHO_TRAVEL_DINING,
  travelStay: TONOSHO_TRAVEL_STAY,
  travelShopping: TONOSHO_TRAVEL_SHOPPING,
  travelCommerce: TONOSHO_TRAVEL_COMMERCE,
  travelAll: TONOSHO_TRAVEL_ALL,
  coverageJa:
    '土庄町（JIS 37322）観光6・宿泊2・飲食16・温泉2・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。香川県11つ目のLIVEハブ（小豆島の島内ツイン）。',
  coverageEn:
    'Tonosho (JIS 37322), 6 tourism + 2 stay + 16 dining + 2 onsen + 1 experience with sourced photos (onsen uses distinct bath keys). Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Eleventh LIVE Kagawa hub (Shodoshima island twin).',
  mapLabelJa: '土庄町の出典座標9件',
  mapLabelEn: '9 sourced coordinates in Tonosho',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia等出典座標9件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 9 sourced coordinates for town/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are town-site listings, facts from town.tonosho.kagawa.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

export const UTAZU_LOOKUP: LookupTown = {
  slug: 'utazu',
  prefectureSlug: 'kagawa',
  jis: UTAZU.jis,
  nameJa: UTAZU.nameJa,
  nameEn: UTAZU.nameEn,
  heroPhoto: UTAZU_PLACE_PHOTO,
  photoCiteJa:
    '写真はゴールドタワー。キアラア、CC0。File:ゴールドタワー.jpg。',
  photoCiteEn:
    'Photo: Gold Tower. キアラア, CC0. File:ゴールドタワー.jpg.',
  rows: UTAZU_FACILITIES,
  expectedGeo: UTAZU_EXPECTED_GEO_COUNT,
  expectedRows: UTAZU_EXPECTED_ROW_COUNT,
  travelDining: UTAZU_TRAVEL_DINING,
  travelStay: UTAZU_TRAVEL_STAY,
  travelShopping: UTAZU_TRAVEL_SHOPPING,
  travelCommerce: UTAZU_TRAVEL_COMMERCE,
  travelAll: UTAZU_TRAVEL_ALL,
  coverageJa:
    '宇多津町（JIS 37386）観光6・宿泊2・飲食16・温泉1・体験1（出典写真がある施設のみ。温泉は大浴場キーで客室と分離）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。香川県10つ目のLIVEハブ。',
  coverageEn:
    'Utazu (JIS 37386), 6 tourism + 2 stay + 16 dining + 1 onsen + 1 experience with sourced photos (onsen uses distinct bath key). Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Tenth LIVE Kagawa hub.',
  mapLabelJa: '宇多津町の出典座標8件',
  mapLabelEn: '8 sourced coordinates in Utazu',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia等出典座標8件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 8 sourced coordinates for town/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are town-site listings, facts from town.utazu.lg.jp, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

export const MITOYO_LOOKUP: LookupTown = {
  slug: 'mitoyo',
  prefectureSlug: 'kagawa',
  jis: MITOYO.jis,
  nameJa: MITOYO.nameJa,
  nameEn: MITOYO.nameEn,
  heroPhoto: MITOYO_PLACE_PHOTO,
  photoCiteJa:
    '写真は父母ヶ浜の干潟と空の映り込み。Araiyasushige、CC BY-SA 4.0。File:Titibugahama 20230718 1.jpg。',
  photoCiteEn:
    'Photo: Chichibugahama tidal flats reflecting the sky. Araiyasushige, CC BY-SA 4.0. File:Titibugahama 20230718 1.jpg.',
  rows: MITOYO_FACILITIES,
  expectedGeo: MITOYO_EXPECTED_GEO_COUNT,
  expectedRows: MITOYO_EXPECTED_ROW_COUNT,
  travelDining: MITOYO_TRAVEL_DINING,
  travelStay: MITOYO_TRAVEL_STAY,
  travelShopping: MITOYO_TRAVEL_SHOPPING,
  travelCommerce: MITOYO_TRAVEL_COMMERCE,
  travelAll: MITOYO_TRAVEL_ALL,
  coverageJa:
    '三豊市（JIS 37208）観光8・宿泊2・飲食16・温泉2・体験1（出典写真がある施設のみ。温泉は大浴場・露天風呂キーで客室と分離）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。香川県9つ目のLIVEハブ。',
  coverageEn:
    'Mitoyo (JIS 37208), 8 tourism + 2 stay + 16 dining + 2 onsen + 1 experience with sourced photos (onsen uses distinct bath keys). Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Ninth LIVE Kagawa hub.',
  mapLabelJa: '三豊市の出典座標11件',
  mapLabelEn: '11 sourced coordinates in Mitoyo',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標11件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 11 sourced coordinates for city/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.mitoyo.lg.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};

export const ZENTSUJI_LOOKUP: LookupTown = {
  slug: 'zentsuji',
  prefectureSlug: 'kagawa',
  jis: ZENTSUJI.jis,
  nameJa: ZENTSUJI.nameJa,
  nameEn: ZENTSUJI.nameEn,
  heroPhoto: ZENTSUJI_PLACE_PHOTO,
  photoCiteJa:
    '写真は総本山善通寺の南大門と五重塔。Naokijp、CC BY-SA 4.0。File:Zentsū-ji, Minami-Dai-mon Gate and Five-storied Pagoda 001.jpg。',
  photoCiteEn:
    'Photo: South Great Gate and five-storied pagoda at Zentsū-ji. Naokijp, CC BY-SA 4.0. File:Zentsū-ji, Minami-Dai-mon Gate and Five-storied Pagoda 001.jpg.',
  rows: ZENTSUJI_FACILITIES,
  expectedGeo: ZENTSUJI_EXPECTED_GEO_COUNT,
  expectedRows: ZENTSUJI_EXPECTED_ROW_COUNT,
  travelDining: ZENTSUJI_TRAVEL_DINING,
  travelStay: ZENTSUJI_TRAVEL_STAY,
  travelShopping: ZENTSUJI_TRAVEL_SHOPPING,
  travelCommerce: ZENTSUJI_TRAVEL_COMMERCE,
  travelAll: ZENTSUJI_TRAVEL_ALL,
  coverageJa:
    '善通寺市（JIS 37204）観光6・宿泊2・飲食16・温泉1・買物1（出典写真がある施設のみ。温泉は露天風呂キーで客室と分離）。体験・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。香川県8つ目のLIVEハブ。',
  coverageEn:
    'Zentsuji (JIS 37204), 6 tourism + 2 stay + 16 dining + 1 onsen + 1 shopping with sourced photos (onsen uses distinct bath key). Experience, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Eighth LIVE Kagawa hub.',
  mapLabelJa: '善通寺市の出典座標7件',
  mapLabelEn: '7 sourced coordinates in Zentsuji',
  mapCitePackJa: '点は市・公式ページ掲載施設のWikipedia等出典座標7件（accessed 2026-09-07）。',
  mapCitePackEn: 'Points: 7 sourced coordinates for city/official facilities (accessed 2026-09-07).',
  licenseNoteJa:
    '行のライセンスは市公式・公式観光サイト掲載情報。市ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn:
    'Rows are city-site listings, facts from city.zentsuji.kagawa.jp, not under Our Open Data.',
  licenseSiteJa: '市公式サイト掲載情報',
  licenseSiteEn: 'City-site listing'
};


export const OKAWA_LOOKUP: LookupTown = {
  slug: 'okawa',
  prefectureSlug: 'kochi',
  jis: OKAWA.jis,
  nameJa: OKAWA.nameJa,
  nameEn: OKAWA.nameEn,
  heroPhoto: OKAWA_PLACE_PHOTO,
  photoCiteJa: '写真は小金滝。r18 INO (PACHIMO)、2014-04-06、CC BY 3.0。File:小金滝_-_panoramio.jpg。',
  photoCiteEn: 'Photo: Kogane Falls. r18 INO (PACHIMO), 2014-04-06, CC BY 3.0. File:小金滝_-_panoramio.jpg.',
  rows: OKAWA_FACILITIES,
  expectedGeo: OKAWA_EXPECTED_GEO_COUNT,
  expectedRows: OKAWA_EXPECTED_ROW_COUNT,
  travelDining: OKAWA_TRAVEL_DINING,
  travelStay: OKAWA_TRAVEL_STAY,
  travelShopping: OKAWA_TRAVEL_SHOPPING,
  travelCommerce: OKAWA_TRAVEL_COMMERCE,
  travelAll: OKAWA_TRAVEL_ALL,
  coverageJa:
    '大川村（JIS 39364）観光5・宿泊1・飲食1・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県23つ目のLIVEハブ。',
  coverageEn:
    'Okawa Village (JIS 39364), 5 tourism + 1 stay + 1 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Twenty-third LIVE Kochi hub.',
  mapLabelJa: '大川村の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Okawa Village',
  mapCitePackJa: '点は村・公式ページ掲載施設のWikipedia/Commons/楽天等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for village/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは村公式・公式観光サイト掲載情報。村ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are village-site listings, facts from vill.okawa.kochi.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '村公式サイト掲載情報',
  licenseSiteEn: 'Village-site listing'
};



export const NAKATOSA_LOOKUP: LookupTown = {
  slug: 'nakatosa',
  prefectureSlug: 'kochi',
  jis: NAKATOSA.jis,
  nameJa: NAKATOSA.nameJa,
  nameEn: NAKATOSA.nameEn,
  heroPhoto: NAKATOSA_PLACE_PHOTO,
  photoCiteJa: '写真は双名島。Araiyasushige、2024-05-07、CC0。File:Hutanazima_20240507_2.jpg。',
  photoCiteEn: 'Photo: Futana Islands (Hutanazima). Araiyasushige, 2024-05-07, CC0. File:Hutanazima_20240507_2.jpg.',
  rows: NAKATOSA_FACILITIES,
  expectedGeo: NAKATOSA_EXPECTED_GEO_COUNT,
  expectedRows: NAKATOSA_EXPECTED_ROW_COUNT,
  travelDining: NAKATOSA_TRAVEL_DINING,
  travelStay: NAKATOSA_TRAVEL_STAY,
  travelShopping: NAKATOSA_TRAVEL_SHOPPING,
  travelCommerce: NAKATOSA_TRAVEL_COMMERCE,
  travelAll: NAKATOSA_TRAVEL_ALL,
  coverageJa:
    '中土佐町（JIS 39401）観光5・宿泊1・飲食3・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県25つ目のLIVEハブ。',
  coverageEn:
    'Nakatosa Town (JIS 39401), 5 tourism + 1 stay + 3 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Twenty-fifth LIVE Kochi hub.',
  mapLabelJa: '中土佐町の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Nakatosa Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons/楽天等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.nakatosa.lg.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

export const NIYODOGAWA_LOOKUP: LookupTown = {
  slug: 'niyodogawa',
  prefectureSlug: 'kochi',
  jis: NIYODOGAWA.jis,
  nameJa: NIYODOGAWA.nameJa,
  nameEn: NIYODOGAWA.nameEn,
  heroPhoto: NIYODOGAWA_PLACE_PHOTO,
  photoCiteJa: '写真は中津渓谷。r18 INO (PACHIMO)、2014-09-23、CC BY 3.0。File:中津渓谷_-_panoramio.jpg。',
  photoCiteEn: 'Photo: Nakatsu Gorge. r18 INO (PACHIMO), 2014-09-23, CC BY 3.0. File:中津渓谷_-_panoramio.jpg.',
  rows: NIYODOGAWA_FACILITIES,
  expectedGeo: NIYODOGAWA_EXPECTED_GEO_COUNT,
  expectedRows: NIYODOGAWA_EXPECTED_ROW_COUNT,
  travelDining: NIYODOGAWA_TRAVEL_DINING,
  travelStay: NIYODOGAWA_TRAVEL_STAY,
  travelShopping: NIYODOGAWA_TRAVEL_SHOPPING,
  travelCommerce: NIYODOGAWA_TRAVEL_COMMERCE,
  travelAll: NIYODOGAWA_TRAVEL_ALL,
  coverageJa:
    '仁淀川町（JIS 39387）観光5・宿泊1・飲食3・温泉0・体験0（出典写真がある施設のみ）。買物・商業・AED・医療機関・介護・避難所・文化財・GTFSは0件（未掲載）。オープンデータ凍結パックは未掲載。高知県24つ目のLIVEハブ。',
  coverageEn:
    'Niyodogawa Town (JIS 39387), 5 tourism + 1 stay + 3 dining + 0 onsen + 0 experience with sourced photos. Shopping, commerce, AED, hospitals, care, shelters, cultural property, GTFS: 0, unpublished. No frozen open-data pack. Twenty-fourth LIVE Kochi hub.',
  mapLabelJa: '仁淀川町の出典座標5件',
  mapLabelEn: '5 sourced coordinates in Niyodogawa Town',
  mapCitePackJa: '点は町・公式ページ掲載施設のWikipedia/Commons/楽天等出典座標5件（accessed 2026-09-08）。',
  mapCitePackEn: 'Points: 5 sourced coordinates for town/official facilities (accessed 2026-09-08).',
  licenseNoteJa: '行のライセンスは町公式・公式観光サイト掲載情報。町ページの事実の転記で、オープンデータ許諾ではありません。',
  licenseNoteEn: 'Rows are town-site listings, facts from town.niyodogawa.lg.jp / sourced pages, not under Our Open Data.',
  licenseSiteJa: '町公式サイト掲載情報',
  licenseSiteEn: 'Town-site listing'
};

const BY_SLUG: Record<ReadySlug, LookupTown> = {
  mima: MIMA_LOOKUP,
  tsurugi: TSURUGI_LOOKUP,
  yoshinogawa: YOSHINOGAWA_LOOKUP,
  miyoshi: MIYOSHI_LOOKUP,
  tokushima: TOKUSHIMA_CITY_LOOKUP,
  awa: AWA_LOOKUP,
  higashimiyoshi: HIGASHIMIYOSHI_LOOKUP,
  kitajima: KITAJIMA_LOOKUP,
  naruto: NARUTO_LOOKUP,
  matsushige: MATSUSHIGE_LOOKUP,
  ishii: ISHII_LOOKUP,
  itano: ITANO_LOOKUP,
  kamiita: KAMIITA_LOOKUP,
  kamiyama: KAMIYAMA_LOOKUP,
  katsuura: KATSUURA_LOOKUP,
  kamikatsu: KAMIKATSU_LOOKUP,
  sanagochi: SANAGOCHI_LOOKUP,
  naka: NAKA_LOOKUP,
  mugi: MUGI_LOOKUP,
  minami: MINAMI_LOOKUP,
  aizumi: AIZUMI_LOOKUP,
  kaiyo: KAIYO_LOOKUP,
  komatsushima: KOMATSUSHIMA_LOOKUP,
  anan: ANAN_LOOKUP,
  takamatsu: TAKAMATSU_LOOKUP,
  kotohira: KOTOHIRA_LOOKUP,
  marugame: MARUGAME_LOOKUP,
  kanonji: KANONJI_LOOKUP,
  sakaide: SAKAIDE_LOOKUP,
  naoshima: NAOSHIMA_LOOKUP,
  shodoshima: SHODOSHIMA_LOOKUP,
  zentsuji: ZENTSUJI_LOOKUP,
  mitoyo: MITOYO_LOOKUP,
  utazu: UTAZU_LOOKUP,
  tonosho: TONOSHO_LOOKUP,
  sanuki: SANUKI_LOOKUP,
  higashikagawa: HIGASHIKAGAWA_LOOKUP,
  miki: MIKI_LOOKUP,
  ayagawa: AYAGAWA_LOOKUP,
  tadotsu: TADOTSU_LOOKUP,
  manno: MANNO_LOOKUP,
  kochi: KOCHI_LOOKUP,
  nankoku: NANKOKU_LOOKUP,
  konan: KONAN_LOOKUP,
  kami: KAMI_LOOKUP,
  ino: INO_LOOKUP,
  aki: AKI_LOOKUP,
  muroto: MUROTO_LOOKUP,
  tosa: TOSA_LOOKUP,
  susaki: SUSAKI_LOOKUP,
  shimanto: SHIMANTO_LOOKUP,
  tosashimizu: TOSASHIMIZU_LOOKUP,
  sukumo: SUKUMO_LOOKUP,
  kuroshio: KUROSHIO_LOOKUP,
  toyo: TOYO_LOOKUP,
  nahari: NAHARI_LOOKUP,
  yasuda: YASUDA_LOOKUP,
  geisei: GEISEI_LOOKUP,
  kitagawa: KITAGAWA_LOOKUP,
  umaji: UMAJI_LOOKUP,
  motoyama: MOTOYAMA_LOOKUP,
  otoyo: OTOYO_LOOKUP,
  tosacho: TOSACHO_LOOKUP,
  okawa: OKAWA_LOOKUP,
  niyodogawa: NIYODOGAWA_LOOKUP,
  nakatosa: NAKATOSA_LOOKUP
};

export function lookupTown(slug: string): LookupTown | null {
  if (!isReadySlug(slug)) return null;
  return BY_SLUG[slug];
}

export {TRAVEL_ACCESSED, TRAVEL_SOURCES, TSURUGI_TRAVEL_ACCESSED, TSURUGI_TRAVEL_SOURCES, YOSHINOGAWA_TRAVEL_ACCESSED, YOSHINOGAWA_TRAVEL_SOURCES, MIYOSHI_TRAVEL_ACCESSED, MIYOSHI_TRAVEL_SOURCES, TOKUSHIMA_CITY_TRAVEL_ACCESSED, TOKUSHIMA_CITY_TRAVEL_SOURCES, AWA_TRAVEL_ACCESSED, AWA_TRAVEL_SOURCES, HIGASHIMIYOSHI_TRAVEL_ACCESSED, HIGASHIMIYOSHI_TRAVEL_SOURCES, KITAJIMA_TRAVEL_ACCESSED, KITAJIMA_TRAVEL_SOURCES, NARUTO_TRAVEL_ACCESSED, NARUTO_TRAVEL_SOURCES, MATSUSHIGE_TRAVEL_ACCESSED, MATSUSHIGE_TRAVEL_SOURCES, ISHII_TRAVEL_ACCESSED, ISHII_TRAVEL_SOURCES, ITANO_TRAVEL_ACCESSED, ITANO_TRAVEL_SOURCES, KAMIITA_TRAVEL_ACCESSED, KAMIITA_TRAVEL_SOURCES, KAMIYAMA_TRAVEL_ACCESSED, KAMIYAMA_TRAVEL_SOURCES, KATSUURA_TRAVEL_ACCESSED, KATSUURA_TRAVEL_SOURCES, KAMIKATSU_TRAVEL_ACCESSED, KAMIKATSU_TRAVEL_SOURCES, SANAGOCHI_TRAVEL_ACCESSED, SANAGOCHI_TRAVEL_SOURCES, MUGI_TRAVEL_ACCESSED, MUGI_TRAVEL_SOURCES, MINAMI_TRAVEL_ACCESSED, MINAMI_TRAVEL_SOURCES, AIZUMI_TRAVEL_ACCESSED, AIZUMI_TRAVEL_SOURCES, KOMATSUSHIMA_TRAVEL_ACCESSED, KOMATSUSHIMA_TRAVEL_SOURCES, ANAN_TRAVEL_ACCESSED, ANAN_TRAVEL_SOURCES, TAKAMATSU_TRAVEL_ACCESSED, TAKAMATSU_TRAVEL_SOURCES, KOTOHIRA_TRAVEL_ACCESSED, KOTOHIRA_TRAVEL_SOURCES, MARUGAME_TRAVEL_ACCESSED, MARUGAME_TRAVEL_SOURCES, KANONJI_TRAVEL_ACCESSED, KANONJI_TRAVEL_SOURCES, SAKAIDE_TRAVEL_ACCESSED, SAKAIDE_TRAVEL_SOURCES, NAOSHIMA_TRAVEL_ACCESSED, NAOSHIMA_TRAVEL_SOURCES, SHODOSHIMA_TRAVEL_ACCESSED, SHODOSHIMA_TRAVEL_SOURCES, ZENTSUJI_TRAVEL_ACCESSED, ZENTSUJI_TRAVEL_SOURCES, MITOYO_TRAVEL_ACCESSED, MITOYO_TRAVEL_SOURCES, UTAZU_TRAVEL_ACCESSED, UTAZU_TRAVEL_SOURCES, TONOSHO_TRAVEL_ACCESSED, TONOSHO_TRAVEL_SOURCES, SANUKI_TRAVEL_ACCESSED, SANUKI_TRAVEL_SOURCES};
