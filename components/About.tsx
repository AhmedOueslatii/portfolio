import { Reveal } from "./Reveal";

const skillGroups = [
  {
    name: "AI / ML",
    skills: ["LangChain", "OpenAI", "RAG", "Agents", "n8n", "Prompt Engineering"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "REST", "Edge Functions"],
  },
  {
    name: "Data",
    skills: ["Pandas", "DuckDB", "Vector DBs", "ETL", "Analytics"],
  },
];

const stats = [
  { num: "5+", label: "Years building" },
  { num: "20+", label: "Shipped projects" },
  { num: "3", label: "Industries served" },
];

export function About() {
  return (
    <section id="about" className="grid gap-16 py-28 section-pad lg:grid-cols-2 lg:gap-24">
      <Reveal>
        <p className="mb-4 flex items-center gap-3 text-[0.73rem] font-medium uppercase tracking-wider4 text-g400">
          About
          <span className="block h-px w-10 bg-g200" />
        </p>
        <h2 className="font-serif text-[clamp(2rem,3.8vw,3.3rem)] leading-[1.08] tracking-[-0.025em]">
          A builder who treats AI like a craft, not a buzzword.
        </h2>
        <div className="mt-6 space-y-4 text-base leading-[1.85] text-g700">
          <p>
            I’m Ahmed — an AI engineer and full-stack developer. I work at the
            seam between research-grade models and the everyday product surfaces
            people actually use. Most of what I ship lives in the messy middle:
            data pipelines, agent loops, evals, and the UI that hides all of it.
          </p>
          <p>
            I care about taste as much as throughput. A prompt is a UX decision.
            A latency budget is a design constraint. A dashboard that no one
            reads is a bug. I’m happiest when I can own a problem end-to-end —
            from the first interview to the deployed app.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-[2.1rem] leading-none tracking-tightest">
                {stat.num}
              </p>
              <p className="mt-1 text-[0.78rem] text-g400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mb-5 text-[0.73rem] font-medium uppercase tracking-wider3 text-g400">
          Skills &amp; tooling
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <p className="mb-2 text-[0.75rem] font-medium uppercase tracking-[0.05em] text-g400">
                {group.name}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-pill border border-g200 px-3 py-1 text-[0.8rem] text-g700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[1.25rem] bg-g100 p-8">
          <p className="mb-2 text-[0.73rem] font-medium uppercase tracking-[0.08em] text-g400">
            Currently exploring
          </p>
          <p className="text-[0.93rem] leading-[1.65] text-g700">
            Multi-agent orchestration patterns, evals as a first-class workflow,
            and editorial-quality interfaces for analytical tools. Open to
            full-time and contract work where the stack reaches from model to
            UI.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
