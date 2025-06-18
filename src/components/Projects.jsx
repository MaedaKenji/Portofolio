import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Sappy",
    description:
      "A Flutter-based application for multi-role management in a livestock environment. Features interfaces for farmers, administrators, and doctors. Utilizes modern Flutter packages and custom providers for state and business logic management.",
    url: "https://github.com/MaedaKenji/Protel-sappy/tree/main",
    tags: ["Flutter", "Dart", "PostgreSQL", "JavaScript"],
  },
  {
    name: "OpenCV Poker Game",
    description:
      "A computer vision-powered Poker game built with OpenCV and Python (Jupyter Notebook). Supports real-time card recognition and interactive gameplay.",
    url: "https://github.com/MaedaKenji/OpenCV-PokerGame",
    tags: ["Python", "OpenCV", "Jupyter"],
  },
  {
    name: "Alien Space",
    description:
      "A 2D arcade-style space shooter game developed using C and C++ graphics programming. Includes aliens, bullets, collision detection, and scorekeeping.",
    url: "https://github.com/MaedaKenji/Alien-Space",
    tags: ["C", "C++", "GameDev"],
  },
  {
    name: "Dot Matrix Ping Pong",
    description:
      "A microcontroller-based two-player Ping Pong game featuring an 8x32 LED dot matrix display and custom C++ firmware.",
    url: "https://github.com/MaedaKenji/your-dot-matrix-ping-pong-repo",
    tags: ["C++", "Embedded", "Arduino"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="bg-white rounded-lg shadow p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-700 flex-1 mb-3 text-justify">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline font-semibold"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          ))}
          
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-700">
            Want to see more? Visit my{" "}
            <a
              href="https://github.com/MaedaKenji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              GitHub profile
            </a>
            {" "}for additional projects!
          </p>
        </div>
      </div>
    </section>
  );
}