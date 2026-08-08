import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { translations } from "@/i18n/translations";

export default defineTool({
  name: "list_product_categories",
  title: "List product categories",
  description:
    "List Egy Power's electrical product categories (conduits, flexible tubing, wires & cables, junction boxes & breakers, accessories, PVC, cable tray, metal panels, earthing systems) with descriptions.",
  inputSchema: {
    language: z
      .enum(["ar", "en"])
      .describe("Language of the returned content: 'ar' for Arabic, 'en' for English."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const products = translations[language].products.map((p) => ({
      key: p.key,
      title: p.title,
      description: p.desc,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(products, null, 2) }],
      structuredContent: { products },
    };
  },
});