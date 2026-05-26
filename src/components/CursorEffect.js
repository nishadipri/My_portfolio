import { useEffect, useRef } from "react";
import "./CursorEffect.css";

function CursorEffect() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let rafId;

    function onMouseMove(e) {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        outline.style.left = `${x}px`;
        outline.style.top = `${y}px`;

        const target = e.target;
        const isPointer =
          window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON";

        outline.classList.toggle("cursor-hover", isPointer);
        document.body.classList.remove("keyboard-user");
      });
    }

    function onKeyDown(e) {
      if (e.key === "Tab") document.body.classList.add("keyboard-user");
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}

export default CursorEffect;
