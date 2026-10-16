"use client";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { Bi } from "./data";

export type Lang = "fr" | "en";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "fr", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  // Server and first client render are always French (no hydration mismatch); the saved/browser language applies on mount.
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem("lang"); } catch {}
    const initial: Lang = saved === "fr" || saved === "en" ? saved : navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  }, []);

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** Render a bilingual string in the current language. */
export function L({ v }: { v: Bi }) {
  const { lang } = useLang();
  return <>{v[lang]}</>;
}
