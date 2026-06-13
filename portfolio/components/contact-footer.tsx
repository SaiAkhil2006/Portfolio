import { ArrowRight } from "lucide-react"

const explore = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#writing" },
  { label: "Achievements", href: "#recognition" },
]

const connect = [
  { label: "GitHub", href: "https://github.com/SaiAkhil2006" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/karra-sai-akhil/" },
  { label: "Instagram", href: "https://www.instagram.com/_the_last_dream_/" },
  { label: "Discord", href: "https://www.discord.com/users/dream6962" },
]

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#05070B] relative overflow-hidden">
      {/* CTA */}
      <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Got an idea? Let&apos;s talk.
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-6xl">
          Build ideas. Solve problems.{" "}
          <span className="italic text-accent">Start conversations.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          If the problem is challenging, the vision is ambitious, and the impact is real, I'd love to hear about it. And if you'd just like to chat about technology, ideas, competitive programming, or life in general, my inbox is open too.
        </p>
        <a
          href="mailto:saiakhilkarra@gmail.com"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
        >
          Start a conversation
          <ArrowRight className="size-4" />
        </a>
      </div>

      {/* Footer */}
      <div className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-xl font-semibold text-foreground">Sai Akhil Karra</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building AI systems powered by foundation models and agentic workflows, and solving algorithmic problems in ICPC-style competitive programming.
            </p>
          </div>

          <FooterCol title="Explore" links={explore} />
          <FooterCol title="Connect" links={connect} />

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <a
              href="mailto:saiakhilkarra@gmail.com"
              className="mt-5 block text-sm text-foreground transition-colors hover:text-accent"
            >
              saiakhilkarra@gmail.com
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Remote · Worldwide</p>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-muted-foreground md:flex-row">
            <p>© 2026 Sai Akhil Karra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
