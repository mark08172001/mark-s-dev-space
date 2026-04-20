import { Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Business Application Developer',
    company: 'Forecasting and Planning Technologies Inc.',
    location: 'Makati City, Philippines',
    type: 'Full-time',
    period: '11/2024 – 07/2025',
    responsibilities: [
      'Led development activities including planning, defining, and designing significant software modules',
      'Developed and optimized stored procedures, functions, and user interfaces',
      'Coordinated system integration and data loading requirements during technical meetings',
    ],
  },
  {
    title: 'Quality Assurance / Quality Control',
    company: 'Forecasting and Planning Technologies Inc.',
    location: 'Makati City, Philippines',
    type: 'Full-time',
    period: '11/2024 – 07/2025',
    responsibilities: [
      'Performed quality assurance and quality control to ensure system stability',
      'Executed manual test cases to validate system functionality',
      'Identified, documented, and tracked bugs',
      'Conducted regression testing before deployment to maintain system stability',
    ],
  },
  {
    title: 'Quality Assurance Tester (Intern)',
    company: 'Forecasting and Planning Technologies Inc.',
    location: 'Makati City, Philippines',
    type: 'Internship',
    period: '01/2024 – 04/2024',
    responsibilities: [
      'Designed and executed test cases and test scenarios for new features',
      'Performed functional and UI testing across modules',
      'Logged and tracked defects, ensuring proper resolution before release',
      'Assisted in improving test documentation and QA processes',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative" style={{ background: 'hsl(var(--vscode-sidebar))' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="font-mono text-sm mb-2">
              <span className="syntax-comment">{'// section: experience'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="syntax-keyword">const</span>{' '}
              <span className="syntax-variable">workHistory</span>{' '}
              <span className="text-foreground">= [</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-6">
            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute left-3 md:left-4 top-0 w-px bg-border"
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-10 md:pl-14"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2, type: 'spring' }}
                  className="absolute left-1.5 md:left-2.5 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 top-6"
                />

                <motion.div
                  className="vscode-panel rounded-sm p-5 md:p-6"
                  whileHover={{
                    y: -3,
                    boxShadow: '0 10px 30px hsl(var(--primary) / 0.12)'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Header */}
                  <div className="font-mono text-xs syntax-comment mb-3">
                    {'{'} <span className="syntax-comment">// job[{index}]</span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-mono syntax-number">{exp.period}</span>
                    <span className="px-2 py-0.5 rounded-sm text-xs font-mono" style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--syntax-string))' }}>
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-mono font-bold syntax-function mb-1">{exp.title}</h3>

                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="text-sm font-mono syntax-string">"{exp.company}"</span>
                  </div>
                  <div className="text-xs font-mono syntax-comment mb-4 pl-5">
                    {`// ${exp.location}`}
                  </div>

                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-2 text-muted-foreground text-sm font-mono"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="font-mono text-xs syntax-comment mt-3">{'}'}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>

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

export default ExperienceSection;
