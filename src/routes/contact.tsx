import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ComponentType } from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — Egy Power" },
      { name: "description", content: "اطلب عرض سعر أو استشارة فنية من فريق إيجي باور." },
      { property: "og:title", content: "Contact — Egy Power" },
      { property: "og:description", content: "Request a quote or technical consultation from the Egy Power team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <SiteLayout>
      <PageHeader eyebrow={t.contact.sub} title={t.contact.title} />

      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:px-6">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t.contact.name} name="name" required />
            <Field label={t.contact.phone} name="phone" type="tel" />
          </div>
          <div className="mt-4">
            <Field label={t.contact.email} name="email" type="email" required />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-foreground">{t.contact.message}</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            <Send className="h-4 w-4" />
            {t.contact.send}
          </button>
          {sent && (
            <p className="mt-4 rounded-md border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-medium text-foreground">
              {t.contact.success}
            </p>
          )}
        </form>

        <aside className="space-y-4">
          <InfoCard icon={MapPin} label={t.contact.addressLabel} value={t.contact.address} />
          <InfoCard icon={Phone} label={t.contact.phoneLabel} value="+20 100 000 0000" ltr />
          <InfoCard icon={Mail} label={t.contact.emailLabel} value="info@egypower.com" ltr />
          <InfoCard icon={Clock} label={t.contact.hoursLabel} value={t.contact.hours} />
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon, label, value, ltr,
}: { icon: ComponentType<{ className?: string }>; label: string; value: string; ltr?: boolean }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-medium text-foreground" dir={ltr ? "ltr" : undefined}>{value}</p>
      </div>
    </div>
  );
}