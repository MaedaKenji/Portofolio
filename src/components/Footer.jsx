import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 text-center py-6">
            <div>
                © {new Date().getFullYear()} MaedaKenji. Built with{" "}
                <a
                    className="underline hover:text-white"
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>{" "}
                &{" "}
                <a
                    className="underline hover:text-white"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tailwind CSS
                </a>
            </div>
        </footer>
    );
}