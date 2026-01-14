import { Code, Database, Shield, Monitor, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'SQL'],
  },
  {
    icon: Database,
    title: 'Development',
    skills: ['Full Stack Development', 'Business Applications', 'System Integration', 'Database Design'],
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    skills: ['QA/QC Testing', 'Software Testing', 'Documentation', 'Bug Reporting'],
  },
  {
    icon: Monitor,
    title: 'Tools & Platforms',
    skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Visual Studio'],
  },
  {
    icon: Wrench,
    title: 'Technical Skills',
    skills: ['PC Building', 'OS Installation', 'Troubleshooting', 'Networking'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-3 block">
              Skills
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A comprehensive toolkit for building and maintaining quality software
            </p>
            <div className="section-divider mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-5 border border-border/60 rounded-md hover-lift"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs bg-muted/50 rounded-md text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;