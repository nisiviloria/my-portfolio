import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioLanding } from "./screens/PortfolioLanding";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <PortfolioLanding />
  </StrictMode>,
);
