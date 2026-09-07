# Tokushima tourism / local social sources inventory

**Purpose (TG 573 SOURCE BAR):** inventory Instagram / TikTok / Facebook / X accounts **before** thin Tabelog-only densify. Use as **lead discovery** for 観光・体験・温泉・買物・商業・宿泊 visuals, then wire ExploreJapan cards only with HARD BAR 出典 (Commons / official site OG-room / hotel share / Tabelog FOOD dish close-ups — never invent, never scrape private, never SNS-publish).

**Inventoried:** 2026-09-07 (UTC+9)  
**Primary directories:** [徳島市 SNS一覧](https://www.city.tokushima.tokushima.jp/shisei/koho_kocho/sns/sns_ichiran.html), [阿波ナビ](https://www.awanavi.jp/), [uub.jp 徳島公式メディア](https://uub.jp/opm/tokushima.html), city/town policy pages.  
**愛媛 parked.** No other prefecture. No spend. No SNS publish. ReadySlug UNION.

## How usable for 出典 (HARD BAR)

| Use | OK? | Notes |
|---|---|---|
| Lead: spot/hotel/shop names, seasons, events | YES | Primary value of this inventory |
| Download Instagram/TikTok/Facebook/X media into `public/media` | NO by default | Platform ToS + unclear reuse; do **not** scrape feed CDN as ExploreJapan hero |
| Official account → official **website** photo / press kit / Commons twin | YES | Preferred path after IG lead |
| Hotel official / Rakuten・Jalan free share / og:image room-exterior | YES | Stay pills |
| Tabelog FOOD (type dish) close-up — not menus | YES | Dining only; stop Tabelog-only densify for sights/stay |
| Wikimedia Commons place-named | YES | Sights / some onsen exteriors |
| UGC under city hashtag without license | NO | Discovery only unless city republishes under clear terms |
| Fake reviews / invented listings | NO | Absolute |

**Workflow:** IG/FB/X lead → confirm place on city/観光協会/ホテル公式 → harvest **that** 出典 photo → wire `*-travel.ts` + `public/media` → rebuild docs.

---

## Prefecture / cross-muni tourism

| Account | Platform | URL | Covers | 出典 usability |
|---|---|---|---|---|
| `@tokushima_awanavi` | Instagram | https://www.instagram.com/tokushima_awanavi/ | 県観光「阿波ナビ」— spots, seasons, food, events statewide | **Lead #1** for all 24 munis; follow to Commons/公式サイト |
| `@awanavi_jp` | X | https://twitter.com/awanavi_jp | Same brand; short alerts / campaign tags | Lead; link-outs to AwaNavi articles |
| `tokushima.awanavi` | Facebook | https://www.facebook.com/tokushima.awanavi | AwaNavi posts / events | Lead |
| `@dokidoki_tokushima` | Instagram | https://www.instagram.com/dokidoki_tokushima/ | 徳島県観光協会 韓国戦略課 — inbound / collab traveler views | Lead for scenic + food angles (KR market); still need Commons/公式 for wire |
| `@pref.tokushima` | Instagram | https://www.instagram.com/pref.tokushima/ | 県広報 | Civic; occasional scenery — weak tourism hero |
| `@sudachikun_offi` | X | https://x.com/sudachikun_offi | すだちくん 県マスコット | Character / event; not place heroes |
| `sudachikun.jp` | Facebook | https://www.facebook.com/sudachikun.jp/ | Same | Same |
| `tokushimakouhou` | YouTube | https://www.youtube.com/user/tokushimakouhou | 県広報動画 | Lead for B-roll ideas; stillframe needs separate license |

**TikTok (pref / AwaNavi):** no verified official tourism TikTok found in directories as of inventory date — treat as **gap / monitor**, do not invent handles.

---

## 徳島市 (capital) — tourism-priority

| Account | Platform | URL | Covers | 出典 usability |
|---|---|---|---|---|
| `@funfun_tokushima` | Instagram | https://www.instagram.com/funfun_tokushima/ | **Fun!Fun!とくしま** 公式観光 — scenery, gourmet, #funfuntokushima | **Capital densify lead #1** (温泉/体験/買物/観光) → city kanko pages / Commons |
| `@tokushima.city` | Instagram | https://www.instagram.com/tokushima.city/ | 市広報 — scenery + civic | Secondary lead |
| `@awaodori_mirai2021` | Instagram | https://www.instagram.com/awaodori_mirai2021/ | 阿波おどり UGC repost | Experience/event lead; dance photos need careful rights |
| `@bizan.mirai.project` | Instagram | https://www.instagram.com/bizan.mirai.project/ | 眉山未来プロジェクト | 観光/体験 lead for Bizan |
| `@bizan_biyori` | Instagram | https://www.instagram.com/bizan_biyori/ | 眉山日和 — landscape / events | Scenic lead → Commons Bizan / city pages |
| `@river.station.tokushima` | Instagram | https://www.instagram.com/river.station.tokushima/ | ひょうたん島川の駅 | Waterfront / 体験 lead |
| `@tokushimazoo` | Instagram | https://www.instagram.com/tokushimazoo/ | とくしま動物園 | Family 観光/体験 |
| `@tokushima_glass_studio` | Instagram | https://www.instagram.com/tokushima_glass_studio/ | ガラススタジオ | 体験/買物 lead |
| `@tokushima_johaku` | Instagram | https://www.instagram.com/tokushima_johaku/ | 徳島城博物館 | 観光/文化 |
| `@tokcy_official` | X | https://twitter.com/tokcy_official | トクシィ にぎわい交流課 | Event alerts |
| `@tjm_johaku` | X | https://twitter.com/tjm_johaku | 城博物館 | Exhibit leads |
| `tokushima.city` | Facebook | https://www.facebook.com/tokushima.city/ | 市公式 FB | Civic + events |
| `@tokushima_city` | X | https://x.com/tokushima_city | 市公式 X | Civic |
| `suitotokushima` | YouTube | https://www.youtube.com/user/suitotokushima | 水都とくしま / トクシィ | Promo video lead |

Full civic list: city [SNS ichiran](https://www.city.tokushima.tokushima.jp/shisei/koho_kocho/sns/sns_ichiran.html) (消防・子育て等 omitted here unless tourism-adjacent).

---

## ReadySlug municipalities (24) — official social

Handles from uub.jp + city tourism policies. **Tourism-tilted** accounts marked ★.

| slug | 市町村 | Instagram | X | Facebook | Notes / 出典 use |
|---|---|---|---|---|---|
| tokushima | 徳島市 | `@tokushima.city` + ★`@funfun_tokushima` | `@tokushima_city` | `tokushima.city` | See capital table |
| naruto | 鳴門市 | ★`@narutocity_official` (#鳴スタ) | `@naruto_city` | `uzushiokun.uzuhimechan` | Whirlpools / hotels / 渦の道 leads |
| komatsushima | 小松島市 | `@komatsushima_official` | `@lO4M9lL5DB0wMpK` | `city.komatsushima` | City PR; pair with harbor sights |
| anan | 阿南市 | `@anan.city` | — | `city.anan` | Coastal / temples lead |
| yoshinogawa | 吉野川市 | `@yoshinogawacity_official` | `@yoshinogawashi` | `city.yoshinogawa.jp` | Stay densify leads (thin 宿泊 photos) |
| awa | 阿波市 | `@awacity_official` (#あわしのいいとこ) | — | — | City charm / 土柱-adjacent leads |
| mima | 美馬市 | ★`@mima_kankou` (観光交流課) | — | — | **Tourism-dedicated**; udatsu / events |
| miyoshi | 三好市 | `@miyoshicity` | `@miyoshiofficial` | `miyoshi.syunkan` | Iya / Oboke leads; FB「瞬間」 |
| katsuura | 勝浦町 | — | `@katsuura_soumu` | — | Thin IG — rely AwaNavi + Commons |
| kamikatsu | 上勝町 | `@kamikatsutownkikaku` | — | — | Zero-waste / 棚田 leads |
| sanagochi | 佐那河内村 | `@sanagochison_official` | — | — | Rural scenic |
| ishii | 石井町 | `@town_ishii` | `@ishiitown` | `ishiitown` | Suburban |
| kamiyama | 神山町 | — | `@townkamiyama` | ★`kamiyama.kanko` | FB tourism / creative town |
| naka | 那賀町 | — | — | — | Thin SNS — AwaNavi + Commons only |
| mugi | 牟岐町 | `@mugitown.official` | — | — | Coastal |
| minami | 美波町 | `@minamitown` | `@Minami_Town` | (町役場 FB) | Hiwasa / coast |
| kaiyo | 海陽町 | ★`@slow_life_kaiyo` | — | — | Slow-life / coast brand |
| matsushige | 松茂町 | — | — | — | **Gap** — airport town; AwaNavi + hotel official |
| kitajima | 北島町 | `@kitajima_town` | — | `kitajimatown` | Tulip / suburban |
| aizumi | 藍住町 | — | — | `town.aizumi` | Indigo / suburban |
| itano | 板野町 | `@itano_town_official` | `@itano_town` | — | Temple / local |
| kamiita | 上板町 | `@kamiita_town` | `@town_kamiita` | `TownKamiita` | Local |
| tsurugi | つるぎ町 | — | — | — | Thin IG — YouTube `@tsurugitown`; AwaNavi |
| higashimiyoshi | 東みよし町 | `@higashimiyoshi` | — | — | Western valley |

**美馬市 note:** uub lists YouTube/LINE for civic; tourism IG ★`@mima_kankou` confirmed via [市運用方針 PDF](https://www.city.mima.lg.jp/fs/2/9/2/3/3/1/_/mimashikankoujouhouhassininstagramuunyouhoushin.pdf).

---

## TikTok

| Finding | Detail |
|---|---|
| Official tourism TikTok | **None confirmed** in pref SNS list, AwaNavi footer, or uub.jp Tokushima rows (2026-09-07) |
| Action | Do not invent `@` handles. Re-check quarterly. Use IG Reels on AwaNavi / Fun!Fun! as motion leads only |

---

## Priority harvest queue (post-inventory)

1. **Capital densify** via `@funfun_tokushima` + `@bizan_biyori` + `@bizan.mirai.project` → 温泉/体験/買物/観光 with Commons or city page photos; honest 0 if none.  
2. **鳴門 宿泊** via `@narutocity_official` leads + hotel official/Rakuten share (already in progress; not Tabelog).  
3. **小松島・阿南 宿泊** same pattern (NAVITIME/hotel/Rakuten + city IG leads).  
4. **美馬** already strong; use `@mima_kankou` only to fill honest gaps.  
5. **Thin 飲食 munis** (つるぎ/吉野川/阿波/三好): Instagram lead → Tabelog dish **only** when dish close-up exists.  
6. Towns with **no IG** (那賀/松茂/つるぎ等): AwaNavi article → Commons / official HP only.

---

## Explicit non-goals

- No SNS posting, boosting, ads, or spend  
- No merge PR#1 / DNS / other prefectures  
- No municipality jsonl pack writes  
- ReadySlug remains UNION of all 24 LIVE hubs  

## Sources accessed

- https://www.city.tokushima.tokushima.jp/shisei/koho_kocho/sns/sns_ichiran.html  
- https://www.city.tokushima.tokushima.jp/kankou/pr/funfuntokushima.html  
- https://www.awanavi.jp/  
- https://www.awanavi.jp/archives/74440 (`@dokidoki_tokushima`)  
- https://uub.jp/opm/tokushima.html  
- https://www.city.mima.lg.jp/…/mimashikankoujouhouhassininstagramuunyouhoushin.pdf (`@mima_kankou`)  
- https://www.pref.tokushima.lg.jp/socialmedia/ (category hub; JS-heavy — cross-checked via uub)
