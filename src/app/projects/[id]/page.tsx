
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { projectsData } from '@/components/sections/projects-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Target, ListChecks, Cpu, TrendingUp, FileText, Images } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

interface TechnicalProcessStepObject {
  title: string;
  description: string;
  images?: { src: string; alt: string; hint: string }[];
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
      <ol className={`list-decimal pl-5 leading-relaxed ${project.id === 'inline-121-gearbox' || project.id === 'angiographic-catheter' || project.id === 'ha-65-bone-screw' || project.id === 'catheter-hub-w-hemostatic-lock' || project.id === 'prototype-slitting-machine' ? 'space-y-4' :'space-y-2'}`}>
        {project.technicalProcess.map((step, index) => (
          <li key={index}>
            {typeof step === 'object' && step !== null && 'title' in step && 'description' in step ? (
              <>
                <div><strong>{(step as TechnicalProcessStepObject).title}</strong></div>
                <div className="whitespace-pre-wrap">{(step as TechnicalProcessStepObject).description}</div>
              </>
            ) : (
              <div className="whitespace-pre-wrap">{String(step)}</div>
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

          {project.id === 'prototype-slitting-machine' && (
            <div className="my-8 flex justify-center">
              <div className="relative w-full max-w-4xl aspect-[2338/710] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/BlendyStraw.JPG"
                  alt="Prototype Slitting Machine result"
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  data-ai-hint="slitted straw"
                />
              </div>
            </div>
          )}

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
                <aside className="md:col-span-4 flex items-center justify-center">
                  <div className="relative w-full aspect-[5/7] rounded-lg overflow-hidden shadow-md">
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
                <aside className="md:col-span-4 flex items-center justify-center">
                  <div className="relative w-3/5 aspect-[5/7] rounded-lg overflow-hidden shadow-md bg-muted/10">
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
          ) : project.id === 'ha-65-bone-screw' ? (
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
                <aside className="md:col-span-4 flex items-center justify-center">
                  <div className="relative w-full aspect-[5/7] rounded-lg overflow-hidden">
                    <Image
                      src="/images/BoneScrewDrawing.png"
                      alt="Bone Screw Drawing"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      data-ai-hint="technical drawing"
                    />
                  </div>
                </aside>
              </div>
              <Separator className="my-8" />
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <section className="md:col-span-3 flex flex-col justify-center prose prose-lg max-w-none text-foreground">
                  <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                  {renderOutcomeAndImpact()}
                </section>
                <aside className="md:col-span-1 flex items-center justify-center">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/BoneScrewAnsys.png"
                      alt="Bone Screw ANSYS FEA"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      data-ai-hint="FEA analysis"
                    />
                  </div>
                </aside>
              </div>
            </>
          ) : project.id === 'pneumatic-soft-gripper' ? (
            <>
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
                  {project.technicalProcess && Array.isArray(project.technicalProcess) ? (
                    <ol className="list-decimal pl-5 leading-relaxed space-y-4">
                      {(project.technicalProcess as TechnicalProcessStepObject[]).map((step, index) => {
                        if (step.images) {
                          return (
                            <li key={index}>
                              <div className="grid md:grid-cols-2 gap-8 items-start">
                                <div>
                                  <div><strong>{step.title}</strong></div>
                                  <div>{step.description}</div>
                                </div>
                                <div className="flex flex-col gap-4 items-center justify-center">
                                  {step.images.map((image, imgIndex) => (
                                      <div key={imgIndex} className={`relative ${image.alt === 'Mold Design' ? 'w-1/2 aspect-[4/3]' : 'w-3/4'} ${image.alt === 'Mold Fabrication' ? 'w-1/2 aspect-[4/3]' : 'w-3/4'} ${image.alt.includes('Cross Section') ? 'aspect-[9/4]' : ''} ${image.alt.includes('Bend Angle') ? 'aspect-video' : ''} rounded-lg overflow-hidden shadow-md`}>
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill={true}
                                          style={{ objectFit: 'contain' }}
                                          data-ai-hint={image.hint}
                                        />
                                      </div>
                                  ))}
                                </div>
                              </div>
                            </li>
                          )
                        }

                        return (
                          <li key={index}>
                            <div><strong>{step.title}</strong></div>
                            <div className="whitespace-pre-wrap">{step.description}</div>
                          </li>
                        );
                      })}
                    </ol>
                  ) : <p className="leading-relaxed">No technical process details available.</p>}
              </section>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                {renderOutcomeAndImpact()}
              </section>
            </>
          ) : project.id === 'ire-ablation-device' ? (
             <>
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
                  {project.technicalProcess && Array.isArray(project.technicalProcess) ? (
                    <ol className="list-decimal pl-5 leading-relaxed space-y-4">
                      {(project.technicalProcess as TechnicalProcessStepObject[]).map((step, index) => {
                        if (step.images && step.title.includes('Evaluate Monopolar vs Bipolar Configuration')) {
                          return (
                            <li key={index}>
                              <div><strong>{step.title}</strong></div>
                              <div>{step.description}</div>
                              
                                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
                                  {step.images.map((image, imgIndex) => (
                                    <figure key={imgIndex} className="w-3/4 flex flex-col">
                                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill={true}
                                          style={{ objectFit: 'contain' }}
                                          data-ai-hint={image.hint}
                                        />
                                      </div>
                                      <figcaption className="mt-2 text-xs text-center text-muted-foreground">{image.alt}</figcaption>
                                    </figure>
                                  ))}
                                </div>
                              
                            </li>
                          );
                        }
                        if (step.images && step.title.includes('Evaluate Number of Electrodes')) {
                          return (
                            <li key={index}>
                              <div><strong>{step.title}</strong></div>
                              <div>{step.description}</div>
                              
                                <div className="mt-4 grid grid-cols-3 gap-4 justify-items-center">
                                  {step.images.map((image, imgIndex) => (
                                    <figure key={imgIndex} className="w-full flex flex-col">
                                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill={true}
                                          style={{ objectFit: 'contain' }}
                                          data-ai-hint={image.hint}
                                        />
                                      </div>
                                      <figcaption className="mt-2 text-xs text-center text-muted-foreground">{image.alt}</figcaption>
                                    </figure>
                                  ))}
                                </div>
                              
                            </li>
                          );
                        }
                        if (step.images && step.title.includes('Optimize Number of Pulses')) {
                          return (
                            <li key={index}>
                              <div><strong>{step.title}</strong></div>
                              <div>{step.description}</div>
                              
                                <div className="mt-4 grid grid-cols-3 gap-4 justify-items-center">
                                  {step.images.map((image, imgIndex) => (
                                    <figure key={imgIndex} className="w-full flex flex-col">
                                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill={true}
                                          style={{ objectFit: 'contain' }}
                                          data-ai-hint={image.hint}
                                        />
                                      </div>
                                      <figcaption className="mt-2 text-xs text-center text-muted-foreground">{image.alt}</figcaption>
                                    </figure>
                                  ))}
                                </div>
                              
                            </li>
                          );
                        }
                        if (step.images && step.title.includes('Create Preliminary Catheter Design')) {
                          return (
                            <li key={index}>
                              <div><strong>{step.title}</strong></div>
                              <div>{step.description}</div>
                              
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {step.images.slice(0, 2).map((image, imgIndex) => (
                                    <figure key={imgIndex} className="w-full flex flex-col">
                                      <div className="relative w-[90%] mx-auto aspect-[4/3]">
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill={true}
                                          style={{ objectFit: 'contain' }}
                                          data-ai-hint={image.hint}
                                        />
                                      </div>
                                      <figcaption className="mt-2 text-xs text-center text-muted-foreground">{image.alt}</figcaption>
                                    </figure>
                                  ))}
                                  {step.images.length > 2 && (
                                    <div className="sm:col-span-2 flex justify-center">
                                       <figure className="w-full max-w-[calc(50%-0.5rem)] flex flex-col">
                                        <div className="relative w-full aspect-[10/1]">
                                            <Image
                                            src={step.images[2].src}
                                            alt={step.images[2].alt}
                                            fill={true}
                                            style={{ objectFit: 'contain' }}
                                            data-ai-hint={step.images[2].hint}
                                            />
                                        </div>
                                        <figcaption className="mt-2 text-xs text-center text-muted-foreground">{step.images[2].alt}</figcaption>
                                        </figure>
                                    </div>
                                  )}
                                </div>
                            </li>
                          );
                        }
                        // Default step rendering
                        return (
                          <li key={index}>
                            <div><strong>{(step as TechnicalProcessStepObject).title}</strong></div>
                            <div className="whitespace-pre-wrap">{(step as TechnicalProcessStepObject).description}</div>
                          </li>
                        );
                      })}
                    </ol>
                  ) : <p className="leading-relaxed">No technical process details available.</p>}
              </section>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                {renderOutcomeAndImpact()}
              </section>
            </>
          ) : project.id === 'project-management-simulation' ? (
             <>
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
                  {project.technicalProcess && Array.isArray(project.technicalProcess) ? (
                    <ol className="list-decimal pl-5 leading-relaxed space-y-4">
                      {(project.technicalProcess as TechnicalProcessStepObject[]).map((step, index) => {
                        if (step.images) {
                          return (
                            <li key={index}>
                              <div><strong>{step.title}</strong></div>
                              <div className="whitespace-pre-wrap">{step.description}</div>
                              <div className="mt-4 flex justify-center">
                                {step.images.map((image, imgIndex) => {
                                  const aspectClass = image.src.includes('Schedule') ? 'aspect-[2/1]' : (image.src.includes('Risk') ? 'aspect-[3/1]' : 'aspect-video');
                                  return (
                                    <div key={imgIndex} className={`relative w-full md:w-2/5 ${aspectClass} rounded-lg overflow-hidden shadow-md`}>
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill={true}
                                          style={{ objectFit: 'contain' }}
                                          data-ai-hint={image.hint}
                                        />
                                    </div>
                                  )
                                })}
                              </div>
                            </li>
                          )
                        }
                        // Default step rendering
                        return (
                          <li key={index}>
                            <div><strong>{step.title}</strong></div>
                            <div className="whitespace-pre-wrap">{(step as TechnicalProcessStepObject).description}</div>
                          </li>
                        );
                      })}
                    </ol>
                  ) : <p className="leading-relaxed">No technical process details available.</p>}
              </section>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                {renderOutcomeAndImpact()}
              </section>
            </>
          ) : project.id === 'nonlinear-cancer-treatment-model' ? (
             <>
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
                  {project.technicalProcess && Array.isArray(project.technicalProcess) ? (
                    <ol className="list-decimal pl-5 leading-relaxed space-y-4">
                      {(project.technicalProcess as TechnicalProcessStepObject[]).map((step, index) => {
                        if (step.images) {
                          if (step.title.includes('Bifurcation Analysis')) {
                            return (
                              <li key={index}>
                                <div><strong>{step.title}</strong></div>
                                <div className="whitespace-pre-wrap">{step.description}</div>
                                <div className="mt-4 flex justify-center">
                                  <Carousel className="w-full max-w-md">
                                    <CarouselContent>
                                      {step.images.map((image, imgIndex) => (
                                        <CarouselItem key={imgIndex}>
                                          <div className="p-1">
                                            <figure className="w-full flex flex-col items-center">
                                              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                                                <Image
                                                  src={image.src}
                                                  alt={image.alt}
                                                  fill={true}
                                                  style={{ objectFit: 'contain' }}
                                                  data-ai-hint={image.hint}
                                                />
                                              </div>
                                              <figcaption className="mt-2 text-xs text-center text-muted-foreground">{image.alt}</figcaption>
                                            </figure>
                                          </div>
                                        </CarouselItem>
                                      ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                  </Carousel>
                                </div>
                              </li>
                            );
                          }
                          // Default for other images
                          return (
                            <li key={index}>
                              <div><strong>{step.title}</strong></div>
                              <div className="whitespace-pre-wrap">{step.description}</div>
                              <div className="mt-4 flex justify-center">
                                {step.images.map((image, imgIndex) => {
                                  const aspectClass = 'aspect-[822/658]';
                                  return (
                                    <div key={imgIndex} className={`relative w-full ${step.title.includes('Untreated Model') ? 'md:w-1/2' : 'md:w-2/5'} ${aspectClass} rounded-lg overflow-hidden shadow-md`}>
                                      <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill={true}
                                        style={{ objectFit: 'contain' }}
                                        data-ai-hint={image.hint}
                                      />
                                    </div>
                                  )
                                })}
                              </div>
                            </li>
                          )
                        }
                        // Default step rendering
                        return (
                          <li key={index}>
                            <div><strong>{step.title}</strong></div>
                            <div className="whitespace-pre-wrap">{(step as TechnicalProcessStepObject).description}</div>
                          </li>
                        );
                      })}
                    </ol>
                  ) : <p className="leading-relaxed">No technical process details available.</p>}
              </section>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                {renderOutcomeAndImpact()}
              </section>
            </>
          ) : project.id === 'prototype-slitting-machine' ? (
             <>
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Cpu size={24} className="mr-3 text-primary" />Technical Process</h2>
                  {project.technicalProcess && Array.isArray(project.technicalProcess) ? (
                    <ol className="list-decimal pl-5 leading-relaxed space-y-4">
                      {(project.technicalProcess as TechnicalProcessStepObject[]).map((step, index) => {
                        if (step.images) {
                          return (
                            <li key={index}>
                              <div><strong>{step.title}</strong></div>
                              <div className="whitespace-pre-wrap">{step.description}</div>
                              <div className="mt-4 flex justify-center">
                                {step.images.map((image, imgIndex) => {
                                  return (
                                    <div key={imgIndex} className={`relative w-full md:w-3/4 aspect-[1918/1346] rounded-lg overflow-hidden shadow-md`}>
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          fill={true}
                                          style={{ objectFit: 'contain' }}
                                          data-ai-hint={image.hint}
                                        />
                                    </div>
                                  )
                                })}
                              </div>
                            </li>
                          )
                        }
                        // Default step rendering
                        return (
                          <li key={index}>
                            <div><strong>{step.title}</strong></div>
                            <div className="whitespace-pre-wrap">{(step as TechnicalProcessStepObject).description}</div>
                          </li>
                        );
                      })}
                    </ol>
                  ) : <p className="leading-relaxed">No technical process details available.</p>}
              </section>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                {renderOutcomeAndImpact()}
              </section>
              <Separator className="my-8" />
              <section className="mb-8 prose prose-lg max-w-none text-foreground">
                <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><Images size={24} className="mr-3 text-primary" />Manufacturing Drawings</h2>
                <p className="leading-relaxed">Detailed manufacturing drawings, including component prints and assembly diagrams, were created for this project. These are available upon request.</p>
                <div className="mt-6 flex justify-center">
                    <Carousel className="w-full max-w-4xl">
                      <CarouselContent>
                        {Array.from({ length: 13 }).map((_, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <figure className="w-full flex flex-col items-center">
                                <div className="relative w-full aspect-[5/7] rounded-lg overflow-hidden shadow-md bg-white">
                                  <Image
                                    src={`/images/Drawing${index + 1}.jpg`}
                                    alt={`Manufacturing Drawing ${index + 1}`}
                                    fill={true}
                                    style={{ objectFit: 'contain' }}
                                    data-ai-hint="technical drawing blueprint"
                                  />
                                </div>
                                <figcaption className="mt-2 text-sm text-center text-muted-foreground">{`Drawing ${index + 1}`}</figcaption>
                              </figure>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                </div>
              </section>
            </>
          ) : project.id === 'catheter-hub-w-hemostatic-lock' ? (
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
                <aside className="md:col-span-4 flex flex-col items-center justify-center gap-4">
                  <div className="relative w-[45%] aspect-[5/7] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/HemostaticDrawing1.jpg"
                      alt="Hemostatic Lock Drawing 1"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      data-ai-hint="technical drawing"
                    />
                  </div>
                  <div className="relative w-[45%] aspect-[5/7] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/HemostaticDrawing2.jpg"
                      alt="Hemostatic Lock Drawing 2"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      data-ai-hint="cad model"
                    />
                  </div>
                </aside>
              </div>
              <Separator className="my-8" />
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <section className="md:col-span-3 flex flex-col justify-center prose prose-lg max-w-none text-foreground">
                  <h2 className="text-2xl font-semibold text-accent mb-3 flex items-center"><TrendingUp size={24} className="mr-3 text-primary" />Outcome and Impact</h2>
                  {renderOutcomeAndImpact()}
                </section>
                <aside className="md:col-span-1 flex items-center justify-center">
                  <div className="relative w-full aspect-[5/4] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/HubAfterFailure.JPG"
                      alt="Catheter Hub After Failure"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      data-ai-hint="broken prototype"
                    />
                  </div>
                </aside>
              </div>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                     <Image
                        src="/images/CatheterGallery1.jpg"
                        alt="Angiographic Catheter Gallery Image 1 (Native 2:1)"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        data-ai-hint="catheter detail"
                      />
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                    <Image
                        src="/images/CatheterGallery2.jpg"
                        alt="Angiographic Catheter Gallery Image 2 (Native 5:4)"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        data-ai-hint="medical device"
                      />
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                     <Image
                        src="/images/CatheterGallery3.jpg"
                        alt="Angiographic Catheter Gallery Image 3 (Native 2:1)"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        data-ai-hint="catheter design"
                      />
                  </div>
                </div>
            </section>
          ) : project.id === 'pneumatic-soft-gripper' ? (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent mb-6 text-center flex items-center justify-center"><Images size={24} className="mr-3 text-primary" />Image Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                     <Image
                        src="/images/ActuatorDesign.png"
                        alt="Soft Gripper Actuator Design"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        data-ai-hint="actuator design"
                      />
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                    <Image
                        src="/images/ActuatorFab.png"
                        alt="Soft Gripper Actuator Fabrication"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        data-ai-hint="actuator fabrication"
                      />
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                     <Image
                        src="/images/ActuatorComplete.jpg"
                        alt="Completed Actuator"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        data-ai-hint="completed actuator"
                      />
                  </div>
                </div>
            </section>
          ) : !['inline-121-gearbox', 'ha-65-bone-screw', 'ire-ablation-device', 'project-management-simulation', 'nonlinear-cancer-treatment-model', 'catheter-hub-w-hemostatic-lock', 'prototype-slitting-machine'].includes(project.id) ? (
             <section className="mb-8">
              <h2 className="text-2xl font-semibold text-accent mb-4 flex items-center"><Images size={24} className="mr-3 text-primary" />Image Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Additional project image 1"
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    data-ai-hint="app showcase"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Additional project image 2"
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    data-ai-hint="interface screenshot"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden border-0">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Additional project image 3"
                    fill={true}
                    style={{ objectFit: 'contain' }}
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
