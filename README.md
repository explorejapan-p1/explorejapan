# Rural Japan Directory (unpublished v0)

Scaffold on https://github.com/explorejapan-p1/explorejapan only.

**HOLD:** no GitHub Pages, no production DNS, no SNS, no ads, no spend, no public derived TopoJSON/GeoJSON from MLIT N03.

Locale is `ja` / `en` (not country `jp`). First listing: Mima City 美馬市, Tokushima. JIS / N03_007 **36207** (J-LIS 362077). Never 36206 (阿波市).

## Local run

Install dependencies, then `dev` / `build` / `start` via the scripts in package.json.

Routes: `/ja` `/en` `/ja/tokushima` `/en/tokushima` `/ja/tokushima/mima` `/en/tokushima/mima` and unlocalized `/healthz`.

`robots.txt` disallows all. Pages send `noindex`. Do not set `output: 'export'` (Accept-Language detection needs the next-intl proxy).

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
