import { useState } from 'react';
import { ChevronRight, ChevronDown, FileCode, FolderOpen, Folder, Settings, FileText, GitBranch, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  icon?: string;
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

const VSCodeSidebar = () => {
  const [activeHref, setActiveHref] = useState('#');
  const [activeIcon, setActiveIcon] = useState<'explorer' | 'settings'>('explorer');

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden xl:flex h-screen sticky top-0 z-40 shrink-0">
      {/* Activity Bar */}
      <div className="w-12 flex flex-col items-center py-2 gap-2 border-r border-border" style={{ background: 'hsl(var(--vscode-titlebar))' }}>
        <button
          onClick={() => setActiveIcon('explorer')}
          className={`w-10 h-10 flex items-center justify-center transition-colors rounded-sm ${
            activeIcon === 'explorer' ? 'text-foreground border-l-2 border-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <FileText className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveIcon('settings')}
          className={`w-10 h-10 flex items-center justify-center transition-colors rounded-sm ${
            activeIcon === 'settings' ? 'text-foreground border-l-2 border-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Sidebar Panel */}
      <div className="w-52 flex flex-col border-r border-border overflow-hidden" style={{ background: 'hsl(var(--vscode-sidebar))' }}>
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
      </div>
    </aside>
  );
};

export default VSCodeSidebar;
