import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import ContactForm from './contact-form';
import { Card } from './ui/card';

export default function Footer() {
  return (
    <footer id="contact" className="bg-background/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Get In Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-lg mb-8">
                I'm currently open to new opportunities. Fill out the form below and I'll get back to you as soon as possible.
                </p>
            </div>
            <div className="glass-card flex items-center justify-center p-6">
                <ContactForm />
            </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
                <a href="https://github.com/Vaibhav-0111" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
                    <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/vaibhavtripathi75" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
                    <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary">
                    <Twitter className="h-6 w-6" />
                </a>
                <a href="mailto:vaibhavtripathi724@gmail.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-primary">
                    <Mail className="h-6 w-6" />
                </a>
            </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vaibhav Tripathi. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built by <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">Vaibhav</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
