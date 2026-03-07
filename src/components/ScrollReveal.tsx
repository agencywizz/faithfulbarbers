"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: string;
  className?: string;
  once?: boolean;
  threshold?: number;
}

function getInitialTransform(direction: Direction, distance: string): string {
  switch (direction) {
    case "up":    return `translateY(${distance})`;
    case "down":  return `translateY(-${distance})`;
    case "left":  return `translateX(${distance})`;
    case "right": return `translateX(-${distance})`;
    case "none":  return "none";
  }
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = "40px",
  className,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const initialTransform = getInitialTransform(direction, distance);

    // Set initial hidden state
    el.style.opacity = "0";
    el.style.transform = initialTransform === "none" ? "" : initialTransform;
    el.style.willChange = "opacity, transform";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation after delay
            const timeout = setTimeout(() => {
              el.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`;
              el.style.opacity = "1";
              el.style.transform = "none";
              el.style.willChange = "auto";
            }, 0);

            if (once) {
              observer.unobserve(el);
            }

            return () => clearTimeout(timeout);
          } else if (!once) {
            // Reset to hidden state if not once
            el.style.transition = "";
            el.style.opacity = "0";
            el.style.transform = initialTransform === "none" ? "" : initialTransform;
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [direction, delay, duration, distance, once, threshold]);

  const style: CSSProperties = {
    opacity: 0,
    transform: getInitialTransform(direction, distance) === "none"
      ? undefined
      : getInitialTransform(direction, distance),
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
