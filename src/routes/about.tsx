import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Bio — Jing Qi Chong" },
      { name: "description", content: "Biography and research background." },
      { property: "og:title", content: "Bio — Jing Qi Chong" },
      { property: "og:description", content: "Biography and research background." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Bio />
    </SiteLayout>
  ),
});

const bioParagraphs: string[] = [
  "Throughtout my academic career, I developed a profound interest in understanding the gene regulatory mechanisms that drive phenotypic heterogeneity among individuals," 
  "particularly within disease contexts. I am interested in uncovering the functional impacts of genetic and epigenetic variants, thereby contribute to genomic medicine" 
  "and driving progress in precision healthcare. I have a strong background in genetics and extensive hands-on experience in bioinformatics analyses, particularly with "
  "sequencing data. I also has experience in developing bioinformatics pipeline development, utilising high performance computing clusters for large-scale data analysis" 
  "and applying machine learning techniques.",
];

function Bio() {
  return (
    <article className="space-y-10">
      <header>
        <h2 className="text-2xl font-serif font-semibold mb-3 pb-2 border-b border-border">Bio</h2>
      </header>

      <div className="space-y-4">
        {bioParagraphs.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
