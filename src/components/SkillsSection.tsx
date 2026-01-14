import { Code, Database, Shield, Monitor, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building and maintaining quality software
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="glass-card p-6"
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 15px 40px hsl(var(--primary) / 0.12)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <category.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * skillIndex }}
                      whileHover={{ 
                        scale: 1.08,
                        backgroundColor: 'hsl(var(--primary) / 0.2)'
                      }}
                      className="px-3 py-1.5 text-sm bg-primary/10 border border-primary/20 rounded-lg text-muted-foreground cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
