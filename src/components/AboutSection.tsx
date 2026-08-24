import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import BorderGlow from './BorderGlow';

const stats = [
  { icon: Briefcase, value: '9+', label: 'Months Experience', glowColor: '210 90 70', colors: ['#38bdf8', '#818cf8', '#6366f1'] },
  { icon: Code2, value: '4+', label: 'Featured Projects', glowColor: '150 80 70', colors: ['#10b981', '#34d399', '#059669'] },
  { icon: GraduationCap, value: 'BSIT', label: 'Degree Achieved', glowColor: '280 80 70', colors: ['#c084fc', '#a855f7', '#7c3aed'] },
  { icon: Award, value: '5+', label: 'Certifications', glowColor: '45 90 70', colors: ['#f59e0b', '#fbbf24', '#d97706'] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - VS Code comment style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="font-mono text-sm mb-2">
              <span className="syntax-comment">{'// section: about'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="syntax-keyword">export</span>{' '}
              <span className="syntax-keyword">const</span>{' '}
              <span className="syntax-function">About</span>{' '}
              <span className="text-foreground">= () =&gt; {'{'}</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="space-y-4"
            >
              <motion.div variants={itemVariants}>
                <BorderGlow
                  borderRadius={12}
                  glowRadius={30}
                  glowIntensity={0.9}
                  glowColor="210 90 70"
                  colors={['#38bdf8', '#818cf8', '#c084fc']}
                  backgroundColor="hsl(var(--card))"
                  className="w-full shadow-lg"
                >
                  <div className="p-4 md:p-6">
                    <div className="font-mono text-xs text-muted-foreground mb-3">{'/* About Me */'}</div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      I am a <span className="syntax-type font-medium">BS Information Technology</span> graduate and an Entry-Level Full Stack / Business Application Developer with hands-on experience in software development and quality assurance.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      During my time at <span className="syntax-string font-medium">"Forecasting and Planning Technologies, Inc."</span>, I worked as both a Business Application Developer (Contractual) and On-the-Job Trainee in QA/QC.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I specialize in <span className="syntax-variable font-medium">web development</span>, <span className="syntax-variable font-medium">system development</span>, <span className="syntax-variable font-medium">quality assurance</span>, and <span className="syntax-variable font-medium">technical support</span>.
                    </p>
                  </div>
                </BorderGlow>
              </motion.div>

              {/* Quick Info - terminal style */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
                <BorderGlow
                  borderRadius={10}
                  glowRadius={20}
                  glowIntensity={0.8}
                  glowColor="150 80 70"
                  colors={['#10b981', '#34d399', '#059669']}
                  backgroundColor="hsl(var(--card))"
                >
                  <div className="p-3.5">
                    <span className="font-mono text-xs syntax-comment">// location</span>
                    <p className="font-mono text-sm text-foreground mt-1">
                      <span className="syntax-string">"Philippines"</span>
                    </p>
                  </div>
                </BorderGlow>

                <BorderGlow
                  borderRadius={10}
                  glowRadius={20}
                  glowIntensity={0.8}
                  glowColor="210 90 70"
                  colors={['#38bdf8', '#818cf8', '#c084fc']}
                  backgroundColor="hsl(var(--card))"
                >
                  <div className="p-3.5">
                    <span className="font-mono text-xs syntax-comment">// email</span>
                    <p className="font-mono text-xs text-foreground mt-1 truncate">
                      <span className="syntax-string">"permisonmark17@gmail.com"</span>
                    </p>
                  </div>
                </BorderGlow>
              </motion.div>
            </motion.div>

            {/* Stats Grid with BorderGlow */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group"
                >
                  <BorderGlow
                    borderRadius={12}
                    glowRadius={25}
                    glowIntensity={1.0}
                    glowColor={stat.glowColor}
                    colors={stat.colors}
                    backgroundColor="hsl(var(--card))"
                    className="w-full h-full text-center"
                  >
                    <div className="p-5 flex flex-col items-center justify-center">
                      <motion.div
                        className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <motion.div
                        className="text-2xl font-mono font-bold syntax-function mb-1"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs font-mono text-muted-foreground">{stat.label}</div>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm mt-12 text-foreground"
          >
            {'}'};
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
