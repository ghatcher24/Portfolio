
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Award, Building2 } from 'lucide-react';

const experienceData = [
  {
    company: 'Innova Plastics Engineering',
    position: 'Process Engineering Intern',
    dates: 'June 2024 - August 2024',
    description: [
      'Developed QMS procedures for transition to ISO 13485 compliance and performed installation qualification on machinery.',
      'Identified paint consumption issue and collaborated with shop employees to develop consumption measurement procedure.',
      'Coded interface to record metrics and produce unit consumption statistics using Visual BASIC.',
    ],
    imageUrl: '/images/InnovaPlasticsLogo.jpg', 
    imageHint: 'Innova Plastics Engineering logo'
  },
  {
    company: 'Cofab Design',
    position: 'Engineering Intern',
    dates: 'June 2023 - August 2023',
    description: [
      'Aided in design, development and delivery of numerous projects to customers.',
      'Contacted suppliers and established meetings to explore potential manufacturing options. Explored tooling options and generated cost projections.',
      'Designed test rigs to determine product meets customer requirements. Wrote testing procedures and conducted testing in accordance with ISO.',
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
              'Reviewed and graded assignments covering Process Plans, Flow Maps, P&ID, and Ladder Diagram PLC coding.',
            ],
          },
          {
            areaTitle: 'Senior Design Capstone',
            description: [
              'Lead weekly progress update meetings with student teams and guided them throughout proper design process.',
              'Provided constructive feedback correcting missteps and aided in filling knowledge gaps.',
            ],
          },
        ],
      },
      {
        title: 'Graduate Student Advisor',
        dates: 'August 2024 - May 2025',
        description: [
          'Managed class enrollment of 80 students during registration periods',
          'Built optimal class schedules on a student by student basis for three and four year tracks.',
        ],
      },
      {
        title: 'MATLAB Tutor',
        dates: 'May 2016 - Jun 2016',
        description: [
          'Helped students dissect and troubleshoot complex problems within Matlab',
          'Fostered the learning of MATLAB concepts through custom exercises and pseudocode explanations.',
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
            <CardHeader className={`flex flex-col sm:flex-row justify-between items-start sm:items-center ${exp.company === 'University of Massachusetts Amherst' ? 'pb-0' : 'pb-4'}`}>
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
                      
                      <h4 className={`text-xl font-semibold mt-1 mb-1 ${exp.company === 'University of Massachusetts Amherst' ? 'text-primary' : 'text-accent'}`}>{pos.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{pos.dates}</p>

                      {pos.focusAreas ? (
                        <div className="space-y-4">
                          {pos.focusAreas.map((area, areaIndex) => (
                            <div key={areaIndex}>
                              <h5 className="text-md text-primary font-semibold mb-1">{area.areaTitle}</h5>
                              <ul className="list-disc list-inside space-y-2 text-foreground leading-relaxed pl-5">
                                {area.description.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : pos.description ? (
                        <ul className="list-disc list-inside space-y-2 text-foreground leading-relaxed pl-5">
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
                  <ul className="list-disc list-inside space-y-2 text-foreground leading-relaxed pl-5">
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
