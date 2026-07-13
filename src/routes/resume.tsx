import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import Roslin from '../assets/Roslin.png';
import Imperial from '../assets/imperial.png';
import UoE from '../assets/UoE.jpg';

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jing Qi Chong" },
      { name: "description", content: "Biography, education, and academic background." },
      { property: "og:title", content: "About — Jing Qi Chong" },
      { property: "og:description", content: "Biography, education, and academic background." },
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
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2022-2022</div>
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
                <div className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">2021-2021</div>
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">The Roslin Institute</div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
