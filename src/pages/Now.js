export function Now() {
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
  pageTitle.className = 'text-4xl font-normal mb-8 tracking-tight';
  pageTitle.style.color = 'var(--color-text-primary)';
  pageTitle.textContent = 'Now';

  header.appendChild(nav);
  header.appendChild(pageTitle);

  // Main content
  const main = document.createElement('main');
  main.className = 'space-y-8';

  // Now page intro
  const intro = document.createElement('p');
  intro.className = 'text-sm leading-relaxed italic';
  intro.style.color = 'var(--color-text-subtle)';
  intro.innerHTML = `
    (This is a <a href="https://nownownow.com/about" class="project-link text-blue-400">now page</a>,
    and if you have your own site, you should make one, too.)
  `;

  // Study section
  const studySection = document.createElement('section');
  studySection.className = 'space-y-4';

  const studyTitle = document.createElement('h2');
  studyTitle.className = 'text-2xl font-normal tracking-tight';
  studyTitle.style.color = 'var(--color-text-primary)';
  studyTitle.textContent = 'Study';

  const studyContent = document.createElement('p');
  studyContent.className = 'leading-relaxed';
  studyContent.style.color = 'var(--color-text-secondary)';
  studyContent.innerHTML = `
    Currently in Class 12, preparing for JEE. This is my main focus right now -
    spending most of my time with physics, chemistry, and mathematics.
    The preparation is intense, but I'm committed to giving it my best shot.
  `;

  studySection.appendChild(studyTitle);
  studySection.appendChild(studyContent);

  // Life section
  const lifeSection = document.createElement('section');
  lifeSection.className = 'space-y-4';

  const lifeTitle = document.createElement('h2');
  lifeTitle.className = 'text-2xl font-normal tracking-tight';
  lifeTitle.style.color = 'var(--color-text-primary)';
  lifeTitle.textContent = 'Life';

  const lifeContent = document.createElement('p');
  lifeContent.className = 'leading-relaxed';
  lifeContent.style.color = 'var(--color-text-secondary)';
  lifeContent.innerHTML = `
    I have a friend named J. who is... well, there aren't enough words.
    I cherish the little time I get to spend with her, usually 2-3 days a week.
    Those moments bring a different kind of joy to my routine.
  `;

  lifeSection.appendChild(lifeTitle);
  lifeSection.appendChild(lifeContent);

  // Focus section
  const focusSection = document.createElement('section');
  focusSection.className = 'space-y-4';

  const focusTitle = document.createElement('h2');
  focusTitle.className = 'text-2xl font-normal tracking-tight';
  focusTitle.style.color = 'var(--color-text-primary)';
  focusTitle.textContent = 'Focus';

  const focusContent = document.createElement('p');
  focusContent.className = 'leading-relaxed';
  focusContent.style.color = 'var(--color-text-secondary)';
  focusContent.innerHTML = `
    Trying to focus on life and maintain discipline. Balancing JEE preparation
    with coding projects, personal relationships, and self-improvement.
    Some days are better than others, but I'm learning to be consistent.
  `;

  focusSection.appendChild(focusTitle);
  focusSection.appendChild(focusContent);

  // Coding section
  const codingSection = document.createElement('section');
  codingSection.className = 'space-y-4';

  const codingTitle = document.createElement('h2');
  codingTitle.className = 'text-2xl font-normal tracking-tight';
  codingTitle.style.color = 'var(--color-text-primary)';
  codingTitle.textContent = 'Coding';

  const codingContent = document.createElement('p');
  codingContent.className = 'leading-relaxed';
  codingContent.style.color = 'var(--color-text-secondary)';
  codingContent.innerHTML = `
    When I'm not studying, I'm working on web development projects.
    Currently building this portfolio and learning modern JavaScript.
    It's my creative outlet and a way to build something meaningful
    alongside my academic pursuits.
  `;

  codingSection.appendChild(codingTitle);
  codingSection.appendChild(codingContent);

  // Last updated
  const lastUpdated = document.createElement('p');
  lastUpdated.className = 'text-sm mt-12 pt-8 border-t';
  lastUpdated.style.color = 'var(--color-text-faint)';
  lastUpdated.style.borderColor = 'var(--color-border)';

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  lastUpdated.textContent = `Last Updated: ${currentDate}`;

  main.appendChild(intro);
  main.appendChild(studySection);
  main.appendChild(lifeSection);
  main.appendChild(focusSection);
  main.appendChild(codingSection);
  main.appendChild(lastUpdated);

  container.appendChild(header);
  container.appendChild(main);

  return container;
}
