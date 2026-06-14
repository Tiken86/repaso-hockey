/* Repaso Hockey — lógica de la app */
(function () {
  "use strict";

  var STORE = "repaso-hockey-v1";
  var state = loadState();
  var quiz = null; // { items, idx, correct, answers, source, retryFn }

  /* ---------- persistencia ---------- */
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORE)) || { temas: {} }; }
    catch (e) { return { temas: {} }; }
  }
  function saveState() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- utilidades ---------- */
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function getTema(id) {
    for (var i = 0; i < TEMAS.length; i++) if (TEMAS[i].id === id) return TEMAS[i];
    return null;
  }

  /* ---------- navegación ---------- */
  function show(viewId) {
    var views = document.querySelectorAll(".view");
    for (var i = 0; i < views.length; i++) views[i].classList.remove("active");
    $(viewId).classList.add("active");
    var c = $(viewId).querySelector(".content");
    if (c) c.scrollTop = 0;
  }

  /* ---------- HOME ---------- */
  function renderHome() {
    // progreso global = media de best% por tema con intentos
    var totalPct = 0, count = 0;
    for (var i = 0; i < TEMAS.length; i++) {
      var t = state.temas[TEMAS[i].id];
      if (t && t.best != null) { totalPct += t.best; count++; }
    }
    var g = count ? Math.round(totalPct / count) : 0;
    $("globalPct").textContent = g + "%";
    var circ = 2 * Math.PI * 52;
    $("globalRing").style.strokeDashoffset = circ * (1 - g / 100);
    $("globalSub").textContent = count
      ? count + " de " + TEMAS.length + " temas practicados"
      : "Empieza tu primer test";

    var list = $("temaList");
    list.innerHTML = "";
    TEMAS.forEach(function (tema) {
      var saved = state.temas[tema.id] || {};
      var best = saved.best != null ? saved.best : 0;
      var card = el("div", "tema-card");
      card.innerHTML =
        '<div class="tema-ico">' + tema.icono + "</div>" +
        '<div class="tema-info"><h3>' + tema.titulo + "</h3>" +
        '<div class="tema-bar"><i></i></div></div>' +
        '<div class="tema-pct">' + (saved.best != null ? best + "%" : "—") + "</div>";
      card.addEventListener("click", function () { openTema(tema.id); });
      list.appendChild(card);
      setTimeout(function () { card.querySelector(".tema-bar i").style.width = best + "%"; }, 60);
    });
  }

  /* ---------- TEMA ---------- */
  var currentTema = null;
  function openTema(id) {
    currentTema = getTema(id);
    $("temaTitle").textContent = currentTema.titulo;
    // reset tabs
    setTab("test");

    var saved = state.temas[id] || {};
    var stats = $("temaStats");
    stats.innerHTML =
      '<div class="stat"><b>' + currentTema.preguntas.length + "</b><span>preguntas</span></div>" +
      '<div class="stat"><b>' + (saved.best != null ? saved.best + "%" : "—") + "</b><span>mejor marca</span></div>" +
      '<div class="stat"><b>' + (saved.attempts || 0) + "</b><span>intentos</span></div>";
    $("temaQcount").textContent = currentTema.preguntas.length + " preguntas";

    var est = $("estudioList");
    est.innerHTML = "";
    currentTema.estudio.forEach(function (txt) {
      est.appendChild(el("div", "estudio-item", txt));
    });

    show("view-tema");
  }
  function setTab(name) {
    var btns = document.querySelectorAll(".seg-btn");
    for (var i = 0; i < btns.length; i++)
      btns[i].classList.toggle("active", btns[i].dataset.tab === name);
    $("tab-test").classList.toggle("active", name === "test");
    $("tab-estudio").classList.toggle("active", name === "estudio");
  }

  /* ---------- QUIZ ---------- */
  function buildItems(preguntas, temaTitle) {
    // baraja preguntas y, dentro de cada una, las opciones
    return shuffle(preguntas).map(function (p) {
      var correctText = p.opts[p.a];
      var opts = shuffle(p.opts);
      return {
        q: p.q,
        opts: opts,
        correctIdx: opts.indexOf(correctText),
        exp: p.exp,
        tema: temaTitle,
      };
    });
  }

  function startTemaQuiz() {
    var tema = currentTema;
    quiz = {
      items: buildItems(tema.preguntas, tema.titulo),
      idx: 0, correct: 0, answers: [],
      source: "tema", temaId: tema.id,
      retry: startTemaQuiz,
    };
    show("view-quiz");
    renderQuestion();
  }

  function startExam() {
    var pool = [];
    TEMAS.forEach(function (t) {
      t.preguntas.forEach(function (p) { pool.push({ p: p, tema: t.titulo }); });
    });
    var picked = shuffle(pool).slice(0, 20);
    var items = picked.map(function (o) {
      var correctText = o.p.opts[o.p.a];
      var opts = shuffle(o.p.opts);
      return { q: o.p.q, opts: opts, correctIdx: opts.indexOf(correctText), exp: o.p.exp, tema: o.tema };
    });
    quiz = { items: items, idx: 0, correct: 0, answers: [], source: "exam", retry: startExam };
    show("view-quiz");
    renderQuestion();
  }

  function renderQuestion() {
    var it = quiz.items[quiz.idx];
    var n = quiz.items.length;
    $("qcounter").textContent = (quiz.idx + 1) + "/" + n;
    $("qbar").style.width = ((quiz.idx) / n * 100) + "%";
    $("qtema").textContent = it.tema;
    $("qtext").textContent = it.q;

    var box = $("qopts");
    box.innerHTML = "";
    var letters = ["A", "B", "C", "D", "E"];
    it.opts.forEach(function (text, i) {
      var b = el("button", "opt");
      b.innerHTML = '<span class="dot">' + letters[i] + "</span><span>" + text + "</span>";
      b.addEventListener("click", function () { answer(i, b); });
      box.appendChild(b);
    });

    var fb = $("qfeedback");
    fb.className = "feedback"; fb.innerHTML = "";
    var next = $("qnext");
    next.disabled = true;
    next.textContent = (quiz.idx + 1 === n) ? "Ver resultado" : "Siguiente";
    $("qskip").hidden = false;
  }

  function skipQuestion() {
    var it = quiz.items[quiz.idx];
    if (it._answered) return;
    it._answered = true;
    quiz.answers.push({ q: it.q, ok: false, blank: true, correctText: it.opts[it.correctIdx], exp: it.exp });
    nextQuestion();
  }

  function answer(choice, btnEl) {
    var it = quiz.items[quiz.idx];
    if (it._answered) return;
    it._answered = true;
    var ok = choice === it.correctIdx;
    if (ok) quiz.correct++;
    quiz.answers.push({ q: it.q, ok: ok, correctText: it.opts[it.correctIdx], chosen: it.opts[choice], exp: it.exp });

    var opts = $("qopts").querySelectorAll(".opt");
    for (var i = 0; i < opts.length; i++) {
      opts[i].classList.add("locked");
      if (i === it.correctIdx) opts[i].classList.add("correct");
      else if (i === choice) opts[i].classList.add("wrong");
      else opts[i].classList.add("dim");
    }

    var fb = $("qfeedback");
    fb.className = "feedback show " + (ok ? "ok" : "no");
    fb.innerHTML = '<span class="fb-tag">' + (ok ? "✓ Correcto. " : "✗ Incorrecto. ") + "</span>" + it.exp;

    $("qskip").hidden = true;
    $("qnext").disabled = false;
  }

  function nextQuestion() {
    if (quiz.idx + 1 >= quiz.items.length) { finishQuiz(); return; }
    quiz.idx++;
    renderQuestion();
  }

  function finishQuiz() {
    var n = quiz.items.length;
    var pct = Math.round(quiz.correct / n * 100);
    var blanks = quiz.answers.filter(function (a) { return a.blank; }).length;
    var wrong = n - quiz.correct - blanks;
    // nota tipo examen: +0,3 acierto, -0,1 fallo, 0 en blanco (no baja de 0)
    var notaRaw = quiz.correct * 0.3 - wrong * 0.1;
    var nota = Math.max(0, notaRaw);

    if (quiz.source === "tema") {
      var s = state.temas[quiz.temaId] || { attempts: 0, best: 0 };
      s.attempts = (s.attempts || 0) + 1;
      s.best = Math.max(s.best || 0, pct);
      s.last = pct;
      state.temas[quiz.temaId] = s;
      saveState();
    }

    $("resultScore").textContent = quiz.correct + "/" + n;
    $("resultPct").textContent = pct + "%  ·  Nota: " + nota.toFixed(1) + (blanks ? "  ·  " + blanks + " en blanco" : "");
    var emoji, msg;
    if (pct >= 90) { emoji = "🏆"; msg = "¡Dominas el tema! Listo para el examen."; }
    else if (pct >= 70) { emoji = "🎉"; msg = "Muy bien. Repasa los fallos y a por el 100%."; }
    else if (pct >= 50) { emoji = "💪"; msg = "Vas por buen camino. Repite para afianzar."; }
    else { emoji = "📚"; msg = "Toca repasar el modo Estudio y volver a intentarlo."; }
    $("resultEmoji").textContent = emoji;
    $("resultMsg").textContent = msg;

    // revisión de fallos
    var rev = $("resultReview");
    rev.innerHTML = "";
    var fails = quiz.answers.filter(function (a) { return !a.ok; });
    if (fails.length) {
      rev.appendChild(el("p", "section-title", "Para repasar"));
      fails.forEach(function (a) {
        var it = el("div", "rev-item");
        it.innerHTML =
          '<div class="rev-q"><span class="rev-ico">' + (a.blank ? "⬜" : "❌") + '</span><span>' + a.q + "</span></div>" +
          '<div class="rev-a">Correcta: <b>' + a.correctText + "</b></div>";
        rev.appendChild(it);
      });
    }

    show("view-result");
  }

  function quitQuiz() {
    if (confirm("¿Salir del test? Se perderá el progreso de este intento.")) {
      goHomeOrTema();
    }
  }
  function goHomeOrTema() {
    if (quiz && quiz.source === "tema") { openTema(quiz.temaId); }
    else { renderHome(); show("view-home"); }
  }

  /* ---------- acciones globales ---------- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-action]");
    if (t) {
      var a = t.dataset.action;
      if (a === "exam") startExam();
      else if (a === "home") { renderHome(); show("view-home"); }
      else if (a === "start") startTemaQuiz();
      else if (a === "quitQuiz") quitQuiz();
      else if (a === "retry") { if (quiz && quiz.retry) quiz.retry(); }
      else if (a === "reset") resetProgress();
      return;
    }
    var seg = e.target.closest(".seg-btn");
    if (seg) setTab(seg.dataset.tab);
  });

  $("qnext").addEventListener("click", nextQuestion);
  $("qskip").addEventListener("click", skipQuestion);

  function resetProgress() {
    if (confirm("¿Borrar todo tu progreso guardado?")) {
      state = { temas: {} };
      saveState();
      renderHome();
    }
  }

  /* ---------- init ---------- */
  renderHome();
})();
