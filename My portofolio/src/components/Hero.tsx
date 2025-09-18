import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import osmanHero from '@/assets/osman-hero.jpg';

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={osmanHero}
                  alt="Osman Suleiman Hassan"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-foreground">Osman Suleiman</span>
                <span className="block gradient-text">Hassan</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Computer Science Student | AI Enthusiast
              </p>
            </div>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Passionate about artificial intelligence and web development, I focus on creating 
              innovative software solutions that solve real-world problems. Currently specializing 
              in AI at Mount Kenya University.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                View My Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                onClick={scrollToAbout}
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full border-primary/30 hover:border-primary hover:bg-primary-muted transition-all duration-300"
              >
                Learn More About Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/OSMANHASSAN-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-md hover:shadow-glow"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/hassan-o-6355a3369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-md hover:shadow-glow"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:osman@example.com"
                className="p-3 rounded-full bg-surface hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-md hover:shadow-glow"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}