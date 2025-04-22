import HeroSection from "./components/heroSection";
import { Navbar } from "./components/navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden">
      <Navbar />
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
