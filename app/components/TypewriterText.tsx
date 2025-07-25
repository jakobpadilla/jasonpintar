"use client";

import React, { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  initialDisplay?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  className = '',
  showCursor = true,
  initialDisplay = false
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { displayText, isTyping, triggerAnimation } = useTypewriter({
    text,
    speed,
    delay,
    loop,
    initialDisplay
  });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [triggerAnimation]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {showCursor && isTyping && !initialDisplay && (
        <span className="inline-block w-0.5 bg-current animate-pulse ml-1" style={{ height: '1em' }} />
      )}
    </span>
  );
}; 