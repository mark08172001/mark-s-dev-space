import { ExternalLink, Leaf, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Cordillera Harvest Hub',
    description: 'Agriculture-focused website for the Cordillera region. Built with modern web technologies featuring user-friendly UI and real-world use case for farmers and agricultural stakeholders.',
    link: 'https://cordillera-harvest-hub.vercel.app/',
    icon: Leaf,
    tags: ['Web Development', 'Agriculture', 'Modern UI'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Soil Fertility Website',
    description: 'Informational system focused on soil fertility with clean layout and functional design. Demonstrates frontend development skills and logical structuring capabilities.',
    link: 'https://soilfertility.vercel.app/',
    icon: Globe,
    tags: ['Frontend', 'Information System', 'Clean Design'],
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications showcasing my development skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group glass-card overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header with Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-background/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-10 h-10 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium glow-button hover:bg-primary/90 transition-all w-full justify-center"
                  >
                    View Live Demo
                    <ExternalLink className="w-4 h-4" />
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
