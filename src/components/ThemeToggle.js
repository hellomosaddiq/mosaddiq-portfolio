import { ThemeManager } from '../utils/theme.js';

export function ThemeToggle() {
  const themeManager = new ThemeManager();
  
  const toggle = document.createElement('span');
  toggle.className = 'theme-toggle cursor-pointer text-blue-400 hover:text-blue-300 transition-all duration-300 inline-block select-none ml-0.5 hover:scale-110';
  toggle.textContent = '*';
  toggle.setAttribute('title', 'Toggle theme');
  
  toggle.addEventListener('click', () => {
    themeManager.toggle();
    
    // Add animation
    toggle.style.transform = 'scale(1.2) rotate(180deg)';
    setTimeout(() => {
      toggle.style.transform = 'scale(1) rotate(0deg)';
    }, 200);
  });
  
  return toggle;
}
