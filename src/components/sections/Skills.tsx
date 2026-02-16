"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Monitor,
    Server,
    Database,
    Wrench
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
    {
        title: "Programming",
        icon: <Code2 className="w-6 h-6 text-indigo-400" />,
        skills: ["Java (DSA)", "JavaScript", "Python"],
        glow: "bg-indigo-500/10",
    },
    {
        title: "Frontend",
        icon: <Monitor className="w-6 h-6 text-emerald-400" />,
        skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "DOM Manipulation", "Responsive Design"],
        glow: "bg-emerald-500/10",
    },
    {
        title: "Backend",
        icon: <Server className="w-6 h-6 text-blue-400" />,
        skills: ["Node.js", "Express.js", "REST API Development", "Authentication", "API Integration"],
        glow: "bg-blue-500/10",
    },
    {
        title: "Databases",
        icon: <Database className="w-6 h-6 text-amber-400" />,
        skills: ["PostgreSQL (Supabase)", "MongoDB", "MySQL"],
        glow: "bg-amber-500/10",
    },
    {
        title: "Tools & Platforms",
        icon: <Wrench className="w-6 h-6 text-purple-400" />,
        skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Chrome Extension Development"],
        glow: "bg-purple-500/10",
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1.5 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative glass p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all group overflow-hidden h-full min-h-[280px] flex flex-col shadow-2xl hover:shadow-primary/5"
                        >
                            {/* Inner Card Glow Overlay */}
                            <div className={cn("absolute -inset-20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none", category.glow)} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, sIdx) => (
                                        <motion.span
                                            key={sIdx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: (idx * 0.1) + (sIdx * 0.05) }}
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                borderColor: "rgba(99, 102, 241, 0.4)",
                                                color: "#fff"
                                            }}
                                            className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-text-secondary transition-all cursor-default font-medium shadow-inner"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Corner accent decorative element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
