import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHasBeenInView(true);
        }
      },
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  // Retorna true se já foi visto pelo menos uma vez
  return [ref, hasBeenInView] as const;
} 