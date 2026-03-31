import { Award, Cloud, Shield, Network, Code, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  { title: 'Microsoft Azure AI Fundamentals', issuer: 'Microsoft', icon: Cloud },
  { title: 'Microsoft Cybersecurity Fundamentals', issuer: 'Microsoft', icon: Shield },
  { title: 'Networking & Server Setup', issuer: 'Professional Training', icon: Network },
  { title: 'CSS & Web Development', issuer: 'Professional Training', icon: Code },
  { title: 'Computer Systems & Network Maintenance', issuer: 'Professional Training', icon: Monitor },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 relative" style={{ background: 'hsl(var(--vscode-sidebar))' }}>
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
              <span className="syntax-comment">{'// section: certifications'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="syntax-keyword">enum</span>{' '}
              <span className="syntax-type">Certifications</span>{' '}
              <span className="text-foreground">{'{'}</span>
            </h2>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={cardVariants}
                className="vscode-panel rounded-sm p-5 group"
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px hsl(var(--primary) / 0.12)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Award className="w-3.5 h-3.5 text-primary" />
                      <span className="font-mono text-xs syntax-comment">cert[{index}]</span>
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-foreground group-hover:syntax-function transition-colors mb-1">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs syntax-string">"{cert.issuer}"</p>
                  </div>
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

export default CertificationsSection;
