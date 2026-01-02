import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white font-sans selection:bg-pink-500 overflow-x-hidden">
      
      {/* Background Decor - Glowing Effects */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-pink-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Main Content Start */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-32 grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10 order-2 md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-500 text-[11px] font-black tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              Next-Gen AI Solutions
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter">
              FUTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600">
                DRIVEN
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-lg font-medium">
              Building autonomous agents that think, learn, and scale. Specializing in 
              <span className="text-white"> Agentic AI workflows </span> for modern enterprises.
            </p>

            {/* Action Card */}
            <div className="group relative max-w-sm">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-[30px] blur opacity-20 group-hover:opacity-50 transition"></div>
              <div className="relative bg-black border border-white/10 p-6 rounded-[30px] flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Project Inquiry</p>
                  <p className="text-2xl font-black italic">LET'S BUILD</p>
                </div>
                <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center font-bold hover:bg-pink-500 hover:text-white transition-all cursor-pointer">
                  →
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Section */}
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-4 bg-white/5 rounded-[60px] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0a] rounded-[50px] overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl">
              <img 
                src="/pic.jpg" 
                alt="M Asif" 
                className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              {/* Overlay Tag */}
              <div className="absolute bottom-8 left-8">
                 <p className="text-pink-500 font-black text-4xl italic tracking-tighter opacity-50">01</p>
                 <p className="text-white font-bold tracking-widest text-[10px] uppercase">Lead AI Engineer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Info Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-white/5 py-16">
            <div>
              <h5 className="text-pink-500 font-black text-3xl">10+</h5>
              <p className="text-gray-500 text-[10px] font-bold uppercase mt-2">AI Agents Built</p>
            </div>
            <div>
              <h5 className="text-blue-500 font-black text-3xl">99%</h5>
              <p className="text-gray-500 text-[10px] font-bold uppercase mt-2">Accuracy Rate</p>
            </div>
            <div>
              <h5 className="text-purple-500 font-black text-3xl">24/7</h5>
              <p className="text-gray-500 text-[10px] font-bold uppercase mt-2">Automated Support</p>
            </div>
            <div>
              <h5 className="text-white font-black text-3xl">PAIB</h5>
              <p className="text-gray-500 text-[10px] font-bold uppercase mt-2">Bhawana Software House</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.5em]">
          M.ASIF DIGITAL PORTFOLIO © 2025
        </p>
      </footer>

    </div>
  );
};

export default PortfolioPage;