"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Key, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "email" | "otp" | "message" | "success";

const Contact = () => {
    const [step, setStep] = useState<Step>("email");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            if (res.ok) setStep("otp");
            else setError("Failed to send OTP. Please try again.");
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });
            if (res.ok) setStep("message");
            else setError("Invalid OTP. Please try again.");
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, message }),
            });
            if (res.ok) setStep("success");
            else setError("Failed to send message. Please try again.");
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                            Get In <span className="text-primary">Touch</span>
                        </h2>
                        <p className="text-text-secondary">Let&apos;s build something amazing together.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Info Part */}
                        <div>
                            <div className="glass p-8 rounded-3xl border border-white/5 space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-text-secondary">
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <span>divysaxena2402@gmail.com</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <h4 className="text-white font-bold mb-4">Why OTP Verification?</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        To ensure secure communication and prevent spam, I use a simple OTP verification system.
                                        It takes just a few seconds and keeps our conversation professional.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form Part */}
                        <div className="glass p-8 rounded-3xl border border-white/5 min-h-[400px] flex flex-col justify-center">
                            {error && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-xl">
                                    {error}
                                </div>
                            )}

                            {step === "email" && (
                                <form onSubmit={handleSendOTP} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        disabled={loading}
                                        className="w-full bg-primary py-4 rounded-2xl font-bold text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                    >
                                        {loading ? "Sending..." : "Send OTP"}
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            )}

                            {step === "otp" && (
                                <form onSubmit={handleVerifyOTP} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">Enter 6-Digit OTP</label>
                                        <div className="relative">
                                            <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                            <input
                                                type="text"
                                                required
                                                maxLength={6}
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 tracking-[1em] font-bold transition-all text-center"
                                                placeholder="••••••"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        disabled={loading}
                                        className="w-full bg-primary py-4 rounded-2xl font-bold text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                    >
                                        {loading ? "Verifying..." : "Verify OTP"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep("email")}
                                        className="w-full text-sm text-text-secondary hover:text-white transition-colors"
                                    >
                                        Change Email
                                    </button>
                                </form>
                            )}

                            {step === "message" && (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                                <input
                                                    type="text"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-white/20" />
                                                <textarea
                                                    required
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    rows={4}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                                                    placeholder="Enter your message..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        disabled={loading}
                                        className="w-full bg-primary py-4 rounded-2xl font-bold text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                    >
                                        {loading ? "Sending Message..." : "Send Message"}
                                    </button>
                                </form>
                            )}

                            {step === "success" && (
                                <div className="text-center space-y-6">
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                    <p className="text-text-secondary">
                                        Thank you, {name}! I&apos;ve received your message and will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setStep("email");
                                            setEmail("");
                                            setOtp("");
                                            setName("");
                                            setMessage("");
                                        }}
                                        className="w-full bg-white/5 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
