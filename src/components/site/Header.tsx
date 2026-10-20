import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import logo from "@/assets/logo.png";
import companyProfile from "@/assets/EGY_POWER.pdf.asset.json";

export function Header() {
  const { t, toggle, lang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/products", label: t.nav.products },
    { to: "/services", label: t.nav.services },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Egy Power" className="h-14 w-14 rounded-full object-contain md:h-16 md:w-16" />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-foreground">{t.brand}</span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
              {lang === "ar" ? "EGY POWER" : "إيجي باور"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={companyProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {lang === "ar" ? "بروفايل الشركة PDF" : "Company Profile PDF"}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-bold text-foreground transition hover:bg-secondary"
            aria-label="Switch language"
          >
            {t.switchLang}
          </button>
          <Link
            to="/contact"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90 md:inline-flex"
          >
            {t.cta.quote}
          </Link>
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={companyProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {lang === "ar" ? "بروفايل الشركة PDF" : "Company Profile PDF"}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              {t.cta.quote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}