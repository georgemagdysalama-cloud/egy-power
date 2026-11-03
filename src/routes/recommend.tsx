import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { AlertCircle, Loader2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/i18n/LanguageProvider";
import { recommendProducts, type ProductFinderResponse } from "@/lib/recommend.functions";
import { productImages } from "@/lib/product-media";

export const Route = createFileRoute("/recommend")({
  head: () => ({
    meta: [
      { title: "اقترح منتجاتك — Egy Power" },
      {
        name: "description",
        content:
          "اكتب احتياجك من مستلزمات الكهرباء وسنقترح لك الفئات المناسبة من كتالوج إيجي باور بمساعدة الذكاء الاصطناعي.",
      },
      {
        property: "og:title",
        content: "Product Finder — Egy Power",
      },
      {
        property: "og:description",
        content: "Describe your electrical supplies needs and get instant matching product suggestions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/recommend" }],
  }),
  component: RecommendPage,
});

function RecommendPage() {
  const { t, lang } = useLang();
  const recommend = useServerFn(recommendProducts);

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [response, setResponse] = useState<ProductFinderResponse | null>(null);

  async function submit() {
    const text = description.trim();
    if (text.length < 5 || status === "loading") return;
    setStatus("loading");
    setResponse(null);
    try {
      const res = (await recommend({ data: { description: text, lang } })) as ProductFinderResponse;
      setResponse(res);
      setStatus(res.ok ? "done" : "error");
    } catch {
      setResponse({ ok: false, error: "Something went wrong. Please try again.", retryable: true });
      setStatus("error");
    }
  }

  const titleFor = (key: string) => t.products.find((p) => p.key === key)?.title ?? key;
  const quoteText = () => {
    const keys = (response?.ok ? response.recommendations.map((r) => r.key) : []).filter(
      (k): k is (typeof t.products)[number]["key"] => k in productImages,
    );
    const items = keys.map((k) => `• ${titleFor(k)}`).join("\n");
    const header = lang === "ar" ? "طلب عرض سعر للمنتجات المقترحة:\n" : "Quote request for the suggested products:\n";
    return `${header}${items}`;
  };

  return (
    <SiteLayout>
      <PageHeader eyebrow={t.nav.recommend} title={t.finder.title} sub={t.finder.sub} />

      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.finder.placeholder}
              rows={5}
              maxLength={2000}
              className="w-full resize-none rounded-xl border border-border bg-background p-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
            />

            <div className="mt-4">
              <span className="text-sm font-semibold text-muted-foreground">{t.finder.examplesLabel}</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {t.finder.examples.map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setDescription(ex)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={submit}
                disabled={status === "loading" || description.trim().length < 5}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="h-4 w-4" />
                )}
                {status === "loading" ? t.finder.loading : t.finder.submit}
              </button>
              {(status === "done" || status === "error") && (
                <button
                  onClick={() => {
                    setDescription("");
                    setResponse(null);
                    setStatus("idle");
                  }}
                  className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  {t.finder.startOver}
                </button>
              )}
            </div>
          </div>

          {status === "error" && response && !response.ok && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div>
                <p className="text-sm font-medium text-foreground">{response.error}</p>
                {response.retryable && (
                  <button onClick={submit} className="mt-1 text-xs font-semibold text-primary underline">
                    {t.finder.submit}
                  </button>
                )}
              </div>
            </div>
          )}

          {status === "done" && response && response.ok && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground">{t.finder.resultsTitle}</h2>

              {response.recommendations.length === 0 ? (
                <p className="mt-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                  {response.summary || t.finder.emptyNote}
                </p>
              ) : (
                <>
                  {response.summary && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{response.summary}</p>
                  )}
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {response.recommendations.map((r) => {
                      const product = t.products.find((p) => p.key === r.key);
                      if (!product) return null;
                      return (
                        <article
                          key={r.key}
                          className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                        >
                          <Link to="/product/$key" params={{ key: r.key }} className="block">
                            <img
                              src={productImages[r.key]}
                              alt={product.title}
                              width={800}
                              height={600}
                              loading="lazy"
                              className="aspect-[4/3] w-full object-cover transition hover:opacity-90"
                            />
                          </Link>
                          <div className="flex flex-1 flex-col p-5">
                            <Link
                              to="/product/$key"
                              params={{ key: r.key }}
                              className="text-lg font-bold text-foreground transition hover:text-primary"
                            >
                              {product.title}
                            </Link>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.reason}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={`https://wa.me/201016966999?text=${encodeURIComponent(quoteText())}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:opacity-90"
                    >
                      {t.finder.quote}
                    </a>
                    <p className="text-xs text-muted-foreground">{t.finder.disclaimer}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
