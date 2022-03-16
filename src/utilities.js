import { useEffect, useState } from 'react';

// React hook to determine when element is visible on view port
const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => { observer.disconnect() };
  });

  return isIntersecting;
}

export default useOnScreen;