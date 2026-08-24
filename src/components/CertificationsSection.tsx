import { Award, Cloud, Shield, Network, Code, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import BorderGlow from './BorderGlow';

const certifications = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'TESDA',
    icon: Cloud,
    glowColor: '210 90 70',
    colors: ['#38bdf8', '#818cf8', '#6366f1'],
    description: 'Foundational knowledge of machine learning and AI concepts and related Microsoft Azure services.',
  },
  {
    title: 'Microsoft Cybersecurity Fundamentals',
    issuer: 'TESDA',
    icon: Shield,
    glowColor: '350 85 70',
    colors: ['#f43f5e', '#fb7185', '#e11d48'],
    description: 'Fundamental security, compliance, and identity concepts across cloud-based and related Microsoft services.',
  },
  {
    title: 'Networking & Server Setup',
    issuer: 'TESDA',
    icon: Network,
    glowColor: '150 80 70',
    colors: ['#10b981', '#34d399', '#059669'],
    description: 'Configuring network infrastructure, server roles, IP routing, subnetting, and system security protocols.',
  },
  {
    title: 'CSS & Web Development',
    issuer: 'TESDA',
    icon: Code,
    glowColor: '280 80 70',
    colors: ['#c084fc', '#a855f7', '#7c3aed'],
    description: 'Responsive frontend development, CSS3 architecture, UI design standards, and semantic web layouts.',
  },
  {
    title: 'Computer Systems & Network Maintenance',
    issuer: 'TESDA',
    icon: Monitor,
    glowColor: '45 90 70',
    colors: ['#f59e0b', '#fbbf24', '#d97706'],
    description: 'Diagnostics, hardware troubleshooting, operating system deployment, and preventive maintenance.',
  },
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group"
                >
                  <BorderGlow
                    borderRadius={12}
                    glowRadius={28}
                    glowIntensity={0.9}
                    glowColor={cert.glowColor}
                    colors={cert.colors}
                    backgroundColor="hsl(var(--card))"
                    className="w-full h-full"
                  >
                    <div className="p-5 flex flex-col justify-between h-full w-full">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-mono text-xs syntax-comment">cert[{index}]</span>
                        </div>
                        <h3 className="font-mono text-sm font-semibold text-foreground group-hover:syntax-function transition-colors mb-1">
                          {cert.title}
                        </h3>
                        <p className="font-mono text-xs syntax-string mb-3">"{cert.issuer}"</p>
                      </div>

                      <p className="text-muted-foreground text-xs leading-relaxed pt-2 border-t border-border/60">
                        {cert.description}
                      </p>
                    </div>
                  </BorderGlow>
                </motion.div>
              );
            })}
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
