
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, ExternalLink, Github } from 'lucide-react';

// Helper function to generate slugs (you might want to move this to a utils file)
const generateSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const projectsData = [
  {
    id: generateSlug('HA 6.5 Bone Screw'),
    title: 'HA 6.5 Bone Screw',
    description: 'A full-featured e-commerce platform with user authentication, product listings, cart functionality, and payment integration. Built with Next.js, Tailwind CSS, and Stripe.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    liveLink: '#',
    githubLink: '#',
    tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
    objective: 'To develop a scalable and user-friendly online shopping experience that drives sales and customer satisfaction.',
    requirements: [
      'Secure user authentication and profile management.',
      'Dynamic product catalog with search and filtering.',
      'Shopping cart functionality with persistent storage.',
      'Integration with Stripe for secure payment processing.',
      'Admin dashboard for managing products, orders, and users.',
      'Responsive design for seamless experience across devices.'
    ],
    technicalProcess: [
      'Designed database schema for products, users, and orders.',
      'Developed RESTful APIs using Next.js API routes for backend logic.',
      'Implemented frontend components with React and styled with Tailwind CSS.',
      'Integrated Stripe SDK for payment gateway.',
      'Ensured state management using React Context/Redux for cart and user session.',
      'Conducted thorough testing, including unit, integration, and E2E tests.'
    ],
    outcomeAndImpact: 'The platform successfully launched, leading to a 30% increase in customer engagement and a streamlined checkout process. It provided a robust foundation for future feature expansions and market growth.'
  },
  {
    id: generateSlug('12:1 Gearbox'),
    title: '12:1 Gearbox',
    description: 'A collaborative task management application designed to help teams organize, track, and manage their work effectively. Features include drag-and-drop boards, real-time updates, and user roles.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'productivity app',
    liveLink: '#',
    githubLink: '#',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    objective: 'To create an intuitive tool for teams to enhance productivity and collaboration on projects.',
    requirements: [
        'User registration and login.',
        'Create, assign, and update tasks.',
        'Kanban-style board with drag-and-drop functionality.',
        'Real-time updates for collaborative editing.',
        'Notifications for task assignments and updates.'
    ],
    technicalProcess: [
        'Utilized MongoDB for flexible data storage.',
        'Built backend APIs with Node.js and Express.',
        'Implemented real-time communication using Socket.io.',
        'Developed frontend with React for a dynamic user interface.'
    ],
    outcomeAndImpact: 'Improved team efficiency by 25% and provided a clear overview of project progress, reducing missed deadlines.'
  },
  {
    id: generateSlug('Angiographic Catheter'),
    title: 'Angiographic Catheter',
    description: 'My previous personal portfolio website, showcasing earlier projects and skills. Developed with vanilla JavaScript and custom CSS.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'personal website',
    liveLink: '#',
    githubLink: '#',
    tags: ['HTML', 'CSS', 'JavaScript'],
    objective: 'To establish an online presence and showcase foundational web development skills.',
    requirements: [
        'Clean and simple design.',
        'Sections for about, projects, and contact.',
        'Responsive across different screen sizes.'
    ],
    technicalProcess: [
        'Structured content using semantic HTML5.',
        'Styled with custom CSS, focusing on responsiveness.',
        'Added interactivity with vanilla JavaScript.'
    ],
    outcomeAndImpact: 'Successfully launched a personal brand online, leading to freelance opportunities and demonstrating core web technologies proficiency.'
  },
  {
    id: generateSlug('Prototype Slitting Machine'),
    title: 'Prototype Slitting Machine',
    description: 'A dynamic blogging platform with markdown support, user comments, and an admin dashboard for content management. Powered by Next.js and a headless CMS.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'writing platform',
    liveLink: '#',
    githubLink: '#',
    tags: ['Next.js', 'Headless CMS', 'GraphQL', 'Markdown'],
    objective: 'To build a performant and SEO-friendly platform for content creators to publish articles and engage with readers.',
    requirements: [
        'User authentication for authors.',
        'Markdown editor for writing posts.',
        'Comment system for reader interaction.',
        'Admin panel for managing posts and users.'
    ],
    technicalProcess: [
        'Used Next.js for server-side rendering and static site generation.',
        'Integrated with a headless CMS (e.g., Strapi, Contentful) via GraphQL.',
        'Implemented user authentication using NextAuth.js.'
    ],
    outcomeAndImpact: 'Provided a fast, secure, and easy-to-use blogging solution, adopted by several content creators for its modern stack and features.'
  },
  {
    id: generateSlug('Pneumatic Soft Gripper'),
    title: 'Pneumatic Soft Gripper',
    description: 'Design and development of a novel pneumatic soft gripper for delicate object manipulation. This project involved material selection, FEA analysis, and prototype testing.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'robotic gripper',
    liveLink: '#',
    githubLink: '#',
    tags: ['Robotics', 'Pneumatics', 'Soft Robotics', 'Mechanical Design', 'Prototyping'],
    objective: 'To create a versatile and gentle soft robotic gripper capable of handling a variety of fragile objects without causing damage.',
    requirements: [
      'Ability to grasp objects of varying shapes and sizes.',
      'Gentle handling to prevent damage to delicate items.',
      'Actuation using standard pneumatic pressure.',
      'Durable material selection for repeated use.',
      'Cost-effective design for potential manufacturing.'
    ],
    technicalProcess: [
      'Conceptual design and sketching of gripper fingers and palm.',
      'Material research and selection for flexibility and durability (e.g., silicone).',
      'CAD modeling of the gripper components and mold.',
      'Finite Element Analysis (FEA) to simulate deformation and stress under pressure.',
      'Fabrication of a prototype using 3D printed molds and casting.',
      'Experimental testing with various objects to evaluate performance.'
    ],
    outcomeAndImpact: 'Successfully developed a functional prototype of the pneumatic soft gripper that demonstrated effective and gentle grasping. The design has potential applications in automated assembly lines for fragile components and in human-robot interaction.'
  },
  {
    id: generateSlug('Weather Dashboard'),
    title: 'Weather Dashboard',
    description: 'A sleek weather dashboard displaying real-time weather information from a third-party API. Features include city search and 5-day forecast.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'climate app',
    liveLink: '#',
    githubLink: '#',
    tags: ['React', 'API Integration', 'Chart.js'],
    objective: 'To provide users with up-to-date weather information in a visually appealing and easy-to-understand format.',
    requirements: [
        'Fetch weather data from a reliable API (e.g., OpenWeatherMap).',
        'Allow users to search for weather by city.',
        'Display current weather conditions and a multi-day forecast.',
        'Visualize weather data using charts.'
    ],
    technicalProcess: [
        'Frontend built with React and styled components.',
        'Integrated a third-party weather API for data retrieval.',
        'Used Chart.js for displaying temperature trends and forecast data.'
    ],
    outcomeAndImpact: 'Created a popular utility app that provides quick and accurate weather information, praised for its intuitive UI.'
  },
  {
    id: generateSlug('Recipe Finder App'),
    title: 'Recipe Finder App',
    description: 'An application that allows users to search for recipes based on ingredients they have on hand, using a recipe database API.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'food cooking',
    liveLink: '#',
    githubLink: '#',
    tags: ['Vue.js', 'API', 'Food Tech'],
    objective: 'To help users discover new recipes and reduce food waste by utilizing ingredients they already possess.',
    requirements: [
        'Search recipes by ingredients.',
        'Display recipe details including ingredients and instructions.',
        'Filter recipes by cuisine, dietary restrictions, etc.',
        'Save favorite recipes.'
    ],
    technicalProcess: [
        'Developed with Vue.js for a reactive frontend experience.',
        'Integrated with a recipe API (e.g., Edamam, Spoonacular).',
        'Managed application state using Vuex.'
    ],
    outcomeAndImpact: 'Helped users explore culinary options and make better use of their pantry staples, receiving positive feedback for its practical utility.'
  },
  {
    id: generateSlug('Fitness Tracker'),
    title: 'Fitness Tracker',
    description: 'A mobile-friendly fitness tracking application to log workouts, monitor progress, and set fitness goals. Built with React Native.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'exercise health',
    liveLink: '#',
    githubLink: '#',
    tags: ['React Native', 'Firebase', 'Mobile App'],
    objective: 'To empower users to track their fitness activities, set achievable goals, and monitor their progress over time.',
    requirements: [
        'Log various types of workouts (e.g., running, weightlifting).',
        'Track metrics like duration, distance, calories burned.',
        'Set personal fitness goals and visualize progress.',
        'User authentication and data synchronization across devices.'
    ],
    technicalProcess: [
        'Built using React Native for cross-platform mobile development.',
        'Utilized Firebase for backend services like authentication and database.',
        'Implemented charts for progress visualization.'
    ],
    outcomeAndImpact: 'Enabled users to consistently track their fitness journey, leading to improved health outcomes and user retention.'
  },
  {
    id: generateSlug('Music Streaming Service UI'),
    title: 'Music Streaming Service UI',
    description: 'A UI/UX concept for a music streaming service, focusing on intuitive navigation and a visually appealing interface. Designed in Figma and prototyped with React.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'audio player',
    liveLink: '#',
    githubLink: '#',
    tags: ['UI/UX', 'Figma', 'React', 'Frontend'],
    objective: 'To design and prototype a modern, user-centric interface for a music streaming application.',
    requirements: [
        'Intuitive navigation for browsing music library, playlists, and artists.',
        'Visually appealing player controls and album art display.',
        'Seamless user experience for music discovery and playback.',
        'Consistent design language across all screens.'
    ],
    technicalProcess: [
        'Created wireframes and high-fidelity mockups in Figma.',
        'Developed an interactive prototype using React to demonstrate key user flows.',
        'Focused on user-centered design principles and aesthetics.'
    ],
    outcomeAndImpact: 'Produced a compelling UI/UX design concept that was well-received for its usability and visual appeal, serving as a strong portfolio piece.'
  },
  {
    id: generateSlug('Online Learning Platform'),
    title: 'Online Learning Platform',
    description: 'A platform for online courses with video content, quizzes, and progress tracking. Features instructor dashboards and student enrollment.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'education technology',
    liveLink: '#',
    githubLink: '#',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Video Streaming'],
    objective: 'To provide an accessible and engaging online learning environment for students and instructors.',
    requirements: [
        'Course creation and management tools for instructors.',
        'Student enrollment and progress tracking.',
        'Video content delivery and quiz functionality.',
        'User authentication and role-based access control.'
    ],
    technicalProcess: [
        'Developed using Ruby on Rails framework.',
        'Utilized PostgreSQL for database management.',
        'Integrated video streaming solutions and built a custom quiz engine.'
    ],
    outcomeAndImpact: 'Launched an e-learning platform that facilitated remote education for hundreds of users, enhancing access to knowledge and skills development.'
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Projects" icon={Briefcase} className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          const cardBaseClassName = `overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-[1.01] transition-all duration-300 h-full flex flex-col rounded-lg`;
          const imageClassName = `transform group-hover:brightness-105 transition-all duration-300`;

          return (
            <Link key={project.id} href={`/projects/${project.id}`} className="group block h-full">
              <Card className={cardBaseClassName}>
                <div className="relative h-48 md:h-56 w-full">
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
                    <p className="text-foreground leading-relaxed text-sm mb-4 line-clamp-4">{project.description}</p>
                  </CardContent>
                  <CardFooter className="p-0 pt-4 flex space-x-3 mt-auto">
                    {project.liveLink && project.liveLink !== '#' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300 text-xs"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent Link navigation
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
                          e.stopPropagation(); // Prevent Link navigation
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
            </Link>
          );
        })}
      </div>
       <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            <Link href="/projects">
              <Briefcase size={20} className="mr-2" />
              View All Projects
            </Link>
          </Button>
        </div>
    </SectionWrapper>
  );
}

    
