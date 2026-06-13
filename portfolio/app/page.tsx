import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Writing } from "@/components/writing"
import { Recognition } from "@/components/recognition"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Projects />
      <About />
      <Writing />
      <Recognition />
      <ContactFooter />
    </main>
  )
}
