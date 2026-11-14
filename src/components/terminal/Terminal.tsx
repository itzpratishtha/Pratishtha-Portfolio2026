import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { SOCIAL_LINKS } from '../../data/socials';
import { PROJECTS } from '../../data/projects';
import { CERTIFICATIONS } from '../../data/achievements';
import { SKILL_CATEGORIES } from '../../data/skills';

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'whoami',
      output: (
        <div className="space-y-1">
          <p className="text-[#CCFF00] font-bold">Pratishtha Somani</p>
          <p className="text-[#9CA3AF]">Computer Science Engineering Student &middot; Aspiring Software Development Engineer</p>
          <p className="text-[#6B7280]">Institution: {SOCIAL_LINKS.college} (CGPA: {SOCIAL_LINKS.cgpa})</p>
          <p className="text-[#D1D5DB] italic">&ldquo;{SOCIAL_LINKS.philosophy}&rdquo;</p>
        </div>
      )
    },
    {
      id: 'init-2',
      command: 'help',
      output: (
        <div className="text-xs space-y-1 text-[#9CA3AF]">
          <p className="text-white/80 mb-2">Available system commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            <div><span className="text-[#CCFF00] font-semibold">whoami</span> — Identity, role, and summary</div>
            <div><span className="text-[#CCFF00] font-semibold">about</span> — Background &amp; engineering interests</div>
            <div><span className="text-[#CCFF00] font-semibold">skills</span> — Full taxonomy of technical proficiencies</div>
            <div><span className="text-[#CCFF00] font-semibold">projects</span> — Featured systems &amp; live deployments</div>
            <div><span className="text-[#CCFF00] font-semibold">achievements</span> — Coder of the Year (2x), LeetCode 200d</div>
            <div><span className="text-[#CCFF00] font-semibold">education</span> — Collegiate credentials &amp; degree</div>
            <div><span className="text-[#CCFF00] font-semibold">contact</span> — Reach out via email, GitHub, LinkedIn</div>
            <div><span className="text-[#CCFF00] font-semibold">clear</span> — Flush console screen buffer</div>
          </div>
        </div>
      )
    }
  ]);

  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((prev) => [...prev, cmdText.trim()]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="text-xs space-y-1 text-[#9CA3AF]">
            <p className="text-white/80 mb-2">Available system commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              <div><span className="text-[#CCFF00] font-semibold">whoami</span> — Identity, role, and summary</div>
              <div><span className="text-[#CCFF00] font-semibold">about</span> — Background &amp; engineering interests</div>
              <div><span className="text-[#CCFF00] font-semibold">skills</span> — Full taxonomy of technical proficiencies</div>
              <div><span className="text-[#CCFF00] font-semibold">projects</span> — Featured systems &amp; live deployments</div>
              <div><span className="text-[#CCFF00] font-semibold">achievements</span> — Coder of the Year (2x), LeetCode 200d</div>
              <div><span className="text-[#CCFF00] font-semibold">education</span> — Collegiate credentials &amp; degree</div>
              <div><span className="text-[#CCFF00] font-semibold">contact</span> — Reach out via email, GitHub, LinkedIn</div>
              <div><span className="text-[#CCFF00] font-semibold">clear</span> — Flush console screen buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-[#CCFF00] font-bold text-sm">Pratishtha Somani</p>
            <p className="text-[#F3F4F6]">{SOCIAL_LINKS.title}</p>
            <p className="text-[#9CA3AF]">Institution: {SOCIAL_LINKS.college} (CGPA: {SOCIAL_LINKS.cgpa})</p>
            <p className="text-[#9CA3AF]">Location: {SOCIAL_LINKS.location}</p>
            <p className="text-[#9CA3AF]">Philosophy: &ldquo;{SOCIAL_LINKS.philosophy}&rdquo;</p>
            <p className="text-emerald-400 font-semibold mt-1">● Status: {SOCIAL_LINKS.availability}</p>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-2 text-xs text-[#9CA3AF]">
            <p className="text-[#F3F4F6] font-medium">
              Student at {SOCIAL_LINKS.college} (Batch 2024–2028). Focused on Software Engineering, Data Structures &amp; Algorithms, full-stack systems, and AI applications.
            </p>
            <p>
              Awarded Coder of the Year back-to-back in 2025 and 2026. Solved 450+ problems on LeetCode with 200+ days active streak in 2026 (@itz_pratishtha).
            </p>
            <p className="text-[#CCFF00]">
              &ldquo;From my brain, To your screen !&rdquo;
            </p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-3 text-xs">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                <span className="text-[#CCFF00] font-semibold uppercase">{cat.name}: </span>
                <span className="text-[#D1D5DB]">
                  {cat.skills.map((s) => `${s.name}${s.proficiency === 'learning' ? ' [Exploring]' : ''}`).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-3 text-xs">
            {PROJECTS.map((proj, idx) => (
              <div key={proj.id} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-[#CCFF00] font-bold">{idx + 1}. {proj.title}</span>
                  <span className="text-[10px] text-[#6B7280]">{proj.category}</span>
                </div>
                <p className="text-[#9CA3AF] mt-1">{proj.shortOverview}</p>
                <p className="text-[#6B7280] text-[11px] mt-1 font-mono">
                  Stack: {proj.techStack.join(' • ')}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-[#CCFF00] underline text-[11px]">
                    GitHub Repo &rarr;
                  </a>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-emerald-400 underline text-[11px]">
                      Live App &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'achievements':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-bold">★ Coder of the Year 2025 &amp; 2026 (Two-time Winner at PIET)</p>
            <p className="text-[#CCFF00] font-bold">★ LeetCode 200-Day Consistency Badge 2026 (450+ Solved)</p>
            <div className="pt-1 space-y-1 text-[#9CA3AF]">
              {CERTIFICATIONS.filter(c => c.category !== 'Award').map(c => (
                <div key={c.id}>• {c.title} — <span className="text-white/60">{c.issuer}</span></div>
              ))}
            </div>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-1 text-xs text-[#9CA3AF]">
            <p className="text-[#F3F4F6] font-bold text-sm">Bachelor of Technology (B.Tech)</p>
            <p className="text-[#CCFF00]">Computer Science and Engineering (2024 – 2028)</p>
            <p>{SOCIAL_LINKS.college}</p>
            <p className="text-emerald-400 font-semibold">Cumulative GPA: {SOCIAL_LINKS.cgpa}</p>
            <p className="text-[#6B7280]">Location: Jaipur, Rajasthan, India</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-white/80">Connect directly:</p>
            <p><span className="text-[#CCFF00]">Email:</span> <a href={`mailto:${SOCIAL_LINKS.email}`} className="underline hover:text-white">{SOCIAL_LINKS.email}</a></p>
            <p><span className="text-[#CCFF00]">LinkedIn:</span> <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white">{SOCIAL_LINKS.linkedin}</a></p>
            <p><span className="text-[#CCFF00]">GitHub:</span> <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="underline hover:text-white">{SOCIAL_LINKS.github}</a></p>
            <p><span className="text-[#CCFF00]">LeetCode:</span> <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noreferrer" className="underline hover:text-white">{SOCIAL_LINKS.leetcode}</a></p>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs text-red-400 space-y-1">
            <p>zsh: command not found: {cmdText}</p>
            <p className="text-[#6B7280]">Type <span className="text-[#CCFF00]">help</span> to see the list of executable portfolio commands.</p>
          </div>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: `log-${Date.now()}`,
        command: cmdText,
        output: outputNode
      }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(history[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    }
  };

  const suggestedCommands = ['help', 'whoami', 'about', 'skills', 'projects', 'achievements', 'clear'];

  const handleCopyLogs = () => {
    const text = logs.map(l => `$ ${l.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          number="05"
          tag="INTERACTIVE REPL"
          title="Developer terminal."
          subtitle="An authentic command-line interface reflecting engineering rigor. Type commands or click suggestions below."
          align="center"
        />

        {/* Suggested Command Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-[#6B7280] mr-2">Click to run:</span>
          {suggestedCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 rounded-lg bg-[#141722] hover:bg-[#CCFF00]/10 border border-white/10 hover:border-[#CCFF00]/40 text-xs font-mono text-[#E5E7EB] hover:text-[#CCFF00] transition-all cursor-pointer"
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Chrome */}
        <div className="rounded-2xl bg-[#08090C] border border-white/15 shadow-2xl overflow-hidden font-mono text-sm">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0E1017] border-b border-white/10">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs text-[#9CA3AF] font-medium flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>ps@developer: ~/portfolio (zsh)</span>
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLogs}
                title="Copy terminal session"
                className="p-1.5 text-[#9CA3AF] hover:text-[#CCFF00] hover:bg-white/5 rounded transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-[#CCFF00]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terminal Output & Prompt Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-5 sm:p-6 min-h-[380px] max-h-[500px] overflow-y-auto space-y-4 custom-scrollbar cursor-text"
          >
            {/* Welcome banner */}
            <div className="text-xs text-[#6B7280] pb-2 border-b border-white/5">
              <span>Antigravity Terminal v2.4.0 (x86_64-somani-darwin)</span>
              <br />
              <span>Type &apos;help&apos; to view all available commands. Press Up/Down for history.</span>
            </div>

            {/* History Logs */}
            {logs.map((log) => (
              <div key={log.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#CCFF00] font-bold">ps@somani</span>
                  <span className="text-white/40">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white/40">$</span>
                  <span className="text-[#F9FAFB] font-semibold">{log.command}</span>
                </div>
                <div className="pl-4 border-l border-white/10 text-xs sm:text-sm">
                  {log.output}
                </div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm pt-1">
              <span className="text-[#CCFF00] font-bold shrink-0">ps@somani</span>
              <span className="text-white/40 shrink-0">:</span>
              <span className="text-blue-400 shrink-0">~</span>
              <span className="text-white/40 shrink-0">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
                placeholder="type a command (e.g. whoami, skills)..."
                className="w-full bg-transparent text-[#F9FAFB] focus:outline-none caret-[#CCFF00] placeholder-[#6B7280]/60 font-mono"
              />
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Bottom Helper Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#0E1017] border-t border-white/5 text-[11px] text-[#6B7280]">
            <span>Tab: Auto-complete &middot; Enter: Execute</span>
            <span className="text-[#CCFF00]">Status: READY</span>
          </div>

        </div>

      </div>
    </section>
  );
};
