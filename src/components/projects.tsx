
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
    image: 'https://private-user-images.githubusercontent.com/150104890/468145149-09d46fbb-295d-4299-99f6-7cd087c8467b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI4OTY4NTksIm5iZiI6MTc1Mjg5NjU1OSwicGF0aCI6Ii8xNTAxMDQ4OTAvNDY4MTQ1MTQ5LTA5ZDQ2ZmJiLTI5NWQtNDI5OS05OWY2LTdjZDA4N2M4NDY3Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxOVQwMzQyMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMzk0N2IwZTNlMzM4Y2JhZDJlMDVkYWYwN2NhZTE2ODViOWQ3NjY0YTNjYjA1Njc5ZDFjODM0MjkyZTkwMDExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.5DonLpP4G51KyWcm2VtutgYRwmehSCUe9Qu4N9zEgR0',
  },
  {
    id: 2,
    name: 'Lunar-Hazard-Mapper',
    description: 'A deep learning project utilizing satellite imagery to identify and map potential hazards on the lunar surface for future missions.',
    html_url: 'https://github.com/Vaibhav-0111/Lunar-Hazard-Mapper',
    stargazers_count: 18,
    topics: ['Python', 'TensorFlow', 'Deep-Learning', 'Computer-Vision', 'GIS'],
    image: 'https://private-user-images.githubusercontent.com/150104890/468251567-14b73aea-fd58-4e3d-a6ef-e0a4e2c35f0d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI4OTcxODUsIm5iZiI6MTc1Mjg5Njg4NSwicGF0aCI6Ii8xNTAxMDQ4OTAvNDY4MjUxNTY3LTE0YjczYWVhLWZkNTgtNGUzZC1hNmVmLWUwYTRlMmMzNWYwZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxOVQwMzQ4MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMGI4NGU0MjI1NGUyZTdlOGY2OGVkMTM4ZDVjOGZiNmYzNTU5MTllZjU5OWZkODgwNzkxYjY4NWEyNWQ5NzFiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.kfu7Qvh25l6AcitbBjyD0VI4ijz6GKve5yhouoQgZRE',
  },
  {
    id: 3,
    name: 'Legal-Advisor',
    description: 'An AI-powered chatbot that provides preliminary legal advice and information, built with Natural Language Processing.',
    html_url: 'https://github.com/Vaibhav-0111/Legal-Advisor',
    stargazers_count: 32,
    topics: ['Python', 'NLP', 'Genkit', 'AI', 'Chatbot'],
    image: 'https://private-user-images.githubusercontent.com/150104890/435767650-6d3a6760-89ac-472d-a4ca-776486f9db03.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI4OTgyMjksIm5iZiI6MTc1Mjg5NzkyOSwicGF0aCI6Ii8xNTAxMDQ4OTAvNDM1NzY3NjUwLTZkM2E2NzYwLTg5YWMtNDcyZC1hNGNhLTc3NjQ4NmY5ZGIwMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxOVQwNDA1MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZTQ4MjE2MGNmMzE1ZWRlNDE3ZjNjNDI4Y2ZmNjZlN2NjZWRmOWY5MmM4YzU0OWNkNzM0ZTEzMDg1N2ZmY2RmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.5S7VhWJHkq-iohKakCvaYcUa8Gkc4HhEehEt3xl-XyA',
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
