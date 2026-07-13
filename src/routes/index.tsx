import { createFileRoute, Link } from "@tanstack/react-router";
import { FolderGit2, Newspaper } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectCard, projects } from "./projects";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const latest = [
  {
    date: "July 2026",
    content: <> Time for project write up 📝
    I am also on job hunting .... If you are hiring in the bioinformatics, genomics and cancer space, please feel free to connect with me!</>,
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <Home />
    </SiteLayout>
  );
}

function Home() {
  const featured = projects.slice(0, 2);
  return (
    <article className="space-y-10">
      <header>
        <h2 className="text-2xl font-serif font-semibold mb-3 pb-2 border-b border-border">Hello 👋</h2>
      </header>
      <section className="space-y-4 text-[15px] leading-7">
        <p>
          I am a research postgraduate student at Imperial College London, currently working on my second rotation project in the <a href="https://www.crick.ac.uk/research/labs/samra-turajlic" className="underline hover:text-foreground transition-colors">Cancer Dynamics Lab</a> 
          at the Francis Crick Institute. I have a profound interest in functional genomics within the context of disease. 
        </p>
      </section>

      <section>
        <div className="mb-6 pb-2 border-b border-border">
          <h2 className="text-2xl font-serif font-semibold flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-primary" />
            Latest
          </h2>
        </div>

        <div className="flex flex-col">
          {latest.map((latest, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-4 border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors rounded-sm px-2 -mx-2"
            >
              <div className="w-28 shrink-0 text-sm font-medium text-muted-foreground sm:pt-0.5">
                {latest.date}
              </div>
              <div className="flex-1 text-sm leading-relaxed text-foreground">
                {latest.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
          <h2 className="text-2xl font-serif font-semibold flex items-center gap-2">
            <FolderGit2 className="w-6 h-6 text-primary" />
            Projects
          </h2>
          <Link to="/projects" className="text-sm no-underline hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

    </article>
  );
}