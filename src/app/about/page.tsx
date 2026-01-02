import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-pink-500">

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-pink-600/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] bg-blue-600/20 blur-[140px] rounded-full"></div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-32 text-center">
        <p className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          About Me
        </p>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
          The Mind Behind <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Agentic AI
          </span>
        </h1>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Main <strong>M Asif</strong> hoon — ek AI-focused developer aur
          <strong> PAIB Bhawana Software House</strong> ka student.
          Main aise intelligent systems build karta hoon jo sirf respond nahi karte,
          balkay <strong>sochte, decide karte aur act karte hain</strong>.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-32 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">
            Who I Am
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Main AI ko sirf ek tool nahi samajhta — mere liye AI ek
            <strong> autonomous partner </strong> hai jo complex workflows ko
            khud manage kar sakta hai.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Mera core focus <strong>Agentic AI, Smart Chatbots</strong> aur
            <strong> Business Automation</strong> par hai.
            Main chahta hoon ke businesses repetitive kaamon se nikal kar
            high-level decision making par focus karein.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {[
              "Agentic AI Systems",
              "Multi-Agent Workflows",
              "AI Automation",
              "Custom Chatbots",
              "React & Tailwind UI",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest
                bg-white/5 border border-white/10 hover:border-pink-500/40 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 blur opacity-20 group-hover:opacity-40 transition duration-1000 rounded-[40px]"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">
            <h3 className="text-2xl font-black mb-6 uppercase">
              My Vision
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Mera vision simple hai:
              <strong> AI ko humans ka replacement nahi, multiplier banana</strong>.
              Aise systems create karna jo khud seekhein, adapt karein aur
              businesses ko future-ready bana dein.
            </p>

            <ul className="space-y-3 text-sm font-bold text-gray-300">
              <li>✔ Autonomous AI Agents</li>
              <li>✔ Decision-Making Workflows</li>
              <li>✔ Scalable AI Products</li>
              <li>✔ Clean & Modern Interfaces</li>
            </ul>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 text-[9px] font-black uppercase tracking-[0.4em] border-t border-white/5">
        © 2025 M Asif • About Page • Built with Agentic AI
      </footer>
    </div>
  );
}
