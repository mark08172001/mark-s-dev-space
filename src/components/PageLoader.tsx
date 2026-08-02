import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  { text: '> initializing portfolio...', delay: 0.1 },
  { text: '> loading profile.tsx', delay: 0.5 },
  { text: '> compiling experience & skills', delay: 0.9 },
  { text: '> build complete ✓', delay: 1.35 },
];

const PageLoader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => setDone(true), 2000);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = '';
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'hsl(var(--vscode-titlebar, var(--background)))' }}
        >
          {/* soft glow */}
          <motion.div
            className="absolute w-[520px] h-[520px] rounded-full blur-3xl"
            style={{ background: 'hsl(var(--primary) / 0.12)' }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative font-mono text-center px-6"
          >
            <div className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
              <span className="syntax-keyword">const</span>{' '}
              <span className="syntax-variable">mark</span>{' '}
              <span className="text-foreground">=</span>{' '}
              <span className="syntax-string">"loading"</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >
                _
              </motion.span>
            </div>

            <div className="space-y-1 text-xs md:text-sm text-left min-h-[92px]">
              {lines.map((l) => (
                <motion.div
                  key={l.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: l.delay, duration: 0.35 }}
                  className="syntax-comment"
                >
                  {l.text}
                </motion.div>
              ))}
            </div>

            {/* progress bar */}
            <div className="mt-6 h-[2px] w-56 md:w-72 mx-auto bg-border overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.9, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
