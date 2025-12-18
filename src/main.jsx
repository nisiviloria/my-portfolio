import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { PortfolioLanding } from "./screens/PortfolioLanding";
import AllProjects from "./screens/Portfoliolanding/sections/Projects/AllProjects";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);