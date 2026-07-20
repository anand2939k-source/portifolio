import React, { useEffect, useRef } from 'react';

export default function MatrixRain({ opacity = 0.08 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize handler
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters list (binary + cybersecurity characters)
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*+=:<>?/🔐💀💻';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    const drops = Array(columns).fill(1);

    const draw = () => {
      // Clear with slight transparency to create trail effect
      ctx.fillStyle = `rgba(10, 14, 23, ${0.12})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text parameters
      ctx.font = `${fontSize}px var(--font-mono)`;

      drops.forEach((y, x) => {
        // Pick random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Alternate colors between cyber-cyan and cyber-green for futuristic look
        const color = Math.random() > 0.5 ? '#00ff9d' : '#00d4ff';
        ctx.fillStyle = color;

        // Draw character
        ctx.fillText(char, x * fontSize, y * fontSize);

        // Reset drops if they exceed screen height, with a randomized restart delay
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[x] = 0;
        }

        drops[x]++;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Start drawing
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ opacity }}
    />
  );
}
