import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash, Terminal, Award, FolderGit2, Mail, ExternalLink, FileText, ArrowRight, CornerDownLeft, Sparkles, User, Wrench } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/socials';

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction?: (actionId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Social & Profiles';
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      title: 'Go to Hero / Top',
      category: 'Navigation',
      icon: <Hash className="w-4 h-4 text-[#CCFF00]" />,
      action: () => scrollToSection('hero')
    },
    {
      id: 'nav-about',
      title: 'A Little About Me (PIET, Bio, CGPA 9.4)',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection('about')
    },
    {
      id: 'nav-skills',
      title: 'Technical Arsenal & Skills Taxonomy',
      category: 'Navigation',
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      action: () => scrollToSection('skills')
    },
    {
      id: 'nav-projects',
      title: 'Featured Projects (SkillSwap, Alumni Connect...)',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-[#CCFF00]" />,
      action: () => scrollToSection('projects')
    },
    {
      id: 'nav-achievements',
      title: 'Achievements (Coder of the Year 2x, LeetCode 200d...)',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-yellow-400" />,
      action: () => scrollToSection('achievements')
    },
    {
      id: 'nav-terminal',
      title: 'Open Interactive Developer Terminal (REPL)',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-[#CCFF00]" />,
      action: () => scrollToSection('terminal')
    },
    {
      id: 'nav-journey',
      title: 'The Journey So Far (Interactive Timeline)',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      action: () => scrollToSection('journey')
    },
    {
      id: 'nav-contact',
      title: 'Contact & Collaboration',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => scrollToSection('contact')
    },
    // Actions
    {
      id: 'act-resume',
      title: 'Download / View Resume (PDF)',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-[#CCFF00]" />,
      action: () => {
        onClose();
        window.open(SOCIAL_LINKS.resumePdfUrl, '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'act-email',
      title: `Send Email to ${SOCIAL_LINKS.email}`,
      category: 'Actions',
      icon: <Mail className="w-4 h-4 text-[#CCFF00]" />,
      action: () => {
        onClose();
        window.location.href = `mailto:${SOCIAL_LINKS.email}`;
      }
    },
    // Socials
    {
      id: 'soc-github',
      title: 'View GitHub Profile (@itzpratishtha)',
      category: 'Social & Profiles',
      icon: <ExternalLink className="w-4 h-4 text-white/70" />,
      action: () => {
        onClose();
        window.open(SOCIAL_LINKS.github, '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'soc-linkedin',
      title: 'View LinkedIn Profile (Pratishtha Somani)',
      category: 'Social & Profiles',
      icon: <ExternalLink className="w-4 h-4 text-white/70" />,
      action: () => {
        onClose();
        window.open(SOCIAL_LINKS.linkedin, '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'soc-leetcode',
      title: 'View LeetCode Profile (@itz_pratishtha)',
      category: 'Social & Profiles',
      icon: <ExternalLink className="w-4 h-4 text-white/70" />,
      action: () => {
        onClose();
        window.open(SOCIAL_LINKS.leetcode, '_blank', 'noopener,noreferrer');
      }
    }
  ];

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-xl bg-[#0E1017] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <Search className="w-5 h-5 text-[#CCFF00]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm sm:text-base text-[#F9FAFB] placeholder-[#6B7280] focus:outline-none font-sans"
              />
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 text-[#9CA3AF] border border-white/10">
                ESC
              </span>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 space-y-1 custom-scrollbar">
              {filtered.length === 0 ? (
                <div className="py-10 text-center text-sm text-[#9CA3AF] font-mono">
                  No matching commands found for &quot;{query}&quot;
                </div>
              ) : (
                filtered.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer text-sm transition-colors ${
                        isSelected
                          ? 'bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20'
                          : 'text-[#E5E7EB] hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#CCFF00]/20 text-[#CCFF00]' : 'bg-white/5 text-[#9CA3AF]'}`}>
                          {item.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-medium text-xs sm:text-sm">{item.title}</span>
                          <span className="text-[10px] font-mono text-[#6B7280]">{item.category}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                        {isSelected && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-[#CCFF00]">
                            Select <CornerDownLeft className="w-3 h-3" />
                          </span>
                        )}
                        {!isSelected && <ArrowRight className="w-3.5 h-3.5 opacity-40" />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between px-4 py-2.5 bg-[#08090C] border-t border-white/5 text-[11px] font-mono text-[#6B7280]">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Enter</span>
              </div>
              <span className="text-[#CCFF00]/80">Pratishtha Somani &middot; SDE Portfolio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
