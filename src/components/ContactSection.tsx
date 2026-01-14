import { Mail, Phone, Download, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    content: 'permisonmark17@gmail.com',
    href: 'mailto:permisonmark17@gmail.com',
    isLink: true,
  },
  {
    icon: Phone,
    title: 'Mobile',
    content: '+63 966 081 6499',
    href: 'tel:09660816499',
    isLink: true,
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Philippines',
    isLink: false,
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
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
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="glass-card p-6 text-center"
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 15px 40px hsl(var(--primary) / 0.12)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                {item.isLink ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all pr-2"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.content}</p>
                )}
              </motion.div>
            ))}

            {/* Resume Download */}
            <motion.a
              href="/Resume_Permison_Mark_TJ.pdf"
              download
              variants={cardVariants}
              className="glass-card p-6 text-center hover:border-primary/50 transition-colors group"
              whileHover={{ 
                y: -8,
                boxShadow: '0 15px 40px hsl(var(--primary) / 0.12)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.div>
              <h3 className="font-semibold mb-2">Resume</h3>
              <span className="text-muted-foreground text-sm">Download PDF</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
