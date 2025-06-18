
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product listings, cart functionality, and payment integration. Built with Next.js, Tailwind CSS, and Stripe.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    liveLink: '#', // Example: 'https://example.com/ecommerce'
    githubLink: '#', // Example: 'https://github.com/user/ecommerce'
    tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application designed to help teams organize, track, and manage their work effectively. Features include drag-and-drop boards, real-time updates, and user roles.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'productivity app',
    liveLink: '#',
    githubLink: '#',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB']
  },
  {
    title: 'Portfolio Website V1',
    description: 'My previous personal portfolio website, showcasing earlier projects and skills. Developed with vanilla JavaScript and custom CSS.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'personal website',
    liveLink: '#',
    githubLink: '#',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Projects" icon={Briefcase} className="bg-secondary">
      <div className="space-y-12 md:space-y-16">
        {projectsData.map((project, index) => {
          const cardIsALink = project.liveLink && project.liveLink !== '#';
          
          const cardBaseClassName = `overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-[1.01] transition-all duration-300 h-full flex flex-col`;
          const imageClassName = `transform group-hover:brightness-105 transition-all duration-300`;

          const projectCardContent = (
            <Card className={cardBaseClassName}>
              <div className="grid md:grid-cols-2 gap-0 items-stretch flex-grow"> {/* items-stretch ensures columns take full height */}
                <div className={`relative h-64 md:h-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}> {/* md:h-auto to allow image to define height within grid cell */}
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={project.imageHint}
                    className={imageClassName}
                  />
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex flex-col`}>
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl text-accent">{project.title}</CardTitle>
                    <CardDescription className="text-md text-muted-foreground pt-1">{project.tags.join(' • ')}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground leading-relaxed mb-6">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex space-x-4 mt-auto"> {/* mt-auto to push footer down */}
                    {project.liveLink && project.liveLink !== '#' && (
                      <Button 
                        variant="outline" 
                        className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                        onClick={(e) => {
                          if (cardIsALink) { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                          }
                          window.open(project.liveLink!, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubLink && project.githubLink !== '#' && (
                       <Button 
                        variant="ghost" 
                        className="text-primary hover:text-accent transition-colors duration-300"
                        onClick={(e) => {
                          if (cardIsALink) { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                          }
                          window.open(project.githubLink!, '_blank', 'noopener,noreferrer');
                        }}
                       >
                        <Github size={18} className="mr-2" />
                        View Code
                      </Button>
                    )}
                  </CardFooter>
                </div>
              </div>
            </Card>
          );

          if (cardIsALink) {
            return (
              <Link key={project.title} href={project.liveLink!} target="_blank" rel="noopener noreferrer" className="group block h-full">
                {projectCardContent}
              </Link>
            );
          } else {
            return (
              <div key={project.title} className="group block h-full">
                {projectCardContent}
              </div>
            );
          }
        })}
      </div>
    </SectionWrapper>
  );
}
