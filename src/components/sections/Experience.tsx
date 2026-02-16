"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        role: "Contributor",
        company: "GirlScript Summer of Code (GSSoC)",
        period: "August 2025 - October 2025",
        description: [
            "Contributing to 5+ open-source projects by fixing bugs, building features, and improving documentation.",
            "Submitted 20+ pull requests, with 5+ PRs successfully merged across multiple repositories.",
            "Collaborating with mentors and contributors via GitHub and Discord to review code and deliver reliable solutions.",
        ],
    },
    {
        role: "Contributor",
        company: "Open Source Connect India (OSCI)",
        period: "July 2025 - September 2025",
        description: [
            "Contributed to 8+ open-source projects, working on bug fixes, feature enhancements, and documentation improvements.",
            "Submitted 10+ pull requests, with 4+ PRs successfully merged across multiple repositories.",
            "Collaborated with developers using Git and GitHub, following open-source workflows and best coding practices.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Professional <span className="text-primary">Journey</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1.5 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    />
                </motion.div>

                <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative mb-16 last:mb-0 ml-8"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-[-40px] top-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(99,102,241,0.6)] border-4 border-background z-20" />

                            {/* Content Card */}
                            <div className="w-full group">
                                <div className="glass p-8 rounded-[2rem] border border-white/5 group-hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/5 relative overflow-hidden">
                                    {/* Accent border strip */}
                                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary/40 rounded-full" />

                                    <div className="relative z-10">
                                        <div className="flex flex-col gap-1 mb-4">
                                            <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-sm uppercase">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-lg font-medium text-white/80">{exp.company}</p>
                                        </div>

                                        <ul className="space-y-4">
                                            {exp.description.map((item, iIdx) => (
                                                <motion.li
                                                    key={iIdx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: (idx * 0.1) + (iIdx * 0.1) }}
                                                    className="flex gap-3 text-text-secondary group/item"
                                                >
                                                    <ChevronRight className="w-4 h-4 mt-1 text-primary shrink-0 group-hover/item:translate-x-1 transition-transform" />
                                                    <span className="text-sm md:text-base leading-relaxed group-hover/item:text-white transition-colors">
                                                        {item}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
