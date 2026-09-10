# TG610 Okayama 岡山市 (okayama) — first Okayama LIVE hub

Accessed 2026-09-11 (JST). Branch `feat/unpublished-v0-mima`. Soft tip prior `85a82c98243`. Hub `/ja/okayama/okayama/` (pref slug = muni slug, like hiroshima/hiroshima). JIS 33100.

## Pills L→R (photo-gated)
宿泊 / 飲食 / 温泉 / 体験 / 観光 / 買物 / 商業 = **9 / 16 / 2 / 0 / 5 / 0 / 0**

## densify sources
- Stay×9: Rakuten 部屋 stills, address ∈ 岡山市（北区/中区/東区/南区）
- Dining×16: Tabelog C33100 dish JPGs
- Onsen×2 EXTRA keys ≠ stay: 天然温泉　備前の湯　スーパーホテル岡山駅東口 大浴場; 天然温泉　吉備の湯　ドーミーイン岡山（ドーミーイン・御宿野乃　ホテルズグループ） 大浴場
- Experience: honest 0
- Sights×5: 岡山城 / 後楽園 / 吉備津神社 / 岡山県立美術館 / 岡山市役所 (Commons)
- Shopping/commerce: honest 0

## Scaffolding
- `okayama-municipalities.ts` (岡山市 ready; other cities/towns/villages coming-soon; next kurashiki)
- PrefSlug/ReadySlug/`prefSlugForReady`/`READY_HUBS`/`sitemap` + pref page cards
- generateMetadata: `岡山市。岡山城、後楽園、食。` (no 美馬 fallback); robots index,follow; hero h1 岡山市
- Soft scrub intact (footer `日本の市町村案内。`)
- Unique hero: Okayama Castle Commons (no wakimachi)
- localityJa/En + place postal region include okayama (岡山市 / 岡山県)

## Cold PASS
- (pending CDN) docs/ja/okayama/okayama/index.html meta OK; no `class="coming"`; no 美馬 tagline
- Hiroshima COMPLETE spot: capital unrepressed 9/16/2/1/6

## Next slug
`kurashiki` (倉敷市) suggested.

Domain HOLD. OFFER_SEND false. No invent.
