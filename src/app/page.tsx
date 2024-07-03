import { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FoodListSection from "@/components/FoodListSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Taste Of Karavali Kundapur",
  description:
    "Explore the best hotels and delicious food options in Karavali Kundapur. Discover local culinary delights and comfortable accommodations.",
  keywords:
    "Karavali Kundapur hotels, best food in Kundapur hotels, Kundapur hotel list, Karavali cuisine, Kundapur accommodations",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      
      <div className="fixed z-10 w-full top-0"><Header /></div>
      <main className="flex flex-col items-center justify-between p-0 sm:p-8 text-center mt-14">
        <HeroSection />
        <FoodListSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
