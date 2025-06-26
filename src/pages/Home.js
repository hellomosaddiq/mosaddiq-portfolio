import { ThemeToggle } from '../components/ThemeToggle.js';
import { navigate } from '../utils/router.js';

export function Home() {
  const container = document.createElement('div');
  container.className = 'max-w-2xl mx-auto px-8 py-12 min-h-screen scroll-area';

  // Header with name and theme toggle
  const header = document.createElement('header');
  header.className = 'mb-12';

  const nameContainer = document.createElement('h1');
  nameContainer.className = 'text-4xl font-normal mb-6 tracking-tight';
  nameContainer.style.color = 'var(--color-text-primary)';
  nameContainer.innerHTML = 'mosaddiq';
  nameContainer.appendChild(ThemeToggle());

  const bio = document.createElement('p');
  bio.className = 'text-lg leading-relaxed max-w-xl';
  bio.style.color = 'var(--color-text-muted)';
  bio.innerHTML = `
    Student developer learning to build things for the web.
    Passionate about clean code and user experience. Currently exploring
    modern web technologies and best practices.
    More <a href="/about" data-link class="text-blue-400">about me</a>.
  `;

  header.appendChild(nameContainer);
  header.appendChild(bio);

  // Main content
  const main = document.createElement('main');
  main.className = 'space-y-12';

  // Projects section
  const projectsSection = document.createElement('section');
  const projectsTitle = document.createElement('h2');
  projectsTitle.className = 'text-xl font-medium mb-6 pb-2 border-b';
  projectsTitle.style.color = 'var(--color-text-primary)';
  projectsTitle.style.borderColor = 'var(--color-border)';
  projectsTitle.textContent = 'Projects';

  const projectsList = document.createElement('ul');
  projectsList.className = 'space-y-4';

  const projects = [
    {
      title: 'Nexus New Tab',
      description: 'A Chrome extension that transforms your new tab experience with a clean, minimalist interface',
      url: 'https://github.com/hellomosaddiq/nexus-new-tab'
    },
    {
      title: 'Ring Rush',
      description: 'My first web game built with HTML5 Canvas and JavaScript, featuring smooth animations and responsive gameplay',
      url: 'https://ringrush.netlify.app/'
    },
    {
      title: 'Day by Day',
      description: 'A Day by Day visualisation of my life, tracking daily activities and personal growth',
      url: '#'
    }
  ];

  projects.forEach(project => {
    const li = document.createElement('li');
    li.className = 'relative pl-6';
    li.innerHTML = `
      <span class="absolute left-0 top-0 font-bold" style="color: var(--color-text-faint);">•</span>
      <a href="${project.url}" class="project-link text-blue-400 font-medium">${project.title}</a>
      <span style="color: var(--color-text-secondary);"> - ${project.description}</span>
    `;
    projectsList.appendChild(li);
  });

  const moreProjects = document.createElement('p');
  moreProjects.className = 'mt-6';
  moreProjects.style.color = 'var(--color-text-subtle)';
  moreProjects.innerHTML = `More projects can be found <a href="/projects" data-link class="text-blue-400">here</a>.`;

  projectsSection.appendChild(projectsTitle);
  projectsSection.appendChild(projectsList);
  projectsSection.appendChild(moreProjects);

  // Thoughts section
  const thoughtsSection = document.createElement('section');
  const thoughtsTitle = document.createElement('h2');
  thoughtsTitle.className = 'text-xl font-medium mb-6 pb-2 border-b';
  thoughtsTitle.style.color = 'var(--color-text-primary)';
  thoughtsTitle.style.borderColor = 'var(--color-border)';
  thoughtsTitle.textContent = 'Thoughts';

  const thoughtsList = document.createElement('ul');
  thoughtsList.className = 'space-y-4';

  // Load featured thoughts from JSON
  async function loadFeaturedThoughts() {
    try {
      const response = await fetch('/thoughts.json');
      const data = await response.json();

      // Filter for featured thoughts only
      const featuredThoughts = data.thoughts.filter(thought => thought.featured);

      featuredThoughts.forEach(thought => {
        const li = document.createElement('li');
        li.className = 'relative pl-6';
        li.innerHTML = `
          <span class="absolute left-0 top-0 font-bold" style="color: var(--color-text-faint);">•</span>
          <a href="/thoughts/${thought.id}" data-link class="text-blue-400">${thought.title}</a>
          <span style="color: var(--color-text-secondary);"> - ${thought.description}</span>
        `;
        thoughtsList.appendChild(li);
      });
    } catch (error) {
      console.error('Error loading thoughts:', error);
      // Fallback content if JSON fails to load
      const fallbackLi = document.createElement('li');
      fallbackLi.className = 'relative pl-6';
      fallbackLi.innerHTML = `
        <span class="absolute left-0 top-0 font-bold" style="color: var(--color-text-faint);">•</span>
        <span style="color: var(--color-text-secondary);">Thoughts loading...</span>
      `;
      thoughtsList.appendChild(fallbackLi);
    }
  }

  // Load thoughts immediately
  loadFeaturedThoughts();

  // Add "View all thoughts" link
  const viewAllLink = document.createElement('div');
  viewAllLink.className = 'mt-6';
  viewAllLink.innerHTML = `<p style="color: var(--color-text-subtle);">More thoughts can be found <a href="/thoughts" data-link class="text-blue-400">here</a>.</p>`;

  thoughtsSection.appendChild(thoughtsTitle);
  thoughtsSection.appendChild(thoughtsList);
  thoughtsSection.appendChild(viewAllLink);

  main.appendChild(projectsSection);
  main.appendChild(thoughtsSection);

  container.appendChild(header);
  container.appendChild(main);

  return container;
}
