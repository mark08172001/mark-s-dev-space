import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Briefcase, value: '9+', label: 'Months Experience' },
  { icon: Code2, value: '2+', label: 'Personal Projects' },
  { icon: GraduationCap, value: 'BSIT', label: 'Degree Achieved' },
  { icon: Award, value: '5+', label: 'Certifications' },
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
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
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Passionate Developer &{' '}
              <span className="gradient-text">Problem Solver</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground font-medium">BS Information Technology</span> graduate and an Entry-Level Full Stack / Business Application Developer with hands-on experience in software development and quality assurance.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                During my time at <span className="text-primary font-medium">Forecasting and Planning Technologies, Inc.</span>, I worked as both a Business Application Developer (Contractual) and On-the-Job Trainee in QA/QC, where I gained valuable experience in developing and testing real-world business applications.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground font-medium">web development, system development, quality assurance, and technical support</span>. I am detail-oriented, adaptable, and passionate about creating elegant solutions to complex problems.
              </motion.p>

              {/* Quick Info */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
                <motion.div
                  className="glass-card p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-muted-foreground text-sm">Location</span>
                  <p className="text-foreground font-medium">Philippines</p>
                </motion.div>
                <motion.div
                  className="glass-card p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-muted-foreground text-sm">Email</span>
                  <p className="text-foreground font-medium text-sm">permisonmark17@gmail.com</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass-card p-6 text-center"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: '0 10px 30px hsl(var(--primary) / 0.15)'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold gradient-text mb-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
