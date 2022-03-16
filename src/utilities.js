import { useEffect, useState } from 'react';

// React hook to determine when element is visible on view port
const useOnScreen = (ref, rootMargin='0px') => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { rootMargin });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => { observer.disconnect() };
  });

  return isIntersecting;
}

// React hook for css hover
const useHover = () => {
  const [hovering, setHovering] = useState(false);

  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false)
  }

  return [hovering, onHoverProps];
}

export { useOnScreen, useHover };