"use client";
import { useState } from "react";
import { Home, Folder, Briefcase, Wrench, PenSquare } from "lucide-react";
import { useLang } from "@/lib/i18n";

const items = [
  { id: "home", label: "Home", I: Home },
  { id: "projects", label: "Projects", I: Folder },
  { id: "experience", label: "Experience", I: Briefcase },
  { id: "tools", label: "Tools", I: Wrench },
  { id: "contact", label: "Contact", I: PenSquare },
];

/**
 * Each icon "opens" a section like a separate page: the sections before it are removed from the layout
 * (see html[data-from] rules in globals.css), so the page simply starts there. Scrolling up at the top
 * is then the browser's normal overscroll/refresh, and the section above can never be pulled into view.
 * The bar scrolls away with the page on Home and pins to the screen top once a section is opened.
 */
export function TopNav() {
  const [active, setActive] = useState("home");
  const { lang, setLang } = useLang();

  function go(id: string) {
    setActive(id);
    document.documentElement.dataset.from = id;
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <nav
      aria-label="Primary"
      className={`${active === "home" ? "absolute" : "fixed"} left-1/2 top-5 z-50 -translate-x-1/2 rounded-xl bg-[#1c1b1b]/95 px-2 py-1 backdrop-blur lg:px-1.5 lg:py-0.5`}
    >
      <ul className="flex items-center text-white/80">
        {items.map(({ id, label, I }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-label={label}
              aria-current={active === id ? "page" : undefined}
              title={label}
              onClick={(e) => { e.preventDefault(); go(id); }}
              className={`flex h-12 w-12 touch-manipulation items-center justify-center rounded-lg transition hover:text-brand active:scale-90 lg:h-10 lg:w-10 ${active === id ? "text-brand" : ""}`}
            >
              <I className="h-5 w-5 lg:h-[15px] lg:w-[15px]" />
            </a>
          </li>
        ))}
        <li className="ml-1 border-l border-white/10 pl-1">
          <button
            type="button"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
            title={lang === "fr" ? "English" : "Français"}
            className="flex h-12 w-11 touch-manipulation items-center justify-center rounded-lg text-[12px] font-bold tracking-wide transition hover:text-brand active:scale-90 lg:h-10 lg:w-9 lg:text-[10px]"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
