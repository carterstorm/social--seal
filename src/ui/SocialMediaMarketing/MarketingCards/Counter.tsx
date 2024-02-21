import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

type CounterProps = {
  to: number;
};

export function Counter({ to }: CounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(0, to, {
            duration: 1.5,
            onUpdate(value) {
              if (element) {
                element.textContent = value.toFixed(0);
              }
            },
          });
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [to]);

  return <span ref={elementRef} />;
}
