import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectCard, projects } from "./projects";

export const Route = createFileRoute("/")({
  component: HomePage,
});

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
      <section className="space-y-4 text-[15px] leading-7">
        <p>
          I am a research postgraduate student at Imperial College London, currently completing my second rotation project in the 
          Cancer Dynamics Lab at the Francis Crick Institute. I have a profound interest in functional genomics within the context of disease. 
        </p>
      </section>

    </article>
  );
}
