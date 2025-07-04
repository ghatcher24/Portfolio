import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { User, Code, Sigma, Cuboid, DraftingCompass, Calculator, FunctionSquare, Clipboard, FileText, Wrench, Flame } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { name: 'MATLAB', icon: Sigma },
  { name: 'CSWA SolidWorks', icon: Cuboid },
  { name: 'OnShape', icon: DraftingCompass },
  { name: 'Inventor', icon: Cuboid },
  { name: 'ANSYS', icon: Calculator },
  { name: 'COMSOL', icon: FunctionSquare },
  { name: 'Python', icon: Code },
  { name: 'Visual BASIC', icon: Code },
  { name: 'Microsoft Office Suite', icon: Clipboard },
  { name: 'Google Suite', icon: FileText },
  { name: 'Microsoft Projects', icon: FileText },
  { name: 'Shop Machinery and Hand Tools', icon: Wrench },
  { name: 'Basic Soldering and Welding', icon: Flame },
  { name: 'Creo', icon: Cuboid },
  { name: 'Mathcad', icon: Sigma },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" icon={User} className="pt-12 md:pt-20">
      <div className="grid md:grid-cols-3 gap-2 items-start mb-8 md:mb-10">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative">
            <div className="relative w-[278px] h-[278px] md:w-[370px] md:h-[370px] rounded-lg shadow-lg border-4 border-secondary overflow-hidden">
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
          <p className="text-lg md:text-xl mb-4 leading-relaxed text-foreground">
            <strong>Hi, I&apos;m Gordon</strong>! Recently, I graduated from the University of Massachusetts Amherst with a Masters in Mechanical Engineering and am now looking for an opportunity to take the next big step in my professional career. I thrive on decomposing complex engineering challenges and creating intuitive solutions to tackle them. My academic journey has been driven by an intense curiosity and a desire to better the world around me.
          </p>
          <p className="text-lg md:text-xl mb-4 leading-relaxed text-foreground">
            In my free time I like to enjoy the outdoors with back-country skiing, hiking or bouldering. My passion project is my 1992 NA Miata which spends most of its life in the garage where I work on it, although I hope to compete in autocross if I can get it running properly.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            I am an extremely quick learner and am looking for a position where I can learn from like minded people and apply myself to the fullest extent.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-6 text-center md:text-left">My Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border-primary/30">
              <skill.icon size={16} className="mr-2" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
