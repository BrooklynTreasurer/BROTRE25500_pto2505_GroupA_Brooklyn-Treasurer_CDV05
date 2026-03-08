# Brooklyn Portfolio

A responsive personal portfolio website built with React and Vite.

[My portfolio Link](https://brooklyntreasurerportfolio.netlify.app)

## Overview

This project is structured around **Single Responsibility Principle (SRP)** components:
- `Header` handles navigation
- `Content` handles the hero section
- `ExtraInfo` composes the informational sections:
  - `AboutMe`
  - `Projects`
  - `Services`
  - `TechnicalInfo`
- `Contact` handles contact details and form UI
- `Footer` handles site footer information

## Tech Stack

- React 19
- Vite 7
- Plain CSS (`src/index.css`)
- JavaScript with JSDoc annotations

## Current Features

- Sticky header with glassmorphism styling
- Mobile hamburger navigation (3-line toggle)
- Anchor-based section navigation (`#home`, `#about`, `#projects`, `#contact`, etc.)
- Smooth scrolling between sections
- Hero section with CTA links and social links
- Data-driven projects, services, and technical skills
- Contact section with responsive 2-column to 1-column layout
- Fully responsive layout across desktop, tablet, and mobile

## Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  data.js
  components/
    images/
    ui/
      Header.jsx
      Content.jsx
      ExtraInfo.jsx
      AboutMe.jsx
      Projects.jsx
      Services.jsx
      TechnicalInfo.jsx
      Contact.jsx
      Footer.jsx
```

## Data Model

Shared section content lives in `src/data.js` and is reused by components.

JSDoc typedefs are included for:
- `AboutMeData`
- `EducationEntry`
- `ProjectData`
- `ServiceData`
- `SkillItem`
- `TechnicalSkillGroup`

This keeps component files focused on rendering only.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - run local dev server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run linting

## Styling Notes

Main stylesheet: `src/index.css`

Important responsive breakpoints currently used:
- `1200px`
- `1040px`
- `760px`
- `480px`

## Navigation Mapping

Header links map to these IDs:
- `Home` -> `#home`
- `About` -> `#about`
- `Projects` -> `#projects`
- `Contact` -> `#contact`

Hero CTA links:
- `Hire Me` -> `#contact`
- `View Projects` -> `#projects`

## Maintenance Tips

- Update section content in `src/data.js`
- Keep UI components presentational
- Keep layout/responsive changes in `src/index.css`
- Keep JSDoc updated when adding new fields to shared data
