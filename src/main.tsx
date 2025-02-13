import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css"; // Make sure this resolves correctly in the build

// Ensure the root element exists and render the app
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error(
    'Failed to find the root element. Make sure the element with id "root" exists in index.html.'
  );
}
