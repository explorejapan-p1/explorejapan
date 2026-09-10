# TG610 Hiroshima 広島市 (hiroshima) — first Hiroshima LIVE hub

Accessed 2026-09-10 (JST). Branch `feat/unpublished-v0-mima`. Soft tip prior `686102a3735`. Hub `/ja/hiroshima/hiroshima/` (pref slug = muni slug, like tokushima/tokushima). JIS 34100.

## Pills L→R (photo-gated)
宿泊 / 飲食 / 温泉 / 体験 / 観光 / 買物 / 商業 = **9 / 16 / 2 / 1 / 6 / 0 / 0**

## densify sources
- Stay×9: Rakuten 部屋 stills, address ∈ 広島市 (Active / favスタジアム / fav平和大通り / Nest八丁堀 / Nest駅前 / Vessel平和大通り / Chisan / Livemax PREMIUM / SuperHotel薬研堀)
- Dining×16: Tabelog C34100 dish JPGs
- Onsen×2 EXTRA keys ≠ stay: 天然温泉ホテルリブマックスＰＲＥＭＩＵＭ広島 大浴場; 天然温泉　縮景の湯　スーパーホテル広島天然温泉・薬研堀通り 大浴場 (category 温泉/大浴場 stills)
- Experience×1: おりづるタワー展望 (Commons)
- Sights×6: 広島城 / 原爆ドーム / 平和記念公園 / 縮景園 / 広島県立美術館 / 三滝寺多宝塔 (Commons)
- Shopping/commerce: honest 0

## Scaffolding
- `hiroshima-municipalities.ts` (広島市 ready; other cities/towns coming-soon; miharashi/miyoshishi avoid ReadySlug collisions)
- PrefSlug/ReadySlug/`prefSlugForReady`/`READY_HUBS`/`sitemap` + pref page cards
- generateMetadata: `広島市。広島城、原爆ドーム、平和記念公園、食。` (no 美馬 fallback)
- Soft scrub intact (footer `日本の市町村案内。`)

## Cold PASS
- docs/ja/hiroshima/hiroshima/index.html meta OK; no `class="coming"`; no 美馬 tagline
- Priors spot: matsuyama/takamatsu/mima/ainan still clean

## Next slug
`kure` (呉市) suggested.

Domain HOLD. OFFER_SEND false. No invent.
