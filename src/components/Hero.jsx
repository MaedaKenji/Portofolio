import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50/50 via-white to-pink-50/30 overflow-hidden py-16"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center relative z-10">
        
        {/* Glowing Avatar Container */}
        <div className="relative group mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-white rounded-full p-1.5 shadow-2xl">
            <img
              src="./images/PAS FOTO Upscale.png"
              alt="Agus Fuad avatar"
              className="rounded-full w-36 h-36 object-cover object-[50%_20%] border border-slate-100"
            />
          </div>
        </div>

        {/* Hello Badge */}
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/50 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-5 shadow-sm">
          👋 Hello, I'm
        </span>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
          Agus Fuad
        </h1>

        {/* Dynamic Tagline */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 font-light leading-relaxed">
          Crafting innovative systems with{" "}
          <span className="font-semibold text-blue-600">C/C++</span>,{" "}
          <span className="font-semibold text-indigo-600">Python</span>, and{" "}
          <span className="font-semibold text-violet-600">React/Flutter</span>. 
          Specializing in computer vision, embedded systems, and interactive applications.
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4 items-center justify-center mb-10">
          <a
            href="https://github.com/MaedaKenji"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-black hover:border-slate-400 hover:shadow-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/agus4434/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-blue-600 hover:text-blue-800 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300"
          >
            Explore Projects
            <FiArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}