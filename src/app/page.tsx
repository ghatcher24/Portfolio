
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
