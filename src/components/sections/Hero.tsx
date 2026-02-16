"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, Rocket } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Particles/Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-700" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                        <span className="text-primary/90 tracking-wide">Available for New Opportunities</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
                >
                    Hi, I&apos;m <span className="text-gradient">Divya Saxena</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-text-secondary mb-10 h-12"
                >
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            800,
                            "AI Enthusiast",
                            800,
                            "Open Source Contributor",
                            800,
                            "Problem Solver",
                            800,
                        ]}
                        wrapper="span"
                        speed={75}
                        repeat={Infinity}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="w-full md:w-auto px-8 py-4 bg-primary text-secondary-foreground font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                    >
                        <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="w-full md:w-auto px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform text-primary" />
                        Contact Me
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Divya_Saxena_Resume.pdf"
                        className="w-full md:w-auto px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16 flex items-center justify-center gap-8"
                >
                    <a href="https://github.com/divysaxena24" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/divyasaxena24/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:divysaxena2402@gmail.com" className="text-text-secondary hover:text-white transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
