import React, { useEffect, useState } from "react";

// hook to determine when element is visible on view port
export function useOnScreen(
  ref: React.MutableRefObject<HTMLElement>,
  rootMargin = "0px"
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  });

  return isIntersecting;
}

// hook for css hover
interface IOnHoverProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function useHover(): [boolean, IOnHoverProps] {
  const [hovering, setHovering] = useState(false);

  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };

  return [hovering, onHoverProps];
}
