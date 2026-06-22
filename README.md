# 📄 QuickCV

A web app that lets you fill in your info and instantly see a beautiful, 
downloadable CV. It built with React + Vite.

![QuickCV Preview](./src/assets/hero.png)

---

## ✨ Features

- 📝 Live two-way form — type and see your CV update instantly
- 🎨 Professional CV preview with dark header and accent colors
- 🏷️ Skill badge generator — type skills separated by commas
- 📥 Download your CV as a PDF with one click
- ⚡ Fast and lightweight — no backend needed

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI components & state management |
| Vite 8 | Build tool & dev server |
| Context API | Global state management |
| Custom Hooks | Abstracting business logic |
| CSS Flexbox | Two-column layout |

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

This was my first React project, built in a single session starting from zero JavaScript knowledge.

- **React Components and JSX syntax**
- **State Management:** `useState` for live reactive data
- **Context API:** Avoiding prop-drilling with `createContext` and `useContext`
- **Performance Optimization:** Caching renders and values using `React.memo` and `useMemo`
- **Immutability:** Safely reordering array items without mutating state
- **Component Extraction:** Refactoring large files into single-responsibility components
- **Conditional Rendering:** Using `&&` for dynamic UI
- **List Rendering:** Mapping over arrays with `.map()`
- **CSS Layout:** Building responsive dual-pane layouts with Flexbox
- **Git:** Version control basics

---

## 🗺️ Roadmap

- [x] Multiple work experience entries
- [x] Multiple education entries  
- [x] Multiple CV templates (ATS, Modern, Minimal)
- [x] Save data with localStorage
- [x] Entry reordering (Move Up / Move Down)
- [ ] Add color theme picker for templates
- [ ] Implement drag-and-drop reordering (e.g., `dnd-kit`)
- [ ] Form validation improvements
- [ ] Deploy to Vercel

---

## 👤 Author

**Fadhlan Limanda**  
Intern Frontend Developer — UIB  
[GitHub @Vizzly-nM09](https://github.com/Vizzly-nM09)
