"use client";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../redux/store";

export function ThemeProviders({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
