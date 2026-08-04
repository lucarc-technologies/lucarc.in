# Contributing to Lucarc

Thank you for your interest in contributing to **Lucarc** (`lucarc.in`)! We build reliable, scalable, and user-centric SaaS platforms and developer tools. This guide will help you get set up and understand our engineering workflows.

---

## 1. Project Setup

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher
- **Git**: `v2.x`

### Local Setup
1. **Fork and clone the repository**:
   ```bash
   git clone https://github.com/lucarc-technologies/lucarc.in.git
   cd lucarc.in
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. Folder Structure

We use a **Domain-Driven Organization** where code is grouped by business capability rather than technical type:

```
src/
├── app/                  # Next.js App Router root & domain routes
├── company/              # Company domain views (about, careers, mission, team, values)
├── products/             # Product modules (cleardays, prepforge)
├── components/           # Shared components (layout, ui, sections)
├── content/              # Strongly-typed static content & copy
├── core/                 # Shared core architecture (providers, seo, analytics)
├── lib/                  # Shared utilities
├── styles/               # Global CSS & Tailwind @theme tokens
└── types/                # Shared TypeScript types
```

---

## 3. Coding Conventions

- **TypeScript First**: All code must be written in TypeScript with strict typing. Avoid `any`.
- **Server vs. Client Components**: Default to Next.js React Server Components (RSC). Only add `"use client"` when interactivity (state, effects, event listeners, Framer Motion) is explicitly required.
- **Tailwind CSS & Design Tokens**:
  - Use our standardized `@theme` tokens in `globals.css` (e.g., `bg-background`, `text-text`, `text-primary`, `border-border`, `bg-surface`).
  - Do not hardcode hex colors or ad-hoc spacing values.
- **Minimalist Aesthetic**: Maintain generous whitespace, controlled editorial font sizes (`text-3xl` to `text-5xl` for heroes, `text-2xl` to `text-4xl` for sections), and `font-semibold` instead of loud `font-extrabold`.

---

## 4. Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| **Files & Directories** | kebab-case | `about-view.tsx`, `cleardays-hero.tsx` |
| **React Components** | PascalCase | `Navbar`, `ProductsShowcase`, `Modal` |
| **Functions & Hooks** | camelCase | `useModal`, `cn`, `formatDate` |
| **Constants & Tokens** | camelCase / UPPER_CASE | `cleardaysData`, `MAX_RETRIES` |
| **Types & Interfaces** | PascalCase | `CompanyOverview`, `ProductFeature` |

---

## 5. Commit Message Style

We strictly follow [Conventional Commits](https://www.conventionalcommits.org/) to generate clean changelogs and automate semantic releases.

### Structure:
```
<type>(<optional scope>): <short description>
```

### Supported Types:
- `feat:` A new feature or product page
- `fix:` A bug fix
- `docs:` Documentation updates (`README.md`, `CONTRIBUTING.md`, etc.)
- `style:` Formatting, missing semicolons, or whitespace changes (no logic change)
- `refactor:` Code refactoring without changing observable behavior
- `perf:` Performance improvements
- `test:` Adding or updating automated tests
- `chore:` Routine build, CI/CD, or dependency changes

### Examples:
- `feat(cleardays): add multi-tenant architecture interactive diagram`
- `fix(navbar): resolve mobile drawer scroll lock on iOS`
- `docs: update CODEOWNERS and PR templates`

---

## 6. Pull Request (PR) Process

1. **Branching**: Create a feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. **Local Verification**: Before submitting your PR, verify that all checks pass locally:
   ```bash
   npm run lint
   npm run build
   ```
3. **Submit PR**:
   - Use our official Pull Request template (`.github/PULL_REQUEST_TEMPLATE.md`).
   - Write a descriptive title following Conventional Commits.
   - Link any related issues (e.g., `Closes #42`).
4. **Code Review**:
   - A maintainer will review your pull request.
   - Ensure all automated GitHub Actions checks (`Install -> Lint -> Type Check -> Build`) pass cleanly.
