import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

const SafalChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hi there! 👋 I am SafalAI, Safal's assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'What is your contact info?',
    'Show your hackathon wins',
    'What are your top projects?',
    'What is your tech stack?',
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Dynamic response logic
    setTimeout(() => {
      let botResponse = '';
      const cleanText = text.toLowerCase();

      if (cleanText.includes('contact') || cleanText.includes('email') || cleanText.includes('phone') || cleanText.includes('gmail') || cleanText.includes('number')) {
        botResponse = `You can reach Safal via:
- 📧 Email: safalpal.work@gmail.com
- 📞 Phone: +91 9322833405
- 🔗 LinkedIn: https://www.linkedin.com/in/safal-pal-494482347

Or you can click the "Contact Me" button on the site to open the contact panel directly!`;
      } else if (cleanText.includes('hackathon') || cleanText.includes('win') || cleanText.includes('award') || cleanText.includes('prize') || cleanText.includes('fame')) {
        botResponse = `Safal is a 🏆 7x Hackathon & Technical Event Winner!
Recent achievements:
- 1st Position: TechAce 2K26 (National Level)
- 1st Rank: KRUTIVERSE 2.0 (TECH-KRUTI 2K26)
- 1st Prize: Engineer’s Day 2K25
- 2nd Prize: TechPro-25 (Smart Accident Detection IoT System)
- 2nd Runner-Up: ABHYUDAYA 25.O
- 2nd Runner-Up: WebCraft 2.0 (Web Development)
- 2nd Runner-Up: Hack the Hardware 2025 (Built in 7 hours)`;
      } else if (cleanText.includes('project') || cleanText.includes('portfolio') || cleanText.includes('work')) {
        botResponse = `Safal's top system architectures include:
1. RCB-CareerOS (ATS Resume checker & Career App)
2. EduTech With Nova.AI (Voice Chatbot Assistance)
3. Self-Healing-RAG-Pipeline (Aegis self-correcting RAG agent)
4. Chat-Rooms (Socket.io collaboration space)
5. VidSnapAI (Video Reel SaaS pipeline)

All projects feature "View Project" buttons linked directly to active GitHub repositories!`;
      } else if (cleanText.includes('skill') || cleanText.includes('stack') || cleanText.includes('tech') || cleanText.includes('languages') || cleanText.includes('python') || cleanText.includes('c++')) {
        botResponse = `Here is Safal's tech stack:
- Core CS: C++, Python, Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks.
- Full Stack: React, Next.js, Node.js, Express, MongoDB, MySQL, PostgreSQL, APIs, Git/GitHub.
- Data & AI: Pandas, NumPy, Tableau, Power BI, Machine Learning, PyTorch, TensorFlow, Scikit Learn, Deep Learning, LLMs, RAG Models.`;
      } else {
        botResponse = `Safal is an elite Software Engineer & Data Analyst ready for FAANG/Big Tech roles. He excels in building stateful AI agents, data engineering pipelines, and highly responsive React apps. 

Would you like to review his 'projects', 'skills', or 'contact' info? Type any keyword to ask!`;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="
            flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl cursor-pointer
            border border-[#D7E2EA]/20
          "
          style={{
            background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
            boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)',
          }}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="
              fixed bottom-24 right-6 w-[340px] sm:w-[380px] h-[500px]
              rounded-[28px] border border-[#D7E2EA]/20 bg-[#0c0c0c]
              flex flex-col shadow-2xl overflow-hidden z-40
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#D7E2EA]/5 border-b border-[#D7E2EA]/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs animate-pulse">
                  AI
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">SafalAI Assistant</h4>
                  <p className="text-[10px] text-green-400 font-medium">Online · Pre-Prompted</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#D7E2EA]/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3.5 max-h-[300px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 max-w-[85%] ${
                    msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white ${
                      msg.sender === 'user' ? 'bg-cyan-500' : 'bg-[#D7E2EA]/10'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div
                    className={`
                      text-xs p-3 rounded-2xl whitespace-pre-wrap leading-relaxed
                      ${
                        msg.sender === 'user'
                          ? 'bg-[#D7E2EA] text-black rounded-tr-none font-medium'
                          : 'bg-[#D7E2EA]/5 text-[#D7E2EA]/80 border border-[#D7E2EA]/10 rounded-tl-none font-light'
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Questions */}
            <div className="px-4 py-2 border-t border-[#D7E2EA]/10 bg-black/40 flex flex-col gap-1.5">
              <span className="text-[9px] uppercase tracking-widest text-[#D7E2EA]/30 font-semibold mb-1">
                Suggested Questions:
              </span>
              <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[85px]">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    className="
                      text-left text-[11px] px-3 py-1.5 rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5
                      text-[#D7E2EA]/70 hover:text-white hover:bg-[#D7E2EA]/10 transition-all duration-200
                      cursor-pointer select-none truncate
                    "
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3 border-t border-[#D7E2EA]/15 bg-black flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something about Safal..."
                className="
                  flex-1 bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 outline-none rounded-full
                  px-4 py-2 text-xs text-white focus:border-cyan-400 transition-colors
                "
              />
              <button
                type="submit"
                className="
                  p-2 rounded-full text-white cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0
                "
                style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)' }}
              >
                <Send size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SafalChatWidget;
