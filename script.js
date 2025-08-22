// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', newTheme);

  // Change icon
  themeToggle.querySelector('.icon').textContent = 
    newTheme === 'dark' ? '☀️' : '🌙';

  // Persist theme (optional)
  localStorage.setItem('theme', newTheme);
});

// On load, apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
    themeToggle.querySelector('.icon').textContent = 
      savedTheme === 'dark' ? '☀️' : '🌙';
  }
});