"use client";
import { useEffect, useRef, useState } from "react";
import { Home, Folder, Briefcase, Wrench, PenSquare } from "lucide-react";

const items = [
  { id: "home", label: "Home", I: Home },
  { id: "projects", label: "Projects", I: Folder },
  { id: "experience", label: "Experience", I: Briefcase },
  { id: "tools", label: "Tools", I: Wrench },
  { id: "contact", label: "Contact", I: PenSquare },
];

const OFFSET = 90; // space kept above the section title (under the nav bar)

/**
 * Icons jump to a section and make it the "floor": the page can scroll down
 * but not back up past that section until another icon is clicked.
 * Clicking "Home" resets the floor to the very top.
 */
export function TopNav() {
  const active = useRef<string | null>(null);

  // Current floor in scrollY units, measured live so it survives resizes/zoom.
  const floor = () => {
    if (!active.current || active.current === "home") return 0;
    const el = document.getElementById(active.current);
    return el ? Math.max(0, el.getBoundingClientRect().top + window.scrollY - OFFSET) : 0;
  };

  useEffect(() => {
    const clamp = () => {
      const f = floor();
      if (window.scrollY < f - 1) window.scrollTo({ top: f, behavior: "instant" });
    };
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY < 0 && window.scrollY <= floor() + 1) e.preventDefault();
    };
    let lastY = 0;
    const onTouchStart = (e: TouchEvent) => { lastY = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      if (y > lastY && window.scrollY <= floor() + 1) e.preventDefault(); // finger down = scroll up
      lastY = y;
    };
    window.addEventListener("scroll", clamp, { passive: true });
    window.addEventListener("resize", clamp);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("scroll", clamp);
      window.removeEventListener("resize", clamp);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  // At the very top (Home) the bar scrolls away with the page; after an icon jump it pins to the screen top.
  const [pinned, setPinned] = useState(false);

  function go(id: string) {
    active.current = id;
    setPinned(id !== "home");
    window.scrollTo({ top: floor(), behavior: "instant" });
  }

  return (
    <nav aria-label="Primary" className={`${pinned ? "fixed" : "absolute"} left-1/2 top-5 z-50 -translate-x-1/2 rounded-xl bg-[#1c1b1b]/90 px-6 py-3.5 backdrop-blur lg:px-5 lg:py-3`}>
      <ul className="flex items-center gap-7 text-white/80 lg:gap-6">
        {items.map(({ id, label, I }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-label={label}
              title={label}
              onClick={(e) => { e.preventDefault(); go(id); }}
              className="block transition hover:text-brand"
            >
              <I size={18} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
