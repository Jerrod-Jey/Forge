import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Bot, Send, Sparkles, Loader2, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AISearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setAnswer(null);
    setError(null);

    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is missing. Please ensure it is set in your environment variables.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const systemInstruction = `You are a helpful AI assistant for "Forge Brand Design", a digital products and services provider based in Windsor, Ontario.
      
      CORE SERVICES:
      - Web Design: High-performance digital architectures (Starter, Business, Premium tiers).
      - Brand Design: Custom logos and visual identity systems (Starter, Business, Premium tiers).
      - AI Integration: AI-powered workflows and strategic automation.
      
      PRICING & PACKAGES:
      - Web Design Starter: $500 one-time OR $200/month (6-month min).
      - Web Design Business: $1,200 one-time OR $250/month (9-month min).
      - Web Design Premium: $2,000 one-time OR $325/month (12-month min).
      - Brand Design Starter: From $100.
      - Brand Design Business: From $400.
      - Brand Design Premium: From $1,000.
      - Custom Printing: Available for business cards, signage, packaging, and branded collateral.
      
      IMPORTANT POLICIES:
      - Monthly web design payments INCLUDE monthly support.
      - One-time packages require a $200 non-refundable deposit to secure a production spot.
      - Full ownership transfers to the client upon final payment.
      
      CONTACT INFO:
      - Email: receptai.help@gmail.com
      - Location: Windsor, Ontario.
      
      GUIDELINES:
      - Be concise, professional, and exciting.
      - If you don't know the answer, suggest they contact Jerrod at receptai.help@gmail.com.
      - Keep answers under 3 sentences if possible.
      - Focus on converting the user to an inquiry.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      setAnswer(response.text);
    } catch (err) {
      console.error("AI Search Error:", err);
      setError("The Forge AI is currently recalibrating. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-full mb-6 right-0 w-[90vw] md:w-[450px] overflow-hidden"
          >
            <div className="glass-card rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="p-8 pb-4 flex items-center justify-between border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forge-teal flex items-center justify-center">
                    <Bot className="w-6 h-6 text-forge-navy" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">Forge AI Pulse</h3>
                    <p className="text-[10px] text-forge-teal font-bold tracking-[0.2em] uppercase">Instant Knowledge Protocol</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors border border-transparent hover:border-white/10"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-8 max-h-[400px] overflow-y-auto custom-scrollbar">
                {!answer && !isLoading && !error && (
                  <div className="text-center py-8">
                    <Sparkles className="w-8 h-8 text-white/20 mx-auto mb-4" />
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                      Ask anything about our packages, <br />pricing, or technical process.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2 justify-center">
                      {["How much is web design?", "What's the process?", "Do you do logos?"].map((q) => (
                        <button
                          key={q}
                          onClick={() => {
                            setQuery(q);
                            setTimeout(() => handleSearch(), 100);
                          }}
                          className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:border-forge-teal hover:text-white transition-all"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {isLoading && (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <Loader2 className="w-8 h-8 text-forge-teal animate-spin" />
                    <p className="text-[10px] font-bold text-forge-teal uppercase tracking-[0.3em] animate-pulse">Analyzing Inquiry...</p>
                  </div>
                )}

                {error && (
                  <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-100 text-sm font-medium leading-relaxed">
                    {error}
                  </div>
                )}

                {answer && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white text-sm leading-relaxed font-medium">
                      {answer}
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => {
                          setAnswer(null);
                          setQuery('');
                        }}
                        className="text-[10px] font-black text-forge-teal uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
                      >
                        Ask Another Question <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              <form onSubmit={handleSearch} className="p-8 pt-0">
                <div className="relative group">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 pr-14 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-forge-teal focus:border-transparent transition-all group-hover:bg-white/[0.07]"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-forge-teal flex items-center justify-center text-forge-navy hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-4 bg-forge-navy border border-white/10 px-8 py-5 rounded-full transition-all hover:border-forge-teal group relative overflow-hidden ${isOpen ? 'ring-2 ring-forge-teal bg-white/5' : 'hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]'}`}
      >
        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <div className="relative z-10 w-6 h-6 flex items-center justify-center">
          {isOpen ? <X className="w-5 h-5 text-forge-teal" /> : <Search className="w-5 h-5 text-forge-teal" />}
        </div>
        <span className="relative z-10 text-sm font-black text-white uppercase tracking-[0.2em]">
          {isOpen ? 'Close AI Pulse' : 'Forge AI Pulse'}
        </span>
        {!isOpen && (
          <div className="relative z-10 bg-forge-teal w-2 h-2 rounded-full animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default AISearch;
