"use client";

import React, { useState, useEffect } from "react";
import { siGithub } from "simple-icons";

import emailjs from "@emailjs/browser";
import { Mail, Code2, Database, Server, Globe } from "lucide-react";
import { SimpleIcon } from "./SimpleIcon";

const Portfolio = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const handleFormSubmission = async (
        e: React.MouseEvent<HTMLButtonElement>,
    ) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const projects = [
        {
            title: "Academic Performance Predictor",
            description:
                "ML thesis project analyzing 10,000+ student records to predict at-risk students before term start. Trained and compared multiple models, optimizing for early intervention and strong recall.",
            tech: ["Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib"],
            github: "https://colab.research.google.com/drive/1dbSOsK6OuZt8_3qFSeR3aWb0VLV-3f63?usp=sharing",
        },
        {
            title: "Company Meeting Scheduler",
            description:
                "Full-stack web application for managing company-wide meetings, featuring Google Calendar integration, a scheduling dashboard, and streamlined meeting management.",
            tech: ["Next.js", "TypeScript", "Python"],
            github: "https://github.com/ariyoujustcode/Timeslot-Seeker-Frontend",
        },
        {
            title: "CipherForge: Encryption & Decryption CLI Tool",
            description:
                "Command-line cryptography tool for encrypting and decrypting binary or plaintext inputs, providing a simple interface for secure data handling.",
            tech: ["Python"],
            github: "https://github.com/ariyoujustcode/Encryption-and-Decryption-CLI-Tool",
        },
        {
            title: "BoardUp: Community Board Game Meetup App",
            description:
                "Mobile application previously published on Google Play store. Platform that connects board game enthusiasts and organizes meetup events.",
            tech: ["Dart", "Flutter"],
            github: "https://github.com/ariyoujustcode/Encryption-and-Decryption-CLI-Tool",
        },
    ];

    const skills = [
        {
            category: "Frontend",
            items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            icon: <Globe className="w-6 h-6" />,
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "REST APIs", "GraphQL"],
            icon: <Server className="w-6 h-6" />,
        },
        {
            category: "Database",
            items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
            icon: <Database className="w-6 h-6" />,
        },
        {
            category: "Tools",
            items: ["Git", "Vercel", "AWS", "Jest"],
            icon: <Code2 className="w-6 h-6" />,
        },
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Ari Marine
                    </div>

                    {/* Desktop Menu */}
                    <div className="text-slate-300 hidden md:flex text-md gap-6 md:text-lg">
                        {["Home", "Projects", "Skills", "Contact"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-cyan-400 transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            ),
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-3xl text-cyan-400 transition-transform duration-300 z-100 relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Full Screen Menu - OUTSIDE NAV */}
            <div
                className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-2xl text-cyan-400 transform transition-all duration-500 md:hidden ${
                    isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-full pointer-events-none"
                }`}
            >
                {["Home", "Projects", "Skills", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-slate-300 transition-colors duration-200"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center px-6 pt-20"
            >
                <div className="max-w-4xl text-center">
                    <div className="mb-6">
                        <h1 className="text-6xl font-bold mb-4 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                            Full Stack Developer
                        </h1>
                        <div className="h-1 w-32 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                        Building scalable web applications with Next.js,
                        TypeScript, and modern technologies. Passionate about
                        clean code, user experience, and continuous learning.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="#projects"
                            className="flex items-center content-center decoration-none px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center content-center decoration-none px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </div>
                    <div className="flex gap-6 justify-center items-center mt-8">
                        <a
                            href="https://github.com/ariyoujustcode"
                            target="_blank"
                            className="hover:text-cyan-400 transition-colors"
                        >
                            <SimpleIcon
                                icon={siGithub}
                                size={18}
                                color={"#FFFFFF"}
                            />
                        </a>
                        <a
                            href="mailto:americanadvocate@duck.com"
                            className="hover:text-cyan-400 transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Featured{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
                            >
                                <h3 className="text-xl font-bold mb-3 text-cyan-400 text-center">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SimpleIcon
                                            icon={siGithub}
                                            size={10}
                                            color={"#FFFFFF"}
                                        />{" "}
                                        Code
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Technical{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillGroup, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-cyan-400">
                                        {skillGroup.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        {skillGroup.category}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <li
                                            key={i}
                                            className="text-slate-300 text-sm flex items-center gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Get In{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none text-white"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                onClick={handleFormSubmission}
                                disabled={
                                    status === "loading" ||
                                    !formData.name ||
                                    !formData.email ||
                                    !formData.message
                                }
                                className="w-full px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading"
                                    ? "Sending..."
                                    : status === "success"
                                      ? "✓ Message Sent!"
                                      : status === "error"
                                        ? "✗ Failed - Try Again"
                                        : "Send Message"}
                            </button>
                            {status === "success" && (
                                <p className="text-green-400 text-sm text-center">
                                    Thanks for reaching out! I will get back to
                                    you soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-sm text-center">
                                    Something went wrong. Please try again or
                                    email me directly.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-slate-800 text-center text-slate-400">
                <p>
                    © 2026 Ari Marine. Built with Next.js, TypeScript, and
                    Tailwind CSS.
                </p>
            </footer>
        </div>
    );
};

export default Portfolio;
