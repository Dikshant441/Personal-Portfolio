import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SectionDivider from "@/components/Section-divider";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Experience />
      <ProjectsSection />
      <Skills />
      <Contact />
    </main>
  )
}
