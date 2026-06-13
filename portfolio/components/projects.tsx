"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Cpu,
  Network,
  GitBranch,
  Container,
  LineChart,
  Cloud,
  Layers,
  Gauge,
  Code,
  Code2,
  Boxes,
  Workflow,
  ScanSearch,
  Languages,
  Database,
  Activity,
  ShieldCheck,
  Rocket,
  Package, 
  Palette,
  Zap,
  Blocks
} from "lucide-react"

type Project = {
  id: string
  name: string
  tagline: string
  image: string
  cover: string
  tools: { icon: typeof Cpu; label: string }[]
  link: string
}

const projects: Project[] = [
  {
    id: "llm",
    name: "Atlas RAG",
    tagline:
      "A retrieval-augmented question-answering platform that grounds a fine-tuned LLM in 2M private documents — cutting hallucinations to near zero.",
    image: "/project-nlp.png",
    cover: "Production NLP · Self-hosted",
    tools: [
      { icon: Languages, label: "Transformers & LLMs" },
      { icon: ScanSearch, label: "Vector search (FAISS)" },
      { icon: Network, label: "RAG architecture" },
      { icon: Cpu, label: "PyTorch" },
      { icon: Code2, label: "LangChain" },
      { icon: Database, label: "Embeddings pipeline" },
      { icon: Gauge, label: "Latency optimization" },
      { icon: Cloud, label: "FastAPI serving" },
    ],
    link: ""
  },
  {
    id: "vision",
    name: "SightLine",
    tagline:
      "A real-time computer vision system detecting defects on a manufacturing line at 60 FPS, deployed to the edge across 14 factories.",
    image: "/project-vision.png",
    cover: "Computer Vision · Edge",
    tools: [
      { icon: ScanSearch, label: "Object detection (YOLO)" },
      { icon: Layers, label: "CNNs & transfer learning" },
      { icon: Cpu, label: "TensorRT optimization" },
      { icon: Container, label: "Edge deployment" },
      { icon: Activity, label: "Data augmentation" },
      { icon: LineChart, label: "Active learning" },
      { icon: Boxes, label: "ONNX export" },
      { icon: Gauge, label: "Quantization" },
    ],
    link: ""
  },
  {
    id: "vstheme",
    name: "Yelan Theme",
    tagline:
      "A mystic dark theme for VS Code inspired by Yelan from Genshin Impactblending glowing aqua tones with subtle violet accents.",
    image: "/images/project-theme.png",
    cover: "UI/UX Theme for Developers",
    tools: [
      { icon: Code, label: "TypeScript-based extension development" },
      { icon: Blocks, label: "VS Code Extension API" },
      { icon: Layers, label: "Theme token system design" },
      { icon: Palette, label: "Developer-focused color system" },
      { icon: Zap, label: "Performance-optimized UI rendering" },
      { icon: GitBranch, label: "Git & version control workflows" },
      { icon: Package, label: "NPM ecosystem & packaging" },
      { icon: Rocket, label: "Microsoft Marketplace deployment" },
    ],
    link: "https://github.com/SaiAkhil2006/Yelan-Theme"
  },
]

export function Projects() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-accent">
          <span className="h-px w-10 bg-accent/60" />
          Projects
        </p>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-6xl">
          Built to <span className="italic text-accent">learn.</span> Built to <span className="italic text-accent">scale.</span> Built to <span className="italic text-accent">matter.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          Each project represents a step in my learning journey and a challenge I chose to solve.
        </p>

        {/* Project tabs */}
        <div className="mt-12 flex flex-wrap gap-3">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                i === active
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Featured card over image */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-border">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.name} visualization`}
            width={1600}
            height={700}
            className="h-[340px] w-full object-cover md:h-[440px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-lg p-8 md:p-12">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {project.cover}
              </span>
              <h3 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.tagline}
              </p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition hover:scale-105 hover:opacity-90">
                  View Project
                  <ArrowRight className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* What's Inside -> Tools & concepts */}
        <div className="mt-6 rounded-3xl border border-border bg-card/40 p-8 md:p-12">
          <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            Tools &amp; concepts used
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {project.tools.map((tool) => (
              <div key={tool.label}>
                <tool.icon className="size-5 text-accent" strokeWidth={1.5} />
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  {tool.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
