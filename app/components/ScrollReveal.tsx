'use client';
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
  threshold?: number;
}

export function useScrollReveal({
  delay = 0,
  direction = 'fade',
  duration = 600,
  threshold = 0.1,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getTransformStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(30px)';
        case 'down':
          return 'translateY(-30px)';
        case 'left':
          return 'translateX(30px)';
        case 'right':
          return 'translateX(-30px)';
        default:
          return 'none';
      }
    }
    return 'none';
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: getTransformStyle(),
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  };

  return { ref, style };
} 