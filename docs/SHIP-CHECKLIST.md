# Ship checklist (municipality LIVE commits)

Before every town commit / docs export:

1. **ReadySlug is a union.** Add the new slug to `ReadySlug` + `isReadySlug` — never replace the prior list. Dropping a prior LIVE hub regresses Pages to coming-soon.
2. **Prior hubs stay ready** in `tokushima-municipalities.ts`, town-lookup, listings CACHE, jsonld, sitemap, and page.tsx.
3. **After build → docs:** every previously LIVE slug `docs/ja/tokushima/<slug>/index.html` must NOT contain `class="coming"`. Spot-check tip-1 and tip-2.
4. **HARD BAR:** marketable dish/scenic heroes; no menu-as-food; no 写真準備中/black; honest 0 + gap log.
5. Push under Telegram 566. OFFER_SEND false. No SNS/DNS/spend without CoS GO.
