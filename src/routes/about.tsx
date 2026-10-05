import { createFileRoute } from "@tanstack/react-router";
import { Target, Compass, Award, Users, Clock, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — Egy Power" },
      { name: "description", content: "تعرّف على شركة إيجي باور: رؤيتنا ورسالتنا وقيمنا في مجال التوريدات الكهربائية." },
      { property: "og:title", content: "About — Egy Power" },
      { property: "og:description", content: "Learn about Egy Power: our vision, mission, and values." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const valueIcons = [Award, ShieldCheck, Clock, Users];

function AboutPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t.about.sub} title={t.about.title} sub={t.about.p1} />

      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="rounded-xl border border-border bg-card p-7">
          <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
            <Compass className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-2xl font-bold text-foreground">{t.about.visionTitle}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{t.about.vision}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-7">
          <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
            <Target className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-2xl font-bold text-foreground">{t.about.missionTitle}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{t.about.mission}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 md:px-6">
        <p className="mx-auto max-w-3xl text-center text-base text-muted-foreground leading-relaxed">
          {t.about.p2}
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((v, i) => {
            const Icon = valueIcons[i] ?? Award;
            return (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center">
                <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}