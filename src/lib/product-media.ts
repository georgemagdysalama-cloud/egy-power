import imgConduit from "@/assets/product-conduit.webp";
import imgFlexible from "@/assets/product-flexible.webp";
import imgFlexible2 from "@/assets/product-flexible-2.jpg";
import imgFlexible3 from "@/assets/product-flexible-3.jpg";
import imgCables from "@/assets/product-cables.webp";
import imgCables2 from "@/assets/cables-option-5.webp";
import imgBoxes from "@/assets/product-boxes.webp";
import imgBoxes2 from "@/assets/product-boxes-2.webp";
import imgBreakers from "@/assets/product-breakers.webp";
import imgAccessories from "@/assets/product-accessories.webp";
import imgAccCouplings from "@/assets/product-acc-couplings.webp";
import imgAccElbows from "@/assets/product-acc-elbows.webp";
import imgAccMetalBoxes from "@/assets/product-acc-metalboxes.webp";
import imgPvc from "@/assets/product-pvc.webp";
import imgTray from "@/assets/product-tray.webp";
import imgEarthing from "@/assets/product-earthing.webp";
import imgEarthing2 from "@/assets/product-earthing-2.webp";
import imgEarthing3 from "@/assets/product-earthing-3.webp";
import imgPanels from "@/assets/product-panels.webp";

export const productImages: Record<string, string> = {
  conduit: imgConduit,
  flexible: imgFlexible,
  cables: imgCables,
  boxes: imgBoxes,
  accessories: imgAccessories,
  pvc: imgPvc,
  tray: imgTray,
  panels: imgPanels,
  earthing: imgEarthing,
};

export const galleries: Record<string, string[]> = {
  conduit: [imgConduit, imgAccCouplings, imgAccElbows, imgAccMetalBoxes],
  flexible: [imgFlexible, imgFlexible2, imgFlexible3],
  cables: [imgCables, imgCables2],
  boxes: [imgBoxes, imgBoxes2, imgBreakers],
  accessories: [imgAccessories],
  pvc: [imgPvc],
  tray: [imgTray],
  panels: [imgPanels],
  earthing: [imgEarthing, imgEarthing2, imgEarthing3],
};

export const productKeys = Object.keys(productImages);

export function galleryFor(key: string): string[] {
  return galleries[key] ?? (productImages[key] ? [productImages[key]] : []);
}
