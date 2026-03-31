import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="vscode-statusbar">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-6 text-xs font-mono">
          {/* Left side - branch info */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z" />
              </svg>
              main
            </span>
            <span className="hidden sm:inline">© {currentYear} Mark TJ T. Permison</span>
          </div>

          {/* Right side - social links */}
          <div className="flex items-center gap-3">
            <a href="mailto:permisonmark17@gmail.com" className="hover:text-white/80 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">mail</span>
            </a>
            <a href="https://github.com/mark08172001" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1">
              <Github className="w-3 h-3" />
              <span className="hidden sm:inline">github</span>
            </a>
            <a href="https://www.linkedin.com/in/mark-tj-permison-130341316/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors flex items-center gap-1">
              <Linkedin className="w-3 h-3" />
              <span className="hidden sm:inline">linkedin</span>
            </a>
            <span className="hidden md:inline text-white/60">TypeScript React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
