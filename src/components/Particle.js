import React, { useMemo } from "react";
import "../styles/particle.css";

function Particle() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,         // 1–3 px
        x: Math.random() * 100,               // % across viewport
        y: Math.random() * 100,               // % down viewport
        duration: Math.random() * 20 + 8,    // 8–28 s cycle
        delay: -(Math.random() * 20),         // negative = start mid-cycle
        opacity: Math.random() * 0.4 + 0.1,  // 0.1–0.5
      })),
    []
  );

  return (
    <div className="particle-bg" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="particle-star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            "--base-opacity": star.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default Particle;
