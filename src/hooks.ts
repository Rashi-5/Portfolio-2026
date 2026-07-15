import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal: fades + lifts an element into place the first time it enters
 * the viewport. Returns a ref to attach and the reveal style object.
 * Mirrors the reveal() behavior from the original bundle, with a fallback
 * timer so nothing stays hidden if IntersectionObserver never fires.
 */
export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOn(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    const fallback = setTimeout(() => setOn(true), 1200);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const style: React.CSSProperties = {
    opacity: on ? 1 : 0,
    transform: `translateY(${on ? 0 : 26}px)`,
    transition:
      "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)",
  };

  return { ref, style };
}

/** Tracks scrollY (throttled via rAF) for parallax and nav-shadow effects. */
export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return scrollY;
}
