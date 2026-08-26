import React, { useEffect, useState, useRef } from 'react';

export const CursorSpotlight: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable spotlight on devices that support fine hover pointers (desktops/laptops)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      posRef.current.x = lerp(posRef.current.x, posRef.current.targetX, 0.15);
      posRef.current.y = lerp(posRef.current.y, posRef.current.targetY, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 w-[550px] h-[550px] rounded-full pointer-events-none z-30 transition-opacity duration-500 ease-out will-change-transform ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background:
          'radial-gradient(circle 280px at center, rgba(59, 130, 246, 0.12), rgba(99, 102, 241, 0.06), rgba(147, 197, 253, 0.02), transparent 70%)',
      }}
    />
  );
};
