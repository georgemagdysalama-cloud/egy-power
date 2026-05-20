export function PageHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        {eyebrow && (
          <span className="inline-block rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-medium text-primary-foreground/85">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-base text-primary-foreground/80">{sub}</p>}
      </div>
    </section>
  );
}