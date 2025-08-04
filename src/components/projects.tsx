
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'EcoSmart-Retail',
    description: 'An intelligent retail management system that optimizes inventory, predicts sales trends, and reduces waste using data analytics.',
    html_url: 'https://github.com/Vaibhav-0111/EcoSmart-Retail',
    stargazers_count: 25,
    topics: ['React', 'Node.js', 'MongoDB', 'Data-Science', 'Machine-Learning'],
    image: 'https://drive.google.com/file/d/1d0fS0uVCYr3yYIBMmCdGl2xEJr51lggZ/view?usp=sharing',
  },
  {
    id: 2,
    name: ' AutoBrandAI',
    description: 'A powerful AI-driven branding assistant tailored for automotive startups and companies.',
    html_url: 'https://github.com/Vaibhav-0111/AutoBrandAI',
    stargazers_count: 18,
    topics: ['Python', 'AI', 'Branding', 'GenAI', 'Marketing', 'NLP', 'Startup Tool's],
    image: 'https://drive.google.com/file/d/1cISlW4vjdvc4HDH91LE1QjGKzZQtEHUC/view?usp=sharing',
  },
  {
    id: 3,
    name: 'COVID-19 Detection Analyzer',
    description: 'A powerful Streamlit-based web application designed to analyze SARS-CoV-2 genomic data. ',
    html_url: 'https://github.com/Vaibhav-0111/COVID-19-Detection-Analyzer',
    stargazers_count: 32,
    topics: ['Python', 'Deep Learning', 'CNN', 'Medical Imaging', 'COVID-19', 'AI'],
    image: 'https://drive.google.com/file/d/1AAhTqazHvQm1pYaetoizayFpisbb3AcD/view?usp=sharing',
  },
  {
    id: 4,
    name: 'Bank-Loan-Dashboard',
    description: 'A comprehensive Power BI dashboard for visualizing and analyzing bank loan data to identify risks and opportunities.',
    html_url: 'https://github.com/Vaibhav-0111/Bank-Loan-Dashboard',
    stargazers_count: 12,
    topics: ['Power-BI', 'Data-Visualization', 'Dashboard', 'Finance'],
    image: 'https://github.com/Vaibhav-0111/Bank-Loan-Dashboard/blob/main/Screenshot%202025-04-12%20041912.png?raw=true',
  },
];


export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my work, showcasing my skills in software development and problem-solving.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 py-12 lg:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="glass-card group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader className="p-0">
                   <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      width="600"
                      height="400"
                      alt={project.name}
                      data-ai-hint="code project"
                      className="rounded-t-lg object-cover w-full aspect-[16/9] transition-transform duration-500 group-hover:scale-105"
                    />
                     <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-xs font-semibold backdrop-blur-sm">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{project.stargazers_count}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-2xl font-headline mb-2 capitalize">{project.name.replace(/[-_]/g, ' ')}</CardTitle>
                  <CardDescription>{project.description || 'No description provided.'}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.topics.slice(0, 5).map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6">
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
