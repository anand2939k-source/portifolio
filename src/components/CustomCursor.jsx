import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Track hover status
  const [hovered, setHovered] = useState(false);

  // Core coordinates and visibility stored in refs to bypass React render cycle
  const mousePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const isVisible = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      
      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Frame animation loop updating positions immediately on the GPU
  useEffect(() => {
    let animationFrameId;

    const renderCursor = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Linear interpolation smoothing for trailing ring
      const dx = mousePos.current.x - trailPos.current.x;
      const dy = mousePos.current.y - trailPos.current.y;
      
      trailPos.current.x += dx * 0.16;
      trailPos.current.y += dy * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(renderCursor);
    };

    animationFrameId = requestAnimationFrame(renderCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Hover selector detection
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glow-card') ||
        target.classList.contains('cursor-pointer');
      
      setHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {/* Inner dot - transform is updated immediately, size/color transition explicitly */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full opacity-0 hidden md:block ${
          hovered ? 'w-3 h-3 bg-cyber-green shadow-[0_0_8px_#00ff9d]' : 'w-1.5 h-1.5 bg-cyber-cyan shadow-[0_0_4px_#00d4ff]'
        }`}
        style={{ 
          willChange: 'transform', 
          transition: 'width 0.12s ease, height 0.12s ease, background-color 0.12s ease, box-shadow 0.12s ease, opacity 0.15s ease'
        }}
      />
      {/* Outer trailing ring */}
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border opacity-0 hidden md:block ${
          hovered 
            ? 'w-10 h-10 border-cyber-green bg-cyber-green/5 shadow-[0_0_12px_rgba(0,255,157,0.2)]' 
            : 'w-6 h-6 border-cyber-cyan/50 bg-transparent'
        }`}
        style={{ 
          willChange: 'transform', 
          transition: 'width 0.18s ease, height 0.18s ease, border-color 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease, opacity 0.15s ease'
        }}
      />
    </>
  );
}
