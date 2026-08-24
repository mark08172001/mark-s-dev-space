import { useState, useRef } from 'react';
import { ExternalLink, Leaf, Globe, HeartPulse, Cpu, Layers, LayoutGrid, Sparkles, Code2, PauseCircle, ArrowRightLeft, MousePointerClick } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CardSwap, { Card, CardSwapRef } from './CardSwap';
import BorderGlow from './BorderGlow';

const projects = [
  {
    id: 0,
    title: 'Cordillera Harvest Hub',
    fileName: 'harvest_hub.tsx',
    description: 'Agriculture-focused website for the Cordillera region. Built with modern web technologies featuring user-friendly UI and real-world use case for farmers and agricultural stakeholders.',
    link: 'https://cordillera-harvest-hub.vercel.app/',
    icon: Leaf,
    tags: ['Web Development', 'Agriculture', 'Modern UI'],
    category: 'Fullstack / Agri-Tech',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    glowColor: '150 80 70',
    glowColors: ['#10b981', '#34d399', '#059669'],
  },
  {
    id: 1,
    title: 'Soil Fertility Website',
    fileName: 'soil_fertility.tsx',
    description: 'Informational system focused on soil fertility with clean layout and functional design. Demonstrates frontend development skills and logical structuring capabilities.',
    link: 'https://soilfertility.vercel.app/',
    icon: Globe,
    tags: ['Frontend', 'Information System', 'Clean Design'],
    category: 'Information System',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    glowColor: '190 85 70',
    glowColors: ['#06b6d4', '#38bdf8', '#0284c7'],
  },
  {
    id: 2,
    title: 'BGH Basic Website',
    fileName: 'bgh_records.tsx',
    description: 'A hospital management website with essential CRUD functionalities. Enables hospital staff to manage patient, admission, treatment, and other key records efficiently through intuitive user interfaces.',
    link: 'https://github.com/mark08172001/BGH-Basic-Website.git',
    icon: HeartPulse,
    tags: ['Hospital Management', 'CRUD', 'Web Development'],
    category: 'Healthcare System',
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    glowColor: '350 85 70',
    glowColors: ['#f43f5e', '#fb7185', '#e11d48'],
  },
  {
    id: 3,
    title: 'BuildForge AI',
    fileName: 'buildforge_ai.tsx',
    description: 'Your all-in-one platform for exploring the latest computer parts and building your dream PC or laptop. Set your budget, choose your purpose, and our AI will instantly recommend a complete, compatible list of components.',
    link: 'https://buildforge-ai-beta.vercel.app/',
    icon: Cpu,
    tags: ['AI Recommendation', 'PC Builder', 'Web Development'],
    category: 'AI Platform',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    glowColor: '45 90 70',
    glowColors: ['#f59e0b', '#8b5cf6', '#3b82f6'],
    ongoing: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const ProjectsSection = () => {
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const cardSwapRef = useRef<CardSwapRef>(null);

  const handleManualSwap = () => {
    cardSwapRef.current?.swap();
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'hsl(var(--vscode-sidebar))' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with View Toggle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono text-sm mb-2 flex items-center gap-2">
                <span className="syntax-comment">{'// section: projects'}</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="w-3 h-3" /> React Bits 3D Stack + BorderGlow
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="syntax-keyword">const</span>{' '}
                <span className="syntax-variable">projects</span>{' '}
                <span className="syntax-operator">=</span>{' '}
                <span className="text-foreground">[</span>
              </h2>
            </motion.div>

            {/* View Mode Controls */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-1.5 p-1 rounded-md bg-muted/60 border border-border self-start md:self-auto"
            >
              <button
                onClick={() => setViewMode('stack')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  viewMode === 'stack'
                    ? 'bg-primary text-primary-foreground shadow-sm font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                3D CardSwap
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  viewMode === 'grid'
                    ? 'bg-primary text-primary-foreground shadow-sm font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Grid View
              </button>
            </motion.div>
          </div>

          {/* Interactive CardSwap 3D Deck View */}
          <AnimatePresence mode="wait">
            {viewMode === 'stack' ? (
              <motion.div
                key="stack-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Side: Overview & Interactive Info with BorderGlow */}
                <div className="lg:col-span-5 space-y-6">
                  <BorderGlow
                    borderRadius={12}
                    glowRadius={28}
                    glowIntensity={0.85}
                    glowColor="210 90 70"
                    colors={['#38bdf8', '#818cf8', '#c084fc']}
                    backgroundColor="hsl(var(--card))"
                    className="w-full shadow-xl"
                  >
                    <div className="p-6 space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-border">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-primary" />
                          <span className="font-mono text-xs font-semibold text-foreground">Interactive Showcase</span>
                        </div>
                        <span className="font-mono text-[11px] text-muted-foreground">Click to Swap</span>
                      </div>

                      <div>
                        <h3 className="font-mono text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                          Featured Projects Deck
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Click on any project card in the stack or click a project below to immediately swap to the next card with reactive BorderGlow & 3D animations.
                        </p>
                      </div>

                      {/* Quick navigation & interactive triggers */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between">
                          <div className="font-mono text-xs text-muted-foreground">{'// click project to swap: '}</div>
                          <button
                            onClick={handleManualSwap}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-[11px] font-mono transition-colors"
                          >
                            <ArrowRightLeft className="w-3 h-3" />
                            Swap Card
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {projects.map((p, idx) => (
                            <button
                              key={p.id}
                              onClick={handleManualSwap}
                              className={`px-3 py-2 rounded border font-mono text-xs flex items-center gap-2 transition-all text-left group ${
                                activeCardIndex === idx
                                  ? 'border-primary bg-primary/15 text-foreground shadow-sm shadow-primary/10 font-semibold'
                                  : 'border-border/60 bg-muted/30 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-muted/60'
                              }`}
                            >
                              <span className={`w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${activeCardIndex === idx ? 'bg-primary' : 'bg-muted-foreground/50'}`} />
                              <span className="truncate">{p.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Pro tip / controls note */}
                      <div className="pt-2 flex flex-col gap-1.5 font-mono text-[11px] text-muted-foreground/80">
                        <div className="flex items-center gap-2">
                          <MousePointerClick className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>Clicking any card in the stack triggers an instant swap</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <PauseCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>Hovering over cards pauses auto-swap (4.5s delay)</span>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </div>

                {/* Right Side: CardSwap 3D Animation Container */}
                <div className="lg:col-span-7 flex justify-center items-center relative min-h-[520px] md:min-h-[580px]">
                  <div className="relative w-full h-[540px] flex items-center justify-center">
                    <CardSwap
                      ref={cardSwapRef}
                      width={440}
                      height={400}
                      cardDistance={55}
                      verticalDistance={65}
                      delay={4500}
                      pauseOnHover={true}
                      skewAmount={6}
                      easing="elastic"
                      onCardChange={(frontIdx) => setActiveCardIndex(frontIdx)}
                    >
                      {projects.map((project) => {
                        const IconComponent = project.icon;
                        return (
                          <Card
                            key={project.title}
                            className="w-[440px] h-[400px] rounded-xl overflow-hidden select-none cursor-pointer group p-0 border-0 bg-transparent"
                          >
                            <BorderGlow
                              borderRadius={12}
                              glowRadius={35}
                              glowIntensity={1.2}
                              glowColor={project.glowColor}
                              colors={project.glowColors}
                              backgroundColor="hsl(var(--card))"
                              className="w-full h-full"
                            >
                              <div className="flex flex-col justify-between h-full w-full">
                                {/* Window Titlebar */}
                                <div
                                  className="flex items-center justify-between px-4 py-2.5 border-b border-border shrink-0"
                                  style={{ background: 'hsl(var(--vscode-terminal))' }}
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <span className="font-mono text-xs text-muted-foreground ml-2">
                                      {project.fileName}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity">
                                      click to swap ⤿
                                    </span>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${project.badgeColor}`}>
                                      {project.category}
                                    </span>
                                  </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center justify-between gap-3 mb-2.5">
                                      <div className="flex items-center gap-2.5">
                                        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                          <IconComponent className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-mono text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                          {project.title}
                                        </h3>
                                      </div>
                                      {project.ongoing && (
                                        <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-warning/15 text-warning text-[10px] font-mono border border-warning/30">
                                          <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse" />
                                          ongoing
                                        </span>
                                      )}
                                    </div>

                                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                                      {project.description}
                                    </p>
                                  </div>

                                  <div>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                      {project.tags.map((tag) => (
                                        <span
                                          key={tag}
                                          className="px-2 py-0.5 rounded bg-muted/80 text-muted-foreground text-[11px] font-mono border border-border/80"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono text-xs md:text-sm font-medium hover:bg-primary/90 transition-all w-full shadow-md hover:shadow-primary/25"
                                    >
                                      <span>{'>'} open_demo()</span>
                                      <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </BorderGlow>
                          </Card>
                        );
                      })}
                    </CardSwap>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Full Grid View with BorderGlow */
              <motion.div
                key="grid-view"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={projectVariants}
                    className="group"
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <BorderGlow
                      borderRadius={12}
                      glowRadius={35}
                      glowIntensity={1.1}
                      glowColor={project.glowColor}
                      colors={project.glowColors}
                      backgroundColor="hsl(var(--card))"
                      className="w-full h-full"
                    >
                      <div className="flex flex-col h-full w-full">
                        {/* Terminal Header */}
                        <div
                          className="flex items-center justify-between px-4 py-2 border-b border-border"
                          style={{ background: 'hsl(var(--vscode-terminal))' }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="font-mono text-xs text-muted-foreground">project_{index}.tsx</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${project.badgeColor}`}>
                            {project.category}
                          </span>
                        </div>

                        {/* Icon Area */}
                        <div
                          className="h-32 flex items-center justify-center relative"
                          style={{ background: 'hsl(var(--vscode-terminal))' }}
                        >
                          <motion.div
                            className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <project.icon className="w-7 h-7 text-primary" />
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="font-mono text-xs syntax-comment mb-2">
                              {'// '}{project.title.toLowerCase().replace(/ /g, '_')}
                            </div>
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="font-mono text-lg font-bold syntax-function group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              {project.ongoing && (
                                <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-warning/15 text-warning text-[10px] font-mono border border-warning/30">
                                  <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse" />
                                  ongoing
                                </span>
                              )}
                            </div>
                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                          </div>

                          <div>
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs font-mono border border-border"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* CTA Button */}
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-md font-mono text-sm hover:bg-primary/90 transition-all w-full justify-center shadow-md"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {'>'} open_demo()
                              <ExternalLink className="w-3.5 h-3.5" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </BorderGlow>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm mt-10 text-foreground"
          >
            ];
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
