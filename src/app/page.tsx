import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import GithubStats from '@/components/github-stats';
import Experience from '@/components/achievements';
import Certifications from '@/components/certifications';
import ProjectIdeaGenerator from '@/components/project-idea-generator';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Experience />
        <Certifications />
        <ProjectIdeaGenerator />
      </main>
      <Footer />
    </div>
  );
}
