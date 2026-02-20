import React, { useEffect, useState } from "react";
import "./CursorEffect.css";

function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      document.body.classList.remove("keyboard-user");

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      );
    };

    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-user");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${isPointer ? "cursor-hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}

export default CursorEffect;
