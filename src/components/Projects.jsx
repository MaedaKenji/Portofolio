import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiFolder, FiExternalLink, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    name: "Sappy",
    category: "Mobile App",
    description:
      "A Flutter-based application for multi-role management in a livestock environment. Features interfaces for farmers, administrators, and doctors. Utilizes modern Flutter packages and custom providers for state and business logic management.",
    url: "https://github.com/MaedaKenji/Protel-sappy/tree/main",
    tags: ["Flutter", "Dart", "PostgreSQL", "JavaScript"],
    gradient: "from-teal-500 to-emerald-600",
    shadowColor: "hover:shadow-emerald-500/10",
  },
  {
    name: "OpenCV Poker Game",
    category: "Computer Vision",
    description:
      "A computer vision-powered Poker game built with OpenCV and Python (Jupyter Notebook). Supports real-time card recognition and interactive gameplay.",
    url: "https://github.com/MaedaKenji/OpenCV-PokerGame",
    tags: ["Python", "OpenCV", "Jupyter"],
    gradient: "from-blue-500 to-indigo-600",
    shadowColor: "hover:shadow-blue-500/10",
  },
  {
    name: "Alien Space",
    category: "Game Dev",
    description:
      "A 2D arcade-style space shooter game developed using C and C++ graphics programming. Includes aliens, bullets, collision detection, and scorekeeping.",
    url: "https://github.com/MaedaKenji/Alien-Space",
    tags: ["C", "C++", "GameDev"],
    gradient: "from-violet-500 to-purple-600",
    shadowColor: "hover:shadow-purple-500/10",
  },
  {
    name: "Dot Matrix Ping Pong",
    category: "Embedded System",
    description:
      "A microcontroller-based two-player Ping Pong game featuring an 8x32 LED dot matrix display and custom C++ firmware.",
    url: "https://github.com/MaedaKenji/your-dot-matrix-ping-pong-repo",
    tags: ["C++", "Embedded", "Arduino"],
    gradient: "from-amber-500 to-orange-600",
    shadowColor: "hover:shadow-orange-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
            <FiFolder className="text-sm" /> Portfolio
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto font-light">
            A showcase of applications, hardware integrations, and computer vision games I've designed and developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className={`group bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl ${proj.shadowColor} hover:-translate-y-1.5 transition-all duration-500 flex flex-col overflow-hidden`}
            >
              {/* Gradient Top Line */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${proj.gradient}`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Header info */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200/60">
                    {proj.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {proj.name}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 text-justify font-light">
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-50 text-slate-600 border border-slate-200/80 px-2.5 py-1 rounded-xl text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link button */}
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white text-sm font-semibold py-3 px-5 rounded-2xl border border-slate-200/85 hover:border-slate-900 transition-all duration-300 active:scale-98"
                >
                  <FaGithub size={18} />
                  <span>View on GitHub</span>
                  <FiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-light">
            Want to see more of my work? Visit my{" "}
            <a
              href="https://github.com/MaedaKenji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1 hover:gap-1.5 transition-all"
            >
              GitHub profile <FiExternalLink size={14} />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}