import { useRef, useEffect } from "react";
import {
  portraitData,
  portraitCols,
  portraitRows,
} from "../data/portraitData.js";

function AsciiPortrait() {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: -1000, y: -1000 });
  const startLoopRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const cellW = 4.5;
    const cellH = 8;
    const logicalWidth = portraitCols * cellW;
    const logicalHeight = (portraitRows + 1) * cellH;
    const dpr = window.devicePixelRatio || 1;
    const fontSpec = "7.5px 'Fira Code'";

    canvas.width = logicalWidth * dpr;
    canvas.height = logicalHeight * dpr;
    canvas.style.width = `${logicalWidth}px`;
    canvas.style.height = `${logicalHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const particles = portraitData.map((p) => ({
      ...p,
      originX: p.x * cellW,
      originY: p.y * cellH + cellH,
      x: p.x * cellW,
      y: p.y * cellH + cellH,
    }));

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let prefersReducedMotion = reducedMotionQuery.matches;
    let isVisible = true;
    let animationId = null;
    let isCancelled = false;

    function drawStatic() {
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      ctx.font = `${fontSpec}, monospace`;
      ctx.fillStyle = "#64ffda";

      for (const p of particles) {
        p.x = p.originX;
        p.y = p.originY;
        ctx.fillText(p.char, p.x, p.y);
      }
    }

    function animate() {
      animationId = null;
      if (!isVisible || isCancelled) return;

      if (prefersReducedMotion) {
        drawStatic();
        return;
      }

      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      ctx.font = `${fontSpec}, monospace`;
      ctx.fillStyle = "#64ffda";

      let hasActiveMotion = false;
      const pointerX = pointerRef.current.x;
      const pointerY = pointerRef.current.y;

      for (const p of particles) {
        const dx = p.x - pointerX;
        const dy = p.y - pointerY;
        const dist = Math.hypot(dx, dy);

        if (dist < 60 && dist > 0) {
          const force = (60 - dist) / 60;
          p.x += (dx / dist) * force * 6;
          p.y += (dy / dist) * force * 6;
          hasActiveMotion = true;
        }

        const returnDx = p.originX - p.x;
        const returnDy = p.originY - p.y;

        if (Math.abs(returnDx) > 0.05 || Math.abs(returnDy) > 0.05) {
          p.x += returnDx * 0.1;
          p.y += returnDy * 0.1;
          hasActiveMotion = true;
        } else {
          p.x = p.originX;
          p.y = p.originY;
        }

        ctx.fillText(p.char, p.x, p.y);
      }

      if (hasActiveMotion) {
        animationId = requestAnimationFrame(animate);
      }
    }

    function startLoop() {
      if (animationId === null && isVisible && !prefersReducedMotion) {
        animationId = requestAnimationFrame(animate);
      }
    }

    startLoopRef.current = startLoop;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoop();
        } else if (animationId !== null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(canvas);

    const handleMotionChange = (event) => {
      prefersReducedMotion = event.matches;
      if (prefersReducedMotion) {
        if (animationId !== null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        drawStatic();
      }
    };

    reducedMotionQuery.addEventListener("change", handleMotionChange);
    drawStatic();

    if (document.fonts) {
      document.fonts
        .load(fontSpec)
        .then(() => {
          if (!isCancelled && animationId === null) {
            drawStatic();
          }
        })
        .catch(() => {});

      document.fonts.ready.then(() => {
        if (!isCancelled && animationId === null) {
          drawStatic();
        }
      });
    }

    return () => {
      isCancelled = true;
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      observer.disconnect();
      reducedMotionQuery.removeEventListener("change", handleMotionChange);
      startLoopRef.current = null;
    };
  }, []);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    startLoopRef.current?.();
  };

  const handlePointerLeave = () => {
    pointerRef.current = { x: -1000, y: -1000 };
    startLoopRef.current?.();
  };

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Interactive ASCII portrait of Philipp Metz"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
    />
  );
}

export default AsciiPortrait;
