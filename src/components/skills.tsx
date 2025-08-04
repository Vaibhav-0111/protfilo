'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cpu, Award } from 'lucide-react';

const programmingLanguages = [
  'Python',
  'C',
  'C++',
  'JavaScript',
  'HTML',
  'CSS',
  'MySQL',
];

const frameworksAndTech = [
  'React',
  'Next.js',
  'Node.js',
  'MERN',
  'DBMS',
  'Selenium',
];

const topSkills = [
  'Patent Law',
  'Patent Litigation',
  'Patent Analysis',
  'Software Testing',
  'SDLC',
];

const skillsData = [
    {
        icon: <Code className="h-8 w-8" />,
        title: 'Programming Languages',
        skills: programmingLanguages,
    },
    {
        icon: <Cpu className="h-8 w-8" />,
        title: 'Frameworks & Technologies',
        skills: frameworksAndTech,
    },
    {
        icon: <Award className="h-8 w-8" />,
        title: 'Top Skills',
        skills: topSkills,
    }
]

export default function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skillset</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A versatile collection of technical and professional skills I bring to every project.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <div 
                key={index} 
                className="glass-card group flex flex-col items-center text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`}}
            >
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/30">
                  {category.icon}
                </div>
                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm transition-all duration-200 group-hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
