import { Suspense, lazy, Component } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';
import BorderGlow from './BorderGlow';

// Deterministic barcode bar widths
const barcodeBars = [1, 3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 2, 1, 1, 3, 1, 2, 2, 4, 1, 3, 1, 1, 2, 3, 1, 4, 1, 2, 1, 1, 3, 2, 4, 1, 2];

// Lazy load the heavy 3D Lanyard component
const Lanyard = lazy(() => import('./Lanyard'));


// Error boundary to catch 3D rendering crashes without breaking the whole site
class LanyardErrorBoundary extends Component<{ fallback: React.ReactNode; children: React.ReactNode }, { hasError: boolean; error?: Error }> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Lanyard 3D failed to load:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-red-500">
          <p className="font-bold">3D Rendering Error</p>
          <pre className="text-xs max-w-full overflow-auto mt-2 p-2 bg-black/50 rounded">
            {this.state.error?.message}
          </pre>
          <div className="mt-4">{this.props.fallback}</div>
        </div>
      );
    }
    return this.props.children;
  }
}

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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content - Code editor style */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              {/* Code block wrapper with BorderGlow */}
              <BorderGlow
                borderRadius={12}
                glowRadius={30}
                glowIntensity={1.0}
                glowColor="210 90 70"
                colors={['#38bdf8', '#818cf8', '#c084fc']}
                backgroundColor="hsl(var(--card))"
                className="w-full shadow-2xl"
              >
                <div className="w-full">
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
                      <span className="ml-6"><span className="syntax-variable">role</span>: <span className="syntax-string">"Full Stack Developer | QA Tester"</span>,</span>
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
              </BorderGlow>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 mt-6"
              >
                <motion.a
                  href="#projects"
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-sm font-mono text-sm formal-button hover:bg-primary/90 transition-all text-center shadow-lg hover:shadow-primary/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {'>'} view_projects()
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-2.5 bg-card border border-border text-foreground rounded-sm font-mono text-sm hover:bg-muted transition-all text-center shadow-md"
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

            {/* 3D Interactive Lanyard Profile Badge - lives inside the hero, scrolls with it; on desktop it overlays the whole hero so the badge can roam the right side */}
            <div className="order-1 lg:order-2 max-lg:relative h-[420px] md:h-[520px] w-full lg:absolute lg:inset-0 lg:h-auto lg:pointer-events-none lg:z-20">
              <LanyardErrorBoundary fallback={null}>
                <Suspense fallback={null}>
                  <Lanyard
                    position={[0, 0, 20]}
                    gravity={[0, -40, 0]}
                  >
                    <BorderGlow
                      borderRadius={18}
                      glowRadius={35}
                      glowIntensity={1.0}
                      glowColor="210 90 70"
                      colors={['#38bdf8', '#818cf8', '#c084fc']}
                      backgroundColor="hsl(var(--card) / 0.7)"
                      className="w-[340px] md:w-[400px] h-[480px] md:h-[540px] shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col mx-auto"
                    >
                      {/* Badge top status bar */}
                      <div className="flex items-center justify-between px-4 py-2 border-b border-border/80 bg-muted/40 z-10 shrink-0">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="font-mono text-xs text-foreground font-semibold">Mark_TJ.badge</span>
                        </div>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                          <Sparkles className="w-2.5 h-2.5" /> 3D Physics
                        </span>
                      </div>

                      {/* Profile Image */}
                      <div className="flex-1 w-full relative flex flex-col items-center justify-center gap-3 p-5">
                        <img
                          src={profilePhoto}
                          alt="Mark TJ T. Permison"
                          className="w-40 h-40 md:w-44 md:h-44 rounded-2xl object-cover border-2 border-primary/30 shadow-xl"
                          style={{ pointerEvents: 'none' }}
                        />
                        <div className="text-center">
                          <p className="font-mono text-sm text-foreground font-semibold">Mark TJ T. Permison</p>
                          <p className="font-mono text-[11px] text-primary mt-0.5">
                            Full Stack Developer | QA Tester
                          </p>
                        </div>

                        {/* Barcode */}
                        <div className="w-full px-4 mt-1">
                          <div className="flex items-end justify-center gap-[2px] h-10 bg-white rounded-sm px-3 py-1.5">
                            {barcodeBars.map((w, i) => (
                              <span
                                key={i}
                                className="h-full bg-black"
                                style={{ width: `${w}px` }}
                              />
                            ))}
                          </div>
                          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground text-center mt-1">
                            MTJP-2026-0917
                          </p>
                        </div>
                      </div>

                      {/* Badge bottom hint */}
                      <div className="py-2 px-3 text-center border-t border-border/60 bg-muted/30 z-10 shrink-0">
                        <span className="font-mono text-[11px] text-muted-foreground">
                          ✦ Drag &amp; swing 3D ID badge
                        </span>
                      </div>
                    </BorderGlow>
                  </Lanyard>
                </Suspense>
              </LanyardErrorBoundary>
            </div>

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
