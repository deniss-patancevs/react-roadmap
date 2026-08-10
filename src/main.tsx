import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { GlobalStyles } from "@/app/styles/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "@/app/styles/theme.ts";
import App from "@/App.tsx";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
