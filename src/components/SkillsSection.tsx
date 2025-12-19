import { Code, Database, Shield, Monitor, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Web',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'C#', level: 75 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    icon: Database,
    title: 'Development',
    skills: [
      { name: 'Full Stack Development', level: 75 },
      { name: 'Business Applications', level: 80 },
      { name: 'System Integration', level: 70 },
      { name: 'Database Design', level: 75 },
    ],
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    skills: [
      { name: 'QA/QC Testing', level: 85 },
      { name: 'Software Testing', level: 80 },
      { name: 'Documentation', level: 85 },
      { name: 'Bug Reporting', level: 80 },
    ],
  },
  {
    icon: Monitor,
    title: 'Tools & Platforms',
    skills: [
      { name: 'Microsoft Word', level: 90 },
      { name: 'Microsoft Excel', level: 85 },
      { name: 'Microsoft PowerPoint', level: 85 },
      { name: 'Visual Studio', level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: 'Technical Skills',
    skills: [
      { name: 'PC Building', level: 85 },
      { name: 'OS Installation', level: 90 },
      { name: 'Troubleshooting', level: 85 },
      { name: 'Networking', level: 75 },
    ],
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

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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
