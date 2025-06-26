# Mosaddiq - Portfolio

A clean, minimalist portfolio website built with modern web technologies. Features a personal blog, project showcase, and responsive design with dark/light theme support.

## 🚀 Live Demo

Visit the live portfolio at [mosaddiq.dev](https://mosaddiq.dev)

## ✨ Features

- **Minimalist Design**: Clean, distraction-free interface inspired by Linear and Claude
- **Dark/Light Theme**: Smooth theme switching with persistent preferences
- **Personal Blog**: Markdown-based thoughts and reflections
- **Project Showcase**: Clean presentation of development work
- **Responsive Design**: Optimized for all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS v3 + Custom CSS Variables
- **Build Tool**: Vite
- **Fonts**: Geist & Geist Mono
- **Icons**: Custom SVG favicon

## 📁 Project Structure

```
mosaddiq-portfolio/
├── public/
│   ├── favicon.svg          # Custom asterisk favicon
│   ├── fonts/              # Geist font family
│   ├── thoughts/           # Markdown blog content
│   └── thoughts.json       # Blog metadata
├── src/
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── styles/            # CSS files
│   └── utils/             # Router, theme, markdown utils
├── dist/                  # Build output
└── me.txt                # Content consistency guide
```

## 🎨 Design Philosophy

- **Minimalism First**: Every element serves a purpose
- **Typography Focus**: Geist fonts for clean readability
- **Consistent Spacing**: Harmonious layout with proper hierarchy
- **Subtle Interactions**: Smooth transitions and hover effects
- **Theme Consistency**: Unified color system across light/dark modes

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mosaddiq/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Content Management

### Adding New Thoughts

1. **Create markdown file** in `public/thoughts/`
2. **Add metadata** to `public/thoughts.json`
3. **Rebuild** the project

### Updating Projects

Edit the projects data in `src/pages/Projects.js`

### Customizing Themes

Modify CSS variables in `src/styles/main.css`

## 🎯 Key Pages

### Home
- Personal introduction and current status
- Featured thoughts from the blog
- Quick navigation to main sections

### Thoughts Blog
- Personal reflections on JEE prep, coding, and life
- Markdown-based content system
- Featured thoughts on homepage

### Project Showcase
- Clean bullet-list format matching thoughts design
- Live project links where available
- Consistent design patterns

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

1. **Content**: Edit files in `public/thoughts/` and page components
2. **Styling**: Modify CSS variables in `src/styles/main.css`
3. **Colors**: Update theme colors in CSS custom properties
4. **Fonts**: Replace Geist fonts in `public/fonts/`

---

**Built with ❤️ by Mosaddiq**
