import React from "react";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-lg font-black tracking-tight text-white">
            AF.
          </span>
          <p className="text-xs text-slate-500 font-light">
            © {new Date().getFullYear()} MaedaKenji. All rights reserved.
          </p>
        </div>

        {/* Stack Credits */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-light bg-slate-900/50 px-4 py-2 rounded-2xl border border-slate-800/40">
          <span>Crafted with</span>
          <FiHeart className="text-rose-500 fill-rose-500 animate-pulse" />
          <span>using</span>
          <a
            className="font-semibold text-white hover:text-blue-400 transition"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>&</span>
          <a
            className="font-semibold text-white hover:text-indigo-450 transition"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
        </div>

      </div>
    </footer>
  );
}