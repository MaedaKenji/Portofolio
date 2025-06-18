import React from "react";

export default function About() {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">About Me</h2>
                <p className="text-lg max-w-3xl">
                    Hi, I'm Agus Fuad, a passionate software engineer and maker with a strong background in C, C++, and Python. I love building interactive games, computer vision applications, and embedded systems.
                    <br /><br />
                    My portfolio includes real-time computer vision games, microcontroller projects, and educational demos. I enjoy learning new technologies and sharing my work on GitHub.
                    <br /><br />
                    <strong>Skills:</strong> C, C++, Python, OpenCV, Embedded Systems, Game Development, Jupyter Notebook, Graphics Programming, Git & GitHub.
                </p>
            </div>
        </section>
    );
}