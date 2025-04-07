import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  DataScience  from "./pages/DataScience";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DataScience />
  </StrictMode>,
);
