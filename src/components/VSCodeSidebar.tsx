import { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, FileCode, FolderOpen, Folder, Settings, FileText, GitBranch, AlertCircle, PanelLeftClose, PanelLeft, Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  href?: string;
  children?: FileNode[];
  defaultOpen?: boolean;
}

const fileTree: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    defaultOpen: true,
    children: [
      {
        name: 'about',
        type: 'folder',
        defaultOpen: true,
        children: [
          { name: 'about-me.tsx', type: 'file', href: '#about' },
        ],
      },
      { name: 'contact.tsx', type: 'file', href: '#contact' },
      {
        name: 'projects',
        type: 'folder',
        children: [
          { name: 'index.tsx', type: 'file', href: '#projects' },
        ],
      },
      {
        name: 'code',
        type: 'folder',
        children: [
          { name: 'skills.tsx', type: 'file', href: '#skills' },
          { name: 'experience.tsx', type: 'file', href: '#experience' },
          { name: 'education.tsx', type: 'file', href: '#education' },
          { name: 'certifications.tsx', type: 'file', href: '#certifications' },
        ],
      },
    ],
  },
  { name: 'info.git', type: 'file' },
  { name: 'README.md', type: 'file', href: '#' },
];

const themes = [
  { id: 'default', name: 'Dark+ (Default)', color: '207 90% 61%' },
  { id: 'monokai', name: 'Monokai', color: '80 76% 53%' },
  { id: 'light', name: 'Light+', color: '207 90% 45%' },
  { id: 'github-dark', name: 'GitHub Dark', color: '212 92% 62%' },
];

const getFileIcon = (name: string) => {
  if (name.endsWith('.tsx')) return <FileCode className="w-4 h-4 text-primary" />;
  if (name.endsWith('.git')) return <GitBranch className="w-4 h-4 text-destructive/80" />;
  if (name.endsWith('.md')) return <AlertCircle className="w-4 h-4 text-primary" />;
  return <FileText className="w-4 h-4 text-muted-foreground" />;
};

const FileTreeItem = ({ node, depth = 0, activeHref, onNavigate }: {
  node: FileNode;
  depth?: number;
  activeHref: string;
  onNavigate: (href: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(node.defaultOpen ?? false);
  const isActive = node.href && activeHref === node.href;

  if (node.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-1 py-0.5 px-1 hover:bg-muted/50 transition-colors text-sm font-mono"
          style={{ paddingLeft: `${depth * 16 + 4}px` }}
        >
          {isOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />}
          {isOpen ? <FolderOpen className="w-4 h-4 text-[hsl(var(--syntax-function))] shrink-0" /> : <Folder className="w-4 h-4 text-[hsl(var(--syntax-function))] shrink-0" />}
          <span className="text-foreground ml-1 truncate">{node.name}</span>
        </button>
        <AnimatePresence>
          {isOpen && node.children && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden"
            >
              {node.children.map((child) => (
                <FileTreeItem
                  key={child.name}
                  node={child}
                  depth={depth + 1}
                  activeHref={activeHref}
                  onNavigate={onNavigate}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <a
      href={node.href || '#'}
      onClick={(e) => {
        if (node.href) {
          e.preventDefault();
          onNavigate(node.href);
        }
      }}
      className={`flex items-center gap-1.5 py-0.5 px-1 text-sm font-mono transition-colors truncate ${
        isActive
          ? 'bg-[hsl(var(--vscode-selection))] text-foreground'
          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
      }`}
      style={{ paddingLeft: `${depth * 16 + 20}px` }}
    >
      {getFileIcon(node.name)}
      <span className="truncate">{node.name}</span>
    </a>
  );
};

const VSCodeSidebar = ({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) => {
  const [activeHref, setActiveHref] = useState('#');
  const [activeIcon, setActiveIcon] = useState<'explorer' | 'settings'>('explorer');
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('vscode-theme') || 'default';
  });

  useEffect(() => {
    if (currentTheme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
    localStorage.setItem('vscode-theme', currentTheme);
  }, [currentTheme]);

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden xl:flex h-screen sticky top-0 z-50 shrink-0">
      {/* Activity Bar */}
      <div className="w-12 flex flex-col items-center py-2 gap-2 border-r border-border" style={{ background: 'hsl(var(--vscode-titlebar))' }}>
        <button
          onClick={() => { setActiveIcon('explorer'); if (collapsed) onToggle(); }}
          className={`w-10 h-10 flex items-center justify-center transition-colors rounded-sm ${
            activeIcon === 'explorer' && !collapsed ? 'text-foreground border-l-2 border-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          title="Explorer"
        >
          <FileText className="w-5 h-5" />
        </button>
        <button
          onClick={() => { setActiveIcon('settings'); if (collapsed) onToggle(); }}
          className={`w-10 h-10 flex items-center justify-center transition-colors rounded-sm ${
            activeIcon === 'settings' && !collapsed ? 'text-foreground border-l-2 border-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>

        <div className="flex-1" />

        <button
          onClick={onToggle}
          className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-sm"
          title={collapsed ? 'Show sidebar' : 'Hide sidebar'}
        >
          {collapsed ? <PanelLeft className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 208, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col border-r border-border overflow-hidden"
            style={{ background: 'hsl(var(--vscode-sidebar))' }}
          >
            {activeIcon === 'explorer' ? (
              <>
                <div className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Explorer
                </div>
                <div className="flex-1 overflow-y-auto py-1">
                  {fileTree.map((node) => (
                    <FileTreeItem
                      key={node.name}
                      node={node}
                      activeHref={activeHref}
                      onNavigate={handleNavigate}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Settings
                </div>
                <div className="flex-1 overflow-y-auto py-2 px-3">
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 mb-3 text-xs font-mono text-muted-foreground">
                      <Palette className="w-3.5 h-3.5" />
                      Color Theme
                    </div>
                    <div className="space-y-1">
                      {themes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => setCurrentTheme(theme.id)}
                          className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-sm text-xs font-mono transition-colors ${
                            currentTheme === theme.id
                              ? 'bg-[hsl(var(--vscode-selection))] text-foreground'
                              : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full shrink-0 border border-border"
                            style={{ background: `hsl(${theme.color})` }}
                          />
                          <span className="truncate">{theme.name}</span>
                          {currentTheme === theme.id && <Check className="w-3 h-3 ml-auto shrink-0 text-primary" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default VSCodeSidebar;
