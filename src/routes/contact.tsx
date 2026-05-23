import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ComponentType } from "react";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
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
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const WA_NUMBER = "201016966999";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text =
      `الاسم: ${form.name}\n` +
      `الهاتف: ${form.phone}\n` +
      `الرسالة: ${form.message}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
            <Field
              label={t.contact.name}
              name="name"
              required
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            />
            <Field
              label={t.contact.phone}
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
            />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-foreground">{t.contact.message}</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            إرسال عبر واتساب
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            هيتم تحويلك على واتساب لإرسال طلبك مباشرة لفريق المبيعات.
          </p>
        </form>

        <aside className="space-y-4">
          <InfoCard icon={MapPin} label={t.contact.addressLabel} value={t.contact.address} />
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition hover:opacity-90"
          >
            <InfoCard icon={MessageCircle} label="واتساب" value="+20 101 696 6999" ltr />
          </a>
          <InfoCard icon={Phone} label={t.contact.phoneLabel} value="+20 101 696 6999" ltr />
          <InfoCard icon={Mail} label={t.contact.emailLabel} value="info@egypower.com" ltr />
          <InfoCard icon={Clock} label={t.contact.hoursLabel} value={t.contact.hours} />
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required, value, onChange,
}: { label: string; name: string; type?: string; required?: boolean; value?: string; onChange?: (v: string) => void }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
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