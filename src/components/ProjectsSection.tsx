import { ExternalLink, Leaf, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-secondary/30">
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
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications showcasing my development skills
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className="group glass-card overflow-hidden"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 50px hsl(var(--primary) / 0.15)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Project Header with Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 grid-pattern opacity-30"
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-background/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <project.icon className="w-10 h-10 text-foreground" />
                    </motion.div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: tagIndex * 0.1 }}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Live Demo
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
