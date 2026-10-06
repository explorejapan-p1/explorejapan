# TG610 Nahari Town (奈半利町) densify — exhaustion dossier

Accessed 2026-09-09 (JST). Branch `feat/unpublished-v0-mima`. Hub `/ja/kochi/nahari/` (JIS 39302).

## Before (cold LIVE)
- pills: stay **1** / dining **5** / onsen **0** / experience **0** / sights **5** / shop **0** / commerce **0**

## After (tip `be0f04b0d86`) (local docs PASS)
- pills: stay **1** / dining **10** / onsen **0** / experience **0** / sights **7** / shop **0** / commerce **0**
- Stay 1 kept. Onsen stays honest 0 (大浴場/露天 mediaInfo ≠ 温泉 label; stay≠onsen).

## Sources audited
- 食べログ C39302 rstLst (20 rows) + food photo lists for 39002438 / 39000909 / 39003358 / 39007454 / 39004811
- 楽天 HOTEL/20702 gallery mediaInfo（部屋10 / 風呂3 / 食事9 / その他5）
- 町公式 https://www.town.nahari.kochi.jp/
- 道の駅田野駅屋 奈半利案内 https://www.tanoekiya.com/chugei/nahari.html （海浜センター URL 死）
- Wikimedia Commons Category:Nahari,_Kochi + File:Nahari_town_hall.jpg / Nahari_bridge_over_railway.JPG

## Dining
### Kept (5)
ショップ ヨシダ / ドライブインなぎさ / 笑福 / 楽園 / 豚福亭（Tabelog 640）

### NEW (5)
- イタリア食堂トンノ — Tabelog 39002438 640 dish
- 葉牡丹 — Tabelog 39000909 640 dish（焼肉）
- 長門寿司割烹 — Tabelog 39003358 640 dish
- 喰いものや 合 — Tabelog 39007454 640 dish
- ホテルなはり レストラン — Rakuten gallery 食事「なはり御膳」still（day dining; name ≠ stay ホテルなはり）

### Dining honest misses
| Name / note | Why skipped |
| --- | --- |
| 点 / 喫茶 スワン / 喫茶 メナド / みやお珈琲 / ホワイト / 高田屋 | 喫茶・cafe class |
| LAWSON 奈半利町店 | convenience |
| Panse | bakery/パン |
| ほっかほっか亭 奈半利 | bento |
| 小僧寿し 奈半利店 | no 640 dish list |
| ホテルなはり レストラン Tabelog 640 | wired via Rakuten meal still instead; avoid double-count |

## Stay
### Kept
- ホテルなはり（Rakuten 本館シングル room still）

### Stay honest misses
| Name | Why skipped |
| --- | --- |
| Same HOTEL/20702 other rooms | same facility — do not double-count |
| Other minshuku | no second attributable HARD BAR room still this pass |

## Onsen
- Honest **0**: gallery 風呂 keys = 大浴場 / 露天風呂 — not labeled 温泉; stay≠onsen HARD BAR.

## Experience
### Experience honest misses
| Name | Why skipped |
| --- | --- |
| 奈半利海浜センター シーカヤック/シュノーケル | tanoekiya cites jimdosite; site returns Not Found; no Commons/official activity still |
| 浦の会 観光ガイド | no HARD BAR guide/activity still |
| ごめん・なはり線 乗車 | regular transit |

## Sights
### Kept (5)
奈半利中央公園 / 加領郷灯台 / 奈半利町甲 / 奈半利港眺望 / 奈半利駅

### NEW (2)
- 奈半利町役場 — Commons File:Nahari_town_hall.jpg (CC BY-SA 4.0, Vanquish0; Nominatim 33.4241767, 134.0209483)
- 奈半利鉄道橋 — Commons File:Nahari_bridge_over_railway.JPG (Public domain, Navian; GPS 33.417967, 134.025733)

### Sights honest misses
| Name | Why skipped |
| --- | --- |
| 修羅 (Shura) | pre-1937 object photo; no GPS; museum/micro priority |
| 郵便局 / 小中学校 | civic weak tourism priority |
| 奈半利駅の南 / 追加駅写真 | station already pinned |
| 藤村製絲 / 東山家 / 竹崎家 | no Commons HARD BAR still this pass |

## Shop / commerce
- Honest **0**.

## Notes
- Domain HOLD. OFFER_SEND false. No merge / SNS / spend.
- Do not regress shimanto 16/33/9/1/15, umaji 1/3/1/1/7, kitagawa 1/4/1/1/7, okawa, geisei.
- Mirror gaps: `/workspace/explorejapan/src/data/kochi-nahari-gaps.md` + this file.

## CDN
Cold LIVE PASS tip `be0f04b0d86` pills stay **1** / dining **10** / onsen **0** / experience **0** / sights **7**.
