const main = document.querySelector('#main');
const lessons = window.DERS_BOLUMLERI;
const questions = window.SORULAR;
const lessonById = new Map(lessons.map(lesson => [lesson.id, lesson]));
const examNoteById = new Map(window.DERSLER.map(lesson => [lesson.id, lesson]));
const questionById = new Map(questions.map(question => [question.id, question]));
const weeks = {
  1: ['Mimari ve bilgisayarın gelişimi', 'Sistem bileşenleri, saklı program ve bilgisayar kuşakları'],
  2: ['Performansı etkileyen bileşenler', 'İş yükü, bellek hiyerarşisi, darboğaz ve komut yürütme'],
  3: ['Performans hesaplamaları', 'Frekans, CPI, CPU süresi, MIPS ve Amdahl yasası'],
  4: ['Komut kümesi mimarisi', 'Operandlar, adresleme, mikro kod, RISC ve CISC'],
  5: ['İşaretli sayılar', 'İkinin tümleyeni, ikili aritmetik, kaydırma ve taşma'],
  0: ['Ek vize konuları', 'Eski vizede sorulan ek kavramlar ve işlem modelleri'],
};
const weekOrder = [1, 2, 3, 4, 5, 0];
const lessonsByWeek = new Map(weekOrder.map(week => [week, lessons.filter(lesson => lesson.week === week)]));
const lessonByLegacyId = new Map();
const state = { exam: '', topic: '', mobileTab: 'soru' };

for (const lesson of lessons.filter(item => item.week)) {
  const [firstPage, lastPage] = lesson.pages;
  for (let page = firstPage; page <= lastPage; page++) {
    lessonByLegacyId.set('h' + lesson.week + '-s' + page, lesson);
  }
}
const extraGroups = {
  'ek-donanim-katmanlari': ['layers', 'logic'],
  'ek-veri-yolu-ve-onbellek': ['bus', 'mdr', 'cache'],
  'ek-flynn-ve-topolojiler': ['flynn', 'topology', 'shared'],
  'ek-boru-hatti-hesaplari': ['stages', 'serial', 'spatial', 'pipe', 'superpipe', 'wide'],
  'ek-frekans-karsilastirma': ['clock'],
};
for (const [id, aliases] of Object.entries(extraGroups)) {
  for (const alias of aliases) lessonByLegacyId.set('extra-' + alias, lessonById.get(id));
}

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[c]);
const fold = value => value.toLocaleLowerCase('tr').normalize('NFD').replace(/\p{M}/gu, '').replaceAll('ı', 'i');
const groupByWeek = week => week ? week + '. hafta' : 'Ek vize konusu';
const examName = q => q.exam === 'vize' ? '2023 Vize' : '2024 Final';
const lessonHref = lesson => '#konu/' + lesson.id;
const questionHref = question => '#soru/' + question.id;
const sectionKey = lesson => lesson.week + '|' + lesson.section;
const arrow = '<span aria-hidden="true">→</span>';

function pageHead(kicker, title, description) {
  return `<div class="pagehead"><p class="eyebrow">${kicker}</p><h1 id="page-title" tabindex="-1">${title}</h1><p>${description}</p></div>`;
}

function home() {
  const cards = weekOrder.slice(0, 5).map(week => {
    const [title, subtitle] = weeks[week];
    const list = lessonsByWeek.get(week);
    return `<a class="week-card" href="${lessonHref(list[0])}"><span class="week-number">HAFTA 0${week}</span><h3>${esc(title)}</h3><p>${esc(subtitle)}</p><small>${list.length} ders ${arrow}</small></a>`;
  });
  main.innerHTML = `
    <section class="hero" aria-labelledby="page-title">
      <div><p class="eyebrow">Bilgisayar Mimarisi ve Organizasyonu</p>
        <h1 id="page-title" tabindex="-1">Vize Atölyesi</h1>
        <p>Beş haftayı adım adım öğren. Ardından konu notun yanında açıkken çıkmış soruları çöz.</p>
        <div class="actions"><a class="button primary" href="${lessonHref(lessons[0])}">Derse başla ${arrow}</a><a class="button secondary" href="#soru/v23-1">Çıkmış sorular</a></div>
      </div>
      <img src="board.svg" alt="" width="500" height="320">
    </section>
    <section aria-labelledby="course-title">
      <div class="section-head"><div><p class="eyebrow">Ders yolu</p><h2 id="course-title">Beş haftada dersin temelleri</h2></div><p>${lessons.filter(lesson => lesson.week).length} konu dersi</p></div>
      <div class="weeks">${cards.join('')}</div>
      <div class="strip"><div><strong>Çıkmış sorular için ek konu anlatımları</strong><p>Flynn, donanım katmanları ve boru hattı hesabı gibi eski sınav başlıklarını da çalış.</p></div><a class="button" href="${lessonHref(lessonsByWeek.get(0)[0])}">Ek konuları aç ${arrow}</a></div>
    </section>
    <section aria-labelledby="exam-title">
      <div class="section-head"><div><p class="eyebrow">Soru bankası</p><h2 id="exam-title">Sınavda Çıkmışlar</h2><p>2023 vizesi ve 2024 finalinin vize kapsamındaki soruları</p></div></div>
      <div class="strip"><div><strong>${questions.length} özgün soru</strong><p>Konuyu oku, seçenekleri değerlendir ve hazır olduğunda çözümü aç.</p></div><a class="button primary" href="#soru/v23-1">Soru bankasına git ${arrow}</a></div>
    </section>`;
}

function lessonLink(lesson, current) {
  return `<a href="${lessonHref(lesson)}" ${current === lesson.id ? 'aria-current="page"' : ''}>${esc(lesson.title)}</a>`;
}

function buildTree(current) {
  return Array.from(lessonsByWeek, ([week, items]) => `<details ${week === current.week ? 'open' : ''}>
    <summary>${week ? week + '. Hafta · ' : ''}${esc(weeks[week][0])}</summary>
    <div class="subtree">${items.map(item => lessonLink(item, current.id)).join('')}</div></details>`).join('');
}

function examNoteContent(lesson) {
  const html = [];
  const blocks = lesson.blocks;
  for (let i = 0; i < blocks.length;) {
    const block = blocks[i];
    if (block.type === 'text') {
      html.push(`<p>${esc(block.text)}</p>`);
      i++;
    } else if (block.type === 'bullet') {
      const items = [];
      while (blocks[i]?.type === 'bullet') items.push(`<li>${esc(blocks[i++].text)}</li>`);
      html.push(`<ul>${items.join('')}</ul>`);
    } else {
      const rows = [];
      while (blocks[i]?.type === 'row') rows.push(blocks[i++].cells);
      const table = rows.length > 1 && rows.every(row => row.length === rows[0].length);
      if (table) {
        const [head, ...body] = rows;
        html.push(`<div class="table-wrap" tabindex="0" role="region" aria-label="Ders tablosu"><table><thead><tr>${head.map(cell => `<th scope="col">${esc(cell)}</th>`).join('')}</tr></thead><tbody>${body.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      } else {
        html.push(...rows.map(row => `<p>${row.map(esc).join(' · ')}</p>`));
      }
    }
  }
  if (lesson.note) html.push(`<div class="note"><strong>Adım adım</strong><p>${esc(lesson.note)}</p></div>`);
  if (lesson.diagram.length) html.push(`<div class="diagram" aria-label="Kavram akışı">${lesson.diagram.map(item => `<b>${esc(item)}</b>`).join('<span aria-hidden="true">→</span>')}</div>`);
  return html.join('');
}

function courseContent(lesson) {
  const [problem, ...steps] = lesson.example;
  return `<p class="lesson-intro">${esc(lesson.intro)}</p>
    ${lesson.sections.map(([title, ...paragraphs]) => `<section class="lesson-section"><h3>${esc(title)}</h3>${paragraphs.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}</section>`).join('')}
    <section class="worked-example"><h3>Çözümlü örnek</h3><p>${esc(problem)}</p><ol>${steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol></section>
    ${lesson.check ? `<details class="self-check"><summary>Kendini dene</summary><p>${esc(lesson.check[0])}</p><details><summary>Yanıtı aç</summary><p>${esc(lesson.check[1])}</p></details></details>` : ''}`;
}

function pager(items, current, href, noun) {
  const index = items.indexOf(current);
  const previous = items[index - 1];
  const next = items[index + 1];
  return `<nav class="pager" aria-label="${noun} gezinmesi">
    ${previous ? `<a class="button" href="${href(previous)}"><span aria-hidden="true">←</span> Önceki ${noun}</a>` : '<span></span>'}
    <span class="muted">${index + 1} / ${items.length}</span>
    ${next ? `<a class="button" href="${href(next)}">Sonraki ${noun} ${arrow}</a>` : '<span></span>'}
  </nav>`;
}

function showLesson(lesson) {
  const related = questions.filter(item => lessonByLegacyId.get(item.lessonId) === lesson);
  const weekLessons = lessonsByWeek.get(lesson.week);
  main.innerHTML = pageHead('Beş haftalık ders yolu', 'Konu Anlatımı', 'Bir konu seç. Anlatımı oku, ardından örneği adım adım çöz.') + `
    <div class="lesson-grid">
      <aside class="panel sidebar" aria-label="Ders içindekileri">
        <details class="course-menu" ${matchMedia('(max-width: 750px)').matches ? '' : 'open'}>
          <summary>Ders planı ve arama</summary>
          <label for="lesson-search">Derslerde ara</label><input id="lesson-search" type="search" placeholder="Örn. çevrim süresi, taşma">
          <nav id="tree" class="tree" aria-label="İçindekiler">${buildTree(lesson)}</nav>
          <div id="search-results" class="tree search-results" hidden></div>
        </details>
      </aside>
      <article class="panel reading" aria-labelledby="lesson-title">
        <span class="tag">${groupByWeek(lesson.week)} · Ders ${weekLessons.indexOf(lesson) + 1} / ${weekLessons.length}</span>
        <h2 id="lesson-title" tabindex="-1">${esc(lesson.title)}</h2>
        <div class="body lesson-body">${courseContent(lesson)}</div>
        ${related.length ? `<div class="read-foot related"><strong>İlgili çıkmış sorular</strong> ${related.map(q => `<a class="button" href="${questionHref(q)}">${examName(q)} · ${q.number}${arrow}</a>`).join('')}</div>` : ''}
        <details class="sources"><summary>Ders kaynağı</summary><p>${lesson.week ? lesson.week + '.pdf · s. ' + lesson.pages.join('–') : 'Çıkmış vize ve final sorularıyla bağlantılı ek anlatım.'}</p></details>
        ${pager(lessons, lesson, lessonHref, 'ders')}
      </article>
    </div>`;

  const search = document.querySelector('#lesson-search');
  const tree = document.querySelector('#tree');
  const results = document.querySelector('#search-results');
  search.addEventListener('input', () => {
    const terms = fold(search.value.trim()).split(/\s+/).filter(Boolean);
    results.hidden = !terms.length;
    tree.hidden = Boolean(terms.length);
    if (!terms.length) return;
    const found = lessons.filter(item => {
      const text = fold([item.title, item.intro, ...item.sections.flat(), ...item.example].join(' '));
      return terms.every(term => text.includes(term));
    });
    results.innerHTML = `<p role="status">${found.length ? found.length + ' ders bulundu' : 'Eşleşen ders bulunamadı.'}</p>${found.map(item => lessonLink(item, lesson.id)).join('')}`;
  });
}

function questionList() {
  return questions.filter(question => (!state.exam || question.exam === state.exam)
    && (!state.topic || sectionKey(examNoteById.get(question.lessonId)) === state.topic));
}

function showQuestion(requested) {
  const list = questionList();
  const question = list.includes(requested) ? requested : list[0];
  const topics = new Map();
  for (const q of questions) {
    const lesson = examNoteById.get(q.lessonId);
    topics.set(sectionKey(lesson), groupByWeek(lesson.week) + ' · ' + lesson.section);
  }
  const option = (value, title, selected) => `<option value="${esc(value)}" ${value === selected ? 'selected' : ''}>${esc(title)}</option>`;
  main.innerHTML = pageHead('Çıkmış soru bankası', 'Sınavda Çıkmışlar', `${questions.length} özgün soru · Konu anlatımı ve açılır çözümler`) + `
    <div class="panel filters" aria-label="Soru filtreleri">
      <label>Sınav<select id="exam-filter">${option('', 'Tüm sınavlar', state.exam)}${option('vize', '2023 Vize', state.exam)}${option('final', '2024 Final', state.exam)}</select></label>
      <label>Konu<select id="topic-filter">${option('', 'Tüm konular', state.topic)}${Array.from(topics, ([key, name]) => option(key, name, state.topic)).join('')}</select></label>
      <label>Soru seç <span class="muted">(${list.length})</span><select id="question-select" ${list.length ? '' : 'disabled'}>${list.length ? list.map(q => option(q.id, examName(q) + ' · Soru ' + q.number, question?.id)).join('') : '<option>Eşleşme yok</option>'}</select></label>
    </div>
    ${question ? questionPanels(question, list) : '<p class="panel empty" role="status">Bu filtrelerle eşleşen soru yok. Sınav veya konu seçimini değiştir.</p>'}`;

  for (const [selector, key] of [['#exam-filter', 'exam'], ['#topic-filter', 'topic']]) {
    document.querySelector(selector).addEventListener('change', event => {
      state[key] = event.currentTarget.value;
      const filtered = questionList();
      const next = filtered.includes(question) ? question : filtered[0];
      if (next && next !== question) {
        history.replaceState(null, '', questionHref(next));
        showQuestion(next);
      } else {
        showQuestion(question);
      }
      document.querySelector(selector).focus();
    });
  }
  document.querySelector('#question-select').addEventListener('change', event => {
    state.mobileTab = 'soru';
    location.hash = '#soru/' + event.currentTarget.value;
  });

  for (const button of document.querySelectorAll('[data-show-tab]')) {
    button.addEventListener('click', () => {
      state.mobileTab = button.dataset.showTab;
      document.querySelector('.question-grid').dataset.tab = state.mobileTab;
      for (const tab of document.querySelectorAll('[data-show-tab]')) {
        tab.setAttribute('aria-pressed', String(tab === button));
      }
    });
  }
}

function questionPanels(question, list) {
  const lesson = examNoteById.get(question.lessonId);
  const courseLesson = lessonByLegacyId.get(question.lessonId);
  return `<div class="tabs" role="group" aria-label="Gösterilecek panel">
    <button class="button" data-show-tab="soru" aria-pressed="${state.mobileTab === 'soru'}" aria-controls="question-panel">Soru</button>
    <button class="button" data-show-tab="konu" aria-pressed="${state.mobileTab === 'konu'}" aria-controls="context-panel">Konu</button>
    </div>
    <div class="question-grid" data-tab="${state.mobileTab}">
      <aside class="panel context" id="context-panel" aria-labelledby="context-title">
        <p class="eyebrow">Bu sorunun konusu · ${groupByWeek(lesson.week)}</p>
        <h2 id="context-title">${esc(lesson.title)}</h2>
        <div class="body">${examNoteContent(lesson)}</div>
        <a class="button" href="${lessonHref(courseLesson)}">Konunun tamamını aç ${arrow}</a>
      </aside>
      <article class="panel question" id="question-panel" aria-labelledby="question-title">
        <span class="tag">${examName(question)} · ${question.date}</span>
        <h2 id="question-title" tabindex="-1">Soru ${question.number}</h2>
        <p class="stem">${esc(question.stem)}</p>
        <ol class="choices" aria-label="Seçenekler">${question.choices.map((choice, i) => `<li><b>${'ABCDE'[i]}</b><span>${esc(choice)}</span></li>`).join('')}</ol>
        <details class="solution"><summary>Çözümü göster</summary><p>${esc(question.solution)}</p>${question.note ? `<p class="warning"><strong>Kaynak notu</strong> · ${esc(question.note)}</p>` : ''}</details>
        <details class="sources"><summary>Soru kaynakları (${question.sources.length})</summary><ul>${question.sources.map(src => `<li>${esc(src)}</li>`).join('')}</ul></details>
        ${pager(list, question, questionHref, 'soru')}
      </article>
    </div>`;
}

function showSources() {
  main.innerHTML = pageHead('İçerik denetimi', 'Kaynaklar ve kapsam', 'Ders sayfalarının ve sınav kopyalarının sitedeki karşılıkları.') + `
    <div class="panel reading audit">
      <h2>Sınav kaynakları</h2>
      <p>2023 vizesinin her sayfası dört kopyadan karşılaştırıldı. 2024 finalinin vize kapsamındaki ilk 12 sorusu eklendi. Farklı sayılarla veya değişen seçeneklerle sorulan sorular ayrı kartlarda.</p>
      <div class="table-wrap" tabindex="0" role="region" aria-label="Sınav kapsamı tablosu"><table><thead><tr><th scope="col">Soru aralığı</th><th scope="col">Kaynak</th><th scope="col">Karar</th></tr></thead><tbody>${window.SINAV_KAPSAMI.map(row => `<tr><th scope="row">${esc(row.range)}</th><td>${row.files.map(esc).join('<br>')}</td><td>${esc(row.status)}</td></tr>`).join('')}</tbody></table></div>
      <h2>Slayt kapsamı</h2>
      <p>326 kaynak sayfa, derslerin konu aralıklarına ve belge bölümlerine karşılık gelir.</p>
      ${weekOrder.slice(0, 5).map(week => {
        const pageCount = window.SLAYT_KAPSAMI.filter(item => item.week === week).length;
        return `<details class="sources"><summary>${week}.pdf · ${pageCount} sayfa</summary><ul><li>Sayfa 1 · Kapak</li>${lessonsByWeek.get(week).map(lesson => `<li>Sayfa ${lesson.pages.join('–')} · <a href="${lessonHref(lesson)}">${esc(lesson.title)}</a></li>`).join('')}<li>Sayfa ${pageCount} · Kapanış</li></ul></details>`;
      }).join('')}
    </div>`;
}

function render(navigation = false) {
  const [screen, id] = location.hash.slice(1).split('/');
  const current = { konu: 'lessons', soru: 'exams', kaynaklar: null }[screen] ?? (screen === 'kaynaklar' ? null : 'home');
  for (const name of ['home', 'lessons', 'exams']) {
    const link = document.querySelector('#nav-' + name);
    if (name === current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  if (screen === 'konu') showLesson(lessonById.get(id) ?? lessonByLegacyId.get(id) ?? lessons[0]);
  else if (screen === 'soru') {
    const requested = questionById.get(id) ?? questions[0];
    if (!questionList().includes(requested)) {
      state.exam = '';
      state.topic = '';
    }
    showQuestion(requested);
  } else if (screen === 'kaynaklar') showSources();
  else home();

  if (navigation) {
    window.scrollTo(0, 0);
    document.querySelector(screen === 'konu' ? '#lesson-title' : '#page-title')?.focus({ preventScroll: true });
  }
}

window.addEventListener('hashchange', () => {
  if (location.hash === '#main') return;
  render(true);
});
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
});
render();
