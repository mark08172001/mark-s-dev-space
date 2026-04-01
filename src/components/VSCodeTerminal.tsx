import { useState, useEffect, useRef } from 'react';
import { Terminal, X, ChevronUp, ChevronDown, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalLines = [
  { type: 'info', text: '> portfolio@1.0.0 dev', delay: 0 },
  { type: 'info', text: '> vite', delay: 300 },
  { type: 'success', text: '', delay: 600 },
  { type: 'success', text: '  VITE v5.0.0  ready in 234 ms', delay: 800 },
  { type: 'info', text: '', delay: 1000 },
  { type: 'info', text: '  ➜  Local:   http://localhost:5173/', delay: 1200 },
  { type: 'info', text: '  ➜  Network: http://192.168.1.42:5173/', delay: 1400 },
  { type: 'success', text: '  ➜  press h + enter to show help', delay: 1600 },
  { type: 'info', text: '', delay: 1800 },
  { type: 'system', text: '[HMR] connected.', delay: 2200 },
  { type: 'success', text: '✓ All components loaded successfully.', delay: 2800 },
  { type: 'system', text: `[${new Date().toLocaleTimeString()}] Page reload — portfolio/index.tsx`, delay: 3400 },
];

const VSCodeTerminal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || isMinimized) return;
    
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines(i + 1);
      }, line.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-[hsl(var(--syntax-string))]';
      case 'system': return 'text-[hsl(var(--syntax-variable))]';
      case 'error': return 'text-destructive';
      default: return 'text-foreground';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-7 right-4 z-40 flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-t-sm border border-b-0 border-border transition-colors hover:bg-muted/50"
        style={{ background: 'hsl(var(--vscode-terminal))' }}
      >
        <Terminal className="w-3.5 h-3.5" />
        Terminal
      </button>
    );
  }

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isMinimized ? 32 : 180 }}
      transition={{ duration: 0.2 }}
      className="border-t border-border flex flex-col shrink-0"
      style={{ background: 'hsl(var(--vscode-terminal))' }}
    >
      {/* Terminal Header */}
      <div className="h-8 flex items-center justify-between px-3 border-b border-border shrink-0" style={{ background: 'hsl(var(--vscode-titlebar))' }}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-foreground flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            TERMINAL
          </span>
          <span className="text-xs font-mono text-muted-foreground">bash</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-0.5 text-muted-foreground hover:text-foreground transition-colors">
            {isMinimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          <button onClick={() => setIsMinimized(true)} className="p-0.5 text-muted-foreground hover:text-foreground transition-colors">
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setIsOpen(false)} className="p-0.5 text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      {!isMinimized && (
        <div ref={terminalRef} className="flex-1 overflow-y-auto p-3 font-mono text-xs leading-5">
          <AnimatePresence>
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`${getLineColor(line.type)} whitespace-pre`}
              >
                {line.text || '\u00A0'}
              </motion.div>
            ))}
          </AnimatePresence>
          {visibleLines >= terminalLines.length && (
            <div className="flex items-center text-foreground mt-1">
              <span className="text-[hsl(var(--syntax-string))]">➜</span>
              <span className="text-[hsl(var(--syntax-variable))] ml-2">~/portfolio</span>
              <span className="ml-2 animate-blink">▋</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default VSCodeTerminal;
