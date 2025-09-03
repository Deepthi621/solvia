"use client";

import { ThemeProvider as LocalThemeProvider } from "./theme-context";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <LocalThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </LocalThemeProvider>
  );
}