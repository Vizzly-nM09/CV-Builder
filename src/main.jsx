import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Navbar from "./components/Navbar.jsx";
import CVProvider from "./context/CVProvider.jsx";
import AnimatedPage from "./components/AnimatedPage.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <LandingPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/builder"
          element={
            <AnimatedPage>
              <App />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CVProvider>
        <Navbar />
        <AnimatedRoutes />
      </CVProvider>
    </BrowserRouter>
  </StrictMode>,
);
