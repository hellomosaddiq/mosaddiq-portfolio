export function Thoughts() {
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

  const pageTitle = document.createElement('h1');
  pageTitle.className = 'text-4xl font-normal mb-4 tracking-tight';
  pageTitle.style.color = 'var(--color-text-primary)';
  pageTitle.textContent = 'Thoughts';

  const pageDescription = document.createElement('p');
  pageDescription.className = 'text-lg leading-relaxed';
  pageDescription.style.color = 'var(--color-text-muted)';
  pageDescription.textContent = 'Random thoughts on JEE prep, coding struggles, late-night study sessions, and the messy reality of being 19.';

  header.appendChild(nav);
  header.appendChild(pageTitle);
  header.appendChild(pageDescription);

  // Main content
  const main = document.createElement('main');

  // Simple thoughts list (like homepage style)
  const thoughtsList = document.createElement('ul');
  thoughtsList.className = 'space-y-4';

  // Load and display thoughts
  async function loadAllThoughts() {
    try {
      const response = await fetch('/thoughts.json');
      const data = await response.json();

      // Sort thoughts by date (newest first)
      const sortedThoughts = data.thoughts.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Render thoughts in simple list format (like homepage)
      sortedThoughts.forEach(thought => {
        const li = document.createElement('li');
        li.className = 'relative pl-6';
        li.innerHTML = `
          <span class="absolute left-0 top-0 font-bold" style="color: var(--color-text-faint);">•</span>
          <a href="/thoughts/${thought.id}" data-link class="text-blue-400 hover:text-blue-300 hover:underline transition-colors">${thought.title}</a>
          <span style="color: var(--color-text-secondary);"> - ${thought.description}</span>
        `;
        thoughtsList.appendChild(li);
      });

    } catch (error) {
      console.error('Error loading thoughts:', error);
      const errorLi = document.createElement('li');
      errorLi.className = 'relative pl-6';
      errorLi.innerHTML = `
        <span class="absolute left-0 top-0 font-bold" style="color: var(--color-text-faint);">•</span>
        <span style="color: var(--color-text-secondary);">Error loading thoughts...</span>
      `;
      thoughtsList.appendChild(errorLi);
    }
  }

  // Load thoughts immediately
  loadAllThoughts();

  main.appendChild(thoughtsList);

  container.appendChild(header);
  container.appendChild(main);

  return container;
}
