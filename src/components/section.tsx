"use client"

import { CSSProperties, useRef } from "react";
import { useInView } from "framer-motion";

export default function Section({ children, className, style }: { children: React.ReactNode ,className?: string, style?: CSSProperties }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
    
        return (
            <section ref={ref} className={className}>
                <span
                className="justify-items-start items-center uppercase font-extrabold flex text-8xl"
                    style={style ?? {
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    {children}
                </span>
            </section>
        );
}
