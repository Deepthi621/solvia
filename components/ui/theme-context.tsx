"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme | "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
}: {
  children: React.ReactNode;
  attribute?: "class";
  defaultTheme?: Theme;
  enableSystem?: boolean;
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // Read initial theme from localStorage or system
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    if (stored) {
      setThemeState(stored);
      return;
    }
    if (enableSystem && defaultTheme === "system") {
      setThemeState("system");
    }
  }, [defaultTheme, enableSystem]);

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = theme === "system" ? (systemDark ? "dark" : "light") : theme;

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
    }
  }, [theme, attribute]);

  const api = useMemo<ThemeContextValue>(() => ({
    theme,
    setTheme: (next: Theme | "light" | "dark") => {
      const value = (next === "light" || next === "dark") ? next : (next as Theme);
      setThemeState(value);
      try {
        localStorage.setItem("theme", value);
      } catch {}
    },
  }), [theme]);

  return <ThemeContext.Provider value={api}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}


