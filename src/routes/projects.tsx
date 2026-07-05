import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Github, AudioLines, ScanHeart, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Jing Qi Chong" },
      { name: "description", content: "Selected research and bioinformatics projects." },
      { property: "og:title", content: "Projects — Jing Qi Chong" },
      { property: "og:description", content: "Selected research and bioinformatics projects." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Projects />
    </SiteLayout>
  ),
});

export type Project = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  github?: string;
};

// Edit this list to add/remove your projects.
// Browse icons at https://lucide.dev/icons and import them above.
export const projects: Project[] = [
  {
    title: "nf-DMAD",
    description:
      "Nextflow pipeline for DNA methylation array design",
    //icon: ,
    category: "bioinformatics workflow",
    github: "",
  },
  {
    title: "Characterising the RNA-protein interaction in budding yeast",
    description:
      "Improved nextflow pipeline for CRAC-seq data analysis and discovery of binding sequences",
    //icon: ScanHeart,
    category: "bioinformatics workflow",
    github: "https://github.com/JingQiChong/nf_CRACpipeline",
  },
];

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <article className="group rounded-lg border border-border bg-card overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-serif font-semibold leading-snug">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-6 flex-1">{project.description}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:underline w-fit"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <article>
      <h2 className="text-2xl font-serif font-semibold mb-6 pb-2 border-b border-border">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </article>
  );
}
