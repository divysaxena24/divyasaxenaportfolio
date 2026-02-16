"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Mentorix - AI Career Intelligence Platform",
        description: "Architected AI platform using Next.js 16/PostgreSQL, orchestrating 5,000+ neural resume iterations. Integrated Groq LPU (60% latency reduction) and engineered Inngest workflows maintaining 99.9% success rate.",
        tech: ["Next.js", "PostgreSQL", "Groq LPU", "Inngest"],
        github: "https://github.com/divysaxena24/Mentorix",
        live: "https://mentorix-coach.vercel.app/",
        color: "from-blue-500/20 to-purple-500/20",
        image: "/mentorix.png",
    },
    {
        title: "HeartRoofers - Full-Stack Rental Marketplace",
        description: "Built Node.js/MongoDB platform for 100+ verified listings. Developed Glassmorphism UI (25% engagement increase) and secured 15+ API endpoints achieving 100% integrity and 40% faster delivery.",
        tech: ["Node.js", "MongoDB", "Express", "Tailwind"],
        github: "https://github.com/divysaxena24/HeartRoofers",
        live: "https://heartroofers.onrender.com/",
        color: "from-green-500/20 to-emerald-500/20",
        image: "/heartroofers.png",
    },
    {
        title: "Trackify - AI-Powered Price Monitoring System",
        description: "Engineered Next.js/Supabase tracker for 500+ products with 99% alert accuracy. Developed a Chrome Extension reducing product addition time by 80% for users.",
        tech: ["Next.js", "Supabase", "Chrome Extension", "Puppeteer"],
        github: "https://github.com/divysaxena24/Trackify",
        live: "https://trackify-it.vercel.app/",
        color: "from-orange-500/20 to-red-500/20",
        image: "/trackify.png",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Subtle background glow for visual consistency */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all flex flex-col lg:flex-row shadow-lg hover:shadow-primary/10 min-h-[350px]"
                        >
                            <div className={cn("relative h-64 lg:h-auto lg:w-[42%] overflow-hidden transition-all duration-500", project.color)}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"
                                            title="View Code"
                                        >
                                            <Github className="w-6 h-6 text-white" />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"
                                            title="Live Demo"
                                        >
                                            <ExternalLink className="w-6 h-6 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 lg:p-10 flex-grow flex flex-col justify-center lg:w-[58%]">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-secondary text-base leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((t, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1.5 bg-white/5 rounded-xl text-xs font-mono text-primary/80 border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6 pt-6 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors group/link"
                                        >
                                            <Github className="w-5 h-5 group-hover/link:text-primary" />
                                            View Source
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors group/link"
                                        >
                                            <ExternalLink className="w-5 h-5 group-hover/link:text-primary" />
                                            Live Experience
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.a
                        href="https://github.com/divysaxena24?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-10 py-5 rounded-3xl bg-primary text-secondary-foreground font-bold text-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all group"
                    >
                        View All Projects
                        <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
