# Tokushima (徳島) social-source inventory — TG 573 SOURCE BAR

**Inventoried:** 2026-09-07 (Asia/Tokyo)  
**Branch scope:** `feat/unpublished-v0-mima` · Tokushima only · 愛媛 parked (do NOT start) · Domain HOLD · OFFER_SEND false · ReadySlug UNION · no merge

**Purpose:** Raise SOURCE BAR before thin Tabelog-only densify. Inventory public tourism / local accounts on **IG / TikTok / FB / X** as **lead discovery** for 観光・体験・温泉・買物・商業・宿泊・飲食. Wire ExploreJapan cards only with HARD BAR 出典.

## License / 出典 rules (applies to every row)

| Use | OK? | Notes |
|---|---|---|
| Lead: place / hotel / shop / season / event names from public posts | YES | Primary value of this inventory |
| Download IG / TikTok / FB / X CDN media into `public/media` | **NO** by default | Platform ToS + unclear reuse — do **not** scrape feed CDN as heroes |
| Social lead → official website / press kit / downloadable / Commons twin | YES | Preferred harvest path |
| Hotel official / Rakuten・Jalan free share / og:image room-exterior | YES | Stay pills |
| Tabelog FOOD (type dish) close-up — not menus / shopfront-only | YES | Dining only |
| Wikimedia Commons place-named | YES | Sights / some onsen exteriors |
| UGC under city hashtag without clear license | NO | Discovery only unless city republishes under clear terms |
| Private / login-walled / invented handles / fake listings | NO | Absolute |
| SNS publish, boost, ads, spend | NO | Absolute |

**Never invent. Never scrape private. Prefer official downloadable / Commons / Tabelog / hotel OG for actual image files.**

---

## Official tourism sites / associations already used in repo

These are already cited from `src/data/*` (spot pages, city kanko, hotel/Rakuten, Tabelog, Commons). Social leads should **funnel back** here for attributable files:

| Source | Role already in harvest |
|---|---|
| [阿波ナビ](https://www.awanavi.jp/) (`www.awanavi.jp`) | Pref tourism spot articles / leads |
| [鳴門市公式観光サイト NARUTO](https://naruto-tourism.jp/) | Naruto sights / events |
| [大歩危祖谷ナビ / 三好市観光協会](https://miyoshi-tourism.jp/) | Miyoshi / Iya / Oboke spots, lodging, gourmet lists |
| [Fun!Fun!とくしま](https://funfun-tokushima.jp/) / [市観光PR](https://www.city.tokushima.tokushima.jp/kankou/pr/funfuntokushima.html) | Capital tourism |
| City / town official HP (徳島市・鳴門市・阿南市・美馬市・三好市・吉野川市・小松島市・阿波市・美波町・海陽町・各町村) | Facts + some downloadable photos |
| [美馬市観光](https://www.city.mima.lg.jp/kanko/) / `mimakankou.or.jp` | Mima sights |
| [鳴門市うずしお観光協会](https://www.naruto-kankou.jp/) | Whirlpool / tide / events |
| Tabelog (`tabelog.com/tokushima/…`) | Dining dish photos (FOOD close-up only) |
| Wikimedia Commons | Sight / landscape heroes |
| Hotel official + Rakuten Travel share / og images | Stay room / exterior |
| `www.tokushima-kankou.or.jp` | Pref tourism association (legacy / related) |

---

## How this changes harvest

1. **Stop densifying 観光/宿泊 from Tabelog alone.** Tabelog stays dining-only (dish close-ups). Sights / stay need social → official/Commons/hotel path.
2. **Social = lead layer.** Browse must-use accounts below for names, seasons, angles → **verify** on AwaNavi / city kanko / 観光協会 / hotel HP / Tabelog.
3. **Download only properly attributable images:** Commons file pages, official site media, hotel free-share / og, Tabelog FOOD dishes. Do **not** rip IG/TikTok/FB/X CDN.
4. **Densify order for 宿泊/飲食/観光:**
   - Pref / capital: `@tokushima_awanavi` + `@funfun_tokushima` → AwaNavi / Fun!Fun! / Commons
   - 鳴門: `@narutotourism` + `@uzunarutokanko` → naruto-tourism.jp / naruto-kankou.jp / hotel official
   - 三好・祖谷: `@miyoshi_kankou` → miyoshi-tourism.jp / Commons
   - 美馬: `@mima_kankou` → city.mima kanko (already strong; fill honest gaps only)
   - 飲食 thin munis: IG food leads (`@awafood_tokushima`, city IG) → Tabelog dish only when close-up exists
   - 沿岸 (美波・海陽・阿南・小松島): town/city tourism IG → official HP / Commons
5. Towns with **thin or no tourism IG** (那賀・松茂・つるぎ・勝浦等): AwaNavi article → Commons / official HP only — no invented social.

---

## Inventory (confirmed)

Handles below are confirmed via official city/協会 pages, AwaNavi association footer, or uub.jp Tokushima official-media directory + HTTP reachability (2026-09-07). Tourism-priority marked ★.

### Counts by platform (tourism / local inventory rows)

| Platform | Count in this doc |
|---|---|
| Instagram | 42 |
| X (Twitter) | 18 |
| Facebook | 16 |
| TikTok | 0 tourism-official (**gap**) · 1 narrow project noted |

### Prefecture / association / food / media

| Platform | Handle + URL | Scope | Why useful for homepage | License / 出典 notes |
|---|---|---|---|---|
| IG | ★ [`@tokushima_awanavi`](https://www.instagram.com/tokushima_awanavi/) | pref tourism | Covers / sights / seasons / food / events statewide — **must-use #1** | Lead only → AwaNavi article / Commons |
| IG | [`@visit.tokushima.awanavi`](https://www.instagram.com/visit.tokushima.awanavi/) | pref / inbound (繁中等) | Inbound angles for covers | Lead → same |
| IG | ★ [`@dokidoki_tokushima`](https://www.instagram.com/dokidoki_tokushima/) | pref / KR inbound | Traveler scenic + food collabs | Lead; traveler UGC rights unclear |
| IG | [`@pref.tokushima`](https://www.instagram.com/pref.tokushima/) | pref civic | Occasional scenery / events | Weak hero; civic first |
| IG | ★ [`@awafood_tokushima`](https://www.instagram.com/awafood_tokushima/) | food (阿波ふうど) | Food leads for 飲食 densify | Lead → Tabelog dish / official food pages |
| X | ★ [`@awanavi_jp`](https://x.com/awanavi_jp) | pref tourism | Campaign tags / link-outs | Lead |
| X | [`@preftokushima`](https://x.com/preftokushima) | pref civic | Alerts | Civic |
| X | ★ [`@awafood`](https://x.com/awafood) | food | Food campaigns | Lead → Tabelog |
| X | [`@sudachikun_offi`](https://x.com/sudachikun_offi) | media / mascot | Character / event | Not place heroes |
| FB | ★ [`tokushima.awanavi`](https://www.facebook.com/tokushima.awanavi) | pref tourism | Event / spot posts | Lead |
| FB | [`tourism.tokushima.awanavi`](https://www.facebook.com/tourism.tokushima.awanavi/) | pref / inbound | Parallel AwaNavi FB | Lead |
| FB | [`preftokushima.kouhou`](https://www.facebook.com/preftokushima.kouhou) | pref civic | Civic | Weak tourism |
| FB | ★ [`awafood`](https://www.facebook.com/awafood/) | food | Food PR | Lead → Tabelog |
| FB | [`sudachikun.jp`](https://www.facebook.com/sudachikun.jp/) | media / mascot | Character | Not place heroes |
| TikTok | — | — | **No verified pref tourism TikTok** | `@cntokushima` = 脱炭素 project only — not inventory as tourism source |

### 徳島市 (capital)

| Platform | Handle + URL | Scope | Why useful for homepage | License / 出典 notes |
|---|---|---|---|---|
| IG | ★ [`@funfun_tokushima`](https://www.instagram.com/funfun_tokushima/) | city tourism | Capital covers / sights / food — **must-use #2** | Lead → Fun!Fun! / city kanko / Commons |
| IG | [`@tokushima.city`](https://www.instagram.com/tokushima.city/) | city | Scenery + civic | Secondary lead |
| IG | ★ [`@awaodori_mirai2021`](https://www.instagram.com/awaodori_mirai2021/) | city / event | 阿波おどり experience / covers | Dance/UGC rights careful |
| IG | [`@awaodorimus`](https://www.instagram.com/awaodorimus/) | city / venue | 阿波おどり会館 year-round | Lead → venue official |
| IG | ★ [`@bizan_biyori`](https://www.instagram.com/bizan_biyori/) | city / sights | 眉山 landscape / events | Lead → Commons Bizan / city |
| IG | [`@bizan.mirai.project`](https://www.instagram.com/bizan.mirai.project/) | city / sights | Bizan project | Lead |
| IG | [`@river.station.tokushima`](https://www.instagram.com/river.station.tokushima/) | city / waterfront | ひょうたん島 / 体験 | Lead |
| IG | [`@tokushimazoo`](https://www.instagram.com/tokushimazoo/) | city / family | Family 観光 | Lead |
| IG | [`@tokushima_glass_studio`](https://www.instagram.com/tokushima_glass_studio/) | city / experience | 体験・買物 | Lead |
| IG | [`@tokushima_johaku`](https://www.instagram.com/tokushima_johaku/) | city / culture | 城博物館 | Lead |
| X | [`@tokushima_city`](https://x.com/tokushima_city) | city | Civic / events | Lead |
| X | [`@tokcy_official`](https://x.com/tokcy_official) | city / mascot | にぎわい / events | Lead |
| X | [`@tjm_johaku`](https://x.com/tjm_johaku) | city / culture | Museum exhibits | Lead |
| FB | [`tokushima.city`](https://www.facebook.com/tokushima.city/) | city | Civic + events | Lead |
| FB | [`tokushimaenglish`](https://www.facebook.com/tokushimaenglish) | city / inbound EN | English visitor tips | Lead |

Full civic list (消防・子育て等 omitted): [徳島市 SNS一覧](https://www.city.tokushima.tokushima.jp/shisei/koho_kocho/sns/sns_ichiran.html).

### 鳴門市 + うずしお

| Platform | Handle + URL | Scope | Why useful for homepage | License / 出典 notes |
|---|---|---|---|---|
| IG | ★ [`@narutotourism`](https://www.instagram.com/narutotourism/) | city tourism | Whirlpools / stay / food — **must-use #3** | Lead → naruto-tourism.jp / hotel |
| IG | [`@narutocity_official`](https://www.instagram.com/narutocity_official/) | city | #鳴スタ civic + charm | Secondary |
| IG | ★ [`@uzunarutokanko`](https://www.instagram.com/uzunarutokanko/) | tourism assoc | うずしお観光協会 — tide / events | Lead → naruto-kankou.jp |
| X | [`@naruto_city`](https://x.com/naruto_city) | city | Civic | Lead |
| X | ★ [`@narutokanko`](https://x.com/narutokanko) | tourism assoc | Whirlpool / event alerts | Lead |
| FB | [`naruto.city`](https://www.facebook.com/naruto.city/) | city | Civic | Lead |
| FB | ★ [`narutokankouzu`](https://www.facebook.com/narutokankouzu) | tourism assoc | Assoc posts | Lead |
| FB | [`uzushiokun.uzuhimechan`](https://www.facebook.com/uzushiokun.uzuhimechan/) | city / mascot | Character | Weak place hero |

### Other cities / towns (ReadySlug)

| Platform | Handle + URL | Scope | Why useful for homepage | License / 出典 notes |
|---|---|---|---|---|
| IG | ★ [`@miyoshi_kankou`](https://www.instagram.com/miyoshi_kankou/) | city tourism assoc | Iya / Oboke / 宿泊・体験 — **must-use #4** | Lead → miyoshi-tourism.jp / Commons |
| IG | [`@miyoshicity`](https://www.instagram.com/miyoshicity/) | city | Civic / #MiyoshiFinder | Secondary |
| FB | ★ [`miyoshicity.kankokyokai`](https://www.facebook.com/miyoshicity.kankokyokai/) / [`miyoshi.kankoukyoukai`](https://www.facebook.com/miyoshi.kankoukyoukai/) | tourism assoc | Same Iya/Oboke leads | Lead (two URL variants seen on site) |
| FB | [`miyoshi.syunkan`](https://www.facebook.com/miyoshi.syunkan/) | city | 「瞬間」city FB | Lead |
| X | [`@miyoshiofficial`](https://x.com/miyoshiofficial) | city | Civic | Lead |
| IG | ★ [`@mima_kankou`](https://www.instagram.com/mima_kankou/) | city tourism | Udatsu / events — **must-use #5** | Lead → city.mima kanko |
| IG | ★ [`@anan.city`](https://www.instagram.com/anan.city/) | city | Coastal / temples / stay | Lead → city.anan HP |
| FB | [`city.anan`](https://www.facebook.com/city.anan) | city | Civic + charm | Lead |
| IG | [`@komatsushima_official`](https://www.instagram.com/komatsushima_official/) | city | Harbor / city PR | Lead → city HP / Commons |
| FB | [`city.komatsushima`](https://www.facebook.com/city.komatsushima/) | city | Civic | Lead |
| X | [`@lO4M9lL5DB0wMpK`](https://x.com/lO4M9lL5DB0wMpK) | city | Civic (opaque handle on city page) | Lead |
| IG | [`@yoshinogawacity_official`](https://www.instagram.com/yoshinogawacity_official/) | city | Stay densify leads | Lead |
| X | [`@yoshinogawashi`](https://x.com/yoshinogawashi) | city | Civic | Lead |
| FB | [`city.yoshinogawa.jp`](https://www.facebook.com/city.yoshinogawa.jp/) | city | Civic | Lead |
| IG | [`@awacity_official`](https://www.instagram.com/awacity_official/) | city | #あわしのいいとこ / 土柱-adjacent | Lead |
| IG | ★ [`@slow_life_kaiyo`](https://www.instagram.com/slow_life_kaiyo/) | town tourism | 海陽 slow-life / coast — **must-use coastal** | Lead → town.kaiyo |
| IG | [`@kaiyo_town_official`](https://www.instagram.com/kaiyo_town_official/) | town | Civic + charm | Secondary |
| IG | ★ [`@minami_kankou`](https://www.instagram.com/minami_kankou/) | town tourism assoc | 美波 / Hiwasa coast | Lead → minamikankou.jp |
| IG | [`@minamitown`](https://www.instagram.com/minamitown/) | town | Civic | Secondary |
| X | [`@minami_town`](https://x.com/minami_town) | town | Civic (official SNS page) | Lead |
| FB | [`minamitassoc`](https://www.facebook.com/minamitassoc/) | town tourism assoc | Assoc posts | Lead |
| IG | [`@higashimiyoshi`](https://www.instagram.com/higashimiyoshi/) | town | Western valley | Lead |
| IG | [`@kamikatsutownkikaku`](https://www.instagram.com/kamikatsutownkikaku/) | town | Zero-waste / 棚田 | Lead |
| IG | [`@sanagochison_official`](https://www.instagram.com/sanagochison_official/) | village | Rural scenic | Lead |
| IG | [`@town_ishii`](https://www.instagram.com/town_ishii/) | town | Suburban | Weak tourism |
| X | [`@ishiitown`](https://x.com/ishiitown) | town | Civic | Lead |
| FB | [`ishiitown`](https://www.facebook.com/ishiitown/) | town | Civic | Lead |
| FB | ★ [`kamiyama.kanko`](https://www.facebook.com/kamiyama.kanko/) | town tourism | Creative town / 観光 | Lead (no strong IG found) |
| X | [`@townkamiyama`](https://x.com/townkamiyama) | town | Civic | Lead |
| IG | [`@mugitown.official`](https://www.instagram.com/mugitown.official/) | town | Coastal | Lead |
| IG | [`@kitajima_town`](https://www.instagram.com/kitajima_town/) | town | Tulip / suburban | Lead |
| FB | [`kitajimatown`](https://www.facebook.com/kitajimatown/) | town | Civic | Lead |
| IG | [`@itano_town_official`](https://www.instagram.com/itano_town_official/) | town | Temple / local | Lead |
| X | [`@itano_town`](https://x.com/itano_town) | town | Civic | Lead |
| IG | [`@kamiita_town`](https://www.instagram.com/kamiita_town/) | town | Local | Lead |
| X | [`@town_kamiita`](https://x.com/town_kamiita) | town | Civic | Lead |
| FB | [`TownKamiita`](https://www.facebook.com/TownKamiita/) | town | Civic | Lead |
| X | [`@katsuura_soumu`](https://x.com/katsuura_soumu) | town | Thin — 勝浦 | Prefer AwaNavi + Commons |
| FB | [`town.aizumi`](https://www.facebook.com/town.aizumi/) | town | Indigo / suburban | Lead |

---

## Top 10 must-use sources

1. **IG `@tokushima_awanavi`** — pref covers / sights / seasons  
2. **IG `@funfun_tokushima`** — capital tourism densify  
3. **IG `@narutotourism`** — whirlpools / Naruto stay & sights  
4. **IG `@miyoshi_kankou`** — Iya / Oboke / western 宿泊・体験  
5. **IG `@mima_kankou`** — udatsu / Mima events (branch focus)  
6. **IG `@awafood_tokushima`** (+ X/FB `@awafood`) — 飲食 leads → Tabelog  
7. **IG `@uzunarutokanko`** + **X `@narutokanko`** — 渦潮 timing / events  
8. **IG `@bizan_biyori`** / `@awaodori_mirai2021`** — capital hero / experience  
9. **IG `@dokidoki_tokushima`** — inbound scenic angles  
10. **IG `@slow_life_kaiyo`** + **`@minami_kankou`** — southern coast densify  

Always: social lead → verify on AwaNavi / city・協会公式 / hotel / Tabelog → download only attributable files.

---

## Gaps / accounts not found

| Gap | Detail |
|---|---|
| **TikTok tourism official** | No pref / AwaNavi / Fun!Fun! / city tourism TikTok confirmed. `@cntokushima` is 脱炭素-only; `@tokushima_newnormal` is film-festival legacy — **do not treat as tourism source**. Re-check quarterly; do not invent. |
| **那賀町** | No useful public tourism IG/X/FB found — AwaNavi + Commons only |
| **松茂町** | SNS gap (airport town) — hotel official + AwaNavi |
| **つるぎ町** | Thin IG; YouTube civic mentioned elsewhere — AwaNavi + Commons |
| **勝浦町** | X civic only (`@katsuura_soumu`) — weak tourism |
| **藍住町** | FB civic; no strong tourism IG confirmed |
| **神山町** | Tourism mainly FB `kamiyama.kanko` — no strong official tourism IG confirmed |
| **阿波ナビ TikTok** | Not linked from association page |
| **愛媛** | Explicitly parked — do not inventory / start |

---

## Explicit non-goals

- No SNS posting, boosting, ads, or spend  
- No merge / DNS / Domain HOLD / other prefectures  
- No ReadySlug change unless necessary (UNION)  
- No municipality jsonl pack writes from this doc alone  

## Sources accessed

- https://www.city.tokushima.tokushima.jp/shisei/koho_kocho/sns/sns_ichiran.html  
- https://www.city.tokushima.tokushima.jp/kankou/pr/funfuntokushima.html  
- https://www.pref.tokushima.lg.jp/kenseijoho/koho/2014032500337/  
- https://www.awanavi.jp/ · https://www.awanavi.jp/association · https://www.awanavi.jp/archives/74440  
- https://www.city.naruto.lg.jp/docs/2024042505505/ · https://www.naruto-kankou.jp/  
- https://miyoshi-tourism.jp/ · https://www.miyoshi.i-tokushima.jp/docs/186196.html  
- https://www.city.mima.lg.jp/kanko/docs/2147372.html  
- https://www.city.anan.tokushima.jp/ · https://www.city.komatsushima.lg.jp/docs/1881390.html  
- https://www.city.yoshinogawa.lg.jp/docs/2023041400019/ · https://www.city.awa.lg.jp/docs/2023031000021/  
- https://www.town.kaiyo.lg.jp/docs/2020042200020/ · https://www.town.minami.lg.jp/sns.html · https://www.minamikankou.jp/  
- https://awa-food-tokushima.com/archives/project/specialist  
- https://uub.jp/opm/tokushima.html  
