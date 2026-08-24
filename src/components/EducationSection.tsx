import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import BorderGlow from './BorderGlow';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
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
              <span className="syntax-comment">{'// section: education'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="syntax-keyword">class</span>{' '}
              <span className="syntax-type">Education</span>{' '}
              <span className="text-foreground">{'{'}</span>
            </h2>
          </motion.div>

          {/* Education Card with BorderGlow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -3 }}
            className="group"
          >
            <BorderGlow
              borderRadius={14}
              glowRadius={32}
              glowIntensity={1.0}
              glowColor="210 90 70"
              colors={['#38bdf8', '#818cf8', '#c084fc']}
              backgroundColor="hsl(var(--card))"
              className="w-full shadow-xl"
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="font-mono text-xs syntax-comment mb-2">{'// degree'}</div>
                  <h3 className="text-xl font-mono font-bold syntax-function mb-1">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="font-mono syntax-string mb-4">
                    "Saint Louis University"
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span className="syntax-number">2020 – 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>Baguio City, Philippines</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Completed a comprehensive curriculum covering software development, web technologies, database management, networking, and IT project management. Gained hands-on experience through various projects and internship opportunities.
                  </p>
                </div>
              </div>
            </BorderGlow>
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

export default EducationSection;
