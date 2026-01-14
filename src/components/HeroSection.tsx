import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--gradient-hero)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left lg:col-span-3 order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-in-up">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-xs text-primary font-medium tracking-wide uppercase">Available for opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 animate-fade-in-up delay-100 text-foreground tracking-tight">
                Mark TJ T. Permison
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-primary mb-6 font-medium animate-fade-in-up delay-200">
                Full Stack Developer
              </p>

              <p className="text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 animate-fade-in-up delay-300 leading-relaxed">
                Entry-Level Business Application Developer with 9+ months of experience in software development and quality assurance. Dedicated to transforming ideas into elegant, functional solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up delay-400">
                <a
                  href="#projects"
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-md font-medium text-sm formal-button hover:bg-primary/90 transition-all"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2.5 bg-transparent border border-border text-foreground rounded-md font-medium text-sm hover:bg-muted/50 transition-all"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-2 animate-fade-in-up delay-500">
                <a
                  href="mailto:permisonmark17@gmail.com"
                  className="w-9 h-9 rounded-md bg-transparent border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/mark08172001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-transparent border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mark-tj-permison-130341316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-transparent border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center lg:col-span-2 order-1 lg:order-2 animate-fade-in-up">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-border/60">
                  <img
                    src={profilePhoto}
                    alt="Mark TJ T. Permison"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center gap-1.5 text-muted-foreground/60 hover:text-primary transition-colors">
            <span className="text-xs font-medium tracking-wide">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;