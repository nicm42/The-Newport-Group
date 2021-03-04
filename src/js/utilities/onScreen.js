import { useState, useEffect } from 'react';

const onScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(([entry]) => {
    setIntersecting(entry.isIntersecting);
    if (entry.isIntersecting) {
      console.log(entry);
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
};

export default onScreen;
