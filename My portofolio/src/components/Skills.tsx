import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Server,
  Palette,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    icon: Brain,
    title: "Artificial Intelligence & ML",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "Computer Vision", level: 75 },
      { name: "Natural Language Processing", level: 70 },
      { name: "TensorFlow/PyTorch", level: 80 }
    ]
  },
  {
    icon: Code,
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 90 }
    ]
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 88 },
      { name: "Java/Spring Boot", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 82 },
      { name: "Firebase", level: 78 },
      { name: "Redis", level: 70 }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: [
      { name: "Android Studio", level: 85 },
      { name: "Java (Android)", level: 82 },
      { name: "React Native", level: 75 },
      { name: "Mobile UI/UX", level: 80 },
      { name: "App Publishing", level: 70 }
    ]
  },
  {
    icon: Shield,
    title: "DevOps & Tools",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Linux/Unix", level: 80 },
      { name: "CI/CD", level: 70 },
      { name: "AWS Basics", level: 65 }
    ]
  }
];

const tools = [
  "VS Code", "IntelliJ IDEA", "Android Studio", "Postman", "Figma", 
  "Git", "Docker", "Jupyter Notebook", "MongoDB Compass", "Firebase Console"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise across AI, web development, and software engineering
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 p-3 rounded-full bg-primary-muted">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="px-4 py-2 bg-card text-card-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Programming Languages", value: "8+" },
            { label: "Frameworks & Libraries", value: "15+" },
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "20+" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}