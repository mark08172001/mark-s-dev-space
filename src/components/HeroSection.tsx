import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Code rain background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-primary whitespace-nowrap"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: '120vh', opacity: [0, 0.8, 0] }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',
            }}
            style={{ left: `${i * 5}%`, fontSize: `${8 + Math.random() * 4}px` }}
          >
            {['const', 'function', 'return', 'import', 'export', 'async', 'await', 'class', '{ }', '=> {', '</>', 'npm', 'git', 'dev'][i % 14]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content - Code editor style */}
            <div className="order-2 lg:order-1">
              {/* Code block wrapper */}
              <div className="vscode-panel rounded-sm overflow-hidden">
                {/* Editor tab */}
                <div className="flex items-center border-b border-border" style={{ background: 'hsl(var(--vscode-tab-inactive))' }}>
                  <div className="vscode-tab active text-xs">developer.tsx</div>
                </div>

                {/* Code content */}
                <div className="p-4 md:p-6 font-mono text-sm space-y-1">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="code-line">
                    <span className="line-number">1</span>
                    <span><span className="syntax-keyword">const</span> <span className="syntax-variable">developer</span> <span className="syntax-operator">=</span> {'{'}</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="code-line">
                    <span className="line-number">2</span>
                    <span className="ml-6"><span className="syntax-variable">name</span>: <span className="syntax-string">"Mark TJ T. Permison"</span>,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="code-line">
                    <span className="line-number">3</span>
                    <span className="ml-6"><span className="syntax-variable">role</span>: <span className="syntax-string">"Full Stack Developer"</span>,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="code-line">
                    <span className="line-number">4</span>
                    <span className="ml-6"><span className="syntax-variable">experience</span>: <span className="syntax-string">"9+ months"</span>,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="code-line">
                    <span className="line-number">5</span>
                    <span className="ml-6"><span className="syntax-variable">status</span>: <span className="syntax-string">"Available for opportunities"</span>,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="code-line">
                    <span className="line-number">6</span>
                    <span className="ml-6"><span className="syntax-variable">passion</span>: <span className="syntax-string">"Building elegant solutions"</span>,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="code-line">
                    <span className="line-number">7</span>
                    <span>{'}'};</span>
                  </motion.div>

                  {/* Blinking cursor */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="code-line">
                    <span className="line-number">8</span>
                    <span className="w-2 h-4 bg-foreground animate-blink inline-block" />
                  </motion.div>
                </div>
              </div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 mt-6"
              >
                <motion.a
                  href="#projects"
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-sm font-mono text-sm formal-button hover:bg-primary/90 transition-all text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {'>'} view_projects()
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-2.5 bg-card border border-border text-foreground rounded-sm font-mono text-sm hover:bg-muted transition-all text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {'>'} contact_me()
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2 mt-4"
              >
                {[
                  { href: 'mailto:permisonmark17@gmail.com', icon: Mail },
                  { href: 'https://github.com/mark08172001', icon: Github, external: true },
                  { href: 'https://www.linkedin.com/in/mark-tj-permison-130341316/', icon: Linkedin, external: true },
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className="w-9 h-9 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 lg:order-2"
            >
              <div className="relative">
                {/* Terminal-style frame */}
                <div className="vscode-panel rounded-sm overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border" style={{ background: 'hsl(var(--vscode-tab-inactive))' }}>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(var(--syntax-function))' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(var(--syntax-string))' }} />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">profile.jpg</span>
                  </div>
                  <motion.div
                    className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
                    animate={{
                      boxShadow: [
                        '0 0 20px hsl(var(--primary) / 0.1)',
                        '0 0 40px hsl(var(--primary) / 0.2)',
                        '0 0 20px hsl(var(--primary) / 0.1)',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <img
                      src={profilePhoto}
                      alt="Mark TJ T. Permison"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-xs"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>scroll_down()</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
