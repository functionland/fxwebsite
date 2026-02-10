/* How It Works — tab switching */
(function () {
  var tabs = document.querySelectorAll('.how-it-works__tab');
  var panels = document.querySelectorAll('.how-it-works__panel');
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('how-it-works__tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function (p) {
        p.classList.remove('how-it-works__panel--active');
        p.hidden = true;
      });
      tab.classList.add('how-it-works__tab--active');
      tab.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) {
        panel.classList.add('how-it-works__panel--active');
        panel.hidden = false;
      }
    });
  });
})();
