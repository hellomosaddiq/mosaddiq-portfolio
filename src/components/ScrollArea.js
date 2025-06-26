// Custom scroll area component with styled scrollbar
export function ScrollArea(content, className = '') {
  const scrollContainer = document.createElement('div');
  scrollContainer.className = `scroll-area ${className}`;

  // Add the content
  if (typeof content === 'string') {
    scrollContainer.innerHTML = content;
  } else if (content instanceof HTMLElement) {
    scrollContainer.appendChild(content);
  }

  return scrollContainer;
}

// Apply exact shadcn-style scrollbar based on their actual implementation
export function initCustomScrollbar() {
  const style = document.createElement('style');
  style.textContent = `
    /* Exact shadcn scroll-area styling */

    /* Hide default scrollbar but keep functionality */
    * {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    *::-webkit-scrollbar {
      display: none;
    }

    /* Custom scrollbar for scroll areas only */
    .scroll-area {
      position: relative;
    }

    .scroll-area::-webkit-scrollbar {
      display: block;
      width: 10px;
      height: 10px;
    }

    .scroll-area::-webkit-scrollbar-corner {
      background: transparent;
    }

    .scroll-area::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 9999px;
    }

    .scroll-area::-webkit-scrollbar-thumb {
      background: hsl(var(--border));
      border-radius: 9999px;
      border: 2px solid transparent;
      background-clip: content-box;
      transition: background-color 0.2s;
    }

    .scroll-area::-webkit-scrollbar-thumb:hover {
      background: hsl(var(--border) / 0.8);
      background-clip: content-box;
    }

    /* Firefox scrollbar */
    .scroll-area {
      scrollbar-width: thin;
      scrollbar-color: hsl(var(--border)) transparent;
    }

    /* Define CSS variables for shadcn colors */
    :root {
      --border: 214.3 31.8% 91.4%;
      --muted: 210 40% 98%;
      --muted-foreground: 215.4 16.3% 46.9%;
    }

    [data-theme="dark"] {
      --border: 217.2 32.6% 17.5%;
      --muted: 217.2 32.6% 17.5%;
      --muted-foreground: 215 20.2% 65.1%;
    }
  `;

  document.head.appendChild(style);
}
