import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMessageSquare, FiArrowRight } from "react-icons/fi";

const contactMethods = [
  {
    name: "Email",
    value: "agusfuad090@gmail.com",
    href: "mailto:agusfuad090@gmail.com",
    icon: <FaEnvelope className="text-2xl" />,
    gradient: "from-blue-500 to-indigo-600",
    shadow: "hover:shadow-blue-500/10",
    label: "Send an email",
  },
  {
    name: "LinkedIn",
    value: "Agus Fuad",
    href: "https://www.linkedin.com/in/agus4434/",
    icon: <FaLinkedin className="text-2xl" />,
    gradient: "from-blue-600 to-cyan-500",
    shadow: "hover:shadow-cyan-500/10",
    label: "Let's connect",
  },
  {
    name: "GitHub",
    value: "MaedaKenji",
    href: "https://github.com/MaedaKenji",
    icon: <FaGithub className="text-2xl" />,
    gradient: "from-slate-800 to-slate-950",
    shadow: "hover:shadow-slate-500/10",
    label: "Follow my code",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50/50 rounded-full filter blur-3xl opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
            <FiMessageSquare className="text-sm" /> Contact
          </span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Get in <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto font-light">
            I'm always open to new opportunities, collaborations, or discussing interesting software and hardware projects.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl ${method.shadow} hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center`}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${method.gradient} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>

              {/* Name */}
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                {method.name}
              </h3>

              {/* Value */}
              <p className="text-slate-500 text-xs font-mono mb-4 truncate w-full px-2">
                {method.value}
              </p>

              {/* Action */}
              <span className="mt-auto text-xs font-semibold text-blue-600 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                {method.label}
                <FiArrowRight />
              </span>
            </a>
          ))}
        </div>

        {/* Friendly bottom text */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-light text-sm">
            Located in Indonesia • Available for Remote Collaborations
          </p>
        </div>

      </div>
    </section>
  );
}