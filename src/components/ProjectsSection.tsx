import { ExternalLink, Leaf, Globe, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

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
  {
    title: 'BGH Basic Website',
    description: 'A hospital management website with essential CRUD functionalities. Enables hospital staff to manage patient, admission, treatment, and other key records efficiently through intuitive user interfaces.',
    link: 'https://github.com/mark08172001/BGH-Basic-Website.git',
    icon: HeartPulse,
    tags: ['Hospital Management', 'CRUD', 'Web Development'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative" style={{ background: 'hsl(var(--vscode-sidebar))' }}>
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
              <span className="syntax-comment">{'// section: projects'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="syntax-keyword">const</span>{' '}
              <span className="syntax-variable">projects</span>{' '}
              <span className="syntax-operator">=</span>{' '}
              <span className="text-foreground">[</span>
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className="group vscode-panel rounded-sm overflow-hidden"
                whileHover={{
                  y: -8,
                  boxShadow: '0 15px 40px hsl(var(--primary) / 0.15)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Terminal-style header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border" style={{ background: 'hsl(var(--vscode-terminal))' }}>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(var(--syntax-function))' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(var(--syntax-string))' }} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">project_{index}.tsx</span>
                </div>

                {/* Project icon area */}
                <div className="h-36 flex items-center justify-center relative" style={{ background: 'hsl(var(--vscode-terminal))' }}>
                  <motion.div
                    className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <project.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <div className="font-mono text-xs syntax-comment mb-2">{'// '}{project.title.toLowerCase().replace(/ /g, '_')}</div>
                  <h3 className="font-mono text-lg font-bold syntax-function mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: tagIndex * 0.1 }}
                        className="px-2 py-0.5 rounded-sm bg-muted text-muted-foreground text-xs font-mono border border-border"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-sm font-mono text-sm hover:bg-primary/90 transition-all w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {'>'} open_demo()
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.span>
                  </motion.a>
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
            ];
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
