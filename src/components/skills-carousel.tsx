"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { skills } from "@/data/skills";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

export function SkillsCarousel() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2500,
                }),
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
        >
            <CarouselContent>
                {skills.map((skill, index) => (
                    <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center">
                        <div className="p-4 flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-3 relative overflow-hidden shadow-sm ring-1 ring-border">
                                <Avatar className="w-full h-full">
                                    <AvatarImage src={skill.logo} alt={skill.name} className="object-contain" />
                                    <AvatarFallback>{skill.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                            </div>
                            <span className="font-medium text-center">{skill.name}</span>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
        </Carousel>
    );
}
