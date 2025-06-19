
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
      'Developed QMS procedures relevant for transition to ISO 13485 compliance and performed installation qualification on existing machinery.',
      'Identified paint consumption issue and collaborated with shop employees to develop consumption measurement procedure. Coded interface to record metrics and produce unit consumption statistics using Visual BASIC.',
    ],
    imageUrl: '/images/ThermofabLogo.jpg',
    imageHint: 'Thermofab logo'
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
    imageUrl: '/images/CofabLogo.jpg',
    imageHint: 'Cofab Design logo'
  },
  {
    company: 'University of Massachusetts Amherst',
    positions: [
      {
        title: 'Graduate Teachers Assistant',
        dates: 'August 2024 - May 2025',
        focusAreas: [
          {
            areaTitle: 'Industrial Automation',
            description: [
              'Text',
              'Text',
            ],
          },
          {
            areaTitle: 'Senior Design Capstone',
            description: [
              'Text',
              'Text',
            ],
          },
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
    imageUrl: '/images/UmassLogo.png',
    imageHint: 'UMass Amherst logo'
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
                {exp.position && exp.dates && !exp.positions && (
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
                  className="rounded-lg shadow-sm object-contain"
                />
              </div>
            </CardHeader>
            <CardContent>
              {exp.positions ? ( 
                <div className="space-y-6">
                  {exp.positions.map((pos, posIndex) => (
                    <div key={posIndex} className={posIndex > 0 ? "pt-6 border-t border-border/50" : ""}>
                      
                      <h4 className="text-xl font-semibold text-accent mb-1">{pos.title}</h4>
                      <p className="text-md text-muted-foreground mb-3">{pos.dates}</p>

                      {pos.focusAreas ? (
                        <div className="space-y-4">
                          {pos.focusAreas.map((area, areaIndex) => (
                            <div key={areaIndex} className="ml-0">
                              <h5 className="text-md text-primary font-semibold mb-1">{area.areaTitle}</h5>
                              <ul className="list-disc list-inside space-y-1 text-foreground leading-relaxed text-sm ml-5">
                                {area.description.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : pos.description ? (
                        <ul className="list-disc list-inside space-y-1 text-foreground leading-relaxed text-sm ml-5">
                          {pos.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : ( 
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
