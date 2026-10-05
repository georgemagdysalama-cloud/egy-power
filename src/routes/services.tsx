import { createFileRoute } from "@tanstack/react-router";
import { Truck, Wrench, BadgePercent, MapPin, ShieldCheck, LifeBuoy } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات — Egy Power" },
      { name: "description", content: "توريد للمشروعات، استشارات فنية، أسعار جملة، وتوصيل سريع في كل مصر." },
      { property: "og:title", content: "Services — Egy Power" },
      { property: "og:description", content: "Project supply, technical consulting, wholesale pricing, fast delivery." },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const icons = [Truck, Wrench, BadgePercent, MapPin, ShieldCheck, LifeBuoy];

function ServicesPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t.services.sub} title={t.services.title} />
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.list.map((s, i) => {
            const Icon = icons[i] ?? Truck;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/5 transition group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}