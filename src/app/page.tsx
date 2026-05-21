import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Hero />
      <div className="relative z-10 bg-background">
        {/* background video */}
        <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover blur-[2px]"
        >
          <source src="/videos/Background.mp4" type="video/mp4" />
        </video>
        {/* Subtle vignette so the video stays perfectly visible but edges frame the content well */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/10 to-background/60 pointer-events-none" />
      </div>
      </div>
      <div className="relative z-10">
          <About/>
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
      </div>
    </main>
  );
}
