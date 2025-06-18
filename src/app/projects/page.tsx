
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { projectsData } from '@/components/sections/projects-section'; 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Eye } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-accent">Our Projects</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore a collection of projects showcasing a range of skills and technologies. Each project reflects a commitment to quality and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8"> {/* Updated grid layout */}
          {projectsData.map((project) => (
            <div key={project.id} className="block h-full"> {/* Removed 'group' class */}
               <Card className="overflow-hidden shadow-lg h-full flex flex-col rounded-lg"> {/* Removed hover classes */}
                <div className="relative h-48 md:h-56 w-full">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={project.imageHint}
                    className="transition-all duration-300" // Removed brightness hover class
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl md:text-2xl text-accent">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground pt-1 line-clamp-2">{project.tags.join(' • ')}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-foreground leading-relaxed text-sm mb-4 line-clamp-3">{project.description}</p>
                  </CardContent>
                  <CardFooter className="p-0 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto">
                    <Button asChild variant="outline" size="sm" className="w-full sm:w-auto hover:bg-accent hover:text-accent-foreground transition-colors duration-300 text-xs">
                      <Link href={`/projects/${project.id}`}>
                        <Eye size={16} className="mr-1.5" />
                        View Details
                      </Link>
                    </Button>
                    <div className="flex space-x-2 w-full sm:w-auto">
                        {project.liveLink && project.liveLink !== '#' && (
                        <Button 
                            variant="ghost" 
                            size="sm"
                            className="flex-1 sm:flex-none text-primary hover:text-accent transition-colors duration-300 text-xs"
                            onClick={() => window.open(project.liveLink!, '_blank', 'noopener,noreferrer')}
                        >
                            <ExternalLink size={16} className="mr-1.5" />
                            Live Demo
                        </Button>
                        )}
                        {project.githubLink && project.githubLink !== '#' && (
                        <Button 
                            variant="ghost" 
                            size="sm"
                            className="flex-1 sm:flex-none text-primary hover:text-accent transition-colors duration-300 text-xs"
                            onClick={() => window.open(project.githubLink!, '_blank', 'noopener,noreferrer')}
                        >
                            <Github size={16} className="mr-1.5" />
                            GitHub
                        </Button>
                        )}
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
