import { Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Business Application Developer',
    company: 'Forecasting and Planning Technologies, Inc.',
    type: 'Contractual',
    period: '2024',
    responsibilities: [
      'Developed and optimized web application modules',
      'Designed and implemented user interfaces',
      'Created SQL stored procedures and functions',
      'Participated in system integration, testing, and deployment',
    ],
  },
  {
    title: 'On-the-Job Trainee – QA/QC',
    company: 'Forecasting and Planning Technologies, Inc.',
    type: 'Internship',
    period: '2024',
    responsibilities: [
      'Performed Quality Assurance & Quality Control testing',
      'Prepared testing templates and documentation',
      'Assisted in software testing and bug reporting',
      'Experience with PC building, OS installation, troubleshooting, and networking',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building real-world business applications and ensuring software quality
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute left-0 md:left-1/2 top-0 w-px bg-border md:-translate-x-1/2"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, type: 'spring' }}
                    className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10"
                  />

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="glass-card p-6"
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 15px 40px hsl(var(--primary) / 0.12)'
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="px-2 py-0.5 rounded-full bg-primary/10 text-xs"
                        >
                          {exp.type}
                        </motion.span>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>

                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
