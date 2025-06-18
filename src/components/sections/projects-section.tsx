
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
  {
    title: 'Blog Platform',
    description: 'A dynamic blogging platform with markdown support, user comments, and an admin dashboard for content management. Powered by Next.js and a headless CMS.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'writing platform',
    liveLink: '#',
    githubLink: '#',
    tags: ['Next.js', 'Headless CMS', 'GraphQL', 'Markdown']
  },
  {
    title: 'Weather Dashboard',
    description: 'A sleek weather dashboard displaying real-time weather information from a third-party API. Features include city search and 5-day forecast.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'climate app',
    liveLink: '#',
    githubLink: '#',
    tags: ['React', 'API Integration', 'Chart.js']
  },
  {
    title: 'Recipe Finder App',
    description: 'An application that allows users to search for recipes based on ingredients they have on hand, using a recipe database API.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'food cooking',
    liveLink: '#',
    githubLink: '#',
    tags: ['Vue.js', 'API', 'Food Tech']
  },
  {
    title: 'Fitness Tracker',
    description: 'A mobile-friendly fitness tracking application to log workouts, monitor progress, and set fitness goals. Built with React Native.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'exercise health',
    liveLink: '#',
    githubLink: '#',
    tags: ['React Native', 'Firebase', 'Mobile App']
  },
  {
    title: 'Music Streaming Service UI',
    description: 'A UI/UX concept for a music streaming service, focusing on intuitive navigation and a visually appealing interface. Designed in Figma and prototyped with React.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'audio player',
    liveLink: '#',
    githubLink: '#',
    tags: ['UI/UX', 'Figma', 'React', 'Frontend']
  },
  {
    title: 'Online Learning Platform',
    description: 'A platform for online courses with video content, quizzes, and progress tracking. Features instructor dashboards and student enrollment.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'education technology',
    liveLink: '#',
    githubLink: '#',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Video Streaming']
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Projects" icon={Briefcase} className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          const cardIsALink = project.liveLink && project.liveLink !== '#';
          
          const cardBaseClassName = `overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-[1.01] transition-all duration-300 h-full flex flex-col rounded-lg`;
          const imageClassName = `transform group-hover:brightness-105 transition-all duration-300`;

          const projectCardContent = (
            <Card className={cardBaseClassName}>
              <div className="relative h-48 md:h-56 w-full"> {/* Fixed height for image container */}
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={project.imageHint}
                  className={imageClassName}
                />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl md:text-2xl text-accent">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground pt-1">{project.tags.join(' • ')}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-foreground leading-relaxed text-sm mb-4">{project.description}</p>
                </CardContent>
                <CardFooter className="p-0 pt-4 flex space-x-3 mt-auto">
                  {project.liveLink && project.liveLink !== '#' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300 text-xs"
                      onClick={(e) => {
                        if (cardIsALink) { 
                          e.preventDefault(); 
                          e.stopPropagation(); 
                        }
                        window.open(project.liveLink!, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <ExternalLink size={16} className="mr-1.5" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubLink && project.githubLink !== '#' && (
                     <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-accent transition-colors duration-300 text-xs"
                      onClick={(e) => {
                        if (cardIsALink) { 
                          e.preventDefault(); 
                          e.stopPropagation(); 
                        }
                        window.open(project.githubLink!, '_blank', 'noopener,noreferrer');
                      }}
                     >
                      <Github size={16} className="mr-1.5" />
                      View Code
                    </Button>
                  )}
                </CardFooter>
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
