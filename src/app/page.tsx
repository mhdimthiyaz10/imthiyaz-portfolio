import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-[#ff4d00] selection:text-white">
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <FeaturedProject />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
