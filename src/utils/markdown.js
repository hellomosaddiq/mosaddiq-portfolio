// Simple markdown parser for thought content
export function parseMarkdown(markdown) {
  let html = markdown;

  // Headers
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-normal mb-8 tracking-tight" style="color: var(--color-text-primary);">$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-normal mb-6 tracking-tight" style="color: var(--color-text-primary);">$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-4" style="color: var(--color-text-primary);">$1</h3>');

  // Bold text
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic text (dates)
  html = html.replace(/^\*(.*?)\*$/gim, '<p class="text-sm mb-8 italic" style="color: var(--color-text-subtle);">$1</p>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="project-link text-blue-400">$1</a>');

  // Paragraphs - split by double newlines and wrap in p tags
  const paragraphs = html.split('\n\n');
  html = paragraphs.map(paragraph => {
    paragraph = paragraph.trim();
    if (!paragraph) return '';

    // Skip if already wrapped in HTML tags
    if (paragraph.startsWith('<h') || paragraph.startsWith('<p class="text-sm')) {
      return paragraph;
    }

    // Handle single line breaks within paragraphs
    paragraph = paragraph.replace(/\n/g, ' ');

    return `<p class="leading-relaxed mb-6" style="color: var(--color-text-secondary);">${paragraph}</p>`;
  }).join('\n');

  return html;
}

// Load thought content from markdown file
export async function loadThoughtContent(thoughtId) {
  try {
    const response = await fetch(`/thoughts/${thoughtId}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load thought: ${response.status}`);
    }
    const markdown = await response.text();
    return parseMarkdown(markdown);
  } catch (error) {
    console.error('Error loading thought content:', error);
    return `
      <h1 class="text-4xl font-normal mb-8 tracking-tight" style="color: var(--color-text-primary);">Thought Not Found</h1>
      <p class="leading-relaxed mb-6" style="color: var(--color-text-secondary);">
        Sorry, this thought couldn't be loaded. Please try again later.
      </p>
    `;
  }
}
