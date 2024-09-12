import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Aristonis",
  description: "Simplify Your Sales Process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ThemeProvider attribute="class">
          <Theme accentColor="gray">
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
