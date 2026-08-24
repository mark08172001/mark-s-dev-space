import { Code, Bug, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import BorderGlow from './BorderGlow';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Development',
    glowColor: '210 90 70',
    colors: ['#38bdf8', '#818cf8', '#6366f1'],
    skills: ['C#', 'PHP', 'JavaScript', 'Java', 'HTML', 'CSS', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Bug,
    title: 'Software Testing',
    glowColor: '150 80 70',
    colors: ['#10b981', '#34d399', '#059669'],
    skills: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Test Case Design',
      'Defect Tracking & Reporting',
      'Quality Assurance (QA)',
      'Quality Control (QC)',
      'User Acceptance Testing (UAT)',
    ],
  },
  {
    icon: Workflow,
    title: 'Methodologies',
    glowColor: '280 80 70',
    colors: ['#c084fc', '#a855f7', '#7c3aed'],
    skills: [
      'Software Development Life Cycle (SDLC)',
      'Debugging & Troubleshooting',
      'System Integration Testing',
      'Agile Development',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
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
            className="mb-16"
          >
            <div className="font-mono text-sm mb-2">
              <span className="syntax-comment">{'// section: skills'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="syntax-keyword">interface</span>{' '}
              <span className="syntax-type">TechStack</span>{' '}
              <span className="text-foreground">{'{'}</span>
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group"
              >
                <BorderGlow
                  borderRadius={12}
                  glowRadius={28}
                  glowIntensity={1.0}
                  glowColor={category.glowColor}
                  colors={category.colors}
                  backgroundColor="hsl(var(--card))"
                  className="w-full h-full"
                >
                  <div className="p-5 flex flex-col justify-between h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <category.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="font-mono text-sm font-semibold syntax-function">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * skillIndex }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: 'hsl(var(--primary) / 0.2)'
                          }}
                          className="px-2.5 py-1 text-xs font-mono bg-muted/70 border border-border rounded text-muted-foreground cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm mt-8 text-foreground"
          >
            {'}'};
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
