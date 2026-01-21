import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SkillsSection from "@/components/skills";
import { skills } from "@/utils/skills";
import Platforms from "@/components/platforms/Platforms";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SkillsSection skills={skills} />
      <Projects />
      <Platforms />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-secondary text-sm border-t border-gray-900 mt-12">
        <p>&copy; {new Date().getFullYear()} Vikas Gautam. All rights reserved.</p>
      </footer>
    </main>
  );
}