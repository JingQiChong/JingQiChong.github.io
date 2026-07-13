import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jing Qi Chong" },
      { name: "description", content: "Biography and research background." },
      { property: "og:title", content: "About — Jing Qi Chong" },
      { property: "og:description", content: "Biography and research background." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <About />
    </SiteLayout>
  ),
});

function About() {
  return (
    <article className="space-y-10">
      <header>
        <h2 className="text-2xl font-serif font-semibold mb-3 pb-2 border-b border-border">Bio</h2>
      </header>

      <div className="space-y-6">
        <section className="space-y-4 text-[15px] leading-7">
          <p>
            👋 Hi, I am Jing Qi - a bioinformatician-in-training currently pursuing MRes Biomedical Research, specialising in data science at Imperial College London. I am working on my second
            MRes project which focuses on Cancer and TCR sequencing and actively learning everything related to it.
          </p>

          <h3 className="text-lg font-serif font-semibold pt-2">🔬 Research background</h3>
          <p>
            I was a research assistant in the Tenesa lab at the Roslin Institute, working on livestock epigenomics. There, I was worked with Dr Pau Navarro, Prof James Prendergast and Prof Albert 
            Tenesa to develop the first high-density DNA methylation array for cattle using a self-designed bioinformatics workflow. Before this, I studied for my BSc (Hons) Biological Sciences (Genetics) 
            at the University of Edinburgh. In my final (honours) year, I undertook a bioinformatics-orientated project in The Wallace Lab, under the supervision of Dr Edward Wallace and Dr Sam Haynes. I characterised 
            the binding activity of RNA-binding proteins (with a focus on Khd1) in budding yeast, Saccharomyces cerevisiae. In the summer of 2021, I also completed a two-month placement with Prof James Prendergast,
            examining a Boran genome to identify a potential causal variant conferring tolerance to East Coast Fever. Across these projects, I developed a strong background in bioinformatics, particularly in 
            next-generation sequencing data analysis and bioinformatics pipeline development. I have also dabbled in applying machine learning models to multi-omics.
          </p>

          <h3 className="text-lg font-serif font-semibold pt-2">🔎 Scientific interest</h3>
          <p>
            I have a profound interest in understanding the gene regulatory mechanisms that drive phenotypic heterogeneity among individuals, particularly within disease contexts.
            I am interested in uncovering the functional impacts of genetic and epigenetic variants, thereby contributing to genomic medicine and driving progress in precision healthcare.
          </p>
        </section>
      </div>
    </article>
  );
}