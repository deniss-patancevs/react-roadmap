import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { GlobalStyles } from "@/app/styles/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "@/app/styles/theme.ts";

import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/app/queryClient";

import App from "@/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
