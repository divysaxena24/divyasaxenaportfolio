"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Basic intersection observer logic for active section
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
                scrolled ? "mt-0 py-1" : "mt-2 py-3"
            )}
        >
            <div
                className={cn(
                    "max-w-7xl mx-auto px-8 py-4 rounded-full flex items-center justify-between transition-all duration-500",
                    scrolled || isOpen ? "bg-black/80 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-white/10" : "bg-transparent border-transparent"
                )}
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group flex items-center gap-2 cursor-pointer"
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center font-bold text-white text-xs group-hover:rotate-12 transition-transform">
                        DS
                    </div>
                    <a href="#home" className="text-xl font-bold tracking-tighter text-white hover:text-primary transition-colors">
                        Divya Saxena
                    </a>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link, index) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group",
                                    isActive ? "text-white" : "text-text-secondary hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white/10 rounded-full z-0"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </motion.a>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-20 left-6 right-6 p-6 rounded-3xl md:hidden overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-black/80 backdrop-blur-2xl border border-white/10"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "px-4 py-3 rounded-2xl text-lg font-medium transition-all flex items-center justify-between",
                                            isActive ? "bg-primary/20 text-white" : "text-text-secondary hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
