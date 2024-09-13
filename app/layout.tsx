import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from "next-themes";
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Aristonis",
  description: "Simplify Your Sales Process",
  icons: {
    icon: "/favicon.ico",
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children}: RootLayoutProps) {

  return (
    <html lang='en'>
      <body>
        <ThemeProvider attribute="class">
          <Theme accentColor="gray">
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
