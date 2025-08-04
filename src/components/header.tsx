'use client';

import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const cvUrl = "https://docs.google.com/document/d/1UqyS83JUXwQShBVHOWh9RY9ZgxkRpyPW8E7ZWV8w1X0/edit?usp=sharing";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        hasScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2 font-headline text-lg font-bold">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Vaibhav</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground animated-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
            <Button asChild variant="outline">
              <a href={cvUrl} target="_blank" rel="noopener noreferrer">Download CV</a>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <a href="#home" className="flex items-center gap-2 font-headline text-lg font-bold">
                  <Code2 className="h-6 w-6 text-primary" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Vaibhav</span>
                </a>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <Button asChild variant="default">
                  <a href={cvUrl} target="_blank" rel="noopener noreferrer">Download CV</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
