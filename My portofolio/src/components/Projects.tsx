import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: "AI-Driven Zoo Visitor & Wildlife Monitoring Web Platform",
    description: "An intelligent web platform that monitors zoo visitors and wildlife using computer vision and machine learning algorithms for enhanced visitor experience and animal welfare.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "Computer Vision"],
    githubUrl: "https://github.com/OSMANHASSAN-dev",
    category: "AI/ML"
  },
  {
    title: "Appointment Booking System",
    description: "A comprehensive web application for managing appointments with real-time notifications, calendar integration, and user management features.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: "https://github.com/OSMANHASSAN-dev",
    category: "Web Development"
  },
  {
    title: "Advanced Web App Logging System",
    description: "A sophisticated logging and monitoring system for web applications with real-time analytics, error tracking, and performance monitoring.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "ELK Stack"],
    githubUrl: "https://github.com/OSMANHASSAN-dev",
    category: "Backend"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and responsive design for optimal user experience.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "Redux"],
    githubUrl: "https://github.com/OSMANHASSAN-dev",
    category: "Full Stack"
  },
  {
    title: "Job Nest App",
    description: "An Android mobile application for job searching and networking, featuring real-time job matching and professional networking capabilities.",
    technologies: ["Android Studio", "Java", "Firebase", "REST APIs"],
    githubUrl: "https://github.com/OSMANHASSAN-dev",
    category: "Mobile"
  },
  {
    title: "Event Management System",
    description: "A comprehensive platform for organizing and managing events with features for ticketing, attendee management, and real-time event updates.",
    technologies: ["React", "Node.js", "MySQL", "Socket.io", "Payment Gateway"],
    githubUrl: "https://github.com/OSMANHASSAN-dev",
    category: "Web Development"
  },
  {
    title: "Student Code Registration System",
    description: "An academic management system for student course registration with automated scheduling, conflict detection, and grade management.",
    technologies: ["Java", "Spring Boot", "MySQL", "Angular", "JWT"],
    githubUrl: "https://github.com/OSMANHASSAN-dev",
    category: "Enterprise"
  },
  {
    title: "All-in Banking System",
    description: "A secure banking application with comprehensive financial services including transactions, loan management, and investment tracking.",
    technologies: ["Java", "Spring Security", "PostgreSQL", "React", "Microservices"],
    githubUrl: "https://github.com/OSMANHASSAN-dev",
    category: "FinTech"
  }
];

const categories = ["All", "AI/ML", "Web Development", "Mobile", "Backend", "Full Stack", "Enterprise", "FinTech"];

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my work in AI, web development, and software engineering
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow"
                    : "border-primary/30 hover:border-primary hover:bg-primary-muted"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-xs font-medium text-primary mb-2 px-2 py-1 bg-primary-muted rounded-full inline-block">
                      {project.category}
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-full border-primary/30 hover:border-primary hover:bg-primary-muted"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
          >
            <a
              href="https://github.com/OSMANHASSAN-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}