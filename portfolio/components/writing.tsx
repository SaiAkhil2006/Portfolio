import React from "react"

const row1 = [
  "Agentic AI",
  "AI Agents",
  "Multi-Agent Systems",
  "A2A",
  "MCP",
  "Tool Calling",
  "Function Calling",
  "Agent Orchestration",
  "Agentic Workflows",
  "Autonomous Agents",
  "RAG",
  "Agentic RAG",
  "GraphRAG",
  "Hybrid Search",
  "FAISS",
  "Vector Databases",
  "Knowledge Graphs",
  "Semantic Search",
]

const row2 = [
  "LLMs",
  "SLMs",
  "VLMs",
  "MLLMs",
  "Foundation Models",
  "World Models",
  "Reasoning Models",
  "Prompt Engineering",
  "Context Engineering",
  "Fine-Tuning",
  "PEFT",
  "LoRA",
  "QLoRA",
  "RLHF",
  "DPO",
  "Distillation",
  "Alignment",
]

const row3 = [
  "Machine Learning",
  "Deep Learning",
  "Transformers",
  "Diffusion Models",
  "Reinforcement Learning",
  "LangChain",
  "LangGraph",
  "LlamaIndex",
  "CrewAI",
  "AutoGen",
  "ADK",
  "Vertex AI",
  "Hugging Face",
  "Ollama",
  "vLLM",
]

const row4 = [
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Inference Optimization",
  "Quantization",
  "Model Serving",
  "Full Stack Web Development",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "REST APIs",
]
function Marquee({
  items,
  reverse = false,
  title,
}: {
  items: string[]
  reverse?: boolean
  title: string
}) {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
        {title}
      </div>
      <div
        className="flex w-max gap-4 py-3"
        style={{
          animation: `${reverse ? "marqueeReverse" : "marquee"} 25s linear infinite`,
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="whitespace-nowrap rounded-full border border-border bg-card/50 px-5 py-2 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Writing() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Capabilities
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-6xl">
            Exploring the frontier of{" "}
            <span className="italic text-accent">
              intelligent systems.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            A growing toolkit spanning agents, foundation models,
            reasoning, multimodal intelligence, infrastructure,
            and robotics.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          <Marquee items={row1} title="Intelligent Systems & Agentic AI" />
          <Marquee items={row2} reverse title="Foundation Models & Reasoning"/>
          <Marquee items={row3} title="AI Engineering & Research" />
          <Marquee items={row4} reverse title="Software, Infrasture & Deployment" />


        </div>
      </div>
    </section>
  )
}