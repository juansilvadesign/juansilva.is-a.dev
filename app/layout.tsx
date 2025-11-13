import LandingQuiz from "@/components/sections/LandingQuiz";
import Navbar from "@/components/sections/Navbar";
import { LandingProvider } from "@/app/context/LandingContext";
import "./globals.css";
import { metadata } from "./metadata";
import LayoutClient from "./layout-client";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <LandingProvider>
          <LayoutClient>
            <Navbar />
            <LandingQuiz />
            {children}
          </LayoutClient>
        </LandingProvider>
      </body>
    </html>
  );
}