'use client';

import { ThemeProvider } from './theme-context';
import { SessionProvider } from '@/lib/contexts/session-context';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>
        {children}
      </SessionProvider>
    </ThemeProvider>
  );
}
