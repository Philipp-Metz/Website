# Philipp Metz — Website

Personal portfolio website of **Philipp Metz**, built from scratch with React, Vite, and modern Vanilla CSS.

## ✨ Features & Sections

- **Navigation (`NavigationBar`)** — Sticky navigation bar with smooth anchor links to all sections, responsive mobile menu toggle, and quick social links (Email, GitHub, LinkedIn).
- **Intro (`Intro` & `AsciiPortrait`)** — Interactive HiDPI ASCII portrait canvas with pointer/touch particle repulsion, accessible typewriter effect, and direct contact call-to-action.
- **About (`About`)** — Personal introduction
- **Experience (`Experience` & `ExperienceList`)** — Interactive vertical tab view of professional milestones with full WAI-ARIA keyboard navigation, powered by React state (`useState`) and modular data structures.
- **Projects (`Projects` & `ProjectsList`)** — Interactive tabbed project showcase with keyboard navigation, technology stack overview, and external links.

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/) (JavaScript / JSX)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** Vanilla CSS (CSS Custom Properties, Flexbox, Media Queries)
- **Typography & Icons:** [`@fontsource/ntr`](https://fontsource.org/fonts/ntr), [`@fontsource/fira-code`](https://fontsource.org/fonts/fira-code), [`react-icons`](https://react-icons.github.io/react-icons/)
- **Code Quality:** ESLint
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## 🚀 Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Philipp-Metz/Website.git
cd Website
npm install
```

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Create a production build and preview it locally:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
├── .github/workflows/      # GitHub Actions deployment workflow (deploy.yml)
├── public/                 # Static assets (CNAME, favicon)
├── src/
│   ├── assets/             # Raw ASCII portrait asset
│   ├── components/         # React components (NavigationBar, Intro, AsciiPortrait, About, Experience, ExperienceList, Projects, ProjectsList, Credits)
│   ├── data/               # Structured content & data (.js modules)
│   ├── styles/             # Component-specific CSS
│   ├── App.css             # Shared layout & section styles
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Global CSS custom properties & reset
│   └── main.jsx            # React entry point
├── index.html              # HTML entry template
└── vite.config.js          # Vite configuration
```

## 🎨 Design Inspiration

The color palette (`Dark Navy` & `Mint`) and layout are inspired by [Gazi Jarin](https://github.com/gazijarin/Gazi-V2) and [Brittany Chiang](https://brittanychiang.com/).

## 📬 Contact

- **GitHub:** [@Philipp-Metz](https://github.com/Philipp-Metz)
- **LinkedIn:** [Philipp Metz](https://www.linkedin.com/in/metz-philipp/)
