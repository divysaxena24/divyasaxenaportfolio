"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Divya Saxena</h3>
                        <p className="text-text-secondary text-sm">Building the future of AI and Web.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/divysaxena24" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/divyasaxena24/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:divysaxena2402@gmail.com" className="text-text-secondary hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
