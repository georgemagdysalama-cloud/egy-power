type Brand = { name: string; color: string; bg?: string; italic?: boolean; font?: string };

const B = {
  elsewedy: { name: "ELSEWEDY", color: "#e30613", font: "font-black tracking-tight" },
  giza: { name: "Giza Cables", color: "#1d4f91", font: "font-extrabold" },
  ecc: { name: "ECC Cables", color: "#0a7d3b", font: "font-black" },
  misk: { name: "مسك", color: "#7a1f2b", font: "font-black" },
  alex: { name: "ALEX", color: "#004b8d", font: "font-black tracking-widest" },
  pst: { name: "PST", color: "#d71920", font: "font-black italic" },
  panasonic: { name: "Panasonic", color: "#0041c0", font: "font-extrabold tracking-tight" },
  wetland: { name: "Wetland", color: "#00875a", font: "font-bold italic" },
  smart: { name: "Smart Tubes", color: "#f28c00", font: "font-extrabold" },
  delta: { name: "DELTA", color: "#c8102e", font: "font-black tracking-wider" },
  novo: { name: "Novo Power", color: "#0b6e99", font: "font-extrabold" },
  beit: { name: "بيت الهندسة", color: "#1f5aa6", font: "font-black" },
  rehab: { name: "الرحاب", color: "#00863d", font: "font-black" },
  mostafa: { name: "مصطفى محمود", color: "#b4121b", font: "font-black" },
  newega: { name: "NEW EGA", color: "#004c97", font: "font-black tracking-wider" },
  egytray: { name: "EGY Tray", color: "#0c2340", font: "font-black" },
  venus: { name: "VENUS", color: "#e2001a", font: "font-black tracking-widest" },
  chint: { name: "CHINT", color: "#0055a5", font: "font-black tracking-wide" },
  legrand: { name: "legrand", color: "#e30613", font: "font-extrabold" },
  elios: { name: "اليوس", color: "#5b2a86", font: "font-black" },
  schneider: { name: "Schneider Electric", color: "#3dcd58", font: "font-extrabold" },
  abb: { name: "ABB", color: "#ff000f", font: "font-black tracking-widest" },
  hager: { name: "hager", color: "#e30613", font: "font-extrabold" },
  furse: { name: "Furse", color: "#005eb8", font: "font-black" },
  erico: { name: "ERICO", color: "#f5a300", font: "font-black tracking-wide" },
} satisfies Record<string, Brand>;

export const productBrands: Record<string, Brand[]> = {
  cables: [B.elsewedy, B.giza, B.ecc, B.misk],
  conduit: [B.alex, B.pst, B.panasonic, B.wetland, B.smart, B.delta, B.novo],
  pvc: [B.beit, B.rehab, B.mostafa, B.newega],
  tray: [B.egytray],
  accessories: [B.elsewedy, B.venus, B.chint, B.legrand, B.elios],
  boxes: [B.schneider, B.abb, B.legrand, B.chint, B.hager, B.venus],
  panels: [B.schneider, B.abb, B.legrand, B.chint],
  flexible: [B.alex, B.novo, B.delta, B.pst],
  earthing: [B.furse, B.erico, B.elsewedy],
};

export const allBrands: Brand[] = Array.from(
  new Map(Object.values(productBrands).flat().map((b) => [b.name, b])).values(),
);

export function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-14 min-w-28 items-center justify-center rounded-lg border border-border bg-card px-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <span className={`text-lg leading-none ${brand.font ?? "font-bold"}`} style={{ color: brand.color }}>
        {brand.name}
      </span>
    </div>
  );
}

export function BrandRow({ productKey, label }: { productKey: string; label: string }) {
  const list = productBrands[productKey];
  if (!list) return null;
  return (
    <div className="mt-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{label}</p>
      <div className="flex flex-wrap gap-3">
        {list.map((b) => <BrandLogo key={b.name} brand={b} />)}
      </div>
    </div>
  );
}
