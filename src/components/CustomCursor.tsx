
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number, y: number }>>([]);

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

    // Trail effect
    const trailInterval = setInterval(() => {
      setTrailPositions(prev => {
        // Add current position to the start
        const newPositions = [{ ...position }, ...prev.slice(0, 5)];
        return newPositions;
      });
    }, 50);

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
      
      clearInterval(trailInterval);
    };
  }, [position]);

  const cursorClasses = `
    fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference
    transition-transform duration-100 ease-out
    ${clicked ? 'scale-75' : ''}
    ${linkHovered ? 'scale-150' : ''}
    ${hidden ? 'opacity-0' : 'opacity-100'}
  `;

  // Create futuristic cursor with segments
  return (
    <>
      {/* Main cursor */}
      <div 
        className={`${cursorClasses} w-6 h-6 rounded-full border-2 border-crypto-gold`}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          boxShadow: '0 0 10px rgba(202, 169, 104, 0.5)',
          transition: 'transform 0.1s ease-out, width 0.2s, height 0.2s'
        }}
      >
        {/* Inner segments */}
        <div className="absolute inset-1 border border-crypto-gold/50 rounded-full"></div>
      </div>
      
      {/* Cursor dot */}
      <div 
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 bg-crypto-gold
          transition-transform duration-300 ease-out
          ${clicked ? 'opacity-0' : 'opacity-100'}
          ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          boxShadow: '0 0 5px rgba(202, 169, 104, 0.8)'
        }}
      />
      
      {/* Cursor trail */}
      {trailPositions.map((pos, i) => (
        <div 
          key={i}
          className={`fixed w-1.5 h-1.5 rounded-full pointer-events-none z-40 bg-crypto-gold/30`}
          style={{
            transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
            opacity: 1 - (i * 0.15),
            transition: 'opacity 0.5s ease-out'
          }}
        />
      ))}
      
      {/* Scanner line effect when hovering over interactive elements */}
      {linkHovered && (
        <div 
          className="fixed w-20 h-20 pointer-events-none z-40 border border-crypto-gold/50 rounded-full"
          style={{
            transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
            boxShadow: '0 0 15px rgba(202, 169, 104, 0.3)',
            background: 'radial-gradient(circle, rgba(202, 169, 104, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
            animation: 'neon-pulse 2s infinite'
          }}
        >
          <div className="absolute top-1/2 left-0 w-full h-px bg-crypto-gold/30"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-crypto-gold/30"></div>
        </div>
      )}
    </>
  );
};

export default CustomCursor;
