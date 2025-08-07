
# Modern pizza ordering web application

## Project Overview
Modern pizza ordering web application built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui. It features a modular structure for easy development and scalability.

## Features

- 🍕 Menu browsing and ordering
- 🔒 User authentication (login page)
- 🛒 Order management
- 🛠️ Admin dashboard
- 📱 Responsive design
- 🎨 Modern UI components (shadcn-ui)

## Project Structure

```
src/
  app/
    layout.tsx         # Main layout
    globles.css        # Global styles
    not-found.tsx      # 404 page
    page.tsx           # Home page
    admin/page.tsx     # Admin dashboard
    login/page.tsx     # Login page
    menu/page.tsx      # Menu listing
    order/page.tsx     # Order management
  components/
    Footer.tsx         # Footer component
    Navigation.tsx     # Navigation bar
    ui/                # UI library components
  hooks/               # Custom React hooks
  lib/                 # Utility functions
public/
  images/              # Pizza images
  favicon.ico, robots.txt, etc.
```

## Getting Started

### Prerequisites

- Node.js (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Alternative Package Managers

You can also use `pnpm` or `bun`:

```bash
pnpm install
pnpm run dev
# or
bun install
bun run dev
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Technologies Used

- [Nextjs](https://nextjs.org/docs) — Fast build tool
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [shadcn-ui](https://ui.shadcn.com/) — UI components

## License

MIT
