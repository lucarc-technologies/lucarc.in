<div align="center">

<img src="./public/lucarc.png" alt="Lucarc Logo" width="140"/>

# lucarc.in

### Official website of Lucarc

Building software that helps businesses work smarter and developers grow.

[GitHub Organization](https://github.com/lucarc-technologies) • [LinkedIn](https://linkedin.com/company/lucarc)

</div>

---

# Overview

This repository contains the source code for the official **Lucarc** website.

The website serves as the central hub for the Lucarc ecosystem, showcasing our company, products, engineering philosophy, and future vision.

Unlike a traditional landing page, this website is designed to evolve alongside the company and provide a single destination for our products, documentation, blog, careers, and engineering updates.

---

# About Lucarc

Lucarc is a software product company focused on building modern applications that empower businesses and developers.

We create scalable SaaS products, developer tools, and productivity platforms with an emphasis on simplicity, performance, and long-term maintainability.

---

# Products

## 🌿 ClearDays

A modern multi-tenant HRMS platform built for startups, SMEs, and enterprises.

Features include:

- Employee Management
- Attendance
- Leave Management
- Payroll
- Analytics
- RBAC
- Multi-Tenant Architecture

---

## 🚀 PrepForge

A developer-first interview preparation platform.

Features include:

- DSA Roadmaps
- System Design
- Behavioral Preparation
- STAR Story Builder
- Interview Checklists
- Progress Tracking

---

# Features

- Modern responsive UI
- Dark & Light mode
- SEO optimized
- Dynamic sitemap
- Robots configuration
- Structured metadata
- Scalable architecture
- Product showcase pages
- Company information pages
- Shared design system
- Reusable UI components

---

# Architecture

```
src/

├── app/                # Next.js App Router
├── company/            # Company modules
├── products/           # Product modules
├── components/         # Shared components
├── content/            # Static content
├── core/               # Providers, SEO, Analytics
├── assets/             # Images & logos
├── hooks/              # Custom hooks
├── lib/                # Utilities
├── services/           # API integrations
├── styles/             # Global design tokens
└── types/              # Shared types
```

---

# Design Principles

This project follows several architectural principles.

## Domain Driven Organization

Features are grouped by business domain rather than file type.

## Component Reusability

Reusable UI components are isolated from business-specific components.

## Separation of Concerns

Routing, presentation, business logic, content, and shared utilities remain independent.

## Scalability

The architecture is designed to support multiple Lucarc products without requiring major restructuring.

---

# Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- ESLint

---

# Getting Started

Clone the repository

```bash
git clone https://github.com/lucarc-technologies/lucarc.in.git
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Project Structure

```
public/
    Logo assets

src/

    app/
        Routing

    company/
        Company pages

    products/
        Product pages

    components/
        Shared UI

    content/
        Static data

    core/
        Providers
        SEO
        Analytics

    styles/
        Design Tokens

    lib/
        Utilities

    hooks/
        Shared Hooks

    services/
        External Services

    types/
        Shared Types
```

---

# Roadmap

- [x] Landing Page
- [x] Company Pages
- [x] Product Pages
- [ ] Engineering Blog
- [ ] Careers Portal
- [ ] Documentation
- [ ] Press Kit
- [ ] Product Changelog
- [ ] Contact Portal

---

# Contributing

We welcome contributions that improve the website, documentation, accessibility, and developer experience.

Please open an issue before submitting major changes.

---

# License

Copyright © 2026 Lucarc.

All rights reserved.

This repository contains the source code for the official Lucarc website.

Unauthorized reproduction or redistribution is prohibited unless explicitly permitted.

---

<div align="center">

### Building software that helps businesses work smarter and developers grow.

Made with ❤️ by Lucarc

</div>