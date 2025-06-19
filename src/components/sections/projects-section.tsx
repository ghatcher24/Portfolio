
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
    imageUrl: '/images/HA65Screw.jpg', 
    imageHint: 'bone screw',
    liveLink: '#',
    githubLink: '#',
    tags: ['Orthopedics', 'ANSYS', 'SolidWorks', 'Instron Testing', 'SLA 3D Printing'],
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
    id: generateSlug('Pneumatic Soft Gripper'),
    title: 'Pneumatic Soft Gripper',
    description: 'Design and development of a novel pneumatic soft gripper for delicate object manipulation. This project involved material selection, FEA analysis, and prototype testing.',
    imageUrl: '/images/GripperCover.jpg', 
    imageHint: 'robotic gripper',
    liveLink: '#',
    githubLink: '#',
    tags: ['Soft Robotics', 'Parameter Optimization', 'FDM 3D Printing', 'Resin Molding'],
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
    id: generateSlug('12:1 Gearbox'),
    title: '12:1 Gearbox',
    description: 'A collaborative task management application designed to help teams organize, track, and manage their work effectively. Features include drag-and-drop boards, real-time updates, and user roles.',
    imageUrl: '/images/GearTrainCover.JPG', 
    imageHint: 'gearbox assembly',
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
    imageUrl: '/images/CatheterCover.jpg', 
    imageHint: 'medical catheter',
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
    imageUrl: '/images/BlendyCover.JPG',
    imageHint: 'machine prototype',
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
    id: generateSlug('Project Management Simulation'),
    title: 'Project Management Simulation',
    description: 'An interactive simulation tool designed to teach project management principles through hands-on scenarios and decision-making exercises.',
    imageUrl: '/images/ManageCover.JPG',
    imageHint: 'management simulation',
    liveLink: '#',
    githubLink: '#',
    tags: ['Simulation', 'Project Management', 'Gamification', 'Educational Tool', 'React'],
    objective: 'To provide an engaging and effective way for users to learn and practice project management skills in a risk-free environment.',
    requirements: [
      'Realistic project scenarios with varying complexities.',
      'Decision points affecting project outcomes (time, budget, scope, quality).',
      'Feedback mechanisms to explain consequences of decisions.',
      'Scoring or performance metrics to track user progress.',
      'User-friendly interface for intuitive interaction.'
    ],
    technicalProcess: [
      'Defined core project management concepts to be simulated.',
      'Designed simulation logic and scenario branching.',
      'Developed interactive UI components using React.',
      'Implemented state management for tracking simulation progress and user choices.',
      'Created a library of project events and challenges.'
    ],
    outcomeAndImpact: 'The simulation tool has been adopted in workshops and training programs, significantly improving participants\' understanding of project trade-offs and decision-making. It offers a dynamic alternative to traditional learning methods.'
  },
  {
    id: generateSlug('Nonlinear Cancer Treatment Model'),
    title: 'Nonlinear Cancer Treatment Model',
    description: 'Development of a mathematical model to simulate nonlinear dynamics of cancer growth and optimize treatment strategies. This project involved differential equations, parameter estimation, and sensitivity analysis.',
    imageUrl: '/images/CancerCover.JPG',
    imageHint: 'mathematical model graph',
    liveLink: '#',
    githubLink: '#',
    tags: ['Mathematical Modeling', 'Bioengineering', 'Cancer Research', 'Differential Equations', 'Simulation'],
    objective: 'To create a predictive model for cancer progression under various treatment regimens, aiding in the personalization of therapy.',
    requirements: [
      'Model nonlinear tumor growth dynamics.',
      'Incorporate effects of chemotherapy and immunotherapy.',
      'Parameterize the model using clinical or experimental data.',
      'Perform sensitivity analysis to identify key parameters.',
      'Simulate and compare different treatment protocols.'
    ],
    technicalProcess: [
      'Literature review of existing cancer models and treatment mechanisms.',
      'Formulation of a system of nonlinear ordinary differential equations.',
      'Implementation of the model in a computational environment (e.g., MATLAB, Python).',
      'Parameter estimation using optimization techniques.',
      'Validation of the model against known biological behaviors.',
      'Simulation of treatment scenarios and analysis of outcomes.'
    ],
    outcomeAndImpact: 'Developed a robust nonlinear model capable of simulating complex cancer dynamics and treatment responses. The model provides a framework for exploring novel therapeutic strategies and has potential to contribute to personalized medicine approaches in oncology.'
  },
  {
    id: generateSlug('IRE Ablation Device'),
    title: 'IRE Ablation Device',
    description: 'Design and development of a medical device utilizing Irreversible Electroporation (IRE) for precise tissue ablation. This project focused on electrode design, pulse generation, and treatment planning.',
    imageUrl: '/images/AblationCover.JPG',
    imageHint: 'medical ablation device',
    liveLink: '#',
    githubLink: '#',
    tags: ['Medical Device', 'IRE', 'Bioengineering', 'Electrode Design', 'High Voltage Pulsing'],
    objective: 'To develop a safe and effective IRE ablation device for targeted tissue destruction with minimal collateral damage to surrounding healthy tissue.',
    requirements: [
      'Precise delivery of high-voltage, short-duration electrical pulses.',
      'Accurate electrode placement and configuration.',
      'Real-time monitoring and feedback of treatment parameters.',
      'Compliance with medical device safety standards.',
      'User-friendly interface for clinicians.'
    ],
    technicalProcess: [
      'Researched principles of irreversible electroporation and existing devices.',
      'Designed and simulated various electrode configurations using COMSOL.',
      'Developed a high-voltage pulse generator with precise control.',
      'Integrated safety mechanisms and monitoring systems.',
      'Conducted ex-vivo and in-vitro testing to validate ablation zones.',
      'Iterated on design based on experimental results and usability feedback.'
    ],
    outcomeAndImpact: 'Successfully developed a prototype IRE ablation system demonstrating precise and controllable tissue ablation. The device shows promise for applications in treating tumors and other pathological tissues with improved selectivity and reduced side effects compared to traditional methods.'
  },
  {
    id: generateSlug('6 DOF Adaptive Control'),
    title: '6 DOF Adaptive Control',
    description: 'Development and implementation of an adaptive control system for a 6 Degrees of Freedom (DOF) robotic manipulator to handle varying payloads and dynamic uncertainties.',
    imageUrl: '/images/RobotCover.png',
    imageHint: 'robotic arm control',
    liveLink: '#',
    githubLink: '#',
    tags: ['Robotics', 'Control Systems', 'Adaptive Control', '6 DOF', 'MATLAB', 'Simulink'],
    objective: 'To design a robust adaptive controller that allows a 6 DOF robotic arm to maintain trajectory tracking accuracy despite unknown or changing dynamic parameters.',
    requirements: [
      'Controller must adapt to at least a 50% variation in payload mass.',
      'Real-time implementation with acceptable computational load.',
      'Stability guarantees for the adaptive control law.',
      'Performance comparison with conventional PID controllers.',
      'Simulation validation in MATLAB/Simulink environment.'
    ],
    technicalProcess: [
      'Derived the dynamic model of the 6 DOF robotic arm.',
      'Designed a model reference adaptive control (MRAC) scheme.',
      'Developed Lyapunov-based adaptation laws for parameter estimation.',
      'Implemented the controller and robot dynamics in Simulink.',
      'Conducted extensive simulations with varying payloads and disturbances.',
      'Analyzed controller performance in terms of tracking error and adaptation speed.'
    ],
    outcomeAndImpact: 'The adaptive controller significantly outperformed traditional PID controllers in handling payload variations, maintaining precise trajectory tracking. This work demonstrates the potential of adaptive control for enhancing robustness and versatility in industrial robotic applications.'
  }
];

// Helper function to chunk an array into smaller arrays of a specific size
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

export function ProjectsSection() {
  const projectChunks = chunkArray(projectsData, 3);

  return (
    <SectionWrapper id="projects" title="My Projects" icon={Briefcase} className="bg-secondary">
      <div className="space-y-12"> {/* Container for all chunks, adds space between them */}
        {projectChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex}>
            {/* 
              If you want a visible header for each group, you can add it here.
              For example: 
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Project Group {chunkIndex + 1}
              </h3>
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chunk.map((project) => {
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
                                e.preventDefault(); // Also prevent default link behavior
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
                                e.preventDefault(); // Also prevent default link behavior
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
          </div>
        ))}
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
    

    



















