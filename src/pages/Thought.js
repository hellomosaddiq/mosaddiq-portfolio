import { loadThoughtContent } from '../utils/markdown.js';

export function Thought(thoughtId) {
  const container = document.createElement('div');
  container.className = 'max-w-2xl mx-auto px-8 py-12 min-h-screen scroll-area';

  // Header with navigation
  const header = document.createElement('header');
  header.className = 'mb-12';

  const nav = document.createElement('nav');
  nav.className = 'mb-8';

  const backLink = document.createElement('a');
  backLink.href = '/';
  backLink.setAttribute('data-link', '');
  backLink.className = 'inline-flex items-center text-sm transition-colors hover:text-blue-400';
  backLink.style.color = 'var(--color-text-muted)';
  backLink.innerHTML = '← mosaddiq';

  nav.appendChild(backLink);
  header.appendChild(nav);

  // Main content area
  const main = document.createElement('main');
  main.className = 'prose prose-lg max-w-none';

  // Minimal loading state with theme colors
  main.style.opacity = '0.7';
  main.innerHTML = `
    <div class="animate-pulse">
      <div class="h-8 rounded w-3/4 mb-4" style="background-color: var(--color-bg-subtle);"></div>
      <div class="h-4 rounded w-1/4 mb-8" style="background-color: var(--color-bg-subtle);"></div>
      <div class="space-y-4">
        <div class="h-4 rounded" style="background-color: var(--color-bg-subtle);"></div>
        <div class="h-4 rounded" style="background-color: var(--color-bg-subtle);"></div>
        <div class="h-4 rounded w-5/6" style="background-color: var(--color-bg-subtle);"></div>
      </div>
    </div>
  `;

  // Load and render thought content
  async function loadContent() {
    try {
      const content = await loadThoughtContent(thoughtId);
      // Smooth transition
      main.style.transition = 'opacity 0.2s ease';
      main.style.opacity = '0';

      setTimeout(() => {
        main.innerHTML = content;
        main.style.opacity = '1';
      }, 100);



    } catch (error) {
      console.error('Error loading thought:', error);
      main.innerHTML = `
        <h1 class="text-4xl font-normal mb-8 tracking-tight" style="color: var(--color-text-primary);">Error Loading Thought</h1>
        <p class="leading-relaxed mb-6" style="color: var(--color-text-secondary);">
          Sorry, there was an error loading this thought. Please try again later.
        </p>
        <a href="/" data-link class="text-blue-400 hover:text-blue-300 hover:underline transition-colors">← Back to home</a>
      `;
    }
  }

  // Load content immediately
  loadContent();

  container.appendChild(header);
  container.appendChild(main);

  return container;
}
