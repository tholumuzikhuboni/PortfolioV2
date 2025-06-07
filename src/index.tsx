import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementAboutPage } from "./screens/ElementAboutPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementAboutPage />
  </StrictMode>,
);
