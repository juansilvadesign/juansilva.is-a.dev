import LandingQuiz from "@/components/sections/LandingQuiz";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LandingQuiz />
        {children}
      </body>
    </html>
  );
}