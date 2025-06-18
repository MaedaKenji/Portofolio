import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-blue-100 via-white to-pink-100 py-20" id="home">
            <div className="container mx-auto flex flex-col items-center text-center">
                <img
                    src="./images/PAS FOTO Upscale.png"
                    alt="Agus Fuad avatar"
                    className="rounded-full w-32 h-32 shadow-lg mb-6 border-4 border-blue-400 object-cover object-[50%_20%] "
                />
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Agus Fuad</h1>
                <p className="text-xl max-w-2xl mb-6">
                    Leveraging a robust toolkit including C/C++, Python, Computer Vision, Game Development, React, Vite, Svelte, Tailwind CSS, JavaScript, TypeScript, and Flutter, I craft innovative solutions across embedded systems, IoT, computer vision, interactive games, and dynamic web/mobile experiences.
                </p>
                <div className="flex space-x-4 justify-center mb-4">
                    <a
                        href="https://github.com/MaedaKenji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black text-2xl"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/your-linkedin" /* replace with your LinkedIn */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 text-2xl"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
                <a
                    href="#projects"
                    className="inline-block mt-4 px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                    View Projects
                </a>
            </div>
        </section>
    );
}