import { Link } from "@tanstack/react-router";
import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary-foreground text-primary">
              <Zap className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">{t.brand}</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75 leading-relaxed">
            {t.footer.tag}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">{t.footer.quickLinks}</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-primary-foreground">{t.nav.home}</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground">{t.nav.about}</Link></li>
            <li><Link to="/products" className="hover:text-primary-foreground">{t.nav.products}</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">{t.nav.services}</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">{t.footer.contactInfo}</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>{t.contact.address}</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><a href="tel:+201000000000" dir="ltr">+20 100 000 0000</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /><a href="mailto:info@egypower.com">info@egypower.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-primary-foreground/65 md:px-6">
          © {year} {t.brand}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}