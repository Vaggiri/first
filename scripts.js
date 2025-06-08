function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const isDarkMode = body.style.backgroundColor === 'black';

  body.style.backgroundColor = isDarkMode ? '#f5f5f5' : 'black';
  body.style.color = isDarkMode ? '#222' : 'white';
  themeToggle.setAttribute('aria-pressed', !isDarkMode);
}