import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageProvider";
import { BrandRow } from "@/components/site/BrandLogos";
import { galleryFor, productKeys } from "@/lib/product-media";

export const Route = createFileRoute("/product/$key")({
  head: () => ({
    meta: [
      { title: "تفاصيل المنتج — Egy Power" },
      { name: "description", content: "تفاصيل فئة المنتج، الصور، والعلامات التجارية المعتمدة من إيجي باور، مع إمكانية طلب عرض سعر عبر واتساب." },
      { property: "og:title", content: "Product Details — Egy Power" },
      { property: "og:description", content: "Product category details, photos and approved brands with a WhatsApp quote button." },
      { property: "og:url", content: "/product" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/product" }],
  }),
  beforeLoad: ({ params }) => {
    if (!productKeys.includes(params.key)) throw redirect({ to: "/products" });
  },
  component: ProductDetail,
});

const WA_NUMBER = "201016966999";

function ProductDetail() {
  const { key } = Route.useParams();
  const { t, lang } = useLang();
  const product = t.products.find((p) => p.key === key)!;
  const imgs = galleryFor(key);
  const [idx, setIdx] = useState(0);
  const brandLabel = lang === "ar" ? "العلامات التجارية المعتمدة" : "Approved Brands";
  const backLabel = lang === "ar" ? "كل المنتجات" : "All Products";
  const waText =
    lang === "ar"
      ? `مرحباً، أرغب في طلب عرض سعر لمنتج: ${product.title}\nhttps://egy-power.lovable.app/product/${key}`
      : `Hello, I would like a quote for: ${product.title}\nhttps://egy-power.lovable.app/product/${key}`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;

  return (
    <SiteLayout>
      <PageHeader eyebrow={t.sections.productsTitle} title={product.title} />

      <section className="container mx-auto grid items-start gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div>
          <div className="overflow-hidden rounded-2xl border border-border bg-primary/5">
            <img
              src={imgs[idx % imgs.length]}
              alt={product.title}
              width={800}
              height={600}
              loading="eager"
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          {imgs.length > 1 && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {imgs.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`${product.title} ${i + 1}`}
                  className={`overflow-hidden rounded-lg border-2 transition hover:opacity-90 ${i === idx ? "border-primary" : "border-transparent"}`}
                >
                  <img
                    src={src}
                    alt=""
                    width={300}
                    height={225}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="mt-4 text-muted-foreground leading-relaxed">{product.desc}</p>
          <BrandRow productKey={key} label={brandLabel} />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-[var(--shadow-elegant)] transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              {t.cta.quote}
            </a>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              {backLabel}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
