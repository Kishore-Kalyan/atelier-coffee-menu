# Atelier — Digital Coffee Menu

A high-end restaurant coffee menu designed to be accessed via QR code at the table. Built as a mobile-first React SPA with a dark/light mode toggle.

## Features

- **QR-ready mobile layout** — optimised for 375px viewports, no app install needed
- **6 menu sections** — Single Origin, Espresso, Milk, Cold, Specialty & Tea
- **Dark / Light mode** — toggle persists via `localStorage`
- **Sticky category nav** — scrollspy highlights the active section as you scroll
- **INR pricing** — all prices in Indian Rupees, GST inclusive

## Tech Stack

- [React 18](https://react.dev) + [Vite 5](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- React Context API for theme state
- IntersectionObserver for scrollspy and fade-in animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build & Deploy

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build locally
```

The project is configured for one-click deployment on [Vercel](https://vercel.com). Connect the GitHub repo and Vercel auto-detects Vite with no extra configuration needed.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Logo + dark/light toggle button
│   ├── MenuNav.jsx      # Sticky scrollspy category tabs
│   ├── MenuSection.jsx  # Section header + items list
│   ├── MenuItem.jsx     # Individual item row with badge support
│   └── MenuFooter.jsx   # Address, hours, legal note
├── context/
│   └── ThemeContext.jsx # Theme tokens + toggle logic
├── data/
│   └── menu.js          # All menu categories and items
└── hooks/
    ├── useActiveSection.js  # IntersectionObserver scrollspy
    └── useFadeUp.js         # Fade-in animation hook
```

## Menu Badges

Items can carry one of three badges:

| Badge | Meaning |
|-------|---------|
| `Limited` | Rare single-origin or limited allocation |
| `Seasonal` | Available for a limited season only |
| `Signature` | House specialty, always on the menu |

## Location

12 Vittal Mallya Road, Bengaluru 560 001  
Mon – Fri · 8:00 – 23:00 | Sat – Sun · 9:00 – 24:00
