import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";
import SearchBar from "./_component/SearchBar";
import SearchHistory from "./_component/SearchHistory";
import Toaster from "./_component/Toaster";

const defaultFont = Onest({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather Dashboard"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${defaultFont.className} antialiased`}
        >
          <header className="flex items-center gap-4 p-6 bg-default shadow-sm">
            <SearchHistory />
            <SearchBar />
          </header>
          {children}
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}
