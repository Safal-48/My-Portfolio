import React, { useState, useRef, useEffect } from 'react';
import FadeIn from '../components/FadeIn';

interface LogLine {
  text: string;
  type: 'input' | 'output' | 'error';
}

const TerminalSection: React.FC = () => {
  const [history, setHistory] = useState<LogLine[]>([
    { text: 'SafalOS v1.0.4 loaded successfully.', type: 'output' },
    { text: "Type 'help' or click the quick commands below to explore my profile.", type: 'output' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [mode, setMode] = useState<'normal' | 'resume_select'>('normal');
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const quickCommands = [
    'help',
    'cat about.txt',
    'ls projects/',
    'python get_stats.py',
    'python analyze_resume.py',
    'clear'
  ];

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const newHistory: LogLine[] = [...history, { text: `${mode === 'resume_select' ? '>' : 'safal-pal@portfolio:~$'} ${cmd}`, type: 'input' }];

    if (mode === 'resume_select') {
      const choice = trimmedCmd.toLowerCase();
      if (choice === '1') {
        newHistory.push({
          text: `[System] Parsing Resume: Gagan Mohabey...
[Gemini AI] Extractions Successful:
--------------------------------------------------
👤 NAME: Gagan Mohabey
💼 CAREER OBJECTIVE: B.Tech Computer Science (Cyber Security) student with strong experience in hackathons, AI/ML-based systems, full-stack development, and research-oriented projects.
🎓 EDUCATION: 
  - B.Tech Computer Science (Cyber Security), Shri Ramdeobaba College of Engineering and Management (2022-2027)
  - HSC (Maharashtra Board, 2022) - 83.33%
  - SSC (CBSE, 2020) - 75.4%
📂 WORK EXPERIENCE:
  - Intern at Suryodaya TBI College (Nagpur): Developed glucometer prototype, built patient dashboard.
🛠 PROJECTS:
  - SwasthaAI: Doctor Appointment & Health Consultation System (Python, Flask, WebRTC, AI Chatbot)
  - X-Ray Disease Diagnosis System (Python, CNN, ML, Flask)
  - Multi-Agent AI Job & JD Matching System (Python, NLP, Flask)
🏆 ACHIEVEMENTS: Winner of 7x Hackathons (various domains), finalist in national hackathons.
📜 CERTIFICATIONS: AI For All (Intel & CBSE, 2025), CCNA, RHCSA, Intro to Kali Linux
🎨 SKILLS: Python, C, JavaScript, HTML, CSS, MERN Stack, CNN, NLP, IoT, CCNA
--------------------------------------------------
🎯 ATS MATCH SCORE FOR SOFTWARE ENGINEERING ROLE: 89% (High Potential)
[System] Parser exited successfully.`,
          type: 'output',
        });
        setMode('normal');
      } else if (choice === '2') {
        newHistory.push({
          text: `[System] Parsing Resume: Jivita Anil Kuhikar...
[Gemini AI] Extractions Successful:
--------------------------------------------------
👤 NAME: Jivita Anil Kuhikar
💼 PROFESSIONAL SUMMARY: Human Resource professional with expertise in Recruitment, HR operations, compliance, employee engagement, and business partnering. 95% grievance resolution rate.
🎓 EDUCATION: 
  - MBA - HRM (ISMS Sankalp Business School, 2024-2026)
  - Bachelor of Technology - IT (2020-2024)
📂 WORK EXPERIENCE:
  - HR Executive at Time Legend IT & HR Consulting (Satguru Group): Grievance handling, onboarding, lifecycle management.
  - HR Trainee at Tech Mahindra Limited: Coordinated large-scale walk-in drives with 100+ candidates, candidate onboarding.
🛠 FIELD PROJECT:
  - 120 hours Field Project at Dreamz Software Solution: Product promotion, expo representation.
🎨 SKILLS: Recruitment, HRIS, Excel, Power BI (Basic), Data Analysis, CRM Tool, HR Operations, Soft Skills (Communication, Negotiation, Presentation)
--------------------------------------------------
🎯 ATS MATCH SCORE FOR HR OPERATIONS / TA ROLE: 92% (High Potential)
[System] Parser exited successfully.`,
          type: 'output',
        });
        setMode('normal');
      } else if (choice === 'exit' || choice === 'cancel' || choice === 'q') {
        newHistory.push({ text: '[System] Parser session cancelled by user.', type: 'output' });
        setMode('normal');
      } else {
        newHistory.push({
          text: `Invalid selection: '${cmd}'. Please enter '1' for Gagan, '2' for Jivita, or 'exit' to quit.`,
          type: 'error',
        });
      }
      setHistory(newHistory);
      setInputValue('');
      return;
    }

    const commandWord = trimmedCmd.toLowerCase();
    switch (commandWord) {
      case 'help':
        newHistory.push({
          text: `Available commands:
  - help                  : List all available commands
  - cat about.txt         : Display bio and engineering philosophy
  - ls projects/          : List featured system architectures
  - python get_stats.py   : Fetch active developer statistics
  - python analyze_resume.py: Run the AI Career Navigator Resume Parser Demo
  - clear                 : Clear terminal logs`,
          type: 'output',
        });
        break;
      case 'cat about.txt':
        newHistory.push({
          text: `Safal Pal - Architecting Intelligent Systems & Scalable Data Solutions.
  - Profile       : MERN Stack Engineer, Data Analyst, & AI/IoT Innovator
  - Experience    : Data Analyst at Bluestock Fintech, AI/ML at iBase Electrosoft
  - Focus Area    : Stateful LLM orchestration, self-correcting RAG systems, and data analytics.`,
          type: 'output',
        });
        break;
      case 'ls projects/':
        newHistory.push({
          text: `Directory listing: projects/
  ├── [01] rcb-career-os/         (Hiring & ATS checker application)
  ├── [02] edutech-nova-ai/        (Voice chatbot assistant portal)
  ├── [03] self-healing-rag/       (FastAPI self-correcting RAG)
  ├── [04] chat-rooms/             (Real-time socket.io messenger)
  ├── [05] vidsnap-ai/             (FFmpeg vertical reel SaaS)
  ├── [06] ai-career-navigator/    (Resume analyst & career OS)
  ├── [07] gurgaon-real-estate/    (Python data analytics pipeline)
  └── [08] cognify/                (MERN Solution Challenge EdTech)`,
          type: 'output',
        });
        break;
      case 'python get_stats.py':
        newHistory.push({
          text: `Executing script: get_stats.py...
  [✔] Hackathon Wins      : 6 (1 National Rank, 3 Golds)
  [✔] LeetCode Solved     : 450+ (OOP, Pointers, Memory management focus)
  [✔] Lines of Code       : 120,000+
  [✔] Git Commits (YTD)   : 1,450+
  [✔] Preferred Editor    : Vim / VS Code`,
          type: 'output',
        });
        break;
      case 'python analyze_resume.py':
        newHistory.push({
          text: `[System] Starting AI Career Navigator Resume Analyzer...
[System] Loading demo files from directory 'samples/'
Please select a sample resume to parse:
  [1] Gagan Mohabey (B.Tech CSE / Cyber Security & ML)
  [2] Jivita Anil Kuhikar (MBA HRM / HR Executive & IT)
  [exit] Exit the parser

Type '1' or '2' to initiate AI parsing:`,
          type: 'output',
        });
        setMode('resume_select');
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      default:
        newHistory.push({
          text: `sh: command not found: '${cmd}'. Type 'help' for a list of commands.`,
          type: 'error',
        });
    }

    setHistory(newHistory);
    setInputValue('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputValue);
  };

  return (
    <section
      id="terminal"
      className="
        bg-[#0c0c0c]
        px-5 sm:px-8 md:px-10
        py-20 sm:py-24 md:py-32
        border-t border-[#D7E2EA]/10
      "
    >
      {/* Section Label */}
      <FadeIn delay={0} y={30}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-gradient-to-r from-cyan-500 to-purple-500" />
          <p className="text-xs uppercase tracking-widest text-slate-500 font-medium">Developer Interface</p>
          <span className="w-8 h-px bg-gradient-to-r from-cyan-500 to-purple-500" />
        </div>
      </FadeIn>

      <FadeIn delay={0.05} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
        >
          Interactive Console
        </h2>
      </FadeIn>

      {/* Terminal Shell Window */}
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0.1} y={30}>
          <div
            className="
              rounded-[28px] border border-[#D7E2EA]/15 bg-black/60
              overflow-hidden flex flex-col min-h-[460px] font-mono shadow-2xl
            "
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#D7E2EA]/5 border-b border-[#D7E2EA]/10">
              <div className="flex gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-semibold select-none">
                safal-pal@portfolio: ~ {mode === 'resume_select' && '[Parser Mode]'}
              </span>
              <span className="w-12" /> {/* spacer */}
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-6 overflow-y-auto max-h-[380px] text-sm leading-relaxed flex flex-col gap-2">
              {history.map((line, idx) => (
                <div
                  key={idx}
                  className={`
                    whitespace-pre-wrap
                    ${line.type === 'input' ? 'text-white font-semibold' : ''}
                    ${line.type === 'output' ? 'text-[#D7E2EA]/70 font-light' : ''}
                    ${line.type === 'error' ? 'text-red-400 font-medium' : ''}
                  `}
                >
                  {line.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Line */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-6 py-4 border-t border-[#D7E2EA]/15 bg-black/80"
            >
              <span className="text-[#D7E2EA]/50 select-none">
                {mode === 'resume_select' ? '>' : 'safal-pal@portfolio:~$'}
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="
                  flex-1 bg-transparent border-none outline-none text-white font-mono text-sm
                  caret-cyan-400 focus:ring-0 p-0
                "
                placeholder={mode === 'resume_select' ? "Type '1' or '2' or 'exit'..." : "Type command here..."}
                autoFocus={false}
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </FadeIn>

        {/* Quick click command suggestions */}
        <FadeIn delay={0.2} y={20}>
          <div className="mt-6 flex flex-wrap gap-2.5 justify-center items-center">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-semibold mr-2">
              Quick commands:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  if (mode === 'resume_select') {
                    // ignore quick commands during prompt selection
                    return;
                  }
                  handleCommand(cmd);
                }}
                disabled={mode === 'resume_select'}
                className={`
                  text-xs font-mono px-3.5 py-1.5 rounded-full border border-[#D7E2EA]/10 bg-[#D7E2EA]/5
                  text-[#D7E2EA]/70 hover:text-white hover:border-[#D7E2EA]/30 transition-all duration-200
                  cursor-pointer select-none
                  ${mode === 'resume_select' ? 'opacity-40 cursor-not-allowed' : ''}
                `}
              >
                {cmd}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TerminalSection;
