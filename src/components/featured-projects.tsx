"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
    const featuredProject = projects[0];
    const otherProjects = projects.slice(1);

    return (
        <div className="space-y-12">
            {/* Featured Project */}
            <div className="w-full rounded-3xl relative overflow-hidden border border-border group bg-card">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        fill
                        className="object-cover opacity-15 group-hover:opacity-20 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50"></div>
                </div>
                <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                            <span className="material-symbols-outlined text-sm">star</span> Capstone Project
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                                {featuredProject.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                {featuredProject.description}
                            </p>
                        </div>
                        <div className="pt-2 flex gap-4 flex-wrap">
                            <Link
                                href={featuredProject.presentationLink}
                                target="_blank"
                                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all text-sm"
                            >
                                View Presentation
                            </Link>
                            <Link
                                href={featuredProject.githubLink}
                                target="_blank"
                                className="px-6 py-3 border border-border text-foreground font-bold rounded-lg hover:border-primary transition-colors text-sm"
                            >
                                GitHub Repo
                            </Link>
                        </div>
                    </div>
                    {/* Project Image Preview */}
                    <div className="hidden lg:block w-full max-w-[380px] relative shrink-0">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card">
                            <Image
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((project, index) => (
                    <div key={index} className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/30 transition-colors"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href={project.presentationLink}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                                >
                                    View Project <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                </Link>
                                <Link
                                    href={project.githubLink}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Code <span className="material-symbols-outlined text-sm">code</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
