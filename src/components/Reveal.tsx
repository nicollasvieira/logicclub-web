import React, { useRef } from "react";
import { useInView } from "../hooks/use-in-view";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement> as any}
      className={`transition-all duration-700 ease-out transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
} 