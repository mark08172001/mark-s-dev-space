import { Mail, Phone, Download, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import BorderGlow from './BorderGlow';
import GlassIcons, { GlassIconsItem } from './GlassIcons';

const glassContactItems: GlassIconsItem[] = [
  { icon: <Mail />, label: 'Email', href: 'mailto:permisonmark17@gmail.com' },
  { icon: <Phone />, label: 'Mobile', href: 'tel:09660816499' },
  { icon: <Github />, label: 'GitHub', href: 'https://github.com/mark08172001' },
  { icon: <Linkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mark-tj-permison-130341316/' },
  { icon: <Download />, label: 'Resume', href: '/Resume_Permison_Mark_TJ.pdf', download: true },
  { icon: <MapPin />, label: 'Location' },
];

const contactItems = [
  { title: 'Email', content: 'permisonmark17@gmail.com', href: 'mailto:permisonmark17@gmail.com', isLink: true },
  { title: 'Mobile', content: '+63 966 081 6499', href: 'tel:09660816499', isLink: true },
  { title: 'Location', content: 'Philippines', isLink: false },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-visible">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="font-mono text-sm mb-2 flex items-center gap-2">
              <span className="syntax-comment">{'// section: contact'}</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-3 h-3" /> React Bits GlassIcons
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="syntax-keyword">async function</span>{' '}
              <span className="syntax-function">contactMe</span>
              <span className="text-foreground">() {'{'}</span>
            </h2>
          </motion.div>

          {/* Terminal-style contact panel with BorderGlow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <BorderGlow
              borderRadius={12}
              glowRadius={30}
              glowIntensity={1.0}
              glowColor="210 90 70"
              colors={['#38bdf8', '#818cf8', '#c084fc']}
              backgroundColor="hsl(var(--vscode-terminal))"
              className="w-full shadow-2xl"
            >
              <div className="w-full">
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
            </BorderGlow>
          </motion.div>

          {/* Compact Single-Color 3D GlassIcons with Visible Labels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BorderGlow
              borderRadius={14}
              glowRadius={28}
              glowIntensity={0.85}
              glowColor="210 90 70"
              colors={['#38bdf8', '#818cf8', '#c084fc']}
              backgroundColor="hsl(var(--card))"
              className="w-full shadow-xl"
            >
              <div className="p-6 md:p-8 w-full">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
                  <span className="font-mono text-xs text-foreground font-semibold">
                    {'// quick_connect'}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    Click to Open
                  </span>
                </div>

                <GlassIcons
                  items={glassContactItems}
                  defaultColor="primary"
                  className="w-full max-w-3xl mx-auto"
                />
              </div>
            </BorderGlow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm mt-10 text-foreground"
          >
            {'}'};
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
