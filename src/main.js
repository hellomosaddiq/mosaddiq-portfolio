import './styles/main.css'
import { Router } from './utils/router.js'
import { Home } from './pages/Home.js'
import { Projects } from './pages/Projects.js'
import { About } from './pages/About.js'
import { Now } from './pages/Now.js'
import { Thoughts } from './pages/Thoughts.js'
import { Thought } from './pages/Thought.js'
import { initCustomScrollbar } from './components/ScrollArea.js'

// Initialize theme immediately to prevent flicker
import './utils/theme.js'

// Initialize custom scrollbar
initCustomScrollbar();

// Define routes
const routes = {
  '/': { component: Home },
  '/projects': { component: Projects },
  '/about': { component: About },
  '/now': { component: Now },
  '/thoughts': { component: Thoughts },
  '/thoughts/:id': {
    component: (params) => {
      return Thought(params.id);
    }
  },
  '/404': {
    component: () => {
      const div = document.createElement('div');
      div.className = 'max-w-2xl mx-auto px-8 py-12 text-center';
      div.innerHTML = `
        <h1 class="text-4xl font-bold mb-4" style="color: var(--color-text-primary);">404</h1>
        <p style="color: var(--color-text-muted);">Page not found</p>
        <a href="/" data-link class="text-blue-400">Go home</a>
      `;
      return div;
    }
  }
};

// Initialize router
const router = new Router(routes);

// Handle external links (open in new tab)
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.href && !e.target.hasAttribute('data-link')) {
    const url = new URL(e.target.href);
    if (url.origin !== window.location.origin) {
      e.target.target = '_blank';
      e.target.rel = 'noopener noreferrer';
    }
  }
});

console.log('🚀 Modern portfolio loaded with Vite + Tailwind v4!');
