import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-100/85">
      <nav className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
        >
          AF.
        </a>
        <ul className="flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-blue-600 transition-colors duration-200">Certifications</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}