import { Briefcase, Building, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: 'Patent Analyst',
    company: 'Lovely Professional University',
    location: 'Phagwara, Punjab, India',
    description: 'As a Patent Trainee, I supported the end-to-end process of patent drafting and prosecution, conducting prior art searches, analyzing technical disclosures, and drafting high-quality patent specifications. I collaborated with inventors and legal professionals to ensure innovations were accurately captured and protected.',
    date: 'April 2025 - Present',
    current: true,
  },
  {
    role: 'Team Member (Tester)',
    company: 'Internship Studio',
    location: 'Remote',
    description: 'Gained experience in software testing, SDLC models, cost estimation, and Selenium testing.',
    date: 'July 2024 - August 2024',
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and the experiences that have shaped my career in technology and software development.
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-4 h-full w-0.5 bg-border -z-10"></div>
          {experiences.map((experience, index) => (
            <div key={index} className="relative pl-12 mb-12 timeline-item">
               <div className="absolute left-[-2px] top-1.5 h-5 w-5 rounded-full bg-primary border-4 border-background"></div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-headline">{experience.role}</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{experience.date}</span>
                  {experience.current && <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-white">Current</Badge>}
                </div>
              </div>
               <div className="flex items-center gap-6 text-sm text-muted-foreground mt-1">
                 <div className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span>{experience.company}</span>
                 </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
              </div>
              <p className="mt-4 text-muted-foreground">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
