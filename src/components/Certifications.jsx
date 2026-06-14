import React, { useState } from "react";
import { FiAward, FiExternalLink, FiX, FiCalendar, FiFileText } from "react-icons/fi";

const certifications = [
  {
    id: 1,
    title: "TOEFL EFL ITS English Language",
    issuer: "ITS (Institut Teknologi Sepuluh Nopember)",
    category: "Language",
    description:
      "English language proficiency certification issued by ITS, demonstrating competency in English for academic and professional contexts.",
    pdfFile: `${import.meta.env.BASE_URL}Toefl EFL ITS English Languange.pdf`,
    color: "from-blue-500 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: "🏅",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            <FiAward className="text-base" /> Achievements
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Credentials and certificates that reflect my learning journey and professional growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cert.badgeColor}`}
                  >
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3 flex items-center gap-1.5">
                  <FiAward className="shrink-0" />
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-sm flex-1 leading-relaxed mb-5">
                  {cert.description}
                </p>

                <button
                  onClick={() => setSelected(cert)}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow"
                >
                  <FiFileText />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col overflow-hidden"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className={`flex items-center justify-between px-5 py-4 bg-gradient-to-r ${selected.color}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selected.icon}</span>
                <div>
                  <h3 className="text-white font-bold text-base leading-tight">
                    {selected.title}
                  </h3>
                  <p className="text-white/80 text-xs">{selected.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selected.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white text-sm flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition"
                >
                  <FiExternalLink size={14} /> Open
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white/80 hover:text-white bg-white/20 hover:bg-white/30 p-1.5 rounded-lg transition"
                  aria-label="Close modal"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 overflow-hidden" style={{ minHeight: "60vh" }}>
              <iframe
                src={selected.pdfFile}
                title={selected.title}
                className="w-full h-full"
                style={{ minHeight: "60vh", border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
