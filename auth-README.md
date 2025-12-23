Auth UI (Login / Sign Up)
=========================

Overview
--------
This folder adds a premium Login and Sign Up UI for vigux.in built with React + Tailwind (works in your Vite + React setup).

Files added
-----------
- `src/components/AuthCard.js` — shared centered card and social buttons
- `src/pages/Login.js` — Login page with email, password (show/hide), social buttons
- `src/pages/Signup.js` — Sign up page with name, email, password, confirm password

Folder structure recommendation
------------------------------

- `src/components/` — shared UI components (e.g. `AuthCard.js`)
- `src/pages/` — routeable pages (`Login.js`, `Signup.js`)

Toggle between Login and Sign Up
-------------------------------

1. Using existing React Router routes (recommended):

   - Your `src/App.js` already registers `/login` and `/signup` routes.
   - Navigate with links: `<Link to="/signup">Sign Up</Link>` and `<Link to="/login">Log in</Link>`.

2. Without router (simple toggle):

   - Replace the route view with a small state toggle in `App.js`:

```jsx
const [page, setPage] = useState('login');
// render: {page === 'login' ? <Login onLogin={...} /> : <Signup />}
// toggle with setPage('signup') / setPage('login')
```

Tailwind notes
--------------
- Your project already contains `tailwind.config.js` and `src/index.css` with Tailwind directives. If Tailwind is not active, ensure `postcss` and `tailwindcss` are installed and Vite is configured.

Customization
-------------
- Replace the placeholder form handlers with real API calls.
- Swap icons/brand colors in `AuthCard.js` as needed.
