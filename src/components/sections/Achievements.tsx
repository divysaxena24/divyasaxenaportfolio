"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Target, Zap } from "lucide-react";

const awards = [
    {
        title: "Hacknovate 6.0 Hackathon",
        subtitle: "Top 45 out of 180+ teams",
        date: "Apr 2025",
        description: "National-level hackathon achievement.",
        icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Smart India Hackathon 2025",
        subtitle: "Cleared Internal Round",
        date: "Sep 2025",
        description: "Successfully cleared the internal round among 600+ teams.",
        icon: <Star className="w-6 h-6 text-blue-500" />,
    },
    {
        title: "VibeCraft Hackathon - 2026",
        subtitle: "Top 20 out of 300+ teams",
        date: "Feb 2026",
        description: "Built an AI-based solution for the challenge.",
        icon: <Zap className="w-6 h-6 text-purple-500" />,
    },
    {
        title: "LeetCode Milestone",
        subtitle: "200+ Problems Solved",
        date: "Ongoing",
        description: "Strong foundation in DSA using Java.",
        icon: <Target className="w-6 h-6 text-red-500" />,
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Honors & <span className="text-primary">Awards</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {awards.map((award, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all flex items-start gap-6 group"
                        >
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shrink-0">
                                {award.icon}
                            </div>
                            <div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{award.title}</h3>
                                    <span className="text-sm font-mono text-primary/80">{award.date}</span>
                                </div>
                                <p className="text-primary text-sm font-semibold mb-2">{award.subtitle}</p>
                                <p className="text-text-secondary text-sm leading-relaxed">{award.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
