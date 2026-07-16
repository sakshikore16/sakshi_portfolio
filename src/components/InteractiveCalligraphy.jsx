import React, { useEffect, useRef } from 'react';
import './InteractiveCalligraphy.css';

export default function InteractiveCalligraphy() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0, active: false, speed: 0 });
  const linesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const m = mouseRef.current;
      m.px = m.x;
      m.py = m.y;
      m.x = x;
      m.y = y;

      const dx = m.x - m.px;
      const dy = m.y - m.py;
      m.speed = Math.sqrt(dx * dx + dy * dy);

      if (!m.active) {
        m.active = true;
        m.px = x;
        m.py = y;
        return;
      }

      if (m.speed > 1) {
        const computedStyles = window.getComputedStyle(document.documentElement);
        const primaryColor = computedStyles.getPropertyValue('--accent-rust').trim() || '#c85a32';
        const secondaryColor = computedStyles.getPropertyValue('--accent-gold').trim() || '#b3893c';
        const targetWidth = Math.max(1.5, 12 - m.speed * 0.25);
        
        linesRef.current.push({
          x1: m.px,
          y1: m.py,
          x2: m.x,
          y2: m.y,
          width: targetWidth,
          age: 0,
          maxAge: 45,
          color: Math.random() > 0.35 ? primaryColor : secondaryColor,
        });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        const m = mouseRef.current;
        m.px = m.x;
        m.py = m.y;
        m.x = x;
        m.y = y;
        m.speed = Math.sqrt((m.x - m.px) ** 2 + (m.y - m.py) ** 2);

        if (!m.active) {
          m.active = true;
          m.px = x;
          m.py = y;
          return;
        }

        const computedStyles = window.getComputedStyle(document.documentElement);
        const primaryColor = computedStyles.getPropertyValue('--accent-rust').trim() || '#c85a32';
        const secondaryColor = computedStyles.getPropertyValue('--accent-gold').trim() || '#b3893c';
        const targetWidth = Math.max(1.5, 10 - m.speed * 0.2);

        linesRef.current.push({
          x1: m.px,
          y1: m.py,
          x2: m.x,
          y2: m.y,
          width: targetWidth,
          age: 0,
          maxAge: 45,
          color: Math.random() > 0.35 ? primaryColor : secondaryColor,
        });
      }
    };

    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
      heroSection.addEventListener('touchmove', handleTouchMove, { passive: true });
      heroSection.addEventListener('touchend', handleMouseLeave);
    }

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const lines = linesRef.current;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        line.age += 1;

        if (line.age >= line.maxAge) {
          lines.splice(i, 1);
          i--;
          continue;
        }

        const alpha = 1 - line.age / line.maxAge;
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = line.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
        heroSection.removeEventListener('touchmove', handleTouchMove);
        heroSection.removeEventListener('touchend', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="interactive-calligraphy-canvas" 
      aria-hidden="true"
    />
  );
}
