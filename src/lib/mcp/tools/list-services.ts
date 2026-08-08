import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { translations } from "@/i18n/translations";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the services Egy Power offers to contractors and projects, such as bulk project supply, technical consulting, wholesale pricing, delivery, warranty and after-sales support.",
  inputSchema: {
    language: z
      .enum(["ar", "en"])
      .describe("Language of the returned content: 'ar' for Arabic, 'en' for English."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const services = translations[language].services.list.map((s) => ({
      title: s.title,
      description: s.desc,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});