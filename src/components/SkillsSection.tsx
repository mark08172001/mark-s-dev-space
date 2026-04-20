import { Code, Bug, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    icon: Code,
    title: 'Technical Skills',
    skills: [
      'Full-Stack Development',
      'MS SQL / Database Management',
      'Stored Procedures',
      'C#',
      'Java',
      'PHP',
      'JavaScript',
      'HTML & CSS',
      'Git Version Control',
    ],
  },
  {
    icon: Bug,
    title: 'Testing',
    skills: [
      'Manual Testing',
      'Quality Assurance (QA)',
      'Quality Control (QC)',
      'Test Case Preparation',
      'Bug Tracking',
      'Software Testing',
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Canva', 'Figma', 'Administrative Tools'],
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="vscode-panel rounded-sm p-5"
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px hsl(var(--primary) / 0.12)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center"
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
                      className="px-2.5 py-1 text-xs font-mono bg-muted border border-border rounded-sm text-muted-foreground cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
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
