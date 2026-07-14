"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** stagger step: 0, 1, 2 or 3 — matches the .rv-1/.rv-2/.rv-3 delay classes */
  delay?: 0 | 1 | 2 | 3;
  as?: "div" | "span";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = as;
  return (
    <Comp
      ref={ref as never}
      data-seen={seen}
      className={cn("rv", delay > 0 && `rv-${delay}`, className)}
    >
      {children}
    </Comp>
  );
}
