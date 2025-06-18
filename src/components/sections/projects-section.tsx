
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
    liveLink: '#',
    githubLink: '#',
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
        {projectsData.map((project, index) => (
          <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className={`grid md:grid-cols-2 gap-0 items-center`}>
              <div className={`relative h-64 md:h-full ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={project.imageHint}
                  className="transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-accent">{project.title}</CardTitle>
                  <CardDescription className="text-md text-muted-foreground pt-1">{project.tags.join(' • ')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed mb-6">{project.description}</p>
                </CardContent>
                <CardFooter className="flex space-x-4">
                  {project.liveLink && project.liveLink !== '#' && (
                    <Button asChild variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubLink && project.githubLink !== '#' && (
                     <Button asChild variant="ghost" className="text-primary hover:text-accent transition-colors duration-300">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="mr-2" />
                        View Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
