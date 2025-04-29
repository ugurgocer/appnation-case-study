import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";

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
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
