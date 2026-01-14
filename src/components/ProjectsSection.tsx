import { ExternalLink, Leaf, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Cordillera Harvest Hub',
    description: 'Agriculture-focused website for the Cordillera region. Built with modern web technologies featuring user-friendly UI and real-world use case for farmers and agricultural stakeholders.',
    link: 'https://cordillera-harvest-hub.vercel.app/',
    icon: Leaf,
    tags: ['Web Development', 'Agriculture', 'Modern UI'],
  },
  {
    title: 'Soil Fertility Website',
    description: 'Informational system focused on soil fertility with clean layout and functional design. Demonstrates frontend development skills and logical structuring capabilities.',
    link: 'https://soilfertility.vercel.app/',
    icon: Globe,
    tags: ['Frontend', 'Information System', 'Clean Design'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-3 block">
              Projects
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Real-world applications showcasing my development skills
            </p>
            <div className="section-divider mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group border border-border/60 rounded-md bg-card overflow-hidden hover-lift"
              >
                {/* Project Header */}
                <div className="h-32 bg-muted/50 relative flex items-center justify-center border-b border-border/40">
                  <div className="w-14 h-14 rounded-md bg-background border border-border/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-base font-medium mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-xs hover:bg-primary/90 transition-all w-full justify-center"
                  >
                    View Live Demo
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;