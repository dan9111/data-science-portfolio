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
                        <div className="flex flex-wrap gap-2">
                            {featuredProject.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="bg-primary/20 text-primary border-none">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="pt-2 flex gap-4 flex-wrap">
                            <Link
                                href={featuredProject.presentationLink}
                                target="_blank"
                                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 btn-glow transition-all text-sm"
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
                    {/* Code Preview Panel */}
                    <div className="hidden lg:block w-full max-w-[380px] relative shrink-0">
                        <div className="bg-background/90 backdrop-blur-xl rounded-xl border border-border p-5 font-mono text-xs text-muted-foreground code-glow relative overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="flex gap-1.5 mb-4 border-b border-border/30 pb-3">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="space-y-1">
                                <p><span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd</p>
                                <p><span className="text-purple-400">from</span> sklearn.model_selection <span className="text-purple-400">import</span> train_test_split</p>
                                <br />
                                <p><span className="text-gray-500"># Load and process data</span></p>
                                <p>df = pd.read_csv(<span className="text-green-400">&apos;spacex_data.csv&apos;</span>)</p>
                                <p>X = df.drop(<span className="text-red-400">columns</span>=[<span className="text-green-400">&apos;class&apos;</span>])</p>
                                <p>y = df[<span className="text-green-400">&apos;class&apos;</span>]</p>
                                <br />
                                <p><span className="text-blue-400">def</span> <span className="text-yellow-300">predict_landing</span>(features):</p>
                                <p className="pl-4">X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)</p>
                                <p className="pl-4">model.fit(X_train, y_train)</p>
                                <p className="pl-4"><span className="text-purple-400">return</span> model.predict(features)</p>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((project, index) => (
                    <div key={index} className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 card-glow">
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/30 transition-colors"></div>
                            <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                                {project.tags.slice(0, 3).map((tag, i) => (
                                    <span key={i} className="px-2 py-1 text-xs font-bold bg-primary/20 text-primary rounded-md backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
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
