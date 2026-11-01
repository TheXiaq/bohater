(function () {
  'use strict';
  var current = document.body.getAttribute('data-page') || 'index';
  var pages = [
    ['index', 'Start', 'index.html'],
    ['bohaterowie', 'Frakcje i klasy', 'bohaterowie.html'],
    ['sklady', 'Składy oddziałów', 'sklady.html'],
    ['gwiazdki', 'Gwiazdki', 'gwiazdki.html'],
    ['umiejetnosci', 'Umiejętności', 'umiejetnosci.html'],
    ['wyposazenie', 'Wyposażenie', 'wyposazenie.html']
  ];
  var nav = pages.map(function (item) {
    return '<a href="' + item[2] + '"' + (item[0] === current ? ' aria-current="page"' : '') + '>' + item[1] + '</a>';
  }).join('');
  var header = document.getElementById('site-header');
  if (header) {
    header.innerHTML =
      '<header class="site-header"><div class="shell header-inner">' +
      '<a class="brand" href="index.html" aria-label="RPL — strona główna"><span class="brand-emblem">✦</span><span>RPL <small>LAST ASYLUM: PLAGUE</small></span></a>' +
      '<nav class="site-nav" aria-label="Menu główne">' + nav + '</nav>' +
      '<a class="header-cta" href="Poradnik_Last_Asylum_RPL.pdf" download>↓ Pobierz PDF</a>' +
      '</div></header>';
  }
  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML =
      '<footer class="site-footer"><div class="shell footer-inner">' +
      '<div><a class="brand" href="index.html"><span class="brand-emblem">✦</span><span>RPL <small>CENTRUM PORADNIKÓW</small></span></a>' +
      '<p>Nieoficjalny poradnik społecznościowy do Last Asylum: Plague. Grafiki postaci i przedmiotów są własnością odpowiednich twórców gry. RPL nie jest powiązane z wydawcą.</p></div>' +
      '<div class="footer-links"><a href="bohaterowie.html">Bohaterowie</a><a href="sklady.html">Oddziały</a><a href="gwiazdki.html">Gwiazdki</a><a href="umiejetnosci.html">Umiejętności</a><a href="wyposazenie.html">Sprzęt</a></div>' +
      '</div></footer>';
  }
  var stars = [
    { level: 5, total: 115, diff: 0, previous: '—' },
    { level: 6, total: 175, diff: 60, previous: '5★' },
    { level: 7, total: 300, diff: 125, previous: '6★' },
    { level: 8, total: 475, diff: 175, previous: '7★' },
    { level: 9, total: 675, diff: 200, previous: '8★' },
    { level: 10, total: 975, diff: 300, previous: '9★' }
  ];
  var selectButtons = document.querySelectorAll('[data-star]');
  if (selectButtons.length) {
    function chooseStar(level) {
      var star = stars.filter(function (x) { return x.level === level; })[0];
      if (!star) { return; }
      selectButtons.forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(Number(btn.getAttribute('data-star')) === level));
      });
      var total = document.getElementById('star-total');
      var diff = document.getElementById('star-diff');
      var from = document.getElementById('star-from');
      if (total) { total.textContent = star.total.toLocaleString('pl-PL'); }
      if (diff) { diff.textContent = star.diff ? '+' + star.diff : '—'; }
      if (from) { from.textContent = star.previous; }
    }
    selectButtons.forEach(function (btn) {
      btn.addEventListener('click', function () { chooseStar(Number(btn.getAttribute('data-star'))); });
    });
    chooseStar(8);
  }
})();
