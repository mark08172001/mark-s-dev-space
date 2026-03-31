import { Mail, Phone, Download, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  { icon: Mail, title: 'Email', content: 'permisonmark17@gmail.com', href: 'mailto:permisonmark17@gmail.com', isLink: true },
  { icon: Phone, title: 'Mobile', content: '+63 966 081 6499', href: 'tel:09660816499', isLink: true },
  { icon: MapPin, title: 'Location', content: 'Philippines', isLink: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
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
              <span className="syntax-comment">{'// section: contact'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="syntax-keyword">async function</span>{' '}
              <span className="syntax-function">contactMe</span>
              <span className="text-foreground">() {'{'}</span>
            </h2>
          </motion.div>

          {/* Terminal-style contact panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            <div className="vscode-panel rounded-sm overflow-hidden mb-6">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border" style={{ background: 'hsl(var(--vscode-terminal))' }}>
                <span className="font-mono text-xs text-muted-foreground">TERMINAL</span>
                <span className="font-mono text-xs text-muted-foreground ml-auto">bash</span>
              </div>

              <div className="p-5 space-y-3 font-mono text-sm" style={{ background: 'hsl(var(--vscode-terminal))' }}>
                <div className="syntax-comment">$ cat contact_info.json</div>
                <div className="text-foreground">{'{'}</div>
                {contactItems.map((item) => (
                  <div key={item.title} className="ml-4">
                    <span className="syntax-variable">"{item.title.toLowerCase()}"</span>
                    <span className="syntax-operator">: </span>
                    {item.isLink ? (
                      <a href={item.href} className="syntax-string hover:underline">"{item.content}"</a>
                    ) : (
                      <span className="syntax-string">"{item.content}"</span>
                    )}
                    <span className="text-foreground">,</span>
                  </div>
                ))}
                <div className="text-foreground">{'}'}</div>
                <div className="mt-2 flex items-center">
                  <span className="syntax-string">$ </span>
                  <span className="w-2 h-4 bg-foreground animate-blink inline-block ml-1" />
                </div>
              </div>
            </div>

            {/* Contact cards + Resume */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  className="vscode-panel rounded-sm p-5 text-center"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 30px hsl(var(--primary) / 0.12)'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="font-mono text-sm font-semibold mb-1">{item.title}</h3>
                  {item.isLink ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-xs font-mono break-all">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-xs font-mono">{item.content}</p>
                  )}
                </motion.div>
              ))}

              {/* Resume Download */}
              <motion.a
                href="/Resume_Permison_Mark_TJ.pdf"
                download
                variants={cardVariants}
                className="vscode-panel rounded-sm p-5 text-center hover:border-primary/50 transition-colors group"
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px hsl(var(--primary) / 0.12)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <Download className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
                <h3 className="font-mono text-sm font-semibold mb-1">Resume</h3>
                <span className="text-muted-foreground text-xs font-mono">download.pdf</span>
              </motion.a>
            </div>
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

export default ContactSection;
