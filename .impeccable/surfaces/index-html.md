---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["app.js"]
---

# Surface: หน้าเดียว — เลือกโรงเรียนวันเรียกบรรจุ (index.html)

Scope: whole site (single page). Mode: Operate.
Audience/job: ผู้สอบได้วิชาเอกคณิต สพม.สุราษฎร์ธานี ชุมพร เลือกโรงเรียนบนมือถือ วันที่ 19 พ.ย. 2569 ตามลำดับในบัญชี; โรงเรียนหายไปเรื่อย ๆ ตามคนก่อนหน้า
Constraints: data/sources/"ไม่ยืนยัน" unchanged; official seq + position no. untouched; Thai type rules; readable in sunlight; all key facts as text (map optional); static GitHub Pages.
Memorable moment: the green sign flips to the next free fallback when a school is marked taken.
Unresolved: none.

## Direction contract

THESIS: Choosing a school is choosing a road. Every school is a Thai highway distance sign with its kilometre figure first. It refuses the category default of a card grid with a map and filters.

OWN-WORLD: Department of Highways sign green (#006a4e) panels with a white inner keyline, white heavy Thai lettering, and route shields carrying the official "ที่" number. Sign yellow (#ffc20e) is reserved for the current choice only. A light grey-green road-verge ground. Flat colour with no grain or decorative shadow, and one Thai family (Sarabun). One fixed 0–90 km distance bar scale everywhere.

STORY: The visitor sees the first choice and how far it is, sees which school to take if it is full, marks schools as others take them, and the page re-signs itself.

FIRST VIEWPORT (390×844): A compact header with the title and the date 19 พ.ย. 2569. A big green sign with shield "ที่ 9", ศรียาภัย, 0.8 km, size, programs, and a yellow "ถูกเลือกไปแล้ว" action. Below it, "ถ้าเต็ม ไปทางนี้" with three fallback signs, each with a shield, name, km and a distance bar.

FORM: Thai highway signage, #3 on my ordered list (OMR sheet, SRT southern line, highway signs, school notice board, exercise notebook, government circular, lottery sheet). seed:dc879a2075a7cf25 (re-roll 1).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
