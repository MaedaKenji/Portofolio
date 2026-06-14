import React from "react";
import { FiUser, FiCode, FiCpu, FiTerminal } from "react-icons/fi";

const skillCategories = [
  {
    title: "Low-Level & Hardware",
    icon: <FiCpu className="text-emerald-500" />,
    skills: ["C", "C++", "Embedded Systems", "Arduino", "IoT"],
    bg: "from-emerald-50 to-teal-50/30 border-emerald-100",
  },
  {
    title: "Software & AI",
    icon: <FiTerminal className="text-blue-500" />,
    skills: ["Python", "OpenCV", "Computer Vision", "Jupyter Notebook", "Graphics Programming"],
    bg: "from-blue-50 to-indigo-50/30 border-blue-100",
  },
  {
    title: "Web & Mobile",
    icon: <FiCode className="text-violet-500" />,
    skills: ["React", "Vite", "Tailwind CSS", "JavaScript", "TypeScript", "Flutter"],
    bg: "from-violet-50 to-fuchsia-50/30 border-violet-100",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/40 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
            <FiUser className="text-sm" /> Bio
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Content Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hi, I'm <span className="text-blue-600">Agus Fuad</span>
              </h3>
              <p className="text-slate-600 leading-relaxed font-light text-justify mb-4">
                A passionate software engineer and maker with a strong background in low-level programming, computer vision, and systems engineering. I thrive on building interactive games, intelligent systems, and robust applications that bridge hardware and software.
              </p>
              <p className="text-slate-600 leading-relaxed font-light text-justify">
                Whether deploying custom micro-controllers, running real-time image processing networks, or crafting slick web user interfaces, I love learning new technologies, pushing boundaries, and open-sourcing my creations.
              </p>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-center">
                <span className="block text-3xl font-black text-indigo-600">10+</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tech Stack tools</span>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-center">
                <span className="block text-3xl font-black text-blue-600">100%</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Hands-on Maker</span>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 px-1 mb-2">
              Skills & Expertise
            </h3>
            
            <div className="space-y-4">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className={`bg-gradient-to-br ${category.bg} border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-150 flex items-center justify-center shadow-sm">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 text-base">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}