# Custom React Router Playground

This project is a small learning playground that recreates the core ideas of React Router from scratch. Instead of relying on the official library, the app implements a minimal `BrowserRouter`, `Route`, and `Link` to show how client-side routing works with the History API, React context, and component composition. The UI is built with React 19 and Vite for instant dev feedback.

## Features

- Tiny `BrowserRouter` that stores the current `URL`, listens for `popstate`, and exposes routing state through context.
- `<Route>` component that renders its children when the `pathname` matches the `path` prop.
- `<Link>` component that calls `history.pushState` for SPA navigation without a full page reload.
- Simple `<Navbar>` demonstrating how to add new links and sections such as Home, About, and Contact.
- Vite-powered tooling with ESLint so you can iterate quickly while keeping the code tidy.

## Getting Started

1. **Requirements:** Node.js 18+ and npm 9+ (Vite’s recommended baseline).
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the dev server**
   ```bash
   npm run dev
   ```
   Vite prints a local URL (normally `http://localhost:5173`). Navigate to `/home`, `/about`, or `/contact` to see each route render.

## Scripts

| Command         | Description                                  |
| `npm run dev`   | Start Vite in development mode with HMR.     |

## Project Structure

```
React-Router/
├── src/
│   ├── BrowserRouter.jsx   # Custom provider that stores the current URL
│   ├── Link.jsx            # Pushes new entries to history and updates context
│   ├── Route.jsx           # Conditionally renders children based on the pathname
│   ├── Navbar.jsx          # Demo navigation using the custom Link component
│   ├── App.jsx             # Wires the router and sample routes together
│   └── main.jsx            # React entry point created by Vite
└── public/                 # Static files served at the root
```

## Extending the Router

- Add more `<Route path="/your-path">` blocks in `App.jsx` (or any component nested inside `BrowserRouter`) to display additional sections.
- Style the navigation by replacing the placeholder markup in `Navbar.jsx` with your preferred layout.
- Enhance `<Route>` to support wildcard matching, nested routes, query params, or fallback routes to mirror the real React Router feature set.

## Limitations & Next Steps

This router intentionally keeps the implementation light: there is no route prioritization, no lazy loading, and no error boundaries. Treat it as an educational foundation. Ideas for future exploration include adding hash-based routing, scroll restoration, link "active" states, or turning the helpers into an npm package.
