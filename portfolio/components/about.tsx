import Image from "next/image"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/Portrait.jpeg"
              alt="Portrait of Sai Akhil Karra"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-2xl border border-border bg-background px-7 py-5 text-center shadow-xl">
            <p className="font-serif text-3xl font-medium text-accent">2</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Years in Engineering
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent/60" />
            The Dream
          </p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            From <span className="italic text-accent">curiosity</span> to building things that create {" "}
            <span className="italic text-accent">impact.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I believe engineering is one of the most powerful forces driving the transformation of 
              today&apos;s world into tomorrow&apos;s reality. At its core, it is not about tools, languages, or frameworks
              but about the ability to turn imagination into systems that work in the real world.
            </p>
            {/* <p>
              My background spans deep learning, natural language processing and the
              unglamorous infrastructure that keeps models honest: monitoring, versioning,
              and retraining. I care as much about latency budgets and data drift as I do
              about architecture.
            </p> */}
            <p>
              My journey into engineering began when I was young, driven by a simple fascination for
               building things. Over time, that curiosity evolved into a deeper interest in how technology is 
               constructed and how complex systems emerge from simple foundations. Like many students, 
               my path went through structured education and conventional milestones, but somewhere along the way, 
               that original curiosity was challengedand refined through discipline, expectations, and repetition.
                But now, I find myself returning to that original mindset, not just learning technology, but questioning it, 
                understanding it, and using it as a medium for creation.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-accent pl-6">
            <p className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
              &ldquo;We only live once, so I don&apos;t hesitate.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
