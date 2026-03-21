"use client";

import { useEffect, useState } from "react";

const layers = [
  { blur: 0.25, mask: "linear-gradient(to bottom, transparent 0%, black 12.5%, black 25%, transparent 37.5%)" },
  { blur: 0.5,  mask: "linear-gradient(to bottom, transparent 12.5%, black 25%, black 37.5%, transparent 50%)" },
  { blur: 1,    mask: "linear-gradient(to bottom, transparent 25%, black 37.5%, black 50%, transparent 62.5%)" },
  { blur: 2,    mask: "linear-gradient(to bottom, transparent 37.5%, black 50%, black 62.5%, transparent 75%)" },
  { blur: 4,    mask: "linear-gradient(to bottom, transparent 50%, black 62.5%, black 75%, transparent 87.5%)" },
  { blur: 8,    mask: "linear-gradient(to bottom, transparent 62.5%, black 75%, black 87.5%, transparent 100%)" },
  { blur: 16,   mask: "linear-gradient(to bottom, transparent 75%, black 87.5%, black 100%)" },
  { blur: 32,   mask: "linear-gradient(to bottom, transparent 87.5%, black 100%)" },
];

export default function ProgressiveBlur() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.01 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "200px",
        zIndex: 999,
        pointerEvents: "none",
      }}
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: layer.mask,
            WebkitMaskImage: layer.mask,
          }}
        />
      ))}
    </div>
  );
}
