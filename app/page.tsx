import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <body className="min-h-screen bg-[#0F1217]">
      <Navbar />
      <Hero />
      {/*
      <Footer />
      */}
    </body>
  );
}