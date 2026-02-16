"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
    {
        icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
        label: "CGPA 9.4",
        description: "SRM University AP, B.Tech CSE",
        glow: "bg-indigo-500/20",
    },
    {
        icon: <Code2 className="w-6 h-6 text-emerald-400" />,
        label: "200+ Problems",
        description: "Solved on LeetCode (Java)",
        glow: "bg-emerald-500/20",
    },
    {
        icon: <Rocket className="w-6 h-6 text-blue-400" />,
        label: "Open Source",
        description: "30+ PRs @ GSSoC & OSCI",
        glow: "bg-blue-500/20",
    },
    {
        icon: <Award className="w-6 h-6 text-amber-400" />,
        label: "Hackathon Finalist",
        description: "Top 20 among 300+ teams",
        glow: "bg-amber-500/20",
    },
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-text-secondary leading-relaxed font-light">
                            I am a <span className="text-white font-medium">Full Stack Developer</span> and B.Tech CSE student at <span className="text-white font-medium">SRM University AP (2024-2028)</span> with a CGPA of <span className="text-primary font-medium">9.4</span>, specializing in building scalable web applications and AI-powered systems.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-light">
                            I have engineered real-world products including <span className="text-white font-medium">AI career intelligence platforms</span>, full-stack marketplaces, and <span className="text-white font-medium">automated price tracking systems</span>, focusing on performance, scalability, and user experience.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-light">
                            As an active open-source contributor with 13+ projects and a competitive programmer with <span className="text-white font-medium">200+ solved LeetCode problems</span>, I thrive in solving complex technical challenges and building production-ready systems.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-light">
                            I am currently preparing for engineering roles at <span className="text-primary font-semibold tracking-wide">FAANG</span> and top-tier tech companies, with a strong focus on system design, backend engineering, and AI-driven applications.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="relative glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group overflow-hidden"
                            >
                                {/* Subtle inner glow */}
                                <div className={cn("absolute -top-10 -left-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500", item.glow)} />

                                <div className="mb-6 relative z-10 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 w-fit">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-primary transition-colors">{item.label}</h3>
                                <p className="text-sm text-text-secondary relative z-10 leading-snug">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
