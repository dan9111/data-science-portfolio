"use client";

import { skills } from "@/data/skills";
import Image from "next/image";

export function SkillsGrid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="bg-card p-4 rounded-xl border border-border hover:border-primary transition-all group flex flex-col items-center text-center gap-3"
                >
                    <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                        <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="text-foreground font-semibold text-sm">{skill.name}</h3>
                </div>
            ))}
        </div>
    );
}
