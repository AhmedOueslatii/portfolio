import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="bg-g100 py-28 section-pad">
      <Reveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[0.73rem] font-medium uppercase tracking-wider4 text-g400">
              Selected work
              <span className="block h-px w-10 bg-g200" />
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,3.3rem)] leading-[1.08] tracking-[-0.025em]">
              Products that turn data into clarity.
            </h2>
          </div>
          <p className="max-w-[380px] text-[0.92rem] leading-[1.7] text-g700">
            A handful of recent builds — financial intelligence, AI maturity
            assessment, and agentic workflow automation.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
