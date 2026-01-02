import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white px-6 md:px-16 py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[140px] rounded-full"></div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          Get In <span className="text-pink-500">Touch</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Agar aap AI Automation, Chatbots ya Agentic AI par kaam karwana chahte
          hain to direct contact karein.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* WhatsApp */}
        <a
          href="https://wa.me/923707615224"
          target="_blank"
          className="p-8 rounded-[30px] bg-white/5 border border-white/10 hover:border-green-500/40 transition group"
        >
          <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
          <p className="text-gray-400 text-sm">
            Direct message karein for quick response
          </p>
          <span className="block mt-4 text-green-500 font-semibold group-hover:underline">
            Chat on WhatsApp →
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:masifgpt@gmail.com"
          className="p-8 rounded-[30px] bg-white/5 border border-white/10 hover:border-pink-500/40 transition group"
        >
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-400 text-sm">
            Professional inquiries ke liye email karein
          </p>
          <span className="block mt-4 text-pink-500 font-semibold group-hover:underline">
            masifgpt@gmail.com →
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/m.asif.423683"
          target="_blank"
          className="p-8 rounded-[30px] bg-white/5 border border-white/10 hover:border-blue-500/40 transition group"
        >
          <h3 className="text-xl font-bold mb-2">Facebook</h3>
          <p className="text-gray-400 text-sm">
            Facebook par connect karein
          </p>
          <span className="block mt-4 text-blue-500 font-semibold group-hover:underline">
            Visit Profile →
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-asif-30163737a/"
          target="_blank"
          className="p-8 rounded-[30px] bg-white/5 border border-white/10 hover:border-sky-500/40 transition group"
        >
          <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
          <p className="text-gray-400 text-sm">
            Professional networking ke liye
          </p>
          <span className="block mt-4 text-sky-500 font-semibold group-hover:underline">
            Connect on LinkedIn →
          </span>
        </a>
      </div>

      {/* Footer Note */}
      <div className="mt-24 text-center text-gray-600 text-xs tracking-widest uppercase">
        © 2025 M Asif • Let’s Build with AI
      </div>
    </div>
  );
}
