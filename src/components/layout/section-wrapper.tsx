
import type { LucideIcon } from 'lucide-react';

interface SectionWrapperProps {
  id: string;
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, title, icon: Icon, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-10 md:mb-12">
          {Icon && <Icon size={36} className="text-accent mr-4" />}
          <h2 className="text-3xl md:text-4xl font-bold text-accent">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
