"use client";
import { createElement, useEffect, useRef, type ReactNode } from "react";

type Tag = "div" | "li" | "section" | "h2" | "dl" | "p" | "form";

/** Fade/slide/unblur an element in when it scrolls into view (once). Styles live in globals.css (.reveal). */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    { ref, className: `reveal ${className}`, style: { "--d": `${delay}ms` } as React.CSSProperties },
    children,
  );
}
