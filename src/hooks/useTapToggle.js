import { useState, useCallback } from "react";

export default function useTapToggle() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = useCallback((index) => {
    setActiveIndex((current) => (current === index ? null : index));
  }, []);

  const isActive = useCallback(
    (index) => activeIndex === index,
    [activeIndex]
  );

  return { toggle, isActive };
}
