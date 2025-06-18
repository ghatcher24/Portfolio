
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { User, Code, Sigma, Cuboid, DraftingCompass, Calculator, FunctionSquare, Clipboard, FileText, Wrench, Flame } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { name: 'MATLAB', icon: Sigma },
  { name: 'SOLIDWORKS', icon: Cuboid },
  { name: 'OnShape', icon: DraftingCompass },
  { name: 'Inventor', icon: Cuboid },
  { name: 'ANSYS', icon: Calculator },
  { name: 'COMSOL', icon: FunctionSquare },
  { name: 'Python', icon: Code },
  { name: 'Visual BASIC', icon: Code },
  { name: 'Microsoft Office Suite', icon: Clipboard },
  { name: 'Google Suite', icon: FileText },
  { name: 'Shop Machinery and Hand Tools', icon: Wrench },
  { name: 'Basic Soldering and Welding', icon: Flame },
  { name: 'Creo', icon: Cuboid },
  { name: 'Mathcad', icon: Sigma },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" icon={User} className="pt-12 md:pt-20">
      <div className="grid md:grid-cols-3 gap-12 items-start mb-12 md:mb-16">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative">
            <div className="relative w-[225px] h-[300px] md:w-[300px] md:h-[400px] rounded-lg shadow-lg border-4 border-secondary overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Profile Picture"
                width={300}
                height={400}
                data-ai-hint="professional portrait"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground p-2 rounded-full shadow-md">
              <User size={24} />
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-foreground">
            Hello! I&apos;m a passionate and creative Full Stack Developer with a keen eye for design and user experience.
            I thrive on transforming complex problems into elegant, intuitive solutions. My journey in tech has been driven by a constant curiosity and a desire to build meaningful applications that make a difference.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-6 text-center md:text-left">My Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors duration-300 cursor-default">
              <skill.icon size={16} className="mr-2" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
