import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageProvider";
import { BrandRow } from "@/components/site/BrandLogos";
import { productImages, galleries } from "@/lib/product-media";


export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "المنتجات — Egy Power" },
      { name: "description", content: "مواسير EMT و RSC، فلكسبل، أسلاك وكابلات، صناديق توصيل، وإكسسوارات كهربائية." },
      { property: "og:title", content: "Products — Egy Power" },
      { property: "og:description", content: "EMT/RSC conduits, flexible tubing, wires, junction boxes, accessories." },
      { property: "og:url", content: "/products" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});


function ProductsPage() {
  const { t, lang } = useLang();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t.sections.productsTitle} title={t.nav.products} sub={t.sections.productsSub} />

      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-12">
          {t.products.map((p, i) => (
            <article
              key={p.key}
              className="grid items-center gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-8"
            >
              <Link
                to="/product/$key"
                params={{ key: p.key }}
                className={`${i % 2 === 1 ? "md:order-2" : ""} block transition hover:opacity-90`}
              >

                {galleries[p.key] ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2 overflow-hidden rounded-xl">
                      <img
                        src={galleries[p.key][0]}
                        alt={p.title}
                        width={800}
                        height={600}
                        loading={p.key === "earthing" ? "eager" : "lazy"}
                        fetchPriority={p.key === "earthing" ? "high" : "auto"}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                    {galleries[p.key].slice(1).map((src, idx) => (
                      <div key={idx} className="overflow-hidden rounded-xl">
                        <img
                          src={src}
                          alt={`${p.title} ${idx + 2}`}
                          width={400}
                          height={300}
                          loading={p.key === "earthing" ? "eager" : "lazy"}
                          fetchPriority={p.key === "earthing" ? "high" : "auto"}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={productImages[p.key]}
                      alt={p.title}
                      width={800}
                      height={600}
                      loading={p.key === "pvc" || p.key === "tray" ? "eager" : "lazy"}
                      fetchPriority={p.key === "pvc" || p.key === "tray" ? "high" : "auto"}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                )}
              </Link>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  0{i + 1}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">{p.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <BrandRow productKey={p.key} label={lang === "ar" ? "العلامات التجارية المعتمدة" : "Approved Brands"} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}