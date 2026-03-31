import { useState, useEffect } from 'react';
import { Menu, X, FileCode, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'about.tsx', href: '#about', icon: '📄' },
  { name: 'experience.tsx', href: '#experience', icon: '📄' },
  { name: 'skills.tsx', href: '#skills', icon: '📄' },
  { name: 'projects.tsx', href: '#projects', icon: '📄' },
  { name: 'education.tsx', href: '#education', icon: '📄' },
  { name: 'certifications.tsx', href: '#certifications', icon: '📄' },
  { name: 'contact.tsx', href: '#contact', icon: '📄' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveTab(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Title Bar */}
      <div className="h-8 flex items-center px-4 text-xs font-mono"
        style={{ background: 'hsl(var(--vscode-titlebar))' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(var(--syntax-function))' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: 'hsl(var(--syntax-string))' }} />
          </div>
          <span className="text-muted-foreground ml-2 hidden sm:inline">
            Mark Permison — portfolio — Visual Studio Code
          </span>
        </div>
      </div>

      {/* Tab Bar */}
      <div className={`flex items-center overflow-x-auto transition-all border-b border-border ${scrolled ? 'shadow-lg' : ''}`}
        style={{ background: 'hsl(var(--vscode-tab-inactive))' }}
      >
        {/* Explorer icon */}
        <a href="#" className="px-3 py-2 flex items-center gap-1.5 shrink-0 border-r border-border" 
          style={{ background: 'hsl(var(--vscode-tab-active))' }}
        >
          <FileCode className="w-4 h-4 text-primary" />
          <span className="font-mono text-xs text-foreground hidden sm:inline">index.tsx</span>
        </a>
        
        {/* Desktop Tabs */}
        <div className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`vscode-tab flex items-center gap-1.5 shrink-0 ${
                activeTab === link.href.replace('#', '') ? 'active' : ''
              }`}
            >
              <span className="text-xs">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden ml-auto p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Breadcrumb */}
      <motion.div
        initial={false}
        animate={{ opacity: scrolled ? 1 : 0, height: scrolled ? 24 : 0 }}
        className="breadcrumb px-4 flex items-center gap-1 overflow-hidden border-b border-border"
        style={{ background: 'hsl(var(--vscode-editor))' }}
      >
        <span>src</span>
        <ChevronRight className="w-3 h-3" />
        <span>portfolio</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground">{activeTab || 'index'}.tsx</span>
      </motion.div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-b border-border" style={{ background: 'hsl(var(--vscode-sidebar))' }}>
          <div className="flex flex-col py-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-2 transition-colors"
              >
                <span>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
