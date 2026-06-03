/* =========================================================================
   TALENS — app logic: i18next init, dynamic rendering, interactions, reveals
   ========================================================================= */
(function () {
  "use strict";

  /* ----------------------------------------------------------- icons (inline SVG) */
  var I = {
    configure: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    generate: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/></svg>',
    assess: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>',
    evaluate: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></svg>',
    thinking: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
    relating: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    executing: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 2 13 9 20 9"/><path d="M21 13.5V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/><path d="m15 18 2 2 4-4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    arrow: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    host: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    label: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
    plug: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6"/><path d="M15 2v6"/><path d="M12 17v5"/><path d="M5 8h14"/><path d="M6 11V8h12v3a6 6 0 0 1-12 0z"/></svg>',
    unique: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    adapt: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v6h6"/><path d="M21 12A9 9 0 0 0 6 5.3L3 8"/><path d="M21 22v-6h-6"/><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/></svg>',
    evidence: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    calibrate: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>'
  };
  var phaseIcons = [I.configure, I.generate, I.assess, I.evaluate];
  var pillarIcons = [I.thinking, I.relating, I.executing];
  var apartIcons = [I.unique, I.adapt, I.evidence, I.calibrate];
  var bizIcons = [I.host, I.label, I.plug];

  /* ----------------------------------------------------------- helpers */
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function $(s, ctx) { return (ctx || document).querySelector(s); }
  function $all(s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); }

  /* ----------------------------------------------------------- dynamic render */
  function render(t) {
    // PROBLEM
    var pg = $("#problemGrid"); pg.innerHTML = "";
    (t("problem.items", { returnObjects: true }) || []).forEach(function (it, i) {
      pg.appendChild(el(
        '<div class="card problem-card reveal" data-anim="zoom" data-delay="' + (i + 1) + '">' +
          '<div class="problem-card__head"><span class="num">' + esc(it.n) + '</span><h3>' + esc(it.t) + '</h3></div>' +
          '<p>' + esc(it.d) + '</p>' +
        '</div>'));
    });

    // PIPELINE
    var pl = $("#pipeline"); pl.innerHTML = "";
    (t("how.phases", { returnObjects: true }) || []).forEach(function (ph, i) {
      pl.appendChild(el(
        '<div class="card phase reveal" data-delay="' + (i + 1) + '">' +
          '<div class="phase__head">' +
            '<div class="phase__dot">' + phaseIcons[i] + '</div>' +
            '<div><span class="phase__tag">' + esc(ph.tag) + '</span><h3>' + esc(ph.t) + '</h3></div>' +
          '</div>' +
          '<p>' + esc(ph.d) + '</p>' +
        '</div>'));
    });

    // PILLARS
    var pi = $("#pillars"); pi.innerHTML = "";
    var pillarImages = ["think", "relation", "do"];
    (t("measures.pillars", { returnObjects: true }) || []).forEach(function (p, i) {
      var lis = (p.items || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
      var bg = pillarImages[i] ? '<img class="pillar__bg" src="assets/' + pillarImages[i] + '.png" alt="" loading="lazy" />' : '';
      pi.appendChild(el(
        '<div class="card pillar reveal" data-delay="' + (i + 1) + '">' +
          bg +
          '<div class="pillar__head"><div class="pillar__dot">' + pillarIcons[i] + '</div><h3>' + esc(p.t) + '</h3></div>' +
          '<ul>' + lis + '</ul>' +
        '</div>'));
    });

    // MODES
    var md = $("#modes"); md.innerHTML = "";
    var modeImages = ["conversation", "messages", "task"];
    (t("measures.modes", { returnObjects: true }) || []).forEach(function (m, i) {
      var chips = (m.items || []).map(function (x) { return '<span class="chip">' + esc(x) + "</span>"; }).join("");
      var img = modeImages[i] ? '<div class="mode__media"><img class="mode__img" src="assets/' + modeImages[i] + '.png" alt="" loading="lazy" /></div>' : '';
      md.appendChild(el(
        '<div class="card mode reveal" data-anim="zoom" data-delay="' + (i + 1) + '">' +
          img +
          '<div class="mode__body">' +
            '<h3>' + esc(m.t) + '</h3><p class="mode__sub">' + esc(m.sub) + '</p>' +
            '<div class="mode__items">' + chips + '</div>' +
          '</div>' +
        '</div>'));
    });

    // APART cards
    var ac = $("#apartCards"); ac.innerHTML = "";
    (t("apart.cards", { returnObjects: true }) || []).forEach(function (c, i) {
      ac.appendChild(el(
        '<div class="card apart-card reveal" data-anim="zoom" data-delay="' + (i + 1) + '">' +
          '<div class="apart-card__head"><div class="apart-card__ico">' + apartIcons[i] + '</div><h3>' + esc(c.t) + '</h3></div>' +
          '<p>' + esc(c.d) + '</p>' +
        '</div>'));
    });

    // PRODUCES
    var pr = $("#produces");
    var items = (t("apart.produces", { returnObjects: true }) || []).map(function (x) {
      return '<li><span class="marker">' + I.check + '</span><div><b>' + esc(x.t) + '</b><span>' + esc(x.d) + '</span></div></li>';
    }).join("");
    pr.innerHTML =
      '<h3>' + esc(t("apart.produces_title")) + '</h3>' +
      '<ul>' + items + '</ul>' +
      '<p class="produces__note">' + esc(t("apart.produces_note")) + '</p>';

    // USE CASES (images mapped by index — not translatable)
    var uc = $("#usecasesGrid"); uc.innerHTML = "";
    var usecaseImages = ["developer", "client", "manager", "executive"];
    (t("usecases.cases", { returnObjects: true }) || []).forEach(function (c, i) {
      var img = usecaseImages[i] ? '<div class="usecase__media"><img class="usecase__img" data-uc="' + usecaseImages[i] + '" src="assets/' + usecaseImages[i] + '.png" alt="" loading="lazy" /></div>' : '';
      uc.appendChild(el(
        '<div class="card usecase reveal" data-anim="' + (i % 2 === 0 ? 'left' : 'right') + '" data-delay="' + ((i % 2) + 1) + '">' +
          img +
          '<div class="usecase__body">' +
            '<div class="usecase__top"><h3>' + esc(c.t) + '</h3><span class="usecase__meta">' + esc(c.meta) + '</span></div>' +
            '<span class="usecase__mods">' + esc(c.mods) + '</span>' +
            '<p>' + esc(c.d) + '</p>' +
          '</div>' +
        '</div>'));
    });

    // BUSINESS
    var bg = $("#businessGrid"); bg.innerHTML = "";
    (t("business.models", { returnObjects: true }) || []).forEach(function (b, i) {
      bg.appendChild(el(
        '<div class="card bmodel reveal" data-delay="' + (i + 1) + '">' +
          '<div class="bmodel__head"><div class="bmodel__ico">' + bizIcons[i] + '</div><h3>' + esc(b.t) + '</h3></div>' +
          '<p>' + esc(b.d) + '</p>' +
        '</div>'));
    });
  }

  /* ----------------------------------------------------------- static text binding */
  function applyStatic(t) {
    $all("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var val = t(key);
      var attr = node.getAttribute("data-i18n-attr");
      if (attr) node.setAttribute(attr, val);
      else node.textContent = val;
    });
    $all("[data-i18n-html]").forEach(function (node) {
      node.innerHTML = t(node.getAttribute("data-i18n-html"));
    });
    document.documentElement.lang = i18next.language;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));
  }

  /* Animations are intentionally forced on for all visitors (product choice),
     so we ignore the OS "prefers-reduced-motion" setting. */
  var reduceMotion = false;

  /* ----------------------------------------------------------- reveal observer */
  var io;
  function observeReveals() {
    if (reduceMotion) { $all(".reveal:not(.is-visible)").forEach(function (n) { n.classList.add("is-visible"); }); return; }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            if (e.target.hasAttribute("data-count")) animateCount(e.target);
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    }
    $all(".reveal:not(.is-visible)").forEach(function (n) { io.observe(n); });
  }

  /* ----------------------------------------------------------- counters */
  var countObserver;
  function observeCounters() {
    if (reduceMotion) return;
    if (!countObserver) {
      countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animateCount(e.target); countObserver.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
    }
    $all("[data-count]").forEach(function (n) { if (!n.dataset.counted) countObserver.observe(n); });
  }
  function animateCount(node) {
    if (reduceMotion || node.dataset.counted) return;
    var full = node.textContent;
    var m = full.match(/(\D*)(\d+)(.*)/);
    if (!m) { node.dataset.counted = "1"; return; }
    node.dataset.counted = "1";
    var pre = m[1], target = parseInt(m[2], 10), post = m[3];
    var dur = 1100, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = pre + Math.round(eased * target) + post;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ----------------------------------------------------------- scroll: parallax + progress */
  function initScrollFX() {
    var bar = $("#scrollProgress");
    var parallax = $all("[data-parallax]");
    var ticking = false;
    function update() {
      var y = window.scrollY || window.pageYOffset;
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      }
      if (!reduceMotion && y < window.innerHeight * 1.4) {
        for (var i = 0; i < parallax.length; i++) {
          var f = parseFloat(parallax[i].getAttribute("data-parallax")) || 0;
          parallax[i].style.transform = "translate3d(0," + (y * f).toFixed(1) + "px,0)";
        }
      }
      ticking = false;
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  }

  /* ----------------------------------------------------------- language */
  function setLang(lng) {
    document.body.classList.add("lang-switching");
    i18next.changeLanguage(lng, function () {
      try { localStorage.setItem("talens_lang", lng); } catch (e) {}
      var t = i18next.t.bind(i18next);
      render(t);
      applyStatic(t);
      $all(".lang button").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-lang") === lng); });
      setTimeout(function () { document.body.classList.remove("lang-switching"); observeReveals(); }, 60);
    });
  }

  /* ----------------------------------------------------------- interactions */
  function wireUI() {
    var nav = $("#nav");
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 12); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    var menu = $("#mobileMenu");
    $("#navToggle").addEventListener("click", function () { menu.classList.toggle("open"); });
    $all("#mobileMenu a").forEach(function (a) { a.addEventListener("click", function () { menu.classList.remove("open"); }); });

    $all(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });

    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

    /* demo modal */
    var modal = $("#demoModal");
    if (modal) {
      var openModal = function () { modal.hidden = false; document.body.style.overflow = "hidden"; var f = modal.querySelector("input"); if (f) f.focus(); };
      var closeModal = function () { modal.hidden = true; document.body.style.overflow = ""; };
      $all("[data-demo]").forEach(function (b) {
        b.addEventListener("click", function (e) { e.preventDefault(); menu.classList.remove("open"); openModal(); });
      });
      $all("[data-modal-close]", modal).forEach(function (b) { b.addEventListener("click", closeModal); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });
      var form = $("#demoForm");
      if (form) form.addEventListener("submit", function (e) {
        e.preventDefault();
        /* TODO: invio dati (parte dinamica da implementare) */
      });
    }
  }

  /* ----------------------------------------------------------- boot */
  function start() {
    var saved;
    try { saved = localStorage.getItem("talens_lang"); } catch (e) {}
    var lng = saved || "it";

    i18next.init({
      lng: lng,
      fallbackLng: "it",
      resources: window.TALENS_I18N,
      interpolation: { escapeValue: false }
    }, function () {
      var t = i18next.t.bind(i18next);
      render(t);
      applyStatic(t);
      $all(".lang button").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-lang") === lng); });
      wireUI();
      observeReveals();
      observeCounters();
      initScrollFX();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
