import { useState } from "react";

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
