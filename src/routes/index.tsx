import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FolderGit2 } from "lucide-react";
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
          I am a research postgraduate student at Imperial College London. Previously, I worked as research assistant in Tenesa lab 
          at the Roslin Institute..
        </p>
        <p>
          My research focuses on functional genomics. I have a profound interest in understanding the gene regulatory mechanisms that 
          drive phenotypic heterogeneity among individuals, particularly within disease contexts. I am interested in uncovering the 
          functional impacts of genetic and epigenetic variants, thereby contribute to genomic medicine and driving progress in 
          precision healthcare. I have a strong background in genetics and extensive hands-on experience in bioinformatics 
          analyses, particularly with sequencing data. I also has experience in developing bioinformatics pipeline 
          development, utilising high performance computing clusters for large-scale data analysis and applying 
          machine learning techniques. 

          
        </p>
      </section>

    </article>
  );
}
