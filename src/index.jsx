import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioLanding } from "./screens/PortfolioLanding";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioLanding />
  </StrictMode>
);