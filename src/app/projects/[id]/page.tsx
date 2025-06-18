
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { projectsData } from '@/components/sections/projects-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Target, ListChecks, Cpu, TrendingUp, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-destructive mb-4">Project Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">The project you are looking for does not exist or has been moved.</p>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/projects">
              <ArrowLeft size={18} className="mr-2" />
              Back to All Projects
            </Link>
          </Button>
        </div>

        <article className="bg-card p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-sm bg-primary/10 text-primary border-primary/30">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                layout="fill" 
                objectFit="cover"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {project.liveLink && project.liveLink !== '#' && (
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="mr-2" />
                    View Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && project.githubLink !== '#' && (
                <Button asChild variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    View Code on GitHub
                  </a>
                </Button>
              )}
            </div>
          </header>

          <Separator className="my-8" />

          <section className="mb-8 prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><FileText size={24} className="mr-3 text-primary" />Project Overview</h2>
            <p className="leading-relaxed">{project.description}</p>
          </section>
          
          <Separator className="my-8" />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <section className="prose max-w-none text-foreground">
              <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Target size={24} className="mr-3 text-primary" />Objective</h2>
              <p className="leading-relaxed">{project.objective}</p>
            </section>

            <section className="prose max-w-none text-foreground">
              <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><ListChecks size={24} className="mr-3 text-primary" />Key Requirements</h2>
              <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                {project.requirements.map((req, index) => <li key={index}>{req}</li>)}
              </ul>
            </section>

            <section className="prose max-w-none text-foreground md:col-span-2">
              <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
              <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                {project.technicalProcess.map((step, index) => <li key={index}>{step}</li>)}
              </ul>
            </section>

            <section className="prose max-w-none text-foreground md:col-span-2">
              <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
              <p className="leading-relaxed">{project.outcomeAndImpact}</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

// This function can be used if you plan to pre-render these pages with Next.js SSG.
// For dynamic server-side rendering as implemented above, it's not strictly necessary for this setup.
// export async function generateStaticParams() {
//   return projectsData.map(project => ({
//     id: project.id,
//   }));
// }
