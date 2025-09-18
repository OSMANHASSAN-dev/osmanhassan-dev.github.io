import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey in computer science and artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate Computer Science student at Mount Kenya University, 
                    specializing in Artificial Intelligence. My journey in technology began 
                    with a fascination for how machines can learn and solve complex problems.
                  </p>
                  <p>
                    With a strong foundation in full-stack development, I enjoy building 
                    innovative web applications that bridge the gap between complex AI 
                    algorithms and user-friendly interfaces. My experience spans from 
                    creating efficient backend systems to designing intuitive user experiences.
                  </p>
                  <p>
                    I'm particularly interested in machine learning, natural language processing, 
                    and computer vision. I believe AI has the potential to revolutionize how we 
                    interact with technology and solve real-world challenges.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6 py-3 shadow-lg hover:shadow-glow transition-all duration-300"
              >
                <a
                  href="https://github.com/OSMANHASSAN-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-3 border-primary/30 hover:border-primary hover:bg-primary-muted transition-all duration-300"
              >
                <a
                  href="https://linkedin.com/in/hassan-o-6355a3369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Stats/Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="text-3xl font-bold gradient-text mb-2">AI</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Specialization</h4>
                <p className="text-sm text-muted-foreground">
                  Focusing on machine learning, NLP, and computer vision
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Full-stack applications and AI solutions
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="text-3xl font-bold gradient-text mb-2">Web</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Development</h4>
                <p className="text-sm text-muted-foreground">
                  Modern full-stack web applications
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="text-3xl font-bold gradient-text mb-2">CS</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Student</h4>
                <p className="text-sm text-muted-foreground">
                  Mount Kenya University
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}