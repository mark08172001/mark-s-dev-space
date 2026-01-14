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
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building and maintaining quality software
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-primary/10 border border-primary/20 rounded-lg text-muted-foreground"
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
