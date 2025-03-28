
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', () => setHidden(true));
    document.addEventListener('mouseenter', () => setHidden(false));

    const interactiveElements = document.querySelectorAll('a, button, .interactive-element');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', () => setHidden(true));
      document.removeEventListener('mouseenter', () => setHidden(false));

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  const cursorClasses = `
    fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference
    transition-transform duration-100 ease-out
    ${clicked ? 'scale-75' : ''}
    ${linkHovered ? 'scale-150' : ''}
    ${hidden ? 'opacity-0' : 'opacity-100'}
    border-2 border-crypto-gold
  `;

  const cursorDotClasses = `
    fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50
    transition-transform duration-300 ease-out
    bg-crypto-gold
    ${clicked ? 'opacity-0' : 'opacity-100'}
    ${hidden ? 'opacity-0' : 'opacity-100'}
  `;

  return (
    <>
      <div 
        className={cursorClasses}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`
        }}
      />
      <div 
        className={cursorDotClasses}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;
