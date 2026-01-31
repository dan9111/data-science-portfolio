"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Github, Linkedin } from "lucide-react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#certifications", label: "Certifications" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="glass-nav border-b border-border fixed top-0 w-full z-50">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center py-3">
                <div className="flex w-full max-w-[960px] items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4 text-foreground">
                        <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">scatter_plot</span>
                        </div>
                        <h2 className="text-foreground text-lg font-bold leading-tight tracking-tight">
                            Zydan P.
                        </h2>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                        <nav className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex gap-2">
                            <Link
                                href="https://github.com/dan9111"
                                target="_blank"
                                className="flex items-center justify-center rounded-lg size-10 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <Github className="size-5" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/muhammadzydan"
                                target="_blank"
                                className="flex items-center justify-center rounded-lg size-10 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <Linkedin className="size-5" />
                            </Link>
                            <ModeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <nav className="flex flex-col px-4 py-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex gap-2 pt-2 border-t border-border">
                            <Link
                                href="https://github.com/dan9111"
                                target="_blank"
                                className="flex items-center justify-center rounded-lg size-10 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <Github className="size-5" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/muhammadzydan"
                                target="_blank"
                                className="flex items-center justify-center rounded-lg size-10 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <Linkedin className="size-5" />
                            </Link>
                            <ModeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
