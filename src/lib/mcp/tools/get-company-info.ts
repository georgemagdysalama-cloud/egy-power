import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { translations } from "@/i18n/translations";

const CONTACT = {
  phone: "01016966999",
  whatsapp: "https://wa.me/201016966999",
  website: "https://egy-power.netlify.app",
};

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get Egy Power's public company profile: who we are, vision, mission, values, working hours, address, phone and WhatsApp contact details.",
  inputSchema: {
    language: z
      .enum(["ar", "en"])
      .describe("Language of the returned content: 'ar' for Arabic, 'en' for English."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const t = translations[language];
    const info = {
      name: t.brand,
      tagline: t.hero.title,
      summary: [t.about.p1, t.about.p2],
      vision: t.about.vision,
      mission: t.about.mission,
      values: t.about.values.map((v) => ({ title: v.title, description: v.desc })),
      contact: {
        ...CONTACT,
        address: t.contact.address,
        workingHours: t.contact.hours,
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});