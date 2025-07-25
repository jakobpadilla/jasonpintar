"use client";

import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  initialDisplay?: boolean;
}

export const useTypewriter = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  loop = false,
  initialDisplay = false
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState(initialDisplay ? text : '');
  const [currentIndex, setCurrentIndex] = useState(initialDisplay ? text.length : 0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!text) return;

    if (initialDisplay) {
      setDisplayText(text);
      setCurrentIndex(text.length);
      return;
    }

    const timeout = setTimeout(() => {
      setIsTyping(true);
      setHasTriggered(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, initialDisplay]);

  useEffect(() => {
    if (!isTyping || !text || !hasTriggered) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      if (loop) {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setIsTyping(true);
        }, 2000);
      }
    }
  }, [currentIndex, isTyping, text, speed, loop, hasTriggered]);

  const triggerAnimation = () => {
    if (!hasTriggered && !initialDisplay) {
      setDisplayText('');
      setCurrentIndex(0);
      setIsTyping(true);
      setHasTriggered(true);
    }
  };

  return { displayText, isTyping, triggerAnimation };
}; 