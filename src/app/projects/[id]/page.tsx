
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { projectsData } from '@/components/sections/projects-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Target, ListChecks, Cpu, TrendingUp, FileText, Images } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

interface TechnicalProcessStepObject {
  title: string;
  description: string;
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
            <Link href="/#projects">
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  const renderTechnicalProcess = () => (
    project.technicalProcess && project.technicalProcess.length > 0 ? (
      <ol className={`list-decimal pl-5 leading-relaxed ${project.id === 'inline-121-gearbox' || project.id === 'angiographic-catheter' ? 'space-y-4' :'space-y-2'}`}>
        {project.technicalProcess.map((step, index) => (
          <li key={index}>
            {typeof step === 'object' && step !== null && 'title' in step && 'description' in step ? (
              <>
                <div><strong>{(step as TechnicalProcessStepObject).title}</strong></div>
                <div>{(step as TechnicalProcessStepObject).description}</div>
              </>
            ) : (
              String(step) 
            )}
          </li>
        ))}
      </ol>
    ) : (
      <p className="leading-relaxed">No technical process details available.</p>
    )
  );

  const renderOutcomeAndImpact = () => (
    typeof project.outcomeAndImpact === 'string' && project.outcomeAndImpact.includes('\n') ? (
      <ul className="list-disc pl-5 space-y-1 leading-relaxed">
        {project.outcomeAndImpact.split('\n').map((item, index) => (
            item.trim() ? <li key={index}>{item.trim()}</li> : null
        ))}
      </ul>
    ) : (
      <p className="leading-relaxed">{project.outcomeAndImpact}</p>
    )
  );

  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/#projects">
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
                fill={true}
                style={{ objectFit: 'cover' }}
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
          
          <section className="mb-8 prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Target size={24} className="mr-3 text-primary" />Project Objective</h2>
            <p className="leading-relaxed">{project.objective}</p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8 prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><ListChecks size={24} className="mr-3 text-primary" />Specifications</h2>
            <ul className="list-disc pl-5 space-y-1 leading-relaxed">
              {project.requirements.map((req, index) => <li key={index}>{req}</li>)}
            </ul>
          </section>

          <Separator className="my-8" />

          {project.id === 'inline-121-gearbox' ? (
            <>
              <div className="grid md:grid-cols-7 gap-8 mb-8">
                <section className="md:col-span-3 flex flex-col h-full">
                  <div>
                    <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    {renderTechnicalProcess()}
                  </div>
                </section>
                <aside className="md:col-span-4">
                  <div className="relative aspect-[5/7] rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src="/images/GearDrawing.jpg" 
                      alt="Gear Drawing" 
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      data-ai-hint="technical drawing"
                    />
                  </div>
                </aside>
              </div>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                {renderOutcomeAndImpact()}
              </section>
               <div className="my-8">
                <div className="relative aspect-[2/1] rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/images/GearGallery.jpg" 
                    alt="Gearbox Gallery Image" 
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    data-ai-hint="gear detail"
                  />
                </div>
              </div>
            </>
          ) : project.id === 'angiographic-catheter' ? (
            <>
              <div className="grid md:grid-cols-7 gap-8 mb-8">
                 <section className="md:col-span-3 flex flex-col h-full">
                  <div>
                    <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    {renderTechnicalProcess()}
                  </div>
                </section>
                <aside className="md:col-span-4">
                  <div className="relative aspect-[5/7] rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src="/images/CatheterDrawing.png" 
                      alt="Catheter Drawing" 
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      data-ai-hint="catheter drawing"
                    />
                  </div>
                </aside>
              </div>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                {renderOutcomeAndImpact()}
              </section>
            </>
          ) : (
            <>
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
                {renderTechnicalProcess()}
              </section>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                {renderOutcomeAndImpact()}
              </section>
            </>
          )}

          <Separator className="my-8" />
          
          {project.id === 'angiographic-catheter' ? (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent mb-6 text-center flex items-center justify-center"><Images size={24} className="mr-3 text-primary" />Image Gallery</h2>
              <div className="text-center space-y-4 mt-8">
                <div className="inline-block relative h-64 mx-2 rounded-lg overflow-hidden shadow-xl bg-background dark:bg-card p-1 align-top">
                  <Image 
                    src="/images/CatheterGallery1.jpg" 
                    alt="Angiographic Catheter Gallery Image 1" 
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    data-ai-hint="catheter detail"
                  />
                </div>
                <div className="inline-block relative h-64 mx-2 rounded-lg overflow-hidden shadow-xl bg-background dark:bg-card p-1 align-top">
                  <Image 
                    src="/images/CatheterGallery2.jpg" 
                    alt="Angiographic Catheter Gallery Image 2" 
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    data-ai-hint="medical device"
                  />
                </div>
                <div className="inline-block relative h-64 mx-2 rounded-lg overflow-hidden shadow-xl bg-background dark:bg-card p-1 align-top">
                  <Image 
                    src="/images/CatheterGallery3.jpg" 
                    alt="Angiographic Catheter Gallery Image 3" 
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    data-ai-hint="catheter design"
                  />
                </div>
              </div>
            </section>
          ) : project.id !== 'inline-121-gearbox' ? ( 
             <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent mb-4 flex items-center"><Images size={24} className="mr-3 text-primary" />Image Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Additional project image 1" 
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    data-ai-hint="app showcase"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Additional project image 2" 
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    data-ai-hint="interface screenshot"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Additional project image 3" 
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    data-ai-hint="feature showcase"
                  />
                </div>
              </div>
            </section>
          ) : null}

        </article>
      </main>
      <Footer />
    </>
  );
}
