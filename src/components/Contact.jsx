import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        // Normally, send form data using an API or service like Formspree
    }

    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact</h2>
                <p className="mb-6">
                    Let's connect! Reach out for collaboration, questions, or just to say hi.
                </p>
                {/* {submitted ? (
                    <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded">
                        Thank you for your message! I will get back to you soon.
                    </div>
                ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border rounded focus:outline-none"
                            required
                            value={form.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border rounded focus:outline-none"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your Message"
                            className="w-full px-4 py-2 border rounded focus:outline-none"
                            required
                            value={form.message}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                )} */}
                <div className="mt-8 flex items-center space-x-4">
                    <FaEnvelope className="text-xl" />
                    <span>agusfuad090@gmail.com</span>
                    <a href="https://github.com/MaedaKenji" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl ml-4" />
                    </a>
                    <span>MaedaKenji</span>
                    <a href="https://www.linkedin.com/in/agus4434/" target="_blank">
                        <FaLinkedin className="text-2xl ml-4" />
                    </a>
                    <span>Agus Fuad</span>
                </div>
            </div>
        </section>
    );
}