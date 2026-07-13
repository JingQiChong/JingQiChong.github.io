import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import Roslin from '../assets/Roslin.png';
import Imperial from '../assets/imperial.png';
import UoE from '../assets/UoE.jpg';

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Jing Qi Chong" },
      { name: "description", content: "Education, and academic background." },
      { property: "og:title", content: "Resume — Jing Qi Chong" },
      { property: "og:description", content: "Education, and academic background." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Resume />
    </SiteLayout>
  ),
});

function Resume() {
  return (
    <article className="space-y-10">
      <p className="text-sm text-muted-foreground">
          Detailed PDF version is available upon request via <a href="mailto:jc8425@imperial.ac.uk" className="hover:text-foreground transition-colors">email</a>. Last updated in July 2026.
      </p>
      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4 pb-2 border-b border-border">Education</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <img 
              src={Imperial} 
              alt="Imperial College London logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Master of Research (MRes) · Biomedical Research (Data Science)</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2025-2026</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">Imperial College London</div>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <img 
              src={UoE} 
              alt="University of Edinburgh logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Bachelor of Science Honours (BSc Hons) · Biological Sciences (Genetics)</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2019-2022</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">University of Edinburgh</div>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4 pb-2 border-b border-border">Experience</h2>
        <ul className="space-y-4">

          <li className="flex items-start gap-3">
            <img 
              src={Roslin} 
              alt="Roslin logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Research Assistant in Bioinformatics and Livestock epigenetics</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2022-2025</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">The Roslin Institute</div>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <img 
              src={UoE} 
              alt="UoE logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Honours Project Student</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2022</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">University of Edinburgh</div>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <img 
              src={Roslin} 
              alt="Roslin logo" 
              className="w-5 h-5 shrink-0 mt-1 object-contain rounded-sm" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start gap-4">
                <div className="font-semibold text-pretty">Summer Placement</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2021</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">The Roslin Institute</div>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4 pb-2 border-b border-border">Skills</h2>
        <h3 className="text-lg font-serif font-semibold pt-2">Bioinformatics analysis</h3>
        <p>
          Whole Genome sequencing, CRAC-seq, single-cell and bulk RNA-seq, single-cell ATAC-seq, Whole genome Bisulphite Sequencing, Reduced representation Bisulphite Sequencing, TCR sequencing
        </p>
        
        <h3 className="text-lg font-serif font-semibold pt-2">Computer Languages</h3>
        <p>
          Python, Bash, Nextflow, R, markdown
        </p>
        
        <h3 className="text-lg font-serif font-semibold pt-2">Technical software</h3>
        <p>
          Git, Conda, scikit-learn, Jupyter Notebook, Singularity, mkdocs
        </p>

        <h3 className="text-lg font-serif font-semibold pt-2">Languages</h3>
        <p>
          Mandarin Chinese (native), English (bilingual proficiency), Cantonese Chinese (advanced), Malay (advanced), Hakka Chinese (native), Korean (basic)
        </p>
      </section>
    </article>
  );
}
