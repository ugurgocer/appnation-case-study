import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";
import SearchBar from "./_component/SearchBar";
import SearchHistory from "./_component/SearchHistory";
import MetricSwitch from "./_component/MetricSwitch";

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
          <header className="flex items-center justify-between gap-4 p-6 bg-slate-400/20 shadow-sm">
            <SearchHistory />
            <SearchBar />
            <MetricSwitch />
          </header>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
