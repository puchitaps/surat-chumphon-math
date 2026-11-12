// app.js — single-page decision view for the math-teacher vacancy list.
// Depends on SCHOOLS (data.js) and RANKINGS / RANKING_PRINCIPLES (rankings.js).
//
// The page re-signs itself: the green sign always shows the highest-ranked
// school not yet marked "ถูกเลือกไปแล้ว", and the fallback signs below it the
// next ones. Marks are kept per device in localStorage.

(() => {
  "use strict";

  const MAX_KM = 90;            // fixed scale for every distance bar
  const STORE_KEY = "math-vacancy-taken-v1";
  const FALLBACKS_SHOWN = 3;

  // ── helpers ────────────────────────────────────────────────────
  function esc(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Escape, then render every "ไม่ยืนยัน" as the shared marker.
  function rich(s) {
    return esc(s)
      .replace(/\(ไม่ยืนยัน\)/g, "ไม่ยืนยัน")
      .replace(/ไม่ยืนยัน/g, '<span class="unverified">ไม่ยืนยัน</span>');
  }
  const byId = (id) => SCHOOLS.find((s) => s.id === id);
  const short = (s) => s.name.replace(/^โรงเรียน/, "");
  const place = (s) => `อ.${s.amphoe} จ.${s.province}`;
  const kmText = (s) => (s.distance_km < 2 ? "ในเมือง" : `${s.distance_km} กม.`);
  const kmBar = (s) =>
    `<div class="kmbar" aria-hidden="true"><i style="width:${Math.max(2, Math.min(100, (s.distance_km / MAX_KM) * 100)).toFixed(1)}%"></i></div>`;
  // Join phrase groups with " · ", each group kept on one line.
  const grp = (...parts) => parts.filter(Boolean).map((p) => `<span class="nw">${p}</span>`).join(" · ");
  const progs = (s) => (/^ไม่/.test(s.programs_short) ? "" : s.programs_short);
  const shield = (s, sm) =>
    `<span class="shield${sm ? " sm" : ""}"><small>ที่</small><b>${s.seq}</b></span>`;

  // ── state ──────────────────────────────────────────────────────
  const order = [...RANKINGS].sort((a, b) => a.rank - b.rank).map((r) => r.school_id);
  const rankingFor = (id) => RANKINGS.find((r) => r.school_id === id);
  let taken = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    if (Array.isArray(saved)) taken = new Set(saved.filter((id) => byId(id)));
  } catch { /* storage unavailable: start empty */ }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...taken])); } catch { /* ignore */ }
  }
  const free = () => order.filter((id) => !taken.has(id));

  // ── the sign ───────────────────────────────────────────────────
  function renderSign(animate) {
    const el = document.getElementById("sign");
    const ids = free();
    if (!ids.length) {
      el.innerHTML = `<div class="sign-in">
                <h2>ทุกโรงเรียนถูกทำเครื่องหมายแล้ว</h2>
        <div class="sign-actions"><button class="btn btn-yellow" type="button" data-reset="1">ล้างที่ทำเครื่องหมาย</button></div>
      </div>`;
      return;
    }
    const s = byId(ids[0]);
    const r = rankingFor(s.id);
    const step = order.indexOf(s.id) + 1;
    el.innerHTML = `<div class="sign-in">
      <div class="sign-row">
        ${shield(s)}
        <div class="sign-text">
          <h2>${esc(short(s))}</h2>
          <p class="sign-facts">${grp(esc(place(s)), `ขนาด${esc(s.size)}`, `<span class="num">${esc(s.student_count)}</span>`)}<br>${grp(step === 1 ? "ลำดับแนะนำที่ 1" : `ลำดับแนะนำที่ ${step}`, `เลขที่ตำแหน่ง <span class="num">${esc(s.position_no)}</span>`)}${progs(s) ? `<br>${grp(`ห้องพิเศษ ${esc(progs(s))}`)}` : ""}</p>
        </div>
        <div class="sign-km"><b>${s.distance_km}</b><small>กม.${s.distance_km < 2 ? "<br>ในเมือง" : ""}</small></div>
      </div>
      ${r && r.verdict ? `<p class="sign-facts sign-verdict">${esc(r.verdict)}</p>` : ""}
      <div class="sign-actions">
        <button class="btn btn-yellow" type="button" data-take="${s.id}">ถูกเลือกไปแล้ว</button>
        <button class="btn btn-ghost" type="button" data-open="${s.id}">ดูข้อมูลเต็ม</button>
      </div>
    </div>`;
    if (animate) {
      el.classList.remove("flip");
      void el.offsetWidth;          // restart the flip animation
      el.classList.add("flip");
    }
  }

  // ── fallback signs ─────────────────────────────────────────────
  function renderAlts() {
    const ids = free().slice(1, 1 + FALLBACKS_SHOWN);
    const el = document.getElementById("alts");
    if (!ids.length) {
      el.innerHTML = `<p class="section-note">ไม่มีตัวสำรองที่ยังว่างในลำดับแนะนำ</p>`;
      return;
    }
    el.innerHTML = ids.map((id, i) => {
      const s = byId(id);
      return `<div class="alt">
        ${shield(s)}
        <div>
          <h3>${esc(short(s))}</h3>
          <p>${grp(esc(s.amphoe), `ขนาด${esc(s.size)}`, progs(s) ? esc(progs(s)) : "")}</p>
          ${kmBar(s)}
        </div>
        <div class="alt-km">${s.distance_km}<small>กม.</small></div>
      </div>`;
    }).join("");
  }

  // ── all schools (official order) ───────────────────────────────
  const CHEV = `<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;

  function fact(label, value, cls = "") {
    if (value == null || value === "" || (Array.isArray(value) && !value.length)) return "";
    const v = Array.isArray(value) ? `<ul>${value.map((x) => `<li>${rich(x)}</li>`).join("")}</ul>` : rich(value);
    return `<div class="fact ${cls}"><dt>${label}</dt><dd${cls.includes("big") ? ' class="big"' : ""}>${v}</dd></div>`;
  }

  function schoolBody(s) {
    const r = rankingFor(s.id);
    const ext = (href, label) =>
      `<a class="btn btn-line" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (เปิดในแท็บใหม่)</span></a>`;
    return `
      <dl class="facts">
        ${fact("นักเรียน", s.student_count, "big")}
        ${fact("ระยะทาง", s.distance)}
        ${fact("ขนาดโรงเรียน", s.size)}
        ${fact("ระดับชั้น", s.lower_secondary && s.upper_secondary ? "ม.1–6" : s.lower_secondary ? "ม.1–3" : "ม.4–6")}
        ${fact("ห้องเรียนพิเศษ / หลักสูตร", s.special_programs, "wide")}
        ${fact("จำนวนครู", s.staff_count)}
        ${fact("ครูกลุ่มสาระคณิตศาสตร์", s.math_teachers)}
        ${fact("บ้านพักครู", s.teacher_housing, "wide")}
        ${fact("หอพัก / บ้านเช่า", s.rental_houses, "wide")}
        ${fact("ที่อยู่", s.address, "wide")}
        ${fact("รางวัลและประวัติ", s.awards, "wide")}
        ${fact("ข้อมูลน่าสนใจ", s.highlights, "wide")}
      </dl>
      <p class="asof">จำนวนนักเรียน ข้อมูล ${esc(s.students_asof)}</p>
      ${r ? `
        <div class="verdict">ลำดับแนะนำที่ <b class="num">${r.rank}</b> · ความเหมาะสม <b class="num">${r.stars}/5</b> · ${esc(r.verdict || "")}</div>
        <div class="pc">
          <div><h4>ข้อดี</h4><ul>${r.pros.map((p) => `<li>${rich(p)}</li>`).join("")}</ul></div>
          <div><h4>ข้อเสีย</h4><ul>${r.cons.map((c) => `<li>${rich(c)}</li>`).join("")}</ul></div>
        </div>` : ""}
      <div class="links">
        <button class="btn btn-line" type="button" data-take="${s.id}" aria-pressed="${taken.has(s.id)}">${taken.has(s.id) ? "ยกเลิก: ยังว่างอยู่" : "ถูกเลือกไปแล้ว"}</button>
        <button class="btn btn-line" type="button" data-map="${s.id}">ดูบนแผนที่</button>
        ${s.website ? ext(s.website, "เว็บไซต์โรงเรียน") : ""}
        ${s.facebook ? ext(s.facebook, "Facebook") : ""}
        ${ext(s.google_map.url, "Google Maps")}
      </div>
      <details class="sources">
        <summary>แหล่งอ้างอิง (${s.sources.length})</summary>
        <ul>${s.sources.map((x) => `<li><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.label)}</a></li>`).join("")}</ul>
      </details>`;
  }

  const open = new Set();
  function renderSchools() {
    const current = free()[0];
    const sorted = [...SCHOOLS].sort((a, b) => a.seq - b.seq);
    document.getElementById("schools").innerHTML = sorted.map((s) => {
      const isOpen = open.has(s.id);
      return `<article class="school${taken.has(s.id) ? " is-taken" : ""}" id="school-${s.id}">
        <button class="school-head" type="button" aria-expanded="${isOpen}" aria-controls="body-${s.id}" data-toggle="${s.id}">
          ${shield(s, true)}
          <div>
            <h3>${esc(short(s))}${s.id === current ? '<span class="tag-now">ตอนนี้</span>' : ""}${taken.has(s.id) ? '<span class="sr-only"> (ถูกเลือกไปแล้ว)</span>' : ""}</h3>
            <p>${grp(esc(place(s)), `ขนาด${esc(s.size)}`)}</p>
            ${kmBar(s)}
          </div>
          <div class="row-km">${s.distance_km}<small>กม.${s.distance_km < 2 ? "<br>ในเมือง" : ""}</small></div>
          ${CHEV}
        </button>
        <div class="school-body" id="body-${s.id}" ${isOpen ? "" : "hidden"}>${isOpen ? schoolBody(s) : ""}</div>
      </article>`;
    }).join("");
    document.getElementById("reset").hidden = taken.size === 0;
  }

  // ── map ────────────────────────────────────────────────────────
  let map = null;
  const markers = new Map();
  function initMap() {
    if (!window.L) return;      // map is optional; every fact is text above
    const el = document.getElementById("map");
    map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);
    const maxStudents = Math.max(...SCHOOLS.map((s) => s.students_num));
    SCHOOLS.forEach((s) => {
      const radius = 6 + 16 * Math.sqrt(s.students_num / maxStudents); // area ∝ students
      const m = L.circleMarker([s.google_map.lat, s.google_map.lng], { radius, weight: 2 });
      m.bindTooltip(String(s.seq), { permanent: true, direction: "center", className: "seq-label" });
      m.bindPopup(`<div class="pop"><b>ที่ ${s.seq} · ${esc(s.name)}</b><br>${esc(s.student_count)} · ${esc(kmText(s))}</div>`);
      m.addTo(map);
      markers.set(s.id, m);
    });
    const bounds = L.latLngBounds(SCHOOLS.map((s) => [s.google_map.lat, s.google_map.lng]));
    map.fitBounds(bounds, { padding: [30, 30] });
    // Re-measure when the box changes size (fonts, rotation), keeping the fit.
    if (window.ResizeObserver) {
      let w = el.clientWidth;
      new ResizeObserver(() => {
        if (el.clientWidth === w) return;
        w = el.clientWidth;
        map.invalidateSize();
        map.fitBounds(bounds, { padding: [30, 30] });
      }).observe(el);
    }
  }
  function styleMarkers() {
    const current = free()[0];
    markers.forEach((m, id) => {
      const isTaken = taken.has(id);
      const isNow = id === current;
      m.setStyle({
        color: isNow ? "#1b1b1b" : "#ffffff",
        fillColor: isTaken ? "#9aa39e" : isNow ? "#ffc20e" : "#006a4e",
        fillOpacity: isTaken ? 0.55 : 0.9,
      });
      const tip = m.getTooltip();
      if (tip && tip.getElement()) tip.getElement().classList.toggle("now", isNow);
      if (isNow) m.bringToFront();
    });
  }

  // ── wiring ─────────────────────────────────────────────────────
  function renderAll(animate) {
    renderSign(animate);
    renderAlts();
    renderSchools();
    styleMarkers();
  }

  function toggleTaken(id) {
    if (taken.has(id)) taken.delete(id); else taken.add(id);
    save();
    renderAll(true);
  }

  const smooth = () => (matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");

  function openSchool(id) {
    open.add(id);
    renderSchools();
    const card = document.getElementById(`school-${id}`);
    if (!card) return;
    card.scrollIntoView({ behavior: smooth(), block: "start" });
    card.querySelector(".school-head").focus({ preventScroll: true });
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-take],[data-open],[data-toggle],[data-map],[data-reset],#reset");
    if (!t) return;
    if (t.dataset.take) {
      toggleTaken(Number(t.dataset.take));
    } else if (t.dataset.open) {
      openSchool(Number(t.dataset.open));
    } else if (t.dataset.toggle) {
      const id = Number(t.dataset.toggle);
      if (open.has(id)) open.delete(id); else open.add(id);
      renderSchools();
      document.querySelector(`[data-toggle="${id}"]`).focus();
    } else if (t.dataset.map) {
      const m = markers.get(Number(t.dataset.map));
      if (map && m) {
        document.getElementById("map").scrollIntoView({ behavior: smooth(), block: "center" });
        map.setView(m.getLatLng(), 12);
        m.openPopup();
      }
    } else {
      taken.clear();
      save();
      renderAll(true);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (typeof SCHOOLS === "undefined" || typeof RANKINGS === "undefined") {
      console.error("data.js / rankings.js did not load");
      return;
    }
    renderAll(false);
    const p = RANKING_PRINCIPLES;
    document.getElementById("rules").innerHTML = `
      <p class="rules-intro">${esc(p.intro)}</p>
      <ul class="fallbacks-plan">${p.candidates.map((c) => `<li><b>${esc(c.label)}:</b> ${esc(c.text)}</li>`).join("")}</ul>
      <ol>${p.rules.map((r) => `<li><span>${rich(r)}</span></li>`).join("")}</ol>`;
    try { initMap(); styleMarkers(); } catch (err) { console.warn("map unavailable", err); }
  });
})();
