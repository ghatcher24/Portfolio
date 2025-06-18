
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Award, Building2 } from 'lucide-react';

const experienceData = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Software Engineer',
    dates: 'Jan 2020 - Present',
    description: [
      'Led the development of key features for a flagship SaaS product, improving performance by 20%.',
      'Mentored junior engineers and conducted code reviews to maintain high-quality standards.',
      'Collaborated with product managers and designers to translate requirements into technical specifications.',
    ],
    imageUrl: 'https://placehold.co/100x100.png',
    imageHint: 'company logo'
  },
  {
    company: 'Innovatech Ltd.',
    position: 'Software Developer',
    dates: 'Jun 2017 - Dec 2019',
    description: [
      'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
      'Participated in agile development cycles, including sprint planning and daily stand-ups.',
      'Contributed to the successful launch of three major product updates.',
    ],
    imageUrl: 'https://placehold.co/100x100.png',
    imageHint: 'tech company'
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Professional Experience" icon={Award}>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4">
              <div className="mb-4 sm:mb-0">
                <CardTitle className="text-2xl text-accent flex items-center">
                  <Building2 size={24} className="mr-3 text-primary" />
                  {exp.company}
                </CardTitle>
                <CardDescription className="text-md text-primary font-semibold mt-1">{exp.position}</CardDescription>
                <CardDescription className="text-sm text-muted-foreground mt-1">{exp.dates}</CardDescription>
              </div>
              <div className="flex-shrink-0 self-center sm:self-start">
                <Image 
                  src={exp.imageUrl} 
                  alt={`${exp.company} logo`} 
                  width={80} 
                  height={80} 
                  data-ai-hint={exp.imageHint}
                  className="rounded-lg border border-border shadow-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
