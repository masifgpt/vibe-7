import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-pink-500">
      
      {/* Background Decor - Glowing Effects */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-pink-600/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 md:px-16 py-5 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter">
          <span className="text-pink-500">M.</span>ASIF
        </div>
        <div className="hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
        </div>
        <button className="bg-white text-black px-8 py-2.5 rounded-full text-xs font-black hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5">
            BUY NOW
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 md:px-16 pt-12 md:pt-20 pb-32 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/5 text-pink-500 text-[10px] font-black tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            PAIB Bhawana Software House Student
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            INTELLIGENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">AGENTIC AI</span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Main M Asif hoon, ek passionate AI Developer. Main **PAIB Bhawana** Software House mein 
            **Agentic AI, Smart Chatbots,** aur **Business Automation** seekh raha hoon. Mera maqsad AI 
            ke zariye mushkil kaam ko asan aur autonomous banana hai.
          </p>

          {/* Project Pricing Card */}
          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 rounded-[35px] backdrop-blur-2xl flex items-center justify-between group hover:border-pink-500/50 transition-all duration-700 shadow-2xl">
            <div>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Starting Price</p>
              <h3 className="text-5xl font-black text-white">$100 <span className="text-sm font-normal text-gray-500 italic">/ Per Project</span></h3>
            </div>
            <div className="bg-pink-600 w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-pink-500 transition-colors cursor-pointer group-hover:rotate-12">
              <span className="text-2xl font-bold">→</span>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Image Section */}
        <div className="order-1 md:order-2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-[50px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#111] rounded-[45px] overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            
            {/* 📸 IMAGE YAHAN EDIT KAREIN: 
                Bas src="" ke darmiyan apni file ka naam likh den (e.g., "/asif.png")
            */}
            <img 
              src="/pic.jpg" 
              alt="M Asif Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100 transition duration-700"
            />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 flex justify-between items-center">
               <div>
                  <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Expertise</p>
                  <p className="font-bold text-sm tracking-tight tracking-wide">AI Agents & Chatbots</p>
               </div>
               <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <span className="text-[8px] font-bold text-green-500 uppercase">Online</span>
               </div>
            </div>
          </div>
        </div>

      </section>

      {/* Skills / Specialization Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 md:px-16 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all group">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition">🤖</div>
            <h4 className="text-2xl font-bold mb-4">Agentic AI</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Multi-agent systems banana jo complex problems ko step-by-step khud solve karte hain.</p>
          </div>
          <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition">💬</div>
            <h4 className="text-2xl font-bold mb-4">Custom Chatbots</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Aise chatbots jo aapke data ko samajhte hain aur real humans ki tarah jawab dete hain.</p>
          </div>
          <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition">⚡</div>
            <h4 className="text-2xl font-bold mb-4">Automation</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Manual business tasks ko AI workflows se automate kar ke 100x speed barhana.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 text-[9px] font-black uppercase tracking-[0.4em]">
        © 2025 M Asif • PAIB Bhawana Software House • Built with AI
      </footer>

    </div>
  );
};

export default Portfolio;