// Simple SPA Router
export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentRoute = null;
    this.init();
  }

  init() {
    // Handle initial route
    this.handleRoute();

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', () => this.handleRoute());

    // Handle link clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        this.navigateTo(e.target.href);
      }
    });
  }

  handleRoute() {
    const path = window.location.pathname;

    // Check for exact route match first
    let route = this.routes[path];
    let params = {};

    // If no exact match, check for dynamic routes
    if (!route) {
      for (const routePath in this.routes) {
        const match = this.matchRoute(routePath, path);
        if (match) {
          route = this.routes[routePath];
          params = match.params;
          break;
        }
      }
    }

    // Fallback to 404
    if (!route) {
      route = this.routes['/404'];
    }

    if (route && route !== this.currentRoute) {
      this.currentRoute = route;
      this.render(route, params);
    }
  }

  matchRoute(routePath, actualPath) {
    // Handle dynamic routes like /thoughts/:id
    const routeParts = routePath.split('/');
    const pathParts = actualPath.split('/');

    if (routeParts.length !== pathParts.length) {
      return null;
    }

    const params = {};

    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i];
      const pathPart = pathParts[i];

      if (routePart.startsWith(':')) {
        // Dynamic parameter
        const paramName = routePart.slice(1);
        params[paramName] = pathPart;
      } else if (routePart !== pathPart) {
        // Static part doesn't match
        return null;
      }
    }

    return { params };
  }

  navigateTo(url) {
    history.pushState(null, null, url);
    this.handleRoute();
  }

  render(route, params = {}) {
    const app = document.getElementById('app');
    if (app && route.component) {
      // Smooth transition
      app.style.opacity = '0';

      setTimeout(() => {
        app.innerHTML = '';
        // Pass parameters to component if it's a function that accepts them
        const component = typeof route.component === 'function'
          ? route.component(params)
          : route.component();
        app.appendChild(component);
        app.style.opacity = '1';
      }, 75); // Very quick transition
    }
  }
}

// Navigation helper
export function navigate(path) {
  history.pushState(null, null, path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
