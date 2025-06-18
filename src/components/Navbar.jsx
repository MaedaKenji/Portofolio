import React from "react";

export default function Navbar() {
    return (
        <header className="bg-white shadow sticky top-0 z-30">
            <nav className="container mx-auto flex px-4 py-3 justify-center">
                <ul className="flex space-x-6 font-semibold">
                    <li>
                        <a href="#about" className="hover:text-blue-600 duration-150">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-blue-600 duration-150">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-600 duration-150">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}