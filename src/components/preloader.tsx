'use client';

import { Code2 } from 'lucide-react';

export default function Preloader() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background animate-fade-out animation-delay-2500"
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="text-center animate-fade-in duration-1000">
        <div className="flex justify-center items-center mb-4">
            <Code2 className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Vaibhav Tripathi's</span> Portfolio
        </h1>
      </div>
    </div>
  );
}
