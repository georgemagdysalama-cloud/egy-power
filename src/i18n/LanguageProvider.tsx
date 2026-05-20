import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./translations";

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void; toggle: () => void };
const LanguageCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("egy-lang") as Lang)) || null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("egy-lang", l);
  };

  return (
    <LanguageCtx.Provider
      value={{ lang, t: translations[lang], setLang, toggle: () => setLang(lang === "ar" ? "en" : "ar") }}
    >
      {children}
    </LanguageCtx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageCtx);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}