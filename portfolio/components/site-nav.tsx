"use client"

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#writing" },
  { label: "Achievements", href: "#recognition" },
]

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-xl font-semibold tracking-tight text-foreground">
          Sai Akhil Karra
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
        >
          Get in touch
        </a>
      </nav>
    </header>
  )
}
