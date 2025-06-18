
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Award, Building2 } from 'lucide-react';

const experienceData = [
  {
    company: 'Thermofab',
    position: 'Process Engineering Intern',
    dates: 'June 2024 - August 2024',
    description: [
      'Led the development of key features for a flagship SaaS product, improving performance by 20%.',
      'Mentored junior engineers and conducted code reviews to maintain high-quality standards.',
      'Collaborated with product managers and designers to translate requirements into technical specifications.',
    ],
    imageUrl: 'https://placehold.co/100x100.png',
    imageHint: 'company logo'
  },
  {
    company: 'Cofab Design',
    position: 'Engineering Intern',
    dates: 'June 2023 - August 2023',
    description: [
      'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
      'Participated in agile development cycles, including sprint planning and daily stand-ups.',
      'Contributed to the successful launch of three major product updates.',
    ],
    imageUrl: 'https://placehold.co/100x100.png',
    imageHint: 'tech company'
  },
  {
    company: 'University of Massachusetts Amherst',
    positions: [
      {
        title: 'Graduate Teachers Assistant - Senior Design - Industrial Automation',
        dates: 'August 2024 - May 2025',
        description: [
          'Led a small team of interns on a feature sub-project for the main web platform.',
          'Presented project demo to senior management and received positive feedback.',
          'Took initiative in problem-solving and unblocking team members.',
        ],
      },
      {
        title: 'Graduate Student Advisor',
        dates: 'August 2024 - May 2025',
        description: [
          'Assigned to more complex tasks involving API development and UI enhancements.',
          'Assisted in database schema modifications for new product modules.',
          'Participated in debugging sessions for critical platform issues.',
        ],
      },
      {
        title: 'MATLAB Tutor',
        dates: 'May 2016 - Jun 2016',
        description: [
          'Assisted senior developers in building and testing new features for a web platform.',
          'Gained foundational experience with full-stack development practices (React, Node.js).',
          'Learned about agile methodologies and version control (Git).',
        ],
      }
    ],
    imageUrl: 'https://placehold.co/100x100.png',
    imageHint: 'university campus'
  }
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
                {/* Render position and dates only if they exist (for single-position entries) */}
                {exp.position && exp.dates && (
                  <>
                    <CardDescription className="text-md text-primary font-semibold mt-1">{exp.position}</CardDescription>
                    <CardDescription className="text-sm text-muted-foreground mt-1">{exp.dates}</CardDescription>
                  </>
                )}
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
              {exp.positions ? ( // If entry has multiple positions
                <div className="space-y-6">
                  {exp.positions.map((pos, posIndex) => (
                    <div key={posIndex} className={posIndex > 0 ? "pt-4 border-t border-border/50" : ""}>
                      <h4 className="text-lg font-semibold text-accent">{pos.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{pos.dates}</p>
                      <ul className="list-disc list-inside space-y-1 text-foreground leading-relaxed text-sm">
                        {pos.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : ( // Else, render single position's description
                exp.description && (
                  <ul className="list-disc list-inside space-y-2 text-foreground leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
