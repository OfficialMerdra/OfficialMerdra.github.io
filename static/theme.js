(function () {
  var button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  function updateButton() {
    var isDark = document.documentElement.dataset.theme === 'dark';
    button.setAttribute('aria-pressed', String(isDark));
    button.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  }

  button.hidden = false;
  updateButton();
  button.addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('merdra-theme', next); } catch (error) {}
    updateButton();
  });
}());
