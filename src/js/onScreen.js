import { useState, useEffect } from 'react';

export default function onScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(([entry]) => {
    setIntersecting(entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.unobserve(ref.current);
    }
  }, observerOptions);

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
