"use client";

import React, { useState, useEffect } from "react";

import emailjs from "@emailjs/browser";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code2,
    Database,
    Server,
    Globe,
} from "lucide-react";

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleFormSubmission = async (
        e: React.MouseEvent<HTMLButtonElement>
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
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
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
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce application with Next.js, TypeScript, Prisma, and Stripe integration. Features include product management, cart functionality, and secure checkout.",
            tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
            github: "https://github.com/yourusername/ecommerce",
            live: "https://demo.com",
        },
        {
            title: "Task Management App",
            description:
                "Real-time collaborative task manager built with Next.js App Router, Server Actions, and WebSocket integration for live updates.",
            tech: ["Next.js 14", "TypeScript", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/yourusername/taskmanager",
            live: "https://demo.com",
        },
        {
            title: "API Analytics Dashboard",
            description:
                "Analytics dashboard for tracking API usage metrics with real-time charts, user authentication, and role-based access control.",
            tech: ["Next.js", "TypeScript", "Node.js", "Redis", "Recharts"],
            github: "https://github.com/yourusername/analytics",
            live: "https://demo.com",
        },
    ];

    const skills = [
        {
            category: "Frontend",
            items: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "HTML/CSS",
            ],
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
            items: ["Git", "Docker", "Vercel", "AWS", "Jest"],
            icon: <Code2 className="w-6 h-6" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* Navigation */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        YourName
                    </div>
                    <div className="flex gap-6">
                        {["Home", "Projects", "Skills", "Contact"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-cyan-400 transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center px-6 pt-20"
            >
                <div className="max-w-4xl text-center">
                    <div className="mb-6">
                        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                            Full Stack Developer
                        </h1>
                        <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                        Building scalable web applications with Next.js,
                        TypeScript, and modern technologies. Passionate about
                        clean code, user experience, and continuous learning.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>
                    <div className="flex gap-6 justify-center mt-8">
                        <a
                            href="https://github.com/yourusername"
                            className="hover:text-cyan-400 transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            className="hover:text-cyan-400 transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="hover:text-cyan-400 transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
                            >
                                <h3 className="text-xl font-bold mb-3 text-cyan-400">
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
                                    >
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />{" "}
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-slate-900/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Technical{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    © 2025 Your Name. Built with Next.js, TypeScript, and
                    Tailwind CSS.
                </p>
            </footer>
        </div>
    );
};

export default Portfolio;
