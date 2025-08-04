'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full pt-20 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16 md:px-10">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">
              Vaibhav Tripathi
            </h1>
            <p className="text-accent font-semibold text-lg md:text-xl animate-subtle-pulse">
              Data Science Explorer | Backend Developer | MERN Stack Enthusiast
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Passionate about AI & Data-Driven Solutions, Full Stack Projects, Machine Learning, Deep Learning, and Data Visualization.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-105">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/Vaibhav-0111" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="GitHub Profile">
                    <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/vaibhavtripathi75" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn Profile">
                    <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter Profile">
                    <Twitter className="h-6 w-6" />
                </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
             <div className="absolute w-full h-full bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 -z-10"></div>
             <Image
                src="https://drive.google.com/uc?export=view&id=18DyOX6SuG4pFBVv2PBhZEQWsXogrgCMt"
                width="400"
                height="400"
                alt="Vaibhav Tripathi"
                data-ai-hint="professional headshot"
                className="z-10 rounded-full object-cover border-8 border-background shadow-2xl aspect-square"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
