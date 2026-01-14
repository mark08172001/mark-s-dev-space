import { Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="font-mono text-sm">
              <span className="text-primary">&lt;</span>
              <span className="font-medium">Mark</span>
              <span className="text-primary">/&gt;</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {currentYear} Mark TJ T. Permison
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            <a href="#about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;