"use client";

import Typewriter from "typewriter-effect";

interface TypingAnimationProps {
    text?: string;
    words?: string[];
    className?: string;
}

export function TypingAnimation({ text, words, className = "" }: TypingAnimationProps) {
    return (
        <div className={className}>
            <Typewriter
                options={{
                    strings: words || (text ? [text] : []),
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                }}
            />
        </div>
    );
}
