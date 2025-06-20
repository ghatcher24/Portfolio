
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import Link from 'next/link';

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" title="My Resume" icon={FileText} className="bg-secondary">
      <div className="text-center">
        <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
          Interested in learning more about my qualifications and experience? Download my full resume for a detailed overview.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
          <Link href="/pdfs/Gordon Hatcher CV.pdf" target="_blank" download="Gordon Hatcher CV.pdf">
            <Download size={20} className="mr-2" />
            Download Resume (PDF)
          </Link>
        </Button>
        <div className="mt-12 p-8 border border-dashed border-border rounded-lg bg-background max-w-3xl mx-auto shadow-sm">
            <h3 className="text-2xl font-semibold text-accent mb-4">Resume Preview</h3>
            
            <div className="space-y-3 text-left text-sm text-foreground">
                <p><strong>Summary:</strong> Motivated graduate with a Masters in Mechanical Engineering searching for next step...</p>
                <p><strong>Key Skills:</strong> Product Design, CSWA SolidWorks, Process Improvement, MATLAB, FEA...</p>
                <p><strong>Recent Experience:</strong> Process Engineering Intern at Innova Plastics Engineering</p>
                <p className="italic text-muted-foreground mt-4">For a complete overview, please download the full PDF version.</p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
