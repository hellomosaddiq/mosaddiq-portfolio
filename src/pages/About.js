export function About() {
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
  pageTitle.className = 'text-4xl font-normal mb-8 tracking-tight';
  pageTitle.style.color = 'var(--color-text-primary)';
  pageTitle.textContent = 'About Me';

  header.appendChild(nav);
  header.appendChild(pageTitle);

  // Main content
  const main = document.createElement('main');
  main.className = 'space-y-8';

  // About content
  const aboutSection = document.createElement('section');
  aboutSection.className = 'space-y-6';

  const intro = document.createElement('p');
  intro.className = 'text-lg leading-relaxed';
  intro.style.color = 'var(--color-text-secondary)';
  intro.innerHTML = `
    I'm Mosaddiq, a student passionate about creating digital experiences and solving problems through code.
    I spend my days writing <a href="#" class="text-blue-400 hover:text-blue-300 hover:underline transition-colors">JavaScript</a>,
    experimenting with CSS, and building meaningful projects.
  `;

  const currentFocus = document.createElement('p');
  currentFocus.className = 'leading-relaxed';
  currentFocus.style.color = 'var(--color-text-secondary)';
  currentFocus.innerHTML = `
    Currently mastering web development fundamentals - clean code, responsive design, and user-centered thinking. Learning through hands-on projects.
  `;

  const personal = document.createElement('p');
  personal.className = 'leading-relaxed';
  personal.style.color = 'var(--color-text-secondary)';
  personal.innerHTML = `
    When I'm not coding, you'll find me with a paintbrush in hand or lost in music.
    Both help me think differently about creativity and problem-solving.
  `;

  const currentStatus = document.createElement('p');
  currentStatus.className = 'leading-relaxed';
  currentStatus.style.color = 'var(--color-text-secondary)';
  currentStatus.innerHTML = `
    Here's what I'm doing <a href="/now" data-link class="text-blue-400 hover:text-blue-300 hover:underline transition-colors">now</a>.
  `;

  aboutSection.appendChild(intro);
  aboutSection.appendChild(currentFocus);
  aboutSection.appendChild(personal);
  aboutSection.appendChild(currentStatus);

  // Contact section
  const contactSection = document.createElement('section');
  contactSection.className = 'mt-12';

  const contactTitle = document.createElement('h2');
  contactTitle.className = 'text-2xl font-normal mb-6 tracking-tight';
  contactTitle.style.color = 'var(--color-text-primary)';
  contactTitle.textContent = 'Contact';

  const contactList = document.createElement('ul');
  contactList.className = 'space-y-3';

  const contacts = [
    {
      label: 'Email',
      value: '',
      href: 'mailto:mosaddiq@gmail.com'
    },
    {
      label: 'Twitter',
      value: '',
      href: 'https://twitter.com/mosaddiq'
    },
    {
      label: 'GitHub',
      value: '',
      href: 'https://github.com/hellomosaddiq'
    },
    {
      label: 'LinkedIn',
      value: '',
      href: 'https://linkedin.com/in/mosaddiq'
    }
  ];

  contacts.forEach(contact => {
    const li = document.createElement('li');
    li.className = 'flex items-center';

    const bullet = document.createElement('span');
    bullet.className = 'mr-3 font-bold';
    bullet.style.color = 'var(--color-text-faint)';
    bullet.textContent = '•';

    const link = document.createElement('a');
    link.href = contact.href;
    link.className = 'text-blue-400 hover:text-blue-300 hover:underline transition-colors';
    link.textContent = contact.label;

    if (contact.value) {
      const value = document.createElement('span');
      value.style.color = 'var(--color-text-secondary)';
      value.textContent = ` ${contact.value}`;
      li.appendChild(bullet);
      li.appendChild(link);
      li.appendChild(value);
    } else {
      li.appendChild(bullet);
      li.appendChild(link);
    }

    contactList.appendChild(li);
  });

  contactSection.appendChild(contactTitle);
  contactSection.appendChild(contactList);

  main.appendChild(aboutSection);
  main.appendChild(contactSection);

  container.appendChild(header);
  container.appendChild(main);

  return container;
}
