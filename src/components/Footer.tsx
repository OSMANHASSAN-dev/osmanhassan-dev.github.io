import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/OSMANHASSAN-dev",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/hassan-o-6355a3369",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:osman.hassan@example.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              Osman Suleiman Hassan
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Computer Science student specializing in AI at Mount Kenya University. 
              Passionate about creating innovative solutions through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-glow"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm animated-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Ready to collaborate on exciting projects?
              </p>
              <a
                href="mailto:osman.hassan@example.com"
                className="text-primary hover:text-primary-hover transition-colors duration-200 animated-underline"
              >
                osman.hassan@example.com
              </a>
            </div>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6 py-2 text-sm shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Let's Work Together
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Osman Suleiman Hassan. Made with{' '}
            <Heart className="inline w-4 h-4 text-red-500 mx-1" />
            in Kenya
          </p>
          
          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="mt-4 sm:mt-0 group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-200" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
}