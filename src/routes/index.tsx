import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, BadgeDollarSign, Headphones } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useLang } from "@/i18n/LanguageProvider";
import hero from "@/assets/hero-electrical.jpg";
import imgConduit from "@/assets/product-conduit.webp";
import imgFlexible from "@/assets/product-flexible.webp";
import imgCables from "@/assets/product-cables.webp";
import imgBoxes from "@/assets/product-boxes.webp";
import imgAccessories from "@/assets/product-accessories.webp";
import imgPvc from "@/assets/product-pvc.webp";
import imgTray from "@/assets/product-tray.webp";
import imgEarthing from "@/assets/product-earthing.webp";
import projCapital from "@/assets/project-capital.jpg.asset.json";
import projBeach from "@/assets/project-beach-towers.jpg.asset.json";
import projRixoz from "@/assets/project-rixoz.jpg.asset.json";
import projResidential from "@/assets/project-residential.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Egy Power — توريدات كهربائية للمشروعات والمقاولات" },
      { name: "description", content: "إيجي باور: توريد مواسير EMT و RSC، فلكسبل، أسلاك وكابلات، صناديق توصيل وإكسسوارات كهربائية." },
      { property: "og:title", content: "Egy Power — Electrical Supplies" },
      { property: "og:description", content: "Your trusted partner in electrical materials for projects." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const productImages: Record<string, string> = {
  conduit: imgConduit,
  flexible: imgFlexible,
  cables: imgCables,
  boxes: imgBoxes,
  accessories: imgAccessories,
  pvc: imgPvc,
  tray: imgTray,
  earthing: imgEarthing,
};

const featureIcons = [ShieldCheck, Truck, BadgeDollarSign, Headphones];

const projectImages: Record<string, string> = {
  capital: projCapital.url,
  beach: projBeach.url,
  rixoz: projRixoz.url,
  residential: projResidential.url,
};

function Index() {
  const { t } = useLang();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <img
          src={hero}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="relative container mx-auto grid gap-10 px-4 py-20 md:grid-cols-[1.1fr_1fr] md:px-6 md:py-28 lg:py-32">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-3 py-1 text-xs font-medium text-primary-foreground/85">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))] [background:oklch(0.72_0.09_195)]" />
              {t.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-3 text-sm font-bold text-primary transition hover:opacity-90"
              >
                {t.cta.explore}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                {t.cta.quote}
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6">
              {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s) => (
                <div key={s}>
                  <dt className="text-base font-bold text-primary-foreground">{s}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-4 rounded-3xl bg-primary-foreground/5 blur-2xl" />
            <img
              src={hero}
              alt="Egy Power electrical supplies warehouse"
              width={800}
              height={512}
              className="relative aspect-[5/4] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t.sections.featuresTitle}</h2>
          <p className="mt-3 text-muted-foreground">{t.sections.featuresSub}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.map((f, i) => {
            const Icon = featureIcons[i] ?? ShieldCheck;
            return (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Products */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t.sections.productsTitle}</h2>
            <p className="mt-3 text-muted-foreground">{t.sections.productsSub}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.products.map((p) => (
              <article key={p.key} className="overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-[var(--shadow-elegant)]">
                <div className="aspect-[4/3] overflow-hidden bg-primary/5">
                  <img
                    src={productImages[p.key]}
                    alt={p.title}
                    width={800}
                    height={600}
                    loading={p.key === "pvc" || p.key === "tray" || p.key === "earthing" ? "eager" : "lazy"}
                    fetchPriority={p.key === "pvc" || p.key === "tray" || p.key === "earthing" ? "high" : "auto"}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              {t.cta.learnMore} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t.sections.projectsTitle}</h2>
          <p className="mt-3 text-muted-foreground">{t.sections.projectsSub}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.projects.map((p) => (
            <article key={p.key} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/3] overflow-hidden bg-primary/5">
                <img
                  src={projectImages[p.key]}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div
          className="relative overflow-hidden rounded-2xl border border-border p-10 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-14"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="relative grid items-center gap-6 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{t.sections.ctaTitle}</h2>
              <p className="mt-3 text-primary-foreground/85">{t.sections.ctaSub}</p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition hover:opacity-90"
              >
                {t.cta.contact} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
