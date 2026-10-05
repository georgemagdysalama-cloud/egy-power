import alexLogo from "@/assets/brands/alex.jpg.asset.json";
import rehabLogo from "@/assets/brands/rehab.png.asset.json";
import wetlandLogo from "@/assets/brands/wetland.gif.asset.json";
import eliosLogo from "@/assets/brands/elios.jpg.asset.json";
import miskLogo from "@/assets/brands/misk.png.asset.json";
import panasonicLogo from "@/assets/brands/panasonic.jpg.asset.json";
import eccLogo from "@/assets/brands/ecc.jpg.asset.json";
import beitLogo from "@/assets/brands/beit.jpg.asset.json";
import hagerLogo from "@/assets/brands/hager.jpg.asset.json";
import mostafaLogo from "@/assets/brands/mostafa.jpg.asset.json";
import legrandLogo from "@/assets/brands/legrand.jpg.asset.json";
import smartLogo from "@/assets/brands/smart.png.asset.json";
import chintLogo from "@/assets/brands/chint.png.asset.json";
import venusLogo from "@/assets/brands/venus.webp.asset.json";
import deltaLogo from "@/assets/brands/delta.webp.asset.json";
import gizaLogo from "@/assets/brands/giza.webp.asset.json";
import elsewedyLogo from "@/assets/brands/elsewedy.webp.asset.json";
import newegaLogo from "@/assets/brands/newega.webp.asset.json";
import schneiderLogo from "@/assets/brands/schneider.webp.asset.json";
import abbLogo from "@/assets/brands/abb.webp.asset.json";
import furseLogo from "@/assets/brands/furse.webp.asset.json";

type Brand = { name: string; color: string; logo?: string; bg?: string; italic?: boolean; font?: string };

const B = {
  elsewedy: { name: "ELSEWEDY", color: "#e30613", logo: elsewedyLogo.url, font: "font-black tracking-tight" },
  giza: { name: "Giza Cables", color: "#1d4f91", logo: gizaLogo.url, font: "font-extrabold" },
  ecc: { name: "ECC Cables", color: "#0a7d3b", logo: eccLogo.url, font: "font-black" },
  misk: { name: "مسك", color: "#7a1f2b", logo: miskLogo.url, font: "font-black" },
  alex: { name: "ALEX", color: "#004b8d", logo: alexLogo.url, font: "font-black tracking-widest" },
  pst: { name: "PST", color: "#d71920", font: "font-black italic" },
  panasonic: { name: "Panasonic", color: "#0041c0", logo: panasonicLogo.url, font: "font-extrabold tracking-tight" },
  wetland: { name: "Wetland", color: "#00875a", logo: wetlandLogo.url, font: "font-bold italic" },
  smart: { name: "Smart Tubes", color: "#f28c00", logo: smartLogo.url, font: "font-extrabold" },
  delta: { name: "DELTA", color: "#c8102e", logo: deltaLogo.url, font: "font-black tracking-wider" },
  novo: { name: "Novo Power", color: "#0b6e99", font: "font-extrabold" },
  beit: { name: "بيت الهندسة", color: "#1f5aa6", logo: beitLogo.url, font: "font-black" },
  rehab: { name: "الرحاب", color: "#00863d", logo: rehabLogo.url, font: "font-black" },
  mostafa: { name: "مصطفى محمود", color: "#b4121b", logo: mostafaLogo.url, font: "font-black" },
  newega: { name: "NEW EGA", color: "#004c97", logo: newegaLogo.url, font: "font-black tracking-wider" },
  egytray: { name: "EGY Tray", color: "#0c2340", font: "font-black" },
  venus: { name: "VENUS", color: "#e2001a", logo: venusLogo.url, font: "font-black tracking-widest" },
  chint: { name: "CHINT", color: "#0055a5", logo: chintLogo.url, font: "font-black tracking-wide" },
  legrand: { name: "legrand", color: "#e30613", logo: legrandLogo.url, font: "font-extrabold" },
  elios: { name: "اليوس", color: "#5b2a86", logo: eliosLogo.url, font: "font-black" },
  schneider: { name: "Schneider Electric", color: "#3dcd58", logo: schneiderLogo.url, font: "font-extrabold" },
  abb: { name: "ABB", color: "#ff000f", logo: abbLogo.url, font: "font-black tracking-widest" },
  hager: { name: "hager", color: "#e30613", logo: hagerLogo.url, font: "font-extrabold" },
  furse: { name: "Furse", color: "#005eb8", logo: furseLogo.url, font: "font-black" },
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
    <div title={brand.name} className={`flex h-20 min-w-28 items-center justify-center rounded-lg border border-border px-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${brand.logo ? "w-40 bg-brand-logo-surface" : "bg-card"}`}>
      {brand.logo ? (
        <img src={brand.logo} alt={brand.name} width={136} height={64} className="h-16 w-full object-contain" />
      ) : (
        <span className={`text-lg leading-none ${brand.font ?? "font-bold"}`} style={{ color: brand.color }}>
          {brand.name}
        </span>
      )}
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
