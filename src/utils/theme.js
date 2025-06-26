// Theme management utility
export class ThemeManager {
  constructor() {
    this.init();
  }

  init() {
    // Set theme immediately to prevent flicker
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggle() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    return newTheme;
  }

  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme');
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

// Initialize theme immediately (before DOM loads)
new ThemeManager();
