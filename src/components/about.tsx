'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Github } from 'lucide-react';

const description = "As a Computer Science Engineer, I am innovative, intellectual, and passionate about my work. I am a time-bound and hard-working individual who enjoys practical application over theory. With strong leadership and team-building qualities, I am a flexible, smart worker and a continuous learner.";

export default function About() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-b from-accent to-primary opacity-10 blur-3xl rounded-full"></div>
            <Image
              src="https://drive.google.com/uc?export=view&id=1ef45E1BZw0IBWa2BX9uyOVWyTwzHDVhH"
              width={400}
              height={400}
              alt="About Me Image"
              data-ai-hint="person coding"
              className="rounded-full object-cover shadow-2xl aspect-square z-10"
            />
          </div>
          <div className="lg:col-span-1 order-2 lg:order-1 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
              <div className="prose max-w-none text-muted-foreground md:text-lg/relaxed">
                <p>{description}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
