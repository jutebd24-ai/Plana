import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollY(window.pageYOffset);
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", updateScrollPosition);
    updateScrollPosition();

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return { scrollY, isVisible };
}

export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px"
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, threshold, rootMargin]);

  return isVisible;
}
