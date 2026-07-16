import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Smooth trail effect
  useEffect(() => {
    let requestRef;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef = requestAnimationFrame(updateTrail);
    };
    requestRef = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef);
  }, [position]);

  // Hook hover states on interactive links
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, .clickable, [role='button']");
      if (target) {
        setLinkHovered(true);
        const hoverText = target.getAttribute("data-cursor-text");
        if (hoverText) {
          setCursorText(hoverText);
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("a, button, .clickable, [role='button']");
      if (target) {
        setLinkHovered(false);
        setCursorText("");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        className={`custom-cursor-dot ${clicked ? 'clicked' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`custom-cursor-ring ${clicked ? 'clicked' : ''} ${linkHovered ? 'hovered' : ''} ${cursorText ? 'has-text' : ''}`}
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      >
        {cursorText && <span className="cursor-inner-text">{cursorText}</span>}
      </div>
    </>
  );
}
