# 📄 QuickCV

A simple web app where you can make your own CV, and download it as PDF document. Built with React + Vite.

![QuickCV Preview](./src/assets/hero.png)

---

## ✨ Features

- 📝 Live two-way form, type and see your CV update instantly
- 🎨 Professional CV preview with dark header and accent colors
- 🏷️ Skill badge generator, type skills that separated by typing comma
- 📥 Download your CV as a PDF with one click
- ⚡ Fast and lightweight app

---

## 🛠️ Tech Stack

| Category | Technology        | Purpose                                    |
| -------- | ----------------- | ------------------------------------------ |
| Language | JavaScript (ES6+) | Core programming language                  |
| Library  | React 19          | UI components & state management           |
| Build    | Vite 8            | Dev server, hot reload & production bundle |
| Styling  | Vanilla CSS       | Custom design with CSS Variables & Flexbox |
| Tools    | VS Code, Git, npm | Code editor, version control & packages    |
| Storage  | localStorage      | Client-side data persistence               |

> **Note:** This is a pure frontend project. No backend or database.

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed on your machine:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- A modern web browser (Chrome, Firefox, Edge, Safari)

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Vizzly-nM09/CV-Builder.git

# Enter the folder
cd CV-Builder

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📚 What I Learned

This was my first React project, built from zero JavaScript knowledge. Here's everything I picked up along the way:

### React Core

- **JSX** — Writing HTML-like syntax inside JavaScript
- **Components** — Breaking UI into reusable, single-responsibility pieces
- **Props** — Passing data from parent to child components
- **Conditional Rendering** — Showing/hiding UI with `&&` and ternary `? :`
- **List Rendering** — Mapping arrays to JSX elements with `.map()` and `key`

### React Hooks

- **`useState`** — Storing and updating reactive state
- **`useEffect`** — Running side effects (localStorage sync)
- **`useContext`** — Accessing global state without prop drilling
- **`useMemo`** — Caching expensive computations (skills splitting)
- **`useReducer`** — Centralized state management with actions and a reducer function
- **`useRef`** — Referencing DOM elements directly

### Architecture & Patterns

- **Custom Hooks** — Extracting stateful logic into reusable `use*` functions (`useCVData`)
- **Context API** — Creating a broadcast channel with `createContext` + `Provider`
- **Component Extraction** — Refactoring a monolithic file into focused components
- **Immutability** — Never mutating state directly; always copying with spread `...`
- **`React.memo`** — Preventing unnecessary re-renders for prop-based components

### CSS

- **Flexbox & Grid** — Building responsive two-column layouts
- **CSS Variables** — Defining design tokens in `:root` for easy theming
- **Utility Classes** — DRY principle with shared `.btn` base class
- **`@media print`** — Custom print stylesheet for PDF downloads

### Tooling

- **Git** — Version control, commits, branching, and pushing to GitHub
- **Vite** — Fast dev server with hot module replacement
- **npm** — Installing, managing, and removing packages

---

## 🗺️ Roadmap

- ✅ Multiple work experience entries
- ✅ Multiple education entries
- ✅ Multiple CV templates (ATS, Modern, Minimal)
- ✅ Save data with localStorage
- ✅ Entry reordering (Move Up / Move Down)
- ✅ Advanced Drag & Drop reordering (@dnd-kit)
- ✅ Advanced per-step form validation
- ✅ CSS Variables & Utility Classes (clean code refactor)
- ✅ Step-by-step form wizard with progress bar
- ✅ React Router (Landing Page + Builder Page)
- ✅ Checking and fixing for small/minor bug and some error
- ⬜ Deploy to Vercel (Soon)

---
