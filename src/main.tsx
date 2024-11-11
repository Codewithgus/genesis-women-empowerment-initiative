import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import { Theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider forcedTheme="dark">
        <Theme appearance="light">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Theme>
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
