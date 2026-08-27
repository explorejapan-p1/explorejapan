# Rural Japan Directory (unpublished v0)

Scaffold on https://github.com/explorejapan-p1/explorejapan only.

**HOLD:** no merge to main, no production DNS, no SNS, no ads, no spend, no public derived TopoJSON/GeoJSON from MLIT N03. GitHub Pages workflow is ready on `feat/unpublished-v0-mima`; CoS flips Pages. First export stays noindex.

Locale is `ja` / `en` (not country `jp`). First listing: Mima City 美馬市, Tokushima. JIS / N03_007 **36207** (J-LIS 362077). Never 36206 (阿波市).

## Local run

Install dependencies, then `dev` / `build` via the scripts in package.json.

`next.config.ts` uses `output: 'export'` with `basePath` / `assetPrefix` `/explorejapan` (GitHub project Pages). `next start` is not used for this export. Preview the `out/` or `docs/` folder with any static file server.

Routes: `/ja/` `/en/` `/ja/tokushima/` `/en/tokushima/` `/ja/tokushima/mima/` `/en/tokushima/mima/`. Root `index.html` meta-refreshes to `./ja/tokushima/mima/`.

`robots.txt` disallows `/`. Locale layout metadata is `noindex, nofollow`. Do not allow index until the Pages URL is 200 and CoS says so.

next-intl: `localePrefix: 'always'`, `localeDetection: false` (proxy/middleware does not run on GitHub Pages).

## Offer engine

`src/lib/website-offer.ts` is armed but does not send (`OFFER_ARMED=true`, `OFFER_SEND=false`, `traffic_ok=false`). Zero emails. No SMTP, no AgentMail, no mailer fetch. `evaluateListing` never sends (`status=blocked`). `logHeld` may append to unpublished `/workspace/p1/content-pipeline/offer-engine-log.jsonl` (not in the public site).

## Map / N03

Runtime: official `d3-geo` + `topojson-client`, SVG in the DOM. No three.js, no WebGL globe, no map library on the Mima page.

`data/derived/` is gitignored. The `geo:n03` script downloads prefecture packs from
https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-2026.html
and writes TopoJSON under `data/derived/`. If that step is skipped or blocked, the app ships a **labeled placeholder SVG** that still implements the drill URLs, plus 出典 footer text.

GSI 測量法 複製 (R 7JHf 351) is a leftover legal gate before redistributing derived files.

## v0 scope

- 47 prefectures visible
- Only Tokushima municipality layer is real
- Only Mima has a full page
- Other Tokushima municipalities: coming soon
- Other prefectures: rolling out (not 404)
- Lookup chips/search use in-page catalog props (no `/api/mima/facilities`)
