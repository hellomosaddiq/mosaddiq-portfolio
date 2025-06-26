export function Projects() {
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
  backLink.className = 'back-nav';
  backLink.innerHTML = 'mosaddiq';

  nav.appendChild(backLink);

  const pageTitle = document.createElement('h1');
  pageTitle.className = 'text-4xl font-normal mb-6 tracking-tight';
  pageTitle.style.color = 'var(--color-text-primary)';
  pageTitle.textContent = 'Projects';

  const pageDescription = document.createElement('p');
  pageDescription.className = 'text-lg leading-relaxed max-w-xl';
  pageDescription.style.color = 'var(--color-text-muted)';
  pageDescription.textContent = 'Building things for fun, learning, and solving problems. Small experiments and larger applications that keep me coding.';

  header.appendChild(nav);
  header.appendChild(pageTitle);
  header.appendChild(pageDescription);

  // Projects section
  const projectsSection = document.createElement('section');

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
      url: null
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with clean, semantic code and responsive design principles',
      url: null
    },
    {
      title: 'Learning Tracker',
      description: 'A simple web app to track my daily learning progress and coding challenges',
      url: null
    },
    {
      title: 'Responsive Dashboard',
      description: 'A responsive dashboard interface showcasing modern CSS Grid and Flexbox techniques',
      url: null
    }
  ];

  projects.forEach(project => {
    const li = document.createElement('li');
    li.className = 'relative pl-6';

    if (project.url) {
      li.innerHTML = `
        <span class="absolute left-0 top-0 font-bold" style="color: var(--color-text-faint);">•</span>
        <a href="${project.url}" class="project-link text-blue-400">${project.title}</a>
        <span style="color: var(--color-text-secondary);"> - ${project.description}</span>
      `;
    } else {
      li.innerHTML = `
        <span class="absolute left-0 top-0 font-bold" style="color: var(--color-text-faint);">•</span>
        <span class="text-blue-400">${project.title}</span>
        <span style="color: var(--color-text-secondary);"> - ${project.description}</span>
      `;
    }

    projectsList.appendChild(li);
  });

  projectsSection.appendChild(projectsList);

  // More projects link
  const moreSection = document.createElement('div');
  moreSection.className = 'mt-6';
  moreSection.innerHTML = `<p style="color: var(--color-text-subtle);">More projects can be found <a href="https://github.com/hellomosaddiq" class="project-link text-blue-400">here</a>.</p>`;

  container.appendChild(header);
  container.appendChild(projectsSection);
  container.appendChild(moreSection);

  return container;
}
