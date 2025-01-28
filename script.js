const toggleButton = document.getElementById('toggleButton');
const icon = document.getElementById('icon');

toggleButton.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');

  if (isDarkMode) {
    document.documentElement.style.setProperty('--background-color', '#121212');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    icon.textContent = '🌙'; // Switch to moon icon
  } else {
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#000000');
    icon.textContent = '☀️'; // Switch to sun icon
  }
});
